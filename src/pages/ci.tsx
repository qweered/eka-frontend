import { reatomComponent } from '@reatom/react'

import { ciRoute } from '@/routes'

export const CiPage = reatomComponent(() => {
  const params = ciRoute()

  if (!ciRoute.exact() || !params) return null

  const { isPending, isRejected, isFulfilled, data: pullRequest } = ciRoute.loader.status()
  // XX: reatom imperfection, no error in status()
  const error = ciRoute.loader.error()

  if (isPending) return <div>Loading... pullRequest: {params.prId}</div>
  if (isRejected) return <div>Error: {error?.message}</div>
  if (isFulfilled) return <div>Success: {pullRequest.title}</div>
}, 'CiPage')
