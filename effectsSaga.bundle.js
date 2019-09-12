webpackJsonp([4],{511:function(e,n,a){"use strict";function t(){return r.a.createElement("div",null,r.a.createElement("div",{className:"description"},r.a.createElement("h2",null,"Sagas"),r.a.createElement("p",null,"Kea has first class support for sagas via the ",r.a.createElement("a",{href:"https://github.com/keajs/kea-saga"},r.a.createElement("code",null,"kea-saga"))," plugin."),r.a.createElement("p",null,"Read more about Sagas on the ",r.a.createElement("a",{href:"https://redux-saga.js.org/"},"redux-saga")," homepage."),r.a.createElement("p",null,r.a.createElement("strong",null,"Breaking changes with 1.0!")," If you're upgrading from 0.x, please ",r.a.createElement("a",{href:"https://github.com/keajs/kea-saga/blob/master/CHANGELOG.md#a-note-regarding-sagas-and-actions"},"read this")," regarding the breaking change of automatically binding actions to dispatch in Kea. If you just ",r.a.createElement("code",null,"connect"),"ed to your actions or used local actions inside a logic, everything should work as it did before as long as ",r.a.createElement("code",null,"useLegacyUnboundActions")," is set to ",r.a.createElement("code",null,"true"),". However if you were using code like ",r.a.createElement("code",null,"yield put(otherImportedLogic.actions.doSomething())"),", you need to pay attention, as those actions will now dispatch twice. Replace ",r.a.createElement("code",null,"actions")," with ",r.a.createElement("code",null,"actionCreators")," in the above code... or set ",r.a.createElement("code",null,"useLegacyUnboundActions")," to ",r.a.createElement("code",null,"false")," and get rid of ",r.a.createElement("code",null,"yield put()")," entirely.")),r.a.createElement("div",{className:"description"},r.a.createElement("h2",null,"Installation"),r.a.createElement("p",null,"First install the ",r.a.createElement("a",{href:"https://github.com/keajs/kea-saga"},r.a.createElement("code",null,"kea-saga"))," and ",r.a.createElement("a",{href:"https://github.com/redux-saga/redux-saga"},r.a.createElement("code",null,"redux-saga"))," packages:"),r.a.createElement(c.default,{className:"bash"},s.install),r.a.createElement("p",null,"Then you install the plugin:"),r.a.createElement(c.default,{className:"javascript"},s.import)),r.a.createElement("div",{className:"description"},r.a.createElement("h2",null,"Usage"),r.a.createElement("p",null,"First, read the docs on the ",r.a.createElement("a",{href:"https://redux-saga.js.org/"},"redux-saga")," homepage to learn how sagas work."),r.a.createElement("p",null,"Adding ",r.a.createElement("code",null,"kea-saga")," will give your logic stores access to the keys: ",r.a.createElement("code",null,"start"),", ",r.a.createElement("code",null,"stop"),", ",r.a.createElement("code",null,"takeEvery"),", ",r.a.createElement("code",null,"takeLatest"),", ",r.a.createElement("code",null,"workers"),", ",r.a.createElement("code",null,"sagas"),"."),r.a.createElement(c.default,{className:"javascript"},s.usage),r.a.createElement("h4",null,"start: ",r.a.createElement("code",null,"function * () ","{}")),r.a.createElement("p",null,"Saga that is started whenever the component is connected or the saga exported from this component starts"),r.a.createElement("p",null,"Note: sagas are started before your ",r.a.createElement("u",null,"wrapped component's")," ",r.a.createElement("code",null,"componentDidMount"),". Actions dispatched before this lifecycle method will not be seen inside ",r.a.createElement("code",null,"start"),"."),r.a.createElement(c.default,{className:"javascript"},s.keaStart),r.a.createElement("h4",null,"stop: ",r.a.createElement("code",null,"function * () ","{}")),r.a.createElement("p",null,"Saga that is started whenever the component is disconnected or the saga exported from this component is cancelled"),r.a.createElement("p",null,"This function is called right before your ",r.a.createElement("u",null,"wrapped component's")," ",r.a.createElement("code",null,"componentWillUnmount")," lifecycle method."),r.a.createElement(c.default,{className:"javascript"},s.keaStop),r.a.createElement("h4",null,"takeEvery: ",r.a.createElement("code",null,"({ actions }) => ({})")),r.a.createElement("p",null,"Run the following workers every time the action is dispatched"),r.a.createElement("p",null,"Note: sagas are started before your wrapped component's ",r.a.createElement("code",null,"componentDidMount"),". Actions dispatched before this lifecycle method will not be seen by ",r.a.createElement("code",null,"takeEvery"),"."),r.a.createElement(c.default,{className:"javascript"},s.keaTakeEvery),r.a.createElement("h4",null,"takeLatest: ",r.a.createElement("code",null,"({ actions }) => ({})")),r.a.createElement("p",null,"Run the following workers every time the action is dispatched, cancel the previous worker if still running"),r.a.createElement("p",null,"Note: sagas are started before your wrapped component's ",r.a.createElement("code",null,"componentDidMount"),". Actions dispatched before this lifecycle method will not be seen by ",r.a.createElement("code",null,"takeLatest"),"."),r.a.createElement(c.default,{className:"javascript"},s.keaTakeLatest),r.a.createElement("h4",null,"workers: ",r.a.createElement("code",null,"{}")),r.a.createElement("p",null,"An object of workers which you may reference in other sagas."),r.a.createElement(c.default,{className:"javascript"},s.keaWorkers),r.a.createElement("h4",null,"sagas: ",r.a.createElement("code",null,"[]")),r.a.createElement("p",null,"Array of sagas that get exported with this component's saga"),r.a.createElement(c.default,{className:"javascript"},s.keaSagas)))}Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var o=a(10),r=a.n(o),c=a(200),s={install:a(654),import:a(655),store:a(656),usage:a(657),keaSagas:a(658),keaStart:a(659),keaStop:a(660),keaTakeEvery:a(661),keaTakeLatest:a(662),keaWorkers:a(663)}},654:function(e,n){e.exports="# if you're using yarn\nyarn add kea-saga redux-saga\n\n# if you're using npm\nnpm install --save kea-saga redux-saga\n"},655:function(e,n){e.exports="import sagaPlugin from 'kea-saga'\nimport { resetContext } from 'kea'\n\nresetContext({\n  createStore: true,\n  plugins: [ sagaPlugin({ useLegacyUnboundActions: false }) ]\n})\n"},656:function(e,n){e.exports="import { keaReducer, activatePlugin } from 'kea'\nimport sagaPlugin, { keaSaga } from 'kea-saga'\n\nexport default function getStore () {\n  activatePlugin(sagaPlugin)\n\n  const reducers = combineReducers({\n    kea: keaReducer('kea'),\n    scenes: keaReducer('scenes')\n  })\n\n  const sagaMiddleware = createSagaMiddleware()\n  const finalCreateStore = compose(\n    applyMiddleware(sagaMiddleware)\n  )(createStore)\n\n  const store = finalCreateStore(reducers)\n\n  sagaMiddleware.run(keaSaga)\n\n  return store\n}\n"},657:function(e,n){e.exports="import { kea } from 'kea'\n\nexport default kea({\n  // ... see the api docs for more\n\n  start: function * () {\n    // saga started or component mounted\n    console.log(this)\n  },\n\n  stop: function * () {\n    // saga cancelled or component unmounted\n  },\n\n  takeEvery: ({ actions, workers }) => ({\n    [actions.simpleAction]: function * () {\n      // inline worker\n    },\n    [actions.actionWithDynamicPayload]: workers.dynamicWorker\n  }),\n\n  takeLatest: ({ actions, workers }) => ({\n    [actions.actionWithStaticPayload]: function * () {\n      // inline worker\n    },\n    [actions.actionWithManyParameters]: workers.dynamicWorker\n  }),\n\n  workers: {\n    * dynamicWorker (action) {\n      const { id, message } = action.payload // if from takeEvery/takeLatest\n      // reference with workers.dynamicWorker\n    },\n    longerWayToDefine: function * () {\n      // another way to define a worker\n    }\n  },\n\n  sagas: [saga1, saga2]\n})\n"},658:function(e,n){e.exports="// Input\nsagas: [saga1, saga2]\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  yield fork(saga1)\n  yield fork(saga2)\n\n  // start() ...\n}\n"},659:function(e,n){e.exports="// Input\nstart: function * () {\n  // saga started or component mounted\n  console.log(this)\n}\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  // saga started or component mounted\n  console.log(this)\n  // => { actions, workers, path, key, get: function * (), fetch: function * () }\n}\n"},660:function(e,n){e.exports="// Input\nstop: function * () {\n  // saga cancelled or component unmounted\n}\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  try {\n    // start()\n  } finally {\n    if (cancelled()) {\n      // saga cancelled or component unmounted\n    }\n  }\n}\n"},661:function(e,n){e.exports="// Input\ntakeEvery: ({ actions, workers }) => ({\n  [actions.simpleAction]: function * () {\n    // inline worker\n  },\n  [actions.actionWithDynamicPayload]: workers.dynamicWorker\n})\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  // pseudocode\n  yield fork(function * () {\n    yield [\n      takeEvery(actions.simpleAction.toString(), function * () {\n        // inline worker\n      }.bind(this)),\n      takeEvery(actions.actionWithDynamicPayload.toString(), workers.dynamicWorker.bind(this))\n    ]\n  })\n}\n"},662:function(e,n){e.exports="// Input\ntakeLatest: ({ actions, workers }) => ({\n  [actions.simpleAction]: function * () {\n    // inline worker\n  },\n  [actions.actionWithDynamicPayload]: workers.dynamicWorker\n})\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  // pseudocode\n  yield fork(function * () {\n    yield [\n      takeLatest(actions.simpleAction.toString(), function * () {\n        // inline worker\n      }.bind(this)),\n      takeLatest(actions.actionWithDynamicPayload.toString(), workers.dynamicWorker.bind(this))\n    ]\n  })\n}\n"},663:function(e,n){e.exports="// Input\nworkers: {\n  * dynamicWorker (action) {\n    const { id, message } = action.payload // if from takeEvery/takeLatest\n    // reference with workers.dynamicWorker\n  },\n  longerWayToDefine: function * () {\n    // another worker\n  }\n}\n\n// Output\nmyRandomSceneLogic.workers == {\n  dynamicWorker: function (action) *\n    const { id, message } = action.payload // if from takeEvery/takeLatest\n    // reference with workers.dynamicWorker\n  }.bind(myRandomSceneLogic),\n\n  longerWayToDefine: function () * {\n    // another worker\n  }.bind(myRandomSceneLogic)\n}\n"}});