import * as React from "react"
import Navbar from "components/Navbar"
import Footer from "components/Footer"
import SEO from "components/Seo"
import { LazyMotion, domAnimation, m } from "framer-motion"

interface props {
  children: React.ReactNode
  title: string
  className?: string
}

const Layout = (props: props) => {
  return (
    <main className="bg-custom-bg flex justify-center min-h-screen">
      <SEO title={props.title} />
      <div className="mx-12 w-screen md:w-1/2">
        <div className="flex sticky top-0 z-50 bg-custom-bg justify-center mb-10 p-6">
          <Navbar />
        </div>
        <LazyMotion features={domAnimation}>
          <m.main
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.3,
            }}
          >
            <div className={props.className}>{props.children}</div>
            <Footer />
          </m.main>
        </LazyMotion>
      </div>
    </main>
  )
}

export default Layout
