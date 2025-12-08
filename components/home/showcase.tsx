"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LightningIcon, CheckCircleIcon, CopyIcon } from "@phosphor-icons/react"

export function ComponentsShowcase() {
    return (
        <section className="py-24 bg-bg border-b-4 border-border">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-6">BUILT TO BE <span className="bg-pastel-pink px-2 border-4 border-border">USED</span></h2>
                    <p className="text-xl max-w-2xl mx-auto">
                        Don&apos;t just take our word for it. Here are some of the components you can use right now.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <Card className="border-4 shadow-brutal bg-bw">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <LightningIcon weight="fill" className="text-main" /> Buttons
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            <Button>Default Button</Button>
                            <Button variant="neutral">Neutral Button</Button>
                            <Button className="bg-pastel-red text-text hover:bg-pastel-red/90">Custom Color</Button>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="border-4 shadow-brutal bg-bw">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CheckCircleIcon weight="fill" className="text-pastel-green" /> Badges
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            <Badge>Default</Badge>
                            <Badge variant="neutral">Neutral</Badge>
                            <Badge className="bg-pastel-orange text-text">New</Badge>
                            <Badge className="bg-pastel-purple text-text">Cool</Badge>
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card className="border-4 shadow-brutal bg-bw">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CopyIcon weight="fill" className="text-pastel-blue" /> Cards
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="p-4 border-2 border-border rounded-base bg-pastel-yellow mb-2">
                                <p className="font-bold">Nested Card</p>
                                <p className="text-sm">You can nest components easily.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/docs/components">
                        <Button size="lg" variant="neutral" className="border-4 text-lg px-8">
                            View All Components
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
