import { reatomComponent } from '@reatom/react'
import { IconBrandGithub, IconRocket, IconRefresh, IconTool, IconStar, IconUsers } from '@tabler/icons-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const HomePage = reatomComponent(() => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <section className="relative px-6 py-24 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-blue-400/20 blur-3xl"></div>
              <h1 className="relative text-6xl font-bold tracking-tight text-slate-900 sm:text-7xl">Ekala</h1>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
            A modern Nix ecosystem featuring core packages, intelligent CI/CD, and automated package management. Built
            for developers who value reproducibility, automation, and elegant design.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              <IconRocket className="h-4 w-4" />
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <IconBrandGithub className="h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      <Separator className="bg-slate-200/50" />

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Card className="text-center border-0 bg-white/60 shadow-sm backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center">
                  <Avatar className="h-16 w-16 bg-yellow-100">
                    <AvatarFallback className="bg-yellow-100 text-yellow-600">
                      <IconStar className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-4 text-3xl font-bold text-slate-900">96</div>
                <div className="text-slate-600">GitHub Stars</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/60 shadow-sm backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center">
                  <Avatar className="h-16 w-16 bg-blue-100">
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      <IconUsers className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-4 text-3xl font-bold text-slate-900">11</div>
                <div className="text-slate-600">Contributors</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/60 shadow-sm backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center">
                  <Avatar className="h-16 w-16 bg-green-100">
                    <AvatarFallback className="bg-green-100 text-green-600">
                      <IconTool className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-4 text-3xl font-bold text-slate-900">3</div>
                <div className="text-slate-600">Core Projects</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="bg-slate-200/50" />

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Core Projects</h2>
            <p className="mt-4 text-lg text-slate-600">
              Three essential components working together to create a complete Nix ecosystem
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="group relative overflow-hidden border-0 bg-white/60 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-slate-200/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 bg-blue-100">
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      <IconTool className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-slate-900">Corepkgs</CardTitle>
                    <CardDescription>Core packages and NixOS modules</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-slate-600">
                    High-quality core packages with strict scrutiny standards. Includes stdenv, compilers, toolchains,
                    and essential system components.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Nix</Badge>
                    <Badge variant="secondary">Shell</Badge>
                    <Badge variant="secondary">Python</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline" className="gap-1">
                      <IconStar className="h-3 w-3" />
                      46 stars
                    </Badge>
                    <span className="text-slate-500">91.4% Nix</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-slate-50"
                    href="https://github.com/ekala-project/corepkgs"
                  >
                    View Repository
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-white/60 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-slate-200/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 bg-green-100">
                    <AvatarFallback className="bg-green-100 text-green-600">
                      <IconRocket className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-slate-900">EkaCI</CardTitle>
                    <CardDescription>CI/CD tool and web frontend</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-slate-600">
                    Optimized PR review workflows with intelligent build analysis. Answers "should I merge this PR" in
                    the quickest way possible.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Rust</Badge>
                    <Badge variant="secondary">Nix</Badge>
                    <Badge variant="secondary">Web</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline" className="gap-1">
                      <IconStar className="h-3 w-3" />
                      50 stars
                    </Badge>
                    <span className="text-slate-500">96.3% Rust</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-slate-50"
                    href="https://github.com/ekala-project/eka-ci"
                  >
                    View Repository
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-white/60 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-slate-200/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 bg-purple-100">
                    <AvatarFallback className="bg-purple-100 text-purple-600">
                      <IconRefresh className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-slate-900">Ekapkgs Update</CardTitle>
                    <CardDescription>Automatic updater for Ekapkgs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-slate-600">
                    Spiritual successor to nixpkgs-update. Covers feature set of nix-update and nixpkgs-update with
                    enhanced automation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Rust</Badge>
                    <Badge variant="secondary">Nix</Badge>
                    <Badge variant="secondary">CLI</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline" className="gap-1">
                      <IconStar className="h-3 w-3" />
                      New
                    </Badge>
                    <span className="text-slate-500">98.5% Rust</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-slate-50"
                    href="https://github.com/ekala-project/ekapkgs-update"
                  >
                    View Repository
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Design Principles</h2>
            <p className="mt-4 text-lg text-slate-600">
              Guiding principles that set Ekala apart from traditional Nix workflows
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center border-0 bg-white/60 backdrop-blur-sm transition-all hover:shadow-md hover:shadow-slate-200/50">
              <CardContent className="pt-6">
                <Avatar className="mx-auto h-16 w-16 bg-blue-100">
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-bold">1</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Explicit over Implicit</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Clear, understandable configurations that make intent obvious
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/60 backdrop-blur-sm transition-all hover:shadow-md hover:shadow-slate-200/50">
              <CardContent className="pt-6">
                <Avatar className="mx-auto h-16 w-16 bg-green-100">
                  <AvatarFallback className="bg-green-100 text-green-600 text-lg font-bold">2</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Intuitive over Pedantic</h3>
                <p className="mt-2 text-sm text-slate-600">
                  User-friendly interfaces that just work the way you expect
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/60 backdrop-blur-sm transition-all hover:shadow-md hover:shadow-slate-200/50">
              <CardContent className="pt-6">
                <Avatar className="mx-auto h-16 w-16 bg-purple-100">
                  <AvatarFallback className="bg-purple-100 text-purple-600 text-lg font-bold">3</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Good Defaults</h3>
                <p className="mt-2 text-sm text-slate-600">Sensible configurations that work out of the box</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/60 backdrop-blur-sm transition-all hover:shadow-md hover:shadow-slate-200/50">
              <CardContent className="pt-6">
                <Avatar className="mx-auto h-16 w-16 bg-orange-100">
                  <AvatarFallback className="bg-orange-100 text-orange-600 text-lg font-bold">4</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Automation over Manual</h3>
                <p className="mt-2 text-sm text-slate-600">Reduce repetitive tasks with intelligent automation</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/60 backdrop-blur-sm transition-all hover:shadow-md hover:shadow-slate-200/50">
              <CardContent className="pt-6">
                <Avatar className="mx-auto h-16 w-16 bg-pink-100">
                  <AvatarFallback className="bg-pink-100 text-pink-600 text-lg font-bold">5</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Fun over Drudgery</h3>
                <p className="mt-2 text-sm text-slate-600">Make package management enjoyable and efficient</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ready to get started?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Join the Ekala ecosystem and experience modern Nix package management
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              <IconBrandGithub className="h-4 w-4" />
              Explore on GitHub
            </Button>
            <Button variant="outline" size="lg">
              Read Documentation
            </Button>
          </div>
        </div>
      </section>

      <Separator className="bg-slate-200/50" />

      <footer className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <Separator className="my-8 bg-slate-200/50" />
          <div className="text-center">
            <p className="text-sm text-slate-500">© 2025 Ekala Project. Built with ❤️ for the Nix community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}, 'HomePage')
