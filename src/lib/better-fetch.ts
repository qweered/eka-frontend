import { createFetch } from '@better-fetch/fetch'

export const $fetch = createFetch({
  baseURL: import.meta.env.BACKEND_URL,
  // TODO: consider reatom for retries instead
  retry: {
    type: 'linear',
    attempts: 2,
    delay: 1000
  }
})
