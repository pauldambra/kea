export * from './types'

import { resetContext } from './context/index'

export { kea, connect } from './kea/index'
export { useValues, useAllValues, useActions, useMountedLogic, useKea } from './react/hooks'

export {
  resetContext,
  openContext,
  closeContext,
  getContext,
  getPluginContext,
  setPluginContext,
} from './context/index'
export { getStore } from './store/store'
export { keaReducer } from './store/reducer'
export { activatePlugin } from './plugins/index'

export { createAction } from './core/shared/actions'
export { addConnection } from './core/shared/connect'
export { isBreakpoint } from './listeners/index'

// Must do this to make TSD happy, as otherwise rollup+dts produces an invalid .d.ts file
import { ATTACH_REDUCER as A, DETACH_REDUCER as D } from './store/reducer'
export const ATTACH_REDUCER = A as '@KEA/ATTACH_REDUCER'
export const DETACH_REDUCER = D as '@KEA/DETACH_REDUCER'

// this will create a default context
resetContext()
