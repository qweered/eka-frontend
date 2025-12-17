import { createRoot } from 'react-dom/client'
import { context, connectLogger } from '@reatom/core'
import { reatomContext } from '@reatom/react'

import App from './App.tsx'

const rootFrame = context.start()
if (import.meta.env.DEV) {
  rootFrame.run(connectLogger)
}

const root = document.getElementById('root')
if (!root) {
    throw new Error('Root element not found')
}

createRoot(root).render(
<reatomContext.Provider value={rootFrame}>
    <App />
</reatomContext.Provider>)
