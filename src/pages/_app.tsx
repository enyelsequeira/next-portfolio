import PageLayout from "@/layouts/MainLayout";
import "@/styles/main.css";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

const pageVariants = {
  pageInitial: {
    backgroundColor: 'red',
    opacity: 0
  },
  pageAnimate: {
    backgroundColor: 'transparent',
    filter: ``,
    opacity: 1,
    transition:{
      duration: 2,
      type: 'tween',
      ease: [0.17, 0.67, 0.83, 0.67] 
    }
  },
  pageExit: {
    backgroundColor: 'black',
    filter: `invert()`,
    opacity: 0
  },
 
}

const pageMotionProps = {
  initial: 'pageInitial',
  animate: 'pageAnimate',
  exit: 'pageExit',
  variants: pageVariants
}


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div {...pageMotionProps}>
        <ThemeProvider attribute="class">
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ThemeProvider>
      </motion.div>


    </AnimatePresence>

  )
}

export default MyApp
