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
          onChange: ko.observable(configuration["assignment.on_change"]),
          onEval: ko.observable(configuration["assignment.on_eval"]),
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
          hidden: ko.observable(configuration["assignment.hidden"]),
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
          instructor: ko.observable(this.getSetting("display.instructor", "false") === "true"),

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
          triggerOnChange: null
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
          saveFile: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          saveFileMessage: ko.observable(""),
          // @type {ServerStatus}
          saveAssignment: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          saveAssignmentMessage: ko.observable(""),
          // @type {ServerStatus}
          updateSubmission: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          updateSubmissionMessage: ko.observable(""),
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
      var wasServerConnected = this.model.configuration.serverConnected(); // TODO: Reset UI for new assignment

      this.model.configuration.serverConnected(false);
      var assignment = data.assignment;
      this.model.assignment.id(assignment.id);
      this.model.assignment.version(assignment.version);
      this.model.assignment.courseId(assignment.course_id);
      this.model.assignment.forkedId(assignment.forked_id);
      this.model.assignment.forkedVersion(assignment.forked_version);
      this.model.assignment.hidden(assignment.hidden);
      this.model.assignment.reviewed(assignment.reviewed);
      this.model.assignment.type(assignment.type);
      this.model.assignment.url(assignment.url);
      this.model.assignment.instructions(assignment.instructions);
      this.model.assignment.name(assignment.name);
      this.model.assignment.onChange(assignment.on_change || null);
      this.model.assignment.onEval(assignment.on_eval || null);
      this.model.assignment.onRun(assignment.on_run);
      this.model.assignment.startingCode(assignment.starting_code);
      this.model.assignment.ownerId(assignment.owner_id);
      Object(_editor_assignment_settings__WEBPACK_IMPORTED_MODULE_15__["loadAssignmentSettings"])(this.model, assignment.settings);
      this.loadTags(assignment.tags);
      this.loadSampleSubmissions(assignment.sample_submissions);
      Object(_files__WEBPACK_IMPORTED_MODULE_8__["loadConcatenatedFile"])(assignment.extra_instructor_files, this.model.assignment.extraInstructorFiles);
      Object(_files__WEBPACK_IMPORTED_MODULE_8__["loadConcatenatedFile"])(assignment.extra_starting_files, this.model.assignment.extraStartingFiles);
      this.loadSubmission(data.submission);
      this.model.configuration.serverConnected(wasServerConnected);
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
                return model.assignment.onEval();

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
            model.submission.code(model.assignment.startingCode().map(function (file) {
              var filename = file.filename();

              if (filename === "^starting_code.py") {
                filename = "answer.py";
              } else {
                filename = filename.substr(1);
              }

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
            return model.status.loadAssignmentMessage() || model.status.saveAssignmentMessage() || model.status.loadHistoryMessage() || model.status.loadFileMessage() || model.status.saveFileMessage() || model.status.loadDatasetMessage() || model.status.logEventMessage() || model.status.updateSubmissionMessage() || "";
          })
        }
      };
      Object(interface_js__WEBPACK_IMPORTED_MODULE_7__["makeExtraInterfaceSubscriptions"])(self, model);
    }
  }, {
    key: "turnOnHacks",
    value: function turnOnHacks() {
      console.log("TODO");
    }
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
      components.trace = new _trace__WEBPACK_IMPORTED_MODULE_11__["Trace"](main);
      components.console = new _console__WEBPACK_IMPORTED_MODULE_12__["BlockPyConsole"](main, container.find(".blockpy-console"));
      components.engine = new engine_js__WEBPACK_IMPORTED_MODULE_10__["BlockPyEngine"](main);
      components.fileSystem = new _files__WEBPACK_IMPORTED_MODULE_8__["BlockPyFileSystem"](main);
      components.editors = new editors_js__WEBPACK_IMPORTED_MODULE_4__["Editors"](main, container.find(".blockpy-editor"));
      components.pythonEditor = this.components.editors.byName("python");
      components.server = new server_js__WEBPACK_IMPORTED_MODULE_6__["BlockPyServer"](main);
      components.corgis = new _corgis__WEBPACK_IMPORTED_MODULE_16__["BlockPyCorgis"](main);
      /*
      TODO
      components.toolbar = new BlockPyToolbar(main, container.find(".blockpy-toolbar"));
      components.history = new BlockPyHistory(main);*/
    }
  }, {
    key: "start",
    value: function start() {
      this.model.display.filename("answer.py");
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
        });
        this.html.tooltip();
      }
    }
  }]);

  return ConsoleLineTurtle;
}(ConsoleLine);

var ConsoleLinePlot =
/*#__PURE__*/
function (_ConsoleLine2) {
  _inherits(ConsoleLinePlot, _ConsoleLine2);

  function ConsoleLinePlot(main, content) {
    var _this2;

    _classCallCheck(this, ConsoleLinePlot);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLinePlot).call(this, main, ConsoleLineType.PLOT, content));

    _this2.html.addClass("blockpy-console-plot-output");

    return _this2;
  }

  _createClass(ConsoleLinePlot, [{
    key: "render",
    value: function render(where) {
      if (this.visible) {
        where.append(this.html);
        this.html.tooltip();
      }
    }
  }]);

  return ConsoleLinePlot;
}(ConsoleLine);

