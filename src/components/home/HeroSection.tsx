import { m, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"

export default function HeroSection() {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

    return (
        <section ref={targetRef} className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black text-white selection:bg-primary/30">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] left-[30%] w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <m.div
                        style={{ opacity, y }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                            <span className="text-sm font-medium text-gray-300">Trusted by 3M+ Users</span>
                        </m.div>

                        <m.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
                        >
                            Turn your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400 animate-gradient-x">
                                Digital Products
                            </span> <br />
                            into Cash instantly.
                        </m.h1>

                        <m.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-400 max-w-lg leading-relaxed"
                        >
                            The safest, fastest, and most reliable platform to use.
                            Experience bank-grade security and instant payouts today.
                        </m.p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <m.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all"
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
                                className="bg-white/10 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all"
                            >
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"></path></svg>
                                <div className="text-left">
                                    <div className="text-xs opacity-80">GET IT ON</div>
                                    <div className="text-lg font-bold">Google Play</div>
                                </div>
                            </m.button>
                        </div>
                    </m.div>

                    {/* 3D Visual/Phone */}
                    <m.div
                        style={{ scale }}
                        className="lg:w-1/2 relative"
                    >
                        <m.div
                            initial={{ opacity: 0, rotateY: 30, x: 50 }}
                            animate={{ opacity: 1, rotateY: -10, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            {/* Glow behind phone */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/30 to-blue-500/30 blur-[60px] rounded-full -z-10" />

                            {/* Phone Frame Mockup */}
                            <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[45px] border-[8px] border-zinc-800 shadow-2xl overflow-hidden hidden md:block">
                                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-black">
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full" />
                                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                                        <div className="text-zinc-500 font-medium tracking-widest text-sm uppercase">Secure App</div>
                                    </div>
                                </div>

                                {/* Floating Overlay Elements */}
                                <m.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute top-10 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20"
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="text-xs text-gray-300">Current Balance</div>
                                        <div className="text-xs text-green-400">+12.5%</div>
                                    </div>
                                    <div className="text-2xl font-bold mt-1">₦ 450,200.00</div>
                                </m.div>

                                <m.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-20 left-4 right-4 bg-zinc-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                            <ArrowRight className="w-5 h-5 -rotate-45" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold">Payment Received</div>
                                            <div className="text-xs text-gray-400">Just now from CardLife</div>
                                        </div>
                                    </div>
                                </m.div>
                            </div>
                        </m.div>
                    </m.div>
                </div>
            </div>
        </section>
    )
}
