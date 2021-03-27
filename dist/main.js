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
    var component = _a.component, parent = _a.parent, index = _a.index;
    var ref = react_1.useRef(null);
    var _b = react_dnd_1.useDrag({
        type: TYPE,
        item: function () { return ({
            component: component,
            parent: parent,
            index: index,
        }); },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging()
        }); },
    }, [component, parent, index]), isDragging = _b[0].isDragging, drag = _b[1];
    var _c = react_dnd_1.useDrop({
        accept: TYPE,
        collect: function (monitor) { return ({
            handleId: monitor.getHandlerId(),
        }); },
        hover: function (item, monitor) {
            var dragIndex = item.index, dragParent = item.parent;
            var _a = monitor.getItem(), hoverIndex = _a.index, hoverParent = _a.parent;
            if (dragParent !== hoverParent) {
                var dragItem = dragParent.splice(dragIndex, 1)[0];
                hoverParent.push(dragItem);
            }
            console.log('dragParent', dragParent);
            console.log('hoverParent', hoverParent);
        }
    }), handleId = _c[0].handleId, drop = _c[1];
    react_1.useEffect(function () {
        drag(drop(ref));
    }, []);
    return (react_1["default"].createElement("div", { ref: ref, style: { opacity: isDragging ? 0 : 1 }, "data-handler-id": handleId }, component.component.render({
        children: component.children && component.children.map(function (child, index) {
            return (react_1["default"].createElement(BrickWrapper, { component: child, parent: component.children, index: index, key: index }));
        })
    })));
};
function Brick() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_dnd_1.DndProvider, { backend: react_dnd_html5_backend_1.HTML5Backend }, mock_1["default"].map(function (b, index) { return (react_1["default"].createElement(BrickWrapper, { component: b, parent: mock_1["default"], index: index, key: index })); }))));
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
// import '../DndWithHOC/Item.scss'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRG5kV2l0aEhPQy9pdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby8uL3NyYy9qcy9jb21wb25lbnRzL0RuZFdpdGhIT0MvaXRlbS5zY3NzP2M1NjIiLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby8uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvQnJpY2svaW5kZXgudHN4Iiwid2VicGFjazovL3JlYWN0LWRlbW8vLi9zcmMvanMvY29tcG9uZW50cy9Ccmljay9tb2NrLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRG5kV2l0aEhPQy9Db250YWluZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWRlbW8vLi9zcmMvanMvY29tcG9uZW50cy9EbmRXaXRoSE9DL0l0ZW0udHN4Iiwid2VicGFjazovL3JlYWN0LWRlbW8vLi9zcmMvanMvY29tcG9uZW50cy9EbmRXaXRoSE9DL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRG5kV2l0aEhvb2svQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRG5kV2l0aEhvb2svSXRlbS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby8uL3NyYy9qcy9jb21wb25lbnRzL0RuZFdpdGhIb29rL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRm9ybS9Gb3JtLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRm9ybS9Gb3JtQ29udGV4dFByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vc3JjL2pzL2NvbXBvbmVudHMvRm9ybS9Gb3JtSXRlbS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby8uL3NyYy9qcy9jb21wb25lbnRzL0Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovL3JlYWN0LWRlbW8vLi9zcmMvcm91dGVzLnRzIiwid2VicGFjazovL3JlYWN0LWRlbW8vL2hvbWUvYmVzdHkvZGVtby9SZWFjdC1jb21wb25lbnRzL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdHxzeW5jfG5vbnJlY3Vyc2l2ZXwvXlxcLlxcL2xvZyQvIiwid2VicGFjazovL3JlYWN0LWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3JlYWN0LWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3JlYWN0LWRlbW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDK0g7QUFDN0I7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxnQkFBZ0IsaUJBQWlCLHNCQUFzQiwyQkFB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O1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSw0Q0FBNEM7V0FDNUM7V0FDQSxFOzs7OztVQ3JGQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pdGVtIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLml0ZW0uZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvanMvY29tcG9uZW50cy9EbmRXaXRoSE9DL2l0ZW0uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLml0ZW0ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcblxcbiAgJi5kcmFnZ2luZyB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2l0ZW0uc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9zcmMvcm91dGVzJ1xuXG5jbGFzcyBUZXN0U3RhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgY291bnQ6IDAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudDogdGhpcy5zdGF0ZS5jb3VudCArIDEgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNvdW50KVxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudDogdGhpcy5zdGF0ZS5jb3VudCArIDEgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNvdW50KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY291bnQ6IHRoaXMuc3RhdGUuY291bnQgKyAxIH0pXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNvdW50KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50OiB0aGlzLnN0YXRlLmNvdW50ICsgMSB9KVxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb3VudClcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgY29uc29sZS5sb2coJ3JlbmRlciAnLCB0aGlzLnN0YXRlLmNvdW50KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2Pnt0aGlzLnN0YXRlLmNvdW50fTwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXsoKSA9PiA8c3Bhbj5sb2FkaW5nPC9zcGFuPn0+XG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByb3V0ZXMubWFwKHIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtyLnBhdGh9PjxMaW5rIHRvPXtyLnBhdGh9PntyLm5hbWV9PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByb3V0ZXMubWFwKHIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFBhZ2VDb21wb25lbnQgPSByLmNvbXBvbmVudFxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8Um91dGUga2V5PXtyLnBhdGh9IHBhdGg9e3IucGF0aH0+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlQ29tcG9uZW50IC8+XG4gICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L1N1c3BlbnNlPlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRG5kUHJvdmlkZXIsIHVzZURyYWcsIHVzZURyb3AsIERyYWdTb3VyY2VNb25pdG9yLCBEcm9wVGFyZ2V0TW9uaXRvciB9IGZyb20gJ3JlYWN0LWRuZCdcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJ1xuaW1wb3J0IGJyaWNrcyBmcm9tICcuL21vY2snXG5pbXBvcnQgeyBicmlja3NJdGVtU2hhcGUgfSBmcm9tICcuL3R5cGVzJ1xuXG5jb25zdCBUWVBFID0gJ2NhcmQnXG5cbmludGVyZmFjZSBJdGVtIHtcbiAgY29tcG9uZW50OiBicmlja3NJdGVtU2hhcGVcbiAgcGFyZW50OiBicmlja3NJdGVtU2hhcGVbXVxuICBpbmRleDogbnVtYmVyXG59XG5cbmludGVyZmFjZSBCcmlja1dyYXBwZXJQcm9wcyB7XG4gIGNvbXBvbmVudDogYnJpY2tzSXRlbVNoYXBlXG4gIHBhcmVudDogYnJpY2tzSXRlbVNoYXBlW11cbiAgaW5kZXg6IG51bWJlclxufVxuXG5jb25zdCBCcmlja1dyYXBwZXI6IFJlYWN0LkZDPEJyaWNrV3JhcHBlclByb3BzPiA9ICh7IGNvbXBvbmVudCwgcGFyZW50LCBpbmRleCB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICBjb25zdCBbeyBpc0RyYWdnaW5nIH0sIGRyYWddID0gdXNlRHJhZyh7XG4gICAgdHlwZTogVFlQRSxcbiAgICBpdGVtOiAoKTogSXRlbSA9PiAoe1xuICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICB9KSxcbiAgICBjb2xsZWN0OiAobW9uaXRvcjogRHJhZ1NvdXJjZU1vbml0b3IpID0+ICh7XG4gICAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKVxuICAgIH0pLFxuICB9LCBbY29tcG9uZW50LCBwYXJlbnQsIGluZGV4XSlcblxuICBjb25zdCBbeyBoYW5kbGVJZCB9LCBkcm9wXSA9IHVzZURyb3Aoe1xuICAgIGFjY2VwdDogVFlQRSxcbiAgICBjb2xsZWN0OiAobW9uaXRvcjogRHJvcFRhcmdldE1vbml0b3IpID0+ICh7XG4gICAgICBoYW5kbGVJZDogbW9uaXRvci5nZXRIYW5kbGVySWQoKSxcbiAgICB9KSxcbiAgICBob3ZlcjogKGl0ZW06IEl0ZW0sIG1vbml0b3I6IERyb3BUYXJnZXRNb25pdG9yKSA9PiB7XG4gICAgICBjb25zdCB7aW5kZXg6IGRyYWdJbmRleCwgcGFyZW50OiBkcmFnUGFyZW50fSA9IGl0ZW1cbiAgICAgIGNvbnN0IHtpbmRleDogaG92ZXJJbmRleCwgcGFyZW50OiBob3ZlclBhcmVudH0gPSBtb25pdG9yLmdldEl0ZW08SXRlbT4oKVxuICAgICAgaWYgKGRyYWdQYXJlbnQgIT09IGhvdmVyUGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGRyYWdJdGVtID0gZHJhZ1BhcmVudC5zcGxpY2UoZHJhZ0luZGV4LCAxKVswXVxuICAgICAgICBob3ZlclBhcmVudC5wdXNoKGRyYWdJdGVtKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ2RyYWdQYXJlbnQnLCBkcmFnUGFyZW50KVxuICAgICAgY29uc29sZS5sb2coJ2hvdmVyUGFyZW50JywgaG92ZXJQYXJlbnQpXG4gICAgfVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZHJhZyhkcm9wKHJlZikpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e3JlZn0gc3R5bGU9e3sgb3BhY2l0eTogaXNEcmFnZ2luZyA/IDAgOiAxIH19IGRhdGEtaGFuZGxlci1pZD17aGFuZGxlSWR9PlxuICAgICAge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50LnJlbmRlcih7XG4gICAgICAgICAgY2hpbGRyZW46IGNvbXBvbmVudC5jaGlsZHJlbiAmJiBjb21wb25lbnQuY2hpbGRyZW4ubWFwKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxCcmlja1dyYXBwZXIgY29tcG9uZW50PXtjaGlsZH0gcGFyZW50PXtjb21wb25lbnQuY2hpbGRyZW59IGluZGV4PXtpbmRleH0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJyaWNrKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17SFRNTDVCYWNrZW5kfT5cbiAgICAgICAge2JyaWNrcy5tYXAoKGIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEJyaWNrV3JhcHBlciBjb21wb25lbnQ9e2J9IHBhcmVudD17YnJpY2tzfSBpbmRleD17aW5kZXh9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9EbmRQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufSIsImltcG9ydCB7IEJyaWNrU2hhcGUsIGJyaWNrc0l0ZW1TaGFwZSB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGNvbnRhaW5lcjogQnJpY2tTaGFwZSA9IHtcbiAgbmFtZTogJ2NvbnRhaW5lcicsXG4gIGlkOiAxLFxuICByZW5kZXI6ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzAwMCcgfX0+XG4gICAgICAgIGNvbnRhaW5lclxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgYm94OiBCcmlja1NoYXBlID0ge1xuICBuYW1lOiAnYm94JyxcbiAgaWQ6IDIsXG4gIHJlbmRlcjogKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJywgbWFyZ2luOiAnMTBweCcgfX0+XG4gICAgICAgIGJveFxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgYnJpY2tzOiBicmlja3NJdGVtU2hhcGVbXSA9IFtcbiAge1xuICAgIGNvbXBvbmVudDogY29udGFpbmVyLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IGNvbXBvbmVudDogYm94IH0sXG4gICAgICB7IGNvbXBvbmVudDogYm94IH0sXG4gICAgICB7XG4gICAgICAgIGNvbXBvbmVudDogYm94LFxuICAgICAgICBjaGlsZHJlbjogW3sgY29tcG9uZW50OiBib3ggfV0sXG4gICAgICB9XG4gICAgXVxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBicmlja3MiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nXG5cbmludGVyZmFjZSBpdGVtU2hhcCB7XG4gIHRleHQ6IHN0cmluZ1xuICBpZDogbnVtYmVyXG59XG5cbmNvbnN0IGl0ZW1zOiBpdGVtU2hhcFtdID0gW1xuICB7XG4gICAgdGV4dDogJ2EnLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ2InLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ2MnLFxuICAgIGlkOiAzLFxuICB9XG5dXG5cbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpdGVtczogaXRlbXMsXG4gIH1cblxuICBtb3ZlSXRlbSA9IChkcmFnSW5kZXgsIGhvdmVySW5kZXgpID0+IHtcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IGRyYWdJdGVtID0gaXRlbXNbZHJhZ0luZGV4XVxuICAgIGxldCBob3Zlckl0ZW0gPSBpdGVtcy5zcGxpY2UoaG92ZXJJbmRleCwgMSwgZHJhZ0l0ZW0pWzBdXG4gICAgaXRlbXMuc3BsaWNlKGRyYWdJbmRleCwgMSlcbiAgICBpdGVtcy5zcGxpY2UoaG92ZXJJbmRleCA+IGRyYWdJbmRleCA/IGhvdmVySW5kZXggOiBob3ZlckluZGV4ICsgMSwgMCwgaG92ZXJJdGVtKVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1zOiBbLi4uaXRlbXNdIH0pXG4gIH1cblxuICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEl0ZW1cbiAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIG1vdmVJdGVtPXt0aGlzLm1vdmVJdGVtfVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBEcmFnU291cmNlLFxuICBDb25uZWN0RHJhZ1NvdXJjZSxcbiAgRHJhZ1NvdXJjZVNwZWMsXG4gIERyYWdTb3VyY2VDb25uZWN0b3IsXG4gIERyYWdTb3VyY2VNb25pdG9yLFxuICBEcm9wVGFyZ2V0LFxuICBEcm9wVGFyZ2V0U3BlYyxcbiAgRHJvcFRhcmdldENvbm5lY3RvcixcbiAgRHJvcFRhcmdldE1vbml0b3IsXG4gIENvbm5lY3REcm9wVGFyZ2V0XG59IGZyb20gJ3JlYWN0LWRuZCdcbmltcG9ydCBjbHMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCAnLi9pdGVtLnNjc3MnXG5cbmludGVyZmFjZSBJdGVtRHJhZ09iamVjdCB7XG4gIGluZGV4OiBudW1iZXJcbiAgaWQ6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcbiAgdGV4dDogc3RyaW5nLFxuICBpbmRleDogbnVtYmVyLFxuICBpZDogbnVtYmVyLFxuICBjbGFzc05hbWVzPzogc3RyaW5nLFxuICBpc0RyYWdnaW5nPzogYm9vbGVhblxuICBjb25uZWN0RHJhZ1NvdXJjZT86IENvbm5lY3REcmFnU291cmNlXG4gIGNvbm5lY3REcm9wVGFyZ2V0PzogQ29ubmVjdERyb3BUYXJnZXRcbiAgaXNPdmVyPzogYm9vbGVhblxuICBpc092ZXJDdXJyZW50PzogYm9vbGVhblxuICBjYW5Ecm9wPzogYm9vbGVhblxuICBtb3ZlSXRlbTogKGRyYWdJbmRleDogbnVtYmVyLCBob3ZlckluZGV4OiBudW1iZXIpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFRZUEUgPSAnaXRlbSdcblxuY29uc3QgaXRlbVNvdXJjZTogRHJhZ1NvdXJjZVNwZWM8SXRlbVByb3BzPiA9IHtcbiAgYmVnaW5EcmFnOiAocHJvcHM6IEl0ZW1Qcm9wcywgbW9uaXRvciwgY29tcG9uZW50KTogSXRlbURyYWdPYmplY3QgPT4ge1xuICAgIHJldHVybiB7IGlkOiBwcm9wcy50ZXh0LCBpbmRleDogcHJvcHMuaW5kZXggfVxuICB9LFxufVxuXG5jb25zdCBjb2xsZWN0RHJhZ1NvdXJjZSA9IChjb25uZWN0OiBEcmFnU291cmNlQ29ubmVjdG9yLCBtb25pdG9yOiBEcmFnU291cmNlTW9uaXRvcikgPT4gKHtcbiAgY29ubmVjdERyYWdTb3VyY2U6IGNvbm5lY3QuZHJhZ1NvdXJjZSgpLFxuICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKVxufSlcblxuY29uc3Qgc3BlYzogRHJvcFRhcmdldFNwZWM8SXRlbVByb3BzPiA9IHtcbiAgaG92ZXI6IChwcm9wczogSXRlbVByb3BzLCBtb25pdG9yOiBEcm9wVGFyZ2V0TW9uaXRvciwgY29tcG9uZW50KSA9PiB7XG4gICAgaWYgKCFjb21wb25lbnQpIHJldHVybiBudWxsXG4gICAgY29uc3QgZHJhZ0luZGV4ID0gbW9uaXRvci5nZXRJdGVtPEl0ZW1EcmFnT2JqZWN0PigpLmluZGV4XG4gICAgY29uc3QgaG92ZXJJbmRleCA9IHByb3BzLmluZGV4XG4gICAgcHJvcHMubW92ZUl0ZW0oZHJhZ0luZGV4LCBob3ZlckluZGV4KVxuICAgIG1vbml0b3IuZ2V0SXRlbTxJdGVtRHJhZ09iamVjdD4oKS5pbmRleCA9IGhvdmVySW5kZXhcbiAgfVxufVxuXG5jb25zdCBjb2xsZWN0RHJvcFRhcmdldCA9IChjb25uZWN0OiBEcm9wVGFyZ2V0Q29ubmVjdG9yLCBtb25pdG9yOiBEcm9wVGFyZ2V0TW9uaXRvcikgPT4gKHtcbiAgY29ubmVjdERyb3BUYXJnZXQ6IGNvbm5lY3QuZHJvcFRhcmdldCgpLFxuICBpc092ZXI6IG1vbml0b3IuaXNPdmVyKCksXG4gIGlzT3ZlckN1cnJlbnQ6IG1vbml0b3IuaXNPdmVyKHsgc2hhbGxvdzogdHJ1ZSB9KSxcbiAgY2FuRHJvcDogbW9uaXRvci5jYW5Ecm9wKCksXG59KVxuXG5ARHJvcFRhcmdldChUWVBFLCBzcGVjLCBjb2xsZWN0RHJvcFRhcmdldClcbkBEcmFnU291cmNlKFRZUEUsIGl0ZW1Tb3VyY2UsIGNvbGxlY3REcmFnU291cmNlKVxuY2xhc3MgSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJdGVtUHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb25uZWN0RHJhZ1NvdXJjZSwgY2xhc3NOYW1lcywgaXNEcmFnZ2luZywgY29ubmVjdERyb3BUYXJnZXQgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gY29ubmVjdERyb3BUYXJnZXQoY29ubmVjdERyYWdTb3VyY2UoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzKCdpdGVtJywgY2xhc3NOYW1lcywgeyAnZHJhZ2dpbmcnOiBpc0RyYWdnaW5nIH0pfT57dGhpcy5wcm9wcy50ZXh0fTwvZGl2PlxuICAgICkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZG5kJ1xuaW1wb3J0IHsgSFRNTDVCYWNrZW5kIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBETkRUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtIVE1MNUJhY2tlbmR9PlxuICAgICAgICAgIDxDb250YWluZXIgLz5cbiAgICAgICAgPC9EbmRQcm92aWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSdcblxuaW50ZXJmYWNlIGl0ZW1TaGFwIHtcbiAgdGV4dDogc3RyaW5nXG4gIGlkOiBudW1iZXJcbn1cblxuY29uc3QgZGVmYXVsdEl0ZW1zOiBpdGVtU2hhcFtdID0gW1xuICB7XG4gICAgdGV4dDogJ2EnLFxuICAgIGlkOiAxMSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdiJyxcbiAgICBpZDogMTIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnYycsXG4gICAgaWQ6IDEzLFxuICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcigpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKGRlZmF1bHRJdGVtcylcblxuICBjb25zdCBtb3ZlSXRlbSA9IHVzZUNhbGxiYWNrKFxuICAgIChkcmFnSW5kZXgsIGhvdmVySW5kZXgpID0+IHtcbiAgICAgIGxldCBkcmFnSXRlbSA9IGl0ZW1zW2RyYWdJbmRleF1cblxuICAgICAgaWYgKGhvdmVySW5kZXggPiBkcmFnSW5kZXgpIHtcbiAgICAgICAgbGV0IGhvdmVySXRlbSA9IGl0ZW1zLnNwbGljZShob3ZlckluZGV4LCAxLCBkcmFnSXRlbSlbMF1cbiAgICAgICAgaXRlbXMuc3BsaWNlKGRyYWdJbmRleCwgMSlcbiAgICAgICAgaXRlbXMuc3BsaWNlKGhvdmVySW5kZXggLSAxLCAwLCBob3Zlckl0ZW0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaG92ZXJJdGVtID0gaXRlbXMuc3BsaWNlKGhvdmVySW5kZXgsIDEsIGRyYWdJdGVtKVswXVxuICAgICAgICBpdGVtcy5zcGxpY2UoZHJhZ0luZGV4LCAxKVxuICAgICAgICBpdGVtcy5zcGxpY2UoaG92ZXJJbmRleCArIDEsIDAsIGhvdmVySXRlbSlcbiAgICAgIH1cblxuICAgICAgc2V0SXRlbXMoWy4uLml0ZW1zXSlcbiAgICB9LFxuICAgIFtpdGVtcywgc2V0SXRlbXNdXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIGl0ZW1zLm1hcCgoaXRlbTogaXRlbVNoYXAsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiA8SXRlbVxuICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxuICAgICAgICAgICAgaW5kZXg9e2l9XG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cbiAgICAgICAgICAgIG1vdmVJdGVtPXttb3ZlSXRlbX1cbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAvPlxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURyYWcsIHVzZURyb3AsIERyYWdTb3VyY2VNb25pdG9yLCBEcm9wVGFyZ2V0TW9uaXRvciB9IGZyb20gJ3JlYWN0LWRuZCdcbmltcG9ydCBjbHMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFhZQ29vcmQgfSBmcm9tICdkbmQtY29yZSdcbi8vIGltcG9ydCAnLi4vRG5kV2l0aEhPQy9JdGVtLnNjc3MnXG5cbmNvbnN0IFRZUEUgPSAnaXRlbSdcblxuY29uc3QgSXRlbTogUmVhY3QuRkM8aXRlbVByb3BzU2hhcD4gPSAoeyB0ZXh0LCBpbmRleCwgaWQsIG1vdmVJdGVtIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCBbeyBpc0RyYWdnaW5nIH0sIGRyYWddID0gdXNlRHJhZygoKSA9PiAoe1xuICAgIHR5cGU6IFRZUEUsXG4gICAgaXRlbTogKCk6IEl0ZW1PYmplY3QgPT4gKHsgaW5kZXgsIGlkIH0pLFxuICAgIGNvbGxlY3Q6IChtb25pdG9yOiBEcmFnU291cmNlTW9uaXRvcikgPT4gKHtcbiAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpXG4gICAgfSlcbiAgfSksIFtpbmRleF0pXG5cbiAgY29uc3QgW3sgaGFuZGxlcklkIH0sIGRyb3BdID0gdXNlRHJvcCh7XG4gICAgYWNjZXB0OiBUWVBFLFxuICAgIGhvdmVyOiAoaXRlbTogSXRlbU9iamVjdCwgbW9uaXRvcjogRHJvcFRhcmdldE1vbml0b3IpID0+IHtcbiAgICAgIGlmICghcmVmLmN1cnJlbnQpIHJldHVyblxuICAgICAgY29uc3QgZHJhZ0luZGV4ID0gaXRlbS5pbmRleFxuICAgICAgY29uc3QgaG92ZXJJbmRleCA9IGluZGV4XG5cbiAgICAgIGlmIChkcmFnSW5kZXggPT09IGhvdmVySW5kZXgpIHJldHVyblxuXG4gICAgICAvLyBEZXRlcm1pbmUgcmVjdGFuZ2xlIG9uIHNjcmVlblxuICAgICAgY29uc3QgaG92ZXJCb3VuZGluZ1JlY3QgPSByZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgLy8gR2V0IHZlcnRpY2FsIG1pZGRsZVxuICAgICAgY29uc3QgaG92ZXJNaWRkbGVZID1cbiAgICAgICAgKGhvdmVyQm91bmRpbmdSZWN0LmJvdHRvbSAtIGhvdmVyQm91bmRpbmdSZWN0LnRvcCkgLyAyXG5cbiAgICAgIC8vIERldGVybWluZSBtb3VzZSBwb3NpdGlvblxuICAgICAgY29uc3QgY2xpZW50T2Zmc2V0ID0gbW9uaXRvci5nZXRDbGllbnRPZmZzZXQoKVxuXG4gICAgICAvLyBHZXQgcGl4ZWxzIHRvIHRoZSB0b3BcbiAgICAgIGNvbnN0IGhvdmVyQ2xpZW50WSA9IChjbGllbnRPZmZzZXQgYXMgWFlDb29yZCkueSAtIGhvdmVyQm91bmRpbmdSZWN0LnRvcFxuXG4gICAgICAvLyBPbmx5IHBlcmZvcm0gdGhlIG1vdmUgd2hlbiB0aGUgbW91c2UgaGFzIGNyb3NzZWQgaGFsZiBvZiB0aGUgaXRlbXMgaGVpZ2h0XG4gICAgICAvLyBXaGVuIGRyYWdnaW5nIGRvd253YXJkcywgb25seSBtb3ZlIHdoZW4gdGhlIGN1cnNvciBpcyBiZWxvdyA1MCVcbiAgICAgIC8vIFdoZW4gZHJhZ2dpbmcgdXB3YXJkcywgb25seSBtb3ZlIHdoZW4gdGhlIGN1cnNvciBpcyBhYm92ZSA1MCVcblxuICAgICAgLy8gRHJhZ2dpbmcgZG93bndhcmRzXG4gICAgICBpZiAoZHJhZ0luZGV4IDwgaG92ZXJJbmRleCAmJiBob3ZlckNsaWVudFkgPCBob3Zlck1pZGRsZVkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIERyYWdnaW5nIHVwd2FyZHNcbiAgICAgIGlmIChkcmFnSW5kZXggPiBob3ZlckluZGV4ICYmIGhvdmVyQ2xpZW50WSA+IGhvdmVyTWlkZGxlWSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coJ2l0ZW0nLCBpdGVtLmlkKVxuICAgICAgbW92ZUl0ZW0oZHJhZ0luZGV4LCBob3ZlckluZGV4KVxuXG4gICAgICBpdGVtLmluZGV4ID0gaG92ZXJJbmRleFxuICAgICAgY29uc29sZS5sb2coJ2NoYW5nZSBpbmRleCcpXG4gICAgfSxcbiAgICBjb2xsZWN0OiAobW9uaXRvcjogRHJvcFRhcmdldE1vbml0b3IpID0+ICh7XG4gICAgICBoYW5kbGVySWQ6IG1vbml0b3IuZ2V0SGFuZGxlcklkKClcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkcmFnKGRyb3AocmVmKSlcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y2xzKCdpdGVtJywgeyAnZHJhZ2dpbmcnOiBpc0RyYWdnaW5nIH0pfSBkYXRhLWhhbmRsZXItaWQ9e2hhbmRsZXJJZH0+e3RleHR9PC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEl0ZW0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCdcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE5EVGVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17SFRNTDVCYWNrZW5kfT5cbiAgICAgICAgICA8Q29udGFpbmVyIC8+XG4gICAgICAgIDwvRG5kUHJvdmlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm1Db250ZXh0UHJvdmlkZXIsIEZvcm1Db250ZXh0IH0gZnJvbSAnLi9Gb3JtQ29udGV4dFByb3ZpZGVyJ1xuXG5jb25zdCBGaWVsZEZvcm06IFJlYWN0LkZDPEZvcm1Qcm9wcz4gPSAoeyBjaGlsZHJlbiwgZm9yd2FyZGVkUmVmLCAuLi5vdGhlclByb3BzIH0pID0+IHtcbiAgY29uc3QgeyB2YWx1ZXMsIHVwZGF0ZVZhbHVlcyB9ID0gdXNlQ29udGV4dChGb3JtQ29udGV4dCkgYXMgRm9ybUNvbnRleHRUeXBlXG5cbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShmb3J3YXJkZWRSZWYsICgpID0+ICh7XG4gICAgc2V0RmllbGRzVmFsdWU6IChmaWVsZHMpID0+IHVwZGF0ZVZhbHVlcyhmaWVsZHMpLFxuICAgIGdldEZpZWxkc1ZhbHVlOiAoKSA9PiB2YWx1ZXNcbiAgfSkpXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybT5cbiAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICBvblZhbHVlc0NoYW5nZTogb3RoZXJQcm9wcy5vblZhbHVlc0NoYW5nZVxuICAgICAgICB9KVxuICAgICAgfSl9XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmNvbnN0IEZvcm1Gb3J3YXJkOiBSZWFjdC5Gb3J3YXJkUmVmUmVuZGVyRnVuY3Rpb248Rm9ybUluc3RhbmNlLCBGb3JtUHJvcHM+ID0gKHByb3BzLCByZWYpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRleHRQcm92aWRlcj5cbiAgICAgIDxGaWVsZEZvcm0gey4uLnByb3BzfSBmb3J3YXJkZWRSZWY9e3JlZn0gLz5cbiAgICA8L0Zvcm1Db250ZXh0UHJvdmlkZXI+XG4gIClcbn1cbi8vIFJlYWN0LmZvcndhcmRSZWYoKVxuY29uc3QgRm9ybSA9IFJlYWN0LmZvcndhcmRSZWYoRm9ybUZvcndhcmQpXG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1cbiIsImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlTWVtb30gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGV4dFByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgdXBkYXRlVmFsdWVzID0gdXNlQ2FsbGJhY2soKG5ld1ZhbHVlcykgPT4ge1xuICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCAuLi5uZXdWYWx1ZXN9KVxuICB9LCBbc2V0VmFsdWVzLCB2YWx1ZXNdKVxuXG4gIGNvbnN0IHByb3ZpZGVyVmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7dmFsdWVzLCB1cGRhdGVWYWx1ZXN9KSxcbiAgICBbdmFsdWVzLCB1cGRhdGVWYWx1ZXNdXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvdmlkZXJWYWx1ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Gb3JtQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufSIsImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Rm9ybUNvbnRleHR9IGZyb20gJy4vRm9ybUNvbnRleHRQcm92aWRlcidcblxuY29uc3QgRm9ybUl0ZW06IFJlYWN0LkZDPEZvcm1JdGVtUHJvcHM+ID0gKHtuYW1lLCBsYWJlbCwgb25DaGFuZ2UsIG9uVmFsdWVzQ2hhbmdlLCBjaGlsZHJlbn0pID0+IHtcbiAgY29uc3Qge3ZhbHVlcywgdXBkYXRlVmFsdWVzfSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpIGFzIEZvcm1Db250ZXh0VHlwZVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgdXBkYXRlVmFsdWVzKHsgW25hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgIG9uVmFsdWVzQ2hhbmdlICYmIG9uVmFsdWVzQ2hhbmdlKHsgW25hbWVdOiBlLnRhcmdldC52YWx1ZSB9LCB2YWx1ZXMpXG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpXG4gIH0sIFt2YWx1ZXMsIHVwZGF0ZVZhbHVlc10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2xhYmVsICYmIDxsYWJlbD57bGFiZWx9PC9sYWJlbD59XG4gICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuIGFzIFJlYWN0LlJlYWN0RWxlbWVudCksXG4gICAgICAgIHtcbiAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZXMgPyB2YWx1ZXNbbmFtZV0gfHwgJycgOiAnJyxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtSXRlbSIsImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtJ1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4vRm9ybUl0ZW0nXG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgcmVmPSB1c2VSZWY8Rm9ybUluc3RhbmNlPigpXG5cbiAgY29uc3QgY2hhbmdlTmFtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICByZWYuY3VycmVudC5zZXRGaWVsZHNWYWx1ZSh7IGxhc3RuYW1lOiAnQmVzdHknLCBmaXJzdG5hbWU6ICdYaWUnfSlcbiAgfSwgW3JlZl0pXG5cbiAgY29uc3QgZ2V0TmFtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZWYuY3VycmVudC5nZXRGaWVsZHNWYWx1ZSgpKVxuICB9LCBbcmVmXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VGhpcyBhIGN1c3RvbSBGb3JtIGNvbXBvbmVudDwvaDE+XG4gICAgICA8Rm9ybSBvblZhbHVlc0NoYW5nZT17dmFsdWVzID0+IGNvbnNvbGUubG9nKHZhbHVlcyl9IHJlZj17cmVmfT5cbiAgICAgICAgPEZvcm1JdGVtIG5hbWU9J2ZpcnN0bmFtZScgbGFiZWw9XCLlkI1cIj5cbiAgICAgICAgICA8aW5wdXQgLz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgPEZvcm1JdGVtIG5hbWU9J2xhc3RuYW1lJyBsYWJlbD1cIuWnk1wiPlxuICAgICAgICAgIDxpbnB1dCAvPlxuICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgPC9Gb3JtPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjaGFuZ2VOYW1lfT5uYW1lID0gQmVzdHk8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17Z2V0TmFtZX0+Z2V0IE5hbWU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBSb3V0ZVNoYXBlIHtcbiAgbmFtZTogc3RyaW5nLFxuICBwYXRoOiBzdHJpbmcsXG4gIGNvbXBvbmVudDogUmVhY3QuTGF6eUV4b3RpY0NvbXBvbmVudDxSZWFjdC5Db21wb25lbnRUeXBlPixcbn1cblxuY29uc3Qgcm91dGVzOiBSb3V0ZVNoYXBlW10gPSBbXG4gIHtcbiAgICBuYW1lOiAnYW50ZCBmb3JtIOihqOWNlScsXG4gICAgcGF0aDogJy9mb3JtJyxcbiAgICBjb21wb25lbnQ6IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL2pzL2NvbXBvbmVudHMvRm9ybScpKVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1JlYWN0IERuRCB3aXRoIEhPQycsXG4gICAgcGF0aDogJy9kbmQtaG9jJyxcbiAgICBjb21wb25lbnQ6IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL2pzL2NvbXBvbmVudHMvRG5kV2l0aEhPQycpKVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1JlYWN0IERuRCB3aXRoIEhPT0snLFxuICAgIHBhdGg6ICcvZG5kLWhvb2snLFxuICAgIGNvbXBvbmVudDogUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vanMvY29tcG9uZW50cy9EbmRXaXRoSG9vaycpKVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2JyaWNrJyxcbiAgICBwYXRoOiAnL2JyaWNrJyxcbiAgICBjb21wb25lbnQ6IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL2pzL2NvbXBvbmVudHMvQnJpY2snKSlcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuLy8gSXQncyBlbXB0eSBhcyBzb21lIHJ1bnRpbWUgbW9kdWxlIGhhbmRsZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Jcbl9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL2luZGV4LnRzeFwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfY2xhc3NuYW1lc19pbmRleF9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzLW5vZGVfbW9kLTE2YTFhNlwiXSxcblx0W1wiLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcz9odHRwOi8vbG9jYWxob3N0OjkwMDBcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2NsYXNzbmFtZXNfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZC0xNmExYTZcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSB4ID0+IHt9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcmVhY3RfZGVtb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtyZWFjdF9kZW1vXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTtcblxuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbnZhciBzdGFydHVwID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBzdGFydHVwIHx8ICh4ID0+IHt9KTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07IiwiLy8gcnVuIHN0YXJ0dXBcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9