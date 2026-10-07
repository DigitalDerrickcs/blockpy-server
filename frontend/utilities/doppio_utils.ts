import * as BrowserFS from 'browserfs';
import * as async from "async";

export function recursiveCopy(srcFolder: string, destFolder: string, progressCb: (src: string, dest: string, size: any) => void, cb: (err?: any) => void): void {
  const path = BrowserFS.BFSRequire('path'),
  fs = BrowserFS.BFSRequire('fs');
  let copyFile = (srcFile: string, destFile: string, cb2: (err?: any) => void) => {
    fs.readFile(srcFile, (e: any, data?: Buffer) => {
      if (e) {
        cb2(e);
      } else {
        fs.writeFile(destFile, data, cb2);
      }
    });
  }


  function processDir(srcFolder: string, destFolder: string, cb: (err?: any) => void) {
    fs.mkdir(destFolder, (err?: NodeJS.ErrnoException) => {
      // Ignore EEXIST.
      if (err && err.code !== 'EEXIST') {
        cb(err);
      } else {
        fs.readdir(srcFolder, (e: NodeJS.ErrnoException, items: string[]) => {
          if (e) {
            cb(e);
          } else {
            async.each(items, (item: string, next: (err?: any) => void) => {
              var srcItem = path.resolve(srcFolder, item),
                destItem = path.resolve(destFolder, item);
              fs.stat(srcItem, (e: NodeJS.ErrnoException, stat?: any) => {
                if (e) {
                  cb(e);
                } else {
                  if (stat.isDirectory()) {
                    processDir(srcItem, destItem, next);
                  } else {
                    progressCb(srcItem, destItem, stat);
                    copyFile(srcItem, destItem, next);
                  }
                }
              });
            }, cb);
          }
        });
      }
    });
  }

  processDir(srcFolder, destFolder, cb);
}