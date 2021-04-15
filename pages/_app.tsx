import { ThemeProvider } from "next-themes"
import PageLayout from "../layout/Layout/Layout"
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  )
}

export default MyApp
