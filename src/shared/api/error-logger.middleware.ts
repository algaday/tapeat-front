import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

interface ErrorPayload {
  data: { message: string }
}

function isErrorPayload(payload: any): payload is ErrorPayload {
  return payload && typeof payload.data.message === 'string'
}

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.warn('We got a rejected action!')

      const err = isErrorPayload(action.payload)
        ? (action.payload.data as { message: string }).message
        : action.error.message
      toast.error(err)
    }

    return next(action)
  }
