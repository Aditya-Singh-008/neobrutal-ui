export function StatsSection() {
    return (
        <section className="border-y-2 border-black bg-bw">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
                    <div className="flex flex-col items-center justify-center py-8 px-2">
                        <span className="text-4xl md:text-5xl font-bold mb-2">100%</span>
                        <span className="text-lg uppercase">Free & Open Source</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-8 px-2">
                        <span className="text-4xl md:text-5xl font-bold mb-2">20+</span>
                        <span className="text-lg uppercase">Components</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-8 px-2">
                        <span className="text-4xl md:text-5xl font-bold mb-2">Copy</span>
                        <span className="text-lg uppercase">Paste Architecture</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
