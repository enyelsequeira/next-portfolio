import PageLayout from "@/layouts/MainLayout";
import "@/styles/main.css";
import { AnimateSharedLayout, motion } from "framer-motion";
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import SEO from '../../seo.config';


const pageVariants = {
  pageInitial: {
    backgroundColor: 'red',
    opacity: 0
  },
  pageAnimate: {
    backgroundColor: 'transparent',
    filter: ``,
    opacity: 1,
    transition: {
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
    <AnimateSharedLayout type="crossfade">
      <DefaultSeo {...SEO} />
      <motion.div {...pageMotionProps}>
        <ThemeProvider attribute="class">
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ThemeProvider>
      </motion.div>
    </AnimateSharedLayout>




  )
}

export default MyApp