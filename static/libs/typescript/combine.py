import re
import os

raw_d_ts_files = [
    name for name in os.listdir('d_ts_files')
    if name.endswith('.ts')
    #"es6",
    #"es5",
    #"es2015.core",
    #"es2015.collection",
    #"es2015.symbol",
    #"es2015.symbol.wellknown",
    #"es2015.iterable",
    #"es2015.generator",
    #"es2015.promise",
    #"es2015.proxy",
    #"es2015.reflect",
    #"dom.generated",
    #"dom.iterable.generated",
    #"webworker.importscripts",
    #"scripthost"
]

files = {}
for raw_d_ts_file in raw_d_ts_files:
    with open("d_ts_files/"+raw_d_ts_file, encoding='utf-8') as raw_file:
        contents = raw_file.read().replace("`", "\`").replace("${", "\${")
        #contents = re.sub(r'\/\/\/ <reference lib=(.*)" \/>', '', contents)
        files[""+raw_d_ts_file] = contents

with open('raw_kettle_compiler_dts.js', 'w', encoding='utf-8') as output:
    output.write("const RAW_D_TS_FILES = {\n")
    for name, contents in files.items():
        output.write(f'    "{name}": `{contents}`,\n')
    output.write("\n};")
