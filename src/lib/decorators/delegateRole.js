"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invokeRole = exports.executeRoleMethod = exports.delegateRole = void 0;
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _reactant = require("reactant");
var _roleDelegation = require("../roleDelegation");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } /* eslint-disable @typescript-eslint/no-explicit-any */
var roleMethods = new WeakMap();

/** Execute the undecorated role method after targeted delivery. */
var executeRoleMethod = exports.executeRoleMethod = function executeRoleMethod(target, key, args) {
  var prototype = Object.getPrototypeOf(target);
  while (prototype) {
    var _roleMethods$get;
    var _method = (_roleMethods$get = roleMethods.get(prototype)) === null || _roleMethods$get === void 0 ? void 0 : _roleMethods$get.get(key);
    if (_method) return _method.apply(target, args);
    prototype = Object.getPrototypeOf(prototype);
  }
  throw new Error("'".concat(key, "' is not a role-delegated method."));
};

/** Route a method to the current owners of one named role. */
var delegateRole = exports.delegateRole = function delegateRole(roleOrDefinition) {
  return function (target, key, descriptor) {
    var _roleMethods$get2;
    var method = descriptor.value;
    if (!method) throw new Error("'".concat(key, "' must decorate a method."));
    var methods = (_roleMethods$get2 = roleMethods.get(target)) !== null && _roleMethods$get2 !== void 0 ? _roleMethods$get2 : new Map();
    methods.set(key, method);
    roleMethods.set(target, methods);
    descriptor.value = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _len,
        args,
        _key,
        invocation,
        _getRef$modules,
        _portManager,
        _getRef,
        container,
        identifier,
        modules,
        portManager,
        role,
        _args = arguments;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args[_key];
            }
            invocation = args.at(-1);
            if (!(0, _roleDelegation.isRoleInvocation)(invocation)) {
              _context.n = 2;
              break;
            }
            _portManager = (_getRef$modules = (0, _reactant.getRef)(this).modules) === null || _getRef$modules === void 0 ? void 0 : _getRef$modules.PortManager;
            if (_portManager !== null && _portManager !== void 0 && _portManager.isRoleInvocationCurrent(invocation.role, invocation.revision)) {
              _context.n = 1;
              break;
            }
            throw new _roleDelegation.RoleFencedError(invocation.role);
          case 1:
            return _context.a(2, method.apply(this, args.slice(0, -1)));
          case 2:
            _getRef = (0, _reactant.getRef)(this), container = _getRef.container, identifier = _getRef.identifier, modules = _getRef.modules;
            if (container) {
              _context.n = 3;
              break;
            }
            return _context.a(2, method.apply(this, args));
          case 3:
            portManager = modules === null || modules === void 0 ? void 0 : modules.PortManager;
            if (portManager) {
              _context.n = 4;
              break;
            }
            throw new Error('PortManager is not registered.');
          case 4:
            role = typeof roleOrDefinition === 'string' ? roleOrDefinition : roleOrDefinition.role;
            return _context.a(2, portManager.invokeRole(role, identifier, key, args));
        }
      }, _callee, this);
    }));
    return descriptor;
  };
};

/** Imperative equivalent of {@link delegateRole}. */
var invokeRole = exports.invokeRole = function invokeRole(module, method, args, options) {
  var _getRef2 = (0, _reactant.getRef)(module),
    container = _getRef2.container,
    identifier = _getRef2.identifier,
    modules = _getRef2.modules;
  if (!container) return Promise.resolve(module[method].apply(module, _toConsumableArray(args)));
  var portManager = modules === null || modules === void 0 ? void 0 : modules.PortManager;
  if (!portManager) return Promise.reject(new Error('PortManager is not registered.'));
  return portManager.invokeRole(options.role, identifier, method, args, options);
};
//# sourceMappingURL=delegateRole.js.map
