import { reatomComponent } from '@reatom/react'

import { ciRoute } from '@/routes'

export const CiPage = reatomComponent(() => {
  const params = ciRoute()

  if (!ciRoute.exact() || !params) return null

  const { isPending, isRejected, isFulfilled, data: pullRequest } = ciRoute.loader.status()
  // XX: reatom imperfection, no error in status()
  const error = ciRoute.loader.error()

  if (isPending) return <div className="p-8 text-center">Loading... pullRequest: {params.prId}</div>
  if (isRejected) return <div className="p-8 text-center text-destructive">Error: {error?.message}</div>
  if (isFulfilled) return <div className="p-8 text-center">Success: {pullRequest.title}</div>
}, 'CiPage')
