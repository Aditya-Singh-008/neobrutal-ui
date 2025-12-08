"use client"

export function StatsSection() {
    return (
        <section className="border-b-4 border-border bg-bw py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center justify-center p-6 border-4 border-border bg-pastel-purple shadow-brutal rounded-base">
                        <span className="text-5xl font-black mb-2">100%</span>
                        <span className="text-xl font-bold uppercase">Free & Open Source</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 border-4 border-border bg-pastel-orange shadow-brutal rounded-base">
                        <span className="text-5xl font-black mb-2">20+</span>
                        <span className="text-xl font-bold uppercase">Components</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 border-4 border-border bg-pastel-blue shadow-brutal rounded-base">
                        <span className="text-5xl font-black mb-2">Copy</span>
                        <span className="text-xl font-bold uppercase">Paste Architecture</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