var ConsoleLineText =
/*#__PURE__*/
function (_ConsoleLine3) {
  _inherits(ConsoleLineText, _ConsoleLine3);

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
function (_ConsoleLine4) {
  _inherits(ConsoleLineValue, _ConsoleLine4);

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
function (_ConsoleLine5) {
  _inherits(ConsoleLineInput, _ConsoleLine5);

  function ConsoleLineInput(main, promptMessage) {
    var _this3;

    _classCallCheck(this, ConsoleLineInput);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineInput).call(this, main, ConsoleLineType.INPUT, promptMessage));
    _this3.visible = true;
    return _this3;
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
      var _this4 = this;

      var resolveOnClick;
      var submittedPromise = new Promise(function (resolve) {
        resolveOnClick = resolve;
      });

      var submitForm = function submitForm() {
        resolveOnClick(input.val());
        input.prop("disabled", true);
        button.prop("disabled", true);

        _this4.html.tooltip();
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
function (_ConsoleLine6) {
  _inherits(ConsoleLineStartEvaluate, _ConsoleLine6);

  function ConsoleLineStartEvaluate(main) {
    var _this5;

    _classCallCheck(this, ConsoleLineStartEvaluate);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineStartEvaluate).call(this, main, ConsoleLineType.START_EVAL));

    _this5.html.append($(START_EVAL_HTML));

    _this5.html.click(function () {
      _this5.main.model.ui.execute.evaluate();

      _this5["delete"]();
    });

    return _this5;
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
    console.log("TRIGGERED");
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
      var datasets = data.blockpy.datasets;
      var documentation = data.blockpy.documentation;
      var start = $("<p>Documentation is available at <a href='".concat(documentation, "' target=_blank>url</a></p>"));
      var body = $("<table></table>", {
        "class": "table table-bordered table-sm table-striped"
      });
      Object.keys(datasets).sort().map(function (name) {
        var titleName = name;
        var btn = $('<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Load</button>');

        if (_this3.loadedDatasets.indexOf(name) > -1) {
          setButtonLoaded(btn);
        } else {
          btn.click(function () {
            _this3.importDataset(name.toLowerCase(), "Data - " + titleName);

            setButtonLoaded(btn);
          });
        }

        $("<tr></tr>").append($("<td>" + titleName + "</td>")).append($("<td>" + datasets[titleName]["short"] + "</td>")).append($("<td></td>").append(btn)).appendTo(body);
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
var DIALOG_HTML = "\n    <div class='blockpy-dialog modal hidden'\n         role=\"dialog\"\n         aria-label='Dialog'\n         aria-hidden=\"true\"\n         aria-modal=\"true\">\n        <div class='modal-dialog' rol=\"document\">\n            <div class='modal-content' role='region' aria-label='Dialog content'>\n                <div class='modal-header'>\n                    <h4 class='modal-title'>Dynamic Content</h4>\n                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class='modal-body' style='width:100%; height:400px; white-space:pre-wrap'>\n                </div>\n                <div class='modal-footer'>\n                    <button type='button' class='btn btn-white' data-dismiss='modal'>Close</button>\n                </div>    \n            </div>\n        </div>\n    </div>\n";
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
  confirm("Error Loading Assignment", "BlockPy encountered an error while loading the assignment.<br>\nPlease reload the page and try again.");
};

BlockPyDialog.prototype.SCREENSHOT_BLOCKS = function () {// TODO
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ASSIGNMENT_SETTINGS_EDITOR_HTML = "\n    <div>\n    Assignment Settings\n    \n    <form>\n        <label>Name: </label>\n    </form>\n    \n    </div>\n";
var ASSIGNMENT_SETTINGS = [
/**
 * Whether or not the user is allowed to edit the file directly
 * @type {bool}
 */
["canEdit", "can_edit", true],
/**
 * Whether or not the user can use blocks
 * @type {bool}
 */
["canBlocks", "can_blocks", true],
/**
 * Whether to prevent timeouts (potentially allow infinite loops)
 * @type {bool}
 */
["disableTimeout", "disable_timeout", false],
/**
 * What level of toolbox to present to the user
 */
["toolboxLevel", "toolbox_level", "normal"],
/**
 * When the student opens this assignment, what Python editor mode to start in
 */
["startView", "start_view", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].SPLIT],
/**
 * The current list of datasets available on load as a comma separated string
 */
["datasets", "datasets", ""],
/**
 * Whether this a parson's style question
 */
["isParsons", "is_parsons", false], // Whether to even try to run feedback
["disableFeedback", "disable_feedback", false], // Whether to do any tracing
["disableTrace", "disable_trace", false], // Whether to immediately start in Interactive Console mode
["onlyInteractive", "only_interactive", false], ["onlyUploads", "only_uploads", false], // What menus/feedback to show and hide
["hideFiles", "hide_files", true], ["hideQueuedInputs", "hide_queued_inputs", true], ["hideEditors", "hide_editors", false], ["hideAll", "hide_all", false], ["hideEvaluate", "hide_evaluate", false], ["hideImportDatasetsButton", "hide_import_datasets_button", true], ["hideImportStatements", "hide_import_statements", false], ["hideCoverageButton", "hide_coverage_button", false]];
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

  function AssignmentSettingsView() {
    _classCallCheck(this, AssignmentSettingsView);

    return _possibleConstructorReturn(this, _getPrototypeOf(AssignmentSettingsView).apply(this, arguments));
  }

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
 * TODO: Fix capture blocks css
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
  return "<label class=\"btn btn-outline-secondary blockpy-mode-set-blocks\"\n                data-bind=\"css: {active: display.pythonMode() === '".concat(mode, "'},\n                           click: display.pythonMode.bind($data, '").concat(mode, "')\">\n                <span class='fas fa-").concat(icon, "'></span>\n                <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\" checked> ").concat(name, "\n            </label>");
}

var PYTHON_EDITOR_HTML = "\n    <div class=\"blockpy-python-toolbar col-md-12 btn-toolbar\"\n         role=\"toolbar\" aria-label=\"Python Toolbar\">\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Run Group\">         \n            <button type=\"button\" class=\"btn blockpy-run\"\n                data-bind=\"click: ui.execute.run\">\n                <span class=\"fas fa-play\"></span> Run\n             </button>\n         </div>\n         \n         <div class=\"btn-group btn-group-toggle mr-2\" data-toggle=\"buttons\">\n                ".concat(makeTab("Blocks", "th-large", DisplayModes.BLOCK), "\n                ").concat(makeTab("Split", "columns", DisplayModes.SPLIT), "\n                ").concat(makeTab("Text", "align-left", DisplayModes.TEXT), "\n            </div>\n\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Reset Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.reset\">\n                <span class=\"fas fa-sync\"></span> Reset\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Import Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.importDataset\">\n                <span class=\"fas fa-cloud-download-alt\"></span> Import datasets\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\">\n                <label class=\"btn btn-outline-secondary\">\n                    <span class=\"fas fa-file-upload\"></span> Upload\n                    <input class=\"blockpy-toolbar-upload\" type=\"file\"\n                        hidden\n                        data-bind=\"event: {change: ui.editors.upload}\">\n                 </label>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle dropdown-toggle-split\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <span class=\"caret\"></span>\n                    <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                \n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <a class='dropdown-item blockpy-toolbar-download'\n                        data-bind=\"click: ui.editors.download\">\n                    <span class='fas fa-download'></span> Download\n                    </a>\n                </div>\n            </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"History Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-history\"></span> History\n             </button>\n         </div>\n         \n         <!-- Fully functional, but a little too.. Invasive \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Fullscreen Group\"\n            data-bind=\"visible: display.pythonMode() === 'text'\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.python.fullscreen\">\n                <span class=\"fas fa-expand-arrows-alt\"></span> Fullscreen\n             </button>\n         </div>\n         -->\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Save Group\"\n            data-bind=\"visible: ui.editors.canSave\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-save\"></span> Save\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Delete Group\"\n            data-bind=\"visible: ui.editors.canDelete\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\",\n                data-bind=\"click: ui.files.delete\">\n                <span class=\"fas fa-trash\"></span> Delete\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Rename Group\"\n            data-bind=\"visible: ui.editors.canRename\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-file-signature\"></span> Rename\n             </button>\n         </div>\n         \n    </div>\n\n\n    <div class=\"blockpy-python-blockmirror\">\n    </div>\n");
/*
        <button type='button' class='btn blockpy-run' style='float:left',
            data-bind='css: execution.status() == "running" ? "btn-info" :
                            execution.status() == "error" ? "btn-danger" : "btn-success",
                       visible: settings.instructor() || !assignment.upload()' >
            <span class='glyphicon glyphicon-play'></span> Run
        </button>

            <div class="btn-group" data-toggle="buttons" data-bind="visible: !assignment.upload()">
                <label class="btn btn-default blockpy-mode-set-blocks"
                       data-bind="css: {active: settings.editor() == 'Blocks',
                                        disabled: !areBlocksUpdating()}">
                    <span class='glyphicon glyphicon-th-large'></span>
                    <input type="radio" name="blockpy-mode-set" autocomplete="off" checked> Blocks
                </label>
                <!--<label class="btn btn-default blockpy-mode-set-instructor"
                       data-bind="visible: settings.instructor,
                                  css: {active: settings.editor() == 'Upload'}">
                    <span class='glyphicon glyphicon-list-alt'></span>
                    <input type="radio" name="blockpy-mode-set" autocomplete="off"> Instructor
                </label>-->
                <label class="btn btn-default blockpy-mode-set-split"
                       data-bind="css: {active: settings.editor() == 'Split',
                                        disabled: !areBlocksUpdating()}">
                    <span class='glyphicon glyphicon-resize-horizontal'></span>
                    <input type="radio" name="blockpy-mode-set" autocomplete="off"> Split
                </label>
                <label class="btn btn-default blockpy-mode-set-text"
                       data-bind="css: {active: settings.editor() == 'Text'}">
                    <span class='glyphicon glyphicon-pencil'></span>
                    <input type="radio" name="blockpy-mode-set" autocomplete="off"> Text
                </label>
            </div>
            <button type='button' class='btn btn-default blockpy-toolbar-reset'
                    data-bind="visible: !assignment.upload()">
                <span class='glyphicon glyphicon-refresh'></span> Reset
            </button>
            <!--<button type='button' class='btn btn-default blockpy-toolbar-capture'>
                <span class='glyphicon glyphicon-picture'></span> Capture
            </button>-->
            <button type='button' class='btn btn-default blockpy-toolbar-import'
                    data-bind="visible: settings.instructor() || (!assignment.upload() && assignment.importable())">
                <span class='glyphicon glyphicon-cloud-download'></span> Import Datasets
            </button>

            <div class="btn-group">
                <label class="btn btn-default btn-file">
                    <span class='glyphicon glyphicon-upload'></span> Upload
                    <input class="blockpy-toolbar-upload" type="file" style="display: none;">
                </label>

                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="caret"></span>
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <a class='blockpy-toolbar-download'><span class='glyphicon glyphicon-download'></span> Download Python Code</a>
                    </li>
                </ul>
            </div>

            <button type='button' class='btn btn-default blockpy-toolbar-history'>
                <span class='glyphicon glyphicon-hourglass'></span> History
            </button>
            <button type='button' class='btn btn-default blockpy-toolbar-instructor' data-bind="visible: settings.instructor">
                <span class='glyphicon glyphicon-list-alt'></span> Settings
            </button>

            <!--
            <button type='button' class='btn btn-default blockpy-toolbar-english'>
                <span class='glyphicon glyphicon-list-alt'></span> English
            </button>
            -->
            <div data-bind="visible: settings.instructor()"
                 style='clear:both'>
            <div class="btn-group blockpy-toolbar-filename-picker" data-toggle="buttons">
                <label class="btn btn-default blockpy-set-filename"
                       data-bind="css: {active: settings.filename() == '__main__'}"
                       data-filename="__main__">
                    <input type="radio" name="blockpy-filename-set" autocomplete="off" checked> __main__
                </label>
                <label class="btn btn-default blockpy-set-filename"
                       data-bind="css: {active: settings.filename() == 'starting_code'}"
                       data-filename="starting_code">
                    <input type="radio" name="blockpy-filename-set" autocomplete="off"> on_start
                </label>
                <label class="btn btn-default blockpy-set-filename"
                       data-bind="css: {active: settings.filename() == 'give_feedback'}"
                       data-filename="give_feedback">
                    <input type="radio" name="blockpy-filename-set" autocomplete="off"> on_run
                </label>
                <label class="btn btn-default blockpy-set-filename"
                       data-bind="css: {active: settings.filename() == 'on_change'}"
                       data-filename="on_change">
                    <input type="radio" name="blockpy-filename-set" autocomplete="off"> on_change
                </label>
            </div>
            </div>
        </div>
    </div>
 */

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

    _this.makeSubscriptions();

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

      _get(_getPrototypeOf(PythonEditorView.prototype), "enter", this).call(this, newFilename, oldEditor);

      this.dirty = false;
      this.updateEditor(this.file.handle()); // Subscribe to the relevant File

      this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this)); // Notify relevant file of changes to BM

      this.currentBMListener = this.updateHandle.bind(this);
      this.bm.addChangeListener(this.currentBMListener); //this.bm.blockEditor.workspace.render();
      //this.bm.refresh();
      // TODO: Figure out why this doesn't end up looking right (go to a different editor, come back, and it'll be squished)

      setTimeout(function () {
        return _this3.bm.refresh();
      }, 1000);
    }
  }, {
    key: "updateEditor",
    value: function updateEditor(newContents) {
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
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.file.handle(this.bm.getCode());
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

      _get(_getPrototypeOf(PythonEditorView.prototype), "exit", this).call(this, newFilename, oldEditor);
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
    key: "uploadFile",
    value: function uploadFile(event) {
      var filename = event.target.fileName;
      var code = event.target.result;

      if (filename.endsWith(".ipynb")) {
        code = convertIpynbToPython(code);
      }

      this.file.handle(code); // TODO: log upload event
      // TODO: Run code
    }
  }, {
    key: "downloadFile",
    value: function downloadFile() {
      var result = _get(_getPrototypeOf(PythonEditorView.prototype), "downloadFile", this).call(this);

      if (result.name === "answer" && result.extension === ".py") {
        result.name = Object(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["sluggify"])(this.main.model.assignment.name());
      }

      result.mimetype = "text/x-python";
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
      this.execute().then(this.configuration.success.bind(this.configuration), this.configuration.failure.bind(this.configuration)).then(this.onRun.bind(this));
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

        _this.execute().then(_this.configuration.success.bind(_this.configuration), _this.configuration.failure.bind(_this.configuration)).then(_this.onEval.bind(_this));
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
      this.main.components.server.logEvent("Run.Program", "", "", "", this.configuration.filename);
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
      var FILENAME = "on_change"; // TODO: Do we actually want to skip if this is the case?
      // Skip if the instructor has not defined anything

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
    value: function dummyOutSandbox() {
      Sk.builtinFiles.files["src/lib/pedal/sandbox/sandbox.py"] = "class Sandbox: pass\ndef run(): pass\ndef reset(): pass\n";
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
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY);
      this.main.model.execution.student.globals(Sk.globals);
      Sk.globals = {};
      var report = this.main.model.execution.reports;
      var filename = this.filename;
      this.main.model.execution.student.results = module;
      this.main.components.console.printValue(_trace__WEBPACK_IMPORTED_MODULE_2__["Trace"].parseValue("_", module.$d._, true).value);
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
      var report = this.main.model.execution.reports;
      var studentCodeSafe = this.main.model.execution.reports.student.evaluation || "None";
      this.dummyOutSandbox();
      var instructorCode = this.code;
      var lineOffset = instructorCode.split(_on_run__WEBPACK_IMPORTED_MODULE_2__["NEW_LINE_REGEX"]).length;
      var isSafe = report["parser"].success && report["verifier"].success;
      instructorCode = WRAP_INSTRUCTOR_CODE(studentCodeSafe, instructorCode, false, isSafe);
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

  return "\nfrom pedal.report import *\nfrom pedal.source import set_source\nset_source(".concat(safeCode, ")\ndef run_student():\n    # limit_execution_time()\n    try:\n").concat(indentedCode, "\n    except Exception as error:\n        # unlimit_execution_time()\n        return error\n    # unlimit_execution_time()\n    return None\n").concat(tifaAnalysis, "\nfrom pedal.sandbox import compatibility\nfrom utility import *\nstudent = get_student_data()\ncompatibility.set_sandbox(student)\nerror, position = get_student_error()\ncompatibility.raise_exception(error, position)\ncompatibility.run_student = run_student\ncompatibility.get_plots = get_plots\ncompatibility.get_output = get_output\ncompatibility.reset_output = reset_output\ncompatibility.trace_lines = trace_lines\ndef capture_output(func, *args):\n   reset_output()\n   func(*args)\n   return get_output()\ncompatibility.capture_output = capture_output\nfrom pedal.cait.cait_api import parse_program\n").concat(instructorCode, "\nfrom pedal.resolvers import simple\nSUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE = simple.resolve()\n#print(MAIN_REPORT.feedback[0].mistake['error'])\n");
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
      var report = this.main.model.execution.reports;
      var studentCodeSafe = this.main.model.submission.code();
      this.dummyOutSandbox();
      var instructorCode = this.code;
      var lineOffset = instructorCode.split(NEW_LINE_REGEX).length;
      var isSafe = report["parser"].success && report["verifier"].success;
      instructorCode = WRAP_INSTRUCTOR_CODE(studentCodeSafe, instructorCode, false, isSafe);
      lineOffset = instructorCode.split(NEW_LINE_REGEX).length - lineOffset;
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
      this.main.components.server.logEvent("Compile", "", "", "", "answer.py");

      _get(_getPrototypeOf(RunConfiguration.prototype), "use", this).call(this, engine);

      engine.reset();
      this.updateParse();
      this.main.components.server.saveFile("answer.py", this.code, null);
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
    key: "updateParse",

    /**
     * Ensure that the parse information is up-to-date
     */
    value: function updateParse() {
      var report = this.main.model.execution.reports; // Attempt a parse

      var ast;

      try {
        var parse = Sk.parse(this.filename, this.code);
        ast = Sk.astFromParse(parse.cst, this.filename, parse.flags);
      } catch (error) {
        // Report the error
        report["parser"] = {
          "success": false,
          "error": error
        };
        console.error(error);
        console.log(this.filename, this.code);
        return false;
      } // Successful parse


      report["parser"] = {
        "success": true,
        "ast": ast
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
    _classCallCheck(this, BlockPyFeedback);

    this.main = main;
    this.tag = tag;
    this.feedbackModel = this.main.model.execution.feedback;
    this.category = this.tag.find(".blockpy-feedback-category");
    this.label = this.tag.find(".blockpy-feedback-label");
    this.message = this.tag.find(".blockpy-feedback-message");
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
      this.feedbackModel.label(label);
      this.main.components.server.logEvent("Intervention", category, label, message, "answer.py"); // Find the first error on a line and report that

      var line = BlockPyFeedback.findFirstErrorLine(data);
      this.feedbackModel.linesError.removeAll();

      if (line !== null && line !== undefined) {
        this.feedbackModel.linesError.push(line);
      } // Invert the set of traced lines


      var studentReport = this.main.model.execution.reports.student;
      this.feedbackModel.linesUncovered.removeAll();

      if (studentReport.success) {
        for (var i = 0; i <= this.main.model.execution.student.lastLine; i++) {
          if (studentReport.lines.indexOf(i) === -1) {
            this.feedbackModel.linesUncovered.push(i);
          }
        }
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
      console.error(error);
      this.main.model.execution.feedback.category("internal");
      this.main.model.execution.feedback.label("Internal Error");
      var message = "\n            Error in instructor feedback.\n            Please show the following to an instructor:\n            \n            <pre><strong>".concat(error.tp$name, "</strong>: ").concat(Sk.ffi.remapToJs(error.args), "</pre>");

      if (error.traceback && error.traceback.length) {
        var tracebackFormatted = error.traceback.map(function (frame) {
          return "File <span class=\"filename\">\"".concat(frame.filename, "\"</span>, line <span class=\"lineno\">").concat(frame.lineno, "</span>\n");
        }).join("");
        message += "<pre>".concat(tracebackFormatted, "</pre>");
        var last_traceback = error.traceback.slice(-1)[0];

        if (last_traceback.filename === filenameExecuted) {
          last_traceback.lineno -= this.main.model.execution.reports.instructor.line_offset;
        }

        console.error(error);
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

var FILES_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-files\"\n    data-bind=\"visible: ui.files.visible\">\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n\n    <li class=\"nav-item\">\n        <strong>View: </strong>\n    </li>\n\n    ".concat(makeTab("answer.py"), "\n    ").concat(makeTab("!instructions.md", "Instructions"), "\n    ").concat(makeTab("!assignment_settings.blockpy", "Settings"), "\n    ").concat(makeTab("^starting_code.py", "Starting Code"), "\n    ").concat(makeTab("!on_run.py", "On Run"), "\n    ").concat(makeTab("!on_change.py", "On Change", true), "\n    ").concat(makeTab("!on_eval.py", "On Eval", true), "\n    ").concat(makeTab("?mock_urls.blockpy", "URL Data", true), "\n    ").concat(makeTab("!sample_submissions.blockpy", "Sample Submissions", true), "\n    ").concat(makeTab("!tags.blockpy", "Tags", true), "\n  \n    <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"\n         role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Add New</a>\n        <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?mock_urls.blockpy'),\n                           click: ui.files.add.bind($data, '?mock_urls.blockpy')\">URL Data</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?tags.blockpy')\">Tags</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?sample_submissions.blockpy')\">Sample Submissions</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onChange,\n                           click: ui.files.add.bind($data, '!on_change.py')\">On Change</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onEval\">On Eval</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Starting File</a>\n            <a class=\"dropdown-item\" href=\"#\">Instructor File</a>\n            <a class=\"dropdown-item\" href=\"#\">Student File</a>\n        </div>\n    </li>\n  \n</ul>\n</div>\n");
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
        existingFile.handle = modelFile;
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
var FOOTER_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-status\">\n    <div>\n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadAssignment')\">Load Assignment</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('saveAssignment')\">Save Assignment</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadFile')\">Load File</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('saveFile')\">Save File</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadDataset')\">Load Dataset</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('logEvent')\">Log Event</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('updateSubmission')\">Update Submission</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('onExecution')\">Execution</span>\n    </div>\n    <div\n        <span data-bind=\"text: ui.server.messages\"></span>\n    </div>\n    <div>\n        <span>User: <span data-bind=\"text: user.id\"></span> (<span data-bind=\"text: user.name\"></span>)</span>, \n        <span>Course: <span data-bind=\"text: user.courseId\"></span></span>,\n        <span>Group: <span data-bind=\"text: user.groupId\"></span></span>,\n        <span>Assignment: <span data-bind=\"text: assignment.id\"></span></span>,\n        <span>Assignment Version: <span data-bind=\"text: assignment.version\"></span></span>,\n        <span>Submission: <span data-bind=\"text: submission.id\"></span></span>, \n        <span>Submission Version: <span data-bind=\"text: submission.version\"></span></span>\n    </div>\n</div>\n";

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
  return "\n<div class='blockpy-content container-fluid'>\n\n    <!-- Dialog -->\n    ".concat(dialog_js__WEBPACK_IMPORTED_MODULE_1__["DIALOG_HTML"], "\n    \n    <!-- Hidden Capture Canvas -->\n    <canvas id='capture-canvas' class='d-none' role=\"presentation\" aria-hidden=\"true\"></canvas>\n    \n    <!-- Row 1: Header and Quick Menu -->\n    <div class='row'>\n         \n         <!-- Description -->\n         <div class='col-md-10 blockpy-panel blockpy-header'\n               role='heading' aria-label='Assignment Description'>\n         \n            <!-- Assignment Name -->\n            <span role='heading' aria-level='1'\n                  class=\"blockpy-name\">\n                <strong>BlockPy: </strong> \n                <span data-bind='text: assignment.name'></span>\n            </span>\n            \n            <!-- Reset Instructions Button -->\n            <div class=\"blockpy-instructions-reset\"\n                data-bind=\"visible: ui.instructions.isChanged\">\n                <a class=\"float-right\"\n                    data-bind=\"click: ui.instructions.reset\"\n                    href=\"\">\n                    Reset instructions</a>\n            </div>\n            \n            <!-- Instructions -->\n            <div class='blockpy-instructions'\n                 data-bind=\"html: ui.instructions.current\">\n            </div>\n        </div>\n        \n        <div class='col-md-2 blockpy-panel blockpy-quick-menu'\n             role='menubar' aria-label='Quick Menu' title=\"Quick Menu\">\n            <!-- Get Shareable Link -->\n            <button class=\"btn btn-outline-secondary btn-sm\">\n                Get shareable link</button>\n            <!-- View as instructor -->\n            <div class=\"form-check\"\n                 data-bind=\"visible: ui.role.isGrader\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"blockpy-as-instructor\"\n                    data-bind=\"checked: display.instructor\">\n                <label class=\"form-check-label\" for=\"blockpy-as-instructor\">\n                    View as instructor\n                </label>\n            </div>\n        </div>\n         \n    </div>\n    \n    <!-- Row 2: Console and Feedback -->\n    <div class='row'>\n    \n        <!-- Console -->\n        ").concat(console_js__WEBPACK_IMPORTED_MODULE_6__["CONSOLE_HTML"], "\n         \n        <!-- Feedback -->\n        <!-- ko if: ui.secondRow.isFeedbackVisible -->\n        ").concat(feedback_js__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_HTML"], "\n        <!-- /ko -->\n        \n        <!-- Trace -->\n        <!-- ko if: ui.secondRow.isTraceVisible -->\n        ").concat(trace_js__WEBPACK_IMPORTED_MODULE_0__["TRACE_HTML"], "\n        <!-- /ko -->\n         \n    </div>\n    \n    <!-- Row 3: File Navigation -->\n    <!-- ko if: ui.files.visible -->\n    <div class='row'>\n        ").concat(files_js__WEBPACK_IMPORTED_MODULE_3__["FILES_HTML"], "\n    </div>\n    <!-- /ko -->\n    \n    <!-- View Row -->\n    <div class=\"row\">\n        ").concat(editors_js__WEBPACK_IMPORTED_MODULE_5__["EDITORS_HTML"], "\n    </div>\n\n    <!-- Footer Row -->    \n    <div class=\"row\">\n        ").concat(footer_js__WEBPACK_IMPORTED_MODULE_4__["FOOTER_HTML"], "\n    </div>\n    \n</div>\n    ");
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
  /*
  model.assignment.name.subscribe(function(e) { server.saveAssignment();});
   model.assignment.parsons.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.importable.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.secret.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.disable_algorithm_errors.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.disable_timeout.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.initial_view.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.files.subscribe(function(e) { server.saveAssignment(); });
  //model.settings.editor.subscribe(function(newValue) { server.logEvent('editor', newValue); });
  model.execution.show_trace.subscribe(function(newValue) { server.logEvent("trace", newValue); });
  model.execution.trace_step.subscribe(function(newValue) { server.logEvent("trace_step", newValue); });
   */
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
  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("saveAssignment") && model.display.autoSave()) {
    var data = this.createServerData();
    data["introduction"] = model.assignment.introduction();
    data["parsons"] = model.assignment.parsons();
    data["initial"] = model.assignment.initial_view();
    data["importable"] = model.assignment.importable();
    data["secret"] = model.assignment.secret();
    data["disable_algorithm_errors"] = model.assignment.disable_algorithm_errors();
    data["disable_timeout"] = model.assignment.disable_timeout();
    data["name"] = model.assignment.name(); // TODO: hackish, broken if ',' is in name

    data["modules"] = model.assignment.modules().join(",");
    data["files"] = model.assignment.files().join(",");

    this._postLatestRetry(data, this.urls.save_assignment, "assignment", "ASSIGNMENTS_CACHE", this.TIMER_DELAY);
  } else {
    this.setStatus("Offline", "Server is not connected! (Save Assignment)");
  }
};

BlockPyServer.prototype.getHistory = function (callback) {
  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("get_history")) {
    var data = this.createServerData();
    var server = this;

    this._postBlocking(this.urls.get_history, data, 5, function (response) {
      if (response.success) {
        callback(response.data);
      } else {
        console.error(response);
        server.setStatus("Error", response.message);
      }
    });
  } else {
    this.setStatus("Offline", "Server is not connected! (Get History)");
    callback([]);
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
/**
 * This function can be used to load files and web resources.
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
  var _this7 = this;

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

      _this7._postRetry(data, "updateSubmission", 0, function (response) {
        if (response.success) {
          _this7.setStatus("updateSubmission", StatusState.READY);
        } else {
          _this7.setStatus("updateSubmission", StatusState.FAILED, response.message);
        }

        if (callback) {
          callback(data);
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
  });
  mod.queue_input = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("queue_input", arguments, 1, Infinity);
    var args = arguments;

    for (var i = args.length - 1; i >= 0; i--) {
      var input = args[i];
      Sk.builtin.pyCheckType("input", "string", Sk.builtin.checkString(input));
      Sk.queuedInput.push(Sk.ffi.remapToJs(input));
    }
  });
  /**
   * This function is called by instructors to get the students' code as a string.
  **/

  mod.get_program = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_program", arguments, 0, 0);
    return Sk.ffi.remapToPy(Sk.executionReports["verifier"].code);
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
          "data": graph.map(function (plot) {
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
            newDict.mp$ass_subscript(Sk.ffi.remapToPy(key), self.module[key]);
          }
        }
      } else {
        self.module = {};
      }
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

            result.push(Sk.ffi.remapToPy(property));
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
  });
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
  localStorage.setItem(this.namespace + "_" + key + "_value", value);
  localStorage.setItem(this.namespace + "_" + key + "_timestamp", $.now());
};
/**
 * A method for removing a key from LocalStorage.
 *
 * @param {String} key - The name of the key to remove.
 */


LocalStorageWrapper.prototype.remove = function (key) {
  localStorage.removeItem(this.namespace + "_" + key + "_value");
  localStorage.removeItem(this.namespace + "_" + key + "_timestamp");
};
/**
 * A method for retrieving the value associated with the given key.
 *
 * @param {String} key - The name of the key to retrieve the value for.
 */


LocalStorageWrapper.prototype.get = function (key) {
  return localStorage.getItem(this.namespace + "_" + key + "_value");
};
/**
 * A method for retrieving the time associated with the given key.
 *
 * @param {String} key - The name of the key to retrieve the time for.
 * @returns {Integer} - The timestamp (local epoch) when the key was last set.
 */


LocalStorageWrapper.prototype.getTime = function (key) {
  return parseInt(localStorage.getItem(this.namespace + "_" + key + "_timestamp"));
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
  return localStorage.getItem(this.namespace + "_" + key + "_value") !== null;
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
  var stored_time = localStorage.getItem(this.namespace + "_" + key + "_timestamp");
  return server_time >= stored_time + 5000;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/trace.js":
/*!**********************!*\
  !*** ./src/trace.js ***!
  \**********************/
/*! exports provided: TRACE_HTML, Trace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACE_HTML", function() { return TRACE_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trace", function() { return Trace; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TRACE_HTML = "\n\n<div class=\"blockpy-trace col-md-6 blockpy-panel\"\n            role=\"region\" aria-label=\"Trace\">\n    \n    <div class=\"clearfix\">\n        <strong>Trace: </strong>\n        \n        <!-- Feedback/Trace Visibility Control -->\n        <button type='button'\n                class='btn btn-sm btn-outline-secondary float-right blockpy-hide-trace'\n                data-bind=\"click: ui.secondRow.advanceState\">\n            <span class='fas fa-eye'></span> Hide Trace\n        </button>\n    </div>\n\n    <div class=\"input-group mb-3 blockpy-trace-controls\">\n        <div class=\"input-group-prepend\">\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.first\">\n                <span class='fas fa-step-backward'></span>\n            </button>\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.backward\">\n                <span class='fas fa-backward'></span>\n            </button>\n            <span class=\"input-group-text\">Step:</span>\n            <span class=\"input-group-text\">\n                <span data-bind='text: execution.student.currentTraceStep'></span>\n                / <span data-bind='text: execution.student.lastStep'></span>\n            </span>\n        </div>\n        <div class=\"input-group-append\">\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.forward\">\n                <span class='fas fa-forward'></span>\n            </button>\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.last\">\n                <span class='fas fa-step-forward'></span>\n            </button>\n            <span class=\"input-group-text\">\n                <span data-bind='text: ui.trace.line'></span>\n            </span>\n        </div>\n    </div>\n    \n    <table class='table table-sm table-striped table-bordered table-hover'>\n        <caption>Current variables at this step</caption>\n        <thead>\n            <tr><th>Name</th><th>Type</th><th>Value</th></tr>\n        </thead>\n        <tbody data-bind=\"foreach: ui.trace.data().properties\">\n            <tr data-bind=\"visible: name != '__file__' && name != '__path__'\">\n                <td data-bind=\"text: name\"></td>\n                <td data-bind=\"text: type\"></td>\n                <td>\n                    <code data-bind=\"text: value\"></code>\n                    <!-- ko if: type == \"List\" -->\n                    \n                    <a href=\"\" data-bind=\"click: //$root.viewExactValue(type, exact_value)\">\n                    <span class='glyphicon glyphicon-new-window'></span>\n                    </a>\n                    <!-- /ko -->\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    \n</div>\n";
var Trace =
/*#__PURE__*/
function () {
  function Trace(main, tag) {
    _classCallCheck(this, Trace);

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


  _createClass(Trace, [{
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
              parsed = Trace.parseValue(property, value);
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

  return Trace;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3MiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL2Fic3RyYWN0X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL21hcmtkb3duLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3B5dGhvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90YWdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9jaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fZXZhbC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3J1bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9za19tb2RfaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy90cmFjZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5L2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImtvXCIiXSwibmFtZXMiOlsiQmxvY2tQeSIsImNvbmZpZ3VyYXRpb24iLCJhc3NpZ25tZW50Iiwic3VibWlzc2lvbiIsImluaXRNb2RlbCIsInVuZGVmaW5lZCIsInNldEFzc2lnbm1lbnQiLCJpbml0TWFpbiIsImluaXRVdGlsaXRpZXMiLCJpbml0TW9kZWxNZXRob2RzIiwidHVybk9uSGFja3MiLCJpbml0SW50ZXJmYWNlIiwiYXBwbHlNb2RlbCIsImluaXRDb21wb25lbnRzIiwic3RhcnQiLCJrZXkiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsQ29uZmlndXJhdGlvbl8iLCJsb2NhbFNldHRpbmdzXyIsImhhcyIsImdldCIsIkxvY2FsU3RvcmFnZVdyYXBwZXIiLCJtb2RlbCIsInVzZXIiLCJpZCIsImtvIiwib2JzZXJ2YWJsZSIsIm5hbWUiLCJyb2xlIiwiZ2V0U2V0dGluZyIsImNvdXJzZUlkIiwiZ3JvdXBJZCIsImluc3RydWN0aW9ucyIsInVybCIsInR5cGUiLCJzdGFydGluZ0NvZGUiLCJvblJ1biIsIm9uQ2hhbmdlIiwib25FdmFsIiwiZXh0cmFJbnN0cnVjdG9yRmlsZXMiLCJvYnNlcnZhYmxlQXJyYXkiLCJleHRyYVN0YXJ0aW5nRmlsZXMiLCJmb3JrZWRJZCIsImZvcmtlZFZlcnNpb24iLCJvd25lcklkIiwidmVyc2lvbiIsInRhZ3MiLCJzYW1wbGVTdWJtaXNzaW9ucyIsInJldmlld2VkIiwiaGlkZGVuIiwic2V0dGluZ3MiLCJtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwiLCJjb2RlIiwiZXh0cmFGaWxlcyIsImVuZHBvaW50Iiwic2NvcmUiLCJjb3JyZWN0Iiwic3VibWlzc2lvblN0YXR1cyIsImdyYWRpbmdTdGF0dXMiLCJkaXNwbGF5IiwiZmlsZW5hbWUiLCJpbnN0cnVjdG9yIiwibXV0ZVByaW50ZXIiLCJweXRob25Nb2RlIiwiRGlzcGxheU1vZGVzIiwiU1BMSVQiLCJhdXRvU2F2ZSIsImJpZ0NvbnNvbGUiLCJwcmV2aW91c0NvbnNvbGVIZWlnaHQiLCJjdXJyZW50Q29uc29sZUhlaWdodCIsInNlY29uZFJvd1NlY29uZFBhbmVsIiwiU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zIiwiRkVFREJBQ0siLCJ0cmFjZUV4ZWN1dGlvbiIsImxvYWRpbmdEYXRhc2V0cyIsImNoYW5nZWRJbnN0cnVjdGlvbnMiLCJ0cmlnZ2VyT25DaGFuZ2UiLCJzdGF0dXMiLCJsb2FkQXNzaWdubWVudCIsIlN0YXR1c1N0YXRlIiwiUkVBRFkiLCJsb2FkQXNzaWdubWVudE1lc3NhZ2UiLCJsb2FkSGlzdG9yeSIsImxvYWRIaXN0b3J5TWVzc2FnZSIsImxvYWRGaWxlIiwibG9hZEZpbGVNZXNzYWdlIiwibG9hZERhdGFzZXQiLCJsb2FkRGF0YXNldE1lc3NhZ2UiLCJsb2dFdmVudCIsImxvZ0V2ZW50TWVzc2FnZSIsInNhdmVGaWxlIiwic2F2ZUZpbGVNZXNzYWdlIiwic2F2ZUFzc2lnbm1lbnQiLCJzYXZlQXNzaWdubWVudE1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uIiwidXBkYXRlU3VibWlzc2lvbk1lc3NhZ2UiLCJvbkV4ZWN1dGlvbiIsImV4ZWN1dGlvbiIsInJlcG9ydHMiLCJvdXRwdXQiLCJzdHVkZW50IiwiY3VycmVudFN0ZXAiLCJsYXN0U3RlcCIsImN1cnJlbnRMaW5lIiwibGFzdExpbmUiLCJjdXJyZW50VHJhY2VEYXRhIiwiY3VycmVudFRyYWNlU3RlcCIsInJlc3VsdHMiLCJnbG9iYWxzIiwiZmVlZGJhY2siLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJsYWJlbCIsImxpbmVzRXJyb3IiLCJsaW5lc1VuY292ZXJlZCIsImNhbGxiYWNrcyIsInNlcnZlckNvbm5lY3RlZCIsImJsb2NrbHlQYXRoIiwiYXR0YWNobWVudFBvaW50IiwiY29udGFpbmVyIiwidXJscyIsImNvbnN0YW50cyIsImd1aSIsIm1ha2VJbnRlcmZhY2UiLCIkIiwiaHRtbCIsImFzc2lnbm1lbnRfaWQiLCJjb21wb25lbnRzIiwic2VydmVyIiwic2FtcGxlcyIsImdyYWRpbmdfc3RhdHVzIiwic3VibWlzc2lvbl9zdGF0dXMiLCJjb3Vyc2VfaWQiLCJsb2FkQ29uY2F0ZW5hdGVkRmlsZSIsImV4dHJhX2ZpbGVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ3YXNTZXJ2ZXJDb25uZWN0ZWQiLCJmb3JrZWRfaWQiLCJmb3JrZWRfdmVyc2lvbiIsIm9uX2NoYW5nZSIsIm9uX2V2YWwiLCJvbl9ydW4iLCJzdGFydGluZ19jb2RlIiwib3duZXJfaWQiLCJsb2FkQXNzaWdubWVudFNldHRpbmdzIiwibG9hZFRhZ3MiLCJsb2FkU2FtcGxlU3VibWlzc2lvbnMiLCJzYW1wbGVfc3VibWlzc2lvbnMiLCJleHRyYV9pbnN0cnVjdG9yX2ZpbGVzIiwiZXh0cmFfc3RhcnRpbmdfZmlsZXMiLCJsb2FkU3VibWlzc2lvbiIsInNldFN0YXR1cyIsInNlbGYiLCJ1aSIsImlzR3JhZGVyIiwicHVyZUNvbXB1dGVkIiwiaXNDaGFuZ2VkIiwiY3VycmVudCIsInV0aWxpdGllcyIsIm1hcmtkb3duIiwicmVzZXQiLCJzZWNvbmRSb3ciLCJpc0ZlZWRiYWNrVmlzaWJsZSIsImlzVHJhY2VWaXNpYmxlIiwiVFJBQ0UiLCJpc0NvbnNvbGVTaG93VmlzaWJsZSIsInN3aXRjaExhYmVsIiwiYWR2YW5jZVN0YXRlIiwiY3VycmVudFBhbmVsIiwiTk9ORSIsInNpemUiLCJoaWRlRXZhbHVhdGUiLCJBQ1RJVkUiLCJiYWRnZSIsInRvTG93ZXJDYXNlIiwidHJhY2UiLCJsaW5lIiwic3RlcCIsInRyYWNlRGF0YSIsImZpcnN0IiwiYmFja3dhcmQiLCJwcmV2aW91cyIsIk1hdGgiLCJtYXgiLCJmb3J3YXJkIiwibmV4dCIsIm1pbiIsImxhc3QiLCJmaWxlcyIsInZpc2libGUiLCJoaWRlRmlsZXMiLCJoYXNDb250ZW50cyIsInBhdGgiLCJzb21lIiwiZmlsZSIsImxlbmd0aCIsImFkZCIsImZpbGVTeXN0ZW0iLCJuZXdGaWxlIiwiZGVsZXRlRmlsZSIsImV4dHJhU3R1ZGVudEZpbGVzIiwib2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUiLCJlZGl0b3JzIiwiZ2V0RWRpdG9yIiwidmlldyIsImhpZGVFZGl0b3JzIiwibWFwIiwic3Vic3RyIiwibWFrZU1vZGVsRmlsZSIsImNvbnRlbnRzIiwiY2FuU2F2ZSIsImNhbkRlbGV0ZSIsIlVOREVMRVRBQkxFX0ZJTEVTIiwiaW5kZXhPZiIsImNhblJlbmFtZSIsIlVOUkVOQU1BQkxFX0ZJTEVTIiwidXBsb2FkIiwidXBsb2FkRmlsZSIsImJpbmQiLCJkb3dubG9hZCIsImRvd25sb2FkRmlsZSIsImltcG9ydERhdGFzZXQiLCJjb3JnaXMiLCJvcGVuRGlhbG9nIiwicHl0aG9uIiwiZnVsbHNjcmVlbiIsImNvZGVNaXJyb3IiLCJweXRob25FZGl0b3IiLCJibSIsInRleHRFZGl0b3IiLCJzZXRPcHRpb24iLCJnZXRPcHRpb24iLCJleGVjdXRlIiwicnVuIiwiZW5naW5lIiwiZXZhbHVhdGUiLCJpc0VuZHBvaW50Q29ubmVjdGVkIiwibWVzc2FnZXMiLCJtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zIiwiYXBwbHlCaW5kaW5ncyIsIm1haW4iLCJ0ZXh0IiwiRWFzeU1ERSIsInByb3RvdHlwZSIsImRpYWxvZyIsIkJsb2NrUHlEaWFsb2ciLCJmaW5kIiwiQmxvY2tQeUZlZWRiYWNrIiwiVHJhY2UiLCJCbG9ja1B5Q29uc29sZSIsIkJsb2NrUHlFbmdpbmUiLCJCbG9ja1B5RmlsZVN5c3RlbSIsIkVkaXRvcnMiLCJieU5hbWUiLCJCbG9ja1B5U2VydmVyIiwiQmxvY2tQeUNvcmdpcyIsIlNUQVJUX0VWQUxfSFRNTCIsIkNPTlNPTEVfSFRNTCIsIk5FV19DT05TT0xFX0xJTkVfSFRNTCIsIkNvbnNvbGVMaW5lVHlwZSIsIlRFWFQiLCJIVE1MIiwiUExPVCIsIklNQUdFIiwiVFVSVExFIiwiRVZBTCIsIlNUQVJUX0VWQUwiLCJWQUxVRSIsIklOUFVUIiwiVEVTVF9DQVNFIiwiQ29uc29sZUxpbmUiLCJjb250ZW50Iiwib3JpZ2luIiwiU2siLCJjdXJyRmlsZW5hbWUiLCJleGVjdXRpb25CdWZmZXIiLCJpbmRleCIsImZmaSIsInJlbWFwVG9QeSIsInJlbW92ZSIsIkNvbnNvbGVMaW5lVHVydGxlIiwiYWRkQ2xhc3MiLCJ3aGVyZSIsInByZXBlbmQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwidG9vbHRpcCIsIkNvbnNvbGVMaW5lUGxvdCIsImFwcGVuZCIsIkNvbnNvbGVMaW5lVGV4dCIsImVuY29kZWRUZXh0IiwiZW5jb2RlSFRNTCIsImxpbmVEYXRhIiwiQ29uc29sZUxpbmVWYWx1ZSIsIkNvbnNvbGVMaW5lSW5wdXQiLCJwcm9tcHRNZXNzYWdlIiwiaW5wdXRGb3JtIiwiaW5wdXRCdG4iLCJpbnB1dEdyb3VwIiwiaW5wdXRCb3giLCJpbnB1dE1zZyIsIm1ha2VJbnRlcmFjdGl2ZSIsImlucHV0IiwiYnV0dG9uIiwicmVzb2x2ZU9uQ2xpY2siLCJzdWJtaXR0ZWRQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdWJtaXRGb3JtIiwidmFsIiwicHJvcCIsImNsaWNrIiwia2V5dXAiLCJlIiwia2V5Q29kZSIsImZvY3VzIiwiQ29uc29sZUxpbmVFdmFsdWF0ZSIsIkNvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSIsInRhZyIsInByaW50ZXJUYWciLCJNSU5JTVVNX1dJRFRIIiwiTUlOSU1VTV9IRUlHSFQiLCJERUZBVUxUX0hFSUdIVCIsImhlaWdodCIsImNsZWFyIiwicmVtb3ZlQWxsIiwibGluZUJ1ZmZlciIsInBsb3RCdWZmZXIiLCJlbXB0eSIsInR1cnRsZUxpbmUiLCJUdXJ0bGVHcmFwaGljcyIsInRhcmdldCIsImdldFR1cnRsZUxpbmUiLCJ3aWR0aCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiYXNzZXRzIiwibG9hZEFzc2V0IiwicmVuZGVyIiwiY3VycmVudFByaW50ZXJEaW1lbnNpb24iLCJwYWdlIiwiZWFjaCIsImF0dHIiLCJzaG93IiwiaGlkZSIsImxpbmVUZXh0IiwiZmx1c2giLCJjaGFyQXQiLCJzcGxpdExpbmVzIiwic3BsaXQiLCJhZGRDb250ZW50IiwiaSIsInB1c2giLCJwbG90cyIsInZhbHVlIiwicHJpbnRlZFZhbHVlIiwiaW5wdXRCdWZmZXIiLCJzdGFydEV2YWx1YXRpb24iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiX0lNUE9SVEVEX0RBVEFTRVRTIiwiX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTIiwic2V0QnV0dG9uTG9hZGVkIiwiYnRuIiwicmVtb3ZlQ2xhc3MiLCJsb2FkZWREYXRhc2V0cyIsImxvYWREYXRhc2V0cyIsInNpbGVudGx5IiwiZWRpdG9yIiwiaW1wb3J0cyIsImRhdGFzZXRzIiwiZm9yRWFjaCIsIkJsb2NrTWlycm9yQmxvY2tFZGl0b3IiLCJFWFRSQV9UT09MUyIsImFwcGx5Iiwic2x1ZyIsIndoZW4iLCJkb25lIiwiZm9yY2VCbG9ja1JlZnJlc2giLCJibG9ja0VkaXRvciIsInJlbWFrZVRvb2xib3giLCJmYWlsIiwiYXJndW1lbnRzIiwiZXJyb3IiLCJhbHdheXMiLCJmaW5hbGl6ZVN1YnNjcmlwdGlvbnMiLCJ1cmxfcmV0cmlldmFscyIsInJvb3QiLCJpbXBvcnREYXRhc2V0cyIsImdldERhdGFzZXQiLCJnZXRTY3JpcHQiLCJnZXRDb21wbGV0ZSIsImdldFNrdWxwdCIsImJ1aWx0aW5GaWxlcyIsImdldEJsb2NrbHkiLCJnZXRKU09OIiwiYmxvY2tweSIsImRvY3VtZW50YXRpb24iLCJib2R5IiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJ0aXRsZU5hbWUiLCJhcHBlbmRUbyIsIkRJQUxPR19IVE1MIiwidGl0bGVUYWciLCJib2R5VGFnIiwidGl0bGUiLCJvbmNsb3NlIiwibW9kYWwiLCJkcmFnZ2FibGUiLCJvbiIsIkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQiLCJjb25maXJtIiwiU0NSRUVOU0hPVF9CTE9DS1MiLCJldmVudCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZmlsZU5hbWUiLCJyZWFkQXNUZXh0Iiwic2x1Z2dpZnkiLCJyZXBsYWNlIiwiZXh0ZW5zaW9uIiwibWltZXR5cGUiLCJibG9iIiwiQmxvYiIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJtc1NhdmVCbG9iIiwidGVtcG9yYXJ5RG93bmxvYWRMaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJBYnN0cmFjdEVkaXRvciIsImNoYW5nZUVkaXRvciIsIndhdGNoRmlsZSIsInVwZGF0ZWQiLCJvbkZpbGVVcGRhdGVkIiwiZGVsZXRlZCIsIm9uRmlsZURlbGV0ZWQiLCJuZXdGaWxlbmFtZSIsIm9sZEVkaXRvciIsImdldEZpbGUiLCJ0cmFja0N1cnJlbnRGaWxlIiwibmV3RWRpdG9yIiwic3RvcFdhdGNoaW5nRmlsZSIsInJlc3VsdCIsImhhbmRsZSIsInBhcnNlRmlsZW5hbWUiLCJBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MIiwiQVNTSUdOTUVOVF9TRVRUSU5HUyIsInNhdmVBc3NpZ25tZW50U2V0dGluZ3MiLCJzZXR0aW5nIiwiY2xpZW50TmFtZSIsInNlcnZlck5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJBc3NpZ25tZW50U2V0dGluZ3NWaWV3IiwiQXNzaWdubWVudFNldHRpbmdzIiwiZXh0ZW5zaW9ucyIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJNQVJLRE9XTl9FRElUT1JfSFRNTCIsIk1hcmtkb3duRWRpdG9yVmlldyIsIm1kZSIsImVsZW1lbnQiLCJhdXRvRG93bmxvYWRGb250QXdlc29tZSIsImZvcmNlU3luYyIsIm1pbkhlaWdodCIsInJlbmRlcmluZ0NvbmZpZyIsImNvZGVTeW50YXhIaWdobGlnaHRpbmciLCJpbmRlbnRXaXRoVGFicyIsInRhYlNpemUiLCJkaXJ0eSIsInVwZGF0ZUVkaXRvciIsImN1cnJlbnRTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJjdXJyZW50TGlzdGVuZXIiLCJ1cGRhdGVIYW5kbGUiLCJjb2RlbWlycm9yIiwic2V0VGltZW91dCIsInJlZnJlc2giLCJuZXdDb250ZW50cyIsImRpc3Bvc2UiLCJvZmYiLCJNYXJrZG93bkVkaXRvciIsIkJMT0NLIiwibWFrZVRhYiIsImljb24iLCJtb2RlIiwiUFlUSE9OX0VESVRPUl9IVE1MIiwiY29udmVydElweW5iVG9QeXRob24iLCJpcHluYiIsImlzVXNhYmxlIiwiY2VsbCIsImNlbGxfdHlwZSIsInNvdXJjZSIsInN0YXJ0c1dpdGgiLCJtYWtlUHl0aG9uIiwiam9pbiIsImNlbGxzIiwiZmlsdGVyIiwiUHl0aG9uRWRpdG9yVmlldyIsIkJsb2NrTWlycm9yIiwibWFrZVN1YnNjcmlwdGlvbnMiLCJ3b3Jrc3BhY2UiLCJjb25maWd1cmVDb250ZXh0TWVudSIsIm9wdGlvbnMiLCJlbmFibGVkIiwiY2FsbGJhY2siLCJjdXJyZW50Qk1MaXN0ZW5lciIsImFkZENoYW5nZUxpc3RlbmVyIiwic2V0Q29kZSIsImdldENvZGUiLCJyZW1vdmVDaGFuZ2VMaXN0ZW5lciIsInNldE1vZGUiLCJlbmRzV2l0aCIsIlB5dGhvbkVkaXRvciIsIlRBR1NfRURJVE9SX0hUTUwiLCJUYWdzRWRpdG9yVmlldyIsIlRhZ3NFZGl0b3IiLCJURVhUX0VESVRPUl9IVE1MIiwiVGV4dEVkaXRvclZpZXciLCJDb2RlTWlycm9yIiwiZnJvbVRleHRBcmVhIiwic2hvd0N1cnNvcldoZW5TZWxlY3RpbmciLCJsaW5lTnVtYmVycyIsImZpcnN0TGluZU51bWJlciIsImluZGVudFVuaXQiLCJleHRyYUtleXMiLCJjbSIsImJsdXIiLCJzZXRWYWx1ZSIsIlRleHRFZGl0b3IiLCJFZGl0b3JzRW51bSIsIlNVQk1JU1NJT04iLCJBU1NJR05NRU5UIiwiSU5TVFJVQ1RJT05TIiwiT05fUlVOIiwiT05fQ0hBTkdFIiwiT05fRVZBTCIsIlNUQVJUSU5HX0NPREUiLCJTQU1QTEVfU1VCTUlTU0lPTlMiLCJJTlNUUlVDVE9SX0ZJTEUiLCJTUEVDSUFMX05BTUVTUEFDRVMiLCJBVkFJTEFCTEVfRURJVE9SUyIsIkVESVRPUlNfSFRNTCIsInJlZ2lzdGVyZWRfIiwiZXh0ZW5zaW9uc18iLCJieU5hbWVfIiwicmVnaXN0ZXJFZGl0b3IiLCJpbnN0YW5jZSIsImV4aXQiLCJlbnRlciIsInNwYWNlIiwibGFzdEluZGV4T2YiLCJleGVjdXRpb25Nb2RlbCIsImNvbmZpZ3VyYXRpb25zIiwiUnVuQ29uZmlndXJhdGlvbiIsImV2YWwiLCJFdmFsQ29uZmlndXJhdGlvbiIsIk9uUnVuQ29uZmlndXJhdGlvbiIsIk9uQ2hhbmdlQ29uZmlndXJhdGlvbiIsIk9uRXZhbENvbmZpZ3VyYXRpb24iLCJjb25maWd1cmUiLCJnZXRTa3VscHRPcHRpb25zIiwib25FeGVjdXRpb25CZWdpbiIsIm9uRXhlY3V0aW9uRW5kIiwicmVwb3J0IiwicmVzZXRTdHVkZW50TW9kZWwiLCJyZXNldFJlcG9ydHMiLCJyZXNldEV4ZWN1dGlvbkJ1ZmZlciIsInVzZSIsInRoZW4iLCJzdWNjZXNzIiwiZmFpbHVyZSIsImV4ZWN1dGlvbkVuZF8iLCJldmFsdWF0aW9uSW5wdXQiLCJ1c2VySW5wdXQiLCJtaXNjZXZhbCIsImFzeW5jVG9Qcm9taXNlIiwiaW1wb3J0TWFpbldpdGhCb2R5IiwiRklMRU5BTUUiLCJwcm9ncmFtcyIsInRyaW0iLCJzYXZlQ29kZSIsInZlcmlmeUNvZGUiLCJ1cGRhdGVQYXJzZSIsInJ1bkluc3RydWN0b3JDb2RlIiwibW9kdWxlIiwiZXhlY3V0aW9uUmVwb3J0cyIsInByZXNlbnRGZWVkYmFjayIsIiRkIiwiRU1QVFlfTU9EVUxFIiwiQ29uZmlndXJhdGlvbiIsInF1ZXVlZElucHV0IiwiX19mdXR1cmVfXyIsInB5dGhvbjMiLCJyZWFkIiwiaW1wb3J0RmlsZSIsImZpbGVvcGVuIiwib3BlbkZpbGUiLCJmaWxld3JpdGUiLCJ3cml0ZUZpbGUiLCJwcmludCIsImluQnJvd3NlciIsImlucHV0ZnVuIiwiaW5wdXRmdW5UYWtlc1Byb21wdCIsImltYWdlUHJveHkiLCJnZXRJbWFnZVByb3h5IiwicmV0YWluR2xvYmFscyIsIndhcm4iLCJFcnJvciIsInBvcCIsImFmdGVyU2luZ2xlRXhlY3V0aW9uIiwicHJpbnRWYWx1ZSIsInBhcnNlVmFsdWUiLCJfIiwicmVqZWN0IiwieCIsIkZBSUxFRCIsInRvU3RyaW5nIiwiU3R1ZGVudENvbmZpZ3VyYXRpb24iLCJVVElMSVRZX01PRFVMRV9DT0RFIiwiJHNrX21vZF9pbnN0cnVjdG9yIiwiSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24iLCJleGVjTGltaXQiLCJjbGVhclRpbWVvdXQiLCJXUkFQX0lOU1RSVUNUT1JfQ09ERSIsInN0dWRlbnRDb2RlIiwiaW5zdHJ1Y3RvckNvZGUiLCJxdWljayIsImlzU2FmZSIsInNhZmVDb2RlIiwiaW5kZW50ZWRDb2RlIiwiaW5kZW50Iiwic3R1ZGVudENvZGVTYWZlIiwiZXZhbHVhdGlvbiIsImR1bW15T3V0U2FuZGJveCIsImxpbmVPZmZzZXQiLCJORVdfTElORV9SRUdFWCIsInJlbWFwVG9KcyIsIlNVQ0NFU1MiLCJTQ09SRSIsIm9sZFNjb3JlIiwiSElERSIsInNjcm9sbGluZyIsInNjcm9sbFRvQm90dG9tIiwidHAkbmFtZSIsInByZXNlbnRJbnRlcm5hbEVycm9yIiwidGlmYUFuYWx5c2lzIiwiT25TYW1wbGVDb25maWd1cmF0aW9uIiwiQm9vbGVhbiIsImJlZ2luRXZhbCIsInBhcnNlciIsInZlcmlmaWVyIiwiU2FtcGxlQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdEZ1bmN0aW9uIiwiZGlzYWJsZVRpbWVvdXQiLCJJbmZpbml0eSIsInJlcXVlc3RzR2V0Iiwib3BlblVSTCIsImlzRm9yYmlkZGVuIiwidmFyaWFibGVzIiwibG9jYWxzIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInBhcnNlR2xvYmFscyIsInByb3BlcnRpZXMiLCJtb2R1bGVzIiwiYXN0IiwiYXN0RnJvbVBhcnNlIiwiY3N0IiwiZmxhZ3MiLCJGRUVEQkFDS19IVE1MIiwiZmVlZGJhY2tNb2RlbCIsIm9mZnNldCIsInRvcCIsInRvcF9vZl9lbGVtZW50IiwiYm90dG9tX29mX2VsZW1lbnQiLCJvdXRlckhlaWdodCIsImJvdHRvbV9vZl9zY3JlZW4iLCJ0b3Bfb2Zfc2NyZWVuIiwiZXhlY3V0aW9uUmVzdWx0cyIsIk1FU1NBR0UiLCJDQVRFR09SWSIsIkxBQkVMIiwiREFUQSIsImhpZGVTY29yZSIsImZpbmRGaXJzdEVycm9yTGluZSIsInN0dWRlbnRSZXBvcnQiLCJsaW5lcyIsInVwZGF0ZUZlZWRiYWNrIiwibm90aWZ5RmVlZGJhY2tVcGRhdGUiLCJmYWRlT3V0IiwiZmlsZW5hbWVFeGVjdXRlZCIsImFyZ3MiLCJ0cmFjZWJhY2siLCJ0cmFjZWJhY2tGb3JtYXR0ZWQiLCJmcmFtZSIsImxpbmVubyIsImxhc3RfdHJhY2ViYWNrIiwic2xpY2UiLCJsaW5lX29mZnNldCIsImZlZWRiYWNrRGF0YSIsInBvc2l0aW9uIiwiZnJpZW5kbHlOYW1lIiwiaGlkZUlmRW1wdHkiLCJGSUxFU19IVE1MIiwiU1RBUlRJTkdfRklMRVMiLCJCQVNJQ19ORVdfRklMRVMiLCJERUxFVEFCTEVfU0lNUExFX0ZJTEVTIiwiQmxvY2tQeUZpbGUiLCJvd25lciIsImNvbmNhdGVuYXRlZEZpbGUiLCJtb2RlbEZpbGVMaXN0IiwiY3JlYXRlQ29uY2F0ZW5hdGVkRmlsZSIsImZpbGVzXyIsIm1vdW50RmlsZXMiLCJ3YXRjaE1vZGVsIiwid2F0Y2hlc18iLCJmaWxlc3lzdGVtIiwiZmlsZUFycmF5IiwiY2hhbmdlcyIsImNoYW5nZSIsIm1vZGVsRmlsZSIsIm5vdGlmeVdhdGNoZXMiLCJkZWxldGVGaWxlTG9jYWxseV8iLCJvYnNlcnZlSW5BcnJheV8iLCJhcnJheSIsImNvZGVCdW5kbGUiLCJleGlzdGluZ0ZpbGUiLCJvYnNlcnZlRmlsZV8iLCJmb3VuZCIsIkZPT1RFUl9IVE1MIiwiaGlnaGxpZ2h0VGltZW91dCIsImJsb2NrIiwiaGxqcyIsImhpZ2hsaWdodEJsb2NrIiwiVFJBQ0VfSFRNTCIsIlJFVFJZSU5HIiwiT0ZGTElORSIsInN0b3JhZ2UiLCJxdWV1ZSIsImdldERlZmF1bHQiLCJNQVhfUVVFVUVfU0laRSIsIlRJTUVSX0RFTEFZIiwiRkFJTF9ERUxBWSIsInRpbWVycyIsIm92ZXJsYXkiLCJibG9ja2luZ0F0dGVtcHRzIiwiY2FjaGVkRmlsZW5hbWVzIiwiY3JlYXRlU3Vic2NyaXB0aW9ucyIsImNoZWNrQ2FjaGVzIiwiY2hlY2tJUCIsInJlc3BvbnNlIiwib2xkSVAiLCJpcCIsInNldCIsIl9wb3N0TGF0ZXN0UmV0cnkiLCJwdXNoQW55UXVldWVkIiwiX3Bvc3RSZXRyeSIsImNyZWF0ZUZpbGVTdWJzY3JpcHRpb24iLCJjcmVhdGVTZXJ2ZXJEYXRhIiwibm93IiwiRGF0ZSIsIm1pY3Jvc2Vjb25kcyIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInNob3dPdmVybGF5IiwiYXR0ZW1wdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjc3MiLCJoaWRlT3ZlcmxheSIsIl9lbnF1ZXVlRGF0YSIsImNhY2hlIiwiX2RlcXVldWVEYXRhIiwic3BsaWNlIiwiZGVsYXkiLCJwb3N0UmVxdWVzdCIsInBvc3QiLCJ0ZXh0U3RhdHVzIiwicmVxdWVzdCIsInRpbWUiLCJjYWNoZWRUaW1lIiwiX3Bvc3RCbG9ja2luZyIsImF0dGVtcHRzIiwiZXJyb3JUaHJvd24iLCJsb2FkQXNzaWdubWVudERhdGFfIiwiaW50cm9kdWN0aW9uIiwicGFyc29ucyIsImluaXRpYWxfdmlldyIsImltcG9ydGFibGUiLCJzZWNyZXQiLCJkaXNhYmxlX2FsZ29yaXRobV9lcnJvcnMiLCJkaXNhYmxlX3RpbWVvdXQiLCJzYXZlX2Fzc2lnbm1lbnQiLCJnZXRIaXN0b3J5IiwiZ2V0X2hpc3RvcnkiLCJldmVudF90eXBlIiwiZmlsZV9wYXRoIiwiZXJyb3JDYWxsYmFjayIsImxvYWRfZmlsZSIsImhpZGRlbk92ZXJyaWRlIiwiZm9yY2VVcGRhdGUiLCJnZXRQbmdGcm9tQmxvY2tzIiwicG5nRGF0YSIsImltZyIsIm1vZCIsIm5vbmUiLCJidWlsdGluIiwibm9uZSQiLCJwcmlvciIsInRpbWVpdCIsImZ1bmMiLCJweUNoZWNrQXJncyIsImRpZmZlcmVuY2UiLCJkZWJ1ZyIsImdldF9vdXRwdXQiLCJpdGVtIiwidG9Ta3VscHQiLCJsaXN0IiwicmVzZXRfb3V0cHV0IiwicXVldWVfaW5wdXQiLCJweUNoZWNrVHlwZSIsImNoZWNrU3RyaW5nIiwiZ2V0X3Byb2dyYW0iLCJ0cmFjZV9saW5lcyIsImdldF9zdHVkZW50X2Vycm9yIiwidHVwbGUiLCJoYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3IiLCJiYWNrdXBUaW1lIiwibGltaXRfZXhlY3V0aW9uX3RpbWUiLCJleGVjU3RhcnQiLCJ1bmxpbWl0X2V4ZWN1dGlvbl90aW1lIiwic3VwcHJlc3Nfc2Nyb2xsaW5nIiwiZ2V0X3Bsb3RzIiwib3V0cHV0cyIsImdyYXBoIiwicGxvdCIsIm5ld1Bsb3QiLCJ2IiwieSIsIlN0dWRlbnREYXRhIiwiYnVpbGRDbGFzcyIsIiRnYmwiLCIkbG9jIiwiX19pbml0X18iLCJuZXdEaWN0IiwiZGljdCIsImFic3RyIiwic2F0dHIiLCJzdHIiLCJoYXNPd25Qcm9wZXJ0eSIsIm1wJGFzc19zdWJzY3JpcHQiLCJnZXRfbmFtZXNfYnlfdHlwZSIsImV4Y2x1ZGVfYnVpbHRpbnMiLCJjaGVja0Jvb2wiLCJwcm9wZXJ0eSIsImdldF92YWx1ZXNfYnlfdHlwZSIsImNhbGxzaW1PclN1c3BlbmQiLCJnZXRfc3R1ZGVudF9kYXRhIiwibmFtZXNwYWNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJpc19uZXciLCJzZXJ2ZXJfdGltZSIsInN0b3JlZF90aW1lIiwiSUdOT1JFRF9HTE9CQUxTIiwicGFyc2VkIiwiX19uYW1lX18iLCJmdWxsTGVuZ3RoIiwiZnVuY19jb2RlIiwiY29fdmFybmFtZXMiLCIkciIsInNxJGxlbmd0aCIsImJvb2wiLCJubWJlciIsInNrVHlwZSIsImludF8iLCJmbG9hdF8iLCJOdW1iZXIiLCJTdHJpbmciLCJhcnJheUNvbnRhaW5zIiwibmVlZGxlIiwiaGF5c3RhY2siLCJhcnJheVVuaXF1ZSIsImEiLCJjb25jYXQiLCJqIiwiZXhwYW5kQXJyYXkiLCJhZGRBcnJheSIsInJlbW92ZUFycmF5IiwiY29weUFycmF5IiwiY2xvbmVOb2RlIiwibm9kZSIsImNsb25lIiwibm9kZVR5cGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm5vZGVWYWx1ZSIsImNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicmFuZG9tSW50ZWdlciIsImZsb29yIiwicmFuZG9tIiwiQmxvY2tseSIsIldvcmtzcGFjZVN2ZyIsInNodWZmbGUiLCJtZXRyaWNzIiwiZ2V0TWV0cmljcyIsInZpZXdXaWR0aCIsInZpZXdIZWlnaHQiLCJibG9ja3MiLCJnZXRUb3BCbG9ja3MiLCJtYXhpbWFsX2luY3JlYXNlIiwiZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSIsIm1vdmVCeSIsIm1vdmVFbGVtZW50cyIsIm1vdmVDaGVjayIsImlzU2tCdWlsdGluIiwib2JqIiwibG5nIiwiaXNBc3ROb2RlIiwibWl4ZWRSZW1hcFRvUHkiLCJrIiwia3ZzIiwiYXJyIiwiY2FsbCIsInN1YnZhbCIsImFzc2skIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QixFQUFFLENBQUNnaUIsT0FBSCxDQUFXMEMsR0FBZixDQUFtQndFLEdBQUcsQ0FBQzE0QixJQUF2QixDQUFQO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7OztBQzdPRCxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRCIsImZpbGUiOiJibG9ja3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwia29cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJibG9ja3B5XCIsIFtcImpRdWVyeVwiLCBcImtvXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJsb2NrcHlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYmxvY2tweVwiXSA9IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcImtvXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibG9ja3B5LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9jc3MvYmxvY2tweS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VXcmFwcGVyfSBmcm9tIFwic3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnNFbnVtfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcImVkaXRvci9weXRob24uanNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcInNlcnZlci5qc1wiO1xyXG5pbXBvcnQge21ha2VJbnRlcmZhY2UsIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMsIFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc30gZnJvbSBcImludGVyZmFjZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnN9IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBCbG9ja1B5RmlsZVN5c3RlbSxcclxuICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgbWFrZU1vZGVsRmlsZSxcclxuICAgIG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgVU5ERUxFVEFCTEVfRklMRVMsXHJcbiAgICBVTlJFTkFNQUJMRV9GSUxFU1xyXG59IGZyb20gXCIuL2ZpbGVzXCI7XHJcbmltcG9ydCB7dXBsb2FkRmlsZSwgZG93bmxvYWRGaWxlfSBmcm9tIFwiLi9lZGl0b3IvYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7QmxvY2tQeUVuZ2luZX0gZnJvbSBcImVuZ2luZS5qc1wiO1xyXG5pbXBvcnQge1RyYWNlfSBmcm9tIFwiLi90cmFjZVwiO1xyXG5pbXBvcnQge0Jsb2NrUHlDb25zb2xlfSBmcm9tIFwiLi9jb25zb2xlXCI7XHJcbmltcG9ydCB7QmxvY2tQeUZlZWRiYWNrfSBmcm9tIFwiZmVlZGJhY2suanNcIjtcclxuaW1wb3J0IHtCbG9ja1B5U2VydmVyfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCbG9ja1B5RGlhbG9nfSBmcm9tIFwiLi9kaWFsb2dcIjtcclxuaW1wb3J0IHtsb2FkQXNzaWdubWVudFNldHRpbmdzLCBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWx9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7QmxvY2tQeUNvcmdpcywgX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTLCBfSU1QT1JURURfREFUQVNFVFN9IGZyb20gXCIuL2Nvcmdpc1wiO1xyXG5cclxuZXhwb3J0IHtfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMsIF9JTVBPUlRFRF9EQVRBU0VUU307XHJcblxyXG4vKipcclxuICogTWFqb3IgZW50cnkgcG9pbnQgZm9yIGNyZWF0aW5nIGEgQmxvY2tQeSBpbnN0YW5jZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvbiAtIFVzZXIgbGV2ZWwgc2V0dGluZ3MgKGUuZy4sIHdoYXQgZWRpdG9yIG1vZGUsIHdoZXRoZXIgdG8gbXV0ZSBzZW1hbnRpYyBlcnJvcnMsIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXNzaWdubWVudCAtIEFzc2lnbm1lbnQgbGV2ZWwgc2V0dGluZ3MgKGRhdGEgYWJvdXQgdGhlIGxvYWRlZCBhc3NpZ25tZW50LCB1c2VyLCBzdWJtaXNzaW9uLCBldGMuKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN1Ym1pc3Npb24gLSBJbmNsdWRlcyB0aGUgc291cmNlIGNvZGUgb2YgYW55IHByb2dyYW1zIHRvIGJlIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWwoY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFzc2lnbm1lbnQoY29uZmlndXJhdGlvbiwgYXNzaWdubWVudCwgc3VibWlzc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBCbG9ja1B5IG9iamVjdCBieSBpbml0aWFsaXppbmcgaXRzIGludGVyZmFjZSxcclxuICAgICAqIG1vZGVsLCBhbmQgY29tcG9uZW50cy5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGluaXRNYWluKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFV0aWxpdGllcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZGVsTWV0aG9kcygpO1xyXG4gICAgICAgIHRoaXMudHVybk9uSGFja3MoKTtcclxuICAgICAgICB0aGlzLmluaXRJbnRlcmZhY2UoKTtcclxuICAgICAgICB0aGlzLmFwcGx5TW9kZWwoKTtcclxuICAgICAgICB0aGlzLmluaXRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhIGRlZmF1bHQgdmFsdWUgb3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSB0aGUga2V5IHRvIGxvb2sgdXAgYSB2YWx1ZSBmb3JcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0VmFsdWUgLSBpZiB0aGUga2V5IGlzIG5vdCBmb3VuZCBhbnl3aGVyZSwgdXNlIHRoaXMgdmFsdWVcclxuICAgICAqL1xyXG4gICAgZ2V0U2V0dGluZyhrZXksIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW2tleV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2FsU2V0dGluZ3NfLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsU2V0dGluZ3NfLmdldChrZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIG1vZGVsIHRvIGl0cyBkZWZhdWx0cy5cclxuICAgICAqXHJcbiAgICAgKiBDYXRlZ29yaWVzOlxyXG4gICAgICogICAqIHVzZXI6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgdXNlciAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBhc3NpZ25tZW50OiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IGFzc2lnbm1lbnQgKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogc3VibWlzc2lvbjogdmFsdWVzIGZvciB0aGUgY3VycmVudCBzdWJtaXNzaW9uIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGRpc3BsYXk6IGZsYWdzIHJlbGF0ZWQgdG8gY3VycmVudCB2aXNpYmlsaXR5IChzdG9yZWQgdG8gbG9jYWxTZXR0aW5ncylcclxuICAgICAqICAgKiBzdGF0dXM6IG1lc3NhZ2VzIHJlbGF0ZWQgdG8gY3VycmVudCBzdGF0dXMgKG5vdCBzdG9yZWQpXHJcbiAgICAgKiAgICogZXhlY3V0aW9uOiB2YWx1ZXMgcmVsYXRlZCB0byBsYXN0IHJ1biAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBjb25maWd1cmF0aW9uOiBjb25zdGFudCB2YWx1ZXMgcmVsYXRlZCB0byBzZXR1cCAobm90IHN0b3JlZClcclxuICAgICAqL1xyXG4gICAgaW5pdE1vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICAvLyBDb25uZWN0IHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLmxvY2FsU2V0dGluZ3NfID0gbmV3IExvY2FsU3RvcmFnZVdyYXBwZXIoXCJsb2NhbFNldHRpbmdzXCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fID0gY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcclxuICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuaWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5uYW1lXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciB5b3UgYXJlIGFuIE93bmVyIChjYW4gbW9kaWZ5IHRoZSBhc3NpZ25tZW50KSwgR3JhZGVyIChjYW4gdmlld1xyXG4gICAgICAgICAgICAgICAgICogdGhlIGFzc2lnbm1lbnRzJyBpbmZvcm1hdGlvbikgb3IgU3R1ZGVudCAoY2FuIG5vdCBzZWUgYW55IGluc3RydWN0b3Igc3R1ZmYpLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHJvbGU6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwidXNlci5yb2xlXCIsIFwib3duZXJcIikpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50IGNvdXJzZSBmb3IgdGhpcyB1c2VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmNvdXJzZV9pZFwiXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgYXNzaWdubWVudCBncm91cCB0aGF0IHRoaXMgdXNlciBpcyBpbnNpZGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBJZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5ncm91cF9pZFwiXSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXNzaWdubWVudDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKFwiU2NyYXRjaCBDYW52YXNcIiksXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM6IGtvLm9ic2VydmFibGUoXCJXZWxjb21lIHRvIEJsb2NrUHkuIFRyeSBlZGl0aW5nIGFuZCBydW5uaW5nIHRoZSBjb2RlIGJlbG93LlwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGh1bWFuLWZyaWVuZGx5IFVSTCB0byB1c2UgYXMgYSBzaG9ydGN1dCBmb3IgdGhpcyBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdhcm5pbmcgbWVzc2FnZSBpZiBtYXplXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRpbmdDb2RlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnN0YXJ0aW5nX2NvZGVcIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvblJ1bjoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ydW5cIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9jaGFuZ2VcIl0pLFxyXG4gICAgICAgICAgICAgICAgb25FdmFsOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX2V2YWxcIl0pLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0YXJ0aW5nRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGZvcmtlZFZlcnNpb246IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBvd25lcklkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdGFnczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZVN1Ym1pc3Npb25zOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgcmV2aWV3ZWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQucmV2aWV3ZWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmhpZGRlblwiXSksXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczogbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pc3Npb246IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY29kZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wic3VibWlzc2lvbi5jb2RlXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICBjb3JyZWN0OiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRJZCBpbmZlcnJlZCBmcm9tIGFzc2lnbm1lbnQuaWRcclxuICAgICAgICAgICAgICAgIC8vIGNvdXJzZUlkIGluZmVycmVkIGZyb20gdXNlci5jb3Vyc2VJZFxyXG4gICAgICAgICAgICAgICAgLy8gdXNlcklkIGluZmVycmVkIGZyb20gdXNlci5pZFxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudFZlcnNpb24gaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LnZlcnNpb25cclxuICAgICAgICAgICAgICAgIHZlcnNpb246IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICBzdWJtaXNzaW9uU3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiU3RhcnRlZFwiKSxcclxuICAgICAgICAgICAgICAgIGdyYWRpbmdTdGF0dXM6IGtvLm9ic2VydmFibGUoXCJOb3RSZWFkeVwiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcGxheToge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50bHkgdmlzaWJsZSBGaWxlLCBpZiBhcHBsaWNhYmxlXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgcHJlc2VudGVkIHdpdGggdGhlIGluc3RydWN0b3Igc2V0dGluZ3MgYW5kIGZpbGVzXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJkaXNwbGF5Lmluc3RydWN0b3JcIiwgXCJmYWxzZVwiKT09PVwidHJ1ZVwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCB0aGUgcHJpbnRlciBmcm9tIHNob3dpbmcgdGhpbmdzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIG11dGVQcmludGVyOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogKFB5dGhvbiBWaWV3cykgVGhlIGN1cnJlbnQgZWRpdG9yIG1vZGUuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7RGlzcGxheU1vZGVzfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBweXRob25Nb2RlOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkucHl0aG9uLm1vZGVcIiwgRGlzcGxheU1vZGVzLlNQTElUKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIGF1dG8tc2F2aW5nIGNoYW5nZXMgaW4gUHl0aG9uIGVkaXRvclxyXG4gICAgICAgICAgICAgICAgICogSWYgYW4gaW50ZWdlciwgc3BlY2lmaWVzIHRoZSBkZWxheSB0aGF0IHNob3VsZCBiZSB1c2VkIChtaWNyb3NlY29uZHMpLlxyXG4gICAgICAgICAgICAgICAgICogVGhpcyBpcyBuZXZlciBvbiBpbiBub24tUHl0aG9uIGVkaXRvcnMuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbHxpbnR9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGF1dG9TYXZlOiBrby5vYnNlcnZhYmxlKHRydWUpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgY29uc29sZSBpcyBmdWxsIHdpZHRoIGFuZCBmZWVkYmFjayBpcyBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYmlnQ29uc29sZToga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBoZWlnaHQgdG8gdXNlIGZvciB0aGUgY29uc29sZS5cclxuICAgICAgICAgICAgICAgICAqICAgIElmIG51bGwsIHRoZW4gbGV0IHRoZSBoZWlnaHQgcmVtYWluIHVuY2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICogICAgSWYgYSBudW1iZXIsIHRoZW4gdGhlXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzQ29uc29sZUhlaWdodDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25zb2xlSGVpZ2h0OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGljaCBwYW5lbCB0byBzaG93IGluIHRoZSBzZWNvbmQgcm93J3Mgc2Vjb25kIGNvbHVtblxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1NlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kUm93U2Vjb25kUGFuZWw6IGtvLm9ic2VydmFibGUoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgdHJhY2luZyB0aGUgY29kZSByaWdodCBub3dcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJhY2VFeGVjdXRpb246IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgbGlzdCBvZiBwcm9taXNlcyB0byBzdGlsbCByZXNvbHZlIHdoaWxlIGxvYWRpbmcgZGF0YXNldHNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheTxQcm9taXNlPn1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0RhdGFzZXRzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgdGVtcG9yYXJ5IGNoYW5nZWQgdmFsdWUgb2YgdGhlIGluc3RydWN0aW9ucyBoYXZlIGJlZW4gY2hhbmdlZCBmcm9tIHdoYXQgaXMgaW4gdGhlIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZEluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQSBob2xkZXIgZm9yIHRoZSB0aW1lciB0byB0cmlnZ2VyIG9uLWNoYW5nZXNcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9uQ2hhbmdlOiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIG9uRXhlY3V0aW9uOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlY3V0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiBhYm91dCBpbi1wcm9ncmVzcyBleGVjdXRpb25zXHJcbiAgICAgICAgICAgICAgICByZXBvcnRzOiB7fSxcclxuICAgICAgICAgICAgICAgIC8vIGxpc3Qgb2YgT3V0cHV0IG9iamVjdHNcclxuICAgICAgICAgICAgICAgIG91dHB1dDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gYSBzdHVkZW50IHJ1blxyXG4gICAgICAgICAgICAgICAgc3R1ZGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0cjogdGhlIGZpbGVuYW1lIHRoYXQgd2FzIGxhc3QgZXhlY3V0ZWQgYW5kIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGVzZSByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExpbmU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdExpbmU6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXkgb2Ygc2ltcGxlIG9iamVjdHNcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhY2VEYXRhOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhY2VTdGVwOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFjdHVhbCBleGVjdXRpb24gcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczoga28ub2JzZXJ2YWJsZShudWxsKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gZmVlZGJhY2sgZnJvbSB0aGUgaW5zdHJ1Y3RvciBydW5cclxuICAgICAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RyIChtYXJrZG93bilcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiUmVhZHlcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc0Vycm9yOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzVW5jb3ZlcmVkOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXN1bHRzIG9mIHRoZSBsYXN0IGV4ZWN1dGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEZ1bmN0aW9ucyB0byBmaXJlIHdoZW4gY2VydGFpbiBldmVudHMgb2NjdXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogV2hlbiB0aGUgc3R1ZGVudCBnZXRzIGEgc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImNhbGxiYWNrLnN1Y2Nlc3NcIl0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2VydmVyIGlzIGNvbm5lY3RlZC5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJDb25uZWN0ZWQ6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwic2VydmVyLmNvbm5lY3RlZFwiLCB0cnVlKSksXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGJsb2NrbHlQYXRoOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImJsb2NrbHkucGF0aFwiXSxcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgYXR0YWNobWVudFBvaW50OiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImF0dGFjaG1lbnQucG9pbnRcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBKUXVlcnkgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyBNYXBzIGNvZGVzICgnbG9nX2V2ZW50JywgJ3NhdmVfY29kZScpIHRvIFVSTHNcclxuICAgICAgICAgICAgICAgIHVybHM6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1widXJsc1wiXSB8fCB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgaW5pdEludGVyZmFjZSgpIHtcclxuICAgICAgICBsZXQgY29uc3RhbnRzID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uO1xyXG4gICAgICAgIGxldCBndWkgPSBtYWtlSW50ZXJmYWNlKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0YW50cy5jb250YWluZXIgPSAkKGNvbnN0YW50cy5hdHRhY2htZW50UG9pbnQpLmh0bWwoJChndWkpKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnQoYXNzaWdubWVudF9pZCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIubG9hZEFzc2lnbm1lbnQoYXNzaWdubWVudF9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFRhZ3ModGFncykge1xyXG4gICAgICAgIC8vIEFscmVhZHkgYSBKU09OIGxpc3QgcmVwcmVzZW50aW5nIHRhZ3NcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2FtcGxlU3VibWlzc2lvbnMoc2FtcGxlcykge1xyXG4gICAgICAgIC8vIEFscmVhZHkgYSBKU09OIGxpc3QgcmVwcmVzZW50aW5nIHNhbXBsZXNcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3VibWlzc2lvbihzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgaWYgKCFzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVE9ETzogV2hhdCBpZiBzdWJtaXNzaW9ucycgYXNzaWdubWVudCB2ZXJzaW9uIGFuZCB0aGUgYXNzaWdubWVudHMnIHZlcnNpb24gY29uZmxpY3Q/XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmlkKHN1Ym1pc3Npb24uaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb2RlKHN1Ym1pc3Npb24uY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VibWlzc2lvbi5jb3JyZWN0KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoc3VibWlzc2lvbi5zY29yZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmVuZHBvaW50KHN1Ym1pc3Npb24uZW5kcG9pbnQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi51cmwoc3VibWlzc2lvbi51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi52ZXJzaW9uKHN1Ym1pc3Npb24udmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmdyYWRpbmdTdGF0dXMoc3VibWlzc2lvbi5ncmFkaW5nX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoc3VibWlzc2lvbi5zdWJtaXNzaW9uX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC51c2VyLmNvdXJzZUlkKHN1Ym1pc3Npb24uY291cnNlX2lkKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShzdWJtaXNzaW9uLmV4dHJhX2ZpbGVzLCB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnREYXRhXyhkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgbGV0IHdhc1NlcnZlckNvbm5lY3RlZCA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoKTtcclxuICAgICAgICAvLyBUT0RPOiBSZXNldCBVSSBmb3IgbmV3IGFzc2lnbm1lbnRcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKGZhbHNlKTtcclxuICAgICAgICBsZXQgYXNzaWdubWVudCA9IGRhdGEuYXNzaWdubWVudDtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaWQoYXNzaWdubWVudC5pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnZlcnNpb24oYXNzaWdubWVudC52ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuY291cnNlSWQoYXNzaWdubWVudC5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRJZChhc3NpZ25tZW50LmZvcmtlZF9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmZvcmtlZFZlcnNpb24oYXNzaWdubWVudC5mb3JrZWRfdmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbihhc3NpZ25tZW50LmhpZGRlbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKGFzc2lnbm1lbnQucmV2aWV3ZWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC50eXBlKGFzc2lnbm1lbnQudHlwZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnVybChhc3NpZ25tZW50LnVybCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucyhhc3NpZ25tZW50Lmluc3RydWN0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoYXNzaWdubWVudC5uYW1lKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoYXNzaWdubWVudC5vbl9jaGFuZ2UgfHwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbChhc3NpZ25tZW50Lm9uX2V2YWwgfHwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKGFzc2lnbm1lbnQub25fcnVuKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKGFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm93bmVySWQoYXNzaWdubWVudC5vd25lcl9pZCk7XHJcbiAgICAgICAgbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyh0aGlzLm1vZGVsLCBhc3NpZ25tZW50LnNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLmxvYWRUYWdzKGFzc2lnbm1lbnQudGFncyk7XHJcbiAgICAgICAgdGhpcy5sb2FkU2FtcGxlU3VibWlzc2lvbnMoYXNzaWdubWVudC5zYW1wbGVfc3VibWlzc2lvbnMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfaW5zdHJ1Y3Rvcl9maWxlcywgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX3N0YXJ0aW5nX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB0aGlzLmxvYWRTdWJtaXNzaW9uKGRhdGEuc3VibWlzc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCh3YXNTZXJ2ZXJDb25uZWN0ZWQpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TW9kZWxNZXRob2RzKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1vZGVsO1xyXG4gICAgICAgIG1vZGVsLnVpID0ge1xyXG4gICAgICAgICAgICByb2xlOiB7XHJcbiAgICAgICAgICAgICAgICBpc0dyYWRlcjoga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51c2VyLnJvbGUoKSA9PT0gXCJvd25lclwiIHx8IG1vZGVsLnVzZXIucm9sZSgpID09PSBcImdyYWRlclwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnN0cnVjdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGlzQ2hhbmdlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5pbnN0cnVjdGlvbnMuaXNDaGFuZ2VkKCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnV0aWxpdGllcy5tYXJrZG93bihtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnV0aWxpdGllcy5tYXJrZG93bihtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhudWxsKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWNvbmRSb3c6IHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZGJhY2tWaXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDS1xyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzVHJhY2VWaXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzQ29uc29sZVNob3dWaXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5zZWNvbmRSb3cuaXNGZWVkYmFja1Zpc2libGUoKSB8fCBtb2RlbC51aS5zZWNvbmRSb3cuaXNUcmFjZVZpc2libGUoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHN3aXRjaExhYmVsOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJWaWV3IFRyYWNlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgYWR2YW5jZVN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQYW5lbCA9IG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25zb2xlOiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtMTJcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTZcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGhpZGVFdmFsdWF0ZToga28ucHVyZUNvbXB1dGVkKCAoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRXZhbHVhdGUoKSB8fCAhbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscygpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKCkgPT09IFN0YXR1c1N0YXRlLkFDVElWRVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmZWVkYmFjazoge1xyXG4gICAgICAgICAgICAgICAgYmFkZ2U6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1ub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJydW50aW1lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1ydW50aW1lLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzeW50YXhcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXN5bnRheC1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZWRpdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1zeW50YXgtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImludGVybmFsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1pbnRlcm5hbC1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2VtYW50aWNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFuYWx5emVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1zZW1hbnRpYy1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmVlZGJhY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWZlZWRiYWNrLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtcHJvYmxlbS1jb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1uby1lcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1bnRpbWUgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiU3ludGF4IEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVkaXRvciBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludGVybmFsIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFsZ29yaXRobSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmVlZGJhY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkluY29ycmVjdCBBbnN3ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyBlcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cmFjZToge1xyXG4gICAgICAgICAgICAgICAgaGFzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBsaW5lOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSB8fCBzdGVwID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vIHRyYWNlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkJlZm9yZSBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IGxhc3RTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmlzaGVkIHJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHdoeSBhcmUgdGhlc2UgbnVtYmVycyB3b25reT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTGluZSBcIisodHJhY2VEYXRhW3N0ZXBdLmxpbmUtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXMgPSBNYXRoLm1heCgwLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHByZXZpb3VzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBNYXRoLm1pbihtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG5leHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RTdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhY2VEYXRhID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhY2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBsYXN0U3RlcDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNlRGF0YVtzdGVwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsZXM6IHtcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpIHx8ICFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGFzQ29udGVudHM6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFuc3dlci5weVwiOiByZXR1cm4gbW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhaW5zdHJ1Y3Rpb25zLm1kXCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2NoYW5nZS5weVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMoKS5zb21lKGZpbGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuZmlsZW5hbWUoKSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhdGFncy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnRhZ3MoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuc2FtcGxlU3VibWlzc2lvbnMoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWRkOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj90YWdzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9zZXR0aW5ncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIGZpeCBleHRyYWZpbGVzIGZvciBpbnN0cnVjdG9yIGFuZCBzdHVkZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fZXZhbC5weVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5vbkV2YWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLmRlbGV0ZUZpbGUobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0dWRlbnRGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhSW5zdHJ1Y3RvckZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3RhcnRpbmdGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlZGl0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZWRpdG9ycy5nZXRFZGl0b3IobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHZpZXc6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUVkaXRvcnMoKSA/IFwiTm9uZVwiIDpcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPyBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKSA6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uY29kZShtb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSgpLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLmZpbGVuYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiXnN0YXJ0aW5nX2NvZGUucHlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gXCJhbnN3ZXIucHlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBmaWxlbmFtZS5zdWJzdHIoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vZGVsRmlsZShmaWxlbmFtZSwgZmlsZS5jb250ZW50cygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNhblNhdmU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICFtb2RlbC5kaXNwbGF5LmF1dG9TYXZlKCkpLFxyXG4gICAgICAgICAgICAgICAgY2FuRGVsZXRlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAoIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKCkgfHwgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVU5ERUxFVEFCTEVfRklMRVMuaW5kZXhPZihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpID09PSAtMSksXHJcbiAgICAgICAgICAgICAgICBjYW5SZW5hbWU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICghbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKSB8fCBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBVTlJFTkFNQUJMRV9GSUxFUy5pbmRleE9mKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSkgPT09IC0xKSxcclxuICAgICAgICAgICAgICAgIHVwbG9hZDogdXBsb2FkRmlsZS5iaW5kKHNlbGYpLFxyXG4gICAgICAgICAgICAgICAgZG93bmxvYWQ6IGRvd25sb2FkRmlsZS5iaW5kKHNlbGYpLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0RGF0YXNldDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5jb3JnaXMub3BlbkRpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHB5dGhvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW46ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvZGVNaXJyb3IgPSBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLnRleHRFZGl0b3IuY29kZU1pcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvZGVNaXJyb3Iuc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCAhY29kZU1pcnJvci5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGVjdXRlOiB7XHJcbiAgICAgICAgICAgICAgICBydW46ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5ydW4oKSxcclxuICAgICAgICAgICAgICAgIGV2YWx1YXRlOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUuZXZhbHVhdGUoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJ2ZXI6IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogKGVuZHBvaW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzZXJ2ZXItc3RhdHVzLVwiICsgbW9kZWwuc3RhdHVzW2VuZHBvaW50XSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNFbmRwb2ludENvbm5lY3RlZDogKGVuZHBvaW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHMgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24udXJsc1tlbmRwb2ludF0gIT09IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEFzc2lnbm1lbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUFzc2lnbm1lbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEhpc3RvcnlNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEZpbGVNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUZpbGVNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZERhdGFzZXRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9nRXZlbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMudXBkYXRlU3VibWlzc2lvbk1lc3NhZ2UoKSB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyhzZWxmLCBtb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybk9uSGFja3MoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0RPXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHlzIHRoZSBLbm9ja291dEpTIGJpbmRpbmdzIHRvIHRoZSBtb2RlbCwgaW5zdGFudGlhdGluZyB0aGUgdmFsdWVzIGludG8gdGhlXHJcbiAgICAgKiBIVE1MLlxyXG4gICAgICovXHJcbiAgICBhcHBseU1vZGVsKCkge1xyXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFV0aWxpdGllcygpIHtcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51dGlsaXRpZXMgPSB7XHJcbiAgICAgICAgICAgIG1hcmtkb3duOiAodGV4dCkgPT4gdGV4dCA/IEVhc3lNREUucHJvdG90eXBlLm1hcmtkb3duKHRleHQpIDogXCI8cD48L3A+XCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzID0ge307XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIC8vIEVhY2ggb2YgdGhlc2UgY29tcG9uZW50cyB3aWxsIHRha2UgdGhlIEJsb2NrUHkgaW5zdGFuY2UsIGFuZCBwb3NzaWJseSBhXHJcbiAgICAgICAgLy8gcmVmZXJlbmNlIHRvIHRoZSByZWxldmFudCBIVE1MIGxvY2F0aW9uIHdoZXJlIGl0IHdpbGwgYmUgZW1iZWRkZWQuXHJcbiAgICAgICAgY29tcG9uZW50cy5kaWFsb2cgPSBuZXcgQmxvY2tQeURpYWxvZyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWRpYWxvZ1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5mZWVkYmFjayA9IG5ldyBCbG9ja1B5RmVlZGJhY2sobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFja1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy50cmFjZSA9IG5ldyBUcmFjZShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmNvbnNvbGUgPSBuZXcgQmxvY2tQeUNvbnNvbGUobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1jb25zb2xlXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLmVuZ2luZSA9IG5ldyBCbG9ja1B5RW5naW5lKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZmlsZVN5c3RlbSA9IG5ldyBCbG9ja1B5RmlsZVN5c3RlbShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmVkaXRvcnMgPSBuZXcgRWRpdG9ycyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWVkaXRvclwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5weXRob25FZGl0b3IgPSB0aGlzLmNvbXBvbmVudHMuZWRpdG9ycy5ieU5hbWUoXCJweXRob25cIik7XHJcbiAgICAgICAgY29tcG9uZW50cy5zZXJ2ZXIgPSBuZXcgQmxvY2tQeVNlcnZlcihtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmNvcmdpcyA9IG5ldyBCbG9ja1B5Q29yZ2lzKG1haW4pO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgVE9ET1xyXG4gICAgICAgIGNvbXBvbmVudHMudG9vbGJhciA9IG5ldyBCbG9ja1B5VG9vbGJhcihtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LXRvb2xiYXJcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuaGlzdG9yeSA9IG5ldyBCbG9ja1B5SGlzdG9yeShtYWluKTsqL1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtlbmNvZGVIVE1MfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuY29uc3QgU1RBUlRfRVZBTF9IVE1MID0gYFxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGZsb2F0LXJpZ2h0IGJsb2NrcHktYnRuLWV2YWxcIj5cbiAgICBFdmFsdWF0ZVxuPC9idXR0b24+YDtcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtNiBibG9ja3B5LXBhbmVsIGJsb2NrcHktY29uc29sZSdcbiAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkNvbnNvbGVcIlxuICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5jb25zb2xlLnNpemVcIj5cbiAgICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LXNob3ctZmVlZGJhY2snXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5zZWNvbmRSb3cuaXNDb25zb2xlU2hvd1Zpc2libGUsIGNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPHN0cm9uZz5Db25zb2xlOjwvc3Ryb25nPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1wcmludGVyIGJsb2NrcHktcHJpbnRlci1kZWZhdWx0Jz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICA8L2Rpdj5gO1xuXG5jb25zdCBORVdfQ09OU09MRV9MSU5FX0hUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtXG4gKi9cbmV4cG9ydCBsZXQgQ29uc29sZUxpbmVUeXBlID0ge1xuICAgIFRFWFQ6IFwidGV4dFwiLFxuICAgIEhUTUw6IFwiaHRtbFwiLFxuICAgIFBMT1Q6IFwicGxvdFwiLFxuICAgIElNQUdFOiBcImltYWdlXCIsXG4gICAgVFVSVExFOiBcInR1cnRsZVwiLFxuICAgIEVWQUw6IFwiZXZhbFwiLFxuICAgIFNUQVJUX0VWQUw6IFwic3RhcnRfZXZhbFwiLFxuICAgIFZBTFVFOiBcInZhbHVlXCIsXG4gICAgSU5QVVQ6IFwiaW5wdXRcIixcbiAgICBURVNUX0NBU0U6IFwidGVzdF9jYXNlXCJcbn07XG5cbmNsYXNzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0eXBlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICAgICAgZmlsZW5hbWU6IFNrLmN1cnJGaWxlbmFtZSxcbiAgICAgICAgICAgIHN0ZXA6IG1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAsXG4gICAgICAgICAgICBsaW5lOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHRtbCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6ICBcImJsb2NrcHktcHJpbnRlci1vdXRwdXRcIixcbiAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICBcImRhdGEtcGxhY2VtZW50XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgXCJkYXRhLXN0ZXBcIjogdGhpcy5vcmlnaW4uc3RlcCxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdGVwIFwiICsgdGhpcy5vcmlnaW4uc3RlcCArIFwiLCBMaW5lIFwiICsgdGhpcy5vcmlnaW4ubGluZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIW1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB0b1NrdWxwdCgpIHtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkodGhpcy5jb250ZW50KTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVHVydGxlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIC8vIFRPRE86IENhcHR1cmUgdHVydGxlIGNvbW1hbmRzIGZvciB0cmFjaW5nIHB1cnBvc2VzXG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVFVSVExFKTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLXR1cnRsZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLnByZXBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbFswXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVQbG90IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlBMT1QsIGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoXCJibG9ja3B5LWNvbnNvbGUtcGxvdC1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVUZXh0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgYWRkQ29udGVudChjb250ZW50KSB7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudCArIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIGxldCBsaW5lRGF0YSA9ICQoXCI8c2FtcD48L3NhbXA+XCIsIHsgXCJodG1sXCI6IGVuY29kZWRUZXh0IH0pO1xuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChsaW5lRGF0YSk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVmFsdWUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtYWluLCBjb250ZW50KSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5WQUxVRSwgY29udGVudCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIGxldCBsaW5lRGF0YSA9ICQoXCI8Y29kZT48L2NvZGU+XCIsIHsgXCJodG1sXCI6IGVuY29kZWRUZXh0IH0pO1xuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChsaW5lRGF0YSk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lSW5wdXQgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgcHJvbXB0TWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuSU5QVVQsIHByb21wdE1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gSW5wdXQgYm94IGZvciByZWNlaXZpbmcgaW5wdXQoKSBmcm9tIHRoZSB1c2VyLlxuICAgICAqXG4gICAgICovXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIC8vIFBlcmZvcm0gYW55IG5lY2Vzc2FyeSBjbGVhbmluZ1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBJbnB1dCBmb3JtXG4gICAgICAgICAgICBsZXQgaW5wdXRGb3JtID0gJChcIjxpbnB1dCB0eXBlPSd0ZXh0JyAvPlwiKTtcbiAgICAgICAgICAgIC8vIEVudGVyIGJ1dHRvblxuICAgICAgICAgICAgbGV0IGlucHV0QnRuID0gJChcIjxidXR0b24+PC9idXR0b24+XCIsIHtcImh0bWxcIjogXCJFbnRlclwifSk7XG4gICAgICAgICAgICAvLyBHcm91cCBmb3JtIGFuZCBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEdyb3VwID0gJChcIjxkaXY+PC9kaXY+XCIsIHtcImNsYXNzXCI6IFwiYmxvY2tweS1jb25zb2xlLWlucHV0XCJ9KTtcbiAgICAgICAgICAgIGlucHV0R3JvdXAuYXBwZW5kKGlucHV0Rm9ybSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEJ0bik7XG4gICAgICAgICAgICAvLyBQcm9tcHQgYm94LCBuZXcgbGluZSwgaW5wdXQgZ3JvdXBcbiAgICAgICAgICAgIGxldCBpbnB1dEJveCA9ICQoXCI8ZGl2PjwvZGl2PlwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnQgIT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0TXNnID0gJChcIjxzYW1wPjwvc2FtcD5cIiwgIHtcImh0bWxcIjogZW5jb2RlZFRleHR9KTtcbiAgICAgICAgICAgICAgICBpbnB1dEJveC5hcHBlbmQoaW5wdXRNc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKCQoXCI8YnI+XCIpKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoaW5wdXRHcm91cCk7XG4gICAgICAgICAgICAvLyBSZW5kZXJcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoaW5wdXRCb3gpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvLyBNYWtlIGl0IGludGVyYWN0aXZlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlSW50ZXJhY3RpdmUoaW5wdXRGb3JtLCBpbnB1dEJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfTtcblxuICAgIG1ha2VJbnRlcmFjdGl2ZShpbnB1dCwgYnV0dG9uKSB7XG4gICAgICAgIGxldCByZXNvbHZlT25DbGljaztcbiAgICAgICAgbGV0IHN1Ym1pdHRlZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZU9uQ2xpY2sgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlT25DbGljayhpbnB1dC52YWwoKSk7XG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfTtcbiAgICAgICAgYnV0dG9uLmNsaWNrKHN1Ym1pdEZvcm0pO1xuICAgICAgICBpbnB1dC5rZXl1cCgoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICByZXR1cm4gc3VibWl0dGVkUHJvbWlzZTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lRXZhbHVhdGUgZXh0ZW5kcyBDb25zb2xlTGluZUlucHV0IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIFwiRXZhbHVhdGU6XCIpO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlNUQVJUX0VWQUwpO1xuICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKCQoU1RBUlRfRVZBTF9IVE1MKSk7XG4gICAgICAgIHRoaXMuaHRtbC5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZXhlY3V0ZS5ldmFsdWF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJsb2NrUHlDb25zb2xlIHtcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCBmb3IgbWFuYWdpbmcgdGhlIGNvbnNvbGUsIHdpdGggZmVhdHVyZXMgZm9yIHRoaW5ncyBsaWtlIHByaW50aW5nLCBwbG90dGluZywgZXZhbGluZywgaW5wdXRpbmcuXG4gICAgICogVGhlIFwicHJpbnRlclwiIGlzIHRoZSByZWdpb24gd2hlcmUgd2UgcHV0IHRoaW5ncywgYXMgb3Bwb3NlZCB0byB0aGUgY29uc29sZSBhcyBhIHdob2xlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5wcmludGVyVGFnID0gdGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyXCIpO1xuXG4gICAgICAgIHRoaXMuTUlOSU1VTV9XSURUSCA9IDIwMDtcbiAgICAgICAgdGhpcy5NSU5JTVVNX0hFSUdIVCA9IDIwMDtcbiAgICAgICAgdGhpcy5ERUZBVUxUX0hFSUdIVCA9IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKTsgLy8gTGV0IENTUyBkZWZpbmUgdGhpc1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQodGhpcy5ERUZBVUxUX0hFSUdIVCk7XG5cbiAgICAgICAgdGhpcy5vdXRwdXQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHt9O1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gVE9ETzogSWYgdGhlIHVzZXIgbW9kaWZpZXMgYSBmaWxlLCB0aGVuIG1ha2UgdGhlIGNvbnNvbGUgbG9vayBmYWRlZCBhIGxpdHRsZVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgc3RhdHVzIG9mIHRoZSBwcmludGVyLCBpbmNsdWRpbmcgcmVtb3ZpbmcgYW55IHRleHQgaW4gaXQgYW5kXG4gICAgICogZml4aW5nIGl0cyBzaXplLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLm91dHB1dC5yZW1vdmVBbGwoKTtcblxuICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcuZW1wdHkoKTtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgaGFzbid0IGNoYW5nZWQgdGhlIGNvbnNvbGUgc2l6ZSwgd2UnbGwgcmVzZXQgaXRcbiAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCgpID09PSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJpbnRlclRhZy5oZWlnaHQodGhpcy5ERUZBVUxUX0hFSUdIVCk7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQodGhpcy5wcmludGVyVGFnLmhlaWdodCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHVydGxlTGluZSA9IG51bGw7XG4gICAgICAgIFNrLlR1cnRsZUdyYXBoaWNzID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmdldFR1cnRsZUxpbmUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBhc3NldHM6IHRoaXMubG9hZEFzc2V0LmJpbmQodGhpcylcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgbG9hZEFzc2V0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0VHVydGxlTGluZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudHVydGxlTGluZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50dXJ0bGVMaW5lID0gbmV3IENvbnNvbGVMaW5lVHVydGxlKHRoaXMubWFpbik7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZUxpbmUucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXNuJ3QgY2hhbmdlZCB0aGUgY29uc29sZSBzaXplLCB3ZSdsbCBkbyBzb1xuICAgICAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCgpID09PSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByaW50ZXJEaW1lbnNpb24gPSB0aGlzLnByaW50ZXJUYWcud2lkdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KGN1cnJlbnRQcmludGVyRGltZW5zaW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQodGhpcy5wcmludGVyVGFnLmhlaWdodCgpKTtcbiAgICAgICAgICAgICAgICBTay5UdXJ0bGVHcmFwaGljcy5oZWlnaHQgPSBjdXJyZW50UHJpbnRlckRpbWVuc2lvbi00MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50dXJ0bGVMaW5lLmh0bWxbMF07XG4gICAgfVxuXG4gICAgLy8gVE9ETzogdHVydGxlcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGN1cnJlbnQgd2lkdGhcbiAgICBuZXdUdXJ0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX1dJRFRILCB0aGlzLnByaW50ZXJUYWcud2lkdGgoKS00MCk7XG4gICAgfVxuXG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX0hFSUdIVCwgdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKzQwKTtcbiAgICB9XG5cbiAgICBpc011dGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGVhY2ggcHJpbnRlZCBlbGVtZW50IGluIHRoZSBwcmludGVyIGFuZCBtYWtlcyBpdCBoaWRkZW5cbiAgICAgKiBvciB2aXNpYmxlLCBkZXBlbmRpbmcgb24gd2hhdCBzdGVwIHdlJ3JlIG9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAgLSBUaGUgY3VycmVudCBzdGVwIG9mIHRoZSBleGVjdXRlZCBwcm9ncmFtIHRoYXQgd2UncmUgb247IGVhY2ggZWxlbWVudCBpbiB0aGUgcHJpbnRlciBtdXN0IGJlIG1hcmtlZCB3aXRoIGEgXCJkYXRhLXN0ZXBcIiBwcm9wZXJ0eSB0byByZXNvbHZlIHRoaXMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2UgLSBEZXByZWNhdGVkLCBub3Qgc3VyZSB3aGF0IHRoaXMgZXZlbiBkb2VzLlxuICAgICAqL1xuICAgIHN0ZXBQcmludGVyKHN0ZXAsIHBhZ2UpIHtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyLW91dHB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtc3RlcFwiKSA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJpbnQgYSBsaW5lIHRvIHRoZSBvbi1zY3JlZW4gcHJpbnRlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGluZVRleHQgLSBBIGxpbmUgb2YgdGV4dCB0byBiZSBwcmludGVkIG91dC5cbiAgICAgKi9cbiAgICBwcmludChsaW5lVGV4dCkge1xuICAgICAgICAvLyBFbXB0eSBzdHJpbmdzIG1lYW5zIGRvIG5vdGhpbmcuXG4gICAgICAgIC8vIHByaW50KFwiXCIsIGVuZD1cIlwiKVxuICAgICAgICBpZiAoIWxpbmVUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChsaW5lVGV4dC5jaGFyQXQobGluZVRleHQubGVuZ3RoLTEpID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBmbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwbGl0TGluZXMgPSBsaW5lVGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgaWYgKHRoaXMubGluZUJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5hZGRDb250ZW50KHNwbGl0TGluZXNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MTsgaSA8IHNwbGl0TGluZXMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaCh0aGlzLmxpbmVCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmx1c2gpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBwbG90KHBsb3RzKSB7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVBsb3QodGhpcy5tYWluLCBwbG90cyk7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxvdEJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBwcmludGVkVmFsdWUgPSBuZXcgQ29uc29sZUxpbmVWYWx1ZSh0aGlzLm1haW4sIHZhbHVlKTtcbiAgICAgICAgcHJpbnRlZFZhbHVlLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gcHJpbnRlZFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJlZ2lzdGVycyBhIFByb21pc2UgZnJvbSB0aGUgSW5wdXQgYm94XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb21wdE1lc3NhZ2UgLSBNZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVJbnB1dCh0aGlzLm1haW4sIHByb21wdE1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9O1xuXG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUV2YWx1YXRlKHRoaXMubWFpbik7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH1cblxuICAgIGJlZ2luRXZhbCgpIHtcbiAgICAgICAgbGV0IHN0YXJ0RXZhbHVhdGlvbiA9IG5ldyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUodGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0RXZhbHVhdGlvbi5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmNvbmRpdGlvbmFsbHkgc2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIHdpbmRvdy5cbiAgICAgKlxuICAgICAqL1xuICAgIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgICB0aGlzLnRhZy5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcucHJvcChcInNjcm9sbEhlaWdodFwiKSAtIHRoaXMudGFnLnByb3AoXCJjbGllbnRIZWlnaHRcIilcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG59IiwiaW1wb3J0IHtzbHVnfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuLy8gVE9ETzogZWRpdG9yLmJtLmJsb2NrRWRpdG9yLmV4dHJhVG9vbHNbXVxuXG5leHBvcnQgbGV0IF9JTVBPUlRFRF9EQVRBU0VUUyA9IHt9O1xuZXhwb3J0IGxldCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMgPSB7fTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgdmVyeSBzaW1wbGlzdGljIGhlbHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgdHJhbnNmb3JtXG4gKiBhIGdpdmVuIGJ1dHRvbiBpbnRvIGEgXCJMb2FkZWRcIiBzdGF0ZSAoZGlzYWJsZWQsIHByZXNzZWQgc3RhdGUsIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ0biAtIEFuIEhUTUwgZWxlbWVudCB0byBjaGFuZ2UgdGhlIHRleHQgb2YuXG4gKi9cbmxldCBzZXRCdXR0b25Mb2FkZWQgPSBmdW5jdGlvbiAoYnRuKSB7XG4gICAgYnRuLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1wcmltYXJ5XCIpXG4gICAgICAgIC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcbiAgICAgICAgLnRleHQoXCJMb2FkZWRcIilcbiAgICAgICAgLmF0dHIoXCJhcmlhLXByZXNzZWRcIiwgXCJ0cnVlXCIpO1xufTtcblxuXG4vKipcbiAqIE1vZHVsZSB0aGF0IGNvbm5lY3RzIHRvIHRoZSBDT1JHSVMgZGF0YXNldHMgYW5kIG1hbmFnZXMgaW50ZXJhY3Rpb25zXG4gKiB3aXRoIHRoZW0uIFRoaXMgaW5jbHVkZXMgbG9hZGluZyBpbiBkYXRhc2V0cyBhdCBsYXVuY2ggYW5kIG9uLXRoZS1mbHkuXG4gKiBOb3RlIHRoYXQgdGhpcyBoYXMgbm8gcHJlc2VuY2Ugb24gc2NyZWVuLCBzbyBpdCBkb2VzIG5vdCBoYXZlIGEgdGFnLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlDb3JnaXN9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlDb3JnaXMobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICB0aGlzLmxvYWRlZERhdGFzZXRzID0gW107XG4gICAgdGhpcy5sb2FkRGF0YXNldHMoKTtcbn1cblxuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUubG9hZERhdGFzZXRzID0gZnVuY3Rpb24gKHNpbGVudGx5KSB7XG4gICAgLy8gTG9hZCBpbiBlYWNoIHRoZSBkYXRhc2V0c1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbCxcbiAgICAgICAgZWRpdG9yID0gdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLFxuICAgICAgICBzZXJ2ZXIgPSB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXI7XG4gICAgbGV0IGltcG9ydHMgPSBbXTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzKCkuc3BsaXQoXCIsXCIpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgJiYgIShuYW1lIGluIEJsb2NrTWlycm9yQmxvY2tFZGl0b3IuRVhUUkFfVE9PTFMpKSB7XG4gICAgICAgICAgICBpbXBvcnRzLnB1c2guYXBwbHkoaW1wb3J0cywgdGhpcy5pbXBvcnREYXRhc2V0KHNsdWcobmFtZSksIG5hbWUsIHNpbGVudGx5KSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFdoZW4gZGF0YXNldHMgYXJlIGxvYWRlZCwgdXBkYXRlIHRoZSB0b29sYm94LlxuICAgICQud2hlbi5hcHBseSgkLCBpbXBvcnRzKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUUklHR0VSRURcIik7XG4gICAgICAgIGVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICBlZGl0b3IuYm0uYmxvY2tFZGl0b3IucmVtYWtlVG9vbGJveCgpO1xuICAgIH0pLmZhaWwoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9KS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXJ2ZXIuZmluYWxpemVTdWJzY3JpcHRpb25zKCk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIExvYWRzIHRoZSBkZWZpbml0aW9ucyBmb3IgYSBkYXRhc2V0IGludG8gdGhlIGVudmlyb25tZW50LCBpbmNsdWRpbmdcbiAqIHRoZSBkYXRhc2V0IChhcyBhIEpTIGZpbGUpLCB0aGUgc2t1bHB0IGJpbmRpbmdzLCBhbmQgdGhlIGJsb2NrbHlcbiAqIGJpbmRpbmdzLiBUaGlzIHJlcXVpcmVzIGFjY2VzcyB0byBhIENPUkdJUyBzZXJ2ZXIsIGFuZCBvY2N1cnNcbiAqIGFzeW5jaHJvbm91c2x5LiBUaGUgcmVxdWVzdHMgYXJlIGZpcmVkIGFuZCB0aGVpciBkZWZlcnJlZCBvYmplY3RzXG4gKiBhcmUgcmV0dXJuZWQgLSBjYWxsZXJzIGNhbiB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBwZXJmb3JtIGFuIGFjdGlvblxuICogb24gY29tcGxldGlvbiBvZiB0aGUgaW1wb3J0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnIC0gVGhlIFVSTCBzYWZlIHZlcnNpb24gb2YgdGhlIGRhdGFzZXQgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBUaGUgdXNlci1mcmllbmRseSB2ZXJzaW9uIG9mIHRoZSBkYXRhc2V0IG5hbWUuXG4gKiBAcmV0dXJucyB7QXJyYXkuPERlZmVycmVkPn0gLSBSZXR1cm5zIHRoZSBhc3luYyByZXF1ZXN0cyBhcyBkZWZlcnJlZCBvYmplY3RzLlxuICovXG5CbG9ja1B5Q29yZ2lzLnByb3RvdHlwZS5pbXBvcnREYXRhc2V0ID0gZnVuY3Rpb24gKHNsdWcsIG5hbWUpIHtcbiAgICBsZXQgdXJsX3JldHJpZXZhbHMgPSBbXTtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwiaW1wb3J0RGF0YXNldHNcIikpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzLmltcG9ydERhdGFzZXRzICsgXCJibG9ja3B5L1wiICsgc2x1ZyArIFwiL1wiICsgc2x1ZztcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubG9hZGluZ0RhdGFzZXRzLnB1c2gobmFtZSk7XG4gICAgICAgIC8vIEFjdHVhbGx5IGdldCBkYXRhXG4gICAgICAgIGxldCBnZXREYXRhc2V0ID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2RhdGFzZXQuanNcIik7XG4gICAgICAgIC8vIExvYWQgZ2V0Q29tcGxldGUgc2lsZW50bHkgaW4gdGhlIGJhY2tncm91bmQgYmVjYXVzZSBpdHMgYmlnIDooXG4gICAgICAgIGxldCBnZXRDb21wbGV0ZSA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9jb21wbGV0ZS5qc1wiKTtcbiAgICAgICAgbGV0IGdldFNrdWxwdCA9ICQuZ2V0KHJvb3QgKyBcIl9za3VscHQuanNcIiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW1wic3JjL2xpYi9cIiArIHNsdWcgKyBcIi9fX2luaXRfXy5qc1wiXSA9IGRhdGE7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZ2V0QmxvY2tseSA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9ibG9ja2x5LmpzXCIpO1xuICAgICAgICAvLyBPbiBjb21wbGV0aW9uLCB1cGRhdGUgbWVudXMuXG4gICAgICAgICQud2hlbihnZXREYXRhc2V0LCBnZXRTa3VscHQsIGdldEJsb2NrbHkpLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWREYXRhc2V0cy5wdXNoKHNsdWcpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uYmxvY2tFZGl0b3IucmVtYWtlVG9vbGJveCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubG9hZGluZ0RhdGFzZXRzLnJlbW92ZShuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVybF9yZXRyaWV2YWxzLnB1c2goZ2V0RGF0YXNldCwgZ2V0U2t1bHB0LCBnZXRCbG9ja2x5KTtcbiAgICB9XG4gICAgcmV0dXJuIHVybF9yZXRyaWV2YWxzO1xufTtcblxuLyoqXG4gKiBPcGVucyBhIGRpYWxvZyBib3ggdG8gcHJlc2VudCB0aGUgdXNlciB3aXRoIHRoZSBkYXRhc2V0cyBhdmFpbGFibGVcbiAqIHRocm91Z2ggdGhlIENPUkdJUyBzZXJ2ZXIuIFRoaXMgcmVxdWlyZXMgYSBjYWxsLCBzbyB0aGlzIG1ldGhvZFxuICogY29tcGxldGVzIGFzeW5jaHJvbm91c2x5LiBUaGUgZGlhbG9nIGlzIGNvbXBvc2VkIG9mIGEgdGFibGUgd2l0aFxuICogYnV0dG9ucyB0byBsb2FkIHRoZSBkYXRhc2V0cyAoTW9yZSB0aGFuIG9uZSBkYXRhc2V0IGNhbiBiZSBsb2FkZWRcbiAqIGZyb20gd2l0aGluIHRoZSBkaWFsb2cgYXQgYSB0aW1lKS5cbiAqL1xuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUub3BlbkRpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwiaW1wb3J0RGF0YXNldHNcIikpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzLmltcG9ydERhdGFzZXRzO1xuICAgICAgICAkLmdldEpTT04ocm9vdCArIFwiaW5kZXguanNvblwiLCAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIE1ha2UgdXAgdGhlIEJvZHlcbiAgICAgICAgICAgIGxldCBkYXRhc2V0cyA9IGRhdGEuYmxvY2tweS5kYXRhc2V0cztcbiAgICAgICAgICAgIGxldCBkb2N1bWVudGF0aW9uID0gZGF0YS5ibG9ja3B5LmRvY3VtZW50YXRpb247XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSAkKGA8cD5Eb2N1bWVudGF0aW9uIGlzIGF2YWlsYWJsZSBhdCA8YSBocmVmPScke2RvY3VtZW50YXRpb259JyB0YXJnZXQ9X2JsYW5rPnVybDwvYT48L3A+YCk7XG4gICAgICAgICAgICBsZXQgYm9keSA9ICQoXCI8dGFibGU+PC90YWJsZT5cIiwge1wiY2xhc3NcIjogXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zbSB0YWJsZS1zdHJpcGVkXCJ9KTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGFzZXRzKS5zb3J0KCkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlTmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS10b2dnbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPkxvYWQ8L2J1dHRvbj4nKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkZWREYXRhc2V0cy5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsaWNrKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydERhdGFzZXQobmFtZS50b0xvd2VyQ2FzZSgpLCBcIkRhdGEgLSBcIiArIHRpdGxlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25Mb2FkZWQoYnRuKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoXCI8dHI+PC90cj5cIilcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgdGl0bGVOYW1lICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbdGl0bGVOYW1lXVtcInNob3J0XCJdICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPjwvdGQ+XCIpLmFwcGVuZChidG4pKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oYm9keSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kVG8oc3RhcnQpO1xuICAgICAgICAgICAgLy8gU2hvdyB0aGUgYWN0dWFsIGRpYWxvZ1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLnNob3coXCJJbXBvcnQgRGF0YXNldHNcIiwgc3RhcnQsIG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY1OTY0MjI4NDkzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL2FjYmFydC9Qcm9qZWN0cy9ibG9ja3B5LWVkdS9ibG9ja3B5L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIi4uL1wiLFwiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NjU5NjM1MjQ3ODlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvYWNiYXJ0L1Byb2plY3RzL2Jsb2NrcHktZWR1L2Jsb2NrcHkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiLi4vXCIsXCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gVE9ETzogRHlhbm1pY2FsbHkgcG9wdWxhdGUgYXJpYS1sYWJlbGxlZGJ5IGluIHRoaXMgYW5kIG90aGVyIHBsYWNlc1xuXG5leHBvcnQgbGV0IERJQUxPR19IVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktZGlhbG9nIG1vZGFsIGhpZGRlbidcbiAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgYXJpYS1sYWJlbD0nRGlhbG9nJ1xuICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgIGFyaWEtbW9kYWw9XCJ0cnVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWRpYWxvZycgcm9sPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnIHJvbGU9J3JlZ2lvbicgYXJpYS1sYWJlbD0nRGlhbG9nIGNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPkR5bmFtaWMgQ29udGVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknIHN0eWxlPSd3aWR0aDoxMDAlOyBoZWlnaHQ6NDAwcHg7IHdoaXRlLXNwYWNlOnByZS13cmFwJz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1mb290ZXInPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4td2hpdGUnIGRhdGEtZGlzbWlzcz0nbW9kYWwnPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuLyoqXG4gKiBBIHV0aWxpdHkgb2JqZWN0IGZvciBxdWlja2x5IGFuZCBjb252ZW5pZW50bHkgZ2VuZXJhdGluZyBkaWFsb2cgYm94ZXMuXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGlzIGRvZXNuJ3QgZHluYW1pY2FsbHkgY3JlYXRlIG5ldyBib3hlczsgaXQgcmV1c2VzIHRoZSBzYW1lIG9uZVxuICogb3ZlciBhbmQgb3ZlciBhZ2Fpbi4gSXQgdHVybnMgb3V0IGR5bmFtaWNhbGx5IGdlbmVyYXRpbmcgbmV3IGRpYWxvZyBib3hlc1xuICogaXMgYSBwYWluISBTbyB3ZSBjYW4ndCBzdGFjayB0aGVtLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlEaWFsb2d9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeURpYWxvZyhtYWluLCB0YWcpIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgdGhpcy50aXRsZVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLXRpdGxlXCIpO1xuICAgIHRoaXMuYm9keVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLWJvZHlcIik7XG59XG5cbi8qKlxuICogQSBzaW1wbGUgZXh0ZXJuYWxseSBhdmFpbGFibGUgZnVuY3Rpb24gZm9yIHBvcHBpbmcgdXAgYSBkaWFsb2dcbiAqIG1lc3NhZ2UuIFRoaXMgbWVudSB3aWxsIGJlIGRyYWdnYWJsZSBieSBpdHMgdGl0bGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBib2R5IC0gVGhlIGJvZHkgb2YgdGhlIG1lc3NhZ2UgZGlhbG9nLiBDYW4gaGF2ZSBIVE1MLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25jbG9zZSAtIEEgZnVuY3Rpb24gdG8gYmUgcnVuIHdoZW4gdGhlIHVzZXIgY2xvc2VzIHRoZSBkaWFsb2cuXG4gKi9cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAodGl0bGUsIGJvZHksIG9uY2xvc2UpIHtcbiAgICB0aGlzLnRpdGxlVGFnLmh0bWwodGl0bGUpO1xuICAgIHRoaXMuYm9keVRhZy5odG1sKGJvZHkpO1xuICAgIHRoaXMudGFnLm1vZGFsKFwic2hvd1wiKTtcbiAgICB0aGlzLnRhZy5kcmFnZ2FibGUoe1xuICAgICAgICBcImhhbmRsZVwiOiBcIi5tb2RhbC10aXRsZVwiXG4gICAgfSk7XG5cbiAgICB0aGlzLnRhZy5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAob25jbG9zZSAhPT0gdW5kZWZpbmVkICYmIG9uY2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25maXJtKFwiRXJyb3IgTG9hZGluZyBBc3NpZ25tZW50XCIsIGBCbG9ja1B5IGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIGFzc2lnbm1lbnQuPGJyPlxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLmAsKTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLlNDUkVFTlNIT1RfQkxPQ0tTID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE9cbn07IiwiaW1wb3J0IHtFZGl0b3JzfSBmcm9tIFwiLi4vZWRpdG9yc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGUobW9kZWwsIGV2ZW50KSB7XHJcbiAgICBsZXQgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICBsZXQgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IChlID0+XHJcbiAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkudXBsb2FkRmlsZShlKVxyXG4gICAgKTtcclxuICAgIGZpbGVSZWFkZXIuZmlsZU5hbWUgPSBmaWxlc1swXS5uYW1lO1xyXG4gICAgZmlsZVJlYWRlci5yZWFkQXNUZXh0KGZpbGVzWzBdKTtcclxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzbHVnZ2lmeSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksIFwiX1wiKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKG1vZGVsLCBldmVudCkge1xyXG4gICAgbGV0IHtuYW1lLCBleHRlbnNpb24sIGNvbnRlbnRzLCBtaW1ldHlwZX0gPSBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKS5kb3dubG9hZEZpbGUoKTtcclxuICAgIC8vIE1ha2Ugc2FmZVxyXG4gICAgbmFtZSA9IHNsdWdnaWZ5KG5hbWUpO1xyXG4gICAgbmFtZSA9IG5hbWUgKyBleHRlbnNpb247XHJcbiAgICAvLyBNYWtlIHRoZSBkYXRhIGRvd25sb2FkIGFzIGEgZmlsZVxyXG4gICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbY29udGVudHNdLCB7dHlwZTogbWltZXR5cGV9KTtcclxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgbmFtZSk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgbGV0IHRlbXBvcmFyeURvd25sb2FkTGluayA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wb3JhcnlEb3dubG9hZExpbmspO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcG9yYXJ5RG93bmxvYWRMaW5rKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbSA9IG1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmlsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcihcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbGVEZWxldGVkKCkge1xyXG4gICAgICAgIC8vIFRPRE86IFN3aXRjaCB0byB0aGUgcHJldmlvdXMgZmlsZSBpbnN0ZWFkIG9mIGEgZGVmYXVsdCBmaWxlXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlVXBkYXRlZChmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IHRoaXMuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUgPSBmaWxlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcih0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGVTeXN0ZW0uc3RvcFdhdGNoaW5nRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy90aGlzLnRyYWNrQ3VycmVudEZpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tDdXJyZW50RmlsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0ud2F0Y2hGaWxlKHRoaXMuZmlsZW5hbWUsIHtcclxuICAgICAgICAgICAgdXBkYXRlZDogdGhpcy5vbkZpbGVVcGRhdGVkLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGRlbGV0ZWQ6IHRoaXMub25GaWxlRGVsZXRlZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBuZXdGaWxlbmFtZTtcclxuICAgICAgICB0aGlzLmZpbGUgPSB0aGlzLmZpbGVTeXN0ZW0uZ2V0RmlsZShuZXdGaWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy50cmFja0N1cnJlbnRGaWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5ld0ZpbGVuYW1lIC0gdGhlIGZpbGVuYW1lIHRoYXQgdGhlIG90aGVyIGVkaXRvciB3aWxsIGJlIHN3aXRjaGluZyB0b1xyXG4gICAgICogQHBhcmFtIG9sZEVkaXRvclxyXG4gICAgICogQHBhcmFtIG5ld0VkaXRvclxyXG4gICAgICovXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS5zdG9wV2F0Y2hpbmdGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IGV2ZW50LnRhcmdldC5maWxlTmFtZTtcclxuICAgICAgICBsZXQgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIHRoaXMuZmlsZS5oYW5kbGUoY29udGVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkRmlsZSgpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBFZGl0b3JzLnBhcnNlRmlsZW5hbWUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogZmlsZW5hbWUubmFtZSxcclxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBmaWxlbmFtZS50eXBlLFxyXG4gICAgICAgICAgICBjb250ZW50czogdGhpcy5maWxlLmhhbmRsZSgpLFxyXG4gICAgICAgICAgICBtaW1ldHlwZTogXCJ0ZXh0L3BsYWluXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7RGlzcGxheU1vZGVzfSBmcm9tIFwiLi9weXRob25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdj5cclxuICAgIEFzc2lnbm1lbnQgU2V0dGluZ3NcclxuICAgIFxyXG4gICAgPGZvcm0+XHJcbiAgICAgICAgPGxhYmVsPk5hbWU6IDwvbGFiZWw+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HUyA9IFtcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIHVzZXIgaXMgYWxsb3dlZCB0byBlZGl0IHRoZSBmaWxlIGRpcmVjdGx5XHJcbiAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAqL1xyXG4gICAgW1wiY2FuRWRpdFwiLCBcImNhbl9lZGl0XCIsIHRydWVdLFxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgdXNlciBjYW4gdXNlIGJsb2Nrc1xyXG4gICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgKi9cclxuICAgIFtcImNhbkJsb2Nrc1wiLCBcImNhbl9ibG9ja3NcIiwgdHJ1ZV0sXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdG8gcHJldmVudCB0aW1lb3V0cyAocG90ZW50aWFsbHkgYWxsb3cgaW5maW5pdGUgbG9vcHMpXHJcbiAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAqL1xyXG4gICAgW1wiZGlzYWJsZVRpbWVvdXRcIiwgXCJkaXNhYmxlX3RpbWVvdXRcIiwgZmFsc2VdLFxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGF0IGxldmVsIG9mIHRvb2xib3ggdG8gcHJlc2VudCB0byB0aGUgdXNlclxyXG4gICAgICovXHJcbiAgICBbXCJ0b29sYm94TGV2ZWxcIiwgXCJ0b29sYm94X2xldmVsXCIsIFwibm9ybWFsXCJdLFxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHRoZSBzdHVkZW50IG9wZW5zIHRoaXMgYXNzaWdubWVudCwgd2hhdCBQeXRob24gZWRpdG9yIG1vZGUgdG8gc3RhcnQgaW5cclxuICAgICAqL1xyXG4gICAgW1wic3RhcnRWaWV3XCIsIFwic3RhcnRfdmlld1wiLCBEaXNwbGF5TW9kZXMuU1BMSVRdLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBsaXN0IG9mIGRhdGFzZXRzIGF2YWlsYWJsZSBvbiBsb2FkIGFzIGEgY29tbWEgc2VwYXJhdGVkIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBbXCJkYXRhc2V0c1wiLCBcImRhdGFzZXRzXCIsIFwiXCJdLFxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgYSBwYXJzb24ncyBzdHlsZSBxdWVzdGlvblxyXG4gICAgICovXHJcbiAgICBbXCJpc1BhcnNvbnNcIiwgXCJpc19wYXJzb25zXCIsIGZhbHNlXSxcclxuICAgIC8vIFdoZXRoZXIgdG8gZXZlbiB0cnkgdG8gcnVuIGZlZWRiYWNrXHJcbiAgICBbXCJkaXNhYmxlRmVlZGJhY2tcIiwgXCJkaXNhYmxlX2ZlZWRiYWNrXCIsIGZhbHNlXSxcclxuICAgIC8vIFdoZXRoZXIgdG8gZG8gYW55IHRyYWNpbmdcclxuICAgIFtcImRpc2FibGVUcmFjZVwiLCBcImRpc2FibGVfdHJhY2VcIiwgZmFsc2VdLFxyXG4gICAgLy8gV2hldGhlciB0byBpbW1lZGlhdGVseSBzdGFydCBpbiBJbnRlcmFjdGl2ZSBDb25zb2xlIG1vZGVcclxuICAgIFtcIm9ubHlJbnRlcmFjdGl2ZVwiLCBcIm9ubHlfaW50ZXJhY3RpdmVcIiwgZmFsc2VdLFxyXG4gICAgW1wib25seVVwbG9hZHNcIiwgXCJvbmx5X3VwbG9hZHNcIiwgZmFsc2VdLFxyXG4gICAgLy8gV2hhdCBtZW51cy9mZWVkYmFjayB0byBzaG93IGFuZCBoaWRlXHJcbiAgICBbXCJoaWRlRmlsZXNcIiwgXCJoaWRlX2ZpbGVzXCIsIHRydWVdLFxyXG4gICAgW1wiaGlkZVF1ZXVlZElucHV0c1wiLCBcImhpZGVfcXVldWVkX2lucHV0c1wiLCB0cnVlXSxcclxuICAgIFtcImhpZGVFZGl0b3JzXCIsIFwiaGlkZV9lZGl0b3JzXCIsIGZhbHNlXSxcclxuICAgIFtcImhpZGVBbGxcIiwgXCJoaWRlX2FsbFwiLCBmYWxzZV0sXHJcbiAgICBbXCJoaWRlRXZhbHVhdGVcIiwgXCJoaWRlX2V2YWx1YXRlXCIsIGZhbHNlXSxcclxuICAgIFtcImhpZGVJbXBvcnREYXRhc2V0c0J1dHRvblwiLCBcImhpZGVfaW1wb3J0X2RhdGFzZXRzX2J1dHRvblwiLCB0cnVlXSxcclxuICAgIFtcImhpZGVJbXBvcnRTdGF0ZW1lbnRzXCIsIFwiaGlkZV9pbXBvcnRfc3RhdGVtZW50c1wiLCBmYWxzZV0sXHJcbiAgICBbXCJoaWRlQ292ZXJhZ2VCdXR0b25cIiwgXCJoaWRlX2NvdmVyYWdlX2J1dHRvblwiLCBmYWxzZV1cclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlQXNzaWdubWVudFNldHRpbmdzKG1vZGVsKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSB7fTtcclxuICAgIEFTU0lHTk1FTlRfU0VUVElOR1MuZm9yRWFjaChzZXR0aW5nID0+IHtcclxuICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdLCBkZWZhdWx0VmFsdWUgPSBzZXR0aW5nWzJdO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3NbY2xpZW50TmFtZV0oKTtcclxuICAgICAgICAvLyBPbmx5IHN0b3JlIHRoaXMgc2V0dGluZyBpZiBpdHMgZGlmZmVyZW50IGZyb20gdGhlIGRlZmF1bHRcclxuICAgICAgICBpZiAodmFsdWUgIT09IGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tzZXJ2ZXJOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwsIHNldHRpbmdzKSB7XHJcbiAgICBpZiAoc2V0dGluZ3MpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IEpTT04ucGFyc2Uoc2V0dGluZ3MpO1xyXG4gICAgICAgIEFTU0lHTk1FTlRfU0VUVElOR1MuZm9yRWFjaChzZXR0aW5nID0+IHtcclxuICAgICAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXTtcclxuICAgICAgICAgICAgaWYgKHNlcnZlck5hbWUgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3NbY2xpZW50TmFtZV0oc2V0dGluZ3Nbc2VydmVyTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwoY29uZmlndXJhdGlvbikge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge307XHJcbiAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXSwgZGVmYXVsdFZhbHVlID0gc2V0dGluZ1syXTtcclxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbltzZXJ2ZXJOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW2NsaWVudE5hbWVdID0ga28ub2JzZXJ2YWJsZShkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW2NsaWVudE5hbWVdID0ga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5zZXR0aW5ncy5cIitzZXJ2ZXJOYW1lXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbn1cclxuXHJcbmNsYXNzIEFzc2lnbm1lbnRTZXR0aW5nc1ZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXNzaWdubWVudFNldHRpbmdzID0ge1xyXG4gICAgbmFtZTogXCJBc3NpZ25tZW50IFNldHRpbmdzXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IEFzc2lnbm1lbnRTZXR0aW5nc1ZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BUktET1dOX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwiYmxvY2tweS1lZGl0b3ItbWFya2Rvd25cIj48L3RleHRhcmVhPiAgICBcclxuYDtcclxuXHJcblxyXG5jbGFzcyBNYXJrZG93bkVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMubWRlID0gbmV3IEVhc3lNREUoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiB0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci1tYXJrZG93blwiKVswXSxcclxuICAgICAgICAgICAgYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb3JjZVN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogXCI1MDBweFwiLFxyXG4gICAgICAgICAgICAvLyBUT0RPOiBpbWFnZVVwbG9hZEZ1bmN0aW9uXHJcbiAgICAgICAgICAgIHJlbmRlcmluZ0NvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgY29kZVN5bnRheEhpZ2hsaWdodGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5kZW50V2l0aFRhYnM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0YWJTaXplOiA0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaC5iaW5kKHRoaXMubWRlLmNvZGVtaXJyb3IpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1kZS52YWx1ZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLm1kZS52YWx1ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1hcmtkb3duRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJNYXJrZG93blwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLm1kXCJdLFxyXG4gICAgY29uc3RydWN0b3I6IE1hcmtkb3duRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBNQVJLRE9XTl9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBUT0RPOiByZW5hbWUgZmlsZXMsIG1hbnVhbCBzYXZlLCB0YWdzLCBzYW1wbGVfc3VibWlzc2lvbnMsIG9uX2V2YWwsIG5vbi1idWlsdGluIGZpbGVzXHJcbiAqIFRPRE86IGltcG9ydCBkYXRhLCBoaXN0b3J5LCBydW4sIHVybF9kYXRhLCBhc3NpZ25tZW50X3NldHRpbmdzLCBwYXJzb25zX21vZGVcclxuICogVE9ETzogZGVsZXRlIGJlY29tZXMgXCJjbGVhclwiIGZvciBpbnN0cnVjdG9yIGZpbGVzXHJcbiAqIFRPRE86IEZpeCBjYXB0dXJlIGJsb2NrcyBjc3NcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQGVudW0ge3N0cn1cclxuICovXHJcbmltcG9ydCB7QWJzdHJhY3RFZGl0b3IsIHNsdWdnaWZ5fSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBsZXQgRGlzcGxheU1vZGVzID0ge1xyXG4gICAgQkxPQ0s6IFwiYmxvY2tcIixcclxuICAgIFNQTElUOiBcInNwbGl0XCIsXHJcbiAgICBURVhUOiBcInRleHRcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFrZVRhYihuYW1lLCBpY29uLCBtb2RlKSB7XHJcbiAgICByZXR1cm4gYDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGRpc3BsYXkucHl0aG9uTW9kZS5iaW5kKCRkYXRhLCAnJHttb2RlfScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLSR7aWNvbn0nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1tb2RlLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+ICR7bmFtZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5gO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUFlUSE9OX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktcHl0aG9uLXRvb2xiYXIgY29sLW1kLTEyIGJ0bi10b29sYmFyXCJcclxuICAgICAgICAgcm9sZT1cInRvb2xiYXJcIiBhcmlhLWxhYmVsPVwiUHl0aG9uIFRvb2xiYXJcIj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSdW4gR3JvdXBcIj4gICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYmxvY2tweS1ydW5cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmV4ZWN1dGUucnVuXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1wbGF5XCI+PC9zcGFuPiBSdW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSBtci0yXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAke21ha2VUYWIoXCJCbG9ja3NcIiwgXCJ0aC1sYXJnZVwiLCBEaXNwbGF5TW9kZXMuQkxPQ0spfVxyXG4gICAgICAgICAgICAgICAgJHttYWtlVGFiKFwiU3BsaXRcIiwgXCJjb2x1bW5zXCIsIERpc3BsYXlNb2Rlcy5TUExJVCl9XHJcbiAgICAgICAgICAgICAgICAke21ha2VUYWIoXCJUZXh0XCIsIFwiYWxpZ24tbGVmdFwiLCBEaXNwbGF5TW9kZXMuVEVYVCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVzZXQgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnJlc2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zeW5jXCI+PC9zcGFuPiBSZXNldFxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkltcG9ydCBHcm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuaW1wb3J0RGF0YXNldFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9zcGFuPiBJbXBvcnQgZGF0YXNldHNcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtdXBsb2FkXCI+PC9zcGFuPiBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJibG9ja3B5LXRvb2xiYXItdXBsb2FkXCIgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiZXZlbnQ6IHtjaGFuZ2U6IHVpLmVkaXRvcnMudXBsb2FkfVwiPlxyXG4gICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZSBkcm9wZG93bi10b2dnbGUtc3BsaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIERyb3Bkb3duPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nZHJvcGRvd24taXRlbSBibG9ja3B5LXRvb2xiYXItZG93bmxvYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmRvd25sb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1kb3dubG9hZCc+PC9zcGFuPiBEb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJIaXN0b3J5IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtaGlzdG9yeVwiPjwvc3Bhbj4gSGlzdG9yeVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPCEtLSBGdWxseSBmdW5jdGlvbmFsLCBidXQgYSBsaXR0bGUgdG9vLi4gSW52YXNpdmUgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJGdWxsc2NyZWVuIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICd0ZXh0J1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmZ1bGxzY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0XCI+PC9zcGFuPiBGdWxsc2NyZWVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIC0tPlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlNhdmUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhblNhdmVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zYXZlXCI+PC9zcGFuPiBTYXZlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRGVsZXRlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5EZWxldGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvc3Bhbj4gRGVsZXRlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVuYW1lIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5SZW5hbWVcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZmlsZS1zaWduYXR1cmVcIj48L3NwYW4+IFJlbmFtZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIj5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG4vKlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJsb2NrcHktcnVuJyBzdHlsZT0nZmxvYXQ6bGVmdCcsXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD0nY3NzOiBleGVjdXRpb24uc3RhdHVzKCkgPT0gXCJydW5uaW5nXCIgPyBcImJ0bi1pbmZvXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0aW9uLnN0YXR1cygpID09IFwiZXJyb3JcIiA/IFwiYnRuLWRhbmdlclwiIDogXCJidG4tc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3IoKSB8fCAhYXNzaWdubWVudC51cGxvYWQoKScgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5Jz48L3NwYW4+IFJ1blxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiIGRhdGEtYmluZD1cInZpc2libGU6ICFhc3NpZ25tZW50LnVwbG9hZCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZWRpdG9yKCkgPT0gJ0Jsb2NrcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWFyZUJsb2Nrc1VwZGF0aW5nKCl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGFyZ2UnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiBCbG9ja3NcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktbW9kZS1zZXQtaW5zdHJ1Y3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogc2V0dGluZ3MuaW5zdHJ1Y3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczoge2FjdGl2ZTogc2V0dGluZ3MuZWRpdG9yKCkgPT0gJ1VwbG9hZCd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gSW5zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LW1vZGUtc2V0LXNwbGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmVkaXRvcigpID09ICdTcGxpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWFyZUJsb2Nrc1VwZGF0aW5nKCl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcmVzaXplLWhvcml6b250YWwnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gU3BsaXRcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1tb2RlLXNldC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmVkaXRvcigpID09ICdUZXh0J31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWwnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gVGV4dFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1yZXNldCdcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAhYXNzaWdubWVudC51cGxvYWQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCc+PC9zcGFuPiBSZXNldFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1jYXB0dXJlJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXBpY3R1cmUnPjwvc3Bhbj4gQ2FwdHVyZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLWRlZmF1bHQgYmxvY2tweS10b29sYmFyLWltcG9ydCdcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBzZXR0aW5ncy5pbnN0cnVjdG9yKCkgfHwgKCFhc3NpZ25tZW50LnVwbG9hZCgpICYmIGFzc2lnbm1lbnQuaW1wb3J0YWJsZSgpKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tY2xvdWQtZG93bmxvYWQnPjwvc3Bhbj4gSW1wb3J0IERhdGFzZXRzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdXBsb2FkJz48L3NwYW4+IFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJsb2NrcHktdG9vbGJhci11cGxvYWRcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdibG9ja3B5LXRvb2xiYXItZG93bmxvYWQnPjxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWRvd25sb2FkJz48L3NwYW4+IERvd25sb2FkIFB5dGhvbiBDb2RlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1oaXN0b3J5Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvdXJnbGFzcyc+PC9zcGFuPiBIaXN0b3J5XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItaW5zdHJ1Y3RvcicgZGF0YS1iaW5kPVwidmlzaWJsZTogc2V0dGluZ3MuaW5zdHJ1Y3RvclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHQnPjwvc3Bhbj4gU2V0dGluZ3NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8IS0tXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1lbmdsaXNoJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QtYWx0Jz48L3NwYW4+IEVuZ2xpc2hcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3IoKVwiXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9J2NsZWFyOmJvdGgnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJsb2NrcHktdG9vbGJhci1maWxlbmFtZS1waWNrZXJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LXNldC1maWxlbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5maWxlbmFtZSgpID09ICdfX21haW5fXyd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwiX19tYWluX19cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktZmlsZW5hbWUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gX19tYWluX19cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1zZXQtZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZmlsZW5hbWUoKSA9PSAnc3RhcnRpbmdfY29kZSd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwic3RhcnRpbmdfY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1maWxlbmFtZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gb25fc3RhcnRcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1zZXQtZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZmlsZW5hbWUoKSA9PSAnZ2l2ZV9mZWVkYmFjayd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwiZ2l2ZV9mZWVkYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1maWxlbmFtZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gb25fcnVuXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktc2V0LWZpbGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmZpbGVuYW1lKCkgPT0gJ29uX2NoYW5nZSd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwib25fY2hhbmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LWZpbGVuYW1lLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPiBvbl9jaGFuZ2VcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gKi9cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydElweW5iVG9QeXRob24oY29kZSkge1xyXG4gICAgbGV0IGlweW5iID0gSlNPTi5wYXJzZShjb2RlKTtcclxuICAgIGxldCBpc1VzYWJsZSA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAhY2VsbC5zb3VyY2VbMF0uc3RhcnRzV2l0aChcIiVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgICAgIGNlbGwuY2VsbF90eXBlID09PSBcInJhd1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgbWFrZVB5dGhvbiA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwibWFya2Rvd25cIiB8fFxyXG4gICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCInJydcIitjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpK1wiJycnXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBpcHluYi5jZWxscy5maWx0ZXIoaXNVc2FibGUpLm1hcChtYWtlUHl0aG9uKS5qb2luKFwiXFxuXCIpO1xyXG59XHJcblxyXG5jbGFzcyBQeXRob25FZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIikpO1xyXG4gICAgICAgIHRoaXMuYm0gPSBuZXcgQmxvY2tNaXJyb3Ioe1xyXG4gICAgICAgICAgICBcImNvbnRhaW5lclwiOiB0aGlzLnRhZ1swXSxcclxuICAgICAgICAgICAgXCJydW5cIjogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5ydW4uYmluZChtYWluLmNvbXBvbmVudHMuZW5naW5lKSxcclxuICAgICAgICAgICAgXCJza2lwU2t1bHB0XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmxvY2tseU1lZGlhUGF0aFwiOiBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uYmxvY2tseVBhdGgsXHJcbiAgICAgICAgICAgIC8vJ2hlaWdodCc6ICcyMDAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFrZVN1YnNjcmlwdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmVFeHRyYUJsb2NrbHkoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5ibG9ja0VkaXRvci53b3Jrc3BhY2UuY29uZmlndXJlQ29udGV4dE1lbnUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiU2NyZWVuc2hvdFwiLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5TQ1JFRU5TSE9UX0JMT0NLU1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuXHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRCTUxpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJtLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG5cclxuXHJcbiAgICAgICAgLy90aGlzLmJtLmJsb2NrRWRpdG9yLndvcmtzcGFjZS5yZW5kZXIoKTtcclxuICAgICAgICAvL3RoaXMuYm0ucmVmcmVzaCgpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgd2h5IHRoaXMgZG9lc24ndCBlbmQgdXAgbG9va2luZyByaWdodCAoZ28gdG8gYSBkaWZmZXJlbnQgZWRpdG9yLCBjb21lIGJhY2ssIGFuZCBpdCdsbCBiZSBzcXVpc2hlZClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYm0ucmVmcmVzaCgpLCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0Q29kZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLmJtLmdldENvZGUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuYm0ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5jdXJyZW50Qk1MaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlU3Vic2NyaXB0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmJtLnNldE1vZGUodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlLnN1YnNjcmliZShtb2RlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRNb2RlKG1vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIGlmIChmaWxlbmFtZS5lbmRzV2l0aChcIi5pcHluYlwiKSkge1xyXG4gICAgICAgICAgICBjb2RlID0gY29udmVydElweW5iVG9QeXRob24oY29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlsZS5oYW5kbGUoY29kZSk7XHJcbiAgICAgICAgLy8gVE9ETzogbG9nIHVwbG9hZCBldmVudFxyXG4gICAgICAgIC8vIFRPRE86IFJ1biBjb2RlXHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzdXBlci5kb3dubG9hZEZpbGUoKTtcclxuICAgICAgICBpZiAocmVzdWx0Lm5hbWUgPT09IFwiYW5zd2VyXCIgJiYgcmVzdWx0LmV4dGVuc2lvbiA9PT0gXCIucHlcIikge1xyXG4gICAgICAgICAgICByZXN1bHQubmFtZSA9IHNsdWdnaWZ5KHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5taW1ldHlwZSA9IFwidGV4dC94LXB5dGhvblwiO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHl0aG9uRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJQeXRob25cIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi5weVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBQeXRob25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFBZVEhPTl9FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRBR1NfRURJVE9SX0hUTUwgPSBgXHJcbkNyZWF0ZSBuZXdcclxuSW1wb3J0IGJ5IG5hbWVcclxuRmluZCBieSBvd25lci9jb3Vyc2Uva2luZFxyXG5cclxuVGFnczpcclxuICAgIERhdGE6XHJcbiAgICAgICAgTmFtZVxyXG4gICAgICAgIEtpbmRcclxuICAgICAgICBMZXZlbFxyXG4gICAgICAgIFZlcnNpb25cclxuICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgQ29udHJvbHM6XHJcbiAgICAgICAgRWRpdFxyXG4gICAgICAgIFJlbW92ZVxyXG4gICAgICAgIERlbGV0ZSBcclxuYDtcclxuXHJcbmNsYXNzIFRhZ3NFZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItdGFnc1wiKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWdzRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJUYWdzXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIhdGFncy5ibG9ja3B5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFRhZ3NFZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFRBR1NfRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBURVhUX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdj5cclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImJsb2NrcHktZWRpdG9yLXRleHRcIj48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jbGFzcyBUZXh0RWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEodGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItdGV4dFwiKVswXSwge1xyXG4gICAgICAgICAgICBzaG93Q3Vyc29yV2hlblNlbGVjdGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAgICAgICAgIGZpcnN0TGluZU51bWJlcjogMSxcclxuICAgICAgICAgICAgaW5kZW50VW5pdDogNCxcclxuICAgICAgICAgICAgdGFiU2l6ZTogNCxcclxuICAgICAgICAgICAgaW5kZW50V2l0aFRhYnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBleHRyYUtleXM6IHtcclxuICAgICAgICAgICAgICAgIFwiVGFiXCI6IFwiaW5kZW50TW9yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTaGlmdC1UYWJcIjogXCJpbmRlbnRMZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVzY1wiOiBmdW5jdGlvbiAoY20pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY20uZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbS5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbS5kaXNwbGF5LmlucHV0LmJsdXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJGMTFcIjogZnVuY3Rpb24gKGNtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY20uc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCAhY20uZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuY29kZU1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5jb2RlTWlycm9yKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb2RlbWlycm9yLnNldFZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci52YWx1ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dEVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGV4dFwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnR4dFwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUZXh0RWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBURVhUX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIEVkaXRvcnMgYXJlIGluZmVycmVkIGZyb20gRmlsZW5hbWVzLlxyXG4gKlxyXG4gKiBUaGUgZWRpdG9yIGlzIGJhc2VkIG9uIHRoZSBleHRlbnNpb246XHJcbiAqICAuYmxvY2tweTogU3BlY2lhbCBlZGl0b3IgKHdpbGwgYmUgY2hvc2VuIGJ5IGZpbGVuYW1lKVxyXG4gKiAgLnB5OiBQeXRob24gRWRpdG9yXHJcbiAqICAubWQ6IE1hcmtkb3duIEVkaXRvclxyXG4gKiAgLnR4dDogVGV4dCBFZGl0b3IgKGFsc28gdXNlZCBmb3Igb3RoZXIgdHlwZXMpXHJcbiAqICAucGVtbDogUEVNTCBFZGl0b3JcclxuICogIC5wbmcsIC5naWYsIC5qcGVnLCAuanBnLCAuYm1wOiBJbWFnZSBFZGl0b3JcclxuICogIC5qc29uOiBKU09OIEVkaXRvclxyXG4gKiAgLnlhbWw6IFlBTUwgRWRpdG9yXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtQeXRob25FZGl0b3J9IGZyb20gXCIuL2VkaXRvci9weXRob25cIjtcclxuaW1wb3J0IHtUZXh0RWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGV4dFwiO1xyXG5pbXBvcnQge0Fzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtUYWdzRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGFnc1wiO1xyXG5pbXBvcnQge01hcmtkb3duRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvbWFya2Rvd25cIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGlmZmVyZW50IHBvc3NpYmxlIGVkaXRvcnMgYXZhaWxhYmxlXHJcbiAqIEBlbnVtIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgbGV0IEVkaXRvcnNFbnVtID0ge1xyXG4gICAgU1VCTUlTU0lPTjogXCJzdWJtaXNzaW9uXCIsXHJcbiAgICBBU1NJR05NRU5UOiBcImFzc2lnbm1lbnRcIixcclxuICAgIElOU1RSVUNUSU9OUzogXCJpbnN0cnVjdGlvbnNcIixcclxuICAgIE9OX1JVTjogXCJvbl9ydW5cIixcclxuICAgIE9OX0NIQU5HRTogXCJvbl9jaGFuZ2VcIixcclxuICAgIE9OX0VWQUw6IFwib25fZXZhbFwiLFxyXG4gICAgU1RBUlRJTkdfQ09ERTogXCJzdGFydGluZ19jb2RlXCIsXHJcbiAgICBTQU1QTEVfU1VCTUlTU0lPTlM6IFwic2FtcGxlX3N1Ym1pc3Npb25zXCIsXHJcbiAgICBJTlNUUlVDVE9SX0ZJTEU6IFwiaW5zdHJ1Y3Rvcl9maWxlXCJcclxufTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfTkFNRVNQQUNFUyA9IFtcIiFcIiwgXCJeXCIsIFwiP1wiLCBcIiRcIl07XHJcblxyXG5jb25zdCBBVkFJTEFCTEVfRURJVE9SUyA9IFtcclxuICAgIFRleHRFZGl0b3IsIFB5dGhvbkVkaXRvciwgQXNzaWdubWVudFNldHRpbmdzLCBUYWdzRWRpdG9yLCBNYXJrZG93bkVkaXRvclxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRPUlNfSFRNTCA9IEFWQUlMQUJMRV9FRElUT1JTLm1hcChlZGl0b3IgPT5cclxuICAgIGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZWRpdG9yXCI+XHJcbiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfSdcIj5cclxuICAgICR7ZWRpdG9yLnRlbXBsYXRlfSAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYFxyXG4gICAgLypcclxuICAgIGBcclxuPCEtLSBrbyBpZjogdWkuZWRpdG9ycy52aWV3KCkubmFtZSA9PT0gJyR7ZWRpdG9yLm5hbWV9JyAtLT5cclxuJHtlZGl0b3IudGVtcGxhdGV9XHJcbjwhLS0gL2tvIC0tPmAqL1xyXG4pLmpvaW4oXCJcXG5cIik7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9ycyB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uc18gPSB7fTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV8gPSB7fTtcclxuICAgICAgICBBVkFJTEFCTEVfRURJVE9SUy5mb3JFYWNoKGVkaXRvciA9PiB0aGlzLnJlZ2lzdGVyRWRpdG9yKGVkaXRvcikpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lLnN1YnNjcmliZSh0aGlzLmNoYW5nZUVkaXRvciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFZGl0b3IoZGF0YSkge1xyXG4gICAgICAgIGxldCBleHRlbnNpb25zID0gZGF0YS5leHRlbnNpb25zO1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBkYXRhLmNvbnN0cnVjdG9yKHRoaXMubWFpbiwgdGhpcy50YWcpO1xyXG4gICAgICAgIGluc3RhbmNlLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXy5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV9bZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCldID0gaW5zdGFuY2U7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbnNfW2V4dGVuc2lvbnNbaV1dID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ5TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnlOYW1lX1tuYW1lLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUVkaXRvcihuZXdGaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBvbGRFZGl0b3IgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IG5ld0VkaXRvciA9IHRoaXMuZ2V0RWRpdG9yKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgb2xkRWRpdG9yLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3RWRpdG9yO1xyXG4gICAgICAgIHRoaXMuY3VycmVudC5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGFyc2VGaWxlbmFtZShwYXRoKSB7XHJcbiAgICAgICAgbGV0IHNwYWNlID0gcGF0aC5jaGFyQXQoMCk7XHJcbiAgICAgICAgaWYgKFNQRUNJQUxfTkFNRVNQQUNFUy5pbmRleE9mKHNwYWNlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwYWNlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5hbWUgPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSBwYXRoLnN1YnN0cihwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcInNwYWNlXCI6IHNwYWNlLCBcIm5hbWVcIjogbmFtZSwgXCJ0eXBlXCI6IHR5cGV9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVkaXRvcihwYXRoKSB7XHJcbiAgICAgICAgbGV0IHtzcGFjZSwgbmFtZSwgdHlwZX0gPSBFZGl0b3JzLnBhcnNlRmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiLmJsb2NrcHlcIiAmJiBwYXRoIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bcGF0aF07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bdHlwZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZF9bMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuL3NlcnZlclwiO1xuaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ydW5cIjtcbmltcG9ydCB7UnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3J1blwiO1xuaW1wb3J0IHtFdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL2V2YWxcIjtcbmltcG9ydCB7U2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3NhbXBsZVwiO1xuaW1wb3J0IHtPbkNoYW5nZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9jaGFuZ2VcIjtcbmltcG9ydCB7T25FdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX2V2YWxcIjtcbmltcG9ydCB7T25TYW1wbGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fc2FtcGxlXCI7XG5cbi8qKlxuICogQW4gb2JqZWN0IGZvciBleGVjdXRpbmcgUHl0aG9uIGNvZGUgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdHMgYWxvbmcgdG8gaW50ZXJlc3RlZCBjb21wb25lbnRzLlxuICpcbiAqIEludGVyZXN0aW5nIGNvbXBvbmVudHM6XG4gKiAgRXhlY3V0aW9uIEJ1ZmZlcjogUmVzcG9uc2libGUgZm9yIGNvbGxlY3RpbmcgdGhlIHRyYWNlIGR1cmluZyBwcm9ncmFtIGV4ZWN1dGlvbi5cbiAqICAgICAgICAgICAgICAgICAgICBUaGlzIHByZXZlbnRzIEtub2Nrb3V0anMgZnJvbSB1cGRhdGluZyB0aGUgZWRpdG9yIGR1cmluZyBleGVjdXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUVkaXRvcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uO1xuXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMgPSB7XG4gICAgICAgICAgICBydW46IG5ldyBSdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgZXZhbDogbmV3IEV2YWxDb25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25SdW46IG5ldyBPblJ1bkNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkNoYW5nZTogbmV3IE9uQ2hhbmdlQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uRXZhbDogbmV3IE9uRXZhbENvbmZpZ3VyYXRpb24obWFpbilcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcmVjb25maWd1cmUgc2t1bHB0IHNvIHdlIGNhbiBwYXJzZVxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5jb25maWd1cmF0aW9ucy5ydW4uZ2V0U2t1bHB0T3B0aW9ucygpKTtcblxuICAgICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgdHJhY2luZyB3aGlsZSB0aGUgcHJvZ3JhbSBpcyBleGVjdXRpbmdcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5hYmxlIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIGV4ZWN1dGlvbiBoYXMgZnVsbHkgZW5kZWQsXG4gICAgICAgICAqIHdoZXRoZXIgaXQgc3VjY2VlZHMgb3IgZmFpbHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4gPSBudWxsO1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCByZXBvcnRzXG4gICAgICovXG4gICAgcmVzZXRSZXBvcnRzKCkge1xuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5yZXBvcnRzO1xuICAgICAgICByZXBvcnRbXCJ2ZXJpZmllclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge307XG4gICAgfTtcblxuICAgIHJlc2V0U3R1ZGVudE1vZGVsKCkge1xuICAgICAgICBsZXQgc3R1ZGVudCA9IHRoaXMuZXhlY3V0aW9uTW9kZWwuc3R1ZGVudDtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50U3RlcChudWxsKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xuICAgICAgICBzdHVkZW50Lmxhc3RTdGVwKDApO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRMaW5lKG51bGwpO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRUcmFjZURhdGEucmVtb3ZlQWxsKCk7XG4gICAgICAgIHN0dWRlbnQucmVzdWx0cyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVzZXRFeGVjdXRpb25CdWZmZXIoKSB7XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyID0ge1xuICAgICAgICAgICAgXCJ0cmFjZVwiOiBbXSxcbiAgICAgICAgICAgIFwic3RlcFwiOiAwLFxuICAgICAgICAgICAgXCJsaW5lXCI6IDAsXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgaW50ZXJmYWNlIGFzcGVjdHMgb2YgdGhlIHByZXZpb3VzIFJ1bi5cbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgLy8gVE9ETzogQ2xlYXIgb3V0IGFueSBjb3ZlcmFnZS90cmFjZS9lcnJvciBoaWdobGlnaHRzIGluIGVkaXRvcnNcbiAgICAgICAgLy8gUmVzZXQgZXhlY3V0aW9uIGluIG1vZGVsXG4gICAgICAgIHRoaXMucmVzZXRTdHVkZW50TW9kZWwoKTtcbiAgICAgICAgLy8gR2V0IHJlcG9ydHMgcmVhZHlcbiAgICAgICAgdGhpcy5yZXNldFJlcG9ydHMoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBleGVjdXRpb24gYnVmZmVyXG4gICAgICAgIHRoaXMucmVzZXRFeGVjdXRpb25CdWZmZXIoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBjb25zb2xlIG9mIHByaW50ZWQgc3R1ZmZcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5jbGVhcigpO1xuICAgICAgICAvLyBDbGVhciBvdXQgYW55IG9sZCBmZWVkYmFja1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5jbGVhcigpO1xuICAgIH1cblxuXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLnJ1bi51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKS50aGVuKHRoaXMub25SdW4uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25SdW4oKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25SdW4udXNlKHRoaXMpO1xuICAgICAgICB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICkudGhlbih0aGlzLmV4ZWN1dGlvbkVuZF8uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGUoKSB7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgbGV0IGV2YWx1YXRpb25JbnB1dCA9IHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuZXZhbHVhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coZXZhbHVhdGlvbklucHV0KTtcbiAgICAgICAgZXZhbHVhdGlvbklucHV0LnRoZW4oKHVzZXJJbnB1dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5ldmFsLnVzZSh0aGlzLCB1c2VySW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICApLnRoZW4odGhpcy5vbkV2YWwuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZhbCgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkV2YWwudXNlKHRoaXMpO1xuICAgICAgICB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICkudGhlbih0aGlzLmV2YWx1YXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uQ2hhbmdlLnVzZSh0aGlzKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiXCIsIFwiXCIsIFwiXCIsIHRoaXMuY29uZmlndXJhdGlvbi5maWxlbmFtZSk7XG4gICAgICAgIHJldHVybiBTay5taXNjZXZhbC5hc3luY1RvUHJvbWlzZSgoKSA9PlxuICAgICAgICAgICAgU2suaW1wb3J0TWFpbldpdGhCb2R5KHRoaXMuY29uZmlndXJhdGlvbi5maWxlbmFtZSwgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmNvZGUsIHRydWUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVkIHdoZW5ldmVyIHRoZSBQeXRob24gY29kZSBjaGFuZ2VzXG4gICAgICovXG4gICAgb25fY2hhbmdlKCkge1xuICAgICAgICBsZXQgRklMRU5BTUUgPSBcIm9uX2NoYW5nZVwiO1xuICAgICAgICAvLyBUT0RPOiBEbyB3ZSBhY3R1YWxseSB3YW50IHRvIHNraXAgaWYgdGhpcyBpcyB0aGUgY2FzZT9cbiAgICAgICAgLy8gU2tpcCBpZiB0aGUgaW5zdHJ1Y3RvciBoYXMgbm90IGRlZmluZWQgYW55dGhpbmdcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwucHJvZ3JhbXNbRklMRU5BTUVdKCkudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjaGFuZ2luZ1wiKTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVDb2RlKCk7XG4gICAgICAgIC8vIE9uIHN0ZXAgZG9lcyBub3QgcGVyZm9ybSBwYXJzZSBhbmFseXNpcyBieSBkZWZhdWx0IG9yIHJ1biBzdHVkZW50IGNvZGVcbiAgICAgICAgbGV0IGVuZ2luZSA9IHRoaXM7XG4gICAgICAgIGxldCBmZWVkYmFjayA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrO1xuICAgICAgICBlbmdpbmUucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIGVuZ2luZS52ZXJpZnlDb2RlKCk7XG4gICAgICAgIGVuZ2luZS51cGRhdGVQYXJzZSgpO1xuICAgICAgICBlbmdpbmUucnVuSW5zdHJ1Y3RvckNvZGUoRklMRU5BTUUsIHRydWUsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICAvLyBTVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogb25seSBzaG93IHVuZGVyIGNlcnRhaW4gY2lyY3Vtc3RhbmNlc1xuICAgICAgICAgICAgICAgIGlmICghc3VjY2VzcyAmJlxuICAgICAgICAgICAgICAgICAgICAhKGNhdGVnb3J5ID09PSBcIkluc3RydWN0b3JcIiAmJiBsYWJlbCA9PT0gXCJObyBlcnJvcnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgbGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKG1vZHVsZS4kZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJlbmdpbmVcIiwgXCJvbl9jaGFuZ2VcIik7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGNhbGwgdGhlIGRlZmluZWQgb25FeGVjdXRpb25FbmQsXG4gICAgICogYnV0IHdpbGwgZG8gbm90aGluZyBpZiB0aGVyZSBpcyBubyBmdW5jdGlvbiBkZWZpbmVkLlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkVuZF8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRXhlY3V0aW9uRW5kICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkJlZ2luXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25CZWdpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGNvbnN0IEVNUFRZX01PRFVMRSA9IFwibGV0ICRidWlsdGlubW9kdWxlID0gZnVuY3Rpb24obW9kKXsgcmV0dXJuIG1vZDsgfVwiXHJcblxyXG4vKipcclxuICogQSBjb250YWluZXIgZm9yIGhvbGRpbmcgc2V0dGluZ3Mgb2YgYSBwYXJ0aWN1bGFyIHJ1biBjb25maWd1cmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIC8vIEFjY2VzcyBwb2ludCBmb3IgaW5zdHJ1Y3RvciBkYXRhXHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBTay5jb25zb2xlID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZTtcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIFNrLmNvbmZpZ3VyZSh0aGlzLmdldFNrdWxwdE9wdGlvbnMoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2t1bHB0T3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBfX2Z1dHVyZV9fOiBTay5weXRob24zLFxyXG4gICAgICAgICAgICAvLyBpbXBvcnRcclxuICAgICAgICAgICAgcmVhZDogdGhpcy5pbXBvcnRGaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIG9wZW5cclxuICAgICAgICAgICAgZmlsZW9wZW46IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gZmlsZS53cml0ZVxyXG4gICAgICAgICAgICBmaWxld3JpdGU6IHRoaXMud3JpdGVGaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIHByaW50XHJcbiAgICAgICAgICAgIG91dHB1dDogdGhpcy5wcmludC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBQcmV2ZW50cyByZWFkaW5nIEhUTUwgZWxlbWVudHMgYXMgZmlsZXNcclxuICAgICAgICAgICAgaW5Ccm93c2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gaW5wdXRcclxuICAgICAgICAgICAgaW5wdXRmdW46IHRoaXMuaW5wdXQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgaW5wdXRmdW5UYWtlc1Byb21wdDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gTWVkaWEgSW1hZ2UgUHJveHkgVVJMXHJcbiAgICAgICAgICAgIGltYWdlUHJveHk6IHRoaXMuZ2V0SW1hZ2VQcm94eS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0byBrZWVwIHRoZSBnbG9iYWxzXHJcbiAgICAgICAgICAgIHJldGFpbkdsb2JhbHM6IHRydWVcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgdG8gYWNjZXNzIFNrdWxwdCBidWlsdC1pbnMuIFRoaXMgaXMgcHJldHR5IGdlbmVyaWMsIHRha2VuXHJcbiAgICAgKiBhbG1vc3QgZGlyZWN0bHkgZnJvbSB0aGUgU2t1bHB0IGRvY3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHB5dGhvbiBmaWxlbmFtZSAoZS5nLiwgXCJvc1wiIG9yIFwicHByaW50XCIpIHRoYXQgd2lsbCBiZSBsb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgSmF2YVNjcmlwdCBzb3VyY2UgY29kZSBvZiB0aGUgZmlsZSAod2VpcmQsIHJpZ2h0PylcclxuICAgICAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgZmlsZSBpc24ndCBmb3VuZC5cclxuICAgICAqL1xyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW5GaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnB1dE1vY2tGdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoU2sucXVldWVkSW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEltYWdlUHJveHkoKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RTdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IHN1Y2Nlc3MgZXhlY3V0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBmYWlsdXJlIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkdW1teU91dFNhbmRib3goKSB7XHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi9wZWRhbC9zYW5kYm94L3NhbmRib3gucHlcIl0gPSBcImNsYXNzIFNhbmRib3g6IHBhc3NcXG5kZWYgcnVuKCk6IHBhc3NcXG5kZWYgcmVzZXQoKTogcGFzc1xcblwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtUcmFjZX0gZnJvbSBcIi4uL3RyYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZhbENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lLCBjb2RlKSB7XHJcbiAgICAgICAgLy8gVE9ETzogZml4IHRvIGJlIGN1cnJlbnRseSBhZGRlZCBsaW5lXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKFwiUnVubmluZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcIl8gPSBcIiArIGNvZGU7XHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IHRydWU7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5BZGRcIiwgXCJcIiwgXCJcIiwgY29kZSwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlXCIsIFwiXCIsIFwiXCIsIHRoaXMuY29kZSwgXCJldmFsdWF0aW9uc1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2YWwgc3VjY2Vzc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscyhTay5nbG9iYWxzKTtcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUucHJpbnRWYWx1ZShUcmFjZS5wYXJzZVZhbHVlKFwiX1wiLCBtb2R1bGUuJGQuXywgdHJ1ZSkudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zdGVwKG1vZHVsZS4kZCwgbW9kdWxlLiRkLC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwidHJhY2VcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBcIm91dHB1dFwiOiB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dCxcclxuICAgICAgICAgICAgICAgIFwiZXZhbHVhdGlvblwiOiB0aGlzLmNvZGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2YWwgZmFpbHVyZVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlLkVycm9yXCIsIFwiXCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBcImV2YWx1YXRpb25cIjogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29uZmlndXJhdGlvbiwgRU1QVFlfTU9EVUxFfSBmcm9tIFwiLi9jb25maWd1cmF0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyRza19tb2RfaW5zdHJ1Y3Rvcn0gZnJvbSBcIi4uL3NrX21vZF9pbnN0cnVjdG9yXCI7XHJcblxyXG5jb25zdCBVVElMSVRZX01PRFVMRV9DT0RFID0gXCJ2YXIgJGJ1aWx0aW5tb2R1bGUgPSBcIiArICRza19tb2RfaW5zdHJ1Y3Rvci50b1N0cmluZygpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gSW5zdHJ1Y3RvcnMgaGF2ZSBubyBsaW1pdHNcclxuICAgICAgICBTay5leGVjTGltaXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8gU3RlcHBlciEgRXhlY3V0ZWQgYWZ0ZXIgZXZlcnkgc3RhdGVtZW50LlxyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gbnVsbDtcclxuICAgICAgICAvLyBNdXRlIGV2ZXJ5dGhpbmdcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcih0cnVlKTtcclxuICAgICAgICAvLyBEaXNhYmxlIGlucHV0IGJveFxyXG4gICAgICAgIFNrLnF1ZXVlZElucHV0ID0gW107XHJcbiAgICAgICAgLy8gVE9ETyBTay5pbnB1dGZ1biA9IEJsb2NrUHlFbmdpbmUuaW5wdXRNb2NrRnVuY3Rpb247XHJcbiAgICAgICAgLy8gVE9ETzogQWxsb3cgaW5wdXQgZnVuY3Rpb24gdG8gZGlzYWJsZSB0aGUgdGltZXIsIHNvbWVob3dcclxuICAgICAgICAvLyBFbmFibGUgdXRpbGl0eSBtb2RlXHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gVVRJTElUWV9NT0RVTEVfQ09ERTtcclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCIuL19pbnN0cnVjdG9yL19faW5pdF9fLmpzXCJdID0gRU1QVFlfTU9EVUxFO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiLi9hbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9vbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fZXZhbC5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU2suYnVpbHRpbkZpbGVzID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJGaWxlIG5vdCBmb3VuZDogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25DaGFuZ2VDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIm9uX2NoYW5nZS5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmlnZ2VyT25DaGFuZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge05FV19MSU5FX1JFR0VYfSBmcm9tIFwiLi9vbl9ydW5cIjtcclxuaW1wb3J0IHtpbmRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV1JBUF9JTlNUUlVDVE9SX0NPREUgPSBmdW5jdGlvbiAoc3R1ZGVudENvZGUsIGluc3RydWN0b3JDb2RlLCBxdWljaywgaXNTYWZlKSB7XHJcbiAgICBsZXQgc2FmZUNvZGUgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50Q29kZSk7XHJcbiAgICBsZXQgaW5kZW50ZWRDb2RlID0gaW5kZW50KGluZGVudChpc1NhZmUgPyBzdHVkZW50Q29kZSA6IFwiTm9uZVwiKSk7XHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSlcclxuZGVmIHJ1bl9zdHVkZW50KCk6XHJcbiAgICAjIGxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHRyeTpcclxuJHtpbmRlbnRlZENvZGV9XHJcbiAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGVycm9yOlxyXG4gICAgICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgcmV0dXJuIE5vbmVcclxuZnJvbSBwZWRhbC5zYW5kYm94IGltcG9ydCBjb21wYXRpYmlsaXR5XHJcbmZyb20gdXRpbGl0eSBpbXBvcnQgKlxyXG5zdHVkZW50ID0gZ2V0X3N0dWRlbnRfZGF0YSgpXHJcbmNvbXBhdGliaWxpdHkuc2V0X3NhbmRib3goc3R1ZGVudClcclxuZXJyb3IsIHBvc2l0aW9uID0gZ2V0X3N0dWRlbnRfZXJyb3IoKVxyXG5jb21wYXRpYmlsaXR5LnJhaXNlX2V4Y2VwdGlvbihlcnJvciwgcG9zaXRpb24pXHJcbmNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnQgPSBydW5fc3R1ZGVudFxyXG5jb21wYXRpYmlsaXR5LmdldF9wbG90cyA9IGdldF9wbG90c1xyXG5jb21wYXRpYmlsaXR5LmdldF9vdXRwdXQgPSBnZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkucmVzZXRfb3V0cHV0ID0gcmVzZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkudHJhY2VfbGluZXMgPSB0cmFjZV9saW5lc1xyXG5kZWYgY2FwdHVyZV9vdXRwdXQoZnVuYywgKmFyZ3MpOlxyXG4gICByZXNldF9vdXRwdXQoKVxyXG4gICBmdW5jKCphcmdzKVxyXG4gICByZXR1cm4gZ2V0X291dHB1dCgpXHJcbmNvbXBhdGliaWxpdHkuY2FwdHVyZV9vdXRwdXQgPSBjYXB0dXJlX291dHB1dFxyXG4ke2luc3RydWN0b3JDb2RlfVxyXG5mcm9tIHBlZGFsLnJlc29sdmVycyBpbXBvcnQgc2ltcGxlXHJcblNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREUgPSBzaW1wbGUucmVzb2x2ZSgpXHJcbmA7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT25FdmFsQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ldmFsXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgc3R1ZGVudENvZGVTYWZlID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnN0dWRlbnQuZXZhbHVhdGlvbiB8fCBcIk5vbmVcIjtcclxuICAgICAgICB0aGlzLmR1bW15T3V0U2FuZGJveCgpO1xyXG4gICAgICAgIGxldCBpbnN0cnVjdG9yQ29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICBsZXQgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGlzU2FmZSA9IHJlcG9ydFtcInBhcnNlclwiXS5zdWNjZXNzICYmIHJlcG9ydFtcInZlcmlmaWVyXCJdLnN1Y2Nlc3M7XHJcbiAgICAgICAgaW5zdHJ1Y3RvckNvZGUgPSBXUkFQX0lOU1RSVUNUT1JfQ09ERShzdHVkZW50Q29kZVNhZmUsIGluc3RydWN0b3JDb2RlLCBmYWxzZSwgaXNTYWZlKTtcclxuICAgICAgICBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aCAtIGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHtcclxuICAgICAgICAgICAgXCJjb21wbGltZW50c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBcIi4vX2luc3RydWN0b3Ivb25fZXZhbC5weVwiLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogaW5zdHJ1Y3RvckNvZGUsXHJcbiAgICAgICAgICAgIFwibGluZU9mZnNldFwiOiBsaW5lT2Zmc2V0XHJcbiAgICAgICAgICAgIC8vJ2NvbXBsZXRlJzogZmFsc2UgLy8gQWN0dWFsbHksIGxldCdzIHVzZSB1bmRlZmluZWQgZm9yIG5vdy5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGluc3RydWN0b3JDb2RlO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgLy9Tay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25FdmFsIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgLy8gVE9ETzogQWN0dWFsbHkgcGFyc2UgcmVzdWx0c1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzID0gU2suZ2xvYmFscztcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IG1vZHVsZS4kZC5vbl9ldmFsLiRkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZHVsZS4kZCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKHJlc3VsdHMpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3VjY2VzcyA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TVUNDRVNTKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Y2Nlc3MgfHwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpKTtcclxuICAgICAgICAvLyBDYW5ub3QgZXhjZWVkIDEgcG9pbnQsIGNhbm5vdCBnbyBiZWxvdyAwIHBvaW50c1xyXG4gICAgICAgIGxldCBzY29yZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TQ09SRSk7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heCgwLjAsIE1hdGgubWluKDEuMCwgc2NvcmUpKTtcclxuICAgICAgICBsZXQgb2xkU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKE1hdGgubWF4KG9sZFNjb3JlLCBzY29yZSkpO1xyXG4gICAgICAgIC8vIEhpZGUgc3RhdHVzXHJcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuSElERSk7XHJcbiAgICAgICAgLy8gQW5kIGZpcmUgdGhlIHJlc3VsdCFcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvbihzY29yZSwgc3VjY2VzcywgaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIC8vYWZ0ZXIobW9kdWxlKTtcclxuXHJcbiAgICAgICAgaWYgKCFTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbkV2YWwgZmFpbHVyZVwiKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIkdyYWNlZnVsRXhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJjb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJlcnJvclwiXSA9IGVycm9yO1xyXG4gICAgICAgICAgICAvL1RPRE86IHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJsaW5lX29mZnNldFwiXSA9IGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogYWZ0ZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtpbmRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXX0xJTkVfUkVHRVggPSAvXFxyXFxufFxccnxcXG4vO1xyXG4vKipcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdSQVBfSU5TVFJVQ1RPUl9DT0RFID0gZnVuY3Rpb24gKHN0dWRlbnRDb2RlLCBpbnN0cnVjdG9yQ29kZSwgcXVpY2ssIGlzU2FmZSkge1xyXG4gICAgbGV0IHNhZmVDb2RlID0gSlNPTi5zdHJpbmdpZnkoc3R1ZGVudENvZGUpO1xyXG4gICAgbGV0IGluZGVudGVkQ29kZSA9IGluZGVudChpbmRlbnQoaXNTYWZlID8gc3R1ZGVudENvZGUgOiBcInBhc3NcIikpO1xyXG4gICAgbGV0IHRpZmFBbmFseXNpcyA9IFwiXCI7XHJcbiAgICBpZiAoIXF1aWNrKSB7XHJcbiAgICAgICAgdGlmYUFuYWx5c2lzID0gXCJmcm9tIHBlZGFsLnRpZmEgaW1wb3J0IHRpZmFfYW5hbHlzaXNcXG50aWZhX2FuYWx5c2lzKEZhbHNlKVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgXHJcbmZyb20gcGVkYWwucmVwb3J0IGltcG9ydCAqXHJcbmZyb20gcGVkYWwuc291cmNlIGltcG9ydCBzZXRfc291cmNlXHJcbnNldF9zb3VyY2UoJHtzYWZlQ29kZX0pXHJcbmRlZiBydW5fc3R1ZGVudCgpOlxyXG4gICAgIyBsaW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICB0cnk6XHJcbiR7aW5kZW50ZWRDb2RlfVxyXG4gICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlcnJvcjpcclxuICAgICAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHJldHVybiBOb25lXHJcbiR7dGlmYUFuYWx5c2lzfVxyXG5mcm9tIHBlZGFsLnNhbmRib3ggaW1wb3J0IGNvbXBhdGliaWxpdHlcclxuZnJvbSB1dGlsaXR5IGltcG9ydCAqXHJcbnN0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuY29tcGF0aWJpbGl0eS5zZXRfc2FuZGJveChzdHVkZW50KVxyXG5lcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbmNvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudCA9IHJ1bl9zdHVkZW50XHJcbmNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzID0gZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkuZ2V0X291dHB1dCA9IGdldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXQgPSByZXNldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIGZ1bmMoKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcbmZyb20gcGVkYWwuY2FpdC5jYWl0X2FwaSBpbXBvcnQgcGFyc2VfcHJvZ3JhbVxyXG4ke2luc3RydWN0b3JDb2RlfVxyXG5mcm9tIHBlZGFsLnJlc29sdmVycyBpbXBvcnQgc2ltcGxlXHJcblNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREUgPSBzaW1wbGUucmVzb2x2ZSgpXHJcbiNwcmludChNQUlOX1JFUE9SVC5mZWVkYmFja1swXS5taXN0YWtlWydlcnJvciddKVxyXG5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uUnVuQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ydW5cIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5kdW1teU91dFNhbmRib3goKTtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgICAgbGV0IGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpc1NhZmUgPSByZXBvcnRbXCJwYXJzZXJcIl0uc3VjY2VzcyAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZmFsc2UsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX3J1bi5weVwiLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogaW5zdHJ1Y3RvckNvZGUsXHJcbiAgICAgICAgICAgIFwibGluZU9mZnNldFwiOiBsaW5lT2Zmc2V0XHJcbiAgICAgICAgICAgIC8vJ2NvbXBsZXRlJzogZmFsc2UgLy8gQWN0dWFsbHksIGxldCdzIHVzZSB1bmRlZmluZWQgZm9yIG5vdy5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIC8vIFRPRE8gTG9nZ2luZyEhISFcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uUnVuIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgLy8gVE9ETzogQWN0dWFsbHkgcGFyc2UgcmVzdWx0c1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzID0gU2suZ2xvYmFscztcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fcnVuLiRkO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25SdW4gZmFpbHVyZVwiKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIkdyYWNlZnVsRXhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJjb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJlcnJvclwiXSA9IGVycm9yO1xyXG4gICAgICAgICAgICAvL1RPRE86IHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJsaW5lX29mZnNldFwiXSA9IGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogYWZ0ZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL29uX3J1blwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIE9uUnVuQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fcnVuLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSdW5Db25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGVcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICBlbmdpbmUucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhcnNlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVGaWxlKFwiYW5zd2VyLnB5XCIsIHRoaXMuY29kZSwgbnVsbCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcInZlcmlmaWVyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogQm9vbGVhbih0aGlzLmNvZGUudHJpbSgpKSxcclxuICAgICAgICAgICAgXCJjb2RlXCI6IHRoaXMuY29kZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBzdWNjZXNzXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKFNrLmdsb2JhbHMpO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LnJlc3VsdHMgPSBtb2R1bGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRXZhbHVhdGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmJlZ2luRXZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAobW9kdWxlLiRkLCBtb2R1bGUuJGQsLTEsIDAsIGZpbGVuYW1lICsgXCIucHlcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFjZVwiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UsXHJcbiAgICAgICAgICAgICAgICBcImxpbmVzXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5tYXAoeCA9PiB4LmxpbmUpLFxyXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRzXCI6IG1vZHVsZSxcclxuICAgICAgICAgICAgICAgIFwib3V0cHV0XCI6IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW4gZmFpbHVyZVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAocmVwb3J0LnBhcnNlci5zdWNjZXNzICYmIHJlcG9ydC52ZXJpZmllci5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGUuRXJyb3JcIiwgXCJcIiwgXCJcIiwgZXJyb3IudG9TdHJpbmcoKSwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiUnVuLlByb2dyYW1cIiwgXCJQcm9ncmFtRXJyb3JPdXRwdXRcIiwgXCJcIiwgZXJyb3IudG9TdHJpbmcoKSwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhbXBsZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gVE9ETzogRml4IHRvIGJlIHRoZSBjdXJyZW50IHNhbXBsZSBzdWJtaXNzaW9uXHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gXCJwcmludCgnTm90IHJlYWR5IHlldCEnKVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29uZmlndXJhdGlvbiwgRU1QVFlfTU9EVUxFfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0dWRlbnRDb25maWd1cmF0aW9uIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gTGltaXQgZXhlY3V0aW9uIHRvIDUgc2Vjb25kc1xyXG4gICAgICAgIGxldCBzZXR0aW5ncyA9IHRoaXMubWFpbi5tb2RlbC5zZXR0aW5ncztcclxuICAgICAgICBTay5leGVjTGltaXRGdW5jdGlvbiA9ICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVUaW1lb3V0KCkgPyBJbmZpbml0eSA6IDEwMDAwO1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKCk7XHJcbiAgICAgICAgLy8gU3RlcHBlciEgRXhlY3V0ZWQgYWZ0ZXIgZXZlcnkgc3RhdGVtZW50LlxyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gdGhpcy5zdGVwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy8gVW5tdXRlIGV2ZXJ5dGhpbmdcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcihmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIGNhbGwgYWZ0ZXIgZWFjaCBzdGVwXHJcbiAgICAgICAgLy8gYWZ0ZXJTaW5nbGVFeGVjdXRpb25cclxuICAgICAgICAvLyBQcm94eSByZXF1ZXN0c1xyXG4gICAgICAgIFNrLnJlcXVlc3RzR2V0ID0gKGZpbGVuYW1lKSA9PiB0aGlzLm9wZW5VUkwoZmlsZW5hbWUsIFwidXJsXCIpO1xyXG5cclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3V0aWxpdHkvX19pbml0X18uanNcIl0gPSBFTVBUWV9NT0RVTEU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ZvcmJpZGRlbihmaWxlbmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJGaWxlIG5vdCBhY2Nlc3NpYmxlOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9hbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU2suYnVpbHRpbkZpbGVzID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJGaWxlIG5vdCBmb3VuZDogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuaW5wdXQocHJvbXB0TWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGb3JiaWRkZW4oZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZmlsZW5hbWUuc3RhcnRzV2l0aChcInNyYy9saWIvdXRpbGl0eS9cIikgfHxcclxuICAgICAgICAgICAgZmlsZW5hbWUuc3RhcnRzV2l0aChcInNyYy9saWIvcGVkYWwvXCIpIHx8XHJcbiAgICAgICAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCIuL19pbnN0cnVjdG9yL1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFwiU3RlcHNcIiB0aGUgZXhlY3V0aW9uIG9mIHRoZSBjb2RlLCBtZWFudCB0byBiZSB1c2VkIGFzIGEgY2FsbGJhY2sgdG8gdGhlIFNrdWxwdFxyXG4gICAgICogZW52aXJvbm1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhcmlhYmxlcyAtIEhhc2ggdGhhdCBtYXBzIHRoZSBuYW1lcyBvZiB2YXJpYWJsZXMgKFN0cmluZ3MpIHRvIHRoZWlyIFNrdWxwdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsaW5lTnVtYmVyIC0gVGhlIGNvcnJlc3BvbmRpbmcgbGluZSBudW1iZXIgaW4gdGhlIHNvdXJjZSBjb2RlIHRoYXQgaXMgYmVpbmcgZXhlY3V0ZWQuXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uTnVtYmVyIC0gVGhlIGNvcnJlc3BvbmRpbmcgY29sdW1uIG51bWJlciBpbiB0aGUgc291cmNlIGNvZGUgdGhhdCBpcyBiZWluZyBleGVjdXRlZC5cclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGluayBvZiBpdCBhcyB0aGUgXCJYXCIgcG9zaXRpb24gdG8gdGhlIGxpbmVOdW1iZXIncyBcIllcIiBwb3NpdGlvbi5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBweXRob24gZmlsZSBiZWluZyBleGVjdXRlZCAoZS5nLiwgXCJfX21haW5fXy5weVwiKS5cclxuICAgICAqL1xyXG4gICAgc3RlcCh2YXJpYWJsZXMsIGxvY2FscywgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFN0ZXAgPSB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcDtcclxuICAgICAgICAgICAgbGV0IGdsb2JhbHMgPSB0aGlzLm1haW4uY29tcG9uZW50cy50cmFjZS5wYXJzZUdsb2JhbHModmFyaWFibGVzKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogVHJhY2UgbG9jYWwgdmFyaWFibGVzIHByb3Blcmx5XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZ2xvYmFscywgbG9jYWxzKTtcclxuICAgICAgICAgICAgLy9sZXQgbG9jYWxzID0gdGhpcy5tYWluLmNvbXBvbmVudHMudHJhY2UucGFyc2VHbG9iYWxzKGxvY2Fscyk7XHJcbiAgICAgICAgICAgIC8vT2JqZWN0LmFzc2lnbihnbG9iYWxzLCBsb2NhbHMpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBcInN0ZXBcIjogY3VycmVudFN0ZXAsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVuYW1lXCI6IGZpbGVuYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8nYmxvY2snOiBoaWdobGlnaHRNYXBbbGluZU51bWJlci0xXSxcclxuICAgICAgICAgICAgICAgIFwibGluZVwiOiBsaW5lTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJjb2x1bW5cIjogY29sdW1uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IGdsb2JhbHMucHJvcGVydGllcyxcclxuICAgICAgICAgICAgICAgIFwibW9kdWxlc1wiOiBnbG9iYWxzLm1vZHVsZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwID0gY3VycmVudFN0ZXAgKyAxO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZSA9IGxpbmVOdW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBhdCB0aGUgZW5kIG9mIHRoZSBTa3VscHQgZXhlY3V0aW9uIHRvIHRlcm1pbmF0ZSB0aGUgZXhlY3V0aW9uQnVmZmVyXHJcbiAgICAgKiBhbmQgaGFuZCBpdCBvZmYgdG8gdGhlIGV4ZWN1dGlvbiB0cmFjZSBpbiB0aGUgbW9kZWwuXHJcbiAgICAgKi9cclxuICAgIGxhc3RTdGVwKCkge1xyXG4gICAgICAgIGxldCBleGVjdXRpb24gPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50U3RlcCh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRMaW5lKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5sYXN0TGluZSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5zdXJlIHRoYXQgdGhlIHBhcnNlIGluZm9ybWF0aW9uIGlzIHVwLXRvLWRhdGVcclxuICAgICAqL1xyXG4gICAgdXBkYXRlUGFyc2UoKSB7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICAvLyBBdHRlbXB0IGEgcGFyc2VcclxuICAgICAgICBsZXQgYXN0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJzZSA9IFNrLnBhcnNlKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIGFzdCA9IFNrLmFzdEZyb21QYXJzZShwYXJzZS5jc3QsIHRoaXMuZmlsZW5hbWUsIHBhcnNlLmZsYWdzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBSZXBvcnQgdGhlIGVycm9yXHJcbiAgICAgICAgICAgIHJlcG9ydFtcInBhcnNlclwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3JcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3VjY2Vzc2Z1bCBwYXJzZVxyXG4gICAgICAgIHJlcG9ydFtcInBhcnNlclwiXSA9IHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYXN0XCI6IGFzdFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgbGV0IEZFRURCQUNLX0hUTUwgPSBgXG5cbjxzcGFuIGNsYXNzPSdibG9ja3B5LWZsb2F0aW5nLWZlZWRiYWNrIHRleHQtbXV0ZWQtbGVzcyBwdWxsLXJpZ2h0IHBvc2l0aW9uLXN0aWNreSBzdGlja3ktdG9wJ1xuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhcmlhLWxhYmVsPVwiTmV3IEZlZWRiYWNrIEFsZXJ0XCI+XG4gICAgTmV3IGZlZWRiYWNrICZ1YXJyO1xuPC9zcGFuPlxuXG48ZGl2IGNsYXNzPSdibG9ja3B5LWZlZWRiYWNrIGNvbC1tZC02IGJsb2NrcHktcGFuZWwnXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkZlZWRiYWNrXCJcbiAgICAgICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPlxuXG4gICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1aS5zZWNvbmRSb3cuc3dpdGNoTGFiZWxcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG5cbiAgICA8IS0tIEFjdHVhbCBGZWVkYmFjayBSZWdpb24gLS0+ICAgIFxuICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmc+RmVlZGJhY2s6IDwvc3Ryb25nPlxuICAgICAgICA8c3BhbiBjbGFzcz0nYmFkZ2UgYmxvY2tweS1mZWVkYmFjay1jYXRlZ29yeSBmZWVkYmFjay1iYWRnZSdcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczogdWkuZmVlZGJhY2suYmFkZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVpLmZlZWRiYWNrLmNhdGVnb3J5XCI+RmVlZGJhY2sgS2luZDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nIGNsYXNzPVwiYmxvY2tweS1mZWVkYmFjay1sYWJlbFwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ0ZXh0OiBleGVjdXRpb24uZmVlZGJhY2subGFiZWxcIj48L3N0cm9uZz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrcHktZmVlZGJhY2stbWVzc2FnZVwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJodG1sOiBleGVjdXRpb24uZmVlZGJhY2subWVzc2FnZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+ICAgICAgICAgICAgXG5gO1xuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZlZWRiYWNrIHtcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCB0aGF0IG1hbmFnZXMgdGhlIGZlZWRiYWNrIGFyZWEsIHdoZXJlIHVzZXJzIGFyZSB0b2xkIHRoZSBzdGF0ZSBvZiB0aGVpclxuICAgICAqIHByb2dyYW0ncyBleGVjdXRpb24gYW5kIGdpdmVuIGd1aWRhbmNlLiBBbHNvIG1hbmFnZXMgdGhlIGNyZWF0aW9uIG9mIHRoZSBUcmFjZSBUYWJsZS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEB0aGlzIHtCbG9ja1B5RmVlZGJhY2t9XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2s7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1jYXRlZ29yeVwiKTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1sYWJlbFwiKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLW1lc3NhZ2VcIik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBzY3JlZW4gKHRha2VzIDEgc2Vjb25kKSB0byBtYWtlIHRoZSBGZWVkYmFjayBhcmVhIHZpc2libGUuXG4gICAgICovXG4gICAgc2Nyb2xsSW50b1ZpZXcoKSB7XG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnRhZy5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGZlZWRiYWNrIGFyZWEgaXMgY3VycmVudGx5IHZpc2libGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0ZlZWRiYWNrVmlzaWJsZSgpIHtcbiAgICAgICAgbGV0IHRvcF9vZl9lbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wO1xuICAgICAgICBsZXQgYm90dG9tX29mX2VsZW1lbnQgPSB0aGlzLnRhZy5vZmZzZXQoKS50b3AgKyB0aGlzLnRhZy5vdXRlckhlaWdodCgpO1xuICAgICAgICBsZXQgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHRvcF9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIC8vYm90dG9tX29mX2VsZW1lbnQgLT0gNDA7IC8vIFVzZXIgZnJpZW5kbHkgcGFkZGluZ1xuICAgICAgICByZXR1cm4gKChib3R0b21fb2Zfc2NyZWVuID4gdG9wX29mX2VsZW1lbnQpICYmICh0b3Bfb2Zfc2NyZWVuIDwgYm90dG9tX29mX2VsZW1lbnQpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFueSBvdXRwdXQgY3VycmVudGx5IGluIHRoZSBmZWVkYmFjayBhcmVhLiBBbHNvIHJlc2V0cyB0aGUgcHJpbnRlciBhbmRcbiAgICAgKiBhbnkgaGlnaGxpZ2h0ZWQgbGluZXMgaW4gdGhlIGVkaXRvci5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UoXCIqUmVhZHkqXCIpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkobnVsbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmhpZGRlbihmYWxzZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQucmVtb3ZlQWxsKCk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBmaW5kRmlyc3RFcnJvckxpbmUoZmVlZGJhY2tEYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBmZWVkYmFja0RhdGEubGVuZ3RoLTE7IGkgPj0gMDsgaS09IDEpIHtcbiAgICAgICAgICAgIGlmIChcInBvc2l0aW9uXCIgaW4gZmVlZGJhY2tEYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZlZWRiYWNrRGF0YVtpXS5wb3NpdGlvbi5saW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBtb2RlbCB3aXRoIHRoZXNlIG5ldyBleGVjdXRpb24gcmVzdWx0c1xuICAgICAqIEBwYXJhbSBleGVjdXRpb25SZXN1bHRzXG4gICAgICovXG4gICAgdXBkYXRlRmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICAvLyBQYXJzZSBvdXQgZGF0YVxuICAgICAgICBsZXQgbWVzc2FnZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5NRVNTQUdFKTtcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkNBVEVHT1JZKTtcbiAgICAgICAgbGV0IGxhYmVsID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkxBQkVMKTtcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuSElERSk7XG4gICAgICAgIGxldCBkYXRhID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkRBVEEpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGJhc2VkIG9uIGFzc2lnbm1lbnRzJyBzZXR0aW5nc1xuICAgICAgICBsZXQgaGlkZVNjb3JlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCk7XG4gICAgICAgIGlmIChoaWRlU2NvcmUgJiYgY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgICAgICBsYWJlbCA9IFwiTm8gZXJyb3JzXCI7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJObyBlcnJvcnMgcmVwb3J0ZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWFwIHRvIGV4cGVjdGVkIEJsb2NrUHkgbGFiZWxzXG4gICAgICAgIGlmIChjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImluc3RydWN0b3JcIiAmJiBsYWJlbC50b0xvd2VyQ2FzZSgpID09PSBcImV4cGxhaW5cIikge1xuICAgICAgICAgICAgbGFiZWwgPSBcIkluc3RydWN0b3IgRmVlZGJhY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IHByZXNlbnQgYSBsYWNrIG9mIGVycm9yIGFzIGJlaW5nIGluY29ycmVjdFxuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbW9kZWwgYWNjb3JkaW5nbHlcbiAgICAgICAgbWVzc2FnZSA9IHRoaXMubWFpbi51dGlsaXRpZXMubWFya2Rvd24obWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobGFiZWwpO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJJbnRlcnZlbnRpb25cIiwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBcImFuc3dlci5weVwiKTtcblxuICAgICAgICAvLyBGaW5kIHRoZSBmaXJzdCBlcnJvciBvbiBhIGxpbmUgYW5kIHJlcG9ydCB0aGF0XG4gICAgICAgIGxldCBsaW5lID0gQmxvY2tQeUZlZWRiYWNrLmZpbmRGaXJzdEVycm9yTGluZShkYXRhKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmIChsaW5lICE9PSBudWxsICYmIGxpbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucHVzaChsaW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEludmVydCB0aGUgc2V0IG9mIHRyYWNlZCBsaW5lc1xuICAgICAgICBsZXQgc3R1ZGVudFJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5zdHVkZW50O1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmIChzdHVkZW50UmVwb3J0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8PSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdExpbmU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzdHVkZW50UmVwb3J0LmxpbmVzLmluZGV4T2YoaSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXNlbnQgYW55IGFjY3VtdWxhdGVkIGZlZWRiYWNrXG4gICAgICovXG4gICAgcHJlc2VudEZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKTtcblxuICAgICAgICAvLyBUT0RPOiBMb2dnaW5nXG4gICAgICAgIC8vdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiZmVlZGJhY2tcIiwgY2F0ZWdvcnkrXCJ8XCIrbGFiZWwsIG1lc3NhZ2UpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0ZlZWRiYWNrVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUZlZWRiYWNrVXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbm90aWZ5RmVlZGJhY2tVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mbG9hdGluZy1mZWVkYmFja1wiKS5zaG93KCkuZmFkZU91dCg3MDAwKTtcbiAgICB9O1xuXG4gICAgcHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIGZpbGVuYW1lRXhlY3V0ZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoXCJpbnRlcm5hbFwiKTtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5sYWJlbChcIkludGVybmFsIEVycm9yXCIpO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBcbiAgICAgICAgICAgIEVycm9yIGluIGluc3RydWN0b3IgZmVlZGJhY2suXG4gICAgICAgICAgICBQbGVhc2Ugc2hvdyB0aGUgZm9sbG93aW5nIHRvIGFuIGluc3RydWN0b3I6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxwcmU+PHN0cm9uZz4ke2Vycm9yLnRwJG5hbWV9PC9zdHJvbmc+OiAke1NrLmZmaS5yZW1hcFRvSnMoZXJyb3IuYXJncyl9PC9wcmU+YDtcblxuICAgICAgICBpZiAoZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCB0cmFjZWJhY2tGb3JtYXR0ZWQ9IGVycm9yLnRyYWNlYmFjay5tYXAoZnJhbWUgPT5cbiAgICAgICAgICAgICAgICBgRmlsZSA8c3BhbiBjbGFzcz1cImZpbGVuYW1lXCI+XCIke2ZyYW1lLmZpbGVuYW1lfVwiPC9zcGFuPiwgbGluZSA8c3BhbiBjbGFzcz1cImxpbmVub1wiPiR7ZnJhbWUubGluZW5vfTwvc3Bhbj5cXG5gKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgPHByZT4ke3RyYWNlYmFja0Zvcm1hdHRlZH08L3ByZT5gO1xuICAgICAgICAgICAgbGV0IGxhc3RfdHJhY2ViYWNrID0gZXJyb3IudHJhY2ViYWNrLnNsaWNlKC0xKVswXTtcbiAgICAgICAgICAgIGlmIChsYXN0X3RyYWNlYmFjay5maWxlbmFtZSA9PT0gZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICAgICAgICAgIGxhc3RfdHJhY2ViYWNrLmxpbmVubyAtPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuaW5zdHJ1Y3Rvci5saW5lX29mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG59IiwiY29uc3QgbWFrZVRhYiA9IGZ1bmN0aW9uKGZpbGVuYW1lLCBmcmllbmRseU5hbWUsIGhpZGVJZkVtcHR5KSB7XHJcbiAgICBpZiAoZnJpZW5kbHlOYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmcmllbmRseU5hbWUgPSBmaWxlbmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBgXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LmZpbGVuYW1lKCkgPT09ICcke2ZpbGVuYW1lfSd9LFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgJyR7ZmlsZW5hbWV9JyksXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAhJHtoaWRlSWZFbXB0eX0gfHwgdWkuZmlsZXMuaGFzQ29udGVudHMoJyR7ZmlsZW5hbWV9JylcIj5cclxuICAgICAgICAgICAgJHtmcmllbmRseU5hbWV9PC9hPlxyXG4gICAgPC9saT5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBGSUxFU19IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1maWxlc1wiXHJcbiAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5maWxlcy52aXNpYmxlXCI+XHJcbjx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcblxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8c3Ryb25nPlZpZXc6IDwvc3Ryb25nPlxyXG4gICAgPC9saT5cclxuXHJcbiAgICAke21ha2VUYWIoXCJhbnN3ZXIucHlcIil9XHJcbiAgICAke21ha2VUYWIoXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiSW5zdHJ1Y3Rpb25zXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiLCBcIlNldHRpbmdzXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCJTdGFydGluZyBDb2RlXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX3J1bi5weVwiLCBcIk9uIFJ1blwiKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9jaGFuZ2UucHlcIiwgXCJPbiBDaGFuZ2VcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhb25fZXZhbC5weVwiLCBcIk9uIEV2YWxcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCI/bW9ja191cmxzLmJsb2NrcHlcIiwgXCJVUkwgRGF0YVwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiLCBcIlNhbXBsZSBTdWJtaXNzaW9uc1wiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiF0YWdzLmJsb2NrcHlcIiwgXCJUYWdzXCIsIHRydWUpfVxyXG4gIFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPkFkZCBOZXc8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/bW9ja191cmxzLmJsb2NrcHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnP21vY2tfdXJscy5ibG9ja3B5JylcIj5VUkwgRGF0YTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3RhZ3MuYmxvY2tweScpXCI+VGFnczwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3NhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5JylcIj5TYW1wbGUgU3VibWlzc2lvbnM8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnIW9uX2NoYW5nZS5weScpXCI+T24gQ2hhbmdlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IGFzc2lnbm1lbnQub25FdmFsXCI+T24gRXZhbDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TdGFydGluZyBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkluc3RydWN0b3IgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TdHVkZW50IEZpbGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gIFxyXG48L3VsPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbi8qKlxyXG4gKiBGaWxlbmFtZXMgbGl2ZSBpbiBvbmUgb2YgZml2ZSBwb3NzaWJsZSBuYW1lc3BhY2VzOlxyXG4gKiAgSW5zdHJ1Y3RvciAoISk6IEludmlzaWJsZSB0byB0aGUgc3R1ZGVudCB1bmRlciBhbGwgY2lyY3Vtc3RhbmNlc1xyXG4gKiAgU3RhcnQgU3BhY2UgKF4pOiBVc2VkIHRvIHJlc2V0IHRoZSBzdHVkZW50IG5hbWVzcGFjZVxyXG4gKiAgU3R1ZGVudCBTcGFjZSAoKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCB3aGVuIGRpc3BsYXkuaGlkZUZpbGVzIGlzIG5vdCB0cnVlLCBhYmxlIHRvIGJlIGVkaXRlZFxyXG4gKiAgSGlkZGVuIFNwYWNlICg/KTogTm90IGRpcmVjdGx5IHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBhY2Nlc3NpYmxlIHByb2dyYW1tYXRpY2FsbHlcclxuICogIFJlYWQtb25seSBTcGFjZSAoJik6IEFuIGluc3RydWN0b3IgZmlsZSB0eXBlIHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBpcyB1bmVkaXRhYmxlIGJ5IHRoZW1cclxuICogIFNlY3JldCBTcGFjZSAoJCk6IE5vdCB2aXNpYmxlIGZyb20gdGhlIG1lbnUgYXQgYWxsLCBzb21lIG90aGVyIG1lY2hhbmlzbSBjb250cm9scyBpdFxyXG4gKiAgR2VuZXJhdGVkIFNwYWNlICgqKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGRlc3Ryb3llZCBhZnRlciBFbmdpbmUuQ2xlYXIuIENhbiBzaGFkb3cgYW4gYWN0dWFsIGZpbGUuXHJcbiAqICBDb25jYXRlbmF0ZWQgU3BhY2UgKCMpOiBVc2VkIHdoZW4gYnVuZGxpbmcgYSBzcGFjZSBmb3IgdGhlIHNlcnZlci5cclxuICovXHJcblxyXG5leHBvcnQgbGV0IFNUQVJUSU5HX0ZJTEVTID0gW1xyXG4gICAgLy8gU3VibWlzc2lvblxyXG4gICAgXCJhbnN3ZXIucHlcIixcclxuICAgIC8vIEluc3RydWN0b3IgZmlsZXNcclxuICAgIFwiIWluc3RydWN0aW9ucy5tZFwiLFxyXG4gICAgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsXHJcbiAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsXHJcbiAgICBcIiFvbl9ydW4ucHlcIixcclxuICAgIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNJQ19ORVdfRklMRVMgPSBbXHJcbiAgICBcIiFvbl9jaGFuZ2UucHlcIixcclxuICAgIFwiIW9uX2V2YWwucHlcIixcclxuICAgIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICBcIiF0YWdzLmJsb2NrcHlcIixcclxuICAgIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCJcclxuXTtcclxuXHJcbmNvbnN0IERFTEVUQUJMRV9TSU1QTEVfRklMRVMgPSBbXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIl07XHJcblxyXG5leHBvcnQgY29uc3QgVU5ERUxFVEFCTEVfRklMRVMgPSBbXCJhbnN3ZXIucHlcIiwgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCIhb25fcnVuLnB5XCIsIFwiJHNldHRpbmdzLmJsb2NrcHlcIl07XHJcblxyXG5leHBvcnQgY29uc3QgVU5SRU5BTUFCTEVfRklMRVMgPSBbXCJhbnN3ZXIucHlcIiwgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCIhb25fcnVuLnB5XCIsIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIW9uX2NoYW5nZS5weVwiLCBcIiFvbl9ldmFsLnB5XCIsIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiF0YWdzLmJsb2NrcHlcIiwgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIl07XHJcblxyXG5jbGFzcyBCbG9ja1B5RmlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLm93bmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhhbmRsZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgcmV0dXJuIHtcImZpbGVuYW1lXCI6IGtvLm9ic2VydmFibGUoZmlsZW5hbWUpLCBjb250ZW50czoga28ub2JzZXJ2YWJsZShjb250ZW50cyB8fCBcIlwiKX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29uY2F0ZW5hdGVkRmlsZShjb25jYXRlbmF0ZWRGaWxlLCBtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICBpZiAoY29uY2F0ZW5hdGVkRmlsZSkge1xyXG4gICAgICAgIGxldCBmaWxlcyA9IEpTT04ucGFyc2UoY29uY2F0ZW5hdGVkRmlsZSk7XHJcbiAgICAgICAgZmlsZXMgPSBmaWxlcy5tYXAoZmlsZSA9PiBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUsIGZpbGUuY29udGVudHMpKTtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KGZpbGVzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1vZGVsRmlsZUxpc3QoKS5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUuZmlsZW5hbWUoKSxcclxuICAgICAgICAgICAgY29udGVudHM6IGZpbGUuY29udGVudHMoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICByZXR1cm4ga28ucHVyZUNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdCgpLmZvckVhY2goZmlsZSA9PlxyXG4gICAgICAgICAgICByZXN1bHRbZmlsZS5maWxlbmFtZSgpXSA9IGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0cyBhd2F5IGRhdGFiYXNlIGxvZ2ljXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZpbGVTeXN0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlc18gPSB7fTtcclxuICAgICAgICB0aGlzLm1vdW50RmlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy53YXRjaE1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy53YXRjaGVzXyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoRmlsZShmaWxlbmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIShmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSkge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wV2F0Y2hpbmdGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoTW9kZWwoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzeXN0ZW0gPSB0aGlzO1xyXG4gICAgICAgIFt0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMsXHJcbiAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzXS5mb3JFYWNoKGZpbGVBcnJheSA9PlxyXG4gICAgICAgICAgICBmaWxlQXJyYXkuc3Vic2NyaWJlKGZ1bmN0aW9uKGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGVsRmlsZSA9IGNoYW5nZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJhZGRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyYWNrIG5ldyBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gZmlsZXN5c3RlbS5uZXdGaWxlKG1vZGVsRmlsZS5maWxlbmFtZSgpLCBtb2RlbEZpbGUuY29udGVudHMoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXN5c3RlbS5ub3RpZnlXYXRjaGVzKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXN5c3RlbS5kZWxldGVGaWxlTG9jYWxseV8obW9kZWxGaWxlLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgdGhpcywgXCJhcnJheUNoYW5nZVwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYW5zd2VyLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBmaXJzdCBlbGVtZW50IG9mIHN1Ym1pc3Npb24uY29kZSlcclxuICAgIC8vICFvbl9ydW4ucHksICFvbl9jaGFuZ2UucHksICFvbl9ldmFsLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZWxldmFudCBhc3NpZ25tZW50Ljx3aGF0ZXZlcj5cclxuICAgIC8vIF5zdGFydGluZ19jb2RlLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBmaXJzdCBlbGVtZW50IG9mIGFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlXHJcbiAgICAvLyBed2hhdGV2ZXJcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9mIGFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlXHJcbiAgICAvLyAhd2hhdGV2ZXIgb3IgP3doYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBlbGVtZW50cyBvZiBhc3NpZ25tZW50LmV4dHJhRmlsZXNcclxuICAgIC8vIE90aGVyd2lzZTpcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9mIHN1Ym1pc3Npb24uY29kZVxyXG4gICAgLyoqXHJcbiAgICAgKiBOZXcgc3BlY2lhbCBmaWxlcyBuZWVkIHRvIGJlIHJlZ2lzdGVyZWQgaGVyZVxyXG4gICAgICogQHBhcmFtIGZpbGUge0Jsb2NrUHlGaWxlfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2ZUZpbGVfKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fY2hhbmdlLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWluc3RydWN0aW9ucy5tZFwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJec3RhcnRpbmdfY29kZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIXRhZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQudGFncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiRzZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIl5cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIiFcIikgfHwgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiP1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ic2VydmVJbkFycmF5XyhmaWxlLCBhcnJheSkge1xyXG4gICAgICAgIGZpbGUub3duZXIgPSBhcnJheTtcclxuICAgICAgICBsZXQgY29kZUJ1bmRsZSA9IGZpbGUub3duZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBjb2RlQnVuZGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2RlQnVuZGxlW2ldLmZpbGVuYW1lKCkgPT09IGZpbGUuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gY29kZUJ1bmRsZVtpXS5jb250ZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsZS5oYW5kbGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IG5ld0ZpbGUuY29udGVudHM7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2gobmV3RmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50RmlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFvbl9ydW4ucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWluc3RydWN0aW9ucy5tZFwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0ZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzLCBtb2RlbEZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgaW4gdGhpcy5maWxlc18pIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBhbHJlYWR5IGV4aXN0cyEgSnVzdCB1cGRhdGUgaXRzIGhhbmRsZVxyXG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdGaWxlID0gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgICAgICBleGlzdGluZ0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICBleGlzdGluZ0ZpbGUuaGFuZGxlKGNvbnRlbnRzIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdGaWxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZpbGUgZG9lcyBub3QgZXhpc3RcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBuZXcgQmxvY2tQeUZpbGUodGhpcy5tYWluLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXSA9IG5ld0ZpbGU7XHJcbiAgICAgICAgICAgIGlmIChtb2RlbEZpbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlRmlsZV8obmV3RmlsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdGaWxlLmhhbmRsZSA9IG1vZGVsRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3RmlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIGNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZpbGVuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxvYmplY3R9IFRoZSBpbmZvIGFib3V0IHRoZSBmaWxlLCBvciBmYWxzZSBpZiBpdCBjb3VsZCBub3QgYmUgZGVsZXRlZFxyXG4gICAgICovXHJcbiAgICBkZWxldGVGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKERFTEVUQUJMRV9TSU1QTEVfRklMRVMuaW5kZXhPZihmaWxlbmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlID0gdGhpcy5kZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZShudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXJzIGEgY2FsbGJhY2sgdG8gZXZlbnR1YWxseSBjYWxsIGRlbGV0ZUZpbGVMb2NhbGx5X1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIucmVtb3ZlKG1vZGVsRmlsZSA9PiBtb2RlbEZpbGUuZmlsZW5hbWUgPT09IGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kIHx8IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBkZWxldGUgdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2suZGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5V2F0Y2hlcyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGUuZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sudXBkYXRlZChmaWxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy9UT0RPOiBNb3ZlIGdldCBsaW5rIGRvd24gdG8gZm9vdGVyLCByZW1vdmUgdmVydGljYWwgYmFyIGZyb20gcXVpY2stbWVudVxyXG5leHBvcnQgbGV0IEZPT1RFUl9IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1zdGF0dXNcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkQXNzaWdubWVudCcpXCI+TG9hZCBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlQXNzaWdubWVudCcpXCI+U2F2ZSBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRmlsZScpXCI+TG9hZCBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlRmlsZScpXCI+U2F2ZSBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRGF0YXNldCcpXCI+TG9hZCBEYXRhc2V0PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2dFdmVudCcpXCI+TG9nIEV2ZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCd1cGRhdGVTdWJtaXNzaW9uJylcIj5VcGRhdGUgU3VibWlzc2lvbjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnb25FeGVjdXRpb24nKVwiPkV4ZWN1dGlvbjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVpLnNlcnZlci5tZXNzYWdlc1wiPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5Vc2VyOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmlkXCI+PC9zcGFuPiAoPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5uYW1lXCI+PC9zcGFuPik8L3NwYW4+LCBcclxuICAgICAgICA8c3Bhbj5Db3Vyc2U6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuY291cnNlSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Hcm91cDogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5ncm91cElkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudDogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogYXNzaWdubWVudC5pZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkFzc2lnbm1lbnQgVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogYXNzaWdubWVudC52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+U3VibWlzc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi5pZFwiPjwvc3Bhbj48L3NwYW4+LCBcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uIFZlcnNpb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHN1Ym1pc3Npb24udmVyc2lvblwiPjwvc3Bhbj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7IiwiaW1wb3J0IHtUUkFDRV9IVE1MfSBmcm9tIFwidHJhY2UuanNcIjtcbmltcG9ydCB7RElBTE9HX0hUTUx9IGZyb20gXCJkaWFsb2cuanNcIjtcbmltcG9ydCB7RkVFREJBQ0tfSFRNTH0gZnJvbSBcImZlZWRiYWNrLmpzXCI7XG5pbXBvcnQge0ZJTEVTX0hUTUx9IGZyb20gXCJmaWxlcy5qc1wiO1xuaW1wb3J0IHtGT09URVJfSFRNTH0gZnJvbSBcImZvb3Rlci5qc1wiO1xuaW1wb3J0IHtFRElUT1JTX0hUTUx9IGZyb20gXCJlZGl0b3JzLmpzXCI7XG5pbXBvcnQge0NPTlNPTEVfSFRNTH0gZnJvbSBcImNvbnNvbGUuanNcIjtcblxuLyoqXG4gKiBAZW51bSB7c3RyfVxuICovXG5leHBvcnQgbGV0IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyA9IHtcbiAgICBGRUVEQkFDSzogXCJmZWVkYmFja1wiLFxuICAgIFRSQUNFOiBcInRyYWNlXCIsXG4gICAgTk9ORTogXCJub25lXCJcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKSB7XG4gICAgbGV0IGhpZ2hsaWdodFRpbWVvdXQgPSBudWxsO1xuICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5jdXJyZW50LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmIChoaWdobGlnaHRUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlnaGxpZ2h0VGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgaGlnaGxpZ2h0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXIuZmluZChcIi5ibG9ja3B5LWluc3RydWN0aW9ucyBwcmUgY29kZVwiKS5tYXAoIChpLCBibG9jaykgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5obGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA0MDApO1xuICAgIH0pO1xufVxuXG4vLyBUT0RPOiBHZXQgc2hhcmVhYmxlIGxpbmsgYnV0dG9uXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlSW50ZXJmYWNlKG1haW4pIHtcbiAgICByZXR1cm4gYFxuPGRpdiBjbGFzcz0nYmxvY2tweS1jb250ZW50IGNvbnRhaW5lci1mbHVpZCc+XG5cbiAgICA8IS0tIERpYWxvZyAtLT5cbiAgICAke0RJQUxPR19IVE1MfVxuICAgIFxuICAgIDwhLS0gSGlkZGVuIENhcHR1cmUgQ2FudmFzIC0tPlxuICAgIDxjYW52YXMgaWQ9J2NhcHR1cmUtY2FudmFzJyBjbGFzcz0nZC1ub25lJyByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9jYW52YXM+XG4gICAgXG4gICAgPCEtLSBSb3cgMTogSGVhZGVyIGFuZCBRdWljayBNZW51IC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgICAgICBcbiAgICAgICAgIDwhLS0gRGVzY3JpcHRpb24gLS0+XG4gICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtMTAgYmxvY2tweS1wYW5lbCBibG9ja3B5LWhlYWRlcidcbiAgICAgICAgICAgICAgIHJvbGU9J2hlYWRpbmcnIGFyaWEtbGFiZWw9J0Fzc2lnbm1lbnQgRGVzY3JpcHRpb24nPlxuICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIEFzc2lnbm1lbnQgTmFtZSAtLT5cbiAgICAgICAgICAgIDxzcGFuIHJvbGU9J2hlYWRpbmcnIGFyaWEtbGV2ZWw9JzEnXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrcHktbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QmxvY2tQeTogPC9zdHJvbmc+IFxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogYXNzaWdubWVudC5uYW1lJz48L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gUmVzZXQgSW5zdHJ1Y3Rpb25zIEJ1dHRvbiAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LWluc3RydWN0aW9ucy1yZXNldFwiXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuaW5zdHJ1Y3Rpb25zLmlzQ2hhbmdlZFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuaW5zdHJ1Y3Rpb25zLnJlc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICBSZXNldCBpbnN0cnVjdGlvbnM8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBJbnN0cnVjdGlvbnMgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LWluc3RydWN0aW9ucydcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaHRtbDogdWkuaW5zdHJ1Y3Rpb25zLmN1cnJlbnRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1tZC0yIGJsb2NrcHktcGFuZWwgYmxvY2tweS1xdWljay1tZW51J1xuICAgICAgICAgICAgIHJvbGU9J21lbnViYXInIGFyaWEtbGFiZWw9J1F1aWNrIE1lbnUnIHRpdGxlPVwiUXVpY2sgTWVudVwiPlxuICAgICAgICAgICAgPCEtLSBHZXQgU2hhcmVhYmxlIExpbmsgLS0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICBHZXQgc2hhcmVhYmxlIGxpbms8L2J1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gVmlldyBhcyBpbnN0cnVjdG9yIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIlxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5yb2xlLmlzR3JhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgaWQ9XCJibG9ja3B5LWFzLWluc3RydWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBkaXNwbGF5Lmluc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIFZpZXcgYXMgaW5zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAyOiBDb25zb2xlIGFuZCBGZWVkYmFjayAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgIFxuICAgICAgICA8IS0tIENvbnNvbGUgLS0+XG4gICAgICAgICR7Q09OU09MRV9IVE1MfVxuICAgICAgICAgXG4gICAgICAgIDwhLS0gRmVlZGJhY2sgLS0+XG4gICAgICAgIDwhLS0ga28gaWY6IHVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSAtLT5cbiAgICAgICAgJHtGRUVEQkFDS19IVE1MfVxuICAgICAgICA8IS0tIC9rbyAtLT5cbiAgICAgICAgXG4gICAgICAgIDwhLS0gVHJhY2UgLS0+XG4gICAgICAgIDwhLS0ga28gaWY6IHVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSAtLT5cbiAgICAgICAgJHtUUkFDRV9IVE1MfVxuICAgICAgICA8IS0tIC9rbyAtLT5cbiAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwhLS0gUm93IDM6IEZpbGUgTmF2aWdhdGlvbiAtLT5cbiAgICA8IS0tIGtvIGlmOiB1aS5maWxlcy52aXNpYmxlIC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgICAgICR7RklMRVNfSFRNTH1cbiAgICA8L2Rpdj5cbiAgICA8IS0tIC9rbyAtLT5cbiAgICBcbiAgICA8IS0tIFZpZXcgUm93IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgJHtFRElUT1JTX0hUTUx9XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIEZvb3RlciBSb3cgLS0+ICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgJHtGT09URVJfSFRNTH1cbiAgICA8L2Rpdj5cbiAgICBcbjwvZGl2PlxuICAgIGA7XG59OyIsImltcG9ydCB7TG9jYWxTdG9yYWdlV3JhcHBlcn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG4vKipcbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgbGV0IFN0YXR1c1N0YXRlID0ge1xuICAgIFJFQURZOiBcInJlYWR5XCIsXG4gICAgQUNUSVZFOiBcImFjdGl2ZVwiLFxuICAgIFJFVFJZSU5HOiBcInJldHJ5aW5nXCIsXG4gICAgRkFJTEVEOiBcImZhaWxlZFwiLFxuICAgIE9GRkxJTkU6IFwib2ZmbGluZVwiXG59O1xuXG4vKipcbiAqIE9iamVjdCBmb3IgY29tbXVuaWNhdGluZyB3aXRoIHRoZSBleHRlcm5hbCBzZXJ2ZXJzLiBUaGlzIGluY2x1ZGVzIGZ1bmN0aW9uYWxpdHkgZm9yXG4gKiBzYXZpbmcgYW5kIGxvYWRpbmcgZmlsZXMsIGxvZ2dpbmcgZXZlbnRzLCBzYXZpbmcgY29tcGxldGlvbnMsIGFuZCByZXRyaWV2aW5nIGhpc3RvcnkuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeVNlcnZlcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeVNlcnZlcihtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcblxuICAgIC8vIFNhdmUgVVJMcyBsb2NhbGx5IGZvciBxdWlja2VyIGFjY2Vzc1xuICAgIHRoaXMudXJscyA9IG1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzO1xuXG4gICAgLy8gQWRkIHRoZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvblxuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2VXcmFwcGVyKFwiQkxPQ0tQWVwiKTtcblxuICAgIC8vIEZhdWx0UmVzaXN0YW50Q2FjaGVcbiAgICB0aGlzLnF1ZXVlID0ge1xuICAgICAgICBcImxvZ0V2ZW50XCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJsb2dFdmVudFwiLCBcIltdXCIpKSxcbiAgICAgICAgXCJ1cGRhdGVTdWJtaXNzaW9uXCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFwiW11cIikpXG4gICAgfTtcbiAgICB0aGlzLk1BWF9RVUVVRV9TSVpFID0ge1xuICAgICAgICBcImxvZ0V2ZW50XCI6IDIwMCxcbiAgICAgICAgXCJ1cGRhdGVTdWJtaXNzaW9uXCI6IDUwXG4gICAgfTtcblxuICAgIHRoaXMuVElNRVJfREVMQVkgPSAxMDAwO1xuICAgIHRoaXMuRkFJTF9ERUxBWSA9IDIwMDA7XG5cbiAgICB0aGlzLnRpbWVycyA9IHt9O1xuXG4gICAgdGhpcy5vdmVybGF5ID0gbnVsbDtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgPSAwO1xuXG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMgPSBbXTtcbiAgICB0aGlzLmNyZWF0ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB0aGlzLmNoZWNrQ2FjaGVzKCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIElQIGFkZHJlc3MgaGFzIGNoYW5nZWQsIGxvZ2dpbmcgYW4gZXZlbnQgaWYgdGhhdCBvY2N1cnMuXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY2hlY2tJUCA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwiSVBcIikpIHtcbiAgICAgICAgICAgIGxldCBvbGRJUCA9IHRoaXMuc3RvcmFnZS5nZXQoXCJJUFwiKTtcbiAgICAgICAgICAgIGlmIChvbGRJUCAhPT0gcmVzcG9uc2UuaXApIHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgXCJvbGRcIjogb2xkSVAsXG4gICAgICAgICAgICAgICAgICAgIFwibmV3XCI6IHJlc3BvbnNlLmlwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dFdmVudChcIlgtSVAuQ2hhbmdlXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFwiSVBcIiwgcmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGVyZSBoYXZlIGJlZW4gcHJldmlvdXMgZmFpbHVyZXMgY2FjaGVkLCBhbmQgaWYgc28gcmV0cmllcyB0aGVtLlxuICogVE9ETzogdXBkYXRlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrQ2FjaGVzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJzYXZlQXNzaWdubWVudFwiKSk7XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBcImFzc2lnbm1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F2ZUFzc2lnbm1lbnRcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgfVxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzLmZvckVhY2goKGZpbGVuYW1lKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJzYXZlRmlsZVwiICsgZmlsZW5hbWUpKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgXCJzYXZlRmlsZVwiLCB0aGlzLlRJTUVSX0RFTEFZKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucXVldWUpLmZvckVhY2goZnVuY3Rpb24gKGVuZHBvaW50KSB7XG4gICAgICAgIChmdW5jdGlvbiBwdXNoQW55UXVldWVkKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIucXVldWVbZW5kcG9pbnRdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2Uoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5wb3AoKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBzZXJ2ZXIudXJsc1tlbmRwb2ludF07XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlci5fcG9zdFJldHJ5KGRhdGEsIGVuZHBvaW50LCAxMDAwLCBwdXNoQW55UXVldWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKHtcInN1Y2Nlc3NcIjogdHJ1ZX0pO1xuICAgIH0pO1xufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChtb2RlbCwgZmlsZW5hbWUpIHtcbiAgICBtb2RlbC5zdWJzY3JpYmUoKGNvbnRlbnRzKSA9PlxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5hdXRvU2F2ZSgpID8gdGhpcy5zYXZlRmlsZShmaWxlbmFtZSwgY29udGVudHMpIDogZmFsc2UsIHRoaXMpO1xuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzLnB1c2goZmlsZW5hbWUpO1xufTtcblxuLyoqXG4gKiBUT0RPOiBmaXhcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnN1Ym1pc3Npb24uY29kZSwgXCJhbnN3ZXIucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25SdW4sIFwiIW9uX3J1bi5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vbkV2YWwsIFwiIW9uX2V2YWwucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UsIFwiIW9uX2NoYW5nZS5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMsIFwiIWluc3RydWN0aW9ucy5tZFwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUsIFwiXnN0YXJ0aW5nX2NvZGUucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhU3R1ZGVudEZpbGVzLCBcIiNleHRyYVN0dWRlbnRGaWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0YXJ0aW5nRmlsZXMsIFwiI2V4dHJhU3RhcnRpbmdGaWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYUluc3RydWN0b3JGaWxlcywgXCIjZXh0cmFJbnN0cnVjdG9yRmlsZXMuYmxvY2tweVwiKTtcbiAgICAvKlxuICAgIG1vZGVsLmFzc2lnbm1lbnQubmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24oZSkgeyBzZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKTt9KTtcblxuICAgIG1vZGVsLmFzc2lnbm1lbnQucGFyc29ucy5zdWJzY3JpYmUoZnVuY3Rpb24oZSkgeyBzZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKTsgfSk7XG4gICAgbW9kZWwuYXNzaWdubWVudC5pbXBvcnRhYmxlLnN1YnNjcmliZShmdW5jdGlvbihlKSB7IHNlcnZlci5zYXZlQXNzaWdubWVudCgpOyB9KTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LnNlY3JldC5zdWJzY3JpYmUoZnVuY3Rpb24oZSkgeyBzZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKTsgfSk7XG4gICAgbW9kZWwuYXNzaWdubWVudC5kaXNhYmxlX2FsZ29yaXRobV9lcnJvcnMuc3Vic2NyaWJlKGZ1bmN0aW9uKGUpIHsgc2VydmVyLnNhdmVBc3NpZ25tZW50KCk7IH0pO1xuICAgIG1vZGVsLmFzc2lnbm1lbnQuZGlzYWJsZV90aW1lb3V0LnN1YnNjcmliZShmdW5jdGlvbihlKSB7IHNlcnZlci5zYXZlQXNzaWdubWVudCgpOyB9KTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LmluaXRpYWxfdmlldy5zdWJzY3JpYmUoZnVuY3Rpb24oZSkgeyBzZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKTsgfSk7XG4gICAgbW9kZWwuYXNzaWdubWVudC5maWxlcy5zdWJzY3JpYmUoZnVuY3Rpb24oZSkgeyBzZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKTsgfSk7XG4gICAgLy9tb2RlbC5zZXR0aW5ncy5lZGl0b3Iuc3Vic2NyaWJlKGZ1bmN0aW9uKG5ld1ZhbHVlKSB7IHNlcnZlci5sb2dFdmVudCgnZWRpdG9yJywgbmV3VmFsdWUpOyB9KTtcbiAgICBtb2RlbC5leGVjdXRpb24uc2hvd190cmFjZS5zdWJzY3JpYmUoZnVuY3Rpb24obmV3VmFsdWUpIHsgc2VydmVyLmxvZ0V2ZW50KFwidHJhY2VcIiwgbmV3VmFsdWUpOyB9KTtcbiAgICBtb2RlbC5leGVjdXRpb24udHJhY2Vfc3RlcC5zdWJzY3JpYmUoZnVuY3Rpb24obmV3VmFsdWUpIHsgc2VydmVyLmxvZ0V2ZW50KFwidHJhY2Vfc3RlcFwiLCBuZXdWYWx1ZSk7IH0pO1xuICAgICAqL1xufTtcblxuLyoqXG4gKlxuICogU29tZSBzdWJzY3JpcHRpb25zIGhhdmUgdG8gaGFwcGVuIGFmdGVyIG90aGVyIHRoaW5ncyBoYXZlIGJlZW4gbG9hZGVkLlxuICogUmlnaHQgbm93IHRoaXMgaXMganVzdCBhZnRlciBDT1JHSVMgbGlicmFyaWVzIGhhdmUgYmVlbiBsb2FkZWQsIGJ1dCBtYXliZVxuICogd2UnbGwgYWRkIG1vcmUgbGF0ZXIgYW5kIHRoaXMgd2lsbCBuZWVkIHRvIGJlIHJlZmFjdG9yZWQuXG4gKlxuICogVE9ETzogZml4XG4gKlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5maW5hbGl6ZVN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy90aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0cy5zdWJzY3JpYmUodGhpcy5zYXZlQXNzaWdubWVudC5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZGVmYXVsdCBwYXlsb2FkIGZvciBhbnkgY29tbXVuaWNhdGlvbiB3aXRoIHRoZSBzZXJ2ZXIgQVBJXG4gKiBAcmV0dXJucyB7e2Fzc2lnbm1lbnRfaWQ6ICosIGNvdXJzZV9pZDogKiwgZ3JvdXBfaWQ6ICosIHVzZXJfaWQ6ICosIHRpbWV6b25lOiAqLCB2ZXJzaW9uOiAqLCB0aW1lc3RhbXA6ICp9fVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVTZXJ2ZXJEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhc3NpZ25tZW50ID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQ7XG4gICAgbGV0IHVzZXIgPSB0aGlzLm1haW4ubW9kZWwudXNlcjtcbiAgICBsZXQgc3VibWlzc2lvbiA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uO1xuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBtaWNyb3NlY29uZHMgPSBub3cuZ2V0VGltZSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIFwiYXNzaWdubWVudF9pZFwiOiBhc3NpZ25tZW50LmlkKCksXG4gICAgICAgIFwiYXNzaWdubWVudF9ncm91cF9pZFwiOiB1c2VyLmdyb3VwSWQoKSxcbiAgICAgICAgXCJjb3Vyc2VfaWRcIjogdXNlci5jb3Vyc2VJZCgpLFxuICAgICAgICBcInN1Ym1pc3Npb25faWRcIjogc3VibWlzc2lvbi5pZCgpLFxuICAgICAgICBcInVzZXJfaWRcIjogdXNlci5pZCgpLFxuICAgICAgICBcInZlcnNpb25cIjogYXNzaWdubWVudC52ZXJzaW9uKCksXG4gICAgICAgIFwidGltZXN0YW1wXCI6IG1pY3Jvc2Vjb25kcyxcbiAgICAgICAgXCJ0aW1lem9uZVwiOiBub3cuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgIH07XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBhbmQgbWVzc2FnZSBmb3IgdGhlIHJlbGV2YW50IGVuZHBvaW50LlxuICogQHBhcmFtIGVuZHBvaW50IHtzdHJpbmd9IG9uZSBvZiB0aGUgVVJMIGVuZHBvaW50c1xuICogQHBhcmFtIHN0YXR1cyB7U3RhdHVzU3RhdGV9XG4gKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nP31cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2V0U3RhdHVzID0gZnVuY3Rpb24gKGVuZHBvaW50LCBzdGF0dXMsIG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzW2VuZHBvaW50XShzdGF0dXMpO1xuICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXNbZW5kcG9pbnQgKyBcIk1lc3NhZ2VcIl0obWVzc2FnZSB8fCBcIlwiKTtcbn07XG5cbi8qKlxuICogUmVuZGVycyBhbiBvdmVybGF5IG9uIHRoZSBzY3JlZW4gdGhhdCBibG9ja3Mgb3BlcmF0aW9uIHVudGlsIHRoZSBzeXN0ZW0gaXMgcmVhZHkuXG4gKiBUaGUgb3ZlcmxheSBnZXRzIHByb2dyZXNzaXZlbHkgZGFya2VyIHRvIGluZGljYXRlIHJlcGVhdGVkIGZhaWx1cmVzLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zaG93T3ZlcmxheSA9IGZ1bmN0aW9uIChhdHRlbXB0KSB7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzICs9IDE7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvY2tweS1vdmVybGF5XCIpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSAkKCc8ZGl2IGNsYXNzPVwiYmxvY2tweS1vdmVybGF5XCI+IDwvZGl2PicpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG4gICAgfVxuICAgIHN3aXRjaCAoYXR0ZW1wdCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM5ODhcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjNjU1XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzMzM1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJibGFja1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG5cbi8qKlxuICogVW5kbyBhIGxldmVsIG9mIG92ZXJsYXk7IGlmIHRoaXMgd2FzIHRoZSBsYXN0IGxldmVsLCByZW1vdmVzIGl0IGZyb20gdGhlIHNjcmVlbi5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuaGlkZU92ZXJsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzIC09IDE7XG4gICAgaWYgKHRoaXMuYmxvY2tpbmdBdHRlbXB0cyA8PSAwKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5yZW1vdmUoKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZW5xdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICAvLyBFbnN1cmUgd2UgaGF2ZSBub3Qgb3ZlcmZpbGxlZCB0aGUgcXVldWVcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5xdWV1ZVtjYWNoZV0ubGVuZ3RoO1xuICAgIGxldCBtYXggPSB0aGlzLk1BWF9RVUVVRV9TSVpFW2NhY2hlXTtcbiAgICBpZiAobGVuZ3RoID4gbWF4KSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdID0gdGhpcy5xdWV1ZVtjYWNoZV0uc2xpY2UobGVuZ3RoIC0gbWF4LCBtYXgpO1xuICAgIH1cbiAgICAvLyBPbmx5IGFkZCB0aGUgZWxlbWVudCBpZiBpdCdzIG5ld1xuICAgIGxldCBrZXkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnF1ZXVlW2NhY2hlXS5pbmRleE9mKGtleSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXS5wdXNoKGtleSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX2RlcXVldWVEYXRhID0gZnVuY3Rpb24gKGNhY2hlLCBkYXRhKSB7XG4gICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbY2FjaGVdLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXS5zcGxpY2UoaW5kZXgpO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXVlW2NhY2hlXSkpO1xuICAgIH1cbn07XG5cblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RSZXRyeSA9IGZ1bmN0aW9uIChkYXRhLCBlbmRwb2ludCwgZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgbGV0IHBvc3RSZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgdGhpcy5fZW5xdWV1ZURhdGEoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlcXVldWVEYXRhKGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlLmlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIHRoZW4gbGV0J3MgdHJ5IGl0IGFnYWluIGluIGEgYml0XG4gICAgICAgICAgICAuZmFpbCgoZXJyb3IsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIGVuZHBvaW50LCBkZWxheSArIHRoaXMuRkFJTF9ERUxBWSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoZGVsYXkgPT09IG51bGwpIHtcbiAgICAgICAgcG9zdFJlcXVlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KHBvc3RSZXF1ZXN0LCBkZWxheSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBNYWtlIGEgQUpBWCByZXF1ZXN0IHRoYXQsIHVwb24gZmFpbHVyZSwgd2lsbCBjaGVjayB0byBzZWUgaWYgdGhpcyB3YXMgdGhlXG4gKiBsYXRlc3QgYXR0ZW1wdCBmb3IgdGhpcyBgY2FjaGVgIG1hcmtlci4gSWYgc28sIGl0IHdpbGwgYXR0ZW1wdCBhZ2FpbiB1bnRpbFxuICogc3VjY2Vzc2Z1bDsgb3RoZXJ3aXNlLCBpdCBnaXZlcyB1cCB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBBSkFYLXJlYWR5IGRhdGEgdG8gYmUgcG9zdGVkXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgdW5pcXVlIG5hbWUgZ2l2ZW4gdG8gdGhlIHJlbGV2YW50IHRpbWVyXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5kcG9pbnQgLSBUaGUgdW5pcXVlIG5hbWUgZ2l2ZW4gdG8gdGhlIHJlbGV2YW50IGNhY2hlIGVudHJ5XG4gKiBAcGFyYW0ge0ludGVnZXJ9IGRlbGF5IC0gVGhlIGN1cnJlbnQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZVxuIHRyeWluZyB0aGUgcmVxdWVzdCBhZ2Fpbi5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RMYXRlc3RSZXRyeSA9IGZ1bmN0aW9uIChkYXRhLCBmaWxlbmFtZSwgZW5kcG9pbnQsIGRlbGF5KSB7XG4gICAgbGV0IGNhY2hlID0gZW5kcG9pbnQgKyBmaWxlbmFtZTtcbiAgICBsZXQgcmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhIGJhY2t1cCBvZiB0aGUgY3VycmVudCBwb3N0XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICAgICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgY2xlYXIgaXQgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBjb25uZWN0ZWQgYnV0IGZhaWxlZCwgZG9uJ3QgdHJ5IGFnYWluIGJ1dCBsZXQgdGhlIHVzZXIga25vdyB3aHkuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZhaWwoKGVycm9yLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCB0aGVuIGxldCdzIHRyeSBpdCBhZ2FpbiBpbiBhIGJpdFxuICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBlbmRwb2ludCwgZGVsYXkgKyB0aGlzLkZBSUxfREVMQVkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJzW2NhY2hlXSk7XG4gICAgaWYgKGRlbGF5ID09PSBudWxsKSB7XG4gICAgICAgIHJlcXVlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbWVyc1tjYWNoZV0gPSBzZXRUaW1lb3V0KHJlcXVlc3QsIGRlbGF5KTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdEJsb2NraW5nID0gZnVuY3Rpb24gKGVuZHBvaW50LCBkYXRhLCBhdHRlbXB0cywgc3VjY2VzcywgZmFpbHVyZSkge1xuICAgIHRoaXMuc2hvd092ZXJsYXkoYXR0ZW1wdHMpO1xuICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBpZiAoZmFpbHVyZSkge1xuICAgICAgICAgICAgICAgICAgICBmYWlsdXJlKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKGVuZHBvaW50LCBkYXRhLCBhdHRlbXB0cyAtIDEsIHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkQXNzaWdubWVudCA9IGZ1bmN0aW9uIChhc3NpZ25tZW50X2lkKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJhc3NpZ25tZW50X2lkXCJdID0gYXNzaWdubWVudF9pZDtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwibG9hZEFzc2lnbm1lbnRcIiwgZGF0YSwgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5sb2FkQXNzaWdubWVudERhdGFfKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvYWRBc3NpZ25tZW50XCIsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvYWRBc3NpZ25tZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVBc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJzYXZlQXNzaWdubWVudFwiKSAmJlxuICAgICAgICBtb2RlbC5kaXNwbGF5LmF1dG9TYXZlKCkpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImludHJvZHVjdGlvblwiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaW50cm9kdWN0aW9uKCk7XG4gICAgICAgIGRhdGFbXCJwYXJzb25zXCJdID0gbW9kZWwuYXNzaWdubWVudC5wYXJzb25zKCk7XG4gICAgICAgIGRhdGFbXCJpbml0aWFsXCJdID0gbW9kZWwuYXNzaWdubWVudC5pbml0aWFsX3ZpZXcoKTtcbiAgICAgICAgZGF0YVtcImltcG9ydGFibGVcIl0gPSBtb2RlbC5hc3NpZ25tZW50LmltcG9ydGFibGUoKTtcbiAgICAgICAgZGF0YVtcInNlY3JldFwiXSA9IG1vZGVsLmFzc2lnbm1lbnQuc2VjcmV0KCk7XG4gICAgICAgIGRhdGFbXCJkaXNhYmxlX2FsZ29yaXRobV9lcnJvcnNcIl0gPSBtb2RlbC5hc3NpZ25tZW50LmRpc2FibGVfYWxnb3JpdGhtX2Vycm9ycygpO1xuICAgICAgICBkYXRhW1wiZGlzYWJsZV90aW1lb3V0XCJdID0gbW9kZWwuYXNzaWdubWVudC5kaXNhYmxlX3RpbWVvdXQoKTtcbiAgICAgICAgZGF0YVtcIm5hbWVcIl0gPSBtb2RlbC5hc3NpZ25tZW50Lm5hbWUoKTtcbiAgICAgICAgLy8gVE9ETzogaGFja2lzaCwgYnJva2VuIGlmICcsJyBpcyBpbiBuYW1lXG4gICAgICAgIGRhdGFbXCJtb2R1bGVzXCJdID0gbW9kZWwuYXNzaWdubWVudC5tb2R1bGVzKCkuam9pbihcIixcIik7XG4gICAgICAgIGRhdGFbXCJmaWxlc1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQuZmlsZXMoKS5qb2luKFwiLFwiKTtcblxuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgdGhpcy51cmxzLnNhdmVfYXNzaWdubWVudCwgXCJhc3NpZ25tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFTU0lHTk1FTlRTX0NBQ0hFXCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiT2ZmbGluZVwiLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoU2F2ZSBBc3NpZ25tZW50KVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5nZXRIaXN0b3J5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImdldF9oaXN0b3J5XCIpKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcodGhpcy51cmxzLmdldF9oaXN0b3J5LCBkYXRhLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlci5zZXRTdGF0dXMoXCJFcnJvclwiLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIk9mZmxpbmVcIiwgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKEdldCBIaXN0b3J5KVwiKTtcbiAgICAgICAgY2FsbGJhY2soW10pO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvZ0V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50X3R5cGUsIGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgZmlsZV9wYXRoKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvZ0V2ZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJldmVudF90eXBlXCJdID0gZXZlbnRfdHlwZTtcbiAgICAgICAgZGF0YVtcImNhdGVnb3J5XCJdID0gY2F0ZWdvcnk7XG4gICAgICAgIGRhdGFbXCJsYWJlbFwiXSA9IGxhYmVsO1xuICAgICAgICBkYXRhW1wibWVzc2FnZVwiXSA9IG1lc3NhZ2U7XG4gICAgICAgIGRhdGFbXCJmaWxlX3BhdGhcIl0gPSBmaWxlX3BhdGg7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9nRXZlbnRcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBcImxvZ0V2ZW50XCIsIDAsICgpID0+IHtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2dFdmVudFwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gbG9hZCBmaWxlcyBhbmQgd2ViIHJlc291cmNlcy5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9hZEZpbGUgPSBmdW5jdGlvbiAoZmlsZW5hbWUsIHR5cGUsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgdmFyIG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRfZmlsZVwiKSkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZmlsZW5hbWVcIl0gPSBmaWxlbmFtZTtcbiAgICAgICAgZGF0YVtcInR5cGVcIl0gPSB0eXBlO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcodGhpcy51cmxzLmxvYWRfZmlsZSwgZGF0YSwgNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2socmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlci5zZXRTdGF0dXMoXCJGYWlsdXJlXCIsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKFwiU2VydmVyIGZhaWx1cmUhIFJlcG9ydCB0byBpbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JDYWxsYmFjayhcIk5vIGZpbGUgc2VydmVyIGF2YWlsYWJsZS5cIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiT2ZmbGluZVwiLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoTG9hZCBGaWxlKVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgY29udGVudHMsIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsYXkgPSB0aGlzLlRJTUVSX0RFTEFZO1xuICAgIH1cbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUZpbGVcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImZpbGVuYW1lXCJdID0gZmlsZW5hbWU7XG4gICAgICAgIGRhdGFbXCJjb2RlXCJdID0gY29udGVudHM7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBcInNhdmVGaWxlXCIsIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnVwZGF0ZVN1Ym1pc3Npb24gPSBmdW5jdGlvbiAoc2NvcmUsIGNvcnJlY3QsIGhpZGRlbk92ZXJyaWRlLCBmb3JjZVVwZGF0ZSkge1xuICAgIGxldCBjYWxsYmFjayA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzO1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJ1cGRhdGVTdWJtaXNzaW9uXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJzY29yZVwiXSA9IHNjb3JlO1xuICAgICAgICBkYXRhW1wiY29ycmVjdFwiXSA9IGNvcnJlY3Q7XG4gICAgICAgIGRhdGFbXCJoaWRkZW5fb3ZlcnJpZGVcIl0gPSBoaWRkZW5PdmVycmlkZTtcbiAgICAgICAgZGF0YVtcImZvcmNlX3VwZGF0ZVwiXSA9IGZvcmNlVXBkYXRlO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uYmxvY2tFZGl0b3IuZ2V0UG5nRnJvbUJsb2NrcygocG5nRGF0YSwgaW1nKSA9PiB7XG4gICAgICAgICAgICBkYXRhW1wiaW1hZ2VcIl0gPSBwbmdEYXRhO1xuICAgICAgICAgICAgaWYgKGltZy5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBpbWcucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcInVwZGF0ZVN1Ym1pc3Npb25cIiwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59OyIsIi8qKlxuICogU2t1bHB0IE1vZHVsZSBmb3IgaG9sZGluZyB0aGUgSW5zdHJ1Y3RvciBBUEkuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgbG9hZGVkIGluIGJ5IGdldHRpbmcgdGhlIGZ1bmN0aW9ucycgc291cmNlIGNvZGUgZnJvbSB0b1N0cmluZy5cbiAqIElzbid0IHRoYXQgY3Jhenk/XG4gKlxuICpcbiAqL1xuZXhwb3J0IGxldCAkc2tfbW9kX2luc3RydWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBNYWluIG1vZHVsZSBvYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIGF0IHRoZSBlbmQuXG4gICAgbGV0IG1vZCA9IHt9O1xuICAgIGxldCBub25lID0gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIFxuICAgIGxldCBwcmlvciA9IG51bGw7XG4gICAgbW9kLnRpbWVpdCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidGltZWl0XCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGxldCBkaWZmZXJlbmNlO1xuICAgICAgICBpZiAocHJpb3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IERhdGUubm93KCkgLSBwcmlvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG5hbWUpLCBkaWZmZXJlbmNlLzEwMDApO1xuICAgICAgICBwcmlvciA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBmZWVkYmFjayB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QubG9nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsb2dcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coU2suZmZpLnJlbWFwVG9KcyhtZXNzYWdlKSk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBkZWJ1ZyB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QuZGVidWcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY292ZXJ0cyB0aGUgb3V0cHV0IGluIHRoZSBzdHVkZW50IHJlcG9ydCB0byBhIHB5dGhvbiBcbiAgICAgKiBsaXN0IGFuZCByZXR1cm5zIGl0LlxuICAgICoqL1xuICAgIG1vZC5nZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0Lm1hcChmdW5jdGlvbihpdGVtKSB7IHJldHVybiBpdGVtLnRvU2t1bHB0KCk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChvdXRwdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXNldHMgdGhlIG91dHB1dCwgcGFydGljdWxhcmx5IHVzZWZ1bCBpZiB0aGUgc3R1ZGVudFxuICAgICAqIGNvZGUgaXMgZ29pbmcgdG8gYmUgcmVydW4uXG4gICAgICovXG4gICAgbW9kLnJlc2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJyZXNldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLm91dHB1dC5yZW1vdmVBbGwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIG1vZC5xdWV1ZV9pbnB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJxdWV1ZV9pbnB1dFwiLCBhcmd1bWVudHMsIDEsIEluZmluaXR5KTtcbiAgICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gYXJnc1tpXTtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJpbnB1dFwiLCBcInN0cmluZ1wiLCBTay5idWlsdGluLmNoZWNrU3RyaW5nKGlucHV0KSk7XG4gICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKFNrLmZmaS5yZW1hcFRvSnMoaW5wdXQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9wcm9ncmFtID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wcm9ncmFtXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJ2ZXJpZmllclwiXS5jb2RlKTtcbiAgICB9KTtcbiAgICBcbiAgICBtb2QudHJhY2VfbGluZXMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IGxpbmVzID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ubGluZXM7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShsaW5lcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG1vZC5nZXRfc3R1ZGVudF9lcnJvciA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfc3R1ZGVudF9lcnJvclwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtub25lLCBub25lXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvcixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHt9O1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLnRyYWNlYmFjayAmJiBlcnJvci50cmFjZWJhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uW1wibGluZVwiXSA9IGVycm9yLnRyYWNlYmFja1swXS5saW5lbm87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yID0gbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvc2l0aW9uID0gU2suZmZpLnJlbWFwVG9QeShwb3NpdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4udHVwbGUoW2Vycm9yLCBwb3NpdGlvbl0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICBtb2QuaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImhhZF9leGVjdXRpb25fdGltZV9lcnJvclwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gIVNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MgJiYgXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IgJiZcbiAgICAgICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvci50cCRuYW1lID09PSBcIlRpbWVMaW1pdEVycm9yXCI7XG4gICAgfSk7XG4gICAgXG4gICAgbGV0IGJhY2t1cFRpbWUgPSB1bmRlZmluZWQ7XG4gICAgbW9kLmxpbWl0X2V4ZWN1dGlvbl90aW1lID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxpbWl0X2V4ZWN1dGlvbl90aW1lXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGJhY2t1cFRpbWUgPSBTay5leGVjTGltaXQ7XG4gICAgICAgIGlmIChTay5leGVjTGltaXRGdW5jdGlvbikge1xuICAgICAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcbiAgICAgICAgICAgIFNrLmV4ZWNTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBtb2QudW5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJ1bmxpbWl0X2V4ZWN1dGlvbl90aW1lXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IGJhY2t1cFRpbWU7XG4gICAgICAgIFNrLmV4ZWNTdGFydCA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnN1cHByZXNzX3Njcm9sbGluZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJzdXBwcmVzc19zY3JvbGxpbmdcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBcbiAgICAvKlxuICAgIGRlZiBoaXN0KHNlbGYsIGRhdGEsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0hpc3RvZ3JhbScsICd2YWx1ZXMnOiBkYXRhLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgZGVmIHBsb3Qoc2VsZiwgeHMsIHlzPU5vbmUsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIGlmIHlzID09IE5vbmU6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogcmFuZ2UobGVuKHhzKSksICd5JzogeHMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAgICAgZWxzZTpcbiAgICAgICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0xpbmUnLCAneCc6IHhzLCAneSc6IHlzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgZGVmIHNjYXR0ZXIoc2VsZiwgeHMsIHlzLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdTY2F0dGVyJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgICovXG4gICAgbW9kLmdldF9wbG90cyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfcGxvdHNcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXRzID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl1bXCJvdXRwdXRcIl0oKTtcbiAgICAgICAgICAgIG91dHB1dHMgPSBvdXRwdXRzLmZpbHRlcihmdW5jdGlvbihvdXRwdXQpIHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dC50eXBlID09PSBcInBsb3RcIjtcbiAgICAgICAgICAgIH0pLm1hcChmdW5jdGlvbihncmFwaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XCJkYXRhXCI6IGdyYXBoLm1hcChmdW5jdGlvbihwbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQbG90ID0geyBcInR5cGVcIjogcGxvdC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbG90LnR5cGUgPT09IFwibGluZVwiIHx8IHBsb3QudHlwZSA9PT0gXCJzY2F0dGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ4XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lng7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInlcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxvdC50eXBlID09PSBcImhpc3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInZhbHVlc1wiXSA9IHBsb3QuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3UGxvdDtcbiAgICAgICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICAgICAgXCJ4bGFiZWxcIjogXCJcIiwgXCJ5bGFiZWxcIjogXCJcIiwgXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLCBcImxlZ2VuZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KG91dHB1dHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICAvLyBQcm92aWRlcyBgc3R1ZGVudGAgYXMgYW4gb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHRoYXQgdGhlIHN0dWRlbnQgZGVjbGFyZWQuXG4gICAgbW9kLlN0dWRlbnREYXRhID0gU2subWlzY2V2YWwuYnVpbGRDbGFzcyhtb2QsIGZ1bmN0aW9uKCRnYmwsICRsb2MpIHtcbiAgICAgICAgJGxvYy5fX2luaXRfXyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZikge1xuICAgICAgICAgICAgLy9zZWxmLmRhdGEgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIGxldCBuZXdEaWN0ID0gU2suYnVpbHRpbi5kaWN0KCk7XG4gICAgICAgICAgICBTay5hYnN0ci5zYXR0cihzZWxmLCBTay5idWlsdGluLnN0cihcImRhdGFcIiksIG5ld0RpY3QsIHRydWUpO1xuICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5yZXN1bHRzO1xuICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHNlbGYubW9kdWxlLiRkO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGljdC5tcCRhc3Nfc3Vic2NyaXB0KFNrLmZmaS5yZW1hcFRvUHkoa2V5KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2R1bGVba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkbG9jLmdldF9uYW1lc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X25hbWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU2suZmZpLnJlbWFwVG9QeShwcm9wZXJ0eSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgJGxvYy5nZXRfdmFsdWVzX2J5X3R5cGUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYsIHR5cGUsIGV4Y2x1ZGVfYnVpbHRpbnMpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfdmFsdWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgJiYgcHJvcGVydHkuc3RhcnRzV2l0aChcIl9fXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBtb2Quc3R1ZGVudCA9IFNrLm1pc2NldmFsLmNhbGxzaW1PclN1c3BlbmQobW9kLlN0dWRlbnREYXRhKTtcbiAgICBcbiAgICBtb2QuZ2V0X3N0dWRlbnRfZGF0YSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfc3R1ZGVudF9kYXRhXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBtb2Quc3R1ZGVudDtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbW9kO1xufTtcbiIsIi8qKlxuICogSGVscGVyIG9iamVjdCBmb3IgaW50ZXJmYWNpbmcgd2l0aCB0aGUgTG9jYWxTdG9yYWdlLiBUaGUgTG9jYWxTdG9yYWdlXG4gKiBicm93c2VyIEFQSSBhbGxvd3MgZm9yIG9mZmxpbmUgc3RvcmFnZS4gVGhhdCBBUEkgaXMgdmVyeSB1bnNvcGhpc3RpY2F0ZWQsXG4gKiBhbmQgaXMgZXNzZW50aWFsbHkgYSBsYW1lIGtleS12YWx1ZSBzdG9yZS4gVGhpcyBvYmplY3Qgc2l0cyBvbiB0b3BcbiAqIGFuZCBwcm92aWRlcyBhIG51bWJlciBvZiB1c2VmdWwgdXRpbGl0aWVzLCBpbmNsdWRpbmcgcnVkaW1lbnRhcnljYWNoZVxuICogY2FjaGUgZXhwaXJhdGlvbi5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtMb2NhbFN0b3JhZ2VXcmFwcGVyfVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSAtIEEgbmFtZXNwYWNlIHRvIHVzZSBpbiBncm91cGluZyBhY2Nlc3MgdG8gbG9jYWxzdG9yYWdlLiBUaGlzIGtlZXBzIGFjY2VzcyBjbGVhbiBhbmQgb3JnYW5pemVkLCB3aGlsZSBhbHNvIG1ha2luZyBpdCBwb3NzaWJsZSB0byBoYXZlIG11bHRpcGxlIExvY2FsU3RvcmFnZSBjb25uZWN0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExvY2FsU3RvcmFnZVdyYXBwZXIobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG59XG4vKipcbiAqIEEgbWV0aG9kIGZvciBhZGRpbmcgYSBrZXkvdmFsdWUgcGFpciB0byBMb2NhbFN0b3JhZ2UuXG4gKiBOb3RlIHRoYXQgYm90aCBwYXJhbWV0ZXJzIG11c3QgYmUgc3RyaW5ncyAoSlNPTi5zdHJpbmdpZnkgaXMgeW91ciBmcmllbmQpLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5LlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5zZXQgPSAgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiLCB2YWx1ZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiLCAkLm5vdygpKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJlbW92aW5nIGEga2V5IGZyb20gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJlbW92ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdGltZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdGltZSBmb3IuXG4gKiBAcmV0dXJucyB7SW50ZWdlcn0gLSBUaGUgdGltZXN0YW1wIChsb2NhbCBlcG9jaCkgd2hlbiB0aGUga2V5IHdhcyBsYXN0IHNldC5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICogSWYgdGhlIGtleSBkb2VzIG5vdCBleGlzdCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBpcyB1c2VkIGluc3RlYWQuXG4gKiBUaGlzIGRlZmF1bHQgd2lsbCBiZSBzZXQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBkZWZhdWx0VmFsdWUgLSBUaGUgZGVmYXVsdCB2YWx1ZSB0byB1c2UuIE11c3QgYmUgYSBzdHJpbmcuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldERlZmF1bHQgPSBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICh0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgZ2l2ZW4ga2V5IGlzIGluIExvY2FsU3RvcmFnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIGtleSB0byB0ZXN0IGV4aXN0ZW5jZSBmb3IuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIikgIT09IG51bGw7XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgc2VydmVyIGhhcyB0aGUgbmV3ZXIgdmVyc2lvbi4gVGhpcyBmdW5jdGlvblxuICogYXNzdW1lcyB0aGF0IHRoZSBzZXJ2ZXIgdHJpcCB0YWtlcyBhYm91dCA1IHNlY29uZHMuIFRoaXMgbWV0aG9kXG4gKiBpcyBsYXJnZWx5IGRlcHJlY2F0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHNlcnZlcl90aW1lIC0gVGhlIHNlcnZlcidzIHRpbWUgYXMgYW4gZXBvY2ggKGluIG1pbGxpc2Vjb25kcylcbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaXNfbmV3ID0gZnVuY3Rpb24oa2V5LCBzZXJ2ZXJfdGltZSkge1xuICAgIHZhciBzdG9yZWRfdGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG4gICAgcmV0dXJuIChzZXJ2ZXJfdGltZSA+PSBzdG9yZWRfdGltZSs1MDAwKTtcbn07XG4iLCJleHBvcnQgY29uc3QgVFJBQ0VfSFRNTCA9IGBcclxuXHJcbjxkaXYgY2xhc3M9XCJibG9ja3B5LXRyYWNlIGNvbC1tZC02IGJsb2NrcHktcGFuZWxcIlxyXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIlRyYWNlXCI+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgIDxzdHJvbmc+VHJhY2U6IDwvc3Ryb25nPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0IGJsb2NrcHktaGlkZS10cmFjZSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+IEhpZGUgVHJhY2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zIGJsb2NrcHktdHJhY2UtY29udHJvbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1iYWNrd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmJhY2t3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5TdGVwOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIC8gPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZm9yd2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1mb3J3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UubGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiB1aS50cmFjZS5saW5lJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8dGFibGUgY2xhc3M9J3RhYmxlIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxyXG4gICAgICAgIDxjYXB0aW9uPkN1cnJlbnQgdmFyaWFibGVzIGF0IHRoaXMgc3RlcDwvY2FwdGlvbj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj48dGg+TmFtZTwvdGg+PHRoPlR5cGU8L3RoPjx0aD5WYWx1ZTwvdGg+PC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9XCJmb3JlYWNoOiB1aS50cmFjZS5kYXRhKCkucHJvcGVydGllc1wiPlxyXG4gICAgICAgICAgICA8dHIgZGF0YS1iaW5kPVwidmlzaWJsZTogbmFtZSAhPSAnX19maWxlX18nICYmIG5hbWUgIT0gJ19fcGF0aF9fJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IG5hbWVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IHR5cGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlIGRhdGEtYmluZD1cInRleHQ6IHZhbHVlXCI+PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IHR5cGUgPT0gXCJMaXN0XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGRhdGEtYmluZD1cImNsaWNrOiAvLyRyb290LnZpZXdFeGFjdFZhbHVlKHR5cGUsIGV4YWN0X3ZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLW5ldy13aW5kb3cnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgXHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyYWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLklHTk9SRURfR0xPQkFMUyA9IFtcIl9fbmFtZV9fXCIsIFwiX19kb2NfX1wiLCBcIl9fcGFja2FnZV9fXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc21ldGhvZFwiLCBcInByb3BlcnR5XCIsIFwic3RhdGljbWV0aG9kXCJdO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRyYWNlLmNsaWNrKHRoaXMuYnVpbGRUcmFjZVRhYmxlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3VtZSBhIHNldCBvZiB2YXJpYWJsZXMgdHJhY2VkIGZyb20gdGhlIGV4ZWN1dGlvbiBhbmQgcGFyc2Ugb3V0IGFueVxyXG4gICAgICogZ2xvYmFsIHZhcmlhYmxlcyBhbmQgbW9kdWxlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gYSBtYXBwaW5nIG9mIHZhcmlhYmxlIG5hbWVzIHRvIHRoZWlyIFNrdXB0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwYXJzZUdsb2JhbHModmFyaWFibGVzKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxldCBtb2R1bGVzID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmFjZUV4ZWN1dGlvbigpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHZhcmlhYmxlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdmFyaWFibGVzW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLklHTk9SRURfR0xPQkFMUy5pbmRleE9mKHByb3BlcnR5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnJlcGxhY2UoXCJfJHJ3JFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIl8kcm4kXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gVHJhY2UucGFyc2VWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSB7XCJuYW1lXCI6IHByb3BlcnR5LCBcInR5cGVcIjogXCJVbmtub3duXCIsIFwidmFsdWVcIjogdmFsdWUudG9TdHJpbmcoKX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBTay5idWlsdGluLm1vZHVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVzLnB1c2godmFsdWUuJGQuX19uYW1lX18udik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XCJwcm9wZXJ0aWVzXCI6IHJlc3VsdCwgXCJtb2R1bGVzXCI6IG1vZHVsZXN9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYSBTa3VscHQgdmFsdWUgaW50byBhIG1vcmUgZWFzaWx5IHByaW50YWJsZSBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgLSB0aGUgc2t1bHB0IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSwgZnVsbExlbmd0aCkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUuY29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmZ1bmM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGdW5jdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlLmZ1bmNfY29kZS5jb192YXJuYW1lcyAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIEFyZ3VtZW50czogXCIrdmFsdWUuZnVuY19jb2RlLmNvX3Zhcm5hbWVzLmpvaW4oXCIsIFwiKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBObyBhcmd1bWVudHNcIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5tb2R1bGU6IHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uc3RyOlxyXG4gICAgICAgICAgICAgICAgaWYgKGZ1bGxMZW5ndGggfHwgdmFsdWUudi5sZW5ndGggPD0gMzIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiW1wiK3ZhbHVlLnNxJGxlbmd0aCgpK1wiIGNoYXJhY3RlcnMgbm90IHNob3duXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm5vbmU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmJvb2w6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCb29sZWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ubWJlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiID09PSB2YWx1ZS5za1R5cGUgPyBcIkludGVnZXJcIjogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uaW50XzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkludGVnZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmZsb2F0XzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi50dXBsZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlR1cGxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5saXN0OlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnYubGVuZ3RoIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhhY3RfdmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiWy4uLiBcIit2YWx1ZS52Lmxlbmd0aCtcIiBlbGVtZW50cyAuLi5dXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhhY3RfdmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZGljdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkRpY3Rpb25hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogdmFsdWUgJSAxID09PSAwID8gXCJJbnRlZ2VyXCIgOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTdHJpbmc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIEJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCb29sZWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAodmFsdWUgPyBcIlRydWVcIjogXCJGYWxzZVwiKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB2YWx1ZS50cCRuYW1lID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbHVlLnRwJG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kciA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gVE9ETzogdmlld0V4YWN0VmFsdWUiLCIvKipcbiAqIERldGVybWluZXMgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIGxpc3QuXG4gKiBAcGFyYW0ge2FueXRoaW5nfSBuZWVkbGUgLSBUaGUgZWxlbWVudCB0byBsb29rIGZvci5cbiAqIEBwYXJhbSB7QXJyYXl9IGhheXN0YWNrIC0gVGhlIGxpc3QgdG8gc2VhcmNoLlxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgZWxlbWVudCBleGlzdHNcbiAqL1xuZnVuY3Rpb24gYXJyYXlDb250YWlucyhuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSA+IC0xO1xufVxuXG4vKipcbiAqIFJlbW92ZSBkdXBsaWNhdGUgdmFsdWVzIGZyb20gYW4gYXJyYXksIHByZXNlcnZpbmcgb3JkZXIuXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5LCBzbyBpcyBub24tZGVzdHJ1Y3RpdmUuXG4gKiBDb3VydGVzeTpcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE1ODQzNzAvaG93LXRvLW1lcmdlLXR3by1hcnJheXMtaW4tamF2YXNjcmlwdC1hbmQtZGUtZHVwbGljYXRlLWl0ZW1zXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBUaGUgYXJyYXkgdG8gdW5pcXVpZnkuIEVsZW1lbnRzIGNvbXBhcmVkIHdpdGggPT09LlxuICovXG5mdW5jdGlvbiBhcnJheVVuaXF1ZShhcnJheSkge1xuICAgIHZhciBhID0gYXJyYXkuY29uY2F0KCk7XG4gICAgZm9yKHZhciBpPTA7IGk8YS5sZW5ndGg7ICsraSkge1xuICAgICAgICBmb3IodmFyIGo9aSsxOyBqPGEubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGlmKGFbaV0gPT09IGFbal0pIHthLnNwbGljZShqLS0sIDEpO31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhO1xufVxuXG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIGZvciBleHRlbmRpbmcgYW4gYXJyYXkgYmFzZWRcbiAqIG9uIGFuIFwiYWRkQXJyYXlcIiBhbmQgXCJyZW1vdmVBcnJheVwiLiBBbnkgZWxlbWVudFxuICogZm91bmQgaW4gcmVtb3ZlQXJyYXkgaXMgcmVtb3ZlZCBmcm9tIHRoZSBmaXJzdCBhcnJheVxuICogYW5kIGFsbCB0aGUgZWxlbWVudHMgb2YgYWRkQXJyYXkgYXJlIGFkZGVkLlxuICogQW55IGR1cGxpY2F0ZSBpdGVtcyBhcmUgcmVtb3ZlZC5cbiAqIENyZWF0ZXMgYSBuZXcgYXJyYXksIHNvIGlzIG5vbi1kZXN0cnVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIHRoZSBhcnJheSB0byBtYW5pcHVsYXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhZGRBcnJheSAtIHRoZSBlbGVtZW50cyB0byBhZGQgdG8gdGhlIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSByZW1vdmVBcnJheSAtIHRoZSBlbGVtZW50cyB0byByZW1vdmUgZnJvbSB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbW9kaWZpZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gZXhwYW5kQXJyYXkoYXJyYXksIGFkZEFycmF5LCByZW1vdmVBcnJheSkge1xuICAgIHZhciBjb3B5QXJyYXkgPSBhcnJheS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlQXJyYXkuaW5kZXhPZihpdGVtKSA9PT0gLTE7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycmF5VW5pcXVlKGNvcHlBcnJheS5jb25jYXQoYWRkQXJyYXkpKTtcbn1cblxuLyoqXG4gKiBEZWVwbHkgY2xvbmVzIGEgbm9kZVxuICogQHBhcmFtIHtOb2RlfSBub2RlIEEgbm9kZSB0byBjbG9uZVxuICogQHJldHVybiB7Tm9kZX0gQSBjbG9uZSBvZiB0aGUgZ2l2ZW4gbm9kZSBhbmQgYWxsIGl0cyBjaGlsZHJlblxuICovXG5mdW5jdGlvbiBjbG9uZU5vZGUobm9kZSkge1xuICAgIC8vIElmIHRoZSBub2RlIGlzIGEgdGV4dCBub2RlLCB0aGVuIHJlLWNyZWF0ZSBpdCByYXRoZXIgdGhhbiBjbG9uZSBpdFxuICAgIHZhciBjbG9uZSA9IG5vZGUubm9kZVR5cGUgPT0gMyA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUubm9kZVZhbHVlKSA6IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiBcbiAgICAvLyBSZWN1cnNlICAgICBcbiAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUoY2hpbGQpIHtcbiAgICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQoY2xvbmVOb2RlKGNoaWxkKSk7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgICBcbiAgICByZXR1cm4gY2xvbmU7XG59XG5cbi8qKlxuICogSW5kZW50cyB0aGUgZ2l2ZW4gc3RyaW5nIGJ5IDQgc3BhY2VzLiBUaGlzIGNvcnJlY3RseSBoYW5kbGVzIG11bHRpLWxpbmUgc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBiZSBtYW5pcHVsYXRlZC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgd2l0aCBmb3VyIHNwYWNlcyBhZGRlZCBhdCB0aGUgc3RhcnQgb2YgZXZlcnkgbmV3IGxpbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmRlbnQoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eKD89LikvZ20sIFwiICAgIFwiKTtcbn1cblxuLyoqXG4gKiBUdXJucyBzcGFjZXMgaW50byB1bmRlcnNjb3JlcyBpbiB0aGUgc3RyaW5nLCBtYWtlcyBpdCBsb3dlcmNhc2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gdGhlIHN0cmluZyB0byBiZSBtYW5pcHVsYXRlZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsdWcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgXCJfXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBbYG1pbmAsIGBtYXhgXS5cbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBsb3dlc3QgcG9zc2libGUgaW50ZWdlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgaGlnaGVzdCBwb3NzaWJsZSBpbnRlZ2VyIChpbmNsdXNpdmUpLlxuICogQHJldHVybnMge251bWJlcn0gQSByYW5kb20gaW50ZWdlci5cbiAqL1xuZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW4sbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4LW1pbisxKSttaW4pO1xufVxuXG4vKipcbiAqIEVuY29kZXMgc29tZSB0ZXh0IHNvIHRoYXQgaXQgY2FuIGJlIHNhZmVseSB3cml0dGVuIGludG8gYW4gSFRNTCBib3guXG4gKiBUaGlzIGluY2x1ZGVzIHJlcGxhY2luZyBzcGVjaWFsIEhUTUwgY2hhcmFjdGVycyAoJiwgPCwgPiwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSB0ZXh0IHRvIGJlIGNvbnZlcnRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEhUTUwtc2FmZSB0ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlSFRNTChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKVxuICAgICAgICAucmVwbGFjZSgvPC9nLCBcIiZsdDtcIilcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKVxuICAgICAgICAucmVwbGFjZSgvJy9nLCBcIiZhcG9zO1wiKTtcbn1cblxuLyoqXG4gKiBTaHVmZmxlIHRoZSBibG9ja3MgaW4gdGhlIHdvcmtzcGFjZVxuICovXG5pZiAodHlwZW9mIEJsb2NrbHkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBCbG9ja2x5LldvcmtzcGFjZVN2Zy5wcm90b3R5cGUuc2h1ZmZsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWV0cmljcyA9IHRoaXMuZ2V0TWV0cmljcygpO1xuICAgICAgICB2YXIgd2lkdGggPSBtZXRyaWNzLnZpZXdXaWR0aCAvIDIsXG4gICAgICAgICAgICBoZWlnaHQgPSBtZXRyaWNzLnZpZXdIZWlnaHQ7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmdldFRvcEJsb2NrcyhmYWxzZSk7XG4gICAgICAgIHZhciB5ID0gNSwgeCA9IDAsXG4gICAgICAgICAgICBtYXhpbWFsX2luY3JlYXNlID0gaGVpZ2h0L2Jsb2Nrcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vIEdldCBhIGJsb2NrXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IGJsb2NrLmdldFJlbGF0aXZlVG9TdXJmYWNlWFkoKTtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICB4ID0gNTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeCA9IC1wcm9wZXJ0aWVzLngrcmFuZG9tSW50ZWdlcigxMCwgd2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2subW92ZUJ5KHgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgIC1wcm9wZXJ0aWVzLnkreSk7XG4gICAgICAgICAgICB5ID0geSArIHJhbmRvbUludGVnZXIoNSwgbWF4aW1hbF9pbmNyZWFzZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKipcbiAqIE1vdmUgZWxlbWVudHMgZnJvbSBvbmUgYXJyYXkgdG8gYW5vdGhlciBiYXNlZCBvbiBhIGNvbmRpdGlvbmFsIGNoZWNrLlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzE4ODc5NjcvamF2YXNjcmlwdC1tb3ZlLW9iamVjdHMtZnJvbS1vbmUtYXJyYXktdG8tYW5vdGhlci1iZXN0LWFwcHJvYWNoXG4gKi9cbmZ1bmN0aW9uIG1vdmVFbGVtZW50cyhzb3VyY2UsIHRhcmdldCwgbW92ZUNoZWNrKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzb3VyY2VbaV07XG4gICAgICAgIGlmIChtb3ZlQ2hlY2soZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHNvdXJjZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gb2JqZWN0c1xuICogVE9ETzogbWFrZSB0aGlzIHNvIHdlIGRvbid0IGhhdmUgdG8gZXhwbGljaXRseSBwdXQgb3V0IGV2ZXJ5IG9wdGlvblxuICogICAgICAgICAgb25lIHBvc3NpYmxlIHRoaW5nIHdlIGNvdWxkIGRvIGlzIGdldCBhIHN0cmluZyB2ZXJzaW9uIG9mIHRoZSBcbiAqICAgICAgICAgIG9mIHRoZSBjb25zdHJ1Y3RvciBhbmQgbG9vayBmb3IgdGhlIHN1YnN0cmluZyBcInJldHVybiBuZXcgU2suYnVpbHRpblwiXG4gKiAgICAgICAgICBCdXQgSSBkb24ndCBrbm93IGhvdyByZWxpYWJsZSB0aGF0IGlzLiAgUmF0aGVyLCBpdCdzIGtpbmQgb2YgaGFja2lzaC5cbiAqICAgICAgICAgIFNob3VsZCB0ZWhvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmlcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGV4YW1pbmVkXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgb25lIG9mIHRoZSBTay5idWlsdGluIHR5cGVzXG4qKi9cbmZ1bmN0aW9uIGlzU2tCdWlsdGluKG9iail7XG4gICAgcmV0dXJuIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmRpY3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmxpc3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnR1cGxlKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5ib29sKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5pbnRfKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5mbG9hdF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnN0cikgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubG5nKTtcbiAgICAvL3ZhciBjb25zX3N0ciA9IG9iai5jb25zdHJ1Y3RvciArIFwiXCI7XG4gICAgLy9yZXR1cm4gY29uc19zdHIuaW5kZXhPZihcInJldHVybiBuZXcgU2suYnVpbHRpblwiKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIGlzQXN0Tm9kZShvYmope1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgXCJfYXN0bmFtZVwiIGluIG9iajtcbn1cblxuLyoqXG4gKiBTaG91bGQgdGhlb3JldGljYWxseSBiZWxvbmcgaW4gU2suZmZpLCBidXQgSSBwdXQgaXQgaGVyZSBpbnN0ZWFkIHRvIG5vdCBtZXNzIHVwIHRoZSBza3VscHQgZmlsZXNcbiAqIGxpa2UgdGhlIG5vcm1hbCBTay5mZmkucmVtYXBUb1B5LCBpdCBkb2Vzbid0IHdvcmsgZm9yIGZ1bmN0aW9ucyBvciBtb3JlIGNvbXBsZXggb2JqZWN0cywgYnV0IGl0IGhhbmRsZXNcbiAqIGNhc2VzIHdoZXJlIHRoZSB0eXBlcyBpbiBvYmogYXJlIGEgbWl4IG9mIHB5dGhvbiBTSU1QTEUgb2JqZWN0cyBhbmQgU0lNUExFIG5vcm1hbCBqYXZhc2NyaXB0IG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGNvbnZlcnRlZFxuICogQHJldHVybiB7U2suYnVpbHRpbi4/Pz99IC0gcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBweXRob24gb2JqZWN0LCBkcm9wcGluZyBhbGwgZnVuY3Rpb25zIGFuZCB0aGluZ3MgaXQgY2FuJ3QgY29udmVydFxuKiovXG5mdW5jdGlvbiBtaXhlZFJlbWFwVG9QeShvYmope1xuICAgIHZhciBrO1xuICAgIHZhciBrdnM7XG4gICAgdmFyIGk7XG4gICAgdmFyIGFycjtcbiAgICAvL0BUT0RPOiBzaG91bGQgdGhlb3JldGljYWxseSBjaGVjayBpZiB0aGUgb2JqZWN0IGlzIGEgcHlob24gZGljdCBvciBhcnJheSB3aXRoIGpzIG9iamVjdHNcbiAgICBpZiAoaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFscmVhZHkgcHl0aG9uIHJlYWR5XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFjdHVhbGx5IGEgamF2YXNjcmlwdCBhcnJheVxuICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgLy9mb3IgZWFjaCBvYmplY3QsIGNvbnZlcnQgaXQgdG8gYSBweXRob24gb2JqZWN0IGlmIGl0IGlzbid0IG9uZSBhbHJlYWR5XG4gICAgICAgICAgICB2YXIgc3VidmFsID0gb2JqW2ldO1xuICAgICAgICAgICAgaWYoIWlzU2tCdWlsdGluKHN1YnZhbCkpe1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKG1peGVkUmVtYXBUb1B5KHN1YnZhbCkpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc3VidmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChhcnIpO1xuICAgIH0gZWxzZSBpZiAob2JqID09PSBudWxsKSB7Ly9udWxsIG9iamVjdFxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZighaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgICAgICAvL2Fzc3VtaW5nIGl0J3MgYSBzdGFuZGFyZCBkaWN0aW9uYXJ5XG4gICAgICAgICAgICBrdnMgPSBbXTsvL1NrLmJ1aWx0aW4uZGljdCB1c2VzIGFuIGFycmF5IG9mIGtleS12YWx1ZSxrZXktdmFsdWUuLi5cbiAgICAgICAgICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAvL2NvbnZlcnQgdGhlIGtleSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShrKSk7XG4gICAgICAgICAgICAgICAgLy9jb3ZlcnQgY29ycmVzcG9uZGluZyB2YWx1ZSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShvYmpba10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY3JlYXRlIHRoZSBuZXcgZGljdGlvbmFyeVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmRpY3Qoa3ZzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4uYXNzayQob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5ib29sKG9iaik7XG4gICAgfSBlbHNlIGlmKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKG9iai5uYW1lKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X187Il0sInNvdXJjZVJvb3QiOiIifQ==