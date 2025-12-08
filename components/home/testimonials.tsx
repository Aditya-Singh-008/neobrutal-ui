"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-pastel-green border-b-4 border-border">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-4xl md:text-6xl font-black text-center mb-16">LOVED BY <span className="italic">NO ONE</span> (YET)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="bg-bw border-4 shadow-brutal rotate-1">
                        <CardContent className="pt-6">
                            <p className="text-lg font-medium mb-4">&quot;I used to have a boring website. Now it looks like a 90s website on steroids. I love it!&quot;</p>
                            <div className="flex items-center gap-3">
                                <Avatar className="border-2 border-border h-12 w-12">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-bold">Not Shadcn</p>
                                    <p className="text-sm text-gray-600">UI Designer</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-bw border-4 shadow-brutal -rotate-1">
                        <CardContent className="pt-6">
                            <p className="text-lg font-medium mb-4">&quot;Finally, a UI library that doesn&apos;t look like every other SaaS product. It&apos;s bold, it&apos;s fun, it&apos;s brutal.&quot;</p>
                            <div className="flex items-center gap-3">
                                <Avatar className="border-2 border-border h-12 w-12">
                                    <AvatarFallback className="bg-pastel-purple">JD</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-bold">Jane Doe</p>
                                    <p className="text-sm text-gray-600">Frontend Dev</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
