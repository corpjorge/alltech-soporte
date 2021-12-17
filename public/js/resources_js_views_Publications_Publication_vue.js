(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Publications_Publication_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Publications/Publication.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Publications/Publication.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Publication",
  data: function data() {
    return {
      publication: {}
    };
  },
  mounted: function mounted() {
    this.getPublication();
  },
  methods: {
    getPublication: function getPublication() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('publication/' + this.$route.params.id).then(function (response) {
        _this.publication = response.data;
      });
    },
    updatePublication: function updatePublication(state) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post('publication/' + this.$route.params.id, {
        state: state
      }).then(function () {
        _this2.getPublication();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Publications/Publication.vue?vue&type=template&id=4c116be3&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Publications/Publication.vue?vue&type=template&id=4c116be3&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-4c116be3");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-4c116be3");

var _hoisted_1 = {
  "class": "card mt-4"
};
var _hoisted_2 = {
  key: 0,
  "class": "badge badge-sm bg-gradient-warning"
};
var _hoisted_3 = {
  key: 1,
  "class": "badge badge-sm bg-gradient-info"
};
var _hoisted_4 = {
  key: 2,
  "class": "badge badge-sm bg-gradient-primary"
};
var _hoisted_5 = {
  key: 3,
  "class": "badge badge-sm bg-gradient-success"
};
var _hoisted_6 = {
  key: 4,
  "class": "badge badge-sm bg-gradient-secondary"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "card-body p-3"
};
var _hoisted_9 = {
  "class": "mb-0"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "Tipo de solicitud:", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "mb-0"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "¿Que se desea lograr?:", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "mb-0"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "¿Qué mensaje quiere comunicar?:", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "mb-0"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "¿Datos de contacto a incluir?:", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "mb-0"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "Descripción:", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "mb-0"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "¿A qué publico va dirigido?:", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "mb-0"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "Fecha de publicación:", -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "mb-0"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "Medios de publicación:", -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("hr", {
  "class": "horizontal dark"
}, null, -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "d-flex"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [$data.publication.state === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_2, "Pendiente")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.publication.state === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_3, "En proceso")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.publication.state === 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_4, "Terminado")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.publication.state === 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_5, "Publicado")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.publication.state === 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_6, "Cerrado")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.publication.type), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.publication.achievement), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.publication.message), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.publication.information), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.publication.description), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.publication["public"]), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.publication.date), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.publication.media), 1
  /* TEXT */
  )]), _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.updatePublication(0);
    }),
    type: "button",
    "class": "mt-2 me-2 btn bg-gradient-warning"
  }, "Pendiente"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.updatePublication(1);
    }),
    type: "button",
    "class": "mt-2 me-2 btn bg-gradient-info"
  }, "En proceso"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.updatePublication(2);
    }),
    type: "button",
    "class": "mt-2 me-2 btn bg-gradient-primary"
  }, "Terminado"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.updatePublication(3);
    }),
    type: "button",
    "class": "mt-2 me-2 btn bg-gradient-success"
  }, "Publicado"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.updatePublication(4);
    }),
    type: "button",
    "class": "mt-2 me-2 btn bg-gradient-secondary"
  }, "Cerrado")])])]);
});

/***/ }),

/***/ "./resources/js/views/Publications/Publication.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/Publications/Publication.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Publication_vue_vue_type_template_id_4c116be3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Publication.vue?vue&type=template&id=4c116be3&scoped=true */ "./resources/js/views/Publications/Publication.vue?vue&type=template&id=4c116be3&scoped=true");
/* harmony import */ var _Publication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Publication.vue?vue&type=script&lang=js */ "./resources/js/views/Publications/Publication.vue?vue&type=script&lang=js");



_Publication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Publication_vue_vue_type_template_id_4c116be3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Publication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-4c116be3"
/* hot reload */
if (false) {}

_Publication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/Publications/Publication.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Publication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/Publications/Publication.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Publications/Publication.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Publication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Publication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Publication.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Publications/Publication.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Publications/Publication.vue?vue&type=template&id=4c116be3&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/Publications/Publication.vue?vue&type=template&id=4c116be3&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Publication_vue_vue_type_template_id_4c116be3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Publication_vue_vue_type_template_id_4c116be3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Publication.vue?vue&type=template&id=4c116be3&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Publications/Publication.vue?vue&type=template&id=4c116be3&scoped=true");


/***/ })

}]);