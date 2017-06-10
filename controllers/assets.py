from flask_assets import Bundle, Environment
from main import app

bundles = {

    'blockpy_js': Bundle(
        'libs/jquery.hotkeys.js',
        'libs/jquery.multi-select.js',
        'libs/d3.min.js',
        'libs/math.0.19.0.min.js',
        'libs/bootstrap-wysiwyg.js',
        "libs/mindmup-editabletable.js",
        "libs/codemirror/codemirror.js",
        "libs/codemirror/python.js",
        "libs/codemirror/htmlmixed.js",
        "libs/codemirror/xml.js",
        "libs/summernote/summernote.min.js",
        "libs/summernote/summernote-ext-hint.js",
        "libs/summernote/summernote-ext-video.js",
        "libs/crime_data.js",
        "blockly/blockly_compressed.js",
        #'blockly/blockly_uncompressed.js',
        "blockly/blocks_compressed.js",
        "blockly/python_compressed.js",
        "blockly/pseudo_compressed.js",
        "blockly/javascript_compressed.js",
        "blockly/msg/js/en.js",
        "skulpt/dist/skulpt.min.js",
        "skulpt/dist/skulpt-stdlib.js",
        #"analyzer/analyzer.js",
        #"analyzer/python_errors.js",
        #"converter/python_to_blockly.js",
        #"converter/variable_tracker.js",
        "blockpy_lib/blockpy.js",
        #"converter/renderBlocklyToPng.js",
        output='gen/blockpy.js'),

    'blockpy_css': Bundle(
        'libs/codemirror/codemirror.css',
        'libs/font-awesome.min.css',
        'libs/summernote/summernote.css',
        'libs/multi-select.css',
        'blockpy_lib/blockpy.css',
        output='gen/blockpy.css'),
        
    'blockly_maze_css': Bundle(
        'blockly-games/common/common.css',
        'blockly-games/maze/style.css',
        output='gen/blockly_maze.css'),
    'blockly_maze_js': Bundle(
        'blockly-games/common/boot.js',
        'blockly-games/common/storage.js',
        output='gen/blockly_maze.js'),
        
    'code_explaining_js': Bundle(
        "libs/codemirror/codemirror.js",
        "libs/codemirror/python.js",
        "libs/codemirror/htmlmixed.js",
        "libs/codemirror/xml.js",
        "libs/jquery.ui.widget.js",
        "libs/summernote/summernote.min.js",
        "libs/summernote/summernote-ext-hint.js",
        "libs/summernote/summernote-ext-video.js",
        #"libs/knockout-3.4.0.js",
        "libs/jquery.fileupload.js",
        output='gen/code_explaining.js'),
    'code_explaining_css': Bundle(
        'libs/codemirror/codemirror.css',
        'libs/font-awesome.min.css',
        "libs/summernote/summernote.css",
        "libs/jquery.fileupload.css",
        output='gen/code_explaining.css'),
}

assets = Environment(app)

assets.register(bundles)