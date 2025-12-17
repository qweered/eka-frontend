import { reatomComponent } from '@reatom/react'

import { ciRoute } from '../routes'

export const CiPage = reatomComponent(() => {
  const params = ciRoute()
  if (!ciRoute.exact()) return null

  const ready = ciRoute.loader.ready()
  const ci = ciRoute.loader.data()
  const error = ciRoute.loader.error()

  if (!ready) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>{ci.name}</h1>
      <p>{ci.bio}</p>
    </div>
  )
}, 'CiPage')
