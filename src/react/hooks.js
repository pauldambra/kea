import { useMemo, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { kea } from '../kea/kea'

export function useKea (input, deps = []) {
  return useMemo(() => kea(input), deps)
}

export function useProps (logic) {
  useMountedLogic(logic)

  return useMemo(() => {
    let response = {}

    for (const key of Object.keys(logic.selectors)) {
      Object.defineProperty(response, key, {
        get: () => useSelector(logic.selectors[key])
      })
    }

    return response
  }, [logic.pathString])
}

export function useAllProps (logic) {
  useMountedLogic(logic)

  let response = {}
  for (const key of Object.keys(logic.selectors)) {
    response[key] = useSelector(logic.selectors[key])
  }

  return response
}

export function useActions (logic) {
  useMountedLogic(logic)

  const dispatch = useDispatch()

  return useMemo(() => {
    let response = {}

    for (const key of Object.keys(logic.actionCreators)) {
      response[key] = (...args) => dispatch(logic.actionCreators[key](...args))
    }

    return response
  }, [dispatch, logic.pathString])
}

export function useMountedLogic (logic) {
  const unmount = useRef(undefined)
  const pathString = useRef(logic.pathString)

  if (!unmount.current) {
    unmount.current = logic.mount()
  }

  if (pathString !== logic.pathString) {
    unmount.current()
    unmount.current = logic.mount()
  }
  
  useEffect(() => unmount.current, [])
}
