// oxlint-disable no-default-export
import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { ThemeSwitcher } from '@space-man/react-theme-animation'
import { IconHome, IconActivity, IconMenu } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { CiPage } from '@/pages/ci'
import { HomePage } from '@/pages/home'
import { ciRoute, homeRoute } from '@/routes'

const App = reatomComponent(() => {
  const isHome = homeRoute.exact()
  const isCi = ciRoute.exact()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="sm:hidden">
                <Sheet>
                  <SheetTrigger render={<Button variant="ghost" size="icon-sm" />}>
                    <IconMenu className="size-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </SheetTrigger>
                  <SheetContent side="left" showCloseButton>
                    <SheetHeader>
                      <SheetTitle>Ekala</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-6">
                      <Button
                        variant={isHome ? 'default' : 'ghost'}
                        size="sm"
                        onClick={wrap(() => homeRoute.go())}
                        className="justify-start gap-2 px-4 py-3"
                      >
                        <IconHome className="size-4" />
                        Home
                      </Button>
                      <Button
                        variant={isCi ? 'default' : 'ghost'}
                        size="sm"
                        onClick={wrap(() => ciRoute.go({ prId: '1' }))}
                        className="justify-start gap-2 px-4 py-3"
                      >
                        <IconActivity className="size-4" />
                        CI Demo
                      </Button>
                    </nav>
                    <div className="pt-8 text-center">
                      <ThemeSwitcher />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
              <div className="text-xl font-bold text-foreground">Ekala</div>
              <NavigationMenu className="hidden sm:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Button
                      variant={isHome ? 'default' : 'ghost'}
                      size="sm"
                      onClick={wrap(() => homeRoute.go())}
                      className="gap-2"
                    >
                      <IconHome className="size-4" />
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
                      <IconActivity className="size-4" />
                      CI Demo
                    </Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>

      <main>
        {isHome && <HomePage />}
        {isCi && <CiPage />}
      </main>
    </div>
  )
}, 'App')

export default App
