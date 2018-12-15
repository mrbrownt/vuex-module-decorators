(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{66:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("sponsor-cb-sidebar"),t._v(" "),a("p"),t._m(1),a("p"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("The way we use the MyModule class is different from classical object-oriented programming\nand similar to how "),a("a",{attrs:{href:"https://npmjs.com/vue-class-component",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-class-component"),a("OutboundLink")],1),t._v(" works.\nWe use the class itself as module, not an object "),a("em",[t._v("constructed")]),t._v(" by the class")]),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("All the usual ways of accessing the module works -")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#define-a-module"}},[this._v("Define a module")])]),s("li",[s("a",{attrs:{href:"#use-in-store"}},[this._v("Use in store")])]),s("li",[s("a",{attrs:{href:"#access-state"}},[this._v("Access State")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"define-a-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#define-a-module","aria-hidden":"true"}},[this._v("#")]),this._v(" Define a module")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To define a module, create a class that extends from "),s("code",[this._v("VuexModule")]),this._v("\nand "),s("strong",[this._v("must be")]),this._v(" decorated with "),s("code",[this._v("Module")]),this._v(" decorator")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// eg. /app/store/mymodule.ts")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Module"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" VuexModule "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vuex-module-decorators'")]),t._v("\n\n@Module\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyModule")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VuexModule")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  someField"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'somedata'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("CAREFUL")]),t._v(" "),a("p",[t._v("There is a "),a("code",[t._v("Module")]),t._v(" class in the "),a("code",[t._v("vuex")]),t._v(" package too, which is "),a("strong",[t._v("not")]),t._v(" a\ndecorator. Make sure you import correct Module decorator from from\n"),a("code",[t._v("vuex-module-decorators")])]),t._v(" "),a("p",[t._v("❌ "),a("code",[t._v("import {Module} from 'vuex'")]),a("br"),t._v("\n✔️ "),a("code",[t._v("import {Module} from 'vuex-module-decorators'")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"use-in-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-in-store","aria-hidden":"true"}},[this._v("#")]),this._v(" Use in store")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In you store, you use the "),s("code",[this._v("MyModule")]),this._v(" class itself as a module.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyModule "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'~/store/mymodule'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vuex"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    myMod"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyModule\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("new MyModule()")]),this._v(" ❌")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"access-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-state","aria-hidden":"true"}},[this._v("#")]),this._v(" Access State")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("Import The store")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'~/store'")]),t._v("\n\nstore"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myMod"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someField\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Use "),a("code",[t._v("this.$store")]),t._v(" if in component")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myMod"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someField\n")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In addition to that, for a much more typesafe access, we can use "),s("code",[this._v("getModule()")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("Use "),a("code",[t._v("getModule()")]),t._v(" to create type-safe accessor")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Module"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" VuexModule"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getModule "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vuex-module-decorators'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@/store'")]),t._v("\n\n@"),a("span",{attrs:{class:"token function"}},[t._v("Module")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" dynamic"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'mymod'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyModule")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VuexModule")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  someField"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myMod "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getModule")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyModule"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmyMod"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someField "),a("span",{attrs:{class:"token comment"}},[t._v("//works")]),t._v("\nmyMod"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someOtherField "),a("span",{attrs:{class:"token comment"}},[t._v("//Typescript will error, as field doesn't exist")]),t._v("\n")])])])])])}],!1,null,null,null);n.options.__file="getting-started.md";s.default=n.exports}}]);