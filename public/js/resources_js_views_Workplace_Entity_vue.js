(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Workplace_Entity_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Workplace/Entity.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Workplace/Entity.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Entity",
  data: function data() {
    return {
      totalUsers: null,
      totalDevices: null,
      totalProducts: null,
      workplace: {}
    };
  },
  mounted: function mounted() {
    this.getTotalUsers();
    this.getTotalDevices();
    this.getTotalProducts();
    this.getWorkplace();
  },
  methods: {
    getTotalUsers: function getTotalUsers() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('workplace/' + _this.$route.params.id + '/users/total').then(function (response) {
                  _this.totalUsers = response.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getTotalDevices: function getTotalDevices() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('workplace/' + _this2.$route.params.id + '/devices/total').then(function (response) {
                  _this2.totalDevices = response.data;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getTotalProducts: function getTotalProducts() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('workplace/' + _this3.$route.params.id + '/products/total').then(function (response) {
                  _this3.totalProducts = response.data;
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getWorkplace: function getWorkplace() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('workplace/' + _this4.$route.params.id).then(function (response) {
                  _this4.workplace = response.data;
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Workplace/Entity.vue?vue&type=template&id=2c13f28a&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Workplace/Entity.vue?vue&type=template&id=2c13f28a&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-2c13f28a");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2c13f28a");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-xl-3 col-sm-6 mb-xl-0 mb-4"
};
var _hoisted_3 = {
  "class": "card"
};
var _hoisted_4 = {
  "class": "card-body p-3"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-8"
};
var _hoisted_7 = {
  "class": "numbers"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "text-sm mb-0 text-capitalize font-weight-bold"
}, "Usuarios", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "font-weight-bolder mb-0"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "text-success text-sm font-weight-bolder"
}, "ver", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-4 text-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ni ni-single-02 text-lg opacity-10",
  "aria-hidden": "true"
})])], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "col-xl-3 col-sm-6 mb-xl-0 mb-4"
};
var _hoisted_13 = {
  "class": "card"
};
var _hoisted_14 = {
  "class": "card-body p-3"
};
var _hoisted_15 = {
  "class": "row"
};
var _hoisted_16 = {
  "class": "col-8"
};
var _hoisted_17 = {
  "class": "numbers"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "text-sm mb-0 text-capitalize font-weight-bold"
}, "Equipos", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "font-weight-bolder mb-0"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "text-success text-sm font-weight-bolder"
}, "ver", -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-4 text-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ni ni-laptop text-lg opacity-10",
  "aria-hidden": "true"
})])], -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "col-xl-3 col-sm-6 mb-xl-0 mb-4"
};
var _hoisted_23 = {
  "class": "card"
};
var _hoisted_24 = {
  "class": "card-body p-3"
};
var _hoisted_25 = {
  "class": "row"
};
var _hoisted_26 = {
  "class": "col-8"
};
var _hoisted_27 = {
  "class": "numbers"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "text-sm mb-0 text-capitalize font-weight-bold"
}, "Otros", -1
/* HOISTED */
);

var _hoisted_29 = {
  "class": "font-weight-bolder mb-0"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "text-success text-sm font-weight-bolder"
}, "ver", -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-4 text-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ni ni-money-coins text-lg opacity-10",
  "aria-hidden": "true"
})])], -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "card card-body blur shadow-blur my-4"
};
var _hoisted_33 = {
  "class": "row gx-4"
};
var _hoisted_34 = {
  "class": "col-auto my-auto"
};
var _hoisted_35 = {
  "class": "h-100"
};
var _hoisted_36 = {
  "class": "mb-1"
};
var _hoisted_37 = {
  "class": "mb-0 font-weight-bold text-sm"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.totalUsers) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Users',
      params: {
        id: _ctx.$route.params.id
      }
    }
  }, {
    "default": _withId(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])])]), _hoisted_11])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.totalDevices) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Devices',
      params: {
        id: _ctx.$route.params.id
      }
    }
  }, {
    "default": _withId(function () {
      return [_hoisted_20];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])])]), _hoisted_21])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.totalProducts) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Products',
      params: {
        id: _ctx.$route.params.id
      }
    }
  }, {
    "default": _withId(function () {
      return [_hoisted_30];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])])]), _hoisted_31])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.workplace.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.workplace.domain), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)], 64
  /* STABLE_FRAGMENT */
  );
});

/***/ }),

/***/ "./resources/js/views/Workplace/Entity.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Workplace/Entity.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Entity_vue_vue_type_template_id_2c13f28a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity.vue?vue&type=template&id=2c13f28a&scoped=true */ "./resources/js/views/Workplace/Entity.vue?vue&type=template&id=2c13f28a&scoped=true");
/* harmony import */ var _Entity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity.vue?vue&type=script&lang=js */ "./resources/js/views/Workplace/Entity.vue?vue&type=script&lang=js");



_Entity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Entity_vue_vue_type_template_id_2c13f28a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Entity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-2c13f28a"
/* hot reload */
if (false) {}

_Entity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/Workplace/Entity.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Entity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/Workplace/Entity.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Workplace/Entity.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Entity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Entity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Entity.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Workplace/Entity.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Workplace/Entity.vue?vue&type=template&id=2c13f28a&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/Workplace/Entity.vue?vue&type=template&id=2c13f28a&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Entity_vue_vue_type_template_id_2c13f28a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Entity_vue_vue_type_template_id_2c13f28a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Entity.vue?vue&type=template&id=2c13f28a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Workplace/Entity.vue?vue&type=template&id=2c13f28a&scoped=true");


/***/ })

}]);