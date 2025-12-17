// oxlint-disable no-default-export
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { IconBrandGithub, IconHome, IconActivity, IconMenu } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { CiPage } from '@/pages/ci'
import { HomePage } from '@/pages/home'
import { ciRoute, homeRoute } from '@/routes'

const App = reatomComponent(() => {
  const isHome = homeRoute.exact()
  const isCi = ciRoute.exact()

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-xl font-bold text-slate-900">Ekala</div>
              <NavigationMenu className="hidden sm:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Button
                      variant={isHome ? 'default' : 'ghost'}
                      size="sm"
                      onClick={wrap(() => homeRoute.go())}
                      className="gap-2"
                    >
                      <IconHome className="h-4 w-4" />
                      Home
                    </Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button
                      variant={isCi ? 'default' : 'ghost'}
                      size="sm"
                      onClick={wrap(() => ciRoute.go({ prId: '1' }))}
                      className="gap-2"
                    >
                      <IconActivity className="h-4 w-4" />
                      CI Demo
                    </Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <IconBrandGithub className="h-4 w-4" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm" className="sm:hidden">
                <IconMenu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {isHome && <HomePage />}
        {isCi && <CiPage />}
      </main>
    </div>
  )
}, 'App')

export default App
