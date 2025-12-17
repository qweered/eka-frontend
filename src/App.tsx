// oxlint-disable no-default-export
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'

import { Button } from '@/components/ui/button'
import { CiPage } from '@/pages/ci'
import { ciRoute, homeRoute } from '@/routes'

const App = reatomComponent(
  () => (
    <>
      <nav>
        <Button onClick={wrap(() => homeRoute.go())}>Home</Button>
        <Button onClick={wrap(() => ciRoute.go({ prId: '1' }))}>PR 1</Button>
        <Button onClick={wrap(() => ciRoute.go({ prId: '2' }))}>PR 2</Button>
      </nav>

      <main>
        <CiPage />
      </main>
    </>
  ),
  'App'
)

export default App
