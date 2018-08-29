import { appName } from '../config'
import { Record } from 'immutable'

export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const CONST_EXAMPLE = `${prefix}/CONST_EXAMPLE`

export const ReduceRecord = Record({
  user: null
})

export default function reducer(state = new ReduceRecord(), action) {
  const { type } = action

  switch (type) {
    default:
      return state
  }
}
