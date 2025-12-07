"use client"

import * as React from "react"
import { CodeBlock } from "@/components/docs/code-block"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string
    children: React.ReactNode
}

export function ComponentPreview({ code, children, className, ...props }: ComponentPreviewProps) {
    const [view, setView] = React.useState<"preview" | "code">("preview")

    return (
        <div className={cn("space-y-4", className)} {...props}>
            <div className="flex items-center gap-2">
                <Button
                    variant={view === "preview" ? "default" : "neutral"}
                    size="sm"
                    onClick={() => setView("preview")}
                    className="w-24"
                >
                    Preview
                </Button>
                <Button
                    variant={view === "code" ? "default" : "neutral"}
                    size="sm"
                    onClick={() => setView("code")}
                    className="w-24"
                >
                    Code
                </Button>
            </div>

            {view === "preview" ? (
                <div className="min-h-[350px] flex items-center justify-center rounded-base border-2 border-border bg-bw p-10 shadow-brutal">
                    {children}
                </div>
            ) : (
                <CodeBlock code={code} />
            )}
        </div>
    )
}
