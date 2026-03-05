import { m } from "framer-motion"
import { Gift, TrendingUp, Calendar } from "lucide-react"

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
                            Most reliable <span className="text-primary relative inline-block">
                                digital product
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                            <br /> service platform
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                            Experience the safest, fastest, and most secure way to transact.
                            Download our app today and unlock exclusives.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <m.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-foreground text-background px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all"
                            >
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.02-2.3-1.23-3.14-2.47-1.72-2.49-2.93-6.93-1.22-9.75 0.85-1.41 2.37-2.3 4.02-2.34 1.27-.03 2.5.85 3.29.85.78 0 2.25-1.05 3.8-0.9 0.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.31 2.8zM13 3.5c.71-.86 1.19-2.06 1.06-3.26-1.03.05-2.28.69-3.01 1.55-.66.77-1.22 2.02-1.07 3.19 1.15.09 2.33-.62 3.02-1.48z"></path></svg>
                                <div className="text-left">
                                    <div className="text-xs opacity-80">Download on the</div>
                                    <div className="text-lg font-bold">App Store</div>
                                </div>
                            </m.button>
                            <m.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-foreground text-background px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all"
                            >
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"></path></svg>
                                <div className="text-left">
                                    <div className="text-xs opacity-80">GET IT ON</div>
                                    <div className="text-lg font-bold">Google Play</div>
                                </div>
                            </m.button>
                        </div>
                    </m.div>
                </div>
            </section>

            {/* Rewards Grid Section */}
            <section className="py-24 bg-white dark:bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Rich Rewards</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">Get rewarded every day</h2>
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
                                        <h3 className="text-xl font-bold mb-2">Daily Check-ins</h3>
                                        <p className="text-muted-foreground">Log in daily to unlock progressive rewards. Don't break your streak!</p>
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
                                        <h3 className="text-xl font-bold mb-2">Volume Bonuses</h3>
                                        <p className="text-muted-foreground">Process at least ₦20,000 worth of products to collect special daily bonuses.</p>
                                    </div>
                                </div>
                            </m.div>

                            <m.div
                                className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors"
                                whileHover={{ x: 10 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                        <Gift className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Sunday Special</h3>
                                        <p className="text-muted-foreground">Double rewards on weekends! Make your weekends more profitable.</p>
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
                                            <Gift className={`w-6 h-6 ${i === 3 ? 'animate-bounce' : 'opacity-50'}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-primary rounded-full" />
                                    </div>
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>Progress to next reward</span>
                                        <span className="text-primary">75%</span>
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
