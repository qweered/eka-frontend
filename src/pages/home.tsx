import { reatomComponent } from '@reatom/react'
import {
  IconBrandGithub,
  IconBrandDiscord,
  IconRocket,
  IconRefresh,
  IconTool,
  IconStar,
  IconUsers
} from '@tabler/icons-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const HomePage = reatomComponent(() => {
  return (
    <div className="min-h-screen bg-linear-to-br from-background to-muted/20">
      <section className="relative px-6 py-24 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-3xl"></div>
              <h1 className="relative text-6xl font-bold tracking-tight text-foreground sm:text-7xl">Ekala</h1>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
            A modern Nix ecosystem featuring core packages, intelligent CI/CD, and automated package management. Built
            for developers who value reproducibility, automation, and elegant design.
          </p>
        </div>
      </section>

      <Separator />

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Card className="text-center border-0 bg-card/60 shadow-sm backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center">
                  <Avatar className="h-16 w-16 bg-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      <IconStar className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-4 text-3xl font-bold text-foreground">46</div>
                <div className="text-muted-foreground">GitHub Stars</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-card/60 shadow-sm backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center">
                  <Avatar className="h-16 w-16 bg-secondary">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      <IconUsers className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-4 text-3xl font-bold text-foreground">5</div>
                <div className="text-muted-foreground">Contributors</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-card/60 shadow-sm backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center">
                  <Avatar className="h-16 w-16 bg-accent">
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      <IconTool className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-4 text-3xl font-bold text-foreground">3</div>
                <div className="text-muted-foreground">Core Projects</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Core Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three essential components working together to create a complete Nix ecosystem
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="group relative overflow-hidden border-0 bg-card/60 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 bg-secondary">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      <IconTool className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-foreground">Corepkgs</CardTitle>
                    <CardDescription>Core packages and NixOS modules</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
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
                    <span className="text-muted-foreground">91.4% Nix</span>
                  </div>
                  <a
                    href="https://github.com/ekala-project/corepkgs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    View Repository
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-card/60 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 bg-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      <IconRocket className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-foreground">EkaCI</CardTitle>
                    <CardDescription>CI/CD tool and web frontend</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
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
                      51 stars
                    </Badge>
                    <span className="text-muted-foreground">96.7% Rust</span>
                  </div>
                  <a
                    href="https://github.com/ekala-project/eka-ci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    View Repository
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-card/60 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 bg-accent">
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      <IconRefresh className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-foreground">Ekapkgs Update</CardTitle>
                    <CardDescription>Automatic updater for Ekapkgs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
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
                      <IconStar className="h-3 w-3" />0 stars
                    </Badge>
                    <span className="text-muted-foreground">98.8% Rust</span>
                  </div>
                  <a
                    href="https://github.com/ekala-project/ekapkgs-update"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    View Repository
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Design Principles</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Guiding principles that set Ekala apart from traditional Nix workflows
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center border-0 bg-card/60 backdrop-blur-sm transition-all hover:shadow-md hover:shadow-border/50">
              <CardContent className="pt-6">
                <Avatar className="mx-auto h-16 w-16 bg-secondary">
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-lg font-bold">
                    1
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Explicit over Implicit</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Clear, understandable configurations that make intent obvious
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-card/60 backdrop-blur-sm transition-all hover:shadow-md hover:shadow-border/50">
              <CardContent className="pt-6">
                <Avatar className="mx-auto h-16 w-16 bg-primary/10">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg font-bold">2</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Intuitive over Pedantic</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  User-friendly interfaces that just work the way you expect
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-card/60 backdrop-blur-sm transition-all hover:shadow-md hover:shadow-border/50">
              <CardContent className="pt-6">
                <Avatar className="mx-auto h-16 w-16 bg-accent">
                  <AvatarFallback className="bg-accent text-accent-foreground text-lg font-bold">3</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Good Defaults</h3>
                <p className="mt-2 text-sm text-muted-foreground">Sensible configurations that work out of the box</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-card/60 backdrop-blur-sm transition-all hover:shadow-md hover:shadow-border/50">
              <CardContent className="pt-6">
                <Avatar className="mx-auto h-16 w-16 bg-muted">
                  <AvatarFallback className="bg-muted text-muted-foreground text-lg font-bold">4</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Automation over Manual</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reduce repetitive tasks with intelligent automation
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-card/60 backdrop-blur-sm transition-all hover:shadow-md hover:shadow-border/50">
              <CardContent className="pt-6">
                <Avatar className="mx-auto h-16 w-16 bg-primary/10">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg font-bold">5</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Fun over Drudgery</h3>
                <p className="mt-2 text-sm text-muted-foreground">Make package management enjoyable and efficient</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Complete Project Ecosystem
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover all repositories that make up the Ekala ecosystem
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <Card className="text-center border-0 bg-card/60 backdrop-blur-sm transition-all hover:shadow-md hover:shadow-border/50">
              <CardContent className="pt-6">
                <Avatar className="mx-auto h-16 w-16 bg-primary/10">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    <IconStar className="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-foreground">ekapkgs-roadmap</h3>
                <p className="mt-2 text-sm text-muted-foreground">Community roadmap and project planning</p>
                <div className="mt-4 text-3xl font-bold text-foreground">165</div>
                <div className="text-muted-foreground">GitHub Stars</div>
                <div className="mt-2 text-xs text-muted-foreground">3 contributors</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-card/60 backdrop-blur-sm transition-all hover:shadow-md hover:shadow-border/50">
              <CardContent className="pt-6">
                <Avatar className="mx-auto h-16 w-16 bg-secondary">
                  <AvatarFallback className="bg-secondary text-secondary-foreground">
                    <IconTool className="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-foreground">eeps</h3>
                <p className="mt-2 text-sm text-muted-foreground">Ekala Enhancement Proposals</p>
                <div className="mt-4 text-3xl font-bold text-foreground">21</div>
                <div className="text-muted-foreground">GitHub Stars</div>
                <div className="mt-2 text-xs text-muted-foreground">5 contributors</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Ready to get started?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join the Ekala ecosystem and experience modern Nix package management
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://github.com/ekala-project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <IconBrandGithub className="size-4" />
              Explore on GitHub
            </a>
            <a
              href="https://discord.gg/JG6zmPTutq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <IconBrandDiscord className="size-4" />
              Join Discord
            </a>
          </div>
        </div>
      </section>

      <Separator />

      <footer className="border-t border-border/50 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">© 2025 Ekala Project. Built with ❤️ for the Nix community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}, 'HomePage')
