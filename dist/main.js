/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/js/components/DndWithHOC/item.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/js/components/DndWithHOC/item.scss ***!
  \*****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".item {\n  width: 50px;\n  height: 20px;\n  line-height: 20px;\n  border: 1px solid #000;\n  margin-left: 10px;\n  margin-top: 20px;\n  background: #fff;\n}\n.item.dragging {\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/js/components/DndWithHOC/item.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;AACF;AACE;EACE,YAAA;AACJ","sourcesContent":[".item {\n  width: 50px;\n  height: 20px;\n  line-height: 20px;\n  border: 1px solid #000;\n  margin-left: 10px;\n  margin-top: 20px;\n  background: #fff;\n\n  &.dragging {\n    opacity: 0.5;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/js/components/DndWithHOC/item.scss":
/*!************************************************!*\
  !*** ./src/js/components/DndWithHOC/item.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_item_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./item.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/js/components/DndWithHOC/item.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_item_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_item_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var routes_1 = __importDefault(__webpack_require__(/*! ./src/routes */ "./src/routes.ts"));
var TestState = /** @class */ (function (_super) {
    __extends(TestState, _super);
    function TestState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { count: 0 };
        return _this;
    }
    TestState.prototype.componentDidMount = function () {
        var _this = this;
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
        setTimeout(function () {
            _this.setState({ count: _this.state.count + 1 });
            console.log(_this.state.count);
            _this.setState({ count: _this.state.count + 1 });
            console.log(_this.state.count);
        }, 1000);
    };
    TestState.prototype.render = function () {
        console.log('render ', this.state.count);
        return (react_1["default"].createElement("div", null, this.state.count));
    };
    return TestState;
}(react_1["default"].Component));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1["default"].createElement(react_1.Suspense, { fallback: function () { return react_1["default"].createElement("span", null, "loading"); } },
            react_1["default"].createElement(react_router_dom_1.HashRouter, null,
                react_1["default"].createElement("ul", null, routes_1["default"].map(function (r) {
                    return react_1["default"].createElement("li", { key: r.path },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: r.path }, r.name));
                })),
                react_1["default"].createElement(react_router_dom_1.Switch, null, routes_1["default"].map(function (r) {
                    var PageComponent = r.component;
                    return (react_1["default"].createElement(react_router_dom_1.Route, { key: r.path, path: r.path },
                        react_1["default"].createElement(PageComponent, null)));
                })))));
    };
    return App;
}(react_1["default"].Component));
react_dom_1["default"].render(react_1["default"].createElement(App, null), document.getElementById('app'));


/***/ }),

/***/ "./src/js/components/Brick/index.tsx":
/*!*******************************************!*\
  !*** ./src/js/components/Brick/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dnd_1 = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
var react_dnd_html5_backend_1 = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
var mock_1 = __importDefault(__webpack_require__(/*! ./mock */ "./src/js/components/Brick/mock.tsx"));
var TYPE = 'card';
var BrickWrapper = function (_a) {
    var component = _a.component;
    var ref = react_1.useRef(null);
    var _b = react_dnd_1.useDrag({
        type: TYPE,
        item: function () { return ({
            component: component
        }); },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging()
        }); },
    }), isDragging = _b[0].isDragging, drag = _b[1];
    var _c = react_dnd_1.useDrop({
        accept: TYPE,
        collect: function (monitor) { return ({
            handleId: monitor.getHandlerId(),
        }); },
        hover: function (item, monitor) {
            console.log(item);
        }
    }), handleId = _c[0].handleId, drop = _c[1];
    react_1.useEffect(function () {
        drag(drop(ref));
    }, []);
    return (react_1["default"].createElement("div", { ref: ref, style: { opacity: isDragging ? 0 : 1 }, "data-handler-id": handleId }, component.component.render({
        children: component.children && component.children.map(function (child, index) {
            return (react_1["default"].createElement(BrickWrapper, { component: child, key: index }));
        })
    })));
};
function Brick() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_dnd_1.DndProvider, { backend: react_dnd_html5_backend_1.HTML5Backend }, mock_1["default"].map(function (b, index) { return (react_1["default"].createElement(BrickWrapper, { component: b, key: index })); }))));
}
exports.default = Brick;


/***/ }),

/***/ "./src/js/components/Brick/mock.tsx":
/*!******************************************!*\
  !*** ./src/js/components/Brick/mock.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var container = {
    name: 'container',
    id: 1,
    render: function (_a) {
        var children = _a.children;
        return (react_1["default"].createElement("div", { style: { border: '1px solid #000' } },
            "container",
            children));
    }
};
var box = {
    name: 'box',
    id: 2,
    render: function (_a) {
        var children = _a.children;
        return (react_1["default"].createElement("div", { style: { border: '1px solid #000', margin: '10px' } },
            "box",
            children));
    }
};
var bricks = [
    {
        component: container,
        children: [
            { component: box },
            { component: box },
            {
                component: box,
                children: [{ component: box }],
            }
        ]
    },
];
exports.default = bricks;


/***/ }),

/***/ "./src/js/components/DndWithHOC/Container.tsx":
/*!****************************************************!*\
  !*** ./src/js/components/DndWithHOC/Container.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Item_1 = __importDefault(__webpack_require__(/*! ./Item */ "./src/js/components/DndWithHOC/Item.tsx"));
var items = [
    {
        text: 'a',
        id: 1,
    },
    {
        text: 'b',
        id: 2,
    },
    {
        text: 'c',
        id: 3,
    }
];
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: items,
        };
        _this.moveItem = function (dragIndex, hoverIndex) {
            var items = _this.state.items;
            var dragItem = items[dragIndex];
            var hoverItem = items.splice(hoverIndex, 1, dragItem)[0];
            items.splice(dragIndex, 1);
            items.splice(hoverIndex > dragIndex ? hoverIndex : hoverIndex + 1, 0, hoverItem);
            _this.setState({ items: __spreadArray([], items) });
        };
        return _this;
    }
    Container.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", null, this.state.items.map(function (item, i) {
            return react_1["default"].createElement(Item_1["default"], { text: item.text, index: i, id: item.id, moveItem: _this.moveItem, key: item.id });
        })));
    };
    return Container;
}(react_1["default"].Component));
exports.default = Container;


/***/ }),

