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
      this.model.display.changedInstructions(null);
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
            if (model.ui.menu.isCompleted()) {
              return "Assignment closed";
            } else if (model.ui.menu.isSubmitted()) {
              return "Reopen for editing";
            } else if (model.display.dirtySubmission()) {
              return "Run";
            } else {
              return "Submit early";
            }
          }),
          clickMarkSubmitted: function clickMarkSubmitted() {
            if (model.ui.menu.isCompleted()) {
              alert("You cannot reopen closed assignments. Contact a grader!");
            } else if (model.ui.menu.isSubmitted()) {
              self.components.server.updateSubmissionStatus("inProgress");
            } else if (model.display.dirtySubmission()) {
              self.components.engine.delayedRun();
            } else {
              self.components.server.updateSubmissionStatus("Submitted");
            }
          },
          isSubmitted: ko.pureComputed(function () {
            return model.assignment.reviewed() && model.submission.submissionStatus().toLowerCase() === "submitted";
          }),
          isCompleted: ko.pureComputed(function () {
            return model.submission.submissionStatus().toLowerCase() === "completed";
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

              case "instructor":
                self.components.fileSystem.newInstructorFile();
                return;

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
          isRunning: ko.pureComputed(function () {
            return model.status.onExecution() === server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].ACTIVE;
          }),
          run: function run() {
            return self.components.engine.delayedRun();
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

      _this2.main.components.pythonEditor.bm.textToBlocks.hiddenImports.push(slug);

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
var DIALOG_HTML = "\n    <div class='blockpy-dialog modal hidden'\n         role=\"dialog\"\n         aria-label='Dialog'\n         aria-hidden=\"true\"\n         aria-modal=\"true\">\n        <div class='modal-dialog modal-lg' role=\"document\">\n            <div class='modal-content' role='region' aria-label='Dialog content'>\n                <div class='modal-header'>\n                    <h4 class='modal-title'>Dynamic Content</h4>\n                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class='modal-body' style='max-width:100%; max-height:400px'>\n                </div>\n                <div class='modal-footer'>\n                    <button type='button' class='btn btn-white model-close' data-dismiss='modal'>Close</button>\n                    <button type='button' class='btn btn-success modal-okay' data-dismiss='modal'>Okay</button>\n                </div>    \n            </div>\n        </div>\n    </div>\n";
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
  var _this = this;

  this.main = main;
  this.tag = tag;
  this.titleTag = tag.find(".modal-title");
  this.bodyTag = tag.find(".modal-body");
  this.footerTag = tag.find(".modal-footer");
  this.okayButton = tag.find(".modal-okay");

  this.yes = function () {};

  this.okayButton.click(function () {
    _this.yes();

    _this.tag.modal("hide");
  });
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
  this.okayButton.hide();
  this.tag.draggable({
    "handle": ".modal-title"
  });
  this.tag.on("hidden.bs.modal", function (e) {
    if (onclose !== undefined && onclose !== null) {
      onclose();
    }
  });
};

BlockPyDialog.prototype.confirm = function (title, body, yes, no, yesText) {
  if (yesText === undefined) {
    yesText = "Okay";
  }

  this.show(title, body, no);
  this.yes = yes;
  this.okayButton.show().html(yesText); // TODO: add okay button and cancel button
};

BlockPyDialog.prototype.ASSIGNMENT_VERSION_CHANGED = function () {
  this.confirm("Assignment Changed", "Your instructor has made changes to this assignment. Would you like to reload? All your work has been saved.");
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
["hideSubmission", "hide_submission", false, "bool", "If checked, then students will not be able to see their submission's code or history on Canvas."], ["hideFiles", "hide_files", true, "bool", "If checked, then students will not see the View Files toolbar."], ["hideQueuedInputs", "hide_queued_inputs", true, "bool", "INCOMPLETE: If unchecked, then the students can access the queued inputs box (makes repeated debugging easier for the input function)."], ["hideEditors", "hide_editors", false, "bool", "If checked, then all of the editors are hidden."], ["hideAll", "hide_all", false, "bool", "INCOMPLETE: If checked, then the entire interface is hidden."], ["hideEvaluate", "hide_evaluate", false, "bool", "If checked, then the Evaluate button is not shown on the console."], ["hideImportDatasetsButton", "hide_import_datasets_button", true, "bool", "If checked, then students cannot see the import datasets button."], // TODO: Fix this one to be settable
["hideImportStatements", "hide_import_statements", false, "bool", "INCOMPLETE: If checked, certain kinds of import statements (matplotlib, turtle, datasets) are not shown in the block interface."], ["hideCoverageButton", "hide_coverage_button", false, "bool", "INCOMPLETE: If checked, the coverage button is not shown."], ["saveTurtleOutput", "save_turtle_output", false, "bool", "If checked, then turtle output is saved whenever the program uses it."]];

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

var PYTHON_EDITOR_HTML = "\n    <div class=\"blockpy-python-toolbar col-md-12 btn-toolbar\"\n         role=\"toolbar\" aria-label=\"Python Toolbar\">\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Run Group\">         \n            <button type=\"button\" class=\"btn blockpy-run\"\n                data-bind=\"click: ui.execute.run,\n                            css: {'blockpy-run-running': ui.execute.isRunning}\">\n                <span class=\"fas fa-play\"></span> Run\n             </button>\n         </div>\n         \n         <div class=\"btn-group btn-group-toggle mr-2\" data-toggle=\"buttons\">\n            ".concat(makeTab("Blocks", "th-large", DisplayModes.BLOCK), "\n            ").concat(makeTab("Split", "columns", DisplayModes.SPLIT), "\n            ").concat(makeTab("Text", "align-left", DisplayModes.TEXT), "\n         </div>\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Reset Group\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\"\n                 data-bind=\"click: ui.editors.reset\">\n                 <span class=\"fas fa-sync\"></span> Reset\n              </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Import Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.importDataset\">\n                <span class=\"fas fa-cloud-download-alt\"></span> Import datasets\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\">\n                <label class=\"btn btn-outline-secondary\">\n                    <span class=\"fas fa-file-upload\"></span> Upload\n                    <input class=\"blockpy-toolbar-upload\" type=\"file\"\n                        hidden\n                        data-bind=\"event: {change: ui.editors.upload}\">\n                 </label>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle dropdown-toggle-split\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <span class=\"caret\"></span>\n                    <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                \n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <a class='dropdown-item blockpy-toolbar-download'\n                        data-bind=\"click: ui.editors.download\">\n                    <span class='fas fa-download'></span> Download\n                    </a>\n                </div>\n            </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"History Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                aria-pressed=\"false\"\n                data-bind=\"click: ui.editors.python.toggleHistoryMode,\n                           enable: ui.editors.python.isHistoryAvailable,\n                           css: { active: display.historyMode },\n                           attr: { 'aria-pressed': display.historyMode }\">\n                <span class=\"fas fa-history\"></span> History\n             </button>\n         </div>\n         \n         <!-- Fully functional, but a little too.. Invasive \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Fullscreen Group\"\n            data-bind=\"visible: display.pythonMode() === 'text'\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.python.fullscreen\">\n                <span class=\"fas fa-expand-arrows-alt\"></span> Fullscreen\n             </button>\n         </div>\n         -->\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Save Group\"\n            data-bind=\"visible: ui.editors.canSave\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-save\"></span> Save\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Delete Group\"\n            data-bind=\"visible: ui.editors.canDelete\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\",\n                data-bind=\"click: ui.files.delete\">\n                <span class=\"fas fa-trash\"></span> Delete\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Rename Group\"\n            data-bind=\"visible: ui.editors.canRename\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-file-signature\"></span> Rename\n             </button>\n         </div>\n         \n    </div>\n    \n    ").concat(_history__WEBPACK_IMPORTED_MODULE_1__["HISTORY_TOOLBAR_HTML"], "\n\n\n    <div class=\"blockpy-python-blockmirror\"\n        data-bind=\"hidden: ui.menu.isSubmitted\">\n    </div>\n");

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
        this.codeMirror.setValue(newContents);
        this.codeMirror.refresh();
        this.dirty = false;
      }
    }
  }, {
    key: "updateHandle",
    value: function updateHandle(event) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.file.handle(this.codeMirror.getValue());
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
      report["model"] = this.main.model;
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
    key: "delayedRun",
    value: function delayedRun() {
      setTimeout(this.run.bind(this), 1);
    }
  }, {
    key: "run",
    value: function run() {
      this.configuration = this.configurations.run.use(this);
      var execution = this.execute().then(this.configuration.success.bind(this.configuration), this.configuration.failure.bind(this.configuration));

      if (!this.main.model.assignment.settings.disableFeedback()) {
        execution.then(this.onRun.bind(this));
      } else {
        execution.then(this.configuration.showErrors.bind(this.configuration));
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
        } else {
          execution.then(_this.configuration.showErrors.bind(_this.configuration));
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
      Sk.configure(this.getSkulptOptions()); // Set openFile as mechanism to read files

      Sk.inBrowser = this.openFile.bind(this);
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
        //fileopen: this.openFile.bind(this),
        // file.write
        filewrite: this.writeFile.bind(this),
        // print
        output: this.print.bind(this),
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
    key: "openFile",
    value: function openFile(filename) {
      var instructorFiles = this.main.model.assignment.extraInstructorFiles();

      for (var i = 0; i < instructorFiles.length; i++) {
        if (instructorFiles[i].filename() === "!" + filename) {
          return instructorFiles[i].contents();
        }
      }

      throw new Sk.builtin.OSError("File not found: " + filename);
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
      } else if (filename === "./_instructor/__init__.js") {
        return _configurations_js__WEBPACK_IMPORTED_MODULE_0__["EMPTY_MODULE"];
      } else if (filename.startsWith("./_instructor/")) {
        var innerName = filename.slice("./_instructor/".length);
        var instructorFiles = this.main.model.assignment.extraInstructorFiles();

        for (var i = 0; i < instructorFiles.length; i++) {
          if (instructorFiles[i].filename() === "!" + innerName) {
            return instructorFiles[i].contents();
          }
        }

        throw new Sk.builtin.ImportError("File not found: '" + filename + "'");
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

  return "\nfrom pedal.report import *\nfrom pedal.source import set_source\nset_source(".concat(safeCode, ", \"answer.py\")\n").concat(tifaAnalysis, "\nfrom pedal.sandbox.sandbox import Sandbox\nfrom pedal.sandbox import compatibility\nfrom utility import *\nstudent = MAIN_REPORT['sandbox']['run'] = Sandbox()\n#student.run(MAIN_REPORT['source']['code'], MAIN_REPORT['source']['filename'], report_exceptions=False)\n#debug(student)\nstudent.report_exceptions_mode = True\ncompatibility.run_student(raise_exceptions=False)\n#log(student.data)\n#student = get_student_data()\n#error, position = get_student_error()\n#compatibility.raise_exception(error, position)\nrun_student = compatibility.run_student\nreset_output = compatibility.reset_output\nqueue_input = compatibility.queue_input\nget_output = compatibility.get_output\nget_plots = compatibility.get_plots\ncompatibility.trace_lines = trace_lines\nfrom pedal import questions\nquestions.show_question = set_instructions\n# TODO: Remove the need for this hack!\ndef capture_output(func, *args):\n   reset_output()\n   student.call(func.__name__, *args)\n   return get_output()\ncompatibility.capture_output = capture_output\n\nfrom pedal.cait.cait_api import parse_program\n").concat(instructorCode, "\nfrom pedal.resolvers import simple\nSUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE = simple.resolve()\n");
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
      score = Math.max(0, Math.min(100, score));
      var oldScore = this.main.model.submission.score();
      score = Math.max(oldScore, score);
      this.main.model.submission.score(score); // Hide status

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
  }, {
    key: "showErrors",
    value: function showErrors() {
      var report = this.main.model.execution.reports;

      if (!report["student"].success) {
        this.main.components.feedback.presentRunError(report.student.error);
      }
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
      var visibilityBuffer = 100;
      var topOfElement = this.tag.offset().top; //let bottomOfElement = this.tag.offset().top + this.tag.outerHeight();

      var bottomOfElement = topOfElement + visibilityBuffer;
      var bottomOfScreen = $(window).scrollTop() + $(window).height();
      var topOfScreen = $(window).scrollTop(); //bottom_of_element -= 40; // User friendly padding

      return topOfElement < bottomOfScreen && topOfScreen < bottomOfElement;
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
    key: "updateRegularFeedback",
    value: function updateRegularFeedback() {}
    /**
     * Updates the model with these new execution results
     * @param executionResults
     */

  }, {
    key: "updateFeedback",
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
        message = "No errors reported.";
      } // Remap to expected BlockPy labels


      if (category.toLowerCase() === "instructor" && label.toLowerCase() === "explain") {
        label = "Instructor Feedback";
      } // Don't present a lack of error as being incorrect


      if (category === "Instructor" && label === "No errors") {
        category = "no errors";
      } // Update model accordingly


      message = this.main.utilities.markdown(message).replace(/<pre>\n/g, "<pre>\n\n");
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

      this.notifyFeedbackUpdate();
    }
  }, {
    key: "notifyFeedbackUpdate",
    value: function notifyFeedbackUpdate() {
      console.log(this.isFeedbackVisible());

      if (!this.isFeedbackVisible()) {
        this.tag.find(".blockpy-floating-feedback").show().fadeOut(7000);
        this.scrollIntoView();
      }
    }
  }, {
    key: "presentRunError",
    value: function presentRunError(error) {
      var message, label, category, lineno;

      if (error.tp$name === "SyntaxError") {
        category = "syntax";

        var _lineno = Sk.ffi.remapToJs(error.lineno);

        var _label = Sk.ffi.remapToJs(error.msg);

        var source,
            _message = "";

        try {
          source = error.args.v[3][2];

          if (source === undefined) {
            source = "";
          } else {
            source = "<pre>".concat(source, "</pre>");
          }
        } catch (e) {
          source = "";
        }

        if (_label === "bad input") {
          _label = "Bad Input";
          _message = "Bad input on line ".concat(_lineno, ".<br>").concat(source);
        } else if (_label === "EOF in multi-line statement") {
          _label = "EOF in multi-line statement";
          _message = "Unexpected end-of-file in multi-line statement on line ".concat(_lineno, ".<br>").concat(source);
        } else {
          _label = "Syntax Error";
          _message = _label + "<br>" + source;
        }
      } else {
        label = error.tp$name;
        category = "runtime";
        message = this.convertSkulptError(error);
      }

      this.feedbackModel.message(message);
      this.feedbackModel.category(category);
      this.feedbackModel.label(label);
      this.feedbackModel.linesError.removeAll();

      if (lineno !== undefined && lineno !== null) {
        this.feedbackModel.linesError.push(lineno);
      }
    }
  }, {
    key: "convertSkulptError",
    value: function convertSkulptError(error, filenameExecuted) {
      var _this2 = this;

      var name = error.tp$name;
      var args = Sk.ffi.remapToJs(error.args);
      var top = "".concat(name, ": ").concat(args[0], "\n<br>\n<br>");
      var traceback = "";

      if (error.traceback && error.traceback.length) {
        traceback = "Traceback:<br>\n" + error.traceback.map(function (frame) {
          var lineno = frame.lineno;

          if (frame.filename.slice(0, -3) === filenameExecuted) {
            lineno -= _this2.main.model.execution.reports.instructor.lineOffset;
          }

          var file = "File <code class=\"filename\">\"".concat(frame.filename, "\"</code>, ");
          var line = "on line <code class=\"lineno\">".concat(lineno, "</code>, ");
          var scope = frame.scope !== "<module>" && frame.scope !== undefined ? "in scope ".concat(frame.scope) : "";
          var source = "";

          if (frame.source !== undefined) {
            source = "\n<pre><code>".concat(frame.source, "</code></pre>");
          }

          return file + line + scope + source;
        }).join("\n<br>");
        traceback = "".concat(traceback);
      }

      return top + "\n" + traceback;
    }
  }, {
    key: "presentInternalError",
    value: function presentInternalError(error, filenameExecuted) {
      this.main.model.execution.feedback.category("internal");
      this.main.model.execution.feedback.label("Internal Error");
      var message = "Error in instructor feedback. Please show the following to an instructor:<br>\n";
      message += this.convertSkulptError(error, filenameExecuted);
      this.main.model.execution.feedback.message(message);
      this.notifyFeedbackUpdate();
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
/* WEBPACK VAR INJECTION */(function(ko, $) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILES_HTML", function() { return FILES_HTML; });
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

var FILES_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-files\"\n    data-bind=\"visible: ui.files.visible\">\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n\n    <li class=\"nav-item\">\n        <strong>View: </strong>\n    </li>\n\n    ".concat(makeTab("answer.py"), "\n    ").concat(makeTab("!instructions.md", "Instructions"), "\n    ").concat(makeTab("!assignment_settings.blockpy", "Settings"), "\n    ").concat(makeTab("^starting_code.py", "Starting Code"), "\n    ").concat(makeTab("!on_run.py", "On Run"), "\n    ").concat(makeTab("!on_change.py", "On Change", true), "\n    ").concat(makeTab("!on_eval.py", "On Eval", true), "\n    ").concat(makeTab("?mock_urls.blockpy", "URL Data", true), "\n    ").concat(makeTab("!sample_submissions.blockpy", "Sample Submissions", true), "\n    ").concat(makeTab("!tags.blockpy", "Tags", true), "\n    \n    <!-- ko foreach: assignment.extraInstructorFiles -->\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"\n                data-toggle=\"tab\"\n                data-bind=\"css: {active: $root.display.filename() === filename()},\n                            click: $root.display.filename.bind($data, filename()),\n                            text: filename\">\n            </a>        \n        </li>\n    <!-- /ko -->\n  \n    <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"\n         role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Add New</a>\n        <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?mock_urls.blockpy'),\n                           click: ui.files.add.bind($data, '?mock_urls.blockpy')\">URL Data</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?tags.blockpy')\">Tags</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?sample_submissions.blockpy')\">Sample Submissions</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onChange,\n                           click: ui.files.add.bind($data, '!on_change.py')\">On Change</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onEval,\n                           click: ui.files.add.bind($data, '!on_eval.py')\">On Eval</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Starting File</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"click: ui.files.add.bind($data, 'instructor')\">Instructor File</a>\n            <a class=\"dropdown-item\" href=\"#\">Student File</a>\n        </div>\n    </li>\n  \n</ul>\n</div>\n");
var NEW_INSTRUCTOR_FILE_DIALOG_HTML = "\n<form>\n<div class=\"form-group row\">\n    <!-- Filename -->\n    <div class=\"col-sm-2 text-right\">\n        <label for=\"blockpy-instructor-file-dialog-filename\">Filename:</label>\n    </div>\n    <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control blockpy-instructor-file-dialog-filename\"\n            id=\"blockpy-instructor-file-dialog-filename\">    \n    </div>\n    <!-- Filetype -->\n    <div class=\"col-sm-2 text-right\">\n        <label for=\"blockpy-instructor-file-dialog-filetype\">Filetype: </label>\n    </div>\n    <div class=\"col-sm-10\">\n        <span class=\"blockpy-instructor-file-dialog-filetype\"\n            id=\"blockpy-instructor-file-dialog-filetype\"></span>    \n    </div>\n    <!-- Inaccessible to student? -->\n    <div class=\"col-sm-2 text-right\">\n        <label for=\"blockpy-instructor-file-dialog-filename\">Inaccessible to student: </label>\n    </div>\n    <div class=\"col-sm-1\">\n        <input type=\"checkbox\" class=\"form-control blockpy-instructor-file-dialog-hidden\"\n            id=\"blockpy-instructor-file-dialog-hidden\" checked>\n    </div>\n</div>\n</form>\n";
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
    var modelFiles = [];

    for (var filename in files) {
      if (files.hasOwnProperty(filename)) {
        modelFiles.push(makeModelFile(filename, files[filename]));
      }
    } //files = files.map(file => makeModelFile(file.filename, file.contents));


    modelFileList(modelFiles);
  } else {
    modelFileList([]);
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
  }, {
    key: "newInstructorFile",
    value: function newInstructorFile() {
      var _this2 = this;

      var body = $(NEW_INSTRUCTOR_FILE_DIALOG_HTML);
      var filename = body.find(".blockpy-instructor-file-dialog-filename");
      var filetype = body.find(".blockpy-instructor-file-dialog-filetype");
      var hidden = body.find(".blockpy-instructor-file-dialog-hidden");
      var extensionRegex = /(?:\.([^.]+))?$/;
      filename.on("input", function () {
        var extension = extensionRegex.exec(filename.val())[1];
        extension = extension === undefined ? "No extension" : extension;
        filetype.text(extension);
      });

      var yes = function yes() {
        hidden = hidden.is(":checked") ? "!" : "?";

        if (filename.val()) {
          filename = hidden + filename.val();

          _this2.newFile(filename);
        }
      };

      this.main.components.dialog.confirm("Make New File", body, yes, function () {}, "Add");
    }
  }]);

  return BlockPyFileSystem;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! knockout */ "knockout"), __webpack_require__(/*! jquery */ "jquery")))

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
  this.createFileSubscription(model.ui.files.extraStudentFiles, "#extra_student_files.blockpy");
  this.createFileSubscription(model.ui.files.extraStartingFiles, "#extra_starting_files.blockpy");
  this.createFileSubscription(model.ui.files.extraInstructorFiles, "#extra_instructor_files.blockpy");
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
  mod.set_instructions = new Sk.builtin.func(function (newInstructions) {
    Sk.builtin.pyCheckArgs("set_instructions", arguments, 1, 2);
    newInstructions = Sk.ffi.remapToJs(newInstructions);
    Sk.executionReports["model"].display.changedInstructions(newInstructions);
  });
  mod.get_model_info = new Sk.builtin.func(function (keys) {
    Sk.builtin.pyCheckArgs("get_model_info", arguments, 1, 1);
    var model = Sk.executionReports["model"];
    keys = Sk.ffi.remapToJs(keys).split(".");

    for (var i = 0; i < keys.length; i++) {
      model = model[keys[i]];
    }

    return Sk.ffi.remapToPy(model());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3MiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL2Fic3RyYWN0X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL21hcmtkb3duLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3B5dGhvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90YWdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9jaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fZXZhbC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3J1bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2tfbW9kX2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJrb1wiIl0sIm5hbWVzIjpbIkJsb2NrUHkiLCJjb25maWd1cmF0aW9uIiwiYXNzaWdubWVudCIsInN1Ym1pc3Npb24iLCJpbml0TW9kZWwiLCJ1bmRlZmluZWQiLCJzZXRBc3NpZ25tZW50IiwiaW5pdE1haW4iLCJpbml0VXRpbGl0aWVzIiwiaW5pdE1vZGVsTWV0aG9kcyIsInR1cm5PbkhhY2tzIiwiaW5pdEludGVyZmFjZSIsImFwcGx5TW9kZWwiLCJpbml0Q29tcG9uZW50cyIsInN0YXJ0Iiwia2V5IiwiZGVmYXVsdFZhbHVlIiwiaW5pdGlhbENvbmZpZ3VyYXRpb25fIiwibG9jYWxTZXR0aW5nc18iLCJoYXMiLCJnZXQiLCJMb2NhbFN0b3JhZ2VXcmFwcGVyIiwibW9kZWwiLCJ1c2VyIiwiaWQiLCJrbyIsIm9ic2VydmFibGUiLCJuYW1lIiwicm9sZSIsImdldFNldHRpbmciLCJjb3Vyc2VJZCIsImdyb3VwSWQiLCJpbnN0cnVjdGlvbnMiLCJ1cmwiLCJ0eXBlIiwic3RhcnRpbmdDb2RlIiwib25SdW4iLCJvbkNoYW5nZSIsIm9uRXZhbCIsImV4dHJhSW5zdHJ1Y3RvckZpbGVzIiwib2JzZXJ2YWJsZUFycmF5IiwiZXh0cmFTdGFydGluZ0ZpbGVzIiwiZm9ya2VkSWQiLCJmb3JrZWRWZXJzaW9uIiwib3duZXJJZCIsInZlcnNpb24iLCJ0YWdzIiwic2FtcGxlU3VibWlzc2lvbnMiLCJyZXZpZXdlZCIsImhpZGRlbiIsImlwUmFuZ2VzIiwic2V0dGluZ3MiLCJtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwiLCJjb2RlIiwiZXh0cmFGaWxlcyIsImVuZHBvaW50Iiwic2NvcmUiLCJjb3JyZWN0Iiwic3VibWlzc2lvblN0YXR1cyIsImdyYWRpbmdTdGF0dXMiLCJkaXNwbGF5IiwiZmlsZW5hbWUiLCJpbnN0cnVjdG9yIiwidG9TdHJpbmciLCJtdXRlUHJpbnRlciIsInB5dGhvbk1vZGUiLCJEaXNwbGF5TW9kZXMiLCJTUExJVCIsImhpc3RvcnlNb2RlIiwiYXV0b1NhdmUiLCJiaWdDb25zb2xlIiwicHJldmlvdXNDb25zb2xlSGVpZ2h0IiwiY3VycmVudENvbnNvbGVIZWlnaHQiLCJzZWNvbmRSb3dTZWNvbmRQYW5lbCIsIlNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyIsIkZFRURCQUNLIiwidHJhY2VFeGVjdXRpb24iLCJsb2FkaW5nRGF0YXNldHMiLCJjaGFuZ2VkSW5zdHJ1Y3Rpb25zIiwidHJpZ2dlck9uQ2hhbmdlIiwiZGlydHlTdWJtaXNzaW9uIiwic3RhdHVzIiwibG9hZEFzc2lnbm1lbnQiLCJTdGF0dXNTdGF0ZSIsIlJFQURZIiwibG9hZEFzc2lnbm1lbnRNZXNzYWdlIiwibG9hZEhpc3RvcnkiLCJsb2FkSGlzdG9yeU1lc3NhZ2UiLCJsb2FkRmlsZSIsImxvYWRGaWxlTWVzc2FnZSIsImxvYWREYXRhc2V0IiwibG9hZERhdGFzZXRNZXNzYWdlIiwibG9nRXZlbnQiLCJsb2dFdmVudE1lc3NhZ2UiLCJzYXZlSW1hZ2UiLCJzYXZlSW1hZ2VNZXNzYWdlIiwic2F2ZUZpbGUiLCJzYXZlRmlsZU1lc3NhZ2UiLCJzYXZlQXNzaWdubWVudCIsInNhdmVBc3NpZ25tZW50TWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb24iLCJ1cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXMiLCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZSIsIm9uRXhlY3V0aW9uIiwiZXhlY3V0aW9uIiwicmVwb3J0cyIsIm91dHB1dCIsInN0dWRlbnQiLCJjdXJyZW50U3RlcCIsImxhc3RTdGVwIiwiY3VycmVudExpbmUiLCJsYXN0TGluZSIsImN1cnJlbnRUcmFjZURhdGEiLCJjdXJyZW50VHJhY2VTdGVwIiwicmVzdWx0cyIsImdsb2JhbHMiLCJmZWVkYmFjayIsIm1lc3NhZ2UiLCJjYXRlZ29yeSIsImxhYmVsIiwibGluZXNFcnJvciIsImxpbmVzVW5jb3ZlcmVkIiwiY2FsbGJhY2tzIiwic2VydmVyQ29ubmVjdGVkIiwiYmxvY2tseVBhdGgiLCJhdHRhY2htZW50UG9pbnQiLCJjb250YWluZXIiLCJ1cmxzIiwiY29uc3RhbnRzIiwiZ3VpIiwibWFrZUludGVyZmFjZSIsIiQiLCJodG1sIiwiYXNzaWdubWVudF9pZCIsImNvbXBvbmVudHMiLCJzZXJ2ZXIiLCJzYW1wbGVzIiwiZ3JhZGluZ19zdGF0dXMiLCJzdWJtaXNzaW9uX3N0YXR1cyIsImNvdXJzZV9pZCIsImxvYWRDb25jYXRlbmF0ZWRGaWxlIiwiZXh0cmFfZmlsZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc2V0SW50ZXJmYWNlIiwid2FzU2VydmVyQ29ubmVjdGVkIiwiZm9ya2VkX2lkIiwiZm9ya2VkX3ZlcnNpb24iLCJpcF9yYW5nZXMiLCJvbl9jaGFuZ2UiLCJmaWxlU3lzdGVtIiwibmV3RmlsZSIsIm9uX2V2YWwiLCJvbl9ydW4iLCJzdGFydGluZ19jb2RlIiwib3duZXJfaWQiLCJsb2FkQXNzaWdubWVudFNldHRpbmdzIiwibG9hZFRhZ3MiLCJsb2FkU2FtcGxlU3VibWlzc2lvbnMiLCJzYW1wbGVfc3VibWlzc2lvbnMiLCJleHRyYV9pbnN0cnVjdG9yX2ZpbGVzIiwiZXh0cmFfc3RhcnRpbmdfZmlsZXMiLCJsb2FkU3VibWlzc2lvbiIsImNvcmdpcyIsImxvYWREYXRhc2V0cyIsInNldFN0YXR1cyIsInNlbGYiLCJ1aSIsImlzR3JhZGVyIiwicHVyZUNvbXB1dGVkIiwiaXNDaGFuZ2VkIiwiY3VycmVudCIsInV0aWxpdGllcyIsIm1hcmtkb3duIiwicmVzZXQiLCJtZW51IiwiY2FuTWFya1N1Ym1pdHRlZCIsInRleHRNYXJrU3VibWl0dGVkIiwiaXNDb21wbGV0ZWQiLCJpc1N1Ym1pdHRlZCIsImNsaWNrTWFya1N1Ym1pdHRlZCIsImFsZXJ0IiwiZW5naW5lIiwiZGVsYXllZFJ1biIsInRvTG93ZXJDYXNlIiwic2Vjb25kUm93IiwiaXNGZWVkYmFja1Zpc2libGUiLCJpc1RyYWNlVmlzaWJsZSIsIlRSQUNFIiwiaXNDb25zb2xlU2hvd1Zpc2libGUiLCJzd2l0Y2hMYWJlbCIsImFkdmFuY2VTdGF0ZSIsImN1cnJlbnRQYW5lbCIsIk5PTkUiLCJzaXplIiwiaGlkZUV2YWx1YXRlIiwiQUNUSVZFIiwiYmFkZ2UiLCJ0cmFjZSIsImxpbmUiLCJzdGVwIiwidHJhY2VEYXRhIiwiZmlyc3QiLCJiYWNrd2FyZCIsInByZXZpb3VzIiwiTWF0aCIsIm1heCIsImZvcndhcmQiLCJuZXh0IiwibWluIiwibGFzdCIsImZpbGVzIiwidmlzaWJsZSIsImhpZGVGaWxlcyIsImhhc0NvbnRlbnRzIiwicGF0aCIsInNvbWUiLCJmaWxlIiwibGVuZ3RoIiwiYWRkIiwibmV3SW5zdHJ1Y3RvckZpbGUiLCJkZWxldGVGaWxlIiwiZXh0cmFTdHVkZW50RmlsZXMiLCJvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZSIsImVkaXRvcnMiLCJnZXRFZGl0b3IiLCJ2aWV3IiwiaGlkZUVkaXRvcnMiLCJtYXAiLCJzdWJzdHIiLCJtYWtlTW9kZWxGaWxlIiwiY29udGVudHMiLCJjYW5TYXZlIiwiY2FuRGVsZXRlIiwiVU5ERUxFVEFCTEVfRklMRVMiLCJpbmRleE9mIiwiY2FuUmVuYW1lIiwiVU5SRU5BTUFCTEVfRklMRVMiLCJ1cGxvYWQiLCJ1cGxvYWRGaWxlIiwiYmluZCIsImRvd25sb2FkIiwiZG93bmxvYWRGaWxlIiwiaW1wb3J0RGF0YXNldCIsIm9wZW5EaWFsb2ciLCJweXRob24iLCJmdWxsc2NyZWVuIiwiY29kZU1pcnJvciIsInB5dGhvbkVkaXRvciIsImJtIiwidGV4dEVkaXRvciIsInNldE9wdGlvbiIsImdldE9wdGlvbiIsInVwZGF0ZU1vZGUiLCJuZXdNb2RlIiwib2xkUHl0aG9uTW9kZSIsImlzSGlzdG9yeUF2YWlsYWJsZSIsImlzRW5kcG9pbnRDb25uZWN0ZWQiLCJ0dXJuT2ZmSGlzdG9yeU1vZGUiLCJ1cGRhdGVFZGl0b3IiLCJzZXRSZWFkT25seSIsInR1cm5Pbkhpc3RvcnlNb2RlIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiaGlzdG9yeSIsImxvYWQiLCJkaWFsb2ciLCJFUlJPUl9MT0FESU5HX0hJU1RPUlkiLCJ0b2dnbGVIaXN0b3J5TW9kZSIsIm1vdmVUb1N0YXJ0IiwibW92ZVByZXZpb3VzIiwibW92ZU5leHQiLCJtb3N0UmVjZW50IiwibW92ZVRvTW9zdFJlY2VudCIsInVzZSIsInNhdmUiLCJleGVjdXRlIiwiaXNSdW5uaW5nIiwicnVuIiwiZXZhbHVhdGUiLCJtZXNzYWdlcyIsImZvcmNlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmYWRlT3V0IiwiZmFkZUluIiwibWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyIsImFwcGx5QmluZGluZ3MiLCJtYWluIiwidGV4dCIsIkVhc3lNREUiLCJwcm90b3R5cGUiLCJCbG9ja1B5RGlhbG9nIiwiZmluZCIsIkJsb2NrUHlGZWVkYmFjayIsIkJsb2NrUHlUcmFjZSIsIkJsb2NrUHlDb25zb2xlIiwiQmxvY2tQeUVuZ2luZSIsIkJsb2NrUHlGaWxlU3lzdGVtIiwiRWRpdG9ycyIsImJ5TmFtZSIsIkJsb2NrUHlTZXJ2ZXIiLCJCbG9ja1B5Q29yZ2lzIiwiQmxvY2tQeUhpc3RvcnkiLCJTVEFSVF9FVkFMX0hUTUwiLCJDT05TT0xFX0hUTUwiLCJORVdfQ09OU09MRV9MSU5FX0hUTUwiLCJDb25zb2xlTGluZVR5cGUiLCJURVhUIiwiSFRNTCIsIlBMT1QiLCJJTUFHRSIsIlRVUlRMRSIsIkVWQUwiLCJTVEFSVF9FVkFMIiwiVkFMVUUiLCJJTlBVVCIsIlRFU1RfQ0FTRSIsIkNvbnNvbGVMaW5lIiwiY29udGVudCIsIm9yaWdpbiIsIlNrIiwiY3VyckZpbGVuYW1lIiwiZXhlY3V0aW9uQnVmZmVyIiwiaW5kZXgiLCJmZmkiLCJyZW1hcFRvUHkiLCJyZW1vdmUiLCJDb25zb2xlTGluZVR1cnRsZSIsImFkZENsYXNzIiwid2hlcmUiLCJwcmVwZW5kIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIkNvbnNvbGVMaW5lSW1hZ2UiLCJhcHBlbmQiLCJDb25zb2xlTGluZVBsb3QiLCJDb25zb2xlTGluZVRleHQiLCJlbmNvZGVkVGV4dCIsImVuY29kZUhUTUwiLCJsaW5lRGF0YSIsInRvb2x0aXAiLCJDb25zb2xlTGluZVZhbHVlIiwiQ29uc29sZUxpbmVJbnB1dCIsInByb21wdE1lc3NhZ2UiLCJpbnB1dEZvcm0iLCJpbnB1dEJ0biIsImlucHV0R3JvdXAiLCJpbnB1dEJveCIsImlucHV0TXNnIiwibWFrZUludGVyYWN0aXZlIiwiaW5wdXQiLCJidXR0b24iLCJyZXNvbHZlT25DbGljayIsInN1Ym1pdHRlZFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN1Ym1pdEZvcm0iLCJ2YWwiLCJwcm9wIiwiY2xpY2siLCJrZXl1cCIsImUiLCJrZXlDb2RlIiwiZm9jdXMiLCJDb25zb2xlTGluZUV2YWx1YXRlIiwiQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlIiwidGFnIiwicHJpbnRlclRhZyIsIk1JTklNVU1fV0lEVEgiLCJNSU5JTVVNX0hFSUdIVCIsIkRFRkFVTFRfSEVJR0hUIiwiaGVpZ2h0IiwiY2xlYXIiLCJyZW1vdmVBbGwiLCJsaW5lQnVmZmVyIiwicGxvdEJ1ZmZlciIsImVtcHR5IiwidHVydGxlTGluZSIsIlR1cnRsZUdyYXBoaWNzIiwiZ2V0VHVydGxlTGluZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJhc3NldHMiLCJsb2FkQXNzZXQiLCJyZW5kZXIiLCJjdXJyZW50UHJpbnRlckRpbWVuc2lvbiIsInNhdmVUdXJ0bGVPdXRwdXQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1nIiwiSW1hZ2UiLCJkYXRhVXJsIiwidG9EYXRhVVJMIiwicGFnZSIsImVhY2giLCJhdHRyIiwic2hvdyIsImhpZGUiLCJsaW5lVGV4dCIsImZsdXNoIiwiY2hhckF0Iiwic3BsaXRMaW5lcyIsInNwbGl0IiwiYWRkQ29udGVudCIsImkiLCJwdXNoIiwicGxvdHMiLCJpbWFnZURhdGEiLCJpbWFnZUJ1ZmZlciIsImltYWdlIiwidmFsdWUiLCJwcmludGVkVmFsdWUiLCJpbnB1dEJ1ZmZlciIsInN0YXJ0RXZhbHVhdGlvbiIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJfSU1QT1JURURfREFUQVNFVFMiLCJfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMiLCJzZXRCdXR0b25Mb2FkZWQiLCJidG4iLCJyZW1vdmVDbGFzcyIsImxvYWRlZERhdGFzZXRzIiwic2lsZW50bHkiLCJlZGl0b3IiLCJpbXBvcnRzIiwiZGF0YXNldHMiLCJmb3JFYWNoIiwiQmxvY2tNaXJyb3JCbG9ja0VkaXRvciIsIkVYVFJBX1RPT0xTIiwiYXBwbHkiLCJzbHVnIiwid2hlbiIsImRvbmUiLCJmb3JjZUJsb2NrUmVmcmVzaCIsImJsb2NrRWRpdG9yIiwicmVtYWtlVG9vbGJveCIsImZhaWwiLCJhcmd1bWVudHMiLCJlcnJvciIsImFsd2F5cyIsImZpbmFsaXplU3Vic2NyaXB0aW9ucyIsInVybF9yZXRyaWV2YWxzIiwicm9vdCIsImltcG9ydERhdGFzZXRzIiwiZ2V0RGF0YXNldCIsImdldFNjcmlwdCIsImdldENvbXBsZXRlIiwiZ2V0U2t1bHB0IiwiYnVpbHRpbkZpbGVzIiwiZ2V0QmxvY2tseSIsInRleHRUb0Jsb2NrcyIsImhpZGRlbkltcG9ydHMiLCJnZXRKU09OIiwiYmxvY2tweSIsImRvY3VtZW50YXRpb24iLCJib2R5IiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJzbHVnZ2VkTmFtZSIsInRpdGxlTmFtZSIsImltZ1NyYyIsInRpdGxlIiwib3ZlcnZpZXciLCJhcHBlbmRUbyIsIkRJQUxPR19IVE1MIiwidGl0bGVUYWciLCJib2R5VGFnIiwiZm9vdGVyVGFnIiwib2theUJ1dHRvbiIsInllcyIsIm1vZGFsIiwib25jbG9zZSIsImRyYWdnYWJsZSIsIm9uIiwiY29uZmlybSIsIm5vIiwieWVzVGV4dCIsIkFTU0lHTk1FTlRfVkVSU0lPTl9DSEFOR0VEIiwiRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCIsIlNDUkVFTlNIT1RfQkxPQ0tTIiwiRVJST1JfVVBEQVRJTkdfU1VCTUlTU0lPTl9TVEFUVVMiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZpbGVOYW1lIiwicmVhZEFzVGV4dCIsInNsdWdnaWZ5IiwicmVwbGFjZSIsImV4dGVuc2lvbiIsIm1pbWV0eXBlIiwiYmxvYiIsIkJsb2IiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwibXNTYXZlQmxvYiIsInRlbXBvcmFyeURvd25sb2FkTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiQWJzdHJhY3RFZGl0b3IiLCJjaGFuZ2VFZGl0b3IiLCJ3YXRjaEZpbGUiLCJ1cGRhdGVkIiwib25GaWxlVXBkYXRlZCIsImRlbGV0ZWQiLCJvbkZpbGVEZWxldGVkIiwibmV3RmlsZW5hbWUiLCJvbGRFZGl0b3IiLCJnZXRGaWxlIiwidHJhY2tDdXJyZW50RmlsZSIsIm5ld0VkaXRvciIsInN0b3BXYXRjaGluZ0ZpbGUiLCJyZXN1bHQiLCJoYW5kbGUiLCJwYXJzZUZpbGVuYW1lIiwiQVNTSUdOTUVOVF9TRVRUSU5HUyIsImdldERvY3VtZW50YXRpb24iLCJtYWtlU3RhcnRWaWV3VGFiIiwiaWNvbiIsIm1vZGUiLCJBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MIiwiZmlsdGVyIiwic2V0dGluZyIsInByZXR0eU5hbWUiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MIiwiQkxPQ0siLCJzYXZlQXNzaWdubWVudFNldHRpbmdzIiwiY2xpZW50TmFtZSIsInNlcnZlck5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJzdGFydF92aWV3IiwiQXNzaWdubWVudFNldHRpbmdzVmlldyIsImRpcnR5IiwiY3VycmVudExpc3RlbmVyIiwidXBkYXRlSGFuZGxlIiwibmV3Q29udGVudHMiLCJBc3NpZ25tZW50U2V0dGluZ3MiLCJleHRlbnNpb25zIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsIk1BUktET1dOX0VESVRPUl9IVE1MIiwiTWFya2Rvd25FZGl0b3JWaWV3IiwibWRlIiwiZWxlbWVudCIsImF1dG9Eb3dubG9hZEZvbnRBd2Vzb21lIiwiZm9yY2VTeW5jIiwibWluSGVpZ2h0IiwicmVuZGVyaW5nQ29uZmlnIiwiY29kZVN5bnRheEhpZ2hsaWdodGluZyIsImluZGVudFdpdGhUYWJzIiwidGFiU2l6ZSIsImN1cnJlbnRTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJjb2RlbWlycm9yIiwic2V0VGltZW91dCIsInJlZnJlc2giLCJkaXNwb3NlIiwib2ZmIiwiTWFya2Rvd25FZGl0b3IiLCJtYWtlVGFiIiwiUFlUSE9OX0VESVRPUl9IVE1MIiwiSElTVE9SWV9UT09MQkFSX0hUTUwiLCJjb252ZXJ0SXB5bmJUb1B5dGhvbiIsImlweW5iIiwiaXNVc2FibGUiLCJjZWxsIiwiY2VsbF90eXBlIiwic291cmNlIiwic3RhcnRzV2l0aCIsIm1ha2VQeXRob24iLCJjZWxscyIsIlB5dGhvbkVkaXRvclZpZXciLCJCbG9ja01pcnJvciIsInJlYWRPbmx5IiwibWFrZVN1YnNjcmlwdGlvbnMiLCJsaW5lRXJyb3JTdWJzY3JpcHRpb24iLCJsaW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uIiwid29ya3NwYWNlIiwiY29uZmlndXJlQ29udGV4dE1lbnUiLCJvcHRpb25zIiwiZW5hYmxlZCIsImNhbGxiYWNrIiwib2xkRmlsZW5hbWUiLCJjdXJyZW50Qk1MaXN0ZW5lciIsImFkZENoYW5nZUxpc3RlbmVyIiwiaXNQYXJzb25zIiwibGluZXMiLCJzZXRIaWdobGlnaHRlZExpbmVzIiwiZGVsZXRlRmlsZUxvY2FsbHlfIiwic2V0Q29kZSIsImNsZWFySGlnaGxpZ2h0ZWRMaW5lcyIsImdldENvZGUiLCJyZW1vdmVDaGFuZ2VMaXN0ZW5lciIsImNsZWFyTGluZVN1YnNjcmlwdGlvbnMiLCJzZXRNb2RlIiwiaXNSZWFkT25seSIsImVuZHNXaXRoIiwiUHl0aG9uRWRpdG9yIiwiVEFHU19FRElUT1JfSFRNTCIsIlRhZ3NFZGl0b3JWaWV3IiwiVGFnc0VkaXRvciIsIlRFWFRfRURJVE9SX0hUTUwiLCJUZXh0RWRpdG9yVmlldyIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJzaG93Q3Vyc29yV2hlblNlbGVjdGluZyIsImxpbmVOdW1iZXJzIiwiZmlyc3RMaW5lTnVtYmVyIiwiaW5kZW50VW5pdCIsImV4dHJhS2V5cyIsImNtIiwiYmx1ciIsInNldFZhbHVlIiwiZ2V0VmFsdWUiLCJUZXh0RWRpdG9yIiwiRWRpdG9yc0VudW0iLCJTVUJNSVNTSU9OIiwiQVNTSUdOTUVOVCIsIklOU1RSVUNUSU9OUyIsIk9OX1JVTiIsIk9OX0NIQU5HRSIsIk9OX0VWQUwiLCJTVEFSVElOR19DT0RFIiwiU0FNUExFX1NVQk1JU1NJT05TIiwiSU5TVFJVQ1RPUl9GSUxFIiwiU1BFQ0lBTF9OQU1FU1BBQ0VTIiwiQVZBSUxBQkxFX0VESVRPUlMiLCJFRElUT1JTX0hUTUwiLCJyZWdpc3RlcmVkXyIsImV4dGVuc2lvbnNfIiwiYnlOYW1lXyIsInJlZ2lzdGVyRWRpdG9yIiwiaW5zdGFuY2UiLCJleGl0IiwiZW50ZXIiLCJzcGFjZSIsImxhc3RJbmRleE9mIiwiZXhlY3V0aW9uTW9kZWwiLCJjb25maWd1cmF0aW9ucyIsIlJ1bkNvbmZpZ3VyYXRpb24iLCJldmFsIiwiRXZhbENvbmZpZ3VyYXRpb24iLCJPblJ1bkNvbmZpZ3VyYXRpb24iLCJPbkNoYW5nZUNvbmZpZ3VyYXRpb24iLCJPbkV2YWxDb25maWd1cmF0aW9uIiwiY29uZmlndXJlIiwiZ2V0U2t1bHB0T3B0aW9ucyIsIm9uRXhlY3V0aW9uQmVnaW4iLCJvbkV4ZWN1dGlvbkVuZCIsInJlcG9ydCIsInJlc2V0U3R1ZGVudE1vZGVsIiwicmVzZXRSZXBvcnRzIiwicmVzZXRFeGVjdXRpb25CdWZmZXIiLCJ0aGVuIiwiZmFpbHVyZSIsImRpc2FibGVGZWVkYmFjayIsInNob3dFcnJvcnMiLCJleGVjdXRpb25FbmRfIiwiZXZhbHVhdGlvbklucHV0IiwidXNlcklucHV0IiwibWlzY2V2YWwiLCJhc3luY1RvUHJvbWlzZSIsImltcG9ydE1haW5XaXRoQm9keSIsIkZJTEVOQU1FIiwicHJvZ3JhbXMiLCJ0cmltIiwic2F2ZUNvZGUiLCJ2ZXJpZnlDb2RlIiwidXBkYXRlUGFyc2UiLCJydW5JbnN0cnVjdG9yQ29kZSIsIm1vZHVsZSIsImV4ZWN1dGlvblJlcG9ydHMiLCJwcmVzZW50RmVlZGJhY2siLCIkZCIsIkVNUFRZX01PRFVMRSIsIkNvbmZpZ3VyYXRpb24iLCJxdWV1ZWRJbnB1dCIsImluQnJvd3NlciIsIm9wZW5GaWxlIiwiX19mdXR1cmVfXyIsInB5dGhvbjMiLCJyZWFkIiwiaW1wb3J0RmlsZSIsImZpbGV3cml0ZSIsIndyaXRlRmlsZSIsInByaW50IiwiaW5wdXRmdW4iLCJpbnB1dGZ1blRha2VzUHJvbXB0IiwiaW1hZ2VQcm94eSIsImdldEltYWdlUHJveHkiLCJyZXRhaW5HbG9iYWxzIiwid2FybiIsIkVycm9yIiwicG9wIiwiYWZ0ZXJTaW5nbGVFeGVjdXRpb24iLCJwcmludFZhbHVlIiwicmVtYXBUb0pzIiwiXyIsIiRyIiwicmVqZWN0IiwieCIsIkZBSUxFRCIsIlN0dWRlbnRDb25maWd1cmF0aW9uIiwiVVRJTElUWV9NT0RVTEVfQ09ERSIsIiRza19tb2RfaW5zdHJ1Y3RvciIsIkluc3RydWN0b3JDb25maWd1cmF0aW9uIiwiZXhlY0xpbWl0IiwiaW5zdHJ1Y3RvckZpbGVzIiwiYnVpbHRpbiIsIk9TRXJyb3IiLCJpbm5lck5hbWUiLCJJbXBvcnRFcnJvciIsImNsZWFyVGltZW91dCIsIldSQVBfSU5TVFJVQ1RPUl9DT0RFIiwic3R1ZGVudENvZGUiLCJpbnN0cnVjdG9yQ29kZSIsInF1aWNrIiwiaXNTYWZlIiwic2FmZUNvZGUiLCJpbmRlbnRlZENvZGUiLCJpbmRlbnQiLCJkaXNhYmxlVGlmYSIsInN0dWRlbnRDb2RlU2FmZSIsImV2YWx1YXRpb24iLCJkdW1teU91dFNhbmRib3giLCJsaW5lT2Zmc2V0IiwiTkVXX0xJTkVfUkVHRVgiLCJTVUNDRVNTIiwiU0NPUkUiLCJvbGRTY29yZSIsIkhJREUiLCJzY3JvbGxpbmciLCJzY3JvbGxUb0JvdHRvbSIsInRwJG5hbWUiLCJwcmVzZW50SW50ZXJuYWxFcnJvciIsInRpZmFBbmFseXNpcyIsIk9uU2FtcGxlQ29uZmlndXJhdGlvbiIsIkJvb2xlYW4iLCJmaW5pc2hUdXJ0bGVzIiwiYmVnaW5FdmFsIiwicGFyc2VyIiwidmVyaWZpZXIiLCJTYW1wbGVDb25maWd1cmF0aW9uIiwiZXhlY0xpbWl0RnVuY3Rpb24iLCJkaXNhYmxlVGltZW91dCIsIkluZmluaXR5IiwicmVxdWVzdHNHZXQiLCJvcGVuVVJMIiwiaXNGb3JiaWRkZW4iLCJ2YXJpYWJsZXMiLCJsb2NhbHMiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicGFyc2VHbG9iYWxzIiwicHJvcGVydGllcyIsIm1vZHVsZXMiLCJhc3QiLCJ2aXNpdGVkTGluZXMiLCJTZXQiLCJ2aXNpdEJvZHkiLCJub2RlIiwibGluZW5vIiwic3RhdGVtZW50Iiwib3JlbHNlIiwiZmluYWxib2R5IiwiQXJyYXkiLCJmcm9tIiwiYXN0RnJvbVBhcnNlIiwiY3N0IiwiZmxhZ3MiLCJnZXRMaW5lcyIsInByZXNlbnRSdW5FcnJvciIsIkZFRURCQUNLX0hUTUwiLCJmZWVkYmFja01vZGVsIiwib2Zmc2V0IiwidG9wIiwidmlzaWJpbGl0eUJ1ZmZlciIsInRvcE9mRWxlbWVudCIsImJvdHRvbU9mRWxlbWVudCIsImJvdHRvbU9mU2NyZWVuIiwidG9wT2ZTY3JlZW4iLCJleGVjdXRpb25SZXN1bHRzIiwiTUVTU0FHRSIsIkNBVEVHT1JZIiwiTEFCRUwiLCJEQVRBIiwiaGlkZVNjb3JlIiwiZmluZEZpcnN0RXJyb3JMaW5lIiwic3R1ZGVudFJlcG9ydCIsInVuY292ZXJlZExpbmVzIiwidXBkYXRlRmVlZGJhY2siLCJub3RpZnlGZWVkYmFja1VwZGF0ZSIsIm1zZyIsImFyZ3MiLCJ2IiwiY29udmVydFNrdWxwdEVycm9yIiwiZmlsZW5hbWVFeGVjdXRlZCIsInRyYWNlYmFjayIsImZyYW1lIiwic2NvcGUiLCJmZWVkYmFja0RhdGEiLCJwb3NpdGlvbiIsImZyaWVuZGx5TmFtZSIsImhpZGVJZkVtcHR5IiwiRklMRVNfSFRNTCIsIk5FV19JTlNUUlVDVE9SX0ZJTEVfRElBTE9HX0hUTUwiLCJTVEFSVElOR19GSUxFUyIsIkJBU0lDX05FV19GSUxFUyIsIkRFTEVUQUJMRV9TSU1QTEVfRklMRVMiLCJCbG9ja1B5RmlsZSIsIm93bmVyIiwiY29uY2F0ZW5hdGVkRmlsZSIsIm1vZGVsRmlsZUxpc3QiLCJtb2RlbEZpbGVzIiwiaGFzT3duUHJvcGVydHkiLCJjcmVhdGVDb25jYXRlbmF0ZWRGaWxlIiwiZmlsZXNfIiwibW91bnRGaWxlcyIsIndhdGNoTW9kZWwiLCJ3YXRjaGVzXyIsImZpbGVzeXN0ZW0iLCJmaWxlQXJyYXkiLCJjaGFuZ2VzIiwiY2hhbmdlIiwibW9kZWxGaWxlIiwibm90aWZ5V2F0Y2hlcyIsIm9ic2VydmVJbkFycmF5XyIsImFycmF5IiwiY29kZUJ1bmRsZSIsImV4aXN0aW5nRmlsZSIsIm9ic2VydmVGaWxlXyIsImZvdW5kIiwiZmlsZXR5cGUiLCJleHRlbnNpb25SZWdleCIsImV4ZWMiLCJpcyIsIkZPT1RFUl9IVE1MIiwiY3VycmVudElkIiwiZWRpdEV2ZW50cyIsInNlbGVjdG9yIiwiZWRpdElkIiwiZW50cnkiLCJmaWxlX3BhdGgiLCJldmVudF90eXBlIiwiUkVNQVBfRVZFTlRfVFlQRVMiLCJkaXNwbGF5ZWQiLCJwcmV0dHlQcmludERhdGVUaW1lIiwiY2xpZW50X3RpbWVzdGFtcCIsImRpc2FibGUiLCJvcHRpb24iLCJkaXNhYmxlZCIsImlzRWRpdEV2ZW50IiwiZXZ0IiwicGFyc2VJbnQiLCJtb250aE5hbWVzIiwid2Vla0RheXMiLCJpc1NhbWVEYXkiLCJzZWNvbmQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInRpbWVTdHJpbmciLCJub3ciLCJEYXRlIiwicGFzdCIsInRvTG9jYWxlVGltZVN0cmluZyIsImRheVN0ciIsImdldERheSIsIm1vbnRoU3RyIiwiZGF0ZSIsImdldEhpc3RvcnkiLCJyZXZlcnNlIiwicmVkdWNlIiwiY29tcGxldGUiLCJlbGVtIiwiY29tcGxldGVfc3RyIiwidGltZSIsIm5ld19saW5lIiwiaGlnaGxpZ2h0VGltZW91dCIsImJsb2NrIiwiaGxqcyIsImhpZ2hsaWdodEJsb2NrIiwiVFJBQ0VfSFRNTCIsIlJFVFJZSU5HIiwiT0ZGTElORSIsInN0b3JhZ2UiLCJxdWV1ZSIsImdldERlZmF1bHQiLCJNQVhfUVVFVUVfU0laRSIsIlRJTUVSX0RFTEFZIiwiRkFJTF9ERUxBWSIsInRpbWVycyIsIm92ZXJsYXkiLCJibG9ja2luZ0F0dGVtcHRzIiwiY2FjaGVkRmlsZW5hbWVzIiwiY3JlYXRlU3Vic2NyaXB0aW9ucyIsImNoZWNrQ2FjaGVzIiwiY2hlY2tJUCIsIm9sZElQIiwiaXAiLCJzZXQiLCJfcG9zdExhdGVzdFJldHJ5IiwicHVzaEFueVF1ZXVlZCIsIl9wb3N0UmV0cnkiLCJjcmVhdGVGaWxlU3Vic2NyaXB0aW9uIiwiY3JlYXRlU2VydmVyRGF0YSIsIm1pY3Jvc2Vjb25kcyIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInNob3dPdmVybGF5IiwiYXR0ZW1wdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjc3MiLCJoaWRlT3ZlcmxheSIsIl9lbnF1ZXVlRGF0YSIsImNhY2hlIiwiX2RlcXVldWVEYXRhIiwic3BsaWNlIiwiZGVsYXkiLCJwb3N0UmVxdWVzdCIsInBvc3QiLCJ0ZXh0U3RhdHVzIiwicmVxdWVzdCIsImNhY2hlZFRpbWUiLCJfcG9zdEJsb2NraW5nIiwiYXR0ZW1wdHMiLCJlcnJvclRocm93biIsImxvYWRBc3NpZ25tZW50RGF0YV8iLCJFUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQiLCJkaXJlY3RvcnkiLCJuZXdTdGF0dXMiLCJwb3N0U3RhdHVzQ2hhbmdlIiwiZXJyb3JDYWxsYmFjayIsImxvYWRfZmlsZSIsImhpZGRlbk92ZXJyaWRlIiwiZm9yY2VVcGRhdGUiLCJnZXRQbmdGcm9tQmxvY2tzIiwicG5nRGF0YSIsIm1vZCIsIm5vbmUiLCJub25lJCIsInByaW9yIiwidGltZWl0IiwiZnVuYyIsInB5Q2hlY2tBcmdzIiwiZGlmZmVyZW5jZSIsImRlYnVnIiwiZ2V0X291dHB1dCIsIml0ZW0iLCJ0b1NrdWxwdCIsImxpc3QiLCJyZXNldF9vdXRwdXQiLCJxdWV1ZV9pbnB1dCIsInB5Q2hlY2tUeXBlIiwiY2hlY2tTdHJpbmciLCJnZXRfcHJvZ3JhbSIsImdldF9ldmFsdWF0aW9uIiwidHJhY2VfbGluZXMiLCJnZXRfc3R1ZGVudF9lcnJvciIsInR1cGxlIiwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yIiwiYmFja3VwVGltZSIsImxpbWl0X2V4ZWN1dGlvbl90aW1lIiwiZXhlY1N0YXJ0IiwidW5saW1pdF9leGVjdXRpb25fdGltZSIsInN1cHByZXNzX3Njcm9sbGluZyIsImdldF9wbG90cyIsIm91dHB1dHMiLCJncmFwaCIsInBsb3QiLCJuZXdQbG90IiwieSIsIlN0dWRlbnREYXRhIiwiYnVpbGRDbGFzcyIsIiRnYmwiLCIkbG9jIiwiX19pbml0X18iLCJuZXdEaWN0IiwiZGljdCIsImFic3RyIiwic2F0dHIiLCJzdHIiLCJvYmplY3RTZXRJdGVtIiwidW5maXhSZXNlcnZlZCIsImNhbGxfZiIsImt3YSIsInB5Q2hlY2tBcmdzTGVuIiwiY2FsbCIsImt3YXJncyIsImJ1aWx0aW5zIiwiZnVuY3Rpb25OYW1lIiwiaW5wdXRzIiwibXAkbG9va3VwIiwidHAkZ2V0YXR0ciIsImZ1bmN0aW9uT2JqZWN0IiwidHAkY2FsbCIsImNvX2t3YXJncyIsImNvX25hbWUiLCJnZXRfbmFtZXNfYnlfdHlwZSIsImV4Y2x1ZGVfYnVpbHRpbnMiLCJjaGVja0Jvb2wiLCJwcm9wZXJ0eSIsImdldF92YWx1ZXNfYnlfdHlwZSIsImNhbGxzaW1PclN1c3BlbmQiLCJnZXRfc3R1ZGVudF9kYXRhIiwic2V0X2luc3RydWN0aW9ucyIsIm5ld0luc3RydWN0aW9ucyIsImdldF9tb2RlbF9pbmZvIiwiTE9DQUxfU1RPUkFHRV9SRUYiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIl9kYXRhIiwiU3RyaW5nIiwiZ2V0SXRlbSIsIm5hbWVzcGFjZSIsImlzX25ldyIsInNlcnZlcl90aW1lIiwic3RvcmVkX3RpbWUiLCJJR05PUkVEX0dMT0JBTFMiLCJwYXJzZWQiLCJwYXJzZVZhbHVlIiwiX19uYW1lX18iLCJmdWxsTGVuZ3RoIiwiZnVuY19jb2RlIiwiY29fdmFybmFtZXMiLCJzcSRsZW5ndGgiLCJib29sIiwibm1iZXIiLCJza1R5cGUiLCJpbnRfIiwiZmxvYXRfIiwiTnVtYmVyIiwiYXJyYXlDb250YWlucyIsIm5lZWRsZSIsImhheXN0YWNrIiwiYXJyYXlVbmlxdWUiLCJhIiwiY29uY2F0IiwiaiIsImV4cGFuZEFycmF5IiwiYWRkQXJyYXkiLCJyZW1vdmVBcnJheSIsImNvcHlBcnJheSIsImNsb25lTm9kZSIsImNsb25lIiwibm9kZVR5cGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm5vZGVWYWx1ZSIsImNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicmFuZG9tSW50ZWdlciIsImZsb29yIiwicmFuZG9tIiwiQmxvY2tseSIsIldvcmtzcGFjZVN2ZyIsInNodWZmbGUiLCJtZXRyaWNzIiwiZ2V0TWV0cmljcyIsInZpZXdXaWR0aCIsInZpZXdIZWlnaHQiLCJibG9ja3MiLCJnZXRUb3BCbG9ja3MiLCJtYXhpbWFsX2luY3JlYXNlIiwiZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSIsIm1vdmVCeSIsIm1vdmVFbGVtZW50cyIsIm1vdmVDaGVjayIsImlzU2tCdWlsdGluIiwib2JqIiwibG5nIiwiaXNBc3ROb2RlIiwibWl4ZWRSZW1hcFRvUHkiLCJrIiwia3ZzIiwiYXJyIiwic3VidmFsIiwiYXNzayQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Es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QUFJNXZCLEVBQUUsQ0FBQ2taLE9BQUgsQ0FBV2lSLEdBQWYsQ0FBbUJ5RixHQUFuQixDQUFQO0FBQ0gsR0FGTSxNQUVBLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ2hDLFdBQU81dkIsRUFBRSxDQUFDa1osT0FBSCxDQUFXa1gsS0FBWCxDQUFpQlIsR0FBakIsQ0FBUDtBQUNILEdBRk0sTUFFQSxJQUFJLE9BQU9BLEdBQVAsS0FBZSxTQUFuQixFQUE4QjtBQUNqQyxXQUFPLElBQUk1dkIsRUFBRSxDQUFDa1osT0FBSCxDQUFXK1QsSUFBZixDQUFvQjJDLEdBQXBCLENBQVA7QUFDSCxHQUZNLE1BRUEsSUFBRyxPQUFPQSxHQUFQLEtBQWUsVUFBbEIsRUFBOEI7QUFDakMsV0FBTyxJQUFJNXZCLEVBQUUsQ0FBQ2taLE9BQUgsQ0FBV2lSLEdBQWYsQ0FBbUJ5RixHQUFHLENBQUNwaUMsSUFBdkIsQ0FBUDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7QUM3T0Qsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoiYmxvY2tweS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImtvXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYmxvY2tweVwiLCBbXCJqUXVlcnlcIiwgXCJrb1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJibG9ja3B5XCJdID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwia29cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJsb2NrcHlcIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJrb1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rbm9ja291dF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmxvY2tweS5qc1wiKTtcbiIsImltcG9ydCBcIi4vY3NzL2Jsb2NrcHkuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3NzL2Jvb3RzdHJhcF9yZXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlV3JhcHBlcn0gZnJvbSBcInN0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHtFZGl0b3JzRW51bX0gZnJvbSBcImVkaXRvcnMuanNcIjtcclxuaW1wb3J0IHtEaXNwbGF5TW9kZXN9IGZyb20gXCJlZGl0b3IvcHl0aG9uLmpzXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCJzZXJ2ZXIuanNcIjtcclxuaW1wb3J0IHttYWtlSW50ZXJmYWNlLCBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zLCBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnN9IGZyb20gXCJpbnRlcmZhY2UuanNcIjtcclxuaW1wb3J0IHtFZGl0b3JzfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQmxvY2tQeUZpbGVTeXN0ZW0sXHJcbiAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZSxcclxuICAgIG1ha2VNb2RlbEZpbGUsXHJcbiAgICBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZSxcclxuICAgIFVOREVMRVRBQkxFX0ZJTEVTLFxyXG4gICAgVU5SRU5BTUFCTEVfRklMRVNcclxufSBmcm9tIFwiLi9maWxlc1wiO1xyXG5pbXBvcnQge3VwbG9hZEZpbGUsIGRvd25sb2FkRmlsZX0gZnJvbSBcIi4vZWRpdG9yL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlFbmdpbmV9IGZyb20gXCJlbmdpbmUuanNcIjtcclxuaW1wb3J0IHtCbG9ja1B5VHJhY2V9IGZyb20gXCIuL3RyYWNlXCI7XHJcbmltcG9ydCB7QmxvY2tQeUNvbnNvbGV9IGZyb20gXCIuL2NvbnNvbGVcIjtcclxuaW1wb3J0IHtCbG9ja1B5RmVlZGJhY2t9IGZyb20gXCJmZWVkYmFjay5qc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlTZXJ2ZXJ9IGZyb20gXCIuL3NlcnZlclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlEaWFsb2d9IGZyb20gXCIuL2RpYWxvZ1wiO1xyXG5pbXBvcnQge2xvYWRBc3NpZ25tZW50U2V0dGluZ3MsIG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbH0gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtCbG9ja1B5Q29yZ2lzLCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMsIF9JTVBPUlRFRF9EQVRBU0VUU30gZnJvbSBcIi4vY29yZ2lzXCI7XHJcbmltcG9ydCB7QmxvY2tQeUhpc3Rvcnl9IGZyb20gXCIuL2hpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCB7X0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTLCBfSU1QT1JURURfREFUQVNFVFN9O1xyXG5cclxuLyoqXHJcbiAqIE1ham9yIGVudHJ5IHBvaW50IGZvciBjcmVhdGluZyBhIEJsb2NrUHkgaW5zdGFuY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1B5IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gLSBVc2VyIGxldmVsIHNldHRpbmdzIChlLmcuLCB3aGF0IGVkaXRvciBtb2RlLCB3aGV0aGVyIHRvIG11dGUgc2VtYW50aWMgZXJyb3JzLCBldGMuKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFzc2lnbm1lbnQgLSBBc3NpZ25tZW50IGxldmVsIHNldHRpbmdzIChkYXRhIGFib3V0IHRoZSBsb2FkZWQgYXNzaWdubWVudCwgdXNlciwgc3VibWlzc2lvbiwgZXRjLilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdWJtaXNzaW9uIC0gSW5jbHVkZXMgdGhlIHNvdXJjZSBjb2RlIG9mIGFueSBwcm9ncmFtcyB0byBiZSBsb2FkZWRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiwgYXNzaWdubWVudCwgc3VibWlzc2lvbikge1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZGVsKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgIGlmIChhc3NpZ25tZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBc3NpZ25tZW50KGNvbmZpZ3VyYXRpb24sIGFzc2lnbm1lbnQsIHN1Ym1pc3Npb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRNYWluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgQmxvY2tQeSBvYmplY3QgYnkgaW5pdGlhbGl6aW5nIGl0cyBpbnRlcmZhY2UsXHJcbiAgICAgKiBtb2RlbCwgYW5kIGNvbXBvbmVudHMuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpbml0TWFpbigpIHtcclxuICAgICAgICB0aGlzLmluaXRVdGlsaXRpZXMoKTtcclxuICAgICAgICB0aGlzLmluaXRNb2RlbE1ldGhvZHMoKTtcclxuICAgICAgICB0aGlzLnR1cm5PbkhhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW50ZXJmYWNlKCk7XHJcbiAgICAgICAgdGhpcy5hcHBseU1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgYSBkZWZhdWx0IHZhbHVlIG9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gdGhlIGtleSB0byBsb29rIHVwIGEgdmFsdWUgZm9yXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdFZhbHVlIC0gaWYgdGhlIGtleSBpcyBub3QgZm91bmQgYW55d2hlcmUsIHVzZSB0aGlzIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGdldFNldHRpbmcoa2V5LCBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICBpZiAoa2V5IGluIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1trZXldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhbFNldHRpbmdzXy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFNldHRpbmdzXy5nZXQoa2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBtb2RlbCB0byBpdHMgZGVmYXVsdHMuXHJcbiAgICAgKlxyXG4gICAgICogQ2F0ZWdvcmllczpcclxuICAgICAqICAgKiB1c2VyOiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IHVzZXIgKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogYXNzaWdubWVudDogdmFsdWVzIGZvciB0aGUgY3VycmVudCBhc3NpZ25tZW50IChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIHN1Ym1pc3Npb246IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgc3VibWlzc2lvbiAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBkaXNwbGF5OiBmbGFncyByZWxhdGVkIHRvIGN1cnJlbnQgdmlzaWJpbGl0eSAoc3RvcmVkIHRvIGxvY2FsU2V0dGluZ3MpXHJcbiAgICAgKiAgICogc3RhdHVzOiBtZXNzYWdlcyByZWxhdGVkIHRvIGN1cnJlbnQgc3RhdHVzIChub3Qgc3RvcmVkKVxyXG4gICAgICogICAqIGV4ZWN1dGlvbjogdmFsdWVzIHJlbGF0ZWQgdG8gbGFzdCBydW4gKG5vdCBzdG9yZWQpXHJcbiAgICAgKiAgICogY29uZmlndXJhdGlvbjogY29uc3RhbnQgdmFsdWVzIHJlbGF0ZWQgdG8gc2V0dXAgKG5vdCBzdG9yZWQpXHJcbiAgICAgKi9cclxuICAgIGluaXRNb2RlbChjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgLy8gQ29ubmVjdCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgdGhpcy5sb2NhbFNldHRpbmdzXyA9IG5ldyBMb2NhbFN0b3JhZ2VXcmFwcGVyKFwibG9jYWxTZXR0aW5nc1wiKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uXyA9IGNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgICAgIHRoaXMubW9kZWwgPSB7XHJcbiAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmlkXCJdKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIubmFtZVwiXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgeW91IGFyZSBhbiBPd25lciAoY2FuIG1vZGlmeSB0aGUgYXNzaWdubWVudCksIEdyYWRlciAoY2FuIHZpZXdcclxuICAgICAgICAgICAgICAgICAqIHRoZSBhc3NpZ25tZW50cycgaW5mb3JtYXRpb24pIG9yIFN0dWRlbnQgKGNhbiBub3Qgc2VlIGFueSBpbnN0cnVjdG9yIHN0dWZmKS5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICByb2xlOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInVzZXIucm9sZVwiLCBcIm93bmVyXCIpKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudCBjb3Vyc2UgZm9yIHRoaXMgdXNlclxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VJZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5jb3Vyc2VfaWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50IGFzc2lnbm1lbnQgZ3JvdXAgdGhhdCB0aGlzIHVzZXIgaXMgaW5zaWRlXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuZ3JvdXBfaWRcIl0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzc2lnbm1lbnQ6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga28ub2JzZXJ2YWJsZShcIlNjcmF0Y2ggQ2FudmFzXCIpLFxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zOiBrby5vYnNlcnZhYmxlKFwiV2VsY29tZSB0byBCbG9ja1B5LiBUcnkgZWRpdGluZyBhbmQgcnVubmluZyB0aGUgY29kZSBiZWxvdy5cIiksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBodW1hbi1mcmllbmRseSBVUkwgdG8gdXNlIGFzIGEgc2hvcnRjdXQgZm9yIHRoaXMgYXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB1cmw6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3YXJuaW5nIG1lc3NhZ2UgaWYgbWF6ZVxyXG4gICAgICAgICAgICAgICAgdHlwZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0aW5nQ29kZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5zdGFydGluZ19jb2RlXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgb25SdW46IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fcnVuXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fY2hhbmdlXCJdIHx8IG51bGwpLFxyXG4gICAgICAgICAgICAgICAgb25FdmFsOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX2V2YWxcIl0gfHwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICBleHRyYUluc3RydWN0b3JGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3RhcnRpbmdGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIGZvcmtlZElkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgZm9ya2VkVmVyc2lvbjoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIG93bmVySWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIHZlcnNpb246IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICB0YWdzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlU3VibWlzc2lvbnM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICByZXZpZXdlZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5yZXZpZXdlZFwiXSksXHJcbiAgICAgICAgICAgICAgICBwdWJsaWM6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQucHVibGljXCJdKSxcclxuICAgICAgICAgICAgICAgIGhpZGRlbjoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5oaWRkZW5cIl0pLFxyXG4gICAgICAgICAgICAgICAgaXBSYW5nZXM6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuaXBfcmFuZ2VzXCJdKSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwoY29uZmlndXJhdGlvbilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VibWlzc2lvbjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjb2RlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJzdWJtaXNzaW9uLmNvZGVcIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBleHRyYUZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBzY29yZToga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgIGNvcnJlY3Q6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudElkIGluZmVycmVkIGZyb20gYXNzaWdubWVudC5pZFxyXG4gICAgICAgICAgICAgICAgLy8gY291cnNlSWQgaW5mZXJyZWQgZnJvbSB1c2VyLmNvdXJzZUlkXHJcbiAgICAgICAgICAgICAgICAvLyB1c2VySWQgaW5mZXJyZWQgZnJvbSB1c2VyLmlkXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50VmVyc2lvbiBpbmZlcnJlZCBmcm9tIGFzc2lnbm1lbnQudmVyc2lvblxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25TdGF0dXM6IGtvLm9ic2VydmFibGUoXCJTdGFydGVkXCIpLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGluZ1N0YXR1czoga28ub2JzZXJ2YWJsZShcIk5vdFJlYWR5XCIpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnRseSB2aXNpYmxlIEZpbGUsIGlmIGFwcGxpY2FibGVcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBwcmVzZW50ZWQgd2l0aCB0aGUgaW5zdHJ1Y3RvciBzZXR0aW5ncyBhbmQgZmlsZXNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkuaW5zdHJ1Y3RvclwiLCBcImZhbHNlXCIpLnRvU3RyaW5nKCk9PT1cInRydWVcIiksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgdGhlIHByaW50ZXIgZnJvbSBzaG93aW5nIHRoaW5nc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBtdXRlUHJpbnRlcjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIChQeXRob24gVmlld3MpIFRoZSBjdXJyZW50IGVkaXRvciBtb2RlLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0Rpc3BsYXlNb2Rlc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHl0aG9uTW9kZToga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJkaXNwbGF5LnB5dGhvbi5tb2RlXCIsIERpc3BsYXlNb2Rlcy5TUExJVCkpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCBIaXN0b3J5IG1vZGUgaXMgZW5nYWdlZC5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5TW9kZToga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIGF1dG8tc2F2aW5nIGNoYW5nZXMgaW4gUHl0aG9uIGVkaXRvclxyXG4gICAgICAgICAgICAgICAgICogSWYgYW4gaW50ZWdlciwgc3BlY2lmaWVzIHRoZSBkZWxheSB0aGF0IHNob3VsZCBiZSB1c2VkIChtaWNyb3NlY29uZHMpLlxyXG4gICAgICAgICAgICAgICAgICogVGhpcyBpcyBuZXZlciBvbiBpbiBub24tUHl0aG9uIGVkaXRvcnMuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbHxpbnR9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGF1dG9TYXZlOiBrby5vYnNlcnZhYmxlKHRydWUpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgY29uc29sZSBpcyBmdWxsIHdpZHRoIGFuZCBmZWVkYmFjayBpcyBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYmlnQ29uc29sZToga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBoZWlnaHQgdG8gdXNlIGZvciB0aGUgY29uc29sZS5cclxuICAgICAgICAgICAgICAgICAqICAgIElmIG51bGwsIHRoZW4gbGV0IHRoZSBoZWlnaHQgcmVtYWluIHVuY2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICogICAgSWYgYSBudW1iZXIsIHRoZW4gdGhlXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzQ29uc29sZUhlaWdodDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25zb2xlSGVpZ2h0OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGljaCBwYW5lbCB0byBzaG93IGluIHRoZSBzZWNvbmQgcm93J3Mgc2Vjb25kIGNvbHVtblxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1NlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kUm93U2Vjb25kUGFuZWw6IGtvLm9ic2VydmFibGUoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgdHJhY2luZyB0aGUgY29kZSByaWdodCBub3dcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJhY2VFeGVjdXRpb246IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgbGlzdCBvZiBwcm9taXNlcyB0byBzdGlsbCByZXNvbHZlIHdoaWxlIGxvYWRpbmcgZGF0YXNldHNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheTxQcm9taXNlPn1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0RhdGFzZXRzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgdGVtcG9yYXJ5IGNoYW5nZWQgdmFsdWUgb2YgdGhlIGluc3RydWN0aW9ucyBoYXZlIGJlZW4gY2hhbmdlZCBmcm9tIHdoYXQgaXMgaW4gdGhlIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZEluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQSBob2xkZXIgZm9yIHRoZSB0aW1lciB0byB0cmlnZ2VyIG9uLWNoYW5nZXNcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9uQ2hhbmdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIHRoZSBjdXJyZW50IGZlZWRiYWNrIGFuZCBvdXRwdXQgY29ycmVzcG9uZHMgdG8gdGhlIGN1cnJlbnQgc3VibWlzc2lvbi5cclxuICAgICAgICAgICAgICAgICAqIFRoaXMgd291bGQgYmUgZmFsc2UgaWYgdGhlcmUgaXMgbm8gZmVlZGJhY2svb3V0cHV0IChpLmUuLCBjb2RlIGhhcyBub3QgYmVlbiBydW4pLFxyXG4gICAgICAgICAgICAgICAgICogb3IgaWYgdGhlIHVzZXIgaGFzIG1vZGlmaWVkIHRoZSBzdWJtaXNzaW9uIGFmdGVyIHRoZSBsYXN0IHJ1biAoZS5nLiwgYnkgZWRpdGluZ1xyXG4gICAgICAgICAgICAgICAgICogdGhlIHRleHQpLlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBkaXJ0eVN1Ym1pc3Npb246IGtvLm9ic2VydmFibGUodHJ1ZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUltYWdlOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVJbWFnZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb25TdGF0dXM6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgb25FeGVjdXRpb246IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGVjdXRpb246IHtcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIGFib3V0IGluLXByb2dyZXNzIGV4ZWN1dGlvbnNcclxuICAgICAgICAgICAgICAgIHJlcG9ydHM6IHt9LFxyXG4gICAgICAgICAgICAgICAgLy8gbGlzdCBvZiBPdXRwdXQgb2JqZWN0c1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gcmVsYXRlZCB0byBhIHN0dWRlbnQgcnVuXHJcbiAgICAgICAgICAgICAgICBzdHVkZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RyOiB0aGUgZmlsZW5hbWUgdGhhdCB3YXMgbGFzdCBleGVjdXRlZCBhbmQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZXNlIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0ZXA6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTdGVwOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGluZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TGluZToga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBhcnJheSBvZiBzaW1wbGUgb2JqZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFjZURhdGE6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFjZVN0ZXA6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWN0dWFsIGV4ZWN1dGlvbiByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiBrby5vYnNlcnZhYmxlKG51bGwpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gcmVsYXRlZCB0byBmZWVkYmFjayBmcm9tIHRoZSBpbnN0cnVjdG9yIHJ1blxyXG4gICAgICAgICAgICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHIgKG1hcmtkb3duKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJSZWFkeVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzRXJyb3I6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNVbmNvdmVyZWQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlc3VsdHMgb2YgdGhlIGxhc3QgZXhlY3V0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRnVuY3Rpb25zIHRvIGZpcmUgd2hlbiBjZXJ0YWluIGV2ZW50cyBvY2N1clxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXaGVuIHRoZSBzdHVkZW50IGdldHMgYSBzdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiY2FsbGJhY2suc3VjY2Vzc1wiXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBzZXJ2ZXIgaXMgY29ubmVjdGVkLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHNlcnZlckNvbm5lY3RlZDoga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJzZXJ2ZXIuY29ubmVjdGVkXCIsIHRydWUpKSxcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgYmxvY2tseVBhdGg6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiYmxvY2tseS5wYXRoXCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50UG9pbnQ6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiYXR0YWNobWVudC5wb2ludFwiXSxcclxuICAgICAgICAgICAgICAgIC8vIEpRdWVyeSBvYmplY3RcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIE1hcHMgY29kZXMgKCdsb2dfZXZlbnQnLCAnc2F2ZV9jb2RlJykgdG8gVVJMc1xyXG4gICAgICAgICAgICAgICAgdXJsczogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJ1cmxzXCJdIHx8IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBpbml0SW50ZXJmYWNlKCkge1xyXG4gICAgICAgIGxldCBjb25zdGFudHMgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgbGV0IGd1aSA9IG1ha2VJbnRlcmZhY2UodGhpcyk7XHJcbiAgICAgICAgY29uc3RhbnRzLmNvbnRhaW5lciA9ICQoY29uc3RhbnRzLmF0dGFjaG1lbnRQb2ludCkuaHRtbCgkKGd1aSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsb2FkQXNzaWdubWVudChhc3NpZ25tZW50X2lkKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNlcnZlci5sb2FkQXNzaWdubWVudChhc3NpZ25tZW50X2lkKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVGFncyh0YWdzKSB7XHJcbiAgICAgICAgLy8gQWxyZWFkeSBhIEpTT04gbGlzdCByZXByZXNlbnRpbmcgdGFnc1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTYW1wbGVTdWJtaXNzaW9ucyhzYW1wbGVzKSB7XHJcbiAgICAgICAgLy8gQWxyZWFkeSBhIEpTT04gbGlzdCByZXByZXNlbnRpbmcgc2FtcGxlc1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdWJtaXNzaW9uKHN1Ym1pc3Npb24pIHtcclxuICAgICAgICBpZiAoIXN1Ym1pc3Npb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUT0RPOiBXaGF0IGlmIHN1Ym1pc3Npb25zJyBhc3NpZ25tZW50IHZlcnNpb24gYW5kIHRoZSBhc3NpZ25tZW50cycgdmVyc2lvbiBjb25mbGljdD9cclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uaWQoc3VibWlzc2lvbi5pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoc3VibWlzc2lvbi5jb2RlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWJtaXNzaW9uLmNvcnJlY3QpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5zY29yZShzdWJtaXNzaW9uLnNjb3JlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZW5kcG9pbnQoc3VibWlzc2lvbi5lbmRwb2ludCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnVybChzdWJtaXNzaW9uLnVybCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnZlcnNpb24oc3VibWlzc2lvbi52ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZ3JhZGluZ1N0YXR1cyhzdWJtaXNzaW9uLmdyYWRpbmdfc3RhdHVzKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uc3VibWlzc2lvblN0YXR1cyhzdWJtaXNzaW9uLnN1Ym1pc3Npb25fc3RhdHVzKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnVzZXIuY291cnNlSWQoc3VibWlzc2lvbi5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKHN1Ym1pc3Npb24uZXh0cmFfZmlsZXMsIHRoaXMubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQXNzaWdubWVudERhdGFfKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLnJlc2V0SW50ZXJmYWNlKCk7XHJcbiAgICAgICAgbGV0IHdhc1NlcnZlckNvbm5lY3RlZCA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKGZhbHNlKTtcclxuICAgICAgICBsZXQgYXNzaWdubWVudCA9IGRhdGEuYXNzaWdubWVudDtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaWQoYXNzaWdubWVudC5pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnZlcnNpb24oYXNzaWdubWVudC52ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuY291cnNlSWQoYXNzaWdubWVudC5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRJZChhc3NpZ25tZW50LmZvcmtlZF9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmZvcmtlZFZlcnNpb24oYXNzaWdubWVudC5mb3JrZWRfdmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbihhc3NpZ25tZW50LmhpZGRlbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKGFzc2lnbm1lbnQucmV2aWV3ZWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5wdWJsaWMoYXNzaWdubWVudC5wdWJsaWMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC50eXBlKGFzc2lnbm1lbnQudHlwZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnVybChhc3NpZ25tZW50LnVybCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmlwUmFuZ2VzKGFzc2lnbm1lbnQuaXBfcmFuZ2VzKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKGFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQubmFtZShhc3NpZ25tZW50Lm5hbWUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZShhc3NpZ25tZW50Lm9uX2NoYW5nZSB8fCBudWxsKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudC5vbl9jaGFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShcIiFvbl9jaGFuZ2UucHlcIiwgYXNzaWdubWVudC5vbl9jaGFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKGFzc2lnbm1lbnQub25fZXZhbCB8fCBudWxsKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudC5vbl9ldmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUoXCIhb25fZXZhbC5weVwiLCBhc3NpZ25tZW50Lm9uX2V2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oYXNzaWdubWVudC5vbl9ydW4pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUoYXNzaWdubWVudC5zdGFydGluZ19jb2RlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub3duZXJJZChhc3NpZ25tZW50Lm93bmVyX2lkKTtcclxuICAgICAgICBsb2FkQXNzaWdubWVudFNldHRpbmdzKHRoaXMubW9kZWwsIGFzc2lnbm1lbnQuc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMubG9hZFRhZ3MoYXNzaWdubWVudC50YWdzKTtcclxuICAgICAgICB0aGlzLmxvYWRTYW1wbGVTdWJtaXNzaW9ucyhhc3NpZ25tZW50LnNhbXBsZV9zdWJtaXNzaW9ucyk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoYXNzaWdubWVudC5leHRyYV9pbnN0cnVjdG9yX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfc3RhcnRpbmdfZmlsZXMsIHRoaXMubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpO1xyXG4gICAgICAgIHRoaXMubG9hZFN1Ym1pc3Npb24oZGF0YS5zdWJtaXNzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKHRydWUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG51bGwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQod2FzU2VydmVyQ29ubmVjdGVkKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuY29yZ2lzLmxvYWREYXRhc2V0cyh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNlcnZlci5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1vZGVsTWV0aG9kcygpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5tb2RlbDtcclxuICAgICAgICBtb2RlbC51aSA9IHtcclxuICAgICAgICAgICAgcm9sZToge1xyXG4gICAgICAgICAgICAgICAgaXNHcmFkZXI6IGtvLnB1cmVDb21wdXRlZCgoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudXNlci5yb2xlKCkgPT09IFwib3duZXJcIiB8fCBtb2RlbC51c2VyLnJvbGUoKSA9PT0gXCJncmFkZXJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBpc0NoYW5nZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucygpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuaW5zdHJ1Y3Rpb25zLmlzQ2hhbmdlZCgpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51dGlsaXRpZXMubWFya2Rvd24obW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKCkpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51dGlsaXRpZXMubWFya2Rvd24obW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICByZXNldDogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMobnVsbClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWVudToge1xyXG4gICAgICAgICAgICAgICAgY2FuTWFya1N1Ym1pdHRlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSB8fCBtb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB0ZXh0TWFya1N1Ym1pdHRlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwudWkubWVudS5pc0NvbXBsZXRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFzc2lnbm1lbnQgY2xvc2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC51aS5tZW51LmlzU3VibWl0dGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVvcGVuIGZvciBlZGl0aW5nXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlN1Ym1pdCBlYXJseVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tNYXJrU3VibWl0dGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLnVpLm1lbnUuaXNDb21wbGV0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSBjYW5ub3QgcmVvcGVuIGNsb3NlZCBhc3NpZ25tZW50cy4gQ29udGFjdCBhIGdyYWRlciFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC51aS5tZW51LmlzU3VibWl0dGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uU3RhdHVzKFwiaW5Qcm9ncmVzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5kZWxheWVkUnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uU3RhdHVzKFwiU3VibWl0dGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJzdWJtaXR0ZWRcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzQ29tcGxldGVkOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uc3VibWlzc2lvblN0YXR1cygpLnRvTG93ZXJDYXNlKCkgPT09IFwiY29tcGxldGVkXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Vjb25kUm93OiB7XHJcbiAgICAgICAgICAgICAgICBpc0ZlZWRiYWNrVmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0tcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc1RyYWNlVmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0VcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0NvbnNvbGVTaG93VmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuc2Vjb25kUm93LmlzRmVlZGJhY2tWaXNpYmxlKCkgfHwgbW9kZWwudWkuc2Vjb25kUm93LmlzVHJhY2VWaXNpYmxlKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hMYWJlbDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlldyBUcmFjZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGFkdmFuY2VTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UGFuZWwgPSBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDSyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uc29sZToge1xyXG4gICAgICAgICAgICAgICAgc2l6ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTEyXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC02XCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBoaWRlRXZhbHVhdGU6IGtvLnB1cmVDb21wdXRlZCggKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUV2YWx1YXRlKCkgfHwgIW1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbigpID09PSBTdGF0dXNTdGF0ZS5BQ1RJVkVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICAgICAgICAgIGJhZGdlOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1ub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtcnVudGltZS1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1zeW50YXgtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW50ZXJuYWwtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc2VtYW50aWMtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZlZWRiYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1mZWVkYmFjay1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29tcGxldGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXByb2JsZW0tY29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJubyBlcnJvcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vLWVycm9yc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUnVudGltZSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTeW50YXggRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRWRpdG9yIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW50ZXJuYWwgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxnb3JpdGhtIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3Rpb25zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnN0cnVjdGlvbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkluY29ycmVjdCBBbnN3ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyBlcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cmFjZToge1xyXG4gICAgICAgICAgICAgICAgaGFzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBsaW5lOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSB8fCBzdGVwID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vIHRyYWNlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkJlZm9yZSBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IGxhc3RTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmlzaGVkIHJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHdoeSBhcmUgdGhlc2UgbnVtYmVycyB3b25reT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTGluZSBcIisodHJhY2VEYXRhW3N0ZXBdLmxpbmUtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXMgPSBNYXRoLm1heCgwLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHByZXZpb3VzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBNYXRoLm1pbihtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG5leHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RTdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhY2VEYXRhID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhY2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBsYXN0U3RlcDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNlRGF0YVtzdGVwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsZXM6IHtcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpIHx8ICFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGFzQ29udGVudHM6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFuc3dlci5weVwiOiByZXR1cm4gbW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhaW5zdHJ1Y3Rpb25zLm1kXCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2NoYW5nZS5weVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMoKS5zb21lKGZpbGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuZmlsZW5hbWUoKSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhdGFncy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnRhZ3MoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuc2FtcGxlU3VibWlzc2lvbnMoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWRkOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj90YWdzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9zZXR0aW5ncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIGZpeCBleHRyYWZpbGVzIGZvciBpbnN0cnVjdG9yIGFuZCBzdHVkZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fZXZhbC5weVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5vbkV2YWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdJbnN0cnVjdG9yRmlsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZShwYXRoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdHVkZW50RmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBleHRyYUluc3RydWN0b3JGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0YXJ0aW5nRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdG9yczoge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudDoga28ucHVyZUNvbXB1dGVkKCAoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVkaXRvcnMuZ2V0RWRpdG9yKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB2aWV3OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFZGl0b3JzKCkgPyBcIk5vbmVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID8gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkgOiBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLlJlc2V0XCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uY29kZShtb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMobW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMoKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVuYW1lID0gZmlsZS5maWxlbmFtZSgpLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FuU2F2ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIW1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSksXHJcbiAgICAgICAgICAgICAgICBjYW5EZWxldGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICghbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKSB8fCBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBVTkRFTEVUQUJMRV9GSUxFUy5pbmRleE9mKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSkgPT09IC0xKSxcclxuICAgICAgICAgICAgICAgIGNhblJlbmFtZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOUkVOQU1BQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkOiB1cGxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogZG93bmxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBpbXBvcnREYXRhc2V0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmNvcmdpcy5vcGVuRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHl0aG9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29kZU1pcnJvciA9IHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dEVkaXRvci5jb2RlTWlycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29kZU1pcnJvci5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjb2RlTWlycm9yLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTW9kZTogKG5ld01vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtVmlldy5DaGFuZ2VcIiwgXCJcIiwgXCJcIiwgbmV3TW9kZSwgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5weXRob25Nb2RlKG5ld01vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLm9sZFB5dGhvbk1vZGUgPSBuZXdNb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpc0hpc3RvcnlBdmFpbGFibGU6IGtvLnB1cmVDb21wdXRlZCgoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEhpc3RvcnlcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm5PZmZIaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnVwZGF0ZUVkaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0dXJuT25IaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvYWRIaXN0b3J5KChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5oaXN0b3J5LmxvYWQocmVzcG9uc2UuaGlzdG9yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9uSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVRvU3RhcnQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVQcmV2aW91cygpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlTmV4dCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3N0UmVjZW50OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlVG9Nb3N0UmVjZW50KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZTogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkudXNlKCk7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlOiAoKSA9PiBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnNhdmVBc3NpZ25tZW50KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlY3V0ZToge1xyXG4gICAgICAgICAgICAgICAgaXNSdW5uaW5nOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMub25FeGVjdXRpb24oKSA9PT0gU3RhdHVzU3RhdGUuQUNUSVZFXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcnVuOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUuZGVsYXllZFJ1bigpLFxyXG4gICAgICAgICAgICAgICAgZXZhbHVhdGU6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5ldmFsdWF0ZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlcnZlcjoge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAoZW5kcG9pbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICBcInNlcnZlci1zdGF0dXMtXCIgKyBtb2RlbC5zdGF0dXNbZW5kcG9pbnRdKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0VuZHBvaW50Q29ubmVjdGVkOiAoZW5kcG9pbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24udXJscyAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi51cmxzW2VuZHBvaW50XSAhPT0gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkQXNzaWdubWVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlQXNzaWdubWVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkSGlzdG9yeU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkRmlsZU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlRmlsZU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkRGF0YXNldE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2dFdmVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlSW1hZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy51cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNNZXNzYWdlKCkgfHwgXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGZvcmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbjogKGRhdGEsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNlbGYubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmZhZGVPdXQoMTAwKS5mYWRlSW4oMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB0dXJuT25IYWNrcygpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVE9ET1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5cyB0aGUgS25vY2tvdXRKUyBiaW5kaW5ncyB0byB0aGUgbW9kZWwsIGluc3RhbnRpYXRpbmcgdGhlIHZhbHVlcyBpbnRvIHRoZVxyXG4gICAgICogSFRNTC5cclxuICAgICAqL1xyXG4gICAgYXBwbHlNb2RlbCgpIHtcclxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHRoaXMubW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRVdGlsaXRpZXMoKSB7XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXRpbGl0aWVzID0ge1xyXG4gICAgICAgICAgICBtYXJrZG93bjogKHRleHQpID0+IHRleHQgPyBFYXN5TURFLnByb3RvdHlwZS5tYXJrZG93bih0ZXh0KSA6IFwiPHA+PC9wPlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q29tcG9uZW50cygpIHtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLmNvbnRhaW5lcjtcclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cyA9IHt9O1xyXG4gICAgICAgIGxldCBtYWluID0gdGhpcztcclxuICAgICAgICAvLyBFYWNoIG9mIHRoZXNlIGNvbXBvbmVudHMgd2lsbCB0YWtlIHRoZSBCbG9ja1B5IGluc3RhbmNlLCBhbmQgcG9zc2libHkgYVxyXG4gICAgICAgIC8vIHJlZmVyZW5jZSB0byB0aGUgcmVsZXZhbnQgSFRNTCBsb2NhdGlvbiB3aGVyZSBpdCB3aWxsIGJlIGVtYmVkZGVkLlxyXG4gICAgICAgIGNvbXBvbmVudHMuZGlhbG9nID0gbmV3IEJsb2NrUHlEaWFsb2cobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1kaWFsb2dcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZmVlZGJhY2sgPSBuZXcgQmxvY2tQeUZlZWRiYWNrKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2tcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMudHJhY2UgPSBuZXcgQmxvY2tQeVRyYWNlKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuY29uc29sZSA9IG5ldyBCbG9ja1B5Q29uc29sZShtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWNvbnNvbGVcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZW5naW5lID0gbmV3IEJsb2NrUHlFbmdpbmUobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5maWxlU3lzdGVtID0gbmV3IEJsb2NrUHlGaWxlU3lzdGVtKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZWRpdG9ycyA9IG5ldyBFZGl0b3JzKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZWRpdG9yXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLnB5dGhvbkVkaXRvciA9IHRoaXMuY29tcG9uZW50cy5lZGl0b3JzLmJ5TmFtZShcInB5dGhvblwiKTtcclxuICAgICAgICBjb21wb25lbnRzLnNlcnZlciA9IG5ldyBCbG9ja1B5U2VydmVyKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuY29yZ2lzID0gbmV3IEJsb2NrUHlDb3JnaXMobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5oaXN0b3J5ID0gbmV3IEJsb2NrUHlIaXN0b3J5KG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktaGlzdG9yeS10b29sYmFyXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmVuZ2luZS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtlbmNvZGVIVE1MfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuY29uc3QgU1RBUlRfRVZBTF9IVE1MID0gYFxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGZsb2F0LXJpZ2h0IGJsb2NrcHktYnRuLWV2YWxcIj5cbiAgICBFdmFsdWF0ZVxuPC9idXR0b24+YDtcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtNiBibG9ja3B5LXBhbmVsIGJsb2NrcHktY29uc29sZSdcbiAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkNvbnNvbGVcIlxuICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5jb25zb2xlLnNpemVcIj5cbiAgICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LXNob3ctZmVlZGJhY2snXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5zZWNvbmRSb3cuaXNDb25zb2xlU2hvd1Zpc2libGUsIGNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPHN0cm9uZz5Db25zb2xlOjwvc3Ryb25nPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1wcmludGVyIGJsb2NrcHktcHJpbnRlci1kZWZhdWx0Jz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICA8L2Rpdj5gO1xuXG5jb25zdCBORVdfQ09OU09MRV9MSU5FX0hUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtXG4gKi9cbmV4cG9ydCBsZXQgQ29uc29sZUxpbmVUeXBlID0ge1xuICAgIFRFWFQ6IFwidGV4dFwiLFxuICAgIEhUTUw6IFwiaHRtbFwiLFxuICAgIFBMT1Q6IFwicGxvdFwiLFxuICAgIElNQUdFOiBcImltYWdlXCIsXG4gICAgVFVSVExFOiBcInR1cnRsZVwiLFxuICAgIEVWQUw6IFwiZXZhbFwiLFxuICAgIFNUQVJUX0VWQUw6IFwic3RhcnRfZXZhbFwiLFxuICAgIFZBTFVFOiBcInZhbHVlXCIsXG4gICAgSU5QVVQ6IFwiaW5wdXRcIixcbiAgICBURVNUX0NBU0U6IFwidGVzdF9jYXNlXCJcbn07XG5cbmNsYXNzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0eXBlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICAgICAgZmlsZW5hbWU6IFNrLmN1cnJGaWxlbmFtZSxcbiAgICAgICAgICAgIHN0ZXA6IG1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAsXG4gICAgICAgICAgICBsaW5lOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHRtbCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6ICBcImJsb2NrcHktcHJpbnRlci1vdXRwdXRcIixcbiAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICBcImRhdGEtcGxhY2VtZW50XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgXCJkYXRhLXN0ZXBcIjogdGhpcy5vcmlnaW4uc3RlcCxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdGVwIFwiICsgdGhpcy5vcmlnaW4uc3RlcCArIFwiLCBMaW5lIFwiICsgdGhpcy5vcmlnaW4ubGluZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIW1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB0b1NrdWxwdCgpIHtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkodGhpcy5jb250ZW50KTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVHVydGxlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIC8vIFRPRE86IENhcHR1cmUgdHVydGxlIGNvbW1hbmRzIGZvciB0cmFjaW5nIHB1cnBvc2VzXG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVFVSVExFKTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLXR1cnRsZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLnByZXBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbFswXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUltYWdlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklNQUdFLCBjb250ZW50KTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLWltYWdlLW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVBsb3QgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuUExPVCwgY29udGVudCk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS1wbG90LW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVGV4dCBleHRlbmRzIENvbnNvbGVMaW5lIHtcblxuICAgIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgKyBjb250ZW50O1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVZhbHVlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVkFMVUUsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPGNvZGU+PC9jb2RlPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUlucHV0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklOUFVULCBwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIElucHV0IGJveCBmb3IgcmVjZWl2aW5nIGlucHV0KCkgZnJvbSB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICAvLyBQZXJmb3JtIGFueSBuZWNlc3NhcnkgY2xlYW5pbmdcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gSW5wdXQgZm9ybVxuICAgICAgICAgICAgbGV0IGlucHV0Rm9ybSA9ICQoXCI8aW5wdXQgdHlwZT0ndGV4dCcgLz5cIik7XG4gICAgICAgICAgICAvLyBFbnRlciBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEJ0biA9ICQoXCI8YnV0dG9uPjwvYnV0dG9uPlwiLCB7XCJodG1sXCI6IFwiRW50ZXJcIn0pO1xuICAgICAgICAgICAgLy8gR3JvdXAgZm9ybSBhbmQgYnV0dG9uXG4gICAgICAgICAgICBsZXQgaW5wdXRHcm91cCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XCJjbGFzc1wiOiBcImJsb2NrcHktY29uc29sZS1pbnB1dFwifSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEZvcm0pO1xuICAgICAgICAgICAgaW5wdXRHcm91cC5hcHBlbmQoaW5wdXRCdG4pO1xuICAgICAgICAgICAgLy8gUHJvbXB0IGJveCwgbmV3IGxpbmUsIGlucHV0IGdyb3VwXG4gICAgICAgICAgICBsZXQgaW5wdXRCb3ggPSAkKFwiPGRpdj48L2Rpdj5cIik7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50ICE9PSBcIlxcblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dE1zZyA9ICQoXCI8c2FtcD48L3NhbXA+XCIsICB7XCJodG1sXCI6IGVuY29kZWRUZXh0fSk7XG4gICAgICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKGlucHV0TXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Qm94LmFwcGVuZCgkKFwiPGJyPlwiKSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKGlucHV0R3JvdXApO1xuICAgICAgICAgICAgLy8gUmVuZGVyXG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGlucHV0Qm94KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy8gTWFrZSBpdCBpbnRlcmFjdGl2ZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUludGVyYWN0aXZlKGlucHV0Rm9ybSwgaW5wdXRCdG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH07XG5cbiAgICBtYWtlSW50ZXJhY3RpdmUoaW5wdXQsIGJ1dHRvbikge1xuICAgICAgICBsZXQgcmVzb2x2ZU9uQ2xpY2s7XG4gICAgICAgIGxldCBzdWJtaXR0ZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzdWJtaXRGb3JtID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZU9uQ2xpY2soaW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgaW5wdXQucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH07XG4gICAgICAgIGJ1dHRvbi5jbGljayhzdWJtaXRGb3JtKTtcbiAgICAgICAgaW5wdXQua2V5dXAoKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIHN1Ym1pdHRlZFByb21pc2U7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUV2YWx1YXRlIGV4dGVuZHMgQ29uc29sZUxpbmVJbnB1dCB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBcIkV2YWx1YXRlOlwiKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5TVEFSVF9FVkFMKTtcbiAgICAgICAgdGhpcy5odG1sLmFwcGVuZCgkKFNUQVJUX0VWQUxfSFRNTCkpO1xuICAgICAgICB0aGlzLmh0bWwuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmV4ZWN1dGUuZXZhbHVhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5Q29uc29sZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgZm9yIG1hbmFnaW5nIHRoZSBjb25zb2xlLCB3aXRoIGZlYXR1cmVzIGZvciB0aGluZ3MgbGlrZSBwcmludGluZywgcGxvdHRpbmcsIGV2YWxpbmcsIGlucHV0aW5nLlxuICAgICAqIFRoZSBcInByaW50ZXJcIiBpcyB0aGUgcmVnaW9uIHdoZXJlIHdlIHB1dCB0aGluZ3MsIGFzIG9wcG9zZWQgdG8gdGhlIGNvbnNvbGUgYXMgYSB3aG9sZS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZyA9IHRhZy5maW5kKFwiLmJsb2NrcHktcHJpbnRlclwiKTtcblxuICAgICAgICB0aGlzLk1JTklNVU1fV0lEVEggPSAyMDA7XG4gICAgICAgIHRoaXMuTUlOSU1VTV9IRUlHSFQgPSAyMDA7XG4gICAgICAgIHRoaXMuREVGQVVMVF9IRUlHSFQgPSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCk7IC8vIExldCBDU1MgZGVmaW5lIHRoaXNcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMuREVGQVVMVF9IRUlHSFQpO1xuXG4gICAgICAgIHRoaXMub3V0cHV0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXQ7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIC8vIFRPRE86IElmIHRoZSB1c2VyIG1vZGlmaWVzIGEgZmlsZSwgdGhlbiBtYWtlIHRoZSBjb25zb2xlIGxvb2sgZmFkZWQgYSBsaXR0bGVcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHN0YXR1cyBvZiB0aGUgcHJpbnRlciwgaW5jbHVkaW5nIHJlbW92aW5nIGFueSB0ZXh0IGluIGl0IGFuZFxuICAgICAqIGZpeGluZyBpdHMgc2l6ZS5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQucmVtb3ZlQWxsKCk7XG5cbiAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmVtcHR5KCk7XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBjaGFuZ2VkIHRoZSBjb25zb2xlIHNpemUsIHdlJ2xsIHJlc2V0IGl0XG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQoKSA9PT0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KHRoaXMuREVGQVVMVF9IRUlHSFQpO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnR1cnRsZUxpbmUgPSBudWxsO1xuICAgICAgICBTay5UdXJ0bGVHcmFwaGljcyA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5nZXRUdXJ0bGVMaW5lLmJpbmQodGhpcyksXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgICAgYXNzZXRzOiB0aGlzLmxvYWRBc3NldC5iaW5kKHRoaXMpXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGxvYWRBc3NldChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGdldFR1cnRsZUxpbmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnR1cnRsZUxpbmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudHVydGxlTGluZSA9IG5ldyBDb25zb2xlTGluZVR1cnRsZSh0aGlzLm1haW4pO1xuICAgICAgICAgICAgdGhpcy50dXJ0bGVMaW5lLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXIgaGFzbid0IGNoYW5nZWQgdGhlIGNvbnNvbGUgc2l6ZSwgd2UnbGwgZG8gc29cbiAgICAgICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQoKSA9PT0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcmludGVyRGltZW5zaW9uID0gdGhpcy5wcmludGVyVGFnLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmludGVyVGFnLmhlaWdodChjdXJyZW50UHJpbnRlckRpbWVuc2lvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgU2suVHVydGxlR3JhcGhpY3MuaGVpZ2h0ID0gY3VycmVudFByaW50ZXJEaW1lbnNpb24tNDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHVydGxlTGluZS5odG1sWzBdO1xuICAgIH1cblxuICAgIGZpbmlzaFR1cnRsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5zYXZlVHVydGxlT3V0cHV0KCkpIHtcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSB0aGlzLnR1cnRsZUxpbmUuaHRtbC5maW5kKFwiY2FudmFzXCIpLmxhc3QoKVswXTtcbiAgICAgICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgbGV0IGRhdGFVcmwgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVJbWFnZShcInR1cnRsZV9vdXRwdXRcIiwgZGF0YVVybCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiB0dXJ0bGVzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgY3VycmVudCB3aWR0aFxuICAgIG5ld1R1cnRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLk1JTklNVU1fV0lEVEgsIHRoaXMucHJpbnRlclRhZy53aWR0aCgpLTQwKTtcbiAgICB9XG5cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLk1JTklNVU1fSEVJR0hULCB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkrNDApO1xuICAgIH1cblxuICAgIGlzTXV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgZWFjaCBwcmludGVkIGVsZW1lbnQgaW4gdGhlIHByaW50ZXIgYW5kIG1ha2VzIGl0IGhpZGRlblxuICAgICAqIG9yIHZpc2libGUsIGRlcGVuZGluZyBvbiB3aGF0IHN0ZXAgd2UncmUgb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcCAtIFRoZSBjdXJyZW50IHN0ZXAgb2YgdGhlIGV4ZWN1dGVkIHByb2dyYW0gdGhhdCB3ZSdyZSBvbjsgZWFjaCBlbGVtZW50IGluIHRoZSBwcmludGVyIG11c3QgYmUgbWFya2VkIHdpdGggYSBcImRhdGEtc3RlcFwiIHByb3BlcnR5IHRvIHJlc29sdmUgdGhpcy5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcGFnZSAtIERlcHJlY2F0ZWQsIG5vdCBzdXJlIHdoYXQgdGhpcyBldmVuIGRvZXMuXG4gICAgICovXG4gICAgc3RlcFByaW50ZXIoc3RlcCwgcGFnZSkge1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcuZmluZChcIi5ibG9ja3B5LXByaW50ZXItb3V0cHV0XCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwiZGF0YS1zdGVwXCIpIDw9IHN0ZXApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmludCBhIGxpbmUgdG8gdGhlIG9uLXNjcmVlbiBwcmludGVyLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lVGV4dCAtIEEgbGluZSBvZiB0ZXh0IHRvIGJlIHByaW50ZWQgb3V0LlxuICAgICAqL1xuICAgIHByaW50KGxpbmVUZXh0KSB7XG4gICAgICAgIC8vIEVtcHR5IHN0cmluZ3MgbWVhbnMgZG8gbm90aGluZy5cbiAgICAgICAgLy8gcHJpbnQoXCJcIiwgZW5kPVwiXCIpXG4gICAgICAgIGlmICghbGluZVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGxpbmVUZXh0LmNoYXJBdChsaW5lVGV4dC5sZW5ndGgtMSkgPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIGZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3BsaXRMaW5lcyA9IGxpbmVUZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICBpZiAodGhpcy5saW5lQnVmZmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVUZXh0KHRoaXMubWFpbiwgQ29uc29sZUxpbmVUeXBlLlRFWFQsIHNwbGl0TGluZXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLmFkZENvbnRlbnQoc3BsaXRMaW5lc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaT0xOyBpIDwgc3BsaXRMaW5lcy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5wdXNoKHRoaXMubGluZUJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVUZXh0KHRoaXMubWFpbiwgQ29uc29sZUxpbmVUeXBlLlRFWFQsIHNwbGl0TGluZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmbHVzaCkge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaCh0aGlzLmxpbmVCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIHBsb3QocGxvdHMpIHtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyID0gbmV3IENvbnNvbGVMaW5lUGxvdCh0aGlzLm1haW4sIHBsb3RzKTtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5wbG90QnVmZmVyO1xuICAgIH1cblxuICAgIHByaW50UElMSW1hZ2UoaW1hZ2VEYXRhKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVJbWFnZSh0aGlzLm1haW4sIGltYWdlRGF0YS5pbWFnZSk7XG4gICAgICAgIHRoaXMuaW1hZ2VCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlQnVmZmVyO1xuICAgIH1cblxuICAgIHByaW50VmFsdWUodmFsdWUpIHtcbiAgICAgICAgbGV0IHByaW50ZWRWYWx1ZSA9IG5ldyBDb25zb2xlTGluZVZhbHVlKHRoaXMubWFpbiwgdmFsdWUpO1xuICAgICAgICBwcmludGVkVmFsdWUucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiBwcmludGVkVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmVnaXN0ZXJzIGEgUHJvbWlzZSBmcm9tIHRoZSBJbnB1dCBib3hcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvbXB0TWVzc2FnZSAtIE1lc3NhZ2UgdG8gZGlzcGxheSB0byB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUlucHV0KHRoaXMubWFpbiwgcHJvbXB0TWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH07XG5cblxuICAgIGV2YWx1YXRlKCkge1xuICAgICAgICB0aGlzLmlucHV0QnVmZmVyID0gbmV3IENvbnNvbGVMaW5lRXZhbHVhdGUodGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgfVxuXG4gICAgYmVnaW5FdmFsKCkge1xuICAgICAgICBsZXQgc3RhcnRFdmFsdWF0aW9uID0gbmV3IENvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSh0aGlzLm1haW4pO1xuICAgICAgICByZXR1cm4gc3RhcnRFdmFsdWF0aW9uLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuY29uZGl0aW9uYWxseSBzY3JvbGwgdG8gdGhlIGJvdHRvbSBvZiB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICovXG4gICAgc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgICAgIHRoaXMudGFnLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnRhZy5wcm9wKFwic2Nyb2xsSGVpZ2h0XCIpIC0gdGhpcy50YWcucHJvcChcImNsaWVudEhlaWdodFwiKVxuICAgICAgICB9LCA1MDApO1xuICAgIH07XG5cbn0iLCJpbXBvcnQge3NsdWd9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG4vLyBUT0RPOiBlZGl0b3IuYm0uYmxvY2tFZGl0b3IuZXh0cmFUb29sc1tdXG5cbmV4cG9ydCBsZXQgX0lNUE9SVEVEX0RBVEFTRVRTID0ge307XG5leHBvcnQgbGV0IF9JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUyA9IHt9O1xuXG4vKipcbiAqIFRoaXMgaXMgYSB2ZXJ5IHNpbXBsaXN0aWMgaGVscGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCB0cmFuc2Zvcm1cbiAqIGEgZ2l2ZW4gYnV0dG9uIGludG8gYSBcIkxvYWRlZFwiIHN0YXRlIChkaXNhYmxlZCwgcHJlc3NlZCBzdGF0ZSwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYnRuIC0gQW4gSFRNTCBlbGVtZW50IHRvIGNoYW5nZSB0aGUgdGV4dCBvZi5cbiAqL1xubGV0IHNldEJ1dHRvbkxvYWRlZCA9IGZ1bmN0aW9uIChidG4pIHtcbiAgICBidG4uYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgLmFkZENsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXByaW1hcnlcIilcbiAgICAgICAgLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKVxuICAgICAgICAudGV4dChcIkxvYWRlZFwiKVxuICAgICAgICAuYXR0cihcImFyaWEtcHJlc3NlZFwiLCBcInRydWVcIik7XG59O1xuXG5cbi8qKlxuICogTW9kdWxlIHRoYXQgY29ubmVjdHMgdG8gdGhlIENPUkdJUyBkYXRhc2V0cyBhbmQgbWFuYWdlcyBpbnRlcmFjdGlvbnNcbiAqIHdpdGggdGhlbS4gVGhpcyBpbmNsdWRlcyBsb2FkaW5nIGluIGRhdGFzZXRzIGF0IGxhdW5jaCBhbmQgb24tdGhlLWZseS5cbiAqIE5vdGUgdGhhdCB0aGlzIGhhcyBubyBwcmVzZW5jZSBvbiBzY3JlZW4sIHNvIGl0IGRvZXMgbm90IGhhdmUgYSB0YWcuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUNvcmdpc31cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeUNvcmdpcyhtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcblxuICAgIHRoaXMubG9hZGVkRGF0YXNldHMgPSBbXTtcbiAgICB0aGlzLmxvYWREYXRhc2V0cygpO1xufVxuXG5CbG9ja1B5Q29yZ2lzLnByb3RvdHlwZS5sb2FkRGF0YXNldHMgPSBmdW5jdGlvbiAoc2lsZW50bHkpIHtcbiAgICAvLyBMb2FkIGluIGVhY2ggdGhlIGRhdGFzZXRzXG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsLFxuICAgICAgICBlZGl0b3IgPSB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IsXG4gICAgICAgIHNlcnZlciA9IHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlcjtcbiAgICBsZXQgaW1wb3J0cyA9IFtdO1xuICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHMoKS5zcGxpdChcIixcIikuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZSAmJiAhKG5hbWUgaW4gQmxvY2tNaXJyb3JCbG9ja0VkaXRvci5FWFRSQV9UT09MUykpIHtcbiAgICAgICAgICAgIGltcG9ydHMucHVzaC5hcHBseShpbXBvcnRzLCB0aGlzLmltcG9ydERhdGFzZXQoc2x1ZyhuYW1lKSwgbmFtZSwgc2lsZW50bHkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gV2hlbiBkYXRhc2V0cyBhcmUgbG9hZGVkLCB1cGRhdGUgdGhlIHRvb2xib3guXG4gICAgJC53aGVuLmFwcGx5KCQsIGltcG9ydHMpLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVFJJR0dFUkVEXCIpO1xuICAgICAgICBlZGl0b3IuYm0uZm9yY2VCbG9ja1JlZnJlc2goKTtcbiAgICAgICAgZWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfSkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VydmVyLmZpbmFsaXplU3Vic2NyaXB0aW9ucygpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBMb2FkcyB0aGUgZGVmaW5pdGlvbnMgZm9yIGEgZGF0YXNldCBpbnRvIHRoZSBlbnZpcm9ubWVudCwgaW5jbHVkaW5nXG4gKiB0aGUgZGF0YXNldCAoYXMgYSBKUyBmaWxlKSwgdGhlIHNrdWxwdCBiaW5kaW5ncywgYW5kIHRoZSBibG9ja2x5XG4gKiBiaW5kaW5ncy4gVGhpcyByZXF1aXJlcyBhY2Nlc3MgdG8gYSBDT1JHSVMgc2VydmVyLCBhbmQgb2NjdXJzXG4gKiBhc3luY2hyb25vdXNseS4gVGhlIHJlcXVlc3RzIGFyZSBmaXJlZCBhbmQgdGhlaXIgZGVmZXJyZWQgb2JqZWN0c1xuICogYXJlIHJldHVybmVkIC0gY2FsbGVycyBjYW4gdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gcGVyZm9ybSBhbiBhY3Rpb25cbiAqIG9uIGNvbXBsZXRpb24gb2YgdGhlIGltcG9ydC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2x1ZyAtIFRoZSBVUkwgc2FmZSB2ZXJzaW9uIG9mIHRoZSBkYXRhc2V0IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gVGhlIHVzZXItZnJpZW5kbHkgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lLlxuICogQHJldHVybnMge0FycmF5LjxEZWZlcnJlZD59IC0gUmV0dXJucyB0aGUgYXN5bmMgcmVxdWVzdHMgYXMgZGVmZXJyZWQgb2JqZWN0cy5cbiAqL1xuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUuaW1wb3J0RGF0YXNldCA9IGZ1bmN0aW9uIChzbHVnLCBuYW1lKSB7XG4gICAgbGV0IHVybF9yZXRyaWV2YWxzID0gW107XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cyArIFwiYmxvY2tweS9cIiArIHNsdWcgKyBcIi9cIiArIHNsdWc7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5wdXNoKG5hbWUpO1xuICAgICAgICAvLyBBY3R1YWxseSBnZXQgZGF0YVxuICAgICAgICBsZXQgZ2V0RGF0YXNldCA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9kYXRhc2V0LmpzXCIpO1xuICAgICAgICAvLyBMb2FkIGdldENvbXBsZXRlIHNpbGVudGx5IGluIHRoZSBiYWNrZ3JvdW5kIGJlY2F1c2UgaXRzIGJpZyA6KFxuICAgICAgICBsZXQgZ2V0Q29tcGxldGUgPSAkLmdldFNjcmlwdChyb290ICsgXCJfY29tcGxldGUuanNcIik7XG4gICAgICAgIGxldCBnZXRTa3VscHQgPSAkLmdldChyb290ICsgXCJfc2t1bHB0LmpzXCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtcInNyYy9saWIvXCIgKyBzbHVnICsgXCIvX19pbml0X18uanNcIl0gPSBkYXRhO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGdldEJsb2NrbHkgPSAkLmdldFNjcmlwdChyb290ICsgXCJfYmxvY2tseS5qc1wiKTtcbiAgICAgICAgLy8gT24gY29tcGxldGlvbiwgdXBkYXRlIG1lbnVzLlxuICAgICAgICAkLndoZW4oZ2V0RGF0YXNldCwgZ2V0U2t1bHB0LCBnZXRCbG9ja2x5KS5kb25lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkRGF0YXNldHMucHVzaChzbHVnKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS50ZXh0VG9CbG9ja3MuaGlkZGVuSW1wb3J0cy5wdXNoKHNsdWcpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uYmxvY2tFZGl0b3IucmVtYWtlVG9vbGJveCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubG9hZGluZ0RhdGFzZXRzLnJlbW92ZShuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVybF9yZXRyaWV2YWxzLnB1c2goZ2V0RGF0YXNldCwgZ2V0U2t1bHB0LCBnZXRCbG9ja2x5KTtcbiAgICB9XG4gICAgcmV0dXJuIHVybF9yZXRyaWV2YWxzO1xufTtcblxuLyoqXG4gKiBPcGVucyBhIGRpYWxvZyBib3ggdG8gcHJlc2VudCB0aGUgdXNlciB3aXRoIHRoZSBkYXRhc2V0cyBhdmFpbGFibGVcbiAqIHRocm91Z2ggdGhlIENPUkdJUyBzZXJ2ZXIuIFRoaXMgcmVxdWlyZXMgYSBjYWxsLCBzbyB0aGlzIG1ldGhvZFxuICogY29tcGxldGVzIGFzeW5jaHJvbm91c2x5LiBUaGUgZGlhbG9nIGlzIGNvbXBvc2VkIG9mIGEgdGFibGUgd2l0aFxuICogYnV0dG9ucyB0byBsb2FkIHRoZSBkYXRhc2V0cyAoTW9yZSB0aGFuIG9uZSBkYXRhc2V0IGNhbiBiZSBsb2FkZWRcbiAqIGZyb20gd2l0aGluIHRoZSBkaWFsb2cgYXQgYSB0aW1lKS5cbiAqL1xuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUub3BlbkRpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwiaW1wb3J0RGF0YXNldHNcIikpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzLmltcG9ydERhdGFzZXRzO1xuICAgICAgICAkLmdldEpTT04ocm9vdCArIFwiaW5kZXguanNvblwiLCAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIE1ha2UgdXAgdGhlIEJvZHlcbiAgICAgICAgICAgIGxldCBkYXRhc2V0cyA9IGRhdGEuYmxvY2tweTtcbiAgICAgICAgICAgIGxldCBkb2N1bWVudGF0aW9uID0gcm9vdCtcImJsb2NrcHkvaW5kZXguaHRtbFwiO1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gJChgPHA+RG9jdW1lbnRhdGlvbiBpcyBhdmFpbGFibGUgYXQgPGEgaHJlZj0nJHtkb2N1bWVudGF0aW9ufScgdGFyZ2V0PV9ibGFuaz51cmw8L2E+PC9wPmApO1xuICAgICAgICAgICAgbGV0IGJvZHkgPSAkKFwiPHRhYmxlPjwvdGFibGU+XCIsIHtcImNsYXNzXCI6IFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc20gdGFibGUtc3RyaXBlZFwifSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhc2V0cykuc29ydCgpLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzbHVnZ2VkTmFtZSA9IHNsdWcoZGF0YXNldHNbbmFtZV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlTmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS10b2dnbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPkxvYWQ8L2J1dHRvbj4nKTtcbiAgICAgICAgICAgICAgICBsZXQgaW1nU3JjID0gcm9vdCtcIi4uL2ltYWdlcy9kYXRhc2V0cy9cIituYW1lK1wiLWljb24ucG5nXCI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkRGF0YXNldHMuaW5kZXhPZihzbHVnZ2VkTmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25Mb2FkZWQoYnRuKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidG4uY2xpY2soICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0RGF0YXNldChzbHVnZ2VkTmFtZSwgXCJEYXRhIC0gXCIgKyBkYXRhc2V0c1tuYW1lXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25Mb2FkZWQoYnRuKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vbGV0IGltZyA9IGA8aW1nIHNyYz0nJHtpbWdTcmN9JyBjbGFzcz1cImNvcmdpcy1pY29uXCI+YDtcbiAgICAgICAgICAgICAgICAkKFwiPHRyPjwvdHI+XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vLmFwcGVuZCgkKFwiPHRkPlwiICsgaW1nICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+XCIgKyBkYXRhc2V0c1tuYW1lXS5vdmVydmlldyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD48L3RkPlwiKS5hcHBlbmQoYnRuKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZFRvKHN0YXJ0KTtcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIGFjdHVhbCBkaWFsb2dcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5zaG93KFwiSW1wb3J0IERhdGFzZXRzXCIsIHN0YXJ0LCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU3MDkyNjYzOTg1OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTcwOTI2NjM5ODUwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL2FjYmFydC9Qcm9qZWN0cy9ibG9ja3B5LWVkdS9ibG9ja3B5L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIi4uL1wiLFwiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIFRPRE86IER5YW5taWNhbGx5IHBvcHVsYXRlIGFyaWEtbGFiZWxsZWRieSBpbiB0aGlzIGFuZCBvdGhlciBwbGFjZXNcblxuZXhwb3J0IGxldCBESUFMT0dfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LWRpYWxvZyBtb2RhbCBoaWRkZW4nXG4gICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgIGFyaWEtbGFiZWw9J0RpYWxvZydcbiAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1kaWFsb2cgbW9kYWwtbGcnIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtY29udGVudCcgcm9sZT0ncmVnaW9uJyBhcmlhLWxhYmVsPSdEaWFsb2cgY29udGVudCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPSdtb2RhbC10aXRsZSc+RHluYW1pYyBDb250ZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdtb2RhbCcgYXJpYS1oaWRkZW49J3RydWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtYm9keScgc3R5bGU9J21heC13aWR0aDoxMDAlOyBtYXgtaGVpZ2h0OjQwMHB4Jz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1mb290ZXInPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4td2hpdGUgbW9kZWwtY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1zdWNjZXNzIG1vZGFsLW9rYXknIGRhdGEtZGlzbWlzcz0nbW9kYWwnPk9rYXk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuXG4vKipcbiAqIEEgdXRpbGl0eSBvYmplY3QgZm9yIHF1aWNrbHkgYW5kIGNvbnZlbmllbnRseSBnZW5lcmF0aW5nIGRpYWxvZyBib3hlcy5cbiAqIFVuZm9ydHVuYXRlbHksIHRoaXMgZG9lc24ndCBkeW5hbWljYWxseSBjcmVhdGUgbmV3IGJveGVzOyBpdCByZXVzZXMgdGhlIHNhbWUgb25lXG4gKiBvdmVyIGFuZCBvdmVyIGFnYWluLiBJdCB0dXJucyBvdXQgZHluYW1pY2FsbHkgZ2VuZXJhdGluZyBuZXcgZGlhbG9nIGJveGVzXG4gKiBpcyBhIHBhaW4hIFNvIHdlIGNhbid0IHN0YWNrIHRoZW0uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeURpYWxvZ31cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5RGlhbG9nKG1haW4sIHRhZykge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICB0aGlzLnRpdGxlVGFnID0gdGFnLmZpbmQoXCIubW9kYWwtdGl0bGVcIik7XG4gICAgdGhpcy5ib2R5VGFnID0gdGFnLmZpbmQoXCIubW9kYWwtYm9keVwiKTtcbiAgICB0aGlzLmZvb3RlclRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLWZvb3RlclwiKTtcbiAgICB0aGlzLm9rYXlCdXR0b24gPSB0YWcuZmluZChcIi5tb2RhbC1va2F5XCIpO1xuXG4gICAgdGhpcy55ZXMgPSAoKSA9PiB7fTtcbiAgICB0aGlzLm9rYXlCdXR0b24uY2xpY2soKCkgPT4ge1xuICAgICAgICB0aGlzLnllcygpO1xuICAgICAgICB0aGlzLnRhZy5tb2RhbChcImhpZGVcIik7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQSBzaW1wbGUgZXh0ZXJuYWxseSBhdmFpbGFibGUgZnVuY3Rpb24gZm9yIHBvcHBpbmcgdXAgYSBkaWFsb2dcbiAqIG1lc3NhZ2UuIFRoaXMgbWVudSB3aWxsIGJlIGRyYWdnYWJsZSBieSBpdHMgdGl0bGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBib2R5IC0gVGhlIGJvZHkgb2YgdGhlIG1lc3NhZ2UgZGlhbG9nLiBDYW4gaGF2ZSBIVE1MLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25jbG9zZSAtIEEgZnVuY3Rpb24gdG8gYmUgcnVuIHdoZW4gdGhlIHVzZXIgY2xvc2VzIHRoZSBkaWFsb2cuXG4gKi9cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAodGl0bGUsIGJvZHksIG9uY2xvc2UpIHtcbiAgICB0aGlzLnRpdGxlVGFnLmh0bWwodGl0bGUpO1xuICAgIHRoaXMuYm9keVRhZy5odG1sKGJvZHkpO1xuICAgIHRoaXMudGFnLm1vZGFsKFwic2hvd1wiKTtcbiAgICB0aGlzLm9rYXlCdXR0b24uaGlkZSgpO1xuICAgIHRoaXMudGFnLmRyYWdnYWJsZSh7XG4gICAgICAgIFwiaGFuZGxlXCI6IFwiLm1vZGFsLXRpdGxlXCJcbiAgICB9KTtcblxuICAgIHRoaXMudGFnLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChvbmNsb3NlICE9PSB1bmRlZmluZWQgJiYgb25jbG9zZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgb25jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5jb25maXJtID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCB5ZXMsIG5vLCB5ZXNUZXh0KSB7XG4gICAgaWYgKHllc1RleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB5ZXNUZXh0ID0gXCJPa2F5XCI7XG4gICAgfVxuICAgIHRoaXMuc2hvdyh0aXRsZSwgYm9keSwgbm8pO1xuICAgIHRoaXMueWVzID0geWVzO1xuICAgIHRoaXMub2theUJ1dHRvbi5zaG93KCkuaHRtbCh5ZXNUZXh0KTtcbiAgICAvLyBUT0RPOiBhZGQgb2theSBidXR0b24gYW5kIGNhbmNlbCBidXR0b25cbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLkFTU0lHTk1FTlRfVkVSU0lPTl9DSEFOR0VEID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY29uZmlybShcIkFzc2lnbm1lbnQgQ2hhbmdlZFwiLCBcIllvdXIgaW5zdHJ1Y3RvciBoYXMgbWFkZSBjaGFuZ2VzIHRvIHRoaXMgYXNzaWdubWVudC4gV291bGQgeW91IGxpa2UgdG8gcmVsb2FkPyBBbGwgeW91ciB3b3JrIGhhcyBiZWVuIHNhdmVkLlwiLCk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2hvdyhcIkVycm9yIExvYWRpbmcgQXNzaWdubWVudFwiLCBgQmxvY2tQeSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBhc3NpZ25tZW50Ljxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gLCk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5TQ1JFRU5TSE9UX0JMT0NLUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPXG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBVcGRhdGluZyBTdWJtaXNzaW9uIFN0YXR1c1wiLCBgQmxvY2tQeSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSB1cGRhdGluZyB5b3VyIHN1Ym1pc3Npb24gc3RhdHVzLjxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gKTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLkVSUk9SX0xPQURJTkdfSElTVE9SWSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBMb2FkaW5nIEhpc3RvcnlcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB5b3VyIGhpc3RvcnkuPGJyPlxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLmApO1xufTtcbiIsImltcG9ydCB7RWRpdG9yc30gZnJvbSBcIi4uL2VkaXRvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlKG1vZGVsLCBldmVudCkge1xyXG4gICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgbGV0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSA9PlxyXG4gICAgICAgIG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLnVwbG9hZEZpbGUoZSlcclxuICAgICk7XHJcbiAgICBmaWxlUmVhZGVyLmZpbGVOYW1lID0gZmlsZXNbMF0ubmFtZTtcclxuICAgIGZpbGVSZWFkZXIucmVhZEFzVGV4dChmaWxlc1swXSk7XHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2dpZnkodGV4dCkge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCB7bmFtZSwgZXh0ZW5zaW9uLCBjb250ZW50cywgbWltZXR5cGV9ID0gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAvLyBNYWtlIHNhZmVcclxuICAgIG5hbWUgPSBzbHVnZ2lmeShuYW1lKTtcclxuICAgIG5hbWUgPSBuYW1lICsgZXh0ZW5zaW9uO1xyXG4gICAgLy8gTWFrZSB0aGUgZGF0YSBkb3dubG9hZCBhcyBhIGZpbGVcclxuICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRzXSwge3R5cGU6IG1pbWV0eXBlfSk7XHJcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIG5hbWUpO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGxldCB0ZW1wb3JhcnlEb3dubG9hZExpbmsgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5RG93bmxvYWRMaW5rKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0gPSBtYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLmRlbGV0ZUZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlRGVsZXRlZCgpIHtcclxuICAgICAgICAvLyBUT0RPOiBTd2l0Y2ggdG8gdGhlIHByZXZpb3VzIGZpbGUgaW5zdGVhZCBvZiBhIGRlZmF1bHQgZmlsZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZVVwZGF0ZWQoZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lID09PSB0aGlzLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy50cmFja0N1cnJlbnRGaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrQ3VycmVudEZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLndhdGNoRmlsZSh0aGlzLmZpbGVuYW1lLCB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQ6IHRoaXMub25GaWxlVXBkYXRlZC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBkZWxldGVkOiB0aGlzLm9uRmlsZURlbGV0ZWQuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbmV3RmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5maWxlID0gdGhpcy5maWxlU3lzdGVtLmdldEZpbGUobmV3RmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuZXdGaWxlbmFtZSAtIHRoZSBmaWxlbmFtZSB0aGF0IHRoZSBvdGhlciBlZGl0b3Igd2lsbCBiZSBzd2l0Y2hpbmcgdG9cclxuICAgICAqIEBwYXJhbSBvbGRFZGl0b3JcclxuICAgICAqIEBwYXJhbSBuZXdFZGl0b3JcclxuICAgICAqL1xyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uc3RvcFdhdGNoaW5nRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGZpbGVuYW1lLm5hbWUsXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbjogZmlsZW5hbWUudHlwZSxcclxuICAgICAgICAgICAgY29udGVudHM6IHRoaXMuZmlsZS5oYW5kbGUoKSxcclxuICAgICAgICAgICAgbWltZXR5cGU6IFwidGV4dC9wbGFpblwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcIi4vcHl0aG9uXCI7XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTID0gW1xyXG4gICAgW1widG9vbGJveExldmVsXCIsIFwidG9vbGJveF9sZXZlbFwiLCBcIm5vcm1hbFwiLCBcInRvb2xib3hcIiwgXCJJTkNPTVBMRVRFOiBXaGF0IGxldmVsIG9mIHRvb2xib3ggdG8gcHJlc2VudCB0byB0aGUgdXNlciAoaGlkaW5nIGFuZCBzaG93aW5nIGNhdGVnb3JpZXMpLlwiXSxcclxuICAgIFtcInN0YXJ0Vmlld1wiLCBcInN0YXJ0X3ZpZXdcIiwgRGlzcGxheU1vZGVzLlNQTElULCBEaXNwbGF5TW9kZXMsIFwiVGhlIFB5dGhvbiBlZGl0b3IgbW9kZSB0byBzdGFydCBpbiB3aGVuIHRoZSBzdHVkZW50IHN0YXJ0cyB0aGUgcHJvYmxlbS5cIl0sXHJcbiAgICBbXCJkYXRhc2V0c1wiLCBcImRhdGFzZXRzXCIsIFwiXCIsIFwic3RyaW5nXCIsIFwiVGhlIGN1cnJlbnQgbGlzdCBvZiBkYXRhc2V0cyBhdmFpbGFibGUgb24gbG9hZCBhcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXCJdLFxyXG4gICAgW1wiZGlzYWJsZVRpbWVvdXRcIiwgXCJkaXNhYmxlX3RpbWVvdXRcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgY29kZSBpcyBhbGxvd2VkIHRvIHJ1biB3aXRob3V0IHRpbWVvdXRzIChwb3RlbnRpYWxseSBhbGxvd2luZyBpbmZpbml0ZSBsb29wcykuXCJdLFxyXG4gICAgW1wiaXNQYXJzb25zXCIsIFwiaXNfcGFyc29uc1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGlzIGlzIGEgcGFyc29uJ3Mgc3R5bGUgcXVlc3Rpb24gKGp1bWJsZWQpLlwiXSxcclxuICAgIFtcImRpc2FibGVGZWVkYmFja1wiLCBcImRpc2FibGVfZmVlZGJhY2tcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gbm8gaW5zdHJ1Y3RvciBzY3JpcHRzIGFyZSBydW4gKGUuZy4sIG9uX3J1biBhbmQgb25fZXZhbCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZVRpZmFcIiwgXCJkaXNhYmxlX3RpZmFcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gZG8gbm90IGF1dG9tYXRpY2FsbHkgcnVuIFRpZmEgKHdoaWNoIGNhbiBiZSBzbG93KS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVHJhY2VcIiwgXCJkaXNhYmxlX3RyYWNlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cyBjb2RlIHdpbGwgbm90IGhhdmUgaXRzIGV4ZWN1dGlvbiB0cmFjZWQgKG5vIHZhcmlhYmxlcyByZWNvcmRlZCwgbm8gY292ZXJhZ2UgdHJhY2tlZCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUVkaXRcIiwgXCJjYW5fZWRpdFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZWRpdGFibGUgYXQgYWxsLlwiXSxcclxuICAgIFtcImRpc2FibGVCbG9ja3NcIiwgXCJjYW5fYmxvY2tzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50IGNhbm5vdCBlZGl0IHRoZSBibG9jayBpbnRlcmZhY2UgKGFsdGhvdWdoIGl0IGlzIHZpc2libGUpLlwiXSxcclxuICAgIFtcIm9ubHlJbnRlcmFjdGl2ZVwiLCBcIm9ubHlfaW50ZXJhY3RpdmVcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4sIHRoZSBwcm9ncmFtIGlzIGF1dG9tYXRpY2FsbHkgcnVuLCBhbmQgdGhlbiB0aGUgY29uc29sZSBlbnRlcnMgRXZhbCBtb2RlIChpbnRlcmFjdGl2ZSkuXCJdLFxyXG4gICAgW1wib25seVVwbG9hZHNcIiwgXCJvbmx5X3VwbG9hZHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZGlyZWN0bHkgZWRpdGFibGUgKHRoZXkgd2lsbCBoYXZlIHRvIHVwbG9hZCBzdWJtaXNzaW9ucykuXCJdLFxyXG4gICAgLy8gV2hhdCBtZW51cy9mZWVkYmFjayB0byBzaG93IGFuZCBoaWRlXHJcbiAgICBbXCJoaWRlU3VibWlzc2lvblwiLCBcImhpZGVfc3VibWlzc2lvblwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGVpciBzdWJtaXNzaW9uJ3MgY29kZSBvciBoaXN0b3J5IG9uIENhbnZhcy5cIl0sXHJcbiAgICBbXCJoaWRlRmlsZXNcIiwgXCJoaWRlX2ZpbGVzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgd2lsbCBub3Qgc2VlIHRoZSBWaWV3IEZpbGVzIHRvb2xiYXIuXCJdLFxyXG4gICAgW1wiaGlkZVF1ZXVlZElucHV0c1wiLCBcImhpZGVfcXVldWVkX2lucHV0c1wiLCB0cnVlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiB1bmNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNhbiBhY2Nlc3MgdGhlIHF1ZXVlZCBpbnB1dHMgYm94IChtYWtlcyByZXBlYXRlZCBkZWJ1Z2dpbmcgZWFzaWVyIGZvciB0aGUgaW5wdXQgZnVuY3Rpb24pLlwiXSxcclxuICAgIFtcImhpZGVFZGl0b3JzXCIsIFwiaGlkZV9lZGl0b3JzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIGFsbCBvZiB0aGUgZWRpdG9ycyBhcmUgaGlkZGVuLlwiXSxcclxuICAgIFtcImhpZGVBbGxcIiwgXCJoaWRlX2FsbFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlbiB0aGUgZW50aXJlIGludGVyZmFjZSBpcyBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUV2YWx1YXRlXCIsIFwiaGlkZV9ldmFsdWF0ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgRXZhbHVhdGUgYnV0dG9uIGlzIG5vdCBzaG93biBvbiB0aGUgY29uc29sZS5cIl0sXHJcbiAgICBbXCJoaWRlSW1wb3J0RGF0YXNldHNCdXR0b25cIiwgXCJoaWRlX2ltcG9ydF9kYXRhc2V0c19idXR0b25cIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyBjYW5ub3Qgc2VlIHRoZSBpbXBvcnQgZGF0YXNldHMgYnV0dG9uLlwiXSxcclxuICAgIC8vIFRPRE86IEZpeCB0aGlzIG9uZSB0byBiZSBzZXR0YWJsZVxyXG4gICAgW1wiaGlkZUltcG9ydFN0YXRlbWVudHNcIiwgXCJoaWRlX2ltcG9ydF9zdGF0ZW1lbnRzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCBjZXJ0YWluIGtpbmRzIG9mIGltcG9ydCBzdGF0ZW1lbnRzIChtYXRwbG90bGliLCB0dXJ0bGUsIGRhdGFzZXRzKSBhcmUgbm90IHNob3duIGluIHRoZSBibG9jayBpbnRlcmZhY2UuXCJdLFxyXG4gICAgW1wiaGlkZUNvdmVyYWdlQnV0dG9uXCIsIFwiaGlkZV9jb3ZlcmFnZV9idXR0b25cIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIHRoZSBjb3ZlcmFnZSBidXR0b24gaXMgbm90IHNob3duLlwiXSxcclxuICAgIFtcInNhdmVUdXJ0bGVPdXRwdXRcIiwgXCJzYXZlX3R1cnRsZV9vdXRwdXRcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdHVydGxlIG91dHB1dCBpcyBzYXZlZCB3aGVuZXZlciB0aGUgcHJvZ3JhbSB1c2VzIGl0LlwiXSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldERvY3VtZW50YXRpb24obmFtZSkge1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgQVNTSUdOTUVOVF9TRVRUSU5HUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzBdID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kIGZvciBmaWVsZFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlU3RhcnRWaWV3VGFiKG5hbWUsIGljb24sIG1vZGUpIHtcclxuICAgIHJldHVybiBgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBibG9ja3B5LW1vZGUtc2V0LWJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3KCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBhc3NpZ25tZW50LnNldHRpbmdzLnN0YXJ0Vmlldy5iaW5kKCRkYXRhLCAnJHttb2RlfScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLSR7aWNvbn0nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1zdGFydC12aWV3LXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+ICR7bmFtZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5gO1xyXG59XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MID0gQVNTSUdOTUVOVF9TRVRUSU5HU1xyXG4gICAgLy8gT25seSBoYW5kbGUgdGhlIHNpbXBsZSBib29sZWFucyB0aGlzIHdheVxyXG4gICAgLmZpbHRlcigoc2V0dGluZykgPT4gc2V0dGluZ1szXSA9PT0gXCJib29sXCIpXHJcbiAgICAubWFwKChzZXR0aW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IHByZXR0eU5hbWUgPSBzZXR0aW5nWzFdLnNwbGl0KFwiX1wiKS5tYXAod29yZD0+KHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrd29yZC5zbGljZSgxKSkpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCI+JHtwcmV0dHlOYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnNldHRpbmdzLiR7c2V0dGluZ1swXX1cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtzZXR0aW5nWzRdfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH0pLmpvaW4oXCJcXG5cXG5cIik7XHJcblxyXG5leHBvcnQgY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXZpZXctc2V0dGluZ3NcIj5cclxuICAgIFxyXG4gICAgPGZvcm0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5zZXR0aW5ncy5zYXZlXCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgc3R1ZGVudC1mYWNpbmcgbmFtZSBvZiB0aGUgYXNzaWdubWVudC4gQXNzaWdubWVudHMgd2l0aGluIGEgZ3JvdXAgYXJlIG9yZGVyZWQgYWxwaGFiZXRpY2FsbHlcclxuICAgICAgICAgICAgICAgICAgICBieSB0aGVpciBuYW1lLCBzbyB5b3UgbWF5IHdhbnQgdG8gdXNlIGEgbmFtaW5nIHNjaGVtZSBsaWtlIFwiIzQzLjUpIFdoYXRldmVyXCIuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+VVJMOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXVybFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC51cmxcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIGNvdXJzZS11bmlxdWUgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uc2lzdGVudGx5IHJlZmVyIHRvIHRoaXMgYXNzaWdubWVudC4gXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXB1YmxpY1wiPlB1YmxpYzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnB1YmxpY1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBub3QgcHVibGljLCB1c2VycyBvdXRzaWRlIG9mIHRoZSBjb3Vyc2Ugd2lsbCBub3QgYmUgYWJsZSB0byBzZWUgdGhlIGFzc2lnbm1lbnQgaW4gY291cnNlIGxpc3RpbmdzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1oaWRkZW5cIj5IaWRkZW46PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSWYgaGlkZGVuLCBzdHVkZW50cyB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGVpciBncmFkZSB3aGlsZSB3b3JraW5nIG9uIHRoZSBhc3NpZ25tZW50LlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlJldmlld2VkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5yZXZpZXdlZFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiByZXZpZXdlZCwgdGhlIGFzc2lnbm1lbnQgY2FuIGJlIGNvbW1lbnRlZCB1cG9uIGFuZCByZWdyYWRlZCBieSB0aGUgc3RhZmYgYWZ0ZXJ3YXJkcy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtcmV2aWV3ZWRcIj5TdGFydGluZyBWaWV3OjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSBtci0yXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiQmxvY2tzXCIsIFwidGgtbGFyZ2VcIiwgRGlzcGxheU1vZGVzLkJMT0NLKX1cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJTcGxpdFwiLCBcImNvbHVtbnNcIiwgRGlzcGxheU1vZGVzLlNQTElUKX1cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJUZXh0XCIsIFwiYWxpZ24tbGVmdFwiLCBEaXNwbGF5TW9kZXMuVEVYVCl9XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXREb2N1bWVudGF0aW9uKFwic3RhcnRWaWV3XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWlwLXJhbmdlc1wiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPklQIFJhbmdlczo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1pcC1yYW5nZXNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuaXBSYW5nZXNcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvdmlkZSBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIElQIEFkZHJlc3NlcyB0aGF0IHdpbGwgYmUgZXhwbGljaXRseSBhbGxvd2VkLiBJZiBibGFuayxcclxuICAgICAgICAgICAgICAgICAgICB0aGVuIGFsbCBhZGRyZXNzZXMgYXJlIGFsbG93ZWQuIElmIGFuIGFkZHJlc3Mgc3RhcnRzIHdpdGggPGNvZGU+XjwvY29kZT4gdGhlbiBpdCBpdCBpcyBleHBsaWNpdGx5XHJcbiAgICAgICAgICAgICAgICAgICAgYmxhY2tsaXN0ZWQsIGJ1dCB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIGluIHR1cm4gd2l0aCBhIDxjb2RlPiE8L2NvZGU+LiBBZGRyZXNzZXMgY2FuIGFsc29cclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlIGEgYml0IG1hc2sgdG8gYWxsb3cgYSByYW5nZSBvZiBhZGRyZXNzZXMuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtZGF0YXNldHNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5QcmVsb2FkZWQgRGF0YXNldHM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtZGF0YXNldHNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHNcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXREb2N1bWVudGF0aW9uKFwiZGF0YXNldHNcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAke0FTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUx9XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl07XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXSgpO1xyXG4gICAgICAgIC8vIE9ubHkgc3RvcmUgdGhpcyBzZXR0aW5nIGlmIGl0cyBkaWZmZXJlbnQgZnJvbSB0aGUgZGVmYXVsdFxyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW3NlcnZlck5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCwgc2V0dGluZ3MpIHtcclxuICAgIGlmIChzZXR0aW5ncykge1xyXG4gICAgICAgIHNldHRpbmdzID0gSlNPTi5wYXJzZShzZXR0aW5ncyk7XHJcbiAgICAgICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdO1xyXG4gICAgICAgICAgICBpZiAoc2VydmVyTmFtZSBpbiBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXShzZXR0aW5nc1tzZXJ2ZXJOYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdzLnN0YXJ0X3ZpZXcpIHtcclxuICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5weXRob25Nb2RlKHNldHRpbmdzLnN0YXJ0X3ZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbChjb25maWd1cmF0aW9uKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSB7fTtcclxuICAgIEFTU0lHTk1FTlRfU0VUVElOR1MuZm9yRWFjaChzZXR0aW5nID0+IHtcclxuICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdLCBkZWZhdWx0VmFsdWUgPSBzZXR0aW5nWzJdO1xyXG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uW3NlcnZlck5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbY2xpZW50TmFtZV0gPSBrby5vYnNlcnZhYmxlKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbY2xpZW50TmFtZV0gPSBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnNldHRpbmdzLlwiK3NlcnZlck5hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZXR0aW5ncztcclxufVxyXG5cclxuY2xhc3MgQXNzaWdubWVudFNldHRpbmdzVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICAvL1RPRE86IHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gVE9ETzogRG8gdXBkYXRlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci52YWx1ZSgpKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIC8vdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAvLyBUT0RPOiB1cGRhdGVcclxuICAgICAgICAvL3RoaXMuY29kZU1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBc3NpZ25tZW50U2V0dGluZ3MgPSB7XHJcbiAgICBuYW1lOiBcIkFzc2lnbm1lbnQgU2V0dGluZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogQXNzaWdubWVudFNldHRpbmdzVmlldyxcclxuICAgIHRlbXBsYXRlOiBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTUFSS0RPV05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci1tYXJrZG93blwiPjwvdGV4dGFyZWE+ICAgIFxyXG5gO1xyXG5cclxuXHJcbmNsYXNzIE1hcmtkb3duRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5tZGUgPSBuZXcgRWFzeU1ERSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCIpWzBdLFxyXG4gICAgICAgICAgICBhdXRvRG93bmxvYWRGb250QXdlc29tZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlU3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjUwMHB4XCIsXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGltYWdlVXBsb2FkRnVuY3Rpb25cclxuICAgICAgICAgICAgcmVuZGVyaW5nQ29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjb2RlU3ludGF4SGlnaGxpZ2h0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5tZGUuY29kZW1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLnZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMubWRlLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFya2Rvd25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIk1hcmtkb3duXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIubWRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogTWFya2Rvd25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IE1BUktET1dOX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIFRPRE86IHJlbmFtZSBmaWxlcywgbWFudWFsIHNhdmUsIHRhZ3MsIHNhbXBsZV9zdWJtaXNzaW9ucywgb25fZXZhbCwgbm9uLWJ1aWx0aW4gZmlsZXNcclxuICogVE9ETzogaW1wb3J0IGRhdGEsIGhpc3RvcnksIHJ1biwgdXJsX2RhdGEsIGFzc2lnbm1lbnRfc2V0dGluZ3MsIHBhcnNvbnNfbW9kZVxyXG4gKiBUT0RPOiBkZWxldGUgYmVjb21lcyBcImNsZWFyXCIgZm9yIGluc3RydWN0b3IgZmlsZXNcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQGVudW0ge3N0cn1cclxuICovXHJcbmltcG9ydCB7QWJzdHJhY3RFZGl0b3IsIHNsdWdnaWZ5fSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtISVNUT1JZX1RPT0xCQVJfSFRNTH0gZnJvbSBcIi4uL2hpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCBsZXQgRGlzcGxheU1vZGVzID0ge1xyXG4gICAgQkxPQ0s6IFwiYmxvY2tcIixcclxuICAgIFNQTElUOiBcInNwbGl0XCIsXHJcbiAgICBURVhUOiBcInRleHRcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFrZVRhYihuYW1lLCBpY29uLCBtb2RlKSB7XHJcbiAgICByZXR1cm4gYDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnVwZGF0ZU1vZGUuYmluZCgkZGF0YSwgJyR7bW9kZX0nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS0ke2ljb259Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiAke25hbWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBZVEhPTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi10b29sYmFyIGNvbC1tZC0xMiBidG4tdG9vbGJhclwiXHJcbiAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCIgYXJpYS1sYWJlbD1cIlB5dGhvbiBUb29sYmFyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUnVuIEdyb3VwXCI+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJsb2NrcHktcnVuXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5leGVjdXRlLnJ1bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogeydibG9ja3B5LXJ1bi1ydW5uaW5nJzogdWkuZXhlY3V0ZS5pc1J1bm5pbmd9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1wbGF5XCI+PC9zcGFuPiBSdW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSBtci0yXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIkJsb2Nrc1wiLCBcInRoLWxhcmdlXCIsIERpc3BsYXlNb2Rlcy5CTE9DSyl9XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJUZXh0XCIsIFwiYWxpZ24tbGVmdFwiLCBEaXNwbGF5TW9kZXMuVEVYVCl9XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlc2V0IEdyb3VwXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnJlc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc3luY1wiPjwvc3Bhbj4gUmVzZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiSW1wb3J0IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5pbXBvcnREYXRhc2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1jbG91ZC1kb3dubG9hZC1hbHRcIj48L3NwYW4+IEltcG9ydCBkYXRhc2V0c1xyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZmlsZS11cGxvYWRcIj48L3NwYW4+IFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJsb2NrcHktdG9vbGJhci11cGxvYWRcIiB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJldmVudDoge2NoYW5nZTogdWkuZWRpdG9ycy51cGxvYWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlIGRyb3Bkb3duLXRvZ2dsZS1zcGxpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1pdGVtIGJsb2NrcHktdG9vbGJhci1kb3dubG9hZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuZG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWRvd25sb2FkJz48L3NwYW4+IERvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkhpc3RvcnkgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi50b2dnbGVIaXN0b3J5TW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB1aS5lZGl0b3JzLnB5dGhvbi5pc0hpc3RvcnlBdmFpbGFibGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogeyBhY3RpdmU6IGRpc3BsYXkuaGlzdG9yeU1vZGUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogeyAnYXJpYS1wcmVzc2VkJzogZGlzcGxheS5oaXN0b3J5TW9kZSB9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1oaXN0b3J5XCI+PC9zcGFuPiBIaXN0b3J5XHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8IS0tIEZ1bGx5IGZ1bmN0aW9uYWwsIGJ1dCBhIGxpdHRsZSB0b28uLiBJbnZhc2l2ZSBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkZ1bGxzY3JlZW4gR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJ3RleHQnXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uZnVsbHNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZXhwYW5kLWFycm93cy1hbHRcIj48L3NwYW4+IEZ1bGxzY3JlZW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgLS0+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiU2F2ZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuU2F2ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXNhdmVcIj48L3NwYW4+IFNhdmVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJEZWxldGUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhbkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5maWxlcy5kZWxldGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9zcGFuPiBEZWxldGVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSZW5hbWUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhblJlbmFtZVwiPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1maWxlLXNpZ25hdHVyZVwiPjwvc3Bhbj4gUmVuYW1lXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgICR7SElTVE9SWV9UT09MQkFSX0hUTUx9XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi1ibG9ja21pcnJvclwiXHJcbiAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5tZW51LmlzU3VibWl0dGVkXCI+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydElweW5iVG9QeXRob24oY29kZSkge1xyXG4gICAgbGV0IGlweW5iID0gSlNPTi5wYXJzZShjb2RlKTtcclxuICAgIGxldCBpc1VzYWJsZSA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAhY2VsbC5zb3VyY2VbMF0uc3RhcnRzV2l0aChcIiVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgICAgIGNlbGwuY2VsbF90eXBlID09PSBcInJhd1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgbWFrZVB5dGhvbiA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwibWFya2Rvd25cIiB8fFxyXG4gICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCInJydcIitjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpK1wiJycnXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBpcHluYi5jZWxscy5maWx0ZXIoaXNVc2FibGUpLm1hcChtYWtlUHl0aG9uKS5qb2luKFwiXFxuXCIpO1xyXG59XHJcblxyXG5jbGFzcyBQeXRob25FZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIikpO1xyXG4gICAgICAgIHRoaXMuYm0gPSBuZXcgQmxvY2tNaXJyb3Ioe1xyXG4gICAgICAgICAgICBcImNvbnRhaW5lclwiOiB0aGlzLnRhZ1swXSxcclxuICAgICAgICAgICAgXCJydW5cIjogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5ydW4uYmluZChtYWluLmNvbXBvbmVudHMuZW5naW5lKSxcclxuICAgICAgICAgICAgXCJza2lwU2t1bHB0XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmxvY2tseU1lZGlhUGF0aFwiOiBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uYmxvY2tseVBhdGgsXHJcbiAgICAgICAgICAgIC8vJ2hlaWdodCc6ICcyMDAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1ha2VTdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbGRQeXRob25Nb2RlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3VyZUV4dHJhQmxvY2tseSgpIHtcclxuICAgICAgICB0aGlzLmJtLmJsb2NrRWRpdG9yLndvcmtzcGFjZS5jb25maWd1cmVDb250ZXh0TWVudSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTY3JlZW5zaG90XCIsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLlNDUkVFTlNIT1RfQkxPQ0tTXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIGxldCBvbGRGaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAobmV3RmlsZW5hbWUgIT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgaWYgKG9sZEZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZFB5dGhvbk1vZGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZShEaXNwbGF5TW9kZXMuVEVYVCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSh0aGlzLm9sZFB5dGhvbk1vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuXHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRCTUxpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJtLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICBpZiAobmV3RmlsZW5hbWUgIT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ibS5pc1BhcnNvbnMgPSAoKSA9PiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJtLmlzUGFyc29ucyA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmlzUGFyc29ucztcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5saW5lc0Vycm9yLnN1YnNjcmliZSgobGluZXMpID0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm0uc2V0SGlnaGxpZ2h0ZWRMaW5lcyhsaW5lcywgXCJlZGl0b3ItZXJyb3ItbGluZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGluZXNVbmNvdmVyZWQuc3Vic2NyaWJlKChsaW5lcykgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuYm0uc2V0SGlnaGxpZ2h0ZWRMaW5lcyhsaW5lcywgXCJlZGl0b3ItdW5jb3ZlcmVkLWxpbmVcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL3RoaXMuYm0uYmxvY2tFZGl0b3Iud29ya3NwYWNlLnJlbmRlcigpO1xyXG4gICAgICAgIC8vdGhpcy5ibS5yZWZyZXNoKCk7XHJcbiAgICAgICAgLy8gVE9ETzogRmlndXJlIG91dCB3aHkgdGhpcyBkb2Vzbid0IGVuZCB1cCBsb29raW5nIHJpZ2h0IChnbyB0byBhIGRpZmZlcmVudCBlZGl0b3IsIGNvbWUgYmFjaywgYW5kIGl0J2xsIGJlIHNxdWlzaGVkKVxyXG4gICAgICAgIC8vdGhpcy5ibS5yZWZyZXNoKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmJtLnJlZnJlc2goKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgaWYgKG5ld0NvbnRlbnRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV3Q29udGVudHMgPSB0aGlzLmZpbGUuaGFuZGxlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEb2Vzbid0IG1hdHRlciwgZmlsZSB3YXMgYWxyZWFkeSBzaHV0IGRvd24uXHJcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50cyA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0NvbnRlbnRzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFdlJ3JlIGNsb3NpbmcgdGhpcyBmaWxlXHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRDb2RlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5ibS5nZXRDb2RlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuYm0ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5jdXJyZW50Qk1MaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyTGluZVN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyTGluZVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcclxuICAgICAgICBpZiAodGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5zZXRNb2RlKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZS5zdWJzY3JpYmUobW9kZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0TW9kZShtb2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWFkT25seShpc1JlYWRPbmx5KSB7XHJcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IGlzUmVhZE9ubHk7XHJcbiAgICAgICAgdGhpcy5ibS5zZXRSZWFkT25seShpc1JlYWRPbmx5KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb2RlID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoXCIuaXB5bmJcIikpIHtcclxuICAgICAgICAgICAgY29kZSA9IGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuVXBsb2FkXCIsIFwiXCIsIFwiXCIsIGNvZGUsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMuZmlsZS5oYW5kbGUoY29kZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZW5naW5lLnJ1bigpO1xyXG4gICAgICAgIC8vIFRPRE86IFJ1biBjb2RlXHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzdXBlci5kb3dubG9hZEZpbGUoKTtcclxuICAgICAgICBpZiAocmVzdWx0Lm5hbWUgPT09IFwiYW5zd2VyXCIgJiYgcmVzdWx0LmV4dGVuc2lvbiA9PT0gXCIucHlcIikge1xyXG4gICAgICAgICAgICByZXN1bHQubmFtZSA9IHNsdWdnaWZ5KHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5taW1ldHlwZSA9IFwidGV4dC94LXB5dGhvblwiO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5Eb3dubG9hZFwiLCBcIlwiLCBcIlwiLCBcIlwiLCByZXN1bHQubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQeXRob25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlB5dGhvblwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnB5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFB5dGhvbkVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogUFlUSE9OX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEFHU19FRElUT1JfSFRNTCA9IGBcclxuQ3JlYXRlIG5ld1xyXG5JbXBvcnQgYnkgbmFtZVxyXG5GaW5kIGJ5IG93bmVyL2NvdXJzZS9raW5kXHJcblxyXG5UYWdzOlxyXG4gICAgRGF0YTpcclxuICAgICAgICBOYW1lXHJcbiAgICAgICAgS2luZFxyXG4gICAgICAgIExldmVsXHJcbiAgICAgICAgVmVyc2lvblxyXG4gICAgICAgIERlc2NyaXB0aW9uXHJcbiAgICBDb250cm9sczpcclxuICAgICAgICBFZGl0XHJcbiAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgRGVsZXRlIFxyXG5gO1xyXG5cclxuY2xhc3MgVGFnc0VkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci10YWdzXCIpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3NFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRhZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiF0YWdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGFnc0VkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEFHU19FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRFWFRfRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8ZGl2PlxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwiYmxvY2tweS1lZGl0b3ItdGV4dFwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmNsYXNzIFRleHRFZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYSh0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci10ZXh0XCIpWzBdLCB7XHJcbiAgICAgICAgICAgIHNob3dDdXJzb3JXaGVuU2VsZWN0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICAgICAgICAgICAgZmlyc3RMaW5lTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICBpbmRlbnRVbml0OiA0LFxyXG4gICAgICAgICAgICB0YWJTaXplOiA0LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4dHJhS2V5czoge1xyXG4gICAgICAgICAgICAgICAgXCJUYWJcIjogXCJpbmRlbnRNb3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcIlNoaWZ0LVRhYlwiOiBcImluZGVudExlc3NcIixcclxuICAgICAgICAgICAgICAgIFwiRXNjXCI6IGZ1bmN0aW9uIChjbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbS5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtLmRpc3BsYXkuaW5wdXQuYmx1cigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIkYxMVwiOiBmdW5jdGlvbiAoY20pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbS5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjbS5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5jb2RlTWlycm9yLnJlZnJlc2guYmluZCh0aGlzLmNvZGVNaXJyb3IpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvZGVNaXJyb3Iuc2V0VmFsdWUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICB0aGlzLmNvZGVNaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLmNvZGVNaXJyb3IuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRleHRcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi50eHRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGV4dEVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEVYVF9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBFZGl0b3JzIGFyZSBpbmZlcnJlZCBmcm9tIEZpbGVuYW1lcy5cclxuICpcclxuICogVGhlIGVkaXRvciBpcyBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uOlxyXG4gKiAgLmJsb2NrcHk6IFNwZWNpYWwgZWRpdG9yICh3aWxsIGJlIGNob3NlbiBieSBmaWxlbmFtZSlcclxuICogIC5weTogUHl0aG9uIEVkaXRvclxyXG4gKiAgLm1kOiBNYXJrZG93biBFZGl0b3JcclxuICogIC50eHQ6IFRleHQgRWRpdG9yIChhbHNvIHVzZWQgZm9yIG90aGVyIHR5cGVzKVxyXG4gKiAgLnBlbWw6IFBFTUwgRWRpdG9yXHJcbiAqICAucG5nLCAuZ2lmLCAuanBlZywgLmpwZywgLmJtcDogSW1hZ2UgRWRpdG9yXHJcbiAqICAuanNvbjogSlNPTiBFZGl0b3JcclxuICogIC55YW1sOiBZQU1MIEVkaXRvclxyXG4gKi9cclxuXHJcbmltcG9ydCB7UHl0aG9uRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvcHl0aG9uXCI7XHJcbmltcG9ydCB7VGV4dEVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RleHRcIjtcclxuaW1wb3J0IHtBc3NpZ25tZW50U2V0dGluZ3N9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7VGFnc0VkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RhZ3NcIjtcclxuaW1wb3J0IHtNYXJrZG93bkVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL21hcmtkb3duXCI7XHJcblxyXG4vKipcclxuICogVGhlIGRpZmZlcmVudCBwb3NzaWJsZSBlZGl0b3JzIGF2YWlsYWJsZVxyXG4gKiBAZW51bSB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGxldCBFZGl0b3JzRW51bSA9IHtcclxuICAgIFNVQk1JU1NJT046IFwic3VibWlzc2lvblwiLFxyXG4gICAgQVNTSUdOTUVOVDogXCJhc3NpZ25tZW50XCIsXHJcbiAgICBJTlNUUlVDVElPTlM6IFwiaW5zdHJ1Y3Rpb25zXCIsXHJcbiAgICBPTl9SVU46IFwib25fcnVuXCIsXHJcbiAgICBPTl9DSEFOR0U6IFwib25fY2hhbmdlXCIsXHJcbiAgICBPTl9FVkFMOiBcIm9uX2V2YWxcIixcclxuICAgIFNUQVJUSU5HX0NPREU6IFwic3RhcnRpbmdfY29kZVwiLFxyXG4gICAgU0FNUExFX1NVQk1JU1NJT05TOiBcInNhbXBsZV9zdWJtaXNzaW9uc1wiLFxyXG4gICAgSU5TVFJVQ1RPUl9GSUxFOiBcImluc3RydWN0b3JfZmlsZVwiXHJcbn07XHJcblxyXG5jb25zdCBTUEVDSUFMX05BTUVTUEFDRVMgPSBbXCIhXCIsIFwiXlwiLCBcIj9cIiwgXCIkXCJdO1xyXG5cclxuY29uc3QgQVZBSUxBQkxFX0VESVRPUlMgPSBbXHJcbiAgICBUZXh0RWRpdG9yLCBQeXRob25FZGl0b3IsIEFzc2lnbm1lbnRTZXR0aW5ncywgVGFnc0VkaXRvciwgTWFya2Rvd25FZGl0b3JcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUT1JTX0hUTUwgPSBBVkFJTEFCTEVfRURJVE9SUy5tYXAoZWRpdG9yID0+XHJcbiAgICBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWVkaXRvclwiPlxyXG4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLnZpZXcoKS5uYW1lID09PSAnJHtlZGl0b3IubmFtZX0nXCI+XHJcbiAgICAke2VkaXRvci50ZW1wbGF0ZX0gICAgXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxuICAgIC8qXHJcbiAgICBgXHJcbjwhLS0ga28gaWY6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfScgLS0+XHJcbiR7ZWRpdG9yLnRlbXBsYXRlfVxyXG48IS0tIC9rbyAtLT5gKi9cclxuKS5qb2luKFwiXFxuXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvcnMge1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8gPSBbXTtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbnNfID0ge307XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfID0ge307XHJcbiAgICAgICAgQVZBSUxBQkxFX0VESVRPUlMuZm9yRWFjaChlZGl0b3IgPT4gdGhpcy5yZWdpc3RlckVkaXRvcihlZGl0b3IpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZS5zdWJzY3JpYmUodGhpcy5jaGFuZ2VFZGl0b3IsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRWRpdG9yKGRhdGEpIHtcclxuICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IGRhdGEuZXh0ZW5zaW9ucztcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgZGF0YS5jb25zdHJ1Y3Rvcih0aGlzLm1haW4sIHRoaXMudGFnKTtcclxuICAgICAgICBpbnN0YW5jZS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8ucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfW2RhdGEubmFtZS50b0xvd2VyQ2FzZSgpXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5leHRlbnNpb25zX1tleHRlbnNpb25zW2ldXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBieU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ5TmFtZV9bbmFtZS50b0xvd2VyQ2FzZSgpXTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VFZGl0b3IobmV3RmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgb2xkRWRpdG9yID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgIGxldCBuZXdFZGl0b3IgPSB0aGlzLmdldEVkaXRvcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9sZEVkaXRvci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5ld0VkaXRvcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnQuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlRmlsZW5hbWUocGF0aCkge1xyXG4gICAgICAgIGxldCBzcGFjZSA9IHBhdGguY2hhckF0KDApO1xyXG4gICAgICAgIGlmIChTUEVDSUFMX05BTUVTUEFDRVMuaW5kZXhPZihzcGFjZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGFjZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIGxldCB0eXBlID0gcGF0aC5zdWJzdHIocGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIHJldHVybiB7XCJzcGFjZVwiOiBzcGFjZSwgXCJuYW1lXCI6IG5hbWUsIFwidHlwZVwiOiB0eXBlfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFZGl0b3IocGF0aCkge1xyXG4gICAgICAgIGxldCB7c3BhY2UsIG5hbWUsIHR5cGV9ID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHBhdGgpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcIi5ibG9ja3B5XCIgJiYgcGF0aCBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3BhdGhdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3R5cGVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWRfWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcbmltcG9ydCB7T25SdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fcnVuXCI7XG5pbXBvcnQge1J1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ydW5cIjtcbmltcG9ydCB7RXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ldmFsXCI7XG5pbXBvcnQge1NhbXBsZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9zYW1wbGVcIjtcbmltcG9ydCB7T25DaGFuZ2VDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fY2hhbmdlXCI7XG5pbXBvcnQge09uRXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ldmFsXCI7XG5pbXBvcnQge09uU2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX3NhbXBsZVwiO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZXhlY3V0aW5nIFB5dGhvbiBjb2RlIGFuZCBwYXNzaW5nIHRoZSByZXN1bHRzIGFsb25nIHRvIGludGVyZXN0ZWQgY29tcG9uZW50cy5cbiAqXG4gKiBJbnRlcmVzdGluZyBjb21wb25lbnRzOlxuICogIEV4ZWN1dGlvbiBCdWZmZXI6IFJlc3BvbnNpYmxlIGZvciBjb2xsZWN0aW5nIHRoZSB0cmFjZSBkdXJpbmcgcHJvZ3JhbSBleGVjdXRpb24uXG4gKiAgICAgICAgICAgICAgICAgICAgVGhpcyBwcmV2ZW50cyBLbm9ja291dGpzIGZyb20gdXBkYXRpbmcgdGhlIGVkaXRvciBkdXJpbmcgZXhlY3V0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlFZGl0b3J9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbk1vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcblxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zID0ge1xuICAgICAgICAgICAgcnVuOiBuZXcgUnVuQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIGV2YWw6IG5ldyBFdmFsQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uUnVuOiBuZXcgT25SdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG5ldyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkV2YWw6IG5ldyBPbkV2YWxDb25maWd1cmF0aW9uKG1haW4pXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJlY29uZmlndXJlIHNrdWxwdCBzbyB3ZSBjYW4gcGFyc2VcbiAgICAgICAgU2suY29uZmlndXJlKHRoaXMuY29uZmlndXJhdGlvbnMucnVuLmdldFNrdWxwdE9wdGlvbnMoKSk7XG5cbiAgICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIHRyYWNpbmcgd2hpbGUgdGhlIHByb2dyYW0gaXMgZXhlY3V0aW5nXG4gICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluYWJsZSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiBleGVjdXRpb24gaGFzIGZ1bGx5IGVuZGVkLFxuICAgICAgICAgKiB3aGV0aGVyIGl0IHN1Y2NlZWRzIG9yIGZhaWxzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkVuZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgcmVwb3J0c1xuICAgICAqL1xuICAgIHJlc2V0UmVwb3J0cygpIHtcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMuZXhlY3V0aW9uTW9kZWwucmVwb3J0cztcbiAgICAgICAgcmVwb3J0W1widmVyaWZpZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJtb2RlbFwiXSA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB9O1xuXG4gICAgcmVzZXRTdHVkZW50TW9kZWwoKSB7XG4gICAgICAgIGxldCBzdHVkZW50ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5zdHVkZW50O1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRTdGVwKG51bGwpO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQubGFzdFN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudExpbmUobnVsbCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlRGF0YS5yZW1vdmVBbGwoKTtcbiAgICAgICAgc3R1ZGVudC5yZXN1bHRzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXNldEV4ZWN1dGlvbkJ1ZmZlcigpIHtcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7XG4gICAgICAgICAgICBcInRyYWNlXCI6IFtdLFxuICAgICAgICAgICAgXCJzdGVwXCI6IDAsXG4gICAgICAgICAgICBcImxpbmVcIjogMCxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBpbnRlcmZhY2UgYXNwZWN0cyBvZiB0aGUgcHJldmlvdXMgUnVuLlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICAvLyBUT0RPOiBDbGVhciBvdXQgYW55IGNvdmVyYWdlL3RyYWNlL2Vycm9yIGhpZ2hsaWdodHMgaW4gZWRpdG9yc1xuICAgICAgICAvLyBSZXNldCBleGVjdXRpb24gaW4gbW9kZWxcbiAgICAgICAgdGhpcy5yZXNldFN0dWRlbnRNb2RlbCgpO1xuICAgICAgICAvLyBHZXQgcmVwb3J0cyByZWFkeVxuICAgICAgICB0aGlzLnJlc2V0UmVwb3J0cygpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGV4ZWN1dGlvbiBidWZmZXJcbiAgICAgICAgdGhpcy5yZXNldEV4ZWN1dGlvbkJ1ZmZlcigpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGNvbnNvbGUgb2YgcHJpbnRlZCBzdHVmZlxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgb2xkIGZlZWRiYWNrXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZGVsYXllZFJ1bigpIHtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnJ1bi5iaW5kKHRoaXMpLCAxKTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMucnVuLnVzZSh0aGlzKTtcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5vblJ1bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMuY29uZmlndXJhdGlvbi5zaG93RXJyb3JzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vblJ1bi51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKS50aGVuKHRoaXMuZXhlY3V0aW9uRW5kXy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICBsZXQgZXZhbHVhdGlvbklucHV0ID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5ldmFsdWF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmFsdWF0aW9uSW5wdXQpO1xuICAgICAgICBldmFsdWF0aW9uSW5wdXQudGhlbigodXNlcklucHV0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLmV2YWwudXNlKHRoaXMsIHVzZXJJbnB1dCk7XG4gICAgICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMub25FdmFsLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLmNvbmZpZ3VyYXRpb24uc2hvd0Vycm9ycy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkV2YWwoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25FdmFsLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5ldmFsdWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkNoYW5nZS51c2UodGhpcyk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICByZXR1cm4gU2subWlzY2V2YWwuYXN5bmNUb1Byb21pc2UoKCkgPT5cbiAgICAgICAgICAgIFNrLmltcG9ydE1haW5XaXRoQm9keSh0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZW5hbWUsIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jb2RlLCB0cnVlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlZCB3aGVuZXZlciB0aGUgUHl0aG9uIGNvZGUgY2hhbmdlc1xuICAgICAqL1xuICAgIG9uX2NoYW5nZSgpIHtcbiAgICAgICAgbGV0IEZJTEVOQU1FID0gXCJvbl9jaGFuZ2VcIjtcbiAgICAgICAgLy8gU2tpcCBpZiB0aGUgaW5zdHJ1Y3RvciBoYXMgbm90IGRlZmluZWQgYW55dGhpbmdcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwucHJvZ3JhbXNbRklMRU5BTUVdKCkudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjaGFuZ2luZ1wiKTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVDb2RlKCk7XG4gICAgICAgIC8vIE9uIHN0ZXAgZG9lcyBub3QgcGVyZm9ybSBwYXJzZSBhbmFseXNpcyBieSBkZWZhdWx0IG9yIHJ1biBzdHVkZW50IGNvZGVcbiAgICAgICAgbGV0IGVuZ2luZSA9IHRoaXM7XG4gICAgICAgIGxldCBmZWVkYmFjayA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrO1xuICAgICAgICBlbmdpbmUucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIGVuZ2luZS52ZXJpZnlDb2RlKCk7XG4gICAgICAgIGVuZ2luZS51cGRhdGVQYXJzZSgpO1xuICAgICAgICBlbmdpbmUucnVuSW5zdHJ1Y3RvckNvZGUoRklMRU5BTUUsIHRydWUsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICAvLyBTVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogb25seSBzaG93IHVuZGVyIGNlcnRhaW4gY2lyY3Vtc3RhbmNlc1xuICAgICAgICAgICAgICAgIGlmICghc3VjY2VzcyAmJlxuICAgICAgICAgICAgICAgICAgICAhKGNhdGVnb3J5ID09PSBcIkluc3RydWN0b3JcIiAmJiBsYWJlbCA9PT0gXCJObyBlcnJvcnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgbGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKG1vZHVsZS4kZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJlbmdpbmVcIiwgXCJvbl9jaGFuZ2VcIik7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGNhbGwgdGhlIGRlZmluZWQgb25FeGVjdXRpb25FbmQsXG4gICAgICogYnV0IHdpbGwgZG8gbm90aGluZyBpZiB0aGVyZSBpcyBubyBmdW5jdGlvbiBkZWZpbmVkLlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkVuZF8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRXhlY3V0aW9uRW5kICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkJlZ2luXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25CZWdpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGNvbnN0IEVNUFRZX01PRFVMRSA9IFwibGV0ICRidWlsdGlubW9kdWxlID0gZnVuY3Rpb24obW9kKXsgcmV0dXJuIG1vZDsgfVwiO1xyXG5cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBob2xkaW5nIHNldHRpbmdzIG9mIGEgcGFydGljdWxhciBydW4gY29uZmlndXJhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvZGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICAvLyBBY2Nlc3MgcG9pbnQgZm9yIGluc3RydWN0b3IgZGF0YVxyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgU2suY29uc29sZSA9IHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGU7XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5nZXRTa3VscHRPcHRpb25zKCkpO1xyXG4gICAgICAgIC8vIFNldCBvcGVuRmlsZSBhcyBtZWNoYW5pc20gdG8gcmVhZCBmaWxlc1xyXG4gICAgICAgIFNrLmluQnJvd3NlciA9IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTa3VscHRPcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIF9fZnV0dXJlX186IFNrLnB5dGhvbjMsXHJcbiAgICAgICAgICAgIC8vIGltcG9ydFxyXG4gICAgICAgICAgICByZWFkOiB0aGlzLmltcG9ydEZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gb3BlblxyXG4gICAgICAgICAgICAvL2ZpbGVvcGVuOiB0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIGZpbGUud3JpdGVcclxuICAgICAgICAgICAgZmlsZXdyaXRlOiB0aGlzLndyaXRlRmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBwcmludFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHRoaXMucHJpbnQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gaW5wdXRcclxuICAgICAgICAgICAgaW5wdXRmdW46IHRoaXMuaW5wdXQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgaW5wdXRmdW5UYWtlc1Byb21wdDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gTWVkaWEgSW1hZ2UgUHJveHkgVVJMXHJcbiAgICAgICAgICAgIGltYWdlUHJveHk6IHRoaXMuZ2V0SW1hZ2VQcm94eS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0byBrZWVwIHRoZSBnbG9iYWxzXHJcbiAgICAgICAgICAgIHJldGFpbkdsb2JhbHM6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlZCB0byBhY2Nlc3MgU2t1bHB0IGJ1aWx0LWlucy4gVGhpcyBpcyBwcmV0dHkgZ2VuZXJpYywgdGFrZW5cclxuICAgICAqIGFsbW9zdCBkaXJlY3RseSBmcm9tIHRoZSBTa3VscHQgZG9jcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgcHl0aG9uIGZpbGVuYW1lIChlLmcuLCBcIm9zXCIgb3IgXCJwcHJpbnRcIikgdGhhdCB3aWxsIGJlIGxvYWRlZC5cclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBKYXZhU2NyaXB0IHNvdXJjZSBjb2RlIG9mIHRoZSBmaWxlICh3ZWlyZCwgcmlnaHQ/KVxyXG4gICAgICogQHRocm93cyBXaWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBmaWxlIGlzbid0IGZvdW5kLlxyXG4gICAgICovXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH07XHJcblxyXG4gICAgb3BlbkZpbGUoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICB3cml0ZUZpbGUoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBwcmludCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUucHJpbnQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0KCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlucHV0TW9ja0Z1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChTay5xdWV1ZWRJbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNrLnF1ZXVlZElucHV0LnBvcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0SW1hZ2VQcm94eSgpIHtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgc3RlcCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFN0ZXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3Qgc3VjY2VzcyBleGVjdXRpb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IGZhaWx1cmUgZXhlY3V0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGR1bW15T3V0U2FuZGJveCgpIHtcclxuICAgICAgICAvL1NrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvcGVkYWwvc2FuZGJveC9zYW5kYm94LnB5XCJdID0gXCJjbGFzcyBTYW5kYm94OiBwYXNzXFxuZGVmIHJ1bigpOiBwYXNzXFxuZGVmIHJlc2V0KCk6IHBhc3NcXG5cIjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7QmxvY2tQeVRyYWNlfSBmcm9tIFwiLi4vdHJhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmFsQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUsIGNvZGUpIHtcclxuICAgICAgICAvLyBUT0RPOiBmaXggdG8gYmUgY3VycmVudGx5IGFkZGVkIGxpbmVcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UoXCJSdW5uaW5nLi4uXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlclwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IFwiXyA9IFwiICsgY29kZTtcclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gdHJ1ZTtcclxuICAgICAgICBTay5nbG9iYWxzID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLkFkZFwiLCBcIlwiLCBcIlwiLCBjb2RlLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGVcIiwgXCJcIiwgXCJcIiwgdGhpcy5jb2RlLCBcImV2YWx1YXRpb25zXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXZhbCBzdWNjZXNzXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRXZhbHVhdGUuUHJvZ3JhbVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKFNrLmdsb2JhbHMpO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LnJlc3VsdHMgPSBtb2R1bGU7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5wcmludFZhbHVlKFNrLmZmaS5yZW1hcFRvSnMobW9kdWxlLiRkLl8uJHIoKSkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zdGVwKG1vZHVsZS4kZCwgbW9kdWxlLiRkLC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwidHJhY2VcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBcIm91dHB1dFwiOiB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dCxcclxuICAgICAgICAgICAgICAgIFwiZXZhbHVhdGlvblwiOiB0aGlzLmNvZGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2YWwgZmFpbHVyZVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlLkVycm9yXCIsIFwiXCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBcImV2YWx1YXRpb25cIjogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29uZmlndXJhdGlvbiwgRU1QVFlfTU9EVUxFfSBmcm9tIFwiLi9jb25maWd1cmF0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyRza19tb2RfaW5zdHJ1Y3Rvcn0gZnJvbSBcIi4uL3NrX21vZF9pbnN0cnVjdG9yXCI7XHJcblxyXG5jb25zdCBVVElMSVRZX01PRFVMRV9DT0RFID0gXCJ2YXIgJGJ1aWx0aW5tb2R1bGUgPSBcIiArICRza19tb2RfaW5zdHJ1Y3Rvci50b1N0cmluZygpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gSW5zdHJ1Y3RvcnMgaGF2ZSBubyBsaW1pdHNcclxuICAgICAgICBTay5leGVjTGltaXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8gU3RlcHBlciEgRXhlY3V0ZWQgYWZ0ZXIgZXZlcnkgc3RhdGVtZW50LlxyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gbnVsbDtcclxuICAgICAgICAvLyBNdXRlIGV2ZXJ5dGhpbmdcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcih0cnVlKTtcclxuICAgICAgICAvLyBEaXNhYmxlIGlucHV0IGJveFxyXG4gICAgICAgIFNrLnF1ZXVlZElucHV0ID0gW107XHJcbiAgICAgICAgLy8gVE9ETyBTay5pbnB1dGZ1biA9IEJsb2NrUHlFbmdpbmUuaW5wdXRNb2NrRnVuY3Rpb247XHJcbiAgICAgICAgLy8gVE9ETzogQWxsb3cgaW5wdXQgZnVuY3Rpb24gdG8gZGlzYWJsZSB0aGUgdGltZXIsIHNvbWVob3dcclxuICAgICAgICAvLyBFbmFibGUgdXRpbGl0eSBtb2RlXHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gVVRJTElUWV9NT0RVTEVfQ09ERTtcclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCIuL19pbnN0cnVjdG9yL19faW5pdF9fLmpzXCJdID0gRU1QVFlfTU9EVUxFO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5GaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JGaWxlcyA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgaW5zdHJ1Y3RvckZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnN0cnVjdG9yRmlsZXNbaV0uZmlsZW5hbWUoKSA9PT0gXCIhXCIrZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0cnVjdG9yRmlsZXNbaV0uY29udGVudHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgU2suYnVpbHRpbi5PU0Vycm9yKFwiRmlsZSBub3QgZm91bmQ6IFwiK2ZpbGVuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgfHwgXCJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3IvX19pbml0X18uanNcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gRU1QVFlfTU9EVUxFO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUuc3RhcnRzV2l0aChcIi4vX2luc3RydWN0b3IvXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBpbm5lck5hbWUgPSBmaWxlbmFtZS5zbGljZShcIi4vX2luc3RydWN0b3IvXCIubGVuZ3RoKTtcclxuICAgICAgICAgICAgbGV0IGluc3RydWN0b3JGaWxlcyA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGluc3RydWN0b3JGaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluc3RydWN0b3JGaWxlc1tpXS5maWxlbmFtZSgpID09PSBcIiFcIitpbm5lck5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdHJ1Y3RvckZpbGVzW2ldLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNrLmJ1aWx0aW4uSW1wb3J0RXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogJ1wiICsgZmlsZW5hbWUgKyBcIidcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiQXBwbGVQaWVcIjtcclxuICAgICAgICByZXR1cm4gU2sucXVldWVkSW5wdXQucG9wKCk7XHJcbiAgICAgICAgLypyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShTay5xdWV1ZWRJbnB1dC5wb3AoKSk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25DaGFuZ2VDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIm9uX2NoYW5nZS5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmlnZ2VyT25DaGFuZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge05FV19MSU5FX1JFR0VYfSBmcm9tIFwiLi9vbl9ydW5cIjtcclxuaW1wb3J0IHtpbmRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV1JBUF9JTlNUUlVDVE9SX0NPREUgPSBmdW5jdGlvbiAoc3R1ZGVudENvZGUsIGluc3RydWN0b3JDb2RlLCBxdWljaywgaXNTYWZlKSB7XHJcbiAgICBsZXQgc2FmZUNvZGUgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50Q29kZSk7XHJcbiAgICBsZXQgaW5kZW50ZWRDb2RlID0gaW5kZW50KGluZGVudChpc1NhZmUgPyBzdHVkZW50Q29kZSA6IFwiTm9uZVwiKSk7XHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSlcclxuZGVmIHJ1bl9zdHVkZW50KCk6XHJcbiAgICAjIGxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHRyeTpcclxuJHtpbmRlbnRlZENvZGV9XHJcbiAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGVycm9yOlxyXG4gICAgICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgcmV0dXJuIE5vbmVcclxuZnJvbSBwZWRhbC5zYW5kYm94IGltcG9ydCBjb21wYXRpYmlsaXR5XHJcbmZyb20gdXRpbGl0eSBpbXBvcnQgKlxyXG5zdHVkZW50ID0gZ2V0X3N0dWRlbnRfZGF0YSgpXHJcbmNvbXBhdGliaWxpdHkuc2V0X3NhbmRib3goc3R1ZGVudClcclxuZXJyb3IsIHBvc2l0aW9uID0gZ2V0X3N0dWRlbnRfZXJyb3IoKVxyXG5jb21wYXRpYmlsaXR5LnJhaXNlX2V4Y2VwdGlvbihlcnJvciwgcG9zaXRpb24pXHJcbmNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnQgPSBydW5fc3R1ZGVudFxyXG5jb21wYXRpYmlsaXR5LmdldF9wbG90cyA9IGdldF9wbG90c1xyXG5jb21wYXRpYmlsaXR5LmdldF9vdXRwdXQgPSBnZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkucmVzZXRfb3V0cHV0ID0gcmVzZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkudHJhY2VfbGluZXMgPSB0cmFjZV9saW5lc1xyXG5kZWYgY2FwdHVyZV9vdXRwdXQoZnVuYywgKmFyZ3MpOlxyXG4gICByZXNldF9vdXRwdXQoKVxyXG4gICBmdW5jKCphcmdzKVxyXG4gICByZXR1cm4gZ2V0X291dHB1dCgpXHJcbmNvbXBhdGliaWxpdHkuY2FwdHVyZV9vdXRwdXQgPSBjYXB0dXJlX291dHB1dFxyXG4ke2luc3RydWN0b3JDb2RlfVxyXG5mcm9tIHBlZGFsLnJlc29sdmVycyBpbXBvcnQgc2ltcGxlXHJcblNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREUgPSBzaW1wbGUucmVzb2x2ZSgpXHJcbmA7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT25FdmFsQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ldmFsXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVUaWZhID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpZmEoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgc3R1ZGVudENvZGVTYWZlID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnN0dWRlbnQuZXZhbHVhdGlvbiB8fCBcIk5vbmVcIjtcclxuICAgICAgICB0aGlzLmR1bW15T3V0U2FuZGJveCgpO1xyXG4gICAgICAgIGxldCBpbnN0cnVjdG9yQ29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICBsZXQgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGlzU2FmZSA9ICFyZXBvcnRbXCJwYXJzZXJcIl0uZW1wdHkgJiYgcmVwb3J0W1widmVyaWZpZXJcIl0uc3VjY2VzcztcclxuICAgICAgICBpbnN0cnVjdG9yQ29kZSA9IFdSQVBfSU5TVFJVQ1RPUl9DT0RFKHN0dWRlbnRDb2RlU2FmZSwgaW5zdHJ1Y3RvckNvZGUsIGRpc2FibGVUaWZhLCBpc1NhZmUpO1xyXG4gICAgICAgIGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoIC0gbGluZU9mZnNldDtcclxuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge1xyXG4gICAgICAgICAgICBcImNvbXBsaW1lbnRzXCI6IFtdLFxyXG4gICAgICAgICAgICBcImZpbGVuYW1lXCI6IFwiLi9faW5zdHJ1Y3Rvci9vbl9ldmFsLnB5XCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBpbnN0cnVjdG9yQ29kZSxcclxuICAgICAgICAgICAgXCJsaW5lT2Zmc2V0XCI6IGxpbmVPZmZzZXRcclxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb2RlID0gaW5zdHJ1Y3RvckNvZGU7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICAvL1NrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuICAgICAgICBTay5nbG9iYWxzID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbkV2YWwgc3VjY2Vzc1wiKTtcclxuICAgICAgICAvLyBUT0RPOiBBY3R1YWxseSBwYXJzZSByZXN1bHRzXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHMgPSBTay5nbG9iYWxzO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbW9kdWxlLiRkLm9uX2V2YWwuJGQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kdWxlLiRkKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2socmVzdWx0cyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNVQ0NFU1MpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VjY2VzcyB8fCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCkpO1xyXG4gICAgICAgIC8vIENhbm5vdCBleGNlZWQgMSBwb2ludCwgY2Fubm90IGdvIGJlbG93IDAgcG9pbnRzXHJcbiAgICAgICAgbGV0IHNjb3JlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNDT1JFKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KDAuMCwgTWF0aC5taW4oMS4wLCBzY29yZSkpO1xyXG4gICAgICAgIGxldCBvbGRTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoTWF0aC5tYXgob2xkU2NvcmUsIHNjb3JlKSk7XHJcbiAgICAgICAgLy8gSGlkZSBzdGF0dXNcclxuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5ISURFKTtcclxuICAgICAgICAvLyBBbmQgZmlyZSB0aGUgcmVzdWx0IVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNjb3JlLCBzdWNjZXNzLCBoaWRlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgLy9hZnRlcihtb2R1bGUpO1xyXG5cclxuICAgICAgICAvKmlmIChzdWNjZXNzICYmIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmlkKCkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICBpZiAoIVNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uRXZhbCBmYWlsdXJlXCIpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiR3JhY2VmdWxFeGl0XCIpIHtcclxuICAgICAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImNvZGVcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImVycm9yXCJdID0gZXJyb3I7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImxpbmVfb2Zmc2V0XCJdID0gbGluZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBhZnRlcihlcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2luZGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBORVdfTElORV9SRUdFWCA9IC9cXHJcXG58XFxyfFxcbi87XHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV1JBUF9JTlNUUlVDVE9SX0NPREUgPSBmdW5jdGlvbiAoc3R1ZGVudENvZGUsIGluc3RydWN0b3JDb2RlLCBxdWljaywgaXNTYWZlKSB7XHJcbiAgICBsZXQgc2FmZUNvZGUgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50Q29kZSk7XHJcbiAgICBsZXQgaW5kZW50ZWRDb2RlID0gaW5kZW50KGluZGVudChpc1NhZmUgPyBzdHVkZW50Q29kZSA6IFwicGFzc1wiKSk7XHJcbiAgICBsZXQgdGlmYUFuYWx5c2lzID0gXCJcIjtcclxuICAgIGlmICghcXVpY2spIHtcclxuICAgICAgICB0aWZhQW5hbHlzaXMgPSBcImZyb20gcGVkYWwudGlmYSBpbXBvcnQgdGlmYV9hbmFseXNpc1xcbnRpZmFfYW5hbHlzaXMoRmFsc2UpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSwgXCJhbnN3ZXIucHlcIilcclxuJHt0aWZhQW5hbHlzaXN9XHJcbmZyb20gcGVkYWwuc2FuZGJveC5zYW5kYm94IGltcG9ydCBTYW5kYm94XHJcbmZyb20gcGVkYWwuc2FuZGJveCBpbXBvcnQgY29tcGF0aWJpbGl0eVxyXG5mcm9tIHV0aWxpdHkgaW1wb3J0ICpcclxuc3R1ZGVudCA9IE1BSU5fUkVQT1JUWydzYW5kYm94J11bJ3J1biddID0gU2FuZGJveCgpXHJcbiNzdHVkZW50LnJ1bihNQUlOX1JFUE9SVFsnc291cmNlJ11bJ2NvZGUnXSwgTUFJTl9SRVBPUlRbJ3NvdXJjZSddWydmaWxlbmFtZSddLCByZXBvcnRfZXhjZXB0aW9ucz1GYWxzZSlcclxuI2RlYnVnKHN0dWRlbnQpXHJcbnN0dWRlbnQucmVwb3J0X2V4Y2VwdGlvbnNfbW9kZSA9IFRydWVcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudChyYWlzZV9leGNlcHRpb25zPUZhbHNlKVxyXG4jbG9nKHN0dWRlbnQuZGF0YSlcclxuI3N0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuI2Vycm9yLCBwb3NpdGlvbiA9IGdldF9zdHVkZW50X2Vycm9yKClcclxuI2NvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxucnVuX3N0dWRlbnQgPSBjb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50XHJcbnJlc2V0X291dHB1dCA9IGNvbXBhdGliaWxpdHkucmVzZXRfb3V0cHV0XHJcbnF1ZXVlX2lucHV0ID0gY29tcGF0aWJpbGl0eS5xdWV1ZV9pbnB1dFxyXG5nZXRfb3V0cHV0ID0gY29tcGF0aWJpbGl0eS5nZXRfb3V0cHV0XHJcbmdldF9wbG90cyA9IGNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkudHJhY2VfbGluZXMgPSB0cmFjZV9saW5lc1xyXG5mcm9tIHBlZGFsIGltcG9ydCBxdWVzdGlvbnNcclxucXVlc3Rpb25zLnNob3dfcXVlc3Rpb24gPSBzZXRfaW5zdHJ1Y3Rpb25zXHJcbiMgVE9ETzogUmVtb3ZlIHRoZSBuZWVkIGZvciB0aGlzIGhhY2shXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIHN0dWRlbnQuY2FsbChmdW5jLl9fbmFtZV9fLCAqYXJncylcclxuICAgcmV0dXJuIGdldF9vdXRwdXQoKVxyXG5jb21wYXRpYmlsaXR5LmNhcHR1cmVfb3V0cHV0ID0gY2FwdHVyZV9vdXRwdXRcclxuXHJcbmZyb20gcGVkYWwuY2FpdC5jYWl0X2FwaSBpbXBvcnQgcGFyc2VfcHJvZ3JhbVxyXG4ke2luc3RydWN0b3JDb2RlfVxyXG5mcm9tIHBlZGFsLnJlc29sdmVycyBpbXBvcnQgc2ltcGxlXHJcblNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREUgPSBzaW1wbGUucmVzb2x2ZSgpXHJcbmA7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT25SdW5Db25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIl9pbnN0cnVjdG9yLm9uX3J1blwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcblxyXG4gICAgICAgIGxldCBkaXNhYmxlVGlmYSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVUaWZhKCk7XHJcblxyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IHN0dWRlbnRDb2RlU2FmZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB0aGlzLmR1bW15T3V0U2FuZGJveCgpO1xyXG4gICAgICAgIGxldCBpbnN0cnVjdG9yQ29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICBsZXQgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGlzU2FmZSA9ICFyZXBvcnRbXCJwYXJzZXJcIl0uZW1wdHkgJiYgcmVwb3J0W1widmVyaWZpZXJcIl0uc3VjY2VzcztcclxuICAgICAgICBpbnN0cnVjdG9yQ29kZSA9IFdSQVBfSU5TVFJVQ1RPUl9DT0RFKHN0dWRlbnRDb2RlU2FmZSwgaW5zdHJ1Y3RvckNvZGUsIGRpc2FibGVUaWZhLCBpc1NhZmUpO1xyXG4gICAgICAgIGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoIC0gbGluZU9mZnNldCAtIDQ7XHJcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHtcclxuICAgICAgICAgICAgXCJjb21wbGltZW50c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBpbnN0cnVjdG9yQ29kZSxcclxuICAgICAgICAgICAgXCJsaW5lT2Zmc2V0XCI6IGxpbmVPZmZzZXRcclxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29kZSA9IGluc3RydWN0b3JDb2RlO1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgLy8gVE9ETyBMb2dnaW5nISEhIVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25SdW4gc3VjY2Vzc1wiKTtcclxuICAgICAgICAvLyBUT0RPOiBBY3R1YWxseSBwYXJzZSByZXN1bHRzXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHMgPSBTay5nbG9iYWxzO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IG1vZHVsZS4kZC5vbl9ydW4uJGQ7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKHJlc3VsdHMpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3VjY2VzcyA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TVUNDRVNTKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Y2Nlc3MgfHwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpKTtcclxuICAgICAgICAvLyBDYW5ub3QgZXhjZWVkIDEgcG9pbnQsIGNhbm5vdCBnbyBiZWxvdyAwIHBvaW50c1xyXG4gICAgICAgIGxldCBzY29yZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TQ09SRSk7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KG9sZFNjb3JlLCBzY29yZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoc2NvcmUpO1xyXG4gICAgICAgIC8vIEhpZGUgc3RhdHVzXHJcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuSElERSk7XHJcbiAgICAgICAgLy8gQW5kIGZpcmUgdGhlIHJlc3VsdCFcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvbihzY29yZSwgc3VjY2VzcywgaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIC8vYWZ0ZXIobW9kdWxlKTtcclxuXHJcbiAgICAgICAgLyppZiAoc3VjY2VzcyAmJiB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcyh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pZCgpKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKCFTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPblJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiR3JhY2VmdWxFeGl0XCIpIHtcclxuICAgICAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImNvZGVcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImVycm9yXCJdID0gZXJyb3I7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImxpbmVfb2Zmc2V0XCJdID0gbGluZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBhZnRlcihlcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09uUnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vb25fcnVuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25TYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgT25SdW5Db25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJvbl9ydW4ucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKFwiUnVubmluZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVGaWxlKFwiYW5zd2VyLnB5XCIsIHRoaXMuY29kZSwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIGVuZ2luZS5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFyc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1widmVyaWZpZXJcIl0gPSB7XHJcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBCb29sZWFuKHRoaXMuY29kZS50cmltKCkpLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogdGhpcy5jb2RlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiUnVuLlByb2dyYW1cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmZpbmlzaFR1cnRsZXMoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscyhTay5nbG9iYWxzKTtcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUV2YWx1YXRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5iZWdpbkV2YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwKG1vZHVsZS4kZCwgbW9kdWxlLiRkLC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwidHJhY2VcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBcIm91dHB1dFwiOiB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIGZhaWx1cmVcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKHJlcG9ydC5wYXJzZXIuc3VjY2VzcyAmJiByZXBvcnQudmVyaWZpZXIuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlLkVycm9yXCIsIFwiXCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiUHJvZ3JhbUVycm9yT3V0cHV0XCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpeCB0byBiZSB0aGUgY3VycmVudCBzYW1wbGUgc3VibWlzc2lvblxyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlci5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IFwicHJpbnQoJ05vdCByZWFkeSB5ZXQhJylcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbmZpZ3VyYXRpb24sIEVNUFRZX01PRFVMRX0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50Q29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIExpbWl0IGV4ZWN1dGlvbiB0byA1IHNlY29uZHNcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLm1haW4ubW9kZWwuc2V0dGluZ3M7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0RnVuY3Rpb24gPSAoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGltZW91dCgpID8gSW5maW5pdHkgOiAxMDAwMDtcclxuICAgICAgICBTay5leGVjTGltaXQgPSBTay5leGVjTGltaXRGdW5jdGlvbigpO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IHRoaXMuc3RlcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIFVubXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbiB0byBjYWxsIGFmdGVyIGVhY2ggc3RlcFxyXG4gICAgICAgIC8vIGFmdGVyU2luZ2xlRXhlY3V0aW9uXHJcbiAgICAgICAgLy8gUHJveHkgcmVxdWVzdHNcclxuICAgICAgICBTay5yZXF1ZXN0c0dldCA9IChmaWxlbmFtZSkgPT4gdGhpcy5vcGVuVVJMKGZpbGVuYW1lLCBcInVybFwiKTtcclxuXHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gRU1QVFlfTU9EVUxFO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb3JiaWRkZW4oZmlsZW5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgYWNjZXNzaWJsZTogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgZm91bmQ6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmlucHV0KHByb21wdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3V0aWxpdHkvXCIpIHx8XHJcbiAgICAgICAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3BlZGFsL1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwiLi9faW5zdHJ1Y3Rvci9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcIlN0ZXBzXCIgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgY29kZSwgbWVhbnQgdG8gYmUgdXNlZCBhcyBhIGNhbGxiYWNrIHRvIHRoZSBTa3VscHRcclxuICAgICAqIGVudmlyb25tZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBIYXNoIHRoYXQgbWFwcyB0aGUgbmFtZXMgb2YgdmFyaWFibGVzIChTdHJpbmdzKSB0byB0aGVpciBTa3VscHQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGluZU51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGxpbmUgbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbk51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGNvbHVtbiBudW1iZXIgaW4gdGhlIHNvdXJjZSBjb2RlIHRoYXQgaXMgYmVpbmcgZXhlY3V0ZWQuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpbmsgb2YgaXQgYXMgdGhlIFwiWFwiIHBvc2l0aW9uIHRvIHRoZSBsaW5lTnVtYmVyJ3MgXCJZXCIgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHl0aG9uIGZpbGUgYmVpbmcgZXhlY3V0ZWQgKGUuZy4sIFwiX19tYWluX18ucHlcIikuXHJcbiAgICAgKi9cclxuICAgIHN0ZXAodmFyaWFibGVzLCBsb2NhbHMsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXA7XHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxzID0gdGhpcy5tYWluLmNvbXBvbmVudHMudHJhY2UucGFyc2VHbG9iYWxzKHZhcmlhYmxlcyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRyYWNlIGxvY2FsIHZhcmlhYmxlcyBwcm9wZXJseVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIC8vbGV0IGxvY2FscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyhsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL09iamVjdC5hc3NpZ24oZ2xvYmFscywgbG9jYWxzKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCI6IGN1cnJlbnRTdGVwLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBmaWxlbmFtZSxcclxuICAgICAgICAgICAgICAgIC8vJ2Jsb2NrJzogaGlnaGxpZ2h0TWFwW2xpbmVOdW1iZXItMV0sXHJcbiAgICAgICAgICAgICAgICBcImxpbmVcIjogbGluZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IGNvbHVtbk51bWJlcixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiBnbG9iYWxzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICBcIm1vZHVsZXNcIjogZ2xvYmFscy5tb2R1bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCA9IGN1cnJlbnRTdGVwICsgMTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUgPSBsaW5lTnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGUgU2t1bHB0IGV4ZWN1dGlvbiB0byB0ZXJtaW5hdGUgdGhlIGV4ZWN1dGlvbkJ1ZmZlclxyXG4gICAgICogYW5kIGhhbmQgaXQgb2ZmIHRvIHRoZSBleGVjdXRpb24gdHJhY2UgaW4gdGhlIG1vZGVsLlxyXG4gICAgICovXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50TGluZSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQubGFzdExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRMaW5lcyhhc3QpIHtcclxuICAgICAgICBsZXQgdmlzaXRlZExpbmVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGxldCB2aXNpdEJvZHkgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5saW5lbm8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZExpbmVzLmFkZChub2RlLmxpbmVubyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5ib2R5LmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLm9yZWxzZSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vcmVsc2UuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuZmluYWxib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZpbmFsYm9keS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmlzaXRCb2R5KGFzdCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odmlzaXRlZExpbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZSB0aGF0IHRoZSBwYXJzZSBpbmZvcm1hdGlvbiBpcyB1cC10by1kYXRlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVBhcnNlKCkge1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgLy8gSG9sZCBhbGwgdGhlIGFjdHVhbGx5IGRpc2NvdmVyZWQgbGluZXMgZnJvbSB0aGUgcGFyc2VcclxuICAgICAgICBsZXQgbGluZXMgPSBbXTtcclxuICAgICAgICAvLyBBdHRlbXB0IGEgcGFyc2VcclxuICAgICAgICBsZXQgYXN0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJzZSA9IFNrLnBhcnNlKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIGFzdCA9IFNrLmFzdEZyb21QYXJzZShwYXJzZS5jc3QsIHRoaXMuZmlsZW5hbWUsIHBhcnNlLmZsYWdzKTtcclxuICAgICAgICAgICAgbGluZXMgPSB0aGlzLmdldExpbmVzKGFzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gUmVwb3J0IHRoZSBlcnJvclxyXG4gICAgICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJlbXB0eVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlbmFtZSwgdGhpcy5jb2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdWNjZXNzZnVsIHBhcnNlXHJcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJhc3RcIjogYXN0LFxyXG4gICAgICAgICAgICBcImVtcHR5XCI6IGFzdC5ib2R5Lmxlbmd0aCA9PT0gMCxcclxuICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Vycm9ycygpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmICghcmVwb3J0W1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRSdW5FcnJvcihyZXBvcnQuc3R1ZGVudC5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGxldCBGRUVEQkFDS19IVE1MID0gYFxuXG48c3BhbiBjbGFzcz0nYmxvY2tweS1mbG9hdGluZy1mZWVkYmFjayB0ZXh0LW11dGVkLWxlc3MgcHVsbC1yaWdodCBwb3NpdGlvbi1zdGlja3kgc3RpY2t5LXRvcCdcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1sYWJlbD1cIk5ldyBGZWVkYmFjayBBbGVydFwiPlxuICAgIE5ldyBmZWVkYmFjayAmdWFycjtcbjwvc3Bhbj5cblxuPGRpdiBjbGFzcz0nYmxvY2tweS1mZWVkYmFjayBjb2wtbWQtNiBibG9ja3B5LXBhbmVsJ1xuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cblxuICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0J1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2Vjb25kUm93LnN3aXRjaExhYmVsXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPCEtLSBBY3R1YWwgRmVlZGJhY2sgUmVnaW9uIC0tPiAgICBcbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPkZlZWRiYWNrOiA8L3N0cm9uZz5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2JhZGdlIGJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnkgZmVlZGJhY2stYmFkZ2UnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHVpLmZlZWRiYWNrLmJhZGdlLFxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5mZWVkYmFjay5jYXRlZ29yeVwiPkZlZWRiYWNrIEtpbmQ8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cImJsb2NrcHktZmVlZGJhY2stbGFiZWxcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidGV4dDogZXhlY3V0aW9uLmZlZWRiYWNrLmxhYmVsXCI+PC9zdHJvbmc+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLW1lc3NhZ2VcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiaHRtbDogZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2VcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiAgICAgICAgICAgIFxuYDtcblxuZXhwb3J0IGNsYXNzIEJsb2NrUHlGZWVkYmFjayB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgdGhhdCBtYW5hZ2VzIHRoZSBmZWVkYmFjayBhcmVhLCB3aGVyZSB1c2VycyBhcmUgdG9sZCB0aGUgc3RhdGUgb2YgdGhlaXJcbiAgICAgKiBwcm9ncmFtJ3MgZXhlY3V0aW9uIGFuZCBnaXZlbiBndWlkYW5jZS4gQWxzbyBtYW5hZ2VzIHRoZSBjcmVhdGlvbiBvZiB0aGUgVHJhY2UgVGFibGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAdGhpcyB7QmxvY2tQeUZlZWRiYWNrfVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcblxuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnlcIik7XG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbGFiZWxcIik7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCIpO1xuXG4gICAgICAgIC8vIFRPRE86IElmIHRoZXkgY2hhbmdlIHRoZSBzdHVkZW50IGV4dHJhIGZpbGVzLCBhbHNvIHVwZGF0ZSB0aGUgZGlydHkgZmxhZ1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24odHJ1ZSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgc2NyZWVuICh0YWtlcyAxIHNlY29uZCkgdG8gbWFrZSB0aGUgRmVlZGJhY2sgYXJlYSB2aXNpYmxlLlxuICAgICAqL1xuICAgIHNjcm9sbEludG9WaWV3KCkge1xuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBmZWVkYmFjayBhcmVhIGlzIGN1cnJlbnRseSB2aXNpYmxlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNGZWVkYmFja1Zpc2libGUoKSB7XG4gICAgICAgIGxldCB2aXNpYmlsaXR5QnVmZmVyID0gMTAwO1xuICAgICAgICBsZXQgdG9wT2ZFbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wO1xuICAgICAgICAvL2xldCBib3R0b21PZkVsZW1lbnQgPSB0aGlzLnRhZy5vZmZzZXQoKS50b3AgKyB0aGlzLnRhZy5vdXRlckhlaWdodCgpO1xuICAgICAgICBsZXQgYm90dG9tT2ZFbGVtZW50ID0gdG9wT2ZFbGVtZW50ICsgdmlzaWJpbGl0eUJ1ZmZlcjtcbiAgICAgICAgbGV0IGJvdHRvbU9mU2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICBsZXQgdG9wT2ZTY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIC8vYm90dG9tX29mX2VsZW1lbnQgLT0gNDA7IC8vIFVzZXIgZnJpZW5kbHkgcGFkZGluZ1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHRvcE9mRWxlbWVudCA8IGJvdHRvbU9mU2NyZWVuKSAmJlxuICAgICAgICAgICAgKHRvcE9mU2NyZWVuIDwgYm90dG9tT2ZFbGVtZW50KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbnkgb3V0cHV0IGN1cnJlbnRseSBpbiB0aGUgZmVlZGJhY2sgYXJlYS4gQWxzbyByZXNldHMgdGhlIHByaW50ZXIgYW5kXG4gICAgICogYW55IGhpZ2hsaWdodGVkIGxpbmVzIGluIHRoZSBlZGl0b3IuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKFwiKlJlYWR5KlwiKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobnVsbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5oaWRkZW4oZmFsc2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgZmluZEZpcnN0RXJyb3JMaW5lKGZlZWRiYWNrRGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpID0gZmVlZGJhY2tEYXRhLmxlbmd0aC0xOyBpID49IDA7IGktPSAxKSB7XG4gICAgICAgICAgICBpZiAoXCJwb3NpdGlvblwiIGluIGZlZWRiYWNrRGF0YVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZWVkYmFja0RhdGFbaV0ucG9zaXRpb24ubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgdXBkYXRlUmVndWxhckZlZWRiYWNrKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgbW9kZWwgd2l0aCB0aGVzZSBuZXcgZXhlY3V0aW9uIHJlc3VsdHNcbiAgICAgKiBAcGFyYW0gZXhlY3V0aW9uUmVzdWx0c1xuICAgICAqL1xuICAgIHVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpIHtcbiAgICAgICAgLy8gUGFyc2Ugb3V0IGRhdGFcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTUVTU0FHRSk7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5DQVRFR09SWSk7XG4gICAgICAgIGxldCBsYWJlbCA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5MQUJFTCk7XG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkhJREUpO1xuICAgICAgICBsZXQgZGF0YSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5EQVRBKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBiYXNlZCBvbiBhc3NpZ25tZW50cycgc2V0dGluZ3NcbiAgICAgICAgbGV0IGhpZGVTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpO1xuICAgICAgICBpZiAoaGlkZVNjb3JlICYmIGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcIm5vIGVycm9yc1wiO1xuICAgICAgICAgICAgbGFiZWwgPSBcIk5vIGVycm9yc1wiO1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTm8gZXJyb3JzIHJlcG9ydGVkLlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtYXAgdG8gZXhwZWN0ZWQgQmxvY2tQeSBsYWJlbHNcbiAgICAgICAgaWYgKGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IFwiaW5zdHJ1Y3RvclwiICYmIGxhYmVsLnRvTG93ZXJDYXNlKCkgPT09IFwiZXhwbGFpblwiKSB7XG4gICAgICAgICAgICBsYWJlbCA9IFwiSW5zdHJ1Y3RvciBGZWVkYmFja1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG9uJ3QgcHJlc2VudCBhIGxhY2sgb2YgZXJyb3IgYXMgYmVpbmcgaW5jb3JyZWN0XG4gICAgICAgIGlmIChjYXRlZ29yeSA9PT0gXCJJbnN0cnVjdG9yXCIgJiYgbGFiZWwgPT09IFwiTm8gZXJyb3JzXCIpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJubyBlcnJvcnNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBtb2RlbCBhY2NvcmRpbmdseVxuICAgICAgICBtZXNzYWdlID0gdGhpcy5tYWluLnV0aWxpdGllcy5tYXJrZG93bihtZXNzYWdlKS5yZXBsYWNlKC88cHJlPlxcbi9nLCBcIjxwcmU+XFxuXFxuXCIpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKGxhYmVsKTtcbiAgICAgICAgLy8gVE9ETzogSW5zdGVhZCBvZiB0cmFja2luZyBzdHVkZW50IGZpbGUsIGxldCdzIHRyYWNrIHRoZSBpbnN0cnVjdG9yIGZpbGVcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiSW50ZXJ2ZW50aW9uXCIsIGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgXCJhbnN3ZXIucHlcIik7XG5cbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFueSBwcmV2aW91c2x5IGhpZ2hsaWdodGVkIGxpbmVzXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcblxuICAgICAgICAvLyBGaW5kIHRoZSBmaXJzdCBlcnJvciBvbiBhIGxpbmUgYW5kIHJlcG9ydCB0aGF0XG4gICAgICAgIGxldCBsaW5lID0gQmxvY2tQeUZlZWRiYWNrLmZpbmRGaXJzdEVycm9yTGluZShkYXRhKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmIChsaW5lICE9PSBudWxsICYmIGxpbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucHVzaChsaW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEludmVydCB0aGUgc2V0IG9mIHRyYWNlZCBsaW5lc1xuICAgICAgICBsZXQgc3R1ZGVudFJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5zdHVkZW50O1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmIChzdHVkZW50UmVwb3J0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCB1bmNvdmVyZWRMaW5lcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnBhcnNlci5saW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN0dWRlbnRSZXBvcnQubGluZXMuaW5kZXhPZihsaW5lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5jb3ZlcmVkTGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZCh1bmNvdmVyZWRMaW5lcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVzZW50IGFueSBhY2N1bXVsYXRlZCBmZWVkYmFja1xuICAgICAqL1xuICAgIHByZXNlbnRGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cyk7XG5cbiAgICAgICAgLy8gVE9ETzogTG9nZ2luZ1xuICAgICAgICAvL3RoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcImZlZWRiYWNrXCIsIGNhdGVnb3J5K1wifFwiK2xhYmVsLCBtZXNzYWdlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeUZlZWRiYWNrVXBkYXRlKCk7XG4gICAgfTtcblxuICAgIG5vdGlmeUZlZWRiYWNrVXBkYXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzRmVlZGJhY2tWaXNpYmxlKCkpO1xuICAgICAgICBpZiAoIXRoaXMuaXNGZWVkYmFja1Zpc2libGUoKSkge1xuICAgICAgICAgICAgdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZsb2F0aW5nLWZlZWRiYWNrXCIpLnNob3coKS5mYWRlT3V0KDcwMDApO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByZXNlbnRSdW5FcnJvcihlcnJvcikge1xuICAgICAgICBsZXQgbWVzc2FnZSwgbGFiZWwsIGNhdGVnb3J5LCBsaW5lbm87XG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIlN5bnRheEVycm9yXCIpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJzeW50YXhcIjtcbiAgICAgICAgICAgIGxldCBsaW5lbm8gPSBTay5mZmkucmVtYXBUb0pzKGVycm9yLmxpbmVubyk7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBTay5mZmkucmVtYXBUb0pzKGVycm9yLm1zZyk7XG4gICAgICAgICAgICBsZXQgc291cmNlLCBtZXNzYWdlID0gXCJcIjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gZXJyb3IuYXJncy52WzNdWzJdO1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGA8cHJlPiR7c291cmNlfTwvcHJlPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGFiZWwgPT09IFwiYmFkIGlucHV0XCIpIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQmFkIElucHV0XCI7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBCYWQgaW5wdXQgb24gbGluZSAke2xpbmVub30uPGJyPiR7c291cmNlfWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxhYmVsID09PSBcIkVPRiBpbiBtdWx0aS1saW5lIHN0YXRlbWVudFwiKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkVPRiBpbiBtdWx0aS1saW5lIHN0YXRlbWVudFwiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVW5leHBlY3RlZCBlbmQtb2YtZmlsZSBpbiBtdWx0aS1saW5lIHN0YXRlbWVudCBvbiBsaW5lICR7bGluZW5vfS48YnI+JHtzb3VyY2V9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIlN5bnRheCBFcnJvclwiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBsYWJlbCArIFwiPGJyPlwiICsgc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFiZWwgPSBlcnJvci50cCRuYW1lO1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcInJ1bnRpbWVcIjtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmNvbnZlcnRTa3VscHRFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChsYWJlbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAobGluZW5vICE9PSB1bmRlZmluZWQgJiYgbGluZW5vICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5wdXNoKGxpbmVubyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb252ZXJ0U2t1bHB0RXJyb3IoZXJyb3IsIGZpbGVuYW1lRXhlY3V0ZWQpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBlcnJvci50cCRuYW1lO1xuICAgICAgICBsZXQgYXJncyA9IFNrLmZmaS5yZW1hcFRvSnMoZXJyb3IuYXJncyk7XG4gICAgICAgIGxldCB0b3AgPSBgJHtuYW1lfTogJHthcmdzWzBdfVxcbjxicj5cXG48YnI+YDtcbiAgICAgICAgbGV0IHRyYWNlYmFjayA9IFwiXCI7XG4gICAgICAgIGlmIChlcnJvci50cmFjZWJhY2sgJiYgZXJyb3IudHJhY2ViYWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgdHJhY2ViYWNrID0gXCJUcmFjZWJhY2s6PGJyPlxcblwiICsgZXJyb3IudHJhY2ViYWNrLm1hcChmcmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpbmVubyA9IGZyYW1lLmxpbmVubztcbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUuZmlsZW5hbWUuc2xpY2UoMCwgLTMpID09PSBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVubyAtPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuaW5zdHJ1Y3Rvci5saW5lT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGBGaWxlIDxjb2RlIGNsYXNzPVwiZmlsZW5hbWVcIj5cIiR7ZnJhbWUuZmlsZW5hbWV9XCI8L2NvZGU+LCBgO1xuICAgICAgICAgICAgICAgIGxldCBsaW5lID0gYG9uIGxpbmUgPGNvZGUgY2xhc3M9XCJsaW5lbm9cIj4ke2xpbmVub308L2NvZGU+LCBgO1xuICAgICAgICAgICAgICAgIGxldCBzY29wZSA9IChmcmFtZS5zY29wZSAhPT0gXCI8bW9kdWxlPlwiICYmXG4gICAgICAgICAgICAgICAgZnJhbWUuc2NvcGUgIT09IHVuZGVmaW5lZCkgPyBgaW4gc2NvcGUgJHtmcmFtZS5zY29wZX1gIDogXCJcIjtcbiAgICAgICAgICAgICAgICBsZXQgc291cmNlID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUuc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gYFxcbjxwcmU+PGNvZGU+JHtmcmFtZS5zb3VyY2V9PC9jb2RlPjwvcHJlPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmaWxlICsgbGluZSArIHNjb3BlICsgc291cmNlO1xuICAgICAgICAgICAgfSkuam9pbihcIlxcbjxicj5cIik7XG4gICAgICAgICAgICB0cmFjZWJhY2sgPSBgJHt0cmFjZWJhY2t9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9wK1wiXFxuXCIrdHJhY2ViYWNrO1xuICAgIH1cblxuICAgIHByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoXCJpbnRlcm5hbFwiKTtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5sYWJlbChcIkludGVybmFsIEVycm9yXCIpO1xuXG4gICAgICAgIGxldCBtZXNzYWdlID0gXCJFcnJvciBpbiBpbnN0cnVjdG9yIGZlZWRiYWNrLiBQbGVhc2Ugc2hvdyB0aGUgZm9sbG93aW5nIHRvIGFuIGluc3RydWN0b3I6PGJyPlxcblwiO1xuICAgICAgICBtZXNzYWdlICs9IHRoaXMuY29udmVydFNrdWxwdEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKTtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICAgIHRoaXMubm90aWZ5RmVlZGJhY2tVcGRhdGUoKTtcbiAgICB9XG59IiwiY29uc3QgbWFrZVRhYiA9IGZ1bmN0aW9uKGZpbGVuYW1lLCBmcmllbmRseU5hbWUsIGhpZGVJZkVtcHR5KSB7XHJcbiAgICBpZiAoZnJpZW5kbHlOYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmcmllbmRseU5hbWUgPSBmaWxlbmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBgXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LmZpbGVuYW1lKCkgPT09ICcke2ZpbGVuYW1lfSd9LFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgJyR7ZmlsZW5hbWV9JyksXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAhJHtoaWRlSWZFbXB0eX0gfHwgdWkuZmlsZXMuaGFzQ29udGVudHMoJyR7ZmlsZW5hbWV9JylcIj5cclxuICAgICAgICAgICAgJHtmcmllbmRseU5hbWV9PC9hPlxyXG4gICAgPC9saT5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBGSUxFU19IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1maWxlc1wiXHJcbiAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5maWxlcy52aXNpYmxlXCI+XHJcbjx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcblxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8c3Ryb25nPlZpZXc6IDwvc3Ryb25nPlxyXG4gICAgPC9saT5cclxuXHJcbiAgICAke21ha2VUYWIoXCJhbnN3ZXIucHlcIil9XHJcbiAgICAke21ha2VUYWIoXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiSW5zdHJ1Y3Rpb25zXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiLCBcIlNldHRpbmdzXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCJTdGFydGluZyBDb2RlXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX3J1bi5weVwiLCBcIk9uIFJ1blwiKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9jaGFuZ2UucHlcIiwgXCJPbiBDaGFuZ2VcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhb25fZXZhbC5weVwiLCBcIk9uIEV2YWxcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCI/bW9ja191cmxzLmJsb2NrcHlcIiwgXCJVUkwgRGF0YVwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiLCBcIlNhbXBsZSBTdWJtaXNzaW9uc1wiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiF0YWdzLmJsb2NrcHlcIiwgXCJUYWdzXCIsIHRydWUpfVxyXG4gICAgXHJcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMgLS0+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogJHJvb3QuZGlzcGxheS5maWxlbmFtZSgpID09PSBmaWxlbmFtZSgpfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAkcm9vdC5kaXNwbGF5LmZpbGVuYW1lLmJpbmQoJGRhdGEsIGZpbGVuYW1lKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZmlsZW5hbWVcIj5cclxuICAgICAgICAgICAgPC9hPiAgICAgICAgXHJcbiAgICAgICAgPC9saT5cclxuICAgIDwhLS0gL2tvIC0tPlxyXG4gIFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPkFkZCBOZXc8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/bW9ja191cmxzLmJsb2NrcHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnP21vY2tfdXJscy5ibG9ja3B5JylcIj5VUkwgRGF0YTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3RhZ3MuYmxvY2tweScpXCI+VGFnczwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3NhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5JylcIj5TYW1wbGUgU3VibWlzc2lvbnM8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnIW9uX2NoYW5nZS5weScpXCI+T24gQ2hhbmdlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IGFzc2lnbm1lbnQub25FdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICchb25fZXZhbC5weScpXCI+T24gRXZhbDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TdGFydGluZyBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICdpbnN0cnVjdG9yJylcIj5JbnN0cnVjdG9yIEZpbGU8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U3R1ZGVudCBGaWxlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICBcclxuPC91bD5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBORVdfSU5TVFJVQ1RPUl9GSUxFX0RJQUxPR19IVE1MID0gYFxyXG48Zm9ybT5cclxuPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICA8IS0tIEZpbGVuYW1lIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCI+RmlsZW5hbWU6PC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxlbmFtZVwiXHJcbiAgICAgICAgICAgIGlkPVwiYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCI+ICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIEZpbGV0eXBlIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGV0eXBlXCI+RmlsZXR5cGU6IDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxldHlwZVwiXHJcbiAgICAgICAgICAgIGlkPVwiYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGV0eXBlXCI+PC9zcGFuPiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSBJbmFjY2Vzc2libGUgdG8gc3R1ZGVudD8gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZW5hbWVcIj5JbmFjY2Vzc2libGUgdG8gc3R1ZGVudDogPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1oaWRkZW5cIlxyXG4gICAgICAgICAgICBpZD1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1oaWRkZW5cIiBjaGVja2VkPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Zvcm0+XHJcbmA7XHJcblxyXG4vKipcclxuICogRmlsZW5hbWVzIGxpdmUgaW4gb25lIG9mIGZpdmUgcG9zc2libGUgbmFtZXNwYWNlczpcclxuICogIEluc3RydWN0b3IgKCEpOiBJbnZpc2libGUgdG8gdGhlIHN0dWRlbnQgdW5kZXIgYWxsIGNpcmN1bXN0YW5jZXNcclxuICogIFN0YXJ0IFNwYWNlICheKTogVXNlZCB0byByZXNldCB0aGUgc3R1ZGVudCBuYW1lc3BhY2VcclxuICogIFN0dWRlbnQgU3BhY2UgKCk6IFZpc2libGUgdG8gdGhlIHN0dWRlbnQgd2hlbiBkaXNwbGF5LmhpZGVGaWxlcyBpcyBub3QgdHJ1ZSwgYWJsZSB0byBiZSBlZGl0ZWRcclxuICogIEhpZGRlbiBTcGFjZSAoPyk6IE5vdCBkaXJlY3RseSB2aXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgYWNjZXNzaWJsZSBwcm9ncmFtbWF0aWNhbGx5XHJcbiAqICBSZWFkLW9ubHkgU3BhY2UgKCYpOiBBbiBpbnN0cnVjdG9yIGZpbGUgdHlwZSB2aXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgaXMgdW5lZGl0YWJsZSBieSB0aGVtXHJcbiAqICBTZWNyZXQgU3BhY2UgKCQpOiBOb3QgdmlzaWJsZSBmcm9tIHRoZSBtZW51IGF0IGFsbCwgc29tZSBvdGhlciBtZWNoYW5pc20gY29udHJvbHMgaXRcclxuICogIEdlbmVyYXRlZCBTcGFjZSAoKik6IFZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBkZXN0cm95ZWQgYWZ0ZXIgRW5naW5lLkNsZWFyLiBDYW4gc2hhZG93IGFuIGFjdHVhbCBmaWxlLlxyXG4gKiAgQ29uY2F0ZW5hdGVkIFNwYWNlICgjKTogVXNlZCB3aGVuIGJ1bmRsaW5nIGEgc3BhY2UgZm9yIHRoZSBzZXJ2ZXIuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGxldCBTVEFSVElOR19GSUxFUyA9IFtcclxuICAgIC8vIFN1Ym1pc3Npb25cclxuICAgIFwiYW5zd2VyLnB5XCIsXHJcbiAgICAvLyBJbnN0cnVjdG9yIGZpbGVzXHJcbiAgICBcIiFpbnN0cnVjdGlvbnMubWRcIixcclxuICAgIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgXCJec3RhcnRpbmdfY29kZS5weVwiLFxyXG4gICAgXCIhb25fcnVuLnB5XCIsXHJcbiAgICBcIiRzZXR0aW5ncy5ibG9ja3B5XCIsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQkFTSUNfTkVXX0ZJTEVTID0gW1xyXG4gICAgXCIhb25fY2hhbmdlLnB5XCIsXHJcbiAgICBcIiFvbl9ldmFsLnB5XCIsXHJcbiAgICBcIj9tb2NrX3VybHMuYmxvY2tweVwiLFxyXG4gICAgXCIhdGFncy5ibG9ja3B5XCIsXHJcbiAgICBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXHJcbl07XHJcblxyXG5jb25zdCBERUxFVEFCTEVfU0lNUExFX0ZJTEVTID0gW1wiIW9uX2NoYW5nZS5weVwiLCBcIiFvbl9ldmFsLnB5XCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOREVMRVRBQkxFX0ZJTEVTID0gW1wiYW5zd2VyLnB5XCIsIFwiIWluc3RydWN0aW9ucy5tZFwiLCBcIiFhc3NpZ25tZW50X3NldHRpbmdzLnB5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiIW9uX3J1bi5weVwiLCBcIiRzZXR0aW5ncy5ibG9ja3B5XCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOUkVOQU1BQkxFX0ZJTEVTID0gW1wiYW5zd2VyLnB5XCIsIFwiIWluc3RydWN0aW9ucy5tZFwiLCBcIiFhc3NpZ25tZW50X3NldHRpbmdzLnB5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiIW9uX3J1bi5weVwiLCBcIiRzZXR0aW5ncy5ibG9ja3B5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiFvbl9jaGFuZ2UucHlcIiwgXCIhb25fZXZhbC5weVwiLCBcIj9tb2NrX3VybHMuYmxvY2tweVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhdGFncy5ibG9ja3B5XCIsIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCJdO1xyXG5cclxuY2xhc3MgQmxvY2tQeUZpbGUge1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gZmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzIHx8IFwiXCI7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1vZGVsRmlsZShmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgIHJldHVybiB7XCJmaWxlbmFtZVwiOiBrby5vYnNlcnZhYmxlKGZpbGVuYW1lKSwgY29udGVudHM6IGtvLm9ic2VydmFibGUoY29udGVudHMgfHwgXCJcIil9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbmNhdGVuYXRlZEZpbGUoY29uY2F0ZW5hdGVkRmlsZSwgbW9kZWxGaWxlTGlzdCkge1xyXG4gICAgaWYgKGNvbmNhdGVuYXRlZEZpbGUpIHtcclxuICAgICAgICBsZXQgZmlsZXMgPSBKU09OLnBhcnNlKGNvbmNhdGVuYXRlZEZpbGUpO1xyXG4gICAgICAgIGxldCBtb2RlbEZpbGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZmlsZW5hbWUgaW4gZmlsZXMpIHtcclxuICAgICAgICAgICAgaWYgKGZpbGVzLmhhc093blByb3BlcnR5KGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgbW9kZWxGaWxlcy5wdXNoKG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGZpbGVzW2ZpbGVuYW1lXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZmlsZXMgPSBmaWxlcy5tYXAoZmlsZSA9PiBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUsIGZpbGUuY29udGVudHMpKTtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KG1vZGVsRmlsZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KFtdKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1vZGVsRmlsZUxpc3QoKS5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUuZmlsZW5hbWUoKSxcclxuICAgICAgICAgICAgY29udGVudHM6IGZpbGUuY29udGVudHMoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICByZXR1cm4ga28ucHVyZUNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdCgpLmZvckVhY2goZmlsZSA9PlxyXG4gICAgICAgICAgICByZXN1bHRbZmlsZS5maWxlbmFtZSgpXSA9IGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0cyBhd2F5IGRhdGFiYXNlIGxvZ2ljXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZpbGVTeXN0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlc18gPSB7fTtcclxuICAgICAgICB0aGlzLm1vdW50RmlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy53YXRjaE1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy53YXRjaGVzXyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoRmlsZShmaWxlbmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIShmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSkge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wV2F0Y2hpbmdGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoTW9kZWwoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzeXN0ZW0gPSB0aGlzO1xyXG4gICAgICAgIFt0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMsXHJcbiAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzXS5mb3JFYWNoKGZpbGVBcnJheSA9PlxyXG4gICAgICAgICAgICBmaWxlQXJyYXkuc3Vic2NyaWJlKGZ1bmN0aW9uKGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGVsRmlsZSA9IGNoYW5nZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJhZGRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyYWNrIG5ldyBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gZmlsZXN5c3RlbS5uZXdGaWxlKG1vZGVsRmlsZS5maWxlbmFtZSgpLCBtb2RlbEZpbGUuY29udGVudHMoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXN5c3RlbS5ub3RpZnlXYXRjaGVzKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXN5c3RlbS5kZWxldGVGaWxlTG9jYWxseV8obW9kZWxGaWxlLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgdGhpcywgXCJhcnJheUNoYW5nZVwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYW5zd2VyLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBmaXJzdCBlbGVtZW50IG9mIHN1Ym1pc3Npb24uY29kZSlcclxuICAgIC8vICFvbl9ydW4ucHksICFvbl9jaGFuZ2UucHksICFvbl9ldmFsLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZWxldmFudCBhc3NpZ25tZW50Ljx3aGF0ZXZlcj5cclxuICAgIC8vIF5zdGFydGluZ19jb2RlLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBmaXJzdCBlbGVtZW50IG9mIGFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlXHJcbiAgICAvLyBed2hhdGV2ZXJcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9mIGFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlXHJcbiAgICAvLyAhd2hhdGV2ZXIgb3IgP3doYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBlbGVtZW50cyBvZiBhc3NpZ25tZW50LmV4dHJhRmlsZXNcclxuICAgIC8vIE90aGVyd2lzZTpcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9mIHN1Ym1pc3Npb24uY29kZVxyXG4gICAgLyoqXHJcbiAgICAgKiBOZXcgc3BlY2lhbCBmaWxlcyBuZWVkIHRvIGJlIHJlZ2lzdGVyZWQgaGVyZVxyXG4gICAgICogQHBhcmFtIGZpbGUge0Jsb2NrUHlGaWxlfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2ZUZpbGVfKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fY2hhbmdlLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWluc3RydWN0aW9ucy5tZFwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJec3RhcnRpbmdfY29kZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIXRhZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQudGFncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiRzZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIl5cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIiFcIikgfHwgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiP1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ic2VydmVJbkFycmF5XyhmaWxlLCBhcnJheSkge1xyXG4gICAgICAgIGZpbGUub3duZXIgPSBhcnJheTtcclxuICAgICAgICBsZXQgY29kZUJ1bmRsZSA9IGZpbGUub3duZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBjb2RlQnVuZGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2RlQnVuZGxlW2ldLmZpbGVuYW1lKCkgPT09IGZpbGUuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gY29kZUJ1bmRsZVtpXS5jb250ZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsZS5oYW5kbGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IG5ld0ZpbGUuY29udGVudHM7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2gobmV3RmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50RmlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFvbl9ydW4ucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWluc3RydWN0aW9ucy5tZFwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0ZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzLCBtb2RlbEZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgaW4gdGhpcy5maWxlc18pIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBhbHJlYWR5IGV4aXN0cyEgSnVzdCB1cGRhdGUgaXRzIGhhbmRsZVxyXG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdGaWxlID0gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgICAgICBpZiAobW9kZWxGaWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUZpbGVfKGV4aXN0aW5nRmlsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUoY29udGVudHMgfHwgXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ0ZpbGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBkb2VzIG5vdCBleGlzdFxyXG4gICAgICAgICAgICBsZXQgbmV3RmlsZSA9IG5ldyBCbG9ja1B5RmlsZSh0aGlzLm1haW4sIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5maWxlc19bZmlsZW5hbWVdID0gbmV3RmlsZTtcclxuICAgICAgICAgICAgaWYgKG1vZGVsRmlsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVGaWxlXyhuZXdGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdGaWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3cml0ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICAgICAgY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5oYW5kbGUoY29udGVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5oYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmlsZW5hbWVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufG9iamVjdH0gVGhlIGluZm8gYWJvdXQgdGhlIGZpbGUsIG9yIGZhbHNlIGlmIGl0IGNvdWxkIG5vdCBiZSBkZWxldGVkXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoREVMRVRBQkxFX1NJTVBMRV9GSUxFUy5pbmRleE9mKGZpbGVuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmRlbGV0ZUZpbGVMb2NhbGx5XyhmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlKG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5vd25lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlcnMgYSBjYWxsYmFjayB0byBldmVudHVhbGx5IGNhbGwgZGVsZXRlRmlsZUxvY2FsbHlfXHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5vd25lci5yZW1vdmUobW9kZWxGaWxlID0+IG1vZGVsRmlsZS5maWxlbmFtZSA9PT0gZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZm91bmQgfHwgZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGVMb2NhbGx5XyhmaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBmaWxlID0gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjay5kZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsZTtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnlXYXRjaGVzKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZS5maWxlbmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjay51cGRhdGVkKGZpbGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV3SW5zdHJ1Y3RvckZpbGUoKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSAkKE5FV19JTlNUUlVDVE9SX0ZJTEVfRElBTE9HX0hUTUwpO1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IGJvZHkuZmluZChcIi5ibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZW5hbWVcIik7XHJcbiAgICAgICAgbGV0IGZpbGV0eXBlID0gYm9keS5maW5kKFwiLmJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxldHlwZVwiKTtcclxuICAgICAgICBsZXQgaGlkZGVuID0gYm9keS5maW5kKFwiLmJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1oaWRkZW5cIik7XHJcbiAgICAgICAgbGV0IGV4dGVuc2lvblJlZ2V4ID0gLyg/OlxcLihbXi5dKykpPyQvO1xyXG4gICAgICAgIGZpbGVuYW1lLm9uKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uUmVnZXguZXhlYyhmaWxlbmFtZS52YWwoKSlbMV07XHJcbiAgICAgICAgICAgIGV4dGVuc2lvbiA9IGV4dGVuc2lvbiA9PT0gdW5kZWZpbmVkID8gXCJObyBleHRlbnNpb25cIiA6IGV4dGVuc2lvbjtcclxuICAgICAgICAgICAgZmlsZXR5cGUudGV4dChleHRlbnNpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB5ZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhpZGRlbiA9IGhpZGRlbi5pcyhcIjpjaGVja2VkXCIpID8gXCIhXCIgOiBcIj9cIjtcclxuICAgICAgICAgICAgaWYgKGZpbGVuYW1lLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IGhpZGRlbitmaWxlbmFtZS52YWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3RmlsZShmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5jb25maXJtKFwiTWFrZSBOZXcgRmlsZVwiLCBib2R5LCB5ZXMsICgpPT57fSwgXCJBZGRcIik7XHJcbiAgICB9XHJcbn0iLCIvL1RPRE86IE1vdmUgZ2V0IGxpbmsgZG93biB0byBmb290ZXIsIHJlbW92ZSB2ZXJ0aWNhbCBiYXIgZnJvbSBxdWljay1tZW51XHJcbmV4cG9ydCBsZXQgRk9PVEVSX0hUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXN0YXR1c1wiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRBc3NpZ25tZW50JylcIj5Mb2FkIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVBc3NpZ25tZW50JylcIj5TYXZlIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRGaWxlJylcIj5Mb2FkIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVGaWxlJylcIj5TYXZlIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWREYXRhc2V0JylcIj5Mb2FkIERhdGFzZXQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvZ0V2ZW50JylcIj5Mb2cgRXZlbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3VwZGF0ZVN1Ym1pc3Npb24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5zZXJ2ZXIuZm9yY2UudXBkYXRlU3VibWlzc2lvblwiPlVwZGF0ZSBTdWJtaXNzaW9uPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdvbkV4ZWN1dGlvbicpXCI+RXhlY3V0aW9uPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2VydmVyLm1lc3NhZ2VzXCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPlVzZXI6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuaWRcIj48L3NwYW4+ICg8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLm5hbWVcIj48L3NwYW4+KTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPkNvdXJzZTogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5jb3Vyc2VJZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkdyb3VwOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmdyb3VwSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Bc3NpZ25tZW50OiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LmlkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudCBWZXJzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LnZlcnNpb25cIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLmlkXCI+PC9zcGFuPjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPlN1Ym1pc3Npb24gVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYDsiLCIvLyBUT0RPOiBTaG91bGQgZGlzYWJsZSBidXR0b25zIGlmIHdlIGNhbid0IGFjdGl2YXRlIHRoZW0uXG5cbmV4cG9ydCBjb25zdCBISVNUT1JZX1RPT0xCQVJfSFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJibG9ja3B5LWhpc3RvcnktdG9vbGJhciBjb2wtbWQtMTJcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBkaXNwbGF5Lmhpc3RvcnlNb2RlXCI+XG5cbiAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJibG9ja3B5LWhpc3Rvcnktc3RhcnQgYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5zdGFydFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+IFN0YXJ0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5wcmV2aW91c1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1iYWNrd2FyZCc+PC9zcGFuPiBQcmV2aW91c1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS1zZWxlY3RvciBmb3JtLWNvbnRyb2wgY3VzdG9tLXNlbGVjdCBtci0yXCIgYXJpYS10aXRsZT1cIkhpc3RvcnkgU2VsZWN0b3JcIj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnVzZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1maWxlLWltcG9ydCc+PC9zcGFuPiBVc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5Lm5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZm9yd2FyZCc+PC9zcGFuPiBOZXh0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkubW9zdFJlY2VudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj4gTW9zdCBSZWNlbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuPC9kaXY+XG5gO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZGlzcGxheWluZyB0aGUgdXNlcidzIGNvZGluZyBsb2dzICh0aGVpciBoaXN0b3J5KS5cbiAqIEEgbGlnaHR3ZWlnaHQgY29tcG9uZW50LCBpdHMgb25seSBqb2IgaXMgdG8gb3BlbiBhIGRpYWxvZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5SGlzdG9yeX1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUhpc3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5lZGl0RXZlbnRzID0gW107XG4gICAgfVxuXG4gICAgbG9hZChoaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IGhpc3Rvcnk7XG4gICAgICAgIHRoaXMuZWRpdEV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gJChcIi5ibG9ja3B5LWhpc3Rvcnktc2VsZWN0b3JcIikuZW1wdHkoKTtcbiAgICAgICAgbGV0IGVkaXRJZCA9IDA7XG4gICAgICAgIGhpc3RvcnlcbiAgICAgICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgIWVudHJ5LmZpbGVfcGF0aC5zdGFydHNXaXRoKFwiX2luc3RydWN0b3IuXCIpICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiQ29tcGlsZVwiICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiSW50ZXJ2ZW50aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSB8fCBlbnRyeS5ldmVudF90eXBlICE9PSBcIlgtU3VibWlzc2lvbi5MTVNcIilcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50X3R5cGUgPSBSRU1BUF9FVkVOVF9UWVBFU1tlbnRyeS5ldmVudF90eXBlXSB8fCBlbnRyeS5ldmVudF90eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ZWQgPSBwcmV0dHlQcmludERhdGVUaW1lKGVudHJ5LmNsaWVudF90aW1lc3RhbXApICtcIiAtIFwiK2V2ZW50X3R5cGU7XG4gICAgICAgICAgICAgICAgbGV0IGRpc2FibGUgPSAoZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJGaWxlLkVkaXRcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiLCB7dGV4dDogZGlzcGxheWVkLCBkaXNhYmxlZDogZGlzYWJsZX0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWRpdEV2ZW50KGVudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uYXR0cihcInZhbHVlXCIsIGVkaXRJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdEV2ZW50cy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgZWRpdElkICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3IuYXBwZW5kKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgZWRpdElkLTEpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5jaGFuZ2UoKGV2dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW92ZVRvU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKDApO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVQcmV2aW91cygpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgY3VycmVudElkLTEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlTmV4dCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5taW4odGhpcy5lZGl0RXZlbnRzLmxlbmd0aC0xLCBjdXJyZW50SWQrMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVUb01vc3RSZWNlbnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgtMSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWRpdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5zZXRDb2RlKHRoaXMuZWRpdEV2ZW50c1tjdXJyZW50SWRdLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIGxldCBjb2RlID0gdGhpcy5lZGl0RXZlbnRzW2N1cnJlbnRJZF0ubWVzc2FnZTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5maWxlLmhhbmRsZShjb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRWRpdEV2ZW50KGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoKGVudHJ5LmV2ZW50X3R5cGUgPT09IFwiRmlsZS5FZGl0XCIgfHxcbiAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSA9PT0gXCJGaWxlLkNyZWF0ZVwiKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGVudHJ5LmZpbGVfcGF0aCk7XG4gICAgfVxuXG59XG5cbmNvbnN0IFJFTUFQX0VWRU5UX1RZUEVTID0ge1xuICAgIFwiU2Vzc2lvbi5TdGFydFwiOiBcIkJlZ2FuIHNlc3Npb25cIixcbiAgICBcIlgtSVAuQ2hhbmdlXCI6IFwiQ2hhbmdlZCBJUCBhZGRyZXNzXCIsXG4gICAgXCJGaWxlLkVkaXRcIjogXCJFZGl0ZWQgY29kZVwiLFxuICAgIFwiRmlsZS5DcmVhdGVcIjogXCJTdGFydGVkIGFzc2lnbm1lbnRcIixcbiAgICBcIlJ1bi5Qcm9ncmFtXCI6IFwiUmFuIHByb2dyYW1cIixcbiAgICBcIkNvbXBpbGUuRXJyb3JcIjogXCJTeW50YXggZXJyb3JcIixcbiAgICBcIlgtU3VibWlzc2lvbi5MTVNcIjogXCJVcGRhdGVkIGdyYWRlXCJcbn07XG5cbmNvbnN0IG1vbnRoTmFtZXMgPSBbXG4gICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIixcbiAgICBcIkFwclwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsXG4gICAgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsXG4gICAgXCJOb3ZcIiwgXCJEZWNcIlxuXTtcbmNvbnN0IHdlZWtEYXlzID0gW1xuICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsXG4gICAgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIixcbiAgICBcIlNhdFwiXG5dO1xuXG5mdW5jdGlvbiBpc1NhbWVEYXkoZmlyc3QsIHNlY29uZCkge1xuICAgIHJldHVybiBmaXJzdC5nZXREYXRlKCkgPT09IHNlY29uZC5nZXREYXRlKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0TW9udGgoKSA9PT0gc2Vjb25kLmdldE1vbnRoKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0RnVsbFllYXIoKSA9PT0gc2Vjb25kLmdldEZ1bGxZZWFyKCk7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIGEgZGF0ZS90aW1lIHN0cmluZyBhbmQgcmV3cml0ZSBpdCBhcyBzb21ldGhpbmdcbiAqIG1vcmUgaHVtYW4gcmVhZGFibGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGltZVN0cmluZyAtIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGltZSAoXCJZWVlZTU1ERCBISE1NU1NcIilcbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gQSBodW1hbi1yZWFkYWJsZSB0aW1lIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gcHJldHR5UHJpbnREYXRlVGltZSh0aW1lU3RyaW5nKSB7XG4gICAgLypsZXQgeWVhciA9IHRpbWVTdHJpbmcuc2xpY2UoMCwgNCksXG4gICAgICAgIG1vbnRoID0gcGFyc2VJbnQodGltZVN0cmluZy5zbGljZSg0LCA2KSwgMTApLTEsXG4gICAgICAgIGRheSA9IHRpbWVTdHJpbmcuc2xpY2UoNiwgOCksXG4gICAgICAgIGhvdXIgPSB0aW1lU3RyaW5nLnNsaWNlKDksIDExKSxcbiAgICAgICAgbWludXRlcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTEsIDEzKSxcbiAgICAgICAgc2Vjb25kcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTMsIDE1KTsqL1xuICAgIC8vIFRPRE86IEhhbmRsZSB0aW1lem9uZXMgY29ycmVjdGx5XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHBhc3QgPSBuZXcgRGF0ZShwYXJzZUludCh0aW1lU3RyaW5nLCAxMCkpO1xuICAgIGlmIChpc1NhbWVEYXkobm93LCBwYXN0KSkge1xuICAgICAgICByZXR1cm4gXCJUb2RheSBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkYXlTdHIgPSB3ZWVrRGF5c1twYXN0LmdldERheSgpXTtcbiAgICAgICAgbGV0IG1vbnRoU3RyID0gbW9udGhOYW1lc1twYXN0LmdldE1vbnRoKCldO1xuICAgICAgICBsZXQgZGF0ZSA9IGRheVN0ciArIFwiLCBcIiArIG1vbnRoU3RyICsgXCIgXCIgKyBwYXN0LmdldERhdGUoKTtcbiAgICAgICAgaWYgKG5vdy5nZXRGdWxsWWVhcigpID09PSBwYXN0LmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlICsgXCIgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlICsgXCIsIFwiK3Bhc3QuZ2V0RnVsbFllYXIoKSArIFwiIGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiBPcGVucyB0aGUgaGlzdG9yeSBkaWFsb2cgYm94LiBUaGlzIHJlcXVpcmVzIGEgdHJpcCB0byB0aGUgc2VydmVyIGFuZFxuICogb2NjdXJzIGFzeW5jaHJvbm91c2x5LiBUaGUgdXNlcnMnIGNvZGUgaXMgc2hvd24gaW4gcHJlZm9ybWF0dGVkIHRleHRcbiAqIHRhZ3MgKG5vIGNvZGUgaGlnaGxpZ2h0aW5nIGN1cnJlbnRseSkgYWxvbmcgd2l0aCB0aGUgdGltZXN0YW1wLlxuICovXG5CbG9ja1B5SGlzdG9yeS5wcm90b3R5cGUub3BlbkRpYWxvZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaWFsb2cgPSB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2c7XG4gICAgdmFyIGJvZHkgPSBcIjxwcmU+YSA9IDA8L3ByZT5cIjtcbiAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuZ2V0SGlzdG9yeShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBib2R5ID0gZGF0YS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChjb21wbGV0ZSwgZWxlbSkgeyBcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZV9zdHIgPSBwcmV0dHlQcmludERhdGVUaW1lKGVsZW0udGltZSk7XG4gICAgICAgICAgICB2YXIgbmV3X2xpbmUgPSBcIjxiPlwiK2NvbXBsZXRlX3N0citcIjwvYj48YnI+PHByZT5cIitlbGVtLmNvZGUrXCI8L3ByZT5cIjtcbiAgICAgICAgICAgIHJldHVybiBjb21wbGV0ZStcIlxcblwiK25ld19saW5lO1xuICAgICAgICB9LCBcIlwiKTtcbiAgICAgICAgZGlhbG9nLnNob3coXCJXb3JrIEhpc3RvcnlcIiwgYm9keSwgZnVuY3Rpb24oKSB7fSk7XG4gICAgfSk7XG59OyIsImltcG9ydCB7VFJBQ0VfSFRNTH0gZnJvbSBcInRyYWNlLmpzXCI7XG5pbXBvcnQge0RJQUxPR19IVE1MfSBmcm9tIFwiZGlhbG9nLmpzXCI7XG5pbXBvcnQge0ZFRURCQUNLX0hUTUx9IGZyb20gXCJmZWVkYmFjay5qc1wiO1xuaW1wb3J0IHtGSUxFU19IVE1MfSBmcm9tIFwiZmlsZXMuanNcIjtcbmltcG9ydCB7Rk9PVEVSX0hUTUx9IGZyb20gXCJmb290ZXIuanNcIjtcbmltcG9ydCB7RURJVE9SU19IVE1MfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xuaW1wb3J0IHtDT05TT0xFX0hUTUx9IGZyb20gXCJjb25zb2xlLmpzXCI7XG5cbi8qKlxuICogQGVudW0ge3N0cn1cbiAqL1xuZXhwb3J0IGxldCBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMgPSB7XG4gICAgRkVFREJBQ0s6IFwiZmVlZGJhY2tcIixcbiAgICBUUkFDRTogXCJ0cmFjZVwiLFxuICAgIE5PTkU6IFwibm9uZVwiXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyhzZWxmLCBtb2RlbCkge1xuICAgIGxldCBoaWdobGlnaHRUaW1lb3V0ID0gbnVsbDtcbiAgICBtb2RlbC51aS5pbnN0cnVjdGlvbnMuY3VycmVudC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAoaGlnaGxpZ2h0VGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZ2hsaWdodFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGhpZ2hsaWdodFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdGlvbnMgcHJlIGNvZGVcIikubWFwKCAoaSwgYmxvY2spID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGxqcy5oaWdobGlnaHRCbG9jayhibG9jayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9KTtcbn1cblxuLy8gVE9ETzogR2V0IHNoYXJlYWJsZSBsaW5rIGJ1dHRvblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUludGVyZmFjZShtYWluKSB7XG4gICAgcmV0dXJuIGBcbjxkaXYgY2xhc3M9J2Jsb2NrcHktY29udGVudCBjb250YWluZXItZmx1aWQnPlxuXG4gICAgPCEtLSBEaWFsb2cgLS0+XG4gICAgJHtESUFMT0dfSFRNTH1cbiAgICBcbiAgICA8IS0tIEhpZGRlbiBDYXB0dXJlIENhbnZhcyAtLT5cbiAgICA8Y2FudmFzIGlkPSdjYXB0dXJlLWNhbnZhcycgY2xhc3M9J2Qtbm9uZScgcm9sZT1cInByZXNlbnRhdGlvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvY2FudmFzPlxuICAgIFxuICAgIDwhLS0gUm93IDE6IEhlYWRlciBhbmQgUXVpY2sgTWVudSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAgXG4gICAgICAgICA8IS0tIERlc2NyaXB0aW9uIC0tPlxuICAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTEwIGJsb2NrcHktcGFuZWwgYmxvY2tweS1oZWFkZXInXG4gICAgICAgICAgICAgICByb2xlPSdoZWFkaW5nJyBhcmlhLWxhYmVsPSdBc3NpZ25tZW50IERlc2NyaXB0aW9uJz5cbiAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBBc3NpZ25tZW50IE5hbWUgLS0+XG4gICAgICAgICAgICA8c3BhbiByb2xlPSdoZWFkaW5nJyBhcmlhLWxldmVsPScxJ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9ja3B5LW5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkJsb2NrUHk6IDwvc3Ryb25nPiBcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGFzc2lnbm1lbnQubmFtZSc+PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIFJlc2V0IEluc3RydWN0aW9ucyBCdXR0b24gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1pbnN0cnVjdGlvbnMtcmVzZXRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWRcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmluc3RydWN0aW9ucy5yZXNldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXQgaW5zdHJ1Y3Rpb25zPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gSW5zdHJ1Y3Rpb25zIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1pbnN0cnVjdGlvbnMnXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IHVpLmluc3RydWN0aW9ucy5jdXJyZW50XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktcXVpY2stbWVudSdcbiAgICAgICAgICAgICByb2xlPSdtZW51YmFyJyBhcmlhLWxhYmVsPSdRdWljayBNZW51JyB0aXRsZT1cIlF1aWNrIE1lbnVcIj5cbiAgICAgICAgICAgIDwhLS0gR2V0IFNoYXJlYWJsZSBMaW5rIC0tPlxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgIEdldCBzaGFyZWFibGUgbGluazwvYnV0dG9uPi0tPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidmlzaWJsZTogdWkubWVudS5pc1N1Ym1pdHRlZFwiPlxuICAgICAgICAgICAgICAgIFlvdXIgc3VibWlzc2lvbiBpcyByZWFkeSB0byBiZSByZXZpZXdlZCE8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLm1lbnUuY2FuTWFya1N1Ym1pdHRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVpLm1lbnUudGV4dE1hcmtTdWJtaXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkubWVudS5jbGlja01hcmtTdWJtaXR0ZWRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gVmlldyBhcyBpbnN0cnVjdG9yIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIlxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5yb2xlLmlzR3JhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgaWQ9XCJibG9ja3B5LWFzLWluc3RydWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBkaXNwbGF5Lmluc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIFZpZXcgYXMgaW5zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAyOiBDb25zb2xlIGFuZCBGZWVkYmFjayAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgIFxuICAgICAgICA8IS0tIENvbnNvbGUgLS0+XG4gICAgICAgICR7Q09OU09MRV9IVE1MfVxuICAgICAgICAgXG4gICAgICAgIDwhLS0gRmVlZGJhY2sgLS0+XG4gICAgICAgIDwhLS0ga28gaWY6IHVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSAtLT5cbiAgICAgICAgJHtGRUVEQkFDS19IVE1MfVxuICAgICAgICA8IS0tIC9rbyAtLT5cbiAgICAgICAgXG4gICAgICAgIDwhLS0gVHJhY2UgLS0+XG4gICAgICAgIDwhLS0ga28gaWY6IHVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSAtLT5cbiAgICAgICAgJHtUUkFDRV9IVE1MfVxuICAgICAgICA8IS0tIC9rbyAtLT5cbiAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwhLS0gUm93IDM6IEZpbGUgTmF2aWdhdGlvbiAtLT5cbiAgICA8IS0tIGtvIGlmOiB1aS5maWxlcy52aXNpYmxlIC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgICAgICR7RklMRVNfSFRNTH1cbiAgICA8L2Rpdj5cbiAgICA8IS0tIC9rbyAtLT5cbiAgICBcbiAgICA8IS0tIFZpZXcgUm93IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgJHtFRElUT1JTX0hUTUx9XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIEZvb3RlciBSb3cgLS0+ICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgJHtGT09URVJfSFRNTH1cbiAgICA8L2Rpdj5cbiAgICBcbjwvZGl2PlxuICAgIGA7XG59OyIsImltcG9ydCB7TG9jYWxTdG9yYWdlV3JhcHBlcn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHtsb2FkQXNzaWdubWVudFNldHRpbmdzLCBzYXZlQXNzaWdubWVudFNldHRpbmdzfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xuXG4vKipcbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgbGV0IFN0YXR1c1N0YXRlID0ge1xuICAgIFJFQURZOiBcInJlYWR5XCIsXG4gICAgQUNUSVZFOiBcImFjdGl2ZVwiLFxuICAgIFJFVFJZSU5HOiBcInJldHJ5aW5nXCIsXG4gICAgRkFJTEVEOiBcImZhaWxlZFwiLFxuICAgIE9GRkxJTkU6IFwib2ZmbGluZVwiXG59O1xuXG4vKipcbiAqIE9iamVjdCBmb3IgY29tbXVuaWNhdGluZyB3aXRoIHRoZSBleHRlcm5hbCBzZXJ2ZXJzLiBUaGlzIGluY2x1ZGVzIGZ1bmN0aW9uYWxpdHkgZm9yXG4gKiBzYXZpbmcgYW5kIGxvYWRpbmcgZmlsZXMsIGxvZ2dpbmcgZXZlbnRzLCBzYXZpbmcgY29tcGxldGlvbnMsIGFuZCByZXRyaWV2aW5nIGhpc3RvcnkuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeVNlcnZlcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeVNlcnZlcihtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcblxuICAgIC8vIFNhdmUgVVJMcyBsb2NhbGx5IGZvciBxdWlja2VyIGFjY2Vzc1xuICAgIHRoaXMudXJscyA9IG1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzO1xuXG4gICAgLy8gQWRkIHRoZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvblxuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2VXcmFwcGVyKFwiQkxPQ0tQWVwiKTtcblxuICAgIC8vIEZhdWx0UmVzaXN0YW50Q2FjaGVcbiAgICB0aGlzLnF1ZXVlID0ge1xuICAgICAgICBcImxvZ0V2ZW50XCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJsb2dFdmVudFwiLCBcIltdXCIpKSxcbiAgICAgICAgXCJ1cGRhdGVTdWJtaXNzaW9uXCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFwiW11cIikpXG4gICAgfTtcbiAgICB0aGlzLk1BWF9RVUVVRV9TSVpFID0ge1xuICAgICAgICBcImxvZ0V2ZW50XCI6IDIwMCxcbiAgICAgICAgXCJ1cGRhdGVTdWJtaXNzaW9uXCI6IDUwXG4gICAgfTtcblxuICAgIHRoaXMuVElNRVJfREVMQVkgPSAxMDAwO1xuICAgIHRoaXMuRkFJTF9ERUxBWSA9IDIwMDA7XG5cbiAgICB0aGlzLnRpbWVycyA9IHt9O1xuXG4gICAgdGhpcy5vdmVybGF5ID0gbnVsbDtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgPSAwO1xuXG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMgPSBbXTtcbiAgICB0aGlzLmNyZWF0ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB0aGlzLmNoZWNrQ2FjaGVzKCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIElQIGFkZHJlc3MgaGFzIGNoYW5nZWQsIGxvZ2dpbmcgYW4gZXZlbnQgaWYgdGhhdCBvY2N1cnMuXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY2hlY2tJUCA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwiSVBcIikpIHtcbiAgICAgICAgICAgIGxldCBvbGRJUCA9IHRoaXMuc3RvcmFnZS5nZXQoXCJJUFwiKTtcbiAgICAgICAgICAgIGlmIChvbGRJUCAhPT0gcmVzcG9uc2UuaXApIHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgXCJvbGRcIjogb2xkSVAsXG4gICAgICAgICAgICAgICAgICAgIFwibmV3XCI6IHJlc3BvbnNlLmlwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dFdmVudChcIlgtSVAuQ2hhbmdlXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFwiSVBcIiwgcmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGVyZSBoYXZlIGJlZW4gcHJldmlvdXMgZmFpbHVyZXMgY2FjaGVkLCBhbmQgaWYgc28gcmV0cmllcyB0aGVtLlxuICogVE9ETzogdXBkYXRlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrQ2FjaGVzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJzYXZlQXNzaWdubWVudFwiKSk7XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBcImFzc2lnbm1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F2ZUFzc2lnbm1lbnRcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgfVxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzLmZvckVhY2goKGZpbGVuYW1lKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJzYXZlRmlsZVwiICsgZmlsZW5hbWUpKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgXCJzYXZlRmlsZVwiLCB0aGlzLlRJTUVSX0RFTEFZKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucXVldWUpLmZvckVhY2goZnVuY3Rpb24gKGVuZHBvaW50KSB7XG4gICAgICAgIChmdW5jdGlvbiBwdXNoQW55UXVldWVkKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIucXVldWVbZW5kcG9pbnRdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2Uoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5wb3AoKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBzZXJ2ZXIudXJsc1tlbmRwb2ludF07XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlci5fcG9zdFJldHJ5KGRhdGEsIGVuZHBvaW50LCAxMDAwLCBwdXNoQW55UXVldWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKHtcInN1Y2Nlc3NcIjogdHJ1ZX0pO1xuICAgIH0pO1xufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChtb2RlbCwgZmlsZW5hbWUpIHtcbiAgICBtb2RlbC5zdWJzY3JpYmUoKGNvbnRlbnRzKSA9PlxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5hdXRvU2F2ZSgpID8gdGhpcy5zYXZlRmlsZShmaWxlbmFtZSwgY29udGVudHMpIDogZmFsc2UsIHRoaXMpO1xuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzLnB1c2goZmlsZW5hbWUpO1xufTtcblxuLyoqXG4gKiBUT0RPOiBmaXhcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnN1Ym1pc3Npb24uY29kZSwgXCJhbnN3ZXIucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25SdW4sIFwiIW9uX3J1bi5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vbkV2YWwsIFwiIW9uX2V2YWwucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UsIFwiIW9uX2NoYW5nZS5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMsIFwiIWluc3RydWN0aW9ucy5tZFwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUsIFwiXnN0YXJ0aW5nX2NvZGUucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhU3R1ZGVudEZpbGVzLCBcIiNleHRyYV9zdHVkZW50X2ZpbGVzLmJsb2NrcHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhU3RhcnRpbmdGaWxlcywgXCIjZXh0cmFfc3RhcnRpbmdfZmlsZXMuYmxvY2tweVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwudWkuZmlsZXMuZXh0cmFJbnN0cnVjdG9yRmlsZXMsIFwiI2V4dHJhX2luc3RydWN0b3JfZmlsZXMuYmxvY2tweVwiKTtcbn07XG5cbi8qKlxuICpcbiAqIFNvbWUgc3Vic2NyaXB0aW9ucyBoYXZlIHRvIGhhcHBlbiBhZnRlciBvdGhlciB0aGluZ3MgaGF2ZSBiZWVuIGxvYWRlZC5cbiAqIFJpZ2h0IG5vdyB0aGlzIGlzIGp1c3QgYWZ0ZXIgQ09SR0lTIGxpYnJhcmllcyBoYXZlIGJlZW4gbG9hZGVkLCBidXQgbWF5YmVcbiAqIHdlJ2xsIGFkZCBtb3JlIGxhdGVyIGFuZCB0aGlzIHdpbGwgbmVlZCB0byBiZSByZWZhY3RvcmVkLlxuICpcbiAqIFRPRE86IGZpeFxuICpcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuZmluYWxpemVTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIC8vdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHMuc3Vic2NyaWJlKHRoaXMuc2F2ZUFzc2lnbm1lbnQuYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGRlZmF1bHQgcGF5bG9hZCBmb3IgYW55IGNvbW11bmljYXRpb24gd2l0aCB0aGUgc2VydmVyIEFQSVxuICogQHJldHVybnMge3thc3NpZ25tZW50X2lkOiAqLCBjb3Vyc2VfaWQ6ICosIGdyb3VwX2lkOiAqLCB1c2VyX2lkOiAqLCB0aW1lem9uZTogKiwgdmVyc2lvbjogKiwgdGltZXN0YW1wOiAqfX1cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlU2VydmVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXNzaWdubWVudCA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50O1xuICAgIGxldCB1c2VyID0gdGhpcy5tYWluLm1vZGVsLnVzZXI7XG4gICAgbGV0IHN1Ym1pc3Npb24gPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbjtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbWljcm9zZWNvbmRzID0gbm93LmdldFRpbWUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBcImFzc2lnbm1lbnRfaWRcIjogYXNzaWdubWVudC5pZCgpLFxuICAgICAgICBcImFzc2lnbm1lbnRfZ3JvdXBfaWRcIjogdXNlci5ncm91cElkKCksXG4gICAgICAgIFwiY291cnNlX2lkXCI6IHVzZXIuY291cnNlSWQoKSxcbiAgICAgICAgXCJzdWJtaXNzaW9uX2lkXCI6IHN1Ym1pc3Npb24uaWQoKSxcbiAgICAgICAgXCJ1c2VyX2lkXCI6IHVzZXIuaWQoKSxcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IGFzc2lnbm1lbnQudmVyc2lvbigpLFxuICAgICAgICBcInRpbWVzdGFtcFwiOiBtaWNyb3NlY29uZHMsXG4gICAgICAgIFwidGltZXpvbmVcIjogbm93LmdldFRpbWV6b25lT2Zmc2V0KClcbiAgICB9O1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBzdGF0dXMgYW5kIG1lc3NhZ2UgZm9yIHRoZSByZWxldmFudCBlbmRwb2ludC5cbiAqIEBwYXJhbSBlbmRwb2ludCB7c3RyaW5nfSBvbmUgb2YgdGhlIFVSTCBlbmRwb2ludHNcbiAqIEBwYXJhbSBzdGF0dXMge1N0YXR1c1N0YXRlfVxuICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZz99XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNldFN0YXR1cyA9IGZ1bmN0aW9uIChlbmRwb2ludCwgc3RhdHVzLCBtZXNzYWdlKSB7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludF0oc3RhdHVzKTtcbiAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzW2VuZHBvaW50ICsgXCJNZXNzYWdlXCJdKG1lc3NhZ2UgfHwgXCJcIik7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYW4gb3ZlcmxheSBvbiB0aGUgc2NyZWVuIHRoYXQgYmxvY2tzIG9wZXJhdGlvbiB1bnRpbCB0aGUgc3lzdGVtIGlzIHJlYWR5LlxuICogVGhlIG92ZXJsYXkgZ2V0cyBwcm9ncmVzc2l2ZWx5IGRhcmtlciB0byBpbmRpY2F0ZSByZXBlYXRlZCBmYWlsdXJlcy5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2hvd092ZXJsYXkgPSBmdW5jdGlvbiAoYXR0ZW1wdCkge1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyArPSAxO1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2NrcHktb3ZlcmxheVwiKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cImJsb2NrcHktb3ZlcmxheVwiPiA8L2Rpdj4nKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGF0dGVtcHQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjOTg4XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzY1NVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiMzMzNcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmxhY2tcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuXG4vKipcbiAqIFVuZG8gYSBsZXZlbCBvZiBvdmVybGF5OyBpZiB0aGlzIHdhcyB0aGUgbGFzdCBsZXZlbCwgcmVtb3ZlcyBpdCBmcm9tIHRoZSBzY3JlZW4uXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmhpZGVPdmVybGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyAtPSAxO1xuICAgIGlmICh0aGlzLmJsb2NraW5nQXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX2VucXVldWVEYXRhID0gZnVuY3Rpb24gKGNhY2hlLCBkYXRhKSB7XG4gICAgLy8gRW5zdXJlIHdlIGhhdmUgbm90IG92ZXJmaWxsZWQgdGhlIHF1ZXVlXG4gICAgbGV0IGxlbmd0aCA9IHRoaXMucXVldWVbY2FjaGVdLmxlbmd0aDtcbiAgICBsZXQgbWF4ID0gdGhpcy5NQVhfUVVFVUVfU0laRVtjYWNoZV07XG4gICAgaWYgKGxlbmd0aCA+IG1heCkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXSA9IHRoaXMucXVldWVbY2FjaGVdLnNsaWNlKGxlbmd0aCAtIG1heCwgbWF4KTtcbiAgICB9XG4gICAgLy8gT25seSBhZGQgdGhlIGVsZW1lbnQgaWYgaXQncyBuZXdcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0ucHVzaChrZXkpO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXVlW2NhY2hlXSkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9kZXF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIGxldCBrZXkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnF1ZXVlW2NhY2hlXS5pbmRleE9mKGtleSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0uc3BsaWNlKGluZGV4KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0UmV0cnkgPSBmdW5jdGlvbiAoZGF0YSwgZW5kcG9pbnQsIGRlbGF5LCBjYWxsYmFjaykge1xuICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgIGxldCBwb3N0UmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhIGJhY2t1cCBvZiB0aGUgY3VycmVudCBwb3N0XG4gICAgICAgIHRoaXMuX2VucXVldWVEYXRhKGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZS5pcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCB0aGVuIGxldCdzIHRyeSBpdCBhZ2FpbiBpbiBhIGJpdFxuICAgICAgICAgICAgLmZhaWwoKGVycm9yLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBlbmRwb2ludCwgZGVsYXkgKyB0aGlzLkZBSUxfREVMQVksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGRlbGF5ID09PSBudWxsKSB7XG4gICAgICAgIHBvc3RSZXF1ZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChwb3N0UmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbi8qKlxuICogTWFrZSBhIEFKQVggcmVxdWVzdCB0aGF0LCB1cG9uIGZhaWx1cmUsIHdpbGwgY2hlY2sgdG8gc2VlIGlmIHRoaXMgd2FzIHRoZVxuICogbGF0ZXN0IGF0dGVtcHQgZm9yIHRoaXMgYGNhY2hlYCBtYXJrZXIuIElmIHNvLCBpdCB3aWxsIGF0dGVtcHQgYWdhaW4gdW50aWxcbiAqIHN1Y2Nlc3NmdWw7IG90aGVyd2lzZSwgaXQgZ2l2ZXMgdXAgdGhlIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgQUpBWC1yZWFkeSBkYXRhIHRvIGJlIHBvc3RlZFxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHVuaXF1ZSBuYW1lIGdpdmVuIHRvIHRoZSByZWxldmFudCB0aW1lclxuICogQHBhcmFtIHtTdHJpbmd9IGVuZHBvaW50IC0gVGhlIHVuaXF1ZSBuYW1lIGdpdmVuIHRvIHRoZSByZWxldmFudCBjYWNoZSBlbnRyeVxuICogQHBhcmFtIHtJbnRlZ2VyfSBkZWxheSAtIFRoZSBjdXJyZW50IG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmVcbiB0cnlpbmcgdGhlIHJlcXVlc3QgYWdhaW4uXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0TGF0ZXN0UmV0cnkgPSBmdW5jdGlvbiAoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSkge1xuICAgIGxldCBjYWNoZSA9IGVuZHBvaW50ICsgZmlsZW5hbWU7XG4gICAgbGV0IHJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY29ubmVjdGVkIGJ1dCBmYWlsZWQsIGRvbid0IHRyeSBhZ2FpbiBidXQgbGV0IHRoZSB1c2VyIGtub3cgd2h5LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB0aGUgbGF0ZXN0IG9uZSwgY2xlYXIgaXQgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyc1tjYWNoZV0pO1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICByZXF1ZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aW1lcnNbY2FjaGVdID0gc2V0VGltZW91dChyZXF1ZXN0LCBkZWxheSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RCbG9ja2luZyA9IGZ1bmN0aW9uIChlbmRwb2ludCwgZGF0YSwgYXR0ZW1wdHMsIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgICB0aGlzLnNob3dPdmVybGF5KGF0dGVtcHRzKTtcbiAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgc3VjY2VzcyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZmFpbCgoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGZhaWx1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbHVyZShlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhlbmRwb2ludCwgZGF0YSwgYXR0ZW1wdHMgLSAxLCBzdWNjZXNzLCBmYWlsdXJlKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLkZBSUxfREVMQVkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn07XG5cblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9hZEFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoYXNzaWdubWVudF9pZCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkQXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiYXNzaWdubWVudF9pZFwiXSA9IGFzc2lnbm1lbnRfaWQ7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcImxvYWRBc3NpZ25tZW50XCIsIGRhdGEsIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4ubG9hZEFzc2lnbm1lbnREYXRhXyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlQXNzaWdubWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImhpZGRlblwiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCk7XG4gICAgICAgIGRhdGFbXCJyZXZpZXdlZFwiXSA9IG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKTtcbiAgICAgICAgZGF0YVtcInB1YmxpY1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQucHVibGljKCk7XG4gICAgICAgIGRhdGFbXCJ1cmxcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnVybCgpO1xuICAgICAgICBkYXRhW1wiaXBfcmFuZ2VzXCJdID0gbW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcygpO1xuICAgICAgICBkYXRhW1wibmFtZVwiXSA9IG1vZGVsLmFzc2lnbm1lbnQubmFtZSgpO1xuICAgICAgICBkYXRhW1wic2V0dGluZ3NcIl0gPSBzYXZlQXNzaWdubWVudFNldHRpbmdzKG1vZGVsKTtcblxuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJzYXZlQXNzaWdubWVudFwiLCBkYXRhLCAzLCAoKSA9PiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX1NBVklOR19BU1NJR05NTkVOVCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChTYXZlIEFzc2lnbm1lbnQpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRIaXN0b3J5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRIaXN0b3J5XCIpKSB7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwibG9hZEhpc3RvcnlcIiwgZGF0YSwgMiwgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19ISVNUT1JZKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2dFdmVudCA9IGZ1bmN0aW9uIChldmVudF90eXBlLCBjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIGZpbGVfcGF0aCkge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2dFdmVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZXZlbnRfdHlwZVwiXSA9IGV2ZW50X3R5cGU7XG4gICAgICAgIGRhdGFbXCJjYXRlZ29yeVwiXSA9IGNhdGVnb3J5O1xuICAgICAgICBkYXRhW1wibGFiZWxcIl0gPSBsYWJlbDtcbiAgICAgICAgZGF0YVtcIm1lc3NhZ2VcIl0gPSBtZXNzYWdlO1xuICAgICAgICBkYXRhW1wiZmlsZV9wYXRoXCJdID0gZmlsZV9wYXRoO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgXCJsb2dFdmVudFwiLCAwLCAoKSA9PiB7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9nRXZlbnRcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUltYWdlID0gZnVuY3Rpb24gKGRpcmVjdG9yeSwgaW1hZ2UpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUltYWdlXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJkaXJlY3RvcnlcIl0gPSBkaXJlY3Rvcnk7XG4gICAgICAgIGRhdGFbXCJpbWFnZVwiXSA9IGltYWdlO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVJbWFnZVwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIFwidHVydGxlX291dHB1dFwiLCBcInNhdmVJbWFnZVwiLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVJbWFnZVwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS51cGRhdGVTdWJtaXNzaW9uU3RhdHVzID0gZnVuY3Rpb24obmV3U3RhdHVzKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcInN0YXR1c1wiXSA9IG5ld1N0YXR1cztcbiAgICAgICAgbGV0IHBvc3RTdGF0dXNDaGFuZ2UgPSAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMobmV3U3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwidXBkYXRlU3VibWlzc2lvblN0YXR1c1wiLCBkYXRhLCAyLCBwb3N0U3RhdHVzQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX1VQREFUSU5HX1NVQk1JU1NJT05fU1RBVFVTKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gbG9hZCBmaWxlcyBhbmQgd2ViIHJlc291cmNlcy5cbiAqXG4gKiBERVBSRUNBVEVEXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCB0eXBlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIHZhciBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkX2ZpbGVcIikpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImZpbGVuYW1lXCJdID0gZmlsZW5hbWU7XG4gICAgICAgIGRhdGFbXCJ0eXBlXCJdID0gdHlwZTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKHRoaXMudXJscy5sb2FkX2ZpbGUsIGRhdGEsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuc2V0U3RhdHVzKFwiRmFpbHVyZVwiLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhcIlNlcnZlciBmYWlsdXJlISBSZXBvcnQgdG8gaW5zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yQ2FsbGJhY2soXCJObyBmaWxlIHNlcnZlciBhdmFpbGFibGUuXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIk9mZmxpbmVcIiwgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKExvYWQgRmlsZSlcIik7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUZpbGUgPSBmdW5jdGlvbiAoZmlsZW5hbWUsIGNvbnRlbnRzLCBkZWxheSkge1xuICAgIGlmIChkZWxheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGF5ID0gdGhpcy5USU1FUl9ERUxBWTtcbiAgICB9XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVGaWxlXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1wiY29kZVwiXSA9IGNvbnRlbnRzO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgXCJzYXZlRmlsZVwiLCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS51cGRhdGVTdWJtaXNzaW9uID0gZnVuY3Rpb24gKHNjb3JlLCBjb3JyZWN0LCBoaWRkZW5PdmVycmlkZSwgZm9yY2VVcGRhdGUpIHtcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2VzcztcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwidXBkYXRlU3VibWlzc2lvblwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wic2NvcmVcIl0gPSBzY29yZTtcbiAgICAgICAgZGF0YVtcImNvcnJlY3RcIl0gPSBjb3JyZWN0O1xuICAgICAgICBkYXRhW1wiaGlkZGVuX292ZXJyaWRlXCJdID0gaGlkZGVuT3ZlcnJpZGU7XG4gICAgICAgIGRhdGFbXCJmb3JjZV91cGRhdGVcIl0gPSBmb3JjZVVwZGF0ZTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLmdldFBuZ0Zyb21CbG9ja3MoKHBuZ0RhdGEsIGltZykgPT4ge1xuICAgICAgICAgICAgZGF0YVtcImltYWdlXCJdID0gcG5nRGF0YTtcbiAgICAgICAgICAgIGlmIChpbWcucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwidXBkYXRlU3VibWlzc2lvblwiLCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwidXBkYXRlU3VibWlzc2lvblwiLCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGlkZGVuT3ZlcnJpZGUgJiYgY29ycmVjdCAmJiBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVtcImFzc2lnbm1lbnRfaWRcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07IiwiLyoqXG4gKiBTa3VscHQgTW9kdWxlIGZvciBob2xkaW5nIHRoZSBJbnN0cnVjdG9yIEFQSS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBsb2FkZWQgaW4gYnkgZ2V0dGluZyB0aGUgZnVuY3Rpb25zJyBzb3VyY2UgY29kZSBmcm9tIHRvU3RyaW5nLlxuICogSXNuJ3QgdGhhdCBjcmF6eT9cbiAqXG4gKlxuICovXG5leHBvcnQgbGV0ICRza19tb2RfaW5zdHJ1Y3RvciA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIE1haW4gbW9kdWxlIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgYXQgdGhlIGVuZC5cbiAgICBsZXQgbW9kID0ge307XG4gICAgbGV0IG5vbmUgPSBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgXG4gICAgbGV0IHByaW9yID0gbnVsbDtcbiAgICBtb2QudGltZWl0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJ0aW1laXRcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgbGV0IGRpZmZlcmVuY2U7XG4gICAgICAgIGlmIChwcmlvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gRGF0ZS5ub3coKSAtIHByaW9yO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFNrLmZmaS5yZW1hcFRvSnMobmFtZSksIGRpZmZlcmVuY2UvMTAwMCk7XG4gICAgICAgIHByaW9yID0gRGF0ZS5ub3coKTtcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIGZlZWRiYWNrIHRvIGphdmFzY3JpcHQgY29uc29sZVxuICAgICAqL1xuICAgIG1vZC5sb2cgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG1lc3NhZ2UpKTtcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIGRlYnVnIHRvIGphdmFzY3JpcHQgY29uc29sZVxuICAgICAqL1xuICAgIG1vZC5kZWJ1ZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibG9nXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjb3ZlcnRzIHRoZSBvdXRwdXQgaW4gdGhlIHN0dWRlbnQgcmVwb3J0IHRvIGEgcHl0aG9uIFxuICAgICAqIGxpc3QgYW5kIHJldHVybnMgaXQuXG4gICAgKiovXG4gICAgbW9kLmdldF9vdXRwdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X291dHB1dFwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IG91dHB1dCA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCk7XG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQubWFwKGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udG9Ta3VscHQoKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KG91dHB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlc2V0cyB0aGUgb3V0cHV0LCBwYXJ0aWN1bGFybHkgdXNlZnVsIGlmIHRoZSBzdHVkZW50XG4gICAgICogY29kZSBpcyBnb2luZyB0byBiZSByZXJ1bi5cbiAgICAgKi9cbiAgICBtb2QucmVzZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInJlc2V0X291dHB1dFwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ub3V0cHV0LnJlbW92ZUFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnF1ZXVlX2lucHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInF1ZXVlX2lucHV0XCIsIGFyZ3VtZW50cywgMSwgSW5maW5pdHkpO1xuICAgICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyZ3MubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBhcmdzW2ldO1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImlucHV0XCIsIFwic3RyaW5nXCIsIFNrLmJ1aWx0aW4uY2hlY2tTdHJpbmcoaW5wdXQpKTtcbiAgICAgICAgICAgIFNrLnF1ZXVlZElucHV0LnB1c2goU2suZmZpLnJlbWFwVG9KcyhpbnB1dCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgaW5zdHJ1Y3RvcnMgdG8gZ2V0IHRoZSBzdHVkZW50cycgY29kZSBhcyBhIHN0cmluZy5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X3Byb2dyYW0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Byb2dyYW1cIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoU2suZXhlY3V0aW9uUmVwb3J0c1tcInZlcmlmaWVyXCJdLmNvZGUpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgaW5zdHJ1Y3RvcnMgdG8gZ2V0IHRoZSBzdHVkZW50cycgY29kZSBhcyBhIHN0cmluZy5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X2V2YWx1YXRpb24gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X2V2YWx1YXRpb25cIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXZhbHVhdGlvbiB8fCBcIlwiKTtcbiAgICB9KTtcbiAgICBcbiAgICBtb2QudHJhY2VfbGluZXMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IGxpbmVzID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ubGluZXM7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShsaW5lcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG1vZC5nZXRfc3R1ZGVudF9lcnJvciA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfc3R1ZGVudF9lcnJvclwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtub25lLCBub25lXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvcixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHt9O1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLnRyYWNlYmFjayAmJiBlcnJvci50cmFjZWJhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uW1wibGluZVwiXSA9IGVycm9yLnRyYWNlYmFja1swXS5saW5lbm87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yID0gbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvc2l0aW9uID0gU2suZmZpLnJlbWFwVG9QeShwb3NpdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4udHVwbGUoW2Vycm9yLCBwb3NpdGlvbl0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICBtb2QuaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImhhZF9leGVjdXRpb25fdGltZV9lcnJvclwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gIVNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MgJiYgXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IgJiZcbiAgICAgICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvci50cCRuYW1lID09PSBcIlRpbWVMaW1pdEVycm9yXCI7XG4gICAgfSk7XG4gICAgXG4gICAgbGV0IGJhY2t1cFRpbWUgPSB1bmRlZmluZWQ7XG4gICAgbW9kLmxpbWl0X2V4ZWN1dGlvbl90aW1lID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxpbWl0X2V4ZWN1dGlvbl90aW1lXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGJhY2t1cFRpbWUgPSBTay5leGVjTGltaXQ7XG4gICAgICAgIGlmIChTay5leGVjTGltaXRGdW5jdGlvbikge1xuICAgICAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcbiAgICAgICAgICAgIFNrLmV4ZWNTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBtb2QudW5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJ1bmxpbWl0X2V4ZWN1dGlvbl90aW1lXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IGJhY2t1cFRpbWU7XG4gICAgICAgIFNrLmV4ZWNTdGFydCA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnN1cHByZXNzX3Njcm9sbGluZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJzdXBwcmVzc19zY3JvbGxpbmdcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBcbiAgICAvKlxuICAgIGRlZiBoaXN0KHNlbGYsIGRhdGEsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0hpc3RvZ3JhbScsICd2YWx1ZXMnOiBkYXRhLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgZGVmIHBsb3Qoc2VsZiwgeHMsIHlzPU5vbmUsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIGlmIHlzID09IE5vbmU6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogcmFuZ2UobGVuKHhzKSksICd5JzogeHMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAgICAgZWxzZTpcbiAgICAgICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0xpbmUnLCAneCc6IHhzLCAneSc6IHlzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgZGVmIHNjYXR0ZXIoc2VsZiwgeHMsIHlzLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdTY2F0dGVyJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgICovXG4gICAgbW9kLmdldF9wbG90cyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfcGxvdHNcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXRzID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl1bXCJvdXRwdXRcIl0oKTtcbiAgICAgICAgICAgIG91dHB1dHMgPSBvdXRwdXRzLmZpbHRlcihmdW5jdGlvbihvdXRwdXQpIHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dC50eXBlID09PSBcInBsb3RcIjtcbiAgICAgICAgICAgIH0pLm1hcChmdW5jdGlvbihncmFwaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XCJkYXRhXCI6IGdyYXBoLmNvbnRlbnQubWFwKGZ1bmN0aW9uKHBsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Bsb3QgPSB7IFwidHlwZVwiOiBwbG90LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsb3QudHlwZSA9PT0gXCJsaW5lXCIgfHwgcGxvdC50eXBlID09PSBcInNjYXR0ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInhcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1wieVwiXSA9IHBsb3QuZGF0YS5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi55OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbG90LnR5cGUgPT09IFwiaGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1widmFsdWVzXCJdID0gcGxvdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdQbG90O1xuICAgICAgICAgICAgICAgIH0pLCBcbiAgICAgICAgICAgICAgICBcInhsYWJlbFwiOiBcIlwiLCBcInlsYWJlbFwiOiBcIlwiLCBcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiXCIsIFwibGVnZW5kXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkob3V0cHV0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIC8vIFByb3ZpZGVzIGBzdHVkZW50YCBhcyBhbiBvYmplY3Qgd2l0aCBhbGwgdGhlIGRhdGEgdGhhdCB0aGUgc3R1ZGVudCBkZWNsYXJlZC5cbiAgICBtb2QuU3R1ZGVudERhdGEgPSBTay5taXNjZXZhbC5idWlsZENsYXNzKG1vZCwgZnVuY3Rpb24oJGdibCwgJGxvYykge1xuICAgICAgICAkbG9jLl9faW5pdF9fID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmKSB7XG4gICAgICAgICAgICAvL3NlbGYuZGF0YSA9IFNrLmJ1aWx0aW4uZGljdCgpO1xuICAgICAgICAgICAgbGV0IG5ld0RpY3QgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIFNrLmFic3RyLnNhdHRyKHNlbGYsIFNrLmJ1aWx0aW4uc3RyKFwiZGF0YVwiKSwgbmV3RGljdCwgdHJ1ZSk7XG4gICAgICAgICAgICBzZWxmLm1vZHVsZSA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnJlc3VsdHM7XG4gICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlID0gc2VsZi5tb2R1bGUuJGQ7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTay5hYnN0ci5vYmplY3RTZXRJdGVtKG5ld0RpY3QsIFNrLmZmaS5yZW1hcFRvUHkoU2sudW5maXhSZXNlcnZlZChrZXkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2R1bGVba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY2FsbF9mID0gZnVuY3Rpb24oa3dhKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzTGVuKFwiY2FsbFwiLCBhcmd1bWVudHMubGVuZ3RoLCAxLCBJbmZpbml0eSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICB2YXIga3dhcmdzID0gbmV3IFNrLmJ1aWx0aW5zLmRpY3Qoa3dhKTtcblxuICAgICAgICAgICAgdmFyIHNlbGYgPSBhcmdzWzBdO1xuICAgICAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IGFyZ3NbMV07XG4gICAgICAgICAgICBhcmdzID0gYXJncy5zbGljZSgyKTtcblxuICAgICAgICAgICAgdmFyIGlucHV0cyA9IGt3YXJncy5tcCRsb29rdXAobmV3IFNrLmJ1aWx0aW4uc3RyKFwiaW5wdXRzXCIpKTtcbiAgICAgICAgICAgIGlmIChpbnB1dHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlucHV0cyA9IFNrLmZmaS5yZW1hcFRvSnMoaW5wdXRzKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKGlucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkYXRhID0gc2VsZi50cCRnZXRhdHRyKG5ldyBTay5idWlsdGluLnN0cihcImRhdGFcIikpO1xuICAgICAgICAgICAgdmFyIGZ1bmN0aW9uT2JqZWN0ID0gZGF0YS5tcCRsb29rdXAoZnVuY3Rpb25OYW1lKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmdW5jdGlvbk9iamVjdC50cCRjYWxsKGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgY2FsbF9mLmNvX2t3YXJncyA9IHRydWU7XG4gICAgICAgIC8vY2FsbF9mLmNvX3Zhcm5hbWVzID0gW1wic2VsZlwiLCBcImZ1bmN0aW9uXCJdO1xuICAgICAgICBjYWxsX2YuY29fbmFtZT0gbmV3IFNrLmJ1aWx0aW4uc3RyKFwiY2FsbFwiKTtcbiAgICAgICAgJGxvY1tcImNhbGxfJHJuJFwiXSA9IG5ldyBTay5idWlsdGluLmZ1bmMoY2FsbF9mKTtcblxuICAgICAgICAkbG9jW1wiX19yZXByX19cIl0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIoXCJcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRsb2MuZ2V0X25hbWVzX2J5X3R5cGUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYsIHR5cGUsIGV4Y2x1ZGVfYnVpbHRpbnMpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfbmFtZXNfYnlfdHlwZVwiLCBhcmd1bWVudHMsIDIsIDMpO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiZXhjbHVkZV9idWlsdGluc1wiLCBcImJvb2xlYW5cIiwgU2suYnVpbHRpbi5jaGVja0Jvb2woZXhjbHVkZV9idWlsdGlucykpO1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSBTay5mZmkucmVtYXBUb0pzKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0udHAkbmFtZSA9PT0gdHlwZS50cCRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgJiYgcHJvcGVydHkuc3RhcnRzV2l0aChcIl9fXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTay5mZmkucmVtYXBUb1B5KFNrLnVuZml4UmVzZXJ2ZWQocHJvcGVydHkpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICAkbG9jLmdldF92YWx1ZXNfYnlfdHlwZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZiwgdHlwZSwgZXhjbHVkZV9idWlsdGlucykge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF92YWx1ZXNfYnlfdHlwZVwiLCBhcmd1bWVudHMsIDIsIDMpO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiZXhjbHVkZV9idWlsdGluc1wiLCBcImJvb2xlYW5cIiwgU2suYnVpbHRpbi5jaGVja0Jvb2woZXhjbHVkZV9idWlsdGlucykpO1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSBTay5mZmkucmVtYXBUb0pzKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0udHAkbmFtZSA9PT0gdHlwZS50cCRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyAmJiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiX19cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNlbGYubW9kdWxlW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH0sIFwiU3R1ZGVudERhdGFcIik7XG4gICAgbW9kLnN0dWRlbnQgPSBTay5taXNjZXZhbC5jYWxsc2ltT3JTdXNwZW5kKG1vZC5TdHVkZW50RGF0YSk7XG4gICAgXG4gICAgbW9kLmdldF9zdHVkZW50X2RhdGEgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZGF0YVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gbW9kLnN0dWRlbnQ7XG4gICAgfSk7XG5cbiAgICBtb2Quc2V0X2luc3RydWN0aW9ucyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obmV3SW5zdHJ1Y3Rpb25zKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJzZXRfaW5zdHJ1Y3Rpb25zXCIsIGFyZ3VtZW50cywgMSwgMik7XG4gICAgICAgIG5ld0luc3RydWN0aW9ucyA9IFNrLmZmaS5yZW1hcFRvSnMobmV3SW5zdHJ1Y3Rpb25zKTtcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcIm1vZGVsXCJdLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhuZXdJbnN0cnVjdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgbW9kLmdldF9tb2RlbF9pbmZvID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihrZXlzKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfbW9kZWxfaW5mb1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBsZXQgbW9kZWwgPSBTay5leGVjdXRpb25SZXBvcnRzW1wibW9kZWxcIl07XG4gICAgICAgIGtleXMgPSBTay5mZmkucmVtYXBUb0pzKGtleXMpLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbW9kZWwgPSBtb2RlbFtrZXlzW2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShtb2RlbCgpKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbW9kO1xufTtcbiIsImxldCBMT0NBTF9TVE9SQUdFX1JFRjtcbnRyeSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYgPSBsb2NhbFN0b3JhZ2U7XG4gICAgbGV0IG1vZCA9IFwiQkxPQ0tQWV9MT0NBTFNUT1JBR0VfVEVTVFwiO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnNldEl0ZW0obW9kLCBtb2QpO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnJlbW92ZUl0ZW0obW9kKTtcbn0gY2F0Y2goZSkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGID0ge1xuICAgICAgICBfZGF0YSAgICAgICA6IHt9LFxuICAgICAgICBzZXRJdGVtICAgICA6IGZ1bmN0aW9uKGlkLCB2YWwpIHsgcmV0dXJuIHRoaXMuX2RhdGFbaWRdID0gU3RyaW5nKHZhbCk7IH0sXG4gICAgICAgIGdldEl0ZW0gICAgIDogZnVuY3Rpb24oaWQpIHsgcmV0dXJuIHRoaXMuX2RhdGEuaGFzT3duUHJvcGVydHkoaWQpID8gdGhpcy5fZGF0YVtpZF0gOiB1bmRlZmluZWQ7IH0sXG4gICAgICAgIHJlbW92ZUl0ZW0gIDogZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGRlbGV0ZSB0aGlzLl9kYXRhW2lkXTsgfSxcbiAgICAgICAgY2xlYXIgICAgICAgOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2RhdGEgPSB7fTsgfVxuICAgIH07XG59XG5cbi8qKlxuICogSGVscGVyIG9iamVjdCBmb3IgaW50ZXJmYWNpbmcgd2l0aCB0aGUgTG9jYWxTdG9yYWdlLiBUaGUgTG9jYWxTdG9yYWdlXG4gKiBicm93c2VyIEFQSSBhbGxvd3MgZm9yIG9mZmxpbmUgc3RvcmFnZS4gVGhhdCBBUEkgaXMgdmVyeSB1bnNvcGhpc3RpY2F0ZWQsXG4gKiBhbmQgaXMgZXNzZW50aWFsbHkgYSBsYW1lIGtleS12YWx1ZSBzdG9yZS4gVGhpcyBvYmplY3Qgc2l0cyBvbiB0b3BcbiAqIGFuZCBwcm92aWRlcyBhIG51bWJlciBvZiB1c2VmdWwgdXRpbGl0aWVzLCBpbmNsdWRpbmcgcnVkaW1lbnRhcnljYWNoZVxuICogY2FjaGUgZXhwaXJhdGlvbi5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtMb2NhbFN0b3JhZ2VXcmFwcGVyfVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSAtIEEgbmFtZXNwYWNlIHRvIHVzZSBpbiBncm91cGluZyBhY2Nlc3MgdG8gbG9jYWxzdG9yYWdlLiBUaGlzIGtlZXBzIGFjY2VzcyBjbGVhbiBhbmQgb3JnYW5pemVkLCB3aGlsZSBhbHNvIG1ha2luZyBpdCBwb3NzaWJsZSB0byBoYXZlIG11bHRpcGxlIExvY2FsU3RvcmFnZSBjb25uZWN0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExvY2FsU3RvcmFnZVdyYXBwZXIobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG59XG4vKipcbiAqIEEgbWV0aG9kIGZvciBhZGRpbmcgYSBrZXkvdmFsdWUgcGFpciB0byBMb2NhbFN0b3JhZ2UuXG4gKiBOb3RlIHRoYXQgYm90aCBwYXJhbWV0ZXJzIG11c3QgYmUgc3RyaW5ncyAoSlNPTi5zdHJpbmdpZnkgaXMgeW91ciBmcmllbmQpLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5LlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5zZXQgPSAgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnNldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIsIHZhbHVlKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIiwgJC5ub3coKSk7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZW1vdmluZyBhIGtleSBmcm9tIExvY2FsU3RvcmFnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZW1vdmUuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnJlbW92ZUl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnJlbW92ZUl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmb3IuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHRpbWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHRpbWUgZm9yLlxuICogQHJldHVybnMge0ludGVnZXJ9IC0gVGhlIHRpbWVzdGFtcCAobG9jYWwgZXBvY2gpIHdoZW4gdGhlIGtleSB3YXMgbGFzdCBzZXQuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICogSWYgdGhlIGtleSBkb2VzIG5vdCBleGlzdCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBpcyB1c2VkIGluc3RlYWQuXG4gKiBUaGlzIGRlZmF1bHQgd2lsbCBiZSBzZXQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBkZWZhdWx0VmFsdWUgLSBUaGUgZGVmYXVsdCB2YWx1ZSB0byB1c2UuIE11c3QgYmUgYSBzdHJpbmcuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldERlZmF1bHQgPSBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICh0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgZ2l2ZW4ga2V5IGlzIGluIExvY2FsU3RvcmFnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIGtleSB0byB0ZXN0IGV4aXN0ZW5jZSBmb3IuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKSAhPT0gbnVsbDtcbn07XG5cbi8qKlxuICogQSB0ZXN0IGZvciB3aGV0aGVyIHRoZSBzZXJ2ZXIgaGFzIHRoZSBuZXdlciB2ZXJzaW9uLiBUaGlzIGZ1bmN0aW9uXG4gKiBhc3N1bWVzIHRoYXQgdGhlIHNlcnZlciB0cmlwIHRha2VzIGFib3V0IDUgc2Vjb25kcy4gVGhpcyBtZXRob2RcbiAqIGlzIGxhcmdlbHkgZGVwcmVjYXRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIGtleSB0byBjaGVjay5cbiAqIEBwYXJhbSB7SW50ZWdlcn0gc2VydmVyX3RpbWUgLSBUaGUgc2VydmVyJ3MgdGltZSBhcyBhbiBlcG9jaCAoaW4gbWlsbGlzZWNvbmRzKVxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5pc19uZXcgPSBmdW5jdGlvbihrZXksIHNlcnZlcl90aW1lKSB7XG4gICAgdmFyIHN0b3JlZF90aW1lID0gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpO1xuICAgIHJldHVybiAoc2VydmVyX3RpbWUgPj0gc3RvcmVkX3RpbWUrNTAwMCk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFRSQUNFX0hUTUwgPSBgXHJcblxyXG48ZGl2IGNsYXNzPVwiYmxvY2tweS10cmFjZSBjb2wtbWQtNiBibG9ja3B5LXBhbmVsXCJcclxuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJUcmFjZVwiPlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cclxuICAgICAgICA8c3Ryb25nPlRyYWNlOiA8L3N0cm9uZz5cclxuICAgICAgICBcclxuICAgICAgICA8IS0tIEZlZWRiYWNrL1RyYWNlIFZpc2liaWxpdHkgQ29udHJvbCAtLT5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LWhpZGUtdHJhY2UnXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPiBIaWRlIFRyYWNlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItMyBibG9ja3B5LXRyYWNlLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtYmFja3dhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5iYWNrd2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1iYWNrd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+U3RlcDo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAvIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmZvcndhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZm9yd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmxhc3RcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1mb3J3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogdWkudHJhY2UubGluZSc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPHRhYmxlIGNsYXNzPSd0YWJsZSB0YWJsZS1zbSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyJz5cclxuICAgICAgICA8Y2FwdGlvbj5DdXJyZW50IHZhcmlhYmxlcyBhdCB0aGlzIHN0ZXA8L2NhcHRpb24+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+PHRoPk5hbWU8L3RoPjx0aD5UeXBlPC90aD48dGg+VmFsdWU8L3RoPjwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgZGF0YS1iaW5kPVwiZm9yZWFjaDogdWkudHJhY2UuZGF0YSgpLnByb3BlcnRpZXNcIj5cclxuICAgICAgICAgICAgPHRyIGRhdGEtYmluZD1cInZpc2libGU6IG5hbWUgIT0gJ19fZmlsZV9fJyAmJiBuYW1lICE9ICdfX3BhdGhfXydcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XCJ0ZXh0OiBuYW1lXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XCJ0ZXh0OiB0eXBlXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8Y29kZSBkYXRhLWJpbmQ9XCJ0ZXh0OiB2YWx1ZVwiPjwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiB0eXBlID09IFwiTGlzdFwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBkYXRhLWJpbmQ9XCJjbGljazogLy8kcm9vdC52aWV3RXhhY3RWYWx1ZSh0eXBlLCBleGFjdF92YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1uZXctd2luZG93Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICAgIFxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1B5VHJhY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcblxyXG4gICAgICAgIHRoaXMuSUdOT1JFRF9HTE9CQUxTID0gW1wiX19uYW1lX19cIiwgXCJfX2RvY19fXCIsIFwiX19wYWNrYWdlX19cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzbWV0aG9kXCIsIFwicHJvcGVydHlcIiwgXCJzdGF0aWNtZXRob2RcIl07XHJcblxyXG4gICAgICAgIC8vIHRoaXMudHJhY2UuY2xpY2sodGhpcy5idWlsZFRyYWNlVGFibGUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdW1lIGEgc2V0IG9mIHZhcmlhYmxlcyB0cmFjZWQgZnJvbSB0aGUgZXhlY3V0aW9uIGFuZCBwYXJzZSBvdXQgYW55XHJcbiAgICAgKiBnbG9iYWwgdmFyaWFibGVzIGFuZCBtb2R1bGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBhIG1hcHBpbmcgb2YgdmFyaWFibGUgbmFtZXMgdG8gdGhlaXIgU2t1cHQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHBhcnNlR2xvYmFscyh2YXJpYWJsZXMpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IG1vZHVsZXMgPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnRyYWNlRXhlY3V0aW9uKCkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdmFyaWFibGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YXJpYWJsZXNbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSUdOT1JFRF9HTE9CQUxTLmluZGV4T2YocHJvcGVydHkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkucmVwbGFjZShcIl8kcnckXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiXyRybiRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnNlZDtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSBCbG9ja1B5VHJhY2UucGFyc2VWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSB7XCJuYW1lXCI6IHByb3BlcnR5LCBcInR5cGVcIjogXCJVbmtub3duXCIsIFwidmFsdWVcIjogdmFsdWUudG9TdHJpbmcoKX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBTay5idWlsdGluLm1vZHVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVzLnB1c2godmFsdWUuJGQuX19uYW1lX18udik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XCJwcm9wZXJ0aWVzXCI6IHJlc3VsdCwgXCJtb2R1bGVzXCI6IG1vZHVsZXN9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYSBTa3VscHQgdmFsdWUgaW50byBhIG1vcmUgZWFzaWx5IHByaW50YWJsZSBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgLSB0aGUgc2t1bHB0IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSwgZnVsbExlbmd0aCkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUuY29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmZ1bmM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGdW5jdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlLmZ1bmNfY29kZS5jb192YXJuYW1lcyAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIEFyZ3VtZW50czogXCIrdmFsdWUuZnVuY19jb2RlLmNvX3Zhcm5hbWVzLmpvaW4oXCIsIFwiKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBObyBhcmd1bWVudHNcIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5tb2R1bGU6IHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uc3RyOlxyXG4gICAgICAgICAgICAgICAgaWYgKGZ1bGxMZW5ndGggfHwgdmFsdWUudi5sZW5ndGggPD0gMzIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiW1wiK3ZhbHVlLnNxJGxlbmd0aCgpK1wiIGNoYXJhY3RlcnMgbm90IHNob3duXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm5vbmU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmJvb2w6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCb29sZWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ubWJlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiID09PSB2YWx1ZS5za1R5cGUgPyBcIkludGVnZXJcIjogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uaW50XzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkludGVnZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmZsb2F0XzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi50dXBsZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlR1cGxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5saXN0OlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnYubGVuZ3RoIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhhY3RfdmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiWy4uLiBcIit2YWx1ZS52Lmxlbmd0aCtcIiBlbGVtZW50cyAuLi5dXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhhY3RfdmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZGljdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkRpY3Rpb25hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogdmFsdWUgJSAxID09PSAwID8gXCJJbnRlZ2VyXCIgOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTdHJpbmc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIEJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCb29sZWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAodmFsdWUgPyBcIlRydWVcIjogXCJGYWxzZVwiKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB2YWx1ZS50cCRuYW1lID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbHVlLnRwJG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kciA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gVE9ETzogdmlld0V4YWN0VmFsdWUiLCIvKipcbiAqIERldGVybWluZXMgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIGxpc3QuXG4gKiBAcGFyYW0ge2FueXRoaW5nfSBuZWVkbGUgLSBUaGUgZWxlbWVudCB0byBsb29rIGZvci5cbiAqIEBwYXJhbSB7QXJyYXl9IGhheXN0YWNrIC0gVGhlIGxpc3QgdG8gc2VhcmNoLlxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgZWxlbWVudCBleGlzdHNcbiAqL1xuZnVuY3Rpb24gYXJyYXlDb250YWlucyhuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSA+IC0xO1xufVxuXG4vKipcbiAqIFJlbW92ZSBkdXBsaWNhdGUgdmFsdWVzIGZyb20gYW4gYXJyYXksIHByZXNlcnZpbmcgb3JkZXIuXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5LCBzbyBpcyBub24tZGVzdHJ1Y3RpdmUuXG4gKiBDb3VydGVzeTpcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE1ODQzNzAvaG93LXRvLW1lcmdlLXR3by1hcnJheXMtaW4tamF2YXNjcmlwdC1hbmQtZGUtZHVwbGljYXRlLWl0ZW1zXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBUaGUgYXJyYXkgdG8gdW5pcXVpZnkuIEVsZW1lbnRzIGNvbXBhcmVkIHdpdGggPT09LlxuICovXG5mdW5jdGlvbiBhcnJheVVuaXF1ZShhcnJheSkge1xuICAgIHZhciBhID0gYXJyYXkuY29uY2F0KCk7XG4gICAgZm9yKHZhciBpPTA7IGk8YS5sZW5ndGg7ICsraSkge1xuICAgICAgICBmb3IodmFyIGo9aSsxOyBqPGEubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGlmKGFbaV0gPT09IGFbal0pIHthLnNwbGljZShqLS0sIDEpO31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhO1xufVxuXG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIGZvciBleHRlbmRpbmcgYW4gYXJyYXkgYmFzZWRcbiAqIG9uIGFuIFwiYWRkQXJyYXlcIiBhbmQgXCJyZW1vdmVBcnJheVwiLiBBbnkgZWxlbWVudFxuICogZm91bmQgaW4gcmVtb3ZlQXJyYXkgaXMgcmVtb3ZlZCBmcm9tIHRoZSBmaXJzdCBhcnJheVxuICogYW5kIGFsbCB0aGUgZWxlbWVudHMgb2YgYWRkQXJyYXkgYXJlIGFkZGVkLlxuICogQW55IGR1cGxpY2F0ZSBpdGVtcyBhcmUgcmVtb3ZlZC5cbiAqIENyZWF0ZXMgYSBuZXcgYXJyYXksIHNvIGlzIG5vbi1kZXN0cnVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIHRoZSBhcnJheSB0byBtYW5pcHVsYXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhZGRBcnJheSAtIHRoZSBlbGVtZW50cyB0byBhZGQgdG8gdGhlIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSByZW1vdmVBcnJheSAtIHRoZSBlbGVtZW50cyB0byByZW1vdmUgZnJvbSB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbW9kaWZpZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gZXhwYW5kQXJyYXkoYXJyYXksIGFkZEFycmF5LCByZW1vdmVBcnJheSkge1xuICAgIHZhciBjb3B5QXJyYXkgPSBhcnJheS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlQXJyYXkuaW5kZXhPZihpdGVtKSA9PT0gLTE7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycmF5VW5pcXVlKGNvcHlBcnJheS5jb25jYXQoYWRkQXJyYXkpKTtcbn1cblxuLyoqXG4gKiBEZWVwbHkgY2xvbmVzIGEgbm9kZVxuICogQHBhcmFtIHtOb2RlfSBub2RlIEEgbm9kZSB0byBjbG9uZVxuICogQHJldHVybiB7Tm9kZX0gQSBjbG9uZSBvZiB0aGUgZ2l2ZW4gbm9kZSBhbmQgYWxsIGl0cyBjaGlsZHJlblxuICovXG5mdW5jdGlvbiBjbG9uZU5vZGUobm9kZSkge1xuICAgIC8vIElmIHRoZSBub2RlIGlzIGEgdGV4dCBub2RlLCB0aGVuIHJlLWNyZWF0ZSBpdCByYXRoZXIgdGhhbiBjbG9uZSBpdFxuICAgIHZhciBjbG9uZSA9IG5vZGUubm9kZVR5cGUgPT0gMyA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUubm9kZVZhbHVlKSA6IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiBcbiAgICAvLyBSZWN1cnNlICAgICBcbiAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUoY2hpbGQpIHtcbiAgICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQoY2xvbmVOb2RlKGNoaWxkKSk7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgICBcbiAgICByZXR1cm4gY2xvbmU7XG59XG5cbi8qKlxuICogSW5kZW50cyB0aGUgZ2l2ZW4gc3RyaW5nIGJ5IDQgc3BhY2VzLiBUaGlzIGNvcnJlY3RseSBoYW5kbGVzIG11bHRpLWxpbmUgc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBiZSBtYW5pcHVsYXRlZC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgd2l0aCBmb3VyIHNwYWNlcyBhZGRlZCBhdCB0aGUgc3RhcnQgb2YgZXZlcnkgbmV3IGxpbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmRlbnQoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eKD89LikvZ20sIFwiICAgIFwiKTtcbn1cblxuLyoqXG4gKiBUdXJucyBzcGFjZXMgaW50byB1bmRlcnNjb3JlcyBpbiB0aGUgc3RyaW5nLCBtYWtlcyBpdCBsb3dlcmNhc2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gdGhlIHN0cmluZyB0byBiZSBtYW5pcHVsYXRlZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsdWcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgXCJfXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBbYG1pbmAsIGBtYXhgXS5cbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBsb3dlc3QgcG9zc2libGUgaW50ZWdlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgaGlnaGVzdCBwb3NzaWJsZSBpbnRlZ2VyIChpbmNsdXNpdmUpLlxuICogQHJldHVybnMge251bWJlcn0gQSByYW5kb20gaW50ZWdlci5cbiAqL1xuZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW4sbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4LW1pbisxKSttaW4pO1xufVxuXG4vKipcbiAqIEVuY29kZXMgc29tZSB0ZXh0IHNvIHRoYXQgaXQgY2FuIGJlIHNhZmVseSB3cml0dGVuIGludG8gYW4gSFRNTCBib3guXG4gKiBUaGlzIGluY2x1ZGVzIHJlcGxhY2luZyBzcGVjaWFsIEhUTUwgY2hhcmFjdGVycyAoJiwgPCwgPiwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSB0ZXh0IHRvIGJlIGNvbnZlcnRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEhUTUwtc2FmZSB0ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlSFRNTChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKVxuICAgICAgICAucmVwbGFjZSgvPC9nLCBcIiZsdDtcIilcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKVxuICAgICAgICAucmVwbGFjZSgvJy9nLCBcIiZhcG9zO1wiKTtcbn1cblxuLyoqXG4gKiBTaHVmZmxlIHRoZSBibG9ja3MgaW4gdGhlIHdvcmtzcGFjZVxuICovXG5pZiAodHlwZW9mIEJsb2NrbHkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBCbG9ja2x5LldvcmtzcGFjZVN2Zy5wcm90b3R5cGUuc2h1ZmZsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWV0cmljcyA9IHRoaXMuZ2V0TWV0cmljcygpO1xuICAgICAgICB2YXIgd2lkdGggPSBtZXRyaWNzLnZpZXdXaWR0aCAvIDIsXG4gICAgICAgICAgICBoZWlnaHQgPSBtZXRyaWNzLnZpZXdIZWlnaHQ7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmdldFRvcEJsb2NrcyhmYWxzZSk7XG4gICAgICAgIHZhciB5ID0gNSwgeCA9IDAsXG4gICAgICAgICAgICBtYXhpbWFsX2luY3JlYXNlID0gaGVpZ2h0L2Jsb2Nrcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vIEdldCBhIGJsb2NrXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IGJsb2NrLmdldFJlbGF0aXZlVG9TdXJmYWNlWFkoKTtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICB4ID0gNTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeCA9IC1wcm9wZXJ0aWVzLngrcmFuZG9tSW50ZWdlcigxMCwgd2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2subW92ZUJ5KHgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgIC1wcm9wZXJ0aWVzLnkreSk7XG4gICAgICAgICAgICB5ID0geSArIHJhbmRvbUludGVnZXIoNSwgbWF4aW1hbF9pbmNyZWFzZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKipcbiAqIE1vdmUgZWxlbWVudHMgZnJvbSBvbmUgYXJyYXkgdG8gYW5vdGhlciBiYXNlZCBvbiBhIGNvbmRpdGlvbmFsIGNoZWNrLlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzE4ODc5NjcvamF2YXNjcmlwdC1tb3ZlLW9iamVjdHMtZnJvbS1vbmUtYXJyYXktdG8tYW5vdGhlci1iZXN0LWFwcHJvYWNoXG4gKi9cbmZ1bmN0aW9uIG1vdmVFbGVtZW50cyhzb3VyY2UsIHRhcmdldCwgbW92ZUNoZWNrKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzb3VyY2VbaV07XG4gICAgICAgIGlmIChtb3ZlQ2hlY2soZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHNvdXJjZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gb2JqZWN0c1xuICogVE9ETzogbWFrZSB0aGlzIHNvIHdlIGRvbid0IGhhdmUgdG8gZXhwbGljaXRseSBwdXQgb3V0IGV2ZXJ5IG9wdGlvblxuICogICAgICAgICAgb25lIHBvc3NpYmxlIHRoaW5nIHdlIGNvdWxkIGRvIGlzIGdldCBhIHN0cmluZyB2ZXJzaW9uIG9mIHRoZSBcbiAqICAgICAgICAgIG9mIHRoZSBjb25zdHJ1Y3RvciBhbmQgbG9vayBmb3IgdGhlIHN1YnN0cmluZyBcInJldHVybiBuZXcgU2suYnVpbHRpblwiXG4gKiAgICAgICAgICBCdXQgSSBkb24ndCBrbm93IGhvdyByZWxpYWJsZSB0aGF0IGlzLiAgUmF0aGVyLCBpdCdzIGtpbmQgb2YgaGFja2lzaC5cbiAqICAgICAgICAgIFNob3VsZCB0ZWhvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmlcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGV4YW1pbmVkXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgb25lIG9mIHRoZSBTay5idWlsdGluIHR5cGVzXG4qKi9cbmZ1bmN0aW9uIGlzU2tCdWlsdGluKG9iail7XG4gICAgcmV0dXJuIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmRpY3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmxpc3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnR1cGxlKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5ib29sKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5pbnRfKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5mbG9hdF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnN0cikgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubG5nKTtcbiAgICAvL3ZhciBjb25zX3N0ciA9IG9iai5jb25zdHJ1Y3RvciArIFwiXCI7XG4gICAgLy9yZXR1cm4gY29uc19zdHIuaW5kZXhPZihcInJldHVybiBuZXcgU2suYnVpbHRpblwiKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIGlzQXN0Tm9kZShvYmope1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgXCJfYXN0bmFtZVwiIGluIG9iajtcbn1cblxuLyoqXG4gKiBTaG91bGQgdGhlb3JldGljYWxseSBiZWxvbmcgaW4gU2suZmZpLCBidXQgSSBwdXQgaXQgaGVyZSBpbnN0ZWFkIHRvIG5vdCBtZXNzIHVwIHRoZSBza3VscHQgZmlsZXNcbiAqIGxpa2UgdGhlIG5vcm1hbCBTay5mZmkucmVtYXBUb1B5LCBpdCBkb2Vzbid0IHdvcmsgZm9yIGZ1bmN0aW9ucyBvciBtb3JlIGNvbXBsZXggb2JqZWN0cywgYnV0IGl0IGhhbmRsZXNcbiAqIGNhc2VzIHdoZXJlIHRoZSB0eXBlcyBpbiBvYmogYXJlIGEgbWl4IG9mIHB5dGhvbiBTSU1QTEUgb2JqZWN0cyBhbmQgU0lNUExFIG5vcm1hbCBqYXZhc2NyaXB0IG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGNvbnZlcnRlZFxuICogQHJldHVybiB7U2suYnVpbHRpbi4/Pz99IC0gcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBweXRob24gb2JqZWN0LCBkcm9wcGluZyBhbGwgZnVuY3Rpb25zIGFuZCB0aGluZ3MgaXQgY2FuJ3QgY29udmVydFxuKiovXG5mdW5jdGlvbiBtaXhlZFJlbWFwVG9QeShvYmope1xuICAgIHZhciBrO1xuICAgIHZhciBrdnM7XG4gICAgdmFyIGk7XG4gICAgdmFyIGFycjtcbiAgICAvL0BUT0RPOiBzaG91bGQgdGhlb3JldGljYWxseSBjaGVjayBpZiB0aGUgb2JqZWN0IGlzIGEgcHlob24gZGljdCBvciBhcnJheSB3aXRoIGpzIG9iamVjdHNcbiAgICBpZiAoaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFscmVhZHkgcHl0aG9uIHJlYWR5XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFjdHVhbGx5IGEgamF2YXNjcmlwdCBhcnJheVxuICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgLy9mb3IgZWFjaCBvYmplY3QsIGNvbnZlcnQgaXQgdG8gYSBweXRob24gb2JqZWN0IGlmIGl0IGlzbid0IG9uZSBhbHJlYWR5XG4gICAgICAgICAgICB2YXIgc3VidmFsID0gb2JqW2ldO1xuICAgICAgICAgICAgaWYoIWlzU2tCdWlsdGluKHN1YnZhbCkpe1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKG1peGVkUmVtYXBUb1B5KHN1YnZhbCkpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc3VidmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChhcnIpO1xuICAgIH0gZWxzZSBpZiAob2JqID09PSBudWxsKSB7Ly9udWxsIG9iamVjdFxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZighaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgICAgICAvL2Fzc3VtaW5nIGl0J3MgYSBzdGFuZGFyZCBkaWN0aW9uYXJ5XG4gICAgICAgICAgICBrdnMgPSBbXTsvL1NrLmJ1aWx0aW4uZGljdCB1c2VzIGFuIGFycmF5IG9mIGtleS12YWx1ZSxrZXktdmFsdWUuLi5cbiAgICAgICAgICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAvL2NvbnZlcnQgdGhlIGtleSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShrKSk7XG4gICAgICAgICAgICAgICAgLy9jb3ZlcnQgY29ycmVzcG9uZGluZyB2YWx1ZSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShvYmpba10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY3JlYXRlIHRoZSBuZXcgZGljdGlvbmFyeVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmRpY3Qoa3ZzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4uYXNzayQob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5ib29sKG9iaik7XG4gICAgfSBlbHNlIGlmKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKG9iai5uYW1lKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X187Il0sInNvdXJjZVJvb3QiOiIifQ==