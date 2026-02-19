import { m } from "framer-motion"
import { Quote } from "lucide-react"

export default function Testimonials() {
    const testimonials = [
        {
            content: "CardLife has completely changed how I trade gift cards. The rates are unbeatable and payment is always instant.",
            author: "Alex Johnson",
            role: "Power Trader",
            color: "bg-blue-500"
        },
        {
            content: "I was skeptical at first, but after my first trade getting cleared in 2 mins, I was hooked. Best platform in Nigeria hands down.",
            author: "Sarah Williams",
            role: "Verified User",
            color: "bg-purple-500"
        },
        {
            content: "Customer support is top notch. Had an issue with my upload and they verified it manually within minutes.",
            author: "Michael Brown",
            role: "Daily User",
            color: "bg-green-500"
        },
        {
            content: "The app is so smooth. I love the dark mode and the way it tracks my trading history.",
            author: "Jessica Lee",
            role: "Beta Tester",
            color: "bg-pink-500"
        },
        {
            content: "Finally a platform that doesn't rip you off with hidden fees. What you see is what you get.",
            author: "David Chen",
            role: "Merchant",
            color: "bg-orange-500"
        },
        {
            content: "Been trading for years, CardLife is the only one I trust with large volume transactions.",
            author: "Emmanuel K.",
            role: "VIP Trader",
            color: "bg-indigo-500"
        }
    ]

    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-900/50" />
            <div className="absolute -left-20 top-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute -right-20 bottom-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <m.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Built for Traders</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Join thousands of users who trade daily on CardLife.
                    </p>
                </m.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {testimonials.map((t, index) => (
                        <m.div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl break-inside-avoid relative group hover:border-primary/50 transition-colors"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={`absolute top-6 right-6 w-2 h-2 rounded-full ${t.color}`} />

                            <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full ${t.color} bg-opacity-20 flex items-center justify-center font-bold text-sm`}>
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold">{t.author}</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</div>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
