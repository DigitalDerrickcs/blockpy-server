"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveCopy = void 0;
var BrowserFS = require("browserfs");
var async = require("async");
function recursiveCopy(srcFolder, destFolder, progressCb, cb) {
    var path = BrowserFS.BFSRequire('path'), fs = BrowserFS.BFSRequire('fs');
    var copyFile = function (srcFile, destFile, cb2) {
        fs.readFile(srcFile, function (e, data) {
            if (e) {
                cb2(e);
            }
            else {
                fs.writeFile(destFile, data, cb2);
            }
        });
    };
    function processDir(srcFolder, destFolder, cb) {
        fs.mkdir(destFolder, function (err) {
            // Ignore EEXIST.
            if (err && err.code !== 'EEXIST') {
                cb(err);
            }
            else {
                fs.readdir(srcFolder, function (e, items) {
                    if (e) {
                        cb(e);
                    }
                    else {
                        async.each(items, function (item, next) {
                            var srcItem = path.resolve(srcFolder, item), destItem = path.resolve(destFolder, item);
                            fs.stat(srcItem, function (e, stat) {
                                if (e) {
                                    cb(e);
                                }
                                else {
                                    if (stat.isDirectory()) {
                                        processDir(srcItem, destItem, next);
                                    }
                                    else {
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
exports.recursiveCopy = recursiveCopy;
