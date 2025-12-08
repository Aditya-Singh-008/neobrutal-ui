"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CubeIcon, GithubLogoIcon } from "@phosphor-icons/react"

export function SiteHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b-4 border-border bg-bw">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-base border-2 border-border bg-main shadow-brutal">
                        <CubeIcon weight="fill" className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-black uppercase tracking-tight">NeoBrutal UI</span>
                </div>
                <nav className="hidden md:flex items-center gap-8 font-bold text-lg">
                    <Link href="/docs" className="hover:underline decoration-4 underline-offset-4 decoration-main">Docs</Link>
                    <Link href="/docs/components" className="hover:underline decoration-4 underline-offset-4 decoration-pastel-pink">Components</Link>
                    <Link href="https://github.com/bridgetamana/neobrutal-ui" target="_blank" className="hover:text-main transition-colors">
                        <GithubLogoIcon weight="fill" className="h-8 w-8" />
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/docs/components">
                        <Button className="hidden md:flex font-bold shadow-brutal hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
                            Explore Components
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
