import { Phone, UserPlus, Upload, ShieldCheck, TrendingUp } from 'lucide-react'
import { m, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
    {
        id: "01",
        title: "Discovery",
        description: "Analyze your business requirements and identify areas for digital transformation.",
        icon: Phone,
        color: "bg-blue-500"
    },
    {
        id: "02",
        title: "Strategy",
        description: "Develop a comprehensive cloud architecture tailored to your scaling needs.",
        icon: UserPlus,
        color: "bg-purple-500"
    },
    {
        id: "03",
        title: "Implementation",
        description: "Our engineers build and integrate the components seamlessly with your systems.",
        icon: Upload,
        color: "bg-pink-500"
    },
    {
        id: "04",
        title: "Deployment",
        description: "Rigorous testing followed by a smooth, zero-downtime deployment.",
        icon: ShieldCheck,
        color: "bg-orange-500"
    },
    {
        id: "05",
        title: "Scaling",
        description: "Continuous monitoring and auto-scaling to handle your growing user base.",
        icon: TrendingUp,
        color: "bg-green-500"
    },
]

export default function FeatureSteps() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section ref={containerRef} className="py-32 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5" />

            <div className="container mx-auto px-4 relative z-10">
                <m.div
                    className="text-center mb-24 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Process</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4 mb-6">
                        From Concept to Deployment in <span className="text-primary">Record Time</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Our streamlined methodology ensures maximum efficiency and reliability for every project.
                    </p>
                </m.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 rounded-full hidden md:block" />
                    <m.div
                        style={{ height: lineHeight }}
                        className="absolute left-4 md:left-1/2 top-0 w-1 bg-primary -translate-x-1/2 rounded-full hidden md:block origin-top"
                    />

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <div key={step.id} className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Text Content */}
                                <div className="md:w-1/2 flex justify-center md:justify-end">
                                    <m.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className={`md:w-full max-w-md ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                                    >
                                        <div className={`hidden md:flex items-center gap-4 mb-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                                            <span className="text-6xl font-black text-gray-200 dark:text-gray-800">{step.id}</span>
                                            <div className={`h-[1px] flex-1 bg-gray-200 dark:bg-gray-800`} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                                    </m.div>
                                </div>

                                {/* Center Icon Point */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-primary z-10 shadow-xl hidden md:flex">
                                    <step.icon className="w-5 h-5 text-primary" />
                                </div>

                                {/* Visual Card */}
                                <div className="md:w-1/2 w-full pl-12 md:pl-0">
                                    <m.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        whileHover={{ y: -10 }}
                                        className="bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
                                    >
                                        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity ${step.color}`} />

                                        <div className={`w-14 h-14 rounded-2xl ${step.color} bg-opacity-10 flex items-center justify-center text-white mb-6`}>
                                            <step.icon className={`w-7 h-7 text-black dark:text-white`} />
                                        </div>

                                        {/* Simplified Step Visualization */}
                                        <div className="space-y-3">
                                            <div className="h-2 w-1/3 bg-gray-100 dark:bg-gray-700 rounded-full" />
                                            <div className="h-2 w-2/3 bg-gray-100 dark:bg-gray-700 rounded-full" />
                                        </div>

                                        {/* Mobile Step ID */}
                                        <div className="absolute bottom-4 right-4 text-4xl font-black text-gray-100 dark:text-gray-800/50 md:hidden">
                                            {step.id}
                                        </div>
                                    </m.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
