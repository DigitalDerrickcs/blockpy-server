(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("ko"));
	else if(typeof define === 'function' && define.amd)
		define("blockpy", ["jQuery", "ko"], factory);
	else if(typeof exports === 'object')
		exports["blockpy"] = factory(require("jQuery"), require("ko"));
	else
		root["blockpy"] = factory(root["jQuery"], root["ko"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_knockout__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blockpy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blockpy.js":
/*!************************!*\
  !*** ./src/blockpy.js ***!
  \************************/
/*! exports provided: _IMPORTED_COMPLETE_DATASETS, _IMPORTED_DATASETS, BlockPy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(ko) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPy", function() { return BlockPy; });
/* harmony import */ var _css_blockpy_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/blockpy.css */ "./src/css/blockpy.css");
/* harmony import */ var _css_blockpy_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_blockpy_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_bootstrap_retheme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/bootstrap_retheme.css */ "./src/css/bootstrap_retheme.css");
/* harmony import */ var _css_bootstrap_retheme_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_bootstrap_retheme_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! storage.js */ "./src/storage.js");
/* harmony import */ var editors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! editors.js */ "./src/editors.js");
/* harmony import */ var editor_python_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! editor/python.js */ "./src/editor/python.js");
/* harmony import */ var server_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! server.js */ "./src/server.js");
/* harmony import */ var interface_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! interface.js */ "./src/interface.js");
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./files */ "./src/files.js");
/* harmony import */ var _editor_abstract_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor/abstract_editor */ "./src/editor/abstract_editor.js");
/* harmony import */ var engine_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine.js */ "./src/engine.js");
/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trace */ "./src/trace.js");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./console */ "./src/console.js");
/* harmony import */ var feedback_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! feedback.js */ "./src/feedback.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");
/* harmony import */ var _editor_assignment_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./editor/assignment_settings */ "./src/editor/assignment_settings.js");
/* harmony import */ var _corgis__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./corgis */ "./src/corgis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_IMPORTED_COMPLETE_DATASETS", function() { return _corgis__WEBPACK_IMPORTED_MODULE_16__["_IMPORTED_COMPLETE_DATASETS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_IMPORTED_DATASETS", function() { return _corgis__WEBPACK_IMPORTED_MODULE_16__["_IMPORTED_DATASETS"]; });

/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./history */ "./src/history.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






















/**
 * Major entry point for creating a BlockPy instance
 */

var BlockPy =
/*#__PURE__*/
function () {
  /**
   * @param {Object} configuration - User level settings (e.g., what editor mode, whether to mute semantic errors, etc.)
   * @param {Object} assignment - Assignment level settings (data about the loaded assignment, user, submission, etc.)
   * @param {Object} submission - Includes the source code of any programs to be loaded
   */
  function BlockPy(configuration, assignment, submission) {
    _classCallCheck(this, BlockPy);

    this.initModel(configuration);

    if (assignment !== undefined) {
      this.setAssignment(configuration, assignment, submission);
    }

    this.initMain();
  }
  /**
   * Initializes the BlockPy object by initializing its interface,
   * model, and components.
   *
   */


  _createClass(BlockPy, [{
    key: "initMain",
    value: function initMain() {
      this.initUtilities();
      this.initModelMethods();
      this.turnOnHacks();
      this.initInterface();
      this.applyModel();
      this.initComponents();
      this.start();
    }
  }, {
    key: "getSetting",

    /**
     * Retrieves a default value or
     * @param {string} key - the key to look up a value for
     * @param {Object} defaultValue - if the key is not found anywhere, use this value
     */
    value: function getSetting(key, defaultValue) {
      if (key in this.initialConfiguration_) {
        return this.initialConfiguration_[key];
      } else if (this.localSettings_.has(key)) {
        return this.localSettings_.get(key);
      } else {
        return defaultValue;
      }
    }
    /**
     * Initializes the model to its defaults.
     *
     * Categories:
     *   * user: values for the current user (stored to server)
     *   * assignment: values for the current assignment (stored to server)
     *   * submission: values for the current submission (stored to server)
     *   * display: flags related to current visibility (stored to localSettings)
     *   * status: messages related to current status (not stored)
     *   * execution: values related to last run (not stored)
     *   * configuration: constant values related to setup (not stored)
     */

  }, {
    key: "initModel",
    value: function initModel(configuration) {
      // Connect to local storage
      this.localSettings_ = new storage_js__WEBPACK_IMPORTED_MODULE_3__["LocalStorageWrapper"]("localSettings");
      this.initialConfiguration_ = configuration;
      this.model = {
        user: {
          id: ko.observable(configuration["user.id"]),
          name: ko.observable(configuration["user.name"]),

          /**
           * Whether you are an Owner (can modify the assignment), Grader (can view
           * the assignments' information) or Student (can not see any instructor stuff).
           * @type {bool}
           */
          role: ko.observable(this.getSetting("user.role", "owner")),

          /**
           * Current course for this user
           */
          courseId: ko.observable(configuration["user.course_id"]),

          /**
           * Current assignment group that this user is inside
           */
          groupId: ko.observable(configuration["user.group_id"])
        },
        assignment: {
          id: ko.observable(null),
          name: ko.observable("Scratch Canvas"),
          instructions: ko.observable("Welcome to BlockPy. Try editing and running the code below."),

          /**
           * The human-friendly URL to use as a shortcut for this assignment
           */
          url: ko.observable(""),
          // TODO: warning message if maze
          type: ko.observable(""),
          startingCode: ko.observable(configuration["assignment.starting_code"] || ""),
          onRun: ko.observable(configuration["assignment.on_run"] || ""),
          onChange: ko.observable(configuration["assignment.on_change"] || null),
          onEval: ko.observable(configuration["assignment.on_eval"] || null),
          extraInstructorFiles: ko.observableArray([]),
          extraStartingFiles: ko.observableArray([]),
          forkedId: ko.observable(null),
          forkedVersion: ko.observable(null),
          ownerId: ko.observable(null),
          courseId: ko.observable(null),
          version: ko.observable(null),
          tags: ko.observableArray([]),
          sampleSubmissions: ko.observableArray([]),
          reviewed: ko.observable(configuration["assignment.reviewed"]),
          "public": ko.observable(configuration["assignment.public"]),
          hidden: ko.observable(configuration["assignment.hidden"]),
          ipRanges: ko.observable(configuration["assignment.ip_ranges"]),
          settings: Object(_editor_assignment_settings__WEBPACK_IMPORTED_MODULE_15__["makeAssignmentSettingsModel"])(configuration)
        },
        submission: {
          id: ko.observable(null),
          code: ko.observable(configuration["submission.code"] || ""),
          extraFiles: ko.observableArray([]),
          url: ko.observable(""),
          endpoint: ko.observable(""),
          score: ko.observable(0),
          correct: ko.observable(false),
          // assignmentId inferred from assignment.id
          // courseId inferred from user.courseId
          // userId inferred from user.id
          // assignmentVersion inferred from assignment.version
          version: ko.observable(0),
          submissionStatus: ko.observable("Started"),
          gradingStatus: ko.observable("NotReady")
        },
        display: {
          /**
           * Currently visible File, if applicable
           * @type {String}
           */
          filename: ko.observable(null),

          /**
           * Whether or not to be presented with the instructor settings and files
           * @type {bool}
           */
          instructor: ko.observable(this.getSetting("display.instructor", "false").toString() === "true"),

          /**
           * Whether or not to prevent the printer from showing things
           */
          mutePrinter: ko.observable(false),

          /**
           * (Python Views) The current editor mode.
           * @type {DisplayModes}
           */
          pythonMode: ko.observable(this.getSetting("display.python.mode", editor_python_js__WEBPACK_IMPORTED_MODULE_5__["DisplayModes"].SPLIT)),

          /**
           * Whether or not History mode is engaged.
           * @type {bool}
           */
          historyMode: ko.observable(false),

          /**
           * Whether or not to be auto-saving changes in Python editor
           * If an integer, specifies the delay that should be used (microseconds).
           * This is never on in non-Python editors.
           * @type {bool|int}
           */
          autoSave: ko.observable(true),

          /**
           * Whether or not the console is full width and feedback is hidden
           */
          bigConsole: ko.observable(false),

          /**
           * The height to use for the console.
           *    If null, then let the height remain unchanged
           *    If a number, then the
           */
          previousConsoleHeight: ko.observable(null),
          currentConsoleHeight: ko.observable(null),

          /**
           * Which panel to show in the second row's second column
           * @type {SecondRowSecondPanelOptions}
           */
          secondRowSecondPanel: ko.observable(interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].FEEDBACK),

          /**
           * Whether or not to be tracing the code right now
           */
          traceExecution: ko.observable(false),

          /**
           * The list of promises to still resolve while loading datasets
           * @type {Array<Promise>}
           */
          loadingDatasets: ko.observableArray([]),

          /**
           * The temporary changed value of the instructions have been changed from what is in the assignment
           */
          changedInstructions: ko.observable(null),

          /**
           * A holder for the timer to trigger on-changes
           */
          triggerOnChange: null,

          /**
           * Whether the current feedback and output corresponds to the current submission.
           * This would be false if there is no feedback/output (i.e., code has not been run),
           * or if the user has modified the submission after the last run (e.g., by editing
           * the text).
           */
          dirtySubmission: ko.observable(true)
        },
        status: {
          // @type {ServerStatus}
          loadAssignment: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          loadAssignmentMessage: ko.observable(""),
          // @type {ServerStatus}
          loadHistory: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          loadHistoryMessage: ko.observable(""),
          // @type {ServerStatus}
          loadFile: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          loadFileMessage: ko.observable(""),
          // @type {ServerStatus}
          loadDataset: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          loadDatasetMessage: ko.observable(""),
          // @type {ServerStatus}
          logEvent: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          logEventMessage: ko.observable(""),
          // @type {ServerStatus}
          saveImage: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          saveImageMessage: ko.observable(""),
          // @type {ServerStatus}
          saveFile: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          saveFileMessage: ko.observable(""),
          // @type {ServerStatus}
          saveAssignment: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          saveAssignmentMessage: ko.observable(""),
          // @type {ServerStatus}
          updateSubmission: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          updateSubmissionMessage: ko.observable(""),
          // @type {ServerStatus}
          updateSubmissionStatus: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          updateSubmissionStatusMessage: ko.observable(""),
          // @type {ServerStatus}
          onExecution: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY)
        },
        execution: {
          // Information about in-progress executions
          reports: {},
          // list of Output objects
          output: ko.observableArray([]),
          // Information related to a student run
          student: {
            // str: the filename that was last executed and is associated with these results
            filename: ko.observable(null),
            // integer
            currentStep: ko.observable(null),
            // integer
            lastStep: ko.observable(null),
            // integer
            currentLine: ko.observable(null),
            lastLine: ko.observable(0),
            // array of simple objects
            currentTraceData: ko.observableArray([]),
            // integer
            currentTraceStep: ko.observable(0),
            // Actual execution results
            results: null,
            globals: ko.observable(null)
          },
          instructor: {
            globals: null
          },
          // Information related to feedback from the instructor run
          feedback: {
            // str (markdown)
            message: ko.observable("Ready"),
            category: ko.observable(null),
            label: ko.observable(null),
            hidden: ko.observable(false),
            linesError: ko.observableArray([]),
            linesUncovered: ko.observableArray([]),
            // The results of the last execution
            results: null
          }
        },
        configuration: {
          /**
           * Functions to fire when certain events occur
           */
          callbacks: {
            /**
             * When the student gets a success
             */
            "success": this.initialConfiguration_["callback.success"]
          },

          /**
           * Whether or not the server is connected.
           * @type {bool}
           */
          serverConnected: ko.observable(this.getSetting("server.connected", true)),
          // string
          blocklyPath: this.initialConfiguration_["blockly.path"],
          // string
          attachmentPoint: this.initialConfiguration_["attachment.point"],
          // JQuery object
          container: null,
          // Maps codes ('log_event', 'save_code') to URLs
          urls: this.initialConfiguration_["urls"] || {}
        }
      };
    }
  }, {
    key: "initInterface",

    /**
     * Creates the interface
     */
    value: function initInterface() {
      var constants = this.model.configuration;
      var gui = Object(interface_js__WEBPACK_IMPORTED_MODULE_7__["makeInterface"])(this);
      constants.container = jquery__WEBPACK_IMPORTED_MODULE_2___default()(constants.attachmentPoint).html(jquery__WEBPACK_IMPORTED_MODULE_2___default()(gui));
    }
  }, {
    key: "loadAssignment",
    value: function loadAssignment(assignment_id) {
      this.components.server.loadAssignment(assignment_id);
    }
  }, {
    key: "loadTags",
    value: function loadTags(tags) {// Already a JSON list representing tags
    }
  }, {
    key: "loadSampleSubmissions",
    value: function loadSampleSubmissions(samples) {// Already a JSON list representing samples
    }
  }, {
    key: "loadSubmission",
    value: function loadSubmission(submission) {
      if (!submission) {
        return false;
      } // TODO: What if submissions' assignment version and the assignments' version conflict?


      this.model.submission.id(submission.id);
      this.model.submission.code(submission.code);
      this.model.submission.correct(submission.correct);
      this.model.submission.score(submission.score);
      this.model.submission.endpoint(submission.endpoint);
      this.model.submission.url(submission.url);
      this.model.submission.version(submission.version);
      this.model.submission.gradingStatus(submission.grading_status);
      this.model.submission.submissionStatus(submission.submission_status);
      this.model.user.courseId(submission.course_id);
      Object(_files__WEBPACK_IMPORTED_MODULE_8__["loadConcatenatedFile"])(submission.extra_files, this.model.submission.extraFiles);
    }
  }, {
    key: "loadAssignmentData_",
    value: function loadAssignmentData_(data) {
      console.log(data);
      this.resetInterface();
      var wasServerConnected = this.model.configuration.serverConnected();
      this.model.configuration.serverConnected(false);
      var assignment = data.assignment;
      this.model.assignment.id(assignment.id);
      this.model.assignment.version(assignment.version);
      this.model.assignment.courseId(assignment.course_id);
      this.model.assignment.forkedId(assignment.forked_id);
      this.model.assignment.forkedVersion(assignment.forked_version);
      this.model.assignment.hidden(assignment.hidden);
      this.model.assignment.reviewed(assignment.reviewed);
      this.model.assignment["public"](assignment["public"]);
      this.model.assignment.type(assignment.type);
      this.model.assignment.url(assignment.url);
      this.model.assignment.ipRanges(assignment.ip_ranges);
      this.model.assignment.instructions(assignment.instructions);
      this.model.assignment.name(assignment.name);
      this.model.assignment.onChange(assignment.on_change || null);

      if (assignment.on_change) {
        this.components.fileSystem.newFile("!on_change.py", assignment.on_change);
      }

      this.model.assignment.onEval(assignment.on_eval || null);

      if (assignment.on_eval) {
        this.components.fileSystem.newFile("!on_eval.py", assignment.on_eval);
      }

      this.model.assignment.onRun(assignment.on_run);
      this.model.assignment.startingCode(assignment.starting_code);
      this.model.assignment.ownerId(assignment.owner_id);
      Object(_editor_assignment_settings__WEBPACK_IMPORTED_MODULE_15__["loadAssignmentSettings"])(this.model, assignment.settings);
      this.loadTags(assignment.tags);
      this.loadSampleSubmissions(assignment.sample_submissions);
      Object(_files__WEBPACK_IMPORTED_MODULE_8__["loadConcatenatedFile"])(assignment.extra_instructor_files, this.model.assignment.extraInstructorFiles);
      Object(_files__WEBPACK_IMPORTED_MODULE_8__["loadConcatenatedFile"])(assignment.extra_starting_files, this.model.assignment.extraStartingFiles);
      this.loadSubmission(data.submission);
      this.model.display.dirtySubmission(true);
      this.model.configuration.serverConnected(wasServerConnected);
      this.components.corgis.loadDatasets(true);
      this.components.server.setStatus("saveFile", server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY);
    }
  }, {
    key: "initModelMethods",
    value: function initModelMethods() {
      var self = this;
      var model = this.model;
      model.ui = {
        role: {
          isGrader: ko.pureComputed(function () {
            return model.user.role() === "owner" || model.user.role() === "grader";
          })
        },
        instructions: {
          isChanged: ko.pureComputed(function () {
            return model.display.changedInstructions() !== null;
          }),
          current: ko.pureComputed(function () {
            return model.ui.instructions.isChanged() ? self.utilities.markdown(model.display.changedInstructions()) : self.utilities.markdown(model.assignment.instructions());
          }),
          reset: function reset() {
            return model.display.changedInstructions(null);
          }
        },
        menu: {
          canMarkSubmitted: ko.pureComputed(function () {
            return model.assignment.hidden() || model.assignment.reviewed();
          }),
          textMarkSubmitted: ko.pureComputed(function () {
            return model.ui.menu.isSubmitted() ? "Reopen for editing" : model.display.dirtySubmission() ? "Run" : "Mark as submitted";
          }),
          clickMarkSubmitted: function clickMarkSubmitted() {
            return model.ui.menu.isSubmitted() ? self.components.server.updateSubmissionStatus("inProgress") : model.display.dirtySubmission() ? self.components.engine.run() : self.components.server.updateSubmissionStatus("Submitted");
          },
          isSubmitted: ko.pureComputed(function () {
            return model.submission.submissionStatus().toLowerCase() === "submitted";
          })
        },
        secondRow: {
          isFeedbackVisible: ko.pureComputed(function () {
            return model.display.secondRowSecondPanel() === interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].FEEDBACK;
          }),
          isTraceVisible: ko.pureComputed(function () {
            return model.display.secondRowSecondPanel() === interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].TRACE;
          }),
          isConsoleShowVisible: ko.pureComputed(function () {
            return model.ui.secondRow.isFeedbackVisible() || model.ui.secondRow.isTraceVisible();
          }),
          switchLabel: ko.pureComputed(function () {
            return model.execution.student.lastStep() !== null ? "View Trace" : "";
          }),
          advanceState: function advanceState() {
            var currentPanel = model.display.secondRowSecondPanel;

            if (currentPanel() === interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].NONE) {
              currentPanel(interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].FEEDBACK);
            } else if (currentPanel() === interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].TRACE) {
              currentPanel(interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].NONE);
            } else if (model.execution.student.lastStep() !== null) {
              currentPanel(interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].TRACE);
            } else {
              currentPanel(interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].NONE);
            }
          }
        },
        console: {
          size: ko.pureComputed(function () {
            return model.display.secondRowSecondPanel() === interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].NONE ? "col-md-12" : "col-md-6";
          }),
          hideEvaluate: ko.pureComputed(function () {
            return model.assignment.settings.hideEvaluate() || !model.execution.student.globals() || model.status.onExecution() === server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].ACTIVE;
          })
        },
        feedback: {
          badge: ko.pureComputed(function () {
            if (model.execution.feedback.category() === null) {
              return "label-none";
            }

            switch (model.execution.feedback.category().toLowerCase()) {
              default:
              case "none":
                return "label-none";

              case "runtime":
                return "label-runtime-error";

              case "syntax":
                return "label-syntax-error";

              case "editor":
                return "label-syntax-error";

              case "internal":
                return "label-internal-error";

              case "semantic":
              case "analyzer":
                return "label-semantic-error";

              case "feedback":
              case "instructor":
                return "label-feedback-error";

              case "complete":
                return "label-problem-complete";

              case "instructions":
                return "label-instructions";

              case "no errors":
                return "label-no-errors";
            }
          }),
          category: ko.pureComputed(function () {
            if (model.execution.feedback.category() === null) {
              return "";
            }

            switch (model.execution.feedback.category().toLowerCase()) {
              default:
              case "none":
                return "";

              case "runtime":
                return "Runtime Error";

              case "syntax":
                return "Syntax Error";

              case "editor":
                return "Editor Error";

              case "internal":
                return "Internal Error";

              case "semantic":
              case "analyzer":
                return "Algorithm Error";

              case "feedback":
              case "instructions":
                return "Instructions";

              case "instructor":
                return "Incorrect Answer";

              case "complete":
                return "Complete";

              case "no errors":
                return "No errors";
            }
          })
        },
        trace: {
          has: ko.pureComputed(function () {
            return model.execution.student.currentTraceData() !== null;
          }),
          line: ko.pureComputed(function () {
            var step = model.execution.student.currentTraceStep();
            var lastStep = model.execution.student.lastStep();
            var traceData = model.execution.student.currentTraceData();

            if (!traceData || step === null) {
              return "No trace";
            }

            if (step === 0) {
              return "Before run";
            } else if (step === lastStep) {
              return "Finished run";
            } else {
              // TODO: why are these numbers wonky?
              return "Line " + (traceData[step].line - 1);
            }
          }),
          first: function first() {
            model.execution.student.currentTraceStep(0);
          },
          backward: function backward() {
            var previous = Math.max(0, model.execution.student.currentTraceStep() - 1);
            model.execution.student.currentTraceStep(previous);
          },
          forward: function forward() {
            var next = Math.min(model.execution.student.lastStep(), model.execution.student.currentTraceStep() + 1);
            model.execution.student.currentTraceStep(next);
          },
          last: function last() {
            model.execution.student.currentTraceStep(model.execution.student.lastStep());
          },
          data: ko.pureComputed(function () {
            var step = model.execution.student.currentTraceStep();
            var lastStep = model.execution.student.lastStep();
            var traceData = model.execution.student.currentTraceData();

            if (!traceData) {
              return [];
            }

            switch (step) {
              case 0:
                return [];

              case lastStep:
                return traceData[step - 1];

              default:
                return traceData[step];
            }
          })
        },
        files: {
          visible: ko.pureComputed(function () {
            return model.display.instructor() || !model.assignment.settings.hideFiles();
          }),
          hasContents: function hasContents(path) {
            switch (path) {
              case "answer.py":
                return model.submission.code();

              case "!instructions.md":
                return model.assignment.instructions();

              case "!on_change.py":
                return model.assignment.onChange() !== null;

              case "!on_eval.py":
                return model.assignment.onEval() !== null;

              case "?mock_urls.blockpy":
                return model.assignment.extraInstructorFiles().some(function (file) {
                  return file.filename() === "?mock_urls.blockpy";
                });

              case "!tags.blockpy":
                return model.assignment.tags().length;

              case "!sample_submissions.blockpy":
                return model.assignment.sampleSubmissions().length;

              default:
                return false;
            }
          },
          add: function add(path) {
            switch (path) {
              case "?mock_urls.blockpy":
              case "?tags.blockpy":
              case "?settings.blockpy":
                self.components.fileSystem.newFile(path);
                break;

              case "!on_change.py":
                model.assignment.onChange("");
                self.components.fileSystem.newFile(path);
                break;
              // TODO fix extrafiles for instructor and student

              case "!on_eval.py":
                model.assignment.onEval("");
                self.components.fileSystem.newFile(path);
                break;

              default:
            }

            model.display.filename(path);
          },
          "delete": function _delete() {
            return self.components.fileSystem.deleteFile(model.display.filename());
          },
          extraStudentFiles: Object(_files__WEBPACK_IMPORTED_MODULE_8__["observeConcatenatedFile"])(model.submission.extraFiles),
          extraInstructorFiles: Object(_files__WEBPACK_IMPORTED_MODULE_8__["observeConcatenatedFile"])(model.assignment.extraInstructorFiles),
          extraStartingFiles: Object(_files__WEBPACK_IMPORTED_MODULE_8__["observeConcatenatedFile"])(model.assignment.extraStartingFiles)
        },
        editors: {
          current: ko.pureComputed(function () {
            return self.components.editors.getEditor(model.display.filename());
          }),
          view: ko.pureComputed(function () {
            return model.assignment.settings.hideEditors() ? "None" : model.display.filename() ? model.ui.editors.current() : "None";
          }),
          reset: function reset() {
            self.components.server.logEvent("X-File.Reset", "", "", "", "answer.py");
            model.submission.code(model.assignment.startingCode());
            model.submission.extraFiles(model.assignment.extraStartingFiles().map(function (file) {
              var filename = file.filename().substr(1);
              return Object(_files__WEBPACK_IMPORTED_MODULE_8__["makeModelFile"])(filename, file.contents());
            }));
          },
          canSave: ko.pureComputed(function () {
            return !model.display.autoSave();
          }),
          canDelete: ko.pureComputed(function () {
            return (!model.assignment.settings.hideFiles() || model.display.instructor()) && _files__WEBPACK_IMPORTED_MODULE_8__["UNDELETABLE_FILES"].indexOf(model.display.filename()) === -1;
          }),
          canRename: ko.pureComputed(function () {
            return (!model.assignment.settings.hideFiles() || model.display.instructor()) && _files__WEBPACK_IMPORTED_MODULE_8__["UNRENAMABLE_FILES"].indexOf(model.display.filename()) === -1;
          }),
          upload: _editor_abstract_editor__WEBPACK_IMPORTED_MODULE_9__["uploadFile"].bind(self),
          download: _editor_abstract_editor__WEBPACK_IMPORTED_MODULE_9__["downloadFile"].bind(self),
          importDataset: function importDataset() {
            self.components.corgis.openDialog();
          },
          python: {
            fullscreen: function fullscreen() {
              var codeMirror = self.components.pythonEditor.bm.textEditor.codeMirror;
              return codeMirror.setOption("fullScreen", !codeMirror.getOption("fullScreen"));
            },
            updateMode: function updateMode(newMode) {
              self.components.server.logEvent("X-View.Change", "", "", newMode, model.display.filename());
              model.display.pythonMode(newMode);

              if (model.display.filename() === "answer.py") {
                self.components.pythonEditor.oldPythonMode = newMode;
              }
            },
            isHistoryAvailable: ko.pureComputed(function () {
              return model.ui.server.isEndpointConnected("loadHistory");
            }),
            turnOffHistoryMode: function turnOffHistoryMode() {
              self.components.pythonEditor.updateEditor();
              self.components.pythonEditor.setReadOnly(false);
              model.display.historyMode(false);
            },
            turnOnHistoryMode: function turnOnHistoryMode() {
              self.components.server.loadHistory(function (response) {
                if (response.success) {
                  self.components.history.load(response.history);
                  model.display.historyMode(true);
                  self.components.pythonEditor.setReadOnly(true);
                } else {
                  self.components.dialog.ERROR_LOADING_HISTORY();
                }
              });
            },
            toggleHistoryMode: function toggleHistoryMode() {
              if (model.display.historyMode()) {
                model.ui.editors.python.turnOffHistoryMode();
              } else {
                model.ui.editors.python.turnOnHistoryMode();
              }
            },
            history: {
              start: function start() {
                self.components.history.moveToStart();
              },
              previous: function previous() {
                self.components.history.movePrevious();
              },
              next: function next() {
                self.components.history.moveNext();
              },
              mostRecent: function mostRecent() {
                self.components.history.moveToMostRecent();
              },
              use: function use() {
                self.components.history.use();
              }
            }
          },
          settings: {
            save: function save() {
              return self.components.server.saveAssignment();
            }
          }
        },
        execute: {
          run: function run() {
            return self.components.engine.run();
          },
          evaluate: function evaluate() {
            return self.components.engine.evaluate();
          }
        },
        server: {
          status: function status(endpoint) {
            return "server-status-" + model.status[endpoint]();
          },
          isEndpointConnected: function isEndpointConnected(endpoint) {
            return model.configuration.serverConnected() && model.configuration.urls !== undefined && model.configuration.urls[endpoint] !== undefined;
          },
          messages: ko.pureComputed(function () {
            return model.status.loadAssignmentMessage() || model.status.saveAssignmentMessage() || model.status.loadHistoryMessage() || model.status.loadFileMessage() || model.status.saveFileMessage() || model.status.loadDatasetMessage() || model.status.logEventMessage() || model.status.saveImage() || model.status.updateSubmissionMessage() || model.status.updateSubmissionStatusMessage() || "";
          }),
          force: {
            updateSubmission: function updateSubmission(data, event) {
              console.log(event);
              self.components.server.updateSubmission(self.model.submission.score(), self.model.submission.correct(), false, true);
              jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target).fadeOut(100).fadeIn(100);
            }
          }
        }
      };
      Object(interface_js__WEBPACK_IMPORTED_MODULE_7__["makeExtraInterfaceSubscriptions"])(self, model);
    }
  }, {
    key: "turnOnHacks",
    value: function turnOnHacks() {} //console.log("TODO");

    /**
     * Applys the KnockoutJS bindings to the model, instantiating the values into the
     * HTML.
     */

  }, {
    key: "applyModel",
    value: function applyModel() {
      ko.applyBindings(this.model);
    }
  }, {
    key: "initUtilities",
    value: function initUtilities() {
      var main = this;
      this.utilities = {
        markdown: function markdown(text) {
          return text ? EasyMDE.prototype.markdown(text) : "<p></p>";
        }
      };
    }
  }, {
    key: "initComponents",
    value: function initComponents() {
      var container = this.model.configuration.container;
      var components = this.components = {};
      var main = this; // Each of these components will take the BlockPy instance, and possibly a
      // reference to the relevant HTML location where it will be embedded.

      components.dialog = new _dialog__WEBPACK_IMPORTED_MODULE_14__["BlockPyDialog"](main, container.find(".blockpy-dialog"));
      components.feedback = new feedback_js__WEBPACK_IMPORTED_MODULE_13__["BlockPyFeedback"](main, container.find(".blockpy-feedback"));
      components.trace = new _trace__WEBPACK_IMPORTED_MODULE_11__["BlockPyTrace"](main);
      components.console = new _console__WEBPACK_IMPORTED_MODULE_12__["BlockPyConsole"](main, container.find(".blockpy-console"));
      components.engine = new engine_js__WEBPACK_IMPORTED_MODULE_10__["BlockPyEngine"](main);
      components.fileSystem = new _files__WEBPACK_IMPORTED_MODULE_8__["BlockPyFileSystem"](main);
      components.editors = new editors_js__WEBPACK_IMPORTED_MODULE_4__["Editors"](main, container.find(".blockpy-editor"));
      components.pythonEditor = this.components.editors.byName("python");
      components.server = new server_js__WEBPACK_IMPORTED_MODULE_6__["BlockPyServer"](main);
      components.corgis = new _corgis__WEBPACK_IMPORTED_MODULE_16__["BlockPyCorgis"](main);
      components.history = new _history__WEBPACK_IMPORTED_MODULE_17__["BlockPyHistory"](main, container.find(".blockpy-history-toolbar"));
    }
  }, {
    key: "start",
    value: function start() {
      this.model.display.filename("answer.py");
    }
  }, {
    key: "resetInterface",
    value: function resetInterface() {
      this.components.engine.reset();
    }
  }]);

  return BlockPy;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! knockout */ "knockout")))

/***/ }),

/***/ "./src/console.js":
/*!************************!*\
  !*** ./src/console.js ***!
  \************************/
/*! exports provided: CONSOLE_HTML, ConsoleLineType, BlockPyConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSOLE_HTML", function() { return CONSOLE_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLineType", function() { return ConsoleLineType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyConsole", function() { return BlockPyConsole; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var START_EVAL_HTML = "\n<button type=\"button\" class=\"btn btn-sm btn-outline float-right blockpy-btn-eval\">\n    Evaluate\n</button>";
var CONSOLE_HTML = "\n    <div class='col-md-6 blockpy-panel blockpy-console'\n          role=\"region\" aria-label=\"Console\"\n          data-bind=\"class: ui.console.size\">\n          \n        <!-- Feedback/Trace Visibility Control -->\n        <button type='button'\n                class='btn btn-sm btn-outline-secondary float-right blockpy-show-feedback'\n                data-bind=\"hidden: ui.secondRow.isConsoleShowVisible, click: ui.secondRow.advanceState\">\n            <span class='fas fa-eye'></span>\n        </button>\n          \n        <strong>Console:</strong>\n        \n        <div class='blockpy-printer blockpy-printer-default'>\n        </div>\n        \n     </div>";
var NEW_CONSOLE_LINE_HTML = "<div></div>";
/**
 *
 * @enum
 */

var ConsoleLineType = {
  TEXT: "text",
  HTML: "html",
  PLOT: "plot",
  IMAGE: "image",
  TURTLE: "turtle",
  EVAL: "eval",
  START_EVAL: "start_eval",
  VALUE: "value",
  INPUT: "input",
  TEST_CASE: "test_case"
};

var ConsoleLine =
/*#__PURE__*/
function () {
  function ConsoleLine(main, type, content) {
    _classCallCheck(this, ConsoleLine);

    this.main = main;
    this.type = type;
    this.content = content;
    this.origin = {
      filename: Sk.currFilename,
      step: main.components.engine.executionBuffer.step,
      line: main.components.engine.executionBuffer.line
    };
    this.html = $("<div></div>", {
      "class": "blockpy-printer-output",
      "data-toggle": "tooltip",
      "data-placement": "auto",
      "data-step": this.origin.step,
      "title": "Step " + this.origin.step + ", Line " + this.origin.line
    });
    this.visible = !main.model.display.mutePrinter();
    this.index = 0;
  }

  _createClass(ConsoleLine, [{
    key: "toSkulpt",
    value: function toSkulpt() {
      return Sk.ffi.remapToPy(this.content);
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.html.remove();
    }
  }]);

  return ConsoleLine;
}();

var ConsoleLineTurtle =
/*#__PURE__*/
function (_ConsoleLine) {
  _inherits(ConsoleLineTurtle, _ConsoleLine);

  // TODO: Capture turtle commands for tracing purposes
  function ConsoleLineTurtle(main) {
    var _this;

    _classCallCheck(this, ConsoleLineTurtle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineTurtle).call(this, main, ConsoleLineType.TURTLE));

    _this.html.addClass("blockpy-console-turtle-output");

    return _this;
  }

  _createClass(ConsoleLineTurtle, [{
    key: "render",
    value: function render(where) {
      if (this.visible) {
        where.prepend(this.html);
        this.html[0].scrollIntoView({
          behavior: "smooth"
        }); //this.html.tooltip();
      }
    }
  }]);

  return ConsoleLineTurtle;
}(ConsoleLine);

var ConsoleLineImage =
/*#__PURE__*/
function (_ConsoleLine2) {
  _inherits(ConsoleLineImage, _ConsoleLine2);

  function ConsoleLineImage(main, content) {
    var _this2;

    _classCallCheck(this, ConsoleLineImage);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineImage).call(this, main, ConsoleLineType.IMAGE, content));

    _this2.html.addClass("blockpy-console-image-output");

    return _this2;
  }

  _createClass(ConsoleLineImage, [{
    key: "render",
    value: function render(where) {
      if (this.visible) {
        console.log(this.content);
        this.html.append(this.content);
        where.append(this.html); //this.html.tooltip();
      }
    }
  }]);

  return ConsoleLineImage;
}(ConsoleLine);

var ConsoleLinePlot =
/*#__PURE__*/
function (_ConsoleLine3) {
  _inherits(ConsoleLinePlot, _ConsoleLine3);

  function ConsoleLinePlot(main, content) {
    var _this3;

    _classCallCheck(this, ConsoleLinePlot);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLinePlot).call(this, main, ConsoleLineType.PLOT, content));

    _this3.html.addClass("blockpy-console-plot-output");

    return _this3;
  }

  _createClass(ConsoleLinePlot, [{
    key: "render",
    value: function render(where) {
      if (this.visible) {
        where.append(this.html); //this.html.tooltip();
      }
    }
  }]);

  return ConsoleLinePlot;
}(ConsoleLine);

var ConsoleLineText =
/*#__PURE__*/
function (_ConsoleLine4) {
  _inherits(ConsoleLineText, _ConsoleLine4);

  function ConsoleLineText() {
    _classCallCheck(this, ConsoleLineText);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineText).apply(this, arguments));
  }

  _createClass(ConsoleLineText, [{
    key: "addContent",
    value: function addContent(content) {
      this.content = this.content + content;
    }
  }, {
    key: "render",
    value: function render(where) {
      if (this.visible) {
        var encodedText = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["encodeHTML"])(this.content);
        var lineData = $("<samp></samp>", {
          "html": encodedText
        });
        this.html.append(lineData);
        where.append(this.html);
        this.html.tooltip();
      }
    }
  }]);

  return ConsoleLineText;
}(ConsoleLine);

var ConsoleLineValue =
/*#__PURE__*/
function (_ConsoleLine5) {
  _inherits(ConsoleLineValue, _ConsoleLine5);

  function ConsoleLineValue(main, content) {
    _classCallCheck(this, ConsoleLineValue);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineValue).call(this, main, ConsoleLineType.VALUE, content));
  }

  _createClass(ConsoleLineValue, [{
    key: "render",
    value: function render(where) {
      if (this.visible) {
        var encodedText = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["encodeHTML"])(this.content);
        var lineData = $("<code></code>", {
          "html": encodedText
        });
        this.html.append(lineData);
        where.append(this.html);
        this.html.tooltip();
      }
    }
  }]);

  return ConsoleLineValue;
}(ConsoleLine);

var ConsoleLineInput =
/*#__PURE__*/
function (_ConsoleLine6) {
  _inherits(ConsoleLineInput, _ConsoleLine6);

  function ConsoleLineInput(main, promptMessage) {
    var _this4;

    _classCallCheck(this, ConsoleLineInput);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineInput).call(this, main, ConsoleLineType.INPUT, promptMessage));
    _this4.visible = true;
    return _this4;
  }
  /**
   * Creates an Input box for receiving input() from the user.
   *
   */


  _createClass(ConsoleLineInput, [{
    key: "render",
    value: function render(where) {
      // Perform any necessary cleaning
      if (this.visible) {
        // Input form
        var inputForm = $("<input type='text' />"); // Enter button

        var inputBtn = $("<button></button>", {
          "html": "Enter"
        }); // Group form and button

        var inputGroup = $("<div></div>", {
          "class": "blockpy-console-input"
        });
        inputGroup.append(inputForm);
        inputGroup.append(inputBtn); // Prompt box, new line, input group

        var inputBox = $("<div></div>");

        if (this.content !== "\n") {
          var encodedText = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["encodeHTML"])(this.content);
          var inputMsg = $("<samp></samp>", {
            "html": encodedText
          });
          inputBox.append(inputMsg);
        }

        inputBox.append($("<br>")).append(inputGroup); // Render

        this.html.append(inputBox);
        where.append(this.html); // Make it interactive

        return this.makeInteractive(inputForm, inputBtn);
      }

      return "";
    }
  }, {
    key: "makeInteractive",
    value: function makeInteractive(input, button) {
      var _this5 = this;

      var resolveOnClick;
      var submittedPromise = new Promise(function (resolve) {
        resolveOnClick = resolve;
      });

      var submitForm = function submitForm() {
        resolveOnClick(input.val());
        input.prop("disabled", true);
        button.prop("disabled", true);

        _this5.html.tooltip();
      };

      button.click(submitForm);
      input.keyup(function (e) {
        if (e.keyCode === 13) {
          submitForm();
        }
      });
      input.focus();
      return submittedPromise;
    }
  }]);

  return ConsoleLineInput;
}(ConsoleLine);

var ConsoleLineEvaluate =
/*#__PURE__*/
function (_ConsoleLineInput) {
  _inherits(ConsoleLineEvaluate, _ConsoleLineInput);

  function ConsoleLineEvaluate(main) {
    _classCallCheck(this, ConsoleLineEvaluate);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineEvaluate).call(this, main, "Evaluate:"));
  }

  return ConsoleLineEvaluate;
}(ConsoleLineInput);

var ConsoleLineStartEvaluate =
/*#__PURE__*/
function (_ConsoleLine7) {
  _inherits(ConsoleLineStartEvaluate, _ConsoleLine7);

  function ConsoleLineStartEvaluate(main) {
    var _this6;

    _classCallCheck(this, ConsoleLineStartEvaluate);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineStartEvaluate).call(this, main, ConsoleLineType.START_EVAL));

    _this6.html.append($(START_EVAL_HTML));

    _this6.html.click(function () {
      _this6.main.model.ui.execute.evaluate();

      _this6["delete"]();
    });

    return _this6;
  }

  _createClass(ConsoleLineStartEvaluate, [{
    key: "render",
    value: function render(where) {
      where.append(this.html);
    }
  }]);

  return ConsoleLineStartEvaluate;
}(ConsoleLine);

var BlockPyConsole =
/*#__PURE__*/
function () {
  /**
   * An object for managing the console, with features for things like printing, plotting, evaling, inputing.
   * The "printer" is the region where we put things, as opposed to the console as a whole.
   *
   * @constructor
   * @param {Object} main - The main BlockPy instance
   * @param {HTMLElement} tag - The HTML object this is attached to.
   */
  function BlockPyConsole(main, tag) {
    _classCallCheck(this, BlockPyConsole);

    this.main = main;
    this.tag = tag;
    this.printerTag = tag.find(".blockpy-printer");
    this.MINIMUM_WIDTH = 200;
    this.MINIMUM_HEIGHT = 200;
    this.DEFAULT_HEIGHT = this.printerTag.height(); // Let CSS define this

    this.main.model.display.previousConsoleHeight(this.DEFAULT_HEIGHT);
    this.output = this.main.model.execution.output;
    this.settings = {};
    this.clear(); // TODO: If the user modifies a file, then make the console look faded a little
  }

  _createClass(BlockPyConsole, [{
    key: "clear",

    /**
     * Reset the status of the printer, including removing any text in it and
     * fixing its size.
     */
    value: function clear() {
      this.output.removeAll();
      this.lineBuffer = null;
      this.plotBuffer = null;
      this.printerTag.empty(); // If the user hasn't changed the console size, we'll reset it

      if (this.main.model.display.previousConsoleHeight() === this.printerTag.height()) {
        this.printerTag.height(this.DEFAULT_HEIGHT);
        this.main.model.display.previousConsoleHeight(this.printerTag.height());
      }

      this.turtleLine = null;
      Sk.TurtleGraphics = {
        target: this.getTurtleLine.bind(this),
        width: this.getWidth(),
        height: this.getHeight(),
        assets: this.loadAsset.bind(this)
      };
    }
  }, {
    key: "loadAsset",
    value: function loadAsset(name) {
      return name;
    }
  }, {
    key: "getTurtleLine",
    value: function getTurtleLine() {
      if (this.turtleLine === null) {
        this.turtleLine = new ConsoleLineTurtle(this.main);
        this.turtleLine.render(this.printerTag); // If the user hasn't changed the console size, we'll do so

        if (this.main.model.display.previousConsoleHeight() === this.printerTag.height()) {
          var currentPrinterDimension = this.printerTag.width();
          this.printerTag.height(currentPrinterDimension);
          this.main.model.display.previousConsoleHeight(this.printerTag.height());
          Sk.TurtleGraphics.height = currentPrinterDimension - 40;
        }
      }

      return this.turtleLine.html[0];
    }
  }, {
    key: "finishTurtles",
    value: function finishTurtles() {
      if (this.main.model.assignment.settings.saveTurtleOutput()) {
        var canvas = this.turtleLine.html.find("canvas").last()[0];
        var ctx = canvas.getContext("2d");
        var img = new Image();
        var dataUrl = canvas.toDataURL("image/png");
        this.main.components.server.saveImage("turtle_output", dataUrl);
      }
    } // TODO: turtles should be based on the current width

  }, {
    key: "newTurtle",
    value: function newTurtle() {
      return this;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return Math.max(this.MINIMUM_WIDTH, this.printerTag.width() - 40);
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return Math.max(this.MINIMUM_HEIGHT, this.printerTag.height() + 40);
    }
  }, {
    key: "isMuted",
    value: function isMuted() {
      return this.main.model.display.mutePrinter();
    }
    /**
     * Updates each printed element in the printer and makes it hidden
     * or visible, depending on what step we're on.
     *
     * @param {Number} step - The current step of the executed program that we're on; each element in the printer must be marked with a "data-step" property to resolve this.
     * @param {Number} page - Deprecated, not sure what this even does.
     */

  }, {
    key: "stepPrinter",
    value: function stepPrinter(step, page) {
      this.printerTag.find(".blockpy-printer-output").each(function () {
        if ($(this).attr("data-step") <= step) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  }, {
    key: "print",

    /**
     * Print a line to the on-screen printer.
     * @param {String} lineText - A line of text to be printed out.
     */
    value: function print(lineText) {
      // Empty strings means do nothing.
      // print("", end="")
      if (!lineText) {
        return;
      }

      var flush = false;

      if (lineText.charAt(lineText.length - 1) === "\n") {
        flush = true;
      }

      var splitLines = lineText.split("\n");

      if (this.lineBuffer === null) {
        this.lineBuffer = new ConsoleLineText(this.main, ConsoleLineType.TEXT, splitLines[0]);
      } else {
        this.lineBuffer.addContent(splitLines[0]);
      }

      for (var i = 1; i < splitLines.length - 1; i++) {
        this.output.push(this.lineBuffer);
        this.lineBuffer.render(this.printerTag);
        this.lineBuffer = new ConsoleLineText(this.main, ConsoleLineType.TEXT, splitLines[i]);
      }

      if (flush) {
        this.output.push(this.lineBuffer);
        this.lineBuffer.render(this.printerTag);
        this.lineBuffer = null;
      }
    }
  }, {
    key: "plot",
    value: function plot(plots) {
      this.plotBuffer = new ConsoleLinePlot(this.main, plots);
      this.plotBuffer.render(this.printerTag);
      return this.plotBuffer;
    }
  }, {
    key: "printPILImage",
    value: function printPILImage(imageData) {
      this.imageBuffer = new ConsoleLineImage(this.main, imageData.image);
      this.imageBuffer.render(this.printerTag);
      return this.imageBuffer;
    }
  }, {
    key: "printValue",
    value: function printValue(value) {
      var printedValue = new ConsoleLineValue(this.main, value);
      printedValue.render(this.printerTag);
      return printedValue;
    }
    /**
     * Creates and registers a Promise from the Input box
     * @param {String} promptMessage - Message to display to the user.
     *
     */

  }, {
    key: "input",
    value: function input(promptMessage) {
      this.inputBuffer = new ConsoleLineInput(this.main, promptMessage);
      return this.inputBuffer.render(this.printerTag);
    }
  }, {
    key: "evaluate",
    value: function evaluate() {
      this.inputBuffer = new ConsoleLineEvaluate(this.main);
      return this.inputBuffer.render(this.printerTag);
    }
  }, {
    key: "beginEval",
    value: function beginEval() {
      var startEvaluation = new ConsoleLineStartEvaluate(this.main);
      return startEvaluation.render(this.printerTag);
    }
    /**
     * Unconditionally scroll to the bottom of the window.
     *
     */

  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      this.tag.animate({
        scrollTop: this.tag.prop("scrollHeight") - this.tag.prop("clientHeight")
      }, 500);
    }
  }]);

  return BlockPyConsole;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/corgis.js":
/*!***********************!*\
  !*** ./src/corgis.js ***!
  \***********************/
/*! exports provided: _IMPORTED_DATASETS, _IMPORTED_COMPLETE_DATASETS, BlockPyCorgis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_IMPORTED_DATASETS", function() { return _IMPORTED_DATASETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_IMPORTED_COMPLETE_DATASETS", function() { return _IMPORTED_COMPLETE_DATASETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyCorgis", function() { return BlockPyCorgis; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
 // TODO: editor.bm.blockEditor.extraTools[]

var _IMPORTED_DATASETS = {};
var _IMPORTED_COMPLETE_DATASETS = {};
/**
 * This is a very simplistic helper function that will transform
 * a given button into a "Loaded" state (disabled, pressed state, etc.).
 *
 * @param {HTMLElement} btn - An HTML element to change the text of.
 */

var setButtonLoaded = function setButtonLoaded(btn) {
  btn.addClass("active").addClass("btn-success").removeClass("btn-primary").prop("disabled", true).text("Loaded").attr("aria-pressed", "true");
};
/**
 * Module that connects to the CORGIS datasets and manages interactions
 * with them. This includes loading in datasets at launch and on-the-fly.
 * Note that this has no presence on screen, so it does not have a tag.
 *
 * @constructor
 * @this {BlockPyCorgis}
 * @param {Object} main - The main BlockPy instance
 */


function BlockPyCorgis(main) {
  this.main = main;
  this.loadedDatasets = [];
  this.loadDatasets();
}

BlockPyCorgis.prototype.loadDatasets = function (silently) {
  var _this = this;

  // Load in each the datasets
  var model = this.main.model,
      editor = this.main.components.pythonEditor,
      server = this.main.components.server;
  var imports = [];
  model.assignment.settings.datasets().split(",").forEach(function (name) {
    if (name && !(name in BlockMirrorBlockEditor.EXTRA_TOOLS)) {
      imports.push.apply(imports, _this.importDataset(Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["slug"])(name), name, silently));
    }
  }); // When datasets are loaded, update the toolbox.

  $.when.apply($, imports).done(function () {
    //console.log("TRIGGERED");
    editor.bm.forceBlockRefresh();
    editor.bm.blockEditor.remakeToolbox();
  }).fail(function (e) {
    console.log(arguments);
    console.error(e);
  }).always(function () {
    server.finalizeSubscriptions();
  });
};
/**
 * Loads the definitions for a dataset into the environment, including
 * the dataset (as a JS file), the skulpt bindings, and the blockly
 * bindings. This requires access to a CORGIS server, and occurs
 * asynchronously. The requests are fired and their deferred objects
 * are returned - callers can use this information to perform an action
 * on completion of the import.
 *
 * @param {String} slug - The URL safe version of the dataset name
 * @param {String} name - The user-friendly version of the dataset name.
 * @returns {Array.<Deferred>} - Returns the async requests as deferred objects.
 */


BlockPyCorgis.prototype.importDataset = function (slug, name) {
  var _this2 = this;

  var url_retrievals = [];

  if (this.main.model.ui.server.isEndpointConnected("importDatasets")) {
    var root = this.main.model.configuration.urls.importDatasets + "blockpy/" + slug + "/" + slug;
    this.main.model.display.loadingDatasets.push(name); // Actually get data

    var getDataset = $.getScript(root + "_dataset.js"); // Load getComplete silently in the background because its big :(

    var getComplete = $.getScript(root + "_complete.js");
    var getSkulpt = $.get(root + "_skulpt.js", function (data) {
      Sk.builtinFiles["files"]["src/lib/" + slug + "/__init__.js"] = data;
    });
    var getBlockly = $.getScript(root + "_blockly.js"); // On completion, update menus.

    $.when(getDataset, getSkulpt, getBlockly).done(function () {
      _this2.loadedDatasets.push(slug);

      _this2.main.components.pythonEditor.bm.forceBlockRefresh();

      _this2.main.components.pythonEditor.bm.blockEditor.remakeToolbox();

      _this2.main.model.display.loadingDatasets.remove(name);
    });
    url_retrievals.push(getDataset, getSkulpt, getBlockly);
  }

  return url_retrievals;
};
/**
 * Opens a dialog box to present the user with the datasets available
 * through the CORGIS server. This requires a call, so this method
 * completes asynchronously. The dialog is composed of a table with
 * buttons to load the datasets (More than one dataset can be loaded
 * from within the dialog at a time).
 */


BlockPyCorgis.prototype.openDialog = function () {
  var _this3 = this;

  if (this.main.model.ui.server.isEndpointConnected("importDatasets")) {
    var root = this.main.model.configuration.urls.importDatasets;
    $.getJSON(root + "index.json", function (data) {
      // Make up the Body
      var datasets = data.blockpy;
      var documentation = root + "blockpy/index.html";
      var start = $("<p>Documentation is available at <a href='".concat(documentation, "' target=_blank>url</a></p>"));
      var body = $("<table></table>", {
        "class": "table table-bordered table-sm table-striped"
      });
      Object.keys(datasets).sort().map(function (name) {
        var sluggedName = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["slug"])(datasets[name].name);
        var titleName = name;
        var btn = $('<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Load</button>');
        var imgSrc = root + "../images/datasets/" + name + "-icon.png";

        if (_this3.loadedDatasets.indexOf(sluggedName) > -1) {
          setButtonLoaded(btn);
        } else {
          btn.click(function () {
            _this3.importDataset(sluggedName, "Data - " + datasets[name].title);

            setButtonLoaded(btn);
          });
        } //let img = `<img src='${imgSrc}' class="corgis-icon">`;


        $("<tr></tr>") //.append($("<td>" + img + "</td>"))
        .append($("<td>" + datasets[name].title + "</td>")).append($("<td>" + datasets[name].overview + "</td>")).append($("<td></td>").append(btn)).appendTo(body);
      });
      body.appendTo(start); // Show the actual dialog

      _this3.main.components.dialog.show("Import Datasets", start, null);
    });
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/css/blockpy.css":
/*!*****************************!*\
  !*** ./src/css/blockpy.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/css/bootstrap_retheme.css":
/*!***************************************!*\
  !*** ./src/css/bootstrap_retheme.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/dialog.js":
/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
/*! exports provided: DIALOG_HTML, BlockPyDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_HTML", function() { return DIALOG_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyDialog", function() { return BlockPyDialog; });
// TODO: Dyanmically populate aria-labelledby in this and other places
var DIALOG_HTML = "\n    <div class='blockpy-dialog modal hidden'\n         role=\"dialog\"\n         aria-label='Dialog'\n         aria-hidden=\"true\"\n         aria-modal=\"true\">\n        <div class='modal-dialog modal-lg' role=\"document\">\n            <div class='modal-content' role='region' aria-label='Dialog content'>\n                <div class='modal-header'>\n                    <h4 class='modal-title'>Dynamic Content</h4>\n                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class='modal-body' style='width:100%; height:400px; white-space:pre-wrap'>\n                </div>\n                <div class='modal-footer'>\n                    <button type='button' class='btn btn-white' data-dismiss='modal'>Close</button>\n                </div>    \n            </div>\n        </div>\n    </div>\n";
/**
 * A utility object for quickly and conveniently generating dialog boxes.
 * Unfortunately, this doesn't dynamically create new boxes; it reuses the same one
 * over and over again. It turns out dynamically generating new dialog boxes
 * is a pain! So we can't stack them.
 *
 * @constructor
 * @this {BlockPyDialog}
 * @param {Object} main - The main BlockPy instance
 * @param {HTMLElement} tag - The HTML object this is attached to.
 */

function BlockPyDialog(main, tag) {
  this.main = main;
  this.tag = tag;
  this.titleTag = tag.find(".modal-title");
  this.bodyTag = tag.find(".modal-body");
}
/**
 * A simple externally available function for popping up a dialog
 * message. This menu will be draggable by its title.
 *
 * @param {String} title - The title of the message dialog. Can have HTML.
 * @param {String} body - The body of the message dialog. Can have HTML.
 * @param {function} onclose - A function to be run when the user closes the dialog.
 */

BlockPyDialog.prototype.show = function (title, body, onclose) {
  this.titleTag.html(title);
  this.bodyTag.html(body);
  this.tag.modal("show");
  this.tag.draggable({
    "handle": ".modal-title"
  });
  this.tag.on("hidden.bs.modal", function (e) {
    if (onclose !== undefined && onclose !== null) {
      onclose();
    }
  });
};

BlockPyDialog.prototype.ERROR_LOADING_ASSIGNMNENT = function () {
  this.show("Error Loading Assignment", "BlockPy encountered an error while loading the assignment.<br>\nPlease reload the page and try again.");
};

BlockPyDialog.prototype.SCREENSHOT_BLOCKS = function () {// TODO
};

BlockPyDialog.prototype.ERROR_UPDATING_SUBMISSION_STATUS = function () {
  this.show("Error Updating Submission Status", "BlockPy encountered an error while updating your submission status.<br>\nPlease reload the page and try again.");
};

BlockPyDialog.prototype.ERROR_LOADING_HISTORY = function () {
  this.show("Error Loading History", "BlockPy encountered an error while loading your history.<br>\nPlease reload the page and try again.");
};

/***/ }),

/***/ "./src/editor/abstract_editor.js":
/*!***************************************!*\
  !*** ./src/editor/abstract_editor.js ***!
  \***************************************/
/*! exports provided: uploadFile, sluggify, downloadFile, AbstractEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sluggify", function() { return sluggify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractEditor", function() { return AbstractEditor; });
/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editors */ "./src/editors.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


function uploadFile(model, event) {
  var fileReader = new FileReader();
  var files = event.target.files;

  fileReader.onload = function (e) {
    return model.ui.editors.current().uploadFile(e);
  };

  fileReader.fileName = files[0].name;
  fileReader.readAsText(files[0]);
  event.target.value = "";
}
function sluggify(text) {
  return text.replace(/[^a-z0-9]/gi, "_").toLowerCase();
}
function downloadFile(model, event) {
  var _model$ui$editors$cur = model.ui.editors.current().downloadFile(),
      name = _model$ui$editors$cur.name,
      extension = _model$ui$editors$cur.extension,
      contents = _model$ui$editors$cur.contents,
      mimetype = _model$ui$editors$cur.mimetype; // Make safe


  name = sluggify(name);
  name = name + extension; // Make the data download as a file

  var blob = new Blob([contents], {
    type: mimetype
  });

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, name);
  } else {
    var temporaryDownloadLink = window.document.createElement("a");
    temporaryDownloadLink.href = window.URL.createObjectURL(blob);
    temporaryDownloadLink.download = name;
    document.body.appendChild(temporaryDownloadLink);
    temporaryDownloadLink.click();
    document.body.removeChild(temporaryDownloadLink);
  }
}
var AbstractEditor =
/*#__PURE__*/
function () {
  function AbstractEditor(main, tag) {
    _classCallCheck(this, AbstractEditor);

    this.main = main;
    this.tag = tag;
    this.fileSystem = main.components.fileSystem;
    this.filename = null;
    this.file = null;
  }

  _createClass(AbstractEditor, [{
    key: "deleteFile",
    value: function deleteFile() {
      this.fileSystem.deleteFile(this.filename);
      this.main.model.display.filename("answer.py");
      this.main.components.editors.changeEditor("answer.py");
    }
  }, {
    key: "onFileDeleted",
    value: function onFileDeleted() {
      // TODO: Switch to the previous file instead of a default file
      this.main.model.display.filename("answer.py");
      this.main.components.editors.changeEditor("answer.py");
    }
  }, {
    key: "onFileUpdated",
    value: function onFileUpdated(file) {
      if (file.filename === this.filename) {
        //this.file = file;
        this.main.components.editors.changeEditor(this.filename); //this.fileSystem.stopWatchingFile(this.filename);
        //this.trackCurrentFile();
      }
    }
  }, {
    key: "trackCurrentFile",
    value: function trackCurrentFile() {
      this.fileSystem.watchFile(this.filename, {
        updated: this.onFileUpdated.bind(this),
        deleted: this.onFileDeleted.bind(this)
      });
    }
  }, {
    key: "enter",
    value: function enter(newFilename, oldEditor) {
      this.filename = newFilename;
      this.file = this.fileSystem.getFile(newFilename);
      this.trackCurrentFile();
    }
    /**
     *
     * @param newFilename - the filename that the other editor will be switching to
     * @param oldEditor
     * @param newEditor
     */

  }, {
    key: "exit",
    value: function exit(newFilename, oldEditor, newEditor) {
      this.fileSystem.stopWatchingFile(this.filename);
      this.file = null;
      this.filename = null;
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(event) {
      var filename = event.target.fileName;
      var contents = event.target.result;
      this.file.handle(contents);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile() {
      var filename = _editors__WEBPACK_IMPORTED_MODULE_0__["Editors"].parseFilename(this.filename);
      return {
        name: filename.name,
        extension: filename.type,
        contents: this.file.handle(),
        mimetype: "text/plain"
      };
    }
  }]);

  return AbstractEditor;
}();

/***/ }),

/***/ "./src/editor/assignment_settings.js":
/*!*******************************************!*\
  !*** ./src/editor/assignment_settings.js ***!
  \*******************************************/
/*! exports provided: ASSIGNMENT_SETTINGS_EDITOR_HTML, saveAssignmentSettings, loadAssignmentSettings, makeAssignmentSettingsModel, AssignmentSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(ko) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSIGNMENT_SETTINGS_EDITOR_HTML", function() { return ASSIGNMENT_SETTINGS_EDITOR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAssignmentSettings", function() { return saveAssignmentSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAssignmentSettings", function() { return loadAssignmentSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAssignmentSettingsModel", function() { return makeAssignmentSettingsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentSettings", function() { return AssignmentSettings; });
/* harmony import */ var _abstract_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_editor */ "./src/editor/abstract_editor.js");
/* harmony import */ var _python__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./python */ "./src/editor/python.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ASSIGNMENT_SETTINGS = [["toolboxLevel", "toolbox_level", "normal", "toolbox", "INCOMPLETE: What level of toolbox to present to the user (hiding and showing categories)."], ["startView", "start_view", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].SPLIT, _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"], "The Python editor mode to start in when the student starts the problem."], ["datasets", "datasets", "", "string", "The current list of datasets available on load as a comma-separated string."], ["disableTimeout", "disable_timeout", false, "bool", "If checked, then students code is allowed to run without timeouts (potentially allowing infinite loops)."], ["isParsons", "is_parsons", false, "bool", "If checked, then this is a parson's style question (jumbled)."], ["disableFeedback", "disable_feedback", false, "bool", "If checked, then no instructor scripts are run (e.g., on_run and on_eval)."], ["disableTifa", "disable_tifa", false, "bool", "If checked, then do not automatically run Tifa (which can be slow)."], ["disableTrace", "disable_trace", false, "bool", "If checked, then the students code will not have its execution traced (no variables recorded, no coverage tracked)."], ["disableEdit", "can_edit", false, "bool", "If checked, then the students' file will not be editable at all."], ["disableBlocks", "can_blocks", false, "bool", "If checked, then the student cannot edit the block interface (although it is visible)."], ["onlyInteractive", "only_interactive", false, "bool", "If checked, the editors are hidden, the program is automatically run, and then the console enters Eval mode (interactive)."], ["onlyUploads", "only_uploads", false, "bool", "If unchecked, then the students' file will not be directly editable (they will have to upload submissions)."], // What menus/feedback to show and hide
["hideFiles", "hide_files", true, "bool", "If checked, then students will not see the View Files toolbar."], ["hideQueuedInputs", "hide_queued_inputs", true, "bool", "INCOMPLETE: If unchecked, then the students can access the queued inputs box (makes repeated debugging easier for the input function)."], ["hideEditors", "hide_editors", false, "bool", "If checked, then all of the editors are hidden."], ["hideAll", "hide_all", false, "bool", "INCOMPLETE: If checked, then the entire interface is hidden."], ["hideEvaluate", "hide_evaluate", false, "bool", "If checked, then the Evaluate button is not shown on the console."], ["hideImportDatasetsButton", "hide_import_datasets_button", true, "bool", "If checked, then students cannot see the import datasets button."], ["hideImportStatements", "hide_import_statements", false, "bool", "INCOMPLETE: If checked, certain kinds of import statements (matplotlib, turtle, datasets) are not shown in the block interface."], ["hideCoverageButton", "hide_coverage_button", false, "bool", "INCOMPLETE: If checked, the coverage button is not shown."], ["saveTurtleOutput", "save_turtle_output", false, "bool", "If checked, then turtle output is saved whenever the program uses it."]];

function getDocumentation(name) {
  for (var i = 0; i < ASSIGNMENT_SETTINGS.length; i++) {
    if (ASSIGNMENT_SETTINGS[i][0] === name) {
      return ASSIGNMENT_SETTINGS[i][4];
    }
  }

  return "Documentation not found for field";
}

function makeStartViewTab(name, icon, mode) {
  return "<label class=\"btn btn-outline-secondary blockpy-mode-set-blocks\"\n                data-bind=\"css: {active: assignment.settings.startView() === '".concat(mode, "'},\n                           click: assignment.settings.startView.bind($data, '").concat(mode, "')\">\n                <span class='fas fa-").concat(icon, "'></span>\n                <input type=\"radio\" name=\"blockpy-start-view-set\" autocomplete=\"off\" checked> ").concat(name, "\n            </label>");
}

var ASSIGNMENT_SETTINGS_BOOLEAN_COMPONENTS_HTML = ASSIGNMENT_SETTINGS // Only handle the simple booleans this way
.filter(function (setting) {
  return setting[3] === "bool";
}).map(function (setting) {
  var prettyName = setting[1].split("_").map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
  return "\n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-".concat(setting[0], "\">").concat(prettyName, "</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-").concat(setting[0], "\"\n                    data-bind=\"checked: assignment.settings.").concat(setting[0], "\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    ").concat(setting[4], "\n                </small>\n            </div>\n        </div>\n        ");
}).join("\n\n");
var ASSIGNMENT_SETTINGS_EDITOR_HTML = "\n    <div class=\"blockpy-view-settings\">\n    \n    <form>\n\n        <div class=\"form-group row\">\n            <div class=\"col-sm-12 mx-auto\">\n                <button type=\"button\" class=\"btn btn-success\"\n                    data-bind=\"click: ui.editors.settings.save\">Save changes</button>\n            </div>\n        </div>\n    \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-name\" class=\"col-sm-2 col-form-label text-right\">Name:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-name\"\n                data-bind=\"value: assignment.name\">\n                <small class=\"form-text text-muted\">\n                    The student-facing name of the assignment. Assignments within a group are ordered alphabetically\n                    by their name, so you may want to use a naming scheme like \"#43.5) Whatever\".\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-url\" class=\"col-sm-2 col-form-label text-right\">URL:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-url\"\n                data-bind=\"value: assignment.url\">\n                <small class=\"form-text text-muted\">\n                    The course-unique URL that can be used to consistently refer to this assignment. \n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-public\">Public:</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-public\"\n                    data-bind=\"checked: assignment.public\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    If not public, users outside of the course will not be able to see the assignment in course listings.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-hidden\">Hidden:</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-hidden\"\n                    data-bind=\"checked: assignment.hidden\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    If hidden, students will not be able to see their grade while working on the assignment.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-reviewed\">Reviewed:</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-reviewed\"\n                    data-bind=\"checked: assignment.reviewed\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    If reviewed, the assignment can be commented upon and regraded by the staff afterwards.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-reviewed\">Starting View:</label>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"btn-group btn-group-toggle mr-2\" data-toggle=\"buttons\">\n                    ".concat(makeStartViewTab("Blocks", "th-large", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].BLOCK), "\n                    ").concat(makeStartViewTab("Split", "columns", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].SPLIT), "\n                    ").concat(makeStartViewTab("Text", "align-left", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].TEXT), "\n                 </div>\n            </div>            \n            <div class=\"col-sm-7\">\n                <small class=\"form-text text-muted\">\n                    ").concat(getDocumentation("startView"), "\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-ip-ranges\" class=\"col-sm-2 col-form-label text-right\">IP Ranges:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-ip-ranges\"\n                data-bind=\"value: assignment.ipRanges\">\n                <small class=\"form-text text-muted\">\n                    Provide a comma-separated list of IP Addresses that will be explicitly allowed. If blank,\n                    then all addresses are allowed. If an address starts with <code>^</code> then it it is explicitly\n                    blacklisted, but that can be overridden in turn with a <code>!</code>. Addresses can also\n                    include a bit mask to allow a range of addresses.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-datasets\" class=\"col-sm-2 col-form-label text-right\">Preloaded Datasets:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-datasets\"\n                data-bind=\"value: assignment.settings.datasets\">\n                <small class=\"form-text text-muted\">\n                    ").concat(getDocumentation("datasets"), "\n                </small>\n            </div>\n        </div>\n        \n        ").concat(ASSIGNMENT_SETTINGS_BOOLEAN_COMPONENTS_HTML, "\n    </form>\n    \n    </div>\n");
function saveAssignmentSettings(model) {
  var settings = {};
  ASSIGNMENT_SETTINGS.forEach(function (setting) {
    var clientName = setting[0],
        serverName = setting[1],
        defaultValue = setting[2];
    var value = model.assignment.settings[clientName](); // Only store this setting if its different from the default

    if (value !== defaultValue) {
      settings[serverName] = value;
    }
  });
  return JSON.stringify(settings);
}
function loadAssignmentSettings(model, settings) {
  if (settings) {
    settings = JSON.parse(settings);
    ASSIGNMENT_SETTINGS.forEach(function (setting) {
      var clientName = setting[0],
          serverName = setting[1];

      if (serverName in settings) {
        model.assignment.settings[clientName](settings[serverName]);
      }
    });

    if (settings.start_view) {
      model.display.pythonMode(settings.start_view);
    }
  }
}
function makeAssignmentSettingsModel(configuration) {
  var settings = {};
  ASSIGNMENT_SETTINGS.forEach(function (setting) {
    var clientName = setting[0],
        serverName = setting[1],
        defaultValue = setting[2];

    if (configuration[serverName] === undefined) {
      settings[clientName] = ko.observable(defaultValue);
    } else {
      settings[clientName] = ko.observable(configuration["assignment.settings." + serverName]);
    }
  });
  return settings;
}

var AssignmentSettingsView =
/*#__PURE__*/
function (_AbstractEditor) {
  _inherits(AssignmentSettingsView, _AbstractEditor);

  function AssignmentSettingsView(main, tag) {
    var _this;

    _classCallCheck(this, AssignmentSettingsView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AssignmentSettingsView).call(this, main, tag));
    _this.dirty = false;
    return _this;
  }

  _createClass(AssignmentSettingsView, [{
    key: "enter",
    value: function enter(newFilename, oldEditor) {
      _get(_getPrototypeOf(AssignmentSettingsView.prototype), "enter", this).call(this, newFilename, oldEditor);

      console.log(this.file);
      this.dirty = false; //TODO: this.updateEditor(this.file.handle());
      // Subscribe to the relevant File
      // this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this));
      // Notify relevant file of changes to BM

      this.currentListener = this.updateHandle.bind(this); //TODO: this.codeMirror.on("change", this.currentListener);
    }
  }, {
    key: "updateEditor",
    value: function updateEditor(newContents) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true; // TODO: Do update

        this.dirty = false;
      }
    }
  }, {
    key: "updateHandle",
    value: function updateHandle(event) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true; //this.file.handle(this.codeMirror.value());
        // TODO: Update

        this.dirty = false;
      }
    }
  }, {
    key: "exit",
    value: function exit(newFilename, oldEditor, newEditor) {
      // Remove subscriber
      //this.currentSubscription.dispose();
      // TODO: update
      //this.codeMirror.off("change", this.currentListener);
      _get(_getPrototypeOf(AssignmentSettingsView.prototype), "exit", this).call(this, newFilename, oldEditor);
    }
  }]);

  return AssignmentSettingsView;
}(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"]);

var AssignmentSettings = {
  name: "Assignment Settings",
  extensions: ["!assignment_settings.blockpy"],
  constructor: AssignmentSettingsView,
  template: ASSIGNMENT_SETTINGS_EDITOR_HTML
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! knockout */ "knockout")))

/***/ }),

/***/ "./src/editor/markdown.js":
/*!********************************!*\
  !*** ./src/editor/markdown.js ***!
  \********************************/
/*! exports provided: MARKDOWN_EDITOR_HTML, MarkdownEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARKDOWN_EDITOR_HTML", function() { return MARKDOWN_EDITOR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownEditor", function() { return MarkdownEditor; });
/* harmony import */ var _abstract_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_editor */ "./src/editor/abstract_editor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var MARKDOWN_EDITOR_HTML = "\n    <textarea class=\"blockpy-editor-markdown\"></textarea>    \n";

var MarkdownEditorView =
/*#__PURE__*/
function (_AbstractEditor) {
  _inherits(MarkdownEditorView, _AbstractEditor);

  function MarkdownEditorView(main, tag) {
    var _this;

    _classCallCheck(this, MarkdownEditorView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MarkdownEditorView).call(this, main, tag));
    _this.mde = new EasyMDE({
      element: tag.find(".blockpy-editor-markdown")[0],
      autoDownloadFontAwesome: false,
      forceSync: true,
      minHeight: "500px",
      // TODO: imageUploadFunction
      renderingConfig: {
        codeSyntaxHighlighting: true
      },
      indentWithTabs: false,
      tabSize: 4
    });
    _this.dirty = false;
    return _this;
  }

  _createClass(MarkdownEditorView, [{
    key: "enter",
    value: function enter(newFilename, oldEditor) {
      _get(_getPrototypeOf(MarkdownEditorView.prototype), "enter", this).call(this, newFilename, oldEditor);

      this.dirty = false;
      this.updateEditor(this.file.handle()); // Subscribe to the relevant File

      this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this)); // Notify relevant file of changes to BM

      this.currentListener = this.updateHandle.bind(this);
      this.mde.codemirror.on("change", this.currentListener);

      if (oldEditor !== this) {
        // Delay so that everything is rendered
        setTimeout(this.mde.codemirror.refresh.bind(this.mde.codemirror), 1);
      }
    }
  }, {
    key: "updateEditor",
    value: function updateEditor(newContents) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.mde.value(newContents);
        this.mde.codemirror.refresh();
        this.dirty = false;
      }
    }
  }, {
    key: "updateHandle",
    value: function updateHandle(event) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.file.handle(this.mde.value());
        this.dirty = false;
      }
    }
  }, {
    key: "exit",
    value: function exit(newFilename, oldEditor, newEditor) {
      // Remove subscriber
      this.currentSubscription.dispose();
      this.mde.codemirror.off("change", this.currentListener);

      _get(_getPrototypeOf(MarkdownEditorView.prototype), "exit", this).call(this, newFilename, oldEditor);
    }
  }]);

  return MarkdownEditorView;
}(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"]);

var MarkdownEditor = {
  name: "Markdown",
  extensions: [".md"],
  constructor: MarkdownEditorView,
  template: MARKDOWN_EDITOR_HTML
};

/***/ }),

/***/ "./src/editor/python.js":
/*!******************************!*\
  !*** ./src/editor/python.js ***!
  \******************************/
/*! exports provided: DisplayModes, PYTHON_EDITOR_HTML, PythonEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayModes", function() { return DisplayModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PYTHON_EDITOR_HTML", function() { return PYTHON_EDITOR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PythonEditor", function() { return PythonEditor; });
/* harmony import */ var _abstract_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_editor */ "./src/editor/abstract_editor.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../history */ "./src/history.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * TODO: rename files, manual save, tags, sample_submissions, on_eval, non-builtin files
 * TODO: import data, history, run, url_data, assignment_settings, parsons_mode
 * TODO: delete becomes "clear" for instructor files
 */

/**
 *
 * @enum {str}
 */


var DisplayModes = {
  BLOCK: "block",
  SPLIT: "split",
  TEXT: "text"
};

function makeTab(name, icon, mode) {
  return "<label class=\"btn btn-outline-secondary blockpy-mode-set-blocks\"\n                data-bind=\"css: {active: display.pythonMode() === '".concat(mode, "'},\n                           click: ui.editors.python.updateMode.bind($data, '").concat(mode, "')\">\n                <span class='fas fa-").concat(icon, "'></span>\n                <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\" checked> ").concat(name, "\n            </label>");
}

var PYTHON_EDITOR_HTML = "\n    <div class=\"blockpy-python-toolbar col-md-12 btn-toolbar\"\n         role=\"toolbar\" aria-label=\"Python Toolbar\">\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Run Group\">         \n            <button type=\"button\" class=\"btn blockpy-run\"\n                data-bind=\"click: ui.execute.run\">\n                <span class=\"fas fa-play\"></span> Run\n             </button>\n         </div>\n         \n         <div class=\"btn-group btn-group-toggle mr-2\" data-toggle=\"buttons\">\n            ".concat(makeTab("Blocks", "th-large", DisplayModes.BLOCK), "\n            ").concat(makeTab("Split", "columns", DisplayModes.SPLIT), "\n            ").concat(makeTab("Text", "align-left", DisplayModes.TEXT), "\n         </div>\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Reset Group\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\"\n                 data-bind=\"click: ui.editors.reset\">\n                 <span class=\"fas fa-sync\"></span> Reset\n              </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Import Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.importDataset\">\n                <span class=\"fas fa-cloud-download-alt\"></span> Import datasets\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\">\n                <label class=\"btn btn-outline-secondary\">\n                    <span class=\"fas fa-file-upload\"></span> Upload\n                    <input class=\"blockpy-toolbar-upload\" type=\"file\"\n                        hidden\n                        data-bind=\"event: {change: ui.editors.upload}\">\n                 </label>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle dropdown-toggle-split\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <span class=\"caret\"></span>\n                    <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                \n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <a class='dropdown-item blockpy-toolbar-download'\n                        data-bind=\"click: ui.editors.download\">\n                    <span class='fas fa-download'></span> Download\n                    </a>\n                </div>\n            </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"History Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                aria-pressed=\"false\"\n                data-bind=\"click: ui.editors.python.toggleHistoryMode,\n                           enable: ui.editors.python.isHistoryAvailable,\n                           css: { active: display.historyMode },\n                           attr: { 'aria-pressed': display.historyMode }\">\n                <span class=\"fas fa-history\"></span> History\n             </button>\n         </div>\n         \n         <!-- Fully functional, but a little too.. Invasive \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Fullscreen Group\"\n            data-bind=\"visible: display.pythonMode() === 'text'\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.python.fullscreen\">\n                <span class=\"fas fa-expand-arrows-alt\"></span> Fullscreen\n             </button>\n         </div>\n         -->\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Save Group\"\n            data-bind=\"visible: ui.editors.canSave\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-save\"></span> Save\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Delete Group\"\n            data-bind=\"visible: ui.editors.canDelete\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\",\n                data-bind=\"click: ui.files.delete\">\n                <span class=\"fas fa-trash\"></span> Delete\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Rename Group\"\n            data-bind=\"visible: ui.editors.canRename\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-file-signature\"></span> Rename\n             </button>\n         </div>\n         \n    </div>\n    \n    ").concat(_history__WEBPACK_IMPORTED_MODULE_1__["HISTORY_TOOLBAR_HTML"], "\n\n\n    <div class=\"blockpy-python-blockmirror\"\n        data-bind=\"hidden: ui.menu.isSubmitted\">\n    </div>\n");

function convertIpynbToPython(code) {
  var ipynb = JSON.parse(code);

  var isUsable = function isUsable(cell) {
    if (cell.cell_type === "code") {
      return cell.source.length > 0 && !cell.source[0].startsWith("%");
    } else {
      return cell.cell_type === "markdown" || cell.cell_type === "raw";
    }
  };

  var makePython = function makePython(cell) {
    if (cell.cell_type === "code") {
      return cell.source.join("\n");
    } else if (cell.cell_type === "markdown" || cell.cell_type === "raw") {
      return "'''" + cell.source.join("\n") + "'''";
    }
  };

  return ipynb.cells.filter(isUsable).map(makePython).join("\n");
}

var PythonEditorView =
/*#__PURE__*/
function (_AbstractEditor) {
  _inherits(PythonEditorView, _AbstractEditor);

  function PythonEditorView(main, tag) {
    var _this;

    _classCallCheck(this, PythonEditorView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PythonEditorView).call(this, main, tag.find(".blockpy-python-blockmirror")));
    _this.bm = new BlockMirror({
      "container": _this.tag[0],
      "run": main.components.engine.run.bind(main.components.engine),
      "skipSkulpt": true,
      "blocklyMediaPath": main.model.configuration.blocklyPath //'height': '2000px'

    });
    _this.dirty = false;
    _this.readOnly = false;

    _this.makeSubscriptions();

    _this.lineErrorSubscription = null;
    _this.lineUncoveredSubscription = null;
    _this.oldPythonMode = _this.main.model.display.pythonMode();
    return _this;
  }

  _createClass(PythonEditorView, [{
    key: "configureExtraBlockly",
    value: function configureExtraBlockly() {
      var _this2 = this;

      this.bm.blockEditor.workspace.configureContextMenu = function (options) {
        options.push({
          enabled: true,
          text: "Screenshot",
          callback: function callback() {
            return _this2.main.components.dialog.SCREENSHOT_BLOCKS;
          }
        });
      };
    }
  }, {
    key: "enter",
    value: function enter(newFilename, oldEditor) {
      var _this3 = this;

      var oldFilename = this.filename;

      _get(_getPrototypeOf(PythonEditorView.prototype), "enter", this).call(this, newFilename, oldEditor);

      this.dirty = false;

      if (newFilename !== "answer.py") {
        if (oldFilename === "answer.py") {
          this.oldPythonMode = this.main.model.display.pythonMode();
        }

        this.main.model.display.pythonMode(DisplayModes.TEXT);
      } else {
        this.main.model.display.pythonMode(this.oldPythonMode);
      }

      this.updateEditor(this.file.handle()); // Subscribe to the relevant File

      this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this)); // Notify relevant file of changes to BM

      this.currentBMListener = this.updateHandle.bind(this);
      this.bm.addChangeListener(this.currentBMListener);

      if (newFilename !== "answer.py") {
        this.bm.isParsons = function () {
          return false;
        };
      } else {
        this.bm.isParsons = this.main.model.assignment.settings.isParsons;
        this.lineErrorSubscription = this.main.model.execution.feedback.linesError.subscribe(function (lines) {
          return _this3.bm.setHighlightedLines(lines, "editor-error-line");
        });
        this.lineUncoveredSubscription = this.main.model.execution.feedback.linesUncovered.subscribe(function (lines) {
          return _this3.bm.setHighlightedLines(lines, "editor-uncovered-line");
        });
      } //this.bm.blockEditor.workspace.render();
      //this.bm.refresh();
      // TODO: Figure out why this doesn't end up looking right (go to a different editor, come back, and it'll be squished)
      //this.bm.refresh();


      setTimeout(function () {
        return _this3.bm.refresh();
      }, 0);
    }
  }, {
    key: "updateEditor",
    value: function updateEditor(newContents) {
      if (newContents === undefined) {
        if (this.file !== null) {
          newContents = this.file.handle();
        } else {
          // Doesn't matter, file was already shut down.
          newContents = "";
        }
      } else if (newContents === null) {
        // We're closing this file
        this.main.components.fileSystem.deleteFileLocally_(this.filename);
        return;
      }

      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.bm.setCode(newContents); // Delay so that everything is rendered

        this.dirty = false;
      }
    }
  }, {
    key: "updateHandle",
    value: function updateHandle(event) {
      this.bm.clearHighlightedLines();
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;

        if (!this.main.model.display.historyMode()) {
          this.file.handle(this.bm.getCode());
        }

        this.dirty = false;
      }
    }
  }, {
    key: "exit",
    value: function exit(newFilename, oldEditor, newEditor) {
      // Remove subscriber
      this.dirty = false;
      this.currentSubscription.dispose();
      this.bm.removeChangeListener(this.currentBMListener);

      if (this.main.model.display.historyMode()) {
        this.main.model.ui.editors.python.turnOffHistoryMode();
      }

      this.clearLineSubscriptions();

      _get(_getPrototypeOf(PythonEditorView.prototype), "exit", this).call(this, newFilename, oldEditor);
    }
  }, {
    key: "clearLineSubscriptions",
    value: function clearLineSubscriptions() {
      this.bm.clearHighlightedLines();

      if (this.lineErrorSubscription) {
        this.lineErrorSubscription.dispose();
        this.lineErrorSubscription = null;
      }

      if (this.lineUncoveredSubscription) {
        this.lineUncoveredSubscription.dispose();
        this.lineUncoveredSubscription = null;
      }
    }
  }, {
    key: "makeSubscriptions",
    value: function makeSubscriptions() {
      var _this4 = this;

      this.bm.setMode(this.main.model.display.pythonMode());
      this.main.model.display.pythonMode.subscribe(function (mode) {
        _this4.bm.setMode(mode);
      });
    }
  }, {
    key: "setReadOnly",
    value: function setReadOnly(isReadOnly) {
      this.readOnly = isReadOnly;
      this.bm.setReadOnly(isReadOnly);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(event) {
      var filename = event.target.fileName;
      var code = event.target.result;

      if (filename.endsWith(".ipynb")) {
        code = convertIpynbToPython(code);
      }

      this.main.components.server.logEvent("X-File.Upload", "", "", code, this.filename);
      this.file.handle(code);
      this.main.components.engine.run(); // TODO: Run code
    }
  }, {
    key: "downloadFile",
    value: function downloadFile() {
      var result = _get(_getPrototypeOf(PythonEditorView.prototype), "downloadFile", this).call(this);

      if (result.name === "answer" && result.extension === ".py") {
        result.name = Object(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["sluggify"])(this.main.model.assignment.name());
      }

      result.mimetype = "text/x-python";
      this.main.components.server.logEvent("X-File.Download", "", "", "", result.name);
      return result;
    }
  }]);

  return PythonEditorView;
}(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"]);

var PythonEditor = {
  name: "Python",
  extensions: [".py"],
  constructor: PythonEditorView,
  template: PYTHON_EDITOR_HTML
};

/***/ }),

/***/ "./src/editor/tags.js":
/*!****************************!*\
  !*** ./src/editor/tags.js ***!
  \****************************/
/*! exports provided: TAGS_EDITOR_HTML, TagsEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_EDITOR_HTML", function() { return TAGS_EDITOR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsEditor", function() { return TagsEditor; });
/* harmony import */ var _abstract_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_editor */ "./src/editor/abstract_editor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TAGS_EDITOR_HTML = "\nCreate new\nImport by name\nFind by owner/course/kind\n\nTags:\n    Data:\n        Name\n        Kind\n        Level\n        Version\n        Description\n    Controls:\n        Edit\n        Remove\n        Delete \n";

var TagsEditorView =
/*#__PURE__*/
function (_AbstractEditor) {
  _inherits(TagsEditorView, _AbstractEditor);

  function TagsEditorView(main, tag) {
    _classCallCheck(this, TagsEditorView);

    return _possibleConstructorReturn(this, _getPrototypeOf(TagsEditorView).call(this, main, tag.find(".blockpy-editor-tags")));
  }

  return TagsEditorView;
}(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"]);

var TagsEditor = {
  name: "Tags",
  extensions: ["!tags.blockpy"],
  constructor: TagsEditorView,
  template: TAGS_EDITOR_HTML
};

/***/ }),

/***/ "./src/editor/text.js":
/*!****************************!*\
  !*** ./src/editor/text.js ***!
  \****************************/
/*! exports provided: TEXT_EDITOR_HTML, TextEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_EDITOR_HTML", function() { return TEXT_EDITOR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditor", function() { return TextEditor; });
/* harmony import */ var _abstract_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_editor */ "./src/editor/abstract_editor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TEXT_EDITOR_HTML = "\n    <div>\n    <textarea class=\"blockpy-editor-text\"></textarea>\n    </div>\n";

var TextEditorView =
/*#__PURE__*/
function (_AbstractEditor) {
  _inherits(TextEditorView, _AbstractEditor);

  function TextEditorView(main, tag) {
    var _this;

    _classCallCheck(this, TextEditorView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextEditorView).call(this, main, tag));
    _this.codeMirror = CodeMirror.fromTextArea(tag.find(".blockpy-editor-text")[0], {
      showCursorWhenSelecting: true,
      lineNumbers: true,
      firstLineNumber: 1,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false,
      extraKeys: {
        "Tab": "indentMore",
        "Shift-Tab": "indentLess",
        "Esc": function Esc(cm) {
          if (cm.getOption("fullScreen")) {
            cm.setOption("fullScreen", false);
          } else {
            cm.display.input.blur();
          }
        },
        "F11": function F11(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        }
      }
    });
    _this.dirty = false;
    return _this;
  }

  _createClass(TextEditorView, [{
    key: "enter",
    value: function enter(newFilename, oldEditor) {
      _get(_getPrototypeOf(TextEditorView.prototype), "enter", this).call(this, newFilename, oldEditor);

      this.dirty = false;
      this.updateEditor(this.file.handle()); // Subscribe to the relevant File

      this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this)); // Notify relevant file of changes to BM

      this.currentListener = this.updateHandle.bind(this);
      this.codeMirror.on("change", this.currentListener);

      if (oldEditor !== this) {
        // Delay so that everything is rendered
        setTimeout(this.codeMirror.refresh.bind(this.codeMirror), 1);
      }
    }
  }, {
    key: "updateEditor",
    value: function updateEditor(newContents) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.codemirror.setValue(newContents);
        this.mde.codemirror.refresh();
        this.dirty = false;
      }
    }
  }, {
    key: "updateHandle",
    value: function updateHandle(event) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.file.handle(this.codeMirror.value());
        this.dirty = false;
      }
    }
  }, {
    key: "exit",
    value: function exit(newFilename, oldEditor, newEditor) {
      // Remove subscriber
      this.currentSubscription.dispose();
      this.codeMirror.off("change", this.currentListener);

      _get(_getPrototypeOf(TextEditorView.prototype), "exit", this).call(this, newFilename, oldEditor);
    }
  }]);

  return TextEditorView;
}(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"]);

var TextEditor = {
  name: "Text",
  extensions: [".txt"],
  constructor: TextEditorView,
  template: TEXT_EDITOR_HTML
};

/***/ }),

/***/ "./src/editors.js":
/*!************************!*\
  !*** ./src/editors.js ***!
  \************************/
/*! exports provided: EditorsEnum, EDITORS_HTML, Editors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsEnum", function() { return EditorsEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITORS_HTML", function() { return EDITORS_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editors", function() { return Editors; });
/* harmony import */ var _editor_python__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor/python */ "./src/editor/python.js");
/* harmony import */ var _editor_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/text */ "./src/editor/text.js");
/* harmony import */ var _editor_assignment_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/assignment_settings */ "./src/editor/assignment_settings.js");
/* harmony import */ var _editor_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor/tags */ "./src/editor/tags.js");
/* harmony import */ var _editor_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor/markdown */ "./src/editor/markdown.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Editors are inferred from Filenames.
 *
 * The editor is based on the extension:
 *  .blockpy: Special editor (will be chosen by filename)
 *  .py: Python Editor
 *  .md: Markdown Editor
 *  .txt: Text Editor (also used for other types)
 *  .peml: PEML Editor
 *  .png, .gif, .jpeg, .jpg, .bmp: Image Editor
 *  .json: JSON Editor
 *  .yaml: YAML Editor
 */





/**
 * The different possible editors available
 * @enum {string}
 */

var EditorsEnum = {
  SUBMISSION: "submission",
  ASSIGNMENT: "assignment",
  INSTRUCTIONS: "instructions",
  ON_RUN: "on_run",
  ON_CHANGE: "on_change",
  ON_EVAL: "on_eval",
  STARTING_CODE: "starting_code",
  SAMPLE_SUBMISSIONS: "sample_submissions",
  INSTRUCTOR_FILE: "instructor_file"
};
var SPECIAL_NAMESPACES = ["!", "^", "?", "$"];
var AVAILABLE_EDITORS = [_editor_text__WEBPACK_IMPORTED_MODULE_1__["TextEditor"], _editor_python__WEBPACK_IMPORTED_MODULE_0__["PythonEditor"], _editor_assignment_settings__WEBPACK_IMPORTED_MODULE_2__["AssignmentSettings"], _editor_tags__WEBPACK_IMPORTED_MODULE_3__["TagsEditor"], _editor_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownEditor"]];
var EDITORS_HTML = AVAILABLE_EDITORS.map(function (editor) {
  return "\n<div class=\"col-md-12 blockpy-panel blockpy-editor\">\n    <div data-bind=\"visible: ui.editors.view().name === '".concat(editor.name, "'\">\n    ").concat(editor.template, "    \n    </div>\n</div>\n");
}
/*
`
<!-- ko if: ui.editors.view().name === '${editor.name}' -->
${editor.template}
<!-- /ko -->`*/
).join("\n");
var Editors =
/*#__PURE__*/
function () {
  function Editors(main, tag) {
    var _this = this;

    _classCallCheck(this, Editors);

    this.main = main;
    this.tag = tag;
    this.current = null;
    this.registered_ = [];
    this.extensions_ = {};
    this.byName_ = {};
    AVAILABLE_EDITORS.forEach(function (editor) {
      return _this.registerEditor(editor);
    });
    this.main.model.display.filename.subscribe(this.changeEditor, this);
  }

  _createClass(Editors, [{
    key: "registerEditor",
    value: function registerEditor(data) {
      var extensions = data.extensions;
      var instance = new data.constructor(this.main, this.tag);
      instance.name = data.name;
      this.registered_.push(instance);
      this.byName_[data.name.toLowerCase()] = instance;

      for (var i = 0; i < extensions.length; i++) {
        this.extensions_[extensions[i]] = instance;
      }
    }
  }, {
    key: "byName",
    value: function byName(name) {
      return this.byName_[name.toLowerCase()];
    }
  }, {
    key: "changeEditor",
    value: function changeEditor(newFilename) {
      var oldEditor = this.current;
      var newEditor = this.getEditor(newFilename, oldEditor);

      if (oldEditor !== null) {
        oldEditor.exit(newFilename, oldEditor, newEditor);
      }

      this.current = newEditor;
      this.current.enter(newFilename, oldEditor);
    }
  }, {
    key: "getEditor",
    value: function getEditor(path) {
      var _Editors$parseFilenam = Editors.parseFilename(path),
          space = _Editors$parseFilenam.space,
          name = _Editors$parseFilenam.name,
          type = _Editors$parseFilenam.type;

      if (type === ".blockpy" && path in this.extensions_) {
        return this.extensions_[path];
      } else if (type in this.extensions_) {
        return this.extensions_[type];
      } else {
        return this.registered_[0];
      }
    }
  }], [{
    key: "parseFilename",
    value: function parseFilename(path) {
      var space = path.charAt(0);

      if (SPECIAL_NAMESPACES.indexOf(space) !== -1) {
        path = path.substr(1);
      } else {
        space = "";
      }

      var name = path.substr(0, path.lastIndexOf("."));
      var type = path.substr(path.lastIndexOf("."));
      return {
        "space": space,
        "name": name,
        "type": type
      };
    }
  }]);

  return Editors;
}();

/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/*! exports provided: BlockPyEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyEngine", function() { return BlockPyEngine; });
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/server.js");
/* harmony import */ var _engine_on_run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/on_run */ "./src/engine/on_run.js");
/* harmony import */ var _engine_run__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/run */ "./src/engine/run.js");
/* harmony import */ var _engine_eval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/eval */ "./src/engine/eval.js");
/* harmony import */ var _engine_sample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/sample */ "./src/engine/sample.js");
/* harmony import */ var _engine_on_change__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine/on_change */ "./src/engine/on_change.js");
/* harmony import */ var _engine_on_eval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine/on_eval */ "./src/engine/on_eval.js");
/* harmony import */ var _engine_on_sample__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engine/on_sample */ "./src/engine/on_sample.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









/**
 * An object for executing Python code and passing the results along to interested components.
 *
 * Interesting components:
 *  Execution Buffer: Responsible for collecting the trace during program execution.
 *                    This prevents Knockoutjs from updating the editor during execution.
 *
 * @constructor
 * @this {BlockPyEditor}
 * @param {Object} main - The main BlockPy instance
 * @param {HTMLElement} tag - The HTML object this is attached to.
 */

var BlockPyEngine =
/*#__PURE__*/
function () {
  function BlockPyEngine(main) {
    _classCallCheck(this, BlockPyEngine);

    this.main = main;
    this.executionModel = this.main.model.execution;
    this.configurations = {
      run: new _engine_run__WEBPACK_IMPORTED_MODULE_2__["RunConfiguration"](main),
      eval: new _engine_eval__WEBPACK_IMPORTED_MODULE_3__["EvalConfiguration"](main),
      onRun: new _engine_on_run__WEBPACK_IMPORTED_MODULE_1__["OnRunConfiguration"](main),
      onChange: new _engine_on_change__WEBPACK_IMPORTED_MODULE_5__["OnChangeConfiguration"](main),
      onEval: new _engine_on_eval__WEBPACK_IMPORTED_MODULE_6__["OnEvalConfiguration"](main)
    }; // Preconfigure skulpt so we can parse

    Sk.configure(this.configurations.run.getSkulptOptions()); // Keeps track of the tracing while the program is executing

    this.executionBuffer = {};
    /**
     * Definable function to be run when execution has fully ended,
     * whether it succeeds or fails.
     */

    this.onExecutionBegin = null;
    this.onExecutionEnd = null;
  }
  /**
   * Reset reports
   */


  _createClass(BlockPyEngine, [{
    key: "resetReports",
    value: function resetReports() {
      var report = this.executionModel.reports;
      report["verifier"] = {};
      report["parser"] = {};
      report["student"] = {};
      report["instructor"] = {};
    }
  }, {
    key: "resetStudentModel",
    value: function resetStudentModel() {
      var student = this.executionModel.student;
      student.currentStep(null);
      student.currentTraceStep(0);
      student.lastStep(0);
      student.currentLine(null);
      student.currentTraceData.removeAll();
      student.results = null;
    }
  }, {
    key: "resetExecutionBuffer",
    value: function resetExecutionBuffer() {
      this.executionBuffer = {
        "trace": [],
        "step": 0,
        "line": 0
      };
    }
  }, {
    key: "reset",

    /**
     * Remove all interface aspects of the previous Run.
     */
    value: function reset() {
      // TODO: Clear out any coverage/trace/error highlights in editors
      // Reset execution in model
      this.resetStudentModel(); // Get reports ready

      this.resetReports(); // Clear out the execution buffer

      this.resetExecutionBuffer(); // Clear out the console of printed stuff

      this.main.components.console.clear(); // Clear out any old feedback

      this.main.components.feedback.clear();
    }
  }, {
    key: "run",
    value: function run() {
      this.configuration = this.configurations.run.use(this);
      var execution = this.execute().then(this.configuration.success.bind(this.configuration), this.configuration.failure.bind(this.configuration));

      if (!this.main.model.assignment.settings.disableFeedback()) {
        execution.then(this.onRun.bind(this));
      }
    }
  }, {
    key: "onRun",
    value: function onRun() {
      this.configuration = this.configurations.onRun.use(this);
      this.execute().then(this.configuration.success.bind(this.configuration), this.configuration.failure.bind(this.configuration)).then(this.executionEnd_.bind(this));
    }
  }, {
    key: "evaluate",
    value: function evaluate() {
      var _this = this;

      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_0__["StatusState"].ACTIVE);
      var evaluationInput = this.main.components.console.evaluate();
      console.log(evaluationInput);
      evaluationInput.then(function (userInput) {
        _this.configuration = _this.configurations.eval.use(_this, userInput);

        var execution = _this.execute().then(_this.configuration.success.bind(_this.configuration), _this.configuration.failure.bind(_this.configuration));

        if (!_this.main.model.assignment.settings.disableFeedback()) {
          execution.then(_this.onEval.bind(_this));
        }
      });
    }
  }, {
    key: "onEval",
    value: function onEval() {
      this.configuration = this.configurations.onEval.use(this);
      this.execute().then(this.configuration.success.bind(this.configuration), this.configuration.failure.bind(this.configuration)).then(this.evaluate.bind(this));
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.configuration = this.configurations.onChange.use(this);
    }
  }, {
    key: "execute",
    value: function execute() {
      var _this2 = this;

      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_0__["StatusState"].ACTIVE);
      return Sk.misceval.asyncToPromise(function () {
        return Sk.importMainWithBody(_this2.configuration.filename, false, _this2.configuration.code, true);
      });
    }
    /**
     * Activated whenever the Python code changes
     */

  }, {
    key: "on_change",
    value: function on_change() {
      var FILENAME = "on_change"; // Skip if the instructor has not defined anything

      if (!this.main.model.programs[FILENAME]().trim()) {
        return false;
      }

      this.main.model.execution.status("changing");
      this.main.components.server.saveCode(); // On step does not perform parse analysis by default or run student code

      var engine = this;
      var feedback = this.main.components.feedback;
      engine.resetReports();
      engine.verifyCode();
      engine.updateParse();
      engine.runInstructorCode(FILENAME, true, function (module) {
        if (Sk.executionReports["instructor"]["success"]) {
          // SUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE
          // TODO: only show under certain circumstances
          if (!success && !(category === "Instructor" && label === "No errors")) {
            feedback.presentFeedback(category, label, message, line);
          }

          engine.main.components.feedback.presentFeedback(module.$d);
          engine.main.model.execution.status("complete");
        }
      });
      engine.main.components.server.logEvent("engine", "on_change");
    }
  }, {
    key: "executionEnd_",

    /**
     * Helper function that will attempt to call the defined onExecutionEnd,
     * but will do nothing if there is no function defined.
     */
    value: function executionEnd_() {
      if (this.onExecutionEnd !== null) {
        this.onExecutionEnd();
      }
    }
    /**
     *
     */

  }, {
    key: "executionBegin_",
    value: function executionBegin_() {
      if (this.onExecutionBegin !== null) {
        this.onExecutionBegin();
      }
    }
  }]);

  return BlockPyEngine;
}();

/***/ }),

/***/ "./src/engine/configurations.js":
/*!**************************************!*\
  !*** ./src/engine/configurations.js ***!
  \**************************************/
/*! exports provided: EMPTY_MODULE, Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_MODULE", function() { return EMPTY_MODULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EMPTY_MODULE = "let $builtinmodule = function(mod){ return mod; }";
/**
 * A container for holding settings of a particular run configuration.
 */

var Configuration =
/*#__PURE__*/
function () {
  function Configuration(main) {
    _classCallCheck(this, Configuration);

    this.main = main;
    this.filename = null;
    this.code = null;
  }

  _createClass(Configuration, [{
    key: "use",
    value: function use(engine) {
      // Access point for instructor data
      this.engine = engine;
      Sk.executionReports = this.main.model.execution.reports;
      Sk.console = this.main.components.console;
      Sk.queuedInput = [];
      Sk.configure(this.getSkulptOptions());
      return this;
    }
  }, {
    key: "getSkulptOptions",
    value: function getSkulptOptions() {
      return {
        __future__: Sk.python3,
        // import
        read: this.importFile.bind(this),
        // open
        fileopen: this.openFile.bind(this),
        // file.write
        filewrite: this.writeFile.bind(this),
        // print
        output: this.print.bind(this),
        // Prevents reading HTML elements as files
        inBrowser: false,
        // input
        inputfun: this.input.bind(this),
        inputfunTakesPrompt: true,
        // Media Image Proxy URL
        imageProxy: this.getImageProxy.bind(this),
        // Whether or not to keep the globals
        retainGlobals: true
      };
    }
    /**
     * Used to access Skulpt built-ins. This is pretty generic, taken
     * almost directly from the Skulpt docs.
     *
     * @param {String} filename - The python filename (e.g., "os" or "pprint") that will be loaded.
     * @returns {String} The JavaScript source code of the file (weird, right?)
     * @throws Will throw an error if the file isn't found.
     */

  }, {
    key: "importFile",
    value: function importFile(filename) {
      console.warn("Unimplemented method!"); // TODO
    }
  }, {
    key: "openFile",
    value: function openFile() {
      console.warn("Unimplemented method!"); // TODO
    }
  }, {
    key: "writeFile",
    value: function writeFile() {
      console.warn("Unimplemented method!"); // TODO
    }
  }, {
    key: "print",
    value: function print(value) {
      this.main.components.console.print(value);
    }
  }, {
    key: "input",
    value: function input() {
      console.warn("Unimplemented method!"); // TODO
    }
  }, {
    key: "getImageProxy",
    value: function getImageProxy() {// TODO
    }
  }, {
    key: "step",
    value: function step() {}
  }, {
    key: "lastStep",
    value: function lastStep() {}
  }, {
    key: "isForbidden",
    value: function isForbidden(filename) {
      return false;
    }
  }, {
    key: "success",
    value: function success(module) {
      throw new Error("Abstract success execution");
    }
  }, {
    key: "failure",
    value: function failure(error) {
      throw new Error("Abstract failure execution");
    }
  }, {
    key: "dummyOutSandbox",
    value: function dummyOutSandbox() {//Sk.builtinFiles.files["src/lib/pedal/sandbox/sandbox.py"] = "class Sandbox: pass\ndef run(): pass\ndef reset(): pass\n";
    }
  }], [{
    key: "inputMockFunction",
    value: function inputMockFunction() {
      if (Sk.queuedInput.length) {
        return Sk.queuedInput.pop();
      } else {
        return "";
      }
    }
  }]);

  return Configuration;
}();

/***/ }),

/***/ "./src/engine/eval.js":
/*!****************************!*\
  !*** ./src/engine/eval.js ***!
  \****************************/
/*! exports provided: EvalConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvalConfiguration", function() { return EvalConfiguration; });
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student */ "./src/engine/student.js");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ "./src/server.js");
/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace */ "./src/trace.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var EvalConfiguration =
/*#__PURE__*/
function (_StudentConfiguration) {
  _inherits(EvalConfiguration, _StudentConfiguration);

  function EvalConfiguration() {
    _classCallCheck(this, EvalConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(EvalConfiguration).apply(this, arguments));
  }

  _createClass(EvalConfiguration, [{
    key: "use",
    value: function use(engine, code) {
      // TODO: fix to be currently added line
      this.main.model.execution.feedback.message("Running...");
      this.filename = "answer";
      this.code = "_ = " + code;
      Sk.afterSingleExecution = null;

      _get(_getPrototypeOf(EvalConfiguration.prototype), "use", this).call(this, engine);

      Sk.retainGlobals = true;
      Sk.globals = this.main.model.execution.student.globals();
      this.main.components.server.logEvent("X-File.Add", "", "", code, "evaluations");
      this.main.components.server.logEvent("Compile", "", "", this.code, "evaluations");
      return this;
    }
  }, {
    key: "success",
    value: function success(module) {
      var _this = this;

      console.log("Eval success");
      this.main.components.server.logEvent("X-Evaluate.Program", "", "", "", "evaluations");
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY);
      this.main.model.execution.student.globals(Sk.globals);
      Sk.globals = {};
      var report = this.main.model.execution.reports;
      var filename = this.filename;
      this.main.model.execution.student.results = module;
      this.main.components.console.printValue(Sk.ffi.remapToJs(module.$d._.$r()));
      return new Promise(function (resolve, reject) {
        //this.step(module.$d, module.$d,-1, 0, filename + ".py");
        _this.lastStep();

        report["student"] = {
          "success": true,
          "trace": _this.engine.executionBuffer.trace,
          "lines": _this.engine.executionBuffer.trace.map(function (x) {
            return x.line;
          }),
          "results": module,
          "output": _this.main.model.execution.output,
          "evaluation": _this.code
        };
        resolve();
      });
    }
  }, {
    key: "failure",
    value: function failure(error) {
      console.log("Eval failure");
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].FAILED);
      var report = this.main.model.execution.reports;
      this.main.components.server.logEvent("Compile.Error", "", "", error.toString(), "evaluations");
      return new Promise(function (resolve, reject) {
        report["student"] = {
          "success": false,
          "error": error,
          "evaluation": false
        };
        console.error(error);
        resolve();
      });
    }
  }]);

  return EvalConfiguration;
}(_student__WEBPACK_IMPORTED_MODULE_0__["StudentConfiguration"]);

/***/ }),

/***/ "./src/engine/instructor.js":
/*!**********************************!*\
  !*** ./src/engine/instructor.js ***!
  \**********************************/
/*! exports provided: InstructorConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorConfiguration", function() { return InstructorConfiguration; });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurations.js */ "./src/engine/configurations.js");
/* harmony import */ var _sk_mod_instructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sk_mod_instructor */ "./src/sk_mod_instructor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var UTILITY_MODULE_CODE = "var $builtinmodule = " + _sk_mod_instructor__WEBPACK_IMPORTED_MODULE_1__["$sk_mod_instructor"].toString();
var InstructorConfiguration =
/*#__PURE__*/
function (_Configuration) {
  _inherits(InstructorConfiguration, _Configuration);

  function InstructorConfiguration() {
    _classCallCheck(this, InstructorConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(InstructorConfiguration).apply(this, arguments));
  }

  _createClass(InstructorConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(InstructorConfiguration.prototype), "use", this).call(this, engine); // Instructors have no limits


      Sk.execLimit = undefined; // Stepper! Executed after every statement.

      Sk.afterSingleExecution = null; // Mute everything

      this.main.model.display.mutePrinter(true); // Disable input box

      Sk.queuedInput = []; // TODO Sk.inputfun = BlockPyEngine.inputMockFunction;
      // TODO: Allow input function to disable the timer, somehow
      // Enable utility mode

      Sk.builtinFiles.files["src/lib/utility/__init__.js"] = UTILITY_MODULE_CODE;
      Sk.builtinFiles.files["./_instructor/__init__.js"] = _configurations_js__WEBPACK_IMPORTED_MODULE_0__["EMPTY_MODULE"];
      return this;
    }
  }, {
    key: "importFile",
    value: function importFile(filename) {
      if (filename === "./answer.py") {
        return this.main.model.submission.code();
      } else if (filename === "./_instructor/on_run.py") {
        return this.main.model.assignment.onRun();
      } else if (filename === "./_instructor/on_eval.py") {
        return this.main.model.assignment.onEval() || "";
      } else if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][filename] === undefined) {
        throw "File not found: '" + filename + "'";
      }

      return Sk.builtinFiles["files"][filename];
    }
  }, {
    key: "input",
    value: function input(promptMessage) {
      return "ApplePie";
      return Sk.queuedInput.pop();
      /*return new Promise((resolve) => {
          resolve(Sk.queuedInput.pop());
      });*/
    }
  }]);

  return InstructorConfiguration;
}(_configurations_js__WEBPACK_IMPORTED_MODULE_0__["Configuration"]);

/***/ }),

/***/ "./src/engine/on_change.js":
/*!*********************************!*\
  !*** ./src/engine/on_change.js ***!
  \*********************************/
/*! exports provided: OnChangeConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnChangeConfiguration", function() { return OnChangeConfiguration; });
/* harmony import */ var _instructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instructor */ "./src/engine/instructor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var OnChangeConfiguration =
/*#__PURE__*/
function (_InstructorConfigurat) {
  _inherits(OnChangeConfiguration, _InstructorConfigurat);

  function OnChangeConfiguration() {
    _classCallCheck(this, OnChangeConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnChangeConfiguration).apply(this, arguments));
  }

  _createClass(OnChangeConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(OnChangeConfiguration.prototype), "use", this).call(this, engine);

      this.filename = "on_change.py";
      this.code = this.main.model.assignment.onChange();
      clearTimeout(this.main.model.display.triggerOnChange);
      return this;
    }
  }]);

  return OnChangeConfiguration;
}(_instructor__WEBPACK_IMPORTED_MODULE_0__["InstructorConfiguration"]);

/***/ }),

/***/ "./src/engine/on_eval.js":
/*!*******************************!*\
  !*** ./src/engine/on_eval.js ***!
  \*******************************/
/*! exports provided: WRAP_INSTRUCTOR_CODE, OnEvalConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRAP_INSTRUCTOR_CODE", function() { return WRAP_INSTRUCTOR_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnEvalConfiguration", function() { return OnEvalConfiguration; });
/* harmony import */ var _instructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instructor */ "./src/engine/instructor.js");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ "./src/server.js");
/* harmony import */ var _on_run__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on_run */ "./src/engine/on_run.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @return {string}
 */

var WRAP_INSTRUCTOR_CODE = function WRAP_INSTRUCTOR_CODE(studentCode, instructorCode, quick, isSafe) {
  var safeCode = JSON.stringify(studentCode);
  var indentedCode = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["indent"])(Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["indent"])(isSafe ? studentCode : "None"));
  return "\nfrom pedal.report import *\nfrom pedal.source import set_source\nset_source(".concat(safeCode, ")\ndef run_student():\n    # limit_execution_time()\n    try:\n").concat(indentedCode, "\n    except Exception as error:\n        # unlimit_execution_time()\n        return error\n    # unlimit_execution_time()\n    return None\nfrom pedal.sandbox import compatibility\nfrom utility import *\nstudent = get_student_data()\ncompatibility.set_sandbox(student)\nerror, position = get_student_error()\ncompatibility.raise_exception(error, position)\ncompatibility.run_student = run_student\ncompatibility.get_plots = get_plots\ncompatibility.get_output = get_output\ncompatibility.reset_output = reset_output\ncompatibility.trace_lines = trace_lines\ndef capture_output(func, *args):\n   reset_output()\n   func(*args)\n   return get_output()\ncompatibility.capture_output = capture_output\n").concat(instructorCode, "\nfrom pedal.resolvers import simple\nSUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE = simple.resolve()\n");
};
var OnEvalConfiguration =
/*#__PURE__*/
function (_InstructorConfigurat) {
  _inherits(OnEvalConfiguration, _InstructorConfigurat);

  function OnEvalConfiguration() {
    _classCallCheck(this, OnEvalConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnEvalConfiguration).apply(this, arguments));
  }

  _createClass(OnEvalConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(OnEvalConfiguration.prototype), "use", this).call(this, engine);

      this.filename = "_instructor.on_eval";
      this.code = this.main.model.assignment.onEval() || "";
      var disableTifa = this.main.model.assignment.settings.disableTifa();
      var report = this.main.model.execution.reports;
      var studentCodeSafe = this.main.model.execution.reports.student.evaluation || "None";
      this.dummyOutSandbox();
      var instructorCode = this.code;
      var lineOffset = instructorCode.split(_on_run__WEBPACK_IMPORTED_MODULE_2__["NEW_LINE_REGEX"]).length;
      var isSafe = !report["parser"].empty && report["verifier"].success;
      instructorCode = WRAP_INSTRUCTOR_CODE(studentCodeSafe, instructorCode, disableTifa, isSafe);
      lineOffset = instructorCode.split(_on_run__WEBPACK_IMPORTED_MODULE_2__["NEW_LINE_REGEX"]).length - lineOffset;
      report["instructor"] = {
        "compliments": [],
        "filename": "./_instructor/on_eval.py",
        "code": instructorCode,
        "lineOffset": lineOffset //'complete': false // Actually, let's use undefined for now.

      };
      this.code = instructorCode;

      _get(_getPrototypeOf(OnEvalConfiguration.prototype), "use", this).call(this, engine); //Sk.retainGlobals = false;


      Sk.globals = this.main.model.execution.instructor.globals;
      return this;
    }
  }, {
    key: "success",
    value: function success(module) {
      console.log("OnEval success"); // TODO: Actually parse results

      this.main.model.execution.instructor.globals = Sk.globals;
      var results = module.$d.on_eval.$d;
      console.log(module.$d);
      this.main.components.feedback.presentFeedback(results);
      this.main.model.execution.reports["instructor"]["success"] = true;
      var success = Sk.ffi.remapToJs(results.SUCCESS);
      this.main.model.submission.correct(success || this.main.model.submission.correct()); // Cannot exceed 1 point, cannot go below 0 points

      var score = Sk.ffi.remapToJs(results.SCORE);
      score = Math.max(0.0, Math.min(1.0, score));
      var oldScore = this.main.model.submission.score();
      this.main.model.submission.score(Math.max(oldScore, score)); // Hide status

      var hide = Sk.ffi.remapToJs(results.HIDE); // And fire the result!

      this.main.components.server.updateSubmission(score, success, hide, false);
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY); //after(module);

      /*if (success && this.main.model.configuration.callbacks.success) {
          this.main.model.configuration.callbacks.success(this.main.model.assignment.id());
      }*/

      if (!Sk.executionReports.instructor.scrolling) {
        try {
          this.main.components.console.scrollToBottom();
        } catch (e) {}
      }
    }
  }, {
    key: "failure",
    value: function failure(error) {
      console.log("OnEval failure");
      var report = this.main.model.execution.reports;

      if (error.tp$name === "GracefulExit") {
        report["instructor"]["success"] = true;
        this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY);
      } else {
        this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].FAILED); //console.log(report["instructor"]["code"]);

        console.error(error);
        this.main.components.feedback.presentInternalError(error, this.filename); //report["instructor"]["success"] = false;
        //report["instructor"]["error"] = error;
        //TODO: report["instructor"]["line_offset"] = lineOffset;
      } //TODO: after(error);

    }
  }]);

  return OnEvalConfiguration;
}(_instructor__WEBPACK_IMPORTED_MODULE_0__["InstructorConfiguration"]);

/***/ }),

/***/ "./src/engine/on_run.js":
/*!******************************!*\
  !*** ./src/engine/on_run.js ***!
  \******************************/
/*! exports provided: NEW_LINE_REGEX, WRAP_INSTRUCTOR_CODE, OnRunConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_LINE_REGEX", function() { return NEW_LINE_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRAP_INSTRUCTOR_CODE", function() { return WRAP_INSTRUCTOR_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnRunConfiguration", function() { return OnRunConfiguration; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ "./src/server.js");
/* harmony import */ var _instructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructor */ "./src/engine/instructor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var NEW_LINE_REGEX = /\r\n|\r|\n/;
/**
 * @return {string}
 */

var WRAP_INSTRUCTOR_CODE = function WRAP_INSTRUCTOR_CODE(studentCode, instructorCode, quick, isSafe) {
  var safeCode = JSON.stringify(studentCode);
  var indentedCode = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["indent"])(Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["indent"])(isSafe ? studentCode : "pass"));
  var tifaAnalysis = "";

  if (!quick) {
    tifaAnalysis = "from pedal.tifa import tifa_analysis\ntifa_analysis(False)";
  }

  return "\nfrom pedal.report import *\nfrom pedal.source import set_source\nset_source(".concat(safeCode, ", \"answer.py\")\ndef run_student():\n    # limit_execution_time()\n    try:\n").concat(indentedCode, "\n    except Exception as error:\n        # unlimit_execution_time()\n        return error\n    # unlimit_execution_time()\n    return None\n").concat(tifaAnalysis, "\nfrom pedal.sandbox.sandbox import Sandbox\nfrom pedal.sandbox import compatibility\nfrom utility import *\nstudent = MAIN_REPORT['sandbox']['run'] = Sandbox()\n#student.run(MAIN_REPORT['source']['code'], MAIN_REPORT['source']['filename'], report_exceptions=False)\n#debug(student)\nstudent.report_exceptions_mode = True\ncompatibility.run_student(raise_exceptions=False)\n#log(student.data)\n#student = get_student_data()\n#compatibility.set_sandbox(student)\n#error, position = get_student_error()\n#compatibility.raise_exception(error, position)\n#compatibility.run_student = run_student\nrun_student = compatibility.run_student\nreset_output = compatibility.reset_output\nqueue_input = compatibility.queue_input\nget_output = compatibility.get_output\n#compatibility.get_plots = get_plots\n#compatibility.get_output = get_output\n#compatibility.reset_output = reset_output\ncompatibility.trace_lines = trace_lines\n# TODO: Remove the need for this hack!\ndef capture_output(func, *args):\n   reset_output()\n   student.call(func.__name__, *args)\n   return get_output()\ncompatibility.capture_output = capture_output\n\nfrom pedal.cait.cait_api import parse_program\n").concat(instructorCode, "\nfrom pedal.resolvers import simple\nSUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE = simple.resolve()\nlog(MAIN_REPORT)\n#print(MAIN_REPORT.feedback[0].mistake['error'])\n");
};
var OnRunConfiguration =
/*#__PURE__*/
function (_InstructorConfigurat) {
  _inherits(OnRunConfiguration, _InstructorConfigurat);

  function OnRunConfiguration() {
    _classCallCheck(this, OnRunConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnRunConfiguration).apply(this, arguments));
  }

  _createClass(OnRunConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(OnRunConfiguration.prototype), "use", this).call(this, engine);

      this.filename = "_instructor.on_run";
      this.code = this.main.model.assignment.onRun();
      var disableTifa = this.main.model.assignment.settings.disableTifa();
      var report = this.main.model.execution.reports;
      var studentCodeSafe = this.main.model.submission.code();
      this.dummyOutSandbox();
      var instructorCode = this.code;
      var lineOffset = instructorCode.split(NEW_LINE_REGEX).length;
      console.log(report["parser"]);
      var isSafe = !report["parser"].empty && report["verifier"].success;
      instructorCode = WRAP_INSTRUCTOR_CODE(studentCodeSafe, instructorCode, disableTifa, isSafe);
      lineOffset = instructorCode.split(NEW_LINE_REGEX).length - lineOffset - 4;
      report["instructor"] = {
        "compliments": [],
        "filename": "./_instructor/on_run.py",
        "code": instructorCode,
        "lineOffset": lineOffset //'complete': false // Actually, let's use undefined for now.

      };
      this.code = instructorCode;
      Sk.retainGlobals = false;
      return this;
    }
  }, {
    key: "success",
    value: function success(module) {
      // TODO Logging!!!!
      console.log("OnRun success"); // TODO: Actually parse results

      this.main.model.execution.instructor.globals = Sk.globals;
      Sk.globals = {};
      var results = module.$d.on_run.$d;
      this.main.components.feedback.presentFeedback(results);
      this.main.model.execution.reports["instructor"]["success"] = true;
      var success = Sk.ffi.remapToJs(results.SUCCESS);
      this.main.model.submission.correct(success || this.main.model.submission.correct()); // Cannot exceed 1 point, cannot go below 0 points

      var score = Sk.ffi.remapToJs(results.SCORE);
      score = Math.max(0.0, Math.min(1.0, score));
      var oldScore = this.main.model.submission.score();
      this.main.model.submission.score(Math.max(oldScore, score)); // Hide status

      var hide = Sk.ffi.remapToJs(results.HIDE); // And fire the result!

      this.main.components.server.updateSubmission(score, success, hide, false);
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY); //after(module);

      /*if (success && this.main.model.configuration.callbacks.success) {
          this.main.model.configuration.callbacks.success(this.main.model.assignment.id());
      }*/

      if (!Sk.executionReports.instructor.scrolling) {
        try {
          this.main.components.console.scrollToBottom();
        } catch (e) {}
      }
    }
  }, {
    key: "failure",
    value: function failure(error) {
      console.log("OnRun failure");
      var report = this.main.model.execution.reports;

      if (error.tp$name === "GracefulExit") {
        report["instructor"]["success"] = true;
        this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY);
      } else {
        this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].FAILED); //console.log(report["instructor"]["code"]);

        console.error(error);
        this.main.components.feedback.presentInternalError(error, this.filename); //report["instructor"]["success"] = false;
        //report["instructor"]["error"] = error;
        //TODO: report["instructor"]["line_offset"] = lineOffset;
      } //TODO: after(error);

    }
  }]);

  return OnRunConfiguration;
}(_instructor__WEBPACK_IMPORTED_MODULE_2__["InstructorConfiguration"]);

/***/ }),

/***/ "./src/engine/on_sample.js":
/*!*********************************!*\
  !*** ./src/engine/on_sample.js ***!
  \*********************************/
/*! exports provided: OnSampleConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnSampleConfiguration", function() { return OnSampleConfiguration; });
/* harmony import */ var _on_run__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on_run */ "./src/engine/on_run.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var OnSampleConfiguration =
/*#__PURE__*/
function (_OnRunConfiguration) {
  _inherits(OnSampleConfiguration, _OnRunConfiguration);

  function OnSampleConfiguration() {
    _classCallCheck(this, OnSampleConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnSampleConfiguration).apply(this, arguments));
  }

  _createClass(OnSampleConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(OnSampleConfiguration.prototype), "use", this).call(this, engine);

      this.filename = "on_run.py";
      this.code = this.main.model.assignment.onRun();
      return this;
    }
  }]);

  return OnSampleConfiguration;
}(_on_run__WEBPACK_IMPORTED_MODULE_0__["OnRunConfiguration"]);

/***/ }),

/***/ "./src/engine/run.js":
/*!***************************!*\
  !*** ./src/engine/run.js ***!
  \***************************/
/*! exports provided: RunConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunConfiguration", function() { return RunConfiguration; });
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student */ "./src/engine/student.js");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ "./src/server.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var RunConfiguration =
/*#__PURE__*/
function (_StudentConfiguration) {
  _inherits(RunConfiguration, _StudentConfiguration);

  function RunConfiguration() {
    _classCallCheck(this, RunConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(RunConfiguration).apply(this, arguments));
  }

  _createClass(RunConfiguration, [{
    key: "use",
    value: function use(engine) {
      this.main.model.execution.feedback.message("Running...");
      this.filename = "answer";
      this.code = this.main.model.submission.code();
      this.main.components.server.saveFile("answer.py", this.code, null);
      this.main.components.server.logEvent("Compile", "", "", "", "answer.py");

      _get(_getPrototypeOf(RunConfiguration.prototype), "use", this).call(this, engine);

      engine.reset();
      this.updateParse();
      this.main.model.execution.reports["verifier"] = {
        "success": Boolean(this.code.trim()),
        "code": this.code
      };
      Sk.retainGlobals = false;
      return this;
    }
  }, {
    key: "success",
    value: function success(module) {
      var _this = this;

      console.log("Run success");
      this.main.components.server.logEvent("Run.Program", "", "", "", "answer.py");
      this.main.model.display.dirtySubmission(false);
      this.main.components.console.finishTurtles();
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY);
      this.main.model.execution.student.globals(Sk.globals);
      Sk.globals = {};
      var report = this.main.model.execution.reports;
      var filename = this.filename;
      this.main.model.execution.student.results = module;

      if (!this.main.model.assignment.settings.hideEvaluate()) {
        this.main.components.console.beginEval();
      }

      return new Promise(function (resolve, reject) {
        _this.step(module.$d, module.$d, -1, 0, filename + ".py");

        _this.lastStep();

        report["student"] = {
          "success": true,
          "trace": _this.engine.executionBuffer.trace,
          "lines": _this.engine.executionBuffer.trace.map(function (x) {
            return x.line;
          }),
          "results": module,
          "output": _this.main.model.execution.output
        };
        resolve();
      });
    }
  }, {
    key: "failure",
    value: function failure(error) {
      console.log("Run failure");
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].FAILED);
      var report = this.main.model.execution.reports;

      if (report.parser.success && report.verifier.success) {
        this.main.components.server.logEvent("Compile.Error", "", "", error.toString(), "answer.py");
      } else {
        this.main.components.server.logEvent("Run.Program", "ProgramErrorOutput", "", error.toString(), "answer.py");
      }

      return new Promise(function (resolve, reject) {
        report["student"] = {
          "success": false,
          "error": error
        };
        console.error(error);
        resolve();
      });
    }
  }]);

  return RunConfiguration;
}(_student__WEBPACK_IMPORTED_MODULE_0__["StudentConfiguration"]);

/***/ }),

/***/ "./src/engine/sample.js":
/*!******************************!*\
  !*** ./src/engine/sample.js ***!
  \******************************/
/*! exports provided: SampleConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleConfiguration", function() { return SampleConfiguration; });
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student */ "./src/engine/student.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var SampleConfiguration =
/*#__PURE__*/
function (_StudentConfiguration) {
  _inherits(SampleConfiguration, _StudentConfiguration);

  function SampleConfiguration() {
    _classCallCheck(this, SampleConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(SampleConfiguration).apply(this, arguments));
  }

  _createClass(SampleConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(SampleConfiguration.prototype), "use", this).call(this, engine); // TODO: Fix to be the current sample submission


      this.filename = "answer.py";
      this.code = "print('Not ready yet!')";
      return this;
    }
  }]);

  return SampleConfiguration;
}(_student__WEBPACK_IMPORTED_MODULE_0__["StudentConfiguration"]);

/***/ }),

/***/ "./src/engine/student.js":
/*!*******************************!*\
  !*** ./src/engine/student.js ***!
  \*******************************/
/*! exports provided: StudentConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentConfiguration", function() { return StudentConfiguration; });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurations */ "./src/engine/configurations.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var StudentConfiguration =
/*#__PURE__*/
function (_Configuration) {
  _inherits(StudentConfiguration, _Configuration);

  function StudentConfiguration() {
    _classCallCheck(this, StudentConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(StudentConfiguration).apply(this, arguments));
  }

  _createClass(StudentConfiguration, [{
    key: "use",
    value: function use(engine) {
      var _this = this;

      _get(_getPrototypeOf(StudentConfiguration.prototype), "use", this).call(this, engine); // Limit execution to 5 seconds


      var settings = this.main.model.settings;

      Sk.execLimitFunction = function () {
        return _this.main.model.assignment.settings.disableTimeout() ? Infinity : 10000;
      };

      Sk.execLimit = Sk.execLimitFunction(); // Stepper! Executed after every statement.

      Sk.afterSingleExecution = this.step.bind(this); // Unmute everything

      this.main.model.display.mutePrinter(false); // Function to call after each step
      // afterSingleExecution
      // Proxy requests

      Sk.requestsGet = function (filename) {
        return _this.openURL(filename, "url");
      };

      Sk.builtinFiles.files["src/lib/utility/__init__.js"] = _configurations__WEBPACK_IMPORTED_MODULE_0__["EMPTY_MODULE"];
      return this;
    }
  }, {
    key: "importFile",
    value: function importFile(filename) {
      if (this.isForbidden(filename)) {
        throw "File not accessible: '" + filename + "'";
      } else if (filename === "./answer.py") {
        return this.main.model.submission.code();
      } else if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][filename] === undefined) {
        throw "File not found: '" + filename + "'";
      }

      return Sk.builtinFiles["files"][filename];
    }
  }, {
    key: "input",
    value: function input(promptMessage) {
      return this.main.components.console.input(promptMessage);
    }
  }, {
    key: "isForbidden",
    value: function isForbidden(filename) {
      return filename.startsWith("src/lib/utility/") || filename.startsWith("src/lib/pedal/") || filename.startsWith("./_instructor/");
    }
    /**
     * "Steps" the execution of the code, meant to be used as a callback to the Skulpt
     * environment.
     *
     * @param {Object} variables - Hash that maps the names of variables (Strings) to their Skulpt representation.
     * @param {Number} lineNumber - The corresponding line number in the source code that is being executed.
     * @param {Number} columnNumber - The corresponding column number in the source code that is being executed.
     *                                Think of it as the "X" position to the lineNumber's "Y" position.
     * @param {String} filename - The name of the python file being executed (e.g., "__main__.py").
     */

  }, {
    key: "step",
    value: function step(variables, locals, lineNumber, columnNumber, filename) {
      if (filename === "answer.py") {
        var currentStep = this.engine.executionBuffer.step;
        var globals = this.main.components.trace.parseGlobals(variables); // TODO: Trace local variables properly
        //console.log(globals, locals);
        //let locals = this.main.components.trace.parseGlobals(locals);
        //Object.assign(globals, locals);

        this.engine.executionBuffer.trace.push({
          "step": currentStep,
          "filename": filename,
          //'block': highlightMap[lineNumber-1],
          "line": lineNumber,
          "column": columnNumber,
          "properties": globals.properties,
          "modules": globals.modules
        });
        this.engine.executionBuffer.step = currentStep + 1;
        this.engine.executionBuffer.line = lineNumber;
      }
    }
  }, {
    key: "lastStep",

    /**
     * Called at the end of the Skulpt execution to terminate the executionBuffer
     * and hand it off to the execution trace in the model.
     */
    value: function lastStep() {
      var execution = this.main.model.execution;
      execution.student.currentTraceData(this.engine.executionBuffer.trace);
      execution.student.currentStep(this.engine.executionBuffer.step);
      execution.student.lastStep(this.engine.executionBuffer.step);
      execution.student.currentLine(this.engine.executionBuffer.line);
      execution.student.lastLine(this.engine.executionBuffer.line);
      execution.student.currentTraceStep(this.engine.executionBuffer.step);
    }
  }, {
    key: "getLines",
    value: function getLines(ast) {
      var visitedLines = new Set();

      var visitBody = function visitBody(node) {
        if (node.lineno !== undefined) {
          visitedLines.add(node.lineno);
        }

        if (node.body) {
          node.body.forEach(function (statement) {
            return visitBody(statement);
          });
        }

        if (node.orelse) {
          node.orelse.forEach(function (statement) {
            return visitBody(statement);
          });
        }

        if (node.finalbody) {
          node.finalbody.forEach(function (statement) {
            return visitBody(statement);
          });
        }
      };

      visitBody(ast);
      return Array.from(visitedLines);
    }
    /**
     * Ensure that the parse information is up-to-date
     */

  }, {
    key: "updateParse",
    value: function updateParse() {
      var report = this.main.model.execution.reports; // Hold all the actually discovered lines from the parse

      var lines = []; // Attempt a parse

      var ast;

      try {
        var parse = Sk.parse(this.filename, this.code);
        ast = Sk.astFromParse(parse.cst, this.filename, parse.flags);
        lines = this.getLines(ast);
      } catch (error) {
        // Report the error
        report["parser"] = {
          "success": false,
          "error": error,
          "empty": true,
          "lines": lines
        };
        console.error(error);
        console.log(this.filename, this.code);
        return false;
      } // Successful parse


      report["parser"] = {
        "success": true,
        "ast": ast,
        "empty": ast.body.length === 0,
        "lines": lines
      };
      return true;
    }
  }]);

  return StudentConfiguration;
}(_configurations__WEBPACK_IMPORTED_MODULE_0__["Configuration"]);

/***/ }),

/***/ "./src/feedback.js":
/*!*************************!*\
  !*** ./src/feedback.js ***!
  \*************************/
/*! exports provided: FEEDBACK_HTML, BlockPyFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_HTML", function() { return FEEDBACK_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyFeedback", function() { return BlockPyFeedback; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FEEDBACK_HTML = "\n\n<span class='blockpy-floating-feedback text-muted-less pull-right position-sticky sticky-top'\n    aria-hidden=\"true\" role=\"presentation\" aria-label=\"New Feedback Alert\">\n    New feedback &uarr;\n</span>\n\n<div class='blockpy-feedback col-md-6 blockpy-panel'\n            role=\"region\" aria-label=\"Feedback\"\n            aria-live=\"polite\">\n\n    <!-- Feedback/Trace Visibility Control -->\n    <button type='button'\n            class='btn btn-sm btn-outline-secondary float-right'\n            data-bind=\"click: ui.secondRow.advanceState\">\n        <span class='fas fa-eye'></span>\n        <span data-bind=\"text: ui.secondRow.switchLabel\"></span>\n    </button>\n\n    <!-- Actual Feedback Region -->    \n    <div>\n        <strong>Feedback: </strong>\n        <span class='badge blockpy-feedback-category feedback-badge'\n            data-bind=\"css: ui.feedback.badge,\n                       text: ui.feedback.category\">Feedback Kind</span>\n    </div>\n    <div>\n        <strong class=\"blockpy-feedback-label\"\n            data-bind=\"text: execution.feedback.label\"></strong>\n        <div class=\"blockpy-feedback-message\"\n            data-bind=\"html: execution.feedback.message\"></div>\n    </div>\n</div>            \n";
var BlockPyFeedback =
/*#__PURE__*/
function () {
  /**
   * An object that manages the feedback area, where users are told the state of their
   * program's execution and given guidance. Also manages the creation of the Trace Table.
   *
   * @constructor
   * @this {BlockPyFeedback}
   * @param {Object} main - The main BlockPy instance
   * @param {HTMLElement} tag - The HTML object this is attached to.
   */
  function BlockPyFeedback(main, tag) {
    var _this = this;

    _classCallCheck(this, BlockPyFeedback);

    this.main = main;
    this.tag = tag;
    this.feedbackModel = this.main.model.execution.feedback;
    this.category = this.tag.find(".blockpy-feedback-category");
    this.label = this.tag.find(".blockpy-feedback-label");
    this.message = this.tag.find(".blockpy-feedback-message"); // TODO: If they change the student extra files, also update the dirty flag

    this.main.model.submission.code.subscribe(function () {
      return _this.main.model.display.dirtySubmission(true);
    });
  }

  _createClass(BlockPyFeedback, [{
    key: "scrollIntoView",

    /**
     * Moves the screen (takes 1 second) to make the Feedback area visible.
     */
    value: function scrollIntoView() {
      $("html, body").animate({
        scrollTop: this.tag.offset().top
      }, 1000);
    }
  }, {
    key: "isFeedbackVisible",

    /**
     * Determines if the feedback area is currently visible
     * @returns {boolean}
     */
    value: function isFeedbackVisible() {
      var top_of_element = this.tag.offset().top;
      var bottom_of_element = this.tag.offset().top + this.tag.outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).height();
      var top_of_screen = $(window).scrollTop(); //bottom_of_element -= 40; // User friendly padding

      return bottom_of_screen > top_of_element && top_of_screen < bottom_of_element;
    }
  }, {
    key: "clear",

    /**
     * Clears any output currently in the feedback area. Also resets the printer and
     * any highlighted lines in the editor.
     */
    value: function clear() {
      this.feedbackModel.message("*Ready*");
      this.feedbackModel.category(null);
      this.feedbackModel.label(null);
      this.feedbackModel.hidden(false);
      this.feedbackModel.linesError.removeAll();
      this.feedbackModel.linesUncovered.removeAll();
    }
  }, {
    key: "updateFeedback",

    /**
     * Updates the model with these new execution results
     * @param executionResults
     */
    value: function updateFeedback(executionResults) {
      // Parse out data
      var message = Sk.ffi.remapToJs(executionResults.MESSAGE);
      var category = Sk.ffi.remapToJs(executionResults.CATEGORY);
      var label = Sk.ffi.remapToJs(executionResults.LABEL);
      var hide = Sk.ffi.remapToJs(executionResults.HIDE);
      var data = Sk.ffi.remapToJs(executionResults.DATA); // Override based on assignments' settings

      var hideScore = this.main.model.assignment.hidden();

      if (hideScore && category.toLowerCase() === "complete") {
        category = "no errors";
        label = "No errors";
        message = "No errors reported";
      } // Remap to expected BlockPy labels


      if (category.toLowerCase() === "instructor" && label.toLowerCase() === "explain") {
        label = "Instructor Feedback";
      } // Don't present a lack of error as being incorrect


      if (category === "Instructor" && label === "No errors") {
        category = "no errors";
      } // Update model accordingly


      message = this.main.utilities.markdown(message);
      this.feedbackModel.message(message);
      this.feedbackModel.category(category);
      this.feedbackModel.label(label); // TODO: Instead of tracking student file, let's track the instructor file

      this.main.components.server.logEvent("Intervention", category, label, message, "answer.py"); // Clear out any previously highlighted lines

      this.main.components.pythonEditor.bm.clearHighlightedLines(); // Find the first error on a line and report that

      var line = BlockPyFeedback.findFirstErrorLine(data);
      this.feedbackModel.linesError.removeAll();

      if (line !== null && line !== undefined) {
        this.feedbackModel.linesError.push(line);
      } // Invert the set of traced lines


      var studentReport = this.main.model.execution.reports.student;
      this.feedbackModel.linesUncovered.removeAll();

      if (studentReport.success) {
        var uncoveredLines = [];
        this.main.model.execution.reports.parser.lines.forEach(function (line) {
          if (studentReport.lines.indexOf(line) === -1) {
            uncoveredLines.push(line);
          }
        });
        this.feedbackModel.linesUncovered(uncoveredLines);
      }
    }
    /**
     * Present any accumulated feedback
     */

  }, {
    key: "presentFeedback",
    value: function presentFeedback(executionResults) {
      this.updateFeedback(executionResults); // TODO: Logging
      //this.main.components.server.logEvent("feedback", category+"|"+label, message);

      if (!this.isFeedbackVisible()) {
        this.notifyFeedbackUpdate();
        this.scrollIntoView();
      }
    }
  }, {
    key: "notifyFeedbackUpdate",
    value: function notifyFeedbackUpdate() {
      this.tag.find(".blockpy-floating-feedback").show().fadeOut(7000);
    }
  }, {
    key: "presentInternalError",
    value: function presentInternalError(error, filenameExecuted) {
      this.main.model.execution.feedback.category("internal");
      this.main.model.execution.feedback.label("Internal Error");
      var message = "\n            Error in instructor feedback.\n            Please show the following to an instructor:\n            \n            <pre><strong>".concat(error.tp$name, "</strong>: ").concat(Sk.ffi.remapToJs(error.args), "</pre>");

      if (error.traceback && error.traceback.length) {
        var lastTraceback = error.traceback.slice(-1)[0];

        if (lastTraceback.filename.slice(0, -3) === filenameExecuted) {
          lastTraceback.lineno -= this.main.model.execution.reports.instructor.lineOffset;
        }

        var tracebackFormatted = error.traceback.map(function (frame) {
          return "File <span class=\"filename\">\"".concat(frame.filename, "\"</span>, ") + "line <span class=\"lineno\">".concat(frame.lineno, "</span>\n");
        }).join("");
        message += "<pre>".concat(tracebackFormatted, "</pre>");
      }

      this.main.model.execution.feedback.message(message);
    }
  }], [{
    key: "findFirstErrorLine",
    value: function findFirstErrorLine(feedbackData) {
      for (var i = feedbackData.length - 1; i >= 0; i -= 1) {
        if ("position" in feedbackData[i]) {
          return feedbackData[i].position.line;
        }
      }

      return null;
    }
  }]);

  return BlockPyFeedback;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/files.js":
/*!**********************!*\
  !*** ./src/files.js ***!
  \**********************/
/*! exports provided: FILES_HTML, STARTING_FILES, BASIC_NEW_FILES, UNDELETABLE_FILES, UNRENAMABLE_FILES, makeModelFile, loadConcatenatedFile, createConcatenatedFile, observeConcatenatedFile, BlockPyFileSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(ko) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILES_HTML", function() { return FILES_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTING_FILES", function() { return STARTING_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_NEW_FILES", function() { return BASIC_NEW_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDELETABLE_FILES", function() { return UNDELETABLE_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNRENAMABLE_FILES", function() { return UNRENAMABLE_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeModelFile", function() { return makeModelFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConcatenatedFile", function() { return loadConcatenatedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConcatenatedFile", function() { return createConcatenatedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeConcatenatedFile", function() { return observeConcatenatedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyFileSystem", function() { return BlockPyFileSystem; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var makeTab = function makeTab(filename, friendlyName, hideIfEmpty) {
  if (friendlyName === undefined) {
    friendlyName = filename;
  }

  return "\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"\n            data-toggle=\"tab\"\n            data-bind=\"css: {active: display.filename() === '".concat(filename, "'},\n                click: display.filename.bind($data, '").concat(filename, "'),\n                visible: !").concat(hideIfEmpty, " || ui.files.hasContents('").concat(filename, "')\">\n            ").concat(friendlyName, "</a>\n    </li>");
};

var FILES_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-files\"\n    data-bind=\"visible: ui.files.visible\">\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n\n    <li class=\"nav-item\">\n        <strong>View: </strong>\n    </li>\n\n    ".concat(makeTab("answer.py"), "\n    ").concat(makeTab("!instructions.md", "Instructions"), "\n    ").concat(makeTab("!assignment_settings.blockpy", "Settings"), "\n    ").concat(makeTab("^starting_code.py", "Starting Code"), "\n    ").concat(makeTab("!on_run.py", "On Run"), "\n    ").concat(makeTab("!on_change.py", "On Change", true), "\n    ").concat(makeTab("!on_eval.py", "On Eval", true), "\n    ").concat(makeTab("?mock_urls.blockpy", "URL Data", true), "\n    ").concat(makeTab("!sample_submissions.blockpy", "Sample Submissions", true), "\n    ").concat(makeTab("!tags.blockpy", "Tags", true), "\n  \n    <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"\n         role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Add New</a>\n        <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?mock_urls.blockpy'),\n                           click: ui.files.add.bind($data, '?mock_urls.blockpy')\">URL Data</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?tags.blockpy')\">Tags</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?sample_submissions.blockpy')\">Sample Submissions</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onChange,\n                           click: ui.files.add.bind($data, '!on_change.py')\">On Change</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onEval,\n                           click: ui.files.add.bind($data, '!on_eval.py')\">On Eval</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Starting File</a>\n            <a class=\"dropdown-item\" href=\"#\">Instructor File</a>\n            <a class=\"dropdown-item\" href=\"#\">Student File</a>\n        </div>\n    </li>\n  \n</ul>\n</div>\n");
/**
 * Filenames live in one of five possible namespaces:
 *  Instructor (!): Invisible to the student under all circumstances
 *  Start Space (^): Used to reset the student namespace
 *  Student Space (): Visible to the student when display.hideFiles is not true, able to be edited
 *  Hidden Space (?): Not directly visible to the student, but accessible programmatically
 *  Read-only Space (&): An instructor file type visible to the student, but is uneditable by them
 *  Secret Space ($): Not visible from the menu at all, some other mechanism controls it
 *  Generated Space (*): Visible to the student, but destroyed after Engine.Clear. Can shadow an actual file.
 *  Concatenated Space (#): Used when bundling a space for the server.
 */

var STARTING_FILES = [// Submission
"answer.py", // Instructor files
"!instructions.md", "!assignment_settings.blockpy", "^starting_code.py", "!on_run.py", "$settings.blockpy"];
var BASIC_NEW_FILES = ["!on_change.py", "!on_eval.py", "?mock_urls.blockpy", "!tags.blockpy", "!sample_submissions.blockpy"];
var DELETABLE_SIMPLE_FILES = ["!on_change.py", "!on_eval.py"];
var UNDELETABLE_FILES = ["answer.py", "!instructions.md", "!assignment_settings.py", "^starting_code.py", "!on_run.py", "$settings.blockpy"];
var UNRENAMABLE_FILES = ["answer.py", "!instructions.md", "!assignment_settings.py", "^starting_code.py", "!on_run.py", "$settings.blockpy", "!on_change.py", "!on_eval.py", "?mock_urls.blockpy", "!tags.blockpy", "!sample_submissions.blockpy"];

var BlockPyFile = function BlockPyFile(main, filename, contents) {
  _classCallCheck(this, BlockPyFile);

  this.main = main;
  this.filename = filename;
  this.contents = contents || "";
  this.owner = null;
  this.handle = null;
};

function makeModelFile(filename, contents) {
  return {
    "filename": ko.observable(filename),
    contents: ko.observable(contents || "")
  };
}
function loadConcatenatedFile(concatenatedFile, modelFileList) {
  if (concatenatedFile) {
    var files = JSON.parse(concatenatedFile);
    files = files.map(function (file) {
      return makeModelFile(file.filename, file.contents);
    });
    modelFileList(files);
  }
}
function createConcatenatedFile(modelFileList) {
  return JSON.stringify(modelFileList().map(function (file) {
    return {
      filename: file.filename(),
      contents: file.contents()
    };
  }));
}
function observeConcatenatedFile(modelFileList) {
  return ko.pureComputed(function () {
    var result = {};
    modelFileList().forEach(function (file) {
      return result[file.filename()] = file.contents();
    });
    return JSON.stringify(result);
  });
}
/**
 * Abstracts away database logic
 */

var BlockPyFileSystem =
/*#__PURE__*/
function () {
  function BlockPyFileSystem(main) {
    _classCallCheck(this, BlockPyFileSystem);

    this.main = main;
    this.files_ = {};
    this.mountFiles();
    this.watchModel();
    this.watches_ = {};
  }

  _createClass(BlockPyFileSystem, [{
    key: "watchFile",
    value: function watchFile(filename, callback) {
      if (!(filename in this.watches_)) {
        this.watches_[filename] = [];
      }

      this.watches_[filename].push(callback);
    }
  }, {
    key: "stopWatchingFile",
    value: function stopWatchingFile(filename) {
      delete this.watches_[filename];
    }
  }, {
    key: "watchModel",
    value: function watchModel() {
      var _this = this;

      var filesystem = this;
      [this.main.model.submission.extraFiles, this.main.model.assignment.extraStartingFiles, this.main.model.assignment.extraInstructorFiles].forEach(function (fileArray) {
        return fileArray.subscribe(function (changes) {
          changes.forEach(function (change) {
            var modelFile = change.value;

            if (change.status === "added") {
              // Track new file
              var file = filesystem.newFile(modelFile.filename(), modelFile.contents(), modelFile.contents);
              filesystem.notifyWatches(file);
            } else if (change.status === "deleted") {
              // Delete file
              filesystem.deleteFileLocally_(modelFile.filename);
            }
          });
        }, _this, "arrayChange");
      });
    } // answer.py
    //   => subscribe to first element of submission.code)
    // !on_run.py, !on_change.py, !on_eval.py
    //   => subscribe to relevant assignment.<whatever>
    // ^starting_code.py
    //   => subscribe to first element of assignment.startingCode
    // ^whatever
    //   => subscribe to rest of the elements of assignment.startingCode
    // !whatever or ?whatever
    //   => subscribe to elements of assignment.extraFiles
    // Otherwise:
    //   => subscribe to rest of the elements of submission.code

    /**
     * New special files need to be registered here
     * @param file {BlockPyFile}
     * @private
     */

  }, {
    key: "observeFile_",
    value: function observeFile_(file) {
      if (file.filename === "answer.py") {
        file.handle = this.main.model.submission.code;
      } else if (file.filename === "!on_run.py") {
        file.handle = this.main.model.assignment.onRun;
      } else if (file.filename === "!on_change.py") {
        file.handle = this.main.model.assignment.onChange;
      } else if (file.filename === "!on_eval.py") {
        file.handle = this.main.model.assignment.onEval;
      } else if (file.filename === "!instructions.md") {
        file.handle = this.main.model.assignment.instructions;
      } else if (file.filename === "^starting_code.py") {
        file.handle = this.main.model.assignment.startingCode;
      } else if (file.filename === "?mock_urls.blockpy") {
        this.observeInArray_(file, this.main.model.assignment.extraFiles);
      } else if (file.filename === "!tags.blockpy") {
        file.handle = this.main.model.assignment.tags;
      } else if (file.filename === "!assignment_settings.blockpy") {
        file.handle = this.main.model.assignment.settings;
      } else if (file.filename === "$settings.blockpy") {
        file.handle = this.main.model.display;
      } else if (file.filename.startsWith("^")) {
        this.observeInArray_(file, this.main.model.assignment.extraStartingFiles);
      } else if (file.filename.startsWith("!") || file.filename.startsWith("?")) {
        this.observeInArray_(file, this.main.model.assignment.extraInstructorFiles);
      } else {
        this.observeInArray_(file, this.main.model.submission.extraFiles);
      }
    }
  }, {
    key: "observeInArray_",
    value: function observeInArray_(file, array) {
      file.owner = array;
      var codeBundle = file.owner();

      for (var i = 0; i < codeBundle.length; i++) {
        if (codeBundle[i].filename() === file.filename) {
          file.handle = codeBundle[i].contents;
        }
      }

      if (file.handle === null) {
        var newFile = makeModelFile(file.filename);
        file.handle = newFile.contents;
        array.push(newFile);
      }
    }
  }, {
    key: "mountFiles",
    value: function mountFiles() {
      this.newFile("answer.py");
      this.newFile("^starting_code.py");
      this.newFile("!on_run.py");
      this.newFile("!instructions.md");
      this.newFile("!assignment_settings.blockpy");
    }
  }, {
    key: "newFile",
    value: function newFile(filename, contents, modelFile) {
      if (filename in this.files_) {
        // File already exists! Just update its handle
        var existingFile = this.files_[filename];

        if (modelFile === undefined) {
          this.observeFile_(existingFile);
        } else {
          existingFile.handle = modelFile;
        }

        existingFile.handle(contents || "");
        return existingFile;
      } else {
        // File does not exist
        var newFile = new BlockPyFile(this.main, filename);
        this.files_[filename] = newFile;

        if (modelFile === undefined) {
          this.observeFile_(newFile);
        } else {
          newFile.handle = modelFile;
        }

        return newFile;
      }
    }
  }, {
    key: "writeFile",
    value: function writeFile(filename, contents) {
      contents = contents || "";
      this.files_[filename].handle(contents);
    }
  }, {
    key: "readFile",
    value: function readFile(filename) {
      return this.files_[filename].handle();
    }
  }, {
    key: "getFile",
    value: function getFile(filename) {
      return this.files_[filename];
    }
    /**
     *
     * @param filename
     * @returns {boolean|object} The info about the file, or false if it could not be deleted
     */

  }, {
    key: "deleteFile",
    value: function deleteFile(filename) {
      if (DELETABLE_SIMPLE_FILES.indexOf(filename) !== -1) {
        var file = this.deleteFileLocally_(filename);
        file.handle(null);
        return true;
      } else if (this.files_[filename].owner === null) {
        return false;
      } else {
        // Triggers a callback to eventually call deleteFileLocally_
        var found = this.files_[filename].owner.remove(function (modelFile) {
          return modelFile.filename === filename;
        });
        return found || false;
      }
    }
  }, {
    key: "deleteFileLocally_",
    value: function deleteFileLocally_(filename) {
      var file = this.files_[filename];
      delete this.files_[filename];

      if (filename in this.watches_) {
        this.watches_[filename].forEach(function (callback) {
          return callback.deleted();
        });
      }

      return file;
    }
  }, {
    key: "notifyWatches",
    value: function notifyWatches(file) {
      if (file.filename in this.watches_) {
        this.watches_[file.filename].forEach(function (callback) {
          return callback.updated(file);
        });
      }
    }
  }]);

  return BlockPyFileSystem;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! knockout */ "knockout")))

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: FOOTER_HTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER_HTML", function() { return FOOTER_HTML; });
//TODO: Move get link down to footer, remove vertical bar from quick-menu
var FOOTER_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-status\">\n    <div>\n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadAssignment')\">Load Assignment</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('saveAssignment')\">Save Assignment</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadFile')\">Load File</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('saveFile')\">Save File</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadDataset')\">Load Dataset</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('logEvent')\">Log Event</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('updateSubmission'),\n                                        click: ui.server.force.updateSubmission\">Update Submission</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('onExecution')\">Execution</span>\n    </div>\n    <div\n        <span data-bind=\"text: ui.server.messages\"></span>\n    </div>\n    <div>\n        <span>User: <span data-bind=\"text: user.id\"></span> (<span data-bind=\"text: user.name\"></span>)</span>, \n        <span>Course: <span data-bind=\"text: user.courseId\"></span></span>,\n        <span>Group: <span data-bind=\"text: user.groupId\"></span></span>,\n        <span>Assignment: <span data-bind=\"text: assignment.id\"></span></span>,\n        <span>Assignment Version: <span data-bind=\"text: assignment.version\"></span></span>,\n        <span>Submission: <span data-bind=\"text: submission.id\"></span></span>, \n        <span>Submission Version: <span data-bind=\"text: submission.version\"></span></span>\n    </div>\n</div>\n";

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! exports provided: HISTORY_TOOLBAR_HTML, BlockPyHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY_TOOLBAR_HTML", function() { return HISTORY_TOOLBAR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyHistory", function() { return BlockPyHistory; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// TODO: Should disable buttons if we can't activate them.
var HISTORY_TOOLBAR_HTML = "\n<div class=\"blockpy-history-toolbar col-md-12\" data-bind=\"visible: display.historyMode\">\n\n    <form class=\"form-inline\">\n        <button class=\"blockpy-history-start btn btn-outline-secondary mr-2\" type=\"button\"\n            data-bind=\"click: ui.editors.python.history.start\">\n            <span class='fas fa-step-backward'></span> Start\n        </button>\n        <button class=\"btn btn-outline-secondary mr-2\" type=\"button\"\n            data-bind=\"click: ui.editors.python.history.previous\">\n            <span class='fas fa-backward'></span> Previous\n        </button>\n        <select class=\"blockpy-history-selector form-control custom-select mr-2\" aria-title=\"History Selector\">\n        </select>\n        <button class=\"btn btn-outline-secondary mr-2\" type=\"button\"\n            data-bind=\"click: ui.editors.python.history.use\">\n            <span class='fas fa-file-import'></span> Use\n        </button>\n        <button class=\"btn btn-outline-secondary mr-2\" type=\"button\"\n            data-bind=\"click: ui.editors.python.history.next\">\n            <span class='fas fa-forward'></span> Next\n        </button>\n        <button class=\"btn btn-outline-secondary\" type=\"button\"\n            data-bind=\"click: ui.editors.python.history.mostRecent\">\n            <span class='fas fa-step-forward'></span> Most Recent\n        </button>\n    </form>\n</div>\n";
/**
 * An object for displaying the user's coding logs (their history).
 * A lightweight component, its only job is to open a dialog.
 *
 * @constructor
 * @this {BlockPyHistory}
 * @param {Object} main - The main BlockPy instance
 */

var BlockPyHistory =
/*#__PURE__*/
function () {
  function BlockPyHistory(main, tag) {
    _classCallCheck(this, BlockPyHistory);

    this.main = main;
    this.tag = tag;
    this.currentId = null;
    this.history = [];
    this.editEvents = [];
  }

  _createClass(BlockPyHistory, [{
    key: "load",
    value: function load(history) {
      var _this = this;

      this.history = history;
      this.editEvents = [];
      this.selector = $(".blockpy-history-selector").empty();
      var editId = 0;
      history.filter(function (entry) {
        return !entry.file_path.startsWith("_instructor.") && entry.event_type !== "Compile" && entry.event_type !== "Intervention" && (!_this.main.model.assignment.hidden() || entry.event_type !== "X-Submission.LMS");
      }).forEach(function (entry, index) {
        var event_type = REMAP_EVENT_TYPES[entry.event_type] || entry.event_type;
        var displayed = prettyPrintDateTime(entry.client_timestamp) + " - " + event_type;
        var disable = entry.event_type !== "File.Edit";
        var option = $("<option></option>", {
          text: displayed,
          disabled: disable
        });

        if (_this.isEditEvent(entry)) {
          option.attr("value", editId);

          _this.editEvents.push(entry);

          editId += 1;
        }

        _this.selector.append(option);
      });
      this.selector.val(Math.max(0, editId - 1));
      this.selector.change(function (evt) {
        _this.updateEditor();
      });
    }
  }, {
    key: "moveToStart",
    value: function moveToStart() {
      this.selector.val(0);
      this.updateEditor();
    }
  }, {
    key: "movePrevious",
    value: function movePrevious() {
      var currentId = parseInt(this.selector.val(), 10);
      this.selector.val(Math.max(0, currentId - 1));
      this.updateEditor();
    }
  }, {
    key: "moveNext",
    value: function moveNext() {
      var currentId = parseInt(this.selector.val(), 10);
      this.selector.val(Math.min(this.editEvents.length - 1, currentId + 1));
      this.updateEditor();
    }
  }, {
    key: "moveToMostRecent",
    value: function moveToMostRecent() {
      this.selector.val(this.editEvents.length - 1);
      this.updateEditor();
    }
  }, {
    key: "updateEditor",
    value: function updateEditor() {
      if (this.editEvents.length) {
        var currentId = parseInt(this.selector.val(), 10);
        this.main.components.pythonEditor.bm.setCode(this.editEvents[currentId].message);
      }
    }
  }, {
    key: "use",
    value: function use() {
      if (this.editEvents.length) {
        var currentId = parseInt(this.selector.val(), 10);
        var code = this.editEvents[currentId].message;
        this.main.model.ui.editors.python.turnOffHistoryMode();
        this.main.components.pythonEditor.file.handle(code);
      }
    }
  }, {
    key: "isEditEvent",
    value: function isEditEvent(entry) {
      return (entry.event_type === "File.Edit" || entry.event_type === "File.Create") && this.main.model.display.filename() === entry.file_path;
    }
  }]);

  return BlockPyHistory;
}();
var REMAP_EVENT_TYPES = {
  "Session.Start": "Began session",
  "X-IP.Change": "Changed IP address",
  "File.Edit": "Edited code",
  "File.Create": "Started assignment",
  "Run.Program": "Ran program",
  "Compile.Error": "Syntax error",
  "X-Submission.LMS": "Updated grade"
};
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function isSameDay(first, second) {
  return first.getDate() === second.getDate() && first.getMonth() === second.getMonth() && first.getFullYear() === second.getFullYear();
}
/**
 * Helper function to parse a date/time string and rewrite it as something
 * more human readable.
 * @param {String} timeString - the string representation of time ("YYYYMMDD HHMMSS")
 * @returns {String} - A human-readable time string.
 */


function prettyPrintDateTime(timeString) {
  /*let year = timeString.slice(0, 4),
      month = parseInt(timeString.slice(4, 6), 10)-1,
      day = timeString.slice(6, 8),
      hour = timeString.slice(9, 11),
      minutes = timeString.slice(11, 13),
      seconds = timeString.slice(13, 15);*/
  // TODO: Handle timezones correctly
  var now = new Date();
  var past = new Date(parseInt(timeString, 10));

  if (isSameDay(now, past)) {
    return "Today at " + past.toLocaleTimeString();
  } else {
    var dayStr = weekDays[past.getDay()];
    var monthStr = monthNames[past.getMonth()];
    var date = dayStr + ", " + monthStr + " " + past.getDate();

    if (now.getFullYear() === past.getFullYear()) {
      return date + " at " + past.toLocaleTimeString();
    } else {
      return date + ", " + past.getFullYear() + " at " + past.toLocaleTimeString();
    }
  }
}
/**
 * Opens the history dialog box. This requires a trip to the server and
 * occurs asynchronously. The users' code is shown in preformatted text
 * tags (no code highlighting currently) along with the timestamp.
 */


BlockPyHistory.prototype.openDialog = function () {
  var dialog = this.main.components.dialog;
  var body = "<pre>a = 0</pre>";
  this.main.components.server.getHistory(function (data) {
    body = data.reverse().reduce(function (complete, elem) {
      var complete_str = prettyPrintDateTime(elem.time);
      var new_line = "<b>" + complete_str + "</b><br><pre>" + elem.code + "</pre>";
      return complete + "\n" + new_line;
    }, "");
    dialog.show("Work History", body, function () {});
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/*! exports provided: SecondRowSecondPanelOptions, makeExtraInterfaceSubscriptions, makeInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondRowSecondPanelOptions", function() { return SecondRowSecondPanelOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeExtraInterfaceSubscriptions", function() { return makeExtraInterfaceSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeInterface", function() { return makeInterface; });
/* harmony import */ var trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! trace.js */ "./src/trace.js");
/* harmony import */ var dialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog.js */ "./src/dialog.js");
/* harmony import */ var feedback_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feedback.js */ "./src/feedback.js");
/* harmony import */ var files_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! files.js */ "./src/files.js");
/* harmony import */ var footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! footer.js */ "./src/footer.js");
/* harmony import */ var editors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! editors.js */ "./src/editors.js");
/* harmony import */ var console_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! console.js */ "./src/console.js");







/**
 * @enum {str}
 */

var SecondRowSecondPanelOptions = {
  FEEDBACK: "feedback",
  TRACE: "trace",
  NONE: "none"
};
function makeExtraInterfaceSubscriptions(self, model) {
  var highlightTimeout = null;
  model.ui.instructions.current.subscribe(function () {
    if (highlightTimeout !== null) {
      clearTimeout(highlightTimeout);
    }

    highlightTimeout = setTimeout(function () {
      model.configuration.container.find(".blockpy-instructions pre code").map(function (i, block) {
        window.hljs.highlightBlock(block);
      });
    }, 400);
  });
} // TODO: Get shareable link button

function makeInterface(main) {
  return "\n<div class='blockpy-content container-fluid'>\n\n    <!-- Dialog -->\n    ".concat(dialog_js__WEBPACK_IMPORTED_MODULE_1__["DIALOG_HTML"], "\n    \n    <!-- Hidden Capture Canvas -->\n    <canvas id='capture-canvas' class='d-none' role=\"presentation\" aria-hidden=\"true\"></canvas>\n    \n    <!-- Row 1: Header and Quick Menu -->\n    <div class='row'>\n         \n         <!-- Description -->\n         <div class='col-md-10 blockpy-panel blockpy-header'\n               role='heading' aria-label='Assignment Description'>\n         \n            <!-- Assignment Name -->\n            <span role='heading' aria-level='1'\n                  class=\"blockpy-name\">\n                <strong>BlockPy: </strong> \n                <span data-bind='text: assignment.name'></span>\n            </span>\n            \n            <!-- Reset Instructions Button -->\n            <div class=\"blockpy-instructions-reset\"\n                data-bind=\"visible: ui.instructions.isChanged\">\n                <a class=\"float-right\"\n                    data-bind=\"click: ui.instructions.reset\"\n                    href=\"\">\n                    Reset instructions</a>\n            </div>\n            \n            <!-- Instructions -->\n            <div class='blockpy-instructions'\n                 data-bind=\"html: ui.instructions.current\">\n            </div>\n        </div>\n        \n        <div class='col-md-2 blockpy-panel blockpy-quick-menu'\n             role='menubar' aria-label='Quick Menu' title=\"Quick Menu\">\n            <!-- Get Shareable Link -->\n            <!--<button class=\"btn btn-outline-secondary btn-sm\">\n                Get shareable link</button>-->\n            <span data-bind=\"visible: ui.menu.isSubmitted\">\n                Your submission is ready to be reviewed!</span>\n            <button class=\"btn btn-outline-secondary btn-sm\"\n                data-bind=\"visible: ui.menu.canMarkSubmitted,\n                           text: ui.menu.textMarkSubmitted,\n                           click: ui.menu.clickMarkSubmitted\"></button>\n            <!-- View as instructor -->\n            <div class=\"form-check\"\n                 data-bind=\"visible: ui.role.isGrader\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"blockpy-as-instructor\"\n                    data-bind=\"checked: display.instructor\">\n                <label class=\"form-check-label\" for=\"blockpy-as-instructor\">\n                    View as instructor\n                </label>\n            </div>\n        </div>\n         \n    </div>\n    \n    <!-- Row 2: Console and Feedback -->\n    <div class='row'>\n    \n        <!-- Console -->\n        ").concat(console_js__WEBPACK_IMPORTED_MODULE_6__["CONSOLE_HTML"], "\n         \n        <!-- Feedback -->\n        <!-- ko if: ui.secondRow.isFeedbackVisible -->\n        ").concat(feedback_js__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_HTML"], "\n        <!-- /ko -->\n        \n        <!-- Trace -->\n        <!-- ko if: ui.secondRow.isTraceVisible -->\n        ").concat(trace_js__WEBPACK_IMPORTED_MODULE_0__["TRACE_HTML"], "\n        <!-- /ko -->\n         \n    </div>\n    \n    <!-- Row 3: File Navigation -->\n    <!-- ko if: ui.files.visible -->\n    <div class='row'>\n        ").concat(files_js__WEBPACK_IMPORTED_MODULE_3__["FILES_HTML"], "\n    </div>\n    <!-- /ko -->\n    \n    <!-- View Row -->\n    <div class=\"row\">\n        ").concat(editors_js__WEBPACK_IMPORTED_MODULE_5__["EDITORS_HTML"], "\n    </div>\n\n    <!-- Footer Row -->    \n    <div class=\"row\">\n        ").concat(footer_js__WEBPACK_IMPORTED_MODULE_4__["FOOTER_HTML"], "\n    </div>\n    \n</div>\n    ");
}
;

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: StatusState, BlockPyServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusState", function() { return StatusState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyServer", function() { return BlockPyServer; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _editor_assignment_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/assignment_settings */ "./src/editor/assignment_settings.js");


/**
 *
 * @enum {string}
 */

var StatusState = {
  READY: "ready",
  ACTIVE: "active",
  RETRYING: "retrying",
  FAILED: "failed",
  OFFLINE: "offline"
};
/**
 * Object for communicating with the external servers. This includes functionality for
 * saving and loading files, logging events, saving completions, and retrieving history.
 *
 * @constructor
 * @this {BlockPyServer}
 * @param {Object} main - The main BlockPy instance
 */

function BlockPyServer(main) {
  this.main = main; // Save URLs locally for quicker access

  this.urls = main.model.configuration.urls; // Add the LocalStorage connection

  this.storage = new _storage__WEBPACK_IMPORTED_MODULE_0__["LocalStorageWrapper"]("BLOCKPY"); // FaultResistantCache

  this.queue = {
    "logEvent": JSON.parse(this.storage.getDefault("logEvent", "[]")),
    "updateSubmission": JSON.parse(this.storage.getDefault("updateSubmission", "[]"))
  };
  this.MAX_QUEUE_SIZE = {
    "logEvent": 200,
    "updateSubmission": 50
  };
  this.TIMER_DELAY = 1000;
  this.FAIL_DELAY = 2000;
  this.timers = {};
  this.overlay = null;
  this.blockingAttempts = 0;
  this.cachedFilenames = [];
  this.createSubscriptions();
  this.checkCaches();
}
/**
 * Checks whether the IP address has changed, logging an event if that occurs.
 * @param response
 */

BlockPyServer.prototype.checkIP = function (response) {
  if (response.success) {
    if (this.storage.has("IP")) {
      var oldIP = this.storage.get("IP");

      if (oldIP !== response.ip) {
        var message = JSON.stringify({
          "old": oldIP,
          "new": response.ip
        });
        this.logEvent("X-IP.Change", undefined, undefined, message);
        this.storage.set("IP", response.ip);
      }
    } else {
      this.storage.set("IP", response.ip);
    }
  }
};
/**
 * Determines if there have been previous failures cached, and if so retries them.
 * TODO: update
 */


BlockPyServer.prototype.checkCaches = function () {
  var _this = this;

  if (this.storage.has("saveAssignment")) {
    var data = JSON.parse(this.storage.get("saveAssignment"));

    this._postLatestRetry(data, "assignment", "saveAssignment", this.TIMER_DELAY);
  }

  this.cachedFilenames.forEach(function (filename) {
    if (_this.storage.has("saveFile" + filename)) {
      var _data = JSON.parse(_this.storage.get("saveFile" + filename));

      _this._postLatestRetry(_data, filename, "saveFile", _this.TIMER_DELAY);
    }
  });
  var server = this;
  Object.keys(this.queue).forEach(function (endpoint) {
    (function pushAnyQueued(response) {
      if (response.success) {
        if (server.queue[endpoint].length) {
          var data = JSON.parse(server.queue[endpoint].pop());
          var url = server.urls[endpoint];

          server._postRetry(data, endpoint, 1000, pushAnyQueued);
        }
      }
    })({
      "success": true
    });
  });
};

BlockPyServer.prototype.createFileSubscription = function (model, filename) {
  var _this2 = this;

  model.subscribe(function (contents) {
    return _this2.main.model.display.autoSave() ? _this2.saveFile(filename, contents) : false;
  }, this);
  this.cachedFilenames.push(filename);
};
/**
 * TODO: fix
 */


BlockPyServer.prototype.createSubscriptions = function () {
  var model = this.main.model;
  this.createFileSubscription(model.submission.code, "answer.py");
  this.createFileSubscription(model.assignment.onRun, "!on_run.py");
  this.createFileSubscription(model.assignment.onEval, "!on_eval.py");
  this.createFileSubscription(model.assignment.onChange, "!on_change.py");
  this.createFileSubscription(model.assignment.instructions, "!instructions.md");
  this.createFileSubscription(model.assignment.startingCode, "^starting_code.py");
  this.createFileSubscription(model.ui.files.extraStudentFiles, "#extraStudentFiles.blockpy");
  this.createFileSubscription(model.ui.files.extraStartingFiles, "#extraStartingFiles.blockpy");
  this.createFileSubscription(model.ui.files.extraInstructorFiles, "#extraInstructorFiles.blockpy");
};
/**
 *
 * Some subscriptions have to happen after other things have been loaded.
 * Right now this is just after CORGIS libraries have been loaded, but maybe
 * we'll add more later and this will need to be refactored.
 *
 * TODO: fix
 *
 */


BlockPyServer.prototype.finalizeSubscriptions = function () {//this.main.model.assignment.settings.datasets.subscribe(this.saveAssignment.bind(this));
};
/**
 * Creates the default payload for any communication with the server API
 * @returns {{assignment_id: *, course_id: *, group_id: *, user_id: *, timezone: *, version: *, timestamp: *}}
 */


BlockPyServer.prototype.createServerData = function () {
  var assignment = this.main.model.assignment;
  var user = this.main.model.user;
  var submission = this.main.model.submission;
  var now = new Date();
  var microseconds = now.getTime();
  return {
    "assignment_id": assignment.id(),
    "assignment_group_id": user.groupId(),
    "course_id": user.courseId(),
    "submission_id": submission.id(),
    "user_id": user.id(),
    "version": assignment.version(),
    "timestamp": microseconds,
    "timezone": now.getTimezoneOffset()
  };
};
/**
 * Updates the status and message for the relevant endpoint.
 * @param endpoint {string} one of the URL endpoints
 * @param status {StatusState}
 * @param message {string?}
 */


BlockPyServer.prototype.setStatus = function (endpoint, status, message) {
  this.main.model.status[endpoint](status);
  this.main.model.status[endpoint + "Message"](message || "");
};
/**
 * Renders an overlay on the screen that blocks operation until the system is ready.
 * The overlay gets progressively darker to indicate repeated failures.
 */


BlockPyServer.prototype.showOverlay = function (attempt) {
  this.blockingAttempts += 1;

  if (!document.getElementsByClassName("blockpy-overlay").length) {
    this.overlay = $('<div class="blockpy-overlay"> </div>');
    this.overlay.appendTo(document.body);
  }

  switch (attempt) {
    case 0:
      this.overlay.css("background-color", "#988");
      break;

    case 1:
      this.overlay.css("background-color", "#655");
      break;

    case 2:
      this.overlay.css("background-color", "#333");
      break;

    default:
      this.overlay.css("background-color", "black");
      break;
  }
};
/**
 * Undo a level of overlay; if this was the last level, removes it from the screen.
 */


BlockPyServer.prototype.hideOverlay = function () {
  this.blockingAttempts -= 1;

  if (this.blockingAttempts <= 0) {
    this.overlay.remove();
  }
};

BlockPyServer.prototype._enqueueData = function (cache, data) {
  // Ensure we have not overfilled the queue
  var length = this.queue[cache].length;
  var max = this.MAX_QUEUE_SIZE[cache];

  if (length > max) {
    this.queue[cache] = this.queue[cache].slice(length - max, max);
  } // Only add the element if it's new


  var key = JSON.stringify(data);
  var index = this.queue[cache].indexOf(key);

  if (index === -1) {
    this.queue[cache].push(key);
    this.storage.set(cache, JSON.stringify(this.queue[cache]));
  }
};

BlockPyServer.prototype._dequeueData = function (cache, data) {
  var key = JSON.stringify(data);
  var index = this.queue[cache].indexOf(key);

  if (index >= 0) {
    this.queue[cache].splice(index);
    this.storage.set(cache, JSON.stringify(this.queue[cache]));
  }
};

BlockPyServer.prototype._postRetry = function (data, endpoint, delay, callback) {
  var _this3 = this;

  // Trigger request
  var postRequest = function postRequest() {
    // Make a backup of the current post
    _this3._enqueueData(endpoint, data);

    $.post(_this3.urls[endpoint], data).done(function (response) {
      _this3._dequeueData(endpoint, data);

      if (response.success) {
        _this3.setStatus(endpoint, StatusState.READY);
      } else {
        console.error(response);

        _this3.setStatus(endpoint, StatusState.FAILED, response.message);
      }

      if (callback) {
        callback(response);
      }

      if (response.success) {
        _this3.checkIP(response.ip);
      }
    }) // If server request is the latest one, then let's try it again in a bit
    .fail(function (error, textStatus) {
      _this3.setStatus(endpoint, StatusState.RETRYING, textStatus.toString());

      _this3._postRetry(data, endpoint, delay + _this3.FAIL_DELAY, callback);
    });
  };

  if (delay === null) {
    postRequest();
  } else {
    setTimeout(postRequest, delay);
  }
};
/**
 * Make a AJAX request that, upon failure, will check to see if this was the
 * latest attempt for this `cache` marker. If so, it will attempt again until
 * successful; otherwise, it gives up the request.
 *
 * @param {Object} data - The AJAX-ready data to be posted
 * @param {String} filename - The unique name given to the relevant timer
 * @param {String} endpoint - The unique name given to the relevant cache entry
 * @param {Integer} delay - The current number of milliseconds to wait before
 trying the request again.
 */


BlockPyServer.prototype._postLatestRetry = function (data, filename, endpoint, delay) {
  var _this4 = this;

  var cache = endpoint + filename;

  var request = function request() {
    // Make a backup of the current post
    _this4.storage.set(cache, JSON.stringify(data));

    var time = _this4.storage.getTime(cache); // Send the request


    $.post(_this4.urls[endpoint], data).done(function (response) {
      if (response.success) {
        _this4.checkIP(response); // If server request is the latest one, clear it from the cache


        var cachedTime = _this4.storage.getTime(cache);

        if (time >= cachedTime) {
          _this4.storage.remove(cache);
        }

        _this4.setStatus(endpoint, StatusState.READY);
      } else {
        // This connected but failed, don't try again but let the user know why.
        _this4.setStatus(endpoint, StatusState.FAILED, response.message);

        if (response.success === false) {
          // If we're the latest one, clear it from the cache
          var _cachedTime = _this4.storage.getTime(cache);

          if (time >= _cachedTime) {
            _this4.storage.remove(cache);
          }
        }
      }
    }).fail(function (error, textStatus) {
      _this4.setStatus(endpoint, StatusState.RETRYING, textStatus.toString()); // If server request is the latest one, then let's try it again in a bit


      var cachedTime = _this4.storage.getTime(cache);

      if (time >= cachedTime) {
        _this4._postLatestRetry(data, filename, endpoint, delay + _this4.FAIL_DELAY);
      }
    });
  };

  clearTimeout(this.timers[cache]);

  if (delay === null) {
    request();
  } else {
    this.timers[cache] = setTimeout(request, delay);
  }
};

BlockPyServer.prototype._postBlocking = function (endpoint, data, attempts, success, failure) {
  var _this5 = this;

  this.showOverlay(attempts);
  $.post(this.urls[endpoint], data).done(function (response) {
    _this5.hideOverlay();

    _this5.setStatus(endpoint, StatusState.READY);

    success(response);

    _this5.checkIP(response);
  }).fail(function (e, textStatus, errorThrown) {
    if (attempts <= 0) {
      _this5.hideOverlay();

      _this5.setStatus(endpoint, StatusState.FAILED, textStatus.toString());

      if (failure) {
        failure(e, textStatus, errorThrown);
      }
    } else {
      setTimeout(function () {
        _this5.hideOverlay();

        _this5.setStatus(endpoint, StatusState.RETRYING, textStatus.toString());

        _this5._postBlocking(endpoint, data, attempts - 1, success, failure);
      }, _this5.FAIL_DELAY);
    }
  });
};

BlockPyServer.prototype.loadAssignment = function (assignment_id) {
  var _this6 = this;

  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("loadAssignment")) {
    var data = this.createServerData();
    data["assignment_id"] = assignment_id;

    this._postBlocking("loadAssignment", data, 4, function (response) {
      if (response.success) {
        _this6.main.loadAssignmentData_(response);
      } else {
        _this6.setStatus("loadAssignment", StatusState.FAILED, response.message);
      }
    }, function (e, textStatus, errorThrown) {
      _this6.main.components.dialog.ERROR_LOADING_ASSIGNMNENT();

      console.error(e, textStatus, errorThrown);
    });
  } else {
    this.setStatus("loadAssignment", StatusState.OFFLINE);
  }
};

BlockPyServer.prototype.saveAssignment = function () {
  var _this7 = this;

  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("saveAssignment")) {
    var data = this.createServerData();
    data["hidden"] = model.assignment.hidden();
    data["reviewed"] = model.assignment.reviewed();
    data["public"] = model.assignment["public"]();
    data["url"] = model.assignment.url();
    data["ip_ranges"] = model.assignment.ipRanges();
    data["name"] = model.assignment.name();
    data["settings"] = Object(_editor_assignment_settings__WEBPACK_IMPORTED_MODULE_1__["saveAssignmentSettings"])(model);

    this._postBlocking("saveAssignment", data, 3, function () {
      return 0;
    }, function (e, textStatus, errorThrown) {
      _this7.main.components.dialog.ERROR_SAVING_ASSIGNMNENT();

      console.error(e, textStatus, errorThrown);
    });
  } else {
    this.setStatus("Offline", "Server is not connected! (Save Assignment)");
  }
};

BlockPyServer.prototype.loadHistory = function (callback) {
  var _this8 = this;

  if (this.main.model.ui.server.isEndpointConnected("loadHistory")) {
    var model = this.main.model;
    var data = this.createServerData();

    this._postBlocking("loadHistory", data, 2, callback, function (e, textStatus, errorThrown) {
      _this8.main.components.dialog.ERROR_LOADING_HISTORY();

      console.error(e, textStatus, errorThrown);
    });
  }
};

BlockPyServer.prototype.logEvent = function (event_type, category, label, message, file_path) {
  if (this.main.model.ui.server.isEndpointConnected("logEvent")) {
    var data = this.createServerData();
    data["event_type"] = event_type;
    data["category"] = category;
    data["label"] = label;
    data["message"] = message;
    data["file_path"] = file_path;
    this.setStatus("logEvent", StatusState.ACTIVE); // Trigger request

    this._postRetry(data, "logEvent", 0, function () {});
  } else {
    this.setStatus("logEvent", StatusState.OFFLINE);
  }
};

BlockPyServer.prototype.saveImage = function (directory, image) {
  if (this.main.model.ui.server.isEndpointConnected("saveImage")) {
    var data = this.createServerData();
    data["directory"] = directory;
    data["image"] = image;
    this.setStatus("saveImage", StatusState.ACTIVE); // Trigger request

    this._postLatestRetry(data, "turtle_output", "saveImage", 0);
  } else {
    this.setStatus("saveImage", StatusState.OFFLINE);
  }
};

BlockPyServer.prototype.updateSubmissionStatus = function (newStatus) {
  var _this9 = this;

  if (this.main.model.ui.server.isEndpointConnected("updateSubmissionStatus")) {
    var data = this.createServerData();
    data["status"] = newStatus;

    var postStatusChange = function postStatusChange(data) {
      if (data.success) {
        _this9.main.model.submission.submissionStatus(newStatus);
      }
    };

    this._postBlocking("updateSubmissionStatus", data, 2, postStatusChange, function (e, textStatus, errorThrown) {
      _this9.main.components.dialog.ERROR_UPDATING_SUBMISSION_STATUS();

      console.error(e, textStatus, errorThrown);
    });
  }
};
/**
 * This function can be used to load files and web resources.
 *
 * DEPRECATED
 */


BlockPyServer.prototype.loadFile = function (filename, type, callback, errorCallback) {
  var model = this.main.model;
  var server = this;

  if (model.ui.server.isEndpointConnected("load_file")) {
    var data = this.createServerData();
    data["filename"] = filename;
    data["type"] = type;

    this._postBlocking(this.urls.load_file, data, 5, function (response) {
      if (response.success) {
        callback(response.data);
      } else {
        errorCallback(response.message);
        server.setStatus("Failure", response.message);
      }
    }, function (e, textStatus, errorThrown) {
      errorCallback("Server failure! Report to instructor");
      console.error(errorThrown);
    });
  } else {
    errorCallback("No file server available.");
    this.setStatus("Offline", "Server is not connected! (Load File)");
  }
};

BlockPyServer.prototype.saveFile = function (filename, contents, delay) {
  if (delay === undefined) {
    delay = this.TIMER_DELAY;
  }

  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("saveFile")) {
    var data = this.createServerData();
    data["filename"] = filename;
    data["code"] = contents;
    this.setStatus("saveFile", StatusState.ACTIVE);

    this._postLatestRetry(data, filename, "saveFile", delay);
  } else {
    this.setStatus("saveFile", StatusState.OFFLINE);
  }
};

BlockPyServer.prototype.updateSubmission = function (score, correct, hiddenOverride, forceUpdate) {
  var _this10 = this;

  var callback = this.main.model.configuration.callbacks.success;

  if (this.main.model.ui.server.isEndpointConnected("updateSubmission")) {
    var data = this.createServerData();
    data["score"] = score;
    data["correct"] = correct;
    data["hidden_override"] = hiddenOverride;
    data["force_update"] = forceUpdate;
    this.main.components.pythonEditor.bm.blockEditor.getPngFromBlocks(function (pngData, img) {
      data["image"] = pngData;

      if (img.remove) {
        img.remove();
      }

      _this10._postRetry(data, "updateSubmission", 0, function (response) {
        if (response.success) {
          _this10.setStatus("updateSubmission", StatusState.READY);
        } else {
          _this10.setStatus("updateSubmission", StatusState.FAILED, response.message);
        }

        if (!hiddenOverride && correct && callback) {
          callback(data["assignment_id"]);
        }
      });
    });
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/sk_mod_instructor.js":
/*!**********************************!*\
  !*** ./src/sk_mod_instructor.js ***!
  \**********************************/
/*! exports provided: $sk_mod_instructor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$sk_mod_instructor", function() { return $sk_mod_instructor; });
/**
 * Skulpt Module for holding the Instructor API.
 *
 * This module is loaded in by getting the functions' source code from toString.
 * Isn't that crazy?
 *
 *
 */
var $sk_mod_instructor = function $sk_mod_instructor() {
  // Main module object that gets returned at the end.
  var mod = {};
  var none = Sk.builtin.none.none$;
  var prior = null;
  mod.timeit = new Sk.builtin.func(function (name) {
    Sk.builtin.pyCheckArgs("timeit", arguments, 1, 1);
    var difference;

    if (prior === null) {
      difference = 0;
    } else {
      difference = Date.now() - prior;
    }

    console.log(Sk.ffi.remapToJs(name), difference / 1000);
    prior = Date.now();
  });
  /**
   * Logs feedback to javascript console
   */

  mod.log = new Sk.builtin.func(function (message) {
    Sk.builtin.pyCheckArgs("log", arguments, 1, 1);
    console.log(Sk.ffi.remapToJs(message));
  });
  /**
   * Logs debug to javascript console
   */

  mod.debug = new Sk.builtin.func(function (message) {
    Sk.builtin.pyCheckArgs("log", arguments, 1, 1);
    console.log(message);
  });
  /**
   * This function coverts the output in the student report to a python 
   * list and returns it.
  **/

  mod.get_output = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_output", arguments, 0, 0);

    if (Sk.executionReports["student"].success) {
      var output = Sk.executionReports["student"]["output"]();
      output = output.map(function (item) {
        return item.toSkulpt();
      });
      return Sk.builtin.list(output);
    } else {
      return new Sk.builtin.list([]);
    }
  });
  /**
   * This function resets the output, particularly useful if the student
   * code is going to be rerun.
   */

  mod.reset_output = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("reset_output", arguments, 0, 0);

    if (Sk.executionReports["student"].success) {
      Sk.executionReports["student"].output.removeAll();
    }

    return Sk.builtin.none.none$;
  });
  mod.queue_input = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("queue_input", arguments, 1, Infinity);
    var args = arguments;

    for (var i = args.length - 1; i >= 0; i--) {
      var _input = args[i];
      Sk.builtin.pyCheckType("input", "string", Sk.builtin.checkString(_input));
      Sk.queuedInput.push(Sk.ffi.remapToJs(_input));
    }
  });
  /**
   * This function is called by instructors to get the students' code as a string.
  **/

  mod.get_program = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_program", arguments, 0, 0);
    return Sk.ffi.remapToPy(Sk.executionReports["verifier"].code);
  });
  /**
   * This function is called by instructors to get the students' code as a string.
  **/

  mod.get_evaluation = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_evaluation", arguments, 0, 0);
    return Sk.ffi.remapToPy(Sk.executionReports["student"].evaluation || "");
  });
  mod.trace_lines = new Sk.builtin.func(function () {
    if (Sk.executionReports["student"].success) {
      var lines = Sk.executionReports["student"].lines;
      return Sk.ffi.remapToPy(lines);
    } else {
      return new Sk.builtin.list([]);
    }
  });
  /**
   *
   */

  mod.get_student_error = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_student_error", arguments, 0, 0);

    if (Sk.executionReports["student"].success) {
      return new Sk.builtin.tuple([none, none]);
    } else {
      var error = Sk.executionReports["student"].error,
          position = {};

      if (error && error.traceback && error.traceback.length > 0) {
        position["line"] = error.traceback[0].lineno;
      } else {
        error = none;
      }

      position = Sk.ffi.remapToPy(position);
      return new Sk.builtin.tuple([error, position]);
    }
  });
  mod.had_execution_time_error = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("had_execution_time_error", arguments, 0, 0);
    return !Sk.executionReports["student"].success && Sk.executionReports["student"].error && Sk.executionReports["student"].error.tp$name === "TimeLimitError";
  });
  var backupTime = undefined;
  mod.limit_execution_time = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("limit_execution_time", arguments, 0, 0);
    backupTime = Sk.execLimit;

    if (Sk.execLimitFunction) {
      Sk.execLimit = Sk.execLimitFunction();
      Sk.execStart = Date.now();
    }
  });
  mod.unlimit_execution_time = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("unlimit_execution_time", arguments, 0, 0);
    Sk.execLimit = backupTime;
    Sk.execStart = Date.now();
  });
  mod.suppress_scrolling = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("suppress_scrolling", arguments, 0, 0);
    Sk.executionReports.instructor.scrolling = true;
  });
  /*
  def hist(self, data, **kwargs):
      label = kwargs.get('label', None)
      self.active_plot['data'].append({'type': 'Histogram', 'values': data, 'label': label})
  def plot(self, xs, ys=None, **kwargs):
      label = kwargs.get('label', None)
      if ys == None:
          self.active_plot['data'].append({'type': 'Line', 
                                          'x': range(len(xs)), 'y': xs, 'label': label})
      else:
          self.active_plot['data'].append({'type': 'Line', 'x': xs, 'y': ys, 'label': label})
  def scatter(self, xs, ys, **kwargs):
      label = kwargs.get('label', None)
      self.active_plot['data'].append({'type': 'Scatter', 'x': xs, 'y': ys, 'label': label})
  */

  mod.get_plots = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_plots", arguments, 0, 0);

    if (Sk.executionReports["student"].success) {
      var outputs = Sk.executionReports["student"]["output"]();
      outputs = outputs.filter(function (output) {
        return output.type === "plot";
      }).map(function (graph) {
        return {
          "data": graph.content.map(function (plot) {
            var newPlot = {
              "type": plot.type,
              "label": ""
            };

            if (plot.type === "line" || plot.type === "scatter") {
              newPlot["x"] = plot.data.map(function (v) {
                return v.x;
              });
              newPlot["y"] = plot.data.map(function (v) {
                return v.y;
              });
            } else if (plot.type === "hist") {
              newPlot["values"] = plot.data;
            }

            return newPlot;
          }),
          "xlabel": "",
          "ylabel": "",
          "title": "",
          "legend": false
        };
      });
      return Sk.ffi.remapToPy(outputs);
    } else {
      return Sk.ffi.remapToPy([]);
    }
  }); // Provides `student` as an object with all the data that the student declared.

  mod.StudentData = Sk.misceval.buildClass(mod, function ($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function (self) {
      //self.data = Sk.builtin.dict();
      var newDict = Sk.builtin.dict();
      Sk.abstr.sattr(self, Sk.builtin.str("data"), newDict, true);
      self.module = Sk.executionReports["student"].results;

      if (self.module !== undefined) {
        self.module = self.module.$d;

        for (var key in self.module) {
          if (self.module.hasOwnProperty(key)) {
            Sk.abstr.objectSetItem(newDict, Sk.ffi.remapToPy(Sk.unfixReserved(key)), self.module[key]);
          }
        }
      } else {
        self.module = {};
      }
    });

    var call_f = function call_f(kwa) {
      Sk.builtin.pyCheckArgsLen("call", arguments.length, 1, Infinity, true, true);
      var args = Array.prototype.slice.call(arguments, 1);
      var kwargs = new Sk.builtins.dict(kwa);
      var self = args[0];
      var functionName = args[1];
      args = args.slice(2);
      var inputs = kwargs.mp$lookup(new Sk.builtin.str("inputs"));

      if (inputs !== undefined) {
        inputs = Sk.ffi.remapToJs(inputs);

        if (inputs.constructor === Array) {
          inputs.forEach(function (item) {
            Sk.queuedInput.push(item);
          });
        } else {
          Sk.queuedInput.push(input);
        }
      }

      var data = self.tp$getattr(new Sk.builtin.str("data"));
      var functionObject = data.mp$lookup(functionName);
      var result = functionObject.tp$call(args);
      return result;
    };

    call_f.co_kwargs = true; //call_f.co_varnames = ["self", "function"];

    call_f.co_name = new Sk.builtin.str("call");
    $loc["call_$rn$"] = new Sk.builtin.func(call_f);
    $loc["__repr__"] = new Sk.builtin.func(function (self) {
      return new Sk.builtin.str("");
    });
    $loc.get_names_by_type = new Sk.builtin.func(function (self, type, exclude_builtins) {
      Sk.builtin.pyCheckArgs("get_names_by_type", arguments, 2, 3);

      if (exclude_builtins === undefined) {
        exclude_builtins = true;
      } else {
        Sk.builtin.pyCheckType("exclude_builtins", "boolean", Sk.builtin.checkBool(exclude_builtins));
        exclude_builtins = Sk.ffi.remapToJs(exclude_builtins);
      }

      var result = [];

      for (var property in self.module) {
        if (self.module.hasOwnProperty(property)) {
          if (self.module[property].tp$name === type.tp$name) {
            //console.log(exclude_builtins);
            if (exclude_builtins && property.startsWith("__")) {
              continue;
            }

            result.push(Sk.ffi.remapToPy(Sk.unfixReserved(property)));
          }
        }
      }

      return Sk.builtin.list(result);
    });
    $loc.get_values_by_type = new Sk.builtin.func(function (self, type, exclude_builtins) {
      Sk.builtin.pyCheckArgs("get_values_by_type", arguments, 2, 3);

      if (exclude_builtins === undefined) {
        exclude_builtins = true;
      } else {
        Sk.builtin.pyCheckType("exclude_builtins", "boolean", Sk.builtin.checkBool(exclude_builtins));
        exclude_builtins = Sk.ffi.remapToJs(exclude_builtins);
      }

      var result = [];

      for (var property in self.module) {
        if (self.module.hasOwnProperty(property)) {
          if (self.module[property].tp$name === type.tp$name) {
            if (exclude_builtins && property.startsWith("__")) {
              continue;
            }

            result.push(self.module[property]);
          }
        }
      }

      return Sk.builtin.list(result);
    });
  }, "StudentData");
  mod.student = Sk.misceval.callsimOrSuspend(mod.StudentData);
  mod.get_student_data = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_student_data", arguments, 0, 0);
    return mod.student;
  });
  return mod;
};

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: LocalStorageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageWrapper", function() { return LocalStorageWrapper; });
var LOCAL_STORAGE_REF;

try {
  LOCAL_STORAGE_REF = localStorage;
  var mod = "BLOCKPY_LOCALSTORAGE_TEST";
  LOCAL_STORAGE_REF.setItem(mod, mod);
  LOCAL_STORAGE_REF.removeItem(mod);
} catch (e) {
  LOCAL_STORAGE_REF = {
    _data: {},
    setItem: function setItem(id, val) {
      return this._data[id] = String(val);
    },
    getItem: function getItem(id) {
      return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
    },
    removeItem: function removeItem(id) {
      return delete this._data[id];
    },
    clear: function clear() {
      return this._data = {};
    }
  };
}
/**
 * Helper object for interfacing with the LocalStorage. The LocalStorage
 * browser API allows for offline storage. That API is very unsophisticated,
 * and is essentially a lame key-value store. This object sits on top
 * and provides a number of useful utilities, including rudimentarycache
 * cache expiration.
 *
 * @constructor
 * @this {LocalStorageWrapper}
 * @param {String} namespace - A namespace to use in grouping access to localstorage. This keeps access clean and organized, while also making it possible to have multiple LocalStorage connections.
 */


function LocalStorageWrapper(namespace) {
  this.namespace = namespace;
}
/**
 * A method for adding a key/value pair to LocalStorage.
 * Note that both parameters must be strings (JSON.stringify is your friend).
 *
 * @param {String} key - The name of the key.
 * @param {String} value - The value.
 */

LocalStorageWrapper.prototype.set = function (key, value) {
  LOCAL_STORAGE_REF.setItem(this.namespace + "_" + key + "_value", value);
  LOCAL_STORAGE_REF.setItem(this.namespace + "_" + key + "_timestamp", $.now());
};
/**
 * A method for removing a key from LocalStorage.
 *
 * @param {String} key - The name of the key to remove.
 */


LocalStorageWrapper.prototype.remove = function (key) {
  LOCAL_STORAGE_REF.removeItem(this.namespace + "_" + key + "_value");
  LOCAL_STORAGE_REF.removeItem(this.namespace + "_" + key + "_timestamp");
};
/**
 * A method for retrieving the value associated with the given key.
 *
 * @param {String} key - The name of the key to retrieve the value for.
 */


LocalStorageWrapper.prototype.get = function (key) {
  return LOCAL_STORAGE_REF.getItem(this.namespace + "_" + key + "_value");
};
/**
 * A method for retrieving the time associated with the given key.
 *
 * @param {String} key - The name of the key to retrieve the time for.
 * @returns {Integer} - The timestamp (local epoch) when the key was last set.
 */


LocalStorageWrapper.prototype.getTime = function (key) {
  return parseInt(LOCAL_STORAGE_REF.getItem(this.namespace + "_" + key + "_timestamp"));
};
/**
 * A method for retrieving the value associated with the given key.
 * If the key does not exist, then the default value is used instead.
 * This default will be set.
 *
 * @param {String} key - The name of the key to retrieve the value for.
 * @param {String} defaultValue - The default value to use. Must be a string.
 */


LocalStorageWrapper.prototype.getDefault = function (key, defaultValue) {
  if (this.has(key)) {
    return this.get(key);
  } else {
    this.set(key, defaultValue);
    return defaultValue;
  }
};
/**
 * A test for whether the given key is in LocalStorage.
 *
 * @param {String} key - The key to test existence for.
 */


LocalStorageWrapper.prototype.has = function (key) {
  return LOCAL_STORAGE_REF.getItem(this.namespace + "_" + key + "_value") !== null;
};
/**
 * A test for whether the server has the newer version. This function
 * assumes that the server trip takes about 5 seconds. This method
 * is largely deprecated.
 *
 * @param {String} key - The key to check.
 * @param {Integer} server_time - The server's time as an epoch (in milliseconds)
 */


LocalStorageWrapper.prototype.is_new = function (key, server_time) {
  var stored_time = LOCAL_STORAGE_REF.getItem(this.namespace + "_" + key + "_timestamp");
  return server_time >= stored_time + 5000;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/trace.js":
/*!**********************!*\
  !*** ./src/trace.js ***!
  \**********************/
/*! exports provided: TRACE_HTML, BlockPyTrace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACE_HTML", function() { return TRACE_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyTrace", function() { return BlockPyTrace; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TRACE_HTML = "\n\n<div class=\"blockpy-trace col-md-6 blockpy-panel\"\n            role=\"region\" aria-label=\"Trace\">\n    \n    <div class=\"clearfix\">\n        <strong>Trace: </strong>\n        \n        <!-- Feedback/Trace Visibility Control -->\n        <button type='button'\n                class='btn btn-sm btn-outline-secondary float-right blockpy-hide-trace'\n                data-bind=\"click: ui.secondRow.advanceState\">\n            <span class='fas fa-eye'></span> Hide Trace\n        </button>\n    </div>\n\n    <div class=\"input-group mb-3 blockpy-trace-controls\">\n        <div class=\"input-group-prepend\">\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.first\">\n                <span class='fas fa-step-backward'></span>\n            </button>\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.backward\">\n                <span class='fas fa-backward'></span>\n            </button>\n            <span class=\"input-group-text\">Step:</span>\n            <span class=\"input-group-text\">\n                <span data-bind='text: execution.student.currentTraceStep'></span>\n                / <span data-bind='text: execution.student.lastStep'></span>\n            </span>\n        </div>\n        <div class=\"input-group-append\">\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.forward\">\n                <span class='fas fa-forward'></span>\n            </button>\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.last\">\n                <span class='fas fa-step-forward'></span>\n            </button>\n            <span class=\"input-group-text\">\n                <span data-bind='text: ui.trace.line'></span>\n            </span>\n        </div>\n    </div>\n    \n    <table class='table table-sm table-striped table-bordered table-hover'>\n        <caption>Current variables at this step</caption>\n        <thead>\n            <tr><th>Name</th><th>Type</th><th>Value</th></tr>\n        </thead>\n        <tbody data-bind=\"foreach: ui.trace.data().properties\">\n            <tr data-bind=\"visible: name != '__file__' && name != '__path__'\">\n                <td data-bind=\"text: name\"></td>\n                <td data-bind=\"text: type\"></td>\n                <td>\n                    <code data-bind=\"text: value\"></code>\n                    <!-- ko if: type == \"List\" -->\n                    \n                    <a href=\"\" data-bind=\"click: //$root.viewExactValue(type, exact_value)\">\n                    <span class='glyphicon glyphicon-new-window'></span>\n                    </a>\n                    <!-- /ko -->\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    \n</div>\n";
var BlockPyTrace =
/*#__PURE__*/
function () {
  function BlockPyTrace(main, tag) {
    _classCallCheck(this, BlockPyTrace);

    this.main = main;
    this.tag = tag;
    this.IGNORED_GLOBALS = ["__name__", "__doc__", "__package__", "classmethod", "property", "staticmethod"]; // this.trace.click(this.buildTraceTable.bind(this));
  }
  /**
   * Consume a set of variables traced from the execution and parse out any
   * global variables and modules.
   *
   * @param {Object} variables - a mapping of variable names to their Skupt value.
   */


  _createClass(BlockPyTrace, [{
    key: "parseGlobals",
    value: function parseGlobals(variables) {
      var result = [];
      var modules = [];

      if (!this.main.model.display.traceExecution()) {
        for (var property in variables) {
          var value = variables[property];

          if (this.IGNORED_GLOBALS.indexOf(property) === -1) {
            property = property.replace("_$rw$", "").replace("_$rn$", "");
            var parsed = void 0;

            try {
              parsed = BlockPyTrace.parseValue(property, value);
            } catch (_unused) {
              parsed = {
                "name": property,
                "type": "Unknown",
                "value": value.toString()
              };
            }

            if (parsed !== null) {
              result.push(parsed);
            } else if (value.constructor === Sk.builtin.module) {
              modules.push(value.$d.__name__.v);
            }
          }
        }
      }

      return {
        "properties": result,
        "modules": modules
      };
    }
  }], [{
    key: "parseValue",

    /**
     * Convert a Skulpt value into a more easily printable object.
     *
     * @param {String} property
     * @param {Object} value - the skulpt value
     */
    value: function parseValue(property, value, fullLength) {
      if (value === undefined) {
        return {
          "name": property,
          "type": "Unknown",
          "value": "Undefined"
        };
      }

      switch (value.constructor) {
        case Sk.builtin.func:
          return {
            "name": property,
            "type": "Function",
            "value": value.func_code.co_varnames !== undefined ? " Arguments: " + value.func_code.co_varnames.join(", ") : " No arguments"
          };

        case Sk.builtin.module:
          return null;

        case Sk.builtin.str:
          if (fullLength || value.v.length <= 32) {
            return {
              "name": property,
              "type": "String",
              "value": value.$r().v
            };
          } else {
            return {
              "name": property,
              "type": "String",
              "value": "[" + value.sq$length() + " characters not shown]"
            };
          }

        case Sk.builtin.none:
          return {
            "name": property,
            "type": "None",
            "value": "None"
          };

        case Sk.builtin.bool:
          return {
            "name": property,
            "type": "Boolean",
            "value": value.$r().v
          };

        case Sk.builtin.nmber:
          return {
            "name": property,
            "type": "int" === value.skType ? "Integer" : "Float",
            "value": value.$r().v
          };

        case Sk.builtin.int_:
          return {
            "name": property,
            "type": "Integer",
            "value": value.$r().v
          };

        case Sk.builtin.float_:
          return {
            "name": property,
            "type": "Float",
            "value": value.$r().v
          };

        case Sk.builtin.tuple:
          return {
            "name": property,
            "type": "Tuple",
            "value": value.$r().v
          };

        case Sk.builtin.list:
          if (value.v.length <= 20) {
            return {
              "name": property,
              "type": "List",
              "value": value.$r().v,
              "exact_value": value
            };
          } else {
            return {
              "name": property,
              "type": "List",
              "value": "[... " + value.v.length + " elements ...]",
              "exact_value": value
            };
          }

        case Sk.builtin.dict:
          return {
            "name": property,
            "type": "Dictionary",
            "value": value.$r().v
          };

        case Number:
          return {
            "name": property,
            "type": value % 1 === 0 ? "Integer" : "Float",
            "value": value
          };

        case String:
          return {
            "name": property,
            "type": "String",
            "value": value
          };

        case Boolean:
          return {
            "name": property,
            "type": "Boolean",
            "value": value ? "True" : "False"
          };

        default:
          return {
            "name": property,
            "type": value.tp$name === undefined ? value : value.tp$name,
            "value": value.$r === undefined ? value : value.$r().v
          };
      }
    }
  }]);

  return BlockPyTrace;
}(); // TODO: viewExactValue

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: indent, slug, encodeHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indent", function() { return indent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeHTML", function() { return encodeHTML; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Determines if the element is in the list.
 * @param {anything} needle - The element to look for.
 * @param {Array} haystack - The list to search.
 * @return {Boolean} Whether the element exists
 */
function arrayContains(needle, haystack) {
  return haystack.indexOf(needle) > -1;
}
/**
 * Remove duplicate values from an array, preserving order.
 * Creates a new array, so is non-destructive.
 * Courtesy:
 * https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
 *
 * @param {Array} array - The array to uniquify. Elements compared with ===.
 */


function arrayUnique(array) {
  var a = array.concat();

  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) {
        a.splice(j--, 1);
      }
    }
  }

  return a;
}
/**
 * A helper function for extending an array based
 * on an "addArray" and "removeArray". Any element
 * found in removeArray is removed from the first array
 * and all the elements of addArray are added.
 * Any duplicate items are removed.
 * Creates a new array, so is non-destructive.
 *
 * @param {Array} array - the array to manipulate
 * @param {Array} addArray - the elements to add to the array
 * @param {Array} removeArray - the elements to remove from the array
 * @return {Array} The modified array
 */


function expandArray(array, addArray, removeArray) {
  var copyArray = array.filter(function (item) {
    return removeArray.indexOf(item) === -1;
  });
  return arrayUnique(copyArray.concat(addArray));
}
/**
 * Deeply clones a node
 * @param {Node} node A node to clone
 * @return {Node} A clone of the given node and all its children
 */


function cloneNode(node) {
  // If the node is a text node, then re-create it rather than clone it
  var clone = node.nodeType == 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false); // Recurse     

  var child = node.firstChild;

  while (child) {
    clone.appendChild(cloneNode(child));
    child = child.nextSibling;
  }

  return clone;
}
/**
 * Indents the given string by 4 spaces. This correctly handles multi-line strings.
 *
 * @param {String} str - The string to be manipulated.
 * @returns {String} The string with four spaces added at the start of every new line.
 */


function indent(str) {
  return str.replace(/^(?=.)/gm, "    ");
}
/**
 * Turns spaces into underscores in the string, makes it lowercase.
 * @param {String} str - the string to be manipulated
 * @returns {string}
 */

function slug(str) {
  return str.replace(/\s/g, "_").toLowerCase();
}
/**
 * Return a random integer between [`min`, `max`].
 * 
 * @param {number} min - The lowest possible integer.
 * @param {number} max - The highest possible integer (inclusive).
 * @returns {number} A random integer.
 */

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * Encodes some text so that it can be safely written into an HTML box.
 * This includes replacing special HTML characters (&, <, >, etc.).
 *
 * @param {string} str - The text to be converted.
 * @return {string} The HTML-safe text.
 */


function encodeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
/**
 * Shuffle the blocks in the workspace
 */

if (typeof Blockly !== "undefined") {
  Blockly.WorkspaceSvg.prototype.shuffle = function () {
    var metrics = this.getMetrics();
    var width = metrics.viewWidth / 2,
        height = metrics.viewHeight;
    var blocks = this.getTopBlocks(false);
    var y = 5,
        x = 0,
        maximal_increase = height / blocks.length;

    for (var i = 0; i < blocks.length; i++) {
      // Get a block
      var block = blocks[i];
      var properties = block.getRelativeToSurfaceXY();

      if (i == 0) {
        x = 5;
      } else {
        x = -properties.x + randomInteger(10, width);
      }

      block.moveBy(x, -properties.y + y);
      y = y + randomInteger(5, maximal_increase);
    }
  };
}
/**
 * Move elements from one array to another based on a conditional check.
 * https://stackoverflow.com/questions/31887967/javascript-move-objects-from-one-array-to-another-best-approach
 */


function moveElements(source, target, moveCheck) {
  for (var i = 0; i < source.length; i++) {
    var element = source[i];

    if (moveCheck(element)) {
      source.splice(i, 1);
      target.push(element);
      i--;
    }
  }
}
/**
 * This function checks if the given object is one of the Sk.builtin objects
 * TODO: make this so we don't have to explicitly put out every option
 *          one possible thing we could do is get a string version of the 
 *          of the constructor and look for the substring "return new Sk.builtin"
 *          But I don't know how reliable that is.  Rather, it's kind of hackish.
 *          Should tehoretically belong in Sk.ffi
 * @param {object} obj - the object to be examined
 * @return {boolean} true if the object is one of the Sk.builtin types
**/


function isSkBuiltin(obj) {
  return obj instanceof Sk.builtin.dict || obj instanceof Sk.builtin.list || obj instanceof Sk.builtin.tuple || obj instanceof Sk.builtin.bool || obj instanceof Sk.builtin.int_ || obj instanceof Sk.builtin.float_ || obj instanceof Sk.builtin.str || obj instanceof Sk.builtin.lng; //var cons_str = obj.constructor + "";
  //return cons_str.indexOf("return new Sk.builtin") !== -1;
}

function isAstNode(obj) {
  return obj instanceof Object && "_astname" in obj;
}
/**
 * Should theoretically belong in Sk.ffi, but I put it here instead to not mess up the skulpt files
 * like the normal Sk.ffi.remapToPy, it doesn't work for functions or more complex objects, but it handles
 * cases where the types in obj are a mix of python SIMPLE objects and SIMPLE normal javascript objects
 * @param {object} obj - the object to be converted
 * @return {Sk.builtin.???} - returns the corresponding python object, dropping all functions and things it can't convert
**/


function mixedRemapToPy(obj) {
  var k;
  var kvs;
  var i;
  var arr; //@TODO: should theoretically check if the object is a pyhon dict or array with js objects

  if (isSkBuiltin(obj)) {
    //object is already python ready
    return obj;
  } else if (Object.prototype.toString.call(obj) === "[object Array]") {
    //object is actually a javascript array
    arr = [];

    for (i = 0; i < obj.length; ++i) {
      //for each object, convert it to a python object if it isn't one already
      var subval = obj[i];

      if (!isSkBuiltin(subval)) {
        arr.push(mixedRemapToPy(subval));
      } else {
        arr.push(subval);
      }
    }

    return new Sk.builtin.list(arr);
  } else if (obj === null) {
    //null object
    return Sk.builtin.none.none$;
  } else if (_typeof(obj) === "object") {
    if (!isSkBuiltin(obj)) {
      //assuming it's a standard dictionary
      kvs = []; //Sk.builtin.dict uses an array of key-value,key-value...

      for (k in obj) {
        //convert the key if it needs to be converted
        kvs.push(mixedRemapToPy(k)); //covert corresponding value if it needs to be converted

        kvs.push(mixedRemapToPy(obj[k]));
      } //create the new dictionary


      return new Sk.builtin.dict(kvs);
    } else {
      return obj;
    }
  } else if (typeof obj === "string") {
    return new Sk.builtin.str(obj);
  } else if (typeof obj === "number") {
    return Sk.builtin.assk$(obj);
  } else if (typeof obj === "boolean") {
    return new Sk.builtin.bool(obj);
  } else if (typeof obj === "function") {
    return new Sk.builtin.str(obj.name);
  }
}

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "knockout":
/*!*********************!*\
  !*** external "ko" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_knockout__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3MiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL2Fic3RyYWN0X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL21hcmtkb3duLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3B5dGhvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90YWdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9jaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fZXZhbC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3J1bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2tfbW9kX2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJrb1wiIl0sIm5hbWVzIjpbIkJsb2NrUHkiLCJjb25maWd1cmF0aW9uIiwiYXNzaWdubWVudCIsInN1Ym1pc3Npb24iLCJpbml0TW9kZWwiLCJ1bmRlZmluZWQiLCJzZXRBc3NpZ25tZW50IiwiaW5pdE1haW4iLCJpbml0VXRpbGl0aWVzIiwiaW5pdE1vZGVsTWV0aG9kcyIsInR1cm5PbkhhY2tzIiwiaW5pdEludGVyZmFjZSIsImFwcGx5TW9kZWwiLCJpbml0Q29tcG9uZW50cyIsInN0YXJ0Iiwia2V5IiwiZGVmYXVsdFZhbHVlIiwiaW5pdGlhbENvbmZpZ3VyYXRpb25fIiwibG9jYWxTZXR0aW5nc18iLCJoYXMiLCJnZXQiLCJMb2NhbFN0b3JhZ2VXcmFwcGVyIiwibW9kZWwiLCJ1c2VyIiwiaWQiLCJrbyIsIm9ic2VydmFibGUiLCJuYW1lIiwicm9sZSIsImdldFNldHRpbmciLCJjb3Vyc2VJZCIsImdyb3VwSWQiLCJpbnN0cnVjdGlvbnMiLCJ1cmwiLCJ0eXBlIiwic3RhcnRpbmdDb2RlIiwib25SdW4iLCJvbkNoYW5nZSIsIm9uRXZhbCIsImV4dHJhSW5zdHJ1Y3RvckZpbGVzIiwib2JzZXJ2YWJsZUFycmF5IiwiZXh0cmFTdGFydGluZ0ZpbGVzIiwiZm9ya2VkSWQiLCJmb3JrZWRWZXJzaW9uIiwib3duZXJJZCIsInZlcnNpb24iLCJ0YWdzIiwic2FtcGxlU3VibWlzc2lvbnMiLCJyZXZpZXdlZCIsImhpZGRlbiIsImlwUmFuZ2VzIiwic2V0dGluZ3MiLCJtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwiLCJjb2RlIiwiZXh0cmFGaWxlcyIsImVuZHBvaW50Iiwic2NvcmUiLCJjb3JyZWN0Iiwic3VibWlzc2lvblN0YXR1cyIsImdyYWRpbmdTdGF0dXMiLCJkaXNwbGF5IiwiZmlsZW5hbWUiLCJpbnN0cnVjdG9yIiwidG9TdHJpbmciLCJtdXRlUHJpbnRlciIsInB5dGhvbk1vZGUiLCJEaXNwbGF5TW9kZXMiLCJTUExJVCIsImhpc3RvcnlNb2RlIiwiYXV0b1NhdmUiLCJiaWdDb25zb2xlIiwicHJldmlvdXNDb25zb2xlSGVpZ2h0IiwiY3VycmVudENvbnNvbGVIZWlnaHQiLCJzZWNvbmRSb3dTZWNvbmRQYW5lbCIsIlNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyIsIkZFRURCQUNLIiwidHJhY2VFeGVjdXRpb24iLCJsb2FkaW5nRGF0YXNldHMiLCJjaGFuZ2VkSW5zdHJ1Y3Rpb25zIiwidHJpZ2dlck9uQ2hhbmdlIiwiZGlydHlTdWJtaXNzaW9uIiwic3RhdHVzIiwibG9hZEFzc2lnbm1lbnQiLCJTdGF0dXNTdGF0ZSIsIlJFQURZIiwibG9hZEFzc2lnbm1lbnRNZXNzYWdlIiwibG9hZEhpc3RvcnkiLCJsb2FkSGlzdG9yeU1lc3NhZ2UiLCJsb2FkRmlsZSIsImxvYWRGaWxlTWVzc2FnZSIsImxvYWREYXRhc2V0IiwibG9hZERhdGFzZXRNZXNzYWdlIiwibG9nRXZlbnQiLCJsb2dFdmVudE1lc3NhZ2UiLCJzYXZlSW1hZ2UiLCJzYXZlSW1hZ2VNZXNzYWdlIiwic2F2ZUZpbGUiLCJzYXZlRmlsZU1lc3NhZ2UiLCJzYXZlQXNzaWdubWVudCIsInNhdmVBc3NpZ25tZW50TWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb24iLCJ1cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXMiLCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZSIsIm9uRXhlY3V0aW9uIiwiZXhlY3V0aW9uIiwicmVwb3J0cyIsIm91dHB1dCIsInN0dWRlbnQiLCJjdXJyZW50U3RlcCIsImxhc3RTdGVwIiwiY3VycmVudExpbmUiLCJsYXN0TGluZSIsImN1cnJlbnRUcmFjZURhdGEiLCJjdXJyZW50VHJhY2VTdGVwIiwicmVzdWx0cyIsImdsb2JhbHMiLCJmZWVkYmFjayIsIm1lc3NhZ2UiLCJjYXRlZ29yeSIsImxhYmVsIiwibGluZXNFcnJvciIsImxpbmVzVW5jb3ZlcmVkIiwiY2FsbGJhY2tzIiwic2VydmVyQ29ubmVjdGVkIiwiYmxvY2tseVBhdGgiLCJhdHRhY2htZW50UG9pbnQiLCJjb250YWluZXIiLCJ1cmxzIiwiY29uc3RhbnRzIiwiZ3VpIiwibWFrZUludGVyZmFjZSIsIiQiLCJodG1sIiwiYXNzaWdubWVudF9pZCIsImNvbXBvbmVudHMiLCJzZXJ2ZXIiLCJzYW1wbGVzIiwiZ3JhZGluZ19zdGF0dXMiLCJzdWJtaXNzaW9uX3N0YXR1cyIsImNvdXJzZV9pZCIsImxvYWRDb25jYXRlbmF0ZWRGaWxlIiwiZXh0cmFfZmlsZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc2V0SW50ZXJmYWNlIiwid2FzU2VydmVyQ29ubmVjdGVkIiwiZm9ya2VkX2lkIiwiZm9ya2VkX3ZlcnNpb24iLCJpcF9yYW5nZXMiLCJvbl9jaGFuZ2UiLCJmaWxlU3lzdGVtIiwibmV3RmlsZSIsIm9uX2V2YWwiLCJvbl9ydW4iLCJzdGFydGluZ19jb2RlIiwib3duZXJfaWQiLCJsb2FkQXNzaWdubWVudFNldHRpbmdzIiwibG9hZFRhZ3MiLCJsb2FkU2FtcGxlU3VibWlzc2lvbnMiLCJzYW1wbGVfc3VibWlzc2lvbnMiLCJleHRyYV9pbnN0cnVjdG9yX2ZpbGVzIiwiZXh0cmFfc3RhcnRpbmdfZmlsZXMiLCJsb2FkU3VibWlzc2lvbiIsImNvcmdpcyIsImxvYWREYXRhc2V0cyIsInNldFN0YXR1cyIsInNlbGYiLCJ1aSIsImlzR3JhZGVyIiwicHVyZUNvbXB1dGVkIiwiaXNDaGFuZ2VkIiwiY3VycmVudCIsInV0aWxpdGllcyIsIm1hcmtkb3duIiwicmVzZXQiLCJtZW51IiwiY2FuTWFya1N1Ym1pdHRlZCIsInRleHRNYXJrU3VibWl0dGVkIiwiaXNTdWJtaXR0ZWQiLCJjbGlja01hcmtTdWJtaXR0ZWQiLCJlbmdpbmUiLCJydW4iLCJ0b0xvd2VyQ2FzZSIsInNlY29uZFJvdyIsImlzRmVlZGJhY2tWaXNpYmxlIiwiaXNUcmFjZVZpc2libGUiLCJUUkFDRSIsImlzQ29uc29sZVNob3dWaXNpYmxlIiwic3dpdGNoTGFiZWwiLCJhZHZhbmNlU3RhdGUiLCJjdXJyZW50UGFuZWwiLCJOT05FIiwic2l6ZSIsImhpZGVFdmFsdWF0ZSIsIkFDVElWRSIsImJhZGdlIiwidHJhY2UiLCJsaW5lIiwic3RlcCIsInRyYWNlRGF0YSIsImZpcnN0IiwiYmFja3dhcmQiLCJwcmV2aW91cyIsIk1hdGgiLCJtYXgiLCJmb3J3YXJkIiwibmV4dCIsIm1pbiIsImxhc3QiLCJmaWxlcyIsInZpc2libGUiLCJoaWRlRmlsZXMiLCJoYXNDb250ZW50cyIsInBhdGgiLCJzb21lIiwiZmlsZSIsImxlbmd0aCIsImFkZCIsImRlbGV0ZUZpbGUiLCJleHRyYVN0dWRlbnRGaWxlcyIsIm9ic2VydmVDb25jYXRlbmF0ZWRGaWxlIiwiZWRpdG9ycyIsImdldEVkaXRvciIsInZpZXciLCJoaWRlRWRpdG9ycyIsIm1hcCIsInN1YnN0ciIsIm1ha2VNb2RlbEZpbGUiLCJjb250ZW50cyIsImNhblNhdmUiLCJjYW5EZWxldGUiLCJVTkRFTEVUQUJMRV9GSUxFUyIsImluZGV4T2YiLCJjYW5SZW5hbWUiLCJVTlJFTkFNQUJMRV9GSUxFUyIsInVwbG9hZCIsInVwbG9hZEZpbGUiLCJiaW5kIiwiZG93bmxvYWQiLCJkb3dubG9hZEZpbGUiLCJpbXBvcnREYXRhc2V0Iiwib3BlbkRpYWxvZyIsInB5dGhvbiIsImZ1bGxzY3JlZW4iLCJjb2RlTWlycm9yIiwicHl0aG9uRWRpdG9yIiwiYm0iLCJ0ZXh0RWRpdG9yIiwic2V0T3B0aW9uIiwiZ2V0T3B0aW9uIiwidXBkYXRlTW9kZSIsIm5ld01vZGUiLCJvbGRQeXRob25Nb2RlIiwiaXNIaXN0b3J5QXZhaWxhYmxlIiwiaXNFbmRwb2ludENvbm5lY3RlZCIsInR1cm5PZmZIaXN0b3J5TW9kZSIsInVwZGF0ZUVkaXRvciIsInNldFJlYWRPbmx5IiwidHVybk9uSGlzdG9yeU1vZGUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJoaXN0b3J5IiwibG9hZCIsImRpYWxvZyIsIkVSUk9SX0xPQURJTkdfSElTVE9SWSIsInRvZ2dsZUhpc3RvcnlNb2RlIiwibW92ZVRvU3RhcnQiLCJtb3ZlUHJldmlvdXMiLCJtb3ZlTmV4dCIsIm1vc3RSZWNlbnQiLCJtb3ZlVG9Nb3N0UmVjZW50IiwidXNlIiwic2F2ZSIsImV4ZWN1dGUiLCJldmFsdWF0ZSIsIm1lc3NhZ2VzIiwiZm9yY2UiLCJldmVudCIsInRhcmdldCIsImZhZGVPdXQiLCJmYWRlSW4iLCJtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zIiwiYXBwbHlCaW5kaW5ncyIsIm1haW4iLCJ0ZXh0IiwiRWFzeU1ERSIsInByb3RvdHlwZSIsIkJsb2NrUHlEaWFsb2ciLCJmaW5kIiwiQmxvY2tQeUZlZWRiYWNrIiwiQmxvY2tQeVRyYWNlIiwiQmxvY2tQeUNvbnNvbGUiLCJCbG9ja1B5RW5naW5lIiwiQmxvY2tQeUZpbGVTeXN0ZW0iLCJFZGl0b3JzIiwiYnlOYW1lIiwiQmxvY2tQeVNlcnZlciIsIkJsb2NrUHlDb3JnaXMiLCJCbG9ja1B5SGlzdG9yeSIsIlNUQVJUX0VWQUxfSFRNTCIsIkNPTlNPTEVfSFRNTCIsIk5FV19DT05TT0xFX0xJTkVfSFRNTCIsIkNvbnNvbGVMaW5lVHlwZSIsIlRFWFQiLCJIVE1MIiwiUExPVCIsIklNQUdFIiwiVFVSVExFIiwiRVZBTCIsIlNUQVJUX0VWQUwiLCJWQUxVRSIsIklOUFVUIiwiVEVTVF9DQVNFIiwiQ29uc29sZUxpbmUiLCJjb250ZW50Iiwib3JpZ2luIiwiU2siLCJjdXJyRmlsZW5hbWUiLCJleGVjdXRpb25CdWZmZXIiLCJpbmRleCIsImZmaSIsInJlbWFwVG9QeSIsInJlbW92ZSIsIkNvbnNvbGVMaW5lVHVydGxlIiwiYWRkQ2xhc3MiLCJ3aGVyZSIsInByZXBlbmQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiQ29uc29sZUxpbmVJbWFnZSIsImFwcGVuZCIsIkNvbnNvbGVMaW5lUGxvdCIsIkNvbnNvbGVMaW5lVGV4dCIsImVuY29kZWRUZXh0IiwiZW5jb2RlSFRNTCIsImxpbmVEYXRhIiwidG9vbHRpcCIsIkNvbnNvbGVMaW5lVmFsdWUiLCJDb25zb2xlTGluZUlucHV0IiwicHJvbXB0TWVzc2FnZSIsImlucHV0Rm9ybSIsImlucHV0QnRuIiwiaW5wdXRHcm91cCIsImlucHV0Qm94IiwiaW5wdXRNc2ciLCJtYWtlSW50ZXJhY3RpdmUiLCJpbnB1dCIsImJ1dHRvbiIsInJlc29sdmVPbkNsaWNrIiwic3VibWl0dGVkUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic3VibWl0Rm9ybSIsInZhbCIsInByb3AiLCJjbGljayIsImtleXVwIiwiZSIsImtleUNvZGUiLCJmb2N1cyIsIkNvbnNvbGVMaW5lRXZhbHVhdGUiLCJDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUiLCJ0YWciLCJwcmludGVyVGFnIiwiTUlOSU1VTV9XSURUSCIsIk1JTklNVU1fSEVJR0hUIiwiREVGQVVMVF9IRUlHSFQiLCJoZWlnaHQiLCJjbGVhciIsInJlbW92ZUFsbCIsImxpbmVCdWZmZXIiLCJwbG90QnVmZmVyIiwiZW1wdHkiLCJ0dXJ0bGVMaW5lIiwiVHVydGxlR3JhcGhpY3MiLCJnZXRUdXJ0bGVMaW5lIiwid2lkdGgiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsImFzc2V0cyIsImxvYWRBc3NldCIsInJlbmRlciIsImN1cnJlbnRQcmludGVyRGltZW5zaW9uIiwic2F2ZVR1cnRsZU91dHB1dCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJJbWFnZSIsImRhdGFVcmwiLCJ0b0RhdGFVUkwiLCJwYWdlIiwiZWFjaCIsImF0dHIiLCJzaG93IiwiaGlkZSIsImxpbmVUZXh0IiwiZmx1c2giLCJjaGFyQXQiLCJzcGxpdExpbmVzIiwic3BsaXQiLCJhZGRDb250ZW50IiwiaSIsInB1c2giLCJwbG90cyIsImltYWdlRGF0YSIsImltYWdlQnVmZmVyIiwiaW1hZ2UiLCJ2YWx1ZSIsInByaW50ZWRWYWx1ZSIsImlucHV0QnVmZmVyIiwic3RhcnRFdmFsdWF0aW9uIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIl9JTVBPUlRFRF9EQVRBU0VUUyIsIl9JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUyIsInNldEJ1dHRvbkxvYWRlZCIsImJ0biIsInJlbW92ZUNsYXNzIiwibG9hZGVkRGF0YXNldHMiLCJzaWxlbnRseSIsImVkaXRvciIsImltcG9ydHMiLCJkYXRhc2V0cyIsImZvckVhY2giLCJCbG9ja01pcnJvckJsb2NrRWRpdG9yIiwiRVhUUkFfVE9PTFMiLCJhcHBseSIsInNsdWciLCJ3aGVuIiwiZG9uZSIsImZvcmNlQmxvY2tSZWZyZXNoIiwiYmxvY2tFZGl0b3IiLCJyZW1ha2VUb29sYm94IiwiZmFpbCIsImFyZ3VtZW50cyIsImVycm9yIiwiYWx3YXlzIiwiZmluYWxpemVTdWJzY3JpcHRpb25zIiwidXJsX3JldHJpZXZhbHMiLCJyb290IiwiaW1wb3J0RGF0YXNldHMiLCJnZXREYXRhc2V0IiwiZ2V0U2NyaXB0IiwiZ2V0Q29tcGxldGUiLCJnZXRTa3VscHQiLCJidWlsdGluRmlsZXMiLCJnZXRCbG9ja2x5IiwiZ2V0SlNPTiIsImJsb2NrcHkiLCJkb2N1bWVudGF0aW9uIiwiYm9keSIsIk9iamVjdCIsImtleXMiLCJzb3J0Iiwic2x1Z2dlZE5hbWUiLCJ0aXRsZU5hbWUiLCJpbWdTcmMiLCJ0aXRsZSIsIm92ZXJ2aWV3IiwiYXBwZW5kVG8iLCJESUFMT0dfSFRNTCIsInRpdGxlVGFnIiwiYm9keVRhZyIsIm9uY2xvc2UiLCJtb2RhbCIsImRyYWdnYWJsZSIsIm9uIiwiRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCIsIlNDUkVFTlNIT1RfQkxPQ0tTIiwiRVJST1JfVVBEQVRJTkdfU1VCTUlTU0lPTl9TVEFUVVMiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZpbGVOYW1lIiwicmVhZEFzVGV4dCIsInNsdWdnaWZ5IiwicmVwbGFjZSIsImV4dGVuc2lvbiIsIm1pbWV0eXBlIiwiYmxvYiIsIkJsb2IiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwibXNTYXZlQmxvYiIsInRlbXBvcmFyeURvd25sb2FkTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiQWJzdHJhY3RFZGl0b3IiLCJjaGFuZ2VFZGl0b3IiLCJ3YXRjaEZpbGUiLCJ1cGRhdGVkIiwib25GaWxlVXBkYXRlZCIsImRlbGV0ZWQiLCJvbkZpbGVEZWxldGVkIiwibmV3RmlsZW5hbWUiLCJvbGRFZGl0b3IiLCJnZXRGaWxlIiwidHJhY2tDdXJyZW50RmlsZSIsIm5ld0VkaXRvciIsInN0b3BXYXRjaGluZ0ZpbGUiLCJyZXN1bHQiLCJoYW5kbGUiLCJwYXJzZUZpbGVuYW1lIiwiQVNTSUdOTUVOVF9TRVRUSU5HUyIsImdldERvY3VtZW50YXRpb24iLCJtYWtlU3RhcnRWaWV3VGFiIiwiaWNvbiIsIm1vZGUiLCJBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MIiwiZmlsdGVyIiwic2V0dGluZyIsInByZXR0eU5hbWUiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MIiwiQkxPQ0siLCJzYXZlQXNzaWdubWVudFNldHRpbmdzIiwiY2xpZW50TmFtZSIsInNlcnZlck5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJzdGFydF92aWV3IiwiQXNzaWdubWVudFNldHRpbmdzVmlldyIsImRpcnR5IiwiY3VycmVudExpc3RlbmVyIiwidXBkYXRlSGFuZGxlIiwibmV3Q29udGVudHMiLCJBc3NpZ25tZW50U2V0dGluZ3MiLCJleHRlbnNpb25zIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsIk1BUktET1dOX0VESVRPUl9IVE1MIiwiTWFya2Rvd25FZGl0b3JWaWV3IiwibWRlIiwiZWxlbWVudCIsImF1dG9Eb3dubG9hZEZvbnRBd2Vzb21lIiwiZm9yY2VTeW5jIiwibWluSGVpZ2h0IiwicmVuZGVyaW5nQ29uZmlnIiwiY29kZVN5bnRheEhpZ2hsaWdodGluZyIsImluZGVudFdpdGhUYWJzIiwidGFiU2l6ZSIsImN1cnJlbnRTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJjb2RlbWlycm9yIiwic2V0VGltZW91dCIsInJlZnJlc2giLCJkaXNwb3NlIiwib2ZmIiwiTWFya2Rvd25FZGl0b3IiLCJtYWtlVGFiIiwiUFlUSE9OX0VESVRPUl9IVE1MIiwiSElTVE9SWV9UT09MQkFSX0hUTUwiLCJjb252ZXJ0SXB5bmJUb1B5dGhvbiIsImlweW5iIiwiaXNVc2FibGUiLCJjZWxsIiwiY2VsbF90eXBlIiwic291cmNlIiwic3RhcnRzV2l0aCIsIm1ha2VQeXRob24iLCJjZWxscyIsIlB5dGhvbkVkaXRvclZpZXciLCJCbG9ja01pcnJvciIsInJlYWRPbmx5IiwibWFrZVN1YnNjcmlwdGlvbnMiLCJsaW5lRXJyb3JTdWJzY3JpcHRpb24iLCJsaW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uIiwid29ya3NwYWNlIiwiY29uZmlndXJlQ29udGV4dE1lbnUiLCJvcHRpb25zIiwiZW5hYmxlZCIsImNhbGxiYWNrIiwib2xkRmlsZW5hbWUiLCJjdXJyZW50Qk1MaXN0ZW5lciIsImFkZENoYW5nZUxpc3RlbmVyIiwiaXNQYXJzb25zIiwibGluZXMiLCJzZXRIaWdobGlnaHRlZExpbmVzIiwiZGVsZXRlRmlsZUxvY2FsbHlfIiwic2V0Q29kZSIsImNsZWFySGlnaGxpZ2h0ZWRMaW5lcyIsImdldENvZGUiLCJyZW1vdmVDaGFuZ2VMaXN0ZW5lciIsImNsZWFyTGluZVN1YnNjcmlwdGlvbnMiLCJzZXRNb2RlIiwiaXNSZWFkT25seSIsImVuZHNXaXRoIiwiUHl0aG9uRWRpdG9yIiwiVEFHU19FRElUT1JfSFRNTCIsIlRhZ3NFZGl0b3JWaWV3IiwiVGFnc0VkaXRvciIsIlRFWFRfRURJVE9SX0hUTUwiLCJUZXh0RWRpdG9yVmlldyIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJzaG93Q3Vyc29yV2hlblNlbGVjdGluZyIsImxpbmVOdW1iZXJzIiwiZmlyc3RMaW5lTnVtYmVyIiwiaW5kZW50VW5pdCIsImV4dHJhS2V5cyIsImNtIiwiYmx1ciIsInNldFZhbHVlIiwiVGV4dEVkaXRvciIsIkVkaXRvcnNFbnVtIiwiU1VCTUlTU0lPTiIsIkFTU0lHTk1FTlQiLCJJTlNUUlVDVElPTlMiLCJPTl9SVU4iLCJPTl9DSEFOR0UiLCJPTl9FVkFMIiwiU1RBUlRJTkdfQ09ERSIsIlNBTVBMRV9TVUJNSVNTSU9OUyIsIklOU1RSVUNUT1JfRklMRSIsIlNQRUNJQUxfTkFNRVNQQUNFUyIsIkFWQUlMQUJMRV9FRElUT1JTIiwiRURJVE9SU19IVE1MIiwicmVnaXN0ZXJlZF8iLCJleHRlbnNpb25zXyIsImJ5TmFtZV8iLCJyZWdpc3RlckVkaXRvciIsImluc3RhbmNlIiwiZXhpdCIsImVudGVyIiwic3BhY2UiLCJsYXN0SW5kZXhPZiIsImV4ZWN1dGlvbk1vZGVsIiwiY29uZmlndXJhdGlvbnMiLCJSdW5Db25maWd1cmF0aW9uIiwiZXZhbCIsIkV2YWxDb25maWd1cmF0aW9uIiwiT25SdW5Db25maWd1cmF0aW9uIiwiT25DaGFuZ2VDb25maWd1cmF0aW9uIiwiT25FdmFsQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyZSIsImdldFNrdWxwdE9wdGlvbnMiLCJvbkV4ZWN1dGlvbkJlZ2luIiwib25FeGVjdXRpb25FbmQiLCJyZXBvcnQiLCJyZXNldFN0dWRlbnRNb2RlbCIsInJlc2V0UmVwb3J0cyIsInJlc2V0RXhlY3V0aW9uQnVmZmVyIiwidGhlbiIsImZhaWx1cmUiLCJkaXNhYmxlRmVlZGJhY2siLCJleGVjdXRpb25FbmRfIiwiZXZhbHVhdGlvbklucHV0IiwidXNlcklucHV0IiwibWlzY2V2YWwiLCJhc3luY1RvUHJvbWlzZSIsImltcG9ydE1haW5XaXRoQm9keSIsIkZJTEVOQU1FIiwicHJvZ3JhbXMiLCJ0cmltIiwic2F2ZUNvZGUiLCJ2ZXJpZnlDb2RlIiwidXBkYXRlUGFyc2UiLCJydW5JbnN0cnVjdG9yQ29kZSIsIm1vZHVsZSIsImV4ZWN1dGlvblJlcG9ydHMiLCJwcmVzZW50RmVlZGJhY2siLCIkZCIsIkVNUFRZX01PRFVMRSIsIkNvbmZpZ3VyYXRpb24iLCJxdWV1ZWRJbnB1dCIsIl9fZnV0dXJlX18iLCJweXRob24zIiwicmVhZCIsImltcG9ydEZpbGUiLCJmaWxlb3BlbiIsIm9wZW5GaWxlIiwiZmlsZXdyaXRlIiwid3JpdGVGaWxlIiwicHJpbnQiLCJpbkJyb3dzZXIiLCJpbnB1dGZ1biIsImlucHV0ZnVuVGFrZXNQcm9tcHQiLCJpbWFnZVByb3h5IiwiZ2V0SW1hZ2VQcm94eSIsInJldGFpbkdsb2JhbHMiLCJ3YXJuIiwiRXJyb3IiLCJwb3AiLCJhZnRlclNpbmdsZUV4ZWN1dGlvbiIsInByaW50VmFsdWUiLCJyZW1hcFRvSnMiLCJfIiwiJHIiLCJyZWplY3QiLCJ4IiwiRkFJTEVEIiwiU3R1ZGVudENvbmZpZ3VyYXRpb24iLCJVVElMSVRZX01PRFVMRV9DT0RFIiwiJHNrX21vZF9pbnN0cnVjdG9yIiwiSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24iLCJleGVjTGltaXQiLCJjbGVhclRpbWVvdXQiLCJXUkFQX0lOU1RSVUNUT1JfQ09ERSIsInN0dWRlbnRDb2RlIiwiaW5zdHJ1Y3RvckNvZGUiLCJxdWljayIsImlzU2FmZSIsInNhZmVDb2RlIiwiaW5kZW50ZWRDb2RlIiwiaW5kZW50IiwiZGlzYWJsZVRpZmEiLCJzdHVkZW50Q29kZVNhZmUiLCJldmFsdWF0aW9uIiwiZHVtbXlPdXRTYW5kYm94IiwibGluZU9mZnNldCIsIk5FV19MSU5FX1JFR0VYIiwiU1VDQ0VTUyIsIlNDT1JFIiwib2xkU2NvcmUiLCJISURFIiwic2Nyb2xsaW5nIiwic2Nyb2xsVG9Cb3R0b20iLCJ0cCRuYW1lIiwicHJlc2VudEludGVybmFsRXJyb3IiLCJ0aWZhQW5hbHlzaXMiLCJPblNhbXBsZUNvbmZpZ3VyYXRpb24iLCJCb29sZWFuIiwiZmluaXNoVHVydGxlcyIsImJlZ2luRXZhbCIsInBhcnNlciIsInZlcmlmaWVyIiwiU2FtcGxlQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdEZ1bmN0aW9uIiwiZGlzYWJsZVRpbWVvdXQiLCJJbmZpbml0eSIsInJlcXVlc3RzR2V0Iiwib3BlblVSTCIsImlzRm9yYmlkZGVuIiwidmFyaWFibGVzIiwibG9jYWxzIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInBhcnNlR2xvYmFscyIsInByb3BlcnRpZXMiLCJtb2R1bGVzIiwiYXN0IiwidmlzaXRlZExpbmVzIiwiU2V0IiwidmlzaXRCb2R5Iiwibm9kZSIsImxpbmVubyIsInN0YXRlbWVudCIsIm9yZWxzZSIsImZpbmFsYm9keSIsIkFycmF5IiwiZnJvbSIsImFzdEZyb21QYXJzZSIsImNzdCIsImZsYWdzIiwiZ2V0TGluZXMiLCJGRUVEQkFDS19IVE1MIiwiZmVlZGJhY2tNb2RlbCIsIm9mZnNldCIsInRvcCIsInRvcF9vZl9lbGVtZW50IiwiYm90dG9tX29mX2VsZW1lbnQiLCJvdXRlckhlaWdodCIsImJvdHRvbV9vZl9zY3JlZW4iLCJ0b3Bfb2Zfc2NyZWVuIiwiZXhlY3V0aW9uUmVzdWx0cyIsIk1FU1NBR0UiLCJDQVRFR09SWSIsIkxBQkVMIiwiREFUQSIsImhpZGVTY29yZSIsImZpbmRGaXJzdEVycm9yTGluZSIsInN0dWRlbnRSZXBvcnQiLCJ1bmNvdmVyZWRMaW5lcyIsInVwZGF0ZUZlZWRiYWNrIiwibm90aWZ5RmVlZGJhY2tVcGRhdGUiLCJmaWxlbmFtZUV4ZWN1dGVkIiwiYXJncyIsInRyYWNlYmFjayIsImxhc3RUcmFjZWJhY2siLCJ0cmFjZWJhY2tGb3JtYXR0ZWQiLCJmcmFtZSIsImZlZWRiYWNrRGF0YSIsInBvc2l0aW9uIiwiZnJpZW5kbHlOYW1lIiwiaGlkZUlmRW1wdHkiLCJGSUxFU19IVE1MIiwiU1RBUlRJTkdfRklMRVMiLCJCQVNJQ19ORVdfRklMRVMiLCJERUxFVEFCTEVfU0lNUExFX0ZJTEVTIiwiQmxvY2tQeUZpbGUiLCJvd25lciIsImNvbmNhdGVuYXRlZEZpbGUiLCJtb2RlbEZpbGVMaXN0IiwiY3JlYXRlQ29uY2F0ZW5hdGVkRmlsZSIsImZpbGVzXyIsIm1vdW50RmlsZXMiLCJ3YXRjaE1vZGVsIiwid2F0Y2hlc18iLCJmaWxlc3lzdGVtIiwiZmlsZUFycmF5IiwiY2hhbmdlcyIsImNoYW5nZSIsIm1vZGVsRmlsZSIsIm5vdGlmeVdhdGNoZXMiLCJvYnNlcnZlSW5BcnJheV8iLCJhcnJheSIsImNvZGVCdW5kbGUiLCJleGlzdGluZ0ZpbGUiLCJvYnNlcnZlRmlsZV8iLCJmb3VuZCIsIkZPT1RFUl9IVE1MIiwiY3VycmVudElkIiwiZWRpdEV2ZW50cyIsInNlbGVjdG9yIiwiZWRpdElkIiwiZW50cnkiLCJmaWxlX3BhdGgiLCJldmVudF90eXBlIiwiUkVNQVBfRVZFTlRfVFlQRVMiLCJkaXNwbGF5ZWQiLCJwcmV0dHlQcmludERhdGVUaW1lIiwiY2xpZW50X3RpbWVzdGFtcCIsImRpc2FibGUiLCJvcHRpb24iLCJkaXNhYmxlZCIsImlzRWRpdEV2ZW50IiwiZXZ0IiwicGFyc2VJbnQiLCJtb250aE5hbWVzIiwid2Vla0RheXMiLCJpc1NhbWVEYXkiLCJzZWNvbmQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInRpbWVTdHJpbmciLCJub3ciLCJEYXRlIiwicGFzdCIsInRvTG9jYWxlVGltZVN0cmluZyIsImRheVN0ciIsImdldERheSIsIm1vbnRoU3RyIiwiZGF0ZSIsImdldEhpc3RvcnkiLCJyZXZlcnNlIiwicmVkdWNlIiwiY29tcGxldGUiLCJlbGVtIiwiY29tcGxldGVfc3RyIiwidGltZSIsIm5ld19saW5lIiwiaGlnaGxpZ2h0VGltZW91dCIsImJsb2NrIiwiaGxqcyIsImhpZ2hsaWdodEJsb2NrIiwiVFJBQ0VfSFRNTCIsIlJFVFJZSU5HIiwiT0ZGTElORSIsInN0b3JhZ2UiLCJxdWV1ZSIsImdldERlZmF1bHQiLCJNQVhfUVVFVUVfU0laRSIsIlRJTUVSX0RFTEFZIiwiRkFJTF9ERUxBWSIsInRpbWVycyIsIm92ZXJsYXkiLCJibG9ja2luZ0F0dGVtcHRzIiwiY2FjaGVkRmlsZW5hbWVzIiwiY3JlYXRlU3Vic2NyaXB0aW9ucyIsImNoZWNrQ2FjaGVzIiwiY2hlY2tJUCIsIm9sZElQIiwiaXAiLCJzZXQiLCJfcG9zdExhdGVzdFJldHJ5IiwicHVzaEFueVF1ZXVlZCIsIl9wb3N0UmV0cnkiLCJjcmVhdGVGaWxlU3Vic2NyaXB0aW9uIiwiY3JlYXRlU2VydmVyRGF0YSIsIm1pY3Jvc2Vjb25kcyIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInNob3dPdmVybGF5IiwiYXR0ZW1wdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjc3MiLCJoaWRlT3ZlcmxheSIsIl9lbnF1ZXVlRGF0YSIsImNhY2hlIiwiX2RlcXVldWVEYXRhIiwic3BsaWNlIiwiZGVsYXkiLCJwb3N0UmVxdWVzdCIsInBvc3QiLCJ0ZXh0U3RhdHVzIiwicmVxdWVzdCIsImNhY2hlZFRpbWUiLCJfcG9zdEJsb2NraW5nIiwiYXR0ZW1wdHMiLCJlcnJvclRocm93biIsImxvYWRBc3NpZ25tZW50RGF0YV8iLCJFUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQiLCJkaXJlY3RvcnkiLCJuZXdTdGF0dXMiLCJwb3N0U3RhdHVzQ2hhbmdlIiwiZXJyb3JDYWxsYmFjayIsImxvYWRfZmlsZSIsImhpZGRlbk92ZXJyaWRlIiwiZm9yY2VVcGRhdGUiLCJnZXRQbmdGcm9tQmxvY2tzIiwicG5nRGF0YSIsIm1vZCIsIm5vbmUiLCJidWlsdGluIiwibm9uZSQiLCJwcmlvciIsInRpbWVpdCIsImZ1bmMiLCJweUNoZWNrQXJncyIsImRpZmZlcmVuY2UiLCJkZWJ1ZyIsImdldF9vdXRwdXQiLCJpdGVtIiwidG9Ta3VscHQiLCJsaXN0IiwicmVzZXRfb3V0cHV0IiwicXVldWVfaW5wdXQiLCJweUNoZWNrVHlwZSIsImNoZWNrU3RyaW5nIiwiZ2V0X3Byb2dyYW0iLCJnZXRfZXZhbHVhdGlvbiIsInRyYWNlX2xpbmVzIiwiZ2V0X3N0dWRlbnRfZXJyb3IiLCJ0dXBsZSIsImhhZF9leGVjdXRpb25fdGltZV9lcnJvciIsImJhY2t1cFRpbWUiLCJsaW1pdF9leGVjdXRpb25fdGltZSIsImV4ZWNTdGFydCIsInVubGltaXRfZXhlY3V0aW9uX3RpbWUiLCJzdXBwcmVzc19zY3JvbGxpbmciLCJnZXRfcGxvdHMiLCJvdXRwdXRzIiwiZ3JhcGgiLCJwbG90IiwibmV3UGxvdCIsInYiLCJ5IiwiU3R1ZGVudERhdGEiLCJidWlsZENsYXNzIiwiJGdibCIsIiRsb2MiLCJfX2luaXRfXyIsIm5ld0RpY3QiLCJkaWN0IiwiYWJzdHIiLCJzYXR0ciIsInN0ciIsImhhc093blByb3BlcnR5Iiwib2JqZWN0U2V0SXRlbSIsInVuZml4UmVzZXJ2ZWQiLCJjYWxsX2YiLCJrd2EiLCJweUNoZWNrQXJnc0xlbiIsImNhbGwiLCJrd2FyZ3MiLCJidWlsdGlucyIsImZ1bmN0aW9uTmFtZSIsImlucHV0cyIsIm1wJGxvb2t1cCIsInRwJGdldGF0dHIiLCJmdW5jdGlvbk9iamVjdCIsInRwJGNhbGwiLCJjb19rd2FyZ3MiLCJjb19uYW1lIiwiZ2V0X25hbWVzX2J5X3R5cGUiLCJleGNsdWRlX2J1aWx0aW5zIiwiY2hlY2tCb29sIiwicHJvcGVydHkiLCJnZXRfdmFsdWVzX2J5X3R5cGUiLCJjYWxsc2ltT3JTdXNwZW5kIiwiZ2V0X3N0dWRlbnRfZGF0YSIsIkxPQ0FMX1NUT1JBR0VfUkVGIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJfZGF0YSIsIlN0cmluZyIsImdldEl0ZW0iLCJuYW1lc3BhY2UiLCJpc19uZXciLCJzZXJ2ZXJfdGltZSIsInN0b3JlZF90aW1lIiwiSUdOT1JFRF9HTE9CQUxTIiwicGFyc2VkIiwicGFyc2VWYWx1ZSIsIl9fbmFtZV9fIiwiZnVsbExlbmd0aCIsImZ1bmNfY29kZSIsImNvX3Zhcm5hbWVzIiwic3EkbGVuZ3RoIiwiYm9vbCIsIm5tYmVyIiwic2tUeXBlIiwiaW50XyIsImZsb2F0XyIsIk51bWJlciIsImFycmF5Q29udGFpbnMiLCJuZWVkbGUiLCJoYXlzdGFjayIsImFycmF5VW5pcXVlIiwiYSIsImNvbmNhdCIsImoiLCJleHBhbmRBcnJheSIsImFkZEFycmF5IiwicmVtb3ZlQXJyYXkiLCJjb3B5QXJyYXkiLCJjbG9uZU5vZGUiLCJjbG9uZSIsIm5vZGVUeXBlIiwiY3JlYXRlVGV4dE5vZGUiLCJub2RlVmFsdWUiLCJjaGlsZCIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsInJhbmRvbUludGVnZXIiLCJmbG9vciIsInJhbmRvbSIsIkJsb2NrbHkiLCJXb3Jrc3BhY2VTdmciLCJzaHVmZmxlIiwibWV0cmljcyIsImdldE1ldHJpY3MiLCJ2aWV3V2lkdGgiLCJ2aWV3SGVpZ2h0IiwiYmxvY2tzIiwiZ2V0VG9wQmxvY2tzIiwibWF4aW1hbF9pbmNyZWFzZSIsImdldFJlbGF0aXZlVG9TdXJmYWNlWFkiLCJtb3ZlQnkiLCJtb3ZlRWxlbWVudHMiLCJtb3ZlQ2hlY2siLCJpc1NrQnVpbHRpbiIsIm9iaiIsImxuZyIsImlzQXN0Tm9kZSIsIm1peGVkUmVtYXBUb1B5IiwiayIsImt2cyIsImFyciIsInN1YnZhbCIsImFzc2skIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdPLElBQU1BLE9BQWI7QUFBQTtBQUFBO0FBQ0k7Ozs7O0FBS0EsbUJBQVlDLGFBQVosRUFBMkJDLFVBQTNCLEVBQXVDQyxVQUF2QyxFQUFtRDtBQUFBOztBQUMvQyxTQUFLQyxTQUFMLENBQWVILGFBQWY7O0FBQ0EsUUFBSUMsVUFBVSxLQUFLRyxTQUFuQixFQUE4QjtBQUMxQixXQUFLQyxhQUFMLENBQW1CTCxhQUFuQixFQUFrQ0MsVUFBbEMsRUFBOENDLFVBQTlDO0FBQ0g7O0FBQ0QsU0FBS0ksUUFBTDtBQUNIO0FBRUQ7Ozs7Ozs7QUFkSjtBQUFBO0FBQUEsK0JBbUJlO0FBQ1AsV0FBS0MsYUFBTDtBQUNBLFdBQUtDLGdCQUFMO0FBQ0EsV0FBS0MsV0FBTDtBQUNBLFdBQUtDLGFBQUw7QUFDQSxXQUFLQyxVQUFMO0FBQ0EsV0FBS0MsY0FBTDtBQUNBLFdBQUtDLEtBQUw7QUFDSDtBQTNCTDtBQUFBOztBQTZCSTs7Ozs7QUE3QkosK0JBa0NlQyxHQWxDZixFQWtDb0JDLFlBbENwQixFQWtDa0M7QUFDMUIsVUFBSUQsR0FBRyxJQUFJLEtBQUtFLHFCQUFoQixFQUF1QztBQUNuQyxlQUFPLEtBQUtBLHFCQUFMLENBQTJCRixHQUEzQixDQUFQO0FBQ0gsT0FGRCxNQUVPLElBQUksS0FBS0csY0FBTCxDQUFvQkMsR0FBcEIsQ0FBd0JKLEdBQXhCLENBQUosRUFBa0M7QUFDckMsZUFBTyxLQUFLRyxjQUFMLENBQW9CRSxHQUFwQixDQUF3QkwsR0FBeEIsQ0FBUDtBQUNILE9BRk0sTUFFQTtBQUNILGVBQU9DLFlBQVA7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUE1Q0o7QUFBQTtBQUFBLDhCQXdEY2YsYUF4RGQsRUF3RDZCO0FBQ3JCO0FBQ0EsV0FBS2lCLGNBQUwsR0FBc0IsSUFBSUcsOERBQUosQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQSxXQUFLSixxQkFBTCxHQUE2QmhCLGFBQTdCO0FBRUEsV0FBS3FCLEtBQUwsR0FBYTtBQUNUQyxZQUFJLEVBQUU7QUFDRkMsWUFBRSxFQUFFQyxFQUFFLENBQUNDLFVBQUgsQ0FBY3pCLGFBQWEsQ0FBQyxTQUFELENBQTNCLENBREY7QUFFRjBCLGNBQUksRUFBRUYsRUFBRSxDQUFDQyxVQUFILENBQWN6QixhQUFhLENBQUMsV0FBRCxDQUEzQixDQUZKOztBQUdGOzs7OztBQUtBMkIsY0FBSSxFQUFFSCxFQUFFLENBQUNDLFVBQUgsQ0FBYyxLQUFLRyxVQUFMLENBQWdCLFdBQWhCLEVBQTZCLE9BQTdCLENBQWQsQ0FSSjs7QUFTRjs7O0FBR0FDLGtCQUFRLEVBQUVMLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjekIsYUFBYSxDQUFDLGdCQUFELENBQTNCLENBWlI7O0FBYUY7OztBQUdBOEIsaUJBQU8sRUFBRU4sRUFBRSxDQUFDQyxVQUFILENBQWN6QixhQUFhLENBQUMsZUFBRCxDQUEzQjtBQWhCUCxTQURHO0FBbUJUQyxrQkFBVSxFQUFFO0FBQ1JzQixZQUFFLEVBQUVDLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FESTtBQUVSQyxjQUFJLEVBQUVGLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLGdCQUFkLENBRkU7QUFHUk0sc0JBQVksRUFBRVAsRUFBRSxDQUFDQyxVQUFILENBQWMsNkRBQWQsQ0FITjs7QUFJUjs7O0FBR0FPLGFBQUcsRUFBRVIsRUFBRSxDQUFDQyxVQUFILENBQWMsRUFBZCxDQVBHO0FBUVI7QUFDQVEsY0FBSSxFQUFFVCxFQUFFLENBQUNDLFVBQUgsQ0FBYyxFQUFkLENBVEU7QUFVUlMsc0JBQVksRUFBRVYsRUFBRSxDQUFDQyxVQUFILENBQWN6QixhQUFhLENBQUMsMEJBQUQsQ0FBYixJQUE2QyxFQUEzRCxDQVZOO0FBV1JtQyxlQUFLLEVBQUVYLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjekIsYUFBYSxDQUFDLG1CQUFELENBQWIsSUFBc0MsRUFBcEQsQ0FYQztBQVlSb0Msa0JBQVEsRUFBRVosRUFBRSxDQUFDQyxVQUFILENBQWN6QixhQUFhLENBQUMsc0JBQUQsQ0FBYixJQUF5QyxJQUF2RCxDQVpGO0FBYVJxQyxnQkFBTSxFQUFFYixFQUFFLENBQUNDLFVBQUgsQ0FBY3pCLGFBQWEsQ0FBQyxvQkFBRCxDQUFiLElBQXVDLElBQXJELENBYkE7QUFjUnNDLDhCQUFvQixFQUFFZCxFQUFFLENBQUNlLGVBQUgsQ0FBbUIsRUFBbkIsQ0FkZDtBQWVSQyw0QkFBa0IsRUFBRWhCLEVBQUUsQ0FBQ2UsZUFBSCxDQUFtQixFQUFuQixDQWZaO0FBZ0JSRSxrQkFBUSxFQUFFakIsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQWhCRjtBQWlCUmlCLHVCQUFhLEVBQUVsQixFQUFFLENBQUNDLFVBQUgsQ0FBYyxJQUFkLENBakJQO0FBa0JSa0IsaUJBQU8sRUFBRW5CLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FsQkQ7QUFtQlJJLGtCQUFRLEVBQUVMLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FuQkY7QUFvQlJtQixpQkFBTyxFQUFFcEIsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQXBCRDtBQXFCUm9CLGNBQUksRUFBRXJCLEVBQUUsQ0FBQ2UsZUFBSCxDQUFtQixFQUFuQixDQXJCRTtBQXNCUk8sMkJBQWlCLEVBQUV0QixFQUFFLENBQUNlLGVBQUgsQ0FBbUIsRUFBbkIsQ0F0Qlg7QUF1QlJRLGtCQUFRLEVBQUV2QixFQUFFLENBQUNDLFVBQUgsQ0FBY3pCLGFBQWEsQ0FBQyxxQkFBRCxDQUEzQixDQXZCRjtBQXdCUixvQkFBUXdCLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjekIsYUFBYSxDQUFDLG1CQUFELENBQTNCLENBeEJBO0FBeUJSZ0QsZ0JBQU0sRUFBRXhCLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjekIsYUFBYSxDQUFDLG1CQUFELENBQTNCLENBekJBO0FBMEJSaUQsa0JBQVEsRUFBRXpCLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjekIsYUFBYSxDQUFDLHNCQUFELENBQTNCLENBMUJGO0FBMkJSa0Qsa0JBQVEsRUFBRUMsZ0dBQTJCLENBQUNuRCxhQUFEO0FBM0I3QixTQW5CSDtBQWdEVEUsa0JBQVUsRUFBRTtBQUNScUIsWUFBRSxFQUFFQyxFQUFFLENBQUNDLFVBQUgsQ0FBYyxJQUFkLENBREk7QUFFUjJCLGNBQUksRUFBRTVCLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjekIsYUFBYSxDQUFDLGlCQUFELENBQWIsSUFBb0MsRUFBbEQsQ0FGRTtBQUdScUQsb0JBQVUsRUFBRTdCLEVBQUUsQ0FBQ2UsZUFBSCxDQUFtQixFQUFuQixDQUhKO0FBSVJQLGFBQUcsRUFBRVIsRUFBRSxDQUFDQyxVQUFILENBQWMsRUFBZCxDQUpHO0FBS1I2QixrQkFBUSxFQUFFOUIsRUFBRSxDQUFDQyxVQUFILENBQWMsRUFBZCxDQUxGO0FBTVI4QixlQUFLLEVBQUUvQixFQUFFLENBQUNDLFVBQUgsQ0FBYyxDQUFkLENBTkM7QUFPUitCLGlCQUFPLEVBQUVoQyxFQUFFLENBQUNDLFVBQUgsQ0FBYyxLQUFkLENBUEQ7QUFRUjtBQUNBO0FBQ0E7QUFDQTtBQUNBbUIsaUJBQU8sRUFBRXBCLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLENBQWQsQ0FaRDtBQWFSZ0MsMEJBQWdCLEVBQUVqQyxFQUFFLENBQUNDLFVBQUgsQ0FBYyxTQUFkLENBYlY7QUFjUmlDLHVCQUFhLEVBQUVsQyxFQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkO0FBZFAsU0FoREg7QUFnRVRrQyxlQUFPLEVBQUU7QUFDTDs7OztBQUlBQyxrQkFBUSxFQUFFcEMsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQUxMOztBQU1MOzs7O0FBSUFvQyxvQkFBVSxFQUFFckMsRUFBRSxDQUFDQyxVQUFILENBQWMsS0FBS0csVUFBTCxDQUFnQixvQkFBaEIsRUFBc0MsT0FBdEMsRUFBK0NrQyxRQUEvQyxPQUE0RCxNQUExRSxDQVZQOztBQVdMOzs7QUFHQUMscUJBQVcsRUFBRXZDLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEtBQWQsQ0FkUjs7QUFlTDs7OztBQUlBdUMsb0JBQVUsRUFBRXhDLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEtBQUtHLFVBQUwsQ0FBZ0IscUJBQWhCLEVBQXVDcUMsNkRBQVksQ0FBQ0MsS0FBcEQsQ0FBZCxDQW5CUDs7QUFvQkw7Ozs7QUFJQUMscUJBQVcsRUFBRTNDLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEtBQWQsQ0F4QlI7O0FBeUJMOzs7Ozs7QUFNQTJDLGtCQUFRLEVBQUU1QyxFQUFFLENBQUNDLFVBQUgsQ0FBYyxJQUFkLENBL0JMOztBQWdDTDs7O0FBR0E0QyxvQkFBVSxFQUFFN0MsRUFBRSxDQUFDQyxVQUFILENBQWMsS0FBZCxDQW5DUDs7QUFvQ0w7Ozs7O0FBS0E2QywrQkFBcUIsRUFBRTlDLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0F6Q2xCO0FBMENMOEMsOEJBQW9CLEVBQUUvQyxFQUFFLENBQUNDLFVBQUgsQ0FBYyxJQUFkLENBMUNqQjs7QUEyQ0w7Ozs7QUFJQStDLDhCQUFvQixFQUFFaEQsRUFBRSxDQUFDQyxVQUFILENBQWNnRCx3RUFBMkIsQ0FBQ0MsUUFBMUMsQ0EvQ2pCOztBQWdETDs7O0FBR0FDLHdCQUFjLEVBQUVuRCxFQUFFLENBQUNDLFVBQUgsQ0FBYyxLQUFkLENBbkRYOztBQW9ETDs7OztBQUlBbUQseUJBQWUsRUFBRXBELEVBQUUsQ0FBQ2UsZUFBSCxDQUFtQixFQUFuQixDQXhEWjs7QUF5REw7OztBQUdBc0MsNkJBQW1CLEVBQUVyRCxFQUFFLENBQUNDLFVBQUgsQ0FBYyxJQUFkLENBNURoQjs7QUE2REw7OztBQUdBcUQseUJBQWUsRUFBRSxJQWhFWjs7QUFpRUw7Ozs7OztBQU1BQyx5QkFBZSxFQUFFdkQsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZDtBQXZFWixTQWhFQTtBQXlJVHVELGNBQU0sRUFBRTtBQUNKO0FBQ0FDLHdCQUFjLEVBQUV6RCxFQUFFLENBQUNDLFVBQUgsQ0FBY3lELHFEQUFXLENBQUNDLEtBQTFCLENBRlo7QUFHSkMsK0JBQXFCLEVBQUU1RCxFQUFFLENBQUNDLFVBQUgsQ0FBYyxFQUFkLENBSG5CO0FBSUo7QUFDQTRELHFCQUFXLEVBQUU3RCxFQUFFLENBQUNDLFVBQUgsQ0FBY3lELHFEQUFXLENBQUNDLEtBQTFCLENBTFQ7QUFNSkcsNEJBQWtCLEVBQUU5RCxFQUFFLENBQUNDLFVBQUgsQ0FBYyxFQUFkLENBTmhCO0FBT0o7QUFDQThELGtCQUFRLEVBQUUvRCxFQUFFLENBQUNDLFVBQUgsQ0FBY3lELHFEQUFXLENBQUNDLEtBQTFCLENBUk47QUFTSksseUJBQWUsRUFBRWhFLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEVBQWQsQ0FUYjtBQVVKO0FBQ0FnRSxxQkFBVyxFQUFFakUsRUFBRSxDQUFDQyxVQUFILENBQWN5RCxxREFBVyxDQUFDQyxLQUExQixDQVhUO0FBWUpPLDRCQUFrQixFQUFFbEUsRUFBRSxDQUFDQyxVQUFILENBQWMsRUFBZCxDQVpoQjtBQWFKO0FBQ0FrRSxrQkFBUSxFQUFFbkUsRUFBRSxDQUFDQyxVQUFILENBQWN5RCxxREFBVyxDQUFDQyxLQUExQixDQWROO0FBZUpTLHlCQUFlLEVBQUVwRSxFQUFFLENBQUNDLFVBQUgsQ0FBYyxFQUFkLENBZmI7QUFnQko7QUFDQW9FLG1CQUFTLEVBQUVyRSxFQUFFLENBQUNDLFVBQUgsQ0FBY3lELHFEQUFXLENBQUNDLEtBQTFCLENBakJQO0FBa0JKVywwQkFBZ0IsRUFBRXRFLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEVBQWQsQ0FsQmQ7QUFtQko7QUFDQXNFLGtCQUFRLEVBQUV2RSxFQUFFLENBQUNDLFVBQUgsQ0FBY3lELHFEQUFXLENBQUNDLEtBQTFCLENBcEJOO0FBcUJKYSx5QkFBZSxFQUFFeEUsRUFBRSxDQUFDQyxVQUFILENBQWMsRUFBZCxDQXJCYjtBQXNCSjtBQUNBd0Usd0JBQWMsRUFBRXpFLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjeUQscURBQVcsQ0FBQ0MsS0FBMUIsQ0F2Qlo7QUF3QkplLCtCQUFxQixFQUFFMUUsRUFBRSxDQUFDQyxVQUFILENBQWMsRUFBZCxDQXhCbkI7QUF5Qko7QUFDQTBFLDBCQUFnQixFQUFFM0UsRUFBRSxDQUFDQyxVQUFILENBQWN5RCxxREFBVyxDQUFDQyxLQUExQixDQTFCZDtBQTJCSmlCLGlDQUF1QixFQUFFNUUsRUFBRSxDQUFDQyxVQUFILENBQWMsRUFBZCxDQTNCckI7QUE0Qko7QUFDQTRFLGdDQUFzQixFQUFFN0UsRUFBRSxDQUFDQyxVQUFILENBQWN5RCxxREFBVyxDQUFDQyxLQUExQixDQTdCcEI7QUE4QkptQix1Q0FBNkIsRUFBRTlFLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEVBQWQsQ0E5QjNCO0FBK0JKO0FBQ0E4RSxxQkFBVyxFQUFFL0UsRUFBRSxDQUFDQyxVQUFILENBQWN5RCxxREFBVyxDQUFDQyxLQUExQjtBQWhDVCxTQXpJQztBQTJLVHFCLGlCQUFTLEVBQUU7QUFDUDtBQUNBQyxpQkFBTyxFQUFFLEVBRkY7QUFHUDtBQUNBQyxnQkFBTSxFQUFFbEYsRUFBRSxDQUFDZSxlQUFILENBQW1CLEVBQW5CLENBSkQ7QUFLUDtBQUNBb0UsaUJBQU8sRUFBRTtBQUNMO0FBQ0EvQyxvQkFBUSxFQUFFcEMsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQUZMO0FBR0w7QUFDQW1GLHVCQUFXLEVBQUVwRixFQUFFLENBQUNDLFVBQUgsQ0FBYyxJQUFkLENBSlI7QUFLTDtBQUNBb0Ysb0JBQVEsRUFBRXJGLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FOTDtBQU9MO0FBQ0FxRix1QkFBVyxFQUFFdEYsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQVJSO0FBU0xzRixvQkFBUSxFQUFFdkYsRUFBRSxDQUFDQyxVQUFILENBQWMsQ0FBZCxDQVRMO0FBVUw7QUFDQXVGLDRCQUFnQixFQUFFeEYsRUFBRSxDQUFDZSxlQUFILENBQW1CLEVBQW5CLENBWGI7QUFZTDtBQUNBMEUsNEJBQWdCLEVBQUV6RixFQUFFLENBQUNDLFVBQUgsQ0FBYyxDQUFkLENBYmI7QUFjTDtBQUNBeUYsbUJBQU8sRUFBRSxJQWZKO0FBZ0JMQyxtQkFBTyxFQUFFM0YsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZDtBQWhCSixXQU5GO0FBd0JQb0Msb0JBQVUsRUFBRTtBQUNSc0QsbUJBQU8sRUFBRTtBQURELFdBeEJMO0FBMkJQO0FBQ0FDLGtCQUFRLEVBQUU7QUFDTjtBQUNBQyxtQkFBTyxFQUFFN0YsRUFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxDQUZIO0FBR042RixvQkFBUSxFQUFFOUYsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQUhKO0FBSU44RixpQkFBSyxFQUFFL0YsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQUpEO0FBS051QixrQkFBTSxFQUFFeEIsRUFBRSxDQUFDQyxVQUFILENBQWMsS0FBZCxDQUxGO0FBTU4rRixzQkFBVSxFQUFFaEcsRUFBRSxDQUFDZSxlQUFILENBQW1CLEVBQW5CLENBTk47QUFPTmtGLDBCQUFjLEVBQUVqRyxFQUFFLENBQUNlLGVBQUgsQ0FBbUIsRUFBbkIsQ0FQVjtBQVFOO0FBQ0EyRSxtQkFBTyxFQUFFO0FBVEg7QUE1QkgsU0EzS0Y7QUFtTlRsSCxxQkFBYSxFQUFFO0FBQ1g7OztBQUdBMEgsbUJBQVMsRUFBRTtBQUNQOzs7QUFHQSx1QkFBVyxLQUFLMUcscUJBQUwsQ0FBMkIsa0JBQTNCO0FBSkosV0FKQTs7QUFVWDs7OztBQUlBMkcseUJBQWUsRUFBRW5HLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEtBQUtHLFVBQUwsQ0FBZ0Isa0JBQWhCLEVBQW9DLElBQXBDLENBQWQsQ0FkTjtBQWVYO0FBQ0FnRyxxQkFBVyxFQUFFLEtBQUs1RyxxQkFBTCxDQUEyQixjQUEzQixDQWhCRjtBQWlCWDtBQUNBNkcseUJBQWUsRUFBRSxLQUFLN0cscUJBQUwsQ0FBMkIsa0JBQTNCLENBbEJOO0FBbUJYO0FBQ0E4RyxtQkFBUyxFQUFFLElBcEJBO0FBcUJYO0FBQ0FDLGNBQUksRUFBRSxLQUFLL0cscUJBQUwsQ0FBMkIsTUFBM0IsS0FBc0M7QUF0QmpDO0FBbk5OLE9BQWI7QUE0T0g7QUF6U0w7QUFBQTs7QUEyU0k7OztBQTNTSixvQ0E4U29CO0FBQ1osVUFBSWdILFNBQVMsR0FBRyxLQUFLM0csS0FBTCxDQUFXckIsYUFBM0I7QUFDQSxVQUFJaUksR0FBRyxHQUFHQyxrRUFBYSxDQUFDLElBQUQsQ0FBdkI7QUFDQUYsZUFBUyxDQUFDRixTQUFWLEdBQXNCSyw2Q0FBQyxDQUFDSCxTQUFTLENBQUNILGVBQVgsQ0FBRCxDQUE2Qk8sSUFBN0IsQ0FBa0NELDZDQUFDLENBQUNGLEdBQUQsQ0FBbkMsQ0FBdEI7QUFDSDtBQWxUTDtBQUFBO0FBQUEsbUNBb1RtQkksYUFwVG5CLEVBb1RrQztBQUMxQixXQUFLQyxVQUFMLENBQWdCQyxNQUFoQixDQUF1QnRELGNBQXZCLENBQXNDb0QsYUFBdEM7QUFDSDtBQXRUTDtBQUFBO0FBQUEsNkJBd1RheEYsSUF4VGIsRUF3VG1CLENBQ1g7QUFDSDtBQTFUTDtBQUFBO0FBQUEsMENBNFQwQjJGLE9BNVQxQixFQTRUbUMsQ0FDM0I7QUFDSDtBQTlUTDtBQUFBO0FBQUEsbUNBZ1VtQnRJLFVBaFVuQixFQWdVK0I7QUFDdkIsVUFBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2IsZUFBTyxLQUFQO0FBQ0gsT0FIc0IsQ0FJdkI7OztBQUNBLFdBQUttQixLQUFMLENBQVduQixVQUFYLENBQXNCcUIsRUFBdEIsQ0FBeUJyQixVQUFVLENBQUNxQixFQUFwQztBQUNBLFdBQUtGLEtBQUwsQ0FBV25CLFVBQVgsQ0FBc0JrRCxJQUF0QixDQUEyQmxELFVBQVUsQ0FBQ2tELElBQXRDO0FBQ0EsV0FBSy9CLEtBQUwsQ0FBV25CLFVBQVgsQ0FBc0JzRCxPQUF0QixDQUE4QnRELFVBQVUsQ0FBQ3NELE9BQXpDO0FBQ0EsV0FBS25DLEtBQUwsQ0FBV25CLFVBQVgsQ0FBc0JxRCxLQUF0QixDQUE0QnJELFVBQVUsQ0FBQ3FELEtBQXZDO0FBQ0EsV0FBS2xDLEtBQUwsQ0FBV25CLFVBQVgsQ0FBc0JvRCxRQUF0QixDQUErQnBELFVBQVUsQ0FBQ29ELFFBQTFDO0FBQ0EsV0FBS2pDLEtBQUwsQ0FBV25CLFVBQVgsQ0FBc0I4QixHQUF0QixDQUEwQjlCLFVBQVUsQ0FBQzhCLEdBQXJDO0FBQ0EsV0FBS1gsS0FBTCxDQUFXbkIsVUFBWCxDQUFzQjBDLE9BQXRCLENBQThCMUMsVUFBVSxDQUFDMEMsT0FBekM7QUFDQSxXQUFLdkIsS0FBTCxDQUFXbkIsVUFBWCxDQUFzQndELGFBQXRCLENBQW9DeEQsVUFBVSxDQUFDdUksY0FBL0M7QUFDQSxXQUFLcEgsS0FBTCxDQUFXbkIsVUFBWCxDQUFzQnVELGdCQUF0QixDQUF1Q3ZELFVBQVUsQ0FBQ3dJLGlCQUFsRDtBQUNBLFdBQUtySCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JPLFFBQWhCLENBQXlCM0IsVUFBVSxDQUFDeUksU0FBcEM7QUFDQUMseUVBQW9CLENBQUMxSSxVQUFVLENBQUMySSxXQUFaLEVBQXlCLEtBQUt4SCxLQUFMLENBQVduQixVQUFYLENBQXNCbUQsVUFBL0MsQ0FBcEI7QUFDSDtBQWhWTDtBQUFBO0FBQUEsd0NBa1Z3QnlGLElBbFZ4QixFQWtWOEI7QUFDdEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsV0FBS0csY0FBTDtBQUNBLFVBQUlDLGtCQUFrQixHQUFHLEtBQUs3SCxLQUFMLENBQVdyQixhQUFYLENBQXlCMkgsZUFBekIsRUFBekI7QUFDQSxXQUFLdEcsS0FBTCxDQUFXckIsYUFBWCxDQUF5QjJILGVBQXpCLENBQXlDLEtBQXpDO0FBQ0EsVUFBSTFILFVBQVUsR0FBRzZJLElBQUksQ0FBQzdJLFVBQXRCO0FBQ0EsV0FBS29CLEtBQUwsQ0FBV3BCLFVBQVgsQ0FBc0JzQixFQUF0QixDQUF5QnRCLFVBQVUsQ0FBQ3NCLEVBQXBDO0FBQ0EsV0FBS0YsS0FBTCxDQUFXcEIsVUFBWCxDQUFzQjJDLE9BQXRCLENBQThCM0MsVUFBVSxDQUFDMkMsT0FBekM7QUFDQSxXQUFLdkIsS0FBTCxDQUFXcEIsVUFBWCxDQUFzQjRCLFFBQXRCLENBQStCNUIsVUFBVSxDQUFDMEksU0FBMUM7QUFDQSxXQUFLdEgsS0FBTCxDQUFXcEIsVUFBWCxDQUFzQndDLFFBQXRCLENBQStCeEMsVUFBVSxDQUFDa0osU0FBMUM7QUFDQSxXQUFLOUgsS0FBTCxDQUFXcEIsVUFBWCxDQUFzQnlDLGFBQXRCLENBQW9DekMsVUFBVSxDQUFDbUosY0FBL0M7QUFDQSxXQUFLL0gsS0FBTCxDQUFXcEIsVUFBWCxDQUFzQitDLE1BQXRCLENBQTZCL0MsVUFBVSxDQUFDK0MsTUFBeEM7QUFDQSxXQUFLM0IsS0FBTCxDQUFXcEIsVUFBWCxDQUFzQjhDLFFBQXRCLENBQStCOUMsVUFBVSxDQUFDOEMsUUFBMUM7QUFDQSxXQUFLMUIsS0FBTCxDQUFXcEIsVUFBWCxXQUE2QkEsVUFBVSxVQUF2QztBQUNBLFdBQUtvQixLQUFMLENBQVdwQixVQUFYLENBQXNCZ0MsSUFBdEIsQ0FBMkJoQyxVQUFVLENBQUNnQyxJQUF0QztBQUNBLFdBQUtaLEtBQUwsQ0FBV3BCLFVBQVgsQ0FBc0IrQixHQUF0QixDQUEwQi9CLFVBQVUsQ0FBQytCLEdBQXJDO0FBQ0EsV0FBS1gsS0FBTCxDQUFXcEIsVUFBWCxDQUFzQmdELFFBQXRCLENBQStCaEQsVUFBVSxDQUFDb0osU0FBMUM7QUFDQSxXQUFLaEksS0FBTCxDQUFXcEIsVUFBWCxDQUFzQjhCLFlBQXRCLENBQW1DOUIsVUFBVSxDQUFDOEIsWUFBOUM7QUFDQSxXQUFLVixLQUFMLENBQVdwQixVQUFYLENBQXNCeUIsSUFBdEIsQ0FBMkJ6QixVQUFVLENBQUN5QixJQUF0QztBQUNBLFdBQUtMLEtBQUwsQ0FBV3BCLFVBQVgsQ0FBc0JtQyxRQUF0QixDQUErQm5DLFVBQVUsQ0FBQ3FKLFNBQVgsSUFBd0IsSUFBdkQ7O0FBQ0EsVUFBSXJKLFVBQVUsQ0FBQ3FKLFNBQWYsRUFBMEI7QUFDdEIsYUFBS2hCLFVBQUwsQ0FBZ0JpQixVQUFoQixDQUEyQkMsT0FBM0IsQ0FBbUMsZUFBbkMsRUFBb0R2SixVQUFVLENBQUNxSixTQUEvRDtBQUNIOztBQUNELFdBQUtqSSxLQUFMLENBQVdwQixVQUFYLENBQXNCb0MsTUFBdEIsQ0FBNkJwQyxVQUFVLENBQUN3SixPQUFYLElBQXNCLElBQW5EOztBQUNBLFVBQUl4SixVQUFVLENBQUN3SixPQUFmLEVBQXdCO0FBQ3BCLGFBQUtuQixVQUFMLENBQWdCaUIsVUFBaEIsQ0FBMkJDLE9BQTNCLENBQW1DLGFBQW5DLEVBQWtEdkosVUFBVSxDQUFDd0osT0FBN0Q7QUFDSDs7QUFDRCxXQUFLcEksS0FBTCxDQUFXcEIsVUFBWCxDQUFzQmtDLEtBQXRCLENBQTRCbEMsVUFBVSxDQUFDeUosTUFBdkM7QUFDQSxXQUFLckksS0FBTCxDQUFXcEIsVUFBWCxDQUFzQmlDLFlBQXRCLENBQW1DakMsVUFBVSxDQUFDMEosYUFBOUM7QUFDQSxXQUFLdEksS0FBTCxDQUFXcEIsVUFBWCxDQUFzQjBDLE9BQXRCLENBQThCMUMsVUFBVSxDQUFDMkosUUFBekM7QUFDQUMsaUdBQXNCLENBQUMsS0FBS3hJLEtBQU4sRUFBYXBCLFVBQVUsQ0FBQ2lELFFBQXhCLENBQXRCO0FBQ0EsV0FBSzRHLFFBQUwsQ0FBYzdKLFVBQVUsQ0FBQzRDLElBQXpCO0FBQ0EsV0FBS2tILHFCQUFMLENBQTJCOUosVUFBVSxDQUFDK0osa0JBQXRDO0FBQ0FwQix5RUFBb0IsQ0FBQzNJLFVBQVUsQ0FBQ2dLLHNCQUFaLEVBQW9DLEtBQUs1SSxLQUFMLENBQVdwQixVQUFYLENBQXNCcUMsb0JBQTFELENBQXBCO0FBQ0FzRyx5RUFBb0IsQ0FBQzNJLFVBQVUsQ0FBQ2lLLG9CQUFaLEVBQWtDLEtBQUs3SSxLQUFMLENBQVdwQixVQUFYLENBQXNCdUMsa0JBQXhELENBQXBCO0FBQ0EsV0FBSzJILGNBQUwsQ0FBb0JyQixJQUFJLENBQUM1SSxVQUF6QjtBQUNBLFdBQUttQixLQUFMLENBQVdzQyxPQUFYLENBQW1Cb0IsZUFBbkIsQ0FBbUMsSUFBbkM7QUFDQSxXQUFLMUQsS0FBTCxDQUFXckIsYUFBWCxDQUF5QjJILGVBQXpCLENBQXlDdUIsa0JBQXpDO0FBQ0EsV0FBS1osVUFBTCxDQUFnQjhCLE1BQWhCLENBQXVCQyxZQUF2QixDQUFvQyxJQUFwQztBQUVBLFdBQUsvQixVQUFMLENBQWdCQyxNQUFoQixDQUF1QitCLFNBQXZCLENBQWlDLFVBQWpDLEVBQTZDcEYscURBQVcsQ0FBQ0MsS0FBekQ7QUFDSDtBQTNYTDtBQUFBO0FBQUEsdUNBNlh1QjtBQUNmLFVBQUlvRixJQUFJLEdBQUcsSUFBWDtBQUNBLFVBQUlsSixLQUFLLEdBQUcsS0FBS0EsS0FBakI7QUFDQUEsV0FBSyxDQUFDbUosRUFBTixHQUFXO0FBQ1A3SSxZQUFJLEVBQUU7QUFDRjhJLGtCQUFRLEVBQUVqSixFQUFFLENBQUNrSixZQUFILENBQWdCO0FBQUEsbUJBQ3RCckosS0FBSyxDQUFDQyxJQUFOLENBQVdLLElBQVgsT0FBc0IsT0FBdEIsSUFBaUNOLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxJQUFYLE9BQXNCLFFBRGpDO0FBQUEsV0FBaEI7QUFEUixTQURDO0FBS1BJLG9CQUFZLEVBQUU7QUFDVjRJLG1CQUFTLEVBQUVuSixFQUFFLENBQUNrSixZQUFILENBQWdCO0FBQUEsbUJBQ3ZCckosS0FBSyxDQUFDc0MsT0FBTixDQUFja0IsbUJBQWQsT0FBd0MsSUFEakI7QUFBQSxXQUFoQixDQUREO0FBSVYrRixpQkFBTyxFQUFFcEosRUFBRSxDQUFDa0osWUFBSCxDQUFnQjtBQUFBLG1CQUNyQnJKLEtBQUssQ0FBQ21KLEVBQU4sQ0FBU3pJLFlBQVQsQ0FBc0I0SSxTQUF0QixLQUNJSixJQUFJLENBQUNNLFNBQUwsQ0FBZUMsUUFBZixDQUF3QnpKLEtBQUssQ0FBQ3NDLE9BQU4sQ0FBY2tCLG1CQUFkLEVBQXhCLENBREosR0FFSTBGLElBQUksQ0FBQ00sU0FBTCxDQUFlQyxRQUFmLENBQXdCekosS0FBSyxDQUFDcEIsVUFBTixDQUFpQjhCLFlBQWpCLEVBQXhCLENBSGlCO0FBQUEsV0FBaEIsQ0FKQztBQVNWZ0osZUFBSyxFQUFFO0FBQUEsbUJBQ0gxSixLQUFLLENBQUNzQyxPQUFOLENBQWNrQixtQkFBZCxDQUFrQyxJQUFsQyxDQURHO0FBQUE7QUFURyxTQUxQO0FBaUJQbUcsWUFBSSxFQUFFO0FBQ0ZDLDBCQUFnQixFQUFFekosRUFBRSxDQUFDa0osWUFBSCxDQUFnQjtBQUFBLG1CQUM5QnJKLEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUIrQyxNQUFqQixNQUE2QjNCLEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUI4QyxRQUFqQixFQURDO0FBQUEsV0FBaEIsQ0FEaEI7QUFJRm1JLDJCQUFpQixFQUFFMUosRUFBRSxDQUFDa0osWUFBSCxDQUFnQjtBQUFBLG1CQUMvQnJKLEtBQUssQ0FBQ21KLEVBQU4sQ0FBU1EsSUFBVCxDQUFjRyxXQUFkLEtBQ00sb0JBRE4sR0FFTTlKLEtBQUssQ0FBQ3NDLE9BQU4sQ0FBY29CLGVBQWQsS0FDSSxLQURKLEdBRUksbUJBTHFCO0FBQUEsV0FBaEIsQ0FKakI7QUFXRnFHLDRCQUFrQixFQUFFO0FBQUEsbUJBQ2hCL0osS0FBSyxDQUFDbUosRUFBTixDQUFTUSxJQUFULENBQWNHLFdBQWQsS0FDTVosSUFBSSxDQUFDakMsVUFBTCxDQUFnQkMsTUFBaEIsQ0FBdUJsQyxzQkFBdkIsQ0FBOEMsWUFBOUMsQ0FETixHQUVNaEYsS0FBSyxDQUFDc0MsT0FBTixDQUFjb0IsZUFBZCxLQUNJd0YsSUFBSSxDQUFDakMsVUFBTCxDQUFnQitDLE1BQWhCLENBQXVCQyxHQUF2QixFQURKLEdBRUlmLElBQUksQ0FBQ2pDLFVBQUwsQ0FBZ0JDLE1BQWhCLENBQXVCbEMsc0JBQXZCLENBQThDLFdBQTlDLENBTE07QUFBQSxXQVhsQjtBQWtCRjhFLHFCQUFXLEVBQUUzSixFQUFFLENBQUNrSixZQUFILENBQWdCO0FBQUEsbUJBQ3pCckosS0FBSyxDQUFDbkIsVUFBTixDQUFpQnVELGdCQUFqQixHQUFvQzhILFdBQXBDLE9BQXNELFdBRDdCO0FBQUEsV0FBaEI7QUFsQlgsU0FqQkM7QUF1Q1BDLGlCQUFTLEVBQUU7QUFDUEMsMkJBQWlCLEVBQUVqSyxFQUFFLENBQUNrSixZQUFILENBQWdCO0FBQUEsbUJBQy9CckosS0FBSyxDQUFDc0MsT0FBTixDQUFjYSxvQkFBZCxPQUF5Q0Msd0VBQTJCLENBQUNDLFFBRHRDO0FBQUEsV0FBaEIsQ0FEWjtBQUlQZ0gsd0JBQWMsRUFBRWxLLEVBQUUsQ0FBQ2tKLFlBQUgsQ0FBZ0I7QUFBQSxtQkFDNUJySixLQUFLLENBQUNzQyxPQUFOLENBQWNhLG9CQUFkLE9BQXlDQyx3RUFBMkIsQ0FBQ2tILEtBRHpDO0FBQUEsV0FBaEIsQ0FKVDtBQU9QQyw4QkFBb0IsRUFBRXBLLEVBQUUsQ0FBQ2tKLFlBQUgsQ0FBZ0I7QUFBQSxtQkFDbENySixLQUFLLENBQUNtSixFQUFOLENBQVNnQixTQUFULENBQW1CQyxpQkFBbkIsTUFBMENwSyxLQUFLLENBQUNtSixFQUFOLENBQVNnQixTQUFULENBQW1CRSxjQUFuQixFQURSO0FBQUEsV0FBaEIsQ0FQZjtBQVVQRyxxQkFBVyxFQUFFckssRUFBRSxDQUFDa0osWUFBSCxDQUFnQjtBQUFBLG1CQUN6QnJKLEtBQUssQ0FBQ21GLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCRSxRQUF4QixPQUF1QyxJQUF2QyxHQUNJLFlBREosR0FDbUIsRUFGTTtBQUFBLFdBQWhCLENBVk47QUFjUGlGLHNCQUFZLEVBQUUsd0JBQVk7QUFDdEIsZ0JBQUlDLFlBQVksR0FBRzFLLEtBQUssQ0FBQ3NDLE9BQU4sQ0FBY2Esb0JBQWpDOztBQUNBLGdCQUFJdUgsWUFBWSxPQUFPdEgsd0VBQTJCLENBQUN1SCxJQUFuRCxFQUF5RDtBQUNyREQsMEJBQVksQ0FBQ3RILHdFQUEyQixDQUFDQyxRQUE3QixDQUFaO0FBQ0gsYUFGRCxNQUVPLElBQUlxSCxZQUFZLE9BQU90SCx3RUFBMkIsQ0FBQ2tILEtBQW5ELEVBQTBEO0FBQzdESSwwQkFBWSxDQUFDdEgsd0VBQTJCLENBQUN1SCxJQUE3QixDQUFaO0FBQ0gsYUFGTSxNQUVBLElBQUkzSyxLQUFLLENBQUNtRixTQUFOLENBQWdCRyxPQUFoQixDQUF3QkUsUUFBeEIsT0FBdUMsSUFBM0MsRUFBaUQ7QUFDcERrRiwwQkFBWSxDQUFDdEgsd0VBQTJCLENBQUNrSCxLQUE3QixDQUFaO0FBQ0gsYUFGTSxNQUVBO0FBQ0hJLDBCQUFZLENBQUN0SCx3RUFBMkIsQ0FBQ3VILElBQTdCLENBQVo7QUFDSDtBQUNKO0FBekJNLFNBdkNKO0FBa0VQakQsZUFBTyxFQUFFO0FBQ0xrRCxjQUFJLEVBQUV6SyxFQUFFLENBQUNrSixZQUFILENBQWdCO0FBQUEsbUJBQ2xCckosS0FBSyxDQUFDc0MsT0FBTixDQUFjYSxvQkFBZCxPQUF5Q0Msd0VBQTJCLENBQUN1SCxJQUFyRSxHQUNJLFdBREosR0FFSSxVQUhjO0FBQUEsV0FBaEIsQ0FERDtBQU1MRSxzQkFBWSxFQUFFMUssRUFBRSxDQUFDa0osWUFBSCxDQUFpQjtBQUFBLG1CQUMzQnJKLEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUJpRCxRQUFqQixDQUEwQmdKLFlBQTFCLE1BQTRDLENBQUM3SyxLQUFLLENBQUNtRixTQUFOLENBQWdCRyxPQUFoQixDQUF3QlEsT0FBeEIsRUFBN0MsSUFDQTlGLEtBQUssQ0FBQzJELE1BQU4sQ0FBYXVCLFdBQWIsT0FBK0JyQixxREFBVyxDQUFDaUgsTUFGaEI7QUFBQSxXQUFqQjtBQU5ULFNBbEVGO0FBNkVQL0UsZ0JBQVEsRUFBRTtBQUNOZ0YsZUFBSyxFQUFFNUssRUFBRSxDQUFDa0osWUFBSCxDQUFnQixZQUFZO0FBQy9CLGdCQUFJckosS0FBSyxDQUFDbUYsU0FBTixDQUFnQlksUUFBaEIsQ0FBeUJFLFFBQXpCLE9BQXdDLElBQTVDLEVBQWtEO0FBQzlDLHFCQUFPLFlBQVA7QUFDSDs7QUFDRCxvQkFBUWpHLEtBQUssQ0FBQ21GLFNBQU4sQ0FBZ0JZLFFBQWhCLENBQXlCRSxRQUF6QixHQUFvQ2lFLFdBQXBDLEVBQVI7QUFDSTtBQUNBLG1CQUFLLE1BQUw7QUFDSSx1QkFBTyxZQUFQOztBQUNKLG1CQUFLLFNBQUw7QUFDSSx1QkFBTyxxQkFBUDs7QUFDSixtQkFBSyxRQUFMO0FBQ0ksdUJBQU8sb0JBQVA7O0FBQ0osbUJBQUssUUFBTDtBQUNJLHVCQUFPLG9CQUFQOztBQUNKLG1CQUFLLFVBQUw7QUFDSSx1QkFBTyxzQkFBUDs7QUFDSixtQkFBSyxVQUFMO0FBQ0EsbUJBQUssVUFBTDtBQUNJLHVCQUFPLHNCQUFQOztBQUNKLG1CQUFLLFVBQUw7QUFDQSxtQkFBSyxZQUFMO0FBQ0ksdUJBQU8sc0JBQVA7O0FBQ0osbUJBQUssVUFBTDtBQUNJLHVCQUFPLHdCQUFQOztBQUNKLG1CQUFLLGNBQUw7QUFDSSx1QkFBTyxvQkFBUDs7QUFDSixtQkFBSyxXQUFMO0FBQ0ksdUJBQU8saUJBQVA7QUF2QlI7QUF5QkgsV0E3Qk0sQ0FERDtBQStCTmpFLGtCQUFRLEVBQUU5RixFQUFFLENBQUNrSixZQUFILENBQWdCLFlBQVk7QUFDbEMsZ0JBQUlySixLQUFLLENBQUNtRixTQUFOLENBQWdCWSxRQUFoQixDQUF5QkUsUUFBekIsT0FBd0MsSUFBNUMsRUFBa0Q7QUFDOUMscUJBQU8sRUFBUDtBQUNIOztBQUNELG9CQUFRakcsS0FBSyxDQUFDbUYsU0FBTixDQUFnQlksUUFBaEIsQ0FBeUJFLFFBQXpCLEdBQW9DaUUsV0FBcEMsRUFBUjtBQUNJO0FBQ0EsbUJBQUssTUFBTDtBQUNJLHVCQUFPLEVBQVA7O0FBQ0osbUJBQUssU0FBTDtBQUNJLHVCQUFPLGVBQVA7O0FBQ0osbUJBQUssUUFBTDtBQUNJLHVCQUFPLGNBQVA7O0FBQ0osbUJBQUssUUFBTDtBQUNJLHVCQUFPLGNBQVA7O0FBQ0osbUJBQUssVUFBTDtBQUNJLHVCQUFPLGdCQUFQOztBQUNKLG1CQUFLLFVBQUw7QUFDQSxtQkFBSyxVQUFMO0FBQ0ksdUJBQU8saUJBQVA7O0FBQ0osbUJBQUssVUFBTDtBQUNBLG1CQUFLLGNBQUw7QUFDSSx1QkFBTyxjQUFQOztBQUNKLG1CQUFLLFlBQUw7QUFDSSx1QkFBTyxrQkFBUDs7QUFDSixtQkFBSyxVQUFMO0FBQ0ksdUJBQU8sVUFBUDs7QUFDSixtQkFBSyxXQUFMO0FBQ0ksdUJBQU8sV0FBUDtBQXZCUjtBQXlCSCxXQTdCUztBQS9CSixTQTdFSDtBQTJJUGMsYUFBSyxFQUFFO0FBQ0huTCxhQUFHLEVBQUVNLEVBQUUsQ0FBQ2tKLFlBQUgsQ0FBZ0I7QUFBQSxtQkFDakJySixLQUFLLENBQUNtRixTQUFOLENBQWdCRyxPQUFoQixDQUF3QkssZ0JBQXhCLE9BQStDLElBRDlCO0FBQUEsV0FBaEIsQ0FERjtBQUlIc0YsY0FBSSxFQUFFOUssRUFBRSxDQUFDa0osWUFBSCxDQUFnQixZQUFZO0FBQzlCLGdCQUFJNkIsSUFBSSxHQUFHbEwsS0FBSyxDQUFDbUYsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0JNLGdCQUF4QixFQUFYO0FBQ0EsZ0JBQUlKLFFBQVEsR0FBR3hGLEtBQUssQ0FBQ21GLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCRSxRQUF4QixFQUFmO0FBQ0EsZ0JBQUkyRixTQUFTLEdBQUduTCxLQUFLLENBQUNtRixTQUFOLENBQWdCRyxPQUFoQixDQUF3QkssZ0JBQXhCLEVBQWhCOztBQUNBLGdCQUFJLENBQUN3RixTQUFELElBQWNELElBQUksS0FBSyxJQUEzQixFQUFpQztBQUM3QixxQkFBTyxVQUFQO0FBQ0g7O0FBQ0QsZ0JBQUlBLElBQUksS0FBSyxDQUFiLEVBQWdCO0FBQ1oscUJBQU8sWUFBUDtBQUNILGFBRkQsTUFFTyxJQUFJQSxJQUFJLEtBQUsxRixRQUFiLEVBQXVCO0FBQzFCLHFCQUFPLGNBQVA7QUFDSCxhQUZNLE1BRUE7QUFDSDtBQUNBLHFCQUFPLFdBQVMyRixTQUFTLENBQUNELElBQUQsQ0FBVCxDQUFnQkQsSUFBaEIsR0FBcUIsQ0FBOUIsQ0FBUDtBQUNIO0FBQ0osV0FmSyxDQUpIO0FBb0JIRyxlQUFLLEVBQUUsaUJBQVk7QUFDZnBMLGlCQUFLLENBQUNtRixTQUFOLENBQWdCRyxPQUFoQixDQUF3Qk0sZ0JBQXhCLENBQXlDLENBQXpDO0FBQ0gsV0F0QkU7QUF1Qkh5RixrQkFBUSxFQUFFLG9CQUFZO0FBQ2xCLGdCQUFJQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWXhMLEtBQUssQ0FBQ21GLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCTSxnQkFBeEIsS0FBNkMsQ0FBekQsQ0FBZjtBQUNBNUYsaUJBQUssQ0FBQ21GLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCTSxnQkFBeEIsQ0FBeUMwRixRQUF6QztBQUNILFdBMUJFO0FBMkJIRyxpQkFBTyxFQUFFLG1CQUFZO0FBQ2pCLGdCQUFJQyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksR0FBTCxDQUFTM0wsS0FBSyxDQUFDbUYsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0JFLFFBQXhCLEVBQVQsRUFBNkN4RixLQUFLLENBQUNtRixTQUFOLENBQWdCRyxPQUFoQixDQUF3Qk0sZ0JBQXhCLEtBQTZDLENBQTFGLENBQVg7QUFDQTVGLGlCQUFLLENBQUNtRixTQUFOLENBQWdCRyxPQUFoQixDQUF3Qk0sZ0JBQXhCLENBQXlDOEYsSUFBekM7QUFDSCxXQTlCRTtBQStCSEUsY0FBSSxFQUFFLGdCQUFZO0FBQ2Q1TCxpQkFBSyxDQUFDbUYsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0JNLGdCQUF4QixDQUF5QzVGLEtBQUssQ0FBQ21GLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCRSxRQUF4QixFQUF6QztBQUNILFdBakNFO0FBa0NIaUMsY0FBSSxFQUFFdEgsRUFBRSxDQUFDa0osWUFBSCxDQUFnQixZQUFZO0FBQzlCLGdCQUFJNkIsSUFBSSxHQUFHbEwsS0FBSyxDQUFDbUYsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0JNLGdCQUF4QixFQUFYO0FBQ0EsZ0JBQUlKLFFBQVEsR0FBR3hGLEtBQUssQ0FBQ21GLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCRSxRQUF4QixFQUFmO0FBQ0EsZ0JBQUkyRixTQUFTLEdBQUduTCxLQUFLLENBQUNtRixTQUFOLENBQWdCRyxPQUFoQixDQUF3QkssZ0JBQXhCLEVBQWhCOztBQUNBLGdCQUFJLENBQUN3RixTQUFMLEVBQWdCO0FBQ1oscUJBQU8sRUFBUDtBQUNIOztBQUNELG9CQUFRRCxJQUFSO0FBQ0ksbUJBQUssQ0FBTDtBQUNJLHVCQUFPLEVBQVA7O0FBQ0osbUJBQUsxRixRQUFMO0FBQ0ksdUJBQU8yRixTQUFTLENBQUNELElBQUksR0FBRyxDQUFSLENBQWhCOztBQUNKO0FBQ0ksdUJBQU9DLFNBQVMsQ0FBQ0QsSUFBRCxDQUFoQjtBQU5SO0FBUUgsV0FmSztBQWxDSCxTQTNJQTtBQThMUFcsYUFBSyxFQUFFO0FBQ0hDLGlCQUFPLEVBQUUzTCxFQUFFLENBQUNrSixZQUFILENBQWdCO0FBQUEsbUJBQ3JCckosS0FBSyxDQUFDc0MsT0FBTixDQUFjRSxVQUFkLE1BQThCLENBQUN4QyxLQUFLLENBQUNwQixVQUFOLENBQWlCaUQsUUFBakIsQ0FBMEJrSyxTQUExQixFQURWO0FBQUEsV0FBaEIsQ0FETjtBQUlIQyxxQkFBVyxFQUFFLHFCQUFTQyxJQUFULEVBQWU7QUFDeEIsb0JBQVFBLElBQVI7QUFDSSxtQkFBSyxXQUFMO0FBQWtCLHVCQUFPak0sS0FBSyxDQUFDbkIsVUFBTixDQUFpQmtELElBQWpCLEVBQVA7O0FBQ2xCLG1CQUFLLGtCQUFMO0FBQXlCLHVCQUFPL0IsS0FBSyxDQUFDcEIsVUFBTixDQUFpQjhCLFlBQWpCLEVBQVA7O0FBQ3pCLG1CQUFLLGVBQUw7QUFBc0IsdUJBQU9WLEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUJtQyxRQUFqQixPQUFnQyxJQUF2Qzs7QUFDdEIsbUJBQUssYUFBTDtBQUFvQix1QkFBT2YsS0FBSyxDQUFDcEIsVUFBTixDQUFpQm9DLE1BQWpCLE9BQThCLElBQXJDOztBQUNwQixtQkFBSyxvQkFBTDtBQUEyQix1QkFBT2hCLEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUJxQyxvQkFBakIsR0FBd0NpTCxJQUF4QyxDQUE2QyxVQUFBQyxJQUFJO0FBQUEseUJBQy9FQSxJQUFJLENBQUM1SixRQUFMLE9BQW9CLG9CQUQyRDtBQUFBLGlCQUFqRCxDQUFQOztBQUUzQixtQkFBSyxlQUFMO0FBQXNCLHVCQUFPdkMsS0FBSyxDQUFDcEIsVUFBTixDQUFpQjRDLElBQWpCLEdBQXdCNEssTUFBL0I7O0FBQ3RCLG1CQUFLLDZCQUFMO0FBQW9DLHVCQUFPcE0sS0FBSyxDQUFDcEIsVUFBTixDQUFpQjZDLGlCQUFqQixHQUFxQzJLLE1BQTVDOztBQUNwQztBQUFTLHVCQUFPLEtBQVA7QUFUYjtBQVdILFdBaEJFO0FBaUJIQyxhQUFHLEVBQUUsYUFBU0osSUFBVCxFQUFlO0FBQ2hCLG9CQUFRQSxJQUFSO0FBQ0ksbUJBQUssb0JBQUw7QUFDQSxtQkFBSyxlQUFMO0FBQ0EsbUJBQUssbUJBQUw7QUFDSS9DLG9CQUFJLENBQUNqQyxVQUFMLENBQWdCaUIsVUFBaEIsQ0FBMkJDLE9BQTNCLENBQW1DOEQsSUFBbkM7QUFBMEM7O0FBQzlDLG1CQUFLLGVBQUw7QUFDSWpNLHFCQUFLLENBQUNwQixVQUFOLENBQWlCbUMsUUFBakIsQ0FBMEIsRUFBMUI7QUFDQW1JLG9CQUFJLENBQUNqQyxVQUFMLENBQWdCaUIsVUFBaEIsQ0FBMkJDLE9BQTNCLENBQW1DOEQsSUFBbkM7QUFDQTtBQUNBOztBQUNKLG1CQUFLLGFBQUw7QUFDSWpNLHFCQUFLLENBQUNwQixVQUFOLENBQWlCb0MsTUFBakIsQ0FBd0IsRUFBeEI7QUFDQWtJLG9CQUFJLENBQUNqQyxVQUFMLENBQWdCaUIsVUFBaEIsQ0FBMkJDLE9BQTNCLENBQW1DOEQsSUFBbkM7QUFDQTs7QUFDSjtBQWRKOztBQWlCQWpNLGlCQUFLLENBQUNzQyxPQUFOLENBQWNDLFFBQWQsQ0FBdUIwSixJQUF2QjtBQUNILFdBcENFO0FBcUNILG9CQUFRLG1CQUFXO0FBQ2YsbUJBQU8vQyxJQUFJLENBQUNqQyxVQUFMLENBQWdCaUIsVUFBaEIsQ0FBMkJvRSxVQUEzQixDQUFzQ3RNLEtBQUssQ0FBQ3NDLE9BQU4sQ0FBY0MsUUFBZCxFQUF0QyxDQUFQO0FBQ0gsV0F2Q0U7QUF3Q0hnSywyQkFBaUIsRUFBRUMsc0VBQXVCLENBQUN4TSxLQUFLLENBQUNuQixVQUFOLENBQWlCbUQsVUFBbEIsQ0F4Q3ZDO0FBeUNIZiw4QkFBb0IsRUFBRXVMLHNFQUF1QixDQUFDeE0sS0FBSyxDQUFDcEIsVUFBTixDQUFpQnFDLG9CQUFsQixDQXpDMUM7QUEwQ0hFLDRCQUFrQixFQUFFcUwsc0VBQXVCLENBQUN4TSxLQUFLLENBQUNwQixVQUFOLENBQWlCdUMsa0JBQWxCO0FBMUN4QyxTQTlMQTtBQTBPUHNMLGVBQU8sRUFBRTtBQUNMbEQsaUJBQU8sRUFBRXBKLEVBQUUsQ0FBQ2tKLFlBQUgsQ0FBaUI7QUFBQSxtQkFDdEJILElBQUksQ0FBQ2pDLFVBQUwsQ0FBZ0J3RixPQUFoQixDQUF3QkMsU0FBeEIsQ0FBa0MxTSxLQUFLLENBQUNzQyxPQUFOLENBQWNDLFFBQWQsRUFBbEMsQ0FEc0I7QUFBQSxXQUFqQixDQURKO0FBSUxvSyxjQUFJLEVBQUV4TSxFQUFFLENBQUNrSixZQUFILENBQWdCO0FBQUEsbUJBQ2xCckosS0FBSyxDQUFDcEIsVUFBTixDQUFpQmlELFFBQWpCLENBQTBCK0ssV0FBMUIsS0FBMEMsTUFBMUMsR0FDQTVNLEtBQUssQ0FBQ3NDLE9BQU4sQ0FBY0MsUUFBZCxLQUEyQnZDLEtBQUssQ0FBQ21KLEVBQU4sQ0FBU3NELE9BQVQsQ0FBaUJsRCxPQUFqQixFQUEzQixHQUF3RCxNQUZ0QztBQUFBLFdBQWhCLENBSkQ7QUFRTEcsZUFBSyxFQUFFLGlCQUFXO0FBQ2RSLGdCQUFJLENBQUNqQyxVQUFMLENBQWdCQyxNQUFoQixDQUF1QjVDLFFBQXZCLENBQWdDLGNBQWhDLEVBQWdELEVBQWhELEVBQW9ELEVBQXBELEVBQXdELEVBQXhELEVBQTRELFdBQTVEO0FBQ0F0RSxpQkFBSyxDQUFDbkIsVUFBTixDQUFpQmtELElBQWpCLENBQXNCL0IsS0FBSyxDQUFDcEIsVUFBTixDQUFpQmlDLFlBQWpCLEVBQXRCO0FBQ0FiLGlCQUFLLENBQUNuQixVQUFOLENBQWlCbUQsVUFBakIsQ0FBNEJoQyxLQUFLLENBQUNwQixVQUFOLENBQWlCdUMsa0JBQWpCLEdBQXNDMEwsR0FBdEMsQ0FDeEIsVUFBQVYsSUFBSSxFQUFJO0FBQ0osa0JBQUk1SixRQUFRLEdBQUc0SixJQUFJLENBQUM1SixRQUFMLEdBQWdCdUssTUFBaEIsQ0FBdUIsQ0FBdkIsQ0FBZjtBQUNBLHFCQUFPQyw0REFBYSxDQUFDeEssUUFBRCxFQUFXNEosSUFBSSxDQUFDYSxRQUFMLEVBQVgsQ0FBcEI7QUFDSCxhQUp1QixDQUE1QjtBQU1ILFdBakJJO0FBa0JMQyxpQkFBTyxFQUFFOU0sRUFBRSxDQUFDa0osWUFBSCxDQUFnQjtBQUFBLG1CQUNyQixDQUFDckosS0FBSyxDQUFDc0MsT0FBTixDQUFjUyxRQUFkLEVBRG9CO0FBQUEsV0FBaEIsQ0FsQko7QUFvQkxtSyxtQkFBUyxFQUFFL00sRUFBRSxDQUFDa0osWUFBSCxDQUFnQjtBQUFBLG1CQUN2QixDQUFDLENBQUNySixLQUFLLENBQUNwQixVQUFOLENBQWlCaUQsUUFBakIsQ0FBMEJrSyxTQUExQixFQUFELElBQTBDL0wsS0FBSyxDQUFDc0MsT0FBTixDQUFjRSxVQUFkLEVBQTNDLEtBQ0EySyx3REFBaUIsQ0FBQ0MsT0FBbEIsQ0FBMEJwTixLQUFLLENBQUNzQyxPQUFOLENBQWNDLFFBQWQsRUFBMUIsTUFBd0QsQ0FBQyxDQUZsQztBQUFBLFdBQWhCLENBcEJOO0FBdUJMOEssbUJBQVMsRUFBRWxOLEVBQUUsQ0FBQ2tKLFlBQUgsQ0FBZ0I7QUFBQSxtQkFDdkIsQ0FBQyxDQUFDckosS0FBSyxDQUFDcEIsVUFBTixDQUFpQmlELFFBQWpCLENBQTBCa0ssU0FBMUIsRUFBRCxJQUEwQy9MLEtBQUssQ0FBQ3NDLE9BQU4sQ0FBY0UsVUFBZCxFQUEzQyxLQUNBOEssd0RBQWlCLENBQUNGLE9BQWxCLENBQTBCcE4sS0FBSyxDQUFDc0MsT0FBTixDQUFjQyxRQUFkLEVBQTFCLE1BQXdELENBQUMsQ0FGbEM7QUFBQSxXQUFoQixDQXZCTjtBQTBCTGdMLGdCQUFNLEVBQUVDLGtFQUFVLENBQUNDLElBQVgsQ0FBZ0J2RSxJQUFoQixDQTFCSDtBQTJCTHdFLGtCQUFRLEVBQUVDLG9FQUFZLENBQUNGLElBQWIsQ0FBa0J2RSxJQUFsQixDQTNCTDtBQTRCTDBFLHVCQUFhLEVBQUUseUJBQU07QUFDakIxRSxnQkFBSSxDQUFDakMsVUFBTCxDQUFnQjhCLE1BQWhCLENBQXVCOEUsVUFBdkI7QUFDSCxXQTlCSTtBQStCTEMsZ0JBQU0sRUFBRTtBQUNKQyxzQkFBVSxFQUFFLHNCQUFNO0FBQ2Qsa0JBQUlDLFVBQVUsR0FBRzlFLElBQUksQ0FBQ2pDLFVBQUwsQ0FBZ0JnSCxZQUFoQixDQUE2QkMsRUFBN0IsQ0FBZ0NDLFVBQWhDLENBQTJDSCxVQUE1RDtBQUNBLHFCQUFPQSxVQUFVLENBQUNJLFNBQVgsQ0FBcUIsWUFBckIsRUFBbUMsQ0FBQ0osVUFBVSxDQUFDSyxTQUFYLENBQXFCLFlBQXJCLENBQXBDLENBQVA7QUFDSCxhQUpHO0FBS0pDLHNCQUFVLEVBQUUsb0JBQUNDLE9BQUQsRUFBYTtBQUNyQnJGLGtCQUFJLENBQUNqQyxVQUFMLENBQWdCQyxNQUFoQixDQUF1QjVDLFFBQXZCLENBQWdDLGVBQWhDLEVBQWlELEVBQWpELEVBQXFELEVBQXJELEVBQXlEaUssT0FBekQsRUFBa0V2TyxLQUFLLENBQUNzQyxPQUFOLENBQWNDLFFBQWQsRUFBbEU7QUFDQXZDLG1CQUFLLENBQUNzQyxPQUFOLENBQWNLLFVBQWQsQ0FBeUI0TCxPQUF6Qjs7QUFDQSxrQkFBSXZPLEtBQUssQ0FBQ3NDLE9BQU4sQ0FBY0MsUUFBZCxPQUE2QixXQUFqQyxFQUE4QztBQUMxQzJHLG9CQUFJLENBQUNqQyxVQUFMLENBQWdCZ0gsWUFBaEIsQ0FBNkJPLGFBQTdCLEdBQTZDRCxPQUE3QztBQUNIO0FBQ0osYUFYRztBQVlKRSw4QkFBa0IsRUFBRXRPLEVBQUUsQ0FBQ2tKLFlBQUgsQ0FBZ0I7QUFBQSxxQkFDaENySixLQUFLLENBQUNtSixFQUFOLENBQVNqQyxNQUFULENBQWdCd0gsbUJBQWhCLENBQW9DLGFBQXBDLENBRGdDO0FBQUEsYUFBaEIsQ0FaaEI7QUFjSkMsOEJBQWtCLEVBQUUsOEJBQU07QUFDdEJ6RixrQkFBSSxDQUFDakMsVUFBTCxDQUFnQmdILFlBQWhCLENBQTZCVyxZQUE3QjtBQUNBMUYsa0JBQUksQ0FBQ2pDLFVBQUwsQ0FBZ0JnSCxZQUFoQixDQUE2QlksV0FBN0IsQ0FBeUMsS0FBekM7QUFDQTdPLG1CQUFLLENBQUNzQyxPQUFOLENBQWNRLFdBQWQsQ0FBMEIsS0FBMUI7QUFDSCxhQWxCRztBQW1CSmdNLDZCQUFpQixFQUFFLDZCQUFNO0FBQ3JCNUYsa0JBQUksQ0FBQ2pDLFVBQUwsQ0FBZ0JDLE1BQWhCLENBQXVCbEQsV0FBdkIsQ0FBbUMsVUFBQytLLFFBQUQsRUFBYTtBQUM1QyxvQkFBSUEsUUFBUSxDQUFDQyxPQUFiLEVBQXNCO0FBQ2xCOUYsc0JBQUksQ0FBQ2pDLFVBQUwsQ0FBZ0JnSSxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJILFFBQVEsQ0FBQ0UsT0FBdEM7QUFDQWpQLHVCQUFLLENBQUNzQyxPQUFOLENBQWNRLFdBQWQsQ0FBMEIsSUFBMUI7QUFDQW9HLHNCQUFJLENBQUNqQyxVQUFMLENBQWdCZ0gsWUFBaEIsQ0FBNkJZLFdBQTdCLENBQXlDLElBQXpDO0FBQ0gsaUJBSkQsTUFJTztBQUNIM0Ysc0JBQUksQ0FBQ2pDLFVBQUwsQ0FBZ0JrSSxNQUFoQixDQUF1QkMscUJBQXZCO0FBQ0g7QUFDSixlQVJEO0FBU0gsYUE3Qkc7QUE4QkpDLDZCQUFpQixFQUFFLDZCQUFNO0FBQ3JCLGtCQUFJclAsS0FBSyxDQUFDc0MsT0FBTixDQUFjUSxXQUFkLEVBQUosRUFBaUM7QUFDN0I5QyxxQkFBSyxDQUFDbUosRUFBTixDQUFTc0QsT0FBVCxDQUFpQnFCLE1BQWpCLENBQXdCYSxrQkFBeEI7QUFDSCxlQUZELE1BRU87QUFDSDNPLHFCQUFLLENBQUNtSixFQUFOLENBQVNzRCxPQUFULENBQWlCcUIsTUFBakIsQ0FBd0JnQixpQkFBeEI7QUFDSDtBQUNKLGFBcENHO0FBcUNKRyxtQkFBTyxFQUFFO0FBQ0x6UCxtQkFBSyxFQUFFLGlCQUFJO0FBQUUwSixvQkFBSSxDQUFDakMsVUFBTCxDQUFnQmdJLE9BQWhCLENBQXdCSyxXQUF4QjtBQUF3QyxlQURoRDtBQUVMaEUsc0JBQVEsRUFBRSxvQkFBSTtBQUFFcEMsb0JBQUksQ0FBQ2pDLFVBQUwsQ0FBZ0JnSSxPQUFoQixDQUF3Qk0sWUFBeEI7QUFBeUMsZUFGcEQ7QUFHTDdELGtCQUFJLEVBQUUsZ0JBQUk7QUFBRXhDLG9CQUFJLENBQUNqQyxVQUFMLENBQWdCZ0ksT0FBaEIsQ0FBd0JPLFFBQXhCO0FBQXFDLGVBSDVDO0FBSUxDLHdCQUFVLEVBQUUsc0JBQUk7QUFBRXZHLG9CQUFJLENBQUNqQyxVQUFMLENBQWdCZ0ksT0FBaEIsQ0FBd0JTLGdCQUF4QjtBQUE2QyxlQUoxRDtBQUtMQyxpQkFBRyxFQUFFLGVBQUk7QUFBRXpHLG9CQUFJLENBQUNqQyxVQUFMLENBQWdCZ0ksT0FBaEIsQ0FBd0JVLEdBQXhCO0FBQWdDO0FBTHRDO0FBckNMLFdBL0JIO0FBNEVMOU4sa0JBQVEsRUFBRTtBQUNOK04sZ0JBQUksRUFBRTtBQUFBLHFCQUFNMUcsSUFBSSxDQUFDakMsVUFBTCxDQUFnQkMsTUFBaEIsQ0FBdUJ0QyxjQUF2QixFQUFOO0FBQUE7QUFEQTtBQTVFTCxTQTFPRjtBQTBUUGlMLGVBQU8sRUFBRTtBQUNMNUYsYUFBRyxFQUFFO0FBQUEsbUJBQ0RmLElBQUksQ0FBQ2pDLFVBQUwsQ0FBZ0IrQyxNQUFoQixDQUF1QkMsR0FBdkIsRUFEQztBQUFBLFdBREE7QUFHTDZGLGtCQUFRLEVBQUU7QUFBQSxtQkFDTjVHLElBQUksQ0FBQ2pDLFVBQUwsQ0FBZ0IrQyxNQUFoQixDQUF1QjhGLFFBQXZCLEVBRE07QUFBQTtBQUhMLFNBMVRGO0FBZ1VQNUksY0FBTSxFQUFFO0FBQ0p2RCxnQkFBTSxFQUFHLGdCQUFBMUIsUUFBUTtBQUFBLG1CQUNiLG1CQUFtQmpDLEtBQUssQ0FBQzJELE1BQU4sQ0FBYTFCLFFBQWIsR0FETjtBQUFBLFdBRGI7QUFJSnlNLDZCQUFtQixFQUFFLDZCQUFDek0sUUFBRDtBQUFBLG1CQUNqQmpDLEtBQUssQ0FBQ3JCLGFBQU4sQ0FBb0IySCxlQUFwQixNQUNBdEcsS0FBSyxDQUFDckIsYUFBTixDQUFvQitILElBQXBCLEtBQTZCM0gsU0FEN0IsSUFFQWlCLEtBQUssQ0FBQ3JCLGFBQU4sQ0FBb0IrSCxJQUFwQixDQUF5QnpFLFFBQXpCLE1BQXVDbEQsU0FIdEI7QUFBQSxXQUpqQjtBQVFKZ1Isa0JBQVEsRUFBRTVQLEVBQUUsQ0FBQ2tKLFlBQUgsQ0FBZ0I7QUFBQSxtQkFDdEJySixLQUFLLENBQUMyRCxNQUFOLENBQWFJLHFCQUFiLE1BQ0EvRCxLQUFLLENBQUMyRCxNQUFOLENBQWFrQixxQkFBYixFQURBLElBRUE3RSxLQUFLLENBQUMyRCxNQUFOLENBQWFNLGtCQUFiLEVBRkEsSUFHQWpFLEtBQUssQ0FBQzJELE1BQU4sQ0FBYVEsZUFBYixFQUhBLElBSUFuRSxLQUFLLENBQUMyRCxNQUFOLENBQWFnQixlQUFiLEVBSkEsSUFLQTNFLEtBQUssQ0FBQzJELE1BQU4sQ0FBYVUsa0JBQWIsRUFMQSxJQU1BckUsS0FBSyxDQUFDMkQsTUFBTixDQUFhWSxlQUFiLEVBTkEsSUFPQXZFLEtBQUssQ0FBQzJELE1BQU4sQ0FBYWEsU0FBYixFQVBBLElBUUF4RSxLQUFLLENBQUMyRCxNQUFOLENBQWFvQix1QkFBYixFQVJBLElBU0EvRSxLQUFLLENBQUMyRCxNQUFOLENBQWFzQiw2QkFBYixFQVRBLElBU2dELEVBVjFCO0FBQUEsV0FBaEIsQ0FSTjtBQW9CSitLLGVBQUssRUFBRTtBQUNIbEwsNEJBQWdCLEVBQUUsMEJBQUMyQyxJQUFELEVBQU93SSxLQUFQLEVBQWlCO0FBQy9CdkkscUJBQU8sQ0FBQ0MsR0FBUixDQUFZc0ksS0FBWjtBQUNBL0csa0JBQUksQ0FBQ2pDLFVBQUwsQ0FBZ0JDLE1BQWhCLENBQXVCcEMsZ0JBQXZCLENBQXdDb0UsSUFBSSxDQUFDbEosS0FBTCxDQUFXbkIsVUFBWCxDQUFzQnFELEtBQXRCLEVBQXhDLEVBQ3dDZ0gsSUFBSSxDQUFDbEosS0FBTCxDQUFXbkIsVUFBWCxDQUFzQnNELE9BQXRCLEVBRHhDLEVBRXdDLEtBRnhDLEVBRStDLElBRi9DO0FBR0EyRSwyREFBQyxDQUFDbUosS0FBSyxDQUFDQyxNQUFQLENBQUQsQ0FBZ0JDLE9BQWhCLENBQXdCLEdBQXhCLEVBQTZCQyxNQUE3QixDQUFvQyxHQUFwQztBQUNIO0FBUEU7QUFwQkg7QUFoVUQsT0FBWDtBQStWQUMsMEZBQStCLENBQUNuSCxJQUFELEVBQU9sSixLQUFQLENBQS9CO0FBQ0g7QUFodUJMO0FBQUE7QUFBQSxrQ0FrdUJrQixDQUViLENBcHVCTCxDQW11QlE7O0FBR0o7Ozs7O0FBdHVCSjtBQUFBO0FBQUEsaUNBMHVCaUI7QUFDVEcsUUFBRSxDQUFDbVEsYUFBSCxDQUFpQixLQUFLdFEsS0FBdEI7QUFDSDtBQTV1Qkw7QUFBQTtBQUFBLG9DQTh1Qm9CO0FBQ1osVUFBSXVRLElBQUksR0FBRyxJQUFYO0FBQ0EsV0FBSy9HLFNBQUwsR0FBaUI7QUFDYkMsZ0JBQVEsRUFBRSxrQkFBQytHLElBQUQ7QUFBQSxpQkFBVUEsSUFBSSxHQUFHQyxPQUFPLENBQUNDLFNBQVIsQ0FBa0JqSCxRQUFsQixDQUEyQitHLElBQTNCLENBQUgsR0FBc0MsU0FBcEQ7QUFBQTtBQURHLE9BQWpCO0FBR0g7QUFudkJMO0FBQUE7QUFBQSxxQ0FxdkJxQjtBQUNiLFVBQUkvSixTQUFTLEdBQUcsS0FBS3pHLEtBQUwsQ0FBV3JCLGFBQVgsQ0FBeUI4SCxTQUF6QztBQUNBLFVBQUlRLFVBQVUsR0FBRyxLQUFLQSxVQUFMLEdBQWtCLEVBQW5DO0FBQ0EsVUFBSXNKLElBQUksR0FBRyxJQUFYLENBSGEsQ0FJYjtBQUNBOztBQUNBdEosZ0JBQVUsQ0FBQ2tJLE1BQVgsR0FBb0IsSUFBSXdCLHNEQUFKLENBQWtCSixJQUFsQixFQUF3QjlKLFNBQVMsQ0FBQ21LLElBQVYsQ0FBZSxpQkFBZixDQUF4QixDQUFwQjtBQUNBM0osZ0JBQVUsQ0FBQ2xCLFFBQVgsR0FBc0IsSUFBSThLLDREQUFKLENBQW9CTixJQUFwQixFQUEwQjlKLFNBQVMsQ0FBQ21LLElBQVYsQ0FBZSxtQkFBZixDQUExQixDQUF0QjtBQUNBM0osZ0JBQVUsQ0FBQytELEtBQVgsR0FBbUIsSUFBSThGLG9EQUFKLENBQWlCUCxJQUFqQixDQUFuQjtBQUNBdEosZ0JBQVUsQ0FBQ1MsT0FBWCxHQUFxQixJQUFJcUosd0RBQUosQ0FBbUJSLElBQW5CLEVBQXlCOUosU0FBUyxDQUFDbUssSUFBVixDQUFlLGtCQUFmLENBQXpCLENBQXJCO0FBQ0EzSixnQkFBVSxDQUFDK0MsTUFBWCxHQUFvQixJQUFJZ0gsd0RBQUosQ0FBa0JULElBQWxCLENBQXBCO0FBQ0F0SixnQkFBVSxDQUFDaUIsVUFBWCxHQUF3QixJQUFJK0ksd0RBQUosQ0FBc0JWLElBQXRCLENBQXhCO0FBQ0F0SixnQkFBVSxDQUFDd0YsT0FBWCxHQUFxQixJQUFJeUUsa0RBQUosQ0FBWVgsSUFBWixFQUFrQjlKLFNBQVMsQ0FBQ21LLElBQVYsQ0FBZSxpQkFBZixDQUFsQixDQUFyQjtBQUNBM0osZ0JBQVUsQ0FBQ2dILFlBQVgsR0FBMEIsS0FBS2hILFVBQUwsQ0FBZ0J3RixPQUFoQixDQUF3QjBFLE1BQXhCLENBQStCLFFBQS9CLENBQTFCO0FBQ0FsSyxnQkFBVSxDQUFDQyxNQUFYLEdBQW9CLElBQUlrSyx1REFBSixDQUFrQmIsSUFBbEIsQ0FBcEI7QUFDQXRKLGdCQUFVLENBQUM4QixNQUFYLEdBQW9CLElBQUlzSSxzREFBSixDQUFrQmQsSUFBbEIsQ0FBcEI7QUFDQXRKLGdCQUFVLENBQUNnSSxPQUFYLEdBQXFCLElBQUlxQyx3REFBSixDQUFtQmYsSUFBbkIsRUFBeUI5SixTQUFTLENBQUNtSyxJQUFWLENBQWUsMEJBQWYsQ0FBekIsQ0FBckI7QUFDSDtBQXR3Qkw7QUFBQTtBQUFBLDRCQXd3Qlk7QUFDSixXQUFLNVEsS0FBTCxDQUFXc0MsT0FBWCxDQUFtQkMsUUFBbkIsQ0FBNEIsV0FBNUI7QUFDSDtBQTF3Qkw7QUFBQTtBQUFBLHFDQTR3QnFCO0FBQ2IsV0FBSzBFLFVBQUwsQ0FBZ0IrQyxNQUFoQixDQUF1Qk4sS0FBdkI7QUFDSDtBQTl3Qkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFFQSxJQUFNNkgsZUFBZSxzSEFBckI7QUFLTyxJQUFNQyxZQUFZLHdxQkFBbEI7QUFtQlAsSUFBTUMscUJBQXFCLEdBQUcsYUFBOUI7QUFFQTs7Ozs7QUFJTyxJQUFJQyxlQUFlLEdBQUc7QUFDekJDLE1BQUksRUFBRSxNQURtQjtBQUV6QkMsTUFBSSxFQUFFLE1BRm1CO0FBR3pCQyxNQUFJLEVBQUUsTUFIbUI7QUFJekJDLE9BQUssRUFBRSxPQUprQjtBQUt6QkMsUUFBTSxFQUFFLFFBTGlCO0FBTXpCQyxNQUFJLEVBQUUsTUFObUI7QUFPekJDLFlBQVUsRUFBRSxZQVBhO0FBUXpCQyxPQUFLLEVBQUUsT0FSa0I7QUFTekJDLE9BQUssRUFBRSxPQVRrQjtBQVV6QkMsV0FBUyxFQUFFO0FBVmMsQ0FBdEI7O0lBYURDLFc7OztBQUNGLHVCQUFZOUIsSUFBWixFQUFrQjNQLElBQWxCLEVBQXdCMFIsT0FBeEIsRUFBaUM7QUFBQTs7QUFDN0IsU0FBSy9CLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUszUCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLMFIsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjO0FBQ1ZoUSxjQUFRLEVBQUVpUSxFQUFFLENBQUNDLFlBREg7QUFFVnZILFVBQUksRUFBRXFGLElBQUksQ0FBQ3RKLFVBQUwsQ0FBZ0IrQyxNQUFoQixDQUF1QjBJLGVBQXZCLENBQXVDeEgsSUFGbkM7QUFHVkQsVUFBSSxFQUFFc0YsSUFBSSxDQUFDdEosVUFBTCxDQUFnQitDLE1BQWhCLENBQXVCMEksZUFBdkIsQ0FBdUN6SDtBQUhuQyxLQUFkO0FBS0EsU0FBS2xFLElBQUwsR0FBWUQsQ0FBQyxDQUFDLGFBQUQsRUFBZ0I7QUFDekIsZUFBVSx3QkFEZTtBQUV6QixxQkFBZSxTQUZVO0FBR3pCLHdCQUFrQixNQUhPO0FBSXpCLG1CQUFhLEtBQUt5TCxNQUFMLENBQVlySCxJQUpBO0FBS3pCLGVBQVMsVUFBVSxLQUFLcUgsTUFBTCxDQUFZckgsSUFBdEIsR0FBNkIsU0FBN0IsR0FBeUMsS0FBS3FILE1BQUwsQ0FBWXRIO0FBTHJDLEtBQWhCLENBQWI7QUFPQSxTQUFLYSxPQUFMLEdBQWUsQ0FBQ3lFLElBQUksQ0FBQ3ZRLEtBQUwsQ0FBV3NDLE9BQVgsQ0FBbUJJLFdBQW5CLEVBQWhCO0FBQ0EsU0FBS2lRLEtBQUwsR0FBYSxDQUFiO0FBQ0g7Ozs7K0JBRVU7QUFDUCxhQUFPSCxFQUFFLENBQUNJLEdBQUgsQ0FBT0MsU0FBUCxDQUFpQixLQUFLUCxPQUF0QixDQUFQO0FBQ0g7Ozs4QkFFUTtBQUNMLFdBQUt2TCxJQUFMLENBQVUrTCxNQUFWO0FBQ0g7Ozs7OztJQUdDQyxpQjs7Ozs7QUFDRjtBQUNBLDZCQUFZeEMsSUFBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDJGQUFNQSxJQUFOLEVBQVltQixlQUFlLENBQUNLLE1BQTVCOztBQUNBLFVBQUtoTCxJQUFMLENBQVVpTSxRQUFWLENBQW1CLCtCQUFuQjs7QUFGYztBQUdqQjs7OzsyQkFFTUMsSyxFQUFPO0FBQ1YsVUFBSSxLQUFLbkgsT0FBVCxFQUFrQjtBQUNkbUgsYUFBSyxDQUFDQyxPQUFOLENBQWMsS0FBS25NLElBQW5CO0FBQ0EsYUFBS0EsSUFBTCxDQUFVLENBQVYsRUFBYW9NLGNBQWIsQ0FBNEI7QUFBRUMsa0JBQVEsRUFBRTtBQUFaLFNBQTVCLEVBRmMsQ0FHZDtBQUNIO0FBQ0o7Ozs7RUFiMkJmLFc7O0lBZ0IxQmdCLGdCOzs7OztBQUNGLDRCQUFZOUMsSUFBWixFQUFrQitCLE9BQWxCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQ3ZCLDJGQUFNL0IsSUFBTixFQUFZbUIsZUFBZSxDQUFDSSxLQUE1QixFQUFtQ1EsT0FBbkM7O0FBQ0EsV0FBS3ZMLElBQUwsQ0FBVWlNLFFBQVYsQ0FBbUIsOEJBQW5COztBQUZ1QjtBQUcxQjs7OzsyQkFFTUMsSyxFQUFPO0FBQ1YsVUFBSSxLQUFLbkgsT0FBVCxFQUFrQjtBQUNkcEUsZUFBTyxDQUFDQyxHQUFSLENBQVksS0FBSzJLLE9BQWpCO0FBQ0EsYUFBS3ZMLElBQUwsQ0FBVXVNLE1BQVYsQ0FBaUIsS0FBS2hCLE9BQXRCO0FBQ0FXLGFBQUssQ0FBQ0ssTUFBTixDQUFhLEtBQUt2TSxJQUFsQixFQUhjLENBSWQ7QUFDSDtBQUNKOzs7O0VBYjBCc0wsVzs7SUFnQnpCa0IsZTs7Ozs7QUFDRiwyQkFBWWhELElBQVosRUFBa0IrQixPQUFsQixFQUEyQjtBQUFBOztBQUFBOztBQUN2QiwwRkFBTS9CLElBQU4sRUFBWW1CLGVBQWUsQ0FBQ0csSUFBNUIsRUFBa0NTLE9BQWxDOztBQUNBLFdBQUt2TCxJQUFMLENBQVVpTSxRQUFWLENBQW1CLDZCQUFuQjs7QUFGdUI7QUFHMUI7Ozs7MkJBRU1DLEssRUFBTztBQUNWLFVBQUksS0FBS25ILE9BQVQsRUFBa0I7QUFDZG1ILGFBQUssQ0FBQ0ssTUFBTixDQUFhLEtBQUt2TSxJQUFsQixFQURjLENBRWQ7QUFDSDtBQUNKOzs7O0VBWHlCc0wsVzs7SUFjeEJtQixlOzs7Ozs7Ozs7Ozs7OytCQUVTbEIsTyxFQUFTO0FBQ2hCLFdBQUtBLE9BQUwsR0FBZSxLQUFLQSxPQUFMLEdBQWVBLE9BQTlCO0FBQ0g7OzsyQkFFTVcsSyxFQUFPO0FBQ1YsVUFBSSxLQUFLbkgsT0FBVCxFQUFrQjtBQUNkLFlBQUkySCxXQUFXLEdBQUdDLDZEQUFVLENBQUMsS0FBS3BCLE9BQU4sQ0FBNUI7QUFDQSxZQUFJcUIsUUFBUSxHQUFHN00sQ0FBQyxDQUFDLGVBQUQsRUFBa0I7QUFBRSxrQkFBUTJNO0FBQVYsU0FBbEIsQ0FBaEI7QUFDQSxhQUFLMU0sSUFBTCxDQUFVdU0sTUFBVixDQUFpQkssUUFBakI7QUFDQVYsYUFBSyxDQUFDSyxNQUFOLENBQWEsS0FBS3ZNLElBQWxCO0FBQ0EsYUFBS0EsSUFBTCxDQUFVNk0sT0FBVjtBQUNIO0FBQ0o7Ozs7RUFkeUJ2QixXOztJQWlCeEJ3QixnQjs7Ozs7QUFFRiw0QkFBWXRELElBQVosRUFBa0IrQixPQUFsQixFQUEyQjtBQUFBOztBQUFBLHlGQUNqQi9CLElBRGlCLEVBQ1htQixlQUFlLENBQUNRLEtBREwsRUFDWUksT0FEWjtBQUUxQjs7OzsyQkFFTVcsSyxFQUFPO0FBQ1YsVUFBSSxLQUFLbkgsT0FBVCxFQUFrQjtBQUNkLFlBQUkySCxXQUFXLEdBQUdDLDZEQUFVLENBQUMsS0FBS3BCLE9BQU4sQ0FBNUI7QUFDQSxZQUFJcUIsUUFBUSxHQUFHN00sQ0FBQyxDQUFDLGVBQUQsRUFBa0I7QUFBRSxrQkFBUTJNO0FBQVYsU0FBbEIsQ0FBaEI7QUFDQSxhQUFLMU0sSUFBTCxDQUFVdU0sTUFBVixDQUFpQkssUUFBakI7QUFDQVYsYUFBSyxDQUFDSyxNQUFOLENBQWEsS0FBS3ZNLElBQWxCO0FBQ0EsYUFBS0EsSUFBTCxDQUFVNk0sT0FBVjtBQUNIO0FBQ0o7Ozs7RUFkMEJ2QixXOztJQWlCekJ5QixnQjs7Ozs7QUFDRiw0QkFBWXZELElBQVosRUFBa0J3RCxhQUFsQixFQUFpQztBQUFBOztBQUFBOztBQUM3QiwyRkFBTXhELElBQU4sRUFBWW1CLGVBQWUsQ0FBQ1MsS0FBNUIsRUFBbUM0QixhQUFuQztBQUNBLFdBQUtqSSxPQUFMLEdBQWUsSUFBZjtBQUY2QjtBQUdoQztBQUVEOzs7Ozs7OzsyQkFJT21ILEssRUFBTztBQUNWO0FBQ0EsVUFBSSxLQUFLbkgsT0FBVCxFQUFrQjtBQUNkO0FBQ0EsWUFBSWtJLFNBQVMsR0FBR2xOLENBQUMsQ0FBQyx1QkFBRCxDQUFqQixDQUZjLENBR2Q7O0FBQ0EsWUFBSW1OLFFBQVEsR0FBR25OLENBQUMsQ0FBQyxtQkFBRCxFQUFzQjtBQUFDLGtCQUFRO0FBQVQsU0FBdEIsQ0FBaEIsQ0FKYyxDQUtkOztBQUNBLFlBQUlvTixVQUFVLEdBQUdwTixDQUFDLENBQUMsYUFBRCxFQUFnQjtBQUFDLG1CQUFTO0FBQVYsU0FBaEIsQ0FBbEI7QUFDQW9OLGtCQUFVLENBQUNaLE1BQVgsQ0FBa0JVLFNBQWxCO0FBQ0FFLGtCQUFVLENBQUNaLE1BQVgsQ0FBa0JXLFFBQWxCLEVBUmMsQ0FTZDs7QUFDQSxZQUFJRSxRQUFRLEdBQUdyTixDQUFDLENBQUMsYUFBRCxDQUFoQjs7QUFDQSxZQUFJLEtBQUt3TCxPQUFMLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3ZCLGNBQUltQixXQUFXLEdBQUdDLDZEQUFVLENBQUMsS0FBS3BCLE9BQU4sQ0FBNUI7QUFDQSxjQUFJOEIsUUFBUSxHQUFHdE4sQ0FBQyxDQUFDLGVBQUQsRUFBbUI7QUFBQyxvQkFBUTJNO0FBQVQsV0FBbkIsQ0FBaEI7QUFDQVUsa0JBQVEsQ0FBQ2IsTUFBVCxDQUFnQmMsUUFBaEI7QUFDSDs7QUFDREQsZ0JBQVEsQ0FBQ2IsTUFBVCxDQUFnQnhNLENBQUMsQ0FBQyxNQUFELENBQWpCLEVBQ0t3TSxNQURMLENBQ1lZLFVBRFosRUFoQmMsQ0FrQmQ7O0FBQ0EsYUFBS25OLElBQUwsQ0FBVXVNLE1BQVYsQ0FBaUJhLFFBQWpCO0FBQ0FsQixhQUFLLENBQUNLLE1BQU4sQ0FBYSxLQUFLdk0sSUFBbEIsRUFwQmMsQ0FxQmQ7O0FBQ0EsZUFBTyxLQUFLc04sZUFBTCxDQUFxQkwsU0FBckIsRUFBZ0NDLFFBQWhDLENBQVA7QUFDSDs7QUFDRCxhQUFPLEVBQVA7QUFDSDs7O29DQUVlSyxLLEVBQU9DLE0sRUFBUTtBQUFBOztBQUMzQixVQUFJQyxjQUFKO0FBQ0EsVUFBSUMsZ0JBQWdCLEdBQUcsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM1Q0gsc0JBQWMsR0FBR0csT0FBakI7QUFDSCxPQUZzQixDQUF2Qjs7QUFHQSxVQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ25CSixzQkFBYyxDQUFDRixLQUFLLENBQUNPLEdBQU4sRUFBRCxDQUFkO0FBQ0FQLGFBQUssQ0FBQ1EsSUFBTixDQUFXLFVBQVgsRUFBdUIsSUFBdkI7QUFDQVAsY0FBTSxDQUFDTyxJQUFQLENBQVksVUFBWixFQUF3QixJQUF4Qjs7QUFDQSxjQUFJLENBQUMvTixJQUFMLENBQVU2TSxPQUFWO0FBQ0gsT0FMRDs7QUFNQVcsWUFBTSxDQUFDUSxLQUFQLENBQWFILFVBQWI7QUFDQU4sV0FBSyxDQUFDVSxLQUFOLENBQVksVUFBQ0MsQ0FBRCxFQUFPO0FBQ2YsWUFBSUEsQ0FBQyxDQUFDQyxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7QUFDbEJOLG9CQUFVO0FBQ2I7QUFDSixPQUpEO0FBS0FOLFdBQUssQ0FBQ2EsS0FBTjtBQUNBLGFBQU9WLGdCQUFQO0FBQ0g7Ozs7RUExRDBCcEMsVzs7SUE2RHpCK0MsbUI7Ozs7O0FBQ0YsK0JBQVk3RSxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsNEZBQ1JBLElBRFEsRUFDRixXQURFO0FBRWpCOzs7RUFINkJ1RCxnQjs7SUFNNUJ1Qix3Qjs7Ozs7QUFDRixvQ0FBWTlFLElBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCxtR0FBTUEsSUFBTixFQUFZbUIsZUFBZSxDQUFDTyxVQUE1Qjs7QUFDQSxXQUFLbEwsSUFBTCxDQUFVdU0sTUFBVixDQUFpQnhNLENBQUMsQ0FBQ3lLLGVBQUQsQ0FBbEI7O0FBQ0EsV0FBS3hLLElBQUwsQ0FBVWdPLEtBQVYsQ0FBZ0IsWUFBTTtBQUNsQixhQUFLeEUsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1KLEVBQWhCLENBQW1CMEcsT0FBbkIsQ0FBMkJDLFFBQTNCOztBQUNBO0FBQ0gsS0FIRDs7QUFIYztBQU9qQjs7OzsyQkFFTW1ELEssRUFBTztBQUNWQSxXQUFLLENBQUNLLE1BQU4sQ0FBYSxLQUFLdk0sSUFBbEI7QUFDSDs7OztFQVprQ3NMLFc7O0FBZWhDLElBQU10QixjQUFiO0FBQUE7QUFBQTtBQUVJOzs7Ozs7OztBQVFBLDBCQUFhUixJQUFiLEVBQW1CK0UsR0FBbkIsRUFBd0I7QUFBQTs7QUFDcEIsU0FBSy9FLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUsrRSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxVQUFMLEdBQWtCRCxHQUFHLENBQUMxRSxJQUFKLENBQVMsa0JBQVQsQ0FBbEI7QUFFQSxTQUFLNEUsYUFBTCxHQUFxQixHQUFyQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsR0FBdEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEtBQUtILFVBQUwsQ0FBZ0JJLE1BQWhCLEVBQXRCLENBUG9CLENBTzRCOztBQUNoRCxTQUFLcEYsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQWhCLENBQXdCVyxxQkFBeEIsQ0FBOEMsS0FBS3lTLGNBQW5EO0FBRUEsU0FBS3JRLE1BQUwsR0FBYyxLQUFLa0wsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCRSxNQUF4QztBQUNBLFNBQUt4RCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBSytULEtBQUwsR0Fab0IsQ0FjcEI7QUFDSDs7QUF6Qkw7QUFBQTs7QUEyQkk7Ozs7QUEzQkosNEJBK0JZO0FBQ0osV0FBS3ZRLE1BQUwsQ0FBWXdRLFNBQVo7QUFFQSxXQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUtSLFVBQUwsQ0FBZ0JTLEtBQWhCLEdBTEksQ0FNSjs7QUFDQSxVQUFJLEtBQUt6RixJQUFMLENBQVV2USxLQUFWLENBQWdCc0MsT0FBaEIsQ0FBd0JXLHFCQUF4QixPQUFvRCxLQUFLc1MsVUFBTCxDQUFnQkksTUFBaEIsRUFBeEQsRUFBa0Y7QUFDOUUsYUFBS0osVUFBTCxDQUFnQkksTUFBaEIsQ0FBdUIsS0FBS0QsY0FBNUI7QUFDQSxhQUFLbkYsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQWhCLENBQXdCVyxxQkFBeEIsQ0FBOEMsS0FBS3NTLFVBQUwsQ0FBZ0JJLE1BQWhCLEVBQTlDO0FBQ0g7O0FBRUQsV0FBS00sVUFBTCxHQUFrQixJQUFsQjtBQUNBekQsUUFBRSxDQUFDMEQsY0FBSCxHQUFvQjtBQUNoQmhHLGNBQU0sRUFBRSxLQUFLaUcsYUFBTCxDQUFtQjFJLElBQW5CLENBQXdCLElBQXhCLENBRFE7QUFFaEIySSxhQUFLLEVBQUUsS0FBS0MsUUFBTCxFQUZTO0FBR2hCVixjQUFNLEVBQUUsS0FBS1csU0FBTCxFQUhRO0FBSWhCQyxjQUFNLEVBQUUsS0FBS0MsU0FBTCxDQUFlL0ksSUFBZixDQUFvQixJQUFwQjtBQUpRLE9BQXBCO0FBTUg7QUFsREw7QUFBQTtBQUFBLDhCQW9EY3BOLElBcERkLEVBb0RvQjtBQUNaLGFBQU9BLElBQVA7QUFDSDtBQXRETDtBQUFBO0FBQUEsb0NBd0RvQjtBQUNaLFVBQUksS0FBSzRWLFVBQUwsS0FBb0IsSUFBeEIsRUFBOEI7QUFDMUIsYUFBS0EsVUFBTCxHQUFrQixJQUFJbEQsaUJBQUosQ0FBc0IsS0FBS3hDLElBQTNCLENBQWxCO0FBQ0EsYUFBSzBGLFVBQUwsQ0FBZ0JRLE1BQWhCLENBQXVCLEtBQUtsQixVQUE1QixFQUYwQixDQUcxQjs7QUFDQSxZQUFJLEtBQUtoRixJQUFMLENBQVV2USxLQUFWLENBQWdCc0MsT0FBaEIsQ0FBd0JXLHFCQUF4QixPQUFvRCxLQUFLc1MsVUFBTCxDQUFnQkksTUFBaEIsRUFBeEQsRUFBa0Y7QUFDOUUsY0FBSWUsdUJBQXVCLEdBQUcsS0FBS25CLFVBQUwsQ0FBZ0JhLEtBQWhCLEVBQTlCO0FBQ0EsZUFBS2IsVUFBTCxDQUFnQkksTUFBaEIsQ0FBdUJlLHVCQUF2QjtBQUNBLGVBQUtuRyxJQUFMLENBQVV2USxLQUFWLENBQWdCc0MsT0FBaEIsQ0FBd0JXLHFCQUF4QixDQUE4QyxLQUFLc1MsVUFBTCxDQUFnQkksTUFBaEIsRUFBOUM7QUFDQW5ELFlBQUUsQ0FBQzBELGNBQUgsQ0FBa0JQLE1BQWxCLEdBQTJCZSx1QkFBdUIsR0FBQyxFQUFuRDtBQUNIO0FBQ0o7O0FBQ0QsYUFBTyxLQUFLVCxVQUFMLENBQWdCbFAsSUFBaEIsQ0FBcUIsQ0FBckIsQ0FBUDtBQUNIO0FBckVMO0FBQUE7QUFBQSxvQ0F1RW9CO0FBQ1osVUFBSSxLQUFLd0osSUFBTCxDQUFVdlEsS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCaUQsUUFBM0IsQ0FBb0M4VSxnQkFBcEMsRUFBSixFQUE0RDtBQUN4RCxZQUFJQyxNQUFNLEdBQUcsS0FBS1gsVUFBTCxDQUFnQmxQLElBQWhCLENBQXFCNkosSUFBckIsQ0FBMEIsUUFBMUIsRUFBb0NoRixJQUFwQyxHQUEyQyxDQUEzQyxDQUFiO0FBQ0EsWUFBSWlMLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQSxZQUFJQyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFWO0FBQ0EsWUFBSUMsT0FBTyxHQUFHTCxNQUFNLENBQUNNLFNBQVAsQ0FBaUIsV0FBakIsQ0FBZDtBQUNBLGFBQUszRyxJQUFMLENBQVV0SixVQUFWLENBQXFCQyxNQUFyQixDQUE0QjFDLFNBQTVCLENBQXNDLGVBQXRDLEVBQXVEeVMsT0FBdkQ7QUFDSDtBQUNKLEtBL0VMLENBaUZJOztBQWpGSjtBQUFBO0FBQUEsZ0NBa0ZnQjtBQUNSLGFBQU8sSUFBUDtBQUNIO0FBcEZMO0FBQUE7QUFBQSwrQkFzRmU7QUFDUCxhQUFPMUwsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS2dLLGFBQWQsRUFBNkIsS0FBS0QsVUFBTCxDQUFnQmEsS0FBaEIsS0FBd0IsRUFBckQsQ0FBUDtBQUNIO0FBeEZMO0FBQUE7QUFBQSxnQ0EwRmdCO0FBQ1IsYUFBTzdLLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtpSyxjQUFkLEVBQThCLEtBQUtGLFVBQUwsQ0FBZ0JJLE1BQWhCLEtBQXlCLEVBQXZELENBQVA7QUFDSDtBQTVGTDtBQUFBO0FBQUEsOEJBOEZjO0FBQ04sYUFBTyxLQUFLcEYsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQWhCLENBQXdCSSxXQUF4QixFQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7QUFsR0o7QUFBQTtBQUFBLGdDQXlHZ0J3SSxJQXpHaEIsRUF5R3NCaU0sSUF6R3RCLEVBeUc0QjtBQUNwQixXQUFLNUIsVUFBTCxDQUFnQjNFLElBQWhCLENBQXFCLHlCQUFyQixFQUFnRHdHLElBQWhELENBQXFELFlBQVc7QUFDNUQsWUFBSXRRLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVRLElBQVIsQ0FBYSxXQUFiLEtBQTZCbk0sSUFBakMsRUFBdUM7QUFDbkNwRSxXQUFDLENBQUMsSUFBRCxDQUFELENBQVF3USxJQUFSO0FBQ0gsU0FGRCxNQUVPO0FBQ0h4USxXQUFDLENBQUMsSUFBRCxDQUFELENBQVF5USxJQUFSO0FBQ0g7QUFDSixPQU5EO0FBT0g7QUFqSEw7QUFBQTs7QUFtSEk7Ozs7QUFuSEosMEJBdUhVQyxRQXZIVixFQXVIb0I7QUFDWjtBQUNBO0FBQ0EsVUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDWDtBQUNIOztBQUNELFVBQUlDLEtBQUssR0FBRyxLQUFaOztBQUNBLFVBQUlELFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkYsUUFBUSxDQUFDcEwsTUFBVCxHQUFnQixDQUFoQyxNQUF1QyxJQUEzQyxFQUFpRDtBQUM3Q3FMLGFBQUssR0FBRyxJQUFSO0FBQ0g7O0FBQ0QsVUFBSUUsVUFBVSxHQUFHSCxRQUFRLENBQUNJLEtBQVQsQ0FBZSxJQUFmLENBQWpCOztBQUNBLFVBQUksS0FBSzlCLFVBQUwsS0FBb0IsSUFBeEIsRUFBOEI7QUFDMUIsYUFBS0EsVUFBTCxHQUFrQixJQUFJdEMsZUFBSixDQUFvQixLQUFLakQsSUFBekIsRUFBK0JtQixlQUFlLENBQUNDLElBQS9DLEVBQXFEZ0csVUFBVSxDQUFDLENBQUQsQ0FBL0QsQ0FBbEI7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFLN0IsVUFBTCxDQUFnQitCLFVBQWhCLENBQTJCRixVQUFVLENBQUMsQ0FBRCxDQUFyQztBQUNIOztBQUNELFdBQUssSUFBSUcsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFHSCxVQUFVLENBQUN2TCxNQUFYLEdBQWtCLENBQXBDLEVBQXVDMEwsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxhQUFLelMsTUFBTCxDQUFZMFMsSUFBWixDQUFpQixLQUFLakMsVUFBdEI7QUFDQSxhQUFLQSxVQUFMLENBQWdCVyxNQUFoQixDQUF1QixLQUFLbEIsVUFBNUI7QUFDQSxhQUFLTyxVQUFMLEdBQWtCLElBQUl0QyxlQUFKLENBQW9CLEtBQUtqRCxJQUF6QixFQUErQm1CLGVBQWUsQ0FBQ0MsSUFBL0MsRUFBcURnRyxVQUFVLENBQUNHLENBQUQsQ0FBL0QsQ0FBbEI7QUFDSDs7QUFDRCxVQUFJTCxLQUFKLEVBQVc7QUFDUCxhQUFLcFMsTUFBTCxDQUFZMFMsSUFBWixDQUFpQixLQUFLakMsVUFBdEI7QUFDQSxhQUFLQSxVQUFMLENBQWdCVyxNQUFoQixDQUF1QixLQUFLbEIsVUFBNUI7QUFDQSxhQUFLTyxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7QUFDSjtBQWpKTDtBQUFBO0FBQUEseUJBb0pTa0MsS0FwSlQsRUFvSmdCO0FBQ1IsV0FBS2pDLFVBQUwsR0FBa0IsSUFBSXhDLGVBQUosQ0FBb0IsS0FBS2hELElBQXpCLEVBQStCeUgsS0FBL0IsQ0FBbEI7QUFDQSxXQUFLakMsVUFBTCxDQUFnQlUsTUFBaEIsQ0FBdUIsS0FBS2xCLFVBQTVCO0FBQ0EsYUFBTyxLQUFLUSxVQUFaO0FBQ0g7QUF4Skw7QUFBQTtBQUFBLGtDQTBKa0JrQyxTQTFKbEIsRUEwSjZCO0FBQ3JCLFdBQUtDLFdBQUwsR0FBbUIsSUFBSTdFLGdCQUFKLENBQXFCLEtBQUs5QyxJQUExQixFQUFnQzBILFNBQVMsQ0FBQ0UsS0FBMUMsQ0FBbkI7QUFDQSxXQUFLRCxXQUFMLENBQWlCekIsTUFBakIsQ0FBd0IsS0FBS2xCLFVBQTdCO0FBQ0EsYUFBTyxLQUFLMkMsV0FBWjtBQUNIO0FBOUpMO0FBQUE7QUFBQSwrQkFnS2VFLEtBaEtmLEVBZ0tzQjtBQUNkLFVBQUlDLFlBQVksR0FBRyxJQUFJeEUsZ0JBQUosQ0FBcUIsS0FBS3RELElBQTFCLEVBQWdDNkgsS0FBaEMsQ0FBbkI7QUFDQUMsa0JBQVksQ0FBQzVCLE1BQWIsQ0FBb0IsS0FBS2xCLFVBQXpCO0FBQ0EsYUFBTzhDLFlBQVA7QUFDSDtBQUVEOzs7Ozs7QUF0S0o7QUFBQTtBQUFBLDBCQTJLVXRFLGFBM0tWLEVBMkt5QjtBQUNqQixXQUFLdUUsV0FBTCxHQUFtQixJQUFJeEUsZ0JBQUosQ0FBcUIsS0FBS3ZELElBQTFCLEVBQWdDd0QsYUFBaEMsQ0FBbkI7QUFDQSxhQUFPLEtBQUt1RSxXQUFMLENBQWlCN0IsTUFBakIsQ0FBd0IsS0FBS2xCLFVBQTdCLENBQVA7QUFDSDtBQTlLTDtBQUFBO0FBQUEsK0JBaUxlO0FBQ1AsV0FBSytDLFdBQUwsR0FBbUIsSUFBSWxELG1CQUFKLENBQXdCLEtBQUs3RSxJQUE3QixDQUFuQjtBQUNBLGFBQU8sS0FBSytILFdBQUwsQ0FBaUI3QixNQUFqQixDQUF3QixLQUFLbEIsVUFBN0IsQ0FBUDtBQUNIO0FBcExMO0FBQUE7QUFBQSxnQ0FzTGdCO0FBQ1IsVUFBSWdELGVBQWUsR0FBRyxJQUFJbEQsd0JBQUosQ0FBNkIsS0FBSzlFLElBQWxDLENBQXRCO0FBQ0EsYUFBT2dJLGVBQWUsQ0FBQzlCLE1BQWhCLENBQXVCLEtBQUtsQixVQUE1QixDQUFQO0FBQ0g7QUFFRDs7Ozs7QUEzTEo7QUFBQTtBQUFBLHFDQStMcUI7QUFDYixXQUFLRCxHQUFMLENBQVNrRCxPQUFULENBQWlCO0FBQ2JDLGlCQUFTLEVBQUUsS0FBS25ELEdBQUwsQ0FBU1IsSUFBVCxDQUFjLGNBQWQsSUFBZ0MsS0FBS1EsR0FBTCxDQUFTUixJQUFULENBQWMsY0FBZDtBQUQ5QixPQUFqQixFQUVHLEdBRkg7QUFHSDtBQW5NTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7QUM3T0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUVPLElBQUk0RCxrQkFBa0IsR0FBRyxFQUF6QjtBQUNBLElBQUlDLDJCQUEyQixHQUFHLEVBQWxDO0FBRVA7Ozs7Ozs7QUFNQSxJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVVDLEdBQVYsRUFBZTtBQUNqQ0EsS0FBRyxDQUFDN0YsUUFBSixDQUFhLFFBQWIsRUFDS0EsUUFETCxDQUNjLGFBRGQsRUFFSzhGLFdBRkwsQ0FFaUIsYUFGakIsRUFHS2hFLElBSEwsQ0FHVSxVQUhWLEVBR3NCLElBSHRCLEVBSUt0RSxJQUpMLENBSVUsUUFKVixFQUtLNkcsSUFMTCxDQUtVLGNBTFYsRUFLMEIsTUFMMUI7QUFNSCxDQVBEO0FBVUE7Ozs7Ozs7Ozs7O0FBU08sU0FBU2hHLGFBQVQsQ0FBdUJkLElBQXZCLEVBQTZCO0FBQ2hDLE9BQUtBLElBQUwsR0FBWUEsSUFBWjtBQUVBLE9BQUt3SSxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsT0FBSy9QLFlBQUw7QUFDSDs7QUFFRHFJLGFBQWEsQ0FBQ1gsU0FBZCxDQUF3QjFILFlBQXhCLEdBQXVDLFVBQVVnUSxRQUFWLEVBQW9CO0FBQUE7O0FBQ3ZEO0FBQ0EsTUFBSWhaLEtBQUssR0FBRyxLQUFLdVEsSUFBTCxDQUFVdlEsS0FBdEI7QUFBQSxNQUNJaVosTUFBTSxHQUFHLEtBQUsxSSxJQUFMLENBQVV0SixVQUFWLENBQXFCZ0gsWUFEbEM7QUFBQSxNQUVJL0csTUFBTSxHQUFHLEtBQUtxSixJQUFMLENBQVV0SixVQUFWLENBQXFCQyxNQUZsQztBQUdBLE1BQUlnUyxPQUFPLEdBQUcsRUFBZDtBQUNBbFosT0FBSyxDQUFDcEIsVUFBTixDQUFpQmlELFFBQWpCLENBQTBCc1gsUUFBMUIsR0FBcUN2QixLQUFyQyxDQUEyQyxHQUEzQyxFQUFnRHdCLE9BQWhELENBQXdELFVBQUMvWSxJQUFELEVBQVU7QUFDOUQsUUFBSUEsSUFBSSxJQUFJLEVBQUVBLElBQUksSUFBSWdaLHNCQUFzQixDQUFDQyxXQUFqQyxDQUFaLEVBQTJEO0FBQ3ZESixhQUFPLENBQUNuQixJQUFSLENBQWF3QixLQUFiLENBQW1CTCxPQUFuQixFQUE0QixLQUFJLENBQUN0TCxhQUFMLENBQW1CNEwsdURBQUksQ0FBQ25aLElBQUQsQ0FBdkIsRUFBK0JBLElBQS9CLEVBQXFDMlksUUFBckMsQ0FBNUI7QUFDSDtBQUNKLEdBSkQsRUFOdUQsQ0FZdkQ7O0FBQ0FsUyxHQUFDLENBQUMyUyxJQUFGLENBQU9GLEtBQVAsQ0FBYXpTLENBQWIsRUFBZ0JvUyxPQUFoQixFQUF5QlEsSUFBekIsQ0FBOEIsWUFBWTtBQUN0QztBQUNBVCxVQUFNLENBQUMvSyxFQUFQLENBQVV5TCxpQkFBVjtBQUNBVixVQUFNLENBQUMvSyxFQUFQLENBQVUwTCxXQUFWLENBQXNCQyxhQUF0QjtBQUNILEdBSkQsRUFJR0MsSUFKSCxDQUlRLFVBQVU3RSxDQUFWLEVBQWE7QUFDakJ2TixXQUFPLENBQUNDLEdBQVIsQ0FBWW9TLFNBQVo7QUFDQXJTLFdBQU8sQ0FBQ3NTLEtBQVIsQ0FBYy9FLENBQWQ7QUFDSCxHQVBELEVBT0dnRixNQVBILENBT1UsWUFBWTtBQUNsQi9TLFVBQU0sQ0FBQ2dULHFCQUFQO0FBQ0gsR0FURDtBQVVILENBdkJEO0FBeUJBOzs7Ozs7Ozs7Ozs7OztBQVlBN0ksYUFBYSxDQUFDWCxTQUFkLENBQXdCOUMsYUFBeEIsR0FBd0MsVUFBVTRMLElBQVYsRUFBZ0JuWixJQUFoQixFQUFzQjtBQUFBOztBQUMxRCxNQUFJOFosY0FBYyxHQUFHLEVBQXJCOztBQUNBLE1BQUksS0FBSzVKLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtSixFQUFoQixDQUFtQmpDLE1BQW5CLENBQTBCd0gsbUJBQTFCLENBQThDLGdCQUE5QyxDQUFKLEVBQXFFO0FBQ2pFLFFBQUkwTCxJQUFJLEdBQUcsS0FBSzdKLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JyQixhQUFoQixDQUE4QitILElBQTlCLENBQW1DMlQsY0FBbkMsR0FBb0QsVUFBcEQsR0FBaUViLElBQWpFLEdBQXdFLEdBQXhFLEdBQThFQSxJQUF6RjtBQUNBLFNBQUtqSixJQUFMLENBQVV2USxLQUFWLENBQWdCc0MsT0FBaEIsQ0FBd0JpQixlQUF4QixDQUF3Q3dVLElBQXhDLENBQTZDMVgsSUFBN0MsRUFGaUUsQ0FHakU7O0FBQ0EsUUFBSWlhLFVBQVUsR0FBR3hULENBQUMsQ0FBQ3lULFNBQUYsQ0FBWUgsSUFBSSxHQUFHLGFBQW5CLENBQWpCLENBSmlFLENBS2pFOztBQUNBLFFBQUlJLFdBQVcsR0FBRzFULENBQUMsQ0FBQ3lULFNBQUYsQ0FBWUgsSUFBSSxHQUFHLGNBQW5CLENBQWxCO0FBQ0EsUUFBSUssU0FBUyxHQUFHM1QsQ0FBQyxDQUFDaEgsR0FBRixDQUFNc2EsSUFBSSxHQUFHLFlBQWIsRUFBMkIsVUFBVTNTLElBQVYsRUFBZ0I7QUFDdkQrSyxRQUFFLENBQUNrSSxZQUFILENBQWdCLE9BQWhCLEVBQXlCLGFBQWFsQixJQUFiLEdBQW9CLGNBQTdDLElBQStEL1IsSUFBL0Q7QUFDSCxLQUZlLENBQWhCO0FBR0EsUUFBSWtULFVBQVUsR0FBRzdULENBQUMsQ0FBQ3lULFNBQUYsQ0FBWUgsSUFBSSxHQUFHLGFBQW5CLENBQWpCLENBVmlFLENBV2pFOztBQUNBdFQsS0FBQyxDQUFDMlMsSUFBRixDQUFPYSxVQUFQLEVBQW1CRyxTQUFuQixFQUE4QkUsVUFBOUIsRUFBMENqQixJQUExQyxDQUErQyxZQUFNO0FBQ2pELFlBQUksQ0FBQ1gsY0FBTCxDQUFvQmhCLElBQXBCLENBQXlCeUIsSUFBekI7O0FBQ0EsWUFBSSxDQUFDakosSUFBTCxDQUFVdEosVUFBVixDQUFxQmdILFlBQXJCLENBQWtDQyxFQUFsQyxDQUFxQ3lMLGlCQUFyQzs7QUFDQSxZQUFJLENBQUNwSixJQUFMLENBQVV0SixVQUFWLENBQXFCZ0gsWUFBckIsQ0FBa0NDLEVBQWxDLENBQXFDMEwsV0FBckMsQ0FBaURDLGFBQWpEOztBQUNBLFlBQUksQ0FBQ3RKLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JzQyxPQUFoQixDQUF3QmlCLGVBQXhCLENBQXdDdVAsTUFBeEMsQ0FBK0N6UyxJQUEvQztBQUNILEtBTEQ7QUFNQThaLGtCQUFjLENBQUNwQyxJQUFmLENBQW9CdUMsVUFBcEIsRUFBZ0NHLFNBQWhDLEVBQTJDRSxVQUEzQztBQUNIOztBQUNELFNBQU9SLGNBQVA7QUFDSCxDQXZCRDtBQXlCQTs7Ozs7Ozs7O0FBT0E5SSxhQUFhLENBQUNYLFNBQWQsQ0FBd0I3QyxVQUF4QixHQUFxQyxZQUFZO0FBQUE7O0FBQzdDLE1BQUksS0FBSzBDLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtSixFQUFoQixDQUFtQmpDLE1BQW5CLENBQTBCd0gsbUJBQTFCLENBQThDLGdCQUE5QyxDQUFKLEVBQXFFO0FBQ2pFLFFBQUkwTCxJQUFJLEdBQUcsS0FBSzdKLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JyQixhQUFoQixDQUE4QitILElBQTlCLENBQW1DMlQsY0FBOUM7QUFDQXZULEtBQUMsQ0FBQzhULE9BQUYsQ0FBVVIsSUFBSSxHQUFHLFlBQWpCLEVBQWdDLFVBQUMzUyxJQUFELEVBQVU7QUFDdEM7QUFDQSxVQUFJMFIsUUFBUSxHQUFHMVIsSUFBSSxDQUFDb1QsT0FBcEI7QUFDQSxVQUFJQyxhQUFhLEdBQUdWLElBQUksR0FBQyxvQkFBekI7QUFDQSxVQUFJNWEsS0FBSyxHQUFHc0gsQ0FBQyxxREFBOENnVSxhQUE5QyxpQ0FBYjtBQUNBLFVBQUlDLElBQUksR0FBR2pVLENBQUMsQ0FBQyxpQkFBRCxFQUFvQjtBQUFDLGlCQUFTO0FBQVYsT0FBcEIsQ0FBWjtBQUNBa1UsWUFBTSxDQUFDQyxJQUFQLENBQVk5QixRQUFaLEVBQXNCK0IsSUFBdEIsR0FBNkJyTyxHQUE3QixDQUFpQyxVQUFDeE0sSUFBRCxFQUFVO0FBQ3ZDLFlBQUk4YSxXQUFXLEdBQUczQix1REFBSSxDQUFDTCxRQUFRLENBQUM5WSxJQUFELENBQVIsQ0FBZUEsSUFBaEIsQ0FBdEI7QUFDQSxZQUFJK2EsU0FBUyxHQUFHL2EsSUFBaEI7QUFDQSxZQUFJd1ksR0FBRyxHQUFHL1IsQ0FBQyxDQUFDLDBIQUFELENBQVg7QUFDQSxZQUFJdVUsTUFBTSxHQUFHakIsSUFBSSxHQUFDLHFCQUFMLEdBQTJCL1osSUFBM0IsR0FBZ0MsV0FBN0M7O0FBQ0EsWUFBSSxNQUFJLENBQUMwWSxjQUFMLENBQW9CM0wsT0FBcEIsQ0FBNEIrTixXQUE1QixJQUEyQyxDQUFDLENBQWhELEVBQW1EO0FBQy9DdkMseUJBQWUsQ0FBQ0MsR0FBRCxDQUFmO0FBQ0gsU0FGRCxNQUVPO0FBQ0hBLGFBQUcsQ0FBQzlELEtBQUosQ0FBVyxZQUFNO0FBQ2Isa0JBQUksQ0FBQ25ILGFBQUwsQ0FBbUJ1TixXQUFuQixFQUFnQyxZQUFZaEMsUUFBUSxDQUFDOVksSUFBRCxDQUFSLENBQWVpYixLQUEzRDs7QUFDQTFDLDJCQUFlLENBQUNDLEdBQUQsQ0FBZjtBQUNILFdBSEQ7QUFJSCxTQVpzQyxDQWF2Qzs7O0FBQ0EvUixTQUFDLENBQUMsV0FBRCxDQUFELENBQ0k7QUFESixTQUVLd00sTUFGTCxDQUVZeE0sQ0FBQyxDQUFDLFNBQVNxUyxRQUFRLENBQUM5WSxJQUFELENBQVIsQ0FBZWliLEtBQXhCLEdBQWdDLE9BQWpDLENBRmIsRUFHS2hJLE1BSEwsQ0FHWXhNLENBQUMsQ0FBQyxTQUFTcVMsUUFBUSxDQUFDOVksSUFBRCxDQUFSLENBQWVrYixRQUF4QixHQUFtQyxPQUFwQyxDQUhiLEVBSUtqSSxNQUpMLENBSVl4TSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWV3TSxNQUFmLENBQXNCdUYsR0FBdEIsQ0FKWixFQUtLMkMsUUFMTCxDQUtjVCxJQUxkO0FBTUgsT0FwQkQ7QUFxQkFBLFVBQUksQ0FBQ1MsUUFBTCxDQUFjaGMsS0FBZCxFQTNCc0MsQ0E0QnRDOztBQUNBLFlBQUksQ0FBQytRLElBQUwsQ0FBVXRKLFVBQVYsQ0FBcUJrSSxNQUFyQixDQUE0Qm1JLElBQTVCLENBQWlDLGlCQUFqQyxFQUFvRDlYLEtBQXBELEVBQTJELElBQTNEO0FBQ0gsS0E5QkQ7QUErQkg7QUFDSixDQW5DRCxDOzs7Ozs7Ozs7Ozs7QUM1R0E7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZDs7Ozs7Ozs7Ozs7O0FDTkw7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZDs7Ozs7Ozs7Ozs7OztBQ05MO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBSWljLFdBQVcsNjlCQUFmO0FBd0JQOzs7Ozs7Ozs7Ozs7QUFXTyxTQUFTOUssYUFBVCxDQUF1QkosSUFBdkIsRUFBNkIrRSxHQUE3QixFQUFrQztBQUNyQyxPQUFLL0UsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBSytFLEdBQUwsR0FBV0EsR0FBWDtBQUVBLE9BQUtvRyxRQUFMLEdBQWdCcEcsR0FBRyxDQUFDMUUsSUFBSixDQUFTLGNBQVQsQ0FBaEI7QUFDQSxPQUFLK0ssT0FBTCxHQUFlckcsR0FBRyxDQUFDMUUsSUFBSixDQUFTLGFBQVQsQ0FBZjtBQUNIO0FBRUQ7Ozs7Ozs7OztBQVFBRCxhQUFhLENBQUNELFNBQWQsQ0FBd0I0RyxJQUF4QixHQUErQixVQUFVZ0UsS0FBVixFQUFpQlAsSUFBakIsRUFBdUJhLE9BQXZCLEVBQWdDO0FBQzNELE9BQUtGLFFBQUwsQ0FBYzNVLElBQWQsQ0FBbUJ1VSxLQUFuQjtBQUNBLE9BQUtLLE9BQUwsQ0FBYTVVLElBQWIsQ0FBa0JnVSxJQUFsQjtBQUNBLE9BQUt6RixHQUFMLENBQVN1RyxLQUFULENBQWUsTUFBZjtBQUNBLE9BQUt2RyxHQUFMLENBQVN3RyxTQUFULENBQW1CO0FBQ2YsY0FBVTtBQURLLEdBQW5CO0FBSUEsT0FBS3hHLEdBQUwsQ0FBU3lHLEVBQVQsQ0FBWSxpQkFBWixFQUErQixVQUFVOUcsQ0FBVixFQUFhO0FBQ3hDLFFBQUkyRyxPQUFPLEtBQUs3YyxTQUFaLElBQXlCNmMsT0FBTyxLQUFLLElBQXpDLEVBQStDO0FBQzNDQSxhQUFPO0FBQ1Y7QUFDSixHQUpEO0FBS0gsQ0FiRDs7QUFlQWpMLGFBQWEsQ0FBQ0QsU0FBZCxDQUF3QnNMLHlCQUF4QixHQUFvRCxZQUFZO0FBQzVELE9BQUsxRSxJQUFMLENBQVUsMEJBQVY7QUFFSCxDQUhEOztBQUtBM0csYUFBYSxDQUFDRCxTQUFkLENBQXdCdUwsaUJBQXhCLEdBQTRDLFlBQVksQ0FDcEQ7QUFDSCxDQUZEOztBQUlBdEwsYUFBYSxDQUFDRCxTQUFkLENBQXdCd0wsZ0NBQXhCLEdBQTJELFlBQVk7QUFDbkUsT0FBSzVFLElBQUwsQ0FBVSxrQ0FBVjtBQUVILENBSEQ7O0FBS0EzRyxhQUFhLENBQUNELFNBQWQsQ0FBd0J0QixxQkFBeEIsR0FBZ0QsWUFBWTtBQUN4RCxPQUFLa0ksSUFBTCxDQUFVLHVCQUFWO0FBRUgsQ0FIRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFFTyxTQUFTOUosVUFBVCxDQUFvQnhOLEtBQXBCLEVBQTJCaVEsS0FBM0IsRUFBa0M7QUFDckMsTUFBSWtNLFVBQVUsR0FBRyxJQUFJQyxVQUFKLEVBQWpCO0FBQ0EsTUFBSXZRLEtBQUssR0FBR29FLEtBQUssQ0FBQ0MsTUFBTixDQUFhckUsS0FBekI7O0FBQ0FzUSxZQUFVLENBQUNFLE1BQVgsR0FBcUIsVUFBQXBILENBQUM7QUFBQSxXQUNsQmpWLEtBQUssQ0FBQ21KLEVBQU4sQ0FBU3NELE9BQVQsQ0FBaUJsRCxPQUFqQixHQUEyQmlFLFVBQTNCLENBQXNDeUgsQ0FBdEMsQ0FEa0I7QUFBQSxHQUF0Qjs7QUFHQWtILFlBQVUsQ0FBQ0csUUFBWCxHQUFzQnpRLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3hMLElBQS9CO0FBQ0E4YixZQUFVLENBQUNJLFVBQVgsQ0FBc0IxUSxLQUFLLENBQUMsQ0FBRCxDQUEzQjtBQUNBb0UsT0FBSyxDQUFDQyxNQUFOLENBQWFrSSxLQUFiLEdBQXFCLEVBQXJCO0FBQ0g7QUFFTSxTQUFTb0UsUUFBVCxDQUFrQmhNLElBQWxCLEVBQXdCO0FBQzNCLFNBQU9BLElBQUksQ0FBQ2lNLE9BQUwsQ0FBYSxhQUFiLEVBQTRCLEdBQTVCLEVBQWlDdlMsV0FBakMsRUFBUDtBQUNIO0FBRU0sU0FBU3lELFlBQVQsQ0FBc0IzTixLQUF0QixFQUE2QmlRLEtBQTdCLEVBQW9DO0FBQUEsOEJBQ0tqUSxLQUFLLENBQUNtSixFQUFOLENBQVNzRCxPQUFULENBQWlCbEQsT0FBakIsR0FBMkJvRSxZQUEzQixFQURMO0FBQUEsTUFDbEN0TixJQURrQyx5QkFDbENBLElBRGtDO0FBQUEsTUFDNUJxYyxTQUQ0Qix5QkFDNUJBLFNBRDRCO0FBQUEsTUFDakIxUCxRQURpQix5QkFDakJBLFFBRGlCO0FBQUEsTUFDUDJQLFFBRE8seUJBQ1BBLFFBRE8sRUFFdkM7OztBQUNBdGMsTUFBSSxHQUFHbWMsUUFBUSxDQUFDbmMsSUFBRCxDQUFmO0FBQ0FBLE1BQUksR0FBR0EsSUFBSSxHQUFHcWMsU0FBZCxDQUp1QyxDQUt2Qzs7QUFDQSxNQUFJRSxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTLENBQUM3UCxRQUFELENBQVQsRUFBcUI7QUFBQ3BNLFFBQUksRUFBRStiO0FBQVAsR0FBckIsQ0FBWDs7QUFDQSxNQUFJRyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGdCQUFyQixFQUF1QztBQUNuQ0YsVUFBTSxDQUFDQyxTQUFQLENBQWlCRSxVQUFqQixDQUE0QkwsSUFBNUIsRUFBa0N2YyxJQUFsQztBQUNILEdBRkQsTUFFTTtBQUNGLFFBQUk2YyxxQkFBcUIsR0FBR0osTUFBTSxDQUFDSyxRQUFQLENBQWdCQyxhQUFoQixDQUE4QixHQUE5QixDQUE1QjtBQUNBRix5QkFBcUIsQ0FBQ0csSUFBdEIsR0FBNkJQLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXQyxlQUFYLENBQTJCWCxJQUEzQixDQUE3QjtBQUNBTSx5QkFBcUIsQ0FBQ3hQLFFBQXRCLEdBQWlDck4sSUFBakM7QUFDQThjLFlBQVEsQ0FBQ3BDLElBQVQsQ0FBY3lDLFdBQWQsQ0FBMEJOLHFCQUExQjtBQUNBQSx5QkFBcUIsQ0FBQ25JLEtBQXRCO0FBQ0FvSSxZQUFRLENBQUNwQyxJQUFULENBQWMwQyxXQUFkLENBQTBCUCxxQkFBMUI7QUFDSDtBQUNKO0FBRU0sSUFBTVEsY0FBYjtBQUFBO0FBQUE7QUFDSSwwQkFBWW5OLElBQVosRUFBa0IrRSxHQUFsQixFQUF1QjtBQUFBOztBQUNuQixTQUFLL0UsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBSytFLEdBQUwsR0FBV0EsR0FBWDtBQUVBLFNBQUtwTixVQUFMLEdBQWtCcUksSUFBSSxDQUFDdEosVUFBTCxDQUFnQmlCLFVBQWxDO0FBQ0EsU0FBSzNGLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLNEosSUFBTCxHQUFZLElBQVo7QUFDSDs7QUFSTDtBQUFBO0FBQUEsaUNBVWlCO0FBQ1QsV0FBS2pFLFVBQUwsQ0FBZ0JvRSxVQUFoQixDQUEyQixLQUFLL0osUUFBaEM7QUFDQSxXQUFLZ08sSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQWhCLENBQXdCQyxRQUF4QixDQUFpQyxXQUFqQztBQUNBLFdBQUtnTyxJQUFMLENBQVV0SixVQUFWLENBQXFCd0YsT0FBckIsQ0FBNkJrUixZQUE3QixDQUEwQyxXQUExQztBQUNIO0FBZEw7QUFBQTtBQUFBLG9DQWdCb0I7QUFDWjtBQUNBLFdBQUtwTixJQUFMLENBQVV2USxLQUFWLENBQWdCc0MsT0FBaEIsQ0FBd0JDLFFBQXhCLENBQWlDLFdBQWpDO0FBQ0EsV0FBS2dPLElBQUwsQ0FBVXRKLFVBQVYsQ0FBcUJ3RixPQUFyQixDQUE2QmtSLFlBQTdCLENBQTBDLFdBQTFDO0FBQ0g7QUFwQkw7QUFBQTtBQUFBLGtDQXNCa0J4UixJQXRCbEIsRUFzQndCO0FBQ2hCLFVBQUlBLElBQUksQ0FBQzVKLFFBQUwsS0FBa0IsS0FBS0EsUUFBM0IsRUFBcUM7QUFDakM7QUFDQSxhQUFLZ08sSUFBTCxDQUFVdEosVUFBVixDQUFxQndGLE9BQXJCLENBQTZCa1IsWUFBN0IsQ0FBMEMsS0FBS3BiLFFBQS9DLEVBRmlDLENBR2pDO0FBQ0E7QUFDSDtBQUNKO0FBN0JMO0FBQUE7QUFBQSx1Q0ErQnVCO0FBQ2YsV0FBSzJGLFVBQUwsQ0FBZ0IwVixTQUFoQixDQUEwQixLQUFLcmIsUUFBL0IsRUFBeUM7QUFDckNzYixlQUFPLEVBQUUsS0FBS0MsYUFBTCxDQUFtQnJRLElBQW5CLENBQXdCLElBQXhCLENBRDRCO0FBRXJDc1EsZUFBTyxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJ2USxJQUFuQixDQUF3QixJQUF4QjtBQUY0QixPQUF6QztBQUlIO0FBcENMO0FBQUE7QUFBQSwwQkFzQ1V3USxXQXRDVixFQXNDdUJDLFNBdEN2QixFQXNDa0M7QUFDMUIsV0FBSzNiLFFBQUwsR0FBZ0IwYixXQUFoQjtBQUNBLFdBQUs5UixJQUFMLEdBQVksS0FBS2pFLFVBQUwsQ0FBZ0JpVyxPQUFoQixDQUF3QkYsV0FBeEIsQ0FBWjtBQUNBLFdBQUtHLGdCQUFMO0FBQ0g7QUFFRDs7Ozs7OztBQTVDSjtBQUFBO0FBQUEseUJBa0RTSCxXQWxEVCxFQWtEc0JDLFNBbER0QixFQWtEaUNHLFNBbERqQyxFQWtENEM7QUFDcEMsV0FBS25XLFVBQUwsQ0FBZ0JvVyxnQkFBaEIsQ0FBaUMsS0FBSy9iLFFBQXRDO0FBQ0EsV0FBSzRKLElBQUwsR0FBWSxJQUFaO0FBQ0EsV0FBSzVKLFFBQUwsR0FBZ0IsSUFBaEI7QUFDSDtBQXRETDtBQUFBO0FBQUEsK0JBd0RlME4sS0F4RGYsRUF3RHNCO0FBQ2QsVUFBSTFOLFFBQVEsR0FBRzBOLEtBQUssQ0FBQ0MsTUFBTixDQUFhb00sUUFBNUI7QUFDQSxVQUFJdFAsUUFBUSxHQUFHaUQsS0FBSyxDQUFDQyxNQUFOLENBQWFxTyxNQUE1QjtBQUNBLFdBQUtwUyxJQUFMLENBQVVxUyxNQUFWLENBQWlCeFIsUUFBakI7QUFDSDtBQTVETDtBQUFBO0FBQUEsbUNBOERtQjtBQUNYLFVBQUl6SyxRQUFRLEdBQUcyTyxnREFBTyxDQUFDdU4sYUFBUixDQUFzQixLQUFLbGMsUUFBM0IsQ0FBZjtBQUNBLGFBQU87QUFDSGxDLFlBQUksRUFBRWtDLFFBQVEsQ0FBQ2xDLElBRFo7QUFFSHFjLGlCQUFTLEVBQUVuYSxRQUFRLENBQUMzQixJQUZqQjtBQUdIb00sZ0JBQVEsRUFBRSxLQUFLYixJQUFMLENBQVVxUyxNQUFWLEVBSFA7QUFJSDdCLGdCQUFRLEVBQUU7QUFKUCxPQUFQO0FBTUg7QUF0RUw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUVBLElBQU0rQixtQkFBbUIsR0FBRyxDQUN4QixDQUFDLGNBQUQsRUFBaUIsZUFBakIsRUFBa0MsUUFBbEMsRUFBNEMsU0FBNUMsRUFBdUQsMkZBQXZELENBRHdCLEVBRXhCLENBQUMsV0FBRCxFQUFjLFlBQWQsRUFBNEI5YixvREFBWSxDQUFDQyxLQUF6QyxFQUFnREQsb0RBQWhELEVBQThELHlFQUE5RCxDQUZ3QixFQUd4QixDQUFDLFVBQUQsRUFBYSxVQUFiLEVBQXlCLEVBQXpCLEVBQTZCLFFBQTdCLEVBQXVDLDZFQUF2QyxDQUh3QixFQUl4QixDQUFDLGdCQUFELEVBQW1CLGlCQUFuQixFQUFzQyxLQUF0QyxFQUE2QyxNQUE3QyxFQUFxRCwwR0FBckQsQ0FKd0IsRUFLeEIsQ0FBQyxXQUFELEVBQWMsWUFBZCxFQUE0QixLQUE1QixFQUFtQyxNQUFuQyxFQUEyQywrREFBM0MsQ0FMd0IsRUFNeEIsQ0FBQyxpQkFBRCxFQUFvQixrQkFBcEIsRUFBd0MsS0FBeEMsRUFBK0MsTUFBL0MsRUFBdUQsNEVBQXZELENBTndCLEVBT3hCLENBQUMsYUFBRCxFQUFnQixjQUFoQixFQUFnQyxLQUFoQyxFQUF1QyxNQUF2QyxFQUErQyxxRUFBL0MsQ0FQd0IsRUFReEIsQ0FBQyxjQUFELEVBQWlCLGVBQWpCLEVBQWtDLEtBQWxDLEVBQXlDLE1BQXpDLEVBQWlELHFIQUFqRCxDQVJ3QixFQVN4QixDQUFDLGFBQUQsRUFBZ0IsVUFBaEIsRUFBNEIsS0FBNUIsRUFBbUMsTUFBbkMsRUFBMkMsa0VBQTNDLENBVHdCLEVBVXhCLENBQUMsZUFBRCxFQUFrQixZQUFsQixFQUFnQyxLQUFoQyxFQUF1QyxNQUF2QyxFQUErQyx3RkFBL0MsQ0FWd0IsRUFXeEIsQ0FBQyxpQkFBRCxFQUFvQixrQkFBcEIsRUFBd0MsS0FBeEMsRUFBK0MsTUFBL0MsRUFBdUQsNEhBQXZELENBWHdCLEVBWXhCLENBQUMsYUFBRCxFQUFnQixjQUFoQixFQUFnQyxLQUFoQyxFQUF1QyxNQUF2QyxFQUErQyw2R0FBL0MsQ0Fad0IsRUFheEI7QUFDQSxDQUFDLFdBQUQsRUFBYyxZQUFkLEVBQTRCLElBQTVCLEVBQWtDLE1BQWxDLEVBQTBDLGdFQUExQyxDQWR3QixFQWV4QixDQUFDLGtCQUFELEVBQXFCLG9CQUFyQixFQUEyQyxJQUEzQyxFQUFpRCxNQUFqRCxFQUF5RCx3SUFBekQsQ0Fmd0IsRUFnQnhCLENBQUMsYUFBRCxFQUFnQixjQUFoQixFQUFnQyxLQUFoQyxFQUF1QyxNQUF2QyxFQUErQyxpREFBL0MsQ0FoQndCLEVBaUJ4QixDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLEtBQXhCLEVBQStCLE1BQS9CLEVBQXVDLDhEQUF2QyxDQWpCd0IsRUFrQnhCLENBQUMsY0FBRCxFQUFpQixlQUFqQixFQUFrQyxLQUFsQyxFQUF5QyxNQUF6QyxFQUFpRCxtRUFBakQsQ0FsQndCLEVBbUJ4QixDQUFDLDBCQUFELEVBQTZCLDZCQUE3QixFQUE0RCxJQUE1RCxFQUFrRSxNQUFsRSxFQUEwRSxrRUFBMUUsQ0FuQndCLEVBb0J4QixDQUFDLHNCQUFELEVBQXlCLHdCQUF6QixFQUFtRCxLQUFuRCxFQUEwRCxNQUExRCxFQUFrRSxpSUFBbEUsQ0FwQndCLEVBcUJ4QixDQUFDLG9CQUFELEVBQXVCLHNCQUF2QixFQUErQyxLQUEvQyxFQUFzRCxNQUF0RCxFQUE4RCwyREFBOUQsQ0FyQndCLEVBc0J4QixDQUFDLGtCQUFELEVBQXFCLG9CQUFyQixFQUEyQyxLQUEzQyxFQUFrRCxNQUFsRCxFQUEwRCx1RUFBMUQsQ0F0QndCLENBQTVCOztBQXlCQSxTQUFTK2IsZ0JBQVQsQ0FBMEJ0ZSxJQUExQixFQUFnQztBQUM1QixPQUFLLElBQUl5WCxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUc0RyxtQkFBbUIsQ0FBQ3RTLE1BQXRDLEVBQThDMEwsQ0FBQyxFQUEvQyxFQUFtRDtBQUMvQyxRQUFJNEcsbUJBQW1CLENBQUM1RyxDQUFELENBQW5CLENBQXVCLENBQXZCLE1BQThCelgsSUFBbEMsRUFBd0M7QUFDcEMsYUFBT3FlLG1CQUFtQixDQUFDNUcsQ0FBRCxDQUFuQixDQUF1QixDQUF2QixDQUFQO0FBQ0g7QUFDSjs7QUFDRCxTQUFPLG1DQUFQO0FBQ0g7O0FBRUQsU0FBUzhHLGdCQUFULENBQTBCdmUsSUFBMUIsRUFBZ0N3ZSxJQUFoQyxFQUFzQ0MsSUFBdEMsRUFBNEM7QUFDeEMsc0tBQzRFQSxJQUQ1RSwrRkFFMkVBLElBRjNFLHdEQUdrQ0QsSUFIbEMsNEhBSTRGeGUsSUFKNUY7QUFNSDs7QUFFRCxJQUFNMGUsMkNBQTJDLEdBQUdMLG1CQUFtQixDQUNuRTtBQURtRSxDQUVsRU0sTUFGK0MsQ0FFeEMsVUFBQ0MsT0FBRDtBQUFBLFNBQWFBLE9BQU8sQ0FBQyxDQUFELENBQVAsS0FBZSxNQUE1QjtBQUFBLENBRndDLEVBRy9DcFMsR0FIK0MsQ0FHM0MsVUFBQ29TLE9BQUQsRUFBYTtBQUNkLE1BQUlDLFVBQVUsR0FBR0QsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXckgsS0FBWCxDQUFpQixHQUFqQixFQUFzQi9LLEdBQXRCLENBQTBCLFVBQUFzUyxJQUFJO0FBQUEsV0FBR0EsSUFBSSxDQUFDekgsTUFBTCxDQUFZLENBQVosRUFBZTBILFdBQWYsS0FBNkJELElBQUksQ0FBQ0UsS0FBTCxDQUFXLENBQVgsQ0FBaEM7QUFBQSxHQUE5QixFQUE4RUMsSUFBOUUsQ0FBbUYsR0FBbkYsQ0FBakI7QUFDQSx1TEFHZ0VMLE9BQU8sQ0FBQyxDQUFELENBSHZFLGdCQUcrRUMsVUFIL0UsMk5BT21GRCxPQUFPLENBQUMsQ0FBRCxDQVAxRiw4RUFRc0RBLE9BQU8sQ0FBQyxDQUFELENBUjdELDhMQWFjQSxPQUFPLENBQUMsQ0FBRCxDQWJyQjtBQWtCSCxDQXZCK0MsRUF1QjdDSyxJQXZCNkMsQ0F1QnhDLE1BdkJ3QyxDQUFwRDtBQXlCTyxJQUFNQywrQkFBK0Isd3dJQTRGdEJYLGdCQUFnQixDQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCaGMsb0RBQVksQ0FBQzRjLEtBQXBDLENBNUZNLG1DQTZGdEJaLGdCQUFnQixDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCaGMsb0RBQVksQ0FBQ0MsS0FBbEMsQ0E3Rk0sbUNBOEZ0QitiLGdCQUFnQixDQUFDLE1BQUQsRUFBUyxZQUFULEVBQXVCaGMsb0RBQVksQ0FBQytPLElBQXBDLENBOUZNLDBMQW1HdEJnTixnQkFBZ0IsQ0FBQyxXQUFELENBbkdNLCs0Q0E0SHRCQSxnQkFBZ0IsQ0FBQyxVQUFELENBNUhNLCtGQWlJbENJLDJDQWpJa0Msc0NBQXJDO0FBdUlBLFNBQVNVLHNCQUFULENBQWdDemYsS0FBaEMsRUFBdUM7QUFDMUMsTUFBSTZCLFFBQVEsR0FBRyxFQUFmO0FBQ0E2YyxxQkFBbUIsQ0FBQ3RGLE9BQXBCLENBQTRCLFVBQUE2RixPQUFPLEVBQUk7QUFDbkMsUUFBSVMsVUFBVSxHQUFHVCxPQUFPLENBQUMsQ0FBRCxDQUF4QjtBQUFBLFFBQTZCVSxVQUFVLEdBQUdWLE9BQU8sQ0FBQyxDQUFELENBQWpEO0FBQUEsUUFBc0R2ZixZQUFZLEdBQUd1ZixPQUFPLENBQUMsQ0FBRCxDQUE1RTtBQUNBLFFBQUk3RyxLQUFLLEdBQUdwWSxLQUFLLENBQUNwQixVQUFOLENBQWlCaUQsUUFBakIsQ0FBMEI2ZCxVQUExQixHQUFaLENBRm1DLENBR25DOztBQUNBLFFBQUl0SCxLQUFLLEtBQUsxWSxZQUFkLEVBQTRCO0FBQ3hCbUMsY0FBUSxDQUFDOGQsVUFBRCxDQUFSLEdBQXVCdkgsS0FBdkI7QUFDSDtBQUNKLEdBUEQ7QUFRQSxTQUFPd0gsSUFBSSxDQUFDQyxTQUFMLENBQWVoZSxRQUFmLENBQVA7QUFDSDtBQUVNLFNBQVMyRyxzQkFBVCxDQUFnQ3hJLEtBQWhDLEVBQXVDNkIsUUFBdkMsRUFBaUQ7QUFDcEQsTUFBSUEsUUFBSixFQUFjO0FBQ1ZBLFlBQVEsR0FBRytkLElBQUksQ0FBQ0UsS0FBTCxDQUFXamUsUUFBWCxDQUFYO0FBQ0E2Yyx1QkFBbUIsQ0FBQ3RGLE9BQXBCLENBQTRCLFVBQUE2RixPQUFPLEVBQUk7QUFDbkMsVUFBSVMsVUFBVSxHQUFHVCxPQUFPLENBQUMsQ0FBRCxDQUF4QjtBQUFBLFVBQTZCVSxVQUFVLEdBQUdWLE9BQU8sQ0FBQyxDQUFELENBQWpEOztBQUNBLFVBQUlVLFVBQVUsSUFBSTlkLFFBQWxCLEVBQTRCO0FBQ3hCN0IsYUFBSyxDQUFDcEIsVUFBTixDQUFpQmlELFFBQWpCLENBQTBCNmQsVUFBMUIsRUFBc0M3ZCxRQUFRLENBQUM4ZCxVQUFELENBQTlDO0FBQ0g7QUFDSixLQUxEOztBQU9BLFFBQUk5ZCxRQUFRLENBQUNrZSxVQUFiLEVBQXlCO0FBQ3JCL2YsV0FBSyxDQUFDc0MsT0FBTixDQUFjSyxVQUFkLENBQXlCZCxRQUFRLENBQUNrZSxVQUFsQztBQUNIO0FBQ0o7QUFDSjtBQUVNLFNBQVNqZSwyQkFBVCxDQUFxQ25ELGFBQXJDLEVBQW9EO0FBQ3ZELE1BQUlrRCxRQUFRLEdBQUcsRUFBZjtBQUNBNmMscUJBQW1CLENBQUN0RixPQUFwQixDQUE0QixVQUFBNkYsT0FBTyxFQUFJO0FBQ25DLFFBQUlTLFVBQVUsR0FBR1QsT0FBTyxDQUFDLENBQUQsQ0FBeEI7QUFBQSxRQUE2QlUsVUFBVSxHQUFHVixPQUFPLENBQUMsQ0FBRCxDQUFqRDtBQUFBLFFBQXNEdmYsWUFBWSxHQUFHdWYsT0FBTyxDQUFDLENBQUQsQ0FBNUU7O0FBQ0EsUUFBSXRnQixhQUFhLENBQUNnaEIsVUFBRCxDQUFiLEtBQThCNWdCLFNBQWxDLEVBQTZDO0FBQ3pDOEMsY0FBUSxDQUFDNmQsVUFBRCxDQUFSLEdBQXVCdmYsRUFBRSxDQUFDQyxVQUFILENBQWNWLFlBQWQsQ0FBdkI7QUFDSCxLQUZELE1BRU87QUFDSG1DLGNBQVEsQ0FBQzZkLFVBQUQsQ0FBUixHQUF1QnZmLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjekIsYUFBYSxDQUFDLHlCQUF1QmdoQixVQUF4QixDQUEzQixDQUF2QjtBQUNIO0FBQ0osR0FQRDtBQVFBLFNBQU85ZCxRQUFQO0FBQ0g7O0lBRUttZSxzQjs7Ozs7QUFDRixrQ0FBWXpQLElBQVosRUFBa0IrRSxHQUFsQixFQUF1QjtBQUFBOztBQUFBOztBQUNuQixnR0FBTS9FLElBQU4sRUFBWStFLEdBQVo7QUFDQSxVQUFLMkssS0FBTCxHQUFhLEtBQWI7QUFGbUI7QUFHdEI7Ozs7MEJBRUtoQyxXLEVBQWFDLFMsRUFBVztBQUMxQix3RkFBWUQsV0FBWixFQUF5QkMsU0FBekI7O0FBQ0F4VyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLd0UsSUFBakI7QUFDQSxXQUFLOFQsS0FBTCxHQUFhLEtBQWIsQ0FIMEIsQ0FJMUI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FBS0MsZUFBTCxHQUF1QixLQUFLQyxZQUFMLENBQWtCMVMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBdkIsQ0FSMEIsQ0FVMUI7QUFDSDs7O2lDQUVZMlMsVyxFQUFhO0FBQ3RCLFdBQUtILEtBQUwsR0FBYSxDQUFDLEtBQUtBLEtBQW5COztBQUNBLFVBQUksS0FBS0EsS0FBVCxFQUFnQjtBQUNaLGFBQUtBLEtBQUwsR0FBYSxJQUFiLENBRFksQ0FFWjs7QUFFQSxhQUFLQSxLQUFMLEdBQWEsS0FBYjtBQUNIO0FBQ0o7OztpQ0FFWWhRLEssRUFBTztBQUNoQixXQUFLZ1EsS0FBTCxHQUFhLENBQUMsS0FBS0EsS0FBbkI7O0FBQ0EsVUFBSSxLQUFLQSxLQUFULEVBQWdCO0FBQ1osYUFBS0EsS0FBTCxHQUFhLElBQWIsQ0FEWSxDQUVaO0FBQ0E7O0FBQ0EsYUFBS0EsS0FBTCxHQUFhLEtBQWI7QUFDSDtBQUNKOzs7eUJBRUloQyxXLEVBQWFDLFMsRUFBV0csUyxFQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQVdKLFdBQVgsRUFBd0JDLFNBQXhCO0FBQ0g7Ozs7RUE3Q2dDUiwrRDs7QUFnRDlCLElBQU0yQyxrQkFBa0IsR0FBRztBQUM5QmhnQixNQUFJLEVBQUUscUJBRHdCO0FBRTlCaWdCLFlBQVUsRUFBRSxDQUFDLDhCQUFELENBRmtCO0FBRzlCQyxhQUFXLEVBQUVQLHNCQUhpQjtBQUk5QlEsVUFBUSxFQUFFakI7QUFKb0IsQ0FBM0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFNQO0FBRU8sSUFBTWtCLG9CQUFvQix3RUFBMUI7O0lBS0RDLGtCOzs7OztBQUNGLDhCQUFZblEsSUFBWixFQUFrQitFLEdBQWxCLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ25CLDRGQUFNL0UsSUFBTixFQUFZK0UsR0FBWjtBQUNBLFVBQUtxTCxHQUFMLEdBQVcsSUFBSWxRLE9BQUosQ0FBWTtBQUNuQm1RLGFBQU8sRUFBRXRMLEdBQUcsQ0FBQzFFLElBQUosQ0FBUywwQkFBVCxFQUFxQyxDQUFyQyxDQURVO0FBRW5CaVEsNkJBQXVCLEVBQUUsS0FGTjtBQUduQkMsZUFBUyxFQUFFLElBSFE7QUFJbkJDLGVBQVMsRUFBRSxPQUpRO0FBS25CO0FBQ0FDLHFCQUFlLEVBQUU7QUFDYkMsOEJBQXNCLEVBQUU7QUFEWCxPQU5FO0FBU25CQyxvQkFBYyxFQUFFLEtBVEc7QUFVbkJDLGFBQU8sRUFBRTtBQVZVLEtBQVosQ0FBWDtBQVlBLFVBQUtsQixLQUFMLEdBQWEsS0FBYjtBQWRtQjtBQWV0Qjs7OzswQkFFS2hDLFcsRUFBYUMsUyxFQUFXO0FBQzFCLG9GQUFZRCxXQUFaLEVBQXlCQyxTQUF6Qjs7QUFDQSxXQUFLK0IsS0FBTCxHQUFhLEtBQWI7QUFDQSxXQUFLclIsWUFBTCxDQUFrQixLQUFLekMsSUFBTCxDQUFVcVMsTUFBVixFQUFsQixFQUgwQixDQUkxQjs7QUFDQSxXQUFLNEMsbUJBQUwsR0FBMkIsS0FBS2pWLElBQUwsQ0FBVXFTLE1BQVYsQ0FBaUI2QyxTQUFqQixDQUEyQixLQUFLelMsWUFBTCxDQUFrQm5CLElBQWxCLENBQXVCLElBQXZCLENBQTNCLENBQTNCLENBTDBCLENBTTFCOztBQUNBLFdBQUt5UyxlQUFMLEdBQXVCLEtBQUtDLFlBQUwsQ0FBa0IxUyxJQUFsQixDQUF1QixJQUF2QixDQUF2QjtBQUNBLFdBQUtrVCxHQUFMLENBQVNXLFVBQVQsQ0FBb0J2RixFQUFwQixDQUF1QixRQUF2QixFQUFpQyxLQUFLbUUsZUFBdEM7O0FBQ0EsVUFBSWhDLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUNwQjtBQUNBcUQsa0JBQVUsQ0FBQyxLQUFLWixHQUFMLENBQVNXLFVBQVQsQ0FBb0JFLE9BQXBCLENBQTRCL1QsSUFBNUIsQ0FBaUMsS0FBS2tULEdBQUwsQ0FBU1csVUFBMUMsQ0FBRCxFQUF3RCxDQUF4RCxDQUFWO0FBQ0g7QUFDSjs7O2lDQUVZbEIsVyxFQUFhO0FBQ3RCLFdBQUtILEtBQUwsR0FBYSxDQUFDLEtBQUtBLEtBQW5COztBQUNBLFVBQUksS0FBS0EsS0FBVCxFQUFnQjtBQUNaLGFBQUtBLEtBQUwsR0FBYSxJQUFiO0FBQ0EsYUFBS1UsR0FBTCxDQUFTdkksS0FBVCxDQUFlZ0ksV0FBZjtBQUNBLGFBQUtPLEdBQUwsQ0FBU1csVUFBVCxDQUFvQkUsT0FBcEI7QUFDQSxhQUFLdkIsS0FBTCxHQUFhLEtBQWI7QUFDSDtBQUNKOzs7aUNBRVloUSxLLEVBQU87QUFDaEIsV0FBS2dRLEtBQUwsR0FBYSxDQUFDLEtBQUtBLEtBQW5COztBQUNBLFVBQUksS0FBS0EsS0FBVCxFQUFnQjtBQUNaLGFBQUtBLEtBQUwsR0FBYSxJQUFiO0FBQ0EsYUFBSzlULElBQUwsQ0FBVXFTLE1BQVYsQ0FBaUIsS0FBS21DLEdBQUwsQ0FBU3ZJLEtBQVQsRUFBakI7QUFDQSxhQUFLNkgsS0FBTCxHQUFhLEtBQWI7QUFDSDtBQUNKOzs7eUJBRUloQyxXLEVBQWFDLFMsRUFBV0csUyxFQUFXO0FBQ3BDO0FBQ0EsV0FBSytDLG1CQUFMLENBQXlCSyxPQUF6QjtBQUNBLFdBQUtkLEdBQUwsQ0FBU1csVUFBVCxDQUFvQkksR0FBcEIsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS3hCLGVBQXZDOztBQUNBLG1GQUFXakMsV0FBWCxFQUF3QkMsU0FBeEI7QUFDSDs7OztFQXpENEJSLCtEOztBQTREMUIsSUFBTWlFLGNBQWMsR0FBRztBQUMxQnRoQixNQUFJLEVBQUUsVUFEb0I7QUFFMUJpZ0IsWUFBVSxFQUFFLENBQUMsS0FBRCxDQUZjO0FBRzFCQyxhQUFXLEVBQUVHLGtCQUhhO0FBSTFCRixVQUFRLEVBQUVDO0FBSmdCLENBQXZCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRVA7Ozs7OztBQU1BOzs7O0FBSUE7QUFDQTtBQUVPLElBQUk3ZCxZQUFZLEdBQUc7QUFDdEI0YyxPQUFLLEVBQUUsT0FEZTtBQUV0QjNjLE9BQUssRUFBRSxPQUZlO0FBR3RCOE8sTUFBSSxFQUFFO0FBSGdCLENBQW5COztBQU1QLFNBQVNpUSxPQUFULENBQWlCdmhCLElBQWpCLEVBQXVCd2UsSUFBdkIsRUFBNkJDLElBQTdCLEVBQW1DO0FBQy9CLDJKQUNpRUEsSUFEakUsOEZBRTBFQSxJQUYxRSx3REFHa0NELElBSGxDLHNIQUlzRnhlLElBSnRGO0FBTUg7O0FBRU0sSUFBTXdoQixrQkFBa0Isc2lCQVlqQkQsT0FBTyxDQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCaGYsWUFBWSxDQUFDNGMsS0FBcEMsQ0FaVSwyQkFhakJvQyxPQUFPLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUJoZixZQUFZLENBQUNDLEtBQWxDLENBYlUsMkJBY2pCK2UsT0FBTyxDQUFDLE1BQUQsRUFBUyxZQUFULEVBQXVCaGYsWUFBWSxDQUFDK08sSUFBcEMsQ0FkVSw4NUhBa0d6Qm1RLDZEQWxHeUIsMEhBQXhCOztBQTRHUCxTQUFTQyxvQkFBVCxDQUE4QmhnQixJQUE5QixFQUFvQztBQUNoQyxNQUFJaWdCLEtBQUssR0FBR3BDLElBQUksQ0FBQ0UsS0FBTCxDQUFXL2QsSUFBWCxDQUFaOztBQUNBLE1BQUlrZ0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU0MsSUFBVCxFQUFlO0FBQzFCLFFBQUlBLElBQUksQ0FBQ0MsU0FBTCxLQUFtQixNQUF2QixFQUErQjtBQUMzQixhQUFPRCxJQUFJLENBQUNFLE1BQUwsQ0FBWWhXLE1BQVosR0FBcUIsQ0FBckIsSUFDSCxDQUFDOFYsSUFBSSxDQUFDRSxNQUFMLENBQVksQ0FBWixFQUFlQyxVQUFmLENBQTBCLEdBQTFCLENBREw7QUFFSCxLQUhELE1BR087QUFDSCxhQUFPSCxJQUFJLENBQUNDLFNBQUwsS0FBbUIsVUFBbkIsSUFDSEQsSUFBSSxDQUFDQyxTQUFMLEtBQW1CLEtBRHZCO0FBRUg7QUFDSixHQVJEOztBQVNBLE1BQUlHLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNKLElBQVQsRUFBZTtBQUM1QixRQUFJQSxJQUFJLENBQUNDLFNBQUwsS0FBbUIsTUFBdkIsRUFBK0I7QUFDM0IsYUFBT0QsSUFBSSxDQUFDRSxNQUFMLENBQVk5QyxJQUFaLENBQWlCLElBQWpCLENBQVA7QUFDSCxLQUZELE1BRU8sSUFBSTRDLElBQUksQ0FBQ0MsU0FBTCxLQUFtQixVQUFuQixJQUNQRCxJQUFJLENBQUNDLFNBQUwsS0FBbUIsS0FEaEIsRUFDdUI7QUFDMUIsYUFBTyxRQUFNRCxJQUFJLENBQUNFLE1BQUwsQ0FBWTlDLElBQVosQ0FBaUIsSUFBakIsQ0FBTixHQUE2QixLQUFwQztBQUNIO0FBQ0osR0FQRDs7QUFRQSxTQUFPMEMsS0FBSyxDQUFDTyxLQUFOLENBQVl2RCxNQUFaLENBQW1CaUQsUUFBbkIsRUFBNkJwVixHQUE3QixDQUFpQ3lWLFVBQWpDLEVBQTZDaEQsSUFBN0MsQ0FBa0QsSUFBbEQsQ0FBUDtBQUNIOztJQUVLa0QsZ0I7Ozs7O0FBQ0YsNEJBQVlqUyxJQUFaLEVBQWtCK0UsR0FBbEIsRUFBdUI7QUFBQTs7QUFBQTs7QUFDbkIsMEZBQU0vRSxJQUFOLEVBQVkrRSxHQUFHLENBQUMxRSxJQUFKLENBQVMsNkJBQVQsQ0FBWjtBQUNBLFVBQUsxQyxFQUFMLEdBQVUsSUFBSXVVLFdBQUosQ0FBZ0I7QUFDdEIsbUJBQWEsTUFBS25OLEdBQUwsQ0FBUyxDQUFULENBRFM7QUFFdEIsYUFBTy9FLElBQUksQ0FBQ3RKLFVBQUwsQ0FBZ0IrQyxNQUFoQixDQUF1QkMsR0FBdkIsQ0FBMkJ3RCxJQUEzQixDQUFnQzhDLElBQUksQ0FBQ3RKLFVBQUwsQ0FBZ0IrQyxNQUFoRCxDQUZlO0FBR3RCLG9CQUFjLElBSFE7QUFJdEIsMEJBQW9CdUcsSUFBSSxDQUFDdlEsS0FBTCxDQUFXckIsYUFBWCxDQUF5QjRILFdBSnZCLENBS3RCOztBQUxzQixLQUFoQixDQUFWO0FBT0EsVUFBSzBaLEtBQUwsR0FBYSxLQUFiO0FBQ0EsVUFBS3lDLFFBQUwsR0FBZ0IsS0FBaEI7O0FBQ0EsVUFBS0MsaUJBQUw7O0FBQ0EsVUFBS0MscUJBQUwsR0FBNkIsSUFBN0I7QUFDQSxVQUFLQyx5QkFBTCxHQUFpQyxJQUFqQztBQUNBLFVBQUtyVSxhQUFMLEdBQXFCLE1BQUsrQixJQUFMLENBQVV2USxLQUFWLENBQWdCc0MsT0FBaEIsQ0FBd0JLLFVBQXhCLEVBQXJCO0FBZG1CO0FBZXRCOzs7OzRDQUV1QjtBQUFBOztBQUNwQixXQUFLdUwsRUFBTCxDQUFRMEwsV0FBUixDQUFvQmtKLFNBQXBCLENBQThCQyxvQkFBOUIsR0FBcUQsVUFBQ0MsT0FBRCxFQUFhO0FBQzlEQSxlQUFPLENBQUNqTCxJQUFSLENBQWE7QUFDVGtMLGlCQUFPLEVBQUUsSUFEQTtBQUVUelMsY0FBSSxFQUFFLFlBRkc7QUFHVDBTLGtCQUFRLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUMzUyxJQUFMLENBQVV0SixVQUFWLENBQXFCa0ksTUFBckIsQ0FBNEI4TSxpQkFBbEM7QUFBQTtBQUhELFNBQWI7QUFLSCxPQU5EO0FBT0g7OzswQkFFS2dDLFcsRUFBYUMsUyxFQUFXO0FBQUE7O0FBQzFCLFVBQUlpRixXQUFXLEdBQUcsS0FBSzVnQixRQUF2Qjs7QUFDQSxrRkFBWTBiLFdBQVosRUFBeUJDLFNBQXpCOztBQUNBLFdBQUsrQixLQUFMLEdBQWEsS0FBYjs7QUFFQSxVQUFJaEMsV0FBVyxLQUFLLFdBQXBCLEVBQWlDO0FBQzdCLFlBQUlrRixXQUFXLEtBQUssV0FBcEIsRUFBaUM7QUFDN0IsZUFBSzNVLGFBQUwsR0FBcUIsS0FBSytCLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JzQyxPQUFoQixDQUF3QkssVUFBeEIsRUFBckI7QUFDSDs7QUFDRCxhQUFLNE4sSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQWhCLENBQXdCSyxVQUF4QixDQUFtQ0MsWUFBWSxDQUFDK08sSUFBaEQ7QUFDSCxPQUxELE1BS087QUFDSCxhQUFLcEIsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQWhCLENBQXdCSyxVQUF4QixDQUFtQyxLQUFLNkwsYUFBeEM7QUFDSDs7QUFFRCxXQUFLSSxZQUFMLENBQWtCLEtBQUt6QyxJQUFMLENBQVVxUyxNQUFWLEVBQWxCLEVBZDBCLENBZ0IxQjs7QUFDQSxXQUFLNEMsbUJBQUwsR0FBMkIsS0FBS2pWLElBQUwsQ0FBVXFTLE1BQVYsQ0FBaUI2QyxTQUFqQixDQUEyQixLQUFLelMsWUFBTCxDQUFrQm5CLElBQWxCLENBQXVCLElBQXZCLENBQTNCLENBQTNCLENBakIwQixDQW1CMUI7O0FBQ0EsV0FBSzJWLGlCQUFMLEdBQXlCLEtBQUtqRCxZQUFMLENBQWtCMVMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBekI7QUFDQSxXQUFLUyxFQUFMLENBQVFtVixpQkFBUixDQUEwQixLQUFLRCxpQkFBL0I7O0FBRUEsVUFBSW5GLFdBQVcsS0FBSyxXQUFwQixFQUFpQztBQUM3QixhQUFLL1AsRUFBTCxDQUFRb1YsU0FBUixHQUFvQjtBQUFBLGlCQUFNLEtBQU47QUFBQSxTQUFwQjtBQUNILE9BRkQsTUFFTztBQUNILGFBQUtwVixFQUFMLENBQVFvVixTQUFSLEdBQW9CLEtBQUsvUyxJQUFMLENBQVV2USxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJpRCxRQUEzQixDQUFvQ3loQixTQUF4RDtBQUVBLGFBQUtWLHFCQUFMLEdBQTZCLEtBQUtyUyxJQUFMLENBQVV2USxLQUFWLENBQWdCbUYsU0FBaEIsQ0FBMEJZLFFBQTFCLENBQW1DSSxVQUFuQyxDQUE4Q2tiLFNBQTlDLENBQXdELFVBQUNrQyxLQUFELEVBQVU7QUFDM0YsaUJBQU8sTUFBSSxDQUFDclYsRUFBTCxDQUFRc1YsbUJBQVIsQ0FBNEJELEtBQTVCLEVBQW1DLG1CQUFuQyxDQUFQO0FBQ0gsU0FGNEIsQ0FBN0I7QUFHQSxhQUFLVix5QkFBTCxHQUFpQyxLQUFLdFMsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCWSxRQUExQixDQUFtQ0ssY0FBbkMsQ0FBa0RpYixTQUFsRCxDQUE0RCxVQUFDa0MsS0FBRDtBQUFBLGlCQUN6RixNQUFJLENBQUNyVixFQUFMLENBQVFzVixtQkFBUixDQUE0QkQsS0FBNUIsRUFBbUMsdUJBQW5DLENBRHlGO0FBQUEsU0FBNUQsQ0FBakM7QUFHSCxPQWxDeUIsQ0FxQzFCO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQWhDLGdCQUFVLENBQUM7QUFBQSxlQUFNLE1BQUksQ0FBQ3JULEVBQUwsQ0FBUXNULE9BQVIsRUFBTjtBQUFBLE9BQUQsRUFBMEIsQ0FBMUIsQ0FBVjtBQUNIOzs7aUNBRVlwQixXLEVBQWE7QUFDdEIsVUFBSUEsV0FBVyxLQUFLcmhCLFNBQXBCLEVBQStCO0FBQzNCLFlBQUksS0FBS29OLElBQUwsS0FBYyxJQUFsQixFQUF3QjtBQUNwQmlVLHFCQUFXLEdBQUcsS0FBS2pVLElBQUwsQ0FBVXFTLE1BQVYsRUFBZDtBQUNILFNBRkQsTUFFTztBQUNIO0FBQ0E0QixxQkFBVyxHQUFHLEVBQWQ7QUFDSDtBQUNKLE9BUEQsTUFPTyxJQUFJQSxXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFDN0I7QUFDQSxhQUFLN1AsSUFBTCxDQUFVdEosVUFBVixDQUFxQmlCLFVBQXJCLENBQWdDdWIsa0JBQWhDLENBQW1ELEtBQUtsaEIsUUFBeEQ7QUFDQTtBQUNIOztBQUNELFdBQUswZCxLQUFMLEdBQWEsQ0FBQyxLQUFLQSxLQUFuQjs7QUFDQSxVQUFJLEtBQUtBLEtBQVQsRUFBZ0I7QUFDWixhQUFLQSxLQUFMLEdBQWEsSUFBYjtBQUNBLGFBQUsvUixFQUFMLENBQVF3VixPQUFSLENBQWdCdEQsV0FBaEIsRUFGWSxDQUdaOztBQUNBLGFBQUtILEtBQUwsR0FBYSxLQUFiO0FBQ0g7QUFDSjs7O2lDQUVZaFEsSyxFQUFPO0FBQ2hCLFdBQUsvQixFQUFMLENBQVF5VixxQkFBUjtBQUVBLFdBQUsxRCxLQUFMLEdBQWEsQ0FBQyxLQUFLQSxLQUFuQjs7QUFDQSxVQUFJLEtBQUtBLEtBQVQsRUFBZ0I7QUFDWixhQUFLQSxLQUFMLEdBQWEsSUFBYjs7QUFDQSxZQUFJLENBQUMsS0FBSzFQLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JzQyxPQUFoQixDQUF3QlEsV0FBeEIsRUFBTCxFQUE0QztBQUN4QyxlQUFLcUosSUFBTCxDQUFVcVMsTUFBVixDQUFpQixLQUFLdFEsRUFBTCxDQUFRMFYsT0FBUixFQUFqQjtBQUNIOztBQUNELGFBQUszRCxLQUFMLEdBQWEsS0FBYjtBQUNIO0FBQ0o7Ozt5QkFFSWhDLFcsRUFBYUMsUyxFQUFXRyxTLEVBQVc7QUFDcEM7QUFDQSxXQUFLNEIsS0FBTCxHQUFhLEtBQWI7QUFDQSxXQUFLbUIsbUJBQUwsQ0FBeUJLLE9BQXpCO0FBQ0EsV0FBS3ZULEVBQUwsQ0FBUTJWLG9CQUFSLENBQTZCLEtBQUtULGlCQUFsQzs7QUFDQSxVQUFJLEtBQUs3UyxJQUFMLENBQVV2USxLQUFWLENBQWdCc0MsT0FBaEIsQ0FBd0JRLFdBQXhCLEVBQUosRUFBMkM7QUFDdkMsYUFBS3lOLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtSixFQUFoQixDQUFtQnNELE9BQW5CLENBQTJCcUIsTUFBM0IsQ0FBa0NhLGtCQUFsQztBQUNIOztBQUNELFdBQUttVixzQkFBTDs7QUFDQSxpRkFBVzdGLFdBQVgsRUFBd0JDLFNBQXhCO0FBQ0g7Ozs2Q0FFd0I7QUFDckIsV0FBS2hRLEVBQUwsQ0FBUXlWLHFCQUFSOztBQUNBLFVBQUksS0FBS2YscUJBQVQsRUFBZ0M7QUFDNUIsYUFBS0EscUJBQUwsQ0FBMkJuQixPQUEzQjtBQUNBLGFBQUttQixxQkFBTCxHQUE2QixJQUE3QjtBQUNIOztBQUNELFVBQUksS0FBS0MseUJBQVQsRUFBb0M7QUFDaEMsYUFBS0EseUJBQUwsQ0FBK0JwQixPQUEvQjtBQUNBLGFBQUtvQix5QkFBTCxHQUFpQyxJQUFqQztBQUNIO0FBQ0o7Ozt3Q0FFbUI7QUFBQTs7QUFDaEIsV0FBSzNVLEVBQUwsQ0FBUTZWLE9BQVIsQ0FBZ0IsS0FBS3hULElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JzQyxPQUFoQixDQUF3QkssVUFBeEIsRUFBaEI7QUFDQSxXQUFLNE4sSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQWhCLENBQXdCSyxVQUF4QixDQUFtQzBlLFNBQW5DLENBQTZDLFVBQUF2QyxJQUFJLEVBQUk7QUFDakQsY0FBSSxDQUFDNVEsRUFBTCxDQUFRNlYsT0FBUixDQUFnQmpGLElBQWhCO0FBQ0gsT0FGRDtBQUdIOzs7Z0NBRVdrRixVLEVBQVk7QUFDcEIsV0FBS3RCLFFBQUwsR0FBZ0JzQixVQUFoQjtBQUNBLFdBQUs5VixFQUFMLENBQVFXLFdBQVIsQ0FBb0JtVixVQUFwQjtBQUNIOzs7K0JBRVUvVCxLLEVBQU87QUFDZCxVQUFJMU4sUUFBUSxHQUFHME4sS0FBSyxDQUFDQyxNQUFOLENBQWFvTSxRQUE1QjtBQUNBLFVBQUl2YSxJQUFJLEdBQUdrTyxLQUFLLENBQUNDLE1BQU4sQ0FBYXFPLE1BQXhCOztBQUNBLFVBQUloYyxRQUFRLENBQUMwaEIsUUFBVCxDQUFrQixRQUFsQixDQUFKLEVBQWlDO0FBQzdCbGlCLFlBQUksR0FBR2dnQixvQkFBb0IsQ0FBQ2hnQixJQUFELENBQTNCO0FBQ0g7O0FBQ0QsV0FBS3dPLElBQUwsQ0FBVXRKLFVBQVYsQ0FBcUJDLE1BQXJCLENBQTRCNUMsUUFBNUIsQ0FBcUMsZUFBckMsRUFBc0QsRUFBdEQsRUFBMEQsRUFBMUQsRUFBOER2QyxJQUE5RCxFQUFvRSxLQUFLUSxRQUF6RTtBQUNBLFdBQUs0SixJQUFMLENBQVVxUyxNQUFWLENBQWlCemMsSUFBakI7QUFDQSxXQUFLd08sSUFBTCxDQUFVdEosVUFBVixDQUFxQitDLE1BQXJCLENBQTRCQyxHQUE1QixHQVJjLENBU2Q7QUFDSDs7O21DQUVjO0FBQ1gsVUFBSXNVLE1BQU0scUZBQVY7O0FBQ0EsVUFBSUEsTUFBTSxDQUFDbGUsSUFBUCxLQUFnQixRQUFoQixJQUE0QmtlLE1BQU0sQ0FBQzdCLFNBQVAsS0FBcUIsS0FBckQsRUFBNEQ7QUFDeEQ2QixjQUFNLENBQUNsZSxJQUFQLEdBQWNtYyxpRUFBUSxDQUFDLEtBQUtqTSxJQUFMLENBQVV2USxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJ5QixJQUEzQixFQUFELENBQXRCO0FBQ0g7O0FBQ0RrZSxZQUFNLENBQUM1QixRQUFQLEdBQWtCLGVBQWxCO0FBQ0EsV0FBS3BNLElBQUwsQ0FBVXRKLFVBQVYsQ0FBcUJDLE1BQXJCLENBQTRCNUMsUUFBNUIsQ0FBcUMsaUJBQXJDLEVBQXdELEVBQXhELEVBQTRELEVBQTVELEVBQWdFLEVBQWhFLEVBQW9FaWEsTUFBTSxDQUFDbGUsSUFBM0U7QUFDQSxhQUFPa2UsTUFBUDtBQUNIOzs7O0VBbkswQmIsK0Q7O0FBdUt4QixJQUFNd0csWUFBWSxHQUFHO0FBQ3hCN2pCLE1BQUksRUFBRSxRQURrQjtBQUV4QmlnQixZQUFVLEVBQUUsQ0FBQyxLQUFELENBRlk7QUFHeEJDLGFBQVcsRUFBRWlDLGdCQUhXO0FBSXhCaEMsVUFBUSxFQUFFcUI7QUFKYyxDQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyVVA7QUFFTyxJQUFNc0MsZ0JBQWdCLGlPQUF0Qjs7SUFrQkRDLGM7Ozs7O0FBQ0YsMEJBQVk3VCxJQUFaLEVBQWtCK0UsR0FBbEIsRUFBdUI7QUFBQTs7QUFBQSx1RkFDYi9FLElBRGEsRUFDUCtFLEdBQUcsQ0FBQzFFLElBQUosQ0FBUyxzQkFBVCxDQURPO0FBRXRCOzs7RUFId0I4TSwrRDs7QUFNdEIsSUFBTTJHLFVBQVUsR0FBRztBQUN0QmhrQixNQUFJLEVBQUUsTUFEZ0I7QUFFdEJpZ0IsWUFBVSxFQUFFLENBQUMsZUFBRCxDQUZVO0FBR3RCQyxhQUFXLEVBQUU2RCxjQUhTO0FBSXRCNUQsVUFBUSxFQUFFMkQ7QUFKWSxDQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCUDtBQUVPLElBQU1HLGdCQUFnQix1RkFBdEI7O0lBTURDLGM7Ozs7O0FBQ0YsMEJBQVloVSxJQUFaLEVBQWtCK0UsR0FBbEIsRUFBdUI7QUFBQTs7QUFBQTs7QUFDbkIsd0ZBQU0vRSxJQUFOLEVBQVkrRSxHQUFaO0FBQ0EsVUFBS3RILFVBQUwsR0FBa0J3VyxVQUFVLENBQUNDLFlBQVgsQ0FBd0JuUCxHQUFHLENBQUMxRSxJQUFKLENBQVMsc0JBQVQsRUFBaUMsQ0FBakMsQ0FBeEIsRUFBNkQ7QUFDM0U4VCw2QkFBdUIsRUFBRSxJQURrRDtBQUUzRUMsaUJBQVcsRUFBRSxJQUY4RDtBQUczRUMscUJBQWUsRUFBRSxDQUgwRDtBQUkzRUMsZ0JBQVUsRUFBRSxDQUorRDtBQUszRTFELGFBQU8sRUFBRSxDQUxrRTtBQU0zRUQsb0JBQWMsRUFBRSxLQU4yRDtBQU8zRTRELGVBQVMsRUFBRTtBQUNQLGVBQU8sWUFEQTtBQUVQLHFCQUFhLFlBRk47QUFHUCxlQUFPLGFBQVVDLEVBQVYsRUFBYztBQUNqQixjQUFJQSxFQUFFLENBQUMxVyxTQUFILENBQWEsWUFBYixDQUFKLEVBQWdDO0FBQzVCMFcsY0FBRSxDQUFDM1csU0FBSCxDQUFhLFlBQWIsRUFBMkIsS0FBM0I7QUFDSCxXQUZELE1BRU87QUFDSDJXLGNBQUUsQ0FBQ3ppQixPQUFILENBQVdnUyxLQUFYLENBQWlCMFEsSUFBakI7QUFDSDtBQUNKLFNBVE07QUFVUCxlQUFPLGFBQVVELEVBQVYsRUFBYztBQUNqQkEsWUFBRSxDQUFDM1csU0FBSCxDQUFhLFlBQWIsRUFBMkIsQ0FBQzJXLEVBQUUsQ0FBQzFXLFNBQUgsQ0FBYSxZQUFiLENBQTVCO0FBQ0g7QUFaTTtBQVBnRSxLQUE3RCxDQUFsQjtBQXNCQSxVQUFLNFIsS0FBTCxHQUFhLEtBQWI7QUF4Qm1CO0FBeUJ0Qjs7OzswQkFFS2hDLFcsRUFBYUMsUyxFQUFXO0FBQzFCLGdGQUFZRCxXQUFaLEVBQXlCQyxTQUF6Qjs7QUFDQSxXQUFLK0IsS0FBTCxHQUFhLEtBQWI7QUFDQSxXQUFLclIsWUFBTCxDQUFrQixLQUFLekMsSUFBTCxDQUFVcVMsTUFBVixFQUFsQixFQUgwQixDQUkxQjs7QUFDQSxXQUFLNEMsbUJBQUwsR0FBMkIsS0FBS2pWLElBQUwsQ0FBVXFTLE1BQVYsQ0FBaUI2QyxTQUFqQixDQUEyQixLQUFLelMsWUFBTCxDQUFrQm5CLElBQWxCLENBQXVCLElBQXZCLENBQTNCLENBQTNCLENBTDBCLENBTTFCOztBQUNBLFdBQUt5UyxlQUFMLEdBQXVCLEtBQUtDLFlBQUwsQ0FBa0IxUyxJQUFsQixDQUF1QixJQUF2QixDQUF2QjtBQUNBLFdBQUtPLFVBQUwsQ0FBZ0IrTixFQUFoQixDQUFtQixRQUFuQixFQUE2QixLQUFLbUUsZUFBbEM7O0FBQ0EsVUFBSWhDLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUNwQjtBQUNBcUQsa0JBQVUsQ0FBQyxLQUFLdlQsVUFBTCxDQUFnQndULE9BQWhCLENBQXdCL1QsSUFBeEIsQ0FBNkIsS0FBS08sVUFBbEMsQ0FBRCxFQUFnRCxDQUFoRCxDQUFWO0FBQ0g7QUFDSjs7O2lDQUVZb1MsVyxFQUFhO0FBQ3RCLFdBQUtILEtBQUwsR0FBYSxDQUFDLEtBQUtBLEtBQW5COztBQUNBLFVBQUksS0FBS0EsS0FBVCxFQUFnQjtBQUNaLGFBQUtBLEtBQUwsR0FBYSxJQUFiO0FBQ0EsYUFBS3FCLFVBQUwsQ0FBZ0IyRCxRQUFoQixDQUF5QjdFLFdBQXpCO0FBQ0EsYUFBS08sR0FBTCxDQUFTVyxVQUFULENBQW9CRSxPQUFwQjtBQUNBLGFBQUt2QixLQUFMLEdBQWEsS0FBYjtBQUNIO0FBQ0o7OztpQ0FFWWhRLEssRUFBTztBQUNoQixXQUFLZ1EsS0FBTCxHQUFhLENBQUMsS0FBS0EsS0FBbkI7O0FBQ0EsVUFBSSxLQUFLQSxLQUFULEVBQWdCO0FBQ1osYUFBS0EsS0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLOVQsSUFBTCxDQUFVcVMsTUFBVixDQUFpQixLQUFLeFEsVUFBTCxDQUFnQm9LLEtBQWhCLEVBQWpCO0FBQ0EsYUFBSzZILEtBQUwsR0FBYSxLQUFiO0FBQ0g7QUFDSjs7O3lCQUVJaEMsVyxFQUFhQyxTLEVBQVdHLFMsRUFBVztBQUNwQztBQUNBLFdBQUsrQyxtQkFBTCxDQUF5QkssT0FBekI7QUFDQSxXQUFLelQsVUFBTCxDQUFnQjBULEdBQWhCLENBQW9CLFFBQXBCLEVBQThCLEtBQUt4QixlQUFuQzs7QUFDQSwrRUFBV2pDLFdBQVgsRUFBd0JDLFNBQXhCO0FBQ0g7Ozs7RUFuRXdCUiwrRDs7QUFzRXRCLElBQU13SCxVQUFVLEdBQUc7QUFDdEI3a0IsTUFBSSxFQUFFLE1BRGdCO0FBRXRCaWdCLFlBQVUsRUFBRSxDQUFDLE1BQUQsQ0FGVTtBQUd0QkMsYUFBVyxFQUFFZ0UsY0FIUztBQUl0Qi9ELFVBQVEsRUFBRThEO0FBSlksQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVQOzs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlPLElBQUlhLFdBQVcsR0FBRztBQUNyQkMsWUFBVSxFQUFFLFlBRFM7QUFFckJDLFlBQVUsRUFBRSxZQUZTO0FBR3JCQyxjQUFZLEVBQUUsY0FITztBQUlyQkMsUUFBTSxFQUFFLFFBSmE7QUFLckJDLFdBQVMsRUFBRSxXQUxVO0FBTXJCQyxTQUFPLEVBQUUsU0FOWTtBQU9yQkMsZUFBYSxFQUFFLGVBUE07QUFRckJDLG9CQUFrQixFQUFFLG9CQVJDO0FBU3JCQyxpQkFBZSxFQUFFO0FBVEksQ0FBbEI7QUFZUCxJQUFNQyxrQkFBa0IsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUEzQjtBQUVBLElBQU1DLGlCQUFpQixHQUFHLENBQ3RCWix1REFEc0IsRUFDVmhCLDJEQURVLEVBQ0k3RCw4RUFESixFQUN3QmdFLHVEQUR4QixFQUNvQzFDLCtEQURwQyxDQUExQjtBQUlPLElBQU1vRSxZQUFZLEdBQUdELGlCQUFpQixDQUFDalosR0FBbEIsQ0FBc0IsVUFBQW9NLE1BQU07QUFBQSx1SUFHR0EsTUFBTSxDQUFDNVksSUFIVix1QkFJbEQ0WSxNQUFNLENBQUN1SCxRQUoyQztBQUFBO0FBUXBEOzs7OztBQVJ3QixFQWExQmxCLElBYjBCLENBYXJCLElBYnFCLENBQXJCO0FBZUEsSUFBTXBPLE9BQWI7QUFBQTtBQUFBO0FBQ0ksbUJBQVlYLElBQVosRUFBa0IrRSxHQUFsQixFQUF1QjtBQUFBOztBQUFBOztBQUNuQixTQUFLL0UsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBSytFLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUsvTCxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUt5YyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0FKLHFCQUFpQixDQUFDMU0sT0FBbEIsQ0FBMEIsVUFBQUgsTUFBTTtBQUFBLGFBQUksS0FBSSxDQUFDa04sY0FBTCxDQUFvQmxOLE1BQXBCLENBQUo7QUFBQSxLQUFoQztBQUNBLFNBQUsxSSxJQUFMLENBQVV2USxLQUFWLENBQWdCc0MsT0FBaEIsQ0FBd0JDLFFBQXhCLENBQWlDOGUsU0FBakMsQ0FBMkMsS0FBSzFELFlBQWhELEVBQThELElBQTlEO0FBQ0g7O0FBVkw7QUFBQTtBQUFBLG1DQVltQmxXLElBWm5CLEVBWXlCO0FBQ2pCLFVBQUk2WSxVQUFVLEdBQUc3WSxJQUFJLENBQUM2WSxVQUF0QjtBQUNBLFVBQUk4RixRQUFRLEdBQUcsSUFBSTNlLElBQUksQ0FBQzhZLFdBQVQsQ0FBcUIsS0FBS2hRLElBQTFCLEVBQWdDLEtBQUsrRSxHQUFyQyxDQUFmO0FBQ0E4USxjQUFRLENBQUMvbEIsSUFBVCxHQUFnQm9ILElBQUksQ0FBQ3BILElBQXJCO0FBQ0EsV0FBSzJsQixXQUFMLENBQWlCak8sSUFBakIsQ0FBc0JxTyxRQUF0QjtBQUNBLFdBQUtGLE9BQUwsQ0FBYXplLElBQUksQ0FBQ3BILElBQUwsQ0FBVTZKLFdBQVYsRUFBYixJQUF3Q2tjLFFBQXhDOztBQUNBLFdBQUssSUFBSXRPLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBR3dJLFVBQVUsQ0FBQ2xVLE1BQTdCLEVBQXFDMEwsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxhQUFLbU8sV0FBTCxDQUFpQjNGLFVBQVUsQ0FBQ3hJLENBQUQsQ0FBM0IsSUFBa0NzTyxRQUFsQztBQUNIO0FBQ0o7QUFyQkw7QUFBQTtBQUFBLDJCQXVCVy9sQixJQXZCWCxFQXVCaUI7QUFDVCxhQUFPLEtBQUs2bEIsT0FBTCxDQUFhN2xCLElBQUksQ0FBQzZKLFdBQUwsRUFBYixDQUFQO0FBQ0g7QUF6Qkw7QUFBQTtBQUFBLGlDQTJCaUIrVCxXQTNCakIsRUEyQjhCO0FBQ3RCLFVBQUlDLFNBQVMsR0FBRyxLQUFLM1UsT0FBckI7QUFDQSxVQUFJOFUsU0FBUyxHQUFHLEtBQUszUixTQUFMLENBQWV1UixXQUFmLEVBQTRCQyxTQUE1QixDQUFoQjs7QUFDQSxVQUFJQSxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDcEJBLGlCQUFTLENBQUNtSSxJQUFWLENBQWVwSSxXQUFmLEVBQTRCQyxTQUE1QixFQUF1Q0csU0FBdkM7QUFDSDs7QUFDRCxXQUFLOVUsT0FBTCxHQUFlOFUsU0FBZjtBQUNBLFdBQUs5VSxPQUFMLENBQWErYyxLQUFiLENBQW1CckksV0FBbkIsRUFBZ0NDLFNBQWhDO0FBQ0g7QUFuQ0w7QUFBQTtBQUFBLDhCQWlEY2pTLElBakRkLEVBaURvQjtBQUFBLGtDQUNjaUYsT0FBTyxDQUFDdU4sYUFBUixDQUFzQnhTLElBQXRCLENBRGQ7QUFBQSxVQUNQc2EsS0FETyx5QkFDUEEsS0FETztBQUFBLFVBQ0FsbUIsSUFEQSx5QkFDQUEsSUFEQTtBQUFBLFVBQ01PLElBRE4seUJBQ01BLElBRE47O0FBRVosVUFBSUEsSUFBSSxLQUFLLFVBQVQsSUFBdUJxTCxJQUFJLElBQUksS0FBS2dhLFdBQXhDLEVBQXFEO0FBQ2pELGVBQU8sS0FBS0EsV0FBTCxDQUFpQmhhLElBQWpCLENBQVA7QUFDSCxPQUZELE1BRU8sSUFBSXJMLElBQUksSUFBSSxLQUFLcWxCLFdBQWpCLEVBQThCO0FBQ2pDLGVBQU8sS0FBS0EsV0FBTCxDQUFpQnJsQixJQUFqQixDQUFQO0FBQ0gsT0FGTSxNQUVBO0FBQ0gsZUFBTyxLQUFLb2xCLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBUDtBQUNIO0FBQ0o7QUExREw7QUFBQTtBQUFBLGtDQXFDeUIvWixJQXJDekIsRUFxQytCO0FBQ3ZCLFVBQUlzYSxLQUFLLEdBQUd0YSxJQUFJLENBQUN5TCxNQUFMLENBQVksQ0FBWixDQUFaOztBQUNBLFVBQUltTyxrQkFBa0IsQ0FBQ3pZLE9BQW5CLENBQTJCbVosS0FBM0IsTUFBc0MsQ0FBQyxDQUEzQyxFQUE4QztBQUMxQ3RhLFlBQUksR0FBR0EsSUFBSSxDQUFDYSxNQUFMLENBQVksQ0FBWixDQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0h5WixhQUFLLEdBQUcsRUFBUjtBQUNIOztBQUNELFVBQUlsbUIsSUFBSSxHQUFHNEwsSUFBSSxDQUFDYSxNQUFMLENBQVksQ0FBWixFQUFlYixJQUFJLENBQUN1YSxXQUFMLENBQWlCLEdBQWpCLENBQWYsQ0FBWDtBQUNBLFVBQUk1bEIsSUFBSSxHQUFHcUwsSUFBSSxDQUFDYSxNQUFMLENBQVliLElBQUksQ0FBQ3VhLFdBQUwsQ0FBaUIsR0FBakIsQ0FBWixDQUFYO0FBQ0EsYUFBTztBQUFDLGlCQUFTRCxLQUFWO0FBQWlCLGdCQUFRbG1CLElBQXpCO0FBQStCLGdCQUFRTztBQUF2QyxPQUFQO0FBQ0g7QUEvQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQVlPLElBQU1vUSxhQUFiO0FBQUE7QUFBQTtBQUNJLHlCQUFZVCxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS2tXLGNBQUwsR0FBc0IsS0FBS2xXLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUF0QztBQUVBLFNBQUt1aEIsY0FBTCxHQUFzQjtBQUNsQnpjLFNBQUcsRUFBRSxJQUFJMGMsNERBQUosQ0FBcUJwVyxJQUFyQixDQURhO0FBRWxCcVcsVUFBSSxFQUFFLElBQUlDLDhEQUFKLENBQXNCdFcsSUFBdEIsQ0FGWTtBQUdsQnpQLFdBQUssRUFBRSxJQUFJZ21CLGlFQUFKLENBQXVCdlcsSUFBdkIsQ0FIVztBQUlsQnhQLGNBQVEsRUFBRSxJQUFJZ21CLHVFQUFKLENBQTBCeFcsSUFBMUIsQ0FKUTtBQUtsQnZQLFlBQU0sRUFBRSxJQUFJZ21CLG1FQUFKLENBQXdCelcsSUFBeEI7QUFMVSxLQUF0QixDQUpjLENBWWQ7O0FBQ0FpQyxNQUFFLENBQUN5VSxTQUFILENBQWEsS0FBS1AsY0FBTCxDQUFvQnpjLEdBQXBCLENBQXdCaWQsZ0JBQXhCLEVBQWIsRUFiYyxDQWVkOztBQUNBLFNBQUt4VSxlQUFMLEdBQXVCLEVBQXZCO0FBRUE7Ozs7O0FBSUEsU0FBS3lVLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNIO0FBRUQ7Ozs7O0FBM0JKO0FBQUE7QUFBQSxtQ0E4Qm1CO0FBQ1gsVUFBSUMsTUFBTSxHQUFHLEtBQUtaLGNBQUwsQ0FBb0JyaEIsT0FBakM7QUFDQWlpQixZQUFNLENBQUMsVUFBRCxDQUFOLEdBQXFCLEVBQXJCO0FBQ0FBLFlBQU0sQ0FBQyxRQUFELENBQU4sR0FBbUIsRUFBbkI7QUFDQUEsWUFBTSxDQUFDLFNBQUQsQ0FBTixHQUFvQixFQUFwQjtBQUNBQSxZQUFNLENBQUMsWUFBRCxDQUFOLEdBQXVCLEVBQXZCO0FBQ0g7QUFwQ0w7QUFBQTtBQUFBLHdDQXNDd0I7QUFDaEIsVUFBSS9oQixPQUFPLEdBQUcsS0FBS21oQixjQUFMLENBQW9CbmhCLE9BQWxDO0FBQ0FBLGFBQU8sQ0FBQ0MsV0FBUixDQUFvQixJQUFwQjtBQUNBRCxhQUFPLENBQUNNLGdCQUFSLENBQXlCLENBQXpCO0FBQ0FOLGFBQU8sQ0FBQ0UsUUFBUixDQUFpQixDQUFqQjtBQUNBRixhQUFPLENBQUNHLFdBQVIsQ0FBb0IsSUFBcEI7QUFDQUgsYUFBTyxDQUFDSyxnQkFBUixDQUF5QmtRLFNBQXpCO0FBQ0F2USxhQUFPLENBQUNPLE9BQVIsR0FBa0IsSUFBbEI7QUFDSDtBQTlDTDtBQUFBO0FBQUEsMkNBZ0QyQjtBQUNuQixXQUFLNk0sZUFBTCxHQUF1QjtBQUNuQixpQkFBUyxFQURVO0FBRW5CLGdCQUFRLENBRlc7QUFHbkIsZ0JBQVE7QUFIVyxPQUF2QjtBQUtIO0FBdERMO0FBQUE7O0FBd0RJOzs7QUF4REosNEJBMkRZO0FBQ0o7QUFDQTtBQUNBLFdBQUs0VSxpQkFBTCxHQUhJLENBSUo7O0FBQ0EsV0FBS0MsWUFBTCxHQUxJLENBTUo7O0FBQ0EsV0FBS0Msb0JBQUwsR0FQSSxDQVFKOztBQUNBLFdBQUtqWCxJQUFMLENBQVV0SixVQUFWLENBQXFCUyxPQUFyQixDQUE2QmtPLEtBQTdCLEdBVEksQ0FVSjs7QUFDQSxXQUFLckYsSUFBTCxDQUFVdEosVUFBVixDQUFxQmxCLFFBQXJCLENBQThCNlAsS0FBOUI7QUFDSDtBQXZFTDtBQUFBO0FBQUEsMEJBMEVVO0FBQ0YsV0FBS2pYLGFBQUwsR0FBcUIsS0FBSytuQixjQUFMLENBQW9CemMsR0FBcEIsQ0FBd0IwRixHQUF4QixDQUE0QixJQUE1QixDQUFyQjtBQUNBLFVBQUl4SyxTQUFTLEdBQUcsS0FBSzBLLE9BQUwsR0FBZTRYLElBQWYsQ0FDWixLQUFLOW9CLGFBQUwsQ0FBbUJxUSxPQUFuQixDQUEyQnZCLElBQTNCLENBQWdDLEtBQUs5TyxhQUFyQyxDQURZLEVBRVosS0FBS0EsYUFBTCxDQUFtQitvQixPQUFuQixDQUEyQmphLElBQTNCLENBQWdDLEtBQUs5TyxhQUFyQyxDQUZZLENBQWhCOztBQUlBLFVBQUksQ0FBQyxLQUFLNFIsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCaUQsUUFBM0IsQ0FBb0M4bEIsZUFBcEMsRUFBTCxFQUE0RDtBQUN4RHhpQixpQkFBUyxDQUFDc2lCLElBQVYsQ0FBZSxLQUFLM21CLEtBQUwsQ0FBVzJNLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBZjtBQUNIO0FBQ0o7QUFuRkw7QUFBQTtBQUFBLDRCQXFGWTtBQUNKLFdBQUs5TyxhQUFMLEdBQXFCLEtBQUsrbkIsY0FBTCxDQUFvQjVsQixLQUFwQixDQUEwQjZPLEdBQTFCLENBQThCLElBQTlCLENBQXJCO0FBQ0EsV0FBS0UsT0FBTCxHQUFlNFgsSUFBZixDQUNJLEtBQUs5b0IsYUFBTCxDQUFtQnFRLE9BQW5CLENBQTJCdkIsSUFBM0IsQ0FBZ0MsS0FBSzlPLGFBQXJDLENBREosRUFFSSxLQUFLQSxhQUFMLENBQW1CK29CLE9BQW5CLENBQTJCamEsSUFBM0IsQ0FBZ0MsS0FBSzlPLGFBQXJDLENBRkosRUFHRThvQixJQUhGLENBR08sS0FBS0csYUFBTCxDQUFtQm5hLElBQW5CLENBQXdCLElBQXhCLENBSFA7QUFJSDtBQTNGTDtBQUFBO0FBQUEsK0JBNkZlO0FBQUE7O0FBQ1AsV0FBSzhDLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0IyRCxNQUFoQixDQUF1QnVCLFdBQXZCLENBQW1DckIsbURBQVcsQ0FBQ2lILE1BQS9DO0FBQ0EsVUFBSStjLGVBQWUsR0FBRyxLQUFLdFgsSUFBTCxDQUFVdEosVUFBVixDQUFxQlMsT0FBckIsQ0FBNkJvSSxRQUE3QixFQUF0QjtBQUNBcEksYUFBTyxDQUFDQyxHQUFSLENBQVlrZ0IsZUFBWjtBQUNBQSxxQkFBZSxDQUFDSixJQUFoQixDQUFxQixVQUFDSyxTQUFELEVBQWU7QUFDaEMsYUFBSSxDQUFDbnBCLGFBQUwsR0FBcUIsS0FBSSxDQUFDK25CLGNBQUwsQ0FBb0JFLElBQXBCLENBQXlCalgsR0FBekIsQ0FBNkIsS0FBN0IsRUFBbUNtWSxTQUFuQyxDQUFyQjs7QUFDQSxZQUFJM2lCLFNBQVMsR0FBRyxLQUFJLENBQUMwSyxPQUFMLEdBQWU0WCxJQUFmLENBQ1osS0FBSSxDQUFDOW9CLGFBQUwsQ0FBbUJxUSxPQUFuQixDQUEyQnZCLElBQTNCLENBQWdDLEtBQUksQ0FBQzlPLGFBQXJDLENBRFksRUFFWixLQUFJLENBQUNBLGFBQUwsQ0FBbUIrb0IsT0FBbkIsQ0FBMkJqYSxJQUEzQixDQUFnQyxLQUFJLENBQUM5TyxhQUFyQyxDQUZZLENBQWhCOztBQUlBLFlBQUksQ0FBQyxLQUFJLENBQUM0UixJQUFMLENBQVV2USxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJpRCxRQUEzQixDQUFvQzhsQixlQUFwQyxFQUFMLEVBQTREO0FBQ3hEeGlCLG1CQUFTLENBQUNzaUIsSUFBVixDQUFlLEtBQUksQ0FBQ3ptQixNQUFMLENBQVl5TSxJQUFaLENBQWlCLEtBQWpCLENBQWY7QUFDSDtBQUNKLE9BVEQ7QUFVSDtBQTNHTDtBQUFBO0FBQUEsNkJBNkdhO0FBQ0wsV0FBSzlPLGFBQUwsR0FBcUIsS0FBSytuQixjQUFMLENBQW9CMWxCLE1BQXBCLENBQTJCMk8sR0FBM0IsQ0FBK0IsSUFBL0IsQ0FBckI7QUFDQSxXQUFLRSxPQUFMLEdBQWU0WCxJQUFmLENBQ0ksS0FBSzlvQixhQUFMLENBQW1CcVEsT0FBbkIsQ0FBMkJ2QixJQUEzQixDQUFnQyxLQUFLOU8sYUFBckMsQ0FESixFQUVJLEtBQUtBLGFBQUwsQ0FBbUIrb0IsT0FBbkIsQ0FBMkJqYSxJQUEzQixDQUFnQyxLQUFLOU8sYUFBckMsQ0FGSixFQUdFOG9CLElBSEYsQ0FHTyxLQUFLM1gsUUFBTCxDQUFjckMsSUFBZCxDQUFtQixJQUFuQixDQUhQO0FBSUg7QUFuSEw7QUFBQTtBQUFBLCtCQXFIZTtBQUNQLFdBQUs5TyxhQUFMLEdBQXFCLEtBQUsrbkIsY0FBTCxDQUFvQjNsQixRQUFwQixDQUE2QjRPLEdBQTdCLENBQWlDLElBQWpDLENBQXJCO0FBQ0g7QUF2SEw7QUFBQTtBQUFBLDhCQXlIYztBQUFBOztBQUNOLFdBQUtZLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0IyRCxNQUFoQixDQUF1QnVCLFdBQXZCLENBQW1DckIsbURBQVcsQ0FBQ2lILE1BQS9DO0FBQ0EsYUFBTzBILEVBQUUsQ0FBQ3VWLFFBQUgsQ0FBWUMsY0FBWixDQUEyQjtBQUFBLGVBQzlCeFYsRUFBRSxDQUFDeVYsa0JBQUgsQ0FBc0IsTUFBSSxDQUFDdHBCLGFBQUwsQ0FBbUI0RCxRQUF6QyxFQUFtRCxLQUFuRCxFQUNzQixNQUFJLENBQUM1RCxhQUFMLENBQW1Cb0QsSUFEekMsRUFDK0MsSUFEL0MsQ0FEOEI7QUFBQSxPQUEzQixDQUFQO0FBSUg7QUFFRDs7OztBQWpJSjtBQUFBO0FBQUEsZ0NBb0lnQjtBQUNSLFVBQUltbUIsUUFBUSxHQUFHLFdBQWYsQ0FEUSxDQUVSOztBQUNBLFVBQUksQ0FBQyxLQUFLM1gsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1vQixRQUFoQixDQUF5QkQsUUFBekIsSUFBcUNFLElBQXJDLEVBQUwsRUFBa0Q7QUFDOUMsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsV0FBSzdYLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQixDQUEwQnhCLE1BQTFCLENBQWlDLFVBQWpDO0FBQ0EsV0FBSzRNLElBQUwsQ0FBVXRKLFVBQVYsQ0FBcUJDLE1BQXJCLENBQTRCbWhCLFFBQTVCLEdBUFEsQ0FRUjs7QUFDQSxVQUFJcmUsTUFBTSxHQUFHLElBQWI7QUFDQSxVQUFJakUsUUFBUSxHQUFHLEtBQUt3SyxJQUFMLENBQVV0SixVQUFWLENBQXFCbEIsUUFBcEM7QUFDQWlFLFlBQU0sQ0FBQ3VkLFlBQVA7QUFDQXZkLFlBQU0sQ0FBQ3NlLFVBQVA7QUFDQXRlLFlBQU0sQ0FBQ3VlLFdBQVA7QUFDQXZlLFlBQU0sQ0FBQ3dlLGlCQUFQLENBQXlCTixRQUF6QixFQUFtQyxJQUFuQyxFQUF5QyxVQUFVTyxNQUFWLEVBQWtCO0FBQ3ZELFlBQUlqVyxFQUFFLENBQUNrVyxnQkFBSCxDQUFvQixZQUFwQixFQUFrQyxTQUFsQyxDQUFKLEVBQWtEO0FBQzlDO0FBQ0E7QUFDQSxjQUFJLENBQUMxWixPQUFELElBQ0EsRUFBRS9JLFFBQVEsS0FBSyxZQUFiLElBQTZCQyxLQUFLLEtBQUssV0FBekMsQ0FESixFQUMyRDtBQUN2REgsb0JBQVEsQ0FBQzRpQixlQUFULENBQXlCMWlCLFFBQXpCLEVBQW1DQyxLQUFuQyxFQUEwQ0YsT0FBMUMsRUFBbURpRixJQUFuRDtBQUNIOztBQUNEakIsZ0JBQU0sQ0FBQ3VHLElBQVAsQ0FBWXRKLFVBQVosQ0FBdUJsQixRQUF2QixDQUFnQzRpQixlQUFoQyxDQUFnREYsTUFBTSxDQUFDRyxFQUF2RDtBQUNBNWUsZ0JBQU0sQ0FBQ3VHLElBQVAsQ0FBWXZRLEtBQVosQ0FBa0JtRixTQUFsQixDQUE0QnhCLE1BQTVCLENBQW1DLFVBQW5DO0FBQ0g7QUFDSixPQVhEO0FBWUFxRyxZQUFNLENBQUN1RyxJQUFQLENBQVl0SixVQUFaLENBQXVCQyxNQUF2QixDQUE4QjVDLFFBQTlCLENBQXVDLFFBQXZDLEVBQWlELFdBQWpEO0FBQ0g7QUEvSkw7QUFBQTs7QUFrS0k7Ozs7QUFsS0osb0NBc0tvQjtBQUNaLFVBQUksS0FBSzhpQixjQUFMLEtBQXdCLElBQTVCLEVBQWtDO0FBQzlCLGFBQUtBLGNBQUw7QUFDSDtBQUNKO0FBRUQ7Ozs7QUE1S0o7QUFBQTtBQUFBLHNDQStLc0I7QUFDZCxVQUFJLEtBQUtELGdCQUFMLEtBQTBCLElBQTlCLEVBQW9DO0FBQ2hDLGFBQUtBLGdCQUFMO0FBQ0g7QUFDSjtBQW5MTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTyxJQUFNMEIsWUFBWSxHQUFHLG1EQUFyQjtBQUVQOzs7O0FBR08sSUFBTUMsYUFBYjtBQUFBO0FBQUE7QUFFSSx5QkFBWXZZLElBQVosRUFBa0I7QUFBQTs7QUFDZCxTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLaE8sUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUtSLElBQUwsR0FBWSxJQUFaO0FBQ0g7O0FBTkw7QUFBQTtBQUFBLHdCQVFRaUksTUFSUixFQVFnQjtBQUNSO0FBQ0EsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0F3SSxRQUFFLENBQUNrVyxnQkFBSCxHQUFzQixLQUFLblksSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCQyxPQUFoRDtBQUNBb04sUUFBRSxDQUFDOUssT0FBSCxHQUFhLEtBQUs2SSxJQUFMLENBQVV0SixVQUFWLENBQXFCUyxPQUFsQztBQUNBOEssUUFBRSxDQUFDdVcsV0FBSCxHQUFpQixFQUFqQjtBQUNBdlcsUUFBRSxDQUFDeVUsU0FBSCxDQUFhLEtBQUtDLGdCQUFMLEVBQWI7QUFDQSxhQUFPLElBQVA7QUFDSDtBQWhCTDtBQUFBO0FBQUEsdUNBa0J1QjtBQUNmLGFBQU87QUFDSDhCLGtCQUFVLEVBQUV4VyxFQUFFLENBQUN5VyxPQURaO0FBRUg7QUFDQUMsWUFBSSxFQUFFLEtBQUtDLFVBQUwsQ0FBZ0IxYixJQUFoQixDQUFxQixJQUFyQixDQUhIO0FBSUg7QUFDQTJiLGdCQUFRLEVBQUUsS0FBS0MsUUFBTCxDQUFjNWIsSUFBZCxDQUFtQixJQUFuQixDQUxQO0FBTUg7QUFDQTZiLGlCQUFTLEVBQUUsS0FBS0MsU0FBTCxDQUFlOWIsSUFBZixDQUFvQixJQUFwQixDQVBSO0FBUUg7QUFDQXBJLGNBQU0sRUFBRSxLQUFLbWtCLEtBQUwsQ0FBVy9iLElBQVgsQ0FBZ0IsSUFBaEIsQ0FUTDtBQVVIO0FBQ0FnYyxpQkFBUyxFQUFFLEtBWFI7QUFZSDtBQUNBQyxnQkFBUSxFQUFFLEtBQUtwVixLQUFMLENBQVc3RyxJQUFYLENBQWdCLElBQWhCLENBYlA7QUFjSGtjLDJCQUFtQixFQUFFLElBZGxCO0FBZUg7QUFDQUMsa0JBQVUsRUFBRSxLQUFLQyxhQUFMLENBQW1CcGMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FoQlQ7QUFpQkg7QUFDQXFjLHFCQUFhLEVBQUU7QUFsQlosT0FBUDtBQXFCSDtBQUVEOzs7Ozs7Ozs7QUExQ0o7QUFBQTtBQUFBLCtCQWtEZXZuQixRQWxEZixFQWtEeUI7QUFDakJtRixhQUFPLENBQUNxaUIsSUFBUixDQUFhLHVCQUFiLEVBRGlCLENBRWpCO0FBQ0g7QUFyREw7QUFBQTtBQUFBLCtCQXVEZTtBQUNQcmlCLGFBQU8sQ0FBQ3FpQixJQUFSLENBQWEsdUJBQWIsRUFETyxDQUVQO0FBQ0g7QUExREw7QUFBQTtBQUFBLGdDQTREZ0I7QUFDUnJpQixhQUFPLENBQUNxaUIsSUFBUixDQUFhLHVCQUFiLEVBRFEsQ0FFUjtBQUNIO0FBL0RMO0FBQUE7QUFBQSwwQkFpRVUzUixLQWpFVixFQWlFaUI7QUFDVCxXQUFLN0gsSUFBTCxDQUFVdEosVUFBVixDQUFxQlMsT0FBckIsQ0FBNkI4aEIsS0FBN0IsQ0FBbUNwUixLQUFuQztBQUNIO0FBbkVMO0FBQUE7QUFBQSw0QkFxRVk7QUFDSjFRLGFBQU8sQ0FBQ3FpQixJQUFSLENBQWEsdUJBQWIsRUFESSxDQUVKO0FBQ0g7QUF4RUw7QUFBQTtBQUFBLG9DQWtGb0IsQ0FDWjtBQUNIO0FBcEZMO0FBQUE7QUFBQSwyQkFzRlcsQ0FFTjtBQXhGTDtBQUFBO0FBQUEsK0JBMEZlLENBRVY7QUE1Rkw7QUFBQTtBQUFBLGdDQThGZ0J4bkIsUUE5RmhCLEVBOEYwQjtBQUNsQixhQUFPLEtBQVA7QUFDSDtBQWhHTDtBQUFBO0FBQUEsNEJBa0dZa21CLE1BbEdaLEVBa0dvQjtBQUNaLFlBQU0sSUFBSXVCLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0g7QUFwR0w7QUFBQTtBQUFBLDRCQXNHWWhRLEtBdEdaLEVBc0dtQjtBQUNYLFlBQU0sSUFBSWdRLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0g7QUF4R0w7QUFBQTtBQUFBLHNDQTBHc0IsQ0FDZDtBQUNIO0FBNUdMO0FBQUE7QUFBQSx3Q0EwRStCO0FBQ3ZCLFVBQUl4WCxFQUFFLENBQUN1VyxXQUFILENBQWUzYyxNQUFuQixFQUEyQjtBQUN2QixlQUFPb0csRUFBRSxDQUFDdVcsV0FBSCxDQUFla0IsR0FBZixFQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxFQUFQO0FBQ0g7QUFDSjtBQWhGTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUVPLElBQU1wRCxpQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdCQUNRN2MsTUFEUixFQUNnQmpJLElBRGhCLEVBQ3NCO0FBQ2Q7QUFDQSxXQUFLd08sSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCWSxRQUExQixDQUFtQ0MsT0FBbkMsQ0FBMkMsWUFBM0M7QUFDQSxXQUFLekQsUUFBTCxHQUFnQixRQUFoQjtBQUNBLFdBQUtSLElBQUwsR0FBWSxTQUFTQSxJQUFyQjtBQUNBeVEsUUFBRSxDQUFDMFgsb0JBQUgsR0FBMEIsSUFBMUI7O0FBRUEsaUZBQVVsZ0IsTUFBVjs7QUFFQXdJLFFBQUUsQ0FBQ3NYLGFBQUgsR0FBbUIsSUFBbkI7QUFDQXRYLFFBQUUsQ0FBQzFNLE9BQUgsR0FBYSxLQUFLeUssSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCRyxPQUExQixDQUFrQ1EsT0FBbEMsRUFBYjtBQUVBLFdBQUt5SyxJQUFMLENBQVV0SixVQUFWLENBQXFCQyxNQUFyQixDQUE0QjVDLFFBQTVCLENBQXFDLFlBQXJDLEVBQW1ELEVBQW5ELEVBQXVELEVBQXZELEVBQTJEdkMsSUFBM0QsRUFBaUUsYUFBakU7QUFDQSxXQUFLd08sSUFBTCxDQUFVdEosVUFBVixDQUFxQkMsTUFBckIsQ0FBNEI1QyxRQUE1QixDQUFxQyxTQUFyQyxFQUFnRCxFQUFoRCxFQUFvRCxFQUFwRCxFQUF3RCxLQUFLdkMsSUFBN0QsRUFBbUUsYUFBbkU7QUFFQSxhQUFPLElBQVA7QUFDSDtBQWpCTDtBQUFBO0FBQUEsNEJBbUJZMG1CLE1BbkJaLEVBbUJvQjtBQUFBOztBQUNaL2dCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQSxXQUFLNEksSUFBTCxDQUFVdEosVUFBVixDQUFxQkMsTUFBckIsQ0FBNEI1QyxRQUE1QixDQUFxQyxvQkFBckMsRUFBMkQsRUFBM0QsRUFBK0QsRUFBL0QsRUFBbUUsRUFBbkUsRUFBdUUsYUFBdkU7QUFDQSxXQUFLaU0sSUFBTCxDQUFVdlEsS0FBVixDQUFnQjJELE1BQWhCLENBQXVCdUIsV0FBdkIsQ0FBbUNyQixtREFBVyxDQUFDQyxLQUEvQztBQUNBLFdBQUt5TSxJQUFMLENBQVV2USxLQUFWLENBQWdCbUYsU0FBaEIsQ0FBMEJHLE9BQTFCLENBQWtDUSxPQUFsQyxDQUEwQzBNLEVBQUUsQ0FBQzFNLE9BQTdDO0FBQ0EwTSxRQUFFLENBQUMxTSxPQUFILEdBQWEsRUFBYjtBQUNBLFVBQUl1aEIsTUFBTSxHQUFHLEtBQUs5VyxJQUFMLENBQVV2USxLQUFWLENBQWdCbUYsU0FBaEIsQ0FBMEJDLE9BQXZDO0FBQ0EsVUFBSTdDLFFBQVEsR0FBRyxLQUFLQSxRQUFwQjtBQUNBLFdBQUtnTyxJQUFMLENBQVV2USxLQUFWLENBQWdCbUYsU0FBaEIsQ0FBMEJHLE9BQTFCLENBQWtDTyxPQUFsQyxHQUE0QzRpQixNQUE1QztBQUNBLFdBQUtsWSxJQUFMLENBQVV0SixVQUFWLENBQXFCUyxPQUFyQixDQUE2QnlpQixVQUE3QixDQUF3QzNYLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPd1gsU0FBUCxDQUFpQjNCLE1BQU0sQ0FBQ0csRUFBUCxDQUFVeUIsQ0FBVixDQUFZQyxFQUFaLEVBQWpCLENBQXhDO0FBQ0EsYUFBTyxJQUFJNVYsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVTRWLE1BQVYsRUFBcUI7QUFDcEM7QUFDQSxhQUFJLENBQUMva0IsUUFBTDs7QUFDQTZoQixjQUFNLENBQUMsU0FBRCxDQUFOLEdBQW9CO0FBQ2hCLHFCQUFXLElBREs7QUFFaEIsbUJBQVMsS0FBSSxDQUFDcmQsTUFBTCxDQUFZMEksZUFBWixDQUE0QjFILEtBRnJCO0FBR2hCLG1CQUFTLEtBQUksQ0FBQ2hCLE1BQUwsQ0FBWTBJLGVBQVosQ0FBNEIxSCxLQUE1QixDQUFrQzZCLEdBQWxDLENBQXNDLFVBQUEyZCxDQUFDO0FBQUEsbUJBQUlBLENBQUMsQ0FBQ3ZmLElBQU47QUFBQSxXQUF2QyxDQUhPO0FBSWhCLHFCQUFXd2QsTUFKSztBQUtoQixvQkFBVSxLQUFJLENBQUNsWSxJQUFMLENBQVV2USxLQUFWLENBQWdCbUYsU0FBaEIsQ0FBMEJFLE1BTHBCO0FBTWhCLHdCQUFjLEtBQUksQ0FBQ3REO0FBTkgsU0FBcEI7QUFRQTRTLGVBQU87QUFDVixPQVpNLENBQVA7QUFhSDtBQTFDTDtBQUFBO0FBQUEsNEJBNENZcUYsS0E1Q1osRUE0Q21CO0FBQ1h0UyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsV0FBSzRJLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0IyRCxNQUFoQixDQUF1QnVCLFdBQXZCLENBQW1DckIsbURBQVcsQ0FBQzRtQixNQUEvQztBQUNBLFVBQUlwRCxNQUFNLEdBQUcsS0FBSzlXLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQixDQUEwQkMsT0FBdkM7QUFDQSxXQUFLbUwsSUFBTCxDQUFVdEosVUFBVixDQUFxQkMsTUFBckIsQ0FBNEI1QyxRQUE1QixDQUFxQyxlQUFyQyxFQUFzRCxFQUF0RCxFQUEwRCxFQUExRCxFQUE4RDBWLEtBQUssQ0FBQ3ZYLFFBQU4sRUFBOUQsRUFBZ0YsYUFBaEY7QUFDQSxhQUFPLElBQUlpUyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVNFYsTUFBVixFQUFxQjtBQUNwQ2xELGNBQU0sQ0FBQyxTQUFELENBQU4sR0FBb0I7QUFDaEIscUJBQVcsS0FESztBQUVoQixtQkFBU3JOLEtBRk87QUFHaEIsd0JBQWM7QUFIRSxTQUFwQjtBQUtBdFMsZUFBTyxDQUFDc1MsS0FBUixDQUFjQSxLQUFkO0FBQ0FyRixlQUFPO0FBQ1YsT0FSTSxDQUFQO0FBU0g7QUExREw7O0FBQUE7QUFBQSxFQUF1QytWLDZEQUF2QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRywwQkFBMEJDLHFFQUFrQixDQUFDbm9CLFFBQW5CLEVBQXREO0FBRU8sSUFBTW9vQix1QkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdCQUNRN2dCLE1BRFIsRUFDZ0I7QUFDUix1RkFBVUEsTUFBVixFQURRLENBRVI7OztBQUNBd0ksUUFBRSxDQUFDc1ksU0FBSCxHQUFlL3JCLFNBQWYsQ0FIUSxDQUlSOztBQUNBeVQsUUFBRSxDQUFDMFgsb0JBQUgsR0FBMEIsSUFBMUIsQ0FMUSxDQU1SOztBQUNBLFdBQUszWixJQUFMLENBQVV2USxLQUFWLENBQWdCc0MsT0FBaEIsQ0FBd0JJLFdBQXhCLENBQW9DLElBQXBDLEVBUFEsQ0FRUjs7QUFDQThQLFFBQUUsQ0FBQ3VXLFdBQUgsR0FBaUIsRUFBakIsQ0FUUSxDQVVSO0FBQ0E7QUFDQTs7QUFDQXZXLFFBQUUsQ0FBQ2tJLFlBQUgsQ0FBZ0I3TyxLQUFoQixDQUFzQiw2QkFBdEIsSUFBdUQ4ZSxtQkFBdkQ7QUFDQW5ZLFFBQUUsQ0FBQ2tJLFlBQUgsQ0FBZ0I3TyxLQUFoQixDQUFzQiwyQkFBdEIsSUFBcURnZCwrREFBckQ7QUFDQSxhQUFPLElBQVA7QUFDSDtBQWpCTDtBQUFBO0FBQUEsK0JBbUJldG1CLFFBbkJmLEVBbUJ5QjtBQUNqQixVQUFJQSxRQUFRLEtBQUssYUFBakIsRUFBZ0M7QUFDNUIsZUFBTyxLQUFLZ08sSUFBTCxDQUFVdlEsS0FBVixDQUFnQm5CLFVBQWhCLENBQTJCa0QsSUFBM0IsRUFBUDtBQUNILE9BRkQsTUFFTyxJQUFJUSxRQUFRLEtBQUsseUJBQWpCLEVBQTRDO0FBQy9DLGVBQU8sS0FBS2dPLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQmtDLEtBQTNCLEVBQVA7QUFDSCxPQUZNLE1BRUEsSUFBSXlCLFFBQVEsS0FBSywwQkFBakIsRUFBNkM7QUFDaEQsZUFBTyxLQUFLZ08sSUFBTCxDQUFVdlEsS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCb0MsTUFBM0IsTUFBdUMsRUFBOUM7QUFDSCxPQUZNLE1BRUEsSUFBSXdSLEVBQUUsQ0FBQ2tJLFlBQUgsS0FBb0IzYixTQUFwQixJQUNQeVQsRUFBRSxDQUFDa0ksWUFBSCxDQUFnQixPQUFoQixFQUF5Qm5ZLFFBQXpCLE1BQXVDeEQsU0FEcEMsRUFDK0M7QUFDbEQsY0FBTSxzQkFBc0J3RCxRQUF0QixHQUFpQyxHQUF2QztBQUNIOztBQUNELGFBQU9pUSxFQUFFLENBQUNrSSxZQUFILENBQWdCLE9BQWhCLEVBQXlCblksUUFBekIsQ0FBUDtBQUNIO0FBL0JMO0FBQUE7QUFBQSwwQkFpQ1V3UixhQWpDVixFQWlDeUI7QUFDakIsYUFBTyxVQUFQO0FBQ0EsYUFBT3ZCLEVBQUUsQ0FBQ3VXLFdBQUgsQ0FBZWtCLEdBQWYsRUFBUDtBQUNBOzs7QUFHSDtBQXZDTDs7QUFBQTtBQUFBLEVBQTZDbkIsZ0VBQTdDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUVPLElBQU0vQixxQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdCQUNRL2MsTUFEUixFQUNnQjtBQUNSLHFGQUFVQSxNQUFWOztBQUNBLFdBQUt6SCxRQUFMLEdBQWdCLGNBQWhCO0FBQ0EsV0FBS1IsSUFBTCxHQUFZLEtBQUt3TyxJQUFMLENBQVV2USxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJtQyxRQUEzQixFQUFaO0FBRUFncUIsa0JBQVksQ0FBQyxLQUFLeGEsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQWhCLENBQXdCbUIsZUFBekIsQ0FBWjtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBVEw7O0FBQUE7QUFBQSxFQUEyQ29uQixtRUFBM0MsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR08sSUFBTUcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFVQyxXQUFWLEVBQXVCQyxjQUF2QixFQUF1Q0MsS0FBdkMsRUFBOENDLE1BQTlDLEVBQXNEO0FBQ3RGLE1BQUlDLFFBQVEsR0FBR3pMLElBQUksQ0FBQ0MsU0FBTCxDQUFlb0wsV0FBZixDQUFmO0FBQ0EsTUFBSUssWUFBWSxHQUFHQyx5REFBTSxDQUFDQSx5REFBTSxDQUFDSCxNQUFNLEdBQUdILFdBQUgsR0FBaUIsTUFBeEIsQ0FBUCxDQUF6QjtBQUVBLGlHQUdTSSxRQUhULDRFQU9GQyxZQVBFLHdzQkE2QkZKLGNBN0JFO0FBaUNILENBckNNO0FBdUNBLElBQU1sRSxtQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdCQUNRaGQsTUFEUixFQUNnQjtBQUNSLG1GQUFVQSxNQUFWOztBQUNBLFdBQUt6SCxRQUFMLEdBQWdCLHFCQUFoQjtBQUNBLFdBQUtSLElBQUwsR0FBWSxLQUFLd08sSUFBTCxDQUFVdlEsS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCb0MsTUFBM0IsTUFBdUMsRUFBbkQ7QUFFQSxVQUFJd3FCLFdBQVcsR0FBRyxLQUFLamIsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCaUQsUUFBM0IsQ0FBb0MycEIsV0FBcEMsRUFBbEI7QUFFQSxVQUFJbkUsTUFBTSxHQUFHLEtBQUs5VyxJQUFMLENBQVV2USxLQUFWLENBQWdCbUYsU0FBaEIsQ0FBMEJDLE9BQXZDO0FBQ0EsVUFBSXFtQixlQUFlLEdBQUcsS0FBS2xiLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQixDQUEwQkMsT0FBMUIsQ0FBa0NFLE9BQWxDLENBQTBDb21CLFVBQTFDLElBQXdELE1BQTlFO0FBQ0EsV0FBS0MsZUFBTDtBQUNBLFVBQUlULGNBQWMsR0FBRyxLQUFLbnBCLElBQTFCO0FBQ0EsVUFBSTZwQixVQUFVLEdBQUdWLGNBQWMsQ0FBQ3RULEtBQWYsQ0FBcUJpVSxzREFBckIsRUFBcUN6ZixNQUF0RDtBQUNBLFVBQUlnZixNQUFNLEdBQUcsQ0FBQy9ELE1BQU0sQ0FBQyxRQUFELENBQU4sQ0FBaUJyUixLQUFsQixJQUEyQnFSLE1BQU0sQ0FBQyxVQUFELENBQU4sQ0FBbUJyWSxPQUEzRDtBQUNBa2Msb0JBQWMsR0FBR0Ysb0JBQW9CLENBQUNTLGVBQUQsRUFBa0JQLGNBQWxCLEVBQWtDTSxXQUFsQyxFQUErQ0osTUFBL0MsQ0FBckM7QUFDQVEsZ0JBQVUsR0FBR1YsY0FBYyxDQUFDdFQsS0FBZixDQUFxQmlVLHNEQUFyQixFQUFxQ3pmLE1BQXJDLEdBQThDd2YsVUFBM0Q7QUFDQXZFLFlBQU0sQ0FBQyxZQUFELENBQU4sR0FBdUI7QUFDbkIsdUJBQWUsRUFESTtBQUVuQixvQkFBWSwwQkFGTztBQUduQixnQkFBUTZELGNBSFc7QUFJbkIsc0JBQWNVLFVBSkssQ0FLbkI7O0FBTG1CLE9BQXZCO0FBT0EsV0FBSzdwQixJQUFMLEdBQVltcEIsY0FBWjs7QUFFQSxtRkFBVWxoQixNQUFWLEVBeEJRLENBMEJSOzs7QUFDQXdJLFFBQUUsQ0FBQzFNLE9BQUgsR0FBYSxLQUFLeUssSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCM0MsVUFBMUIsQ0FBcUNzRCxPQUFsRDtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBL0JMO0FBQUE7QUFBQSw0QkFpQ1kyaUIsTUFqQ1osRUFpQ29CO0FBQ1ovZ0IsYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFEWSxDQUVaOztBQUNBLFdBQUs0SSxJQUFMLENBQVV2USxLQUFWLENBQWdCbUYsU0FBaEIsQ0FBMEIzQyxVQUExQixDQUFxQ3NELE9BQXJDLEdBQStDME0sRUFBRSxDQUFDMU0sT0FBbEQ7QUFDQSxVQUFJRCxPQUFPLEdBQUc0aUIsTUFBTSxDQUFDRyxFQUFQLENBQVV4Z0IsT0FBVixDQUFrQndnQixFQUFoQztBQUNBbGhCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZOGdCLE1BQU0sQ0FBQ0csRUFBbkI7QUFDQSxXQUFLclksSUFBTCxDQUFVdEosVUFBVixDQUFxQmxCLFFBQXJCLENBQThCNGlCLGVBQTlCLENBQThDOWlCLE9BQTlDO0FBQ0EsV0FBSzBLLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQixDQUEwQkMsT0FBMUIsQ0FBa0MsWUFBbEMsRUFBZ0QsU0FBaEQsSUFBNkQsSUFBN0Q7QUFDQSxVQUFJNEosT0FBTyxHQUFHd0QsRUFBRSxDQUFDSSxHQUFILENBQU93WCxTQUFQLENBQWlCdmtCLE9BQU8sQ0FBQ2ltQixPQUF6QixDQUFkO0FBQ0EsV0FBS3ZiLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JuQixVQUFoQixDQUEyQnNELE9BQTNCLENBQW1DNk0sT0FBTyxJQUFJLEtBQUt1QixJQUFMLENBQVV2USxLQUFWLENBQWdCbkIsVUFBaEIsQ0FBMkJzRCxPQUEzQixFQUE5QyxFQVRZLENBVVo7O0FBQ0EsVUFBSUQsS0FBSyxHQUFHc1EsRUFBRSxDQUFDSSxHQUFILENBQU93WCxTQUFQLENBQWlCdmtCLE9BQU8sQ0FBQ2ttQixLQUF6QixDQUFaO0FBQ0E3cEIsV0FBSyxHQUFHcUosSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBVCxFQUFjRCxJQUFJLENBQUNJLEdBQUwsQ0FBUyxHQUFULEVBQWN6SixLQUFkLENBQWQsQ0FBUjtBQUNBLFVBQUk4cEIsUUFBUSxHQUFHLEtBQUt6YixJQUFMLENBQVV2USxLQUFWLENBQWdCbkIsVUFBaEIsQ0FBMkJxRCxLQUEzQixFQUFmO0FBQ0EsV0FBS3FPLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JuQixVQUFoQixDQUEyQnFELEtBQTNCLENBQWlDcUosSUFBSSxDQUFDQyxHQUFMLENBQVN3Z0IsUUFBVCxFQUFtQjlwQixLQUFuQixDQUFqQyxFQWRZLENBZVo7O0FBQ0EsVUFBSXFWLElBQUksR0FBRy9FLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPd1gsU0FBUCxDQUFpQnZrQixPQUFPLENBQUNvbUIsSUFBekIsQ0FBWCxDQWhCWSxDQWlCWjs7QUFDQSxXQUFLMWIsSUFBTCxDQUFVdEosVUFBVixDQUFxQkMsTUFBckIsQ0FBNEJwQyxnQkFBNUIsQ0FBNkM1QyxLQUE3QyxFQUFvRDhNLE9BQXBELEVBQTZEdUksSUFBN0QsRUFBbUUsS0FBbkU7QUFDQSxXQUFLaEgsSUFBTCxDQUFVdlEsS0FBVixDQUFnQjJELE1BQWhCLENBQXVCdUIsV0FBdkIsQ0FBbUNyQixtREFBVyxDQUFDQyxLQUEvQyxFQW5CWSxDQW9CWjs7QUFFQTs7OztBQUlBLFVBQUksQ0FBQzBPLEVBQUUsQ0FBQ2tXLGdCQUFILENBQW9CbG1CLFVBQXBCLENBQStCMHBCLFNBQXBDLEVBQStDO0FBQzNDLFlBQUk7QUFDQSxlQUFLM2IsSUFBTCxDQUFVdEosVUFBVixDQUFxQlMsT0FBckIsQ0FBNkJ5a0IsY0FBN0I7QUFDSCxTQUZELENBRUUsT0FBT2xYLENBQVAsRUFBVSxDQUNYO0FBQ0o7QUFDSjtBQWpFTDtBQUFBO0FBQUEsNEJBbUVZK0UsS0FuRVosRUFtRW1CO0FBQ1h0UyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLFVBQUkwZixNQUFNLEdBQUcsS0FBSzlXLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQixDQUEwQkMsT0FBdkM7O0FBQ0EsVUFBSTRVLEtBQUssQ0FBQ29TLE9BQU4sS0FBa0IsY0FBdEIsRUFBc0M7QUFDbEMvRSxjQUFNLENBQUMsWUFBRCxDQUFOLENBQXFCLFNBQXJCLElBQWtDLElBQWxDO0FBQ0EsYUFBSzlXLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0IyRCxNQUFoQixDQUF1QnVCLFdBQXZCLENBQW1DckIsbURBQVcsQ0FBQ0MsS0FBL0M7QUFDSCxPQUhELE1BR087QUFDSCxhQUFLeU0sSUFBTCxDQUFVdlEsS0FBVixDQUFnQjJELE1BQWhCLENBQXVCdUIsV0FBdkIsQ0FBbUNyQixtREFBVyxDQUFDNG1CLE1BQS9DLEVBREcsQ0FFSDs7QUFDQS9pQixlQUFPLENBQUNzUyxLQUFSLENBQWNBLEtBQWQ7QUFDQSxhQUFLekosSUFBTCxDQUFVdEosVUFBVixDQUFxQmxCLFFBQXJCLENBQThCc21CLG9CQUE5QixDQUFtRHJTLEtBQW5ELEVBQTBELEtBQUt6WCxRQUEvRCxFQUpHLENBS0g7QUFDQTtBQUNBO0FBQ0gsT0FkVSxDQWVYOztBQUNIO0FBbkZMOztBQUFBO0FBQUEsRUFBeUNzb0IsbUVBQXpDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUVPLElBQU1nQixjQUFjLEdBQUcsWUFBdkI7QUFDUDs7OztBQUdPLElBQU1iLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBVUMsV0FBVixFQUF1QkMsY0FBdkIsRUFBdUNDLEtBQXZDLEVBQThDQyxNQUE5QyxFQUFzRDtBQUN0RixNQUFJQyxRQUFRLEdBQUd6TCxJQUFJLENBQUNDLFNBQUwsQ0FBZW9MLFdBQWYsQ0FBZjtBQUNBLE1BQUlLLFlBQVksR0FBR0MseURBQU0sQ0FBQ0EseURBQU0sQ0FBQ0gsTUFBTSxHQUFHSCxXQUFILEdBQWlCLE1BQXhCLENBQVAsQ0FBekI7QUFDQSxNQUFJcUIsWUFBWSxHQUFHLEVBQW5COztBQUNBLE1BQUksQ0FBQ25CLEtBQUwsRUFBWTtBQUNSbUIsZ0JBQVksR0FBRyw0REFBZjtBQUNIOztBQUVELGlHQUdTakIsUUFIVCwyRkFPRkMsWUFQRSwwSkFhRmdCLFlBYkUsaXFDQTRDRnBCLGNBNUNFO0FBa0RILENBMURNO0FBNERBLElBQU1wRSxrQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdCQUNROWMsTUFEUixFQUNnQjtBQUNSLGtGQUFVQSxNQUFWOztBQUNBLFdBQUt6SCxRQUFMLEdBQWdCLG9CQUFoQjtBQUNBLFdBQUtSLElBQUwsR0FBWSxLQUFLd08sSUFBTCxDQUFVdlEsS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCa0MsS0FBM0IsRUFBWjtBQUVBLFVBQUkwcUIsV0FBVyxHQUFHLEtBQUtqYixJQUFMLENBQVV2USxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJpRCxRQUEzQixDQUFvQzJwQixXQUFwQyxFQUFsQjtBQUVBLFVBQUluRSxNQUFNLEdBQUcsS0FBSzlXLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQixDQUEwQkMsT0FBdkM7QUFDQSxVQUFJcW1CLGVBQWUsR0FBRyxLQUFLbGIsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm5CLFVBQWhCLENBQTJCa0QsSUFBM0IsRUFBdEI7QUFDQSxXQUFLNHBCLGVBQUw7QUFDQSxVQUFJVCxjQUFjLEdBQUcsS0FBS25wQixJQUExQjtBQUNBLFVBQUk2cEIsVUFBVSxHQUFHVixjQUFjLENBQUN0VCxLQUFmLENBQXFCaVUsY0FBckIsRUFBcUN6ZixNQUF0RDtBQUNBMUUsYUFBTyxDQUFDQyxHQUFSLENBQVkwZixNQUFNLENBQUMsUUFBRCxDQUFsQjtBQUNBLFVBQUkrRCxNQUFNLEdBQUcsQ0FBQy9ELE1BQU0sQ0FBQyxRQUFELENBQU4sQ0FBaUJyUixLQUFsQixJQUEyQnFSLE1BQU0sQ0FBQyxVQUFELENBQU4sQ0FBbUJyWSxPQUEzRDtBQUNBa2Msb0JBQWMsR0FBR0Ysb0JBQW9CLENBQUNTLGVBQUQsRUFBa0JQLGNBQWxCLEVBQWtDTSxXQUFsQyxFQUErQ0osTUFBL0MsQ0FBckM7QUFDQVEsZ0JBQVUsR0FBR1YsY0FBYyxDQUFDdFQsS0FBZixDQUFxQmlVLGNBQXJCLEVBQXFDemYsTUFBckMsR0FBOEN3ZixVQUE5QyxHQUEyRCxDQUF4RTtBQUNBdkUsWUFBTSxDQUFDLFlBQUQsQ0FBTixHQUF1QjtBQUNuQix1QkFBZSxFQURJO0FBRW5CLG9CQUFZLHlCQUZPO0FBR25CLGdCQUFRNkQsY0FIVztBQUluQixzQkFBY1UsVUFKSyxDQUtuQjs7QUFMbUIsT0FBdkI7QUFRQSxXQUFLN3BCLElBQUwsR0FBWW1wQixjQUFaO0FBRUExWSxRQUFFLENBQUNzWCxhQUFILEdBQW1CLEtBQW5CO0FBRUEsYUFBTyxJQUFQO0FBQ0g7QUE5Qkw7QUFBQTtBQUFBLDRCQWdDWXJCLE1BaENaLEVBZ0NvQjtBQUNaO0FBQ0EvZ0IsYUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUZZLENBR1o7O0FBQ0EsV0FBSzRJLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQixDQUEwQjNDLFVBQTFCLENBQXFDc0QsT0FBckMsR0FBK0MwTSxFQUFFLENBQUMxTSxPQUFsRDtBQUNBME0sUUFBRSxDQUFDMU0sT0FBSCxHQUFhLEVBQWI7QUFDQSxVQUFJRCxPQUFPLEdBQUc0aUIsTUFBTSxDQUFDRyxFQUFQLENBQVV2Z0IsTUFBVixDQUFpQnVnQixFQUEvQjtBQUNBLFdBQUtyWSxJQUFMLENBQVV0SixVQUFWLENBQXFCbEIsUUFBckIsQ0FBOEI0aUIsZUFBOUIsQ0FBOEM5aUIsT0FBOUM7QUFDQSxXQUFLMEssSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCQyxPQUExQixDQUFrQyxZQUFsQyxFQUFnRCxTQUFoRCxJQUE2RCxJQUE3RDtBQUNBLFVBQUk0SixPQUFPLEdBQUd3RCxFQUFFLENBQUNJLEdBQUgsQ0FBT3dYLFNBQVAsQ0FBaUJ2a0IsT0FBTyxDQUFDaW1CLE9BQXpCLENBQWQ7QUFDQSxXQUFLdmIsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm5CLFVBQWhCLENBQTJCc0QsT0FBM0IsQ0FBbUM2TSxPQUFPLElBQUksS0FBS3VCLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JuQixVQUFoQixDQUEyQnNELE9BQTNCLEVBQTlDLEVBVlksQ0FXWjs7QUFDQSxVQUFJRCxLQUFLLEdBQUdzUSxFQUFFLENBQUNJLEdBQUgsQ0FBT3dYLFNBQVAsQ0FBaUJ2a0IsT0FBTyxDQUFDa21CLEtBQXpCLENBQVo7QUFDQTdwQixXQUFLLEdBQUdxSixJQUFJLENBQUNDLEdBQUwsQ0FBUyxHQUFULEVBQWNELElBQUksQ0FBQ0ksR0FBTCxDQUFTLEdBQVQsRUFBY3pKLEtBQWQsQ0FBZCxDQUFSO0FBQ0EsVUFBSThwQixRQUFRLEdBQUcsS0FBS3piLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JuQixVQUFoQixDQUEyQnFELEtBQTNCLEVBQWY7QUFDQSxXQUFLcU8sSUFBTCxDQUFVdlEsS0FBVixDQUFnQm5CLFVBQWhCLENBQTJCcUQsS0FBM0IsQ0FBaUNxSixJQUFJLENBQUNDLEdBQUwsQ0FBU3dnQixRQUFULEVBQW1COXBCLEtBQW5CLENBQWpDLEVBZlksQ0FnQlo7O0FBQ0EsVUFBSXFWLElBQUksR0FBRy9FLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPd1gsU0FBUCxDQUFpQnZrQixPQUFPLENBQUNvbUIsSUFBekIsQ0FBWCxDQWpCWSxDQWtCWjs7QUFDQSxXQUFLMWIsSUFBTCxDQUFVdEosVUFBVixDQUFxQkMsTUFBckIsQ0FBNEJwQyxnQkFBNUIsQ0FBNkM1QyxLQUE3QyxFQUFvRDhNLE9BQXBELEVBQTZEdUksSUFBN0QsRUFBbUUsS0FBbkU7QUFDQSxXQUFLaEgsSUFBTCxDQUFVdlEsS0FBVixDQUFnQjJELE1BQWhCLENBQXVCdUIsV0FBdkIsQ0FBbUNyQixtREFBVyxDQUFDQyxLQUEvQyxFQXBCWSxDQXFCWjs7QUFFQTs7OztBQUlBLFVBQUksQ0FBQzBPLEVBQUUsQ0FBQ2tXLGdCQUFILENBQW9CbG1CLFVBQXBCLENBQStCMHBCLFNBQXBDLEVBQStDO0FBQzNDLFlBQUk7QUFDQSxlQUFLM2IsSUFBTCxDQUFVdEosVUFBVixDQUFxQlMsT0FBckIsQ0FBNkJ5a0IsY0FBN0I7QUFDSCxTQUZELENBRUUsT0FBT2xYLENBQVAsRUFBVSxDQUNYO0FBQ0o7QUFDSjtBQWpFTDtBQUFBO0FBQUEsNEJBbUVZK0UsS0FuRVosRUFtRW1CO0FBQ1h0UyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsVUFBSTBmLE1BQU0sR0FBRyxLQUFLOVcsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCQyxPQUF2Qzs7QUFDQSxVQUFJNFUsS0FBSyxDQUFDb1MsT0FBTixLQUFrQixjQUF0QixFQUFzQztBQUNsQy9FLGNBQU0sQ0FBQyxZQUFELENBQU4sQ0FBcUIsU0FBckIsSUFBa0MsSUFBbEM7QUFDQSxhQUFLOVcsSUFBTCxDQUFVdlEsS0FBVixDQUFnQjJELE1BQWhCLENBQXVCdUIsV0FBdkIsQ0FBbUNyQixtREFBVyxDQUFDQyxLQUEvQztBQUNILE9BSEQsTUFHTztBQUNILGFBQUt5TSxJQUFMLENBQVV2USxLQUFWLENBQWdCMkQsTUFBaEIsQ0FBdUJ1QixXQUF2QixDQUFtQ3JCLG1EQUFXLENBQUM0bUIsTUFBL0MsRUFERyxDQUVIOztBQUNBL2lCLGVBQU8sQ0FBQ3NTLEtBQVIsQ0FBY0EsS0FBZDtBQUNBLGFBQUt6SixJQUFMLENBQVV0SixVQUFWLENBQXFCbEIsUUFBckIsQ0FBOEJzbUIsb0JBQTlCLENBQW1EclMsS0FBbkQsRUFBMEQsS0FBS3pYLFFBQS9ELEVBSkcsQ0FLSDtBQUNBO0FBQ0E7QUFDSCxPQWRVLENBZVg7O0FBQ0g7QUFuRkw7O0FBQUE7QUFBQSxFQUF3Q3NvQixtRUFBeEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUVPLElBQU0wQixxQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdCQUNRdmlCLE1BRFIsRUFDZ0I7QUFDUixxRkFBVUEsTUFBVjs7QUFDQSxXQUFLekgsUUFBTCxHQUFnQixXQUFoQjtBQUNBLFdBQUtSLElBQUwsR0FBWSxLQUFLd08sSUFBTCxDQUFVdlEsS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCa0MsS0FBM0IsRUFBWjtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBUEw7O0FBQUE7QUFBQSxFQUEyQ2dtQiwwREFBM0MsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBRU8sSUFBTUgsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx3QkFDUTNjLE1BRFIsRUFDZ0I7QUFDUixXQUFLdUcsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCWSxRQUExQixDQUFtQ0MsT0FBbkMsQ0FBMkMsWUFBM0M7QUFDQSxXQUFLekQsUUFBTCxHQUFnQixRQUFoQjtBQUNBLFdBQUtSLElBQUwsR0FBWSxLQUFLd08sSUFBTCxDQUFVdlEsS0FBVixDQUFnQm5CLFVBQWhCLENBQTJCa0QsSUFBM0IsRUFBWjtBQUNBLFdBQUt3TyxJQUFMLENBQVV0SixVQUFWLENBQXFCQyxNQUFyQixDQUE0QnhDLFFBQTVCLENBQXFDLFdBQXJDLEVBQWtELEtBQUszQyxJQUF2RCxFQUE2RCxJQUE3RDtBQUNBLFdBQUt3TyxJQUFMLENBQVV0SixVQUFWLENBQXFCQyxNQUFyQixDQUE0QjVDLFFBQTVCLENBQXFDLFNBQXJDLEVBQWdELEVBQWhELEVBQW9ELEVBQXBELEVBQXdELEVBQXhELEVBQTRELFdBQTVEOztBQUVBLGdGQUFVMEYsTUFBVjs7QUFFQUEsWUFBTSxDQUFDTixLQUFQO0FBQ0EsV0FBSzZlLFdBQUw7QUFFQSxXQUFLaFksSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCQyxPQUExQixDQUFrQyxVQUFsQyxJQUFnRDtBQUM1QyxtQkFBV29uQixPQUFPLENBQUMsS0FBS3pxQixJQUFMLENBQVVxbUIsSUFBVixFQUFELENBRDBCO0FBRTVDLGdCQUFRLEtBQUtybUI7QUFGK0IsT0FBaEQ7QUFLQXlRLFFBQUUsQ0FBQ3NYLGFBQUgsR0FBbUIsS0FBbkI7QUFFQSxhQUFPLElBQVA7QUFDSDtBQXJCTDtBQUFBO0FBQUEsNEJBdUJZckIsTUF2QlosRUF1Qm9CO0FBQUE7O0FBQ1ovZ0IsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBLFdBQUs0SSxJQUFMLENBQVV0SixVQUFWLENBQXFCQyxNQUFyQixDQUE0QjVDLFFBQTVCLENBQXFDLGFBQXJDLEVBQW9ELEVBQXBELEVBQXdELEVBQXhELEVBQTRELEVBQTVELEVBQWdFLFdBQWhFO0FBQ0EsV0FBS2lNLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JzQyxPQUFoQixDQUF3Qm9CLGVBQXhCLENBQXdDLEtBQXhDO0FBQ0EsV0FBSzZNLElBQUwsQ0FBVXRKLFVBQVYsQ0FBcUJTLE9BQXJCLENBQTZCK2tCLGFBQTdCO0FBQ0EsV0FBS2xjLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0IyRCxNQUFoQixDQUF1QnVCLFdBQXZCLENBQW1DckIsbURBQVcsQ0FBQ0MsS0FBL0M7QUFDQSxXQUFLeU0sSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCRyxPQUExQixDQUFrQ1EsT0FBbEMsQ0FBMEMwTSxFQUFFLENBQUMxTSxPQUE3QztBQUNBME0sUUFBRSxDQUFDMU0sT0FBSCxHQUFhLEVBQWI7QUFDQSxVQUFJdWhCLE1BQU0sR0FBRyxLQUFLOVcsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCQyxPQUF2QztBQUNBLFVBQUk3QyxRQUFRLEdBQUcsS0FBS0EsUUFBcEI7QUFDQSxXQUFLZ08sSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCRyxPQUExQixDQUFrQ08sT0FBbEMsR0FBNEM0aUIsTUFBNUM7O0FBQ0EsVUFBSSxDQUFDLEtBQUtsWSxJQUFMLENBQVV2USxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJpRCxRQUEzQixDQUFvQ2dKLFlBQXBDLEVBQUwsRUFBeUQ7QUFDckQsYUFBSzBGLElBQUwsQ0FBVXRKLFVBQVYsQ0FBcUJTLE9BQXJCLENBQTZCZ2xCLFNBQTdCO0FBQ0g7O0FBQ0QsYUFBTyxJQUFJaFksT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVTRWLE1BQVYsRUFBcUI7QUFDcEMsYUFBSSxDQUFDcmYsSUFBTCxDQUFVdWQsTUFBTSxDQUFDRyxFQUFqQixFQUFxQkgsTUFBTSxDQUFDRyxFQUE1QixFQUErQixDQUFDLENBQWhDLEVBQW1DLENBQW5DLEVBQXNDcm1CLFFBQVEsR0FBRyxLQUFqRDs7QUFDQSxhQUFJLENBQUNpRCxRQUFMOztBQUNBNmhCLGNBQU0sQ0FBQyxTQUFELENBQU4sR0FBb0I7QUFDaEIscUJBQVcsSUFESztBQUVoQixtQkFBUyxLQUFJLENBQUNyZCxNQUFMLENBQVkwSSxlQUFaLENBQTRCMUgsS0FGckI7QUFHaEIsbUJBQVMsS0FBSSxDQUFDaEIsTUFBTCxDQUFZMEksZUFBWixDQUE0QjFILEtBQTVCLENBQWtDNkIsR0FBbEMsQ0FBc0MsVUFBQTJkLENBQUM7QUFBQSxtQkFBSUEsQ0FBQyxDQUFDdmYsSUFBTjtBQUFBLFdBQXZDLENBSE87QUFJaEIscUJBQVd3ZCxNQUpLO0FBS2hCLG9CQUFVLEtBQUksQ0FBQ2xZLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQixDQUEwQkU7QUFMcEIsU0FBcEI7QUFPQXNQLGVBQU87QUFDVixPQVhNLENBQVA7QUFZSDtBQWpETDtBQUFBO0FBQUEsNEJBbURZcUYsS0FuRFosRUFtRG1CO0FBQ1h0UyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsV0FBSzRJLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0IyRCxNQUFoQixDQUF1QnVCLFdBQXZCLENBQW1DckIsbURBQVcsQ0FBQzRtQixNQUEvQztBQUNBLFVBQUlwRCxNQUFNLEdBQUcsS0FBSzlXLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQixDQUEwQkMsT0FBdkM7O0FBQ0EsVUFBSWlpQixNQUFNLENBQUNzRixNQUFQLENBQWMzZCxPQUFkLElBQXlCcVksTUFBTSxDQUFDdUYsUUFBUCxDQUFnQjVkLE9BQTdDLEVBQXNEO0FBQ2xELGFBQUt1QixJQUFMLENBQVV0SixVQUFWLENBQXFCQyxNQUFyQixDQUE0QjVDLFFBQTVCLENBQXFDLGVBQXJDLEVBQXNELEVBQXRELEVBQTBELEVBQTFELEVBQThEMFYsS0FBSyxDQUFDdlgsUUFBTixFQUE5RCxFQUFnRixXQUFoRjtBQUNILE9BRkQsTUFFTztBQUNILGFBQUs4TixJQUFMLENBQVV0SixVQUFWLENBQXFCQyxNQUFyQixDQUE0QjVDLFFBQTVCLENBQXFDLGFBQXJDLEVBQW9ELG9CQUFwRCxFQUEwRSxFQUExRSxFQUE4RTBWLEtBQUssQ0FBQ3ZYLFFBQU4sRUFBOUUsRUFBZ0csV0FBaEc7QUFDSDs7QUFDRCxhQUFPLElBQUlpUyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVNFYsTUFBVixFQUFxQjtBQUNwQ2xELGNBQU0sQ0FBQyxTQUFELENBQU4sR0FBb0I7QUFDaEIscUJBQVcsS0FESztBQUVoQixtQkFBU3JOO0FBRk8sU0FBcEI7QUFJQXRTLGVBQU8sQ0FBQ3NTLEtBQVIsQ0FBY0EsS0FBZDtBQUNBckYsZUFBTztBQUNWLE9BUE0sQ0FBUDtBQVFIO0FBcEVMOztBQUFBO0FBQUEsRUFBc0MrViw2REFBdEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRU8sSUFBTW1DLG1CQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0JBQ1E3aUIsTUFEUixFQUNnQjtBQUNSLG1GQUFVQSxNQUFWLEVBRFEsQ0FFUjs7O0FBQ0EsV0FBS3pILFFBQUwsR0FBZ0IsV0FBaEI7QUFDQSxXQUFLUixJQUFMLEdBQVkseUJBQVo7QUFFQSxhQUFPLElBQVA7QUFDSDtBQVJMOztBQUFBO0FBQUEsRUFBeUMyb0IsNkRBQXpDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVPLElBQU1BLG9CQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0JBQ1ExZ0IsTUFEUixFQUNnQjtBQUFBOztBQUNSLG9GQUFVQSxNQUFWLEVBRFEsQ0FFUjs7O0FBQ0EsVUFBSW5JLFFBQVEsR0FBRyxLQUFLME8sSUFBTCxDQUFVdlEsS0FBVixDQUFnQjZCLFFBQS9COztBQUNBMlEsUUFBRSxDQUFDc2EsaUJBQUgsR0FBdUI7QUFBQSxlQUNuQixLQUFJLENBQUN2YyxJQUFMLENBQVV2USxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJpRCxRQUEzQixDQUFvQ2tyQixjQUFwQyxLQUF1REMsUUFBdkQsR0FBa0UsS0FEL0M7QUFBQSxPQUF2Qjs7QUFFQXhhLFFBQUUsQ0FBQ3NZLFNBQUgsR0FBZXRZLEVBQUUsQ0FBQ3NhLGlCQUFILEVBQWYsQ0FOUSxDQU9SOztBQUNBdGEsUUFBRSxDQUFDMFgsb0JBQUgsR0FBMEIsS0FBS2hmLElBQUwsQ0FBVXVDLElBQVYsQ0FBZSxJQUFmLENBQTFCLENBUlEsQ0FTUjs7QUFDQSxXQUFLOEMsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQWhCLENBQXdCSSxXQUF4QixDQUFvQyxLQUFwQyxFQVZRLENBWVI7QUFDQTtBQUNBOztBQUNBOFAsUUFBRSxDQUFDeWEsV0FBSCxHQUFpQixVQUFDMXFCLFFBQUQ7QUFBQSxlQUFjLEtBQUksQ0FBQzJxQixPQUFMLENBQWEzcUIsUUFBYixFQUF1QixLQUF2QixDQUFkO0FBQUEsT0FBakI7O0FBRUFpUSxRQUFFLENBQUNrSSxZQUFILENBQWdCN08sS0FBaEIsQ0FBc0IsNkJBQXRCLElBQXVEZ2QsNERBQXZEO0FBRUEsYUFBTyxJQUFQO0FBQ0g7QUFyQkw7QUFBQTtBQUFBLCtCQXVCZXRtQixRQXZCZixFQXVCeUI7QUFDakIsVUFBSSxLQUFLNHFCLFdBQUwsQ0FBaUI1cUIsUUFBakIsQ0FBSixFQUFnQztBQUM1QixjQUFNLDJCQUEyQkEsUUFBM0IsR0FBc0MsR0FBNUM7QUFDSCxPQUZELE1BRU8sSUFBSUEsUUFBUSxLQUFLLGFBQWpCLEVBQWdDO0FBQ25DLGVBQU8sS0FBS2dPLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JuQixVQUFoQixDQUEyQmtELElBQTNCLEVBQVA7QUFDSCxPQUZNLE1BRUEsSUFBSXlRLEVBQUUsQ0FBQ2tJLFlBQUgsS0FBb0IzYixTQUFwQixJQUNQeVQsRUFBRSxDQUFDa0ksWUFBSCxDQUFnQixPQUFoQixFQUF5Qm5ZLFFBQXpCLE1BQXVDeEQsU0FEcEMsRUFDK0M7QUFDbEQsY0FBTSxzQkFBc0J3RCxRQUF0QixHQUFpQyxHQUF2QztBQUNIOztBQUNELGFBQU9pUSxFQUFFLENBQUNrSSxZQUFILENBQWdCLE9BQWhCLEVBQXlCblksUUFBekIsQ0FBUDtBQUNIO0FBakNMO0FBQUE7QUFBQSwwQkFtQ1V3UixhQW5DVixFQW1DeUI7QUFDakIsYUFBTyxLQUFLeEQsSUFBTCxDQUFVdEosVUFBVixDQUFxQlMsT0FBckIsQ0FBNkI0TSxLQUE3QixDQUFtQ1AsYUFBbkMsQ0FBUDtBQUNIO0FBckNMO0FBQUE7QUFBQSxnQ0F1Q2dCeFIsUUF2Q2hCLEVBdUMwQjtBQUNsQixhQUFPQSxRQUFRLENBQUM4ZixVQUFULENBQW9CLGtCQUFwQixLQUNIOWYsUUFBUSxDQUFDOGYsVUFBVCxDQUFvQixnQkFBcEIsQ0FERyxJQUVIOWYsUUFBUSxDQUFDOGYsVUFBVCxDQUFvQixnQkFBcEIsQ0FGSjtBQUdIO0FBRUQ7Ozs7Ozs7Ozs7O0FBN0NKO0FBQUE7QUFBQSx5QkF1RFMrSyxTQXZEVCxFQXVEb0JDLE1BdkRwQixFQXVENEJDLFVBdkQ1QixFQXVEd0NDLFlBdkR4QyxFQXVEc0RockIsUUF2RHRELEVBdURnRTtBQUN4RCxVQUFJQSxRQUFRLEtBQUssV0FBakIsRUFBOEI7QUFDMUIsWUFBSWdELFdBQVcsR0FBRyxLQUFLeUUsTUFBTCxDQUFZMEksZUFBWixDQUE0QnhILElBQTlDO0FBQ0EsWUFBSXBGLE9BQU8sR0FBRyxLQUFLeUssSUFBTCxDQUFVdEosVUFBVixDQUFxQitELEtBQXJCLENBQTJCd2lCLFlBQTNCLENBQXdDSixTQUF4QyxDQUFkLENBRjBCLENBRzFCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGFBQUtwakIsTUFBTCxDQUFZMEksZUFBWixDQUE0QjFILEtBQTVCLENBQWtDK00sSUFBbEMsQ0FBdUM7QUFDbkMsa0JBQVF4UyxXQUQyQjtBQUVuQyxzQkFBWWhELFFBRnVCO0FBR25DO0FBQ0Esa0JBQVErcUIsVUFKMkI7QUFLbkMsb0JBQVVDLFlBTHlCO0FBTW5DLHdCQUFjem5CLE9BQU8sQ0FBQzJuQixVQU5hO0FBT25DLHFCQUFXM25CLE9BQU8sQ0FBQzRuQjtBQVBnQixTQUF2QztBQVNBLGFBQUsxakIsTUFBTCxDQUFZMEksZUFBWixDQUE0QnhILElBQTVCLEdBQW1DM0YsV0FBVyxHQUFHLENBQWpEO0FBQ0EsYUFBS3lFLE1BQUwsQ0FBWTBJLGVBQVosQ0FBNEJ6SCxJQUE1QixHQUFtQ3FpQixVQUFuQztBQUNIO0FBQ0o7QUEzRUw7QUFBQTs7QUE2RUk7Ozs7QUE3RUosK0JBaUZlO0FBQ1AsVUFBSW5vQixTQUFTLEdBQUcsS0FBS29MLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQztBQUNBQSxlQUFTLENBQUNHLE9BQVYsQ0FBa0JLLGdCQUFsQixDQUFtQyxLQUFLcUUsTUFBTCxDQUFZMEksZUFBWixDQUE0QjFILEtBQS9EO0FBQ0E3RixlQUFTLENBQUNHLE9BQVYsQ0FBa0JDLFdBQWxCLENBQThCLEtBQUt5RSxNQUFMLENBQVkwSSxlQUFaLENBQTRCeEgsSUFBMUQ7QUFDQS9GLGVBQVMsQ0FBQ0csT0FBVixDQUFrQkUsUUFBbEIsQ0FBMkIsS0FBS3dFLE1BQUwsQ0FBWTBJLGVBQVosQ0FBNEJ4SCxJQUF2RDtBQUNBL0YsZUFBUyxDQUFDRyxPQUFWLENBQWtCRyxXQUFsQixDQUE4QixLQUFLdUUsTUFBTCxDQUFZMEksZUFBWixDQUE0QnpILElBQTFEO0FBQ0E5RixlQUFTLENBQUNHLE9BQVYsQ0FBa0JJLFFBQWxCLENBQTJCLEtBQUtzRSxNQUFMLENBQVkwSSxlQUFaLENBQTRCekgsSUFBdkQ7QUFDQTlGLGVBQVMsQ0FBQ0csT0FBVixDQUFrQk0sZ0JBQWxCLENBQW1DLEtBQUtvRSxNQUFMLENBQVkwSSxlQUFaLENBQTRCeEgsSUFBL0Q7QUFDSDtBQXpGTDtBQUFBO0FBQUEsNkJBMkZheWlCLEdBM0ZiLEVBMkZrQjtBQUNWLFVBQUlDLFlBQVksR0FBRyxJQUFJQyxHQUFKLEVBQW5COztBQUNBLFVBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUN0QixZQUFJQSxJQUFJLENBQUNDLE1BQUwsS0FBZ0JqdkIsU0FBcEIsRUFBK0I7QUFDM0I2dUIsc0JBQVksQ0FBQ3ZoQixHQUFiLENBQWlCMGhCLElBQUksQ0FBQ0MsTUFBdEI7QUFDSDs7QUFDRCxZQUFJRCxJQUFJLENBQUNoVCxJQUFULEVBQWU7QUFDWGdULGNBQUksQ0FBQ2hULElBQUwsQ0FBVTNCLE9BQVYsQ0FBa0IsVUFBQzZVLFNBQUQ7QUFBQSxtQkFBZUgsU0FBUyxDQUFDRyxTQUFELENBQXhCO0FBQUEsV0FBbEI7QUFDSDs7QUFDRCxZQUFJRixJQUFJLENBQUNHLE1BQVQsRUFBaUI7QUFDYkgsY0FBSSxDQUFDRyxNQUFMLENBQVk5VSxPQUFaLENBQW9CLFVBQUM2VSxTQUFEO0FBQUEsbUJBQWVILFNBQVMsQ0FBQ0csU0FBRCxDQUF4QjtBQUFBLFdBQXBCO0FBQ0g7O0FBQ0QsWUFBSUYsSUFBSSxDQUFDSSxTQUFULEVBQW9CO0FBQ2hCSixjQUFJLENBQUNJLFNBQUwsQ0FBZS9VLE9BQWYsQ0FBdUIsVUFBQzZVLFNBQUQ7QUFBQSxtQkFBZUgsU0FBUyxDQUFDRyxTQUFELENBQXhCO0FBQUEsV0FBdkI7QUFDSDtBQUNKLE9BYkQ7O0FBY0FILGVBQVMsQ0FBQ0gsR0FBRCxDQUFUO0FBQ0EsYUFBT1MsS0FBSyxDQUFDQyxJQUFOLENBQVdULFlBQVgsQ0FBUDtBQUNIO0FBRUQ7Ozs7QUEvR0o7QUFBQTtBQUFBLGtDQWtIa0I7QUFDVixVQUFJdkcsTUFBTSxHQUFHLEtBQUs5VyxJQUFMLENBQVV2USxLQUFWLENBQWdCbUYsU0FBaEIsQ0FBMEJDLE9BQXZDLENBRFUsQ0FFVjs7QUFDQSxVQUFJbWUsS0FBSyxHQUFHLEVBQVosQ0FIVSxDQUlWOztBQUNBLFVBQUlvSyxHQUFKOztBQUNBLFVBQUk7QUFDQSxZQUFJN04sS0FBSyxHQUFHdE4sRUFBRSxDQUFDc04sS0FBSCxDQUFTLEtBQUt2ZCxRQUFkLEVBQXdCLEtBQUtSLElBQTdCLENBQVo7QUFDQTRyQixXQUFHLEdBQUduYixFQUFFLENBQUM4YixZQUFILENBQWdCeE8sS0FBSyxDQUFDeU8sR0FBdEIsRUFBMkIsS0FBS2hzQixRQUFoQyxFQUEwQ3VkLEtBQUssQ0FBQzBPLEtBQWhELENBQU47QUFDQWpMLGFBQUssR0FBRyxLQUFLa0wsUUFBTCxDQUFjZCxHQUFkLENBQVI7QUFDSCxPQUpELENBSUUsT0FBTzNULEtBQVAsRUFBYztBQUNaO0FBQ0FxTixjQUFNLENBQUMsUUFBRCxDQUFOLEdBQW1CO0FBQ2YscUJBQVcsS0FESTtBQUVmLG1CQUFTck4sS0FGTTtBQUdmLG1CQUFTLElBSE07QUFJZixtQkFBU3VKO0FBSk0sU0FBbkI7QUFNQTdiLGVBQU8sQ0FBQ3NTLEtBQVIsQ0FBY0EsS0FBZDtBQUNBdFMsZUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS3BGLFFBQWpCLEVBQTJCLEtBQUtSLElBQWhDO0FBQ0EsZUFBTyxLQUFQO0FBQ0gsT0FyQlMsQ0FzQlY7OztBQUNBc2xCLFlBQU0sQ0FBQyxRQUFELENBQU4sR0FBbUI7QUFDZixtQkFBVyxJQURJO0FBRWYsZUFBT3NHLEdBRlE7QUFHZixpQkFBU0EsR0FBRyxDQUFDNVMsSUFBSixDQUFTM08sTUFBVCxLQUFvQixDQUhkO0FBSWYsaUJBQVNtWDtBQUpNLE9BQW5CO0FBTUEsYUFBTyxJQUFQO0FBQ0g7QUFoSkw7O0FBQUE7QUFBQSxFQUEwQ3VGLDZEQUExQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGTyxJQUFJNEYsYUFBYSxtdkNBQWpCO0FBbUNBLElBQU03ZCxlQUFiO0FBQUE7QUFBQTtBQUVJOzs7Ozs7Ozs7QUFTQSwyQkFBWU4sSUFBWixFQUFrQitFLEdBQWxCLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ25CLFNBQUsvRSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLK0UsR0FBTCxHQUFXQSxHQUFYO0FBRUEsU0FBS3FaLGFBQUwsR0FBcUIsS0FBS3BlLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQixDQUEwQlksUUFBL0M7QUFFQSxTQUFLRSxRQUFMLEdBQWdCLEtBQUtxUCxHQUFMLENBQVMxRSxJQUFULENBQWMsNEJBQWQsQ0FBaEI7QUFDQSxTQUFLMUssS0FBTCxHQUFhLEtBQUtvUCxHQUFMLENBQVMxRSxJQUFULENBQWMseUJBQWQsQ0FBYjtBQUNBLFNBQUs1SyxPQUFMLEdBQWUsS0FBS3NQLEdBQUwsQ0FBUzFFLElBQVQsQ0FBYywyQkFBZCxDQUFmLENBUm1CLENBVW5COztBQUNBLFNBQUtMLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JuQixVQUFoQixDQUEyQmtELElBQTNCLENBQWdDc2YsU0FBaEMsQ0FBMEM7QUFBQSxhQUFNLEtBQUksQ0FBQzlRLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JzQyxPQUFoQixDQUF3Qm9CLGVBQXhCLENBQXdDLElBQXhDLENBQU47QUFBQSxLQUExQztBQUNIOztBQXZCTDtBQUFBOztBQXlCSTs7O0FBekJKLHFDQTRCcUI7QUFDYm9ELE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IwUixPQUFoQixDQUF3QjtBQUNwQkMsaUJBQVMsRUFBRSxLQUFLbkQsR0FBTCxDQUFTc1osTUFBVCxHQUFrQkM7QUFEVCxPQUF4QixFQUVHLElBRkg7QUFHSDtBQWhDTDtBQUFBOztBQWtDSTs7OztBQWxDSix3Q0FzQ3dCO0FBQ2hCLFVBQUlDLGNBQWMsR0FBRyxLQUFLeFosR0FBTCxDQUFTc1osTUFBVCxHQUFrQkMsR0FBdkM7QUFDQSxVQUFJRSxpQkFBaUIsR0FBRyxLQUFLelosR0FBTCxDQUFTc1osTUFBVCxHQUFrQkMsR0FBbEIsR0FBd0IsS0FBS3ZaLEdBQUwsQ0FBUzBaLFdBQVQsRUFBaEQ7QUFDQSxVQUFJQyxnQkFBZ0IsR0FBR25vQixDQUFDLENBQUNnVyxNQUFELENBQUQsQ0FBVXJFLFNBQVYsS0FBd0IzUixDQUFDLENBQUNnVyxNQUFELENBQUQsQ0FBVW5ILE1BQVYsRUFBL0M7QUFDQSxVQUFJdVosYUFBYSxHQUFHcG9CLENBQUMsQ0FBQ2dXLE1BQUQsQ0FBRCxDQUFVckUsU0FBVixFQUFwQixDQUpnQixDQUtoQjs7QUFDQSxhQUFTd1csZ0JBQWdCLEdBQUdILGNBQXBCLElBQXdDSSxhQUFhLEdBQUdILGlCQUFoRTtBQUNIO0FBN0NMO0FBQUE7O0FBK0NJOzs7O0FBL0NKLDRCQW1EWTtBQUNKLFdBQUtKLGFBQUwsQ0FBbUIzb0IsT0FBbkIsQ0FBMkIsU0FBM0I7QUFDQSxXQUFLMm9CLGFBQUwsQ0FBbUIxb0IsUUFBbkIsQ0FBNEIsSUFBNUI7QUFDQSxXQUFLMG9CLGFBQUwsQ0FBbUJ6b0IsS0FBbkIsQ0FBeUIsSUFBekI7QUFDQSxXQUFLeW9CLGFBQUwsQ0FBbUJodEIsTUFBbkIsQ0FBMEIsS0FBMUI7QUFDQSxXQUFLZ3RCLGFBQUwsQ0FBbUJ4b0IsVUFBbkIsQ0FBOEIwUCxTQUE5QjtBQUNBLFdBQUs4WSxhQUFMLENBQW1Cdm9CLGNBQW5CLENBQWtDeVAsU0FBbEM7QUFDSDtBQTFETDtBQUFBOztBQXFFSTs7OztBQXJFSixtQ0F5RW1Cc1osZ0JBekVuQixFQXlFcUM7QUFDN0I7QUFDQSxVQUFJbnBCLE9BQU8sR0FBR3dNLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPd1gsU0FBUCxDQUFpQitFLGdCQUFnQixDQUFDQyxPQUFsQyxDQUFkO0FBQ0EsVUFBSW5wQixRQUFRLEdBQUd1TSxFQUFFLENBQUNJLEdBQUgsQ0FBT3dYLFNBQVAsQ0FBaUIrRSxnQkFBZ0IsQ0FBQ0UsUUFBbEMsQ0FBZjtBQUNBLFVBQUlucEIsS0FBSyxHQUFHc00sRUFBRSxDQUFDSSxHQUFILENBQU93WCxTQUFQLENBQWlCK0UsZ0JBQWdCLENBQUNHLEtBQWxDLENBQVo7QUFDQSxVQUFJL1gsSUFBSSxHQUFHL0UsRUFBRSxDQUFDSSxHQUFILENBQU93WCxTQUFQLENBQWlCK0UsZ0JBQWdCLENBQUNsRCxJQUFsQyxDQUFYO0FBQ0EsVUFBSXhrQixJQUFJLEdBQUcrSyxFQUFFLENBQUNJLEdBQUgsQ0FBT3dYLFNBQVAsQ0FBaUIrRSxnQkFBZ0IsQ0FBQ0ksSUFBbEMsQ0FBWCxDQU42QixDQVE3Qjs7QUFDQSxVQUFJQyxTQUFTLEdBQUcsS0FBS2pmLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQitDLE1BQTNCLEVBQWhCOztBQUNBLFVBQUk2dEIsU0FBUyxJQUFJdnBCLFFBQVEsQ0FBQ2lFLFdBQVQsT0FBMkIsVUFBNUMsRUFBd0Q7QUFDcERqRSxnQkFBUSxHQUFHLFdBQVg7QUFDQUMsYUFBSyxHQUFHLFdBQVI7QUFDQUYsZUFBTyxHQUFHLG9CQUFWO0FBQ0gsT0FkNEIsQ0FnQjdCOzs7QUFDQSxVQUFJQyxRQUFRLENBQUNpRSxXQUFULE9BQTJCLFlBQTNCLElBQTJDaEUsS0FBSyxDQUFDZ0UsV0FBTixPQUF3QixTQUF2RSxFQUFrRjtBQUM5RWhFLGFBQUssR0FBRyxxQkFBUjtBQUNILE9BbkI0QixDQXFCN0I7OztBQUNBLFVBQUlELFFBQVEsS0FBSyxZQUFiLElBQTZCQyxLQUFLLEtBQUssV0FBM0MsRUFBd0Q7QUFDcERELGdCQUFRLEdBQUcsV0FBWDtBQUNILE9BeEI0QixDQTBCN0I7OztBQUNBRCxhQUFPLEdBQUcsS0FBS3VLLElBQUwsQ0FBVS9HLFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCekQsT0FBN0IsQ0FBVjtBQUNBLFdBQUsyb0IsYUFBTCxDQUFtQjNvQixPQUFuQixDQUEyQkEsT0FBM0I7QUFDQSxXQUFLMm9CLGFBQUwsQ0FBbUIxb0IsUUFBbkIsQ0FBNEJBLFFBQTVCO0FBQ0EsV0FBSzBvQixhQUFMLENBQW1Cem9CLEtBQW5CLENBQXlCQSxLQUF6QixFQTlCNkIsQ0ErQjdCOztBQUNBLFdBQUtxSyxJQUFMLENBQVV0SixVQUFWLENBQXFCQyxNQUFyQixDQUE0QjVDLFFBQTVCLENBQXFDLGNBQXJDLEVBQXFEMkIsUUFBckQsRUFBK0RDLEtBQS9ELEVBQXNFRixPQUF0RSxFQUErRSxXQUEvRSxFQWhDNkIsQ0FrQzdCOztBQUNBLFdBQUt1SyxJQUFMLENBQVV0SixVQUFWLENBQXFCZ0gsWUFBckIsQ0FBa0NDLEVBQWxDLENBQXFDeVYscUJBQXJDLEdBbkM2QixDQXFDN0I7O0FBQ0EsVUFBSTFZLElBQUksR0FBRzRGLGVBQWUsQ0FBQzRlLGtCQUFoQixDQUFtQ2hvQixJQUFuQyxDQUFYO0FBQ0EsV0FBS2tuQixhQUFMLENBQW1CeG9CLFVBQW5CLENBQThCMFAsU0FBOUI7O0FBQ0EsVUFBSTVLLElBQUksS0FBSyxJQUFULElBQWlCQSxJQUFJLEtBQUtsTSxTQUE5QixFQUF5QztBQUNyQyxhQUFLNHZCLGFBQUwsQ0FBbUJ4b0IsVUFBbkIsQ0FBOEI0UixJQUE5QixDQUFtQzlNLElBQW5DO0FBQ0gsT0ExQzRCLENBNEM3Qjs7O0FBQ0EsVUFBSXlrQixhQUFhLEdBQUcsS0FBS25mLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQixDQUEwQkMsT0FBMUIsQ0FBa0NFLE9BQXREO0FBQ0EsV0FBS3FwQixhQUFMLENBQW1Cdm9CLGNBQW5CLENBQWtDeVAsU0FBbEM7O0FBQ0EsVUFBSTZaLGFBQWEsQ0FBQzFnQixPQUFsQixFQUEyQjtBQUN2QixZQUFJMmdCLGNBQWMsR0FBRyxFQUFyQjtBQUNBLGFBQUtwZixJQUFMLENBQVV2USxLQUFWLENBQWdCbUYsU0FBaEIsQ0FBMEJDLE9BQTFCLENBQWtDdW5CLE1BQWxDLENBQXlDcEosS0FBekMsQ0FBK0NuSyxPQUEvQyxDQUF1RCxVQUFDbk8sSUFBRCxFQUFVO0FBQzdELGNBQUl5a0IsYUFBYSxDQUFDbk0sS0FBZCxDQUFvQm5XLE9BQXBCLENBQTRCbkMsSUFBNUIsTUFBc0MsQ0FBQyxDQUEzQyxFQUE4QztBQUMxQzBrQiwwQkFBYyxDQUFDNVgsSUFBZixDQUFvQjlNLElBQXBCO0FBQ0g7QUFDSixTQUpEO0FBS0EsYUFBSzBqQixhQUFMLENBQW1Cdm9CLGNBQW5CLENBQWtDdXBCLGNBQWxDO0FBQ0g7QUFDSjtBQUVEOzs7O0FBbklKO0FBQUE7QUFBQSxvQ0FzSW9CUixnQkF0SXBCLEVBc0lzQztBQUM5QixXQUFLUyxjQUFMLENBQW9CVCxnQkFBcEIsRUFEOEIsQ0FHOUI7QUFDQTs7QUFFQSxVQUFJLENBQUMsS0FBSy9rQixpQkFBTCxFQUFMLEVBQStCO0FBQzNCLGFBQUt5bEIsb0JBQUw7QUFDQSxhQUFLMWMsY0FBTDtBQUNIO0FBQ0o7QUFoSkw7QUFBQTtBQUFBLDJDQWtKMkI7QUFDbkIsV0FBS21DLEdBQUwsQ0FBUzFFLElBQVQsQ0FBYyw0QkFBZCxFQUE0QzBHLElBQTVDLEdBQW1EbkgsT0FBbkQsQ0FBMkQsSUFBM0Q7QUFDSDtBQXBKTDtBQUFBO0FBQUEseUNBc0p5QjZKLEtBdEp6QixFQXNKZ0M4VixnQkF0SmhDLEVBc0prRDtBQUMxQyxXQUFLdmYsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCWSxRQUExQixDQUFtQ0UsUUFBbkMsQ0FBNEMsVUFBNUM7QUFDQSxXQUFLc0ssSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCWSxRQUExQixDQUFtQ0csS0FBbkMsQ0FBeUMsZ0JBQXpDO0FBQ0EsVUFBSUYsT0FBTywwSkFJUWdVLEtBQUssQ0FBQ29TLE9BSmQsd0JBSW1DNVosRUFBRSxDQUFDSSxHQUFILENBQU93WCxTQUFQLENBQWlCcFEsS0FBSyxDQUFDK1YsSUFBdkIsQ0FKbkMsV0FBWDs7QUFNQSxVQUFJL1YsS0FBSyxDQUFDZ1csU0FBTixJQUFtQmhXLEtBQUssQ0FBQ2dXLFNBQU4sQ0FBZ0I1akIsTUFBdkMsRUFBK0M7QUFDM0MsWUFBSTZqQixhQUFhLEdBQUdqVyxLQUFLLENBQUNnVyxTQUFOLENBQWdCM1EsS0FBaEIsQ0FBc0IsQ0FBQyxDQUF2QixFQUEwQixDQUExQixDQUFwQjs7QUFDQSxZQUFJNFEsYUFBYSxDQUFDMXRCLFFBQWQsQ0FBdUI4YyxLQUF2QixDQUE2QixDQUE3QixFQUFnQyxDQUFDLENBQWpDLE1BQXdDeVEsZ0JBQTVDLEVBQThEO0FBQzFERyx1QkFBYSxDQUFDakMsTUFBZCxJQUF3QixLQUFLemQsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1GLFNBQWhCLENBQTBCQyxPQUExQixDQUFrQzVDLFVBQWxDLENBQTZDb3BCLFVBQXJFO0FBQ0g7O0FBQ0QsWUFBSXNFLGtCQUFrQixHQUFFbFcsS0FBSyxDQUFDZ1csU0FBTixDQUFnQm5qQixHQUFoQixDQUFvQixVQUFBc2pCLEtBQUs7QUFBQSxpQkFDN0MsMENBQWdDQSxLQUFLLENBQUM1dEIsUUFBdEMseURBQzZCNHRCLEtBQUssQ0FBQ25DLE1BRG5DLGNBRDZDO0FBQUEsU0FBekIsRUFFa0MxTyxJQUZsQyxDQUV1QyxFQUZ2QyxDQUF4QjtBQUdBdFosZUFBTyxtQkFBWWtxQixrQkFBWixXQUFQO0FBQ0g7O0FBQ0QsV0FBSzNmLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtRixTQUFoQixDQUEwQlksUUFBMUIsQ0FBbUNDLE9BQW5DLENBQTJDQSxPQUEzQztBQUNIO0FBMUtMO0FBQUE7QUFBQSx1Q0E0RDhCb3FCLFlBNUQ5QixFQTRENEM7QUFDcEMsV0FBSyxJQUFJdFksQ0FBQyxHQUFHc1ksWUFBWSxDQUFDaGtCLE1BQWIsR0FBb0IsQ0FBakMsRUFBb0MwTCxDQUFDLElBQUksQ0FBekMsRUFBNENBLENBQUMsSUFBRyxDQUFoRCxFQUFtRDtBQUMvQyxZQUFJLGNBQWNzWSxZQUFZLENBQUN0WSxDQUFELENBQTlCLEVBQW1DO0FBQy9CLGlCQUFPc1ksWUFBWSxDQUFDdFksQ0FBRCxDQUFaLENBQWdCdVksUUFBaEIsQ0FBeUJwbEIsSUFBaEM7QUFDSDtBQUNKOztBQUNELGFBQU8sSUFBUDtBQUNIO0FBbkVMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBLElBQU0yVyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFTcmYsUUFBVCxFQUFtQit0QixZQUFuQixFQUFpQ0MsV0FBakMsRUFBOEM7QUFDMUQsTUFBSUQsWUFBWSxLQUFLdnhCLFNBQXJCLEVBQWdDO0FBQzVCdXhCLGdCQUFZLEdBQUcvdEIsUUFBZjtBQUNIOztBQUNELDJMQUkyREEsUUFKM0QsdUVBS21EQSxRQUxuRCw0Q0FNd0JndUIsV0FOeEIsdUNBTWdFaHVCLFFBTmhFLGdDQU9VK3RCLFlBUFY7QUFTSCxDQWJEOztBQWVPLElBQUlFLFVBQVUsa1BBU2Y1TyxPQUFPLENBQUMsV0FBRCxDQVRRLG1CQVVmQSxPQUFPLENBQUMsa0JBQUQsRUFBcUIsY0FBckIsQ0FWUSxtQkFXZkEsT0FBTyxDQUFDLDhCQUFELEVBQWlDLFVBQWpDLENBWFEsbUJBWWZBLE9BQU8sQ0FBQyxtQkFBRCxFQUFzQixlQUF0QixDQVpRLG1CQWFmQSxPQUFPLENBQUMsWUFBRCxFQUFlLFFBQWYsQ0FiUSxtQkFjZkEsT0FBTyxDQUFDLGVBQUQsRUFBa0IsV0FBbEIsRUFBK0IsSUFBL0IsQ0FkUSxtQkFlZkEsT0FBTyxDQUFDLGFBQUQsRUFBZ0IsU0FBaEIsRUFBMkIsSUFBM0IsQ0FmUSxtQkFnQmZBLE9BQU8sQ0FBQyxvQkFBRCxFQUF1QixVQUF2QixFQUFtQyxJQUFuQyxDQWhCUSxtQkFpQmZBLE9BQU8sQ0FBQyw2QkFBRCxFQUFnQyxvQkFBaEMsRUFBc0QsSUFBdEQsQ0FqQlEsbUJBa0JmQSxPQUFPLENBQUMsZUFBRCxFQUFrQixNQUFsQixFQUEwQixJQUExQixDQWxCUSwyaERBQWQ7QUFpRFA7Ozs7Ozs7Ozs7OztBQVlPLElBQUk2TyxjQUFjLEdBQUcsQ0FDeEI7QUFDQSxXQUZ3QixFQUd4QjtBQUNBLGtCQUp3QixFQUt4Qiw4QkFMd0IsRUFNeEIsbUJBTndCLEVBT3hCLFlBUHdCLEVBUXhCLG1CQVJ3QixDQUFyQjtBQVdBLElBQU1DLGVBQWUsR0FBRyxDQUMzQixlQUQyQixFQUUzQixhQUYyQixFQUczQixvQkFIMkIsRUFJM0IsZUFKMkIsRUFLM0IsNkJBTDJCLENBQXhCO0FBUVAsSUFBTUMsc0JBQXNCLEdBQUcsQ0FBQyxlQUFELEVBQWtCLGFBQWxCLENBQS9CO0FBRU8sSUFBTXhqQixpQkFBaUIsR0FBRyxDQUFDLFdBQUQsRUFBYyxrQkFBZCxFQUFrQyx5QkFBbEMsRUFDQyxtQkFERCxFQUNzQixZQUR0QixFQUNvQyxtQkFEcEMsQ0FBMUI7QUFHQSxJQUFNRyxpQkFBaUIsR0FBRyxDQUFDLFdBQUQsRUFBYyxrQkFBZCxFQUFrQyx5QkFBbEMsRUFDQyxtQkFERCxFQUNzQixZQUR0QixFQUNvQyxtQkFEcEMsRUFFQyxlQUZELEVBRWtCLGFBRmxCLEVBRWlDLG9CQUZqQyxFQUdDLGVBSEQsRUFHa0IsNkJBSGxCLENBQTFCOztJQUtEc2pCLFcsR0FDRixxQkFBWXJnQixJQUFaLEVBQWtCaE8sUUFBbEIsRUFBNEJ5SyxRQUE1QixFQUFzQztBQUFBOztBQUNsQyxPQUFLdUQsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS2hPLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS3lLLFFBQUwsR0FBZ0JBLFFBQVEsSUFBSSxFQUE1QjtBQUNBLE9BQUs2akIsS0FBTCxHQUFhLElBQWI7QUFDQSxPQUFLclMsTUFBTCxHQUFjLElBQWQ7QUFDSCxDOztBQUdFLFNBQVN6UixhQUFULENBQXVCeEssUUFBdkIsRUFBaUN5SyxRQUFqQyxFQUEyQztBQUM5QyxTQUFPO0FBQUMsZ0JBQVk3TSxFQUFFLENBQUNDLFVBQUgsQ0FBY21DLFFBQWQsQ0FBYjtBQUFzQ3lLLFlBQVEsRUFBRTdNLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjNE0sUUFBUSxJQUFJLEVBQTFCO0FBQWhELEdBQVA7QUFDSDtBQUVNLFNBQVN6RixvQkFBVCxDQUE4QnVwQixnQkFBOUIsRUFBZ0RDLGFBQWhELEVBQStEO0FBQ2xFLE1BQUlELGdCQUFKLEVBQXNCO0FBQ2xCLFFBQUlqbEIsS0FBSyxHQUFHK1QsSUFBSSxDQUFDRSxLQUFMLENBQVdnUixnQkFBWCxDQUFaO0FBQ0FqbEIsU0FBSyxHQUFHQSxLQUFLLENBQUNnQixHQUFOLENBQVUsVUFBQVYsSUFBSTtBQUFBLGFBQUlZLGFBQWEsQ0FBQ1osSUFBSSxDQUFDNUosUUFBTixFQUFnQjRKLElBQUksQ0FBQ2EsUUFBckIsQ0FBakI7QUFBQSxLQUFkLENBQVI7QUFDQStqQixpQkFBYSxDQUFDbGxCLEtBQUQsQ0FBYjtBQUNIO0FBQ0o7QUFFTSxTQUFTbWxCLHNCQUFULENBQWdDRCxhQUFoQyxFQUErQztBQUNsRCxTQUFPblIsSUFBSSxDQUFDQyxTQUFMLENBQWVrUixhQUFhLEdBQUdsa0IsR0FBaEIsQ0FBb0IsVUFBQVYsSUFBSSxFQUFJO0FBQzlDLFdBQU87QUFDSDVKLGNBQVEsRUFBRTRKLElBQUksQ0FBQzVKLFFBQUwsRUFEUDtBQUVIeUssY0FBUSxFQUFFYixJQUFJLENBQUNhLFFBQUw7QUFGUCxLQUFQO0FBSUgsR0FMcUIsQ0FBZixDQUFQO0FBTUg7QUFFTSxTQUFTUix1QkFBVCxDQUFpQ3VrQixhQUFqQyxFQUFnRDtBQUNuRCxTQUFPNXdCLEVBQUUsQ0FBQ2tKLFlBQUgsQ0FBZ0IsWUFBTTtBQUN6QixRQUFJa1YsTUFBTSxHQUFHLEVBQWI7QUFDQXdTLGlCQUFhLEdBQUczWCxPQUFoQixDQUF3QixVQUFBak4sSUFBSTtBQUFBLGFBQ3hCb1MsTUFBTSxDQUFDcFMsSUFBSSxDQUFDNUosUUFBTCxFQUFELENBQU4sR0FBMEI0SixJQUFJLENBQUNhLFFBQUwsRUFERjtBQUFBLEtBQTVCO0FBRUEsV0FBTzRTLElBQUksQ0FBQ0MsU0FBTCxDQUFldEIsTUFBZixDQUFQO0FBQ0gsR0FMTSxDQUFQO0FBTUg7QUFFRDs7OztBQUdPLElBQU10TixpQkFBYjtBQUFBO0FBQUE7QUFDSSw2QkFBWVYsSUFBWixFQUFrQjtBQUFBOztBQUNkLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUswZ0IsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxVQUFMO0FBRUEsU0FBS0MsVUFBTDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7QUFSTDtBQUFBO0FBQUEsOEJBVWM3dUIsUUFWZCxFQVV3QjJnQixRQVZ4QixFQVVrQztBQUMxQixVQUFJLEVBQUUzZ0IsUUFBUSxJQUFJLEtBQUs2dUIsUUFBbkIsQ0FBSixFQUFrQztBQUM5QixhQUFLQSxRQUFMLENBQWM3dUIsUUFBZCxJQUEwQixFQUExQjtBQUNIOztBQUNELFdBQUs2dUIsUUFBTCxDQUFjN3VCLFFBQWQsRUFBd0J3VixJQUF4QixDQUE2Qm1MLFFBQTdCO0FBQ0g7QUFmTDtBQUFBO0FBQUEscUNBaUJxQjNnQixRQWpCckIsRUFpQitCO0FBQ3ZCLGFBQU8sS0FBSzZ1QixRQUFMLENBQWM3dUIsUUFBZCxDQUFQO0FBQ0g7QUFuQkw7QUFBQTtBQUFBLGlDQXFCaUI7QUFBQTs7QUFDVCxVQUFJOHVCLFVBQVUsR0FBRyxJQUFqQjtBQUNBLE9BQUMsS0FBSzlnQixJQUFMLENBQVV2USxLQUFWLENBQWdCbkIsVUFBaEIsQ0FBMkJtRCxVQUE1QixFQUNDLEtBQUt1TyxJQUFMLENBQVV2USxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJ1QyxrQkFENUIsRUFFQyxLQUFLb1AsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCcUMsb0JBRjVCLEVBRWtEbVksT0FGbEQsQ0FFMEQsVUFBQWtZLFNBQVM7QUFBQSxlQUMvREEsU0FBUyxDQUFDalEsU0FBVixDQUFvQixVQUFTa1EsT0FBVCxFQUFrQjtBQUNsQ0EsaUJBQU8sQ0FBQ25ZLE9BQVIsQ0FBZ0IsVUFBVW9ZLE1BQVYsRUFBa0I7QUFDOUIsZ0JBQUlDLFNBQVMsR0FBR0QsTUFBTSxDQUFDcFosS0FBdkI7O0FBQ0EsZ0JBQUlvWixNQUFNLENBQUM3dEIsTUFBUCxLQUFrQixPQUF0QixFQUErQjtBQUMzQjtBQUNBLGtCQUFJd0ksSUFBSSxHQUFHa2xCLFVBQVUsQ0FBQ2xwQixPQUFYLENBQW1Cc3BCLFNBQVMsQ0FBQ2x2QixRQUFWLEVBQW5CLEVBQXlDa3ZCLFNBQVMsQ0FBQ3prQixRQUFWLEVBQXpDLEVBQStEeWtCLFNBQVMsQ0FBQ3prQixRQUF6RSxDQUFYO0FBQ0Fxa0Isd0JBQVUsQ0FBQ0ssYUFBWCxDQUF5QnZsQixJQUF6QjtBQUNILGFBSkQsTUFJTyxJQUFJcWxCLE1BQU0sQ0FBQzd0QixNQUFQLEtBQWtCLFNBQXRCLEVBQWlDO0FBQ3BDO0FBQ0EwdEIsd0JBQVUsQ0FBQzVOLGtCQUFYLENBQThCZ08sU0FBUyxDQUFDbHZCLFFBQXhDO0FBQ0g7QUFDSixXQVZEO0FBV0gsU0FaRCxFQVlHLEtBWkgsRUFZUyxhQVpULENBRCtEO0FBQUEsT0FGbkU7QUFpQkgsS0F4Q0wsQ0EwQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOzs7Ozs7QUF0REo7QUFBQTtBQUFBLGlDQTJEaUI0SixJQTNEakIsRUEyRHVCO0FBQ2YsVUFBSUEsSUFBSSxDQUFDNUosUUFBTCxLQUFrQixXQUF0QixFQUFtQztBQUMvQjRKLFlBQUksQ0FBQ3FTLE1BQUwsR0FBYyxLQUFLak8sSUFBTCxDQUFVdlEsS0FBVixDQUFnQm5CLFVBQWhCLENBQTJCa0QsSUFBekM7QUFDSCxPQUZELE1BRU8sSUFBSW9LLElBQUksQ0FBQzVKLFFBQUwsS0FBa0IsWUFBdEIsRUFBb0M7QUFDdkM0SixZQUFJLENBQUNxUyxNQUFMLEdBQWMsS0FBS2pPLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQmtDLEtBQXpDO0FBQ0gsT0FGTSxNQUVBLElBQUlxTCxJQUFJLENBQUM1SixRQUFMLEtBQWtCLGVBQXRCLEVBQXVDO0FBQzFDNEosWUFBSSxDQUFDcVMsTUFBTCxHQUFjLEtBQUtqTyxJQUFMLENBQVV2USxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJtQyxRQUF6QztBQUNILE9BRk0sTUFFQSxJQUFJb0wsSUFBSSxDQUFDNUosUUFBTCxLQUFrQixhQUF0QixFQUFxQztBQUN4QzRKLFlBQUksQ0FBQ3FTLE1BQUwsR0FBYyxLQUFLak8sSUFBTCxDQUFVdlEsS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCb0MsTUFBekM7QUFDSCxPQUZNLE1BRUEsSUFBSW1MLElBQUksQ0FBQzVKLFFBQUwsS0FBa0Isa0JBQXRCLEVBQTBDO0FBQzdDNEosWUFBSSxDQUFDcVMsTUFBTCxHQUFjLEtBQUtqTyxJQUFMLENBQVV2USxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkI4QixZQUF6QztBQUNILE9BRk0sTUFFQSxJQUFJeUwsSUFBSSxDQUFDNUosUUFBTCxLQUFrQixtQkFBdEIsRUFBMkM7QUFDOUM0SixZQUFJLENBQUNxUyxNQUFMLEdBQWMsS0FBS2pPLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQmlDLFlBQXpDO0FBQ0gsT0FGTSxNQUVBLElBQUlzTCxJQUFJLENBQUM1SixRQUFMLEtBQWtCLG9CQUF0QixFQUE0QztBQUMvQyxhQUFLb3ZCLGVBQUwsQ0FBcUJ4bEIsSUFBckIsRUFBMkIsS0FBS29FLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQm9ELFVBQXREO0FBQ0gsT0FGTSxNQUVBLElBQUltSyxJQUFJLENBQUM1SixRQUFMLEtBQWtCLGVBQXRCLEVBQXVDO0FBQzFDNEosWUFBSSxDQUFDcVMsTUFBTCxHQUFjLEtBQUtqTyxJQUFMLENBQVV2USxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkI0QyxJQUF6QztBQUNILE9BRk0sTUFFQSxJQUFJMkssSUFBSSxDQUFDNUosUUFBTCxLQUFrQiw4QkFBdEIsRUFBc0Q7QUFDekQ0SixZQUFJLENBQUNxUyxNQUFMLEdBQWMsS0FBS2pPLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQmlELFFBQXpDO0FBQ0gsT0FGTSxNQUVBLElBQUlzSyxJQUFJLENBQUM1SixRQUFMLEtBQWtCLG1CQUF0QixFQUEyQztBQUM5QzRKLFlBQUksQ0FBQ3FTLE1BQUwsR0FBYyxLQUFLak8sSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQTlCO0FBQ0gsT0FGTSxNQUVBLElBQUk2SixJQUFJLENBQUM1SixRQUFMLENBQWM4ZixVQUFkLENBQXlCLEdBQXpCLENBQUosRUFBbUM7QUFDdEMsYUFBS3NQLGVBQUwsQ0FBcUJ4bEIsSUFBckIsRUFBMkIsS0FBS29FLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQnVDLGtCQUF0RDtBQUNILE9BRk0sTUFFQSxJQUFJZ0wsSUFBSSxDQUFDNUosUUFBTCxDQUFjOGYsVUFBZCxDQUF5QixHQUF6QixLQUFpQ2xXLElBQUksQ0FBQzVKLFFBQUwsQ0FBYzhmLFVBQWQsQ0FBeUIsR0FBekIsQ0FBckMsRUFBb0U7QUFDdkUsYUFBS3NQLGVBQUwsQ0FBcUJ4bEIsSUFBckIsRUFBMkIsS0FBS29FLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQnFDLG9CQUF0RDtBQUNILE9BRk0sTUFFQTtBQUNILGFBQUswd0IsZUFBTCxDQUFxQnhsQixJQUFyQixFQUEyQixLQUFLb0UsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm5CLFVBQWhCLENBQTJCbUQsVUFBdEQ7QUFDSDtBQUNKO0FBdkZMO0FBQUE7QUFBQSxvQ0F5Rm9CbUssSUF6RnBCLEVBeUYwQnlsQixLQXpGMUIsRUF5RmlDO0FBQ3pCemxCLFVBQUksQ0FBQzBrQixLQUFMLEdBQWFlLEtBQWI7QUFDQSxVQUFJQyxVQUFVLEdBQUcxbEIsSUFBSSxDQUFDMGtCLEtBQUwsRUFBakI7O0FBQ0EsV0FBSyxJQUFJL1ksQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFHK1osVUFBVSxDQUFDemxCLE1BQTdCLEVBQXFDMEwsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxZQUFJK1osVUFBVSxDQUFDL1osQ0FBRCxDQUFWLENBQWN2VixRQUFkLE9BQTZCNEosSUFBSSxDQUFDNUosUUFBdEMsRUFBZ0Q7QUFDNUM0SixjQUFJLENBQUNxUyxNQUFMLEdBQWNxVCxVQUFVLENBQUMvWixDQUFELENBQVYsQ0FBYzlLLFFBQTVCO0FBQ0g7QUFDSjs7QUFDRCxVQUFJYixJQUFJLENBQUNxUyxNQUFMLEtBQWdCLElBQXBCLEVBQTBCO0FBQ3RCLFlBQUlyVyxPQUFPLEdBQUc0RSxhQUFhLENBQUNaLElBQUksQ0FBQzVKLFFBQU4sQ0FBM0I7QUFDQTRKLFlBQUksQ0FBQ3FTLE1BQUwsR0FBY3JXLE9BQU8sQ0FBQzZFLFFBQXRCO0FBQ0E0a0IsYUFBSyxDQUFDN1osSUFBTixDQUFXNVAsT0FBWDtBQUNIO0FBQ0o7QUF0R0w7QUFBQTtBQUFBLGlDQXdHaUI7QUFDVCxXQUFLQSxPQUFMLENBQWEsV0FBYjtBQUNBLFdBQUtBLE9BQUwsQ0FBYSxtQkFBYjtBQUNBLFdBQUtBLE9BQUwsQ0FBYSxZQUFiO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLGtCQUFiO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLDhCQUFiO0FBQ0g7QUE5R0w7QUFBQTtBQUFBLDRCQWdIWTVGLFFBaEhaLEVBZ0hzQnlLLFFBaEh0QixFQWdIZ0N5a0IsU0FoSGhDLEVBZ0gyQztBQUNuQyxVQUFJbHZCLFFBQVEsSUFBSSxLQUFLMHVCLE1BQXJCLEVBQTZCO0FBQ3pCO0FBQ0EsWUFBSWEsWUFBWSxHQUFHLEtBQUtiLE1BQUwsQ0FBWTF1QixRQUFaLENBQW5COztBQUNBLFlBQUlrdkIsU0FBUyxLQUFLMXlCLFNBQWxCLEVBQTZCO0FBQ3pCLGVBQUtnekIsWUFBTCxDQUFrQkQsWUFBbEI7QUFDSCxTQUZELE1BRU87QUFDSEEsc0JBQVksQ0FBQ3RULE1BQWIsR0FBc0JpVCxTQUF0QjtBQUNIOztBQUNESyxvQkFBWSxDQUFDdFQsTUFBYixDQUFvQnhSLFFBQVEsSUFBSSxFQUFoQztBQUNBLGVBQU84a0IsWUFBUDtBQUNILE9BVkQsTUFVTztBQUNIO0FBQ0EsWUFBSTNwQixPQUFPLEdBQUcsSUFBSXlvQixXQUFKLENBQWdCLEtBQUtyZ0IsSUFBckIsRUFBMkJoTyxRQUEzQixDQUFkO0FBQ0EsYUFBSzB1QixNQUFMLENBQVkxdUIsUUFBWixJQUF3QjRGLE9BQXhCOztBQUNBLFlBQUlzcEIsU0FBUyxLQUFLMXlCLFNBQWxCLEVBQTZCO0FBQ3pCLGVBQUtnekIsWUFBTCxDQUFrQjVwQixPQUFsQjtBQUNILFNBRkQsTUFFTztBQUNIQSxpQkFBTyxDQUFDcVcsTUFBUixHQUFpQmlULFNBQWpCO0FBQ0g7O0FBQ0QsZUFBT3RwQixPQUFQO0FBQ0g7QUFDSjtBQXRJTDtBQUFBO0FBQUEsOEJBd0ljNUYsUUF4SWQsRUF3SXdCeUssUUF4SXhCLEVBd0lrQztBQUMxQkEsY0FBUSxHQUFHQSxRQUFRLElBQUksRUFBdkI7QUFDQSxXQUFLaWtCLE1BQUwsQ0FBWTF1QixRQUFaLEVBQXNCaWMsTUFBdEIsQ0FBNkJ4UixRQUE3QjtBQUNIO0FBM0lMO0FBQUE7QUFBQSw2QkE2SWF6SyxRQTdJYixFQTZJdUI7QUFDZixhQUFPLEtBQUswdUIsTUFBTCxDQUFZMXVCLFFBQVosRUFBc0JpYyxNQUF0QixFQUFQO0FBQ0g7QUEvSUw7QUFBQTtBQUFBLDRCQWlKWWpjLFFBakpaLEVBaUpzQjtBQUNkLGFBQU8sS0FBSzB1QixNQUFMLENBQVkxdUIsUUFBWixDQUFQO0FBQ0g7QUFFRDs7Ozs7O0FBckpKO0FBQUE7QUFBQSwrQkEwSmVBLFFBMUpmLEVBMEp5QjtBQUNqQixVQUFJb3VCLHNCQUFzQixDQUFDdmpCLE9BQXZCLENBQStCN0ssUUFBL0IsTUFBNkMsQ0FBQyxDQUFsRCxFQUFxRDtBQUNqRCxZQUFJNEosSUFBSSxHQUFHLEtBQUtzWCxrQkFBTCxDQUF3QmxoQixRQUF4QixDQUFYO0FBQ0E0SixZQUFJLENBQUNxUyxNQUFMLENBQVksSUFBWjtBQUNBLGVBQU8sSUFBUDtBQUNILE9BSkQsTUFJTyxJQUFJLEtBQUt5UyxNQUFMLENBQVkxdUIsUUFBWixFQUFzQnN1QixLQUF0QixLQUFnQyxJQUFwQyxFQUEwQztBQUM3QyxlQUFPLEtBQVA7QUFDSCxPQUZNLE1BRUE7QUFDSDtBQUNBLFlBQUltQixLQUFLLEdBQUcsS0FBS2YsTUFBTCxDQUFZMXVCLFFBQVosRUFBc0JzdUIsS0FBdEIsQ0FBNEIvZCxNQUE1QixDQUFtQyxVQUFBMmUsU0FBUztBQUFBLGlCQUFJQSxTQUFTLENBQUNsdkIsUUFBVixLQUF1QkEsUUFBM0I7QUFBQSxTQUE1QyxDQUFaO0FBQ0EsZUFBT3l2QixLQUFLLElBQUksS0FBaEI7QUFDSDtBQUNKO0FBdEtMO0FBQUE7QUFBQSx1Q0F3S3VCenZCLFFBeEt2QixFQXdLaUM7QUFDekIsVUFBSTRKLElBQUksR0FBRyxLQUFLOGtCLE1BQUwsQ0FBWTF1QixRQUFaLENBQVg7QUFDQSxhQUFPLEtBQUswdUIsTUFBTCxDQUFZMXVCLFFBQVosQ0FBUDs7QUFDQSxVQUFJQSxRQUFRLElBQUksS0FBSzZ1QixRQUFyQixFQUErQjtBQUMzQixhQUFLQSxRQUFMLENBQWM3dUIsUUFBZCxFQUF3QjZXLE9BQXhCLENBQWdDLFVBQUE4SixRQUFRO0FBQUEsaUJBQUlBLFFBQVEsQ0FBQ25GLE9BQVQsRUFBSjtBQUFBLFNBQXhDO0FBQ0g7O0FBQ0QsYUFBTzVSLElBQVA7QUFDSDtBQS9LTDtBQUFBO0FBQUEsa0NBaUxrQkEsSUFqTGxCLEVBaUx3QjtBQUNoQixVQUFJQSxJQUFJLENBQUM1SixRQUFMLElBQWlCLEtBQUs2dUIsUUFBMUIsRUFBb0M7QUFDaEMsYUFBS0EsUUFBTCxDQUFjamxCLElBQUksQ0FBQzVKLFFBQW5CLEVBQTZCNlcsT0FBN0IsQ0FBcUMsVUFBQThKLFFBQVE7QUFBQSxpQkFBSUEsUUFBUSxDQUFDckYsT0FBVCxDQUFpQjFSLElBQWpCLENBQUo7QUFBQSxTQUE3QztBQUNIO0FBQ0o7QUFyTEw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7O0FDcEpBO0FBQUE7QUFBQTtBQUNPLElBQUk4bEIsV0FBVyxrdURBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFA7QUFFTyxJQUFNblEsb0JBQW9CLDA0Q0FBMUI7QUE4QlA7Ozs7Ozs7OztBQVFPLElBQU14USxjQUFiO0FBQUE7QUFBQTtBQUNJLDBCQUFZZixJQUFaLEVBQWtCK0UsR0FBbEIsRUFBdUI7QUFBQTs7QUFDbkIsU0FBSy9FLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUsrRSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLNGMsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFNBQUtqakIsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLa2pCLFVBQUwsR0FBa0IsRUFBbEI7QUFDSDs7QUFQTDtBQUFBO0FBQUEseUJBU1NsakIsT0FUVCxFQVNrQjtBQUFBOztBQUNWLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFdBQUtrakIsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0J0ckIsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JrUCxLQUEvQixFQUFoQjtBQUNBLFVBQUlxYyxNQUFNLEdBQUcsQ0FBYjtBQUNBcGpCLGFBQU8sQ0FDRitQLE1BREwsQ0FDWSxVQUFDc1QsS0FBRDtBQUFBLGVBQ0osQ0FBQ0EsS0FBSyxDQUFDQyxTQUFOLENBQWdCbFEsVUFBaEIsQ0FBMkIsY0FBM0IsQ0FBRCxJQUNJaVEsS0FBSyxDQUFDRSxVQUFOLEtBQXFCLFNBRHpCLElBRUlGLEtBQUssQ0FBQ0UsVUFBTixLQUFxQixjQUZ6QixLQUdLLENBQUMsS0FBSSxDQUFDamlCLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQitDLE1BQTNCLEVBQUQsSUFBd0Myd0IsS0FBSyxDQUFDRSxVQUFOLEtBQXFCLGtCQUhsRSxDQURJO0FBQUEsT0FEWixFQU9LcFosT0FQTCxDQU9hLFVBQUNrWixLQUFELEVBQVEzZixLQUFSLEVBQWtCO0FBQ3ZCLFlBQUk2ZixVQUFVLEdBQUdDLGlCQUFpQixDQUFDSCxLQUFLLENBQUNFLFVBQVAsQ0FBakIsSUFBdUNGLEtBQUssQ0FBQ0UsVUFBOUQ7QUFDQSxZQUFJRSxTQUFTLEdBQUdDLG1CQUFtQixDQUFDTCxLQUFLLENBQUNNLGdCQUFQLENBQW5CLEdBQTZDLEtBQTdDLEdBQW1ESixVQUFuRTtBQUNBLFlBQUlLLE9BQU8sR0FBSVAsS0FBSyxDQUFDRSxVQUFOLEtBQXFCLFdBQXBDO0FBQ0EsWUFBSU0sTUFBTSxHQUFHaHNCLENBQUMsQ0FBQyxtQkFBRCxFQUFzQjtBQUFDMEosY0FBSSxFQUFFa2lCLFNBQVA7QUFBa0JLLGtCQUFRLEVBQUVGO0FBQTVCLFNBQXRCLENBQWQ7O0FBQ0EsWUFBSSxLQUFJLENBQUNHLFdBQUwsQ0FBaUJWLEtBQWpCLENBQUosRUFBNkI7QUFDekJRLGdCQUFNLENBQUN6YixJQUFQLENBQVksT0FBWixFQUFxQmdiLE1BQXJCOztBQUNBLGVBQUksQ0FBQ0YsVUFBTCxDQUFnQnBhLElBQWhCLENBQXFCdWEsS0FBckI7O0FBQ0FELGdCQUFNLElBQUksQ0FBVjtBQUNIOztBQUNELGFBQUksQ0FBQ0QsUUFBTCxDQUFjOWUsTUFBZCxDQUFxQndmLE1BQXJCO0FBQ0gsT0FsQkw7QUFtQkEsV0FBS1YsUUFBTCxDQUFjdmQsR0FBZCxDQUFrQnRKLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWTZtQixNQUFNLEdBQUMsQ0FBbkIsQ0FBbEI7QUFDQSxXQUFLRCxRQUFMLENBQWNaLE1BQWQsQ0FBcUIsVUFBQ3lCLEdBQUQsRUFBUztBQUMxQixhQUFJLENBQUNya0IsWUFBTDtBQUNILE9BRkQ7QUFHSDtBQXJDTDtBQUFBO0FBQUEsa0NBdUNrQjtBQUNWLFdBQUt3akIsUUFBTCxDQUFjdmQsR0FBZCxDQUFrQixDQUFsQjtBQUNBLFdBQUtqRyxZQUFMO0FBQ0g7QUExQ0w7QUFBQTtBQUFBLG1DQTRDbUI7QUFDWCxVQUFJc2pCLFNBQVMsR0FBR2dCLFFBQVEsQ0FBQyxLQUFLZCxRQUFMLENBQWN2ZCxHQUFkLEVBQUQsRUFBc0IsRUFBdEIsQ0FBeEI7QUFDQSxXQUFLdWQsUUFBTCxDQUFjdmQsR0FBZCxDQUFrQnRKLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWTBtQixTQUFTLEdBQUMsQ0FBdEIsQ0FBbEI7QUFDQSxXQUFLdGpCLFlBQUw7QUFDSDtBQWhETDtBQUFBO0FBQUEsK0JBa0RlO0FBQ1AsVUFBSXNqQixTQUFTLEdBQUdnQixRQUFRLENBQUMsS0FBS2QsUUFBTCxDQUFjdmQsR0FBZCxFQUFELEVBQXNCLEVBQXRCLENBQXhCO0FBQ0EsV0FBS3VkLFFBQUwsQ0FBY3ZkLEdBQWQsQ0FBa0J0SixJQUFJLENBQUNJLEdBQUwsQ0FBUyxLQUFLd21CLFVBQUwsQ0FBZ0IvbEIsTUFBaEIsR0FBdUIsQ0FBaEMsRUFBbUM4bEIsU0FBUyxHQUFDLENBQTdDLENBQWxCO0FBQ0EsV0FBS3RqQixZQUFMO0FBQ0g7QUF0REw7QUFBQTtBQUFBLHVDQXdEdUI7QUFDZixXQUFLd2pCLFFBQUwsQ0FBY3ZkLEdBQWQsQ0FBa0IsS0FBS3NkLFVBQUwsQ0FBZ0IvbEIsTUFBaEIsR0FBdUIsQ0FBekM7QUFDQSxXQUFLd0MsWUFBTDtBQUNIO0FBM0RMO0FBQUE7QUFBQSxtQ0E2RG1CO0FBQ1gsVUFBSSxLQUFLdWpCLFVBQUwsQ0FBZ0IvbEIsTUFBcEIsRUFBNEI7QUFDeEIsWUFBSThsQixTQUFTLEdBQUdnQixRQUFRLENBQUMsS0FBS2QsUUFBTCxDQUFjdmQsR0FBZCxFQUFELEVBQXNCLEVBQXRCLENBQXhCO0FBQ0EsYUFBS3RFLElBQUwsQ0FBVXRKLFVBQVYsQ0FBcUJnSCxZQUFyQixDQUFrQ0MsRUFBbEMsQ0FBcUN3VixPQUFyQyxDQUE2QyxLQUFLeU8sVUFBTCxDQUFnQkQsU0FBaEIsRUFBMkJsc0IsT0FBeEU7QUFDSDtBQUNKO0FBbEVMO0FBQUE7QUFBQSwwQkFvRVU7QUFDRixVQUFJLEtBQUttc0IsVUFBTCxDQUFnQi9sQixNQUFwQixFQUE0QjtBQUN4QixZQUFJOGxCLFNBQVMsR0FBR2dCLFFBQVEsQ0FBQyxLQUFLZCxRQUFMLENBQWN2ZCxHQUFkLEVBQUQsRUFBc0IsRUFBdEIsQ0FBeEI7QUFDQSxZQUFJOVMsSUFBSSxHQUFHLEtBQUtvd0IsVUFBTCxDQUFnQkQsU0FBaEIsRUFBMkJsc0IsT0FBdEM7QUFDQSxhQUFLdUssSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1KLEVBQWhCLENBQW1Cc0QsT0FBbkIsQ0FBMkJxQixNQUEzQixDQUFrQ2Esa0JBQWxDO0FBQ0EsYUFBSzRCLElBQUwsQ0FBVXRKLFVBQVYsQ0FBcUJnSCxZQUFyQixDQUFrQzlCLElBQWxDLENBQXVDcVMsTUFBdkMsQ0FBOEN6YyxJQUE5QztBQUNIO0FBQ0o7QUEzRUw7QUFBQTtBQUFBLGdDQTZFZ0J1d0IsS0E3RWhCLEVBNkV1QjtBQUNmLGFBQVEsQ0FBQ0EsS0FBSyxDQUFDRSxVQUFOLEtBQXFCLFdBQXJCLElBQ0FGLEtBQUssQ0FBQ0UsVUFBTixLQUFxQixhQUR0QixLQUVBLEtBQUtqaUIsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQWhCLENBQXdCQyxRQUF4QixPQUF1Qyt2QixLQUFLLENBQUNDLFNBRnJEO0FBR0g7QUFqRkw7O0FBQUE7QUFBQTtBQXFGQSxJQUFNRSxpQkFBaUIsR0FBRztBQUN0QixtQkFBaUIsZUFESztBQUV0QixpQkFBZSxvQkFGTztBQUd0QixlQUFhLGFBSFM7QUFJdEIsaUJBQWUsb0JBSk87QUFLdEIsaUJBQWUsYUFMTztBQU10QixtQkFBaUIsY0FOSztBQU90QixzQkFBb0I7QUFQRSxDQUExQjtBQVVBLElBQU1VLFVBQVUsR0FBRyxDQUNmLEtBRGUsRUFDUixLQURRLEVBQ0QsS0FEQyxFQUVmLEtBRmUsRUFFUixLQUZRLEVBRUQsTUFGQyxFQUVPLE1BRlAsRUFHZixLQUhlLEVBR1IsTUFIUSxFQUdBLEtBSEEsRUFJZixLQUplLEVBSVIsS0FKUSxDQUFuQjtBQU1BLElBQU1DLFFBQVEsR0FBRyxDQUNiLEtBRGEsRUFDTixLQURNLEVBQ0MsS0FERCxFQUViLEtBRmEsRUFFTixLQUZNLEVBRUMsS0FGRCxFQUdiLEtBSGEsQ0FBakI7O0FBTUEsU0FBU0MsU0FBVCxDQUFtQmpvQixLQUFuQixFQUEwQmtvQixNQUExQixFQUFrQztBQUM5QixTQUFPbG9CLEtBQUssQ0FBQ21vQixPQUFOLE9BQW9CRCxNQUFNLENBQUNDLE9BQVAsRUFBcEIsSUFDSG5vQixLQUFLLENBQUNvb0IsUUFBTixPQUFxQkYsTUFBTSxDQUFDRSxRQUFQLEVBRGxCLElBRUhwb0IsS0FBSyxDQUFDcW9CLFdBQU4sT0FBd0JILE1BQU0sQ0FBQ0csV0FBUCxFQUY1QjtBQUdIO0FBRUQ7Ozs7Ozs7O0FBTUEsU0FBU2QsbUJBQVQsQ0FBNkJlLFVBQTdCLEVBQXlDO0FBQ3JDOzs7Ozs7QUFNQTtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVBQVY7QUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBSUQsSUFBSixDQUFTVixRQUFRLENBQUNRLFVBQUQsRUFBYSxFQUFiLENBQWpCLENBQVg7O0FBQ0EsTUFBSUwsU0FBUyxDQUFDTSxHQUFELEVBQU1FLElBQU4sQ0FBYixFQUEwQjtBQUN0QixXQUFPLGNBQVlBLElBQUksQ0FBQ0Msa0JBQUwsRUFBbkI7QUFDSCxHQUZELE1BRU87QUFDSCxRQUFJQyxNQUFNLEdBQUdYLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDRyxNQUFMLEVBQUQsQ0FBckI7QUFDQSxRQUFJQyxRQUFRLEdBQUdkLFVBQVUsQ0FBQ1UsSUFBSSxDQUFDTCxRQUFMLEVBQUQsQ0FBekI7QUFDQSxRQUFJVSxJQUFJLEdBQUdILE1BQU0sR0FBRyxJQUFULEdBQWdCRSxRQUFoQixHQUEyQixHQUEzQixHQUFpQ0osSUFBSSxDQUFDTixPQUFMLEVBQTVDOztBQUNBLFFBQUlJLEdBQUcsQ0FBQ0YsV0FBSixPQUFzQkksSUFBSSxDQUFDSixXQUFMLEVBQTFCLEVBQThDO0FBQzFDLGFBQU9TLElBQUksR0FBRyxNQUFQLEdBQWNMLElBQUksQ0FBQ0Msa0JBQUwsRUFBckI7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPSSxJQUFJLEdBQUcsSUFBUCxHQUFZTCxJQUFJLENBQUNKLFdBQUwsRUFBWixHQUFpQyxNQUFqQyxHQUF3Q0ksSUFBSSxDQUFDQyxrQkFBTCxFQUEvQztBQUNIO0FBQ0o7QUFDSjtBQUdEOzs7Ozs7O0FBS0F4aUIsY0FBYyxDQUFDWixTQUFmLENBQXlCN0MsVUFBekIsR0FBc0MsWUFBVztBQUM3QyxNQUFJc0IsTUFBTSxHQUFHLEtBQUtvQixJQUFMLENBQVV0SixVQUFWLENBQXFCa0ksTUFBbEM7QUFDQSxNQUFJNEwsSUFBSSxHQUFHLGtCQUFYO0FBQ0EsT0FBS3hLLElBQUwsQ0FBVXRKLFVBQVYsQ0FBcUJDLE1BQXJCLENBQTRCaXRCLFVBQTVCLENBQXVDLFVBQVUxc0IsSUFBVixFQUFnQjtBQUNuRHNULFFBQUksR0FBR3RULElBQUksQ0FBQzJzQixPQUFMLEdBQWVDLE1BQWYsQ0FBc0IsVUFBVUMsUUFBVixFQUFvQkMsSUFBcEIsRUFBMEI7QUFDbkQsVUFBSUMsWUFBWSxHQUFHN0IsbUJBQW1CLENBQUM0QixJQUFJLENBQUNFLElBQU4sQ0FBdEM7QUFDQSxVQUFJQyxRQUFRLEdBQUcsUUFBTUYsWUFBTixHQUFtQixlQUFuQixHQUFtQ0QsSUFBSSxDQUFDeHlCLElBQXhDLEdBQTZDLFFBQTVEO0FBQ0EsYUFBT3V5QixRQUFRLEdBQUMsSUFBVCxHQUFjSSxRQUFyQjtBQUNILEtBSk0sRUFJSixFQUpJLENBQVA7QUFLQXZsQixVQUFNLENBQUNtSSxJQUFQLENBQVksY0FBWixFQUE0QnlELElBQTVCLEVBQWtDLFlBQVcsQ0FBRSxDQUEvQztBQUNILEdBUEQ7QUFRSCxDQVhELEM7Ozs7Ozs7Ozs7Ozs7QUM3TEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHTyxJQUFJM1gsMkJBQTJCLEdBQUc7QUFDckNDLFVBQVEsRUFBRSxVQUQyQjtBQUVyQ2lILE9BQUssRUFBRSxPQUY4QjtBQUdyQ0ssTUFBSSxFQUFFO0FBSCtCLENBQWxDO0FBTUEsU0FBUzBGLCtCQUFULENBQXlDbkgsSUFBekMsRUFBK0NsSixLQUEvQyxFQUFzRDtBQUN6RCxNQUFJMjBCLGdCQUFnQixHQUFHLElBQXZCO0FBQ0EzMEIsT0FBSyxDQUFDbUosRUFBTixDQUFTekksWUFBVCxDQUFzQjZJLE9BQXRCLENBQThCOFgsU0FBOUIsQ0FBd0MsWUFBTTtBQUMxQyxRQUFJc1QsZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDM0I1SixrQkFBWSxDQUFDNEosZ0JBQUQsQ0FBWjtBQUNIOztBQUNEQSxvQkFBZ0IsR0FBR3BULFVBQVUsQ0FBQyxZQUFNO0FBQ2hDdmhCLFdBQUssQ0FBQ3JCLGFBQU4sQ0FBb0I4SCxTQUFwQixDQUE4Qm1LLElBQTlCLENBQW1DLGdDQUFuQyxFQUFxRS9ELEdBQXJFLENBQTBFLFVBQUNpTCxDQUFELEVBQUk4YyxLQUFKLEVBQWM7QUFDcEY5WCxjQUFNLENBQUMrWCxJQUFQLENBQVlDLGNBQVosQ0FBMkJGLEtBQTNCO0FBQ0gsT0FGRDtBQUdILEtBSjRCLEVBSTFCLEdBSjBCLENBQTdCO0FBS0gsR0FURDtBQVVILEMsQ0FFRDs7QUFFTyxTQUFTL3RCLGFBQVQsQ0FBdUIwSixJQUF2QixFQUE2QjtBQUNoQywrRkFJRWtMLHFEQUpGLHVoRkFrRU1qSyx1REFsRU4scUhBc0VNa2QseURBdEVOLG9JQTJFTXFHLG1EQTNFTiw0S0FtRk12RSxtREFuRk4sMkdBeUZNekssdURBekZOLDJGQThGTWtNLHFEQTlGTjtBQW1HSDtBQUFBLEM7Ozs7Ozs7Ozs7OztBQ3JJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUlPLElBQUlwdUIsV0FBVyxHQUFHO0FBQ3JCQyxPQUFLLEVBQUUsT0FEYztBQUVyQmdILFFBQU0sRUFBRSxRQUZhO0FBR3JCa3FCLFVBQVEsRUFBRSxVQUhXO0FBSXJCdkssUUFBTSxFQUFFLFFBSmE7QUFLckJ3SyxTQUFPLEVBQUU7QUFMWSxDQUFsQjtBQVFQOzs7Ozs7Ozs7QUFRTyxTQUFTN2pCLGFBQVQsQ0FBdUJiLElBQXZCLEVBQTZCO0FBQ2hDLE9BQUtBLElBQUwsR0FBWUEsSUFBWixDQURnQyxDQUdoQzs7QUFDQSxPQUFLN0osSUFBTCxHQUFZNkosSUFBSSxDQUFDdlEsS0FBTCxDQUFXckIsYUFBWCxDQUF5QitILElBQXJDLENBSmdDLENBTWhDOztBQUNBLE9BQUt3dUIsT0FBTCxHQUFlLElBQUluMUIsNERBQUosQ0FBd0IsU0FBeEIsQ0FBZixDQVBnQyxDQVNoQzs7QUFDQSxPQUFLbzFCLEtBQUwsR0FBYTtBQUNULGdCQUFZdlYsSUFBSSxDQUFDRSxLQUFMLENBQVcsS0FBS29WLE9BQUwsQ0FBYUUsVUFBYixDQUF3QixVQUF4QixFQUFvQyxJQUFwQyxDQUFYLENBREg7QUFFVCx3QkFBb0J4VixJQUFJLENBQUNFLEtBQUwsQ0FBVyxLQUFLb1YsT0FBTCxDQUFhRSxVQUFiLENBQXdCLGtCQUF4QixFQUE0QyxJQUE1QyxDQUFYO0FBRlgsR0FBYjtBQUlBLE9BQUtDLGNBQUwsR0FBc0I7QUFDbEIsZ0JBQVksR0FETTtBQUVsQix3QkFBb0I7QUFGRixHQUF0QjtBQUtBLE9BQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBRUEsT0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFFQSxPQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLE9BQUtDLGdCQUFMLEdBQXdCLENBQXhCO0FBRUEsT0FBS0MsZUFBTCxHQUF1QixFQUF2QjtBQUNBLE9BQUtDLG1CQUFMO0FBQ0EsT0FBS0MsV0FBTDtBQUNIO0FBRUQ7Ozs7O0FBSUF6a0IsYUFBYSxDQUFDVixTQUFkLENBQXdCb2xCLE9BQXhCLEdBQWtDLFVBQVUvbUIsUUFBVixFQUFvQjtBQUNsRCxNQUFJQSxRQUFRLENBQUNDLE9BQWIsRUFBc0I7QUFDbEIsUUFBSSxLQUFLa21CLE9BQUwsQ0FBYXIxQixHQUFiLENBQWlCLElBQWpCLENBQUosRUFBNEI7QUFDeEIsVUFBSWsyQixLQUFLLEdBQUcsS0FBS2IsT0FBTCxDQUFhcDFCLEdBQWIsQ0FBaUIsSUFBakIsQ0FBWjs7QUFDQSxVQUFJaTJCLEtBQUssS0FBS2huQixRQUFRLENBQUNpbkIsRUFBdkIsRUFBMkI7QUFDdkIsWUFBSWh3QixPQUFPLEdBQUc0WixJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUN6QixpQkFBT2tXLEtBRGtCO0FBRXpCLGlCQUFPaG5CLFFBQVEsQ0FBQ2luQjtBQUZTLFNBQWYsQ0FBZDtBQUlBLGFBQUsxeEIsUUFBTCxDQUFjLGFBQWQsRUFBNkJ2RixTQUE3QixFQUF3Q0EsU0FBeEMsRUFBbURpSCxPQUFuRDtBQUNBLGFBQUtrdkIsT0FBTCxDQUFhZSxHQUFiLENBQWlCLElBQWpCLEVBQXVCbG5CLFFBQVEsQ0FBQ2luQixFQUFoQztBQUNIO0FBQ0osS0FWRCxNQVVPO0FBQ0gsV0FBS2QsT0FBTCxDQUFhZSxHQUFiLENBQWlCLElBQWpCLEVBQXVCbG5CLFFBQVEsQ0FBQ2luQixFQUFoQztBQUNIO0FBQ0o7QUFDSixDQWhCRDtBQWtCQTs7Ozs7O0FBSUE1a0IsYUFBYSxDQUFDVixTQUFkLENBQXdCbWxCLFdBQXhCLEdBQXNDLFlBQVk7QUFBQTs7QUFDOUMsTUFBSSxLQUFLWCxPQUFMLENBQWFyMUIsR0FBYixDQUFpQixnQkFBakIsQ0FBSixFQUF3QztBQUNwQyxRQUFJNEgsSUFBSSxHQUFHbVksSUFBSSxDQUFDRSxLQUFMLENBQVcsS0FBS29WLE9BQUwsQ0FBYXAxQixHQUFiLENBQWlCLGdCQUFqQixDQUFYLENBQVg7O0FBQ0EsU0FBS28yQixnQkFBTCxDQUFzQnp1QixJQUF0QixFQUE0QixZQUE1QixFQUNzQixnQkFEdEIsRUFDd0MsS0FBSzZ0QixXQUQ3QztBQUVIOztBQUNELE9BQUtLLGVBQUwsQ0FBcUJ2YyxPQUFyQixDQUE2QixVQUFDN1csUUFBRCxFQUFjO0FBQ3ZDLFFBQUksS0FBSSxDQUFDMnlCLE9BQUwsQ0FBYXIxQixHQUFiLENBQWlCLGFBQWEwQyxRQUE5QixDQUFKLEVBQTZDO0FBQ3pDLFVBQUlrRixLQUFJLEdBQUdtWSxJQUFJLENBQUNFLEtBQUwsQ0FBVyxLQUFJLENBQUNvVixPQUFMLENBQWFwMUIsR0FBYixDQUFpQixhQUFheUMsUUFBOUIsQ0FBWCxDQUFYOztBQUNBLFdBQUksQ0FBQzJ6QixnQkFBTCxDQUFzQnp1QixLQUF0QixFQUE0QmxGLFFBQTVCLEVBQXNDLFVBQXRDLEVBQWtELEtBQUksQ0FBQyt5QixXQUF2RDtBQUNIO0FBQ0osR0FMRDtBQU1BLE1BQUlwdUIsTUFBTSxHQUFHLElBQWI7QUFDQThULFFBQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtrYSxLQUFqQixFQUF3Qi9iLE9BQXhCLENBQWdDLFVBQVVuWCxRQUFWLEVBQW9CO0FBQ2hELEtBQUMsU0FBU2swQixhQUFULENBQXVCcG5CLFFBQXZCLEVBQWlDO0FBQzlCLFVBQUlBLFFBQVEsQ0FBQ0MsT0FBYixFQUFzQjtBQUNsQixZQUFJOUgsTUFBTSxDQUFDaXVCLEtBQVAsQ0FBYWx6QixRQUFiLEVBQXVCbUssTUFBM0IsRUFBbUM7QUFDL0IsY0FBSTNFLElBQUksR0FBR21ZLElBQUksQ0FBQ0UsS0FBTCxDQUFXNVksTUFBTSxDQUFDaXVCLEtBQVAsQ0FBYWx6QixRQUFiLEVBQXVCZ29CLEdBQXZCLEVBQVgsQ0FBWDtBQUNBLGNBQUl0cEIsR0FBRyxHQUFHdUcsTUFBTSxDQUFDUixJQUFQLENBQVl6RSxRQUFaLENBQVY7O0FBQ0FpRixnQkFBTSxDQUFDa3ZCLFVBQVAsQ0FBa0IzdUIsSUFBbEIsRUFBd0J4RixRQUF4QixFQUFrQyxJQUFsQyxFQUF3Q2swQixhQUF4QztBQUNIO0FBQ0o7QUFDSixLQVJELEVBUUc7QUFBQyxpQkFBVztBQUFaLEtBUkg7QUFTSCxHQVZEO0FBV0gsQ0F4QkQ7O0FBMEJBL2tCLGFBQWEsQ0FBQ1YsU0FBZCxDQUF3QjJsQixzQkFBeEIsR0FBaUQsVUFBVXIyQixLQUFWLEVBQWlCdUMsUUFBakIsRUFBMkI7QUFBQTs7QUFDeEV2QyxPQUFLLENBQUNxaEIsU0FBTixDQUFnQixVQUFDclUsUUFBRDtBQUFBLFdBQ1osTUFBSSxDQUFDdUQsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQWhCLENBQXdCUyxRQUF4QixLQUFxQyxNQUFJLENBQUMyQixRQUFMLENBQWNuQyxRQUFkLEVBQXdCeUssUUFBeEIsQ0FBckMsR0FBeUUsS0FEN0Q7QUFBQSxHQUFoQixFQUNvRixJQURwRjtBQUVBLE9BQUsyb0IsZUFBTCxDQUFxQjVkLElBQXJCLENBQTBCeFYsUUFBMUI7QUFDSCxDQUpEO0FBTUE7Ozs7O0FBR0E2TyxhQUFhLENBQUNWLFNBQWQsQ0FBd0JrbEIsbUJBQXhCLEdBQThDLFlBQVk7QUFDdEQsTUFBSTUxQixLQUFLLEdBQUcsS0FBS3VRLElBQUwsQ0FBVXZRLEtBQXRCO0FBQ0EsT0FBS3EyQixzQkFBTCxDQUE0QnIyQixLQUFLLENBQUNuQixVQUFOLENBQWlCa0QsSUFBN0MsRUFBbUQsV0FBbkQ7QUFDQSxPQUFLczBCLHNCQUFMLENBQTRCcjJCLEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUJrQyxLQUE3QyxFQUFvRCxZQUFwRDtBQUNBLE9BQUt1MUIsc0JBQUwsQ0FBNEJyMkIsS0FBSyxDQUFDcEIsVUFBTixDQUFpQm9DLE1BQTdDLEVBQXFELGFBQXJEO0FBQ0EsT0FBS3ExQixzQkFBTCxDQUE0QnIyQixLQUFLLENBQUNwQixVQUFOLENBQWlCbUMsUUFBN0MsRUFBdUQsZUFBdkQ7QUFDQSxPQUFLczFCLHNCQUFMLENBQTRCcjJCLEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUI4QixZQUE3QyxFQUEyRCxrQkFBM0Q7QUFDQSxPQUFLMjFCLHNCQUFMLENBQTRCcjJCLEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUJpQyxZQUE3QyxFQUEyRCxtQkFBM0Q7QUFDQSxPQUFLdzFCLHNCQUFMLENBQTRCcjJCLEtBQUssQ0FBQ21KLEVBQU4sQ0FBUzBDLEtBQVQsQ0FBZVUsaUJBQTNDLEVBQThELDRCQUE5RDtBQUNBLE9BQUs4cEIsc0JBQUwsQ0FBNEJyMkIsS0FBSyxDQUFDbUosRUFBTixDQUFTMEMsS0FBVCxDQUFlMUssa0JBQTNDLEVBQStELDZCQUEvRDtBQUNBLE9BQUtrMUIsc0JBQUwsQ0FBNEJyMkIsS0FBSyxDQUFDbUosRUFBTixDQUFTMEMsS0FBVCxDQUFlNUssb0JBQTNDLEVBQWlFLCtCQUFqRTtBQUNILENBWEQ7QUFhQTs7Ozs7Ozs7Ozs7QUFTQW1RLGFBQWEsQ0FBQ1YsU0FBZCxDQUF3QndKLHFCQUF4QixHQUFnRCxZQUFZLENBQ3hEO0FBQ0gsQ0FGRDtBQUlBOzs7Ozs7QUFJQTlJLGFBQWEsQ0FBQ1YsU0FBZCxDQUF3QjRsQixnQkFBeEIsR0FBMkMsWUFBWTtBQUNuRCxNQUFJMTNCLFVBQVUsR0FBRyxLQUFLMlIsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnBCLFVBQWpDO0FBQ0EsTUFBSXFCLElBQUksR0FBRyxLQUFLc1EsSUFBTCxDQUFVdlEsS0FBVixDQUFnQkMsSUFBM0I7QUFDQSxNQUFJcEIsVUFBVSxHQUFHLEtBQUswUixJQUFMLENBQVV2USxLQUFWLENBQWdCbkIsVUFBakM7QUFDQSxNQUFJODBCLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVBQVY7QUFDQSxNQUFJMkMsWUFBWSxHQUFHNUMsR0FBRyxDQUFDNkMsT0FBSixFQUFuQjtBQUNBLFNBQU87QUFDSCxxQkFBaUI1M0IsVUFBVSxDQUFDc0IsRUFBWCxFQURkO0FBRUgsMkJBQXVCRCxJQUFJLENBQUNRLE9BQUwsRUFGcEI7QUFHSCxpQkFBYVIsSUFBSSxDQUFDTyxRQUFMLEVBSFY7QUFJSCxxQkFBaUIzQixVQUFVLENBQUNxQixFQUFYLEVBSmQ7QUFLSCxlQUFXRCxJQUFJLENBQUNDLEVBQUwsRUFMUjtBQU1ILGVBQVd0QixVQUFVLENBQUMyQyxPQUFYLEVBTlI7QUFPSCxpQkFBYWcxQixZQVBWO0FBUUgsZ0JBQVk1QyxHQUFHLENBQUM4QyxpQkFBSjtBQVJULEdBQVA7QUFVSCxDQWhCRDtBQWtCQTs7Ozs7Ozs7QUFNQXJsQixhQUFhLENBQUNWLFNBQWQsQ0FBd0J6SCxTQUF4QixHQUFvQyxVQUFVaEgsUUFBVixFQUFvQjBCLE1BQXBCLEVBQTRCcUMsT0FBNUIsRUFBcUM7QUFDckUsT0FBS3VLLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0IyRCxNQUFoQixDQUF1QjFCLFFBQXZCLEVBQWlDMEIsTUFBakM7QUFDQSxPQUFLNE0sSUFBTCxDQUFVdlEsS0FBVixDQUFnQjJELE1BQWhCLENBQXVCMUIsUUFBUSxHQUFHLFNBQWxDLEVBQTZDK0QsT0FBTyxJQUFJLEVBQXhEO0FBQ0gsQ0FIRDtBQUtBOzs7Ozs7QUFJQW9MLGFBQWEsQ0FBQ1YsU0FBZCxDQUF3QmdtQixXQUF4QixHQUFzQyxVQUFVQyxPQUFWLEVBQW1CO0FBQ3JELE9BQUtqQixnQkFBTCxJQUF5QixDQUF6Qjs7QUFDQSxNQUFJLENBQUN2WSxRQUFRLENBQUN5WixzQkFBVCxDQUFnQyxpQkFBaEMsRUFBbUR4cUIsTUFBeEQsRUFBZ0U7QUFDNUQsU0FBS3FwQixPQUFMLEdBQWUzdUIsQ0FBQyxDQUFDLHNDQUFELENBQWhCO0FBQ0EsU0FBSzJ1QixPQUFMLENBQWFqYSxRQUFiLENBQXNCMkIsUUFBUSxDQUFDcEMsSUFBL0I7QUFDSDs7QUFDRCxVQUFRNGIsT0FBUjtBQUNJLFNBQUssQ0FBTDtBQUNJLFdBQUtsQixPQUFMLENBQWFvQixHQUFiLENBQWlCLGtCQUFqQixFQUFxQyxNQUFyQztBQUNBOztBQUNKLFNBQUssQ0FBTDtBQUNJLFdBQUtwQixPQUFMLENBQWFvQixHQUFiLENBQWlCLGtCQUFqQixFQUFxQyxNQUFyQztBQUNBOztBQUNKLFNBQUssQ0FBTDtBQUNJLFdBQUtwQixPQUFMLENBQWFvQixHQUFiLENBQWlCLGtCQUFqQixFQUFxQyxNQUFyQztBQUNBOztBQUNKO0FBQ0ksV0FBS3BCLE9BQUwsQ0FBYW9CLEdBQWIsQ0FBaUIsa0JBQWpCLEVBQXFDLE9BQXJDO0FBQ0E7QUFaUjtBQWNILENBcEJEO0FBc0JBOzs7OztBQUdBemxCLGFBQWEsQ0FBQ1YsU0FBZCxDQUF3Qm9tQixXQUF4QixHQUFzQyxZQUFZO0FBQzlDLE9BQUtwQixnQkFBTCxJQUF5QixDQUF6Qjs7QUFDQSxNQUFJLEtBQUtBLGdCQUFMLElBQXlCLENBQTdCLEVBQWdDO0FBQzVCLFNBQUtELE9BQUwsQ0FBYTNpQixNQUFiO0FBQ0g7QUFDSixDQUxEOztBQU9BMUIsYUFBYSxDQUFDVixTQUFkLENBQXdCcW1CLFlBQXhCLEdBQXVDLFVBQVVDLEtBQVYsRUFBaUJ2dkIsSUFBakIsRUFBdUI7QUFDMUQ7QUFDQSxNQUFJMkUsTUFBTSxHQUFHLEtBQUsrb0IsS0FBTCxDQUFXNkIsS0FBWCxFQUFrQjVxQixNQUEvQjtBQUNBLE1BQUlaLEdBQUcsR0FBRyxLQUFLNnBCLGNBQUwsQ0FBb0IyQixLQUFwQixDQUFWOztBQUNBLE1BQUk1cUIsTUFBTSxHQUFHWixHQUFiLEVBQWtCO0FBQ2QsU0FBSzJwQixLQUFMLENBQVc2QixLQUFYLElBQW9CLEtBQUs3QixLQUFMLENBQVc2QixLQUFYLEVBQWtCM1gsS0FBbEIsQ0FBd0JqVCxNQUFNLEdBQUdaLEdBQWpDLEVBQXNDQSxHQUF0QyxDQUFwQjtBQUNILEdBTnlELENBTzFEOzs7QUFDQSxNQUFJL0wsR0FBRyxHQUFHbWdCLElBQUksQ0FBQ0MsU0FBTCxDQUFlcFksSUFBZixDQUFWO0FBQ0EsTUFBSWtMLEtBQUssR0FBRyxLQUFLd2lCLEtBQUwsQ0FBVzZCLEtBQVgsRUFBa0I1cEIsT0FBbEIsQ0FBMEIzTixHQUExQixDQUFaOztBQUNBLE1BQUlrVCxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2QsU0FBS3dpQixLQUFMLENBQVc2QixLQUFYLEVBQWtCamYsSUFBbEIsQ0FBdUJ0WSxHQUF2QjtBQUNBLFNBQUt5MUIsT0FBTCxDQUFhZSxHQUFiLENBQWlCZSxLQUFqQixFQUF3QnBYLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUtzVixLQUFMLENBQVc2QixLQUFYLENBQWYsQ0FBeEI7QUFDSDtBQUNKLENBZEQ7O0FBZ0JBNWxCLGFBQWEsQ0FBQ1YsU0FBZCxDQUF3QnVtQixZQUF4QixHQUF1QyxVQUFVRCxLQUFWLEVBQWlCdnZCLElBQWpCLEVBQXVCO0FBQzFELE1BQUloSSxHQUFHLEdBQUdtZ0IsSUFBSSxDQUFDQyxTQUFMLENBQWVwWSxJQUFmLENBQVY7QUFDQSxNQUFJa0wsS0FBSyxHQUFHLEtBQUt3aUIsS0FBTCxDQUFXNkIsS0FBWCxFQUFrQjVwQixPQUFsQixDQUEwQjNOLEdBQTFCLENBQVo7O0FBQ0EsTUFBSWtULEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ1osU0FBS3dpQixLQUFMLENBQVc2QixLQUFYLEVBQWtCRSxNQUFsQixDQUF5QnZrQixLQUF6QjtBQUNBLFNBQUt1aUIsT0FBTCxDQUFhZSxHQUFiLENBQWlCZSxLQUFqQixFQUF3QnBYLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUtzVixLQUFMLENBQVc2QixLQUFYLENBQWYsQ0FBeEI7QUFDSDtBQUNKLENBUEQ7O0FBVUE1bEIsYUFBYSxDQUFDVixTQUFkLENBQXdCMGxCLFVBQXhCLEdBQXFDLFVBQVUzdUIsSUFBVixFQUFnQnhGLFFBQWhCLEVBQTBCazFCLEtBQTFCLEVBQWlDalUsUUFBakMsRUFBMkM7QUFBQTs7QUFDNUU7QUFDQSxNQUFJa1UsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUNwQjtBQUNBLFVBQUksQ0FBQ0wsWUFBTCxDQUFrQjkwQixRQUFsQixFQUE0QndGLElBQTVCOztBQUNBWCxLQUFDLENBQUN1d0IsSUFBRixDQUFPLE1BQUksQ0FBQzN3QixJQUFMLENBQVV6RSxRQUFWLENBQVAsRUFBNEJ3RixJQUE1QixFQUNLaVMsSUFETCxDQUNVLFVBQUMzSyxRQUFELEVBQWM7QUFDaEIsWUFBSSxDQUFDa29CLFlBQUwsQ0FBa0JoMUIsUUFBbEIsRUFBNEJ3RixJQUE1Qjs7QUFDQSxVQUFJc0gsUUFBUSxDQUFDQyxPQUFiLEVBQXNCO0FBQ2xCLGNBQUksQ0FBQy9GLFNBQUwsQ0FBZWhILFFBQWYsRUFBeUI0QixXQUFXLENBQUNDLEtBQXJDO0FBQ0gsT0FGRCxNQUVPO0FBQ0g0RCxlQUFPLENBQUNzUyxLQUFSLENBQWNqTCxRQUFkOztBQUNBLGNBQUksQ0FBQzlGLFNBQUwsQ0FBZWhILFFBQWYsRUFBeUI0QixXQUFXLENBQUM0bUIsTUFBckMsRUFBNkMxYixRQUFRLENBQUMvSSxPQUF0RDtBQUNIOztBQUNELFVBQUlrZCxRQUFKLEVBQWM7QUFDVkEsZ0JBQVEsQ0FBQ25VLFFBQUQsQ0FBUjtBQUNIOztBQUNELFVBQUlBLFFBQVEsQ0FBQ0MsT0FBYixFQUFzQjtBQUNsQixjQUFJLENBQUM4bUIsT0FBTCxDQUFhL21CLFFBQVEsQ0FBQ2luQixFQUF0QjtBQUNIO0FBQ0osS0FmTCxFQWdCSTtBQWhCSixLQWlCS2xjLElBakJMLENBaUJVLFVBQUNFLEtBQUQsRUFBUXNkLFVBQVIsRUFBdUI7QUFDekIsWUFBSSxDQUFDcnVCLFNBQUwsQ0FBZWhILFFBQWYsRUFBeUI0QixXQUFXLENBQUNteEIsUUFBckMsRUFBK0NzQyxVQUFVLENBQUM3MEIsUUFBWCxFQUEvQzs7QUFDQSxZQUFJLENBQUMyekIsVUFBTCxDQUFnQjN1QixJQUFoQixFQUFzQnhGLFFBQXRCLEVBQWdDazFCLEtBQUssR0FBRyxNQUFJLENBQUM1QixVQUE3QyxFQUF5RHJTLFFBQXpEO0FBQ0gsS0FwQkw7QUFxQkgsR0F4QkQ7O0FBeUJBLE1BQUlpVSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNoQkMsZUFBVztBQUNkLEdBRkQsTUFFTztBQUNIN1YsY0FBVSxDQUFDNlYsV0FBRCxFQUFjRCxLQUFkLENBQVY7QUFDSDtBQUNKLENBaENEO0FBa0NBOzs7Ozs7Ozs7Ozs7O0FBV0EvbEIsYUFBYSxDQUFDVixTQUFkLENBQXdCd2xCLGdCQUF4QixHQUEyQyxVQUFVenVCLElBQVYsRUFBZ0JsRixRQUFoQixFQUEwQk4sUUFBMUIsRUFBb0NrMUIsS0FBcEMsRUFBMkM7QUFBQTs7QUFDbEYsTUFBSUgsS0FBSyxHQUFHLzBCLFFBQVEsR0FBR00sUUFBdkI7O0FBQ0EsTUFBSWcxQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2hCO0FBQ0EsVUFBSSxDQUFDckMsT0FBTCxDQUFhZSxHQUFiLENBQWlCZSxLQUFqQixFQUF3QnBYLElBQUksQ0FBQ0MsU0FBTCxDQUFlcFksSUFBZixDQUF4Qjs7QUFDQSxRQUFJZ3RCLElBQUksR0FBRyxNQUFJLENBQUNTLE9BQUwsQ0FBYXNCLE9BQWIsQ0FBcUJRLEtBQXJCLENBQVgsQ0FIZ0IsQ0FJaEI7OztBQUNBbHdCLEtBQUMsQ0FBQ3V3QixJQUFGLENBQU8sTUFBSSxDQUFDM3dCLElBQUwsQ0FBVXpFLFFBQVYsQ0FBUCxFQUE0QndGLElBQTVCLEVBQ0tpUyxJQURMLENBQ1UsVUFBQzNLLFFBQUQsRUFBYztBQUNoQixVQUFJQSxRQUFRLENBQUNDLE9BQWIsRUFBc0I7QUFDbEIsY0FBSSxDQUFDOG1CLE9BQUwsQ0FBYS9tQixRQUFiLEVBRGtCLENBRWxCOzs7QUFDQSxZQUFJeW9CLFVBQVUsR0FBRyxNQUFJLENBQUN0QyxPQUFMLENBQWFzQixPQUFiLENBQXFCUSxLQUFyQixDQUFqQjs7QUFDQSxZQUFJdkMsSUFBSSxJQUFJK0MsVUFBWixFQUF3QjtBQUNwQixnQkFBSSxDQUFDdEMsT0FBTCxDQUFhcGlCLE1BQWIsQ0FBb0Jra0IsS0FBcEI7QUFDSDs7QUFDRCxjQUFJLENBQUMvdEIsU0FBTCxDQUFlaEgsUUFBZixFQUF5QjRCLFdBQVcsQ0FBQ0MsS0FBckM7QUFDSCxPQVJELE1BUU87QUFDSDtBQUNBLGNBQUksQ0FBQ21GLFNBQUwsQ0FBZWhILFFBQWYsRUFBeUI0QixXQUFXLENBQUM0bUIsTUFBckMsRUFBNkMxYixRQUFRLENBQUMvSSxPQUF0RDs7QUFDQSxZQUFJK0ksUUFBUSxDQUFDQyxPQUFULEtBQXFCLEtBQXpCLEVBQWdDO0FBQzVCO0FBQ0EsY0FBSXdvQixXQUFVLEdBQUcsTUFBSSxDQUFDdEMsT0FBTCxDQUFhc0IsT0FBYixDQUFxQlEsS0FBckIsQ0FBakI7O0FBQ0EsY0FBSXZDLElBQUksSUFBSStDLFdBQVosRUFBd0I7QUFDcEIsa0JBQUksQ0FBQ3RDLE9BQUwsQ0FBYXBpQixNQUFiLENBQW9Ca2tCLEtBQXBCO0FBQ0g7QUFDSjtBQUNKO0FBQ0osS0FyQkwsRUFzQktsZCxJQXRCTCxDQXNCVSxVQUFDRSxLQUFELEVBQVFzZCxVQUFSLEVBQXVCO0FBQ3pCLFlBQUksQ0FBQ3J1QixTQUFMLENBQWVoSCxRQUFmLEVBQXlCNEIsV0FBVyxDQUFDbXhCLFFBQXJDLEVBQStDc0MsVUFBVSxDQUFDNzBCLFFBQVgsRUFBL0MsRUFEeUIsQ0FFekI7OztBQUNBLFVBQUkrMEIsVUFBVSxHQUFHLE1BQUksQ0FBQ3RDLE9BQUwsQ0FBYXNCLE9BQWIsQ0FBcUJRLEtBQXJCLENBQWpCOztBQUNBLFVBQUl2QyxJQUFJLElBQUkrQyxVQUFaLEVBQXdCO0FBQ3BCLGNBQUksQ0FBQ3RCLGdCQUFMLENBQXNCenVCLElBQXRCLEVBQTRCbEYsUUFBNUIsRUFBc0NOLFFBQXRDLEVBQWdEazFCLEtBQUssR0FBRyxNQUFJLENBQUM1QixVQUE3RDtBQUNIO0FBQ0osS0E3Qkw7QUE4QkgsR0FuQ0Q7O0FBb0NBeEssY0FBWSxDQUFDLEtBQUt5SyxNQUFMLENBQVl3QixLQUFaLENBQUQsQ0FBWjs7QUFDQSxNQUFJRyxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNoQkksV0FBTztBQUNWLEdBRkQsTUFFTztBQUNILFNBQUsvQixNQUFMLENBQVl3QixLQUFaLElBQXFCelYsVUFBVSxDQUFDZ1csT0FBRCxFQUFVSixLQUFWLENBQS9CO0FBQ0g7QUFDSixDQTVDRDs7QUE4Q0EvbEIsYUFBYSxDQUFDVixTQUFkLENBQXdCK21CLGFBQXhCLEdBQXdDLFVBQVV4MUIsUUFBVixFQUFvQndGLElBQXBCLEVBQTBCaXdCLFFBQTFCLEVBQW9DMW9CLE9BQXBDLEVBQTZDMFksT0FBN0MsRUFBc0Q7QUFBQTs7QUFDMUYsT0FBS2dQLFdBQUwsQ0FBaUJnQixRQUFqQjtBQUNBNXdCLEdBQUMsQ0FBQ3V3QixJQUFGLENBQU8sS0FBSzN3QixJQUFMLENBQVV6RSxRQUFWLENBQVAsRUFBNEJ3RixJQUE1QixFQUNLaVMsSUFETCxDQUNVLFVBQUMzSyxRQUFELEVBQWM7QUFDaEIsVUFBSSxDQUFDK25CLFdBQUw7O0FBQ0EsVUFBSSxDQUFDN3RCLFNBQUwsQ0FBZWhILFFBQWYsRUFBeUI0QixXQUFXLENBQUNDLEtBQXJDOztBQUNBa0wsV0FBTyxDQUFDRCxRQUFELENBQVA7O0FBQ0EsVUFBSSxDQUFDK21CLE9BQUwsQ0FBYS9tQixRQUFiO0FBQ0gsR0FOTCxFQU9LK0ssSUFQTCxDQU9VLFVBQUM3RSxDQUFELEVBQUlxaUIsVUFBSixFQUFnQkssV0FBaEIsRUFBZ0M7QUFDbEMsUUFBSUQsUUFBUSxJQUFJLENBQWhCLEVBQW1CO0FBQ2YsWUFBSSxDQUFDWixXQUFMOztBQUNBLFlBQUksQ0FBQzd0QixTQUFMLENBQWVoSCxRQUFmLEVBQXlCNEIsV0FBVyxDQUFDNG1CLE1BQXJDLEVBQTZDNk0sVUFBVSxDQUFDNzBCLFFBQVgsRUFBN0M7O0FBQ0EsVUFBSWlsQixPQUFKLEVBQWE7QUFDVEEsZUFBTyxDQUFDelMsQ0FBRCxFQUFJcWlCLFVBQUosRUFBZ0JLLFdBQWhCLENBQVA7QUFDSDtBQUNKLEtBTkQsTUFNTztBQUNIcFcsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2IsY0FBSSxDQUFDdVYsV0FBTDs7QUFDQSxjQUFJLENBQUM3dEIsU0FBTCxDQUFlaEgsUUFBZixFQUF5QjRCLFdBQVcsQ0FBQ214QixRQUFyQyxFQUErQ3NDLFVBQVUsQ0FBQzcwQixRQUFYLEVBQS9DOztBQUNBLGNBQUksQ0FBQ2cxQixhQUFMLENBQW1CeDFCLFFBQW5CLEVBQTZCd0YsSUFBN0IsRUFBbUNpd0IsUUFBUSxHQUFHLENBQTlDLEVBQWlEMW9CLE9BQWpELEVBQTBEMFksT0FBMUQ7QUFDSCxPQUpTLEVBSVAsTUFBSSxDQUFDNk4sVUFKRSxDQUFWO0FBS0g7QUFDSixHQXJCTDtBQXNCSCxDQXhCRDs7QUEyQkFua0IsYUFBYSxDQUFDVixTQUFkLENBQXdCOU0sY0FBeEIsR0FBeUMsVUFBVW9ELGFBQVYsRUFBeUI7QUFBQTs7QUFDOUQsTUFBSWhILEtBQUssR0FBRyxLQUFLdVEsSUFBTCxDQUFVdlEsS0FBdEI7O0FBQ0EsTUFBSUEsS0FBSyxDQUFDbUosRUFBTixDQUFTakMsTUFBVCxDQUFnQndILG1CQUFoQixDQUFvQyxnQkFBcEMsQ0FBSixFQUEyRDtBQUN2RCxRQUFJakgsSUFBSSxHQUFHLEtBQUs2dUIsZ0JBQUwsRUFBWDtBQUNBN3VCLFFBQUksQ0FBQyxlQUFELENBQUosR0FBd0JULGFBQXhCOztBQUNBLFNBQUt5d0IsYUFBTCxDQUFtQixnQkFBbkIsRUFBcUNod0IsSUFBckMsRUFBMkMsQ0FBM0MsRUFDbUIsVUFBQ3NILFFBQUQsRUFBYztBQUNWLFVBQUlBLFFBQVEsQ0FBQ0MsT0FBYixFQUFzQjtBQUNsQixjQUFJLENBQUN1QixJQUFMLENBQVVxbkIsbUJBQVYsQ0FBOEI3b0IsUUFBOUI7QUFDSCxPQUZELE1BRU87QUFDSCxjQUFJLENBQUM5RixTQUFMLENBQWUsZ0JBQWYsRUFBaUNwRixXQUFXLENBQUM0bUIsTUFBN0MsRUFBcUQxYixRQUFRLENBQUMvSSxPQUE5RDtBQUNIO0FBQ0osS0FQcEIsRUFRbUIsVUFBQ2lQLENBQUQsRUFBSXFpQixVQUFKLEVBQWdCSyxXQUFoQixFQUFnQztBQUM1QixZQUFJLENBQUNwbkIsSUFBTCxDQUFVdEosVUFBVixDQUFxQmtJLE1BQXJCLENBQTRCNk0seUJBQTVCOztBQUNBdFUsYUFBTyxDQUFDc1MsS0FBUixDQUFjL0UsQ0FBZCxFQUFpQnFpQixVQUFqQixFQUE2QkssV0FBN0I7QUFDSCxLQVhwQjtBQVlILEdBZkQsTUFlTztBQUNILFNBQUsxdUIsU0FBTCxDQUFlLGdCQUFmLEVBQWlDcEYsV0FBVyxDQUFDb3hCLE9BQTdDO0FBQ0g7QUFDSixDQXBCRDs7QUFzQkE3akIsYUFBYSxDQUFDVixTQUFkLENBQXdCOUwsY0FBeEIsR0FBeUMsWUFBWTtBQUFBOztBQUNqRCxNQUFJNUUsS0FBSyxHQUFHLEtBQUt1USxJQUFMLENBQVV2USxLQUF0Qjs7QUFDQSxNQUFJQSxLQUFLLENBQUNtSixFQUFOLENBQVNqQyxNQUFULENBQWdCd0gsbUJBQWhCLENBQW9DLGdCQUFwQyxDQUFKLEVBQTJEO0FBQ3ZELFFBQUlqSCxJQUFJLEdBQUcsS0FBSzZ1QixnQkFBTCxFQUFYO0FBQ0E3dUIsUUFBSSxDQUFDLFFBQUQsQ0FBSixHQUFpQnpILEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUIrQyxNQUFqQixFQUFqQjtBQUNBOEYsUUFBSSxDQUFDLFVBQUQsQ0FBSixHQUFtQnpILEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUI4QyxRQUFqQixFQUFuQjtBQUNBK0YsUUFBSSxDQUFDLFFBQUQsQ0FBSixHQUFpQnpILEtBQUssQ0FBQ3BCLFVBQU4sWUFBakI7QUFDQTZJLFFBQUksQ0FBQyxLQUFELENBQUosR0FBY3pILEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUIrQixHQUFqQixFQUFkO0FBQ0E4RyxRQUFJLENBQUMsV0FBRCxDQUFKLEdBQW9CekgsS0FBSyxDQUFDcEIsVUFBTixDQUFpQmdELFFBQWpCLEVBQXBCO0FBQ0E2RixRQUFJLENBQUMsTUFBRCxDQUFKLEdBQWV6SCxLQUFLLENBQUNwQixVQUFOLENBQWlCeUIsSUFBakIsRUFBZjtBQUNBb0gsUUFBSSxDQUFDLFVBQUQsQ0FBSixHQUFtQmdZLDBGQUFzQixDQUFDemYsS0FBRCxDQUF6Qzs7QUFFQSxTQUFLeTNCLGFBQUwsQ0FBbUIsZ0JBQW5CLEVBQXFDaHdCLElBQXJDLEVBQTJDLENBQTNDLEVBQThDO0FBQUEsYUFBTSxDQUFOO0FBQUEsS0FBOUMsRUFDbUIsVUFBQ3dOLENBQUQsRUFBSXFpQixVQUFKLEVBQWdCSyxXQUFoQixFQUFnQztBQUM1QixZQUFJLENBQUNwbkIsSUFBTCxDQUFVdEosVUFBVixDQUFxQmtJLE1BQXJCLENBQTRCMG9CLHdCQUE1Qjs7QUFDQW53QixhQUFPLENBQUNzUyxLQUFSLENBQWMvRSxDQUFkLEVBQWlCcWlCLFVBQWpCLEVBQTZCSyxXQUE3QjtBQUNILEtBSnBCO0FBS0gsR0FmRCxNQWVPO0FBQ0gsU0FBSzF1QixTQUFMLENBQWUsU0FBZixFQUEwQiw0Q0FBMUI7QUFDSDtBQUNKLENBcEJEOztBQXNCQW1JLGFBQWEsQ0FBQ1YsU0FBZCxDQUF3QjFNLFdBQXhCLEdBQXNDLFVBQVVrZixRQUFWLEVBQW9CO0FBQUE7O0FBQ3RELE1BQUksS0FBSzNTLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtSixFQUFoQixDQUFtQmpDLE1BQW5CLENBQTBCd0gsbUJBQTFCLENBQThDLGFBQTlDLENBQUosRUFBa0U7QUFDOUQsUUFBSTFPLEtBQUssR0FBRyxLQUFLdVEsSUFBTCxDQUFVdlEsS0FBdEI7QUFDQSxRQUFJeUgsSUFBSSxHQUFHLEtBQUs2dUIsZ0JBQUwsRUFBWDs7QUFDQSxTQUFLbUIsYUFBTCxDQUFtQixhQUFuQixFQUFrQ2h3QixJQUFsQyxFQUF3QyxDQUF4QyxFQUEyQ3liLFFBQTNDLEVBQ21CLFVBQUNqTyxDQUFELEVBQUlxaUIsVUFBSixFQUFnQkssV0FBaEIsRUFBZ0M7QUFDNUIsWUFBSSxDQUFDcG5CLElBQUwsQ0FBVXRKLFVBQVYsQ0FBcUJrSSxNQUFyQixDQUE0QkMscUJBQTVCOztBQUNBMUgsYUFBTyxDQUFDc1MsS0FBUixDQUFjL0UsQ0FBZCxFQUFpQnFpQixVQUFqQixFQUE2QkssV0FBN0I7QUFDSCxLQUpwQjtBQUtIO0FBQ0osQ0FWRDs7QUFZQXZtQixhQUFhLENBQUNWLFNBQWQsQ0FBd0JwTSxRQUF4QixHQUFtQyxVQUFVa3VCLFVBQVYsRUFBc0J2c0IsUUFBdEIsRUFBZ0NDLEtBQWhDLEVBQXVDRixPQUF2QyxFQUFnRHVzQixTQUFoRCxFQUEyRDtBQUMxRixNQUFJLEtBQUtoaUIsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm1KLEVBQWhCLENBQW1CakMsTUFBbkIsQ0FBMEJ3SCxtQkFBMUIsQ0FBOEMsVUFBOUMsQ0FBSixFQUErRDtBQUMzRCxRQUFJakgsSUFBSSxHQUFHLEtBQUs2dUIsZ0JBQUwsRUFBWDtBQUNBN3VCLFFBQUksQ0FBQyxZQUFELENBQUosR0FBcUIrcUIsVUFBckI7QUFDQS9xQixRQUFJLENBQUMsVUFBRCxDQUFKLEdBQW1CeEIsUUFBbkI7QUFDQXdCLFFBQUksQ0FBQyxPQUFELENBQUosR0FBZ0J2QixLQUFoQjtBQUNBdUIsUUFBSSxDQUFDLFNBQUQsQ0FBSixHQUFrQnpCLE9BQWxCO0FBQ0F5QixRQUFJLENBQUMsV0FBRCxDQUFKLEdBQW9COHFCLFNBQXBCO0FBQ0EsU0FBS3RwQixTQUFMLENBQWUsVUFBZixFQUEyQnBGLFdBQVcsQ0FBQ2lILE1BQXZDLEVBUDJELENBUTNEOztBQUNBLFNBQUtzckIsVUFBTCxDQUFnQjN1QixJQUFoQixFQUFzQixVQUF0QixFQUFrQyxDQUFsQyxFQUFxQyxZQUFNLENBQzFDLENBREQ7QUFFSCxHQVhELE1BV087QUFDSCxTQUFLd0IsU0FBTCxDQUFlLFVBQWYsRUFBMkJwRixXQUFXLENBQUNveEIsT0FBdkM7QUFDSDtBQUNKLENBZkQ7O0FBaUJBN2pCLGFBQWEsQ0FBQ1YsU0FBZCxDQUF3QmxNLFNBQXhCLEdBQW9DLFVBQVVzekIsU0FBVixFQUFxQjNmLEtBQXJCLEVBQTRCO0FBQzVELE1BQUksS0FBSzVILElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtSixFQUFoQixDQUFtQmpDLE1BQW5CLENBQTBCd0gsbUJBQTFCLENBQThDLFdBQTlDLENBQUosRUFBZ0U7QUFDNUQsUUFBSWpILElBQUksR0FBRyxLQUFLNnVCLGdCQUFMLEVBQVg7QUFDQTd1QixRQUFJLENBQUMsV0FBRCxDQUFKLEdBQW9CcXdCLFNBQXBCO0FBQ0Fyd0IsUUFBSSxDQUFDLE9BQUQsQ0FBSixHQUFnQjBRLEtBQWhCO0FBQ0EsU0FBS2xQLFNBQUwsQ0FBZSxXQUFmLEVBQTRCcEYsV0FBVyxDQUFDaUgsTUFBeEMsRUFKNEQsQ0FLNUQ7O0FBQ0EsU0FBS29yQixnQkFBTCxDQUFzQnp1QixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxXQUE3QyxFQUEwRCxDQUExRDtBQUNILEdBUEQsTUFPTztBQUNILFNBQUt3QixTQUFMLENBQWUsV0FBZixFQUE0QnBGLFdBQVcsQ0FBQ294QixPQUF4QztBQUNIO0FBQ0osQ0FYRDs7QUFhQTdqQixhQUFhLENBQUNWLFNBQWQsQ0FBd0IxTCxzQkFBeEIsR0FBaUQsVUFBUyt5QixTQUFULEVBQW9CO0FBQUE7O0FBQ2pFLE1BQUksS0FBS3huQixJQUFMLENBQVV2USxLQUFWLENBQWdCbUosRUFBaEIsQ0FBbUJqQyxNQUFuQixDQUEwQndILG1CQUExQixDQUE4Qyx3QkFBOUMsQ0FBSixFQUE2RTtBQUN6RSxRQUFJakgsSUFBSSxHQUFHLEtBQUs2dUIsZ0JBQUwsRUFBWDtBQUNBN3VCLFFBQUksQ0FBQyxRQUFELENBQUosR0FBaUJzd0IsU0FBakI7O0FBQ0EsUUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDdndCLElBQUQsRUFBVTtBQUM3QixVQUFJQSxJQUFJLENBQUN1SCxPQUFULEVBQWtCO0FBQ2QsY0FBSSxDQUFDdUIsSUFBTCxDQUFVdlEsS0FBVixDQUFnQm5CLFVBQWhCLENBQTJCdUQsZ0JBQTNCLENBQTRDMjFCLFNBQTVDO0FBQ0g7QUFDSixLQUpEOztBQUtBLFNBQUtOLGFBQUwsQ0FBbUIsd0JBQW5CLEVBQTZDaHdCLElBQTdDLEVBQW1ELENBQW5ELEVBQXNEdXdCLGdCQUF0RCxFQUNtQixVQUFDL2lCLENBQUQsRUFBSXFpQixVQUFKLEVBQWdCSyxXQUFoQixFQUFnQztBQUM1QixZQUFJLENBQUNwbkIsSUFBTCxDQUFVdEosVUFBVixDQUFxQmtJLE1BQXJCLENBQTRCK00sZ0NBQTVCOztBQUNBeFUsYUFBTyxDQUFDc1MsS0FBUixDQUFjL0UsQ0FBZCxFQUFpQnFpQixVQUFqQixFQUE2QkssV0FBN0I7QUFDSCxLQUpwQjtBQUtIO0FBQ0osQ0FmRDtBQWlCQTs7Ozs7OztBQUtBdm1CLGFBQWEsQ0FBQ1YsU0FBZCxDQUF3QnhNLFFBQXhCLEdBQW1DLFVBQVUzQixRQUFWLEVBQW9CM0IsSUFBcEIsRUFBMEJzaUIsUUFBMUIsRUFBb0MrVSxhQUFwQyxFQUFtRDtBQUNsRixNQUFJajRCLEtBQUssR0FBRyxLQUFLdVEsSUFBTCxDQUFVdlEsS0FBdEI7QUFDQSxNQUFJa0gsTUFBTSxHQUFHLElBQWI7O0FBQ0EsTUFBSWxILEtBQUssQ0FBQ21KLEVBQU4sQ0FBU2pDLE1BQVQsQ0FBZ0J3SCxtQkFBaEIsQ0FBb0MsV0FBcEMsQ0FBSixFQUFzRDtBQUNsRCxRQUFJakgsSUFBSSxHQUFHLEtBQUs2dUIsZ0JBQUwsRUFBWDtBQUNBN3VCLFFBQUksQ0FBQyxVQUFELENBQUosR0FBbUJsRixRQUFuQjtBQUNBa0YsUUFBSSxDQUFDLE1BQUQsQ0FBSixHQUFlN0csSUFBZjs7QUFDQSxTQUFLNjJCLGFBQUwsQ0FBbUIsS0FBSy93QixJQUFMLENBQVV3eEIsU0FBN0IsRUFBd0N6d0IsSUFBeEMsRUFBOEMsQ0FBOUMsRUFDbUIsVUFBVXNILFFBQVYsRUFBb0I7QUFDaEIsVUFBSUEsUUFBUSxDQUFDQyxPQUFiLEVBQXNCO0FBQ2xCa1UsZ0JBQVEsQ0FBQ25VLFFBQVEsQ0FBQ3RILElBQVYsQ0FBUjtBQUNILE9BRkQsTUFFTztBQUNId3dCLHFCQUFhLENBQUNscEIsUUFBUSxDQUFDL0ksT0FBVixDQUFiO0FBQ0FrQixjQUFNLENBQUMrQixTQUFQLENBQWlCLFNBQWpCLEVBQTRCOEYsUUFBUSxDQUFDL0ksT0FBckM7QUFDSDtBQUNKLEtBUnBCLEVBU21CLFVBQVVpUCxDQUFWLEVBQWFxaUIsVUFBYixFQUF5QkssV0FBekIsRUFBc0M7QUFDbENNLG1CQUFhLENBQUMsc0NBQUQsQ0FBYjtBQUNBdndCLGFBQU8sQ0FBQ3NTLEtBQVIsQ0FBYzJkLFdBQWQ7QUFDSCxLQVpwQjtBQWFILEdBakJELE1BaUJPO0FBQ0hNLGlCQUFhLENBQUMsMkJBQUQsQ0FBYjtBQUNBLFNBQUtodkIsU0FBTCxDQUFlLFNBQWYsRUFBMEIsc0NBQTFCO0FBQ0g7QUFDSixDQXhCRDs7QUEwQkFtSSxhQUFhLENBQUNWLFNBQWQsQ0FBd0JoTSxRQUF4QixHQUFtQyxVQUFVbkMsUUFBVixFQUFvQnlLLFFBQXBCLEVBQThCbXFCLEtBQTlCLEVBQXFDO0FBQ3BFLE1BQUlBLEtBQUssS0FBS3A0QixTQUFkLEVBQXlCO0FBQ3JCbzRCLFNBQUssR0FBRyxLQUFLN0IsV0FBYjtBQUNIOztBQUNELE1BQUl0MUIsS0FBSyxHQUFHLEtBQUt1USxJQUFMLENBQVV2USxLQUF0Qjs7QUFDQSxNQUFJQSxLQUFLLENBQUNtSixFQUFOLENBQVNqQyxNQUFULENBQWdCd0gsbUJBQWhCLENBQW9DLFVBQXBDLENBQUosRUFBcUQ7QUFDakQsUUFBSWpILElBQUksR0FBRyxLQUFLNnVCLGdCQUFMLEVBQVg7QUFDQTd1QixRQUFJLENBQUMsVUFBRCxDQUFKLEdBQW1CbEYsUUFBbkI7QUFDQWtGLFFBQUksQ0FBQyxNQUFELENBQUosR0FBZXVGLFFBQWY7QUFDQSxTQUFLL0QsU0FBTCxDQUFlLFVBQWYsRUFBMkJwRixXQUFXLENBQUNpSCxNQUF2Qzs7QUFDQSxTQUFLb3JCLGdCQUFMLENBQXNCenVCLElBQXRCLEVBQTRCbEYsUUFBNUIsRUFBc0MsVUFBdEMsRUFBa0Q0MEIsS0FBbEQ7QUFDSCxHQU5ELE1BTU87QUFDSCxTQUFLbHVCLFNBQUwsQ0FBZSxVQUFmLEVBQTJCcEYsV0FBVyxDQUFDb3hCLE9BQXZDO0FBQ0g7QUFDSixDQWREOztBQWdCQTdqQixhQUFhLENBQUNWLFNBQWQsQ0FBd0I1TCxnQkFBeEIsR0FBMkMsVUFBVTVDLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCZzJCLGNBQTFCLEVBQTBDQyxXQUExQyxFQUF1RDtBQUFBOztBQUM5RixNQUFJbFYsUUFBUSxHQUFHLEtBQUszUyxJQUFMLENBQVV2USxLQUFWLENBQWdCckIsYUFBaEIsQ0FBOEIwSCxTQUE5QixDQUF3QzJJLE9BQXZEOztBQUNBLE1BQUksS0FBS3VCLElBQUwsQ0FBVXZRLEtBQVYsQ0FBZ0JtSixFQUFoQixDQUFtQmpDLE1BQW5CLENBQTBCd0gsbUJBQTFCLENBQThDLGtCQUE5QyxDQUFKLEVBQXVFO0FBQ25FLFFBQUlqSCxJQUFJLEdBQUcsS0FBSzZ1QixnQkFBTCxFQUFYO0FBQ0E3dUIsUUFBSSxDQUFDLE9BQUQsQ0FBSixHQUFnQnZGLEtBQWhCO0FBQ0F1RixRQUFJLENBQUMsU0FBRCxDQUFKLEdBQWtCdEYsT0FBbEI7QUFDQXNGLFFBQUksQ0FBQyxpQkFBRCxDQUFKLEdBQTBCMHdCLGNBQTFCO0FBQ0Exd0IsUUFBSSxDQUFDLGNBQUQsQ0FBSixHQUF1QjJ3QixXQUF2QjtBQUNBLFNBQUs3bkIsSUFBTCxDQUFVdEosVUFBVixDQUFxQmdILFlBQXJCLENBQWtDQyxFQUFsQyxDQUFxQzBMLFdBQXJDLENBQWlEeWUsZ0JBQWpELENBQWtFLFVBQUNDLE9BQUQsRUFBVXZoQixHQUFWLEVBQWtCO0FBQ2hGdFAsVUFBSSxDQUFDLE9BQUQsQ0FBSixHQUFnQjZ3QixPQUFoQjs7QUFDQSxVQUFJdmhCLEdBQUcsQ0FBQ2pFLE1BQVIsRUFBZ0I7QUFDWmlFLFdBQUcsQ0FBQ2pFLE1BQUo7QUFDSDs7QUFDRCxhQUFJLENBQUNzakIsVUFBTCxDQUFnQjN1QixJQUFoQixFQUFzQixrQkFBdEIsRUFBMEMsQ0FBMUMsRUFDZ0IsVUFBQ3NILFFBQUQsRUFBYztBQUNWLFlBQUlBLFFBQVEsQ0FBQ0MsT0FBYixFQUFzQjtBQUNsQixpQkFBSSxDQUFDL0YsU0FBTCxDQUFlLGtCQUFmLEVBQW1DcEYsV0FBVyxDQUFDQyxLQUEvQztBQUNILFNBRkQsTUFFTztBQUNILGlCQUFJLENBQUNtRixTQUFMLENBQWUsa0JBQWYsRUFBbUNwRixXQUFXLENBQUM0bUIsTUFBL0MsRUFBdUQxYixRQUFRLENBQUMvSSxPQUFoRTtBQUNIOztBQUNELFlBQUksQ0FBQ215QixjQUFELElBQW1CaDJCLE9BQW5CLElBQThCK2dCLFFBQWxDLEVBQTRDO0FBQ3hDQSxrQkFBUSxDQUFDemIsSUFBSSxDQUFDLGVBQUQsQ0FBTCxDQUFSO0FBQ0g7QUFDSixPQVZqQjtBQVdILEtBaEJEO0FBaUJIO0FBQ0osQ0ExQkQsQzs7Ozs7Ozs7Ozs7OztBQ3pmQTtBQUFBO0FBQUE7Ozs7Ozs7O0FBUU8sSUFBSW1qQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQVc7QUFDdkM7QUFDQSxNQUFJMk4sR0FBRyxHQUFHLEVBQVY7QUFDQSxNQUFJQyxJQUFJLEdBQUdobUIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0QsSUFBWCxDQUFnQkUsS0FBM0I7QUFFQSxNQUFJQyxLQUFLLEdBQUcsSUFBWjtBQUNBSixLQUFHLENBQUNLLE1BQUosR0FBYSxJQUFJcG1CLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdJLElBQWYsQ0FBb0IsVUFBU3g0QixJQUFULEVBQWU7QUFDNUNtUyxNQUFFLENBQUNpbUIsT0FBSCxDQUFXSyxXQUFYLENBQXVCLFFBQXZCLEVBQWlDL2UsU0FBakMsRUFBNEMsQ0FBNUMsRUFBK0MsQ0FBL0M7QUFDQSxRQUFJZ2YsVUFBSjs7QUFDQSxRQUFJSixLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNoQkksZ0JBQVUsR0FBRyxDQUFiO0FBQ0gsS0FGRCxNQUVPO0FBQ0hBLGdCQUFVLEdBQUduRixJQUFJLENBQUNELEdBQUwsS0FBYWdGLEtBQTFCO0FBQ0g7O0FBQ0RqeEIsV0FBTyxDQUFDQyxHQUFSLENBQVk2SyxFQUFFLENBQUNJLEdBQUgsQ0FBT3dYLFNBQVAsQ0FBaUIvcEIsSUFBakIsQ0FBWixFQUFvQzA0QixVQUFVLEdBQUMsSUFBL0M7QUFDQUosU0FBSyxHQUFHL0UsSUFBSSxDQUFDRCxHQUFMLEVBQVI7QUFDSCxHQVZZLENBQWI7QUFZQTs7OztBQUdBNEUsS0FBRyxDQUFDNXdCLEdBQUosR0FBVSxJQUFJNkssRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ksSUFBZixDQUFvQixVQUFTN3lCLE9BQVQsRUFBa0I7QUFDNUN3TSxNQUFFLENBQUNpbUIsT0FBSCxDQUFXSyxXQUFYLENBQXVCLEtBQXZCLEVBQThCL2UsU0FBOUIsRUFBeUMsQ0FBekMsRUFBNEMsQ0FBNUM7QUFDQXJTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZNkssRUFBRSxDQUFDSSxHQUFILENBQU93WCxTQUFQLENBQWlCcGtCLE9BQWpCLENBQVo7QUFDSCxHQUhTLENBQVY7QUFLQTs7OztBQUdBdXlCLEtBQUcsQ0FBQ1MsS0FBSixHQUFZLElBQUl4bUIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ksSUFBZixDQUFvQixVQUFTN3lCLE9BQVQsRUFBa0I7QUFDOUN3TSxNQUFFLENBQUNpbUIsT0FBSCxDQUFXSyxXQUFYLENBQXVCLEtBQXZCLEVBQThCL2UsU0FBOUIsRUFBeUMsQ0FBekMsRUFBNEMsQ0FBNUM7QUFDQXJTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZM0IsT0FBWjtBQUNILEdBSFcsQ0FBWjtBQUtBOzs7OztBQUlBdXlCLEtBQUcsQ0FBQ1UsVUFBSixHQUFpQixJQUFJem1CLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdJLElBQWYsQ0FBb0IsWUFBVztBQUM1Q3JtQixNQUFFLENBQUNpbUIsT0FBSCxDQUFXSyxXQUFYLENBQXVCLFlBQXZCLEVBQXFDL2UsU0FBckMsRUFBZ0QsQ0FBaEQsRUFBbUQsQ0FBbkQ7O0FBQ0EsUUFBSXZILEVBQUUsQ0FBQ2tXLGdCQUFILENBQW9CLFNBQXBCLEVBQStCMVosT0FBbkMsRUFBNEM7QUFDeEMsVUFBSTNKLE1BQU0sR0FBR21OLEVBQUUsQ0FBQ2tXLGdCQUFILENBQW9CLFNBQXBCLEVBQStCLFFBQS9CLEdBQWI7QUFDQXJqQixZQUFNLEdBQUdBLE1BQU0sQ0FBQ3dILEdBQVAsQ0FBVyxVQUFTcXNCLElBQVQsRUFBZTtBQUFFLGVBQU9BLElBQUksQ0FBQ0MsUUFBTCxFQUFQO0FBQXlCLE9BQXJELENBQVQ7QUFDQSxhQUFPM21CLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdXLElBQVgsQ0FBZ0IvekIsTUFBaEIsQ0FBUDtBQUNILEtBSkQsTUFJTztBQUNILGFBQU8sSUFBSW1OLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdXLElBQWYsQ0FBb0IsRUFBcEIsQ0FBUDtBQUNIO0FBQ0osR0FUZ0IsQ0FBakI7QUFXQTs7Ozs7QUFJQWIsS0FBRyxDQUFDYyxZQUFKLEdBQW1CLElBQUk3bUIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ksSUFBZixDQUFvQixZQUFXO0FBQzlDcm1CLE1BQUUsQ0FBQ2ltQixPQUFILENBQVdLLFdBQVgsQ0FBdUIsY0FBdkIsRUFBdUMvZSxTQUF2QyxFQUFrRCxDQUFsRCxFQUFxRCxDQUFyRDs7QUFDQSxRQUFJdkgsRUFBRSxDQUFDa1csZ0JBQUgsQ0FBb0IsU0FBcEIsRUFBK0IxWixPQUFuQyxFQUE0QztBQUN4Q3dELFFBQUUsQ0FBQ2tXLGdCQUFILENBQW9CLFNBQXBCLEVBQStCcmpCLE1BQS9CLENBQXNDd1EsU0FBdEM7QUFDSDs7QUFDRCxXQUFPckQsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0QsSUFBWCxDQUFnQkUsS0FBdkI7QUFDSCxHQU5rQixDQUFuQjtBQVFBSCxLQUFHLENBQUNlLFdBQUosR0FBa0IsSUFBSTltQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXSSxJQUFmLENBQW9CLFlBQVc7QUFDN0NybUIsTUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ssV0FBWCxDQUF1QixhQUF2QixFQUFzQy9lLFNBQXRDLEVBQWlELENBQWpELEVBQW9EaVQsUUFBcEQ7QUFDQSxRQUFJK0MsSUFBSSxHQUFHaFcsU0FBWDs7QUFDQSxTQUFLLElBQUlqQyxDQUFDLEdBQUdpWSxJQUFJLENBQUMzakIsTUFBTCxHQUFZLENBQXpCLEVBQTRCMEwsQ0FBQyxJQUFJLENBQWpDLEVBQW9DQSxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDLFVBQUl4RCxNQUFLLEdBQUd5YixJQUFJLENBQUNqWSxDQUFELENBQWhCO0FBQ0F0RixRQUFFLENBQUNpbUIsT0FBSCxDQUFXYyxXQUFYLENBQXVCLE9BQXZCLEVBQWdDLFFBQWhDLEVBQTBDL21CLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdlLFdBQVgsQ0FBdUJsbEIsTUFBdkIsQ0FBMUM7QUFDQTlCLFFBQUUsQ0FBQ3VXLFdBQUgsQ0FBZWhSLElBQWYsQ0FBb0J2RixFQUFFLENBQUNJLEdBQUgsQ0FBT3dYLFNBQVAsQ0FBaUI5VixNQUFqQixDQUFwQjtBQUNIO0FBQ0osR0FSaUIsQ0FBbEI7QUFVQTs7OztBQUdBaWtCLEtBQUcsQ0FBQ2tCLFdBQUosR0FBa0IsSUFBSWpuQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXSSxJQUFmLENBQW9CLFlBQVc7QUFDN0NybUIsTUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ssV0FBWCxDQUF1QixhQUF2QixFQUFzQy9lLFNBQXRDLEVBQWlELENBQWpELEVBQW9ELENBQXBEO0FBQ0EsV0FBT3ZILEVBQUUsQ0FBQ0ksR0FBSCxDQUFPQyxTQUFQLENBQWlCTCxFQUFFLENBQUNrVyxnQkFBSCxDQUFvQixVQUFwQixFQUFnQzNtQixJQUFqRCxDQUFQO0FBQ0gsR0FIaUIsQ0FBbEI7QUFLQTs7OztBQUdBdzJCLEtBQUcsQ0FBQ21CLGNBQUosR0FBcUIsSUFBSWxuQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXSSxJQUFmLENBQW9CLFlBQVc7QUFDaERybUIsTUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ssV0FBWCxDQUF1QixnQkFBdkIsRUFBeUMvZSxTQUF6QyxFQUFvRCxDQUFwRCxFQUF1RCxDQUF2RDtBQUNBLFdBQU92SCxFQUFFLENBQUNJLEdBQUgsQ0FBT0MsU0FBUCxDQUFpQkwsRUFBRSxDQUFDa1csZ0JBQUgsQ0FBb0IsU0FBcEIsRUFBK0JnRCxVQUEvQixJQUE2QyxFQUE5RCxDQUFQO0FBQ0gsR0FIb0IsQ0FBckI7QUFLQTZNLEtBQUcsQ0FBQ29CLFdBQUosR0FBa0IsSUFBSW5uQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXSSxJQUFmLENBQW9CLFlBQVc7QUFDN0MsUUFBSXJtQixFQUFFLENBQUNrVyxnQkFBSCxDQUFvQixTQUFwQixFQUErQjFaLE9BQW5DLEVBQTRDO0FBQ3hDLFVBQUl1VSxLQUFLLEdBQUcvUSxFQUFFLENBQUNrVyxnQkFBSCxDQUFvQixTQUFwQixFQUErQm5GLEtBQTNDO0FBQ0EsYUFBTy9RLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPQyxTQUFQLENBQWlCMFEsS0FBakIsQ0FBUDtBQUNILEtBSEQsTUFHTztBQUNILGFBQU8sSUFBSS9RLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdXLElBQWYsQ0FBb0IsRUFBcEIsQ0FBUDtBQUNIO0FBQ0osR0FQaUIsQ0FBbEI7QUFTQTs7OztBQUdBYixLQUFHLENBQUNxQixpQkFBSixHQUF3QixJQUFJcG5CLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdJLElBQWYsQ0FBb0IsWUFBVztBQUNuRHJtQixNQUFFLENBQUNpbUIsT0FBSCxDQUFXSyxXQUFYLENBQXVCLG1CQUF2QixFQUE0Qy9lLFNBQTVDLEVBQXVELENBQXZELEVBQTBELENBQTFEOztBQUNBLFFBQUl2SCxFQUFFLENBQUNrVyxnQkFBSCxDQUFvQixTQUFwQixFQUErQjFaLE9BQW5DLEVBQTRDO0FBQ3hDLGFBQU8sSUFBSXdELEVBQUUsQ0FBQ2ltQixPQUFILENBQVdvQixLQUFmLENBQXFCLENBQUNyQixJQUFELEVBQU9BLElBQVAsQ0FBckIsQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNILFVBQUl4ZSxLQUFLLEdBQUd4SCxFQUFFLENBQUNrVyxnQkFBSCxDQUFvQixTQUFwQixFQUErQjFPLEtBQTNDO0FBQUEsVUFDSXFXLFFBQVEsR0FBRyxFQURmOztBQUVBLFVBQUlyVyxLQUFLLElBQUlBLEtBQUssQ0FBQ2dXLFNBQWYsSUFBNEJoVyxLQUFLLENBQUNnVyxTQUFOLENBQWdCNWpCLE1BQWhCLEdBQXlCLENBQXpELEVBQTREO0FBQ3hEaWtCLGdCQUFRLENBQUMsTUFBRCxDQUFSLEdBQW1CclcsS0FBSyxDQUFDZ1csU0FBTixDQUFnQixDQUFoQixFQUFtQmhDLE1BQXRDO0FBQ0gsT0FGRCxNQUVPO0FBQ0hoVSxhQUFLLEdBQUd3ZSxJQUFSO0FBQ0g7O0FBQ0RuSSxjQUFRLEdBQUc3ZCxFQUFFLENBQUNJLEdBQUgsQ0FBT0MsU0FBUCxDQUFpQndkLFFBQWpCLENBQVg7QUFDQSxhQUFPLElBQUk3ZCxFQUFFLENBQUNpbUIsT0FBSCxDQUFXb0IsS0FBZixDQUFxQixDQUFDN2YsS0FBRCxFQUFRcVcsUUFBUixDQUFyQixDQUFQO0FBQ0g7QUFDSixHQWZ1QixDQUF4QjtBQWtCQWtJLEtBQUcsQ0FBQ3VCLHdCQUFKLEdBQStCLElBQUl0bkIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ksSUFBZixDQUFvQixZQUFXO0FBQzFEcm1CLE1BQUUsQ0FBQ2ltQixPQUFILENBQVdLLFdBQVgsQ0FBdUIsMEJBQXZCLEVBQW1EL2UsU0FBbkQsRUFBOEQsQ0FBOUQsRUFBaUUsQ0FBakU7QUFDQSxXQUFPLENBQUN2SCxFQUFFLENBQUNrVyxnQkFBSCxDQUFvQixTQUFwQixFQUErQjFaLE9BQWhDLElBQ0N3RCxFQUFFLENBQUNrVyxnQkFBSCxDQUFvQixTQUFwQixFQUErQjFPLEtBRGhDLElBRUN4SCxFQUFFLENBQUNrVyxnQkFBSCxDQUFvQixTQUFwQixFQUErQjFPLEtBQS9CLENBQXFDb1MsT0FBckMsS0FBaUQsZ0JBRnpEO0FBR0gsR0FMOEIsQ0FBL0I7QUFPQSxNQUFJMk4sVUFBVSxHQUFHaDdCLFNBQWpCO0FBQ0F3NUIsS0FBRyxDQUFDeUIsb0JBQUosR0FBMkIsSUFBSXhuQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXSSxJQUFmLENBQW9CLFlBQVc7QUFDdERybUIsTUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ssV0FBWCxDQUF1QixzQkFBdkIsRUFBK0MvZSxTQUEvQyxFQUEwRCxDQUExRCxFQUE2RCxDQUE3RDtBQUNBZ2dCLGNBQVUsR0FBR3ZuQixFQUFFLENBQUNzWSxTQUFoQjs7QUFDQSxRQUFJdFksRUFBRSxDQUFDc2EsaUJBQVAsRUFBMEI7QUFDdEJ0YSxRQUFFLENBQUNzWSxTQUFILEdBQWV0WSxFQUFFLENBQUNzYSxpQkFBSCxFQUFmO0FBQ0F0YSxRQUFFLENBQUN5bkIsU0FBSCxHQUFlckcsSUFBSSxDQUFDRCxHQUFMLEVBQWY7QUFDSDtBQUNKLEdBUDBCLENBQTNCO0FBUUE0RSxLQUFHLENBQUMyQixzQkFBSixHQUE2QixJQUFJMW5CLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdJLElBQWYsQ0FBb0IsWUFBVztBQUN4RHJtQixNQUFFLENBQUNpbUIsT0FBSCxDQUFXSyxXQUFYLENBQXVCLHdCQUF2QixFQUFpRC9lLFNBQWpELEVBQTRELENBQTVELEVBQStELENBQS9EO0FBQ0F2SCxNQUFFLENBQUNzWSxTQUFILEdBQWVpUCxVQUFmO0FBQ0F2bkIsTUFBRSxDQUFDeW5CLFNBQUgsR0FBZXJHLElBQUksQ0FBQ0QsR0FBTCxFQUFmO0FBQ0gsR0FKNEIsQ0FBN0I7QUFNQTRFLEtBQUcsQ0FBQzRCLGtCQUFKLEdBQXlCLElBQUkzbkIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ksSUFBZixDQUFvQixZQUFXO0FBQ3BEcm1CLE1BQUUsQ0FBQ2ltQixPQUFILENBQVdLLFdBQVgsQ0FBdUIsb0JBQXZCLEVBQTZDL2UsU0FBN0MsRUFBd0QsQ0FBeEQsRUFBMkQsQ0FBM0Q7QUFDQXZILE1BQUUsQ0FBQ2tXLGdCQUFILENBQW9CbG1CLFVBQXBCLENBQStCMHBCLFNBQS9CLEdBQTJDLElBQTNDO0FBQ0gsR0FId0IsQ0FBekI7QUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQWVBcU0sS0FBRyxDQUFDNkIsU0FBSixHQUFnQixJQUFJNW5CLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdJLElBQWYsQ0FBb0IsWUFBVztBQUMzQ3JtQixNQUFFLENBQUNpbUIsT0FBSCxDQUFXSyxXQUFYLENBQXVCLFdBQXZCLEVBQW9DL2UsU0FBcEMsRUFBK0MsQ0FBL0MsRUFBa0QsQ0FBbEQ7O0FBQ0EsUUFBSXZILEVBQUUsQ0FBQ2tXLGdCQUFILENBQW9CLFNBQXBCLEVBQStCMVosT0FBbkMsRUFBNEM7QUFDeEMsVUFBSXFyQixPQUFPLEdBQUc3bkIsRUFBRSxDQUFDa1csZ0JBQUgsQ0FBb0IsU0FBcEIsRUFBK0IsUUFBL0IsR0FBZDtBQUNBMlIsYUFBTyxHQUFHQSxPQUFPLENBQUNyYixNQUFSLENBQWUsVUFBUzNaLE1BQVQsRUFBaUI7QUFDdEMsZUFBT0EsTUFBTSxDQUFDekUsSUFBUCxLQUFnQixNQUF2QjtBQUNILE9BRlMsRUFFUGlNLEdBRk8sQ0FFSCxVQUFTeXRCLEtBQVQsRUFBZ0I7QUFDbkIsZUFBTztBQUFDLGtCQUFRQSxLQUFLLENBQUNob0IsT0FBTixDQUFjekYsR0FBZCxDQUFrQixVQUFTMHRCLElBQVQsRUFBZTtBQUM3QyxnQkFBSUMsT0FBTyxHQUFHO0FBQUUsc0JBQVFELElBQUksQ0FBQzM1QixJQUFmO0FBQ1YsdUJBQVM7QUFEQyxhQUFkOztBQUVBLGdCQUFJMjVCLElBQUksQ0FBQzM1QixJQUFMLEtBQWMsTUFBZCxJQUF3QjI1QixJQUFJLENBQUMzNUIsSUFBTCxLQUFjLFNBQTFDLEVBQXFEO0FBQ2pENDVCLHFCQUFPLENBQUMsR0FBRCxDQUFQLEdBQWVELElBQUksQ0FBQzl5QixJQUFMLENBQVVvRixHQUFWLENBQWMsVUFBUzR0QixDQUFULEVBQVk7QUFBRSx1QkFBT0EsQ0FBQyxDQUFDalEsQ0FBVDtBQUFhLGVBQXpDLENBQWY7QUFDQWdRLHFCQUFPLENBQUMsR0FBRCxDQUFQLEdBQWVELElBQUksQ0FBQzl5QixJQUFMLENBQVVvRixHQUFWLENBQWMsVUFBUzR0QixDQUFULEVBQVk7QUFBRSx1QkFBT0EsQ0FBQyxDQUFDQyxDQUFUO0FBQWEsZUFBekMsQ0FBZjtBQUNILGFBSEQsTUFHTyxJQUFJSCxJQUFJLENBQUMzNUIsSUFBTCxLQUFjLE1BQWxCLEVBQTBCO0FBQzdCNDVCLHFCQUFPLENBQUMsUUFBRCxDQUFQLEdBQW9CRCxJQUFJLENBQUM5eUIsSUFBekI7QUFDSDs7QUFDRCxtQkFBTyt5QixPQUFQO0FBQ0gsV0FWZSxDQUFUO0FBV1Asb0JBQVUsRUFYSDtBQVdPLG9CQUFVLEVBWGpCO0FBWVAsbUJBQVMsRUFaRjtBQVlNLG9CQUFVO0FBWmhCLFNBQVA7QUFjSCxPQWpCUyxDQUFWO0FBa0JBLGFBQU9ob0IsRUFBRSxDQUFDSSxHQUFILENBQU9DLFNBQVAsQ0FBaUJ3bkIsT0FBakIsQ0FBUDtBQUNILEtBckJELE1BcUJPO0FBQ0gsYUFBTzduQixFQUFFLENBQUNJLEdBQUgsQ0FBT0MsU0FBUCxDQUFpQixFQUFqQixDQUFQO0FBQ0g7QUFDSixHQTFCZSxDQUFoQixDQWhLdUMsQ0E2THZDOztBQUNBMGxCLEtBQUcsQ0FBQ29DLFdBQUosR0FBa0Jub0IsRUFBRSxDQUFDdVYsUUFBSCxDQUFZNlMsVUFBWixDQUF1QnJDLEdBQXZCLEVBQTRCLFVBQVNzQyxJQUFULEVBQWVDLElBQWYsRUFBcUI7QUFDL0RBLFFBQUksQ0FBQ0MsUUFBTCxHQUFnQixJQUFJdm9CLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdJLElBQWYsQ0FBb0IsVUFBUzN2QixJQUFULEVBQWU7QUFDL0M7QUFDQSxVQUFJOHhCLE9BQU8sR0FBR3hvQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXd0MsSUFBWCxFQUFkO0FBQ0F6b0IsUUFBRSxDQUFDMG9CLEtBQUgsQ0FBU0MsS0FBVCxDQUFlanlCLElBQWYsRUFBcUJzSixFQUFFLENBQUNpbUIsT0FBSCxDQUFXMkMsR0FBWCxDQUFlLE1BQWYsQ0FBckIsRUFBNkNKLE9BQTdDLEVBQXNELElBQXREO0FBQ0E5eEIsVUFBSSxDQUFDdWYsTUFBTCxHQUFjalcsRUFBRSxDQUFDa1csZ0JBQUgsQ0FBb0IsU0FBcEIsRUFBK0I3aUIsT0FBN0M7O0FBQ0EsVUFBSXFELElBQUksQ0FBQ3VmLE1BQUwsS0FBZ0IxcEIsU0FBcEIsRUFBK0I7QUFDM0JtSyxZQUFJLENBQUN1ZixNQUFMLEdBQWN2ZixJQUFJLENBQUN1ZixNQUFMLENBQVlHLEVBQTFCOztBQUNBLGFBQUssSUFBSW5wQixHQUFULElBQWdCeUosSUFBSSxDQUFDdWYsTUFBckIsRUFBNkI7QUFDekIsY0FBSXZmLElBQUksQ0FBQ3VmLE1BQUwsQ0FBWTRTLGNBQVosQ0FBMkI1N0IsR0FBM0IsQ0FBSixFQUFxQztBQUNqQytTLGNBQUUsQ0FBQzBvQixLQUFILENBQVNJLGFBQVQsQ0FBdUJOLE9BQXZCLEVBQWdDeG9CLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPQyxTQUFQLENBQWlCTCxFQUFFLENBQUMrb0IsYUFBSCxDQUFpQjk3QixHQUFqQixDQUFqQixDQUFoQyxFQUN1QnlKLElBQUksQ0FBQ3VmLE1BQUwsQ0FBWWhwQixHQUFaLENBRHZCO0FBRUg7QUFDSjtBQUNKLE9BUkQsTUFRTztBQUNIeUosWUFBSSxDQUFDdWYsTUFBTCxHQUFjLEVBQWQ7QUFDSDtBQUNKLEtBaEJlLENBQWhCOztBQWlCQSxRQUFJK1MsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBU0MsR0FBVCxFQUFjO0FBQ3ZCanBCLFFBQUUsQ0FBQ2ltQixPQUFILENBQVdpRCxjQUFYLENBQTBCLE1BQTFCLEVBQWtDM2hCLFNBQVMsQ0FBQzNOLE1BQTVDLEVBQW9ELENBQXBELEVBQXVENGdCLFFBQXZELEVBQWlFLElBQWpFLEVBQXVFLElBQXZFO0FBQ0EsVUFBSStDLElBQUksR0FBRzNCLEtBQUssQ0FBQzFkLFNBQU4sQ0FBZ0IyTyxLQUFoQixDQUFzQnNjLElBQXRCLENBQTJCNWhCLFNBQTNCLEVBQXNDLENBQXRDLENBQVg7QUFDQSxVQUFJNmhCLE1BQU0sR0FBRyxJQUFJcHBCLEVBQUUsQ0FBQ3FwQixRQUFILENBQVlaLElBQWhCLENBQXFCUSxHQUFyQixDQUFiO0FBRUEsVUFBSXZ5QixJQUFJLEdBQUc2bUIsSUFBSSxDQUFDLENBQUQsQ0FBZjtBQUNBLFVBQUkrTCxZQUFZLEdBQUcvTCxJQUFJLENBQUMsQ0FBRCxDQUF2QjtBQUNBQSxVQUFJLEdBQUdBLElBQUksQ0FBQzFRLEtBQUwsQ0FBVyxDQUFYLENBQVA7QUFFQSxVQUFJMGMsTUFBTSxHQUFHSCxNQUFNLENBQUNJLFNBQVAsQ0FBaUIsSUFBSXhwQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXMkMsR0FBZixDQUFtQixRQUFuQixDQUFqQixDQUFiOztBQUNBLFVBQUlXLE1BQU0sS0FBS2g5QixTQUFmLEVBQTBCO0FBQ3RCZzlCLGNBQU0sR0FBR3ZwQixFQUFFLENBQUNJLEdBQUgsQ0FBT3dYLFNBQVAsQ0FBaUIyUixNQUFqQixDQUFUOztBQUNBLFlBQUlBLE1BQU0sQ0FBQ3hiLFdBQVAsS0FBdUI2TixLQUEzQixFQUFrQztBQUM5QjJOLGdCQUFNLENBQUMzaUIsT0FBUCxDQUFlLFVBQVM4ZixJQUFULEVBQWU7QUFDMUIxbUIsY0FBRSxDQUFDdVcsV0FBSCxDQUFlaFIsSUFBZixDQUFvQm1oQixJQUFwQjtBQUNILFdBRkQ7QUFHSCxTQUpELE1BSU87QUFDSDFtQixZQUFFLENBQUN1VyxXQUFILENBQWVoUixJQUFmLENBQW9CekQsS0FBcEI7QUFDSDtBQUNKOztBQUVELFVBQUk3TSxJQUFJLEdBQUd5QixJQUFJLENBQUMreUIsVUFBTCxDQUFnQixJQUFJenBCLEVBQUUsQ0FBQ2ltQixPQUFILENBQVcyQyxHQUFmLENBQW1CLE1BQW5CLENBQWhCLENBQVg7QUFDQSxVQUFJYyxjQUFjLEdBQUd6MEIsSUFBSSxDQUFDdTBCLFNBQUwsQ0FBZUYsWUFBZixDQUFyQjtBQUNBLFVBQUl2ZCxNQUFNLEdBQUcyZCxjQUFjLENBQUNDLE9BQWYsQ0FBdUJwTSxJQUF2QixDQUFiO0FBQ0EsYUFBT3hSLE1BQVA7QUFDSCxLQXpCRDs7QUEwQkFpZCxVQUFNLENBQUNZLFNBQVAsR0FBbUIsSUFBbkIsQ0E1QytELENBNkMvRDs7QUFDQVosVUFBTSxDQUFDYSxPQUFQLEdBQWdCLElBQUk3cEIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBVzJDLEdBQWYsQ0FBbUIsTUFBbkIsQ0FBaEI7QUFDQU4sUUFBSSxDQUFDLFdBQUQsQ0FBSixHQUFvQixJQUFJdG9CLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdJLElBQWYsQ0FBb0IyQyxNQUFwQixDQUFwQjtBQUVBVixRQUFJLENBQUMsVUFBRCxDQUFKLEdBQW1CLElBQUl0b0IsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ksSUFBZixDQUFvQixVQUFTM3ZCLElBQVQsRUFBZTtBQUNsRCxhQUFPLElBQUlzSixFQUFFLENBQUNpbUIsT0FBSCxDQUFXMkMsR0FBZixDQUFtQixFQUFuQixDQUFQO0FBQ0gsS0FGa0IsQ0FBbkI7QUFJQU4sUUFBSSxDQUFDd0IsaUJBQUwsR0FBeUIsSUFBSTlwQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXSSxJQUFmLENBQW9CLFVBQVMzdkIsSUFBVCxFQUFldEksSUFBZixFQUFxQjI3QixnQkFBckIsRUFBdUM7QUFDaEYvcEIsUUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ssV0FBWCxDQUF1QixtQkFBdkIsRUFBNEMvZSxTQUE1QyxFQUF1RCxDQUF2RCxFQUEwRCxDQUExRDs7QUFDQSxVQUFJd2lCLGdCQUFnQixLQUFLeDlCLFNBQXpCLEVBQW9DO0FBQ2hDdzlCLHdCQUFnQixHQUFHLElBQW5CO0FBQ0gsT0FGRCxNQUVPO0FBQ0gvcEIsVUFBRSxDQUFDaW1CLE9BQUgsQ0FBV2MsV0FBWCxDQUF1QixrQkFBdkIsRUFBMkMsU0FBM0MsRUFBc0QvbUIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBVytELFNBQVgsQ0FBcUJELGdCQUFyQixDQUF0RDtBQUNBQSx3QkFBZ0IsR0FBRy9wQixFQUFFLENBQUNJLEdBQUgsQ0FBT3dYLFNBQVAsQ0FBaUJtUyxnQkFBakIsQ0FBbkI7QUFDSDs7QUFDRCxVQUFJaGUsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsV0FBSyxJQUFJa2UsUUFBVCxJQUFxQnZ6QixJQUFJLENBQUN1ZixNQUExQixFQUFrQztBQUM5QixZQUFJdmYsSUFBSSxDQUFDdWYsTUFBTCxDQUFZNFMsY0FBWixDQUEyQm9CLFFBQTNCLENBQUosRUFBMEM7QUFDdEMsY0FBSXZ6QixJQUFJLENBQUN1ZixNQUFMLENBQVlnVSxRQUFaLEVBQXNCclEsT0FBdEIsS0FBa0N4ckIsSUFBSSxDQUFDd3JCLE9BQTNDLEVBQW9EO0FBQ2hEO0FBQ0EsZ0JBQUltUSxnQkFBZ0IsSUFBSUUsUUFBUSxDQUFDcGEsVUFBVCxDQUFvQixJQUFwQixDQUF4QixFQUFtRDtBQUMvQztBQUNIOztBQUNEOUQsa0JBQU0sQ0FBQ3hHLElBQVAsQ0FBWXZGLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPQyxTQUFQLENBQWlCTCxFQUFFLENBQUMrb0IsYUFBSCxDQUFpQmtCLFFBQWpCLENBQWpCLENBQVo7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsYUFBT2pxQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXVyxJQUFYLENBQWdCN2EsTUFBaEIsQ0FBUDtBQUNILEtBckJ3QixDQUF6QjtBQXVCQXVjLFFBQUksQ0FBQzRCLGtCQUFMLEdBQTBCLElBQUlscUIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ksSUFBZixDQUFvQixVQUFTM3ZCLElBQVQsRUFBZXRJLElBQWYsRUFBcUIyN0IsZ0JBQXJCLEVBQXVDO0FBQ2pGL3BCLFFBQUUsQ0FBQ2ltQixPQUFILENBQVdLLFdBQVgsQ0FBdUIsb0JBQXZCLEVBQTZDL2UsU0FBN0MsRUFBd0QsQ0FBeEQsRUFBMkQsQ0FBM0Q7O0FBQ0EsVUFBSXdpQixnQkFBZ0IsS0FBS3g5QixTQUF6QixFQUFvQztBQUNoQ3c5Qix3QkFBZ0IsR0FBRyxJQUFuQjtBQUNILE9BRkQsTUFFTztBQUNIL3BCLFVBQUUsQ0FBQ2ltQixPQUFILENBQVdjLFdBQVgsQ0FBdUIsa0JBQXZCLEVBQTJDLFNBQTNDLEVBQXNEL21CLEVBQUUsQ0FBQ2ltQixPQUFILENBQVcrRCxTQUFYLENBQXFCRCxnQkFBckIsQ0FBdEQ7QUFDQUEsd0JBQWdCLEdBQUcvcEIsRUFBRSxDQUFDSSxHQUFILENBQU93WCxTQUFQLENBQWlCbVMsZ0JBQWpCLENBQW5CO0FBQ0g7O0FBQ0QsVUFBSWhlLE1BQU0sR0FBRyxFQUFiOztBQUNBLFdBQUssSUFBSWtlLFFBQVQsSUFBcUJ2ekIsSUFBSSxDQUFDdWYsTUFBMUIsRUFBa0M7QUFDOUIsWUFBSXZmLElBQUksQ0FBQ3VmLE1BQUwsQ0FBWTRTLGNBQVosQ0FBMkJvQixRQUEzQixDQUFKLEVBQTBDO0FBQ3RDLGNBQUl2ekIsSUFBSSxDQUFDdWYsTUFBTCxDQUFZZ1UsUUFBWixFQUFzQnJRLE9BQXRCLEtBQWtDeHJCLElBQUksQ0FBQ3dyQixPQUEzQyxFQUFvRDtBQUNoRCxnQkFBSW1RLGdCQUFnQixJQUFJRSxRQUFRLENBQUNwYSxVQUFULENBQW9CLElBQXBCLENBQXhCLEVBQW1EO0FBQy9DO0FBQ0g7O0FBQ0Q5RCxrQkFBTSxDQUFDeEcsSUFBUCxDQUFZN08sSUFBSSxDQUFDdWYsTUFBTCxDQUFZZ1UsUUFBWixDQUFaO0FBQ0g7QUFDSjtBQUNKOztBQUNELGFBQU9qcUIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV1csSUFBWCxDQUFnQjdhLE1BQWhCLENBQVA7QUFDSCxLQXBCeUIsQ0FBMUI7QUFxQkgsR0FqR2lCLEVBaUdmLGFBakdlLENBQWxCO0FBa0dBZ2EsS0FBRyxDQUFDanpCLE9BQUosR0FBY2tOLEVBQUUsQ0FBQ3VWLFFBQUgsQ0FBWTRVLGdCQUFaLENBQTZCcEUsR0FBRyxDQUFDb0MsV0FBakMsQ0FBZDtBQUVBcEMsS0FBRyxDQUFDcUUsZ0JBQUosR0FBdUIsSUFBSXBxQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXSSxJQUFmLENBQW9CLFlBQVc7QUFDbERybUIsTUFBRSxDQUFDaW1CLE9BQUgsQ0FBV0ssV0FBWCxDQUF1QixrQkFBdkIsRUFBMkMvZSxTQUEzQyxFQUFzRCxDQUF0RCxFQUF5RCxDQUF6RDtBQUNBLFdBQU93ZSxHQUFHLENBQUNqekIsT0FBWDtBQUNILEdBSHNCLENBQXZCO0FBS0EsU0FBT2l6QixHQUFQO0FBQ0gsQ0F4U00sQzs7Ozs7Ozs7Ozs7O0FDUlA7QUFBQTtBQUFBLElBQUlzRSxpQkFBSjs7QUFDQSxJQUFJO0FBQ0FBLG1CQUFpQixHQUFHQyxZQUFwQjtBQUNBLE1BQUl2RSxHQUFHLEdBQUcsMkJBQVY7QUFDQXNFLG1CQUFpQixDQUFDRSxPQUFsQixDQUEwQnhFLEdBQTFCLEVBQStCQSxHQUEvQjtBQUNBc0UsbUJBQWlCLENBQUNHLFVBQWxCLENBQTZCekUsR0FBN0I7QUFDSCxDQUxELENBS0UsT0FBTXRqQixDQUFOLEVBQVM7QUFDUDRuQixtQkFBaUIsR0FBRztBQUNoQkksU0FBSyxFQUFTLEVBREU7QUFFaEJGLFdBQU8sRUFBTyxpQkFBUzc4QixFQUFULEVBQWEyVSxHQUFiLEVBQWtCO0FBQUUsYUFBTyxLQUFLb29CLEtBQUwsQ0FBVy84QixFQUFYLElBQWlCZzlCLE1BQU0sQ0FBQ3JvQixHQUFELENBQTlCO0FBQXNDLEtBRnhEO0FBR2hCc29CLFdBQU8sRUFBTyxpQkFBU2o5QixFQUFULEVBQWE7QUFBRSxhQUFPLEtBQUsrOEIsS0FBTCxDQUFXNUIsY0FBWCxDQUEwQm43QixFQUExQixJQUFnQyxLQUFLKzhCLEtBQUwsQ0FBVy84QixFQUFYLENBQWhDLEdBQWlEbkIsU0FBeEQ7QUFBb0UsS0FIakY7QUFJaEJpK0IsY0FBVSxFQUFJLG9CQUFTOThCLEVBQVQsRUFBYTtBQUFFLGFBQU8sT0FBTyxLQUFLKzhCLEtBQUwsQ0FBVy84QixFQUFYLENBQWQ7QUFBK0IsS0FKNUM7QUFLaEIwVixTQUFLLEVBQVMsaUJBQVc7QUFBRSxhQUFPLEtBQUtxbkIsS0FBTCxHQUFhLEVBQXBCO0FBQXlCO0FBTHBDLEdBQXBCO0FBT0g7QUFFRDs7Ozs7Ozs7Ozs7OztBQVdPLFNBQVNsOUIsbUJBQVQsQ0FBNkJxOUIsU0FBN0IsRUFBd0M7QUFDM0MsT0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDSDtBQUNEOzs7Ozs7OztBQU9BcjlCLG1CQUFtQixDQUFDMlEsU0FBcEIsQ0FBOEJ1bEIsR0FBOUIsR0FBcUMsVUFBU3gyQixHQUFULEVBQWMyWSxLQUFkLEVBQXFCO0FBQ3REeWtCLG1CQUFpQixDQUFDRSxPQUFsQixDQUEwQixLQUFLSyxTQUFMLEdBQWUsR0FBZixHQUFtQjM5QixHQUFuQixHQUF1QixRQUFqRCxFQUEyRDJZLEtBQTNEO0FBQ0F5a0IsbUJBQWlCLENBQUNFLE9BQWxCLENBQTBCLEtBQUtLLFNBQUwsR0FBZSxHQUFmLEdBQW1CMzlCLEdBQW5CLEdBQXVCLFlBQWpELEVBQStEcUgsQ0FBQyxDQUFDNnNCLEdBQUYsRUFBL0Q7QUFDSCxDQUhEO0FBS0E7Ozs7Ozs7QUFLQTV6QixtQkFBbUIsQ0FBQzJRLFNBQXBCLENBQThCb0MsTUFBOUIsR0FBdUMsVUFBU3JULEdBQVQsRUFBYztBQUNqRG85QixtQkFBaUIsQ0FBQ0csVUFBbEIsQ0FBNkIsS0FBS0ksU0FBTCxHQUFlLEdBQWYsR0FBbUIzOUIsR0FBbkIsR0FBdUIsUUFBcEQ7QUFDQW85QixtQkFBaUIsQ0FBQ0csVUFBbEIsQ0FBNkIsS0FBS0ksU0FBTCxHQUFlLEdBQWYsR0FBbUIzOUIsR0FBbkIsR0FBdUIsWUFBcEQ7QUFDSCxDQUhEO0FBS0E7Ozs7Ozs7QUFLQU0sbUJBQW1CLENBQUMyUSxTQUFwQixDQUE4QjVRLEdBQTlCLEdBQW9DLFVBQVNMLEdBQVQsRUFBYztBQUM5QyxTQUFPbzlCLGlCQUFpQixDQUFDTSxPQUFsQixDQUEwQixLQUFLQyxTQUFMLEdBQWUsR0FBZixHQUFtQjM5QixHQUFuQixHQUF1QixRQUFqRCxDQUFQO0FBQ0gsQ0FGRDtBQUlBOzs7Ozs7OztBQU1BTSxtQkFBbUIsQ0FBQzJRLFNBQXBCLENBQThCOGxCLE9BQTlCLEdBQXdDLFVBQVMvMkIsR0FBVCxFQUFjO0FBQ2xELFNBQU95ekIsUUFBUSxDQUFDMkosaUJBQWlCLENBQUNNLE9BQWxCLENBQTBCLEtBQUtDLFNBQUwsR0FBZSxHQUFmLEdBQW1CMzlCLEdBQW5CLEdBQXVCLFlBQWpELENBQUQsQ0FBZjtBQUNILENBRkQ7QUFJQTs7Ozs7Ozs7OztBQVFBTSxtQkFBbUIsQ0FBQzJRLFNBQXBCLENBQThCMGtCLFVBQTlCLEdBQTJDLFVBQVMzMUIsR0FBVCxFQUFjQyxZQUFkLEVBQTRCO0FBQ25FLE1BQUksS0FBS0csR0FBTCxDQUFTSixHQUFULENBQUosRUFBbUI7QUFDZixXQUFPLEtBQUtLLEdBQUwsQ0FBU0wsR0FBVCxDQUFQO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsU0FBS3cyQixHQUFMLENBQVN4MkIsR0FBVCxFQUFjQyxZQUFkO0FBQ0EsV0FBT0EsWUFBUDtBQUNIO0FBQ0osQ0FQRDtBQVNBOzs7Ozs7O0FBS0FLLG1CQUFtQixDQUFDMlEsU0FBcEIsQ0FBOEI3USxHQUE5QixHQUFvQyxVQUFTSixHQUFULEVBQWM7QUFDOUMsU0FBT285QixpQkFBaUIsQ0FBQ00sT0FBbEIsQ0FBMEIsS0FBS0MsU0FBTCxHQUFlLEdBQWYsR0FBbUIzOUIsR0FBbkIsR0FBdUIsUUFBakQsTUFBK0QsSUFBdEU7QUFDSCxDQUZEO0FBSUE7Ozs7Ozs7Ozs7QUFRQU0sbUJBQW1CLENBQUMyUSxTQUFwQixDQUE4QjJzQixNQUE5QixHQUF1QyxVQUFTNTlCLEdBQVQsRUFBYzY5QixXQUFkLEVBQTJCO0FBQzlELE1BQUlDLFdBQVcsR0FBR1YsaUJBQWlCLENBQUNNLE9BQWxCLENBQTBCLEtBQUtDLFNBQUwsR0FBZSxHQUFmLEdBQW1CMzlCLEdBQW5CLEdBQXVCLFlBQWpELENBQWxCO0FBQ0EsU0FBUTY5QixXQUFXLElBQUlDLFdBQVcsR0FBQyxJQUFuQztBQUNILENBSEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHTyxJQUFNeEksVUFBVSwwMkZBQWhCO0FBd0VBLElBQU1qa0IsWUFBYjtBQUFBO0FBQUE7QUFFSSx3QkFBWVAsSUFBWixFQUFrQitFLEdBQWxCLEVBQXVCO0FBQUE7O0FBQ25CLFNBQUsvRSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLK0UsR0FBTCxHQUFXQSxHQUFYO0FBRUEsU0FBS2tvQixlQUFMLEdBQXVCLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsYUFBeEIsRUFDQyxhQURELEVBQ2dCLFVBRGhCLEVBQzRCLGNBRDVCLENBQXZCLENBSm1CLENBT25CO0FBQ0g7QUFFRDs7Ozs7Ozs7QUFaSjtBQUFBO0FBQUEsaUNBa0JpQnBRLFNBbEJqQixFQWtCNEI7QUFDcEIsVUFBSTdPLE1BQU0sR0FBRyxFQUFiO0FBQ0EsVUFBSW1QLE9BQU8sR0FBRyxFQUFkOztBQUNBLFVBQUksQ0FBQyxLQUFLbmQsSUFBTCxDQUFVdlEsS0FBVixDQUFnQnNDLE9BQWhCLENBQXdCZ0IsY0FBeEIsRUFBTCxFQUErQztBQUMzQyxhQUFLLElBQUltNUIsUUFBVCxJQUFxQnJQLFNBQXJCLEVBQWdDO0FBQzVCLGNBQUloVixLQUFLLEdBQUdnVixTQUFTLENBQUNxUCxRQUFELENBQXJCOztBQUNBLGNBQUksS0FBS2UsZUFBTCxDQUFxQnB3QixPQUFyQixDQUE2QnF2QixRQUE3QixNQUEyQyxDQUFDLENBQWhELEVBQW1EO0FBQy9DQSxvQkFBUSxHQUFHQSxRQUFRLENBQUNoZ0IsT0FBVCxDQUFpQixPQUFqQixFQUEwQixFQUExQixFQUNOQSxPQURNLENBQ0UsT0FERixFQUNXLEVBRFgsQ0FBWDtBQUVBLGdCQUFJZ2hCLE1BQU0sU0FBVjs7QUFDQSxnQkFBSTtBQUNBQSxvQkFBTSxHQUFHM3NCLFlBQVksQ0FBQzRzQixVQUFiLENBQXdCakIsUUFBeEIsRUFBa0Nya0IsS0FBbEMsQ0FBVDtBQUNILGFBRkQsQ0FFRSxnQkFBTTtBQUNKcWxCLG9CQUFNLEdBQUc7QUFBQyx3QkFBUWhCLFFBQVQ7QUFBbUIsd0JBQVEsU0FBM0I7QUFBc0MseUJBQVNya0IsS0FBSyxDQUFDM1YsUUFBTjtBQUEvQyxlQUFUO0FBQ0g7O0FBQ0QsZ0JBQUlnN0IsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDakJsZixvQkFBTSxDQUFDeEcsSUFBUCxDQUFZMGxCLE1BQVo7QUFDSCxhQUZELE1BRU8sSUFBSXJsQixLQUFLLENBQUNtSSxXQUFOLEtBQXNCL04sRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV2hRLE1BQXJDLEVBQTZDO0FBQ2hEaUYscUJBQU8sQ0FBQzNWLElBQVIsQ0FBYUssS0FBSyxDQUFDd1EsRUFBTixDQUFTK1UsUUFBVCxDQUFrQmxELENBQS9CO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBQ0QsYUFBTztBQUFDLHNCQUFjbGMsTUFBZjtBQUF1QixtQkFBV21QO0FBQWxDLE9BQVA7QUFDSDtBQTFDTDtBQUFBOztBQTRDSTs7Ozs7O0FBNUNKLCtCQWtEc0IrTyxRQWxEdEIsRUFrRGdDcmtCLEtBbERoQyxFQWtEdUN3bEIsVUFsRHZDLEVBa0RtRDtBQUMzQyxVQUFJeGxCLEtBQUssS0FBS3JaLFNBQWQsRUFBeUI7QUFDckIsZUFBTztBQUFDLGtCQUFRMDlCLFFBQVQ7QUFDSCxrQkFBUSxTQURMO0FBRUgsbUJBQVM7QUFGTixTQUFQO0FBSUg7O0FBQ0QsY0FBUXJrQixLQUFLLENBQUNtSSxXQUFkO0FBQ0ksYUFBSy9OLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdJLElBQWhCO0FBQ0ksaUJBQU87QUFBQyxvQkFBUTRELFFBQVQ7QUFDSCxvQkFBUSxVQURMO0FBRUgscUJBQ0tya0IsS0FBSyxDQUFDeWxCLFNBQU4sQ0FBZ0JDLFdBQWhCLEtBQWdDLytCLFNBQWhDLEdBQ0csaUJBQWVxWixLQUFLLENBQUN5bEIsU0FBTixDQUFnQkMsV0FBaEIsQ0FBNEJ4ZSxJQUE1QixDQUFpQyxJQUFqQyxDQURsQixHQUVHO0FBTEwsV0FBUDs7QUFPSixhQUFLOU0sRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV2hRLE1BQWhCO0FBQXdCLGlCQUFPLElBQVA7O0FBQ3hCLGFBQUtqVyxFQUFFLENBQUNpbUIsT0FBSCxDQUFXMkMsR0FBaEI7QUFDSSxjQUFJd0MsVUFBVSxJQUFJeGxCLEtBQUssQ0FBQ3FpQixDQUFOLENBQVFydUIsTUFBUixJQUFrQixFQUFwQyxFQUF3QztBQUNwQyxtQkFBTztBQUFDLHNCQUFRcXdCLFFBQVQ7QUFDSCxzQkFBUSxRQURMO0FBRUgsdUJBQVNya0IsS0FBSyxDQUFDa1MsRUFBTixHQUFXbVE7QUFGakIsYUFBUDtBQUlILFdBTEQsTUFLTztBQUNILG1CQUFPO0FBQUMsc0JBQVFnQyxRQUFUO0FBQ0gsc0JBQVEsUUFETDtBQUVILHVCQUFTLE1BQUlya0IsS0FBSyxDQUFDMmxCLFNBQU4sRUFBSixHQUFzQjtBQUY1QixhQUFQO0FBSUg7O0FBQ0wsYUFBS3ZyQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXRCxJQUFoQjtBQUNJLGlCQUFPO0FBQUMsb0JBQVFpRSxRQUFUO0FBQ0gsb0JBQVEsTUFETDtBQUVILHFCQUFTO0FBRk4sV0FBUDs7QUFJSixhQUFLanFCLEVBQUUsQ0FBQ2ltQixPQUFILENBQVd1RixJQUFoQjtBQUNJLGlCQUFPO0FBQUMsb0JBQVF2QixRQUFUO0FBQ0gsb0JBQVEsU0FETDtBQUVILHFCQUFTcmtCLEtBQUssQ0FBQ2tTLEVBQU4sR0FBV21RO0FBRmpCLFdBQVA7O0FBSUosYUFBS2pvQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXd0YsS0FBaEI7QUFDSSxpQkFBTztBQUFDLG9CQUFReEIsUUFBVDtBQUNILG9CQUFRLFVBQVVya0IsS0FBSyxDQUFDOGxCLE1BQWhCLEdBQXlCLFNBQXpCLEdBQW9DLE9BRHpDO0FBRUgscUJBQVM5bEIsS0FBSyxDQUFDa1MsRUFBTixHQUFXbVE7QUFGakIsV0FBUDs7QUFJSixhQUFLam9CLEVBQUUsQ0FBQ2ltQixPQUFILENBQVcwRixJQUFoQjtBQUNJLGlCQUFPO0FBQUMsb0JBQVExQixRQUFUO0FBQ0gsb0JBQVEsU0FETDtBQUVILHFCQUFTcmtCLEtBQUssQ0FBQ2tTLEVBQU4sR0FBV21RO0FBRmpCLFdBQVA7O0FBSUosYUFBS2pvQixFQUFFLENBQUNpbUIsT0FBSCxDQUFXMkYsTUFBaEI7QUFDSSxpQkFBTztBQUFDLG9CQUFRM0IsUUFBVDtBQUNILG9CQUFRLE9BREw7QUFFSCxxQkFBU3JrQixLQUFLLENBQUNrUyxFQUFOLEdBQVdtUTtBQUZqQixXQUFQOztBQUlKLGFBQUtqb0IsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV29CLEtBQWhCO0FBQ0ksaUJBQU87QUFBQyxvQkFBUTRDLFFBQVQ7QUFDSCxvQkFBUSxPQURMO0FBRUgscUJBQVNya0IsS0FBSyxDQUFDa1MsRUFBTixHQUFXbVE7QUFGakIsV0FBUDs7QUFJSixhQUFLam9CLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdXLElBQWhCO0FBQ0ksY0FBSWhoQixLQUFLLENBQUNxaUIsQ0FBTixDQUFRcnVCLE1BQVIsSUFBa0IsRUFBdEIsRUFBMEI7QUFDdEIsbUJBQU87QUFBQyxzQkFBUXF3QixRQUFUO0FBQ0gsc0JBQVEsTUFETDtBQUVILHVCQUFTcmtCLEtBQUssQ0FBQ2tTLEVBQU4sR0FBV21RLENBRmpCO0FBR0gsNkJBQWVyaUI7QUFIWixhQUFQO0FBS0gsV0FORCxNQU1PO0FBQ0gsbUJBQU87QUFBQyxzQkFBUXFrQixRQUFUO0FBQ0gsc0JBQVEsTUFETDtBQUVILHVCQUFTLFVBQVFya0IsS0FBSyxDQUFDcWlCLENBQU4sQ0FBUXJ1QixNQUFoQixHQUF1QixnQkFGN0I7QUFHSCw2QkFBZWdNO0FBSFosYUFBUDtBQUtIOztBQUNMLGFBQUs1RixFQUFFLENBQUNpbUIsT0FBSCxDQUFXd0MsSUFBaEI7QUFDSSxpQkFBTztBQUFDLG9CQUFRd0IsUUFBVDtBQUNILG9CQUFRLFlBREw7QUFFSCxxQkFBU3JrQixLQUFLLENBQUNrUyxFQUFOLEdBQVdtUTtBQUZqQixXQUFQOztBQUlKLGFBQUs0RCxNQUFMO0FBQ0ksaUJBQU87QUFBQyxvQkFBUTVCLFFBQVQ7QUFDSCxvQkFBUXJrQixLQUFLLEdBQUcsQ0FBUixLQUFjLENBQWQsR0FBa0IsU0FBbEIsR0FBOEIsT0FEbkM7QUFFSCxxQkFBU0E7QUFGTixXQUFQOztBQUlKLGFBQUs4a0IsTUFBTDtBQUNJLGlCQUFPO0FBQUMsb0JBQVFULFFBQVQ7QUFDSCxvQkFBUSxRQURMO0FBRUgscUJBQVNya0I7QUFGTixXQUFQOztBQUlKLGFBQUtvVSxPQUFMO0FBQ0ksaUJBQU87QUFBQyxvQkFBUWlRLFFBQVQ7QUFDSCxvQkFBUSxTQURMO0FBRUgscUJBQVVya0IsS0FBSyxHQUFHLE1BQUgsR0FBVztBQUZ2QixXQUFQOztBQUlKO0FBQ0ksaUJBQU87QUFBQyxvQkFBUXFrQixRQUFUO0FBQ0gsb0JBQVFya0IsS0FBSyxDQUFDZ1UsT0FBTixLQUFrQnJ0QixTQUFsQixHQUE4QnFaLEtBQTlCLEdBQXNDQSxLQUFLLENBQUNnVSxPQURqRDtBQUVILHFCQUFTaFUsS0FBSyxDQUFDa1MsRUFBTixLQUFhdnJCLFNBQWIsR0FBeUJxWixLQUF6QixHQUFpQ0EsS0FBSyxDQUFDa1MsRUFBTixHQUFXbVE7QUFGbEQsV0FBUDtBQXZGUjtBQTRGSDtBQXJKTDs7QUFBQTtBQUFBLEksQ0F3SkEsdUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hPQTs7Ozs7O0FBTUEsU0FBUzZELGFBQVQsQ0FBdUJDLE1BQXZCLEVBQStCQyxRQUEvQixFQUF5QztBQUNyQyxTQUFPQSxRQUFRLENBQUNweEIsT0FBVCxDQUFpQm14QixNQUFqQixJQUEyQixDQUFDLENBQW5DO0FBQ0g7QUFFRDs7Ozs7Ozs7OztBQVFBLFNBQVNFLFdBQVQsQ0FBcUI3TSxLQUFyQixFQUE0QjtBQUN4QixNQUFJOE0sQ0FBQyxHQUFHOU0sS0FBSyxDQUFDK00sTUFBTixFQUFSOztBQUNBLE9BQUksSUFBSTdtQixDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUM0bUIsQ0FBQyxDQUFDdHlCLE1BQWpCLEVBQXlCLEVBQUUwTCxDQUEzQixFQUE4QjtBQUMxQixTQUFJLElBQUk4bUIsQ0FBQyxHQUFDOW1CLENBQUMsR0FBQyxDQUFaLEVBQWU4bUIsQ0FBQyxHQUFDRixDQUFDLENBQUN0eUIsTUFBbkIsRUFBMkIsRUFBRXd5QixDQUE3QixFQUFnQztBQUM1QixVQUFHRixDQUFDLENBQUM1bUIsQ0FBRCxDQUFELEtBQVM0bUIsQ0FBQyxDQUFDRSxDQUFELENBQWIsRUFBa0I7QUFBQ0YsU0FBQyxDQUFDeEgsTUFBRixDQUFTMEgsQ0FBQyxFQUFWLEVBQWMsQ0FBZDtBQUFrQjtBQUN4QztBQUNKOztBQUVELFNBQU9GLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTRyxXQUFULENBQXFCak4sS0FBckIsRUFBNEJrTixRQUE1QixFQUFzQ0MsV0FBdEMsRUFBbUQ7QUFDL0MsTUFBSUMsU0FBUyxHQUFHcE4sS0FBSyxDQUFDNVMsTUFBTixDQUFhLFVBQVNrYSxJQUFULEVBQWU7QUFDeEMsV0FBTzZGLFdBQVcsQ0FBQzN4QixPQUFaLENBQW9COHJCLElBQXBCLE1BQThCLENBQUMsQ0FBdEM7QUFDSCxHQUZlLENBQWhCO0FBR0EsU0FBT3VGLFdBQVcsQ0FBQ08sU0FBUyxDQUFDTCxNQUFWLENBQWlCRyxRQUFqQixDQUFELENBQWxCO0FBQ0g7QUFFRDs7Ozs7OztBQUtBLFNBQVNHLFNBQVQsQ0FBbUJsUixJQUFuQixFQUF5QjtBQUNyQjtBQUNBLE1BQUltUixLQUFLLEdBQUduUixJQUFJLENBQUNvUixRQUFMLElBQWlCLENBQWpCLEdBQXFCaGlCLFFBQVEsQ0FBQ2lpQixjQUFULENBQXdCclIsSUFBSSxDQUFDc1IsU0FBN0IsQ0FBckIsR0FBK0R0UixJQUFJLENBQUNrUixTQUFMLENBQWUsS0FBZixDQUEzRSxDQUZxQixDQUlyQjs7QUFDQSxNQUFJSyxLQUFLLEdBQUd2UixJQUFJLENBQUN3UixVQUFqQjs7QUFDQSxTQUFNRCxLQUFOLEVBQWE7QUFDVEosU0FBSyxDQUFDMWhCLFdBQU4sQ0FBa0J5aEIsU0FBUyxDQUFDSyxLQUFELENBQTNCO0FBQ0FBLFNBQUssR0FBR0EsS0FBSyxDQUFDRSxXQUFkO0FBQ0g7O0FBRUQsU0FBT04sS0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBUzNULE1BQVQsQ0FBZ0I2UCxHQUFoQixFQUFxQjtBQUN4QixTQUFPQSxHQUFHLENBQUMzZSxPQUFKLENBQVksVUFBWixFQUF3QixNQUF4QixDQUFQO0FBQ0g7QUFFRDs7Ozs7O0FBS08sU0FBU2pELElBQVQsQ0FBYzRoQixHQUFkLEVBQW1CO0FBQ3RCLFNBQU9BLEdBQUcsQ0FBQzNlLE9BQUosQ0FBWSxLQUFaLEVBQW1CLEdBQW5CLEVBQXdCdlMsV0FBeEIsRUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7O0FBT0EsU0FBU3UxQixhQUFULENBQXVCOXpCLEdBQXZCLEVBQTJCSCxHQUEzQixFQUFnQztBQUM1QixTQUFPRCxJQUFJLENBQUNtMEIsS0FBTCxDQUFXbjBCLElBQUksQ0FBQ28wQixNQUFMLE1BQWVuMEIsR0FBRyxHQUFDRyxHQUFKLEdBQVEsQ0FBdkIsSUFBMEJBLEdBQXJDLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7QUFPTyxTQUFTK0gsVUFBVCxDQUFvQjBuQixHQUFwQixFQUF5QjtBQUM1QixTQUFPQSxHQUFHLENBQUMzZSxPQUFKLENBQVksSUFBWixFQUFrQixPQUFsQixFQUNGQSxPQURFLENBQ00sSUFETixFQUNZLE1BRFosRUFFRkEsT0FGRSxDQUVNLElBRk4sRUFFWSxNQUZaLEVBR0ZBLE9BSEUsQ0FHTSxJQUhOLEVBR1ksUUFIWixFQUlGQSxPQUpFLENBSU0sSUFKTixFQUlZLFFBSlosQ0FBUDtBQUtIO0FBRUQ7Ozs7QUFHQSxJQUFJLE9BQU9takIsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNoQ0EsU0FBTyxDQUFDQyxZQUFSLENBQXFCbnZCLFNBQXJCLENBQStCb3ZCLE9BQS9CLEdBQXlDLFlBQVc7QUFDaEQsUUFBSUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBZDtBQUNBLFFBQUk1cEIsS0FBSyxHQUFHMnBCLE9BQU8sQ0FBQ0UsU0FBUixHQUFvQixDQUFoQztBQUFBLFFBQ0l0cUIsTUFBTSxHQUFHb3FCLE9BQU8sQ0FBQ0csVUFEckI7QUFFQSxRQUFJQyxNQUFNLEdBQUcsS0FBS0MsWUFBTCxDQUFrQixLQUFsQixDQUFiO0FBQ0EsUUFBSTFGLENBQUMsR0FBRyxDQUFSO0FBQUEsUUFBV2xRLENBQUMsR0FBRyxDQUFmO0FBQUEsUUFDSTZWLGdCQUFnQixHQUFHMXFCLE1BQU0sR0FBQ3dxQixNQUFNLENBQUMvekIsTUFEckM7O0FBRUEsU0FBSyxJQUFJMEwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FvQixNQUFNLENBQUMvekIsTUFBM0IsRUFBbUMwTCxDQUFDLEVBQXBDLEVBQXVDO0FBQ25DO0FBQ0EsVUFBSThjLEtBQUssR0FBR3VMLE1BQU0sQ0FBQ3JvQixDQUFELENBQWxCO0FBQ0EsVUFBSTJWLFVBQVUsR0FBR21ILEtBQUssQ0FBQzBMLHNCQUFOLEVBQWpCOztBQUNBLFVBQUl4b0IsQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNSMFMsU0FBQyxHQUFHLENBQUo7QUFDSCxPQUZELE1BRU87QUFDSEEsU0FBQyxHQUFHLENBQUNpRCxVQUFVLENBQUNqRCxDQUFaLEdBQWNpVixhQUFhLENBQUMsRUFBRCxFQUFLcnBCLEtBQUwsQ0FBL0I7QUFDSDs7QUFDRHdlLFdBQUssQ0FBQzJMLE1BQU4sQ0FBYS9WLENBQWIsRUFDYSxDQUFDaUQsVUFBVSxDQUFDaU4sQ0FBWixHQUFjQSxDQUQzQjtBQUVBQSxPQUFDLEdBQUdBLENBQUMsR0FBRytFLGFBQWEsQ0FBQyxDQUFELEVBQUlZLGdCQUFKLENBQXJCO0FBQ0g7QUFDSixHQXBCRDtBQXFCSDtBQUVEOzs7Ozs7QUFJQSxTQUFTRyxZQUFULENBQXNCcGUsTUFBdEIsRUFBOEJsUyxNQUE5QixFQUFzQ3V3QixTQUF0QyxFQUFpRDtBQUM3QyxPQUFLLElBQUkzb0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NLLE1BQU0sQ0FBQ2hXLE1BQTNCLEVBQW1DMEwsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxRQUFJOEksT0FBTyxHQUFHd0IsTUFBTSxDQUFDdEssQ0FBRCxDQUFwQjs7QUFDQSxRQUFJMm9CLFNBQVMsQ0FBQzdmLE9BQUQsQ0FBYixFQUF3QjtBQUNwQndCLFlBQU0sQ0FBQzhVLE1BQVAsQ0FBY3BmLENBQWQsRUFBaUIsQ0FBakI7QUFDQTVILFlBQU0sQ0FBQzZILElBQVAsQ0FBWTZJLE9BQVo7QUFDQTlJLE9BQUM7QUFDSjtBQUNKO0FBQ0o7QUFFRDs7Ozs7Ozs7Ozs7O0FBVUEsU0FBUzRvQixXQUFULENBQXFCQyxHQUFyQixFQUF5QjtBQUNyQixTQUFRQSxHQUFHLFlBQVludUIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV3dDLElBQTNCLElBQ0YwRixHQUFHLFlBQVludUIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBV1csSUFEeEIsSUFFRnVILEdBQUcsWUFBWW51QixFQUFFLENBQUNpbUIsT0FBSCxDQUFXb0IsS0FGeEIsSUFHRjhHLEdBQUcsWUFBWW51QixFQUFFLENBQUNpbUIsT0FBSCxDQUFXdUYsSUFIeEIsSUFJRjJDLEdBQUcsWUFBWW51QixFQUFFLENBQUNpbUIsT0FBSCxDQUFXMEYsSUFKeEIsSUFLRndDLEdBQUcsWUFBWW51QixFQUFFLENBQUNpbUIsT0FBSCxDQUFXMkYsTUFMeEIsSUFNRnVDLEdBQUcsWUFBWW51QixFQUFFLENBQUNpbUIsT0FBSCxDQUFXMkMsR0FOeEIsSUFPRnVGLEdBQUcsWUFBWW51QixFQUFFLENBQUNpbUIsT0FBSCxDQUFXbUksR0FQL0IsQ0FEcUIsQ0FTckI7QUFDQTtBQUNIOztBQUVELFNBQVNDLFNBQVQsQ0FBbUJGLEdBQW5CLEVBQXVCO0FBQ25CLFNBQU9BLEdBQUcsWUFBWTNsQixNQUFmLElBQXlCLGNBQWMybEIsR0FBOUM7QUFDSDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTRyxjQUFULENBQXdCSCxHQUF4QixFQUE0QjtBQUN4QixNQUFJSSxDQUFKO0FBQ0EsTUFBSUMsR0FBSjtBQUNBLE1BQUlscEIsQ0FBSjtBQUNBLE1BQUltcEIsR0FBSixDQUp3QixDQUt4Qjs7QUFDQSxNQUFJUCxXQUFXLENBQUNDLEdBQUQsQ0FBZixFQUFxQjtBQUNqQjtBQUNBLFdBQU9BLEdBQVA7QUFDSCxHQUhELE1BR08sSUFBSTNsQixNQUFNLENBQUN0SyxTQUFQLENBQWlCak8sUUFBakIsQ0FBMEJrNUIsSUFBMUIsQ0FBK0JnRixHQUEvQixNQUF3QyxnQkFBNUMsRUFBOEQ7QUFDakU7QUFDQU0sT0FBRyxHQUFHLEVBQU47O0FBQ0EsU0FBS25wQixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUc2b0IsR0FBRyxDQUFDdjBCLE1BQXBCLEVBQTRCLEVBQUUwTCxDQUE5QixFQUFpQztBQUM3QjtBQUNBLFVBQUlvcEIsTUFBTSxHQUFHUCxHQUFHLENBQUM3b0IsQ0FBRCxDQUFoQjs7QUFDQSxVQUFHLENBQUM0b0IsV0FBVyxDQUFDUSxNQUFELENBQWYsRUFBd0I7QUFDcEJELFdBQUcsQ0FBQ2xwQixJQUFKLENBQVMrb0IsY0FBYyxDQUFDSSxNQUFELENBQXZCO0FBQ0gsT0FGRCxNQUVLO0FBQ0RELFdBQUcsQ0FBQ2xwQixJQUFKLENBQVNtcEIsTUFBVDtBQUNIO0FBQ0o7O0FBQ0QsV0FBTyxJQUFJMXVCLEVBQUUsQ0FBQ2ltQixPQUFILENBQVdXLElBQWYsQ0FBb0I2SCxHQUFwQixDQUFQO0FBQ0gsR0FiTSxNQWFBLElBQUlOLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQUM7QUFDdEIsV0FBT251QixFQUFFLENBQUNpbUIsT0FBSCxDQUFXRCxJQUFYLENBQWdCRSxLQUF2QjtBQUNILEdBRk0sTUFFQSxJQUFJLFFBQU9pSSxHQUFQLE1BQWUsUUFBbkIsRUFBNkI7QUFDaEMsUUFBRyxDQUFDRCxXQUFXLENBQUNDLEdBQUQsQ0FBZixFQUFxQjtBQUNqQjtBQUNBSyxTQUFHLEdBQUcsRUFBTixDQUZpQixDQUVSOztBQUNULFdBQUtELENBQUwsSUFBVUosR0FBVixFQUFlO0FBQ1g7QUFDQUssV0FBRyxDQUFDanBCLElBQUosQ0FBUytvQixjQUFjLENBQUNDLENBQUQsQ0FBdkIsRUFGVyxDQUdYOztBQUNBQyxXQUFHLENBQUNqcEIsSUFBSixDQUFTK29CLGNBQWMsQ0FBQ0gsR0FBRyxDQUFDSSxDQUFELENBQUosQ0FBdkI7QUFDSCxPQVJnQixDQVNqQjs7O0FBQ0EsYUFBTyxJQUFJdnVCLEVBQUUsQ0FBQ2ltQixPQUFILENBQVd3QyxJQUFmLENBQW9CK0YsR0FBcEIsQ0FBUDtBQUNILEtBWEQsTUFXSztBQUNELGFBQU9MLEdBQVA7QUFDSDtBQUNKLEdBZk0sTUFlQSxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUNoQyxXQUFPLElBQUludUIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBVzJDLEdBQWYsQ0FBbUJ1RixHQUFuQixDQUFQO0FBQ0gsR0FGTSxNQUVBLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ2hDLFdBQU9udUIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBVzBJLEtBQVgsQ0FBaUJSLEdBQWpCLENBQVA7QUFDSCxHQUZNLE1BRUEsSUFBSSxPQUFPQSxHQUFQLEtBQWUsU0FBbkIsRUFBOEI7QUFDakMsV0FBTyxJQUFJbnVCLEVBQUUsQ0FBQ2ltQixPQUFILENBQVd1RixJQUFmLENBQW9CMkMsR0FBcEIsQ0FBUDtBQUNILEdBRk0sTUFFQSxJQUFHLE9BQU9BLEdBQVAsS0FBZSxVQUFsQixFQUE4QjtBQUNqQyxXQUFPLElBQUludUIsRUFBRSxDQUFDaW1CLE9BQUgsQ0FBVzJDLEdBQWYsQ0FBbUJ1RixHQUFHLENBQUN0Z0MsSUFBdkIsQ0FBUDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7QUM3T0Qsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoiYmxvY2tweS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImtvXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYmxvY2tweVwiLCBbXCJqUXVlcnlcIiwgXCJrb1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJibG9ja3B5XCJdID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwia29cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJsb2NrcHlcIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJrb1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rbm9ja291dF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmxvY2tweS5qc1wiKTtcbiIsImltcG9ydCBcIi4vY3NzL2Jsb2NrcHkuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3NzL2Jvb3RzdHJhcF9yZXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlV3JhcHBlcn0gZnJvbSBcInN0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHtFZGl0b3JzRW51bX0gZnJvbSBcImVkaXRvcnMuanNcIjtcclxuaW1wb3J0IHtEaXNwbGF5TW9kZXN9IGZyb20gXCJlZGl0b3IvcHl0aG9uLmpzXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCJzZXJ2ZXIuanNcIjtcclxuaW1wb3J0IHttYWtlSW50ZXJmYWNlLCBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zLCBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnN9IGZyb20gXCJpbnRlcmZhY2UuanNcIjtcclxuaW1wb3J0IHtFZGl0b3JzfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQmxvY2tQeUZpbGVTeXN0ZW0sXHJcbiAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZSxcclxuICAgIG1ha2VNb2RlbEZpbGUsXHJcbiAgICBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZSxcclxuICAgIFVOREVMRVRBQkxFX0ZJTEVTLFxyXG4gICAgVU5SRU5BTUFCTEVfRklMRVNcclxufSBmcm9tIFwiLi9maWxlc1wiO1xyXG5pbXBvcnQge3VwbG9hZEZpbGUsIGRvd25sb2FkRmlsZX0gZnJvbSBcIi4vZWRpdG9yL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlFbmdpbmV9IGZyb20gXCJlbmdpbmUuanNcIjtcclxuaW1wb3J0IHtCbG9ja1B5VHJhY2V9IGZyb20gXCIuL3RyYWNlXCI7XHJcbmltcG9ydCB7QmxvY2tQeUNvbnNvbGV9IGZyb20gXCIuL2NvbnNvbGVcIjtcclxuaW1wb3J0IHtCbG9ja1B5RmVlZGJhY2t9IGZyb20gXCJmZWVkYmFjay5qc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlTZXJ2ZXJ9IGZyb20gXCIuL3NlcnZlclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlEaWFsb2d9IGZyb20gXCIuL2RpYWxvZ1wiO1xyXG5pbXBvcnQge2xvYWRBc3NpZ25tZW50U2V0dGluZ3MsIG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbH0gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtCbG9ja1B5Q29yZ2lzLCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMsIF9JTVBPUlRFRF9EQVRBU0VUU30gZnJvbSBcIi4vY29yZ2lzXCI7XHJcbmltcG9ydCB7QmxvY2tQeUhpc3Rvcnl9IGZyb20gXCIuL2hpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCB7X0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTLCBfSU1QT1JURURfREFUQVNFVFN9O1xyXG5cclxuLyoqXHJcbiAqIE1ham9yIGVudHJ5IHBvaW50IGZvciBjcmVhdGluZyBhIEJsb2NrUHkgaW5zdGFuY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1B5IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gLSBVc2VyIGxldmVsIHNldHRpbmdzIChlLmcuLCB3aGF0IGVkaXRvciBtb2RlLCB3aGV0aGVyIHRvIG11dGUgc2VtYW50aWMgZXJyb3JzLCBldGMuKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFzc2lnbm1lbnQgLSBBc3NpZ25tZW50IGxldmVsIHNldHRpbmdzIChkYXRhIGFib3V0IHRoZSBsb2FkZWQgYXNzaWdubWVudCwgdXNlciwgc3VibWlzc2lvbiwgZXRjLilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdWJtaXNzaW9uIC0gSW5jbHVkZXMgdGhlIHNvdXJjZSBjb2RlIG9mIGFueSBwcm9ncmFtcyB0byBiZSBsb2FkZWRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiwgYXNzaWdubWVudCwgc3VibWlzc2lvbikge1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZGVsKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgIGlmIChhc3NpZ25tZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBc3NpZ25tZW50KGNvbmZpZ3VyYXRpb24sIGFzc2lnbm1lbnQsIHN1Ym1pc3Npb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRNYWluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgQmxvY2tQeSBvYmplY3QgYnkgaW5pdGlhbGl6aW5nIGl0cyBpbnRlcmZhY2UsXHJcbiAgICAgKiBtb2RlbCwgYW5kIGNvbXBvbmVudHMuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpbml0TWFpbigpIHtcclxuICAgICAgICB0aGlzLmluaXRVdGlsaXRpZXMoKTtcclxuICAgICAgICB0aGlzLmluaXRNb2RlbE1ldGhvZHMoKTtcclxuICAgICAgICB0aGlzLnR1cm5PbkhhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW50ZXJmYWNlKCk7XHJcbiAgICAgICAgdGhpcy5hcHBseU1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgYSBkZWZhdWx0IHZhbHVlIG9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gdGhlIGtleSB0byBsb29rIHVwIGEgdmFsdWUgZm9yXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdFZhbHVlIC0gaWYgdGhlIGtleSBpcyBub3QgZm91bmQgYW55d2hlcmUsIHVzZSB0aGlzIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGdldFNldHRpbmcoa2V5LCBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICBpZiAoa2V5IGluIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1trZXldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhbFNldHRpbmdzXy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFNldHRpbmdzXy5nZXQoa2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBtb2RlbCB0byBpdHMgZGVmYXVsdHMuXHJcbiAgICAgKlxyXG4gICAgICogQ2F0ZWdvcmllczpcclxuICAgICAqICAgKiB1c2VyOiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IHVzZXIgKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogYXNzaWdubWVudDogdmFsdWVzIGZvciB0aGUgY3VycmVudCBhc3NpZ25tZW50IChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIHN1Ym1pc3Npb246IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgc3VibWlzc2lvbiAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBkaXNwbGF5OiBmbGFncyByZWxhdGVkIHRvIGN1cnJlbnQgdmlzaWJpbGl0eSAoc3RvcmVkIHRvIGxvY2FsU2V0dGluZ3MpXHJcbiAgICAgKiAgICogc3RhdHVzOiBtZXNzYWdlcyByZWxhdGVkIHRvIGN1cnJlbnQgc3RhdHVzIChub3Qgc3RvcmVkKVxyXG4gICAgICogICAqIGV4ZWN1dGlvbjogdmFsdWVzIHJlbGF0ZWQgdG8gbGFzdCBydW4gKG5vdCBzdG9yZWQpXHJcbiAgICAgKiAgICogY29uZmlndXJhdGlvbjogY29uc3RhbnQgdmFsdWVzIHJlbGF0ZWQgdG8gc2V0dXAgKG5vdCBzdG9yZWQpXHJcbiAgICAgKi9cclxuICAgIGluaXRNb2RlbChjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgLy8gQ29ubmVjdCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgdGhpcy5sb2NhbFNldHRpbmdzXyA9IG5ldyBMb2NhbFN0b3JhZ2VXcmFwcGVyKFwibG9jYWxTZXR0aW5nc1wiKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uXyA9IGNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgICAgIHRoaXMubW9kZWwgPSB7XHJcbiAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmlkXCJdKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIubmFtZVwiXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgeW91IGFyZSBhbiBPd25lciAoY2FuIG1vZGlmeSB0aGUgYXNzaWdubWVudCksIEdyYWRlciAoY2FuIHZpZXdcclxuICAgICAgICAgICAgICAgICAqIHRoZSBhc3NpZ25tZW50cycgaW5mb3JtYXRpb24pIG9yIFN0dWRlbnQgKGNhbiBub3Qgc2VlIGFueSBpbnN0cnVjdG9yIHN0dWZmKS5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICByb2xlOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInVzZXIucm9sZVwiLCBcIm93bmVyXCIpKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudCBjb3Vyc2UgZm9yIHRoaXMgdXNlclxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VJZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5jb3Vyc2VfaWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50IGFzc2lnbm1lbnQgZ3JvdXAgdGhhdCB0aGlzIHVzZXIgaXMgaW5zaWRlXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuZ3JvdXBfaWRcIl0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzc2lnbm1lbnQ6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga28ub2JzZXJ2YWJsZShcIlNjcmF0Y2ggQ2FudmFzXCIpLFxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zOiBrby5vYnNlcnZhYmxlKFwiV2VsY29tZSB0byBCbG9ja1B5LiBUcnkgZWRpdGluZyBhbmQgcnVubmluZyB0aGUgY29kZSBiZWxvdy5cIiksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBodW1hbi1mcmllbmRseSBVUkwgdG8gdXNlIGFzIGEgc2hvcnRjdXQgZm9yIHRoaXMgYXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB1cmw6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3YXJuaW5nIG1lc3NhZ2UgaWYgbWF6ZVxyXG4gICAgICAgICAgICAgICAgdHlwZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0aW5nQ29kZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5zdGFydGluZ19jb2RlXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgb25SdW46IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fcnVuXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fY2hhbmdlXCJdIHx8IG51bGwpLFxyXG4gICAgICAgICAgICAgICAgb25FdmFsOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX2V2YWxcIl0gfHwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICBleHRyYUluc3RydWN0b3JGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3RhcnRpbmdGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIGZvcmtlZElkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgZm9ya2VkVmVyc2lvbjoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIG93bmVySWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIHZlcnNpb246IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICB0YWdzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlU3VibWlzc2lvbnM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICByZXZpZXdlZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5yZXZpZXdlZFwiXSksXHJcbiAgICAgICAgICAgICAgICBwdWJsaWM6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQucHVibGljXCJdKSxcclxuICAgICAgICAgICAgICAgIGhpZGRlbjoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5oaWRkZW5cIl0pLFxyXG4gICAgICAgICAgICAgICAgaXBSYW5nZXM6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuaXBfcmFuZ2VzXCJdKSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwoY29uZmlndXJhdGlvbilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VibWlzc2lvbjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjb2RlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJzdWJtaXNzaW9uLmNvZGVcIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBleHRyYUZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBzY29yZToga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgIGNvcnJlY3Q6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudElkIGluZmVycmVkIGZyb20gYXNzaWdubWVudC5pZFxyXG4gICAgICAgICAgICAgICAgLy8gY291cnNlSWQgaW5mZXJyZWQgZnJvbSB1c2VyLmNvdXJzZUlkXHJcbiAgICAgICAgICAgICAgICAvLyB1c2VySWQgaW5mZXJyZWQgZnJvbSB1c2VyLmlkXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50VmVyc2lvbiBpbmZlcnJlZCBmcm9tIGFzc2lnbm1lbnQudmVyc2lvblxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25TdGF0dXM6IGtvLm9ic2VydmFibGUoXCJTdGFydGVkXCIpLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGluZ1N0YXR1czoga28ub2JzZXJ2YWJsZShcIk5vdFJlYWR5XCIpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnRseSB2aXNpYmxlIEZpbGUsIGlmIGFwcGxpY2FibGVcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBwcmVzZW50ZWQgd2l0aCB0aGUgaW5zdHJ1Y3RvciBzZXR0aW5ncyBhbmQgZmlsZXNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkuaW5zdHJ1Y3RvclwiLCBcImZhbHNlXCIpLnRvU3RyaW5nKCk9PT1cInRydWVcIiksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgdGhlIHByaW50ZXIgZnJvbSBzaG93aW5nIHRoaW5nc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBtdXRlUHJpbnRlcjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIChQeXRob24gVmlld3MpIFRoZSBjdXJyZW50IGVkaXRvciBtb2RlLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0Rpc3BsYXlNb2Rlc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHl0aG9uTW9kZToga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJkaXNwbGF5LnB5dGhvbi5tb2RlXCIsIERpc3BsYXlNb2Rlcy5TUExJVCkpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCBIaXN0b3J5IG1vZGUgaXMgZW5nYWdlZC5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5TW9kZToga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIGF1dG8tc2F2aW5nIGNoYW5nZXMgaW4gUHl0aG9uIGVkaXRvclxyXG4gICAgICAgICAgICAgICAgICogSWYgYW4gaW50ZWdlciwgc3BlY2lmaWVzIHRoZSBkZWxheSB0aGF0IHNob3VsZCBiZSB1c2VkIChtaWNyb3NlY29uZHMpLlxyXG4gICAgICAgICAgICAgICAgICogVGhpcyBpcyBuZXZlciBvbiBpbiBub24tUHl0aG9uIGVkaXRvcnMuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbHxpbnR9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGF1dG9TYXZlOiBrby5vYnNlcnZhYmxlKHRydWUpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgY29uc29sZSBpcyBmdWxsIHdpZHRoIGFuZCBmZWVkYmFjayBpcyBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYmlnQ29uc29sZToga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBoZWlnaHQgdG8gdXNlIGZvciB0aGUgY29uc29sZS5cclxuICAgICAgICAgICAgICAgICAqICAgIElmIG51bGwsIHRoZW4gbGV0IHRoZSBoZWlnaHQgcmVtYWluIHVuY2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICogICAgSWYgYSBudW1iZXIsIHRoZW4gdGhlXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzQ29uc29sZUhlaWdodDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25zb2xlSGVpZ2h0OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGljaCBwYW5lbCB0byBzaG93IGluIHRoZSBzZWNvbmQgcm93J3Mgc2Vjb25kIGNvbHVtblxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1NlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kUm93U2Vjb25kUGFuZWw6IGtvLm9ic2VydmFibGUoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgdHJhY2luZyB0aGUgY29kZSByaWdodCBub3dcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJhY2VFeGVjdXRpb246IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgbGlzdCBvZiBwcm9taXNlcyB0byBzdGlsbCByZXNvbHZlIHdoaWxlIGxvYWRpbmcgZGF0YXNldHNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheTxQcm9taXNlPn1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0RhdGFzZXRzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgdGVtcG9yYXJ5IGNoYW5nZWQgdmFsdWUgb2YgdGhlIGluc3RydWN0aW9ucyBoYXZlIGJlZW4gY2hhbmdlZCBmcm9tIHdoYXQgaXMgaW4gdGhlIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZEluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQSBob2xkZXIgZm9yIHRoZSB0aW1lciB0byB0cmlnZ2VyIG9uLWNoYW5nZXNcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9uQ2hhbmdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIHRoZSBjdXJyZW50IGZlZWRiYWNrIGFuZCBvdXRwdXQgY29ycmVzcG9uZHMgdG8gdGhlIGN1cnJlbnQgc3VibWlzc2lvbi5cclxuICAgICAgICAgICAgICAgICAqIFRoaXMgd291bGQgYmUgZmFsc2UgaWYgdGhlcmUgaXMgbm8gZmVlZGJhY2svb3V0cHV0IChpLmUuLCBjb2RlIGhhcyBub3QgYmVlbiBydW4pLFxyXG4gICAgICAgICAgICAgICAgICogb3IgaWYgdGhlIHVzZXIgaGFzIG1vZGlmaWVkIHRoZSBzdWJtaXNzaW9uIGFmdGVyIHRoZSBsYXN0IHJ1biAoZS5nLiwgYnkgZWRpdGluZ1xyXG4gICAgICAgICAgICAgICAgICogdGhlIHRleHQpLlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBkaXJ0eVN1Ym1pc3Npb246IGtvLm9ic2VydmFibGUodHJ1ZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUltYWdlOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVJbWFnZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb25TdGF0dXM6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgb25FeGVjdXRpb246IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGVjdXRpb246IHtcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIGFib3V0IGluLXByb2dyZXNzIGV4ZWN1dGlvbnNcclxuICAgICAgICAgICAgICAgIHJlcG9ydHM6IHt9LFxyXG4gICAgICAgICAgICAgICAgLy8gbGlzdCBvZiBPdXRwdXQgb2JqZWN0c1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gcmVsYXRlZCB0byBhIHN0dWRlbnQgcnVuXHJcbiAgICAgICAgICAgICAgICBzdHVkZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RyOiB0aGUgZmlsZW5hbWUgdGhhdCB3YXMgbGFzdCBleGVjdXRlZCBhbmQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZXNlIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0ZXA6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTdGVwOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGluZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TGluZToga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBhcnJheSBvZiBzaW1wbGUgb2JqZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFjZURhdGE6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFjZVN0ZXA6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWN0dWFsIGV4ZWN1dGlvbiByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiBrby5vYnNlcnZhYmxlKG51bGwpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gcmVsYXRlZCB0byBmZWVkYmFjayBmcm9tIHRoZSBpbnN0cnVjdG9yIHJ1blxyXG4gICAgICAgICAgICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHIgKG1hcmtkb3duKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJSZWFkeVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzRXJyb3I6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNVbmNvdmVyZWQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlc3VsdHMgb2YgdGhlIGxhc3QgZXhlY3V0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRnVuY3Rpb25zIHRvIGZpcmUgd2hlbiBjZXJ0YWluIGV2ZW50cyBvY2N1clxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXaGVuIHRoZSBzdHVkZW50IGdldHMgYSBzdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiY2FsbGJhY2suc3VjY2Vzc1wiXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBzZXJ2ZXIgaXMgY29ubmVjdGVkLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHNlcnZlckNvbm5lY3RlZDoga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJzZXJ2ZXIuY29ubmVjdGVkXCIsIHRydWUpKSxcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgYmxvY2tseVBhdGg6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiYmxvY2tseS5wYXRoXCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50UG9pbnQ6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiYXR0YWNobWVudC5wb2ludFwiXSxcclxuICAgICAgICAgICAgICAgIC8vIEpRdWVyeSBvYmplY3RcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIE1hcHMgY29kZXMgKCdsb2dfZXZlbnQnLCAnc2F2ZV9jb2RlJykgdG8gVVJMc1xyXG4gICAgICAgICAgICAgICAgdXJsczogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJ1cmxzXCJdIHx8IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBpbml0SW50ZXJmYWNlKCkge1xyXG4gICAgICAgIGxldCBjb25zdGFudHMgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgbGV0IGd1aSA9IG1ha2VJbnRlcmZhY2UodGhpcyk7XHJcbiAgICAgICAgY29uc3RhbnRzLmNvbnRhaW5lciA9ICQoY29uc3RhbnRzLmF0dGFjaG1lbnRQb2ludCkuaHRtbCgkKGd1aSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsb2FkQXNzaWdubWVudChhc3NpZ25tZW50X2lkKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNlcnZlci5sb2FkQXNzaWdubWVudChhc3NpZ25tZW50X2lkKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVGFncyh0YWdzKSB7XHJcbiAgICAgICAgLy8gQWxyZWFkeSBhIEpTT04gbGlzdCByZXByZXNlbnRpbmcgdGFnc1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTYW1wbGVTdWJtaXNzaW9ucyhzYW1wbGVzKSB7XHJcbiAgICAgICAgLy8gQWxyZWFkeSBhIEpTT04gbGlzdCByZXByZXNlbnRpbmcgc2FtcGxlc1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdWJtaXNzaW9uKHN1Ym1pc3Npb24pIHtcclxuICAgICAgICBpZiAoIXN1Ym1pc3Npb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUT0RPOiBXaGF0IGlmIHN1Ym1pc3Npb25zJyBhc3NpZ25tZW50IHZlcnNpb24gYW5kIHRoZSBhc3NpZ25tZW50cycgdmVyc2lvbiBjb25mbGljdD9cclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uaWQoc3VibWlzc2lvbi5pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoc3VibWlzc2lvbi5jb2RlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWJtaXNzaW9uLmNvcnJlY3QpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5zY29yZShzdWJtaXNzaW9uLnNjb3JlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZW5kcG9pbnQoc3VibWlzc2lvbi5lbmRwb2ludCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnVybChzdWJtaXNzaW9uLnVybCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnZlcnNpb24oc3VibWlzc2lvbi52ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZ3JhZGluZ1N0YXR1cyhzdWJtaXNzaW9uLmdyYWRpbmdfc3RhdHVzKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uc3VibWlzc2lvblN0YXR1cyhzdWJtaXNzaW9uLnN1Ym1pc3Npb25fc3RhdHVzKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnVzZXIuY291cnNlSWQoc3VibWlzc2lvbi5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKHN1Ym1pc3Npb24uZXh0cmFfZmlsZXMsIHRoaXMubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQXNzaWdubWVudERhdGFfKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLnJlc2V0SW50ZXJmYWNlKCk7XHJcbiAgICAgICAgbGV0IHdhc1NlcnZlckNvbm5lY3RlZCA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKGZhbHNlKTtcclxuICAgICAgICBsZXQgYXNzaWdubWVudCA9IGRhdGEuYXNzaWdubWVudDtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaWQoYXNzaWdubWVudC5pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnZlcnNpb24oYXNzaWdubWVudC52ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuY291cnNlSWQoYXNzaWdubWVudC5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRJZChhc3NpZ25tZW50LmZvcmtlZF9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmZvcmtlZFZlcnNpb24oYXNzaWdubWVudC5mb3JrZWRfdmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbihhc3NpZ25tZW50LmhpZGRlbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKGFzc2lnbm1lbnQucmV2aWV3ZWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5wdWJsaWMoYXNzaWdubWVudC5wdWJsaWMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC50eXBlKGFzc2lnbm1lbnQudHlwZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnVybChhc3NpZ25tZW50LnVybCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmlwUmFuZ2VzKGFzc2lnbm1lbnQuaXBfcmFuZ2VzKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKGFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQubmFtZShhc3NpZ25tZW50Lm5hbWUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZShhc3NpZ25tZW50Lm9uX2NoYW5nZSB8fCBudWxsKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudC5vbl9jaGFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShcIiFvbl9jaGFuZ2UucHlcIiwgYXNzaWdubWVudC5vbl9jaGFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKGFzc2lnbm1lbnQub25fZXZhbCB8fCBudWxsKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudC5vbl9ldmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUoXCIhb25fZXZhbC5weVwiLCBhc3NpZ25tZW50Lm9uX2V2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oYXNzaWdubWVudC5vbl9ydW4pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUoYXNzaWdubWVudC5zdGFydGluZ19jb2RlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub3duZXJJZChhc3NpZ25tZW50Lm93bmVyX2lkKTtcclxuICAgICAgICBsb2FkQXNzaWdubWVudFNldHRpbmdzKHRoaXMubW9kZWwsIGFzc2lnbm1lbnQuc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMubG9hZFRhZ3MoYXNzaWdubWVudC50YWdzKTtcclxuICAgICAgICB0aGlzLmxvYWRTYW1wbGVTdWJtaXNzaW9ucyhhc3NpZ25tZW50LnNhbXBsZV9zdWJtaXNzaW9ucyk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoYXNzaWdubWVudC5leHRyYV9pbnN0cnVjdG9yX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfc3RhcnRpbmdfZmlsZXMsIHRoaXMubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpO1xyXG4gICAgICAgIHRoaXMubG9hZFN1Ym1pc3Npb24oZGF0YS5zdWJtaXNzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKHRydWUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQod2FzU2VydmVyQ29ubmVjdGVkKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuY29yZ2lzLmxvYWREYXRhc2V0cyh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNlcnZlci5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1vZGVsTWV0aG9kcygpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5tb2RlbDtcclxuICAgICAgICBtb2RlbC51aSA9IHtcclxuICAgICAgICAgICAgcm9sZToge1xyXG4gICAgICAgICAgICAgICAgaXNHcmFkZXI6IGtvLnB1cmVDb21wdXRlZCgoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudXNlci5yb2xlKCkgPT09IFwib3duZXJcIiB8fCBtb2RlbC51c2VyLnJvbGUoKSA9PT0gXCJncmFkZXJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBpc0NoYW5nZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucygpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuaW5zdHJ1Y3Rpb25zLmlzQ2hhbmdlZCgpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51dGlsaXRpZXMubWFya2Rvd24obW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKCkpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51dGlsaXRpZXMubWFya2Rvd24obW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICByZXNldDogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMobnVsbClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWVudToge1xyXG4gICAgICAgICAgICAgICAgY2FuTWFya1N1Ym1pdHRlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSB8fCBtb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB0ZXh0TWFya1N1Ym1pdHRlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkubWVudS5pc1N1Ym1pdHRlZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJSZW9wZW4gZm9yIGVkaXRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJSdW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk1hcmsgYXMgc3VibWl0dGVkXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjbGlja01hcmtTdWJtaXR0ZWQ6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkubWVudS5pc1N1Ym1pdHRlZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uU3RhdHVzKFwiaW5Qcm9ncmVzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb21wb25lbnRzLmVuZ2luZS5ydW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb25TdGF0dXMoXCJTdWJtaXR0ZWRcIilcclxuICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGVkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoKS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdHRlZFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlY29uZFJvdzoge1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkYmFja1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNUcmFjZVZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNDb25zb2xlU2hvd1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSgpIHx8IG1vZGVsLnVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoTGFiZWw6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXcgVHJhY2VcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBhZHZhbmNlU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBhbmVsID0gbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnNvbGU6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC0xMlwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtNlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUV2YWx1YXRlOiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpIHx8ICFtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMub25FeGVjdXRpb24oKSA9PT0gU3RhdHVzU3RhdGUuQUNUSVZFXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICBiYWRnZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXJ1bnRpbWUtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXN5bnRheC1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWludGVybmFsLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXNlbWFudGljLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3RvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtZmVlZGJhY2stZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1wcm9ibGVtLWNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdGlvbnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1uby1lcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1bnRpbWUgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiU3ludGF4IEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVkaXRvciBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludGVybmFsIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFsZ29yaXRobSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmVlZGJhY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhY2U6IHtcclxuICAgICAgICAgICAgICAgIGhhczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgbGluZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFjZURhdGEgfHwgc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyB0cmFjZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCZWZvcmUgcnVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGVwID09PSBsYXN0U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5pc2hlZCBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aHkgYXJlIHRoZXNlIG51bWJlcnMgd29ua3k/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkxpbmUgXCIrKHRyYWNlRGF0YVtzdGVwXS5saW5lLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzID0gTWF0aC5tYXgoMCwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChwcmV2aW91cyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gTWF0aC5taW4obW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChuZXh0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgbGFzdFN0ZXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2VEYXRhW3N0ZXAgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSB8fCAhbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRzOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbnN3ZXIucHlcIjogcmV0dXJuIG1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIWluc3RydWN0aW9ucy5tZFwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKSAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9ldmFsLnB5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKCkuc29tZShmaWxlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmZpbGVuYW1lKCkgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXRhZ3MuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC50YWdzKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnNhbXBsZVN1Ym1pc3Npb25zKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFkZDogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/dGFncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/c2V0dGluZ3MuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fY2hhbmdlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBmaXggZXh0cmFmaWxlcyBmb3IgaW5zdHJ1Y3RvciBhbmQgc3R1ZGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZShwYXRoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdHVkZW50RmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBleHRyYUluc3RydWN0b3JGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0YXJ0aW5nRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdG9yczoge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudDoga28ucHVyZUNvbXB1dGVkKCAoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVkaXRvcnMuZ2V0RWRpdG9yKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB2aWV3OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFZGl0b3JzKCkgPyBcIk5vbmVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID8gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkgOiBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLlJlc2V0XCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uY29kZShtb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMobW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMoKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVuYW1lID0gZmlsZS5maWxlbmFtZSgpLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FuU2F2ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIW1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSksXHJcbiAgICAgICAgICAgICAgICBjYW5EZWxldGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICghbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKSB8fCBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBVTkRFTEVUQUJMRV9GSUxFUy5pbmRleE9mKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSkgPT09IC0xKSxcclxuICAgICAgICAgICAgICAgIGNhblJlbmFtZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOUkVOQU1BQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkOiB1cGxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogZG93bmxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBpbXBvcnREYXRhc2V0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmNvcmdpcy5vcGVuRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHl0aG9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29kZU1pcnJvciA9IHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dEVkaXRvci5jb2RlTWlycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29kZU1pcnJvci5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjb2RlTWlycm9yLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTW9kZTogKG5ld01vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtVmlldy5DaGFuZ2VcIiwgXCJcIiwgXCJcIiwgbmV3TW9kZSwgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5weXRob25Nb2RlKG5ld01vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLm9sZFB5dGhvbk1vZGUgPSBuZXdNb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpc0hpc3RvcnlBdmFpbGFibGU6IGtvLnB1cmVDb21wdXRlZCgoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEhpc3RvcnlcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm5PZmZIaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnVwZGF0ZUVkaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0dXJuT25IaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvYWRIaXN0b3J5KChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5oaXN0b3J5LmxvYWQocmVzcG9uc2UuaGlzdG9yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9uSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVRvU3RhcnQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVQcmV2aW91cygpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlTmV4dCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3N0UmVjZW50OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlVG9Nb3N0UmVjZW50KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZTogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkudXNlKCk7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlOiAoKSA9PiBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnNhdmVBc3NpZ25tZW50KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlY3V0ZToge1xyXG4gICAgICAgICAgICAgICAgcnVuOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUucnVuKCksXHJcbiAgICAgICAgICAgICAgICBldmFsdWF0ZTogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZW5naW5lLmV2YWx1YXRlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IChlbmRwb2ludCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFwic2VydmVyLXN0YXR1cy1cIiArIG1vZGVsLnN0YXR1c1tlbmRwb2ludF0oKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzRW5kcG9pbnRDb25uZWN0ZWQ6IChlbmRwb2ludCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi51cmxzICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHNbZW5kcG9pbnRdICE9PSB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRIaXN0b3J5TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWREYXRhc2V0TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvZ0V2ZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVJbWFnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMudXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2UoKSB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZm9yY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uOiAoZGF0YSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2VsZi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuZmFkZU91dCgxMDApLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMoc2VsZiwgbW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm5PbkhhY2tzKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUT0RPXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHlzIHRoZSBLbm9ja291dEpTIGJpbmRpbmdzIHRvIHRoZSBtb2RlbCwgaW5zdGFudGlhdGluZyB0aGUgdmFsdWVzIGludG8gdGhlXHJcbiAgICAgKiBIVE1MLlxyXG4gICAgICovXHJcbiAgICBhcHBseU1vZGVsKCkge1xyXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFV0aWxpdGllcygpIHtcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51dGlsaXRpZXMgPSB7XHJcbiAgICAgICAgICAgIG1hcmtkb3duOiAodGV4dCkgPT4gdGV4dCA/IEVhc3lNREUucHJvdG90eXBlLm1hcmtkb3duKHRleHQpIDogXCI8cD48L3A+XCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzID0ge307XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIC8vIEVhY2ggb2YgdGhlc2UgY29tcG9uZW50cyB3aWxsIHRha2UgdGhlIEJsb2NrUHkgaW5zdGFuY2UsIGFuZCBwb3NzaWJseSBhXHJcbiAgICAgICAgLy8gcmVmZXJlbmNlIHRvIHRoZSByZWxldmFudCBIVE1MIGxvY2F0aW9uIHdoZXJlIGl0IHdpbGwgYmUgZW1iZWRkZWQuXHJcbiAgICAgICAgY29tcG9uZW50cy5kaWFsb2cgPSBuZXcgQmxvY2tQeURpYWxvZyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWRpYWxvZ1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5mZWVkYmFjayA9IG5ldyBCbG9ja1B5RmVlZGJhY2sobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFja1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy50cmFjZSA9IG5ldyBCbG9ja1B5VHJhY2UobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5jb25zb2xlID0gbmV3IEJsb2NrUHlDb25zb2xlKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktY29uc29sZVwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5lbmdpbmUgPSBuZXcgQmxvY2tQeUVuZ2luZShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmZpbGVTeXN0ZW0gPSBuZXcgQmxvY2tQeUZpbGVTeXN0ZW0obWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5lZGl0b3JzID0gbmV3IEVkaXRvcnMobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1lZGl0b3JcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMucHl0aG9uRWRpdG9yID0gdGhpcy5jb21wb25lbnRzLmVkaXRvcnMuYnlOYW1lKFwicHl0aG9uXCIpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuc2VydmVyID0gbmV3IEJsb2NrUHlTZXJ2ZXIobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5jb3JnaXMgPSBuZXcgQmxvY2tQeUNvcmdpcyhtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmhpc3RvcnkgPSBuZXcgQmxvY2tQeUhpc3RvcnkobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1oaXN0b3J5LXRvb2xiYXJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEludGVyZmFjZSgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZW5naW5lLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQge2VuY29kZUhUTUx9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG5jb25zdCBTVEFSVF9FVkFMX0hUTUwgPSBgXG48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUgZmxvYXQtcmlnaHQgYmxvY2tweS1idG4tZXZhbFwiPlxuICAgIEV2YWx1YXRlXG48L2J1dHRvbj5gO1xuXG5leHBvcnQgY29uc3QgQ09OU09MRV9IVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9J2NvbC1tZC02IGJsb2NrcHktcGFuZWwgYmxvY2tweS1jb25zb2xlJ1xuICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiQ29uc29sZVwiXG4gICAgICAgICAgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLmNvbnNvbGUuc2l6ZVwiPlxuICAgICAgICAgIFxuICAgICAgICA8IS0tIEZlZWRiYWNrL1RyYWNlIFZpc2liaWxpdHkgQ29udHJvbCAtLT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0IGJsb2NrcHktc2hvdy1mZWVkYmFjaydcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLnNlY29uZFJvdy5pc0NvbnNvbGVTaG93VmlzaWJsZSwgY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIFxuICAgICAgICA8c3Ryb25nPkNvbnNvbGU6PC9zdHJvbmc+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LXByaW50ZXIgYmxvY2tweS1wcmludGVyLWRlZmF1bHQnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgIDwvZGl2PmA7XG5cbmNvbnN0IE5FV19DT05TT0xFX0xJTkVfSFRNTCA9IFwiPGRpdj48L2Rpdj5cIjtcblxuLyoqXG4gKlxuICogQGVudW1cbiAqL1xuZXhwb3J0IGxldCBDb25zb2xlTGluZVR5cGUgPSB7XG4gICAgVEVYVDogXCJ0ZXh0XCIsXG4gICAgSFRNTDogXCJodG1sXCIsXG4gICAgUExPVDogXCJwbG90XCIsXG4gICAgSU1BR0U6IFwiaW1hZ2VcIixcbiAgICBUVVJUTEU6IFwidHVydGxlXCIsXG4gICAgRVZBTDogXCJldmFsXCIsXG4gICAgU1RBUlRfRVZBTDogXCJzdGFydF9ldmFsXCIsXG4gICAgVkFMVUU6IFwidmFsdWVcIixcbiAgICBJTlBVVDogXCJpbnB1dFwiLFxuICAgIFRFU1RfQ0FTRTogXCJ0ZXN0X2Nhc2VcIlxufTtcblxuY2xhc3MgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHR5cGUsIGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5vcmlnaW4gPSB7XG4gICAgICAgICAgICBmaWxlbmFtZTogU2suY3VyckZpbGVuYW1lLFxuICAgICAgICAgICAgc3RlcDogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCxcbiAgICAgICAgICAgIGxpbmU6IG1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odG1sID0gJChcIjxkaXY+PC9kaXY+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogIFwiYmxvY2tweS1wcmludGVyLW91dHB1dFwiLFxuICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgIFwiZGF0YS1wbGFjZW1lbnRcIjogXCJhdXRvXCIsXG4gICAgICAgICAgICBcImRhdGEtc3RlcFwiOiB0aGlzLm9yaWdpbi5zdGVwLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN0ZXAgXCIgKyB0aGlzLm9yaWdpbi5zdGVwICsgXCIsIExpbmUgXCIgKyB0aGlzLm9yaWdpbi5saW5lXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpc2libGUgPSAhbWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKCk7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIH1cblxuICAgIHRvU2t1bHB0KCkge1xuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeSh0aGlzLmNvbnRlbnQpO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5odG1sLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVUdXJ0bGUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgLy8gVE9ETzogQ2FwdHVyZSB0dXJ0bGUgY29tbWFuZHMgZm9yIHRyYWNpbmcgcHVycG9zZXNcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5UVVJUTEUpO1xuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoXCJibG9ja3B5LWNvbnNvbGUtdHVydGxlLW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgd2hlcmUucHJlcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sWzBdLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lSW1hZ2UgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuSU1BR0UsIGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoXCJibG9ja3B5LWNvbnNvbGUtaW1hZ2Utb3V0cHV0XCIpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lUGxvdCBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBjb250ZW50KSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5QTE9ULCBjb250ZW50KTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLXBsb3Qtb3V0cHV0XCIpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIC8vdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVUZXh0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgYWRkQ29udGVudChjb250ZW50KSB7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudCArIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIGxldCBsaW5lRGF0YSA9ICQoXCI8c2FtcD48L3NhbXA+XCIsIHsgXCJodG1sXCI6IGVuY29kZWRUZXh0IH0pO1xuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChsaW5lRGF0YSk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVmFsdWUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtYWluLCBjb250ZW50KSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5WQUxVRSwgY29udGVudCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIGxldCBsaW5lRGF0YSA9ICQoXCI8Y29kZT48L2NvZGU+XCIsIHsgXCJodG1sXCI6IGVuY29kZWRUZXh0IH0pO1xuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChsaW5lRGF0YSk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lSW5wdXQgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgcHJvbXB0TWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuSU5QVVQsIHByb21wdE1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gSW5wdXQgYm94IGZvciByZWNlaXZpbmcgaW5wdXQoKSBmcm9tIHRoZSB1c2VyLlxuICAgICAqXG4gICAgICovXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIC8vIFBlcmZvcm0gYW55IG5lY2Vzc2FyeSBjbGVhbmluZ1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBJbnB1dCBmb3JtXG4gICAgICAgICAgICBsZXQgaW5wdXRGb3JtID0gJChcIjxpbnB1dCB0eXBlPSd0ZXh0JyAvPlwiKTtcbiAgICAgICAgICAgIC8vIEVudGVyIGJ1dHRvblxuICAgICAgICAgICAgbGV0IGlucHV0QnRuID0gJChcIjxidXR0b24+PC9idXR0b24+XCIsIHtcImh0bWxcIjogXCJFbnRlclwifSk7XG4gICAgICAgICAgICAvLyBHcm91cCBmb3JtIGFuZCBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEdyb3VwID0gJChcIjxkaXY+PC9kaXY+XCIsIHtcImNsYXNzXCI6IFwiYmxvY2tweS1jb25zb2xlLWlucHV0XCJ9KTtcbiAgICAgICAgICAgIGlucHV0R3JvdXAuYXBwZW5kKGlucHV0Rm9ybSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEJ0bik7XG4gICAgICAgICAgICAvLyBQcm9tcHQgYm94LCBuZXcgbGluZSwgaW5wdXQgZ3JvdXBcbiAgICAgICAgICAgIGxldCBpbnB1dEJveCA9ICQoXCI8ZGl2PjwvZGl2PlwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnQgIT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0TXNnID0gJChcIjxzYW1wPjwvc2FtcD5cIiwgIHtcImh0bWxcIjogZW5jb2RlZFRleHR9KTtcbiAgICAgICAgICAgICAgICBpbnB1dEJveC5hcHBlbmQoaW5wdXRNc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKCQoXCI8YnI+XCIpKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoaW5wdXRHcm91cCk7XG4gICAgICAgICAgICAvLyBSZW5kZXJcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoaW5wdXRCb3gpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvLyBNYWtlIGl0IGludGVyYWN0aXZlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlSW50ZXJhY3RpdmUoaW5wdXRGb3JtLCBpbnB1dEJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfTtcblxuICAgIG1ha2VJbnRlcmFjdGl2ZShpbnB1dCwgYnV0dG9uKSB7XG4gICAgICAgIGxldCByZXNvbHZlT25DbGljaztcbiAgICAgICAgbGV0IHN1Ym1pdHRlZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZU9uQ2xpY2sgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlT25DbGljayhpbnB1dC52YWwoKSk7XG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfTtcbiAgICAgICAgYnV0dG9uLmNsaWNrKHN1Ym1pdEZvcm0pO1xuICAgICAgICBpbnB1dC5rZXl1cCgoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICByZXR1cm4gc3VibWl0dGVkUHJvbWlzZTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lRXZhbHVhdGUgZXh0ZW5kcyBDb25zb2xlTGluZUlucHV0IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIFwiRXZhbHVhdGU6XCIpO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlNUQVJUX0VWQUwpO1xuICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKCQoU1RBUlRfRVZBTF9IVE1MKSk7XG4gICAgICAgIHRoaXMuaHRtbC5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZXhlY3V0ZS5ldmFsdWF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJsb2NrUHlDb25zb2xlIHtcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCBmb3IgbWFuYWdpbmcgdGhlIGNvbnNvbGUsIHdpdGggZmVhdHVyZXMgZm9yIHRoaW5ncyBsaWtlIHByaW50aW5nLCBwbG90dGluZywgZXZhbGluZywgaW5wdXRpbmcuXG4gICAgICogVGhlIFwicHJpbnRlclwiIGlzIHRoZSByZWdpb24gd2hlcmUgd2UgcHV0IHRoaW5ncywgYXMgb3Bwb3NlZCB0byB0aGUgY29uc29sZSBhcyBhIHdob2xlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5wcmludGVyVGFnID0gdGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyXCIpO1xuXG4gICAgICAgIHRoaXMuTUlOSU1VTV9XSURUSCA9IDIwMDtcbiAgICAgICAgdGhpcy5NSU5JTVVNX0hFSUdIVCA9IDIwMDtcbiAgICAgICAgdGhpcy5ERUZBVUxUX0hFSUdIVCA9IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKTsgLy8gTGV0IENTUyBkZWZpbmUgdGhpc1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQodGhpcy5ERUZBVUxUX0hFSUdIVCk7XG5cbiAgICAgICAgdGhpcy5vdXRwdXQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHt9O1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gVE9ETzogSWYgdGhlIHVzZXIgbW9kaWZpZXMgYSBmaWxlLCB0aGVuIG1ha2UgdGhlIGNvbnNvbGUgbG9vayBmYWRlZCBhIGxpdHRsZVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgc3RhdHVzIG9mIHRoZSBwcmludGVyLCBpbmNsdWRpbmcgcmVtb3ZpbmcgYW55IHRleHQgaW4gaXQgYW5kXG4gICAgICogZml4aW5nIGl0cyBzaXplLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLm91dHB1dC5yZW1vdmVBbGwoKTtcblxuICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcuZW1wdHkoKTtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgaGFzbid0IGNoYW5nZWQgdGhlIGNvbnNvbGUgc2l6ZSwgd2UnbGwgcmVzZXQgaXRcbiAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCgpID09PSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJpbnRlclRhZy5oZWlnaHQodGhpcy5ERUZBVUxUX0hFSUdIVCk7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQodGhpcy5wcmludGVyVGFnLmhlaWdodCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHVydGxlTGluZSA9IG51bGw7XG4gICAgICAgIFNrLlR1cnRsZUdyYXBoaWNzID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmdldFR1cnRsZUxpbmUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBhc3NldHM6IHRoaXMubG9hZEFzc2V0LmJpbmQodGhpcylcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgbG9hZEFzc2V0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0VHVydGxlTGluZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudHVydGxlTGluZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50dXJ0bGVMaW5lID0gbmV3IENvbnNvbGVMaW5lVHVydGxlKHRoaXMubWFpbik7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZUxpbmUucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXNuJ3QgY2hhbmdlZCB0aGUgY29uc29sZSBzaXplLCB3ZSdsbCBkbyBzb1xuICAgICAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCgpID09PSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByaW50ZXJEaW1lbnNpb24gPSB0aGlzLnByaW50ZXJUYWcud2lkdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KGN1cnJlbnRQcmludGVyRGltZW5zaW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQodGhpcy5wcmludGVyVGFnLmhlaWdodCgpKTtcbiAgICAgICAgICAgICAgICBTay5UdXJ0bGVHcmFwaGljcy5oZWlnaHQgPSBjdXJyZW50UHJpbnRlckRpbWVuc2lvbi00MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50dXJ0bGVMaW5lLmh0bWxbMF07XG4gICAgfVxuXG4gICAgZmluaXNoVHVydGxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLnNhdmVUdXJ0bGVPdXRwdXQoKSkge1xuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMudHVydGxlTGluZS5odG1sLmZpbmQoXCJjYW52YXNcIikubGFzdCgpWzBdO1xuICAgICAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBsZXQgZGF0YVVybCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUltYWdlKFwidHVydGxlX291dHB1dFwiLCBkYXRhVXJsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IHR1cnRsZXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBjdXJyZW50IHdpZHRoXG4gICAgbmV3VHVydGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuTUlOSU1VTV9XSURUSCwgdGhpcy5wcmludGVyVGFnLndpZHRoKCktNDApO1xuICAgIH1cblxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuTUlOSU1VTV9IRUlHSFQsIHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSs0MCk7XG4gICAgfVxuXG4gICAgaXNNdXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBlYWNoIHByaW50ZWQgZWxlbWVudCBpbiB0aGUgcHJpbnRlciBhbmQgbWFrZXMgaXQgaGlkZGVuXG4gICAgICogb3IgdmlzaWJsZSwgZGVwZW5kaW5nIG9uIHdoYXQgc3RlcCB3ZSdyZSBvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwIC0gVGhlIGN1cnJlbnQgc3RlcCBvZiB0aGUgZXhlY3V0ZWQgcHJvZ3JhbSB0aGF0IHdlJ3JlIG9uOyBlYWNoIGVsZW1lbnQgaW4gdGhlIHByaW50ZXIgbXVzdCBiZSBtYXJrZWQgd2l0aCBhIFwiZGF0YS1zdGVwXCIgcHJvcGVydHkgdG8gcmVzb2x2ZSB0aGlzLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlIC0gRGVwcmVjYXRlZCwgbm90IHN1cmUgd2hhdCB0aGlzIGV2ZW4gZG9lcy5cbiAgICAgKi9cbiAgICBzdGVwUHJpbnRlcihzdGVwLCBwYWdlKSB7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZy5maW5kKFwiLmJsb2NrcHktcHJpbnRlci1vdXRwdXRcIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJkYXRhLXN0ZXBcIikgPD0gc3RlcCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByaW50IGEgbGluZSB0byB0aGUgb24tc2NyZWVuIHByaW50ZXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxpbmVUZXh0IC0gQSBsaW5lIG9mIHRleHQgdG8gYmUgcHJpbnRlZCBvdXQuXG4gICAgICovXG4gICAgcHJpbnQobGluZVRleHQpIHtcbiAgICAgICAgLy8gRW1wdHkgc3RyaW5ncyBtZWFucyBkbyBub3RoaW5nLlxuICAgICAgICAvLyBwcmludChcIlwiLCBlbmQ9XCJcIilcbiAgICAgICAgaWYgKCFsaW5lVGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmbHVzaCA9IGZhbHNlO1xuICAgICAgICBpZiAobGluZVRleHQuY2hhckF0KGxpbmVUZXh0Lmxlbmd0aC0xKSA9PT0gXCJcXG5cIikge1xuICAgICAgICAgICAgZmx1c2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzcGxpdExpbmVzID0gbGluZVRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgIGlmICh0aGlzLmxpbmVCdWZmZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVRleHQodGhpcy5tYWluLCBDb25zb2xlTGluZVR5cGUuVEVYVCwgc3BsaXRMaW5lc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIuYWRkQ29udGVudChzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpPTE7IGkgPCBzcGxpdExpbmVzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVRleHQodGhpcy5tYWluLCBDb25zb2xlTGluZVR5cGUuVEVYVCwgc3BsaXRMaW5lc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZsdXNoKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5wdXNoKHRoaXMubGluZUJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgcGxvdChwbG90cykge1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVQbG90KHRoaXMubWFpbiwgcGxvdHMpO1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsb3RCdWZmZXI7XG4gICAgfVxuXG4gICAgcHJpbnRQSUxJbWFnZShpbWFnZURhdGEpIHtcbiAgICAgICAgdGhpcy5pbWFnZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUltYWdlKHRoaXMubWFpbiwgaW1hZ2VEYXRhLmltYWdlKTtcbiAgICAgICAgdGhpcy5pbWFnZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VCdWZmZXI7XG4gICAgfVxuXG4gICAgcHJpbnRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBsZXQgcHJpbnRlZFZhbHVlID0gbmV3IENvbnNvbGVMaW5lVmFsdWUodGhpcy5tYWluLCB2YWx1ZSk7XG4gICAgICAgIHByaW50ZWRWYWx1ZS5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHByaW50ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZWdpc3RlcnMgYSBQcm9taXNlIGZyb20gdGhlIElucHV0IGJveFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9tcHRNZXNzYWdlIC0gTWVzc2FnZSB0byBkaXNwbGF5IHRvIHRoZSB1c2VyLlxuICAgICAqXG4gICAgICovXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xuICAgICAgICB0aGlzLmlucHV0QnVmZmVyID0gbmV3IENvbnNvbGVMaW5lSW5wdXQodGhpcy5tYWluLCBwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgfTtcblxuXG4gICAgZXZhbHVhdGUoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVFdmFsdWF0ZSh0aGlzLm1haW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9XG5cbiAgICBiZWdpbkV2YWwoKSB7XG4gICAgICAgIGxldCBzdGFydEV2YWx1YXRpb24gPSBuZXcgQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlKHRoaXMubWFpbik7XG4gICAgICAgIHJldHVybiBzdGFydEV2YWx1YXRpb24ucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5jb25kaXRpb25hbGx5IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSB3aW5kb3cuXG4gICAgICpcbiAgICAgKi9cbiAgICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgdGhpcy50YWcuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLnByb3AoXCJzY3JvbGxIZWlnaHRcIikgLSB0aGlzLnRhZy5wcm9wKFwiY2xpZW50SGVpZ2h0XCIpXG4gICAgICAgIH0sIDUwMCk7XG4gICAgfTtcblxufSIsImltcG9ydCB7c2x1Z30gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbi8vIFRPRE86IGVkaXRvci5ibS5ibG9ja0VkaXRvci5leHRyYVRvb2xzW11cblxuZXhwb3J0IGxldCBfSU1QT1JURURfREFUQVNFVFMgPSB7fTtcbmV4cG9ydCBsZXQgX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTID0ge307XG5cbi8qKlxuICogVGhpcyBpcyBhIHZlcnkgc2ltcGxpc3RpYyBoZWxwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIHRyYW5zZm9ybVxuICogYSBnaXZlbiBidXR0b24gaW50byBhIFwiTG9hZGVkXCIgc3RhdGUgKGRpc2FibGVkLCBwcmVzc2VkIHN0YXRlLCBldGMuKS5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBidG4gLSBBbiBIVE1MIGVsZW1lbnQgdG8gY2hhbmdlIHRoZSB0ZXh0IG9mLlxuICovXG5sZXQgc2V0QnV0dG9uTG9hZGVkID0gZnVuY3Rpb24gKGJ0bikge1xuICAgIGJ0bi5hZGRDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tcHJpbWFyeVwiKVxuICAgICAgICAucHJvcChcImRpc2FibGVkXCIsIHRydWUpXG4gICAgICAgIC50ZXh0KFwiTG9hZGVkXCIpXG4gICAgICAgIC5hdHRyKFwiYXJpYS1wcmVzc2VkXCIsIFwidHJ1ZVwiKTtcbn07XG5cblxuLyoqXG4gKiBNb2R1bGUgdGhhdCBjb25uZWN0cyB0byB0aGUgQ09SR0lTIGRhdGFzZXRzIGFuZCBtYW5hZ2VzIGludGVyYWN0aW9uc1xuICogd2l0aCB0aGVtLiBUaGlzIGluY2x1ZGVzIGxvYWRpbmcgaW4gZGF0YXNldHMgYXQgbGF1bmNoIGFuZCBvbi10aGUtZmx5LlxuICogTm90ZSB0aGF0IHRoaXMgaGFzIG5vIHByZXNlbmNlIG9uIHNjcmVlbiwgc28gaXQgZG9lcyBub3QgaGF2ZSBhIHRhZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5Q29yZ2lzfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5Q29yZ2lzKG1haW4pIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuXG4gICAgdGhpcy5sb2FkZWREYXRhc2V0cyA9IFtdO1xuICAgIHRoaXMubG9hZERhdGFzZXRzKCk7XG59XG5cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLmxvYWREYXRhc2V0cyA9IGZ1bmN0aW9uIChzaWxlbnRseSkge1xuICAgIC8vIExvYWQgaW4gZWFjaCB0aGUgZGF0YXNldHNcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWwsXG4gICAgICAgIGVkaXRvciA9IHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvcixcbiAgICAgICAgc2VydmVyID0gdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyO1xuICAgIGxldCBpbXBvcnRzID0gW107XG4gICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0cygpLnNwbGl0KFwiLFwiKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lICYmICEobmFtZSBpbiBCbG9ja01pcnJvckJsb2NrRWRpdG9yLkVYVFJBX1RPT0xTKSkge1xuICAgICAgICAgICAgaW1wb3J0cy5wdXNoLmFwcGx5KGltcG9ydHMsIHRoaXMuaW1wb3J0RGF0YXNldChzbHVnKG5hbWUpLCBuYW1lLCBzaWxlbnRseSkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGRhdGFzZXRzIGFyZSBsb2FkZWQsIHVwZGF0ZSB0aGUgdG9vbGJveC5cbiAgICAkLndoZW4uYXBwbHkoJCwgaW1wb3J0cykuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUUklHR0VSRURcIik7XG4gICAgICAgIGVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICBlZGl0b3IuYm0uYmxvY2tFZGl0b3IucmVtYWtlVG9vbGJveCgpO1xuICAgIH0pLmZhaWwoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9KS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXJ2ZXIuZmluYWxpemVTdWJzY3JpcHRpb25zKCk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIExvYWRzIHRoZSBkZWZpbml0aW9ucyBmb3IgYSBkYXRhc2V0IGludG8gdGhlIGVudmlyb25tZW50LCBpbmNsdWRpbmdcbiAqIHRoZSBkYXRhc2V0IChhcyBhIEpTIGZpbGUpLCB0aGUgc2t1bHB0IGJpbmRpbmdzLCBhbmQgdGhlIGJsb2NrbHlcbiAqIGJpbmRpbmdzLiBUaGlzIHJlcXVpcmVzIGFjY2VzcyB0byBhIENPUkdJUyBzZXJ2ZXIsIGFuZCBvY2N1cnNcbiAqIGFzeW5jaHJvbm91c2x5LiBUaGUgcmVxdWVzdHMgYXJlIGZpcmVkIGFuZCB0aGVpciBkZWZlcnJlZCBvYmplY3RzXG4gKiBhcmUgcmV0dXJuZWQgLSBjYWxsZXJzIGNhbiB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBwZXJmb3JtIGFuIGFjdGlvblxuICogb24gY29tcGxldGlvbiBvZiB0aGUgaW1wb3J0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnIC0gVGhlIFVSTCBzYWZlIHZlcnNpb24gb2YgdGhlIGRhdGFzZXQgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBUaGUgdXNlci1mcmllbmRseSB2ZXJzaW9uIG9mIHRoZSBkYXRhc2V0IG5hbWUuXG4gKiBAcmV0dXJucyB7QXJyYXkuPERlZmVycmVkPn0gLSBSZXR1cm5zIHRoZSBhc3luYyByZXF1ZXN0cyBhcyBkZWZlcnJlZCBvYmplY3RzLlxuICovXG5CbG9ja1B5Q29yZ2lzLnByb3RvdHlwZS5pbXBvcnREYXRhc2V0ID0gZnVuY3Rpb24gKHNsdWcsIG5hbWUpIHtcbiAgICBsZXQgdXJsX3JldHJpZXZhbHMgPSBbXTtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwiaW1wb3J0RGF0YXNldHNcIikpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzLmltcG9ydERhdGFzZXRzICsgXCJibG9ja3B5L1wiICsgc2x1ZyArIFwiL1wiICsgc2x1ZztcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubG9hZGluZ0RhdGFzZXRzLnB1c2gobmFtZSk7XG4gICAgICAgIC8vIEFjdHVhbGx5IGdldCBkYXRhXG4gICAgICAgIGxldCBnZXREYXRhc2V0ID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2RhdGFzZXQuanNcIik7XG4gICAgICAgIC8vIExvYWQgZ2V0Q29tcGxldGUgc2lsZW50bHkgaW4gdGhlIGJhY2tncm91bmQgYmVjYXVzZSBpdHMgYmlnIDooXG4gICAgICAgIGxldCBnZXRDb21wbGV0ZSA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9jb21wbGV0ZS5qc1wiKTtcbiAgICAgICAgbGV0IGdldFNrdWxwdCA9ICQuZ2V0KHJvb3QgKyBcIl9za3VscHQuanNcIiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW1wic3JjL2xpYi9cIiArIHNsdWcgKyBcIi9fX2luaXRfXy5qc1wiXSA9IGRhdGE7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZ2V0QmxvY2tseSA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9ibG9ja2x5LmpzXCIpO1xuICAgICAgICAvLyBPbiBjb21wbGV0aW9uLCB1cGRhdGUgbWVudXMuXG4gICAgICAgICQud2hlbihnZXREYXRhc2V0LCBnZXRTa3VscHQsIGdldEJsb2NrbHkpLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWREYXRhc2V0cy5wdXNoKHNsdWcpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uYmxvY2tFZGl0b3IucmVtYWtlVG9vbGJveCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubG9hZGluZ0RhdGFzZXRzLnJlbW92ZShuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVybF9yZXRyaWV2YWxzLnB1c2goZ2V0RGF0YXNldCwgZ2V0U2t1bHB0LCBnZXRCbG9ja2x5KTtcbiAgICB9XG4gICAgcmV0dXJuIHVybF9yZXRyaWV2YWxzO1xufTtcblxuLyoqXG4gKiBPcGVucyBhIGRpYWxvZyBib3ggdG8gcHJlc2VudCB0aGUgdXNlciB3aXRoIHRoZSBkYXRhc2V0cyBhdmFpbGFibGVcbiAqIHRocm91Z2ggdGhlIENPUkdJUyBzZXJ2ZXIuIFRoaXMgcmVxdWlyZXMgYSBjYWxsLCBzbyB0aGlzIG1ldGhvZFxuICogY29tcGxldGVzIGFzeW5jaHJvbm91c2x5LiBUaGUgZGlhbG9nIGlzIGNvbXBvc2VkIG9mIGEgdGFibGUgd2l0aFxuICogYnV0dG9ucyB0byBsb2FkIHRoZSBkYXRhc2V0cyAoTW9yZSB0aGFuIG9uZSBkYXRhc2V0IGNhbiBiZSBsb2FkZWRcbiAqIGZyb20gd2l0aGluIHRoZSBkaWFsb2cgYXQgYSB0aW1lKS5cbiAqL1xuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUub3BlbkRpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwiaW1wb3J0RGF0YXNldHNcIikpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzLmltcG9ydERhdGFzZXRzO1xuICAgICAgICAkLmdldEpTT04ocm9vdCArIFwiaW5kZXguanNvblwiLCAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIE1ha2UgdXAgdGhlIEJvZHlcbiAgICAgICAgICAgIGxldCBkYXRhc2V0cyA9IGRhdGEuYmxvY2tweTtcbiAgICAgICAgICAgIGxldCBkb2N1bWVudGF0aW9uID0gcm9vdCtcImJsb2NrcHkvaW5kZXguaHRtbFwiO1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gJChgPHA+RG9jdW1lbnRhdGlvbiBpcyBhdmFpbGFibGUgYXQgPGEgaHJlZj0nJHtkb2N1bWVudGF0aW9ufScgdGFyZ2V0PV9ibGFuaz51cmw8L2E+PC9wPmApO1xuICAgICAgICAgICAgbGV0IGJvZHkgPSAkKFwiPHRhYmxlPjwvdGFibGU+XCIsIHtcImNsYXNzXCI6IFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc20gdGFibGUtc3RyaXBlZFwifSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhc2V0cykuc29ydCgpLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzbHVnZ2VkTmFtZSA9IHNsdWcoZGF0YXNldHNbbmFtZV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlTmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS10b2dnbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPkxvYWQ8L2J1dHRvbj4nKTtcbiAgICAgICAgICAgICAgICBsZXQgaW1nU3JjID0gcm9vdCtcIi4uL2ltYWdlcy9kYXRhc2V0cy9cIituYW1lK1wiLWljb24ucG5nXCI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkRGF0YXNldHMuaW5kZXhPZihzbHVnZ2VkTmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25Mb2FkZWQoYnRuKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidG4uY2xpY2soICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0RGF0YXNldChzbHVnZ2VkTmFtZSwgXCJEYXRhIC0gXCIgKyBkYXRhc2V0c1tuYW1lXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25Mb2FkZWQoYnRuKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vbGV0IGltZyA9IGA8aW1nIHNyYz0nJHtpbWdTcmN9JyBjbGFzcz1cImNvcmdpcy1pY29uXCI+YDtcbiAgICAgICAgICAgICAgICAkKFwiPHRyPjwvdHI+XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vLmFwcGVuZCgkKFwiPHRkPlwiICsgaW1nICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+XCIgKyBkYXRhc2V0c1tuYW1lXS5vdmVydmlldyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD48L3RkPlwiKS5hcHBlbmQoYnRuKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZFRvKHN0YXJ0KTtcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIGFjdHVhbCBkaWFsb2dcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5zaG93KFwiSW1wb3J0IERhdGFzZXRzXCIsIHN0YXJ0LCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2ODE3ODEzMzE3NFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY4MTc4MTMzMTIzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL2FjYmFydC9Qcm9qZWN0cy9ibG9ja3B5LWVkdS9ibG9ja3B5L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIi4uL1wiLFwiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIFRPRE86IER5YW5taWNhbGx5IHBvcHVsYXRlIGFyaWEtbGFiZWxsZWRieSBpbiB0aGlzIGFuZCBvdGhlciBwbGFjZXNcblxuZXhwb3J0IGxldCBESUFMT0dfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LWRpYWxvZyBtb2RhbCBoaWRkZW4nXG4gICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgIGFyaWEtbGFiZWw9J0RpYWxvZydcbiAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1kaWFsb2cgbW9kYWwtbGcnIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtY29udGVudCcgcm9sZT0ncmVnaW9uJyBhcmlhLWxhYmVsPSdEaWFsb2cgY29udGVudCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPSdtb2RhbC10aXRsZSc+RHluYW1pYyBDb250ZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdtb2RhbCcgYXJpYS1oaWRkZW49J3RydWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtYm9keScgc3R5bGU9J3dpZHRoOjEwMCU7IGhlaWdodDo0MDBweDsgd2hpdGUtc3BhY2U6cHJlLXdyYXAnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWZvb3Rlcic+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi13aGl0ZScgZGF0YS1kaXNtaXNzPSdtb2RhbCc+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuXG4vKipcbiAqIEEgdXRpbGl0eSBvYmplY3QgZm9yIHF1aWNrbHkgYW5kIGNvbnZlbmllbnRseSBnZW5lcmF0aW5nIGRpYWxvZyBib3hlcy5cbiAqIFVuZm9ydHVuYXRlbHksIHRoaXMgZG9lc24ndCBkeW5hbWljYWxseSBjcmVhdGUgbmV3IGJveGVzOyBpdCByZXVzZXMgdGhlIHNhbWUgb25lXG4gKiBvdmVyIGFuZCBvdmVyIGFnYWluLiBJdCB0dXJucyBvdXQgZHluYW1pY2FsbHkgZ2VuZXJhdGluZyBuZXcgZGlhbG9nIGJveGVzXG4gKiBpcyBhIHBhaW4hIFNvIHdlIGNhbid0IHN0YWNrIHRoZW0uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeURpYWxvZ31cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5RGlhbG9nKG1haW4sIHRhZykge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICB0aGlzLnRpdGxlVGFnID0gdGFnLmZpbmQoXCIubW9kYWwtdGl0bGVcIik7XG4gICAgdGhpcy5ib2R5VGFnID0gdGFnLmZpbmQoXCIubW9kYWwtYm9keVwiKTtcbn1cblxuLyoqXG4gKiBBIHNpbXBsZSBleHRlcm5hbGx5IGF2YWlsYWJsZSBmdW5jdGlvbiBmb3IgcG9wcGluZyB1cCBhIGRpYWxvZ1xuICogbWVzc2FnZS4gVGhpcyBtZW51IHdpbGwgYmUgZHJhZ2dhYmxlIGJ5IGl0cyB0aXRsZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIG1lc3NhZ2UgZGlhbG9nLiBDYW4gaGF2ZSBIVE1MLlxuICogQHBhcmFtIHtTdHJpbmd9IGJvZHkgLSBUaGUgYm9keSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmNsb3NlIC0gQSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiB0aGUgdXNlciBjbG9zZXMgdGhlIGRpYWxvZy5cbiAqL1xuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICh0aXRsZSwgYm9keSwgb25jbG9zZSkge1xuICAgIHRoaXMudGl0bGVUYWcuaHRtbCh0aXRsZSk7XG4gICAgdGhpcy5ib2R5VGFnLmh0bWwoYm9keSk7XG4gICAgdGhpcy50YWcubW9kYWwoXCJzaG93XCIpO1xuICAgIHRoaXMudGFnLmRyYWdnYWJsZSh7XG4gICAgICAgIFwiaGFuZGxlXCI6IFwiLm1vZGFsLXRpdGxlXCJcbiAgICB9KTtcblxuICAgIHRoaXMudGFnLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChvbmNsb3NlICE9PSB1bmRlZmluZWQgJiYgb25jbG9zZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgb25jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2hvdyhcIkVycm9yIExvYWRpbmcgQXNzaWdubWVudFwiLCBgQmxvY2tQeSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBhc3NpZ25tZW50Ljxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gLCk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5TQ1JFRU5TSE9UX0JMT0NLUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPXG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBVcGRhdGluZyBTdWJtaXNzaW9uIFN0YXR1c1wiLCBgQmxvY2tQeSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSB1cGRhdGluZyB5b3VyIHN1Ym1pc3Npb24gc3RhdHVzLjxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gKTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLkVSUk9SX0xPQURJTkdfSElTVE9SWSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBMb2FkaW5nIEhpc3RvcnlcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB5b3VyIGhpc3RvcnkuPGJyPlxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLmApO1xufTtcbiIsImltcG9ydCB7RWRpdG9yc30gZnJvbSBcIi4uL2VkaXRvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlKG1vZGVsLCBldmVudCkge1xyXG4gICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgbGV0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSA9PlxyXG4gICAgICAgIG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLnVwbG9hZEZpbGUoZSlcclxuICAgICk7XHJcbiAgICBmaWxlUmVhZGVyLmZpbGVOYW1lID0gZmlsZXNbMF0ubmFtZTtcclxuICAgIGZpbGVSZWFkZXIucmVhZEFzVGV4dChmaWxlc1swXSk7XHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2dpZnkodGV4dCkge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCB7bmFtZSwgZXh0ZW5zaW9uLCBjb250ZW50cywgbWltZXR5cGV9ID0gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAvLyBNYWtlIHNhZmVcclxuICAgIG5hbWUgPSBzbHVnZ2lmeShuYW1lKTtcclxuICAgIG5hbWUgPSBuYW1lICsgZXh0ZW5zaW9uO1xyXG4gICAgLy8gTWFrZSB0aGUgZGF0YSBkb3dubG9hZCBhcyBhIGZpbGVcclxuICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRzXSwge3R5cGU6IG1pbWV0eXBlfSk7XHJcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIG5hbWUpO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGxldCB0ZW1wb3JhcnlEb3dubG9hZExpbmsgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5RG93bmxvYWRMaW5rKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0gPSBtYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLmRlbGV0ZUZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlRGVsZXRlZCgpIHtcclxuICAgICAgICAvLyBUT0RPOiBTd2l0Y2ggdG8gdGhlIHByZXZpb3VzIGZpbGUgaW5zdGVhZCBvZiBhIGRlZmF1bHQgZmlsZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZVVwZGF0ZWQoZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lID09PSB0aGlzLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy50cmFja0N1cnJlbnRGaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrQ3VycmVudEZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLndhdGNoRmlsZSh0aGlzLmZpbGVuYW1lLCB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQ6IHRoaXMub25GaWxlVXBkYXRlZC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBkZWxldGVkOiB0aGlzLm9uRmlsZURlbGV0ZWQuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbmV3RmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5maWxlID0gdGhpcy5maWxlU3lzdGVtLmdldEZpbGUobmV3RmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuZXdGaWxlbmFtZSAtIHRoZSBmaWxlbmFtZSB0aGF0IHRoZSBvdGhlciBlZGl0b3Igd2lsbCBiZSBzd2l0Y2hpbmcgdG9cclxuICAgICAqIEBwYXJhbSBvbGRFZGl0b3JcclxuICAgICAqIEBwYXJhbSBuZXdFZGl0b3JcclxuICAgICAqL1xyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uc3RvcFdhdGNoaW5nRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGZpbGVuYW1lLm5hbWUsXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbjogZmlsZW5hbWUudHlwZSxcclxuICAgICAgICAgICAgY29udGVudHM6IHRoaXMuZmlsZS5oYW5kbGUoKSxcclxuICAgICAgICAgICAgbWltZXR5cGU6IFwidGV4dC9wbGFpblwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcIi4vcHl0aG9uXCI7XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTID0gW1xyXG4gICAgW1widG9vbGJveExldmVsXCIsIFwidG9vbGJveF9sZXZlbFwiLCBcIm5vcm1hbFwiLCBcInRvb2xib3hcIiwgXCJJTkNPTVBMRVRFOiBXaGF0IGxldmVsIG9mIHRvb2xib3ggdG8gcHJlc2VudCB0byB0aGUgdXNlciAoaGlkaW5nIGFuZCBzaG93aW5nIGNhdGVnb3JpZXMpLlwiXSxcclxuICAgIFtcInN0YXJ0Vmlld1wiLCBcInN0YXJ0X3ZpZXdcIiwgRGlzcGxheU1vZGVzLlNQTElULCBEaXNwbGF5TW9kZXMsIFwiVGhlIFB5dGhvbiBlZGl0b3IgbW9kZSB0byBzdGFydCBpbiB3aGVuIHRoZSBzdHVkZW50IHN0YXJ0cyB0aGUgcHJvYmxlbS5cIl0sXHJcbiAgICBbXCJkYXRhc2V0c1wiLCBcImRhdGFzZXRzXCIsIFwiXCIsIFwic3RyaW5nXCIsIFwiVGhlIGN1cnJlbnQgbGlzdCBvZiBkYXRhc2V0cyBhdmFpbGFibGUgb24gbG9hZCBhcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXCJdLFxyXG4gICAgW1wiZGlzYWJsZVRpbWVvdXRcIiwgXCJkaXNhYmxlX3RpbWVvdXRcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgY29kZSBpcyBhbGxvd2VkIHRvIHJ1biB3aXRob3V0IHRpbWVvdXRzIChwb3RlbnRpYWxseSBhbGxvd2luZyBpbmZpbml0ZSBsb29wcykuXCJdLFxyXG4gICAgW1wiaXNQYXJzb25zXCIsIFwiaXNfcGFyc29uc1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGlzIGlzIGEgcGFyc29uJ3Mgc3R5bGUgcXVlc3Rpb24gKGp1bWJsZWQpLlwiXSxcclxuICAgIFtcImRpc2FibGVGZWVkYmFja1wiLCBcImRpc2FibGVfZmVlZGJhY2tcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gbm8gaW5zdHJ1Y3RvciBzY3JpcHRzIGFyZSBydW4gKGUuZy4sIG9uX3J1biBhbmQgb25fZXZhbCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZVRpZmFcIiwgXCJkaXNhYmxlX3RpZmFcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gZG8gbm90IGF1dG9tYXRpY2FsbHkgcnVuIFRpZmEgKHdoaWNoIGNhbiBiZSBzbG93KS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVHJhY2VcIiwgXCJkaXNhYmxlX3RyYWNlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cyBjb2RlIHdpbGwgbm90IGhhdmUgaXRzIGV4ZWN1dGlvbiB0cmFjZWQgKG5vIHZhcmlhYmxlcyByZWNvcmRlZCwgbm8gY292ZXJhZ2UgdHJhY2tlZCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUVkaXRcIiwgXCJjYW5fZWRpdFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZWRpdGFibGUgYXQgYWxsLlwiXSxcclxuICAgIFtcImRpc2FibGVCbG9ja3NcIiwgXCJjYW5fYmxvY2tzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50IGNhbm5vdCBlZGl0IHRoZSBibG9jayBpbnRlcmZhY2UgKGFsdGhvdWdoIGl0IGlzIHZpc2libGUpLlwiXSxcclxuICAgIFtcIm9ubHlJbnRlcmFjdGl2ZVwiLCBcIm9ubHlfaW50ZXJhY3RpdmVcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4sIHRoZSBwcm9ncmFtIGlzIGF1dG9tYXRpY2FsbHkgcnVuLCBhbmQgdGhlbiB0aGUgY29uc29sZSBlbnRlcnMgRXZhbCBtb2RlIChpbnRlcmFjdGl2ZSkuXCJdLFxyXG4gICAgW1wib25seVVwbG9hZHNcIiwgXCJvbmx5X3VwbG9hZHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZGlyZWN0bHkgZWRpdGFibGUgKHRoZXkgd2lsbCBoYXZlIHRvIHVwbG9hZCBzdWJtaXNzaW9ucykuXCJdLFxyXG4gICAgLy8gV2hhdCBtZW51cy9mZWVkYmFjayB0byBzaG93IGFuZCBoaWRlXHJcbiAgICBbXCJoaWRlRmlsZXNcIiwgXCJoaWRlX2ZpbGVzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgd2lsbCBub3Qgc2VlIHRoZSBWaWV3IEZpbGVzIHRvb2xiYXIuXCJdLFxyXG4gICAgW1wiaGlkZVF1ZXVlZElucHV0c1wiLCBcImhpZGVfcXVldWVkX2lucHV0c1wiLCB0cnVlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiB1bmNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNhbiBhY2Nlc3MgdGhlIHF1ZXVlZCBpbnB1dHMgYm94IChtYWtlcyByZXBlYXRlZCBkZWJ1Z2dpbmcgZWFzaWVyIGZvciB0aGUgaW5wdXQgZnVuY3Rpb24pLlwiXSxcclxuICAgIFtcImhpZGVFZGl0b3JzXCIsIFwiaGlkZV9lZGl0b3JzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIGFsbCBvZiB0aGUgZWRpdG9ycyBhcmUgaGlkZGVuLlwiXSxcclxuICAgIFtcImhpZGVBbGxcIiwgXCJoaWRlX2FsbFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlbiB0aGUgZW50aXJlIGludGVyZmFjZSBpcyBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUV2YWx1YXRlXCIsIFwiaGlkZV9ldmFsdWF0ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgRXZhbHVhdGUgYnV0dG9uIGlzIG5vdCBzaG93biBvbiB0aGUgY29uc29sZS5cIl0sXHJcbiAgICBbXCJoaWRlSW1wb3J0RGF0YXNldHNCdXR0b25cIiwgXCJoaWRlX2ltcG9ydF9kYXRhc2V0c19idXR0b25cIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyBjYW5ub3Qgc2VlIHRoZSBpbXBvcnQgZGF0YXNldHMgYnV0dG9uLlwiXSxcclxuICAgIFtcImhpZGVJbXBvcnRTdGF0ZW1lbnRzXCIsIFwiaGlkZV9pbXBvcnRfc3RhdGVtZW50c1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgY2VydGFpbiBraW5kcyBvZiBpbXBvcnQgc3RhdGVtZW50cyAobWF0cGxvdGxpYiwgdHVydGxlLCBkYXRhc2V0cykgYXJlIG5vdCBzaG93biBpbiB0aGUgYmxvY2sgaW50ZXJmYWNlLlwiXSxcclxuICAgIFtcImhpZGVDb3ZlcmFnZUJ1dHRvblwiLCBcImhpZGVfY292ZXJhZ2VfYnV0dG9uXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCB0aGUgY292ZXJhZ2UgYnV0dG9uIGlzIG5vdCBzaG93bi5cIl0sXHJcbiAgICBbXCJzYXZlVHVydGxlT3V0cHV0XCIsIFwic2F2ZV90dXJ0bGVfb3V0cHV0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHR1cnRsZSBvdXRwdXQgaXMgc2F2ZWQgd2hlbmV2ZXIgdGhlIHByb2dyYW0gdXNlcyBpdC5cIl0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uKG5hbWUpIHtcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IEFTU0lHTk1FTlRfU0VUVElOR1MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoQVNTSUdOTUVOVF9TRVRUSU5HU1tpXVswXSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQVNTSUdOTUVOVF9TRVRUSU5HU1tpXVs0XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZCBmb3IgZmllbGRcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZVN0YXJ0Vmlld1RhYihuYW1lLCBpY29uLCBtb2RlKSB7XHJcbiAgICByZXR1cm4gYDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBhc3NpZ25tZW50LnNldHRpbmdzLnN0YXJ0VmlldygpID09PSAnJHttb2RlfSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogYXNzaWdubWVudC5zZXR0aW5ncy5zdGFydFZpZXcuYmluZCgkZGF0YSwgJyR7bW9kZX0nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS0ke2ljb259Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktc3RhcnQtdmlldy1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiAke25hbWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+YDtcclxufVxyXG5cclxuY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HU19CT09MRUFOX0NPTVBPTkVOVFNfSFRNTCA9IEFTU0lHTk1FTlRfU0VUVElOR1NcclxuICAgIC8vIE9ubHkgaGFuZGxlIHRoZSBzaW1wbGUgYm9vbGVhbnMgdGhpcyB3YXlcclxuICAgIC5maWx0ZXIoKHNldHRpbmcpID0+IHNldHRpbmdbM10gPT09IFwiYm9vbFwiKVxyXG4gICAgLm1hcCgoc2V0dGluZykgPT4ge1xyXG4gICAgICAgIGxldCBwcmV0dHlOYW1lID0gc2V0dGluZ1sxXS5zcGxpdChcIl9cIikubWFwKHdvcmQ9Pih3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3dvcmQuc2xpY2UoMSkpKS5qb2luKFwiIFwiKTtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtJHtzZXR0aW5nWzBdfVwiPiR7cHJldHR5TmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtJHtzZXR0aW5nWzBdfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5zZXR0aW5ncy4ke3NldHRpbmdbMF19XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7c2V0dGluZ1s0XX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9KS5qb2luKFwiXFxuXFxuXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1NfRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS12aWV3LXNldHRpbmdzXCI+XHJcbiAgICBcclxuICAgIDxmb3JtPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuc2V0dGluZ3Muc2F2ZVwiPlNhdmUgY2hhbmdlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1uYW1lXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1uYW1lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50Lm5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIHN0dWRlbnQtZmFjaW5nIG5hbWUgb2YgdGhlIGFzc2lnbm1lbnQuIEFzc2lnbm1lbnRzIHdpdGhpbiBhIGdyb3VwIGFyZSBvcmRlcmVkIGFscGhhYmV0aWNhbGx5XHJcbiAgICAgICAgICAgICAgICAgICAgYnkgdGhlaXIgbmFtZSwgc28geW91IG1heSB3YW50IHRvIHVzZSBhIG5hbWluZyBzY2hlbWUgbGlrZSBcIiM0My41KSBXaGF0ZXZlclwiLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXVybFwiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPlVSTDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy11cmxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQudXJsXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBjb3Vyc2UtdW5pcXVlIFVSTCB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbnNpc3RlbnRseSByZWZlciB0byB0aGlzIGFzc2lnbm1lbnQuIFxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1wdWJsaWNcIj5QdWJsaWM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5wdWJsaWNcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSWYgbm90IHB1YmxpYywgdXNlcnMgb3V0c2lkZSBvZiB0aGUgY291cnNlIHdpbGwgbm90IGJlIGFibGUgdG8gc2VlIHRoZSBhc3NpZ25tZW50IGluIGNvdXJzZSBsaXN0aW5ncy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtaGlkZGVuXCI+SGlkZGVuOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1oaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQuaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIGhpZGRlbiwgc3R1ZGVudHMgd2lsbCBub3QgYmUgYWJsZSB0byBzZWUgdGhlaXIgZ3JhZGUgd2hpbGUgd29ya2luZyBvbiB0aGUgYXNzaWdubWVudC5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtcmV2aWV3ZWRcIj5SZXZpZXdlZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtcmV2aWV3ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQucmV2aWV3ZWRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSWYgcmV2aWV3ZWQsIHRoZSBhc3NpZ25tZW50IGNhbiBiZSBjb21tZW50ZWQgdXBvbiBhbmQgcmVncmFkZWQgYnkgdGhlIHN0YWZmIGFmdGVyd2FyZHMuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCI+U3RhcnRpbmcgVmlldzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGUgbXItMlwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIkJsb2Nrc1wiLCBcInRoLWxhcmdlXCIsIERpc3BsYXlNb2Rlcy5CTE9DSyl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiU3BsaXRcIiwgXCJjb2x1bW5zXCIsIERpc3BsYXlNb2Rlcy5TUExJVCl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiVGV4dFwiLCBcImFsaWduLWxlZnRcIiwgRGlzcGxheU1vZGVzLlRFWFQpfVxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z2V0RG9jdW1lbnRhdGlvbihcInN0YXJ0Vmlld1wiKX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1pcC1yYW5nZXNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5JUCBSYW5nZXM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtaXAtcmFuZ2VzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LmlwUmFuZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb3ZpZGUgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBJUCBBZGRyZXNzZXMgdGhhdCB3aWxsIGJlIGV4cGxpY2l0bHkgYWxsb3dlZC4gSWYgYmxhbmssXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbiBhbGwgYWRkcmVzc2VzIGFyZSBhbGxvd2VkLiBJZiBhbiBhZGRyZXNzIHN0YXJ0cyB3aXRoIDxjb2RlPl48L2NvZGU+IHRoZW4gaXQgaXQgaXMgZXhwbGljaXRseVxyXG4gICAgICAgICAgICAgICAgICAgIGJsYWNrbGlzdGVkLCBidXQgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBpbiB0dXJuIHdpdGggYSA8Y29kZT4hPC9jb2RlPi4gQWRkcmVzc2VzIGNhbiBhbHNvXHJcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSBhIGJpdCBtYXNrIHRvIGFsbG93IGEgcmFuZ2Ugb2YgYWRkcmVzc2VzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWRhdGFzZXRzXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+UHJlbG9hZGVkIERhdGFzZXRzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWRhdGFzZXRzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z2V0RG9jdW1lbnRhdGlvbihcImRhdGFzZXRzXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgJHtBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MfVxyXG4gICAgPC9mb3JtPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlQXNzaWdubWVudFNldHRpbmdzKG1vZGVsKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSB7fTtcclxuICAgIEFTU0lHTk1FTlRfU0VUVElOR1MuZm9yRWFjaChzZXR0aW5nID0+IHtcclxuICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdLCBkZWZhdWx0VmFsdWUgPSBzZXR0aW5nWzJdO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3NbY2xpZW50TmFtZV0oKTtcclxuICAgICAgICAvLyBPbmx5IHN0b3JlIHRoaXMgc2V0dGluZyBpZiBpdHMgZGlmZmVyZW50IGZyb20gdGhlIGRlZmF1bHRcclxuICAgICAgICBpZiAodmFsdWUgIT09IGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tzZXJ2ZXJOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwsIHNldHRpbmdzKSB7XHJcbiAgICBpZiAoc2V0dGluZ3MpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IEpTT04ucGFyc2Uoc2V0dGluZ3MpO1xyXG4gICAgICAgIEFTU0lHTk1FTlRfU0VUVElOR1MuZm9yRWFjaChzZXR0aW5nID0+IHtcclxuICAgICAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXTtcclxuICAgICAgICAgICAgaWYgKHNlcnZlck5hbWUgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3NbY2xpZW50TmFtZV0oc2V0dGluZ3Nbc2VydmVyTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5ncy5zdGFydF92aWV3KSB7XHJcbiAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZShzZXR0aW5ncy5zdGFydF92aWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwoY29uZmlndXJhdGlvbikge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge307XHJcbiAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXSwgZGVmYXVsdFZhbHVlID0gc2V0dGluZ1syXTtcclxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbltzZXJ2ZXJOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW2NsaWVudE5hbWVdID0ga28ub2JzZXJ2YWJsZShkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW2NsaWVudE5hbWVdID0ga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5zZXR0aW5ncy5cIitzZXJ2ZXJOYW1lXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbn1cclxuXHJcbmNsYXNzIEFzc2lnbm1lbnRTZXR0aW5nc1ZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgLy9UT0RPOiB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vVE9ETzogdGhpcy5jb2RlTWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IERvIHVwZGF0ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlLmhhbmRsZSh0aGlzLmNvZGVNaXJyb3IudmFsdWUoKSk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFVwZGF0ZVxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICAvL3RoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlXHJcbiAgICAgICAgLy90aGlzLmNvZGVNaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXNzaWdubWVudFNldHRpbmdzID0ge1xyXG4gICAgbmFtZTogXCJBc3NpZ25tZW50IFNldHRpbmdzXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IEFzc2lnbm1lbnRTZXR0aW5nc1ZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BUktET1dOX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwiYmxvY2tweS1lZGl0b3ItbWFya2Rvd25cIj48L3RleHRhcmVhPiAgICBcclxuYDtcclxuXHJcblxyXG5jbGFzcyBNYXJrZG93bkVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMubWRlID0gbmV3IEVhc3lNREUoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiB0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci1tYXJrZG93blwiKVswXSxcclxuICAgICAgICAgICAgYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb3JjZVN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogXCI1MDBweFwiLFxyXG4gICAgICAgICAgICAvLyBUT0RPOiBpbWFnZVVwbG9hZEZ1bmN0aW9uXHJcbiAgICAgICAgICAgIHJlbmRlcmluZ0NvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgY29kZVN5bnRheEhpZ2hsaWdodGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5kZW50V2l0aFRhYnM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0YWJTaXplOiA0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaC5iaW5kKHRoaXMubWRlLmNvZGVtaXJyb3IpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1kZS52YWx1ZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLm1kZS52YWx1ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1hcmtkb3duRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJNYXJrZG93blwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLm1kXCJdLFxyXG4gICAgY29uc3RydWN0b3I6IE1hcmtkb3duRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBNQVJLRE9XTl9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBUT0RPOiByZW5hbWUgZmlsZXMsIG1hbnVhbCBzYXZlLCB0YWdzLCBzYW1wbGVfc3VibWlzc2lvbnMsIG9uX2V2YWwsIG5vbi1idWlsdGluIGZpbGVzXHJcbiAqIFRPRE86IGltcG9ydCBkYXRhLCBoaXN0b3J5LCBydW4sIHVybF9kYXRhLCBhc3NpZ25tZW50X3NldHRpbmdzLCBwYXJzb25zX21vZGVcclxuICogVE9ETzogZGVsZXRlIGJlY29tZXMgXCJjbGVhclwiIGZvciBpbnN0cnVjdG9yIGZpbGVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBlbnVtIHtzdHJ9XHJcbiAqL1xyXG5pbXBvcnQge0Fic3RyYWN0RWRpdG9yLCBzbHVnZ2lmeX0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7SElTVE9SWV9UT09MQkFSX0hUTUx9IGZyb20gXCIuLi9oaXN0b3J5XCI7XHJcblxyXG5leHBvcnQgbGV0IERpc3BsYXlNb2RlcyA9IHtcclxuICAgIEJMT0NLOiBcImJsb2NrXCIsXHJcbiAgICBTUExJVDogXCJzcGxpdFwiLFxyXG4gICAgVEVYVDogXCJ0ZXh0XCJcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1ha2VUYWIobmFtZSwgaWNvbiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi51cGRhdGVNb2RlLmJpbmQoJGRhdGEsICcke21vZGV9JylcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtJHtpY29ufSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LW1vZGUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gJHtuYW1lfVxyXG4gICAgICAgICAgICA8L2xhYmVsPmA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQWVRIT05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1weXRob24tdG9vbGJhciBjb2wtbWQtMTIgYnRuLXRvb2xiYXJcIlxyXG4gICAgICAgICByb2xlPVwidG9vbGJhclwiIGFyaWEtbGFiZWw9XCJQeXRob24gVG9vbGJhclwiPlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJ1biBHcm91cFwiPiAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBibG9ja3B5LXJ1blwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZXhlY3V0ZS5ydW5cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXBsYXlcIj48L3NwYW4+IFJ1blxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlIG1yLTJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgJHttYWtlVGFiKFwiQmxvY2tzXCIsIFwidGgtbGFyZ2VcIiwgRGlzcGxheU1vZGVzLkJMT0NLKX1cclxuICAgICAgICAgICAgJHttYWtlVGFiKFwiU3BsaXRcIiwgXCJjb2x1bW5zXCIsIERpc3BsYXlNb2Rlcy5TUExJVCl9XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIlRleHRcIiwgXCJhbGlnbi1sZWZ0XCIsIERpc3BsYXlNb2Rlcy5URVhUKX1cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVzZXQgR3JvdXBcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucmVzZXRcIj5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zeW5jXCI+PC9zcGFuPiBSZXNldFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJJbXBvcnQgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmltcG9ydERhdGFzZXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWNsb3VkLWRvd25sb2FkLWFsdFwiPjwvc3Bhbj4gSW1wb3J0IGRhdGFzZXRzXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1maWxlLXVwbG9hZFwiPjwvc3Bhbj4gVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYmxvY2tweS10b29sYmFyLXVwbG9hZFwiIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImV2ZW50OiB7Y2hhbmdlOiB1aS5lZGl0b3JzLnVwbG9hZH1cIj5cclxuICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGUgZHJvcGRvd24tdG9nZ2xlLXNwbGl0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBEcm9wZG93bjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWl0ZW0gYmxvY2tweS10b29sYmFyLWRvd25sb2FkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5kb3dubG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZG93bmxvYWQnPjwvc3Bhbj4gRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiSGlzdG9yeSBHcm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnRvZ2dsZUhpc3RvcnlNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHVpLmVkaXRvcnMucHl0aG9uLmlzSGlzdG9yeUF2YWlsYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiB7IGFjdGl2ZTogZGlzcGxheS5oaXN0b3J5TW9kZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiB7ICdhcmlhLXByZXNzZWQnOiBkaXNwbGF5Lmhpc3RvcnlNb2RlIH1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWhpc3RvcnlcIj48L3NwYW4+IEhpc3RvcnlcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDwhLS0gRnVsbHkgZnVuY3Rpb25hbCwgYnV0IGEgbGl0dGxlIHRvby4uIEludmFzaXZlIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRnVsbHNjcmVlbiBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IGRpc3BsYXkucHl0aG9uTW9kZSgpID09PSAndGV4dCdcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5mdWxsc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1leHBhbmQtYXJyb3dzLWFsdFwiPjwvc3Bhbj4gRnVsbHNjcmVlblxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAtLT5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJTYXZlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5TYXZlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc2F2ZVwiPjwvc3Bhbj4gU2F2ZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkRlbGV0ZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuRGVsZXRlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L3NwYW4+IERlbGV0ZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlbmFtZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuUmVuYW1lXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtc2lnbmF0dXJlXCI+PC9zcGFuPiBSZW5hbWVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgJHtISVNUT1JZX1RPT0xCQVJfSFRNTH1cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktcHl0aG9uLWJsb2NrbWlycm9yXCJcclxuICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLm1lbnUuaXNTdWJtaXR0ZWRcIj5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0SXB5bmJUb1B5dGhvbihjb2RlKSB7XHJcbiAgICBsZXQgaXB5bmIgPSBKU09OLnBhcnNlKGNvZGUpO1xyXG4gICAgbGV0IGlzVXNhYmxlID0gZnVuY3Rpb24oY2VsbCkge1xyXG4gICAgICAgIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuc291cmNlLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICFjZWxsLnNvdXJjZVswXS5zdGFydHNXaXRoKFwiJVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5jZWxsX3R5cGUgPT09IFwibWFya2Rvd25cIiB8fFxyXG4gICAgICAgICAgICAgICAgY2VsbC5jZWxsX3R5cGUgPT09IFwicmF3XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxldCBtYWtlUHl0aG9uID0gZnVuY3Rpb24oY2VsbCkge1xyXG4gICAgICAgIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuc291cmNlLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJtYXJrZG93blwiIHx8XHJcbiAgICAgICAgICAgIGNlbGwuY2VsbF90eXBlID09PSBcInJhd1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIicnJ1wiK2NlbGwuc291cmNlLmpvaW4oXCJcXG5cIikrXCInJydcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGlweW5iLmNlbGxzLmZpbHRlcihpc1VzYWJsZSkubWFwKG1ha2VQeXRob24pLmpvaW4oXCJcXG5cIik7XHJcbn1cclxuXHJcbmNsYXNzIFB5dGhvbkVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcuZmluZChcIi5ibG9ja3B5LXB5dGhvbi1ibG9ja21pcnJvclwiKSk7XHJcbiAgICAgICAgdGhpcy5ibSA9IG5ldyBCbG9ja01pcnJvcih7XHJcbiAgICAgICAgICAgIFwiY29udGFpbmVyXCI6IHRoaXMudGFnWzBdLFxyXG4gICAgICAgICAgICBcInJ1blwiOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLnJ1bi5iaW5kKG1haW4uY29tcG9uZW50cy5lbmdpbmUpLFxyXG4gICAgICAgICAgICBcInNraXBTa3VscHRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJibG9ja2x5TWVkaWFQYXRoXCI6IG1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5ibG9ja2x5UGF0aCxcclxuICAgICAgICAgICAgLy8naGVpZ2h0JzogJzIwMDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFrZVN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9sZFB5dGhvbk1vZGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlndXJlRXh0cmFCbG9ja2x5KCkge1xyXG4gICAgICAgIHRoaXMuYm0uYmxvY2tFZGl0b3Iud29ya3NwYWNlLmNvbmZpZ3VyZUNvbnRleHRNZW51ID0gKG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNjcmVlbnNob3RcIixcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuU0NSRUVOU0hPVF9CTE9DS1NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgbGV0IG9sZEZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChuZXdGaWxlbmFtZSAhPT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBpZiAob2xkRmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2xkUHl0aG9uTW9kZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKERpc3BsYXlNb2Rlcy5URVhUKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKHRoaXMub2xkUHl0aG9uTW9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG5cclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudEJNTGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYm0uYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5jdXJyZW50Qk1MaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIGlmIChuZXdGaWxlbmFtZSAhPT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICB0aGlzLmJtLmlzUGFyc29ucyA9ICgpID0+IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uaXNQYXJzb25zID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaXNQYXJzb25zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxpbmVzRXJyb3Iuc3Vic2NyaWJlKChsaW5lcykgPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ibS5zZXRIaWdobGlnaHRlZExpbmVzKGxpbmVzLCBcImVkaXRvci1lcnJvci1saW5lXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5saW5lc1VuY292ZXJlZC5zdWJzY3JpYmUoKGxpbmVzKSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibS5zZXRIaWdobGlnaHRlZExpbmVzKGxpbmVzLCBcImVkaXRvci11bmNvdmVyZWQtbGluZVwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vdGhpcy5ibS5ibG9ja0VkaXRvci53b3Jrc3BhY2UucmVuZGVyKCk7XHJcbiAgICAgICAgLy90aGlzLmJtLnJlZnJlc2goKTtcclxuICAgICAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IHdoeSB0aGlzIGRvZXNuJ3QgZW5kIHVwIGxvb2tpbmcgcmlnaHQgKGdvIHRvIGEgZGlmZmVyZW50IGVkaXRvciwgY29tZSBiYWNrLCBhbmQgaXQnbGwgYmUgc3F1aXNoZWQpXHJcbiAgICAgICAgLy90aGlzLmJtLnJlZnJlc2goKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYm0ucmVmcmVzaCgpLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICBpZiAobmV3Q29udGVudHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50cyA9IHRoaXMuZmlsZS5oYW5kbGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIERvZXNuJ3QgbWF0dGVyLCBmaWxlIHdhcyBhbHJlYWR5IHNodXQgZG93bi5cclxuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnRzID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3Q29udGVudHMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gV2UncmUgY2xvc2luZyB0aGlzIGZpbGVcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5kZWxldGVGaWxlTG9jYWxseV8odGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJtLnNldENvZGUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmJtLmNsZWFySGlnaGxpZ2h0ZWRMaW5lcygpO1xyXG5cclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLmJtLmdldENvZGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5ibS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLmN1cnJlbnRCTUxpc3RlbmVyKTtcclxuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xlYXJMaW5lU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJMaW5lU3Vic2NyaXB0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmJtLmNsZWFySGlnaGxpZ2h0ZWRMaW5lcygpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWtlU3Vic2NyaXB0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmJtLnNldE1vZGUodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlLnN1YnNjcmliZShtb2RlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRNb2RlKG1vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlYWRPbmx5KGlzUmVhZE9ubHkpIHtcclxuICAgICAgICB0aGlzLnJlYWRPbmx5ID0gaXNSZWFkT25seTtcclxuICAgICAgICB0aGlzLmJtLnNldFJlYWRPbmx5KGlzUmVhZE9ubHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIGlmIChmaWxlbmFtZS5lbmRzV2l0aChcIi5pcHluYlwiKSkge1xyXG4gICAgICAgICAgICBjb2RlID0gY29udmVydElweW5iVG9QeXRob24oY29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5VcGxvYWRcIiwgXCJcIiwgXCJcIiwgY29kZSwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlLmhhbmRsZShjb2RlKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuKCk7XHJcbiAgICAgICAgLy8gVE9ETzogUnVuIGNvZGVcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHN1cGVyLmRvd25sb2FkRmlsZSgpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubmFtZSA9PT0gXCJhbnN3ZXJcIiAmJiByZXN1bHQuZXh0ZW5zaW9uID09PSBcIi5weVwiKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gc2x1Z2dpZnkodGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQubmFtZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0Lm1pbWV0eXBlID0gXCJ0ZXh0L3gtcHl0aG9uXCI7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLkRvd25sb2FkXCIsIFwiXCIsIFwiXCIsIFwiXCIsIHJlc3VsdC5uYW1lKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFB5dGhvbkVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiUHl0aG9uXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIucHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogUHl0aG9uRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBQWVRIT05fRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUQUdTX0VESVRPUl9IVE1MID0gYFxyXG5DcmVhdGUgbmV3XHJcbkltcG9ydCBieSBuYW1lXHJcbkZpbmQgYnkgb3duZXIvY291cnNlL2tpbmRcclxuXHJcblRhZ3M6XHJcbiAgICBEYXRhOlxyXG4gICAgICAgIE5hbWVcclxuICAgICAgICBLaW5kXHJcbiAgICAgICAgTGV2ZWxcclxuICAgICAgICBWZXJzaW9uXHJcbiAgICAgICAgRGVzY3JpcHRpb25cclxuICAgIENvbnRyb2xzOlxyXG4gICAgICAgIEVkaXRcclxuICAgICAgICBSZW1vdmVcclxuICAgICAgICBEZWxldGUgXHJcbmA7XHJcblxyXG5jbGFzcyBUYWdzRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRhZ3NcIikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFnc0VkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGFnc1wiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiIXRhZ3MuYmxvY2tweVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUYWdzRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBUQUdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEVYVF9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXY+XHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci10ZXh0XCI+PC90ZXh0YXJlYT5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY2xhc3MgVGV4dEVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRleHRcIilbMF0sIHtcclxuICAgICAgICAgICAgc2hvd0N1cnNvcldoZW5TZWxlY3Rpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICBmaXJzdExpbmVOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgIGluZGVudFVuaXQ6IDQsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgICAgIGluZGVudFdpdGhUYWJzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXh0cmFLZXlzOiB7XHJcbiAgICAgICAgICAgICAgICBcIlRhYlwiOiBcImluZGVudE1vcmVcIixcclxuICAgICAgICAgICAgICAgIFwiU2hpZnQtVGFiXCI6IFwiaW5kZW50TGVzc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJFc2NcIjogZnVuY3Rpb24gKGNtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY20uc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY20uZGlzcGxheS5pbnB1dC5ibHVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiRjExXCI6IGZ1bmN0aW9uIChjbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNtLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgIWNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLmNvZGVNaXJyb3IucmVmcmVzaC5iaW5kKHRoaXMuY29kZU1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRWYWx1ZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLmNvZGVNaXJyb3IudmFsdWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRleHRcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi50eHRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGV4dEVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEVYVF9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBFZGl0b3JzIGFyZSBpbmZlcnJlZCBmcm9tIEZpbGVuYW1lcy5cclxuICpcclxuICogVGhlIGVkaXRvciBpcyBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uOlxyXG4gKiAgLmJsb2NrcHk6IFNwZWNpYWwgZWRpdG9yICh3aWxsIGJlIGNob3NlbiBieSBmaWxlbmFtZSlcclxuICogIC5weTogUHl0aG9uIEVkaXRvclxyXG4gKiAgLm1kOiBNYXJrZG93biBFZGl0b3JcclxuICogIC50eHQ6IFRleHQgRWRpdG9yIChhbHNvIHVzZWQgZm9yIG90aGVyIHR5cGVzKVxyXG4gKiAgLnBlbWw6IFBFTUwgRWRpdG9yXHJcbiAqICAucG5nLCAuZ2lmLCAuanBlZywgLmpwZywgLmJtcDogSW1hZ2UgRWRpdG9yXHJcbiAqICAuanNvbjogSlNPTiBFZGl0b3JcclxuICogIC55YW1sOiBZQU1MIEVkaXRvclxyXG4gKi9cclxuXHJcbmltcG9ydCB7UHl0aG9uRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvcHl0aG9uXCI7XHJcbmltcG9ydCB7VGV4dEVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RleHRcIjtcclxuaW1wb3J0IHtBc3NpZ25tZW50U2V0dGluZ3N9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7VGFnc0VkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RhZ3NcIjtcclxuaW1wb3J0IHtNYXJrZG93bkVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL21hcmtkb3duXCI7XHJcblxyXG4vKipcclxuICogVGhlIGRpZmZlcmVudCBwb3NzaWJsZSBlZGl0b3JzIGF2YWlsYWJsZVxyXG4gKiBAZW51bSB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGxldCBFZGl0b3JzRW51bSA9IHtcclxuICAgIFNVQk1JU1NJT046IFwic3VibWlzc2lvblwiLFxyXG4gICAgQVNTSUdOTUVOVDogXCJhc3NpZ25tZW50XCIsXHJcbiAgICBJTlNUUlVDVElPTlM6IFwiaW5zdHJ1Y3Rpb25zXCIsXHJcbiAgICBPTl9SVU46IFwib25fcnVuXCIsXHJcbiAgICBPTl9DSEFOR0U6IFwib25fY2hhbmdlXCIsXHJcbiAgICBPTl9FVkFMOiBcIm9uX2V2YWxcIixcclxuICAgIFNUQVJUSU5HX0NPREU6IFwic3RhcnRpbmdfY29kZVwiLFxyXG4gICAgU0FNUExFX1NVQk1JU1NJT05TOiBcInNhbXBsZV9zdWJtaXNzaW9uc1wiLFxyXG4gICAgSU5TVFJVQ1RPUl9GSUxFOiBcImluc3RydWN0b3JfZmlsZVwiXHJcbn07XHJcblxyXG5jb25zdCBTUEVDSUFMX05BTUVTUEFDRVMgPSBbXCIhXCIsIFwiXlwiLCBcIj9cIiwgXCIkXCJdO1xyXG5cclxuY29uc3QgQVZBSUxBQkxFX0VESVRPUlMgPSBbXHJcbiAgICBUZXh0RWRpdG9yLCBQeXRob25FZGl0b3IsIEFzc2lnbm1lbnRTZXR0aW5ncywgVGFnc0VkaXRvciwgTWFya2Rvd25FZGl0b3JcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUT1JTX0hUTUwgPSBBVkFJTEFCTEVfRURJVE9SUy5tYXAoZWRpdG9yID0+XHJcbiAgICBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWVkaXRvclwiPlxyXG4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLnZpZXcoKS5uYW1lID09PSAnJHtlZGl0b3IubmFtZX0nXCI+XHJcbiAgICAke2VkaXRvci50ZW1wbGF0ZX0gICAgXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxuICAgIC8qXHJcbiAgICBgXHJcbjwhLS0ga28gaWY6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfScgLS0+XHJcbiR7ZWRpdG9yLnRlbXBsYXRlfVxyXG48IS0tIC9rbyAtLT5gKi9cclxuKS5qb2luKFwiXFxuXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvcnMge1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8gPSBbXTtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbnNfID0ge307XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfID0ge307XHJcbiAgICAgICAgQVZBSUxBQkxFX0VESVRPUlMuZm9yRWFjaChlZGl0b3IgPT4gdGhpcy5yZWdpc3RlckVkaXRvcihlZGl0b3IpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZS5zdWJzY3JpYmUodGhpcy5jaGFuZ2VFZGl0b3IsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRWRpdG9yKGRhdGEpIHtcclxuICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IGRhdGEuZXh0ZW5zaW9ucztcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgZGF0YS5jb25zdHJ1Y3Rvcih0aGlzLm1haW4sIHRoaXMudGFnKTtcclxuICAgICAgICBpbnN0YW5jZS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8ucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfW2RhdGEubmFtZS50b0xvd2VyQ2FzZSgpXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5leHRlbnNpb25zX1tleHRlbnNpb25zW2ldXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBieU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ5TmFtZV9bbmFtZS50b0xvd2VyQ2FzZSgpXTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VFZGl0b3IobmV3RmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgb2xkRWRpdG9yID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgIGxldCBuZXdFZGl0b3IgPSB0aGlzLmdldEVkaXRvcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9sZEVkaXRvci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5ld0VkaXRvcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnQuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlRmlsZW5hbWUocGF0aCkge1xyXG4gICAgICAgIGxldCBzcGFjZSA9IHBhdGguY2hhckF0KDApO1xyXG4gICAgICAgIGlmIChTUEVDSUFMX05BTUVTUEFDRVMuaW5kZXhPZihzcGFjZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGFjZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIGxldCB0eXBlID0gcGF0aC5zdWJzdHIocGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIHJldHVybiB7XCJzcGFjZVwiOiBzcGFjZSwgXCJuYW1lXCI6IG5hbWUsIFwidHlwZVwiOiB0eXBlfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFZGl0b3IocGF0aCkge1xyXG4gICAgICAgIGxldCB7c3BhY2UsIG5hbWUsIHR5cGV9ID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHBhdGgpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcIi5ibG9ja3B5XCIgJiYgcGF0aCBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3BhdGhdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3R5cGVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWRfWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcbmltcG9ydCB7T25SdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fcnVuXCI7XG5pbXBvcnQge1J1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ydW5cIjtcbmltcG9ydCB7RXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ldmFsXCI7XG5pbXBvcnQge1NhbXBsZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9zYW1wbGVcIjtcbmltcG9ydCB7T25DaGFuZ2VDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fY2hhbmdlXCI7XG5pbXBvcnQge09uRXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ldmFsXCI7XG5pbXBvcnQge09uU2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX3NhbXBsZVwiO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZXhlY3V0aW5nIFB5dGhvbiBjb2RlIGFuZCBwYXNzaW5nIHRoZSByZXN1bHRzIGFsb25nIHRvIGludGVyZXN0ZWQgY29tcG9uZW50cy5cbiAqXG4gKiBJbnRlcmVzdGluZyBjb21wb25lbnRzOlxuICogIEV4ZWN1dGlvbiBCdWZmZXI6IFJlc3BvbnNpYmxlIGZvciBjb2xsZWN0aW5nIHRoZSB0cmFjZSBkdXJpbmcgcHJvZ3JhbSBleGVjdXRpb24uXG4gKiAgICAgICAgICAgICAgICAgICAgVGhpcyBwcmV2ZW50cyBLbm9ja291dGpzIGZyb20gdXBkYXRpbmcgdGhlIGVkaXRvciBkdXJpbmcgZXhlY3V0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlFZGl0b3J9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbk1vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcblxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zID0ge1xuICAgICAgICAgICAgcnVuOiBuZXcgUnVuQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIGV2YWw6IG5ldyBFdmFsQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uUnVuOiBuZXcgT25SdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG5ldyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkV2YWw6IG5ldyBPbkV2YWxDb25maWd1cmF0aW9uKG1haW4pXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJlY29uZmlndXJlIHNrdWxwdCBzbyB3ZSBjYW4gcGFyc2VcbiAgICAgICAgU2suY29uZmlndXJlKHRoaXMuY29uZmlndXJhdGlvbnMucnVuLmdldFNrdWxwdE9wdGlvbnMoKSk7XG5cbiAgICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIHRyYWNpbmcgd2hpbGUgdGhlIHByb2dyYW0gaXMgZXhlY3V0aW5nXG4gICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluYWJsZSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiBleGVjdXRpb24gaGFzIGZ1bGx5IGVuZGVkLFxuICAgICAgICAgKiB3aGV0aGVyIGl0IHN1Y2NlZWRzIG9yIGZhaWxzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkVuZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgcmVwb3J0c1xuICAgICAqL1xuICAgIHJlc2V0UmVwb3J0cygpIHtcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMuZXhlY3V0aW9uTW9kZWwucmVwb3J0cztcbiAgICAgICAgcmVwb3J0W1widmVyaWZpZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHt9O1xuICAgIH07XG5cbiAgICByZXNldFN0dWRlbnRNb2RlbCgpIHtcbiAgICAgICAgbGV0IHN0dWRlbnQgPSB0aGlzLmV4ZWN1dGlvbk1vZGVsLnN0dWRlbnQ7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFN0ZXAobnVsbCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5sYXN0U3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50TGluZShudWxsKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhLnJlbW92ZUFsbCgpO1xuICAgICAgICBzdHVkZW50LnJlc3VsdHMgPSBudWxsO1xuICAgIH1cblxuICAgIHJlc2V0RXhlY3V0aW9uQnVmZmVyKCkge1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbkJ1ZmZlciA9IHtcbiAgICAgICAgICAgIFwidHJhY2VcIjogW10sXG4gICAgICAgICAgICBcInN0ZXBcIjogMCxcbiAgICAgICAgICAgIFwibGluZVwiOiAwLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGludGVyZmFjZSBhc3BlY3RzIG9mIHRoZSBwcmV2aW91cyBSdW4uXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIC8vIFRPRE86IENsZWFyIG91dCBhbnkgY292ZXJhZ2UvdHJhY2UvZXJyb3IgaGlnaGxpZ2h0cyBpbiBlZGl0b3JzXG4gICAgICAgIC8vIFJlc2V0IGV4ZWN1dGlvbiBpbiBtb2RlbFxuICAgICAgICB0aGlzLnJlc2V0U3R1ZGVudE1vZGVsKCk7XG4gICAgICAgIC8vIEdldCByZXBvcnRzIHJlYWR5XG4gICAgICAgIHRoaXMucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgZXhlY3V0aW9uIGJ1ZmZlclxuICAgICAgICB0aGlzLnJlc2V0RXhlY3V0aW9uQnVmZmVyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgY29uc29sZSBvZiBwcmludGVkIHN0dWZmXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFueSBvbGQgZmVlZGJhY2tcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2suY2xlYXIoKTtcbiAgICB9XG5cblxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5ydW4udXNlKHRoaXMpO1xuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVGZWVkYmFjaygpKSB7XG4gICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLm9uUnVuLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SdW4oKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25SdW4udXNlKHRoaXMpO1xuICAgICAgICB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICkudGhlbih0aGlzLmV4ZWN1dGlvbkVuZF8uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGUoKSB7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgbGV0IGV2YWx1YXRpb25JbnB1dCA9IHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuZXZhbHVhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coZXZhbHVhdGlvbklucHV0KTtcbiAgICAgICAgZXZhbHVhdGlvbklucHV0LnRoZW4oKHVzZXJJbnB1dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5ldmFsLnVzZSh0aGlzLCB1c2VySW5wdXQpO1xuICAgICAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZUZlZWRiYWNrKCkpIHtcbiAgICAgICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLm9uRXZhbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25FdmFsKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uRXZhbC51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKS50aGVuKHRoaXMuZXZhbHVhdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25DaGFuZ2UudXNlKHRoaXMpO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoKSB7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgcmV0dXJuIFNrLm1pc2NldmFsLmFzeW5jVG9Qcm9taXNlKCgpID0+XG4gICAgICAgICAgICBTay5pbXBvcnRNYWluV2l0aEJvZHkodGhpcy5jb25maWd1cmF0aW9uLmZpbGVuYW1lLCBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uY29kZSwgdHJ1ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZWQgd2hlbmV2ZXIgdGhlIFB5dGhvbiBjb2RlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBvbl9jaGFuZ2UoKSB7XG4gICAgICAgIGxldCBGSUxFTkFNRSA9IFwib25fY2hhbmdlXCI7XG4gICAgICAgIC8vIFNraXAgaWYgdGhlIGluc3RydWN0b3IgaGFzIG5vdCBkZWZpbmVkIGFueXRoaW5nXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLnByb2dyYW1zW0ZJTEVOQU1FXSgpLnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3RhdHVzKFwiY2hhbmdpbmdcIik7XG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlQ29kZSgpO1xuICAgICAgICAvLyBPbiBzdGVwIGRvZXMgbm90IHBlcmZvcm0gcGFyc2UgYW5hbHlzaXMgYnkgZGVmYXVsdCBvciBydW4gc3R1ZGVudCBjb2RlXG4gICAgICAgIGxldCBlbmdpbmUgPSB0aGlzO1xuICAgICAgICBsZXQgZmVlZGJhY2sgPSB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjaztcbiAgICAgICAgZW5naW5lLnJlc2V0UmVwb3J0cygpO1xuICAgICAgICBlbmdpbmUudmVyaWZ5Q29kZSgpO1xuICAgICAgICBlbmdpbmUudXBkYXRlUGFyc2UoKTtcbiAgICAgICAgZW5naW5lLnJ1bkluc3RydWN0b3JDb2RlKEZJTEVOQU1FLCB0cnVlLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgLy8gU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERVxuICAgICAgICAgICAgICAgIC8vIFRPRE86IG9ubHkgc2hvdyB1bmRlciBjZXJ0YWluIGNpcmN1bXN0YW5jZXNcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MgJiZcbiAgICAgICAgICAgICAgICAgICAgIShjYXRlZ29yeSA9PT0gXCJJbnN0cnVjdG9yXCIgJiYgbGFiZWwgPT09IFwiTm8gZXJyb3JzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIGxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbmdpbmUubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhtb2R1bGUuJGQpO1xuICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiZW5naW5lXCIsIFwib25fY2hhbmdlXCIpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgYXR0ZW1wdCB0byBjYWxsIHRoZSBkZWZpbmVkIG9uRXhlY3V0aW9uRW5kLFxuICAgICAqIGJ1dCB3aWxsIGRvIG5vdGhpbmcgaWYgdGhlcmUgaXMgbm8gZnVuY3Rpb24gZGVmaW5lZC5cbiAgICAgKi9cbiAgICBleGVjdXRpb25FbmRfKCkge1xuICAgICAgICBpZiAodGhpcy5vbkV4ZWN1dGlvbkVuZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkVuZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBleGVjdXRpb25CZWdpbl8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRXhlY3V0aW9uQmVnaW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub25FeGVjdXRpb25CZWdpbigpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiIsImV4cG9ydCBjb25zdCBFTVBUWV9NT0RVTEUgPSBcImxldCAkYnVpbHRpbm1vZHVsZSA9IGZ1bmN0aW9uKG1vZCl7IHJldHVybiBtb2Q7IH1cIlxyXG5cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBob2xkaW5nIHNldHRpbmdzIG9mIGEgcGFydGljdWxhciBydW4gY29uZmlndXJhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvZGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICAvLyBBY2Nlc3MgcG9pbnQgZm9yIGluc3RydWN0b3IgZGF0YVxyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgU2suY29uc29sZSA9IHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGU7XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5nZXRTa3VscHRPcHRpb25zKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNrdWxwdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgX19mdXR1cmVfXzogU2sucHl0aG9uMyxcclxuICAgICAgICAgICAgLy8gaW1wb3J0XHJcbiAgICAgICAgICAgIHJlYWQ6IHRoaXMuaW1wb3J0RmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBvcGVuXHJcbiAgICAgICAgICAgIGZpbGVvcGVuOiB0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIGZpbGUud3JpdGVcclxuICAgICAgICAgICAgZmlsZXdyaXRlOiB0aGlzLndyaXRlRmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBwcmludFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHRoaXMucHJpbnQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gUHJldmVudHMgcmVhZGluZyBIVE1MIGVsZW1lbnRzIGFzIGZpbGVzXHJcbiAgICAgICAgICAgIGluQnJvd3NlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIGlucHV0XHJcbiAgICAgICAgICAgIGlucHV0ZnVuOiB0aGlzLmlucHV0LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGlucHV0ZnVuVGFrZXNQcm9tcHQ6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIE1lZGlhIEltYWdlIFByb3h5IFVSTFxyXG4gICAgICAgICAgICBpbWFnZVByb3h5OiB0aGlzLmdldEltYWdlUHJveHkuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gV2hldGhlciBvciBub3QgdG8ga2VlcCB0aGUgZ2xvYmFsc1xyXG4gICAgICAgICAgICByZXRhaW5HbG9iYWxzOiB0cnVlXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIHRvIGFjY2VzcyBTa3VscHQgYnVpbHQtaW5zLiBUaGlzIGlzIHByZXR0eSBnZW5lcmljLCB0YWtlblxyXG4gICAgICogYWxtb3N0IGRpcmVjdGx5IGZyb20gdGhlIFNrdWxwdCBkb2NzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSBweXRob24gZmlsZW5hbWUgKGUuZy4sIFwib3NcIiBvciBcInBwcmludFwiKSB0aGF0IHdpbGwgYmUgbG9hZGVkLlxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIEphdmFTY3JpcHQgc291cmNlIGNvZGUgb2YgdGhlIGZpbGUgKHdlaXJkLCByaWdodD8pXHJcbiAgICAgKiBAdGhyb3dzIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIGZpbGUgaXNuJ3QgZm91bmQuXHJcbiAgICAgKi9cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfTtcclxuXHJcbiAgICBvcGVuRmlsZSgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlRmlsZSgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5wcmludCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5wdXRNb2NrRnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKFNrLnF1ZXVlZElucHV0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU2sucXVldWVkSW5wdXQucG9wKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRJbWFnZVByb3h5KCkge1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNGb3JiaWRkZW4oZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBzdWNjZXNzIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgZmFpbHVyZSBleGVjdXRpb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZHVtbXlPdXRTYW5kYm94KCkge1xyXG4gICAgICAgIC8vU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi9wZWRhbC9zYW5kYm94L3NhbmRib3gucHlcIl0gPSBcImNsYXNzIFNhbmRib3g6IHBhc3NcXG5kZWYgcnVuKCk6IHBhc3NcXG5kZWYgcmVzZXQoKTogcGFzc1xcblwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCbG9ja1B5VHJhY2V9IGZyb20gXCIuLi90cmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSwgY29kZSkge1xyXG4gICAgICAgIC8vIFRPRE86IGZpeCB0byBiZSBjdXJyZW50bHkgYWRkZWQgbGluZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gXCJfID0gXCIgKyBjb2RlO1xyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSB0cnVlO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscygpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuQWRkXCIsIFwiXCIsIFwiXCIsIGNvZGUsIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZVwiLCBcIlwiLCBcIlwiLCB0aGlzLmNvZGUsIFwiZXZhbHVhdGlvbnNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmFsIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1FdmFsdWF0ZS5Qcm9ncmFtXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoU2suZ2xvYmFscyk7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQucmVzdWx0cyA9IG1vZHVsZTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50VmFsdWUoU2suZmZpLnJlbWFwVG9Kcyhtb2R1bGUuJGQuXy4kcigpKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy90aGlzLnN0ZXAobW9kdWxlLiRkLCBtb2R1bGUuJGQsLTEsIDAsIGZpbGVuYW1lICsgXCIucHlcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFjZVwiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UsXHJcbiAgICAgICAgICAgICAgICBcImxpbmVzXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5tYXAoeCA9PiB4LmxpbmUpLFxyXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRzXCI6IG1vZHVsZSxcclxuICAgICAgICAgICAgICAgIFwib3V0cHV0XCI6IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0LFxyXG4gICAgICAgICAgICAgICAgXCJldmFsdWF0aW9uXCI6IHRoaXMuY29kZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXZhbCBmYWlsdXJlXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGUuRXJyb3JcIiwgXCJcIiwgXCJcIiwgZXJyb3IudG9TdHJpbmcoKSwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIFwiZXZhbHVhdGlvblwiOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25maWd1cmF0aW9uLCBFTVBUWV9NT0RVTEV9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zLmpzXCI7XHJcbmltcG9ydCB7JHNrX21vZF9pbnN0cnVjdG9yfSBmcm9tIFwiLi4vc2tfbW9kX2luc3RydWN0b3JcIjtcclxuXHJcbmNvbnN0IFVUSUxJVFlfTU9EVUxFX0NPREUgPSBcInZhciAkYnVpbHRpbm1vZHVsZSA9IFwiICsgJHNrX21vZF9pbnN0cnVjdG9yLnRvU3RyaW5nKCk7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBJbnN0cnVjdG9ycyBoYXZlIG5vIGxpbWl0c1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSBudWxsO1xyXG4gICAgICAgIC8vIE11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKHRydWUpO1xyXG4gICAgICAgIC8vIERpc2FibGUgaW5wdXQgYm94XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICAvLyBUT0RPIFNrLmlucHV0ZnVuID0gQmxvY2tQeUVuZ2luZS5pbnB1dE1vY2tGdW5jdGlvbjtcclxuICAgICAgICAvLyBUT0RPOiBBbGxvdyBpbnB1dCBmdW5jdGlvbiB0byBkaXNhYmxlIHRoZSB0aW1lciwgc29tZWhvd1xyXG4gICAgICAgIC8vIEVuYWJsZSB1dGlsaXR5IG1vZGVcclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3V0aWxpdHkvX19pbml0X18uanNcIl0gPSBVVElMSVRZX01PRFVMRV9DT0RFO1xyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcIi4vX2luc3RydWN0b3IvX19pbml0X18uanNcIl0gPSBFTVBUWV9NT0RVTEU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSA9PT0gXCIuL2Fuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL19pbnN0cnVjdG9yL29uX3J1bi5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9vbl9ldmFsLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpIHx8IFwiXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiQXBwbGVQaWVcIjtcclxuICAgICAgICByZXR1cm4gU2sucXVldWVkSW5wdXQucG9wKCk7XHJcbiAgICAgICAgLypyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShTay5xdWV1ZWRJbnB1dC5wb3AoKSk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25DaGFuZ2VDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIm9uX2NoYW5nZS5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmlnZ2VyT25DaGFuZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge05FV19MSU5FX1JFR0VYfSBmcm9tIFwiLi9vbl9ydW5cIjtcclxuaW1wb3J0IHtpbmRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV1JBUF9JTlNUUlVDVE9SX0NPREUgPSBmdW5jdGlvbiAoc3R1ZGVudENvZGUsIGluc3RydWN0b3JDb2RlLCBxdWljaywgaXNTYWZlKSB7XHJcbiAgICBsZXQgc2FmZUNvZGUgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50Q29kZSk7XHJcbiAgICBsZXQgaW5kZW50ZWRDb2RlID0gaW5kZW50KGluZGVudChpc1NhZmUgPyBzdHVkZW50Q29kZSA6IFwiTm9uZVwiKSk7XHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSlcclxuZGVmIHJ1bl9zdHVkZW50KCk6XHJcbiAgICAjIGxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHRyeTpcclxuJHtpbmRlbnRlZENvZGV9XHJcbiAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGVycm9yOlxyXG4gICAgICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgcmV0dXJuIE5vbmVcclxuZnJvbSBwZWRhbC5zYW5kYm94IGltcG9ydCBjb21wYXRpYmlsaXR5XHJcbmZyb20gdXRpbGl0eSBpbXBvcnQgKlxyXG5zdHVkZW50ID0gZ2V0X3N0dWRlbnRfZGF0YSgpXHJcbmNvbXBhdGliaWxpdHkuc2V0X3NhbmRib3goc3R1ZGVudClcclxuZXJyb3IsIHBvc2l0aW9uID0gZ2V0X3N0dWRlbnRfZXJyb3IoKVxyXG5jb21wYXRpYmlsaXR5LnJhaXNlX2V4Y2VwdGlvbihlcnJvciwgcG9zaXRpb24pXHJcbmNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnQgPSBydW5fc3R1ZGVudFxyXG5jb21wYXRpYmlsaXR5LmdldF9wbG90cyA9IGdldF9wbG90c1xyXG5jb21wYXRpYmlsaXR5LmdldF9vdXRwdXQgPSBnZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkucmVzZXRfb3V0cHV0ID0gcmVzZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkudHJhY2VfbGluZXMgPSB0cmFjZV9saW5lc1xyXG5kZWYgY2FwdHVyZV9vdXRwdXQoZnVuYywgKmFyZ3MpOlxyXG4gICByZXNldF9vdXRwdXQoKVxyXG4gICBmdW5jKCphcmdzKVxyXG4gICByZXR1cm4gZ2V0X291dHB1dCgpXHJcbmNvbXBhdGliaWxpdHkuY2FwdHVyZV9vdXRwdXQgPSBjYXB0dXJlX291dHB1dFxyXG4ke2luc3RydWN0b3JDb2RlfVxyXG5mcm9tIHBlZGFsLnJlc29sdmVycyBpbXBvcnQgc2ltcGxlXHJcblNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREUgPSBzaW1wbGUucmVzb2x2ZSgpXHJcbmA7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT25FdmFsQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ldmFsXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVUaWZhID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpZmEoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgc3R1ZGVudENvZGVTYWZlID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnN0dWRlbnQuZXZhbHVhdGlvbiB8fCBcIk5vbmVcIjtcclxuICAgICAgICB0aGlzLmR1bW15T3V0U2FuZGJveCgpO1xyXG4gICAgICAgIGxldCBpbnN0cnVjdG9yQ29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICBsZXQgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGlzU2FmZSA9ICFyZXBvcnRbXCJwYXJzZXJcIl0uZW1wdHkgJiYgcmVwb3J0W1widmVyaWZpZXJcIl0uc3VjY2VzcztcclxuICAgICAgICBpbnN0cnVjdG9yQ29kZSA9IFdSQVBfSU5TVFJVQ1RPUl9DT0RFKHN0dWRlbnRDb2RlU2FmZSwgaW5zdHJ1Y3RvckNvZGUsIGRpc2FibGVUaWZhLCBpc1NhZmUpO1xyXG4gICAgICAgIGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoIC0gbGluZU9mZnNldDtcclxuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge1xyXG4gICAgICAgICAgICBcImNvbXBsaW1lbnRzXCI6IFtdLFxyXG4gICAgICAgICAgICBcImZpbGVuYW1lXCI6IFwiLi9faW5zdHJ1Y3Rvci9vbl9ldmFsLnB5XCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBpbnN0cnVjdG9yQ29kZSxcclxuICAgICAgICAgICAgXCJsaW5lT2Zmc2V0XCI6IGxpbmVPZmZzZXRcclxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb2RlID0gaW5zdHJ1Y3RvckNvZGU7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICAvL1NrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuICAgICAgICBTay5nbG9iYWxzID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbkV2YWwgc3VjY2Vzc1wiKTtcclxuICAgICAgICAvLyBUT0RPOiBBY3R1YWxseSBwYXJzZSByZXN1bHRzXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHMgPSBTay5nbG9iYWxzO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbW9kdWxlLiRkLm9uX2V2YWwuJGQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kdWxlLiRkKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2socmVzdWx0cyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNVQ0NFU1MpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VjY2VzcyB8fCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCkpO1xyXG4gICAgICAgIC8vIENhbm5vdCBleGNlZWQgMSBwb2ludCwgY2Fubm90IGdvIGJlbG93IDAgcG9pbnRzXHJcbiAgICAgICAgbGV0IHNjb3JlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNDT1JFKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KDAuMCwgTWF0aC5taW4oMS4wLCBzY29yZSkpO1xyXG4gICAgICAgIGxldCBvbGRTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoTWF0aC5tYXgob2xkU2NvcmUsIHNjb3JlKSk7XHJcbiAgICAgICAgLy8gSGlkZSBzdGF0dXNcclxuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5ISURFKTtcclxuICAgICAgICAvLyBBbmQgZmlyZSB0aGUgcmVzdWx0IVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNjb3JlLCBzdWNjZXNzLCBoaWRlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgLy9hZnRlcihtb2R1bGUpO1xyXG5cclxuICAgICAgICAvKmlmIChzdWNjZXNzICYmIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmlkKCkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICBpZiAoIVNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uRXZhbCBmYWlsdXJlXCIpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiR3JhY2VmdWxFeGl0XCIpIHtcclxuICAgICAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImNvZGVcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImVycm9yXCJdID0gZXJyb3I7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImxpbmVfb2Zmc2V0XCJdID0gbGluZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBhZnRlcihlcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2luZGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBORVdfTElORV9SRUdFWCA9IC9cXHJcXG58XFxyfFxcbi87XHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV1JBUF9JTlNUUlVDVE9SX0NPREUgPSBmdW5jdGlvbiAoc3R1ZGVudENvZGUsIGluc3RydWN0b3JDb2RlLCBxdWljaywgaXNTYWZlKSB7XHJcbiAgICBsZXQgc2FmZUNvZGUgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50Q29kZSk7XHJcbiAgICBsZXQgaW5kZW50ZWRDb2RlID0gaW5kZW50KGluZGVudChpc1NhZmUgPyBzdHVkZW50Q29kZSA6IFwicGFzc1wiKSk7XHJcbiAgICBsZXQgdGlmYUFuYWx5c2lzID0gXCJcIjtcclxuICAgIGlmICghcXVpY2spIHtcclxuICAgICAgICB0aWZhQW5hbHlzaXMgPSBcImZyb20gcGVkYWwudGlmYSBpbXBvcnQgdGlmYV9hbmFseXNpc1xcbnRpZmFfYW5hbHlzaXMoRmFsc2UpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSwgXCJhbnN3ZXIucHlcIilcclxuZGVmIHJ1bl9zdHVkZW50KCk6XHJcbiAgICAjIGxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHRyeTpcclxuJHtpbmRlbnRlZENvZGV9XHJcbiAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGVycm9yOlxyXG4gICAgICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgcmV0dXJuIE5vbmVcclxuJHt0aWZhQW5hbHlzaXN9XHJcbmZyb20gcGVkYWwuc2FuZGJveC5zYW5kYm94IGltcG9ydCBTYW5kYm94XHJcbmZyb20gcGVkYWwuc2FuZGJveCBpbXBvcnQgY29tcGF0aWJpbGl0eVxyXG5mcm9tIHV0aWxpdHkgaW1wb3J0ICpcclxuc3R1ZGVudCA9IE1BSU5fUkVQT1JUWydzYW5kYm94J11bJ3J1biddID0gU2FuZGJveCgpXHJcbiNzdHVkZW50LnJ1bihNQUlOX1JFUE9SVFsnc291cmNlJ11bJ2NvZGUnXSwgTUFJTl9SRVBPUlRbJ3NvdXJjZSddWydmaWxlbmFtZSddLCByZXBvcnRfZXhjZXB0aW9ucz1GYWxzZSlcclxuI2RlYnVnKHN0dWRlbnQpXHJcbnN0dWRlbnQucmVwb3J0X2V4Y2VwdGlvbnNfbW9kZSA9IFRydWVcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudChyYWlzZV9leGNlcHRpb25zPUZhbHNlKVxyXG4jbG9nKHN0dWRlbnQuZGF0YSlcclxuI3N0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuI2NvbXBhdGliaWxpdHkuc2V0X3NhbmRib3goc3R1ZGVudClcclxuI2Vycm9yLCBwb3NpdGlvbiA9IGdldF9zdHVkZW50X2Vycm9yKClcclxuI2NvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxuI2NvbXBhdGliaWxpdHkucnVuX3N0dWRlbnQgPSBydW5fc3R1ZGVudFxyXG5ydW5fc3R1ZGVudCA9IGNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnRcclxucmVzZXRfb3V0cHV0ID0gY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXRcclxucXVldWVfaW5wdXQgPSBjb21wYXRpYmlsaXR5LnF1ZXVlX2lucHV0XHJcbmdldF9vdXRwdXQgPSBjb21wYXRpYmlsaXR5LmdldF9vdXRwdXRcclxuI2NvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzID0gZ2V0X3Bsb3RzXHJcbiNjb21wYXRpYmlsaXR5LmdldF9vdXRwdXQgPSBnZXRfb3V0cHV0XHJcbiNjb21wYXRpYmlsaXR5LnJlc2V0X291dHB1dCA9IHJlc2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnRyYWNlX2xpbmVzID0gdHJhY2VfbGluZXNcclxuIyBUT0RPOiBSZW1vdmUgdGhlIG5lZWQgZm9yIHRoaXMgaGFjayFcclxuZGVmIGNhcHR1cmVfb3V0cHV0KGZ1bmMsICphcmdzKTpcclxuICAgcmVzZXRfb3V0cHV0KClcclxuICAgc3R1ZGVudC5jYWxsKGZ1bmMuX19uYW1lX18sICphcmdzKVxyXG4gICByZXR1cm4gZ2V0X291dHB1dCgpXHJcbmNvbXBhdGliaWxpdHkuY2FwdHVyZV9vdXRwdXQgPSBjYXB0dXJlX291dHB1dFxyXG5cclxuZnJvbSBwZWRhbC5jYWl0LmNhaXRfYXBpIGltcG9ydCBwYXJzZV9wcm9ncmFtXHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxubG9nKE1BSU5fUkVQT1JUKVxyXG4jcHJpbnQoTUFJTl9SRVBPUlQuZmVlZGJhY2tbMF0ubWlzdGFrZVsnZXJyb3InXSlcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPblJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiX2luc3RydWN0b3Iub25fcnVuXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVUaWZhID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpZmEoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgc3R1ZGVudENvZGVTYWZlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXBvcnRbXCJwYXJzZXJcIl0pO1xyXG4gICAgICAgIGxldCBpc1NhZmUgPSAhcmVwb3J0W1wicGFyc2VyXCJdLmVtcHR5ICYmIHJlcG9ydFtcInZlcmlmaWVyXCJdLnN1Y2Nlc3M7XHJcbiAgICAgICAgaW5zdHJ1Y3RvckNvZGUgPSBXUkFQX0lOU1RSVUNUT1JfQ09ERShzdHVkZW50Q29kZVNhZmUsIGluc3RydWN0b3JDb2RlLCBkaXNhYmxlVGlmYSwgaXNTYWZlKTtcclxuICAgICAgICBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aCAtIGxpbmVPZmZzZXQgLSA0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX3J1bi5weVwiLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogaW5zdHJ1Y3RvckNvZGUsXHJcbiAgICAgICAgICAgIFwibGluZU9mZnNldFwiOiBsaW5lT2Zmc2V0XHJcbiAgICAgICAgICAgIC8vJ2NvbXBsZXRlJzogZmFsc2UgLy8gQWN0dWFsbHksIGxldCdzIHVzZSB1bmRlZmluZWQgZm9yIG5vdy5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIC8vIFRPRE8gTG9nZ2luZyEhISFcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uUnVuIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgLy8gVE9ETzogQWN0dWFsbHkgcGFyc2UgcmVzdWx0c1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzID0gU2suZ2xvYmFscztcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fcnVuLiRkO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIC8qaWYgKHN1Y2Nlc3MgJiYgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3ModGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaWQoKSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25SdW4gZmFpbHVyZVwiKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIkdyYWNlZnVsRXhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJjb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJlcnJvclwiXSA9IGVycm9yO1xyXG4gICAgICAgICAgICAvL1RPRE86IHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJsaW5lX29mZnNldFwiXSA9IGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogYWZ0ZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL29uX3J1blwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIE9uUnVuQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fcnVuLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSdW5Db25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlRmlsZShcImFuc3dlci5weVwiLCB0aGlzLmNvZGUsIG51bGwpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGVcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICBlbmdpbmUucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhcnNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcInZlcmlmaWVyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogQm9vbGVhbih0aGlzLmNvZGUudHJpbSgpKSxcclxuICAgICAgICAgICAgXCJjb2RlXCI6IHRoaXMuY29kZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBzdWNjZXNzXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5maW5pc2hUdXJ0bGVzKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoU2suZ2xvYmFscyk7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQucmVzdWx0cyA9IG1vZHVsZTtcclxuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuYmVnaW5FdmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcChtb2R1bGUuJGQsIG1vZHVsZS4kZCwtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChyZXBvcnQucGFyc2VyLnN1Y2Nlc3MgJiYgcmVwb3J0LnZlcmlmaWVyLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZS5FcnJvclwiLCBcIlwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJSdW4uUHJvZ3JhbVwiLCBcIlByb2dyYW1FcnJvck91dHB1dFwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBUT0RPOiBGaXggdG8gYmUgdGhlIGN1cnJlbnQgc2FtcGxlIHN1Ym1pc3Npb25cclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXIucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcInByaW50KCdOb3QgcmVhZHkgeWV0IScpXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25maWd1cmF0aW9uLCBFTVBUWV9NT0RVTEV9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R1ZGVudENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBMaW1pdCBleGVjdXRpb24gdG8gNSBzZWNvbmRzXHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0gdGhpcy5tYWluLm1vZGVsLnNldHRpbmdzO1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdEZ1bmN0aW9uID0gKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpbWVvdXQoKSA/IEluZmluaXR5IDogMTAwMDA7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSB0aGlzLnN0ZXAuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBVbm11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2FsbCBhZnRlciBlYWNoIHN0ZXBcclxuICAgICAgICAvLyBhZnRlclNpbmdsZUV4ZWN1dGlvblxyXG4gICAgICAgIC8vIFByb3h5IHJlcXVlc3RzXHJcbiAgICAgICAgU2sucmVxdWVzdHNHZXQgPSAoZmlsZW5hbWUpID0+IHRoaXMub3BlblVSTChmaWxlbmFtZSwgXCJ1cmxcIik7XHJcblxyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvdXRpbGl0eS9fX2luaXRfXy5qc1wiXSA9IEVNUFRZX01PRFVMRTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRm9yYmlkZGVuKGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGFjY2Vzc2libGU6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL2Fuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5pbnB1dChwcm9tcHRNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmaWxlbmFtZS5zdGFydHNXaXRoKFwic3JjL2xpYi91dGlsaXR5L1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwic3JjL2xpYi9wZWRhbC9cIikgfHxcclxuICAgICAgICAgICAgZmlsZW5hbWUuc3RhcnRzV2l0aChcIi4vX2luc3RydWN0b3IvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXCJTdGVwc1wiIHRoZSBleGVjdXRpb24gb2YgdGhlIGNvZGUsIG1lYW50IHRvIGJlIHVzZWQgYXMgYSBjYWxsYmFjayB0byB0aGUgU2t1bHB0XHJcbiAgICAgKiBlbnZpcm9ubWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gSGFzaCB0aGF0IG1hcHMgdGhlIG5hbWVzIG9mIHZhcmlhYmxlcyAoU3RyaW5ncykgdG8gdGhlaXIgU2t1bHB0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVOdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBsaW5lIG51bWJlciBpbiB0aGUgc291cmNlIGNvZGUgdGhhdCBpcyBiZWluZyBleGVjdXRlZC5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW5OdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBjb2x1bW4gbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaW5rIG9mIGl0IGFzIHRoZSBcIlhcIiBwb3NpdGlvbiB0byB0aGUgbGluZU51bWJlcidzIFwiWVwiIHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHB5dGhvbiBmaWxlIGJlaW5nIGV4ZWN1dGVkIChlLmcuLCBcIl9fbWFpbl9fLnB5XCIpLlxyXG4gICAgICovXHJcbiAgICBzdGVwKHZhcmlhYmxlcywgbG9jYWxzLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50U3RlcCA9IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwO1xyXG4gICAgICAgICAgICBsZXQgZ2xvYmFscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyh2YXJpYWJsZXMpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBUcmFjZSBsb2NhbCB2YXJpYWJsZXMgcHJvcGVybHlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhnbG9iYWxzLCBsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL2xldCBsb2NhbHMgPSB0aGlzLm1haW4uY29tcG9uZW50cy50cmFjZS5wYXJzZUdsb2JhbHMobG9jYWxzKTtcclxuICAgICAgICAgICAgLy9PYmplY3QuYXNzaWduKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwic3RlcFwiOiBjdXJyZW50U3RlcCxcclxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogZmlsZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAvLydibG9jayc6IGhpZ2hsaWdodE1hcFtsaW5lTnVtYmVyLTFdLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lXCI6IGxpbmVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcImNvbHVtblwiOiBjb2x1bW5OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjogZ2xvYmFscy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgXCJtb2R1bGVzXCI6IGdsb2JhbHMubW9kdWxlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAgPSBjdXJyZW50U3RlcCArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lID0gbGluZU51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIFNrdWxwdCBleGVjdXRpb24gdG8gdGVybWluYXRlIHRoZSBleGVjdXRpb25CdWZmZXJcclxuICAgICAqIGFuZCBoYW5kIGl0IG9mZiB0byB0aGUgZXhlY3V0aW9uIHRyYWNlIGluIHRoZSBtb2RlbC5cclxuICAgICAqL1xyXG4gICAgbGFzdFN0ZXAoKSB7XHJcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb247XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RMaW5lKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0TGluZXMoYXN0KSB7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWRMaW5lcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBsZXQgdmlzaXRCb2R5ID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUubGluZW5vICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWRMaW5lcy5hZGQobm9kZS5saW5lbm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLmJvZHkpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYm9keS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm9kZS5vcmVsc2UpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUub3JlbHNlLmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLmZpbmFsYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5maW5hbGJvZHkuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZpc2l0Qm9keShhc3QpO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHZpc2l0ZWRMaW5lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmUgdGhhdCB0aGUgcGFyc2UgaW5mb3JtYXRpb24gaXMgdXAtdG8tZGF0ZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQYXJzZSgpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIC8vIEhvbGQgYWxsIHRoZSBhY3R1YWxseSBkaXNjb3ZlcmVkIGxpbmVzIGZyb20gdGhlIHBhcnNlXHJcbiAgICAgICAgbGV0IGxpbmVzID0gW107XHJcbiAgICAgICAgLy8gQXR0ZW1wdCBhIHBhcnNlXHJcbiAgICAgICAgbGV0IGFzdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGFyc2UgPSBTay5wYXJzZSh0aGlzLmZpbGVuYW1lLCB0aGlzLmNvZGUpO1xyXG4gICAgICAgICAgICBhc3QgPSBTay5hc3RGcm9tUGFyc2UocGFyc2UuY3N0LCB0aGlzLmZpbGVuYW1lLCBwYXJzZS5mbGFncyk7XHJcbiAgICAgICAgICAgIGxpbmVzID0gdGhpcy5nZXRMaW5lcyhhc3QpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFJlcG9ydCB0aGUgZXJyb3JcclxuICAgICAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIFwiZW1wdHlcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogbGluZXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3VjY2Vzc2Z1bCBwYXJzZVxyXG4gICAgICAgIHJlcG9ydFtcInBhcnNlclwiXSA9IHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYXN0XCI6IGFzdCxcclxuICAgICAgICAgICAgXCJlbXB0eVwiOiBhc3QuYm9keS5sZW5ndGggPT09IDAsXHJcbiAgICAgICAgICAgIFwibGluZXNcIjogbGluZXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGxldCBGRUVEQkFDS19IVE1MID0gYFxuXG48c3BhbiBjbGFzcz0nYmxvY2tweS1mbG9hdGluZy1mZWVkYmFjayB0ZXh0LW11dGVkLWxlc3MgcHVsbC1yaWdodCBwb3NpdGlvbi1zdGlja3kgc3RpY2t5LXRvcCdcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1sYWJlbD1cIk5ldyBGZWVkYmFjayBBbGVydFwiPlxuICAgIE5ldyBmZWVkYmFjayAmdWFycjtcbjwvc3Bhbj5cblxuPGRpdiBjbGFzcz0nYmxvY2tweS1mZWVkYmFjayBjb2wtbWQtNiBibG9ja3B5LXBhbmVsJ1xuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cblxuICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0J1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2Vjb25kUm93LnN3aXRjaExhYmVsXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPCEtLSBBY3R1YWwgRmVlZGJhY2sgUmVnaW9uIC0tPiAgICBcbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPkZlZWRiYWNrOiA8L3N0cm9uZz5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2JhZGdlIGJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnkgZmVlZGJhY2stYmFkZ2UnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHVpLmZlZWRiYWNrLmJhZGdlLFxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5mZWVkYmFjay5jYXRlZ29yeVwiPkZlZWRiYWNrIEtpbmQ8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cImJsb2NrcHktZmVlZGJhY2stbGFiZWxcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidGV4dDogZXhlY3V0aW9uLmZlZWRiYWNrLmxhYmVsXCI+PC9zdHJvbmc+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLW1lc3NhZ2VcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiaHRtbDogZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2VcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiAgICAgICAgICAgIFxuYDtcblxuZXhwb3J0IGNsYXNzIEJsb2NrUHlGZWVkYmFjayB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgdGhhdCBtYW5hZ2VzIHRoZSBmZWVkYmFjayBhcmVhLCB3aGVyZSB1c2VycyBhcmUgdG9sZCB0aGUgc3RhdGUgb2YgdGhlaXJcbiAgICAgKiBwcm9ncmFtJ3MgZXhlY3V0aW9uIGFuZCBnaXZlbiBndWlkYW5jZS4gQWxzbyBtYW5hZ2VzIHRoZSBjcmVhdGlvbiBvZiB0aGUgVHJhY2UgVGFibGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAdGhpcyB7QmxvY2tQeUZlZWRiYWNrfVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcblxuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnlcIik7XG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbGFiZWxcIik7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCIpO1xuXG4gICAgICAgIC8vIFRPRE86IElmIHRoZXkgY2hhbmdlIHRoZSBzdHVkZW50IGV4dHJhIGZpbGVzLCBhbHNvIHVwZGF0ZSB0aGUgZGlydHkgZmxhZ1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24odHJ1ZSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgc2NyZWVuICh0YWtlcyAxIHNlY29uZCkgdG8gbWFrZSB0aGUgRmVlZGJhY2sgYXJlYSB2aXNpYmxlLlxuICAgICAqL1xuICAgIHNjcm9sbEludG9WaWV3KCkge1xuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBmZWVkYmFjayBhcmVhIGlzIGN1cnJlbnRseSB2aXNpYmxlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNGZWVkYmFja1Zpc2libGUoKSB7XG4gICAgICAgIGxldCB0b3Bfb2ZfZWxlbWVudCA9IHRoaXMudGFnLm9mZnNldCgpLnRvcDtcbiAgICAgICAgbGV0IGJvdHRvbV9vZl9lbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wICsgdGhpcy50YWcub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgbGV0IGJvdHRvbV9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgIGxldCB0b3Bfb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAvL2JvdHRvbV9vZl9lbGVtZW50IC09IDQwOyAvLyBVc2VyIGZyaWVuZGx5IHBhZGRpbmdcbiAgICAgICAgcmV0dXJuICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbnkgb3V0cHV0IGN1cnJlbnRseSBpbiB0aGUgZmVlZGJhY2sgYXJlYS4gQWxzbyByZXNldHMgdGhlIHByaW50ZXIgYW5kXG4gICAgICogYW55IGhpZ2hsaWdodGVkIGxpbmVzIGluIHRoZSBlZGl0b3IuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKFwiKlJlYWR5KlwiKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobnVsbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5oaWRkZW4oZmFsc2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgZmluZEZpcnN0RXJyb3JMaW5lKGZlZWRiYWNrRGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpID0gZmVlZGJhY2tEYXRhLmxlbmd0aC0xOyBpID49IDA7IGktPSAxKSB7XG4gICAgICAgICAgICBpZiAoXCJwb3NpdGlvblwiIGluIGZlZWRiYWNrRGF0YVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZWVkYmFja0RhdGFbaV0ucG9zaXRpb24ubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgbW9kZWwgd2l0aCB0aGVzZSBuZXcgZXhlY3V0aW9uIHJlc3VsdHNcbiAgICAgKiBAcGFyYW0gZXhlY3V0aW9uUmVzdWx0c1xuICAgICAqL1xuICAgIHVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpIHtcbiAgICAgICAgLy8gUGFyc2Ugb3V0IGRhdGFcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTUVTU0FHRSk7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5DQVRFR09SWSk7XG4gICAgICAgIGxldCBsYWJlbCA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5MQUJFTCk7XG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkhJREUpO1xuICAgICAgICBsZXQgZGF0YSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5EQVRBKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBiYXNlZCBvbiBhc3NpZ25tZW50cycgc2V0dGluZ3NcbiAgICAgICAgbGV0IGhpZGVTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpO1xuICAgICAgICBpZiAoaGlkZVNjb3JlICYmIGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcIm5vIGVycm9yc1wiO1xuICAgICAgICAgICAgbGFiZWwgPSBcIk5vIGVycm9yc1wiO1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTm8gZXJyb3JzIHJlcG9ydGVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1hcCB0byBleHBlY3RlZCBCbG9ja1B5IGxhYmVsc1xuICAgICAgICBpZiAoY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnN0cnVjdG9yXCIgJiYgbGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gXCJleHBsYWluXCIpIHtcbiAgICAgICAgICAgIGxhYmVsID0gXCJJbnN0cnVjdG9yIEZlZWRiYWNrXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEb24ndCBwcmVzZW50IGEgbGFjayBvZiBlcnJvciBhcyBiZWluZyBpbmNvcnJlY3RcbiAgICAgICAgaWYgKGNhdGVnb3J5ID09PSBcIkluc3RydWN0b3JcIiAmJiBsYWJlbCA9PT0gXCJObyBlcnJvcnNcIikge1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcIm5vIGVycm9yc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIG1vZGVsIGFjY29yZGluZ2x5XG4gICAgICAgIG1lc3NhZ2UgPSB0aGlzLm1haW4udXRpbGl0aWVzLm1hcmtkb3duKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKGxhYmVsKTtcbiAgICAgICAgLy8gVE9ETzogSW5zdGVhZCBvZiB0cmFja2luZyBzdHVkZW50IGZpbGUsIGxldCdzIHRyYWNrIHRoZSBpbnN0cnVjdG9yIGZpbGVcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiSW50ZXJ2ZW50aW9uXCIsIGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgXCJhbnN3ZXIucHlcIik7XG5cbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFueSBwcmV2aW91c2x5IGhpZ2hsaWdodGVkIGxpbmVzXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcblxuICAgICAgICAvLyBGaW5kIHRoZSBmaXJzdCBlcnJvciBvbiBhIGxpbmUgYW5kIHJlcG9ydCB0aGF0XG4gICAgICAgIGxldCBsaW5lID0gQmxvY2tQeUZlZWRiYWNrLmZpbmRGaXJzdEVycm9yTGluZShkYXRhKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmIChsaW5lICE9PSBudWxsICYmIGxpbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucHVzaChsaW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEludmVydCB0aGUgc2V0IG9mIHRyYWNlZCBsaW5lc1xuICAgICAgICBsZXQgc3R1ZGVudFJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5zdHVkZW50O1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmIChzdHVkZW50UmVwb3J0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCB1bmNvdmVyZWRMaW5lcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnBhcnNlci5saW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN0dWRlbnRSZXBvcnQubGluZXMuaW5kZXhPZihsaW5lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5jb3ZlcmVkTGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZCh1bmNvdmVyZWRMaW5lcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVzZW50IGFueSBhY2N1bXVsYXRlZCBmZWVkYmFja1xuICAgICAqL1xuICAgIHByZXNlbnRGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cyk7XG5cbiAgICAgICAgLy8gVE9ETzogTG9nZ2luZ1xuICAgICAgICAvL3RoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcImZlZWRiYWNrXCIsIGNhdGVnb3J5K1wifFwiK2xhYmVsLCBtZXNzYWdlKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNGZWVkYmFja1Zpc2libGUoKSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlGZWVkYmFja1VwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG5vdGlmeUZlZWRiYWNrVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmxvYXRpbmctZmVlZGJhY2tcIikuc2hvdygpLmZhZGVPdXQoNzAwMCk7XG4gICAgfTtcblxuICAgIHByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoXCJpbnRlcm5hbFwiKTtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5sYWJlbChcIkludGVybmFsIEVycm9yXCIpO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBcbiAgICAgICAgICAgIEVycm9yIGluIGluc3RydWN0b3IgZmVlZGJhY2suXG4gICAgICAgICAgICBQbGVhc2Ugc2hvdyB0aGUgZm9sbG93aW5nIHRvIGFuIGluc3RydWN0b3I6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxwcmU+PHN0cm9uZz4ke2Vycm9yLnRwJG5hbWV9PC9zdHJvbmc+OiAke1NrLmZmaS5yZW1hcFRvSnMoZXJyb3IuYXJncyl9PC9wcmU+YDtcblxuICAgICAgICBpZiAoZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBsYXN0VHJhY2ViYWNrID0gZXJyb3IudHJhY2ViYWNrLnNsaWNlKC0xKVswXTtcbiAgICAgICAgICAgIGlmIChsYXN0VHJhY2ViYWNrLmZpbGVuYW1lLnNsaWNlKDAsIC0zKSA9PT0gZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICAgICAgICAgIGxhc3RUcmFjZWJhY2subGluZW5vIC09IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5pbnN0cnVjdG9yLmxpbmVPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdHJhY2ViYWNrRm9ybWF0dGVkPSBlcnJvci50cmFjZWJhY2subWFwKGZyYW1lID0+XG4gICAgICAgICAgICAgICAgYEZpbGUgPHNwYW4gY2xhc3M9XCJmaWxlbmFtZVwiPlwiJHtmcmFtZS5maWxlbmFtZX1cIjwvc3Bhbj4sIGArXG4gICAgICAgICAgICAgICAgYGxpbmUgPHNwYW4gY2xhc3M9XCJsaW5lbm9cIj4ke2ZyYW1lLmxpbmVub308L3NwYW4+XFxuYCkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYDxwcmU+JHt0cmFjZWJhY2tGb3JtYXR0ZWR9PC9wcmU+YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxufSIsImNvbnN0IG1ha2VUYWIgPSBmdW5jdGlvbihmaWxlbmFtZSwgZnJpZW5kbHlOYW1lLCBoaWRlSWZFbXB0eSkge1xyXG4gICAgaWYgKGZyaWVuZGx5TmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZnJpZW5kbHlOYW1lID0gZmlsZW5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogZGlzcGxheS5maWxlbmFtZSgpID09PSAnJHtmaWxlbmFtZX0nfSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiBkaXNwbGF5LmZpbGVuYW1lLmJpbmQoJGRhdGEsICcke2ZpbGVuYW1lfScpLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogISR7aGlkZUlmRW1wdHl9IHx8IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCcke2ZpbGVuYW1lfScpXCI+XHJcbiAgICAgICAgICAgICR7ZnJpZW5kbHlOYW1lfTwvYT5cclxuICAgIDwvbGk+YDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgRklMRVNfSFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZmlsZXNcIlxyXG4gICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZmlsZXMudmlzaWJsZVwiPlxyXG48dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxyXG5cclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPHN0cm9uZz5WaWV3OiA8L3N0cm9uZz5cclxuICAgIDwvbGk+XHJcblxyXG4gICAgJHttYWtlVGFiKFwiYW5zd2VyLnB5XCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIWluc3RydWN0aW9ucy5tZFwiLCBcIkluc3RydWN0aW9uc1wiKX1cclxuICAgICR7bWFrZVRhYihcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIiwgXCJTZXR0aW5nc1wiKX1cclxuICAgICR7bWFrZVRhYihcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiU3RhcnRpbmcgQ29kZVwiKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9ydW4ucHlcIiwgXCJPbiBSdW5cIil9XHJcbiAgICAke21ha2VUYWIoXCIhb25fY2hhbmdlLnB5XCIsIFwiT24gQ2hhbmdlXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX2V2YWwucHlcIiwgXCJPbiBFdmFsXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiP21vY2tfdXJscy5ibG9ja3B5XCIsIFwiVVJMIERhdGFcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIiwgXCJTYW1wbGUgU3VibWlzc2lvbnNcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhdGFncy5ibG9ja3B5XCIsIFwiVGFnc1wiLCB0cnVlKX1cclxuICBcclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICByb2xlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5BZGQgTmV3PC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP21vY2tfdXJscy5ibG9ja3B5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJz9tb2NrX3VybHMuYmxvY2tweScpXCI+VVJMIERhdGE8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz90YWdzLmJsb2NrcHknKVwiPlRhZ3M8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz9zYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweScpXCI+U2FtcGxlIFN1Ym1pc3Npb25zPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IGFzc2lnbm1lbnQub25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJyFvbl9jaGFuZ2UucHknKVwiPk9uIENoYW5nZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiBhc3NpZ25tZW50Lm9uRXZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnIW9uX2V2YWwucHknKVwiPk9uIEV2YWw8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U3RhcnRpbmcgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5JbnN0cnVjdG9yIEZpbGU8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U3R1ZGVudCBGaWxlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICBcclxuPC91bD5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG4vKipcclxuICogRmlsZW5hbWVzIGxpdmUgaW4gb25lIG9mIGZpdmUgcG9zc2libGUgbmFtZXNwYWNlczpcclxuICogIEluc3RydWN0b3IgKCEpOiBJbnZpc2libGUgdG8gdGhlIHN0dWRlbnQgdW5kZXIgYWxsIGNpcmN1bXN0YW5jZXNcclxuICogIFN0YXJ0IFNwYWNlICheKTogVXNlZCB0byByZXNldCB0aGUgc3R1ZGVudCBuYW1lc3BhY2VcclxuICogIFN0dWRlbnQgU3BhY2UgKCk6IFZpc2libGUgdG8gdGhlIHN0dWRlbnQgd2hlbiBkaXNwbGF5LmhpZGVGaWxlcyBpcyBub3QgdHJ1ZSwgYWJsZSB0byBiZSBlZGl0ZWRcclxuICogIEhpZGRlbiBTcGFjZSAoPyk6IE5vdCBkaXJlY3RseSB2aXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgYWNjZXNzaWJsZSBwcm9ncmFtbWF0aWNhbGx5XHJcbiAqICBSZWFkLW9ubHkgU3BhY2UgKCYpOiBBbiBpbnN0cnVjdG9yIGZpbGUgdHlwZSB2aXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgaXMgdW5lZGl0YWJsZSBieSB0aGVtXHJcbiAqICBTZWNyZXQgU3BhY2UgKCQpOiBOb3QgdmlzaWJsZSBmcm9tIHRoZSBtZW51IGF0IGFsbCwgc29tZSBvdGhlciBtZWNoYW5pc20gY29udHJvbHMgaXRcclxuICogIEdlbmVyYXRlZCBTcGFjZSAoKik6IFZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBkZXN0cm95ZWQgYWZ0ZXIgRW5naW5lLkNsZWFyLiBDYW4gc2hhZG93IGFuIGFjdHVhbCBmaWxlLlxyXG4gKiAgQ29uY2F0ZW5hdGVkIFNwYWNlICgjKTogVXNlZCB3aGVuIGJ1bmRsaW5nIGEgc3BhY2UgZm9yIHRoZSBzZXJ2ZXIuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGxldCBTVEFSVElOR19GSUxFUyA9IFtcclxuICAgIC8vIFN1Ym1pc3Npb25cclxuICAgIFwiYW5zd2VyLnB5XCIsXHJcbiAgICAvLyBJbnN0cnVjdG9yIGZpbGVzXHJcbiAgICBcIiFpbnN0cnVjdGlvbnMubWRcIixcclxuICAgIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgXCJec3RhcnRpbmdfY29kZS5weVwiLFxyXG4gICAgXCIhb25fcnVuLnB5XCIsXHJcbiAgICBcIiRzZXR0aW5ncy5ibG9ja3B5XCIsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQkFTSUNfTkVXX0ZJTEVTID0gW1xyXG4gICAgXCIhb25fY2hhbmdlLnB5XCIsXHJcbiAgICBcIiFvbl9ldmFsLnB5XCIsXHJcbiAgICBcIj9tb2NrX3VybHMuYmxvY2tweVwiLFxyXG4gICAgXCIhdGFncy5ibG9ja3B5XCIsXHJcbiAgICBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXHJcbl07XHJcblxyXG5jb25zdCBERUxFVEFCTEVfU0lNUExFX0ZJTEVTID0gW1wiIW9uX2NoYW5nZS5weVwiLCBcIiFvbl9ldmFsLnB5XCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOREVMRVRBQkxFX0ZJTEVTID0gW1wiYW5zd2VyLnB5XCIsIFwiIWluc3RydWN0aW9ucy5tZFwiLCBcIiFhc3NpZ25tZW50X3NldHRpbmdzLnB5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiIW9uX3J1bi5weVwiLCBcIiRzZXR0aW5ncy5ibG9ja3B5XCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOUkVOQU1BQkxFX0ZJTEVTID0gW1wiYW5zd2VyLnB5XCIsIFwiIWluc3RydWN0aW9ucy5tZFwiLCBcIiFhc3NpZ25tZW50X3NldHRpbmdzLnB5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiIW9uX3J1bi5weVwiLCBcIiRzZXR0aW5ncy5ibG9ja3B5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiFvbl9jaGFuZ2UucHlcIiwgXCIhb25fZXZhbC5weVwiLCBcIj9tb2NrX3VybHMuYmxvY2tweVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhdGFncy5ibG9ja3B5XCIsIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCJdO1xyXG5cclxuY2xhc3MgQmxvY2tQeUZpbGUge1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gZmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzIHx8IFwiXCI7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1vZGVsRmlsZShmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgIHJldHVybiB7XCJmaWxlbmFtZVwiOiBrby5vYnNlcnZhYmxlKGZpbGVuYW1lKSwgY29udGVudHM6IGtvLm9ic2VydmFibGUoY29udGVudHMgfHwgXCJcIil9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbmNhdGVuYXRlZEZpbGUoY29uY2F0ZW5hdGVkRmlsZSwgbW9kZWxGaWxlTGlzdCkge1xyXG4gICAgaWYgKGNvbmNhdGVuYXRlZEZpbGUpIHtcclxuICAgICAgICBsZXQgZmlsZXMgPSBKU09OLnBhcnNlKGNvbmNhdGVuYXRlZEZpbGUpO1xyXG4gICAgICAgIGZpbGVzID0gZmlsZXMubWFwKGZpbGUgPT4gbWFrZU1vZGVsRmlsZShmaWxlLmZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKSk7XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdChmaWxlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtb2RlbEZpbGVMaXN0KCkubWFwKGZpbGUgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLmZpbGVuYW1lKCksXHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiBmaWxlLmNvbnRlbnRzKClcclxuICAgICAgICB9O1xyXG4gICAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIGtvLnB1cmVDb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIG1vZGVsRmlsZUxpc3QoKS5mb3JFYWNoKGZpbGUgPT5cclxuICAgICAgICAgICAgcmVzdWx0W2ZpbGUuZmlsZW5hbWUoKV0gPSBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBYnN0cmFjdHMgYXdheSBkYXRhYmFzZSBsb2dpY1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHlGaWxlU3lzdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfID0ge307XHJcbiAgICAgICAgdGhpcy5tb3VudEZpbGVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMud2F0Y2hNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMud2F0Y2hlc18gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaEZpbGUoZmlsZW5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEoZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykpIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFdhdGNoaW5nRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaE1vZGVsKCkge1xyXG4gICAgICAgIGxldCBmaWxlc3lzdGVtID0gdGhpcztcclxuICAgICAgICBbdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyxcclxuICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlc10uZm9yRWFjaChmaWxlQXJyYXkgPT5cclxuICAgICAgICAgICAgZmlsZUFycmF5LnN1YnNjcmliZShmdW5jdGlvbihjaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RlbEZpbGUgPSBjaGFuZ2UudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiYWRkZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFjayBuZXcgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGZpbGVzeXN0ZW0ubmV3RmlsZShtb2RlbEZpbGUuZmlsZW5hbWUoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKCksIG1vZGVsRmlsZS5jb250ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0ubm90aWZ5V2F0Y2hlcyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKG1vZGVsRmlsZS5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMsIFwiYXJyYXlDaGFuZ2VcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFuc3dlci5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBzdWJtaXNzaW9uLmNvZGUpXHJcbiAgICAvLyAhb25fcnVuLnB5LCAhb25fY2hhbmdlLnB5LCAhb25fZXZhbC5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVsZXZhbnQgYXNzaWdubWVudC48d2hhdGV2ZXI+XHJcbiAgICAvLyBec3RhcnRpbmdfY29kZS5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gXndoYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gIXdoYXRldmVyIG9yID93aGF0ZXZlclxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZWxlbWVudHMgb2YgYXNzaWdubWVudC5leHRyYUZpbGVzXHJcbiAgICAvLyBPdGhlcndpc2U6XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBzdWJtaXNzaW9uLmNvZGVcclxuICAgIC8qKlxyXG4gICAgICogTmV3IHNwZWNpYWwgZmlsZXMgbmVlZCB0byBiZSByZWdpc3RlcmVkIGhlcmVcclxuICAgICAqIEBwYXJhbSBmaWxlIHtCbG9ja1B5RmlsZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9ic2VydmVGaWxlXyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2NoYW5nZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ldmFsLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFpbnN0cnVjdGlvbnMubWRcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiXnN0YXJ0aW5nX2NvZGUucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiF0YWdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnRhZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIkc2V0dGluZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJeXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lLnN0YXJ0c1dpdGgoXCIhXCIpIHx8IGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIj9cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvYnNlcnZlSW5BcnJheV8oZmlsZSwgYXJyYXkpIHtcclxuICAgICAgICBmaWxlLm93bmVyID0gYXJyYXk7XHJcbiAgICAgICAgbGV0IGNvZGVCdW5kbGUgPSBmaWxlLm93bmVyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgY29kZUJ1bmRsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29kZUJ1bmRsZVtpXS5maWxlbmFtZSgpID09PSBmaWxlLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlLmhhbmRsZSA9IGNvZGVCdW5kbGVbaV0uY29udGVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbGUuaGFuZGxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbWFrZU1vZGVsRmlsZShmaWxlLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSBuZXdGaWxlLmNvbnRlbnRzO1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKG5ld0ZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VudEZpbGVzKCkge1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCJec3RhcnRpbmdfY29kZS5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhb25fcnVuLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFpbnN0cnVjdGlvbnMubWRcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdGaWxlKGZpbGVuYW1lLCBjb250ZW50cywgbW9kZWxGaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lIGluIHRoaXMuZmlsZXNfKSB7XHJcbiAgICAgICAgICAgIC8vIEZpbGUgYWxyZWFkeSBleGlzdHMhIEp1c3QgdXBkYXRlIGl0cyBoYW5kbGVcclxuICAgICAgICAgICAgbGV0IGV4aXN0aW5nRmlsZSA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICAgICAgaWYgKG1vZGVsRmlsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVGaWxlXyhleGlzdGluZ0ZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdGaWxlLmhhbmRsZSA9IG1vZGVsRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBleGlzdGluZ0ZpbGUuaGFuZGxlKGNvbnRlbnRzIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdGaWxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZpbGUgZG9lcyBub3QgZXhpc3RcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBuZXcgQmxvY2tQeUZpbGUodGhpcy5tYWluLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXSA9IG5ld0ZpbGU7XHJcbiAgICAgICAgICAgIGlmIChtb2RlbEZpbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlRmlsZV8obmV3RmlsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdGaWxlLmhhbmRsZSA9IG1vZGVsRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3RmlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIGNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZpbGVuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxvYmplY3R9IFRoZSBpbmZvIGFib3V0IHRoZSBmaWxlLCBvciBmYWxzZSBpZiBpdCBjb3VsZCBub3QgYmUgZGVsZXRlZFxyXG4gICAgICovXHJcbiAgICBkZWxldGVGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKERFTEVUQUJMRV9TSU1QTEVfRklMRVMuaW5kZXhPZihmaWxlbmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlID0gdGhpcy5kZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZShudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXJzIGEgY2FsbGJhY2sgdG8gZXZlbnR1YWxseSBjYWxsIGRlbGV0ZUZpbGVMb2NhbGx5X1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIucmVtb3ZlKG1vZGVsRmlsZSA9PiBtb2RlbEZpbGUuZmlsZW5hbWUgPT09IGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kIHx8IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBkZWxldGUgdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2suZGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5V2F0Y2hlcyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGUuZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sudXBkYXRlZChmaWxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy9UT0RPOiBNb3ZlIGdldCBsaW5rIGRvd24gdG8gZm9vdGVyLCByZW1vdmUgdmVydGljYWwgYmFyIGZyb20gcXVpY2stbWVudVxyXG5leHBvcnQgbGV0IEZPT1RFUl9IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1zdGF0dXNcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkQXNzaWdubWVudCcpXCI+TG9hZCBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlQXNzaWdubWVudCcpXCI+U2F2ZSBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRmlsZScpXCI+TG9hZCBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlRmlsZScpXCI+U2F2ZSBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRGF0YXNldCcpXCI+TG9hZCBEYXRhc2V0PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2dFdmVudCcpXCI+TG9nIEV2ZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCd1cGRhdGVTdWJtaXNzaW9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuc2VydmVyLmZvcmNlLnVwZGF0ZVN1Ym1pc3Npb25cIj5VcGRhdGUgU3VibWlzc2lvbjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnb25FeGVjdXRpb24nKVwiPkV4ZWN1dGlvbjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVpLnNlcnZlci5tZXNzYWdlc1wiPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5Vc2VyOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmlkXCI+PC9zcGFuPiAoPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5uYW1lXCI+PC9zcGFuPik8L3NwYW4+LCBcclxuICAgICAgICA8c3Bhbj5Db3Vyc2U6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuY291cnNlSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Hcm91cDogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5ncm91cElkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudDogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogYXNzaWdubWVudC5pZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkFzc2lnbm1lbnQgVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogYXNzaWdubWVudC52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+U3VibWlzc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi5pZFwiPjwvc3Bhbj48L3NwYW4+LCBcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uIFZlcnNpb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHN1Ym1pc3Npb24udmVyc2lvblwiPjwvc3Bhbj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7IiwiLy8gVE9ETzogU2hvdWxkIGRpc2FibGUgYnV0dG9ucyBpZiB3ZSBjYW4ndCBhY3RpdmF0ZSB0aGVtLlxuXG5leHBvcnQgY29uc3QgSElTVE9SWV9UT09MQkFSX0hUTUwgPSBgXG48ZGl2IGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXRvb2xiYXIgY29sLW1kLTEyXCIgZGF0YS1iaW5kPVwidmlzaWJsZTogZGlzcGxheS5oaXN0b3J5TW9kZVwiPlxuXG4gICAgPGZvcm0gY2xhc3M9XCJmb3JtLWlubGluZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXN0YXJ0IGJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3Rvcnkuc3RhcnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1iYWNrd2FyZCc+PC9zcGFuPiBTdGFydFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkucHJldmlvdXNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtYmFja3dhcmQnPjwvc3Bhbj4gUHJldmlvdXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJibG9ja3B5LWhpc3Rvcnktc2VsZWN0b3IgZm9ybS1jb250cm9sIGN1c3RvbS1zZWxlY3QgbXItMlwiIGFyaWEtdGl0bGU9XCJIaXN0b3J5IFNlbGVjdG9yXCI+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS51c2VcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZmlsZS1pbXBvcnQnPjwvc3Bhbj4gVXNlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5uZXh0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZvcndhcmQnPjwvc3Bhbj4gTmV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5Lm1vc3RSZWNlbnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1mb3J3YXJkJz48L3NwYW4+IE1vc3QgUmVjZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbjwvZGl2PlxuYDtcblxuLyoqXG4gKiBBbiBvYmplY3QgZm9yIGRpc3BsYXlpbmcgdGhlIHVzZXIncyBjb2RpbmcgbG9ncyAodGhlaXIgaGlzdG9yeSkuXG4gKiBBIGxpZ2h0d2VpZ2h0IGNvbXBvbmVudCwgaXRzIG9ubHkgam9iIGlzIHRvIG9wZW4gYSBkaWFsb2cuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUhpc3Rvcnl9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEJsb2NrUHlIaXN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgICAgIHRoaXMuZWRpdEV2ZW50cyA9IFtdO1xuICAgIH1cblxuICAgIGxvYWQoaGlzdG9yeSkge1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBoaXN0b3J5O1xuICAgICAgICB0aGlzLmVkaXRFdmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9ICQoXCIuYmxvY2tweS1oaXN0b3J5LXNlbGVjdG9yXCIpLmVtcHR5KCk7XG4gICAgICAgIGxldCBlZGl0SWQgPSAwO1xuICAgICAgICBoaXN0b3J5XG4gICAgICAgICAgICAuZmlsdGVyKChlbnRyeSkgPT4gKFxuICAgICAgICAgICAgICAgICFlbnRyeS5maWxlX3BhdGguc3RhcnRzV2l0aChcIl9pbnN0cnVjdG9yLlwiKSAmJlxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlICE9PSBcIkNvbXBpbGVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlICE9PSBcIkludGVydmVudGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCkgfHwgZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJYLVN1Ym1pc3Npb24uTE1TXCIpXG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBldmVudF90eXBlID0gUkVNQVBfRVZFTlRfVFlQRVNbZW50cnkuZXZlbnRfdHlwZV0gfHwgZW50cnkuZXZlbnRfdHlwZTtcbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheWVkID0gcHJldHR5UHJpbnREYXRlVGltZShlbnRyeS5jbGllbnRfdGltZXN0YW1wKSArXCIgLSBcIitldmVudF90eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkaXNhYmxlID0gKGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiRmlsZS5FZGl0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSAkKFwiPG9wdGlvbj48L29wdGlvbj5cIiwge3RleHQ6IGRpc3BsYXllZCwgZGlzYWJsZWQ6IGRpc2FibGV9KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0VkaXRFdmVudChlbnRyeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmF0dHIoXCJ2YWx1ZVwiLCBlZGl0SWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRFdmVudHMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRJZCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yLmFwcGVuZChvcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWF4KDAsIGVkaXRJZC0xKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IuY2hhbmdlKChldnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1vdmVUb1N0YXJ0KCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbCgwKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlUHJldmlvdXMoKSB7XG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWF4KDAsIGN1cnJlbnRJZC0xKSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgbW92ZU5leHQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWluKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgtMSwgY3VycmVudElkKzEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlVG9Nb3N0UmVjZW50KCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbCh0aGlzLmVkaXRFdmVudHMubGVuZ3RoLTEpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZUVkaXRvcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uc2V0Q29kZSh0aGlzLmVkaXRFdmVudHNbY3VycmVudElkXS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgICAgICBsZXQgY29kZSA9IHRoaXMuZWRpdEV2ZW50c1tjdXJyZW50SWRdLm1lc3NhZ2U7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuZmlsZS5oYW5kbGUoY29kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VkaXRFdmVudChlbnRyeSkge1xuICAgICAgICByZXR1cm4gKChlbnRyeS5ldmVudF90eXBlID09PSBcIkZpbGUuRWRpdFwiIHx8XG4gICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgPT09IFwiRmlsZS5DcmVhdGVcIikgJiZcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID09PSBlbnRyeS5maWxlX3BhdGgpO1xuICAgIH1cblxufVxuXG5jb25zdCBSRU1BUF9FVkVOVF9UWVBFUyA9IHtcbiAgICBcIlNlc3Npb24uU3RhcnRcIjogXCJCZWdhbiBzZXNzaW9uXCIsXG4gICAgXCJYLUlQLkNoYW5nZVwiOiBcIkNoYW5nZWQgSVAgYWRkcmVzc1wiLFxuICAgIFwiRmlsZS5FZGl0XCI6IFwiRWRpdGVkIGNvZGVcIixcbiAgICBcIkZpbGUuQ3JlYXRlXCI6IFwiU3RhcnRlZCBhc3NpZ25tZW50XCIsXG4gICAgXCJSdW4uUHJvZ3JhbVwiOiBcIlJhbiBwcm9ncmFtXCIsXG4gICAgXCJDb21waWxlLkVycm9yXCI6IFwiU3ludGF4IGVycm9yXCIsXG4gICAgXCJYLVN1Ym1pc3Npb24uTE1TXCI6IFwiVXBkYXRlZCBncmFkZVwiXG59O1xuXG5jb25zdCBtb250aE5hbWVzID0gW1xuICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsXG4gICAgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLFxuICAgIFwiQXVnXCIsIFwiU2VwdFwiLCBcIk9jdFwiLFxuICAgIFwiTm92XCIsIFwiRGVjXCJcbl07XG5jb25zdCB3ZWVrRGF5cyA9IFtcbiAgICBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLFxuICAgIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsXG4gICAgXCJTYXRcIlxuXTtcblxuZnVuY3Rpb24gaXNTYW1lRGF5KGZpcnN0LCBzZWNvbmQpIHtcbiAgICByZXR1cm4gZmlyc3QuZ2V0RGF0ZSgpID09PSBzZWNvbmQuZ2V0RGF0ZSgpICYmXG4gICAgICAgIGZpcnN0LmdldE1vbnRoKCkgPT09IHNlY29uZC5nZXRNb250aCgpICYmXG4gICAgICAgIGZpcnN0LmdldEZ1bGxZZWFyKCkgPT09IHNlY29uZC5nZXRGdWxsWWVhcigpO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwYXJzZSBhIGRhdGUvdGltZSBzdHJpbmcgYW5kIHJld3JpdGUgaXQgYXMgc29tZXRoaW5nXG4gKiBtb3JlIGh1bWFuIHJlYWRhYmxlLlxuICogQHBhcmFtIHtTdHJpbmd9IHRpbWVTdHJpbmcgLSB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRpbWUgKFwiWVlZWU1NREQgSEhNTVNTXCIpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSAtIEEgaHVtYW4tcmVhZGFibGUgdGltZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIHByZXR0eVByaW50RGF0ZVRpbWUodGltZVN0cmluZykge1xuICAgIC8qbGV0IHllYXIgPSB0aW1lU3RyaW5nLnNsaWNlKDAsIDQpLFxuICAgICAgICBtb250aCA9IHBhcnNlSW50KHRpbWVTdHJpbmcuc2xpY2UoNCwgNiksIDEwKS0xLFxuICAgICAgICBkYXkgPSB0aW1lU3RyaW5nLnNsaWNlKDYsIDgpLFxuICAgICAgICBob3VyID0gdGltZVN0cmluZy5zbGljZSg5LCAxMSksXG4gICAgICAgIG1pbnV0ZXMgPSB0aW1lU3RyaW5nLnNsaWNlKDExLCAxMyksXG4gICAgICAgIHNlY29uZHMgPSB0aW1lU3RyaW5nLnNsaWNlKDEzLCAxNSk7Ki9cbiAgICAvLyBUT0RPOiBIYW5kbGUgdGltZXpvbmVzIGNvcnJlY3RseVxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBwYXN0ID0gbmV3IERhdGUocGFyc2VJbnQodGltZVN0cmluZywgMTApKTtcbiAgICBpZiAoaXNTYW1lRGF5KG5vdywgcGFzdCkpIHtcbiAgICAgICAgcmV0dXJuIFwiVG9kYXkgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGF5U3RyID0gd2Vla0RheXNbcGFzdC5nZXREYXkoKV07XG4gICAgICAgIGxldCBtb250aFN0ciA9IG1vbnRoTmFtZXNbcGFzdC5nZXRNb250aCgpXTtcbiAgICAgICAgbGV0IGRhdGUgPSBkYXlTdHIgKyBcIiwgXCIgKyBtb250aFN0ciArIFwiIFwiICsgcGFzdC5nZXREYXRlKCk7XG4gICAgICAgIGlmIChub3cuZ2V0RnVsbFllYXIoKSA9PT0gcGFzdC5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZSArIFwiIGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZSArIFwiLCBcIitwYXN0LmdldEZ1bGxZZWFyKCkgKyBcIiBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKlxuICogT3BlbnMgdGhlIGhpc3RvcnkgZGlhbG9nIGJveC4gVGhpcyByZXF1aXJlcyBhIHRyaXAgdG8gdGhlIHNlcnZlciBhbmRcbiAqIG9jY3VycyBhc3luY2hyb25vdXNseS4gVGhlIHVzZXJzJyBjb2RlIGlzIHNob3duIGluIHByZWZvcm1hdHRlZCB0ZXh0XG4gKiB0YWdzIChubyBjb2RlIGhpZ2hsaWdodGluZyBjdXJyZW50bHkpIGFsb25nIHdpdGggdGhlIHRpbWVzdGFtcC5cbiAqL1xuQmxvY2tQeUhpc3RvcnkucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGlhbG9nID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nO1xuICAgIHZhciBib2R5ID0gXCI8cHJlPmEgPSAwPC9wcmU+XCI7XG4gICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmdldEhpc3RvcnkoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgYm9keSA9IGRhdGEucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoY29tcGxldGUsIGVsZW0pIHsgXG4gICAgICAgICAgICB2YXIgY29tcGxldGVfc3RyID0gcHJldHR5UHJpbnREYXRlVGltZShlbGVtLnRpbWUpO1xuICAgICAgICAgICAgdmFyIG5ld19saW5lID0gXCI8Yj5cIitjb21wbGV0ZV9zdHIrXCI8L2I+PGJyPjxwcmU+XCIrZWxlbS5jb2RlK1wiPC9wcmU+XCI7XG4gICAgICAgICAgICByZXR1cm4gY29tcGxldGUrXCJcXG5cIituZXdfbGluZTtcbiAgICAgICAgfSwgXCJcIik7XG4gICAgICAgIGRpYWxvZy5zaG93KFwiV29yayBIaXN0b3J5XCIsIGJvZHksIGZ1bmN0aW9uKCkge30pO1xuICAgIH0pO1xufTsiLCJpbXBvcnQge1RSQUNFX0hUTUx9IGZyb20gXCJ0cmFjZS5qc1wiO1xuaW1wb3J0IHtESUFMT0dfSFRNTH0gZnJvbSBcImRpYWxvZy5qc1wiO1xuaW1wb3J0IHtGRUVEQkFDS19IVE1MfSBmcm9tIFwiZmVlZGJhY2suanNcIjtcbmltcG9ydCB7RklMRVNfSFRNTH0gZnJvbSBcImZpbGVzLmpzXCI7XG5pbXBvcnQge0ZPT1RFUl9IVE1MfSBmcm9tIFwiZm9vdGVyLmpzXCI7XG5pbXBvcnQge0VESVRPUlNfSFRNTH0gZnJvbSBcImVkaXRvcnMuanNcIjtcbmltcG9ydCB7Q09OU09MRV9IVE1MfSBmcm9tIFwiY29uc29sZS5qc1wiO1xuXG4vKipcbiAqIEBlbnVtIHtzdHJ9XG4gKi9cbmV4cG9ydCBsZXQgU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zID0ge1xuICAgIEZFRURCQUNLOiBcImZlZWRiYWNrXCIsXG4gICAgVFJBQ0U6IFwidHJhY2VcIixcbiAgICBOT05FOiBcIm5vbmVcIlxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMoc2VsZiwgbW9kZWwpIHtcbiAgICBsZXQgaGlnaGxpZ2h0VGltZW91dCA9IG51bGw7XG4gICAgbW9kZWwudWkuaW5zdHJ1Y3Rpb25zLmN1cnJlbnQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKGhpZ2hsaWdodFRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWdobGlnaHRUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBoaWdobGlnaHRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLmNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktaW5zdHJ1Y3Rpb25zIHByZSBjb2RlXCIpLm1hcCggKGksIGJsb2NrKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfSk7XG59XG5cbi8vIFRPRE86IEdldCBzaGFyZWFibGUgbGluayBidXR0b25cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VJbnRlcmZhY2UobWFpbikge1xuICAgIHJldHVybiBgXG48ZGl2IGNsYXNzPSdibG9ja3B5LWNvbnRlbnQgY29udGFpbmVyLWZsdWlkJz5cblxuICAgIDwhLS0gRGlhbG9nIC0tPlxuICAgICR7RElBTE9HX0hUTUx9XG4gICAgXG4gICAgPCEtLSBIaWRkZW4gQ2FwdHVyZSBDYW52YXMgLS0+XG4gICAgPGNhbnZhcyBpZD0nY2FwdHVyZS1jYW52YXMnIGNsYXNzPSdkLW5vbmUnIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2NhbnZhcz5cbiAgICBcbiAgICA8IS0tIFJvdyAxOiBIZWFkZXIgYW5kIFF1aWNrIE1lbnUgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICAgICAgIFxuICAgICAgICAgPCEtLSBEZXNjcmlwdGlvbiAtLT5cbiAgICAgICAgIDxkaXYgY2xhc3M9J2NvbC1tZC0xMCBibG9ja3B5LXBhbmVsIGJsb2NrcHktaGVhZGVyJ1xuICAgICAgICAgICAgICAgcm9sZT0naGVhZGluZycgYXJpYS1sYWJlbD0nQXNzaWdubWVudCBEZXNjcmlwdGlvbic+XG4gICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gQXNzaWdubWVudCBOYW1lIC0tPlxuICAgICAgICAgICAgPHNwYW4gcm9sZT0naGVhZGluZycgYXJpYS1sZXZlbD0nMSdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2tweS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5CbG9ja1B5OiA8L3N0cm9uZz4gXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBhc3NpZ25tZW50Lm5hbWUnPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBSZXNldCBJbnN0cnVjdGlvbnMgQnV0dG9uIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrcHktaW5zdHJ1Y3Rpb25zLXJlc2V0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5pbnN0cnVjdGlvbnMuaXNDaGFuZ2VkXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5pbnN0cnVjdGlvbnMucmVzZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIFJlc2V0IGluc3RydWN0aW9uczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIEluc3RydWN0aW9ucyAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktaW5zdHJ1Y3Rpb25zJ1xuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJodG1sOiB1aS5pbnN0cnVjdGlvbnMuY3VycmVudFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXF1aWNrLW1lbnUnXG4gICAgICAgICAgICAgcm9sZT0nbWVudWJhcicgYXJpYS1sYWJlbD0nUXVpY2sgTWVudScgdGl0bGU9XCJRdWljayBNZW51XCI+XG4gICAgICAgICAgICA8IS0tIEdldCBTaGFyZWFibGUgTGluayAtLT5cbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICBHZXQgc2hhcmVhYmxlIGxpbms8L2J1dHRvbj4tLT5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInZpc2libGU6IHVpLm1lbnUuaXNTdWJtaXR0ZWRcIj5cbiAgICAgICAgICAgICAgICBZb3VyIHN1Ym1pc3Npb24gaXMgcmVhZHkgdG8gYmUgcmV2aWV3ZWQhPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5tZW51LmNhbk1hcmtTdWJtaXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5tZW51LnRleHRNYXJrU3VibWl0dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLm1lbnUuY2xpY2tNYXJrU3VibWl0dGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8IS0tIFZpZXcgYXMgaW5zdHJ1Y3RvciAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkucm9sZS5pc0dyYWRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGlkPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogZGlzcGxheS5pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktYXMtaW5zdHJ1Y3RvclwiPlxuICAgICAgICAgICAgICAgICAgICBWaWV3IGFzIGluc3RydWN0b3JcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBSb3cgMjogQ29uc29sZSBhbmQgRmVlZGJhY2sgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICBcbiAgICAgICAgPCEtLSBDb25zb2xlIC0tPlxuICAgICAgICAke0NPTlNPTEVfSFRNTH1cbiAgICAgICAgIFxuICAgICAgICA8IS0tIEZlZWRiYWNrIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNGZWVkYmFja1Zpc2libGUgLS0+XG4gICAgICAgICR7RkVFREJBQ0tfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgIFxuICAgICAgICA8IS0tIFRyYWNlIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNUcmFjZVZpc2libGUgLS0+XG4gICAgICAgICR7VFJBQ0VfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAzOiBGaWxlIE5hdmlnYXRpb24gLS0+XG4gICAgPCEtLSBrbyBpZjogdWkuZmlsZXMudmlzaWJsZSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAke0ZJTEVTX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgPCEtLSAva28gLS0+XG4gICAgXG4gICAgPCEtLSBWaWV3IFJvdyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7RURJVE9SU19IVE1MfVxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBGb290ZXIgUm93IC0tPiAgICBcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7Rk9PVEVSX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgXG48L2Rpdj5cbiAgICBgO1xufTsiLCJpbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgc2F2ZUFzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcblxuLyoqXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGxldCBTdGF0dXNTdGF0ZSA9IHtcbiAgICBSRUFEWTogXCJyZWFkeVwiLFxuICAgIEFDVElWRTogXCJhY3RpdmVcIixcbiAgICBSRVRSWUlORzogXCJyZXRyeWluZ1wiLFxuICAgIEZBSUxFRDogXCJmYWlsZWRcIixcbiAgICBPRkZMSU5FOiBcIm9mZmxpbmVcIlxufTtcblxuLyoqXG4gKiBPYmplY3QgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgZXh0ZXJuYWwgc2VydmVycy4gVGhpcyBpbmNsdWRlcyBmdW5jdGlvbmFsaXR5IGZvclxuICogc2F2aW5nIGFuZCBsb2FkaW5nIGZpbGVzLCBsb2dnaW5nIGV2ZW50cywgc2F2aW5nIGNvbXBsZXRpb25zLCBhbmQgcmV0cmlldmluZyBoaXN0b3J5LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlTZXJ2ZXJ9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlTZXJ2ZXIobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICAvLyBTYXZlIFVSTHMgbG9jYWxseSBmb3IgcXVpY2tlciBhY2Nlc3NcbiAgICB0aGlzLnVybHMgPSBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscztcblxuICAgIC8vIEFkZCB0aGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25cbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcIkJMT0NLUFlcIik7XG5cbiAgICAvLyBGYXVsdFJlc2lzdGFudENhY2hlXG4gICAgdGhpcy5xdWV1ZSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwibG9nRXZlbnRcIiwgXCJbXVwiKSksXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwidXBkYXRlU3VibWlzc2lvblwiLCBcIltdXCIpKVxuICAgIH07XG4gICAgdGhpcy5NQVhfUVVFVUVfU0laRSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiAyMDAsXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiA1MFxuICAgIH07XG5cbiAgICB0aGlzLlRJTUVSX0RFTEFZID0gMTAwMDtcbiAgICB0aGlzLkZBSUxfREVMQVkgPSAyMDAwO1xuXG4gICAgdGhpcy50aW1lcnMgPSB7fTtcblxuICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzID0gMDtcblxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzID0gW107XG4gICAgdGhpcy5jcmVhdGVTdWJzY3JpcHRpb25zKCk7XG4gICAgdGhpcy5jaGVja0NhY2hlcygpO1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBJUCBhZGRyZXNzIGhhcyBjaGFuZ2VkLCBsb2dnaW5nIGFuIGV2ZW50IGlmIHRoYXQgb2NjdXJzLlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrSVAgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcIklQXCIpKSB7XG4gICAgICAgICAgICBsZXQgb2xkSVAgPSB0aGlzLnN0b3JhZ2UuZ2V0KFwiSVBcIik7XG4gICAgICAgICAgICBpZiAob2xkSVAgIT09IHJlc3BvbnNlLmlwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIFwib2xkXCI6IG9sZElQLFxuICAgICAgICAgICAgICAgICAgICBcIm5ld1wiOiByZXNwb25zZS5pcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nRXZlbnQoXCJYLUlQLkNoYW5nZVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoXCJJUFwiLCByZXNwb25zZS5pcCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlcmUgaGF2ZSBiZWVuIHByZXZpb3VzIGZhaWx1cmVzIGNhY2hlZCwgYW5kIGlmIHNvIHJldHJpZXMgdGhlbS5cbiAqIFRPRE86IHVwZGF0ZVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jaGVja0NhY2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUFzc2lnbm1lbnRcIikpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgXCJhc3NpZ25tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNhdmVBc3NpZ25tZW50XCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgIH1cbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5mb3JFYWNoKChmaWxlbmFtZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVGaWxlXCIgKyBmaWxlbmFtZSkpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSk7XG4gICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXVlKS5mb3JFYWNoKGZ1bmN0aW9uIChlbmRwb2ludCkge1xuICAgICAgICAoZnVuY3Rpb24gcHVzaEFueVF1ZXVlZChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHNlcnZlci5xdWV1ZVtlbmRwb2ludF0ucG9wKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gc2VydmVyLnVybHNbZW5kcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuX3Bvc3RSZXRyeShkYXRhLCBlbmRwb2ludCwgMTAwMCwgcHVzaEFueVF1ZXVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSh7XCJzdWNjZXNzXCI6IHRydWV9KTtcbiAgICB9KTtcbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAobW9kZWwsIGZpbGVuYW1lKSB7XG4gICAgbW9kZWwuc3Vic2NyaWJlKChjb250ZW50cykgPT5cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSA/IHRoaXMuc2F2ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSA6IGZhbHNlLCB0aGlzKTtcbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5wdXNoKGZpbGVuYW1lKTtcbn07XG5cbi8qKlxuICogVE9ETzogZml4XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5zdWJtaXNzaW9uLmNvZGUsIFwiYW5zd2VyLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uUnVuLCBcIiFvbl9ydW4ucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25FdmFsLCBcIiFvbl9ldmFsLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlLCBcIiFvbl9jaGFuZ2UucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zLCBcIiFpbnN0cnVjdGlvbnMubWRcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlLCBcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0dWRlbnRGaWxlcywgXCIjZXh0cmFTdHVkZW50RmlsZXMuYmxvY2tweVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwudWkuZmlsZXMuZXh0cmFTdGFydGluZ0ZpbGVzLCBcIiNleHRyYVN0YXJ0aW5nRmlsZXMuYmxvY2tweVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwudWkuZmlsZXMuZXh0cmFJbnN0cnVjdG9yRmlsZXMsIFwiI2V4dHJhSW5zdHJ1Y3RvckZpbGVzLmJsb2NrcHlcIik7XG59O1xuXG4vKipcbiAqXG4gKiBTb21lIHN1YnNjcmlwdGlvbnMgaGF2ZSB0byBoYXBwZW4gYWZ0ZXIgb3RoZXIgdGhpbmdzIGhhdmUgYmVlbiBsb2FkZWQuXG4gKiBSaWdodCBub3cgdGhpcyBpcyBqdXN0IGFmdGVyIENPUkdJUyBsaWJyYXJpZXMgaGF2ZSBiZWVuIGxvYWRlZCwgYnV0IG1heWJlXG4gKiB3ZSdsbCBhZGQgbW9yZSBsYXRlciBhbmQgdGhpcyB3aWxsIG5lZWQgdG8gYmUgcmVmYWN0b3JlZC5cbiAqXG4gKiBUT0RPOiBmaXhcbiAqXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmZpbmFsaXplU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3RoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzLnN1YnNjcmliZSh0aGlzLnNhdmVBc3NpZ25tZW50LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBkZWZhdWx0IHBheWxvYWQgZm9yIGFueSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIHNlcnZlciBBUElcbiAqIEByZXR1cm5zIHt7YXNzaWdubWVudF9pZDogKiwgY291cnNlX2lkOiAqLCBncm91cF9pZDogKiwgdXNlcl9pZDogKiwgdGltZXpvbmU6ICosIHZlcnNpb246ICosIHRpbWVzdGFtcDogKn19XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVNlcnZlckRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFzc2lnbm1lbnQgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudDtcbiAgICBsZXQgdXNlciA9IHRoaXMubWFpbi5tb2RlbC51c2VyO1xuICAgIGxldCBzdWJtaXNzaW9uID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb247XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1pY3Jvc2Vjb25kcyA9IG5vdy5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJhc3NpZ25tZW50X2lkXCI6IGFzc2lnbm1lbnQuaWQoKSxcbiAgICAgICAgXCJhc3NpZ25tZW50X2dyb3VwX2lkXCI6IHVzZXIuZ3JvdXBJZCgpLFxuICAgICAgICBcImNvdXJzZV9pZFwiOiB1c2VyLmNvdXJzZUlkKCksXG4gICAgICAgIFwic3VibWlzc2lvbl9pZFwiOiBzdWJtaXNzaW9uLmlkKCksXG4gICAgICAgIFwidXNlcl9pZFwiOiB1c2VyLmlkKCksXG4gICAgICAgIFwidmVyc2lvblwiOiBhc3NpZ25tZW50LnZlcnNpb24oKSxcbiAgICAgICAgXCJ0aW1lc3RhbXBcIjogbWljcm9zZWNvbmRzLFxuICAgICAgICBcInRpbWV6b25lXCI6IG5vdy5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgfTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgc3RhdHVzIGFuZCBtZXNzYWdlIGZvciB0aGUgcmVsZXZhbnQgZW5kcG9pbnQuXG4gKiBAcGFyYW0gZW5kcG9pbnQge3N0cmluZ30gb25lIG9mIHRoZSBVUkwgZW5kcG9pbnRzXG4gKiBAcGFyYW0gc3RhdHVzIHtTdGF0dXNTdGF0ZX1cbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmc/fVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zZXRTdGF0dXMgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIHN0YXR1cywgbWVzc2FnZSkge1xuICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXNbZW5kcG9pbnRdKHN0YXR1cyk7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludCArIFwiTWVzc2FnZVwiXShtZXNzYWdlIHx8IFwiXCIpO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGFuIG92ZXJsYXkgb24gdGhlIHNjcmVlbiB0aGF0IGJsb2NrcyBvcGVyYXRpb24gdW50aWwgdGhlIHN5c3RlbSBpcyByZWFkeS5cbiAqIFRoZSBvdmVybGF5IGdldHMgcHJvZ3Jlc3NpdmVseSBkYXJrZXIgdG8gaW5kaWNhdGUgcmVwZWF0ZWQgZmFpbHVyZXMuXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNob3dPdmVybGF5ID0gZnVuY3Rpb24gKGF0dGVtcHQpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgKz0gMTtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9ja3B5LW92ZXJsYXlcIikubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9ICQoJzxkaXYgY2xhc3M9XCJibG9ja3B5LW92ZXJsYXlcIj4gPC9kaXY+Jyk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gICAgc3dpdGNoIChhdHRlbXB0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzk4OFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM2NTVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjMzMzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuLyoqXG4gKiBVbmRvIGEgbGV2ZWwgb2Ygb3ZlcmxheTsgaWYgdGhpcyB3YXMgdGhlIGxhc3QgbGV2ZWwsIHJlbW92ZXMgaXQgZnJvbSB0aGUgc2NyZWVuLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5oaWRlT3ZlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgLT0gMTtcbiAgICBpZiAodGhpcy5ibG9ja2luZ0F0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9lbnF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIC8vIEVuc3VyZSB3ZSBoYXZlIG5vdCBvdmVyZmlsbGVkIHRoZSBxdWV1ZVxuICAgIGxldCBsZW5ndGggPSB0aGlzLnF1ZXVlW2NhY2hlXS5sZW5ndGg7XG4gICAgbGV0IG1heCA9IHRoaXMuTUFYX1FVRVVFX1NJWkVbY2FjaGVdO1xuICAgIGlmIChsZW5ndGggPiBtYXgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0gPSB0aGlzLnF1ZXVlW2NhY2hlXS5zbGljZShsZW5ndGggLSBtYXgsIG1heCk7XG4gICAgfVxuICAgIC8vIE9ubHkgYWRkIHRoZSBlbGVtZW50IGlmIGl0J3MgbmV3XG4gICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbY2FjaGVdLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnB1c2goa2V5KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZGVxdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnNwbGljZShpbmRleCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGVuZHBvaW50LCBkZWxheSwgY2FsbGJhY2spIHtcbiAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICBsZXQgcG9zdFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLl9lbnF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVxdWV1ZURhdGEoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICBwb3N0UmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQocG9zdFJlcXVlc3QsIGRlbGF5KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIE1ha2UgYSBBSkFYIHJlcXVlc3QgdGhhdCwgdXBvbiBmYWlsdXJlLCB3aWxsIGNoZWNrIHRvIHNlZSBpZiB0aGlzIHdhcyB0aGVcbiAqIGxhdGVzdCBhdHRlbXB0IGZvciB0aGlzIGBjYWNoZWAgbWFya2VyLiBJZiBzbywgaXQgd2lsbCBhdHRlbXB0IGFnYWluIHVudGlsXG4gKiBzdWNjZXNzZnVsOyBvdGhlcndpc2UsIGl0IGdpdmVzIHVwIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIEFKQVgtcmVhZHkgZGF0YSB0byBiZSBwb3N0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgdGltZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRwb2ludCAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgY2FjaGUgZW50cnlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZGVsYXkgLSBUaGUgY3VycmVudCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlXG4gdHJ5aW5nIHRoZSByZXF1ZXN0IGFnYWluLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdExhdGVzdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGZpbGVuYW1lLCBlbmRwb2ludCwgZGVsYXkpIHtcbiAgICBsZXQgY2FjaGUgPSBlbmRwb2ludCArIGZpbGVuYW1lO1xuICAgIGxldCByZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgICAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGNvbm5lY3RlZCBidXQgZmFpbGVkLCBkb24ndCB0cnkgYWdhaW4gYnV0IGxldCB0aGUgdXNlciBrbm93IHdoeS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbCgoZXJyb3IsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIHRoZW4gbGV0J3MgdHJ5IGl0IGFnYWluIGluIGEgYml0XG4gICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSArIHRoaXMuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcnNbY2FjaGVdKTtcbiAgICBpZiAoZGVsYXkgPT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZXJzW2NhY2hlXSA9IHNldFRpbWVvdXQocmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0QmxvY2tpbmcgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgdGhpcy5zaG93T3ZlcmxheShhdHRlbXB0cyk7XG4gICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmUoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzIC0gMSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRBc3NpZ25tZW50ID0gZnVuY3Rpb24gKGFzc2lnbm1lbnRfaWQpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImFzc2lnbm1lbnRfaWRcIl0gPSBhc3NpZ25tZW50X2lkO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJsb2FkQXNzaWdubWVudFwiLCBkYXRhLCA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmxvYWRBc3NpZ25tZW50RGF0YV8ocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJoaWRkZW5cIl0gPSBtb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpO1xuICAgICAgICBkYXRhW1wicmV2aWV3ZWRcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKCk7XG4gICAgICAgIGRhdGFbXCJwdWJsaWNcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnB1YmxpYygpO1xuICAgICAgICBkYXRhW1widXJsXCJdID0gbW9kZWwuYXNzaWdubWVudC51cmwoKTtcbiAgICAgICAgZGF0YVtcImlwX3Jhbmdlc1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaXBSYW5nZXMoKTtcbiAgICAgICAgZGF0YVtcIm5hbWVcIl0gPSBtb2RlbC5hc3NpZ25tZW50Lm5hbWUoKTtcbiAgICAgICAgZGF0YVtcInNldHRpbmdzXCJdID0gc2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCk7XG5cbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwic2F2ZUFzc2lnbm1lbnRcIiwgZGF0YSwgMywgKCkgPT4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiT2ZmbGluZVwiLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoU2F2ZSBBc3NpZ25tZW50KVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkSGlzdG9yeSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkSGlzdG9yeVwiKSkge1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcImxvYWRIaXN0b3J5XCIsIGRhdGEsIDIsIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9nRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRfdHlwZSwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBmaWxlX3BhdGgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9nRXZlbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImV2ZW50X3R5cGVcIl0gPSBldmVudF90eXBlO1xuICAgICAgICBkYXRhW1wiY2F0ZWdvcnlcIl0gPSBjYXRlZ29yeTtcbiAgICAgICAgZGF0YVtcImxhYmVsXCJdID0gbGFiZWw7XG4gICAgICAgIGRhdGFbXCJtZXNzYWdlXCJdID0gbWVzc2FnZTtcbiAgICAgICAgZGF0YVtcImZpbGVfcGF0aFwiXSA9IGZpbGVfcGF0aDtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2dFdmVudFwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwibG9nRXZlbnRcIiwgMCwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVJbWFnZSA9IGZ1bmN0aW9uIChkaXJlY3RvcnksIGltYWdlKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVJbWFnZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZGlyZWN0b3J5XCJdID0gZGlyZWN0b3J5O1xuICAgICAgICBkYXRhW1wiaW1hZ2VcIl0gPSBpbWFnZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlSW1hZ2VcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBcInR1cnRsZV9vdXRwdXRcIiwgXCJzYXZlSW1hZ2VcIiwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlSW1hZ2VcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvblN0YXR1cyA9IGZ1bmN0aW9uKG5ld1N0YXR1cykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJzdGF0dXNcIl0gPSBuZXdTdGF0dXM7XG4gICAgICAgIGxldCBwb3N0U3RhdHVzQ2hhbmdlID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKG5ld1N0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNcIiwgZGF0YSwgMiwgcG9zdFN0YXR1c0NoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGxvYWQgZmlsZXMgYW5kIHdlYiByZXNvdXJjZXMuXG4gKlxuICogREVQUkVDQVRFRFxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgdHlwZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZF9maWxlXCIpKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1widHlwZVwiXSA9IHR5cGU7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyh0aGlzLnVybHMubG9hZF9maWxlLCBkYXRhLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcIkZhaWx1cmVcIiwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soXCJTZXJ2ZXIgZmFpbHVyZSEgUmVwb3J0IHRvIGluc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvckNhbGxiYWNrKFwiTm8gZmlsZSBzZXJ2ZXIgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChMb2FkIEZpbGUpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCBjb250ZW50cywgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxheSA9IHRoaXMuVElNRVJfREVMQVk7XG4gICAgfVxuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJzYXZlRmlsZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZmlsZW5hbWVcIl0gPSBmaWxlbmFtZTtcbiAgICAgICAgZGF0YVtcImNvZGVcIl0gPSBjb250ZW50cztcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvbiA9IGZ1bmN0aW9uIChzY29yZSwgY29ycmVjdCwgaGlkZGVuT3ZlcnJpZGUsIGZvcmNlVXBkYXRlKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3M7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInVwZGF0ZVN1Ym1pc3Npb25cIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcInNjb3JlXCJdID0gc2NvcmU7XG4gICAgICAgIGRhdGFbXCJjb3JyZWN0XCJdID0gY29ycmVjdDtcbiAgICAgICAgZGF0YVtcImhpZGRlbl9vdmVycmlkZVwiXSA9IGhpZGRlbk92ZXJyaWRlO1xuICAgICAgICBkYXRhW1wiZm9yY2VfdXBkYXRlXCJdID0gZm9yY2VVcGRhdGU7XG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5ibG9ja0VkaXRvci5nZXRQbmdGcm9tQmxvY2tzKChwbmdEYXRhLCBpbWcpID0+IHtcbiAgICAgICAgICAgIGRhdGFbXCJpbWFnZVwiXSA9IHBuZ0RhdGE7XG4gICAgICAgICAgICBpZiAoaW1nLnJlbW92ZSkge1xuICAgICAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBcInVwZGF0ZVN1Ym1pc3Npb25cIiwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwidXBkYXRlU3VibWlzc2lvblwiLCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcInVwZGF0ZVN1Ym1pc3Npb25cIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhpZGRlbk92ZXJyaWRlICYmIGNvcnJlY3QgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbXCJhc3NpZ25tZW50X2lkXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59OyIsIi8qKlxuICogU2t1bHB0IE1vZHVsZSBmb3IgaG9sZGluZyB0aGUgSW5zdHJ1Y3RvciBBUEkuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgbG9hZGVkIGluIGJ5IGdldHRpbmcgdGhlIGZ1bmN0aW9ucycgc291cmNlIGNvZGUgZnJvbSB0b1N0cmluZy5cbiAqIElzbid0IHRoYXQgY3Jhenk/XG4gKlxuICpcbiAqL1xuZXhwb3J0IGxldCAkc2tfbW9kX2luc3RydWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBNYWluIG1vZHVsZSBvYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIGF0IHRoZSBlbmQuXG4gICAgbGV0IG1vZCA9IHt9O1xuICAgIGxldCBub25lID0gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIFxuICAgIGxldCBwcmlvciA9IG51bGw7XG4gICAgbW9kLnRpbWVpdCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidGltZWl0XCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGxldCBkaWZmZXJlbmNlO1xuICAgICAgICBpZiAocHJpb3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IERhdGUubm93KCkgLSBwcmlvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG5hbWUpLCBkaWZmZXJlbmNlLzEwMDApO1xuICAgICAgICBwcmlvciA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBmZWVkYmFjayB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QubG9nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsb2dcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coU2suZmZpLnJlbWFwVG9KcyhtZXNzYWdlKSk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBkZWJ1ZyB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QuZGVidWcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY292ZXJ0cyB0aGUgb3V0cHV0IGluIHRoZSBzdHVkZW50IHJlcG9ydCB0byBhIHB5dGhvbiBcbiAgICAgKiBsaXN0IGFuZCByZXR1cm5zIGl0LlxuICAgICoqL1xuICAgIG1vZC5nZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0Lm1hcChmdW5jdGlvbihpdGVtKSB7IHJldHVybiBpdGVtLnRvU2t1bHB0KCk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChvdXRwdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXNldHMgdGhlIG91dHB1dCwgcGFydGljdWxhcmx5IHVzZWZ1bCBpZiB0aGUgc3R1ZGVudFxuICAgICAqIGNvZGUgaXMgZ29pbmcgdG8gYmUgcmVydW4uXG4gICAgICovXG4gICAgbW9kLnJlc2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJyZXNldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLm91dHB1dC5yZW1vdmVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5xdWV1ZV9pbnB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJxdWV1ZV9pbnB1dFwiLCBhcmd1bWVudHMsIDEsIEluZmluaXR5KTtcbiAgICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gYXJnc1tpXTtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJpbnB1dFwiLCBcInN0cmluZ1wiLCBTay5idWlsdGluLmNoZWNrU3RyaW5nKGlucHV0KSk7XG4gICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKFNrLmZmaS5yZW1hcFRvSnMoaW5wdXQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9wcm9ncmFtID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wcm9ncmFtXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJ2ZXJpZmllclwiXS5jb2RlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9ldmFsdWF0aW9uID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9ldmFsdWF0aW9uXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmV2YWx1YXRpb24gfHwgXCJcIik7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnRyYWNlX2xpbmVzID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmxpbmVzO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkobGluZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBtb2QuZ2V0X3N0dWRlbnRfZXJyb3IgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi50dXBsZShbbm9uZSwgbm9uZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IsXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci50cmFjZWJhY2sgJiYgZXJyb3IudHJhY2ViYWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbltcImxpbmVcIl0gPSBlcnJvci50cmFjZWJhY2tbMF0ubGluZW5vO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFNrLmZmaS5yZW1hcFRvUHkocG9zaXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtlcnJvciwgcG9zaXRpb25dKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gICAgbW9kLmhhZF9leGVjdXRpb25fdGltZV9lcnJvciA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJoYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuICFTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzICYmIFxuICAgICAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yICYmXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IudHAkbmFtZSA9PT0gXCJUaW1lTGltaXRFcnJvclwiO1xuICAgIH0pO1xuICAgIFxuICAgIGxldCBiYWNrdXBUaW1lID0gdW5kZWZpbmVkO1xuICAgIG1vZC5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsaW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBiYWNrdXBUaW1lID0gU2suZXhlY0xpbWl0O1xuICAgICAgICBpZiAoU2suZXhlY0xpbWl0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIFNrLmV4ZWNMaW1pdCA9IFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKCk7XG4gICAgICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbW9kLnVubGltaXRfZXhlY3V0aW9uX3RpbWUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidW5saW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBTay5leGVjTGltaXQgPSBiYWNrdXBUaW1lO1xuICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5zdXBwcmVzc19zY3JvbGxpbmcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwic3VwcHJlc3Nfc2Nyb2xsaW5nXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgXG4gICAgLypcbiAgICBkZWYgaGlzdChzZWxmLCBkYXRhLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdIaXN0b2dyYW0nLCAndmFsdWVzJzogZGF0YSwgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBwbG90KHNlbGYsIHhzLCB5cz1Ob25lLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBpZiB5cyA9PSBOb25lOlxuICAgICAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnTGluZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneCc6IHJhbmdlKGxlbih4cykpLCAneSc6IHhzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgICAgIGVsc2U6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBzY2F0dGVyKHNlbGYsIHhzLCB5cywgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnU2NhdHRlcicsICd4JzogeHMsICd5JzogeXMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAqL1xuICAgIG1vZC5nZXRfcGxvdHMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Bsb3RzXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0cyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCk7XG4gICAgICAgICAgICBvdXRwdXRzID0gb3V0cHV0cy5maWx0ZXIoZnVuY3Rpb24ob3V0cHV0KSB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQudHlwZSA9PT0gXCJwbG90XCI7XG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24oZ3JhcGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wiZGF0YVwiOiBncmFwaC5jb250ZW50Lm1hcChmdW5jdGlvbihwbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQbG90ID0geyBcInR5cGVcIjogcGxvdC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbG90LnR5cGUgPT09IFwibGluZVwiIHx8IHBsb3QudHlwZSA9PT0gXCJzY2F0dGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ4XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lng7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInlcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxvdC50eXBlID09PSBcImhpc3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInZhbHVlc1wiXSA9IHBsb3QuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3UGxvdDtcbiAgICAgICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICAgICAgXCJ4bGFiZWxcIjogXCJcIiwgXCJ5bGFiZWxcIjogXCJcIiwgXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLCBcImxlZ2VuZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KG91dHB1dHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICAvLyBQcm92aWRlcyBgc3R1ZGVudGAgYXMgYW4gb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHRoYXQgdGhlIHN0dWRlbnQgZGVjbGFyZWQuXG4gICAgbW9kLlN0dWRlbnREYXRhID0gU2subWlzY2V2YWwuYnVpbGRDbGFzcyhtb2QsIGZ1bmN0aW9uKCRnYmwsICRsb2MpIHtcbiAgICAgICAgJGxvYy5fX2luaXRfXyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZikge1xuICAgICAgICAgICAgLy9zZWxmLmRhdGEgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIGxldCBuZXdEaWN0ID0gU2suYnVpbHRpbi5kaWN0KCk7XG4gICAgICAgICAgICBTay5hYnN0ci5zYXR0cihzZWxmLCBTay5idWlsdGluLnN0cihcImRhdGFcIiksIG5ld0RpY3QsIHRydWUpO1xuICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5yZXN1bHRzO1xuICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHNlbGYubW9kdWxlLiRkO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2suYWJzdHIub2JqZWN0U2V0SXRlbShuZXdEaWN0LCBTay5mZmkucmVtYXBUb1B5KFNrLnVuZml4UmVzZXJ2ZWQoa2V5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNhbGxfZiA9IGZ1bmN0aW9uKGt3YSkge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJnc0xlbihcImNhbGxcIiwgYXJndW1lbnRzLmxlbmd0aCwgMSwgSW5maW5pdHksIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgdmFyIGt3YXJncyA9IG5ldyBTay5idWlsdGlucy5kaWN0KGt3YSk7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gYXJnc1swXTtcbiAgICAgICAgICAgIHZhciBmdW5jdGlvbk5hbWUgPSBhcmdzWzFdO1xuICAgICAgICAgICAgYXJncyA9IGFyZ3Muc2xpY2UoMik7XG5cbiAgICAgICAgICAgIHZhciBpbnB1dHMgPSBrd2FyZ3MubXAkbG9va3VwKG5ldyBTay5idWlsdGluLnN0cihcImlucHV0c1wiKSk7XG4gICAgICAgICAgICBpZiAoaW5wdXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHMgPSBTay5mZmkucmVtYXBUb0pzKGlucHV0cyk7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0cy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHNlbGYudHAkZ2V0YXR0cihuZXcgU2suYnVpbHRpbi5zdHIoXCJkYXRhXCIpKTtcbiAgICAgICAgICAgIHZhciBmdW5jdGlvbk9iamVjdCA9IGRhdGEubXAkbG9va3VwKGZ1bmN0aW9uTmFtZSk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZnVuY3Rpb25PYmplY3QudHAkY2FsbChhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICAgIGNhbGxfZi5jb19rd2FyZ3MgPSB0cnVlO1xuICAgICAgICAvL2NhbGxfZi5jb192YXJuYW1lcyA9IFtcInNlbGZcIiwgXCJmdW5jdGlvblwiXTtcbiAgICAgICAgY2FsbF9mLmNvX25hbWU9IG5ldyBTay5idWlsdGluLnN0cihcImNhbGxcIik7XG4gICAgICAgICRsb2NbXCJjYWxsXyRybiRcIl0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGNhbGxfZik7XG5cbiAgICAgICAgJGxvY1tcIl9fcmVwcl9fXCJdID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKFwiXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkbG9jLmdldF9uYW1lc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X25hbWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU2suZmZpLnJlbWFwVG9QeShTay51bmZpeFJlc2VydmVkKHByb3BlcnR5KSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgJGxvYy5nZXRfdmFsdWVzX2J5X3R5cGUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYsIHR5cGUsIGV4Y2x1ZGVfYnVpbHRpbnMpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfdmFsdWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgJiYgcHJvcGVydHkuc3RhcnRzV2l0aChcIl9fXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9LCBcIlN0dWRlbnREYXRhXCIpO1xuICAgIG1vZC5zdHVkZW50ID0gU2subWlzY2V2YWwuY2FsbHNpbU9yU3VzcGVuZChtb2QuU3R1ZGVudERhdGEpO1xuICAgIFxuICAgIG1vZC5nZXRfc3R1ZGVudF9kYXRhID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9zdHVkZW50X2RhdGFcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIG1vZC5zdHVkZW50O1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtb2Q7XG59O1xuIiwibGV0IExPQ0FMX1NUT1JBR0VfUkVGO1xudHJ5IHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRiA9IGxvY2FsU3RvcmFnZTtcbiAgICBsZXQgbW9kID0gXCJCTE9DS1BZX0xPQ0FMU1RPUkFHRV9URVNUXCI7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbShtb2QsIG1vZCk7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbShtb2QpO1xufSBjYXRjaChlKSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYgPSB7XG4gICAgICAgIF9kYXRhICAgICAgIDoge30sXG4gICAgICAgIHNldEl0ZW0gICAgIDogZnVuY3Rpb24oaWQsIHZhbCkgeyByZXR1cm4gdGhpcy5fZGF0YVtpZF0gPSBTdHJpbmcodmFsKTsgfSxcbiAgICAgICAgZ2V0SXRlbSAgICAgOiBmdW5jdGlvbihpZCkgeyByZXR1cm4gdGhpcy5fZGF0YS5oYXNPd25Qcm9wZXJ0eShpZCkgPyB0aGlzLl9kYXRhW2lkXSA6IHVuZGVmaW5lZDsgfSxcbiAgICAgICAgcmVtb3ZlSXRlbSAgOiBmdW5jdGlvbihpZCkgeyByZXR1cm4gZGVsZXRlIHRoaXMuX2RhdGFbaWRdOyB9LFxuICAgICAgICBjbGVhciAgICAgICA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fZGF0YSA9IHt9OyB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgb2JqZWN0IGZvciBpbnRlcmZhY2luZyB3aXRoIHRoZSBMb2NhbFN0b3JhZ2UuIFRoZSBMb2NhbFN0b3JhZ2VcbiAqIGJyb3dzZXIgQVBJIGFsbG93cyBmb3Igb2ZmbGluZSBzdG9yYWdlLiBUaGF0IEFQSSBpcyB2ZXJ5IHVuc29waGlzdGljYXRlZCxcbiAqIGFuZCBpcyBlc3NlbnRpYWxseSBhIGxhbWUga2V5LXZhbHVlIHN0b3JlLiBUaGlzIG9iamVjdCBzaXRzIG9uIHRvcFxuICogYW5kIHByb3ZpZGVzIGEgbnVtYmVyIG9mIHVzZWZ1bCB1dGlsaXRpZXMsIGluY2x1ZGluZyBydWRpbWVudGFyeWNhY2hlXG4gKiBjYWNoZSBleHBpcmF0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0xvY2FsU3RvcmFnZVdyYXBwZXJ9XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gQSBuYW1lc3BhY2UgdG8gdXNlIGluIGdyb3VwaW5nIGFjY2VzcyB0byBsb2NhbHN0b3JhZ2UuIFRoaXMga2VlcHMgYWNjZXNzIGNsZWFuIGFuZCBvcmdhbml6ZWQsIHdoaWxlIGFsc28gbWFraW5nIGl0IHBvc3NpYmxlIHRvIGhhdmUgbXVsdGlwbGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gTG9jYWxTdG9yYWdlV3JhcHBlcihuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbn1cbi8qKlxuICogQSBtZXRob2QgZm9yIGFkZGluZyBhIGtleS92YWx1ZSBwYWlyIHRvIExvY2FsU3RvcmFnZS5cbiAqIE5vdGUgdGhhdCBib3RoIHBhcmFtZXRlcnMgbXVzdCBiZSBzdHJpbmdzIChKU09OLnN0cmluZ2lmeSBpcyB5b3VyIGZyaWVuZCkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkuXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLnNldCA9ICBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIiwgdmFsdWUpO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnNldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiLCAkLm5vdygpKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJlbW92aW5nIGEga2V5IGZyb20gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJlbW92ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZvci5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdGltZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdGltZSBmb3IuXG4gKiBAcmV0dXJucyB7SW50ZWdlcn0gLSBUaGUgdGltZXN0YW1wIChsb2NhbCBlcG9jaCkgd2hlbiB0aGUga2V5IHdhcyBsYXN0IHNldC5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBwYXJzZUludChMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIikpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKiBJZiB0aGUga2V5IGRvZXMgbm90IGV4aXN0LCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQgaW5zdGVhZC5cbiAqIFRoaXMgZGVmYXVsdCB3aWxsIGJlIHNldC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRWYWx1ZSAtIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHVzZS4gTXVzdCBiZSBhIHN0cmluZy5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0RGVmYXVsdCA9IGZ1bmN0aW9uKGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbn07XG5cbi8qKlxuICogQSB0ZXN0IGZvciB3aGV0aGVyIHRoZSBnaXZlbiBrZXkgaXMgaW4gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHRlc3QgZXhpc3RlbmNlIGZvci5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIHNlcnZlciBoYXMgdGhlIG5ld2VyIHZlcnNpb24uIFRoaXMgZnVuY3Rpb25cbiAqIGFzc3VtZXMgdGhhdCB0aGUgc2VydmVyIHRyaXAgdGFrZXMgYWJvdXQgNSBzZWNvbmRzLiBUaGlzIG1ldGhvZFxuICogaXMgbGFyZ2VseSBkZXByZWNhdGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHBhcmFtIHtJbnRlZ2VyfSBzZXJ2ZXJfdGltZSAtIFRoZSBzZXJ2ZXIncyB0aW1lIGFzIGFuIGVwb2NoIChpbiBtaWxsaXNlY29uZHMpXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmlzX25ldyA9IGZ1bmN0aW9uKGtleSwgc2VydmVyX3RpbWUpIHtcbiAgICB2YXIgc3RvcmVkX3RpbWUgPSBMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG4gICAgcmV0dXJuIChzZXJ2ZXJfdGltZSA+PSBzdG9yZWRfdGltZSs1MDAwKTtcbn07XG4iLCJleHBvcnQgY29uc3QgVFJBQ0VfSFRNTCA9IGBcclxuXHJcbjxkaXYgY2xhc3M9XCJibG9ja3B5LXRyYWNlIGNvbC1tZC02IGJsb2NrcHktcGFuZWxcIlxyXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIlRyYWNlXCI+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgIDxzdHJvbmc+VHJhY2U6IDwvc3Ryb25nPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0IGJsb2NrcHktaGlkZS10cmFjZSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+IEhpZGUgVHJhY2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zIGJsb2NrcHktdHJhY2UtY29udHJvbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1iYWNrd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmJhY2t3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5TdGVwOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIC8gPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZm9yd2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1mb3J3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UubGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiB1aS50cmFjZS5saW5lJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8dGFibGUgY2xhc3M9J3RhYmxlIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxyXG4gICAgICAgIDxjYXB0aW9uPkN1cnJlbnQgdmFyaWFibGVzIGF0IHRoaXMgc3RlcDwvY2FwdGlvbj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj48dGg+TmFtZTwvdGg+PHRoPlR5cGU8L3RoPjx0aD5WYWx1ZTwvdGg+PC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9XCJmb3JlYWNoOiB1aS50cmFjZS5kYXRhKCkucHJvcGVydGllc1wiPlxyXG4gICAgICAgICAgICA8dHIgZGF0YS1iaW5kPVwidmlzaWJsZTogbmFtZSAhPSAnX19maWxlX18nICYmIG5hbWUgIT0gJ19fcGF0aF9fJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IG5hbWVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IHR5cGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlIGRhdGEtYmluZD1cInRleHQ6IHZhbHVlXCI+PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IHR5cGUgPT0gXCJMaXN0XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGRhdGEtYmluZD1cImNsaWNrOiAvLyRyb290LnZpZXdFeGFjdFZhbHVlKHR5cGUsIGV4YWN0X3ZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLW5ldy13aW5kb3cnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgXHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHlUcmFjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgdGhpcy5JR05PUkVEX0dMT0JBTFMgPSBbXCJfX25hbWVfX1wiLCBcIl9fZG9jX19cIiwgXCJfX3BhY2thZ2VfX1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NtZXRob2RcIiwgXCJwcm9wZXJ0eVwiLCBcInN0YXRpY21ldGhvZFwiXTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy50cmFjZS5jbGljayh0aGlzLmJ1aWxkVHJhY2VUYWJsZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN1bWUgYSBzZXQgb2YgdmFyaWFibGVzIHRyYWNlZCBmcm9tIHRoZSBleGVjdXRpb24gYW5kIHBhcnNlIG91dCBhbnlcclxuICAgICAqIGdsb2JhbCB2YXJpYWJsZXMgYW5kIG1vZHVsZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhcmlhYmxlcyAtIGEgbWFwcGluZyBvZiB2YXJpYWJsZSBuYW1lcyB0byB0aGVpciBTa3VwdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcGFyc2VHbG9iYWxzKHZhcmlhYmxlcykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsZXQgbW9kdWxlcyA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkudHJhY2VFeGVjdXRpb24oKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB2YXJpYWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhcmlhYmxlc1twcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5JR05PUkVEX0dMT0JBTFMuaW5kZXhPZihwcm9wZXJ0eSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5yZXBsYWNlKFwiXyRydyRcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJfJHJuJFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IEJsb2NrUHlUcmFjZS5wYXJzZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IHtcIm5hbWVcIjogcHJvcGVydHksIFwidHlwZVwiOiBcIlVua25vd25cIiwgXCJ2YWx1ZVwiOiB2YWx1ZS50b1N0cmluZygpfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IFNrLmJ1aWx0aW4ubW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZXMucHVzaCh2YWx1ZS4kZC5fX25hbWVfXy52KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcInByb3BlcnRpZXNcIjogcmVzdWx0LCBcIm1vZHVsZXNcIjogbW9kdWxlc307XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIFNrdWxwdCB2YWx1ZSBpbnRvIGEgbW9yZSBlYXNpbHkgcHJpbnRhYmxlIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSAtIHRoZSBza3VscHQgdmFsdWVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBhcnNlVmFsdWUocHJvcGVydHksIHZhbHVlLCBmdWxsTGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiVW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZnVuYzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkZ1bmN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUuZnVuY19jb2RlLmNvX3Zhcm5hbWVzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgQXJndW1lbnRzOiBcIit2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMuam9pbihcIiwgXCIpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIE5vIGFyZ3VtZW50c1wiKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm1vZHVsZTogcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5zdHI6XHJcbiAgICAgICAgICAgICAgICBpZiAoZnVsbExlbmd0aCB8fCB2YWx1ZS52Lmxlbmd0aCA8PSAzMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbXCIrdmFsdWUuc3EkbGVuZ3RoKCkrXCIgY2hhcmFjdGVycyBub3Qgc2hvd25dXCJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm9uZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uYm9vbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm5tYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCIgPT09IHZhbHVlLnNrVHlwZSA/IFwiSW50ZWdlclwiOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5pbnRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW50ZWdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZmxvYXRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnR1cGxlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVHVwbGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmxpc3Q6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUudi5sZW5ndGggPD0gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbLi4uIFwiK3ZhbHVlLnYubGVuZ3RoK1wiIGVsZW1lbnRzIC4uLl1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5kaWN0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRGljdGlvbmFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIE51bWJlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB2YWx1ZSAlIDEgPT09IDAgPyBcIkludGVnZXJcIiA6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFN0cmluZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6ICh2YWx1ZSA/IFwiVHJ1ZVwiOiBcIkZhbHNlXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlLnRwJG5hbWUgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUudHAkbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBUT0RPOiB2aWV3RXhhY3RWYWx1ZSIsIi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZWxlbWVudCBpcyBpbiB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7YW55dGhpbmd9IG5lZWRsZSAtIFRoZSBlbGVtZW50IHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHtBcnJheX0gaGF5c3RhY2sgLSBUaGUgbGlzdCB0byBzZWFyY2guXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBlbGVtZW50IGV4aXN0c1xuICovXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpID4gLTE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGR1cGxpY2F0ZSB2YWx1ZXMgZnJvbSBhbiBhcnJheSwgcHJlc2VydmluZyBvcmRlci5cbiAqIENyZWF0ZXMgYSBuZXcgYXJyYXksIHNvIGlzIG5vbi1kZXN0cnVjdGl2ZS5cbiAqIENvdXJ0ZXN5OlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTU4NDM3MC9ob3ctdG8tbWVyZ2UtdHdvLWFycmF5cy1pbi1qYXZhc2NyaXB0LWFuZC1kZS1kdXBsaWNhdGUtaXRlbXNcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSB0byB1bmlxdWlmeS4gRWxlbWVudHMgY29tcGFyZWQgd2l0aCA9PT0uXG4gKi9cbmZ1bmN0aW9uIGFycmF5VW5pcXVlKGFycmF5KSB7XG4gICAgdmFyIGEgPSBhcnJheS5jb25jYXQoKTtcbiAgICBmb3IodmFyIGk9MDsgaTxhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGZvcih2YXIgaj1pKzE7IGo8YS5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgaWYoYVtpXSA9PT0gYVtqXSkge2Euc3BsaWNlKGotLSwgMSk7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gZm9yIGV4dGVuZGluZyBhbiBhcnJheSBiYXNlZFxuICogb24gYW4gXCJhZGRBcnJheVwiIGFuZCBcInJlbW92ZUFycmF5XCIuIEFueSBlbGVtZW50XG4gKiBmb3VuZCBpbiByZW1vdmVBcnJheSBpcyByZW1vdmVkIGZyb20gdGhlIGZpcnN0IGFycmF5XG4gKiBhbmQgYWxsIHRoZSBlbGVtZW50cyBvZiBhZGRBcnJheSBhcmUgYWRkZWQuXG4gKiBBbnkgZHVwbGljYXRlIGl0ZW1zIGFyZSByZW1vdmVkLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gdGhlIGFycmF5IHRvIG1hbmlwdWxhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFkZEFycmF5IC0gdGhlIGVsZW1lbnRzIHRvIGFkZCB0byB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IHJlbW92ZUFycmF5IC0gdGhlIGVsZW1lbnRzIHRvIHJlbW92ZSBmcm9tIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXl9IFRoZSBtb2RpZmllZCBhcnJheVxuICovXG5mdW5jdGlvbiBleHBhbmRBcnJheShhcnJheSwgYWRkQXJyYXksIHJlbW92ZUFycmF5KSB7XG4gICAgdmFyIGNvcHlBcnJheSA9IGFycmF5LmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVBcnJheS5pbmRleE9mKGl0ZW0pID09PSAtMTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXlVbmlxdWUoY29weUFycmF5LmNvbmNhdChhZGRBcnJheSkpO1xufVxuXG4vKipcbiAqIERlZXBseSBjbG9uZXMgYSBub2RlXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgQSBub2RlIHRvIGNsb25lXG4gKiBAcmV0dXJuIHtOb2RlfSBBIGNsb25lIG9mIHRoZSBnaXZlbiBub2RlIGFuZCBhbGwgaXRzIGNoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG4gICAgLy8gSWYgdGhlIG5vZGUgaXMgYSB0ZXh0IG5vZGUsIHRoZW4gcmUtY3JlYXRlIGl0IHJhdGhlciB0aGFuIGNsb25lIGl0XG4gICAgdmFyIGNsb25lID0gbm9kZS5ub2RlVHlwZSA9PSAzID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZS5ub2RlVmFsdWUpIDogbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuIFxuICAgIC8vIFJlY3Vyc2UgICAgIFxuICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICB3aGlsZShjaGlsZCkge1xuICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChjbG9uZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gICAgIFxuICAgIHJldHVybiBjbG9uZTtcbn1cblxuLyoqXG4gKiBJbmRlbnRzIHRoZSBnaXZlbiBzdHJpbmcgYnkgNCBzcGFjZXMuIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbXVsdGktbGluZSBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGJlIG1hbmlwdWxhdGVkLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyB3aXRoIGZvdXIgc3BhY2VzIGFkZGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBuZXcgbGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGVudChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL14oPz0uKS9nbSwgXCIgICAgXCIpO1xufVxuXG4vKipcbiAqIFR1cm5zIHNwYWNlcyBpbnRvIHVuZGVyc2NvcmVzIGluIHRoZSBzdHJpbmcsIG1ha2VzIGl0IGxvd2VyY2FzZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSB0aGUgc3RyaW5nIHRvIGJlIG1hbmlwdWxhdGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2x1ZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIFtgbWluYCwgYG1heGBdLlxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIGxvd2VzdCBwb3NzaWJsZSBpbnRlZ2VyLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBoaWdoZXN0IHBvc3NpYmxlIGludGVnZXIgKGluY2x1c2l2ZSkuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyLlxuICovXG5mdW5jdGlvbiByYW5kb21JbnRlZ2VyKG1pbixtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihtYXgtbWluKzEpK21pbik7XG59XG5cbi8qKlxuICogRW5jb2RlcyBzb21lIHRleHQgc28gdGhhdCBpdCBjYW4gYmUgc2FmZWx5IHdyaXR0ZW4gaW50byBhbiBIVE1MIGJveC5cbiAqIFRoaXMgaW5jbHVkZXMgcmVwbGFjaW5nIHNwZWNpYWwgSFRNTCBjaGFyYWN0ZXJzICgmLCA8LCA+LCBldGMuKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHRleHQgdG8gYmUgY29udmVydGVkLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgSFRNTC1zYWZlIHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVIVE1MKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpXG4gICAgICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCBcIiZndDtcIilcbiAgICAgICAgLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csIFwiJmFwb3M7XCIpO1xufVxuXG4vKipcbiAqIFNodWZmbGUgdGhlIGJsb2NrcyBpbiB0aGUgd29ya3NwYWNlXG4gKi9cbmlmICh0eXBlb2YgQmxvY2tseSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIEJsb2NrbHkuV29ya3NwYWNlU3ZnLnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXRyaWNzID0gdGhpcy5nZXRNZXRyaWNzKCk7XG4gICAgICAgIHZhciB3aWR0aCA9IG1ldHJpY3Mudmlld1dpZHRoIC8gMixcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3Mudmlld0hlaWdodDtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuZ2V0VG9wQmxvY2tzKGZhbHNlKTtcbiAgICAgICAgdmFyIHkgPSA1LCB4ID0gMCxcbiAgICAgICAgICAgIG1heGltYWxfaW5jcmVhc2UgPSBoZWlnaHQvYmxvY2tzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gR2V0IGEgYmxvY2tcbiAgICAgICAgICAgIHZhciBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gYmxvY2suZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSgpO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHggPSA1O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gLXByb3BlcnRpZXMueCtyYW5kb21JbnRlZ2VyKDEwLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5tb3ZlQnkoeCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgLXByb3BlcnRpZXMueSt5KTtcbiAgICAgICAgICAgIHkgPSB5ICsgcmFuZG9tSW50ZWdlcig1LCBtYXhpbWFsX2luY3JlYXNlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICogTW92ZSBlbGVtZW50cyBmcm9tIG9uZSBhcnJheSB0byBhbm90aGVyIGJhc2VkIG9uIGEgY29uZGl0aW9uYWwgY2hlY2suXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMTg4Nzk2Ny9qYXZhc2NyaXB0LW1vdmUtb2JqZWN0cy1mcm9tLW9uZS1hcnJheS10by1hbm90aGVyLWJlc3QtYXBwcm9hY2hcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnRzKHNvdXJjZSwgdGFyZ2V0LCBtb3ZlQ2hlY2spIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHNvdXJjZVtpXTtcbiAgICAgICAgaWYgKG1vdmVDaGVjayhlbGVtZW50KSkge1xuICAgICAgICAgICAgc291cmNlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIG9uZSBvZiB0aGUgU2suYnVpbHRpbiBvYmplY3RzXG4gKiBUT0RPOiBtYWtlIHRoaXMgc28gd2UgZG9uJ3QgaGF2ZSB0byBleHBsaWNpdGx5IHB1dCBvdXQgZXZlcnkgb3B0aW9uXG4gKiAgICAgICAgICBvbmUgcG9zc2libGUgdGhpbmcgd2UgY291bGQgZG8gaXMgZ2V0IGEgc3RyaW5nIHZlcnNpb24gb2YgdGhlIFxuICogICAgICAgICAgb2YgdGhlIGNvbnN0cnVjdG9yIGFuZCBsb29rIGZvciB0aGUgc3Vic3RyaW5nIFwicmV0dXJuIG5ldyBTay5idWlsdGluXCJcbiAqICAgICAgICAgIEJ1dCBJIGRvbid0IGtub3cgaG93IHJlbGlhYmxlIHRoYXQgaXMuICBSYXRoZXIsIGl0J3Mga2luZCBvZiBoYWNraXNoLlxuICogICAgICAgICAgU2hvdWxkIHRlaG9yZXRpY2FsbHkgYmVsb25nIGluIFNrLmZmaVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgZXhhbWluZWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gdHlwZXNcbioqL1xuZnVuY3Rpb24gaXNTa0J1aWx0aW4ob2JqKXtcbiAgICByZXR1cm4gKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uZGljdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubGlzdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4udHVwbGUpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmJvb2wpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmludF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmZsb2F0XykgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uc3RyKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5sbmcpO1xuICAgIC8vdmFyIGNvbnNfc3RyID0gb2JqLmNvbnN0cnVjdG9yICsgXCJcIjtcbiAgICAvL3JldHVybiBjb25zX3N0ci5pbmRleE9mKFwicmV0dXJuIG5ldyBTay5idWlsdGluXCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaXNBc3ROb2RlKG9iail7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBcIl9hc3RuYW1lXCIgaW4gb2JqO1xufVxuXG4vKipcbiAqIFNob3VsZCB0aGVvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmksIGJ1dCBJIHB1dCBpdCBoZXJlIGluc3RlYWQgdG8gbm90IG1lc3MgdXAgdGhlIHNrdWxwdCBmaWxlc1xuICogbGlrZSB0aGUgbm9ybWFsIFNrLmZmaS5yZW1hcFRvUHksIGl0IGRvZXNuJ3Qgd29yayBmb3IgZnVuY3Rpb25zIG9yIG1vcmUgY29tcGxleCBvYmplY3RzLCBidXQgaXQgaGFuZGxlc1xuICogY2FzZXMgd2hlcmUgdGhlIHR5cGVzIGluIG9iaiBhcmUgYSBtaXggb2YgcHl0aG9uIFNJTVBMRSBvYmplY3RzIGFuZCBTSU1QTEUgbm9ybWFsIGphdmFzY3JpcHQgb2JqZWN0c1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgY29udmVydGVkXG4gKiBAcmV0dXJuIHtTay5idWlsdGluLj8/P30gLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHB5dGhvbiBvYmplY3QsIGRyb3BwaW5nIGFsbCBmdW5jdGlvbnMgYW5kIHRoaW5ncyBpdCBjYW4ndCBjb252ZXJ0XG4qKi9cbmZ1bmN0aW9uIG1peGVkUmVtYXBUb1B5KG9iail7XG4gICAgdmFyIGs7XG4gICAgdmFyIGt2cztcbiAgICB2YXIgaTtcbiAgICB2YXIgYXJyO1xuICAgIC8vQFRPRE86IHNob3VsZCB0aGVvcmV0aWNhbGx5IGNoZWNrIGlmIHRoZSBvYmplY3QgaXMgYSBweWhvbiBkaWN0IG9yIGFycmF5IHdpdGgganMgb2JqZWN0c1xuICAgIGlmIChpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgLy9vYmplY3QgaXMgYWxyZWFkeSBweXRob24gcmVhZHlcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCIpIHtcbiAgICAgICAgLy9vYmplY3QgaXMgYWN0dWFsbHkgYSBqYXZhc2NyaXB0IGFycmF5XG4gICAgICAgIGFyciA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAvL2ZvciBlYWNoIG9iamVjdCwgY29udmVydCBpdCB0byBhIHB5dGhvbiBvYmplY3QgaWYgaXQgaXNuJ3Qgb25lIGFscmVhZHlcbiAgICAgICAgICAgIHZhciBzdWJ2YWwgPSBvYmpbaV07XG4gICAgICAgICAgICBpZighaXNTa0J1aWx0aW4oc3VidmFsKSl7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2gobWl4ZWRSZW1hcFRvUHkoc3VidmFsKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzdWJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KGFycik7XG4gICAgfSBlbHNlIGlmIChvYmogPT09IG51bGwpIHsvL251bGwgb2JqZWN0XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmKCFpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgICAgIC8vYXNzdW1pbmcgaXQncyBhIHN0YW5kYXJkIGRpY3Rpb25hcnlcbiAgICAgICAgICAgIGt2cyA9IFtdOy8vU2suYnVpbHRpbi5kaWN0IHVzZXMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlLGtleS12YWx1ZS4uLlxuICAgICAgICAgICAgZm9yIChrIGluIG9iaikge1xuICAgICAgICAgICAgICAgIC8vY29udmVydCB0aGUga2V5IGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KGspKTtcbiAgICAgICAgICAgICAgICAvL2NvdmVydCBjb3JyZXNwb25kaW5nIHZhbHVlIGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KG9ialtrXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jcmVhdGUgdGhlIG5ldyBkaWN0aW9uYXJ5XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uZGljdChrdnMpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5hc3NrJChvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmJvb2wob2JqKTtcbiAgICB9IGVsc2UgaWYodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqLm5hbWUpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXzsiXSwic291cmNlUm9vdCI6IiJ9