import { reatomRoute, wrap } from '@reatom/core'
import { z } from 'zod'

import { $fetch } from '@/lib/better-fetch'

const baseUrl = 'eka-frontend/'

export const homeRoute = reatomRoute(baseUrl)
export const ciRoute = reatomRoute({
  path: `${baseUrl}ci/:prId`,
  params: z.object({ prId: z.string().min(1) }),
  async loader(params) {
    const { data, error } = await wrap(
      $fetch(`https://api.github.com/repos/ekala-project/corepkgs/pulls/${params.prId}`, {
        output: z.object({
          id: z.number(),
          title: z.string(),
          body: z.string(),
          createdAt: z.string(),
          updatedAt: z.string(),
          closedAt: z.string(),
          mergedAt: z.string()
        })
      })
    )

    if (error) throw error

    return data
  }
})
