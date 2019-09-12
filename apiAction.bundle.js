webpackJsonp([17],{506:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return f});var c=t(10),i=t.n(c),u=t(200),l=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),s={usage:t(639)},f=function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),l(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"api-scene"},i.a.createElement("h2",null,i.a.createElement("code",null,"createAction")),i.a.createElement("p",null,"Create actions which you can use in your kea reducers."),i.a.createElement("h3",null,"Usage"),i.a.createElement(u.default,{className:"javascript"},s.usage))}}]),n}(c.Component)},639:function(e,n){e.exports="import { createAction } from 'kea'\n\nconst newAction = createAction('description', (id, value) => ({ id, value }))\n\nconst someLogic = kea({\n  actions: () => ({\n    myAction: true\n  }),\n\n  reducers: ({ actions }) => ({\n    myValue: [false, PropTypes.bool,\n      [actions.myAction]: () => true,\n      [newAction]: () => false\n    ]\n  })\n})\n\n// somewhere else\nstore.dispatch(newAction(12, 'bla'))\n"}});