'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createLogic = createLogic;

var _effects = require('redux-saga/effects');

var _reselect = require('reselect');

var _reducer = require('./reducer');

var _selectors = require('./selectors');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logic = function () {
  function Logic() {
    _classCallCheck(this, Logic);

    this.path = function () {
      return [];
    };

    this.selector = function (state) {
      return state;
    };

    this.constants = function () {
      return {};
    };

    this.actions = function () {
      return {};
    };

    this.structure = function () {
      return {};
    };

    this.reducer = function (_ref) {
      var path = _ref.path;
      var structure = _ref.structure;
      return (0, _reducer.createStructureReducer)(path, structure);
    };

    this.selectors = function (_ref2) {
      var selectors = _ref2.selectors;
      return selectors;
    };
  }

  _createClass(Logic, [{
    key: 'init',
    value: function init() {
      var object = {};
      object.path = this.path();
      object.selector = function (state) {
        return (0, _selectors.pathSelector)(object.path, state);
      };
      object.constants = this.constants(object);
      object.actions = this.actions(object);
      object.structure = this.structure(object);
      object.reducer = this.reducer(object);
      object.selectors = (0, _selectors.createSelectors)(object.path, object.structure);

      this.selectors(_extends({}, object, { addSelector: this.addSelector.bind(object) }));

      Object.assign(this, object);

      return this;
    }
  }, {
    key: 'addSelector',
    value: function addSelector(name, type, args, func) {
      this.structure[name] = { type: type };
      this.selectors[name] = _reselect.createSelector.apply(undefined, _toConsumableArray(args).concat([func]));
    }
  }, {
    key: 'get',
    value: regeneratorRuntime.mark(function get(key) {
      return regeneratorRuntime.wrap(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _effects.select)(key ? this.selectors[key] : this.selector);

            case 2:
              return _context.abrupt('return', _context.sent);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, get, this);
    })
  }, {
    key: 'fetch',
    value: regeneratorRuntime.mark(function fetch() {
      var results,
          keys,
          i,
          _args2 = arguments;
      return regeneratorRuntime.wrap(function fetch$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              results = {};
              keys = Array.isArray(_args2[0]) ? _args2[0] : _args2;
              i = 0;

            case 3:
              if (!(i < keys.length)) {
                _context2.next = 10;
                break;
              }

              _context2.next = 6;
              return this.get(keys[i]);

            case 6:
              results[keys[i]] = _context2.sent;

            case 7:
              i++;
              _context2.next = 3;
              break;

            case 10:
              return _context2.abrupt('return', results);

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, fetch, this);
    })
  }]);

  return Logic;
}();

exports.default = Logic;

var KeaLogic = function () {
  function KeaLogic(args) {
    var _this = this;

    _classCallCheck(this, KeaLogic);

    console.error('[KEA-LOGIC] createLogic is deprecated and will be removed soon');
    console.trace();

    Object.keys(args).forEach(function (key) {
      _this[key] = args[key];
    });

    if (!this.selector && this.path) {
      this.selector = function (state) {
        return (0, _selectors.pathSelector)(_this.path, state);
      };
    }
  }

  _createClass(KeaLogic, [{
    key: 'get',
    value: regeneratorRuntime.mark(function get(key) {
      return regeneratorRuntime.wrap(function get$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _effects.select)(key ? this.selectors[key] : this.selector);

            case 2:
              return _context3.abrupt('return', _context3.sent);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, get, this);
    })
  }, {
    key: 'fetch',
    value: regeneratorRuntime.mark(function fetch() {
      var results,
          keys,
          i,
          _args4 = arguments;
      return regeneratorRuntime.wrap(function fetch$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              results = {};
              keys = Array.isArray(_args4[0]) ? _args4[0] : _args4;
              i = 0;

            case 3:
              if (!(i < keys.length)) {
                _context4.next = 10;
                break;
              }

              _context4.next = 6;
              return this.get(keys[i]);

            case 6:
              results[keys[i]] = _context4.sent;

            case 7:
              i++;
              _context4.next = 3;
              break;

            case 10:
              return _context4.abrupt('return', results);

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, fetch, this);
    })
  }]);

  return KeaLogic;
}();

function createLogic(args) {
  return new KeaLogic(args);
}