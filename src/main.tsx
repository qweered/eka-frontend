import { context, connectLogger } from '@reatom/core'
import { reatomContext } from '@reatom/react'
import { ViteThemeProvider } from '@space-man/react-theme-animation'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css'

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
    <ViteThemeProvider defaultTheme="system" storageKey="theme" attribute="class">
      <App />
    </ViteThemeProvider>
  </reatomContext.Provider>
)