/***/ "./src/js/components/DndWithHOC/Item.tsx":
/*!***********************************************!*\
  !*** ./src/js/components/DndWithHOC/Item.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.TYPE = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dnd_1 = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
__webpack_require__(/*! ./item.scss */ "./src/js/components/DndWithHOC/item.scss");
exports.TYPE = 'item';
var itemSource = {
    beginDrag: function (props, monitor, component) {
        return { id: props.text, index: props.index };
    },
};
var collectDragSource = function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}); };
var spec = {
    hover: function (props, monitor, component) {
        if (!component)
            return null;
        var dragIndex = monitor.getItem().index;
        var hoverIndex = props.index;
        props.moveItem(dragIndex, hoverIndex);
        monitor.getItem().index = hoverIndex;
    }
};
var collectDropTarget = function (connect, monitor) { return ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
}); };
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(props) {
        return _super.call(this, props) || this;
    }
    Item.prototype.render = function () {
        var _a = this.props, connectDragSource = _a.connectDragSource, classNames = _a.classNames, isDragging = _a.isDragging, connectDropTarget = _a.connectDropTarget;
        return connectDropTarget(connectDragSource(react_1["default"].createElement("div", { className: classnames_1["default"]('item', classNames, { 'dragging': isDragging }) }, this.props.text)));
    };
    Item = __decorate([
        react_dnd_1.DropTarget(exports.TYPE, spec, collectDropTarget),
        react_dnd_1.DragSource(exports.TYPE, itemSource, collectDragSource)
    ], Item);
    return Item;
}(react_1["default"].Component));
exports.default = Item;


/***/ }),

/***/ "./src/js/components/DndWithHOC/index.tsx":
/*!************************************************!*\
  !*** ./src/js/components/DndWithHOC/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dnd_1 = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
var react_dnd_html5_backend_1 = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
var Container_1 = __importDefault(__webpack_require__(/*! ./Container */ "./src/js/components/DndWithHOC/Container.tsx"));
var DNDTest = /** @class */ (function (_super) {
    __extends(DNDTest, _super);
    function DNDTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNDTest.prototype.render = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(react_dnd_1.DndProvider, { backend: react_dnd_html5_backend_1.HTML5Backend },
                react_1["default"].createElement(Container_1["default"], null))));
    };
    return DNDTest;
}(react_1["default"].Component));
exports.default = DNDTest;


/***/ }),

/***/ "./src/js/components/DndWithHook/Container.tsx":
/*!*****************************************************!*\
  !*** ./src/js/components/DndWithHook/Container.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Item_1 = __importDefault(__webpack_require__(/*! ./Item */ "./src/js/components/DndWithHook/Item.tsx"));
var defaultItems = [
    {
        text: 'a',
        id: 11,
    },
    {
        text: 'b',
        id: 12,
    },
    {
        text: 'c',
        id: 13,
    }
];
function Container() {
    var _a = react_1.useState(defaultItems), items = _a[0], setItems = _a[1];
    var moveItem = react_1.useCallback(function (dragIndex, hoverIndex) {
        var dragItem = items[dragIndex];
        if (hoverIndex > dragIndex) {
            var hoverItem = items.splice(hoverIndex, 1, dragItem)[0];
            items.splice(dragIndex, 1);
            items.splice(hoverIndex - 1, 0, hoverItem);
        }
        else {
            var hoverItem = items.splice(hoverIndex, 1, dragItem)[0];
            items.splice(dragIndex, 1);
            items.splice(hoverIndex + 1, 0, hoverItem);
        }
        setItems(__spreadArray([], items));
    }, [items, setItems]);
    return (react_1["default"].createElement("div", null, items.map(function (item, i) {
        return react_1["default"].createElement(Item_1["default"], { text: item.text, index: i, id: item.id, moveItem: moveItem, key: item.id });
    })));
}
exports.default = Container;


/***/ }),

/***/ "./src/js/components/DndWithHook/Item.tsx":
/*!************************************************!*\
  !*** ./src/js/components/DndWithHook/Item.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dnd_1 = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../DndWithHOC/Item.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var TYPE = 'item';
var Item = function (_a) {
    var text = _a.text, index = _a.index, id = _a.id, moveItem = _a.moveItem;
    var _b = react_dnd_1.useDrag(function () { return ({
        type: TYPE,
        item: function () { return ({ index: index, id: id }); },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging()
        }); }
    }); }, [index]), isDragging = _b[0].isDragging, drag = _b[1];
    var _c = react_dnd_1.useDrop({
        accept: TYPE,
        hover: function (item, monitor) {
            var _a;
            if (!ref.current)
                return;
            var dragIndex = item.index;
            var hoverIndex = index;
            if (dragIndex === hoverIndex)
                return;
            // Determine rectangle on screen
            var hoverBoundingRect = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            // Get vertical middle
            var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            var clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            var hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            console.log('item', item.id);
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
            console.log('change index');
        },
        collect: function (monitor) { return ({
            handlerId: monitor.getHandlerId()
        }); }
    }), handlerId = _c[0].handlerId, drop = _c[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        drag(drop(ref));
    });
    return (react_1["default"].createElement("div", { ref: ref, className: classnames_1["default"]('item', { 'dragging': isDragging }), "data-handler-id": handlerId }, text));
};
exports.default = Item;


/***/ }),

/***/ "./src/js/components/DndWithHook/index.tsx":
/*!*************************************************!*\
  !*** ./src/js/components/DndWithHook/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dnd_1 = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
var react_dnd_html5_backend_1 = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
var Container_1 = __importDefault(__webpack_require__(/*! ./Container */ "./src/js/components/DndWithHook/Container.tsx"));
var DNDTest = /** @class */ (function (_super) {
    __extends(DNDTest, _super);
    function DNDTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNDTest.prototype.render = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(react_dnd_1.DndProvider, { backend: react_dnd_html5_backend_1.HTML5Backend },
                react_1["default"].createElement(Container_1["default"], null))));
    };
    return DNDTest;
}(react_1["default"].Component));
exports.default = DNDTest;


/***/ }),

/***/ "./src/js/components/Form/Form.tsx":
/*!*****************************************!*\
  !*** ./src/js/components/Form/Form.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var FormContextProvider_1 = __webpack_require__(/*! ./FormContextProvider */ "./src/js/components/Form/FormContextProvider.tsx");
