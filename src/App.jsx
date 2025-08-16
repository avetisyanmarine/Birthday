import { useEffect } from "react"
import { FirstPage } from "./components/first-page"
import { ForthPage } from "./components/forth-page"
import { LastFooterPage } from "./components/last-footer-page"
import { MusicPage } from "./components/music-page"
import { SecondPage } from "./components/second-page"
import { ThirdPage } from "./components/third-page"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BackToTop } from "./components/top-button"

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

  }, []);

  return (
    <>
      <MusicPage />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <ForthPage />
      <LastFooterPage />
      <BackToTop />
    </>
  )
}

export default App
