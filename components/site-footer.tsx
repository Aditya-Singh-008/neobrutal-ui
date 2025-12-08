"use client"

import Link from "next/link"
import { CubeIcon } from "@phosphor-icons/react"

export function SiteFooter() {
    return (
        <footer className="bg-bw py-12">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <CubeIcon weight="fill" className="h-8 w-8" />
                    <span className="text-xl font-black uppercase">NeoBrutal UI</span>
                </div>
                <div className="flex gap-6 font-bold">
                    <Link href="/docs" className="hover:underline">Docs</Link>
                    <Link href="https://github.com/bridgetamana/neobrutal-ui" className="hover:underline">GitHub</Link>
                    <Link href="https://twitter.com/bridgetamana" className="hover:underline">Twitter</Link>
                </div>
                <p className="text-sm font-medium">
                    © {new Date().getFullYear()} Bridget. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
