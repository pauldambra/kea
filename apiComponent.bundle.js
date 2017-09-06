webpackJsonp([9],{562:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return m});var s=n(6),l=n.n(s),c=n(150),i=n(225),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u={usage:n(709),decorators:n(710),stateless:n(711),path:n(712),key:n(713),selectors:n(714)},m=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),p(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"api-scene"},l.a.createElement("h2",null,l.a.createElement("code",null,"kea(options)(Component)")),l.a.createElement("p",null,"Wrap a kea logic store around a React component."),l.a.createElement("p",null,"The React component will receive all of the logic store's selectors in ",l.a.createElement("code",null,"this.props")," and all actions under ",l.a.createElement("code",null,"this.actions"),"."),l.a.createElement(i.default,{className:"javascript"},u.usage),l.a.createElement("p",null,"It's up to you if you wish to use decorators or not:"),l.a.createElement(i.default,{className:"javascript"},u.decorators),l.a.createElement("p",null,"See the ",l.a.createElement(c.a,{to:"/guide/installation"},"installation guide")," for details."),l.a.createElement("h3",null,"Stateless functional components"),l.a.createElement("p",null,"You may also use kea with stateless functional components. The syntax can get quite ",l.a.createElement("em",null,"lispy")," with all the brackets, but it works:"),l.a.createElement(i.default,{className:"javascript"},u.stateless),l.a.createElement("h3",null,"Options"),l.a.createElement("p",null,"Wrapped logic stores accept all the same options as regular logic stores. See the documentation for ",l.a.createElement("code",null,l.a.createElement(c.a,{to:"/api/logic"},"kea(options)"))," for more details."),l.a.createElement("p",null,"These options are different:"),l.a.createElement("h4",null,"key: ",l.a.createElement("code",null,"(props) => 'key'")),l.a.createElement("p",null,"If you wish, you may define a ",l.a.createElement("code",null,"key")," that distinguishes instances of the component"),l.a.createElement(i.default,{className:"javascript"},u.key),l.a.createElement("h4",null,"path: ",l.a.createElement("code",null,"(key) => []")),l.a.createElement("p",null,"The path takes the key as an argument if you wish to define the location in redux for the component instance"),l.a.createElement(i.default,{className:"javascript"},u.path),l.a.createElement("h4",null,"selectors: ",l.a.createElement("code",null,"({ path, constants, actions, selectors }) => ({})")),l.a.createElement("p",null,"The ",l.a.createElement("code",null,"selectors")," have an additional feature with wrapped logic stores. You can access the ",l.a.createElement("code",null,"props")," passed to your component like so:"),l.a.createElement(i.default,{className:"javascript"},u.selectors))}}]),t}(s.Component)},709:function(e,t){e.exports="import React, { Component } from 'react'\nimport { kea } from 'kea'\n\nimport otherLogic from './other-logic'\n\n@kea({\n  key: (props) => props.id,\n  path: (key) => ['scenes', 'something', key],\n\n  actions: () => ({\n    someAction: (id) => ({ id })\n  }),\n\n  reducers: ({ actions }) => ({\n    myValue: [0, PropTypes.number, {\n      [actions.someAction]: (state, payload): payload.id\n    }]\n  }),\n\n  selectors: ({ selectors }) => ({\n    combinedValue: [\n      () => [\n        selectors.myValue,\n        otherLogic.selectors.otherValue,\n        (state, props) => props.id\n      ],\n      (myValue, otherValue, id) => myValue + otherValue + id,\n      PropTypes.number\n    ]\n  })\n\n  // other options, see the api docs for kea(options):\n  // - connect, constants, start, stop, takeEvery, takeLatest, workers, sagas\n})\nexport default class MyComponent extends Component {\n  render () {\n    const { myValue, combinedValue } = this.props\n    const { someAction } = this.actions\n\n    return (\n      <div>\n        <div>Combined props and reducer in a selector: {combinedValue}</div>\n        <button onClick={() => someAction(12)}>{myValue}</button>\n      </div>\n    )\n  }\n}\n"},710:function(e,t){e.exports="import React, { Component } from 'react'\nimport { kea } from 'kea'\n\n// with decorators\n@kea({ /* options */ })\nexport default class MyComponent extends Component {\n  // ...\n}\n\n// without decorators\nclass MyComponent extends Component {\n  // ...\n}\nexport default kea({ /* options */ })(MyComponent)\n"},711:function(e,t){e.exports="export default kea({\n  actions: () => ({\n    action1: true,\n    action2: false\n  }),\n  reducers: () => ({\n    prop1: [...],\n    prop2: [...]\n  }),\n  connect: {\n    actions: [\n      otherLogic, [\n        'importedAction1'\n      ]\n    ],\n    props: [\n      otherLogic, [\n        'importedProp1'\n      ]\n    ]\n  },\n  // ... other kea options\n})(({\n  prop1, prop2, importedProp1,\n  // actions are always also passed in a prop called 'actions'\n  actions: { action1, action2, importedAction1 }\n}) => (\n  <div>\n    <button onClick={action1}>{prop1}</button>\n  </div>\n))\n"},712:function(e,t){e.exports="path: (key) => ['scenes', 'homepage', 'sliders', key]\n"},713:function(e,t){e.exports="key: (props) => props.id\n"},714:function(e,t){e.exports="selectors: ({ selectors }) => ({\n  combinedValue: [\n    () => [\n      // standard selector for myValue\n      selectors.myValue,\n\n      // use a selector from a different logic store without conencting the prop\n      otherLogic.selectors.otherValue,\n\n      // props are passed as the second argument to input selectors\n      (state, props) => props.id\n    ],\n    (myValue, otherValue, id) => myValue + otherValue + id,\n    PropTypes.number\n  ]\n})\n"}});