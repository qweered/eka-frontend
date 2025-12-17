import type { JSX } from 'react'

declare module '@reatom/core' {
  // oxlint-disable-next-line no-empty-object-type
  interface RouteChild extends JSX.Element {}
}
