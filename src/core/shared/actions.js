import { getContext } from '../../context'

const isObject = (item) => typeof item === 'object' && !Array.isArray(item) && item !== null

export function createAction (type, payloadCreator) {
  const { actions: actionCache } = getContext()

  if (actionCache[type]) {
    return actionCache[type]
  }

  const action = (...payloadArgs) => ({
    type: type,
    payload: typeof payloadCreator === 'function'
      ? payloadCreator(...payloadArgs)
      : isObject(payloadCreator)
        ? payloadCreator
        : { value: payloadCreator }
  })
  action.toString = () => type
  action._isKeaAction = true

  actionCache[type] = action

  return action
}