var FieldForm = function (_a) {
    var children = _a.children, forwardedRef = _a.forwardedRef, otherProps = __rest(_a, ["children", "forwardedRef"]);
    var _b = react_1.useContext(FormContextProvider_1.FormContext), values = _b.values, updateValues = _b.updateValues;
    react_1["default"].useImperativeHandle(forwardedRef, function () { return ({
        setFieldsValue: function (fields) { return updateValues(fields); },
        getFieldsValue: function () { return values; }
    }); });
    return (react_1["default"].createElement("form", null, react_1["default"].Children.map(children, function (child) {
        return react_1["default"].cloneElement(child, {
            onValuesChange: otherProps.onValuesChange
        });
    })));
};
var FormForward = function (props, ref) {
    return (react_1["default"].createElement(FormContextProvider_1.FormContextProvider, null,
        react_1["default"].createElement(FieldForm, __assign({}, props, { forwardedRef: ref }))));
};
// React.forwardRef()
var Form = react_1["default"].forwardRef(FormForward);
exports.default = Form;


/***/ }),

/***/ "./src/js/components/Form/FormContextProvider.tsx":
/*!********************************************************!*\
  !*** ./src/js/components/Form/FormContextProvider.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.FormContextProvider = exports.FormContext = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
exports.FormContext = react_1["default"].createContext({});
var FormContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState({}), values = _b[0], setValues = _b[1];
    var updateValues = react_1.useCallback(function (newValues) {
        setValues(__assign(__assign({}, values), newValues));
    }, [setValues, values]);
    var providerValue = react_1.useMemo(function () { return ({ values: values, updateValues: updateValues }); }, [values, updateValues]);
    return (react_1["default"].createElement(exports.FormContext.Provider, { value: providerValue }, children));
};
exports.FormContextProvider = FormContextProvider;


/***/ }),

/***/ "./src/js/components/Form/FormItem.tsx":
/*!*********************************************!*\
  !*** ./src/js/components/Form/FormItem.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var FormContextProvider_1 = __webpack_require__(/*! ./FormContextProvider */ "./src/js/components/Form/FormContextProvider.tsx");
var FormItem = function (_a) {
    var name = _a.name, label = _a.label, onChange = _a.onChange, onValuesChange = _a.onValuesChange, children = _a.children;
    var _b = react_1.useContext(FormContextProvider_1.FormContext), values = _b.values, updateValues = _b.updateValues;
    var handleChange = react_1.useCallback(function (e) {
        var _a, _b;
        // console.log(e.target.value)
        updateValues((_a = {}, _a[name] = e.target.value, _a));
        onValuesChange && onValuesChange((_b = {}, _b[name] = e.target.value, _b), values);
        onChange && onChange(e.target.value);
    }, [values, updateValues]);
    return (react_1["default"].createElement("div", null,
        label && react_1["default"].createElement("label", null, label),
        react_1["default"].cloneElement(react_1["default"].Children.only(children), {
            onChange: handleChange,
            value: values ? values[name] || '' : '',
        })));
};
exports.default = FormItem;


/***/ }),

/***/ "./src/js/components/Form/index.tsx":
/*!******************************************!*\
  !*** ./src/js/components/Form/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Form_1 = __importDefault(__webpack_require__(/*! ./Form */ "./src/js/components/Form/Form.tsx"));
var FormItem_1 = __importDefault(__webpack_require__(/*! ./FormItem */ "./src/js/components/Form/FormItem.tsx"));
var App = function (props) {
    var ref = react_1.useRef();
    var changeName = react_1.useCallback(function () {
        ref.current.setFieldsValue({ lastname: 'Besty', firstname: 'Xie' });
    }, [ref]);
    var getName = react_1.useCallback(function () {
        console.log(ref.current.getFieldsValue());
    }, [ref]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "This a custom Form component"),
        react_1["default"].createElement(Form_1["default"], { onValuesChange: function (values) { return console.log(values); }, ref: ref },
            react_1["default"].createElement(FormItem_1["default"], { name: 'firstname', label: "\u540D" },
                react_1["default"].createElement("input", null)),
            react_1["default"].createElement(FormItem_1["default"], { name: 'lastname', label: "\u59D3" },
                react_1["default"].createElement("input", null))),
        react_1["default"].createElement("button", { onClick: changeName }, "name = Besty"),
        react_1["default"].createElement("button", { onClick: getName }, "get Name")));
};
exports.default = App;


