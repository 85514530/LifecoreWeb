import { m } from "framer-motion"

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Banner Section */}
            <section className="bg-primary/10 py-24">
                <div className="container mx-auto px-4 text-center">
                    <m.h1
                        className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        About Us
                    </m.h1>
                    <m.p
                        className="text-xl text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Building trust in every transaction
                    </m.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <m.div
                        className="prose prose-lg dark:prose-invert mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xl leading-relaxed text-center font-medium">
                            Introducing <span className="text-primary font-bold">CardLife</span>, the largest and most trusted online platform for gift card trading!
                        </p>

                        <div className="my-12 p-8 bg-secondary/30 rounded-2xl border border-border">
                            <p className="mb-0 text-center text-lg">
                                At CardLife, we believe in providing our valued customers with a secure, caring, and efficient experience,
                                ensuring that you can sell any gift card without worrying about security or rates.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mt-16">
                            <div className="text-center p-6 rounded-xl hover:bg-secondary/30 transition-colors">
                                <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Secure</h3>
                                <p className="text-muted-foreground text-sm">Bank-grade security for all your transactions and data.</p>
                            </div>
                            <div className="text-center p-6 rounded-xl hover:bg-secondary/30 transition-colors">
                                <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Fast</h3>
                                <p className="text-muted-foreground text-sm">Instant processing and quick payouts to your account.</p>
                            </div>
                            <div className="text-center p-6 rounded-xl hover:bg-secondary/30 transition-colors">
                                <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Efficient</h3>
                                <p className="text-muted-foreground text-sm">Best exchange rates in the market, updated daily.</p>
                            </div>
                        </div>
                    </m.div>
                </div>
            </section>
        </div>
    )
}
