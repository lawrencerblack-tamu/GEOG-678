"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a;
var decorators_1 = require("esri/core/accessorSupport/decorators");
var Widget = require("esri/widgets/Widget");
var widget_1 = require("esri/widgets/support/widget");
var CSS = {
    base: "esri-hello-world",
    emphasis: "esri-hello-world--emphasis"
};
var HelloWorld = function () {
    var _classDecorators = [(0, decorators_1.subclass)("esri.widgets.HelloWorld")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = (0, decorators_1.declared)(Widget);
    var _firstName_decorators;
    var _firstName_initializers = [];
    var _firstName_extraInitializers = [];
    var _lastName_decorators;
    var _lastName_initializers = [];
    var _lastName_extraInitializers = [];
    var _isCool_decorators;
    var _isCool_initializers = [];
    var _isCool_extraInitializers = [];
    var HelloWorld = _classThis = /** @class */ (function (_super) {
        __extends(HelloWorld_1, _super);
        function HelloWorld_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.firstName = __runInitializers(_this, _firstName_initializers, "YOURNAMEHERE");
            _this.lastName = (__runInitializers(_this, _firstName_extraInitializers), __runInitializers(_this, _lastName_initializers, "YOURNAMEHERE"));
            _this.isCool = (__runInitializers(_this, _lastName_extraInitializers), __runInitializers(_this, _isCool_initializers, true));
            __runInitializers(_this, _isCool_extraInitializers);
            return _this;
        }
        return HelloWorld_1;
    }(_classSuper));
    __setFunctionName(_classThis, "HelloWorld");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _firstName_decorators = [(0, decorators_1.property)(), (0, widget_1.renderable)()];
        _lastName_decorators = [(0, decorators_1.property)(), (0, widget_1.renderable)()];
        _isCool_decorators = [(0, decorators_1.property)(), (0, widget_1.renderable)()];
        __esDecorate(null, null, _firstName_decorators, { kind: "field", name: "firstName", static: false, private: false, access: { has: function (obj) { return "firstName" in obj; }, get: function (obj) { return obj.firstName; }, set: function (obj, value) { obj.firstName = value; } }, metadata: _metadata }, _firstName_initializers, _firstName_extraInitializers);
        __esDecorate(null, null, _lastName_decorators, { kind: "field", name: "lastName", static: false, private: false, access: { has: function (obj) { return "lastName" in obj; }, get: function (obj) { return obj.lastName; }, set: function (obj, value) { obj.lastName = value; } }, metadata: _metadata }, _lastName_initializers, _lastName_extraInitializers);
        __esDecorate(null, null, _isCool_decorators, { kind: "field", name: "isCool", static: false, private: false, access: { has: function (obj) { return "isCool" in obj; }, get: function (obj) { return obj.isCool; }, set: function (obj, value) { obj.isCool = value; } }, metadata: _metadata }, _isCool_initializers, _isCool_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HelloWorld = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HelloWorld = _classThis;
}();
render();
{
    var greeting = this._getGreeting();
    var classes = (_a = {},
        _a[CSS.emphasis] = this.isCool,
        _a);
    return (<div bind={this} class={CSS.base} classes={classes}>
    {greeting}
    </div>);
    _getGreeting();
    string;
    {
        return "Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, "!");
    }
}
module.exports = HelloWorld;
