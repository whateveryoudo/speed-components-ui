import {
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-IQIPIT2A.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-V4OQ3NZ2.js";

// node_modules/.pnpm/@lk77+vue3-color@3.0.6/node_modules/@lk77/vue3-color/dist/vue3-color.common.js
var require_vue3_color_common = __commonJS({
  "node_modules/.pnpm/@lk77+vue3-color@3.0.6/node_modules/@lk77/vue3-color/dist/vue3-color.common.js"(exports, module) {
    (function() {
      var __webpack_modules__ = {
        /***/
        9662: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var isCallable = __webpack_require__2(614);
            var tryToString = __webpack_require__2(6330);
            var TypeError2 = global.TypeError;
            module2.exports = function(argument) {
              if (isCallable(argument)) return argument;
              throw TypeError2(tryToString(argument) + " is not a function");
            };
          }
        ),
        /***/
        6077: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var isCallable = __webpack_require__2(614);
            var String2 = global.String;
            var TypeError2 = global.TypeError;
            module2.exports = function(argument) {
              if (typeof argument == "object" || isCallable(argument)) return argument;
              throw TypeError2("Can't set " + String2(argument) + " as a prototype");
            };
          }
        ),
        /***/
        9670: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var isObject = __webpack_require__2(111);
            var String2 = global.String;
            var TypeError2 = global.TypeError;
            module2.exports = function(argument) {
              if (isObject(argument)) return argument;
              throw TypeError2(String2(argument) + " is not an object");
            };
          }
        ),
        /***/
        1318: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toIndexedObject = __webpack_require__2(5656);
            var toAbsoluteIndex = __webpack_require__2(1400);
            var lengthOfArrayLike = __webpack_require__2(6244);
            var createMethod = function(IS_INCLUDES) {
              return function($this, el, fromIndex) {
                var O = toIndexedObject($this);
                var length = lengthOfArrayLike(O);
                var index = toAbsoluteIndex(fromIndex, length);
                var value;
                if (IS_INCLUDES && el != el) while (length > index) {
                  value = O[index++];
                  if (value != value) return true;
                }
                else for (; length > index; index++) {
                  if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                }
                return !IS_INCLUDES && -1;
              };
            };
            module2.exports = {
              // `Array.prototype.includes` method
              // https://tc39.es/ecma262/#sec-array.prototype.includes
              includes: createMethod(true),
              // `Array.prototype.indexOf` method
              // https://tc39.es/ecma262/#sec-array.prototype.indexof
              indexOf: createMethod(false)
            };
          }
        ),
        /***/
        4326: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var uncurryThis = __webpack_require__2(1702);
            var toString = uncurryThis({}.toString);
            var stringSlice = uncurryThis("".slice);
            module2.exports = function(it) {
              return stringSlice(toString(it), 8, -1);
            };
          }
        ),
        /***/
        648: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var TO_STRING_TAG_SUPPORT = __webpack_require__2(1694);
            var isCallable = __webpack_require__2(614);
            var classofRaw = __webpack_require__2(4326);
            var wellKnownSymbol = __webpack_require__2(5112);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var Object2 = global.Object;
            var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
              return arguments;
            }()) == "Arguments";
            var tryGet = function(it, key) {
              try {
                return it[key];
              } catch (error) {
              }
            };
            module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
              var O, tag, result;
              return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object2(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
            };
          }
        ),
        /***/
        7741: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var uncurryThis = __webpack_require__2(1702);
            var replace = uncurryThis("".replace);
            var TEST = function(arg) {
              return String(Error(arg).stack);
            }("zxcasd");
            var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
            var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
            module2.exports = function(stack, dropEntries) {
              if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string") {
                while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
              }
              return stack;
            };
          }
        ),
        /***/
        9920: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var hasOwn = __webpack_require__2(2597);
            var ownKeys = __webpack_require__2(3887);
            var getOwnPropertyDescriptorModule = __webpack_require__2(1236);
            var definePropertyModule = __webpack_require__2(3070);
            module2.exports = function(target, source, exceptions) {
              var keys = ownKeys(source);
              var defineProperty = definePropertyModule.f;
              var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
                  defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                }
              }
            };
          }
        ),
        /***/
        8880: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var DESCRIPTORS = __webpack_require__2(9781);
            var definePropertyModule = __webpack_require__2(3070);
            var createPropertyDescriptor = __webpack_require__2(9114);
            module2.exports = DESCRIPTORS ? function(object, key, value) {
              return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
            } : function(object, key, value) {
              object[key] = value;
              return object;
            };
          }
        ),
        /***/
        9114: (
          /***/
          function(module2) {
            module2.exports = function(bitmap, value) {
              return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value
              };
            };
          }
        ),
        /***/
        9781: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var fails = __webpack_require__2(7293);
            module2.exports = !fails(function() {
              return Object.defineProperty({}, 1, { get: function() {
                return 7;
              } })[1] != 7;
            });
          }
        ),
        /***/
        317: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var isObject = __webpack_require__2(111);
            var document2 = global.document;
            var EXISTS = isObject(document2) && isObject(document2.createElement);
            module2.exports = function(it) {
              return EXISTS ? document2.createElement(it) : {};
            };
          }
        ),
        /***/
        8113: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var getBuiltIn = __webpack_require__2(5005);
            module2.exports = getBuiltIn("navigator", "userAgent") || "";
          }
        ),
        /***/
        7392: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var userAgent = __webpack_require__2(8113);
            var process2 = global.process;
            var Deno = global.Deno;
            var versions = process2 && process2.versions || Deno && Deno.version;
            var v8 = versions && versions.v8;
            var match, version;
            if (v8) {
              match = v8.split(".");
              version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
            }
            if (!version && userAgent) {
              match = userAgent.match(/Edge\/(\d+)/);
              if (!match || match[1] >= 74) {
                match = userAgent.match(/Chrome\/(\d+)/);
                if (match) version = +match[1];
              }
            }
            module2.exports = version;
          }
        ),
        /***/
        748: (
          /***/
          function(module2) {
            module2.exports = [
              "constructor",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "toLocaleString",
              "toString",
              "valueOf"
            ];
          }
        ),
        /***/
        2914: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var fails = __webpack_require__2(7293);
            var createPropertyDescriptor = __webpack_require__2(9114);
            module2.exports = !fails(function() {
              var error = Error("a");
              if (!("stack" in error)) return true;
              Object.defineProperty(error, "stack", createPropertyDescriptor(1, 7));
              return error.stack !== 7;
            });
          }
        ),
        /***/
        2109: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var getOwnPropertyDescriptor = __webpack_require__2(1236).f;
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var redefine = __webpack_require__2(1320);
            var setGlobal = __webpack_require__2(3505);
            var copyConstructorProperties = __webpack_require__2(9920);
            var isForced = __webpack_require__2(4705);
            module2.exports = function(options, source) {
              var TARGET = options.target;
              var GLOBAL = options.global;
              var STATIC = options.stat;
              var FORCED, target, key, targetProperty, sourceProperty, descriptor;
              if (GLOBAL) {
                target = global;
              } else if (STATIC) {
                target = global[TARGET] || setGlobal(TARGET, {});
              } else {
                target = (global[TARGET] || {}).prototype;
              }
              if (target) for (key in source) {
                sourceProperty = source[key];
                if (options.noTargetGet) {
                  descriptor = getOwnPropertyDescriptor(target, key);
                  targetProperty = descriptor && descriptor.value;
                } else targetProperty = target[key];
                FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                if (!FORCED && targetProperty !== void 0) {
                  if (typeof sourceProperty == typeof targetProperty) continue;
                  copyConstructorProperties(sourceProperty, targetProperty);
                }
                if (options.sham || targetProperty && targetProperty.sham) {
                  createNonEnumerableProperty(sourceProperty, "sham", true);
                }
                redefine(target, key, sourceProperty, options);
              }
            };
          }
        ),
        /***/
        7293: (
          /***/
          function(module2) {
            module2.exports = function(exec) {
              try {
                return !!exec();
              } catch (error) {
                return true;
              }
            };
          }
        ),
        /***/
        2104: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var NATIVE_BIND = __webpack_require__2(4374);
            var FunctionPrototype = Function.prototype;
            var apply = FunctionPrototype.apply;
            var call = FunctionPrototype.call;
            module2.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
              return call.apply(apply, arguments);
            });
          }
        ),
        /***/
        4374: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var fails = __webpack_require__2(7293);
            module2.exports = !fails(function() {
              var test = (function() {
              }).bind();
              return typeof test != "function" || test.hasOwnProperty("prototype");
            });
          }
        ),
        /***/
        6916: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var NATIVE_BIND = __webpack_require__2(4374);
            var call = Function.prototype.call;
            module2.exports = NATIVE_BIND ? call.bind(call) : function() {
              return call.apply(call, arguments);
            };
          }
        ),
        /***/
        6530: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var DESCRIPTORS = __webpack_require__2(9781);
            var hasOwn = __webpack_require__2(2597);
            var FunctionPrototype = Function.prototype;
            var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
            var EXISTS = hasOwn(FunctionPrototype, "name");
            var PROPER = EXISTS && (function something() {
            }).name === "something";
            var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
            module2.exports = {
              EXISTS,
              PROPER,
              CONFIGURABLE
            };
          }
        ),
        /***/
        1702: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var NATIVE_BIND = __webpack_require__2(4374);
            var FunctionPrototype = Function.prototype;
            var bind = FunctionPrototype.bind;
            var call = FunctionPrototype.call;
            var uncurryThis = NATIVE_BIND && bind.bind(call, call);
            module2.exports = NATIVE_BIND ? function(fn) {
              return fn && uncurryThis(fn);
            } : function(fn) {
              return fn && function() {
                return call.apply(fn, arguments);
              };
            };
          }
        ),
        /***/
        5005: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var isCallable = __webpack_require__2(614);
            var aFunction = function(argument) {
              return isCallable(argument) ? argument : void 0;
            };
            module2.exports = function(namespace, method) {
              return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
            };
          }
        ),
        /***/
        8173: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var aCallable = __webpack_require__2(9662);
            module2.exports = function(V, P) {
              var func = V[P];
              return func == null ? void 0 : aCallable(func);
            };
          }
        ),
        /***/
        7854: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var check = function(it) {
              return it && it.Math == Math && it;
            };
            module2.exports = // eslint-disable-next-line es/no-global-this -- safe
            check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
            check(typeof self == "object" && self) || check(typeof __webpack_require__2.g == "object" && __webpack_require__2.g) || // eslint-disable-next-line no-new-func -- fallback
            /* @__PURE__ */ function() {
              return this;
            }() || Function("return this")();
          }
        ),
        /***/
        2597: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var uncurryThis = __webpack_require__2(1702);
            var toObject = __webpack_require__2(7908);
            var hasOwnProperty = uncurryThis({}.hasOwnProperty);
            module2.exports = Object.hasOwn || function hasOwn(it, key) {
              return hasOwnProperty(toObject(it), key);
            };
          }
        ),
        /***/
        3501: (
          /***/
          function(module2) {
            module2.exports = {};
          }
        ),
        /***/
        4664: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var DESCRIPTORS = __webpack_require__2(9781);
            var fails = __webpack_require__2(7293);
            var createElement = __webpack_require__2(317);
            module2.exports = !DESCRIPTORS && !fails(function() {
              return Object.defineProperty(createElement("div"), "a", {
                get: function() {
                  return 7;
                }
              }).a != 7;
            });
          }
        ),
        /***/
        8361: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var uncurryThis = __webpack_require__2(1702);
            var fails = __webpack_require__2(7293);
            var classof = __webpack_require__2(4326);
            var Object2 = global.Object;
            var split = uncurryThis("".split);
            module2.exports = fails(function() {
              return !Object2("z").propertyIsEnumerable(0);
            }) ? function(it) {
              return classof(it) == "String" ? split(it, "") : Object2(it);
            } : Object2;
          }
        ),
        /***/
        9587: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var isCallable = __webpack_require__2(614);
            var isObject = __webpack_require__2(111);
            var setPrototypeOf = __webpack_require__2(7674);
            module2.exports = function($this, dummy, Wrapper) {
              var NewTarget, NewTargetPrototype;
              if (
                // it can work only with native `setPrototypeOf`
                setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
                isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
              ) setPrototypeOf($this, NewTargetPrototype);
              return $this;
            };
          }
        ),
        /***/
        2788: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var uncurryThis = __webpack_require__2(1702);
            var isCallable = __webpack_require__2(614);
            var store = __webpack_require__2(5465);
            var functionToString = uncurryThis(Function.toString);
            if (!isCallable(store.inspectSource)) {
              store.inspectSource = function(it) {
                return functionToString(it);
              };
            }
            module2.exports = store.inspectSource;
          }
        ),
        /***/
        8340: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var isObject = __webpack_require__2(111);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            module2.exports = function(O, options) {
              if (isObject(options) && "cause" in options) {
                createNonEnumerableProperty(O, "cause", options.cause);
              }
            };
          }
        ),
        /***/
        9909: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var NATIVE_WEAK_MAP = __webpack_require__2(8536);
            var global = __webpack_require__2(7854);
            var uncurryThis = __webpack_require__2(1702);
            var isObject = __webpack_require__2(111);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var hasOwn = __webpack_require__2(2597);
            var shared = __webpack_require__2(5465);
            var sharedKey = __webpack_require__2(6200);
            var hiddenKeys = __webpack_require__2(3501);
            var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
            var TypeError2 = global.TypeError;
            var WeakMap = global.WeakMap;
            var set, get, has;
            var enforce = function(it) {
              return has(it) ? get(it) : set(it, {});
            };
            var getterFor = function(TYPE) {
              return function(it) {
                var state;
                if (!isObject(it) || (state = get(it)).type !== TYPE) {
                  throw TypeError2("Incompatible receiver, " + TYPE + " required");
                }
                return state;
              };
            };
            if (NATIVE_WEAK_MAP || shared.state) {
              var store = shared.state || (shared.state = new WeakMap());
              var wmget = uncurryThis(store.get);
              var wmhas = uncurryThis(store.has);
              var wmset = uncurryThis(store.set);
              set = function(it, metadata) {
                if (wmhas(store, it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
                metadata.facade = it;
                wmset(store, it, metadata);
                return metadata;
              };
              get = function(it) {
                return wmget(store, it) || {};
              };
              has = function(it) {
                return wmhas(store, it);
              };
            } else {
              var STATE = sharedKey("state");
              hiddenKeys[STATE] = true;
              set = function(it, metadata) {
                if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
                metadata.facade = it;
                createNonEnumerableProperty(it, STATE, metadata);
                return metadata;
              };
              get = function(it) {
                return hasOwn(it, STATE) ? it[STATE] : {};
              };
              has = function(it) {
                return hasOwn(it, STATE);
              };
            }
            module2.exports = {
              set,
              get,
              has,
              enforce,
              getterFor
            };
          }
        ),
        /***/
        614: (
          /***/
          function(module2) {
            module2.exports = function(argument) {
              return typeof argument == "function";
            };
          }
        ),
        /***/
        4705: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var fails = __webpack_require__2(7293);
            var isCallable = __webpack_require__2(614);
            var replacement = /#|\.prototype\./;
            var isForced = function(feature, detection) {
              var value = data[normalize(feature)];
              return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
            };
            var normalize = isForced.normalize = function(string) {
              return String(string).replace(replacement, ".").toLowerCase();
            };
            var data = isForced.data = {};
            var NATIVE = isForced.NATIVE = "N";
            var POLYFILL = isForced.POLYFILL = "P";
            module2.exports = isForced;
          }
        ),
        /***/
        111: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var isCallable = __webpack_require__2(614);
            module2.exports = function(it) {
              return typeof it == "object" ? it !== null : isCallable(it);
            };
          }
        ),
        /***/
        1913: (
          /***/
          function(module2) {
            module2.exports = false;
          }
        ),
        /***/
        2190: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var getBuiltIn = __webpack_require__2(5005);
            var isCallable = __webpack_require__2(614);
            var isPrototypeOf = __webpack_require__2(7976);
            var USE_SYMBOL_AS_UID = __webpack_require__2(3307);
            var Object2 = global.Object;
            module2.exports = USE_SYMBOL_AS_UID ? function(it) {
              return typeof it == "symbol";
            } : function(it) {
              var $Symbol = getBuiltIn("Symbol");
              return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object2(it));
            };
          }
        ),
        /***/
        6244: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toLength = __webpack_require__2(7466);
            module2.exports = function(obj) {
              return toLength(obj.length);
            };
          }
        ),
        /***/
        133: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var V8_VERSION = __webpack_require__2(7392);
            var fails = __webpack_require__2(7293);
            module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
              var symbol = Symbol();
              return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
              !Symbol.sham && V8_VERSION && V8_VERSION < 41;
            });
          }
        ),
        /***/
        8536: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var isCallable = __webpack_require__2(614);
            var inspectSource = __webpack_require__2(2788);
            var WeakMap = global.WeakMap;
            module2.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));
          }
        ),
        /***/
        6277: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toString = __webpack_require__2(1340);
            module2.exports = function(argument, $default) {
              return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
            };
          }
        ),
        /***/
        3070: (
          /***/
          function(__unused_webpack_module, exports2, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var DESCRIPTORS = __webpack_require__2(9781);
            var IE8_DOM_DEFINE = __webpack_require__2(4664);
            var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__2(3353);
            var anObject = __webpack_require__2(9670);
            var toPropertyKey = __webpack_require__2(4948);
            var TypeError2 = global.TypeError;
            var $defineProperty = Object.defineProperty;
            var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            var ENUMERABLE = "enumerable";
            var CONFIGURABLE = "configurable";
            var WRITABLE = "writable";
            exports2.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPropertyKey(P);
              anObject(Attributes);
              if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
                var current = $getOwnPropertyDescriptor(O, P);
                if (current && current[WRITABLE]) {
                  O[P] = Attributes.value;
                  Attributes = {
                    configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                    enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                    writable: false
                  };
                }
              }
              return $defineProperty(O, P, Attributes);
            } : $defineProperty : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPropertyKey(P);
              anObject(Attributes);
              if (IE8_DOM_DEFINE) try {
                return $defineProperty(O, P, Attributes);
              } catch (error) {
              }
              if ("get" in Attributes || "set" in Attributes) throw TypeError2("Accessors not supported");
              if ("value" in Attributes) O[P] = Attributes.value;
              return O;
            };
          }
        ),
        /***/
        1236: (
          /***/
          function(__unused_webpack_module, exports2, __webpack_require__2) {
            var DESCRIPTORS = __webpack_require__2(9781);
            var call = __webpack_require__2(6916);
            var propertyIsEnumerableModule = __webpack_require__2(5296);
            var createPropertyDescriptor = __webpack_require__2(9114);
            var toIndexedObject = __webpack_require__2(5656);
            var toPropertyKey = __webpack_require__2(4948);
            var hasOwn = __webpack_require__2(2597);
            var IE8_DOM_DEFINE = __webpack_require__2(4664);
            var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
              O = toIndexedObject(O);
              P = toPropertyKey(P);
              if (IE8_DOM_DEFINE) try {
                return $getOwnPropertyDescriptor(O, P);
              } catch (error) {
              }
              if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
            };
          }
        ),
        /***/
        8006: (
          /***/
          function(__unused_webpack_module, exports2, __webpack_require__2) {
            var internalObjectKeys = __webpack_require__2(6324);
            var enumBugKeys = __webpack_require__2(748);
            var hiddenKeys = enumBugKeys.concat("length", "prototype");
            exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
              return internalObjectKeys(O, hiddenKeys);
            };
          }
        ),
        /***/
        5181: (
          /***/
          function(__unused_webpack_module, exports2) {
            exports2.f = Object.getOwnPropertySymbols;
          }
        ),
        /***/
        7976: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var uncurryThis = __webpack_require__2(1702);
            module2.exports = uncurryThis({}.isPrototypeOf);
          }
        ),
        /***/
        6324: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var uncurryThis = __webpack_require__2(1702);
            var hasOwn = __webpack_require__2(2597);
            var toIndexedObject = __webpack_require__2(5656);
            var indexOf = __webpack_require__2(1318).indexOf;
            var hiddenKeys = __webpack_require__2(3501);
            var push = uncurryThis([].push);
            module2.exports = function(object, names) {
              var O = toIndexedObject(object);
              var i = 0;
              var result = [];
              var key;
              for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
              while (names.length > i) if (hasOwn(O, key = names[i++])) {
                ~indexOf(result, key) || push(result, key);
              }
              return result;
            };
          }
        ),
        /***/
        5296: (
          /***/
          function(__unused_webpack_module, exports2) {
            "use strict";
            var $propertyIsEnumerable = {}.propertyIsEnumerable;
            var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
            exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
              var descriptor = getOwnPropertyDescriptor(this, V);
              return !!descriptor && descriptor.enumerable;
            } : $propertyIsEnumerable;
          }
        ),
        /***/
        7674: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var uncurryThis = __webpack_require__2(1702);
            var anObject = __webpack_require__2(9670);
            var aPossiblePrototype = __webpack_require__2(6077);
            module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
              var CORRECT_SETTER = false;
              var test = {};
              var setter;
              try {
                setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
                setter(test, []);
                CORRECT_SETTER = test instanceof Array;
              } catch (error) {
              }
              return function setPrototypeOf(O, proto) {
                anObject(O);
                aPossiblePrototype(proto);
                if (CORRECT_SETTER) setter(O, proto);
                else O.__proto__ = proto;
                return O;
              };
            }() : void 0);
          }
        ),
        /***/
        2140: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var call = __webpack_require__2(6916);
            var isCallable = __webpack_require__2(614);
            var isObject = __webpack_require__2(111);
            var TypeError2 = global.TypeError;
            module2.exports = function(input, pref) {
              var fn, val;
              if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
              if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
              if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
              throw TypeError2("Can't convert object to primitive value");
            };
          }
        ),
        /***/
        3887: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var getBuiltIn = __webpack_require__2(5005);
            var uncurryThis = __webpack_require__2(1702);
            var getOwnPropertyNamesModule = __webpack_require__2(8006);
            var getOwnPropertySymbolsModule = __webpack_require__2(5181);
            var anObject = __webpack_require__2(9670);
            var concat = uncurryThis([].concat);
            module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
              var keys = getOwnPropertyNamesModule.f(anObject(it));
              var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
              return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
            };
          }
        ),
        /***/
        1320: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var isCallable = __webpack_require__2(614);
            var hasOwn = __webpack_require__2(2597);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var setGlobal = __webpack_require__2(3505);
            var inspectSource = __webpack_require__2(2788);
            var InternalStateModule = __webpack_require__2(9909);
            var CONFIGURABLE_FUNCTION_NAME = __webpack_require__2(6530).CONFIGURABLE;
            var getInternalState = InternalStateModule.get;
            var enforceInternalState = InternalStateModule.enforce;
            var TEMPLATE = String(String).split("String");
            (module2.exports = function(O, key, value, options) {
              var unsafe = options ? !!options.unsafe : false;
              var simple = options ? !!options.enumerable : false;
              var noTargetGet = options ? !!options.noTargetGet : false;
              var name = options && options.name !== void 0 ? options.name : key;
              var state;
              if (isCallable(value)) {
                if (String(name).slice(0, 7) === "Symbol(") {
                  name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
                }
                if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
                  createNonEnumerableProperty(value, "name", name);
                }
                state = enforceInternalState(value);
                if (!state.source) {
                  state.source = TEMPLATE.join(typeof name == "string" ? name : "");
                }
              }
              if (O === global) {
                if (simple) O[key] = value;
                else setGlobal(key, value);
                return;
              } else if (!unsafe) {
                delete O[key];
              } else if (!noTargetGet && O[key]) {
                simple = true;
              }
              if (simple) O[key] = value;
              else createNonEnumerableProperty(O, key, value);
            })(Function.prototype, "toString", function toString() {
              return isCallable(this) && getInternalState(this).source || inspectSource(this);
            });
          }
        ),
        /***/
        4488: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var TypeError2 = global.TypeError;
            module2.exports = function(it) {
              if (it == void 0) throw TypeError2("Can't call method on " + it);
              return it;
            };
          }
        ),
        /***/
        3505: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var defineProperty = Object.defineProperty;
            module2.exports = function(key, value) {
              try {
                defineProperty(global, key, { value, configurable: true, writable: true });
              } catch (error) {
                global[key] = value;
              }
              return value;
            };
          }
        ),
        /***/
        6200: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var shared = __webpack_require__2(2309);
            var uid = __webpack_require__2(9711);
            var keys = shared("keys");
            module2.exports = function(key) {
              return keys[key] || (keys[key] = uid(key));
            };
          }
        ),
        /***/
        5465: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var setGlobal = __webpack_require__2(3505);
            var SHARED = "__core-js_shared__";
            var store = global[SHARED] || setGlobal(SHARED, {});
            module2.exports = store;
          }
        ),
        /***/
        2309: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var IS_PURE = __webpack_require__2(1913);
            var store = __webpack_require__2(5465);
            (module2.exports = function(key, value) {
              return store[key] || (store[key] = value !== void 0 ? value : {});
            })("versions", []).push({
              version: "3.21.1",
              mode: IS_PURE ? "pure" : "global",
              copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
              license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
              source: "https://github.com/zloirock/core-js"
            });
          }
        ),
        /***/
        1400: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toIntegerOrInfinity = __webpack_require__2(9303);
            var max = Math.max;
            var min = Math.min;
            module2.exports = function(index, length) {
              var integer = toIntegerOrInfinity(index);
              return integer < 0 ? max(integer + length, 0) : min(integer, length);
            };
          }
        ),
        /***/
        5656: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var IndexedObject = __webpack_require__2(8361);
            var requireObjectCoercible = __webpack_require__2(4488);
            module2.exports = function(it) {
              return IndexedObject(requireObjectCoercible(it));
            };
          }
        ),
        /***/
        9303: (
          /***/
          function(module2) {
            var ceil = Math.ceil;
            var floor = Math.floor;
            module2.exports = function(argument) {
              var number = +argument;
              return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
            };
          }
        ),
        /***/
        7466: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toIntegerOrInfinity = __webpack_require__2(9303);
            var min = Math.min;
            module2.exports = function(argument) {
              return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
            };
          }
        ),
        /***/
        7908: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var requireObjectCoercible = __webpack_require__2(4488);
            var Object2 = global.Object;
            module2.exports = function(argument) {
              return Object2(requireObjectCoercible(argument));
            };
          }
        ),
        /***/
        7593: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var call = __webpack_require__2(6916);
            var isObject = __webpack_require__2(111);
            var isSymbol = __webpack_require__2(2190);
            var getMethod = __webpack_require__2(8173);
            var ordinaryToPrimitive = __webpack_require__2(2140);
            var wellKnownSymbol = __webpack_require__2(5112);
            var TypeError2 = global.TypeError;
            var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
            module2.exports = function(input, pref) {
              if (!isObject(input) || isSymbol(input)) return input;
              var exoticToPrim = getMethod(input, TO_PRIMITIVE);
              var result;
              if (exoticToPrim) {
                if (pref === void 0) pref = "default";
                result = call(exoticToPrim, input, pref);
                if (!isObject(result) || isSymbol(result)) return result;
                throw TypeError2("Can't convert object to primitive value");
              }
              if (pref === void 0) pref = "number";
              return ordinaryToPrimitive(input, pref);
            };
          }
        ),
        /***/
        4948: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var toPrimitive = __webpack_require__2(7593);
            var isSymbol = __webpack_require__2(2190);
            module2.exports = function(argument) {
              var key = toPrimitive(argument, "string");
              return isSymbol(key) ? key : key + "";
            };
          }
        ),
        /***/
        1694: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var wellKnownSymbol = __webpack_require__2(5112);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var test = {};
            test[TO_STRING_TAG] = "z";
            module2.exports = String(test) === "[object z]";
          }
        ),
        /***/
        1340: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var classof = __webpack_require__2(648);
            var String2 = global.String;
            module2.exports = function(argument) {
              if (classof(argument) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
              return String2(argument);
            };
          }
        ),
        /***/
        6330: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var String2 = global.String;
            module2.exports = function(argument) {
              try {
                return String2(argument);
              } catch (error) {
                return "Object";
              }
            };
          }
        ),
        /***/
        9711: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var uncurryThis = __webpack_require__2(1702);
            var id = 0;
            var postfix = Math.random();
            var toString = uncurryThis(1 .toString);
            module2.exports = function(key) {
              return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
            };
          }
        ),
        /***/
        3307: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var NATIVE_SYMBOL = __webpack_require__2(133);
            module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
          }
        ),
        /***/
        3353: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var DESCRIPTORS = __webpack_require__2(9781);
            var fails = __webpack_require__2(7293);
            module2.exports = DESCRIPTORS && fails(function() {
              return Object.defineProperty(function() {
              }, "prototype", {
                value: 42,
                writable: false
              }).prototype != 42;
            });
          }
        ),
        /***/
        5112: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var global = __webpack_require__2(7854);
            var shared = __webpack_require__2(2309);
            var hasOwn = __webpack_require__2(2597);
            var uid = __webpack_require__2(9711);
            var NATIVE_SYMBOL = __webpack_require__2(133);
            var USE_SYMBOL_AS_UID = __webpack_require__2(3307);
            var WellKnownSymbolsStore = shared("wks");
            var Symbol2 = global.Symbol;
            var symbolFor = Symbol2 && Symbol2["for"];
            var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
            module2.exports = function(name) {
              if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
                var description = "Symbol." + name;
                if (NATIVE_SYMBOL && hasOwn(Symbol2, name)) {
                  WellKnownSymbolsStore[name] = Symbol2[name];
                } else if (USE_SYMBOL_AS_UID && symbolFor) {
                  WellKnownSymbolsStore[name] = symbolFor(description);
                } else {
                  WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
                }
              }
              return WellKnownSymbolsStore[name];
            };
          }
        ),
        /***/
        9191: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            "use strict";
            var getBuiltIn = __webpack_require__2(5005);
            var hasOwn = __webpack_require__2(2597);
            var createNonEnumerableProperty = __webpack_require__2(8880);
            var isPrototypeOf = __webpack_require__2(7976);
            var setPrototypeOf = __webpack_require__2(7674);
            var copyConstructorProperties = __webpack_require__2(9920);
            var inheritIfRequired = __webpack_require__2(9587);
            var normalizeStringArgument = __webpack_require__2(6277);
            var installErrorCause = __webpack_require__2(8340);
            var clearErrorStack = __webpack_require__2(7741);
            var ERROR_STACK_INSTALLABLE = __webpack_require__2(2914);
            var IS_PURE = __webpack_require__2(1913);
            module2.exports = function(FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
              var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
              var path = FULL_NAME.split(".");
              var ERROR_NAME = path[path.length - 1];
              var OriginalError = getBuiltIn.apply(null, path);
              if (!OriginalError) return;
              var OriginalErrorPrototype = OriginalError.prototype;
              if (!IS_PURE && hasOwn(OriginalErrorPrototype, "cause")) delete OriginalErrorPrototype.cause;
              if (!FORCED) return OriginalError;
              var BaseError = getBuiltIn("Error");
              var WrappedError = wrapper(function(a, b) {
                var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, void 0);
                var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
                if (message !== void 0) createNonEnumerableProperty(result, "message", message);
                if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(result, "stack", clearErrorStack(result.stack, 2));
                if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
                if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
                return result;
              });
              WrappedError.prototype = OriginalErrorPrototype;
              if (ERROR_NAME !== "Error") {
                if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
                else copyConstructorProperties(WrappedError, BaseError, { name: true });
              }
              copyConstructorProperties(WrappedError, OriginalError);
              if (!IS_PURE) try {
                if (OriginalErrorPrototype.name !== ERROR_NAME) {
                  createNonEnumerableProperty(OriginalErrorPrototype, "name", ERROR_NAME);
                }
                OriginalErrorPrototype.constructor = WrappedError;
              } catch (error) {
              }
              return WrappedError;
            };
          }
        ),
        /***/
        1703: (
          /***/
          function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
            var $ = __webpack_require__2(2109);
            var global = __webpack_require__2(7854);
            var apply = __webpack_require__2(2104);
            var wrapErrorConstructorWithCause = __webpack_require__2(9191);
            var WEB_ASSEMBLY = "WebAssembly";
            var WebAssembly = global[WEB_ASSEMBLY];
            var FORCED = Error("e", { cause: 7 }).cause !== 7;
            var exportGlobalErrorCauseWrapper = function(ERROR_NAME, wrapper) {
              var O = {};
              O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
              $({ global: true, forced: FORCED }, O);
            };
            var exportWebAssemblyErrorCauseWrapper = function(ERROR_NAME, wrapper) {
              if (WebAssembly && WebAssembly[ERROR_NAME]) {
                var O = {};
                O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + "." + ERROR_NAME, wrapper, FORCED);
                $({ target: WEB_ASSEMBLY, stat: true, forced: FORCED }, O);
              }
            };
            exportGlobalErrorCauseWrapper("Error", function(init) {
              return function Error2(message) {
                return apply(init, this, arguments);
              };
            });
            exportGlobalErrorCauseWrapper("EvalError", function(init) {
              return function EvalError(message) {
                return apply(init, this, arguments);
              };
            });
            exportGlobalErrorCauseWrapper("RangeError", function(init) {
              return function RangeError(message) {
                return apply(init, this, arguments);
              };
            });
            exportGlobalErrorCauseWrapper("ReferenceError", function(init) {
              return function ReferenceError(message) {
                return apply(init, this, arguments);
              };
            });
            exportGlobalErrorCauseWrapper("SyntaxError", function(init) {
              return function SyntaxError(message) {
                return apply(init, this, arguments);
              };
            });
            exportGlobalErrorCauseWrapper("TypeError", function(init) {
              return function TypeError2(message) {
                return apply(init, this, arguments);
              };
            });
            exportGlobalErrorCauseWrapper("URIError", function(init) {
              return function URIError(message) {
                return apply(init, this, arguments);
              };
            });
            exportWebAssemblyErrorCauseWrapper("CompileError", function(init) {
              return function CompileError(message) {
                return apply(init, this, arguments);
              };
            });
            exportWebAssemblyErrorCauseWrapper("LinkError", function(init) {
              return function LinkError(message) {
                return apply(init, this, arguments);
              };
            });
            exportWebAssemblyErrorCauseWrapper("RuntimeError", function(init) {
              return function RuntimeError(message) {
                return apply(init, this, arguments);
              };
            });
          }
        ),
        /***/
        6095: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-chrome{background:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;width:225px;font-family:Menlo;background-color:#fff}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{position:relative;width:30px;height:30px;border-radius:15px;overflow:hidden;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{width:30px;height:30px;border-radius:15px;background-size:auto}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;margin-left:-6px;flex:1}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{width:32px;text-align:right;position:relative}.vc-chrome-toggle-icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{position:absolute;width:24px;height:28px;background:#eee;border-radius:4px;top:10px;left:12px}.vc-chrome-hue-wrap{margin-bottom:8px}.vc-chrome-alpha-wrap,.vc-chrome-hue-wrap{position:relative;height:10px}.vc-chrome-alpha-wrap .vc-alpha-gradient,.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{width:12px;height:12px;border-radius:6px;transform:translate(-6px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vc-chrome-body{padding:16px 16px 12px;background-color:#fff}.vc-chrome-saturation-wrap{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.vc-chrome-saturation-wrap .vc-saturation-circle{width:12px;height:12px}.vc-chrome-fields .vc-input__input{font-size:11px;color:#333;width:100%;border-radius:2px;border:none;box-shadow:inset 0 0 0 1px #dadada;height:21px;text-align:center}.vc-chrome-fields .vc-input__label{text-transform:uppercase;font-size:11px;line-height:11px;color:#969696;text-align:center;display:block;margin-top:12px}.vc-chrome__disable-alpha .vc-chrome-active-color{width:18px;height:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-top:4px;margin-bottom:4px}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        6047: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-compact{padding-top:5px;padding-left:5px;width:245px;border-radius:2px;box-sizing:border-box;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vc-compact-colors{overflow:hidden;padding:0;margin:0}.vc-compact-color-item{list-style:none;width:15px;height:15px;float:left;margin-right:5px;margin-bottom:5px;position:relative;cursor:pointer}.vc-compact-color-item--white{box-shadow:inset 0 0 0 1px #ddd}.vc-compact-color-item--white .vc-compact-dot{background:#000}.vc-compact-dot{position:absolute;top:5px;right:5px;bottom:5px;left:5px;border-radius:50%;opacity:1;background:#fff}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        9481: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-grayscale{width:125px;border-radius:2px;box-shadow:0 2px 15px rgba(0,0,0,.12),0 2px 10px rgba(0,0,0,.16);background-color:#fff}.vc-grayscale-colors{border-radius:2px;overflow:hidden;padding:0;margin:0}.vc-grayscale-color-item{list-style:none;width:25px;height:25px;float:left;position:relative;cursor:pointer}.vc-grayscale-color-item--white .vc-grayscale-dot{background:#000}.vc-grayscale-dot{position:absolute;top:50%;left:50%;width:6px;height:6px;margin:-3px 0 0 -2px;border-radius:50%;opacity:1;background:#fff}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        5186: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-material{width:98px;height:98px;padding:16px;font-family:Roboto;position:relative;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vc-material .vc-input__input{width:100%;margin-top:12px;font-size:15px;color:#333;height:30px}.vc-material .vc-input__label{position:absolute;top:0;left:0;font-size:11px;color:#999;text-transform:capitalize}.vc-material-hex{border-bottom-width:2px;border-bottom-style:solid}.vc-material-split{display:flex;margin-right:-10px;padding-top:11px}.vc-material-third{flex:1;padding-right:10px}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        3695: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, '.vc-photoshop{background:#dcdcdc;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.25),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;width:513px;font-family:Roboto}.vc-photoshop__disable-fields{width:390px}.vc-ps-head{background-image:linear-gradient(-180deg,#f0f0f0,#d4d4d4);border-bottom:1px solid #b1b1b1;box-shadow:inset 0 1px 0 0 hsla(0,0%,100%,.2),inset 0 -1px 0 0 rgba(0,0,0,.02);height:23px;line-height:24px;border-radius:4px 4px 0 0;font-size:13px;color:#4d4d4d;text-align:center}.vc-ps-body{padding:15px;display:flex}.vc-ps-saturation-wrap{width:256px;height:256px;position:relative;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0;overflow:hidden}.vc-ps-saturation-wrap .vc-saturation-circle{width:12px;height:12px}.vc-ps-hue-wrap{height:256px;width:19px;margin-left:10px;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0}.vc-ps-hue-pointer,.vc-ps-hue-wrap{position:relative}.vc-ps-hue-pointer--left,.vc-ps-hue-pointer--right{position:absolute;width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent #555}.vc-ps-hue-pointer--left:after,.vc-ps-hue-pointer--right:after{content:"";width:0;height:0;border-style:solid;border-width:4px 0 4px 6px;border-color:transparent transparent transparent #fff;position:absolute;top:1px;left:1px;transform:translate(-8px,-5px)}.vc-ps-hue-pointer--left{transform:translate(-13px,-4px)}.vc-ps-hue-pointer--right{transform:translate(20px,-4px) rotate(180deg)}.vc-ps-controls{width:180px;margin-left:10px;display:flex}.vc-ps-controls__disable-fields{width:auto}.vc-ps-actions{margin-left:20px;flex:1}.vc-ps-ac-btn{cursor:pointer;background-image:linear-gradient(-180deg,#fff,#e6e6e6);border:1px solid #878787;border-radius:2px;height:20px;box-shadow:0 1px 0 0 #eaeaea;font-size:14px;color:#000;line-height:20px;text-align:center;margin-bottom:10px}.vc-ps-previews{width:60px}.vc-ps-previews__swatches{border:1px solid #b3b3b3;border-bottom:1px solid #f0f0f0;margin-bottom:2px;margin-top:1px}.vc-ps-previews__pr-color{height:34px;box-shadow:inset 1px 0 0 #000,inset -1px 0 0 #000,inset 0 1px 0 #000}.vc-ps-previews__label{font-size:14px;color:#000;text-align:center}.vc-ps-fields{padding-top:5px;padding-bottom:9px;width:80px;position:relative}.vc-ps-fields .vc-input__input{margin-left:40%;width:40%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:5px;font-size:13px;padding-left:3px;margin-right:10px}.vc-ps-fields .vc-input__desc,.vc-ps-fields .vc-input__label{top:0;text-transform:uppercase;font-size:13px;height:18px;line-height:22px;position:absolute}.vc-ps-fields .vc-input__label{left:0;width:34px}.vc-ps-fields .vc-input__desc{right:0;width:0}.vc-ps-fields__divider{height:5px}.vc-ps-fields__hex .vc-input__input{margin-left:20%;width:80%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:6px;font-size:13px;padding-left:3px}.vc-ps-fields__hex .vc-input__label{position:absolute;top:0;left:0;width:14px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px}', ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        7279: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-sketch{position:relative;width:200px;padding:10px 10px 0;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15)}.vc-sketch-saturation-wrap{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.vc-sketch-controls{display:flex}.vc-sketch-sliders{padding:4px 0;flex:1}.vc-sketch-sliders .vc-alpha-gradient,.vc-sketch-sliders .vc-hue{border-radius:2px}.vc-sketch-alpha-wrap,.vc-sketch-hue-wrap{position:relative;height:10px}.vc-sketch-alpha-wrap{margin-top:4px;overflow:hidden}.vc-sketch-color-wrap{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.vc-sketch-active-color{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);z-index:2}.vc-sketch-color-wrap .vc-checkerboard{background-size:auto}.vc-sketch-field{display:flex;padding-top:4px}.vc-sketch-field .vc-input__input{width:90%;padding:4px 0 3px 10%;border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:10px}.vc-sketch-field .vc-input__label{display:block;text-align:center;font-size:11px;color:#222;padding-top:3px;padding-bottom:4px;text-transform:capitalize}.vc-sketch-field--single{flex:1;padding-left:6px}.vc-sketch-field--double{flex:2}.vc-sketch-presets{margin-right:-10px;margin-left:-10px;padding-left:10px;padding-top:10px;border-top:1px solid #eee}.vc-sketch-presets-color{overflow:hidden;position:relative;display:inline-block;margin:0 10px 10px 0;vertical-align:top;cursor:pointer;width:16px;height:16px}.vc-sketch-presets-color,.vc-sketch-presets-color .vc-checkerboard{border-radius:3px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}.vc-sketch__disable-alpha .vc-sketch-color-wrap{height:10px}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        6278: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-slider{position:relative;width:410px}.vc-slider-hue-warp{height:12px;position:relative}.vc-slider-hue-warp .vc-hue-picker{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vc-slider-swatches{display:flex;margin-top:20px}.vc-slider-swatch{margin-right:1px;flex:1;width:20%}.vc-slider-swatch:first-child{margin-right:1px}.vc-slider-swatch:first-child .vc-slider-swatch-picker{border-radius:2px 0 0 2px}.vc-slider-swatch:last-child{margin-right:0}.vc-slider-swatch:last-child .vc-slider-swatch-picker{border-radius:0 2px 2px 0}.vc-slider-swatch-picker{cursor:pointer;height:12px}.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active{transform:scaleY(1.8);border-radius:3.6px/2px}.vc-slider-swatch-picker--white{box-shadow:inset 0 0 0 1px #ddd}.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white{box-shadow:inset 0 0 0 .6px #ddd}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        3468: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-swatches{width:320px;height:240px;overflow-y:scroll;background-color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16)}.vc-swatches-box{padding:16px 0 6px 16px;overflow:hidden}.vc-swatches-color-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}.vc-swatches-color-it{box-sizing:border-box;width:40px;height:24px;cursor:pointer;background:#880e4f;margin-bottom:1px;overflow:hidden;border-radius:2px 2px 0 0}.vc-swatches-color--white{border:1px solid #ddd}.vc-swatches-pick{fill:#fff;margin-left:8px;display:block}.vc-swatches-color--white .vc-swatches-pick{fill:#333}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        5689: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-twitter{background:#fff;border:0 solid rgba(0,0,0,.25);box-shadow:0 1px 4px rgba(0,0,0,.25);border-radius:4px;position:relative}.vc-twitter-triangle{border-color:transparent transparent #fff transparent}.vc-twitter-triangle,.vc-twitter-triangle-shadow{width:0;height:0;border-style:solid;border-width:0 9px 10px 9px;position:absolute}.vc-twitter-triangle-shadow{border-color:transparent transparent rgba(0,0,0,.1) transparent}.vc-twitter-body{padding:15px 9px 9px 15px}.vc-twitter .vc-editable-input{position:relative}.vc-twitter .vc-editable-input input{width:100px;font-size:14px;color:#666;border:0;outline:none;height:28px;box-shadow:inset 0 0 0 1px #f0f0f0;box-sizing:content-box;border-radius:0 4px 4px 0;float:left;padding:1px;padding-left:8px}.vc-twitter .vc-editable-input span{display:none}.vc-twitter-hash{background:#f0f0f0;height:30px;width:30px;border-radius:4px 0 0 4px;float:left;color:#98a1a4;display:flex;align-items:center;justify-content:center}.vc-twitter-swatch{width:30px;height:30px;float:left;border-radius:4px;margin:0 6px 6px 0;cursor:pointer;position:relative;outline:none}.vc-twitter-clear{clear:both}.vc-twitter-hide-triangle .vc-twitter-triangle,.vc-twitter-hide-triangle .vc-twitter-triangle-shadow{display:none}.vc-twitter-top-left-triangle .vc-twitter-triangle{top:-10px;left:12px}.vc-twitter-top-left-triangle .vc-twitter-triangle-shadow{top:-11px;left:12px}.vc-twitter-top-right-triangle .vc-twitter-triangle{top:-10px;right:12px}.vc-twitter-top-right-triangle .vc-twitter-triangle-shadow{top:-11px;right:12px}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        2410: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-alpha,.vc-alpha-checkboard-wrap{position:absolute;top:0;right:0;bottom:0;left:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{position:absolute;top:0;right:0;bottom:0;left:0}.vc-alpha-container{cursor:pointer;position:relative;z-index:2;height:100%;margin:0 3px}.vc-alpha-pointer{z-index:2;position:absolute}.vc-alpha-picker{cursor:pointer;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;margin-top:1px;transform:translateX(-2px)}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        3142: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-checkerboard{position:absolute;top:0;right:0;bottom:0;left:0;background-size:contain}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        7953: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-editable-input{position:relative}.vc-input__input{padding:0;border:0;outline:none}.vc-input__label{text-transform:capitalize}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        3097: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-hue{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:2px}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;margin:0 2px;position:relative;height:100%}.vc-hue-pointer{z-index:2;position:absolute}.vc-hue-picker{cursor:pointer;margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;transform:translateX(-2px)}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        4339: (
          /***/
          function(module2, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.r(__webpack_exports__2);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(8081);
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(3645);
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module2.id, ".vc-saturation,.vc-saturation--black,.vc-saturation--white{cursor:pointer;position:absolute;top:0;left:0;right:0;bottom:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{cursor:head;width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%;transform:translate(-2px,-2px)}", ""]);
            __webpack_exports__2["default"] = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        3645: (
          /***/
          function(module2) {
            "use strict";
            module2.exports = function(cssWithMappingToString) {
              var list = [];
              list.toString = function toString() {
                return this.map(function(item) {
                  var content = "";
                  var needLayer = typeof item[5] !== "undefined";
                  if (item[4]) {
                    content += "@supports (".concat(item[4], ") {");
                  }
                  if (item[2]) {
                    content += "@media ".concat(item[2], " {");
                  }
                  if (needLayer) {
                    content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
                  }
                  content += cssWithMappingToString(item);
                  if (needLayer) {
                    content += "}";
                  }
                  if (item[2]) {
                    content += "}";
                  }
                  if (item[4]) {
                    content += "}";
                  }
                  return content;
                }).join("");
              };
              list.i = function i(modules, media, dedupe, supports, layer) {
                if (typeof modules === "string") {
                  modules = [[null, modules, void 0]];
                }
                var alreadyImportedModules = {};
                if (dedupe) {
                  for (var k = 0; k < this.length; k++) {
                    var id = this[k][0];
                    if (id != null) {
                      alreadyImportedModules[id] = true;
                    }
                  }
                }
                for (var _k = 0; _k < modules.length; _k++) {
                  var item = [].concat(modules[_k]);
                  if (dedupe && alreadyImportedModules[item[0]]) {
                    continue;
                  }
                  if (typeof layer !== "undefined") {
                    if (typeof item[5] === "undefined") {
                      item[5] = layer;
                    } else {
                      item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
                      item[5] = layer;
                    }
                  }
                  if (media) {
                    if (!item[2]) {
                      item[2] = media;
                    } else {
                      item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                      item[2] = media;
                    }
                  }
                  if (supports) {
                    if (!item[4]) {
                      item[4] = "".concat(supports);
                    } else {
                      item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
                      item[4] = supports;
                    }
                  }
                  list.push(item);
                }
              };
              return list;
            };
          }
        ),
        /***/
        8081: (
          /***/
          function(module2) {
            "use strict";
            module2.exports = function(i) {
              return i[1];
            };
          }
        ),
        /***/
        9428: (
          /***/
          function(module2) {
            module2.exports = clamp;
            function clamp(value, min, max) {
              return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
            }
          }
        ),
        /***/
        9016: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var root = __webpack_require__2(9159);
            var Symbol2 = root.Symbol;
            module2.exports = Symbol2;
          }
        ),
        /***/
        6423: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var Symbol2 = __webpack_require__2(9016), getRawTag = __webpack_require__2(2366), objectToString = __webpack_require__2(2886);
            var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
            var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
            function baseGetTag(value) {
              if (value == null) {
                return value === void 0 ? undefinedTag : nullTag;
              }
              return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
            }
            module2.exports = baseGetTag;
          }
        ),
        /***/
        6009: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var trimmedEndIndex = __webpack_require__2(1626);
            var reTrimStart = /^\s+/;
            function baseTrim(string) {
              return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
            }
            module2.exports = baseTrim;
          }
        ),
        /***/
        791: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var freeGlobal = typeof __webpack_require__2.g == "object" && __webpack_require__2.g && __webpack_require__2.g.Object === Object && __webpack_require__2.g;
            module2.exports = freeGlobal;
          }
        ),
        /***/
        2366: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var Symbol2 = __webpack_require__2(9016);
            var objectProto = Object.prototype;
            var hasOwnProperty = objectProto.hasOwnProperty;
            var nativeObjectToString = objectProto.toString;
            var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
            function getRawTag(value) {
              var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
              try {
                value[symToStringTag] = void 0;
                var unmasked = true;
              } catch (e) {
              }
              var result = nativeObjectToString.call(value);
              if (unmasked) {
                if (isOwn) {
                  value[symToStringTag] = tag;
                } else {
                  delete value[symToStringTag];
                }
              }
              return result;
            }
            module2.exports = getRawTag;
          }
        ),
        /***/
        2886: (
          /***/
          function(module2) {
            var objectProto = Object.prototype;
            var nativeObjectToString = objectProto.toString;
            function objectToString(value) {
              return nativeObjectToString.call(value);
            }
            module2.exports = objectToString;
          }
        ),
        /***/
        9159: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var freeGlobal = __webpack_require__2(791);
            var freeSelf = typeof self == "object" && self && self.Object === Object && self;
            var root = freeGlobal || freeSelf || Function("return this")();
            module2.exports = root;
          }
        ),
        /***/
        1626: (
          /***/
          function(module2) {
            var reWhitespace = /\s/;
            function trimmedEndIndex(string) {
              var index = string.length;
              while (index-- && reWhitespace.test(string.charAt(index))) {
              }
              return index;
            }
            module2.exports = trimmedEndIndex;
          }
        ),
        /***/
        3738: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            __webpack_require__2(1703);
            var isObject = __webpack_require__2(150), now = __webpack_require__2(657), toNumber = __webpack_require__2(2012);
            var FUNC_ERROR_TEXT = "Expected a function";
            var nativeMax = Math.max, nativeMin = Math.min;
            function debounce(func, wait, options) {
              var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
              if (typeof func != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              wait = toNumber(wait) || 0;
              if (isObject(options)) {
                leading = !!options.leading;
                maxing = "maxWait" in options;
                maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
                trailing = "trailing" in options ? !!options.trailing : trailing;
              }
              function invokeFunc(time) {
                var args = lastArgs, thisArg = lastThis;
                lastArgs = lastThis = void 0;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
              }
              function leadingEdge(time) {
                lastInvokeTime = time;
                timerId = setTimeout(timerExpired, wait);
                return leading ? invokeFunc(time) : result;
              }
              function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
                return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
              }
              function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
              }
              function timerExpired() {
                var time = now();
                if (shouldInvoke(time)) {
                  return trailingEdge(time);
                }
                timerId = setTimeout(timerExpired, remainingWait(time));
              }
              function trailingEdge(time) {
                timerId = void 0;
                if (trailing && lastArgs) {
                  return invokeFunc(time);
                }
                lastArgs = lastThis = void 0;
                return result;
              }
              function cancel() {
                if (timerId !== void 0) {
                  clearTimeout(timerId);
                }
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = void 0;
              }
              function flush() {
                return timerId === void 0 ? result : trailingEdge(now());
              }
              function debounced() {
                var time = now(), isInvoking = shouldInvoke(time);
                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;
                if (isInvoking) {
                  if (timerId === void 0) {
                    return leadingEdge(lastCallTime);
                  }
                  if (maxing) {
                    clearTimeout(timerId);
                    timerId = setTimeout(timerExpired, wait);
                    return invokeFunc(lastCallTime);
                  }
                }
                if (timerId === void 0) {
                  timerId = setTimeout(timerExpired, wait);
                }
                return result;
              }
              debounced.cancel = cancel;
              debounced.flush = flush;
              return debounced;
            }
            module2.exports = debounce;
          }
        ),
        /***/
        150: (
          /***/
          function(module2) {
            function isObject(value) {
              var type = typeof value;
              return value != null && (type == "object" || type == "function");
            }
            module2.exports = isObject;
          }
        ),
        /***/
        4430: (
          /***/
          function(module2) {
            function isObjectLike(value) {
              return value != null && typeof value == "object";
            }
            module2.exports = isObjectLike;
          }
        ),
        /***/
        7691: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var baseGetTag = __webpack_require__2(6423), isObjectLike = __webpack_require__2(4430);
            var symbolTag = "[object Symbol]";
            function isSymbol(value) {
              return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
            }
            module2.exports = isSymbol;
          }
        ),
        /***/
        657: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var root = __webpack_require__2(9159);
            var now = function() {
              return root.Date.now();
            };
            module2.exports = now;
          }
        ),
        /***/
        9289: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            __webpack_require__2(1703);
            var debounce = __webpack_require__2(3738), isObject = __webpack_require__2(150);
            var FUNC_ERROR_TEXT = "Expected a function";
            function throttle(func, wait, options) {
              var leading = true, trailing = true;
              if (typeof func != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (isObject(options)) {
                leading = "leading" in options ? !!options.leading : leading;
                trailing = "trailing" in options ? !!options.trailing : trailing;
              }
              return debounce(func, wait, {
                "leading": leading,
                "maxWait": wait,
                "trailing": trailing
              });
            }
            module2.exports = throttle;
          }
        ),
        /***/
        2012: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var baseTrim = __webpack_require__2(6009), isObject = __webpack_require__2(150), isSymbol = __webpack_require__2(7691);
            var NAN = 0 / 0;
            var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
            var reIsBinary = /^0b[01]+$/i;
            var reIsOctal = /^0o[0-7]+$/i;
            var freeParseInt = parseInt;
            function toNumber(value) {
              if (typeof value == "number") {
                return value;
              }
              if (isSymbol(value)) {
                return NAN;
              }
              if (isObject(value)) {
                var other = typeof value.valueOf == "function" ? value.valueOf() : value;
                value = isObject(other) ? other + "" : other;
              }
              if (typeof value != "string") {
                return value === 0 ? value : +value;
              }
              value = baseTrim(value);
              var isBinary = reIsBinary.test(value);
              return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
            }
            module2.exports = toNumber;
          }
        ),
        /***/
        7013: (
          /***/
          function(module2, exports2, __webpack_require__2) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            (function(Math2) {
              var trimLeft = /^\s+/, trimRight = /\s+$/, tinyCounter = 0, mathRound = Math2.round, mathMin = Math2.min, mathMax = Math2.max, mathRandom = Math2.random;
              function tinycolor(color, opts) {
                color = color ? color : "";
                opts = opts || {};
                if (color instanceof tinycolor) {
                  return color;
                }
                if (!(this instanceof tinycolor)) {
                  return new tinycolor(color, opts);
                }
                var rgb = inputToRGB(color);
                this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
                this._gradientType = opts.gradientType;
                if (this._r < 1) {
                  this._r = mathRound(this._r);
                }
                if (this._g < 1) {
                  this._g = mathRound(this._g);
                }
                if (this._b < 1) {
                  this._b = mathRound(this._b);
                }
                this._ok = rgb.ok;
                this._tc_id = tinyCounter++;
              }
              tinycolor.prototype = {
                isDark: function() {
                  return this.getBrightness() < 128;
                },
                isLight: function() {
                  return !this.isDark();
                },
                isValid: function() {
                  return this._ok;
                },
                getOriginalInput: function() {
                  return this._originalInput;
                },
                getFormat: function() {
                  return this._format;
                },
                getAlpha: function() {
                  return this._a;
                },
                getBrightness: function() {
                  var rgb = this.toRgb();
                  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
                },
                getLuminance: function() {
                  var rgb = this.toRgb();
                  var RsRGB, GsRGB, BsRGB, R, G, B;
                  RsRGB = rgb.r / 255;
                  GsRGB = rgb.g / 255;
                  BsRGB = rgb.b / 255;
                  if (RsRGB <= 0.03928) {
                    R = RsRGB / 12.92;
                  } else {
                    R = Math2.pow((RsRGB + 0.055) / 1.055, 2.4);
                  }
                  if (GsRGB <= 0.03928) {
                    G = GsRGB / 12.92;
                  } else {
                    G = Math2.pow((GsRGB + 0.055) / 1.055, 2.4);
                  }
                  if (BsRGB <= 0.03928) {
                    B = BsRGB / 12.92;
                  } else {
                    B = Math2.pow((BsRGB + 0.055) / 1.055, 2.4);
                  }
                  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
                },
                setAlpha: function(value) {
                  this._a = boundAlpha(value);
                  this._roundA = mathRound(100 * this._a) / 100;
                  return this;
                },
                toHsv: function() {
                  var hsv = rgbToHsv(this._r, this._g, this._b);
                  return {
                    h: hsv.h * 360,
                    s: hsv.s,
                    v: hsv.v,
                    a: this._a
                  };
                },
                toHsvString: function() {
                  var hsv = rgbToHsv(this._r, this._g, this._b);
                  var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
                  return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
                },
                toHsl: function() {
                  var hsl = rgbToHsl(this._r, this._g, this._b);
                  return {
                    h: hsl.h * 360,
                    s: hsl.s,
                    l: hsl.l,
                    a: this._a
                  };
                },
                toHslString: function() {
                  var hsl = rgbToHsl(this._r, this._g, this._b);
                  var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
                  return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
                },
                toHex: function(allow3Char) {
                  return rgbToHex(this._r, this._g, this._b, allow3Char);
                },
                toHexString: function(allow3Char) {
                  return "#" + this.toHex(allow3Char);
                },
                toHex8: function(allow4Char) {
                  return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
                },
                toHex8String: function(allow4Char) {
                  return "#" + this.toHex8(allow4Char);
                },
                toRgb: function() {
                  return {
                    r: mathRound(this._r),
                    g: mathRound(this._g),
                    b: mathRound(this._b),
                    a: this._a
                  };
                },
                toRgbString: function() {
                  return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
                },
                toPercentageRgb: function() {
                  return {
                    r: mathRound(bound01(this._r, 255) * 100) + "%",
                    g: mathRound(bound01(this._g, 255) * 100) + "%",
                    b: mathRound(bound01(this._b, 255) * 100) + "%",
                    a: this._a
                  };
                },
                toPercentageRgbString: function() {
                  return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
                },
                toName: function() {
                  if (this._a === 0) {
                    return "transparent";
                  }
                  if (this._a < 1) {
                    return false;
                  }
                  return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
                },
                toFilter: function(secondColor) {
                  var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
                  var secondHex8String = hex8String;
                  var gradientType = this._gradientType ? "GradientType = 1, " : "";
                  if (secondColor) {
                    var s = tinycolor(secondColor);
                    secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
                  }
                  return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
                },
                toString: function(format) {
                  var formatSet = !!format;
                  format = format || this._format;
                  var formattedString = false;
                  var hasAlpha = this._a < 1 && this._a >= 0;
                  var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
                  if (needsAlphaFormat) {
                    if (format === "name" && this._a === 0) {
                      return this.toName();
                    }
                    return this.toRgbString();
                  }
                  if (format === "rgb") {
                    formattedString = this.toRgbString();
                  }
                  if (format === "prgb") {
                    formattedString = this.toPercentageRgbString();
                  }
                  if (format === "hex" || format === "hex6") {
                    formattedString = this.toHexString();
                  }
                  if (format === "hex3") {
                    formattedString = this.toHexString(true);
                  }
                  if (format === "hex4") {
                    formattedString = this.toHex8String(true);
                  }
                  if (format === "hex8") {
                    formattedString = this.toHex8String();
                  }
                  if (format === "name") {
                    formattedString = this.toName();
                  }
                  if (format === "hsl") {
                    formattedString = this.toHslString();
                  }
                  if (format === "hsv") {
                    formattedString = this.toHsvString();
                  }
                  return formattedString || this.toHexString();
                },
                clone: function() {
                  return tinycolor(this.toString());
                },
                _applyModification: function(fn, args) {
                  var color = fn.apply(null, [this].concat([].slice.call(args)));
                  this._r = color._r;
                  this._g = color._g;
                  this._b = color._b;
                  this.setAlpha(color._a);
                  return this;
                },
                lighten: function() {
                  return this._applyModification(lighten, arguments);
                },
                brighten: function() {
                  return this._applyModification(brighten, arguments);
                },
                darken: function() {
                  return this._applyModification(darken, arguments);
                },
                desaturate: function() {
                  return this._applyModification(desaturate, arguments);
                },
                saturate: function() {
                  return this._applyModification(saturate, arguments);
                },
                greyscale: function() {
                  return this._applyModification(greyscale, arguments);
                },
                spin: function() {
                  return this._applyModification(spin, arguments);
                },
                _applyCombination: function(fn, args) {
                  return fn.apply(null, [this].concat([].slice.call(args)));
                },
                analogous: function() {
                  return this._applyCombination(analogous, arguments);
                },
                complement: function() {
                  return this._applyCombination(complement, arguments);
                },
                monochromatic: function() {
                  return this._applyCombination(monochromatic, arguments);
                },
                splitcomplement: function() {
                  return this._applyCombination(splitcomplement, arguments);
                },
                triad: function() {
                  return this._applyCombination(triad, arguments);
                },
                tetrad: function() {
                  return this._applyCombination(tetrad, arguments);
                }
              };
              tinycolor.fromRatio = function(color, opts) {
                if (typeof color == "object") {
                  var newColor = {};
                  for (var i in color) {
                    if (color.hasOwnProperty(i)) {
                      if (i === "a") {
                        newColor[i] = color[i];
                      } else {
                        newColor[i] = convertToPercentage(color[i]);
                      }
                    }
                  }
                  color = newColor;
                }
                return tinycolor(color, opts);
              };
              function inputToRGB(color) {
                var rgb = {
                  r: 0,
                  g: 0,
                  b: 0
                };
                var a = 1;
                var s = null;
                var v = null;
                var l = null;
                var ok = false;
                var format = false;
                if (typeof color == "string") {
                  color = stringInputToObject(color);
                }
                if (typeof color == "object") {
                  if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
                    rgb = rgbToRgb(color.r, color.g, color.b);
                    ok = true;
                    format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
                  } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
                    s = convertToPercentage(color.s);
                    v = convertToPercentage(color.v);
                    rgb = hsvToRgb(color.h, s, v);
                    ok = true;
                    format = "hsv";
                  } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
                    s = convertToPercentage(color.s);
                    l = convertToPercentage(color.l);
                    rgb = hslToRgb(color.h, s, l);
                    ok = true;
                    format = "hsl";
                  }
                  if (color.hasOwnProperty("a")) {
                    a = color.a;
                  }
                }
                a = boundAlpha(a);
                return {
                  ok,
                  format: color.format || format,
                  r: mathMin(255, mathMax(rgb.r, 0)),
                  g: mathMin(255, mathMax(rgb.g, 0)),
                  b: mathMin(255, mathMax(rgb.b, 0)),
                  a
                };
              }
              function rgbToRgb(r, g, b) {
                return {
                  r: bound01(r, 255) * 255,
                  g: bound01(g, 255) * 255,
                  b: bound01(b, 255) * 255
                };
              }
              function rgbToHsl(r, g, b) {
                r = bound01(r, 255);
                g = bound01(g, 255);
                b = bound01(b, 255);
                var max = mathMax(r, g, b), min = mathMin(r, g, b);
                var h, s, l = (max + min) / 2;
                if (max == min) {
                  h = s = 0;
                } else {
                  var d = max - min;
                  s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                  switch (max) {
                    case r:
                      h = (g - b) / d + (g < b ? 6 : 0);
                      break;
                    case g:
                      h = (b - r) / d + 2;
                      break;
                    case b:
                      h = (r - g) / d + 4;
                      break;
                  }
                  h /= 6;
                }
                return {
                  h,
                  s,
                  l
                };
              }
              function hslToRgb(h, s, l) {
                var r, g, b;
                h = bound01(h, 360);
                s = bound01(s, 100);
                l = bound01(l, 100);
                function hue2rgb(p2, q2, t) {
                  if (t < 0) t += 1;
                  if (t > 1) t -= 1;
                  if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t;
                  if (t < 1 / 2) return q2;
                  if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;
                  return p2;
                }
                if (s === 0) {
                  r = g = b = l;
                } else {
                  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                  var p = 2 * l - q;
                  r = hue2rgb(p, q, h + 1 / 3);
                  g = hue2rgb(p, q, h);
                  b = hue2rgb(p, q, h - 1 / 3);
                }
                return {
                  r: r * 255,
                  g: g * 255,
                  b: b * 255
                };
              }
              function rgbToHsv(r, g, b) {
                r = bound01(r, 255);
                g = bound01(g, 255);
                b = bound01(b, 255);
                var max = mathMax(r, g, b), min = mathMin(r, g, b);
                var h, s, v = max;
                var d = max - min;
                s = max === 0 ? 0 : d / max;
                if (max == min) {
                  h = 0;
                } else {
                  switch (max) {
                    case r:
                      h = (g - b) / d + (g < b ? 6 : 0);
                      break;
                    case g:
                      h = (b - r) / d + 2;
                      break;
                    case b:
                      h = (r - g) / d + 4;
                      break;
                  }
                  h /= 6;
                }
                return {
                  h,
                  s,
                  v
                };
              }
              function hsvToRgb(h, s, v) {
                h = bound01(h, 360) * 6;
                s = bound01(s, 100);
                v = bound01(v, 100);
                var i = Math2.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [v, q, p, p, t, v][mod], g = [t, v, v, q, p, p][mod], b = [p, p, t, v, v, q][mod];
                return {
                  r: r * 255,
                  g: g * 255,
                  b: b * 255
                };
              }
              function rgbToHex(r, g, b, allow3Char) {
                var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];
                if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
                  return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
                }
                return hex.join("");
              }
              function rgbaToHex(r, g, b, a, allow4Char) {
                var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16)), pad2(convertDecimalToHex(a))];
                if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
                  return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
                }
                return hex.join("");
              }
              function rgbaToArgbHex(r, g, b, a) {
                var hex = [pad2(convertDecimalToHex(a)), pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];
                return hex.join("");
              }
              tinycolor.equals = function(color1, color2) {
                if (!color1 || !color2) {
                  return false;
                }
                return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
              };
              tinycolor.random = function() {
                return tinycolor.fromRatio({
                  r: mathRandom(),
                  g: mathRandom(),
                  b: mathRandom()
                });
              };
              function desaturate(color, amount) {
                amount = amount === 0 ? 0 : amount || 10;
                var hsl = tinycolor(color).toHsl();
                hsl.s -= amount / 100;
                hsl.s = clamp01(hsl.s);
                return tinycolor(hsl);
              }
              function saturate(color, amount) {
                amount = amount === 0 ? 0 : amount || 10;
                var hsl = tinycolor(color).toHsl();
                hsl.s += amount / 100;
                hsl.s = clamp01(hsl.s);
                return tinycolor(hsl);
              }
              function greyscale(color) {
                return tinycolor(color).desaturate(100);
              }
              function lighten(color, amount) {
                amount = amount === 0 ? 0 : amount || 10;
                var hsl = tinycolor(color).toHsl();
                hsl.l += amount / 100;
                hsl.l = clamp01(hsl.l);
                return tinycolor(hsl);
              }
              function brighten(color, amount) {
                amount = amount === 0 ? 0 : amount || 10;
                var rgb = tinycolor(color).toRgb();
                rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
                rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
                rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
                return tinycolor(rgb);
              }
              function darken(color, amount) {
                amount = amount === 0 ? 0 : amount || 10;
                var hsl = tinycolor(color).toHsl();
                hsl.l -= amount / 100;
                hsl.l = clamp01(hsl.l);
                return tinycolor(hsl);
              }
              function spin(color, amount) {
                var hsl = tinycolor(color).toHsl();
                var hue = (hsl.h + amount) % 360;
                hsl.h = hue < 0 ? 360 + hue : hue;
                return tinycolor(hsl);
              }
              function complement(color) {
                var hsl = tinycolor(color).toHsl();
                hsl.h = (hsl.h + 180) % 360;
                return tinycolor(hsl);
              }
              function triad(color) {
                var hsl = tinycolor(color).toHsl();
                var h = hsl.h;
                return [tinycolor(color), tinycolor({
                  h: (h + 120) % 360,
                  s: hsl.s,
                  l: hsl.l
                }), tinycolor({
                  h: (h + 240) % 360,
                  s: hsl.s,
                  l: hsl.l
                })];
              }
              function tetrad(color) {
                var hsl = tinycolor(color).toHsl();
                var h = hsl.h;
                return [tinycolor(color), tinycolor({
                  h: (h + 90) % 360,
                  s: hsl.s,
                  l: hsl.l
                }), tinycolor({
                  h: (h + 180) % 360,
                  s: hsl.s,
                  l: hsl.l
                }), tinycolor({
                  h: (h + 270) % 360,
                  s: hsl.s,
                  l: hsl.l
                })];
              }
              function splitcomplement(color) {
                var hsl = tinycolor(color).toHsl();
                var h = hsl.h;
                return [tinycolor(color), tinycolor({
                  h: (h + 72) % 360,
                  s: hsl.s,
                  l: hsl.l
                }), tinycolor({
                  h: (h + 216) % 360,
                  s: hsl.s,
                  l: hsl.l
                })];
              }
              function analogous(color, results, slices) {
                results = results || 6;
                slices = slices || 30;
                var hsl = tinycolor(color).toHsl();
                var part = 360 / slices;
                var ret = [tinycolor(color)];
                for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
                  hsl.h = (hsl.h + part) % 360;
                  ret.push(tinycolor(hsl));
                }
                return ret;
              }
              function monochromatic(color, results) {
                results = results || 6;
                var hsv = tinycolor(color).toHsv();
                var h = hsv.h, s = hsv.s, v = hsv.v;
                var ret = [];
                var modification = 1 / results;
                while (results--) {
                  ret.push(tinycolor({
                    h,
                    s,
                    v
                  }));
                  v = (v + modification) % 1;
                }
                return ret;
              }
              tinycolor.mix = function(color1, color2, amount) {
                amount = amount === 0 ? 0 : amount || 50;
                var rgb1 = tinycolor(color1).toRgb();
                var rgb2 = tinycolor(color2).toRgb();
                var p = amount / 100;
                var rgba = {
                  r: (rgb2.r - rgb1.r) * p + rgb1.r,
                  g: (rgb2.g - rgb1.g) * p + rgb1.g,
                  b: (rgb2.b - rgb1.b) * p + rgb1.b,
                  a: (rgb2.a - rgb1.a) * p + rgb1.a
                };
                return tinycolor(rgba);
              };
              tinycolor.readability = function(color1, color2) {
                var c1 = tinycolor(color1);
                var c2 = tinycolor(color2);
                return (Math2.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math2.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
              };
              tinycolor.isReadable = function(color1, color2, wcag2) {
                var readability = tinycolor.readability(color1, color2);
                var wcag2Parms, out;
                out = false;
                wcag2Parms = validateWCAG2Parms(wcag2);
                switch (wcag2Parms.level + wcag2Parms.size) {
                  case "AAsmall":
                  case "AAAlarge":
                    out = readability >= 4.5;
                    break;
                  case "AAlarge":
                    out = readability >= 3;
                    break;
                  case "AAAsmall":
                    out = readability >= 7;
                    break;
                }
                return out;
              };
              tinycolor.mostReadable = function(baseColor, colorList, args) {
                var bestColor = null;
                var bestScore = 0;
                var readability;
                var includeFallbackColors, level, size;
                args = args || {};
                includeFallbackColors = args.includeFallbackColors;
                level = args.level;
                size = args.size;
                for (var i = 0; i < colorList.length; i++) {
                  readability = tinycolor.readability(baseColor, colorList[i]);
                  if (readability > bestScore) {
                    bestScore = readability;
                    bestColor = tinycolor(colorList[i]);
                  }
                }
                if (tinycolor.isReadable(baseColor, bestColor, {
                  "level": level,
                  "size": size
                }) || !includeFallbackColors) {
                  return bestColor;
                } else {
                  args.includeFallbackColors = false;
                  return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
                }
              };
              var names = tinycolor.names = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "0ff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "00f",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                burntsienna: "ea7e5d",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "0ff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "f0f",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "663399",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32"
              };
              var hexNames = tinycolor.hexNames = flip(names);
              function flip(o) {
                var flipped = {};
                for (var i in o) {
                  if (o.hasOwnProperty(i)) {
                    flipped[o[i]] = i;
                  }
                }
                return flipped;
              }
              function boundAlpha(a) {
                a = parseFloat(a);
                if (isNaN(a) || a < 0 || a > 1) {
                  a = 1;
                }
                return a;
              }
              function bound01(n, max) {
                if (isOnePointZero(n)) {
                  n = "100%";
                }
                var processPercent = isPercentage(n);
                n = mathMin(max, mathMax(0, parseFloat(n)));
                if (processPercent) {
                  n = parseInt(n * max, 10) / 100;
                }
                if (Math2.abs(n - max) < 1e-6) {
                  return 1;
                }
                return n % max / parseFloat(max);
              }
              function clamp01(val) {
                return mathMin(1, mathMax(0, val));
              }
              function parseIntFromHex(val) {
                return parseInt(val, 16);
              }
              function isOnePointZero(n) {
                return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
              }
              function isPercentage(n) {
                return typeof n === "string" && n.indexOf("%") != -1;
              }
              function pad2(c) {
                return c.length == 1 ? "0" + c : "" + c;
              }
              function convertToPercentage(n) {
                if (n <= 1) {
                  n = n * 100 + "%";
                }
                return n;
              }
              function convertDecimalToHex(d) {
                return Math2.round(parseFloat(d) * 255).toString(16);
              }
              function convertHexToDecimal(h) {
                return parseIntFromHex(h) / 255;
              }
              var matchers = function() {
                var CSS_INTEGER = "[-\\+]?\\d+%?";
                var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
                var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
                var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
                var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
                return {
                  CSS_UNIT: new RegExp(CSS_UNIT),
                  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
                  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
                  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
                  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
                  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
                  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
                  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                };
              }();
              function isValidCSSUnit(color) {
                return !!matchers.CSS_UNIT.exec(color);
              }
              function stringInputToObject(color) {
                color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
                var named = false;
                if (names[color]) {
                  color = names[color];
                  named = true;
                } else if (color == "transparent") {
                  return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    format: "name"
                  };
                }
                var match;
                if (match = matchers.rgb.exec(color)) {
                  return {
                    r: match[1],
                    g: match[2],
                    b: match[3]
                  };
                }
                if (match = matchers.rgba.exec(color)) {
                  return {
                    r: match[1],
                    g: match[2],
                    b: match[3],
                    a: match[4]
                  };
                }
                if (match = matchers.hsl.exec(color)) {
                  return {
                    h: match[1],
                    s: match[2],
                    l: match[3]
                  };
                }
                if (match = matchers.hsla.exec(color)) {
                  return {
                    h: match[1],
                    s: match[2],
                    l: match[3],
                    a: match[4]
                  };
                }
                if (match = matchers.hsv.exec(color)) {
                  return {
                    h: match[1],
                    s: match[2],
                    v: match[3]
                  };
                }
                if (match = matchers.hsva.exec(color)) {
                  return {
                    h: match[1],
                    s: match[2],
                    v: match[3],
                    a: match[4]
                  };
                }
                if (match = matchers.hex8.exec(color)) {
                  return {
                    r: parseIntFromHex(match[1]),
                    g: parseIntFromHex(match[2]),
                    b: parseIntFromHex(match[3]),
                    a: convertHexToDecimal(match[4]),
                    format: named ? "name" : "hex8"
                  };
                }
                if (match = matchers.hex6.exec(color)) {
                  return {
                    r: parseIntFromHex(match[1]),
                    g: parseIntFromHex(match[2]),
                    b: parseIntFromHex(match[3]),
                    format: named ? "name" : "hex"
                  };
                }
                if (match = matchers.hex4.exec(color)) {
                  return {
                    r: parseIntFromHex(match[1] + "" + match[1]),
                    g: parseIntFromHex(match[2] + "" + match[2]),
                    b: parseIntFromHex(match[3] + "" + match[3]),
                    a: convertHexToDecimal(match[4] + "" + match[4]),
                    format: named ? "name" : "hex8"
                  };
                }
                if (match = matchers.hex3.exec(color)) {
                  return {
                    r: parseIntFromHex(match[1] + "" + match[1]),
                    g: parseIntFromHex(match[2] + "" + match[2]),
                    b: parseIntFromHex(match[3] + "" + match[3]),
                    format: named ? "name" : "hex"
                  };
                }
                return false;
              }
              function validateWCAG2Parms(parms) {
                var level, size;
                parms = parms || {
                  "level": "AA",
                  "size": "small"
                };
                level = (parms.level || "AA").toUpperCase();
                size = (parms.size || "small").toLowerCase();
                if (level !== "AA" && level !== "AAA") {
                  level = "AA";
                }
                if (size !== "small" && size !== "large") {
                  size = "small";
                }
                return {
                  "level": level,
                  "size": size
                };
              }
              if (module2.exports) {
                module2.exports = tinycolor;
              } else if (true) {
                !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                  return tinycolor;
                }).call(exports2, __webpack_require__2, exports2, module2), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
              } else {
              }
            })(Math);
          }
        ),
        /***/
        89: (
          /***/
          function(__unused_webpack_module, exports2) {
            "use strict";
            var __webpack_unused_export__;
            __webpack_unused_export__ = {
              value: true
            };
            exports2.Z = (sfc, props) => {
              const target = sfc.__vccOpts || sfc;
              for (const [key, val] of props) {
                target[key] = val;
              }
              return target;
            };
          }
        ),
        /***/
        3647: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(6095);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("29397b9c", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        325: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(6047);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("479d8be0", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        5208: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(9481);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("1e383f72", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        1425: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(5186);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("3855edf0", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        1902: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(3695);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("2f73e1a8", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        5815: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(7279);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("36c086c2", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        8016: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(6278);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("8bcdd408", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        193: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(3468);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("17a63672", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        1113: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(5689);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("39c50172", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        6320: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(2410);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("5c6f2742", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        3205: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(3142);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("90803b82", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        1979: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(7953);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("418ed5a2", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        6547: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(3097);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("1f7c089b", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        5233: (
          /***/
          function(module2, __unused_webpack_exports, __webpack_require__2) {
            var content = __webpack_require__2(4339);
            if (content.__esModule) content = content.default;
            if (typeof content === "string") content = [[module2.id, content, ""]];
            if (content.locals) module2.exports = content.locals;
            var add = __webpack_require__2(7037).Z;
            var update = add("491ed8fe", content, true, { "sourceMap": false, "shadowMode": false });
          }
        ),
        /***/
        7037: (
          /***/
          function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
            "use strict";
            __webpack_require__2.d(__webpack_exports__2, {
              "Z": function() {
                return (
                  /* binding */
                  addStylesClient
                );
              }
            });
            ;
            function listToStyles(parentId, list) {
              var styles = [];
              var newStyles = {};
              for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var id = item[0];
                var css = item[1];
                var media = item[2];
                var sourceMap = item[3];
                var part = {
                  id: parentId + ":" + i,
                  css,
                  media,
                  sourceMap
                };
                if (!newStyles[id]) {
                  styles.push(newStyles[id] = {
                    id,
                    parts: [part]
                  });
                } else {
                  newStyles[id].parts.push(part);
                }
              }
              return styles;
            }
            ;
            var hasDocument = typeof document !== "undefined";
            if (typeof DEBUG !== "undefined" && DEBUG) {
              if (!hasDocument) {
                throw new Error(
                  "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
                );
              }
            }
            var stylesInDom = {
              /*
                [id: number]: {
                  id: number,
                  refs: number,
                  parts: Array<(obj?: StyleObjectPart) => void>
                }
              */
            };
            var head = hasDocument && (document.head || document.getElementsByTagName("head")[0]);
            var singletonElement = null;
            var singletonCounter = 0;
            var isProduction = false;
            var noop = function() {
            };
            var options = null;
            var ssrIdKey = "data-vue-ssr-id";
            var isOldIE = typeof navigator !== "undefined" && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
            function addStylesClient(parentId, list, _isProduction, _options) {
              isProduction = _isProduction;
              options = _options || {};
              var styles = listToStyles(parentId, list);
              addStylesToDom(styles);
              return function update(newList) {
                var mayRemove = [];
                for (var i = 0; i < styles.length; i++) {
                  var item = styles[i];
                  var domStyle = stylesInDom[item.id];
                  domStyle.refs--;
                  mayRemove.push(domStyle);
                }
                if (newList) {
                  styles = listToStyles(parentId, newList);
                  addStylesToDom(styles);
                } else {
                  styles = [];
                }
                for (var i = 0; i < mayRemove.length; i++) {
                  var domStyle = mayRemove[i];
                  if (domStyle.refs === 0) {
                    for (var j = 0; j < domStyle.parts.length; j++) {
                      domStyle.parts[j]();
                    }
                    delete stylesInDom[domStyle.id];
                  }
                }
              };
            }
            function addStylesToDom(styles) {
              for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                if (domStyle) {
                  domStyle.refs++;
                  for (var j = 0; j < domStyle.parts.length; j++) {
                    domStyle.parts[j](item.parts[j]);
                  }
                  for (; j < item.parts.length; j++) {
                    domStyle.parts.push(addStyle(item.parts[j]));
                  }
                  if (domStyle.parts.length > item.parts.length) {
                    domStyle.parts.length = item.parts.length;
                  }
                } else {
                  var parts = [];
                  for (var j = 0; j < item.parts.length; j++) {
                    parts.push(addStyle(item.parts[j]));
                  }
                  stylesInDom[item.id] = { id: item.id, refs: 1, parts };
                }
              }
            }
            function createStyleElement() {
              var styleElement = document.createElement("style");
              styleElement.type = "text/css";
              head.appendChild(styleElement);
              return styleElement;
            }
            function addStyle(obj) {
              var update, remove;
              var styleElement = document.querySelector("style[" + ssrIdKey + '~="' + obj.id + '"]');
              if (styleElement) {
                if (isProduction) {
                  return noop;
                } else {
                  styleElement.parentNode.removeChild(styleElement);
                }
              }
              if (isOldIE) {
                var styleIndex = singletonCounter++;
                styleElement = singletonElement || (singletonElement = createStyleElement());
                update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
                remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
              } else {
                styleElement = createStyleElement();
                update = applyToTag.bind(null, styleElement);
                remove = function() {
                  styleElement.parentNode.removeChild(styleElement);
                };
              }
              update(obj);
              return function updateStyle(newObj) {
                if (newObj) {
                  if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                    return;
                  }
                  update(obj = newObj);
                } else {
                  remove();
                }
              };
            }
            var replaceText = /* @__PURE__ */ function() {
              var textStore = [];
              return function(index, replacement) {
                textStore[index] = replacement;
                return textStore.filter(Boolean).join("\n");
              };
            }();
            function applyToSingletonTag(styleElement, index, remove, obj) {
              var css = remove ? "" : obj.css;
              if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = replaceText(index, css);
              } else {
                var cssNode = document.createTextNode(css);
                var childNodes = styleElement.childNodes;
                if (childNodes[index]) styleElement.removeChild(childNodes[index]);
                if (childNodes.length) {
                  styleElement.insertBefore(cssNode, childNodes[index]);
                } else {
                  styleElement.appendChild(cssNode);
                }
              }
            }
            function applyToTag(styleElement, obj) {
              var css = obj.css;
              var media = obj.media;
              var sourceMap = obj.sourceMap;
              if (media) {
                styleElement.setAttribute("media", media);
              }
              if (options.ssrId) {
                styleElement.setAttribute(ssrIdKey, obj.id);
              }
              if (sourceMap) {
                css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */";
                css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
              }
              if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = css;
              } else {
                while (styleElement.firstChild) {
                  styleElement.removeChild(styleElement.firstChild);
                }
                styleElement.appendChild(document.createTextNode(css));
              }
            }
          }
        )
        /******/
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          /******/
          id: moduleId,
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      !function() {
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? (
            /******/
            function() {
              return module2["default"];
            }
          ) : (
            /******/
            function() {
              return module2;
            }
          );
          __webpack_require__.d(getter, { a: getter });
          return getter;
        };
      }();
      !function() {
        __webpack_require__.d = function(exports2, definition) {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      }();
      !function() {
        __webpack_require__.g = function() {
          if (typeof globalThis === "object") return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e) {
            if (typeof window === "object") return window;
          }
        }();
      }();
      !function() {
        __webpack_require__.o = function(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
      }();
      !function() {
        __webpack_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
      }();
      !function() {
        __webpack_require__.p = "";
      }();
      var __webpack_exports__ = {};
      !function() {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "Alpha": function() {
            return (
              /* reexport */
              Alpha
            );
          },
          "Checkboard": function() {
            return (
              /* reexport */
              Checkboard
            );
          },
          "Chrome": function() {
            return (
              /* reexport */
              Chrome
            );
          },
          "ColorMixin": function() {
            return (
              /* reexport */
              color
            );
          },
          "Compact": function() {
            return (
              /* reexport */
              Compact
            );
          },
          "EditableInput": function() {
            return (
              /* reexport */
              EditableInput
            );
          },
          "Grayscale": function() {
            return (
              /* reexport */
              Grayscale
            );
          },
          "Hue": function() {
            return (
              /* reexport */
              Hue
            );
          },
          "Material": function() {
            return (
              /* reexport */
              Material
            );
          },
          "Photoshop": function() {
            return (
              /* reexport */
              Photoshop
            );
          },
          "Saturation": function() {
            return (
              /* reexport */
              Saturation
            );
          },
          "Sketch": function() {
            return (
              /* reexport */
              Sketch
            );
          },
          "Slider": function() {
            return (
              /* reexport */
              Slider
            );
          },
          "Swatches": function() {
            return (
              /* reexport */
              Swatches
            );
          },
          "Twitter": function() {
            return (
              /* reexport */
              Twitter
            );
          },
          "default": function() {
            return (
              /* binding */
              entry_lib
            );
          },
          "version": function() {
            return (
              /* reexport */
              version
            );
          }
        });
        ;
        if (typeof window !== "undefined") {
          var currentScript = window.document.currentScript;
          if (false) {
            var getCurrentScript;
          }
          var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          if (src) {
            __webpack_require__.p = src[1];
          }
        }
        var setPublicPath = null;
        ;
        var package_namespaceObject = { "i8": "3.0.6" };
        ;
        var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = (init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports));
        ;
        const _hoisted_1 = {
          role: "application",
          "aria-label": "Compact color picker",
          class: "vc-compact"
        };
        const _hoisted_2 = {
          class: "vc-compact-colors",
          role: "listbox"
        };
        const _hoisted_3 = ["aria-label", "aria-selected", "onClick"];
        const _hoisted_4 = {
          class: "vc-compact-dot"
        };
        function render(_ctx, _cache, $props, $setup, $data, $options) {
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("ul", _hoisted_2, [((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(_ctx.paletteUpperCase($props.palette), (c) => {
            return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("li", {
              role: "option",
              "aria-label": "color:" + c,
              "aria-selected": c === $options.pick,
              class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vc-compact-color-item", {
                "vc-compact-color-item--white": c === "#FFFFFF"
              }]),
              key: c,
              style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
                background: c
              }),
              onClick: ($event) => $options.handlerClick(c)
            }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_4, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, c === $options.pick]])], 14, _hoisted_3);
          }), 128))])]);
        }
        ;
        var tinycolor = __webpack_require__(7013);
        var tinycolor_default = __webpack_require__.n(tinycolor);
        ;
        function _colorChange(data = {}, oldHue = 0) {
          const alpha = data && data.a;
          let color2;
          if (data && data.hsl) {
            color2 = tinycolor_default()(data.hsl);
          } else if (data && data.hex && data.hex.length > 0) {
            color2 = tinycolor_default()(data.hex);
          } else if (data && data.hsv) {
            color2 = tinycolor_default()(data.hsv);
          } else if (data && data.rgba) {
            color2 = tinycolor_default()(data.rgba);
          } else if (data && data.rgb) {
            color2 = tinycolor_default()(data.rgb);
          } else {
            color2 = tinycolor_default()(data);
          }
          if (color2 && (color2._a === void 0 || color2._a === null)) {
            color2.setAlpha(alpha || 1);
          }
          const hsl = color2.toHsl();
          const hsv = color2.toHsv();
          if (hsl.s === 0) {
            hsv.h = hsl.h = data.h || data.hsl && data.hsl.h || oldHue || 0;
          }
          return {
            hsl,
            hex: color2.toHexString().toUpperCase(),
            hex8: color2.toHex8String().toUpperCase(),
            rgba: color2.toRgb(),
            hsv,
            oldHue: data.h || oldHue || hsl.h,
            source: data.source,
            a: data.a || color2.getAlpha()
          };
        }
        var color = {
          props: ["modelValue"],
          data() {
            return {
              val: _colorChange(this.modelValue)
            };
          },
          computed: {
            colors: {
              get() {
                return this.val;
              },
              set(newVal) {
                this.val = newVal;
                this.$emit("update:modelValue", newVal);
              }
            }
          },
          watch: {
            modelValue(newVal) {
              this.val = _colorChange(newVal);
            }
          },
          methods: {
            colorChange(data, oldHue) {
              this.oldHue = this.colors.hsl.h;
              this.colors = _colorChange(data, oldHue || this.oldHue);
            },
            isValidHex(hex) {
              return tinycolor_default()(hex).isValid();
            },
            simpleCheckForValidColor(data) {
              const keysToCheck = ["r", "g", "b", "a", "h", "s", "l", "v"];
              let checked = 0;
              let passed = 0;
              for (let i = 0; i < keysToCheck.length; i++) {
                const letter = keysToCheck[i];
                if (data[letter]) {
                  checked++;
                  if (!isNaN(data[letter])) {
                    passed++;
                  }
                }
              }
              if (checked === passed) {
                return data;
              }
            },
            paletteUpperCase(palette) {
              return palette.map((c) => c.toUpperCase());
            },
            isTransparent(color2) {
              return tinycolor_default()(color2).getAlpha() === 0;
            }
          }
        };
        ;
        const defaultColors = ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#CCCCCC", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"];
        var Compactvue_type_script_lang_js = {
          name: "Compact",
          mixins: [color],
          props: {
            palette: {
              type: Array,
              default() {
                return defaultColors;
              }
            }
          },
          components: {
            // 'ed-in': editableInput
          },
          computed: {
            pick() {
              return this.colors.hex.toUpperCase();
            }
          },
          methods: {
            handlerClick(c) {
              this.colorChange({
                hex: c,
                source: "hex"
              });
            }
          }
        };
        ;
        var Compactvue_type_style_index_0_id_1fcf22b8_lang_css = __webpack_require__(325);
        ;
        var exportHelper = __webpack_require__(89);
        ;
        ;
        const __exports__ = (0, exportHelper.Z)(Compactvue_type_script_lang_js, [["render", render]]);
        var Compact = __exports__;
        ;
        const Grayscalevue_type_template_id_5742c0cf_hoisted_1 = {
          role: "application",
          "aria-label": "Grayscale color picker",
          class: "vc-grayscale"
        };
        const Grayscalevue_type_template_id_5742c0cf_hoisted_2 = {
          class: "vc-grayscale-colors",
          role: "listbox"
        };
        const Grayscalevue_type_template_id_5742c0cf_hoisted_3 = ["aria-label", "aria-selected", "onClick"];
        const Grayscalevue_type_template_id_5742c0cf_hoisted_4 = {
          class: "vc-grayscale-dot"
        };
        function Grayscalevue_type_template_id_5742c0cf_render(_ctx, _cache, $props, $setup, $data, $options) {
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Grayscalevue_type_template_id_5742c0cf_hoisted_1, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("ul", Grayscalevue_type_template_id_5742c0cf_hoisted_2, [((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(_ctx.paletteUpperCase($props.palette), (c) => {
            return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("li", {
              role: "option",
              "aria-label": "Color:" + c,
              "aria-selected": c === $options.pick,
              key: c,
              class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vc-grayscale-color-item", {
                "vc-grayscale-color-item--white": c == "#FFFFFF"
              }]),
              style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
                background: c
              }),
              onClick: ($event) => $options.handlerClick(c)
            }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Grayscalevue_type_template_id_5742c0cf_hoisted_4, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, c === $options.pick]])], 14, Grayscalevue_type_template_id_5742c0cf_hoisted_3);
          }), 128))])]);
        }
        ;
        ;
        const Grayscalevue_type_script_lang_js_defaultColors = ["#FFFFFF", "#F2F2F2", "#E6E6E6", "#D9D9D9", "#CCCCCC", "#BFBFBF", "#B3B3B3", "#A6A6A6", "#999999", "#8C8C8C", "#808080", "#737373", "#666666", "#595959", "#4D4D4D", "#404040", "#333333", "#262626", "#0D0D0D", "#000000"];
        var Grayscalevue_type_script_lang_js = {
          name: "Grayscale",
          mixins: [color],
          props: {
            palette: {
              type: Array,
              default() {
                return Grayscalevue_type_script_lang_js_defaultColors;
              }
            }
          },
          components: {},
          computed: {
            pick() {
              return this.colors.hex.toUpperCase();
            }
          },
          methods: {
            handlerClick(c) {
              this.colorChange({
                hex: c,
                source: "hex"
              });
            }
          }
        };
        ;
        var Grayscalevue_type_style_index_0_id_5742c0cf_lang_css = __webpack_require__(5208);
        ;
        ;
        ;
        const Grayscale_exports_ = (0, exportHelper.Z)(Grayscalevue_type_script_lang_js, [["render", Grayscalevue_type_template_id_5742c0cf_render]]);
        var Grayscale = Grayscale_exports_;
        ;
        const Materialvue_type_template_id_6dd2ea40_hoisted_1 = {
          role: "application",
          "aria-label": "Material color picker",
          class: "vc-material"
        };
        const Materialvue_type_template_id_6dd2ea40_hoisted_2 = {
          class: "vc-material-split"
        };
        const Materialvue_type_template_id_6dd2ea40_hoisted_3 = {
          class: "vc-material-third"
        };
        const Materialvue_type_template_id_6dd2ea40_hoisted_4 = {
          class: "vc-material-third"
        };
        const _hoisted_5 = {
          class: "vc-material-third"
        };
        function Materialvue_type_template_id_6dd2ea40_render(_ctx, _cache, $props, $setup, $data, $options) {
          const _component_ed_in = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("ed-in");
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Materialvue_type_template_id_6dd2ea40_hoisted_1, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            class: "vc-material-hex",
            label: "hex",
            modelValue: _ctx.colors.hex,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.colors.hex = $event),
            style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
              borderColor: _ctx.colors.hex
            }),
            onChange: $options.onChange
          }, null, 8, ["modelValue", "style", "onChange"]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Materialvue_type_template_id_6dd2ea40_hoisted_2, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Materialvue_type_template_id_6dd2ea40_hoisted_3, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "r",
            modelValue: _ctx.colors.rgba.r,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.colors.rgba.r = $event),
            onChange: $options.onChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Materialvue_type_template_id_6dd2ea40_hoisted_4, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "g",
            modelValue: _ctx.colors.rgba.g,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.colors.rgba.g = $event),
            onChange: $options.onChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_5, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "b",
            modelValue: _ctx.colors.rgba.b,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.colors.rgba.b = $event),
            onChange: $options.onChange
          }, null, 8, ["modelValue", "onChange"])])])]);
        }
        ;
        ;
        const EditableInputvue_type_template_id_56925d0b_hoisted_1 = {
          class: "vc-editable-input"
        };
        const EditableInputvue_type_template_id_56925d0b_hoisted_2 = ["aria-labelledby"];
        const EditableInputvue_type_template_id_56925d0b_hoisted_3 = ["for", "id"];
        const EditableInputvue_type_template_id_56925d0b_hoisted_4 = {
          class: "vc-input__desc"
        };
        function EditableInputvue_type_template_id_56925d0b_render(_ctx, _cache, $props, $setup, $data, $options) {
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", EditableInputvue_type_template_id_56925d0b_hoisted_1, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("input", {
            "aria-labelledby": $options.labelId,
            class: "vc-input__input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.val = $event),
            onKeydown: _cache[1] || (_cache[1] = (...args) => $options.handleKeyDown && $options.handleKeyDown(...args)),
            onInput: _cache[2] || (_cache[2] = (...args) => $options.update && $options.update(...args)),
            ref: "input"
          }, null, 40, EditableInputvue_type_template_id_56925d0b_hoisted_2), [[external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vModelText, $options.val]]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", {
            for: $props.label,
            class: "vc-input__label",
            id: $options.labelId
          }, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($options.labelSpanText), 9, EditableInputvue_type_template_id_56925d0b_hoisted_3), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", EditableInputvue_type_template_id_56925d0b_hoisted_4, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.desc), 1)]);
        }
        ;
        ;
        var EditableInputvue_type_script_lang_js = {
          name: "editableInput",
          props: {
            label: String,
            labelText: String,
            desc: String,
            modelValue: [String, Number],
            max: Number,
            min: Number,
            arrowOffset: {
              type: Number,
              default: 1
            }
          },
          computed: {
            val: {
              get() {
                return this.modelValue;
              },
              set(v) {
                if (!(this.max === void 0) && +v > this.max) {
                  this.$refs.input.value = this.max;
                } else {
                  return v;
                }
              }
            },
            labelId() {
              return `input__label__${this.label}__${Math.random().toString().slice(2, 5)}`;
            },
            labelSpanText() {
              return this.labelText || this.label;
            }
          },
          methods: {
            update(e) {
              this.handleChange(e.target.value);
            },
            handleChange(newVal) {
              const data = {};
              data[this.label] = newVal;
              if (data.hex === void 0 && data["#"] === void 0) {
                this.$emit("change", data);
              } else if (newVal.length > 5) {
                this.$emit("change", data);
              }
            },
            // **** unused
            // handleBlur (e) {
            //   console.log(e)
            // },
            handleKeyDown(e) {
              let val = this.val;
              const number = Number(val);
              if (number) {
                const amount = this.arrowOffset || 1;
                if (e.keyCode === 38) {
                  val = number + amount;
                  this.handleChange(val);
                  e.preventDefault();
                }
                if (e.keyCode === 40) {
                  val = number - amount;
                  this.handleChange(val);
                  e.preventDefault();
                }
              }
            }
            // **** unused
            // handleDrag (e) {
            //   console.log(e)
            // },
            // handleMouseDown (e) {
            //   console.log(e)
            // }
          }
        };
        ;
        var EditableInputvue_type_style_index_0_id_56925d0b_lang_css = __webpack_require__(1979);
        ;
        ;
        ;
        const EditableInput_exports_ = (0, exportHelper.Z)(EditableInputvue_type_script_lang_js, [["render", EditableInputvue_type_template_id_56925d0b_render]]);
        var EditableInput = EditableInput_exports_;
        ;
        var Materialvue_type_script_lang_js = {
          name: "Material",
          mixins: [color],
          components: {
            "ed-in": EditableInput
          },
          methods: {
            onChange(data) {
              if (!data) {
                return;
              }
              if (data.hex) {
                this.isValidHex(data.hex) && this.colorChange({
                  hex: data.hex,
                  source: "hex"
                });
              } else if (data.r || data.g || data.b) {
                this.colorChange({
                  r: data.r || this.colors.rgba.r,
                  g: data.g || this.colors.rgba.g,
                  b: data.b || this.colors.rgba.b,
                  a: data.a || this.colors.rgba.a,
                  source: "rgba"
                });
              }
            }
          }
        };
        ;
        var Materialvue_type_style_index_0_id_6dd2ea40_lang_css = __webpack_require__(1425);
        ;
        ;
        ;
        const Material_exports_ = (0, exportHelper.Z)(Materialvue_type_script_lang_js, [["render", Materialvue_type_template_id_6dd2ea40_render]]);
        var Material = Material_exports_;
        ;
        const Slidervue_type_template_id_c87f38e0_hoisted_1 = {
          role: "application",
          "aria-label": "Slider color picker",
          class: "vc-slider"
        };
        const Slidervue_type_template_id_c87f38e0_hoisted_2 = {
          class: "vc-slider-hue-warp"
        };
        const Slidervue_type_template_id_c87f38e0_hoisted_3 = {
          class: "vc-slider-swatches",
          role: "group"
        };
        const Slidervue_type_template_id_c87f38e0_hoisted_4 = ["data-index", "aria-label", "onClick"];
        function Slidervue_type_template_id_c87f38e0_render(_ctx, _cache, $props, $setup, $data, $options) {
          const _component_hue = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("hue");
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Slidervue_type_template_id_c87f38e0_hoisted_1, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Slidervue_type_template_id_c87f38e0_hoisted_2, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_hue, {
            modelValue: _ctx.colors,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.colors = $event),
            onChange: $options.hueChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Slidervue_type_template_id_c87f38e0_hoisted_3, [((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($options.normalizedSwatches, (swatch, index) => {
            return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
              class: "vc-slider-swatch",
              key: index,
              "data-index": index,
              "aria-label": "color:" + _ctx.colors.hex,
              role: "button",
              onClick: ($event) => $options.handleSwClick(index, swatch)
            }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
              class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vc-slider-swatch-picker", {
                "vc-slider-swatch-picker--active": $options.isActive(swatch, index),
                "vc-slider-swatch-picker--white": swatch.l === 1
              }]),
              style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
                background: "hsl(" + _ctx.colors.hsl.h + ", " + swatch.s * 100 + "%, " + swatch.l * 100 + "%)"
              })
            }, null, 6)], 8, Slidervue_type_template_id_c87f38e0_hoisted_4);
          }), 128))])]);
        }
        ;
        ;
        const Huevue_type_template_id_d0fd3296_hoisted_1 = ["aria-valuenow"];
        const Huevue_type_template_id_d0fd3296_hoisted_2 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "vc-hue-picker"
        }, null, -1);
        const Huevue_type_template_id_d0fd3296_hoisted_3 = [Huevue_type_template_id_d0fd3296_hoisted_2];
        function Huevue_type_template_id_d0fd3296_render(_ctx, _cache, $props, $setup, $data, $options) {
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
            class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vc-hue", $options.directionClass])
          }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: "vc-hue-container",
            role: "slider",
            "aria-valuenow": $options.colors.hsl.h,
            "aria-valuemin": "0",
            "aria-valuemax": "360",
            ref: "container",
            onMousedown: _cache[0] || (_cache[0] = (...args) => $options.handleMouseDown && $options.handleMouseDown(...args)),
            onTouchmove: _cache[1] || (_cache[1] = (...args) => $options.handleChange && $options.handleChange(...args)),
            onTouchstart: _cache[2] || (_cache[2] = (...args) => $options.handleChange && $options.handleChange(...args))
          }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: "vc-hue-pointer",
            style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
              top: $options.pointerTop,
              left: $options.pointerLeft
            }),
            role: "presentation"
          }, Huevue_type_template_id_d0fd3296_hoisted_3, 4)], 40, Huevue_type_template_id_d0fd3296_hoisted_1)], 2);
        }
        ;
        ;
        var Huevue_type_script_lang_js = {
          name: "Hue",
          props: {
            modelValue: Object,
            direction: {
              type: String,
              // [horizontal | vertical]
              default: "horizontal"
            }
          },
          data() {
            return {
              oldHue: 0,
              pullDirection: ""
            };
          },
          computed: {
            colors() {
              const h = this.modelValue.hsl.h;
              if (h !== 0 && h - this.oldHue > 0) this.pullDirection = "right";
              if (h !== 0 && h - this.oldHue < 0) this.pullDirection = "left";
              this.oldHue = h;
              return this.modelValue;
            },
            directionClass() {
              return {
                "vc-hue--horizontal": this.direction === "horizontal",
                "vc-hue--vertical": this.direction === "vertical"
              };
            },
            pointerTop() {
              if (this.direction === "vertical") {
                if (this.colors.hsl.h === 0 && this.pullDirection === "right") return 0;
                return -(this.colors.hsl.h * 100 / 360) + 100 + "%";
              } else {
                return 0;
              }
            },
            pointerLeft() {
              if (this.direction === "vertical") {
                return 0;
              } else {
                if (this.colors.hsl.h === 0 && this.pullDirection === "right") return "100%";
                return this.colors.hsl.h * 100 / 360 + "%";
              }
            }
          },
          methods: {
            handleChange(e, skip) {
              !skip && e.preventDefault();
              const container = this.$refs.container;
              if (!container) {
                return;
              }
              const containerWidth = container.clientWidth;
              const containerHeight = container.clientHeight;
              const xOffset = container.getBoundingClientRect().left + window.pageXOffset;
              const yOffset = container.getBoundingClientRect().top + window.pageYOffset;
              const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
              const pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
              const left = pageX - xOffset;
              const top = pageY - yOffset;
              let h;
              let percent;
              if (this.direction === "vertical") {
                if (top < 0) {
                  h = 360;
                } else if (top > containerHeight) {
                  h = 0;
                } else {
                  percent = -(top * 100 / containerHeight) + 100;
                  h = 360 * percent / 100;
                }
                if (this.colors.hsl.h !== h) {
                  this.$emit("change", {
                    h,
                    s: this.colors.hsl.s,
                    l: this.colors.hsl.l,
                    a: this.colors.hsl.a,
                    source: "hsl"
                  });
                }
              } else {
                if (left < 0) {
                  h = 0;
                } else if (left > containerWidth) {
                  h = 360;
                } else {
                  percent = left * 100 / containerWidth;
                  h = 360 * percent / 100;
                }
                if (this.colors.hsl.h !== h) {
                  this.$emit("change", {
                    h,
                    s: this.colors.hsl.s,
                    l: this.colors.hsl.l,
                    a: this.colors.hsl.a,
                    source: "hsl"
                  });
                }
              }
            },
            handleMouseDown(e) {
              this.handleChange(e, true);
              window.addEventListener("mousemove", this.handleChange);
              window.addEventListener("mouseup", this.handleMouseUp);
            },
            handleMouseUp(e) {
              this.unbindEventListeners();
            },
            unbindEventListeners() {
              window.removeEventListener("mousemove", this.handleChange);
              window.removeEventListener("mouseup", this.handleMouseUp);
            }
          }
        };
        ;
        var Huevue_type_style_index_0_id_d0fd3296_lang_css = __webpack_require__(6547);
        ;
        ;
        ;
        const Hue_exports_ = (0, exportHelper.Z)(Huevue_type_script_lang_js, [["render", Huevue_type_template_id_d0fd3296_render]]);
        var Hue = Hue_exports_;
        ;
        const DEFAULT_SATURATION = 0.5;
        var Slidervue_type_script_lang_js = {
          name: "Slider",
          mixins: [color],
          props: {
            swatches: {
              type: Array,
              default() {
                return [{
                  s: DEFAULT_SATURATION,
                  l: 0.8
                }, {
                  s: DEFAULT_SATURATION,
                  l: 0.65
                }, {
                  s: DEFAULT_SATURATION,
                  l: 0.5
                }, {
                  s: DEFAULT_SATURATION,
                  l: 0.35
                }, {
                  s: DEFAULT_SATURATION,
                  l: 0.2
                }];
              }
            }
          },
          components: {
            hue: Hue
          },
          computed: {
            normalizedSwatches() {
              const swatches = this.swatches;
              return swatches.map((swatch) => {
                if (typeof swatch !== "object") {
                  return {
                    s: DEFAULT_SATURATION,
                    l: swatch
                  };
                }
                return swatch;
              });
            }
          },
          methods: {
            isActive(swatch, index) {
              const hsl = this.colors.hsl;
              if (hsl.l === 1 && swatch.l === 1) {
                return true;
              }
              if (hsl.l === 0 && swatch.l === 0) {
                return true;
              }
              return Math.abs(hsl.l - swatch.l) < 0.01 && Math.abs(hsl.s - swatch.s) < 0.01;
            },
            hueChange(data) {
              this.colorChange(data);
            },
            handleSwClick(index, swatch) {
              this.colorChange({
                h: this.colors.hsl.h,
                s: swatch.s,
                l: swatch.l,
                source: "hsl"
              });
            }
          }
        };
        ;
        var Slidervue_type_style_index_0_id_c87f38e0_lang_css = __webpack_require__(8016);
        ;
        ;
        ;
        const Slider_exports_ = (0, exportHelper.Z)(Slidervue_type_script_lang_js, [["render", Slidervue_type_template_id_c87f38e0_render]]);
        var Slider = Slider_exports_;
        ;
        const Swatchesvue_type_template_id_3e9acefe_hoisted_1 = ["data-pick"];
        const Swatchesvue_type_template_id_3e9acefe_hoisted_2 = {
          class: "vc-swatches-box",
          role: "listbox"
        };
        const Swatchesvue_type_template_id_3e9acefe_hoisted_3 = ["aria-label", "aria-selected", "data-color", "onClick"];
        const Swatchesvue_type_template_id_3e9acefe_hoisted_4 = {
          class: "vc-swatches-pick"
        };
        const Swatchesvue_type_template_id_3e9acefe_hoisted_5 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("svg", {
          style: {
            "width": "24px",
            "height": "24px"
          },
          viewBox: "0 0 24 24"
        }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
          d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        })], -1);
        const _hoisted_6 = [Swatchesvue_type_template_id_3e9acefe_hoisted_5];
        function Swatchesvue_type_template_id_3e9acefe_render(_ctx, _cache, $props, $setup, $data, $options) {
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
            role: "application",
            "aria-label": "Swatches color picker",
            class: "vc-swatches",
            "data-pick": $options.pick
          }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Swatchesvue_type_template_id_3e9acefe_hoisted_2, [((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($props.palette, (group, $idx) => {
            return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
              class: "vc-swatches-color-group",
              key: $idx
            }, [((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(group, (c) => {
              return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
                class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vc-swatches-color-it", {
                  "vc-swatches-color--white": c === "#FFFFFF"
                }]),
                role: "option",
                "aria-label": "Color:" + c,
                "aria-selected": $options.equal(c),
                key: c,
                "data-color": c,
                style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
                  background: c
                }),
                onClick: ($event) => $options.handlerClick(c)
              }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Swatchesvue_type_template_id_3e9acefe_hoisted_4, _hoisted_6, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, $options.equal(c)]])], 14, Swatchesvue_type_template_id_3e9acefe_hoisted_3);
            }), 128))]);
          }), 128))])], 8, Swatchesvue_type_template_id_3e9acefe_hoisted_1);
        }
        ;
        ;
        var red = {
          "50": "#ffebee",
          "100": "#ffcdd2",
          "200": "#ef9a9a",
          "300": "#e57373",
          "400": "#ef5350",
          "500": "#f44336",
          "600": "#e53935",
          "700": "#d32f2f",
          "800": "#c62828",
          "900": "#b71c1c",
          "a100": "#ff8a80",
          "a200": "#ff5252",
          "a400": "#ff1744",
          "a700": "#d50000"
        };
        var pink = {
          "50": "#fce4ec",
          "100": "#f8bbd0",
          "200": "#f48fb1",
          "300": "#f06292",
          "400": "#ec407a",
          "500": "#e91e63",
          "600": "#d81b60",
          "700": "#c2185b",
          "800": "#ad1457",
          "900": "#880e4f",
          "a100": "#ff80ab",
          "a200": "#ff4081",
          "a400": "#f50057",
          "a700": "#c51162"
        };
        var purple = {
          "50": "#f3e5f5",
          "100": "#e1bee7",
          "200": "#ce93d8",
          "300": "#ba68c8",
          "400": "#ab47bc",
          "500": "#9c27b0",
          "600": "#8e24aa",
          "700": "#7b1fa2",
          "800": "#6a1b9a",
          "900": "#4a148c",
          "a100": "#ea80fc",
          "a200": "#e040fb",
          "a400": "#d500f9",
          "a700": "#aa00ff"
        };
        var deepPurple = {
          "50": "#ede7f6",
          "100": "#d1c4e9",
          "200": "#b39ddb",
          "300": "#9575cd",
          "400": "#7e57c2",
          "500": "#673ab7",
          "600": "#5e35b1",
          "700": "#512da8",
          "800": "#4527a0",
          "900": "#311b92",
          "a100": "#b388ff",
          "a200": "#7c4dff",
          "a400": "#651fff",
          "a700": "#6200ea"
        };
        var indigo = {
          "50": "#e8eaf6",
          "100": "#c5cae9",
          "200": "#9fa8da",
          "300": "#7986cb",
          "400": "#5c6bc0",
          "500": "#3f51b5",
          "600": "#3949ab",
          "700": "#303f9f",
          "800": "#283593",
          "900": "#1a237e",
          "a100": "#8c9eff",
          "a200": "#536dfe",
          "a400": "#3d5afe",
          "a700": "#304ffe"
        };
        var blue = {
          "50": "#e3f2fd",
          "100": "#bbdefb",
          "200": "#90caf9",
          "300": "#64b5f6",
          "400": "#42a5f5",
          "500": "#2196f3",
          "600": "#1e88e5",
          "700": "#1976d2",
          "800": "#1565c0",
          "900": "#0d47a1",
          "a100": "#82b1ff",
          "a200": "#448aff",
          "a400": "#2979ff",
          "a700": "#2962ff"
        };
        var lightBlue = {
          "50": "#e1f5fe",
          "100": "#b3e5fc",
          "200": "#81d4fa",
          "300": "#4fc3f7",
          "400": "#29b6f6",
          "500": "#03a9f4",
          "600": "#039be5",
          "700": "#0288d1",
          "800": "#0277bd",
          "900": "#01579b",
          "a100": "#80d8ff",
          "a200": "#40c4ff",
          "a400": "#00b0ff",
          "a700": "#0091ea"
        };
        var cyan = {
          "50": "#e0f7fa",
          "100": "#b2ebf2",
          "200": "#80deea",
          "300": "#4dd0e1",
          "400": "#26c6da",
          "500": "#00bcd4",
          "600": "#00acc1",
          "700": "#0097a7",
          "800": "#00838f",
          "900": "#006064",
          "a100": "#84ffff",
          "a200": "#18ffff",
          "a400": "#00e5ff",
          "a700": "#00b8d4"
        };
        var teal = {
          "50": "#e0f2f1",
          "100": "#b2dfdb",
          "200": "#80cbc4",
          "300": "#4db6ac",
          "400": "#26a69a",
          "500": "#009688",
          "600": "#00897b",
          "700": "#00796b",
          "800": "#00695c",
          "900": "#004d40",
          "a100": "#a7ffeb",
          "a200": "#64ffda",
          "a400": "#1de9b6",
          "a700": "#00bfa5"
        };
        var green = {
          "50": "#e8f5e9",
          "100": "#c8e6c9",
          "200": "#a5d6a7",
          "300": "#81c784",
          "400": "#66bb6a",
          "500": "#4caf50",
          "600": "#43a047",
          "700": "#388e3c",
          "800": "#2e7d32",
          "900": "#1b5e20",
          "a100": "#b9f6ca",
          "a200": "#69f0ae",
          "a400": "#00e676",
          "a700": "#00c853"
        };
        var lightGreen = {
          "50": "#f1f8e9",
          "100": "#dcedc8",
          "200": "#c5e1a5",
          "300": "#aed581",
          "400": "#9ccc65",
          "500": "#8bc34a",
          "600": "#7cb342",
          "700": "#689f38",
          "800": "#558b2f",
          "900": "#33691e",
          "a100": "#ccff90",
          "a200": "#b2ff59",
          "a400": "#76ff03",
          "a700": "#64dd17"
        };
        var lime = {
          "50": "#f9fbe7",
          "100": "#f0f4c3",
          "200": "#e6ee9c",
          "300": "#dce775",
          "400": "#d4e157",
          "500": "#cddc39",
          "600": "#c0ca33",
          "700": "#afb42b",
          "800": "#9e9d24",
          "900": "#827717",
          "a100": "#f4ff81",
          "a200": "#eeff41",
          "a400": "#c6ff00",
          "a700": "#aeea00"
        };
        var yellow = {
          "50": "#fffde7",
          "100": "#fff9c4",
          "200": "#fff59d",
          "300": "#fff176",
          "400": "#ffee58",
          "500": "#ffeb3b",
          "600": "#fdd835",
          "700": "#fbc02d",
          "800": "#f9a825",
          "900": "#f57f17",
          "a100": "#ffff8d",
          "a200": "#ffff00",
          "a400": "#ffea00",
          "a700": "#ffd600"
        };
        var amber = {
          "50": "#fff8e1",
          "100": "#ffecb3",
          "200": "#ffe082",
          "300": "#ffd54f",
          "400": "#ffca28",
          "500": "#ffc107",
          "600": "#ffb300",
          "700": "#ffa000",
          "800": "#ff8f00",
          "900": "#ff6f00",
          "a100": "#ffe57f",
          "a200": "#ffd740",
          "a400": "#ffc400",
          "a700": "#ffab00"
        };
        var orange = {
          "50": "#fff3e0",
          "100": "#ffe0b2",
          "200": "#ffcc80",
          "300": "#ffb74d",
          "400": "#ffa726",
          "500": "#ff9800",
          "600": "#fb8c00",
          "700": "#f57c00",
          "800": "#ef6c00",
          "900": "#e65100",
          "a100": "#ffd180",
          "a200": "#ffab40",
          "a400": "#ff9100",
          "a700": "#ff6d00"
        };
        var deepOrange = {
          "50": "#fbe9e7",
          "100": "#ffccbc",
          "200": "#ffab91",
          "300": "#ff8a65",
          "400": "#ff7043",
          "500": "#ff5722",
          "600": "#f4511e",
          "700": "#e64a19",
          "800": "#d84315",
          "900": "#bf360c",
          "a100": "#ff9e80",
          "a200": "#ff6e40",
          "a400": "#ff3d00",
          "a700": "#dd2c00"
        };
        var brown = {
          "50": "#efebe9",
          "100": "#d7ccc8",
          "200": "#bcaaa4",
          "300": "#a1887f",
          "400": "#8d6e63",
          "500": "#795548",
          "600": "#6d4c41",
          "700": "#5d4037",
          "800": "#4e342e",
          "900": "#3e2723"
        };
        var grey = {
          "50": "#fafafa",
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121"
        };
        var blueGrey = {
          "50": "#eceff1",
          "100": "#cfd8dc",
          "200": "#b0bec5",
          "300": "#90a4ae",
          "400": "#78909c",
          "500": "#607d8b",
          "600": "#546e7a",
          "700": "#455a64",
          "800": "#37474f",
          "900": "#263238"
        };
        var darkText = {
          "primary": "rgba(0, 0, 0, 0.87)",
          "secondary": "rgba(0, 0, 0, 0.54)",
          "disabled": "rgba(0, 0, 0, 0.38)",
          "dividers": "rgba(0, 0, 0, 0.12)"
        };
        var lightText = {
          "primary": "rgba(255, 255, 255, 1)",
          "secondary": "rgba(255, 255, 255, 0.7)",
          "disabled": "rgba(255, 255, 255, 0.5)",
          "dividers": "rgba(255, 255, 255, 0.12)"
        };
        var darkIcons = {
          "active": "rgba(0, 0, 0, 0.54)",
          "inactive": "rgba(0, 0, 0, 0.38)"
        };
        var lightIcons = {
          "active": "rgba(255, 255, 255, 1)",
          "inactive": "rgba(255, 255, 255, 0.5)"
        };
        var white = "#ffffff";
        var black = "#000000";
        var colors_es2015 = {
          red,
          pink,
          purple,
          deepPurple,
          indigo,
          blue,
          lightBlue,
          cyan,
          teal,
          green,
          lightGreen,
          lime,
          yellow,
          amber,
          orange,
          deepOrange,
          brown,
          grey,
          blueGrey,
          darkText,
          lightText,
          darkIcons,
          lightIcons,
          white,
          black
        };
        ;
        const colorMap = ["red", "pink", "purple", "deepPurple", "indigo", "blue", "lightBlue", "cyan", "teal", "green", "lightGreen", "lime", "yellow", "amber", "orange", "deepOrange", "brown", "blueGrey", "black"];
        const colorLevel = ["900", "700", "500", "300", "100"];
        const Swatchesvue_type_script_lang_js_defaultColors = (() => {
          const colors = [];
          colorMap.forEach((type) => {
            let typeColor = [];
            if (type.toLowerCase() === "black" || type.toLowerCase() === "white") {
              typeColor = typeColor.concat(["#000000", "#FFFFFF"]);
            } else {
              colorLevel.forEach((level) => {
                const color2 = colors_es2015[type][level];
                typeColor.push(color2.toUpperCase());
              });
            }
            colors.push(typeColor);
          });
          return colors;
        })();
        var Swatchesvue_type_script_lang_js = {
          name: "Swatches",
          mixins: [color],
          props: {
            palette: {
              type: Array,
              default() {
                return Swatchesvue_type_script_lang_js_defaultColors;
              }
            }
          },
          computed: {
            pick() {
              return this.colors.hex;
            }
          },
          methods: {
            equal(color2) {
              return color2.toLowerCase() === this.colors.hex.toLowerCase();
            },
            handlerClick(c) {
              this.colorChange({
                hex: c,
                source: "hex"
              });
            }
          }
        };
        ;
        var Swatchesvue_type_style_index_0_id_3e9acefe_lang_css = __webpack_require__(193);
        ;
        ;
        ;
        const Swatches_exports_ = (0, exportHelper.Z)(Swatchesvue_type_script_lang_js, [["render", Swatchesvue_type_template_id_3e9acefe_render]]);
        var Swatches = Swatches_exports_;
        ;
        const Photoshopvue_type_template_id_9851ac8a_hoisted_1 = {
          role: "heading",
          class: "vc-ps-head"
        };
        const Photoshopvue_type_template_id_9851ac8a_hoisted_2 = {
          class: "vc-ps-body"
        };
        const Photoshopvue_type_template_id_9851ac8a_hoisted_3 = {
          class: "vc-ps-saturation-wrap"
        };
        const Photoshopvue_type_template_id_9851ac8a_hoisted_4 = {
          class: "vc-ps-hue-wrap"
        };
        const Photoshopvue_type_template_id_9851ac8a_hoisted_5 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "vc-ps-hue-pointer"
        }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("i", {
          class: "vc-ps-hue-pointer--left"
        }), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("i", {
          class: "vc-ps-hue-pointer--right"
        })], -1);
        const Photoshopvue_type_template_id_9851ac8a_hoisted_6 = {
          class: "vc-ps-previews"
        };
        const _hoisted_7 = {
          class: "vc-ps-previews__label"
        };
        const _hoisted_8 = {
          class: "vc-ps-previews__swatches"
        };
        const _hoisted_9 = ["aria-label"];
        const _hoisted_10 = ["aria-label"];
        const _hoisted_11 = {
          class: "vc-ps-previews__label"
        };
        const _hoisted_12 = {
          key: 0,
          class: "vc-ps-actions"
        };
        const _hoisted_13 = ["aria-label"];
        const _hoisted_14 = ["aria-label"];
        const _hoisted_15 = {
          class: "vc-ps-fields"
        };
        const _hoisted_16 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "vc-ps-fields__divider"
        }, null, -1);
        const _hoisted_17 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "vc-ps-fields__divider"
        }, null, -1);
        function Photoshopvue_type_template_id_9851ac8a_render(_ctx, _cache, $props, $setup, $data, $options) {
          const _component_saturation = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("saturation");
          const _component_hue = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("hue");
          const _component_ed_in = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("ed-in");
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
            role: "application",
            "aria-label": "PhotoShop color picker",
            class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vc-photoshop", $props.disableFields ? "vc-photoshop__disable-fields" : ""])
          }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Photoshopvue_type_template_id_9851ac8a_hoisted_1, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.head), 1), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Photoshopvue_type_template_id_9851ac8a_hoisted_2, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Photoshopvue_type_template_id_9851ac8a_hoisted_3, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_saturation, {
            modelValue: _ctx.colors,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.colors = $event),
            onChange: $options.childChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Photoshopvue_type_template_id_9851ac8a_hoisted_4, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_hue, {
            modelValue: _ctx.colors,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.colors = $event),
            onChange: $options.childChange,
            direction: "vertical"
          }, {
            default: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [Photoshopvue_type_template_id_9851ac8a_hoisted_5]),
            _: 1
          }, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vc-ps-controls", $props.disableFields ? "vc-ps-controls__disable-fields" : ""])
          }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Photoshopvue_type_template_id_9851ac8a_hoisted_6, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_7, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.newLabel), 1), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_8, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: "vc-ps-previews__pr-color",
            "aria-label": `New color is ${_ctx.colors.hex}`,
            style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
              background: _ctx.colors.hex
            })
          }, null, 12, _hoisted_9), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: "vc-ps-previews__pr-color",
            "aria-label": `Current color is ${$data.currentColor}`,
            style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
              background: $data.currentColor
            }),
            onClick: _cache[2] || (_cache[2] = (...args) => $options.clickCurrentColor && $options.clickCurrentColor(...args))
          }, null, 12, _hoisted_10)]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_11, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.currentLabel), 1)]), !$props.disableFields ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_12, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: "vc-ps-ac-btn",
            role: "button",
            "aria-label": $props.acceptLabel,
            onClick: _cache[3] || (_cache[3] = (...args) => $options.handleAccept && $options.handleAccept(...args))
          }, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.acceptLabel), 9, _hoisted_13), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: "vc-ps-ac-btn",
            role: "button",
            "aria-label": $props.cancelLabel,
            onClick: _cache[4] || (_cache[4] = (...args) => $options.handleCancel && $options.handleCancel(...args))
          }, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.cancelLabel), 9, _hoisted_14), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_15, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "h",
            desc: "°",
            modelValue: $options.hsv.h,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "s",
            desc: "%",
            modelValue: $options.hsv.s,
            max: 100,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "v",
            desc: "%",
            modelValue: $options.hsv.v,
            max: 100,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"]), _hoisted_16, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "r",
            modelValue: _ctx.colors.rgba.r,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "g",
            modelValue: _ctx.colors.rgba.g,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "b",
            modelValue: _ctx.colors.rgba.b,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"]), _hoisted_17, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "#",
            class: "vc-ps-fields__hex",
            modelValue: $options.hex,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])]), $props.hasResetButton ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
            key: 0,
            class: "vc-ps-ac-btn",
            "aria-label": "reset",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.handleReset && $options.handleReset(...args))
          }, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.resetLabel), 1)) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)])) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)], 2)])], 2);
        }
        ;
        ;
        const Saturationvue_type_template_id_659348d8_hoisted_1 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "vc-saturation--white"
        }, null, -1);
        const Saturationvue_type_template_id_659348d8_hoisted_2 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "vc-saturation--black"
        }, null, -1);
        const Saturationvue_type_template_id_659348d8_hoisted_3 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "vc-saturation-circle"
        }, null, -1);
        const Saturationvue_type_template_id_659348d8_hoisted_4 = [Saturationvue_type_template_id_659348d8_hoisted_3];
        function Saturationvue_type_template_id_659348d8_render(_ctx, _cache, $props, $setup, $data, $options) {
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
            class: "vc-saturation",
            style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
              background: $options.bgColor
            }),
            ref: "container",
            onMousedown: _cache[0] || (_cache[0] = (...args) => $options.handleMouseDown && $options.handleMouseDown(...args)),
            onTouchmove: _cache[1] || (_cache[1] = (...args) => $options.handleChange && $options.handleChange(...args)),
            onTouchstart: _cache[2] || (_cache[2] = (...args) => $options.handleChange && $options.handleChange(...args))
          }, [Saturationvue_type_template_id_659348d8_hoisted_1, Saturationvue_type_template_id_659348d8_hoisted_2, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: "vc-saturation-pointer",
            style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
              top: $options.pointerTop,
              left: $options.pointerLeft
            })
          }, Saturationvue_type_template_id_659348d8_hoisted_4, 4)], 36);
        }
        ;
        var clamp = __webpack_require__(9428);
        var clamp_default = __webpack_require__.n(clamp);
        var throttle = __webpack_require__(9289);
        ;
        var Saturationvue_type_script_lang_js = {
          name: "Saturation",
          props: {
            modelValue: Object
          },
          computed: {
            colors() {
              return this.modelValue;
            },
            bgColor() {
              return `hsl(${this.colors.hsv.h}, 100%, 50%)`;
            },
            pointerTop() {
              return -(this.colors.hsv.v * 100) + 1 + 100 + "%";
            },
            pointerLeft() {
              return this.colors.hsv.s * 100 + "%";
            }
          },
          methods: {
            throttle: throttle((fn, data) => {
              fn(data);
            }, 20, {
              leading: true,
              trailing: false
            }),
            handleChange(e, skip) {
              !skip && e.preventDefault();
              const container = this.$refs.container;
              if (!container) {
                return;
              }
              const containerWidth = container.clientWidth;
              const containerHeight = container.clientHeight;
              const xOffset = container.getBoundingClientRect().left + window.pageXOffset;
              const yOffset = container.getBoundingClientRect().top + window.pageYOffset;
              const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
              const pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
              const left = clamp_default()(pageX - xOffset, 0, containerWidth);
              const top = clamp_default()(pageY - yOffset, 0, containerHeight);
              const saturation = left / containerWidth;
              const bright = clamp_default()(-(top / containerHeight) + 1, 0, 1);
              this.throttle(this.onChange, {
                h: this.colors.hsv.h,
                s: saturation,
                v: bright,
                a: this.colors.hsv.a,
                source: "hsva"
              });
            },
            onChange(param) {
              this.$emit("change", param);
            },
            handleMouseDown(e) {
              window.addEventListener("mousemove", this.handleChange);
              window.addEventListener("mouseup", this.handleChange);
              window.addEventListener("mouseup", this.handleMouseUp);
            },
            handleMouseUp(e) {
              this.unbindEventListeners();
            },
            unbindEventListeners() {
              window.removeEventListener("mousemove", this.handleChange);
              window.removeEventListener("mouseup", this.handleChange);
              window.removeEventListener("mouseup", this.handleMouseUp);
            }
          }
        };
        ;
        var Saturationvue_type_style_index_0_id_659348d8_lang_css = __webpack_require__(5233);
        ;
        ;
        ;
        const Saturation_exports_ = (0, exportHelper.Z)(Saturationvue_type_script_lang_js, [["render", Saturationvue_type_template_id_659348d8_render]]);
        var Saturation = Saturation_exports_;
        ;
        var Photoshopvue_type_script_lang_js = {
          name: "Photoshop",
          mixins: [color],
          props: {
            head: {
              type: String,
              default: "Color Picker"
            },
            disableFields: {
              type: Boolean,
              default: false
            },
            hasResetButton: {
              type: Boolean,
              default: false
            },
            acceptLabel: {
              type: String,
              default: "OK"
            },
            cancelLabel: {
              type: String,
              default: "Cancel"
            },
            resetLabel: {
              type: String,
              default: "Reset"
            },
            newLabel: {
              type: String,
              default: "new"
            },
            currentLabel: {
              type: String,
              default: "current"
            }
          },
          components: {
            saturation: Saturation,
            hue: Hue,
            // alpha,
            "ed-in": EditableInput
          },
          data() {
            return {
              currentColor: "#FFF"
            };
          },
          computed: {
            hsv() {
              const hsv = this.colors.hsv;
              return {
                h: hsv.h.toFixed(),
                s: (hsv.s * 100).toFixed(),
                v: (hsv.v * 100).toFixed()
              };
            },
            hex() {
              const hex = this.colors.hex;
              return hex && hex.replace("#", "");
            }
          },
          created() {
            this.currentColor = this.colors.hex;
          },
          methods: {
            childChange(data) {
              this.colorChange(data);
            },
            inputChange(data) {
              if (!data) {
                return;
              }
              if (data["#"]) {
                this.isValidHex(data["#"]) && this.colorChange({
                  hex: data["#"],
                  source: "hex"
                });
              } else if (data.r || data.g || data.b || data.a) {
                this.colorChange({
                  r: data.r || this.colors.rgba.r,
                  g: data.g || this.colors.rgba.g,
                  b: data.b || this.colors.rgba.b,
                  a: data.a || this.colors.rgba.a,
                  source: "rgba"
                });
              } else if (data.h || data.s || data.v) {
                this.colorChange({
                  h: data.h || this.colors.hsv.h,
                  s: data.s / 100 || this.colors.hsv.s,
                  v: data.v / 100 || this.colors.hsv.v,
                  source: "hsv"
                });
              }
            },
            clickCurrentColor() {
              this.colorChange({
                hex: this.currentColor,
                source: "hex"
              });
            },
            handleAccept() {
              this.$emit("ok");
            },
            handleCancel() {
              this.$emit("cancel");
            },
            handleReset() {
              this.$emit("reset");
            }
          }
        };
        ;
        var Photoshopvue_type_style_index_0_id_9851ac8a_lang_css = __webpack_require__(1902);
        ;
        ;
        ;
        const Photoshop_exports_ = (0, exportHelper.Z)(Photoshopvue_type_script_lang_js, [["render", Photoshopvue_type_template_id_9851ac8a_render]]);
        var Photoshop = Photoshop_exports_;
        ;
        const Sketchvue_type_template_id_5a577154_hoisted_1 = {
          class: "vc-sketch-saturation-wrap"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_2 = {
          class: "vc-sketch-controls"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_3 = {
          class: "vc-sketch-sliders"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_4 = {
          class: "vc-sketch-hue-wrap"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_5 = {
          key: 0,
          class: "vc-sketch-alpha-wrap"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_6 = {
          class: "vc-sketch-color-wrap"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_7 = ["aria-label"];
        const Sketchvue_type_template_id_5a577154_hoisted_8 = {
          key: 0,
          class: "vc-sketch-field"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_9 = {
          class: "vc-sketch-field--double"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_10 = {
          class: "vc-sketch-field--single"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_11 = {
          class: "vc-sketch-field--single"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_12 = {
          class: "vc-sketch-field--single"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_13 = {
          key: 0,
          class: "vc-sketch-field--single"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_14 = {
          class: "vc-sketch-presets",
          role: "group",
          "aria-label": "A color preset, pick one to set as current color"
        };
        const Sketchvue_type_template_id_5a577154_hoisted_15 = ["aria-label", "onClick"];
        const Sketchvue_type_template_id_5a577154_hoisted_16 = ["aria-label", "onClick"];
        function Sketchvue_type_template_id_5a577154_render(_ctx, _cache, $props, $setup, $data, $options) {
          const _component_saturation = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("saturation");
          const _component_hue = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("hue");
          const _component_alpha = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("alpha");
          const _component_checkboard = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("checkboard");
          const _component_ed_in = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("ed-in");
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
            role: "application",
            "aria-label": "Sketch color picker",
            class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vc-sketch", $props.disableAlpha ? "vc-sketch__disable-alpha" : ""])
          }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Sketchvue_type_template_id_5a577154_hoisted_1, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_saturation, {
            modelValue: _ctx.colors,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.colors = $event),
            onChange: $options.childChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Sketchvue_type_template_id_5a577154_hoisted_2, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Sketchvue_type_template_id_5a577154_hoisted_3, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Sketchvue_type_template_id_5a577154_hoisted_4, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_hue, {
            modelValue: _ctx.colors,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.colors = $event),
            onChange: $options.childChange
          }, null, 8, ["modelValue", "onChange"])]), !$props.disableAlpha ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Sketchvue_type_template_id_5a577154_hoisted_5, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_alpha, {
            modelValue: _ctx.colors,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.colors = $event),
            onChange: $options.childChange
          }, null, 8, ["modelValue", "onChange"])])) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Sketchvue_type_template_id_5a577154_hoisted_6, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            "aria-label": `Current color is ${$options.activeColor}`,
            class: "vc-sketch-active-color",
            style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
              background: $options.activeColor
            })
          }, null, 12, Sketchvue_type_template_id_5a577154_hoisted_7), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_checkboard)])]), !$props.disableFields ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Sketchvue_type_template_id_5a577154_hoisted_8, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Sketchvue_type_template_id_5a577154_hoisted_9, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "hex",
            modelValue: $options.hex,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Sketchvue_type_template_id_5a577154_hoisted_10, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "r",
            modelValue: _ctx.colors.rgba.r,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Sketchvue_type_template_id_5a577154_hoisted_11, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "g",
            modelValue: _ctx.colors.rgba.g,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Sketchvue_type_template_id_5a577154_hoisted_12, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "b",
            modelValue: _ctx.colors.rgba.b,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])]), !$props.disableAlpha ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Sketchvue_type_template_id_5a577154_hoisted_13, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "a",
            modelValue: _ctx.colors.a,
            "arrow-offset": 0.01,
            max: 1,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "arrow-offset", "onChange"])])) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)])) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Sketchvue_type_template_id_5a577154_hoisted_14, [((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($props.presetColors, (c) => {
            return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, [!_ctx.isTransparent(c) ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
              class: "vc-sketch-presets-color",
              "aria-label": "Color:" + c,
              key: "if-" + c,
              style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
                background: c
              }),
              onClick: ($event) => $options.handlePreset(c)
            }, null, 12, Sketchvue_type_template_id_5a577154_hoisted_15)) : ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
              key: "else-" + c,
              "aria-label": "Color:" + c,
              class: "vc-sketch-presets-color",
              onClick: ($event) => $options.handlePreset(c)
            }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_checkboard)], 8, Sketchvue_type_template_id_5a577154_hoisted_16))], 64);
          }), 256))])], 2);
        }
        ;
        ;
        const Alphavue_type_template_id_7db0276a_hoisted_1 = {
          class: "vc-alpha"
        };
        const Alphavue_type_template_id_7db0276a_hoisted_2 = {
          class: "vc-alpha-checkboard-wrap"
        };
        const Alphavue_type_template_id_7db0276a_hoisted_3 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "vc-alpha-picker"
        }, null, -1);
        const Alphavue_type_template_id_7db0276a_hoisted_4 = [Alphavue_type_template_id_7db0276a_hoisted_3];
        function Alphavue_type_template_id_7db0276a_render(_ctx, _cache, $props, $setup, $data, $options) {
          const _component_checkboard = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("checkboard");
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Alphavue_type_template_id_7db0276a_hoisted_1, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Alphavue_type_template_id_7db0276a_hoisted_2, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_checkboard)]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: "vc-alpha-gradient",
            style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
              background: $options.gradientColor
            })
          }, null, 4), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: "vc-alpha-container",
            ref: "container",
            onMousedown: _cache[0] || (_cache[0] = (...args) => $options.handleMouseDown && $options.handleMouseDown(...args)),
            onTouchmove: _cache[1] || (_cache[1] = (...args) => $options.handleChange && $options.handleChange(...args)),
            onTouchstart: _cache[2] || (_cache[2] = (...args) => $options.handleChange && $options.handleChange(...args))
          }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: "vc-alpha-pointer",
            style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
              left: $options.colors.a * 100 + "%"
            })
          }, Alphavue_type_template_id_7db0276a_hoisted_4, 4)], 544)]);
        }
        ;
        ;
        function Checkboardvue_type_template_id_1af7c312_render(_ctx, _cache, $props, $setup, $data, $options) {
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
            class: "vc-checkerboard",
            style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)($options.bgStyle)
          }, null, 4);
        }
        ;
        ;
        const _checkboardCache = {};
        var Checkboardvue_type_script_lang_js = {
          name: "Checkboard",
          props: {
            size: {
              type: [Number, String],
              default: 8
            },
            white: {
              type: String,
              default: "#fff"
            },
            grey: {
              type: String,
              default: "#e6e6e6"
            }
          },
          computed: {
            bgStyle() {
              return {
                "background-image": "url(" + getCheckboard(this.white, this.grey, this.size) + ")"
              };
            }
          }
        };
        function renderCheckboard(c1, c2, size) {
          if (typeof document === "undefined") {
            return null;
          }
          const canvas = document.createElement("canvas");
          canvas.width = canvas.height = size * 2;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            return null;
          }
          ctx.fillStyle = c1;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = c2;
          ctx.fillRect(0, 0, size, size);
          ctx.translate(size, size);
          ctx.fillRect(0, 0, size, size);
          return canvas.toDataURL();
        }
        function getCheckboard(c1, c2, size) {
          const key = c1 + "," + c2 + "," + size;
          if (_checkboardCache[key]) {
            return _checkboardCache[key];
          } else {
            const checkboard = renderCheckboard(c1, c2, size);
            _checkboardCache[key] = checkboard;
            return checkboard;
          }
        }
        ;
        var Checkboardvue_type_style_index_0_id_1af7c312_lang_css = __webpack_require__(3205);
        ;
        ;
        ;
        const Checkboard_exports_ = (0, exportHelper.Z)(Checkboardvue_type_script_lang_js, [["render", Checkboardvue_type_template_id_1af7c312_render]]);
        var Checkboard = Checkboard_exports_;
        ;
        var Alphavue_type_script_lang_js = {
          name: "Alpha",
          props: {
            modelValue: Object,
            onChange: Function
          },
          components: {
            checkboard: Checkboard
          },
          computed: {
            colors() {
              return this.modelValue;
            },
            gradientColor() {
              const rgba = this.colors.rgba;
              const rgbStr = [rgba.r, rgba.g, rgba.b].join(",");
              return "linear-gradient(to right, rgba(" + rgbStr + ", 0) 0%, rgba(" + rgbStr + ", 1) 100%)";
            }
          },
          methods: {
            handleChange(e, skip) {
              !skip && e.preventDefault();
              const container = this.$refs.container;
              if (!container) {
                return;
              }
              const containerWidth = container.clientWidth;
              const xOffset = container.getBoundingClientRect().left + window.pageXOffset;
              const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
              const left = pageX - xOffset;
              let a;
              if (left < 0) {
                a = 0;
              } else if (left > containerWidth) {
                a = 1;
              } else {
                a = Math.round(left * 100 / containerWidth) / 100;
              }
              if (this.colors.a !== a) {
                this.$emit("change", {
                  h: this.colors.hsl.h,
                  s: this.colors.hsl.s,
                  l: this.colors.hsl.l,
                  a,
                  source: "rgba"
                });
              }
            },
            handleMouseDown(e) {
              this.handleChange(e, true);
              window.addEventListener("mousemove", this.handleChange);
              window.addEventListener("mouseup", this.handleMouseUp);
            },
            handleMouseUp() {
              this.unbindEventListeners();
            },
            unbindEventListeners() {
              window.removeEventListener("mousemove", this.handleChange);
              window.removeEventListener("mouseup", this.handleMouseUp);
            }
          }
        };
        ;
        var Alphavue_type_style_index_0_id_7db0276a_lang_css = __webpack_require__(6320);
        ;
        ;
        ;
        const Alpha_exports_ = (0, exportHelper.Z)(Alphavue_type_script_lang_js, [["render", Alphavue_type_template_id_7db0276a_render]]);
        var Alpha = Alpha_exports_;
        ;
        const presetColors = ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF", "rgba(0,0,0,0)"];
        var Sketchvue_type_script_lang_js = {
          name: "Sketch",
          mixins: [color],
          components: {
            saturation: Saturation,
            hue: Hue,
            alpha: Alpha,
            "ed-in": EditableInput,
            checkboard: Checkboard
          },
          props: {
            presetColors: {
              type: Array,
              default() {
                return presetColors;
              }
            },
            disableAlpha: {
              type: Boolean,
              default: false
            },
            disableFields: {
              type: Boolean,
              default: false
            }
          },
          computed: {
            hex() {
              let hex;
              if (this.colors.a < 1) {
                hex = this.colors.hex8;
              } else {
                hex = this.colors.hex;
              }
              return hex.replace("#", "");
            },
            activeColor() {
              const rgba = this.colors.rgba;
              return "rgba(" + [rgba.r, rgba.g, rgba.b, rgba.a].join(",") + ")";
            }
          },
          methods: {
            handlePreset(c) {
              this.colorChange({
                hex: c,
                source: "hex"
              });
            },
            childChange(data) {
              this.colorChange(data);
            },
            inputChange(data) {
              if (!data) {
                return;
              }
              if (data.hex) {
                this.isValidHex(data.hex) && this.colorChange({
                  hex: data.hex,
                  source: "hex"
                });
              } else if (data.r || data.g || data.b || data.a) {
                this.colorChange({
                  r: data.r || this.colors.rgba.r,
                  g: data.g || this.colors.rgba.g,
                  b: data.b || this.colors.rgba.b,
                  a: data.a || this.colors.rgba.a,
                  source: "rgba"
                });
              }
            }
          }
        };
        ;
        var Sketchvue_type_style_index_0_id_5a577154_lang_css = __webpack_require__(5815);
        ;
        ;
        ;
        const Sketch_exports_ = (0, exportHelper.Z)(Sketchvue_type_script_lang_js, [["render", Sketchvue_type_template_id_5a577154_render]]);
        var Sketch = Sketch_exports_;
        ;
        const Chromevue_type_template_id_41feb5bc_hoisted_1 = {
          class: "vc-chrome-saturation-wrap"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_2 = {
          class: "vc-chrome-body"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_3 = {
          class: "vc-chrome-controls"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_4 = {
          class: "vc-chrome-color-wrap"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_5 = ["aria-label"];
        const Chromevue_type_template_id_41feb5bc_hoisted_6 = {
          class: "vc-chrome-sliders"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_7 = {
          class: "vc-chrome-hue-wrap"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_8 = {
          key: 0,
          class: "vc-chrome-alpha-wrap"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_9 = {
          key: 0,
          class: "vc-chrome-fields-wrap"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_10 = {
          class: "vc-chrome-fields"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_11 = {
          class: "vc-chrome-field"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_12 = {
          class: "vc-chrome-fields"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_13 = {
          class: "vc-chrome-field"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_14 = {
          class: "vc-chrome-field"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_15 = {
          class: "vc-chrome-field"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_16 = {
          key: 0,
          class: "vc-chrome-field"
        };
        const Chromevue_type_template_id_41feb5bc_hoisted_17 = {
          class: "vc-chrome-fields"
        };
        const _hoisted_18 = {
          class: "vc-chrome-field"
        };
        const _hoisted_19 = {
          class: "vc-chrome-field"
        };
        const _hoisted_20 = {
          class: "vc-chrome-field"
        };
        const _hoisted_21 = {
          key: 0,
          class: "vc-chrome-field"
        };
        const _hoisted_22 = {
          class: "vc-chrome-toggle-icon"
        };
        const _hoisted_23 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
          fill: "#333",
          d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
        }, null, -1);
        const _hoisted_24 = [_hoisted_23];
        const _hoisted_25 = {
          class: "vc-chrome-toggle-icon-highlight"
        };
        function Chromevue_type_template_id_41feb5bc_render(_ctx, _cache, $props, $setup, $data, $options) {
          const _component_saturation = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("saturation");
          const _component_checkboard = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("checkboard");
          const _component_hue = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("hue");
          const _component_alpha = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("alpha");
          const _component_ed_in = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("ed-in");
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
            role: "application",
            "aria-label": "Chrome color picker",
            class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vc-chrome", $props.disableAlpha ? "vc-chrome__disable-alpha" : ""])
          }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_1, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_saturation, {
            modelValue: _ctx.colors,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.colors = $event),
            onChange: $options.childChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_2, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_3, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_4, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            "aria-label": `current color is ${_ctx.colors.hex}`,
            class: "vc-chrome-active-color",
            style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
              background: $options.activeColor
            })
          }, null, 12, Chromevue_type_template_id_41feb5bc_hoisted_5), !$props.disableAlpha ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_checkboard, {
            key: 0
          })) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_6, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_7, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_hue, {
            modelValue: _ctx.colors,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.colors = $event),
            onChange: $options.childChange
          }, null, 8, ["modelValue", "onChange"])]), !$props.disableAlpha ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Chromevue_type_template_id_41feb5bc_hoisted_8, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_alpha, {
            modelValue: _ctx.colors,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.colors = $event),
            onChange: $options.childChange
          }, null, 8, ["modelValue", "onChange"])])) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)])]), !$props.disableFields ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Chromevue_type_template_id_41feb5bc_hoisted_9, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_10, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_11, [!$options.hasAlpha ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_ed_in, {
            key: 0,
            label: "hex",
            modelValue: _ctx.colors.hex,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), $options.hasAlpha ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_ed_in, {
            key: 1,
            label: "hex",
            modelValue: _ctx.colors.hex8,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, $data.fieldsIndex === 0]]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_12, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_13, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "r",
            modelValue: _ctx.colors.rgba.r,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_14, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "g",
            modelValue: _ctx.colors.rgba.g,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_15, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "b",
            modelValue: _ctx.colors.rgba.b,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])]), !$props.disableAlpha ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Chromevue_type_template_id_41feb5bc_hoisted_16, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "a",
            modelValue: _ctx.colors.a,
            "arrow-offset": 0.01,
            max: 1,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "arrow-offset", "onChange"])])) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, $data.fieldsIndex === 1]]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Chromevue_type_template_id_41feb5bc_hoisted_17, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_18, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "h",
            modelValue: $options.hsl.h,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_19, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "s",
            modelValue: $options.hsl.s,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_20, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "l",
            modelValue: $options.hsl.l,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"])]), !$props.disableAlpha ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_21, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_ed_in, {
            label: "a",
            modelValue: _ctx.colors.a,
            "arrow-offset": 0.01,
            max: 1,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "arrow-offset", "onChange"])])) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, $data.fieldsIndex === 2]]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: "vc-chrome-toggle-btn",
            role: "button",
            "aria-label": "Change another color definition",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.toggleViews && $options.toggleViews(...args))
          }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_22, [((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", {
            style: {
              "width": "24px",
              "height": "24px"
            },
            viewBox: "0 0 24 24",
            onMouseover: _cache[3] || (_cache[3] = (...args) => $options.showHighlight && $options.showHighlight(...args)),
            onMouseenter: _cache[4] || (_cache[4] = (...args) => $options.showHighlight && $options.showHighlight(...args)),
            onMouseout: _cache[5] || (_cache[5] = (...args) => $options.hideHighlight && $options.hideHighlight(...args))
          }, _hoisted_24, 32))]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_25, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, $data.highlight]])])])) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)])], 2);
        }
        ;
        ;
        var Chromevue_type_script_lang_js = {
          name: "Chrome",
          mixins: [color],
          props: {
            disableAlpha: {
              type: Boolean,
              default: false
            },
            disableFields: {
              type: Boolean,
              default: false
            }
          },
          components: {
            saturation: Saturation,
            hue: Hue,
            alpha: Alpha,
            "ed-in": EditableInput,
            checkboard: Checkboard
          },
          data() {
            return {
              fieldsIndex: 0,
              highlight: false
            };
          },
          computed: {
            hsl() {
              const {
                h,
                s,
                l
              } = this.colors.hsl;
              return {
                h: h.toFixed(),
                s: `${(s * 100).toFixed()}%`,
                l: `${(l * 100).toFixed()}%`
              };
            },
            activeColor() {
              const rgba = this.colors.rgba;
              return "rgba(" + [rgba.r, rgba.g, rgba.b, rgba.a].join(",") + ")";
            },
            hasAlpha() {
              return this.colors.a < 1;
            }
          },
          methods: {
            childChange(data) {
              this.colorChange(data);
            },
            inputChange(data) {
              if (!data) {
                return;
              }
              if (data.hex) {
                this.isValidHex(data.hex) && this.colorChange({
                  hex: data.hex,
                  source: "hex"
                });
              } else if (data.r || data.g || data.b || data.a) {
                this.colorChange({
                  r: data.r || this.colors.rgba.r,
                  g: data.g || this.colors.rgba.g,
                  b: data.b || this.colors.rgba.b,
                  a: data.a || this.colors.rgba.a,
                  source: "rgba"
                });
              } else if (data.h || data.s || data.l) {
                const s = data.s ? data.s.replace("%", "") / 100 : this.colors.hsl.s;
                const l = data.l ? data.l.replace("%", "") / 100 : this.colors.hsl.l;
                this.colorChange({
                  h: data.h || this.colors.hsl.h,
                  s,
                  l,
                  source: "hsl"
                });
              }
            },
            toggleViews() {
              if (this.fieldsIndex >= 2) {
                this.fieldsIndex = 0;
                return;
              }
              this.fieldsIndex++;
            },
            showHighlight() {
              this.highlight = true;
            },
            hideHighlight() {
              this.highlight = false;
            }
          }
        };
        ;
        var Chromevue_type_style_index_0_id_41feb5bc_lang_css = __webpack_require__(3647);
        ;
        ;
        ;
        const Chrome_exports_ = (0, exportHelper.Z)(Chromevue_type_script_lang_js, [["render", Chromevue_type_template_id_41feb5bc_render]]);
        var Chrome = Chrome_exports_;
        ;
        const Twittervue_type_template_id_3d2e139c_hoisted_1 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "vc-twitter-triangle-shadow"
        }, null, -1);
        const Twittervue_type_template_id_3d2e139c_hoisted_2 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "vc-twitter-triangle"
        }, null, -1);
        const Twittervue_type_template_id_3d2e139c_hoisted_3 = {
          class: "vc-twitter-body"
        };
        const Twittervue_type_template_id_3d2e139c_hoisted_4 = ["onClick"];
        const Twittervue_type_template_id_3d2e139c_hoisted_5 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "vc-twitter-hash"
        }, "#", -1);
        const Twittervue_type_template_id_3d2e139c_hoisted_6 = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "vc-twitter-clear"
        }, null, -1);
        function Twittervue_type_template_id_3d2e139c_render(_ctx, _cache, $props, $setup, $data, $options) {
          const _component_editable_input = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("editable-input");
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
            class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vc-twitter", {
              "vc-twitter-hide-triangle ": $props.triangle === "hide",
              "vc-twitter-top-left-triangle ": $props.triangle === "top-left",
              "vc-twitter-top-right-triangle ": $props.triangle === "top-right"
            }]),
            style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
              width: typeof $props.width === "number" ? `${$props.width}px` : $props.width
            })
          }, [Twittervue_type_template_id_3d2e139c_hoisted_1, Twittervue_type_template_id_3d2e139c_hoisted_2, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Twittervue_type_template_id_3d2e139c_hoisted_3, [((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($props.defaultColors, (color2, index) => {
            return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("span", {
              class: "vc-twitter-swatch",
              style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
                background: color2,
                boxShadow: `0 0 4px ${$options.equal(color2) ? color2 : "transparent"}`
              }),
              key: index,
              onClick: ($event) => $options.handlerClick(color2)
            }, null, 12, Twittervue_type_template_id_3d2e139c_hoisted_4);
          }), 128)), Twittervue_type_template_id_3d2e139c_hoisted_5, (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_editable_input, {
            label: "#",
            modelValue: $options.hex,
            onChange: $options.inputChange
          }, null, 8, ["modelValue", "onChange"]), Twittervue_type_template_id_3d2e139c_hoisted_6])], 6);
        }
        ;
        ;
        const Twittervue_type_script_lang_js_defaultColors = ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"];
        var Twittervue_type_script_lang_js = {
          name: "Twitter",
          mixins: [color],
          components: {
            editableInput: EditableInput
          },
          props: {
            width: {
              type: [String, Number],
              default: 276
            },
            defaultColors: {
              type: Array,
              default() {
                return Twittervue_type_script_lang_js_defaultColors;
              }
            },
            triangle: {
              default: "top-left",
              validator(value) {
                return ["hide", "top-left", "top-right"].includes(value);
              }
            }
          },
          computed: {
            hsv() {
              const hsv = this.colors.hsv;
              return {
                h: hsv.h.toFixed(),
                s: (hsv.s * 100).toFixed(),
                v: (hsv.v * 100).toFixed()
              };
            },
            hex() {
              const hex = this.colors.hex;
              return hex && hex.replace("#", "");
            }
          },
          methods: {
            equal(color2) {
              return color2.toLowerCase() === this.colors.hex.toLowerCase();
            },
            handlerClick(color2) {
              this.colorChange({
                hex: color2,
                source: "hex"
              });
            },
            inputChange(data) {
              if (!data) {
                return;
              }
              if (data["#"]) {
                this.isValidHex(data["#"]) && this.colorChange({
                  hex: data["#"],
                  source: "hex"
                });
              } else if (data.r || data.g || data.b || data.a) {
                this.colorChange({
                  r: data.r || this.colors.rgba.r,
                  g: data.g || this.colors.rgba.g,
                  b: data.b || this.colors.rgba.b,
                  a: data.a || this.colors.rgba.a,
                  source: "rgba"
                });
              } else if (data.h || data.s || data.v) {
                this.colorChange({
                  h: data.h || this.colors.hsv.h,
                  s: data.s / 100 || this.colors.hsv.s,
                  v: data.v / 100 || this.colors.hsv.v,
                  source: "hsv"
                });
              }
            }
          }
        };
        ;
        var Twittervue_type_style_index_0_id_3d2e139c_lang_css = __webpack_require__(1113);
        ;
        ;
        ;
        const Twitter_exports_ = (0, exportHelper.Z)(Twittervue_type_script_lang_js, [["render", Twittervue_type_template_id_3d2e139c_render]]);
        var Twitter = Twitter_exports_;
        ;
        const version = package_namespaceObject.i8;
        const VueColor = {
          version,
          Compact,
          Grayscale,
          Twitter,
          Material,
          Slider,
          Swatches,
          Photoshop,
          Sketch,
          Chrome,
          Alpha,
          Checkboard,
          EditableInput,
          Hue,
          Saturation,
          ColorMixin: color
        };
        if (!(typeof process === "object" && String(process) === "[object process]")) {
          window.VueColor = VueColor;
        }
        var build = VueColor;
        ;
        var entry_lib = build;
      }();
      module.exports = __webpack_exports__;
    })();
  }
});
export default require_vue3_color_common();
//# sourceMappingURL=@lk77_vue3-color.js.map
