import { m } from "framer-motion"
import { Zap, TrendingUp, Calendar } from "lucide-react"

export default function Product() {


    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

                <div className="container mx-auto px-4 text-center">
                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 leading-tight">
                            Next-Generation <span className="text-primary relative inline-block">
                                Enterprise Cloud
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                            <br /> Architecture
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                            Experience the most scalable, reliable, and secure platform to build upon.
                            Join the next generation of digital infrastructure.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <m.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-foreground text-background p-0 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all font-bold"
                            >
                                <a href="mailto:cardlife.hk@gmail.com" className="w-full h-full px-8 py-4 flex items-center justify-center gap-3">
                                    Get Cloud Trial
                                </a>
                            </m.button>
                            <m.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-secondary text-foreground p-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all font-bold border border-border"
                            >
                                <a href="mailto:cardlife.hk@gmail.com" className="w-full h-full px-8 py-4 flex items-center justify-center gap-3">
                                    View Documentation
                                </a>
                            </m.button>
                        </div>
                    </m.div>
                </div>
            </section>

            {/* Features Grid Section */}
            <section className="py-24 bg-white dark:bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Platform Capabilities</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">Built for modern teams</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <m.div
                                className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors"
                                whileHover={{ x: 10 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
                                        <p className="text-muted-foreground">Monitor your system performance and user metrics instantly with our advanced dashboards.</p>
                                    </div>
                                </div>
                            </m.div>

                            <m.div
                                className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors"
                                whileHover={{ x: 10 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
                                        <p className="text-muted-foreground">Connect with your existing tools effortlessly using our comprehensive API suite.</p>
                                    </div>
                                </div>
                            </m.div>

                            <m.div
                                className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors"
                                whileHover={{ x: 10 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Automated Workflows</h3>
                                        <p className="text-muted-foreground">Reduce manual tasks and improve team efficiency with our powerful automation tools.</p>
                                    </div>
                                </div>
                            </m.div>
                        </div>

                        {/* Interactive Visual Placeholder */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl opacity-50 rounded-full" />
                            <div className="relative bg-background rounded-3xl p-8 shadow-2xl border border-border/50">
                                <div className="grid grid-cols-4 gap-4 mb-6">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <div key={i} className={`aspect-square rounded-2xl flex items-center justify-center ${i === 3 ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                                            <TrendingUp className={`w-6 h-6 ${i === 3 ? 'animate-pulse' : 'opacity-50'}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-primary rounded-full transition-all duration-1000" />
                                    </div>
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>System Status Overview</span>
                                        <span className="text-primary">All Systems Operational</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
