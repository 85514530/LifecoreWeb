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
                            Accelerate your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400 animate-gradient-x">
                                Digital Transformation
                            </span> <br />
                            with our Cloud.
                        </m.h1>

                        <m.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-400 max-w-lg leading-relaxed"
                        >
                            The most secure, scalable, and reliable platform for enterprises.
                            Experience seamless integration and 99.9% uptime guaranteed.
                        </m.p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <m.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-white p-0 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all font-bold"
                            >
                                <a href="mailto:lifecore.hk@gmail.com" className="w-full h-full px-8 py-4 flex items-center justify-center gap-3">
                                    Get Started
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </m.button>
                            <m.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 text-white p-0 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all font-bold border border-white/10"
                            >
                                <a href="mailto:lifecore.hk@gmail.com" className="w-full h-full px-8 py-4 flex items-center justify-center gap-3">
                                    Contact Sales
                                </a>
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
                                        <div className="text-xs text-gray-300">System Uptime</div>
                                        <div className="text-xs text-green-400">+99.99%</div>
                                    </div>
                                    <div className="text-2xl font-bold mt-1">Operational</div>
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
                                            <div className="text-sm font-bold">Node Deployed</div>
                                            <div className="text-xs text-gray-400">Just now in us-east-1</div>
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
