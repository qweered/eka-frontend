// oxlint-disable no-default-export
import { atom, wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'

const page = atom(0, 'page').extend((target) => ({
    next: () => target.set((state) => state + 1),
    prev: () => target.set((state) => Math.max(0, state - 1)),
}))

const App = reatomComponent(() => (
    <>
        <button type="button" onClick={wrap(page.prev)}>Prev</button>
        <button type="button" onClick={wrap(page.next)}>Next</button>
        <p>Page {page()}</p>
    </>
))

export default App
