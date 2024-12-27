import Accordion from "./components/Accordion";
import ImageDesktop from "./assets/illustration-woman-online-desktop.svg";
import ImageMobile from "./assets/illustration-woman-online-mobile.svg";
import "./styles/App.scss";

export default function App() {
  return (
    <>
      <main className="card">
        <section className="image-box">
          <img src={ImageDesktop} alt="Image Desktop" className="desktop" />
          <img src={ImageMobile} alt="Image Mobile" className="mobile"/>
        </section>
          <form>
            <h1>Faq</h1>
            <Accordion />
          </form>
      </main>

    </>
  )
}
