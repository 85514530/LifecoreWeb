import { Suspense, lazy } from "react"
import { LazyMotion, domAnimation } from "framer-motion"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "@/components/layout/Layout"

// Lazy load the Home page
const Home = lazy(() => import("@/pages/Home"))
// Placeholder for Product and About pages (to be created)
const Product = lazy(() => import("@/pages/Product"))
const About = lazy(() => import("@/pages/About"))

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <LazyMotion features={domAnimation}>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="product" element={<Product />} />
                <Route path="about" element={<About />} />
              </Route>
            </Routes>
          </Suspense>
        </LazyMotion>
      </div>
    </BrowserRouter>
  )
}

export default App