/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var routes = [
    {
        name: 'antd form 表单',
        path: '/form',
        component: react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./js/components/Form */ "./src/js/components/Form/index.tsx")); }); })
    },
    {
        name: 'React DnD with HOC',
        path: '/dnd-hoc',
        component: react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./js/components/DndWithHOC */ "./src/js/components/DndWithHOC/index.tsx")); }); })
    },
    {
        name: 'React DnD with HOOK',
        path: '/dnd-hook',
        component: react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./js/components/DndWithHook */ "./src/js/components/DndWithHook/index.tsx")); }); })
    },
    {
        name: 'brick',
        path: '/brick',
        component: react_1["default"].lazy(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./js/components/Brick */ "./src/js/components/Brick/index.tsx")); }); })
    }
];
exports.default = routes;


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./index.tsx","vendors-node_modules_classnames_index_js-node_modules_css-loader_dist_runtime_api_js-node_mod-16a1a6"],
/******/ 			["./node_modules/webpack-dev-server/client/index.js?http://localhost:9000","vendors-node_modules_classnames_index_js-node_modules_css-loader_dist_runtime_api_js-node_mod-16a1a6"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_demo"] = self["webpackChunkreact_demo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRG5kV2l0aEhPQy9pdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby8uL3NyYy9qcy9jb21wb25lbnRzL0RuZFdpdGhIT0MvaXRlbS5zY3NzP2M1NjIiLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby8uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvQnJpY2svaW5kZXgudHN4Iiwid2VicGFjazovL3JlYWN0LWRlbW8vLi9zcmMvanMvY29tcG9uZW50cy9Ccmljay9tb2NrLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRG5kV2l0aEhPQy9Db250YWluZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWRlbW8vLi9zcmMvanMvY29tcG9uZW50cy9EbmRXaXRoSE9DL0l0ZW0udHN4Iiwid2VicGFjazovL3JlYWN0LWRlbW8vLi9zcmMvanMvY29tcG9uZW50cy9EbmRXaXRoSE9DL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRG5kV2l0aEhvb2svQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRG5kV2l0aEhvb2svSXRlbS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby8uL3NyYy9qcy9jb21wb25lbnRzL0RuZFdpdGhIb29rL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRm9ybS9Gb3JtLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRm9ybS9Gb3JtQ29udGV4dFByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRm9ybS9Gb3JtSXRlbS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby8uL3NyYy9qcy9jb21wb25lbnRzL0Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovL3JlYWN0LWRlbW8vLi9zcmMvcm91dGVzLnRzIiwid2VicGFjazovL3JlYWN0LWRlbW8vL2hvbWUvYmVzdHkvZGVtby9SZWFjdC1jb21wb25lbnRzL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdHxzeW5jfG5vbnJlY3Vyc2l2ZXwvXlxcLlxcL2xvZyQvIiwid2VicGFjazovL3JlYWN0LWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3JlYWN0LWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3JlYWN0LWRlbW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDK0g7QUFDN0I7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxnQkFBZ0IsaUJBQWlCLHNCQUFzQiwyQkFB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Q0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQSxFOzs7OztXQ1ZBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSw0Q0FBNEM7V0FDNUM7V0FDQSxFOzs7OztVQ3JGQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pdGVtIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLml0ZW0uZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvanMvY29tcG9uZW50cy9EbmRXaXRoSE9DL2l0ZW0uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLml0ZW0ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcblxcbiAgJi5kcmFnZ2luZyB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2l0ZW0uc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9zcmMvcm91dGVzJ1xuXG5jbGFzcyBUZXN0U3RhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgY291bnQ6IDAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudDogdGhpcy5zdGF0ZS5jb3VudCArIDEgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNvdW50KVxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudDogdGhpcy5zdGF0ZS5jb3VudCArIDEgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNvdW50KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY291bnQ6IHRoaXMuc3RhdGUuY291bnQgKyAxIH0pXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNvdW50KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50OiB0aGlzLnN0YXRlLmNvdW50ICsgMSB9KVxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb3VudClcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgY29uc29sZS5sb2coJ3JlbmRlciAnLCB0aGlzLnN0YXRlLmNvdW50KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2Pnt0aGlzLnN0YXRlLmNvdW50fTwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXsoKSA9PiA8c3Bhbj5sb2FkaW5nPC9zcGFuPn0+XG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByb3V0ZXMubWFwKHIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtyLnBhdGh9PjxMaW5rIHRvPXtyLnBhdGh9PntyLm5hbWV9PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByb3V0ZXMubWFwKHIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFBhZ2VDb21wb25lbnQgPSByLmNvbXBvbmVudFxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8Um91dGUga2V5PXtyLnBhdGh9IHBhdGg9e3IucGF0aH0+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlQ29tcG9uZW50IC8+XG4gICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L1N1c3BlbnNlPlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRG5kUHJvdmlkZXIsIHVzZURyYWcsIHVzZURyb3AsIERyYWdTb3VyY2VNb25pdG9yLCBEcm9wVGFyZ2V0TW9uaXRvciB9IGZyb20gJ3JlYWN0LWRuZCdcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJ1xuaW1wb3J0IGJyaWNrcyBmcm9tICcuL21vY2snXG5pbXBvcnQgeyBicmlja3NJdGVtU2hhcGUgfSBmcm9tICcuL3R5cGVzJ1xuXG5jb25zdCBUWVBFID0gJ2NhcmQnXG5cbmludGVyZmFjZSBEcmFnSXRlbSB7XG4gIGNvbXBvbmVudDogYnJpY2tzSXRlbVNoYXBlXG59XG5cbmludGVyZmFjZSBCcmlja1dyYXBwZXJQcm9wcyB7XG4gIGNvbXBvbmVudDogYnJpY2tzSXRlbVNoYXBlXG59XG5cbmNvbnN0IEJyaWNrV3JhcHBlcjogUmVhY3QuRkM8QnJpY2tXcmFwcGVyUHJvcHM+ID0gKHsgY29tcG9uZW50IH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IFt7IGlzRHJhZ2dpbmcgfSwgZHJhZ10gPSB1c2VEcmFnKHtcbiAgICB0eXBlOiBUWVBFLFxuICAgIGl0ZW06ICgpOiBEcmFnSXRlbSA9PiAoe1xuICAgICAgY29tcG9uZW50OiBjb21wb25lbnRcbiAgICB9KSxcbiAgICBjb2xsZWN0OiAobW9uaXRvcjogRHJhZ1NvdXJjZU1vbml0b3IpID0+ICh7XG4gICAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKVxuICAgIH0pLFxuICB9KVxuXG4gIGNvbnN0IFt7IGhhbmRsZUlkIH0sIGRyb3BdID0gdXNlRHJvcCh7XG4gICAgYWNjZXB0OiBUWVBFLFxuICAgIGNvbGxlY3Q6IChtb25pdG9yOiBEcm9wVGFyZ2V0TW9uaXRvcikgPT4gKHtcbiAgICAgIGhhbmRsZUlkOiBtb25pdG9yLmdldEhhbmRsZXJJZCgpLFxuICAgIH0pLFxuICAgIGhvdmVyOiAoaXRlbTogRHJhZ0l0ZW0sIG1vbml0b3I6IERyb3BUYXJnZXRNb25pdG9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgIH1cbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRyYWcoZHJvcChyZWYpKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtyZWZ9IHN0eWxlPXt7IG9wYWNpdHk6IGlzRHJhZ2dpbmcgPyAwIDogMSB9fSBkYXRhLWhhbmRsZXItaWQ9e2hhbmRsZUlkfT5cbiAgICAgIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudC5yZW5kZXIoe1xuICAgICAgICAgIGNoaWxkcmVuOiBjb21wb25lbnQuY2hpbGRyZW4gJiYgY29tcG9uZW50LmNoaWxkcmVuLm1hcCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8QnJpY2tXcmFwcGVyIGNvbXBvbmVudD17Y2hpbGR9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcmljaygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XG4gICAgICAgIHticmlja3MubWFwKChiLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxCcmlja1dyYXBwZXIgY29tcG9uZW50PXtifSBrZXk9e2luZGV4fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvRG5kUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gIClcbn0iLCJpbXBvcnQgeyBCcmlja1NoYXBlLCBicmlja3NJdGVtU2hhcGUgfSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBjb250YWluZXI6IEJyaWNrU2hhcGUgPSB7XG4gIG5hbWU6ICdjb250YWluZXInLFxuICBpZDogMSxcbiAgcmVuZGVyOiAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDAnIH19PlxuICAgICAgICBjb250YWluZXJcbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGJveDogQnJpY2tTaGFwZSA9IHtcbiAgbmFtZTogJ2JveCcsXG4gIGlkOiAyLFxuICByZW5kZXI6ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzAwMCcsIG1hcmdpbjogJzEwcHgnIH19PlxuICAgICAgICBib3hcbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGJyaWNrczogYnJpY2tzSXRlbVNoYXBlW10gPSBbXG4gIHtcbiAgICBjb21wb25lbnQ6IGNvbnRhaW5lcixcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBjb21wb25lbnQ6IGJveCB9LFxuICAgICAgeyBjb21wb25lbnQ6IGJveCB9LFxuICAgICAge1xuICAgICAgICBjb21wb25lbnQ6IGJveCxcbiAgICAgICAgY2hpbGRyZW46IFt7IGNvbXBvbmVudDogYm94IH1dLFxuICAgICAgfVxuICAgIF1cbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgYnJpY2tzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJ1xuXG5pbnRlcmZhY2UgaXRlbVNoYXAge1xuICB0ZXh0OiBzdHJpbmdcbiAgaWQ6IG51bWJlclxufVxuXG5jb25zdCBpdGVtczogaXRlbVNoYXBbXSA9IFtcbiAge1xuICAgIHRleHQ6ICdhJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdiJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdjJyxcbiAgICBpZDogMyxcbiAgfVxuXVxuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaXRlbXM6IGl0ZW1zLFxuICB9XG5cbiAgbW92ZUl0ZW0gPSAoZHJhZ0luZGV4LCBob3ZlckluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBkcmFnSXRlbSA9IGl0ZW1zW2RyYWdJbmRleF1cbiAgICBsZXQgaG92ZXJJdGVtID0gaXRlbXMuc3BsaWNlKGhvdmVySW5kZXgsIDEsIGRyYWdJdGVtKVswXVxuICAgIGl0ZW1zLnNwbGljZShkcmFnSW5kZXgsIDEpXG4gICAgaXRlbXMuc3BsaWNlKGhvdmVySW5kZXggPiBkcmFnSW5kZXggPyBob3ZlckluZGV4IDogaG92ZXJJbmRleCArIDEsIDAsIGhvdmVySXRlbSlcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtczogWy4uLml0ZW1zXSB9KVxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxJdGVtXG4gICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgaW5kZXg9e2l9XG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICBtb3ZlSXRlbT17dGhpcy5tb3ZlSXRlbX1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgRHJhZ1NvdXJjZSxcbiAgQ29ubmVjdERyYWdTb3VyY2UsXG4gIERyYWdTb3VyY2VTcGVjLFxuICBEcmFnU291cmNlQ29ubmVjdG9yLFxuICBEcmFnU291cmNlTW9uaXRvcixcbiAgRHJvcFRhcmdldCxcbiAgRHJvcFRhcmdldFNwZWMsXG4gIERyb3BUYXJnZXRDb25uZWN0b3IsXG4gIERyb3BUYXJnZXRNb25pdG9yLFxuICBDb25uZWN0RHJvcFRhcmdldFxufSBmcm9tICdyZWFjdC1kbmQnXG5pbXBvcnQgY2xzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgJy4vaXRlbS5zY3NzJ1xuXG5pbnRlcmZhY2UgSXRlbURyYWdPYmplY3Qge1xuICBpbmRleDogbnVtYmVyXG4gIGlkOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIEl0ZW1Qcm9wcyB7XG4gIHRleHQ6IHN0cmluZyxcbiAgaW5kZXg6IG51bWJlcixcbiAgaWQ6IG51bWJlcixcbiAgY2xhc3NOYW1lcz86IHN0cmluZyxcbiAgaXNEcmFnZ2luZz86IGJvb2xlYW5cbiAgY29ubmVjdERyYWdTb3VyY2U/OiBDb25uZWN0RHJhZ1NvdXJjZVxuICBjb25uZWN0RHJvcFRhcmdldD86IENvbm5lY3REcm9wVGFyZ2V0XG4gIGlzT3Zlcj86IGJvb2xlYW5cbiAgaXNPdmVyQ3VycmVudD86IGJvb2xlYW5cbiAgY2FuRHJvcD86IGJvb2xlYW5cbiAgbW92ZUl0ZW06IChkcmFnSW5kZXg6IG51bWJlciwgaG92ZXJJbmRleDogbnVtYmVyKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBUWVBFID0gJ2l0ZW0nXG5cbmNvbnN0IGl0ZW1Tb3VyY2U6IERyYWdTb3VyY2VTcGVjPEl0ZW1Qcm9wcz4gPSB7XG4gIGJlZ2luRHJhZzogKHByb3BzOiBJdGVtUHJvcHMsIG1vbml0b3IsIGNvbXBvbmVudCk6IEl0ZW1EcmFnT2JqZWN0ID0+IHtcbiAgICByZXR1cm4geyBpZDogcHJvcHMudGV4dCwgaW5kZXg6IHByb3BzLmluZGV4IH1cbiAgfSxcbn1cblxuY29uc3QgY29sbGVjdERyYWdTb3VyY2UgPSAoY29ubmVjdDogRHJhZ1NvdXJjZUNvbm5lY3RvciwgbW9uaXRvcjogRHJhZ1NvdXJjZU1vbml0b3IpID0+ICh7XG4gIGNvbm5lY3REcmFnU291cmNlOiBjb25uZWN0LmRyYWdTb3VyY2UoKSxcbiAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKClcbn0pXG5cbmNvbnN0IHNwZWM6IERyb3BUYXJnZXRTcGVjPEl0ZW1Qcm9wcz4gPSB7XG4gIGhvdmVyOiAocHJvcHM6IEl0ZW1Qcm9wcywgbW9uaXRvcjogRHJvcFRhcmdldE1vbml0b3IsIGNvbXBvbmVudCkgPT4ge1xuICAgIGlmICghY29tcG9uZW50KSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IGRyYWdJbmRleCA9IG1vbml0b3IuZ2V0SXRlbTxJdGVtRHJhZ09iamVjdD4oKS5pbmRleFxuICAgIGNvbnN0IGhvdmVySW5kZXggPSBwcm9wcy5pbmRleFxuICAgIHByb3BzLm1vdmVJdGVtKGRyYWdJbmRleCwgaG92ZXJJbmRleClcbiAgICBtb25pdG9yLmdldEl0ZW08SXRlbURyYWdPYmplY3Q+KCkuaW5kZXggPSBob3ZlckluZGV4XG4gIH1cbn1cblxuY29uc3QgY29sbGVjdERyb3BUYXJnZXQgPSAoY29ubmVjdDogRHJvcFRhcmdldENvbm5lY3RvciwgbW9uaXRvcjogRHJvcFRhcmdldE1vbml0b3IpID0+ICh7XG4gIGNvbm5lY3REcm9wVGFyZ2V0OiBjb25uZWN0LmRyb3BUYXJnZXQoKSxcbiAgaXNPdmVyOiBtb25pdG9yLmlzT3ZlcigpLFxuICBpc092ZXJDdXJyZW50OiBtb25pdG9yLmlzT3Zlcih7IHNoYWxsb3c6IHRydWUgfSksXG4gIGNhbkRyb3A6IG1vbml0b3IuY2FuRHJvcCgpLFxufSlcblxuQERyb3BUYXJnZXQoVFlQRSwgc3BlYywgY29sbGVjdERyb3BUYXJnZXQpXG5ARHJhZ1NvdXJjZShUWVBFLCBpdGVtU291cmNlLCBjb2xsZWN0RHJhZ1NvdXJjZSlcbmNsYXNzIEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SXRlbVByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29ubmVjdERyYWdTb3VyY2UsIGNsYXNzTmFtZXMsIGlzRHJhZ2dpbmcsIGNvbm5lY3REcm9wVGFyZ2V0IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIGNvbm5lY3REcm9wVGFyZ2V0KGNvbm5lY3REcmFnU291cmNlKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NscygnaXRlbScsIGNsYXNzTmFtZXMsIHsgJ2RyYWdnaW5nJzogaXNEcmFnZ2luZyB9KX0+e3RoaXMucHJvcHMudGV4dH08L2Rpdj5cbiAgICApKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCdcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE5EVGVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17SFRNTDVCYWNrZW5kfT5cbiAgICAgICAgICA8Q29udGFpbmVyIC8+XG4gICAgICAgIDwvRG5kUHJvdmlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nXG5cbmludGVyZmFjZSBpdGVtU2hhcCB7XG4gIHRleHQ6IHN0cmluZ1xuICBpZDogbnVtYmVyXG59XG5cbmNvbnN0IGRlZmF1bHRJdGVtczogaXRlbVNoYXBbXSA9IFtcbiAge1xuICAgIHRleHQ6ICdhJyxcbiAgICBpZDogMTEsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnYicsXG4gICAgaWQ6IDEyLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ2MnLFxuICAgIGlkOiAxMyxcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShkZWZhdWx0SXRlbXMpXG5cbiAgY29uc3QgbW92ZUl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAoZHJhZ0luZGV4LCBob3ZlckluZGV4KSA9PiB7XG4gICAgICBsZXQgZHJhZ0l0ZW0gPSBpdGVtc1tkcmFnSW5kZXhdXG5cbiAgICAgIGlmIChob3ZlckluZGV4ID4gZHJhZ0luZGV4KSB7XG4gICAgICAgIGxldCBob3Zlckl0ZW0gPSBpdGVtcy5zcGxpY2UoaG92ZXJJbmRleCwgMSwgZHJhZ0l0ZW0pWzBdXG4gICAgICAgIGl0ZW1zLnNwbGljZShkcmFnSW5kZXgsIDEpXG4gICAgICAgIGl0ZW1zLnNwbGljZShob3ZlckluZGV4IC0gMSwgMCwgaG92ZXJJdGVtKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGhvdmVySXRlbSA9IGl0ZW1zLnNwbGljZShob3ZlckluZGV4LCAxLCBkcmFnSXRlbSlbMF1cbiAgICAgICAgaXRlbXMuc3BsaWNlKGRyYWdJbmRleCwgMSlcbiAgICAgICAgaXRlbXMuc3BsaWNlKGhvdmVySW5kZXggKyAxLCAwLCBob3Zlckl0ZW0pXG4gICAgICB9XG5cbiAgICAgIHNldEl0ZW1zKFsuLi5pdGVtc10pXG4gICAgfSxcbiAgICBbaXRlbXMsIHNldEl0ZW1zXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge1xuICAgICAgICBpdGVtcy5tYXAoKGl0ZW06IGl0ZW1TaGFwLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gPEl0ZW1cbiAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cbiAgICAgICAgICAgIGluZGV4PXtpfVxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICBtb3ZlSXRlbT17bW92ZUl0ZW19XG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEcmFnLCB1c2VEcm9wLCBEcmFnU291cmNlTW9uaXRvciwgRHJvcFRhcmdldE1vbml0b3IgfSBmcm9tICdyZWFjdC1kbmQnXG5pbXBvcnQgY2xzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBYWUNvb3JkIH0gZnJvbSAnZG5kLWNvcmUnXG5pbXBvcnQgJy4uL0RuZFdpdGhIT0MvSXRlbS5zY3NzJ1xuXG5jb25zdCBUWVBFID0gJ2l0ZW0nXG5cbmNvbnN0IEl0ZW06IFJlYWN0LkZDPGl0ZW1Qcm9wc1NoYXA+ID0gKHsgdGV4dCwgaW5kZXgsIGlkLCBtb3ZlSXRlbSB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnXSA9IHVzZURyYWcoKCkgPT4gKHtcbiAgICB0eXBlOiBUWVBFLFxuICAgIGl0ZW06ICgpOiBJdGVtT2JqZWN0ID0+ICh7IGluZGV4LCBpZCB9KSxcbiAgICBjb2xsZWN0OiAobW9uaXRvcjogRHJhZ1NvdXJjZU1vbml0b3IpID0+ICh7XG4gICAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKVxuICAgIH0pXG4gIH0pLCBbaW5kZXhdKVxuXG4gIGNvbnN0IFt7IGhhbmRsZXJJZCB9LCBkcm9wXSA9IHVzZURyb3Aoe1xuICAgIGFjY2VwdDogVFlQRSxcbiAgICBob3ZlcjogKGl0ZW06IEl0ZW1PYmplY3QsIG1vbml0b3I6IERyb3BUYXJnZXRNb25pdG9yKSA9PiB7XG4gICAgICBpZiAoIXJlZi5jdXJyZW50KSByZXR1cm5cbiAgICAgIGNvbnN0IGRyYWdJbmRleCA9IGl0ZW0uaW5kZXhcbiAgICAgIGNvbnN0IGhvdmVySW5kZXggPSBpbmRleFxuXG4gICAgICBpZiAoZHJhZ0luZGV4ID09PSBob3ZlckluZGV4KSByZXR1cm5cblxuICAgICAgLy8gRGV0ZXJtaW5lIHJlY3RhbmdsZSBvbiBzY3JlZW5cbiAgICAgIGNvbnN0IGhvdmVyQm91bmRpbmdSZWN0ID0gcmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIC8vIEdldCB2ZXJ0aWNhbCBtaWRkbGVcbiAgICAgIGNvbnN0IGhvdmVyTWlkZGxlWSA9XG4gICAgICAgIChob3ZlckJvdW5kaW5nUmVjdC5ib3R0b20gLSBob3ZlckJvdW5kaW5nUmVjdC50b3ApIC8gMlxuXG4gICAgICAvLyBEZXRlcm1pbmUgbW91c2UgcG9zaXRpb25cbiAgICAgIGNvbnN0IGNsaWVudE9mZnNldCA9IG1vbml0b3IuZ2V0Q2xpZW50T2Zmc2V0KClcblxuICAgICAgLy8gR2V0IHBpeGVscyB0byB0aGUgdG9wXG4gICAgICBjb25zdCBob3ZlckNsaWVudFkgPSAoY2xpZW50T2Zmc2V0IGFzIFhZQ29vcmQpLnkgLSBob3ZlckJvdW5kaW5nUmVjdC50b3BcblxuICAgICAgLy8gT25seSBwZXJmb3JtIHRoZSBtb3ZlIHdoZW4gdGhlIG1vdXNlIGhhcyBjcm9zc2VkIGhhbGYgb2YgdGhlIGl0ZW1zIGhlaWdodFxuICAgICAgLy8gV2hlbiBkcmFnZ2luZyBkb3dud2FyZHMsIG9ubHkgbW92ZSB3aGVuIHRoZSBjdXJzb3IgaXMgYmVsb3cgNTAlXG4gICAgICAvLyBXaGVuIGRyYWdnaW5nIHVwd2FyZHMsIG9ubHkgbW92ZSB3aGVuIHRoZSBjdXJzb3IgaXMgYWJvdmUgNTAlXG5cbiAgICAgIC8vIERyYWdnaW5nIGRvd253YXJkc1xuICAgICAgaWYgKGRyYWdJbmRleCA8IGhvdmVySW5kZXggJiYgaG92ZXJDbGllbnRZIDwgaG92ZXJNaWRkbGVZKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBEcmFnZ2luZyB1cHdhcmRzXG4gICAgICBpZiAoZHJhZ0luZGV4ID4gaG92ZXJJbmRleCAmJiBob3ZlckNsaWVudFkgPiBob3Zlck1pZGRsZVkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKCdpdGVtJywgaXRlbS5pZClcbiAgICAgIG1vdmVJdGVtKGRyYWdJbmRleCwgaG92ZXJJbmRleClcblxuICAgICAgaXRlbS5pbmRleCA9IGhvdmVySW5kZXhcbiAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UgaW5kZXgnKVxuICAgIH0sXG4gICAgY29sbGVjdDogKG1vbml0b3I6IERyb3BUYXJnZXRNb25pdG9yKSA9PiAoe1xuICAgICAgaGFuZGxlcklkOiBtb25pdG9yLmdldEhhbmRsZXJJZCgpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZHJhZyhkcm9wKHJlZikpXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9e2NscygnaXRlbScsIHsgJ2RyYWdnaW5nJzogaXNEcmFnZ2luZyB9KX0gZGF0YS1oYW5kbGVyLWlkPXtoYW5kbGVySWR9Pnt0ZXh0fTwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBJdGVtIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1kbmQnXG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERORFRlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XG4gICAgICAgICAgPENvbnRhaW5lciAvPlxuICAgICAgICA8L0RuZFByb3ZpZGVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtQ29udGV4dFByb3ZpZGVyLCBGb3JtQ29udGV4dCB9IGZyb20gJy4vRm9ybUNvbnRleHRQcm92aWRlcidcblxuY29uc3QgRmllbGRGb3JtOiBSZWFjdC5GQzxGb3JtUHJvcHM+ID0gKHsgY2hpbGRyZW4sIGZvcndhcmRlZFJlZiwgLi4ub3RoZXJQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgdmFsdWVzLCB1cGRhdGVWYWx1ZXMgfSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpIGFzIEZvcm1Db250ZXh0VHlwZVxuXG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoZm9yd2FyZGVkUmVmLCAoKSA9PiAoe1xuICAgIHNldEZpZWxkc1ZhbHVlOiAoZmllbGRzKSA9PiB1cGRhdGVWYWx1ZXMoZmllbGRzKSxcbiAgICBnZXRGaWVsZHNWYWx1ZTogKCkgPT4gdmFsdWVzXG4gIH0pKVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0+XG4gICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2U6IG90aGVyUHJvcHMub25WYWx1ZXNDaGFuZ2VcbiAgICAgICAgfSlcbiAgICAgIH0pfVxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBGb3JtRm9yd2FyZDogUmVhY3QuRm9yd2FyZFJlZlJlbmRlckZ1bmN0aW9uPEZvcm1JbnN0YW5jZSwgRm9ybVByb3BzPiA9IChwcm9wcywgcmVmKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250ZXh0UHJvdmlkZXI+XG4gICAgICA8RmllbGRGb3JtIHsuLi5wcm9wc30gZm9yd2FyZGVkUmVmPXtyZWZ9IC8+XG4gICAgPC9Gb3JtQ29udGV4dFByb3ZpZGVyPlxuICApXG59XG4vLyBSZWFjdC5mb3J3YXJkUmVmKClcbmNvbnN0IEZvcm0gPSBSZWFjdC5mb3J3YXJkUmVmKEZvcm1Gb3J3YXJkKVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZU1lbW99IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgRm9ybUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5leHBvcnQgY29uc3QgRm9ybUNvbnRleHRQcm92aWRlcjogUmVhY3QuRkMgPSAoe2NoaWxkcmVufSkgPT4ge1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IHVwZGF0ZVZhbHVlcyA9IHVzZUNhbGxiYWNrKChuZXdWYWx1ZXMpID0+IHtcbiAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgLi4ubmV3VmFsdWVzfSlcbiAgfSwgW3NldFZhbHVlcywgdmFsdWVzXSlcblxuICBjb25zdCBwcm92aWRlclZhbHVlID0gdXNlTWVtbygoKSA9PiAoe3ZhbHVlcywgdXBkYXRlVmFsdWVzfSksXG4gICAgW3ZhbHVlcywgdXBkYXRlVmFsdWVzXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb3ZpZGVyVmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0Zvcm1Db250ZXh0fSBmcm9tICcuL0Zvcm1Db250ZXh0UHJvdmlkZXInXG5cbmNvbnN0IEZvcm1JdGVtOiBSZWFjdC5GQzxGb3JtSXRlbVByb3BzPiA9ICh7bmFtZSwgbGFiZWwsIG9uQ2hhbmdlLCBvblZhbHVlc0NoYW5nZSwgY2hpbGRyZW59KSA9PiB7XG4gIGNvbnN0IHt2YWx1ZXMsIHVwZGF0ZVZhbHVlc30gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KSBhcyBGb3JtQ29udGV4dFR5cGVcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgIHVwZGF0ZVZhbHVlcyh7IFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICBvblZhbHVlc0NoYW5nZSAmJiBvblZhbHVlc0NoYW5nZSh7IFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSwgdmFsdWVzKVxuICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKVxuICB9LCBbdmFsdWVzLCB1cGRhdGVWYWx1ZXNdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtsYWJlbCAmJiA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+fVxuICAgICAge1JlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbiBhcyBSZWFjdC5SZWFjdEVsZW1lbnQpLFxuICAgICAgICB7XG4gICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVzID8gdmFsdWVzW25hbWVdIHx8ICcnIDogJycsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUl0ZW0iLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBGb3JtIGZyb20gJy4vRm9ybSdcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL0Zvcm1JdGVtJ1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJlZj0gdXNlUmVmPEZvcm1JbnN0YW5jZT4oKVxuXG4gIGNvbnN0IGNoYW5nZU5hbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQuc2V0RmllbGRzVmFsdWUoeyBsYXN0bmFtZTogJ0Jlc3R5JywgZmlyc3RuYW1lOiAnWGllJ30pXG4gIH0sIFtyZWZdKVxuXG4gIGNvbnN0IGdldE5hbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVmLmN1cnJlbnQuZ2V0RmllbGRzVmFsdWUoKSlcbiAgfSwgW3JlZl0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlRoaXMgYSBjdXN0b20gRm9ybSBjb21wb25lbnQ8L2gxPlxuICAgICAgPEZvcm0gb25WYWx1ZXNDaGFuZ2U9e3ZhbHVlcyA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfSByZWY9e3JlZn0+XG4gICAgICAgIDxGb3JtSXRlbSBuYW1lPSdmaXJzdG5hbWUnIGxhYmVsPVwi5ZCNXCI+XG4gICAgICAgICAgPGlucHV0IC8+XG4gICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgIDxGb3JtSXRlbSBuYW1lPSdsYXN0bmFtZScgbGFiZWw9XCLlp5NcIj5cbiAgICAgICAgICA8aW5wdXQgLz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxidXR0b24gb25DbGljaz17Y2hhbmdlTmFtZX0+bmFtZSA9IEJlc3R5PC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldE5hbWV9PmdldCBOYW1lPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgUm91dGVTaGFwZSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgcGF0aDogc3RyaW5nLFxuICBjb21wb25lbnQ6IFJlYWN0LkxhenlFeG90aWNDb21wb25lbnQ8UmVhY3QuQ29tcG9uZW50VHlwZT4sXG59XG5cbmNvbnN0IHJvdXRlczogUm91dGVTaGFwZVtdID0gW1xuICB7XG4gICAgbmFtZTogJ2FudGQgZm9ybSDooajljZUnLFxuICAgIHBhdGg6ICcvZm9ybScsXG4gICAgY29tcG9uZW50OiBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9qcy9jb21wb25lbnRzL0Zvcm0nKSlcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdSZWFjdCBEbkQgd2l0aCBIT0MnLFxuICAgIHBhdGg6ICcvZG5kLWhvYycsXG4gICAgY29tcG9uZW50OiBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9qcy9jb21wb25lbnRzL0RuZFdpdGhIT0MnKSlcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdSZWFjdCBEbkQgd2l0aCBIT09LJyxcbiAgICBwYXRoOiAnL2RuZC1ob29rJyxcbiAgICBjb21wb25lbnQ6IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL2pzL2NvbXBvbmVudHMvRG5kV2l0aEhvb2snKSlcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdicmljaycsXG4gICAgcGF0aDogJy9icmljaycsXG4gICAgY29tcG9uZW50OiBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9qcy9jb21wb25lbnRzL0JyaWNrJykpXG4gIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdCBzeW5jIF5cXFxcLlxcXFwvbG9nJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbi8vIEl0J3MgZW1wdHkgYXMgc29tZSBydW50aW1lIG1vZHVsZSBoYW5kbGVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9pbmRleC50c3hcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2NsYXNzbmFtZXNfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZC0xNmExYTZcIl0sXG5cdFtcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvaW5kZXguanM/aHR0cDovL2xvY2FsaG9zdDo5MDAwXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jbGFzc25hbWVzX2luZGV4X2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2QtMTZhMWE2XCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0geCA9PiB7fTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWUsIGV4ZWN1dGVNb2R1bGVzXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3JlYWN0X2RlbW9cIl0gPSBzZWxmW1wid2VicGFja0NodW5rcmVhY3RfZGVtb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7XG5cbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG52YXIgc3RhcnR1cCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gc3RhcnR1cCB8fCAoeCA9PiB7fSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59OyIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==