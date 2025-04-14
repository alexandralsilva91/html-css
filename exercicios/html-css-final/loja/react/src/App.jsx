import Header from "./components/header/Header"
import SplashScreen from "./components/body/SplashScreen"
import Section from "./components/sections/Section"
import SectionTwo from "./components/sections/SectionTwo"
import SectionThird from "./components/sections/SectionThird"
import SectionFourth from "./components/sections/SectionFourth"
import CarousselSectionFive from "./components/sections/CarousselSectionFive"
import Button from "./components/body/Button"
import SectionOne from "./components/sections/SectionOne"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <SplashScreen />
      <Section title="Clever designs, delivered free">
        <SectionOne />
      </Section>
      <SectionTwo />
      <Section title="Clever designs, delivered free">
        <SectionThird />
      </Section>
      <SectionFourth />
      <Section title="Shop these real-life spaces" noBottomMargin>
        <CarousselSectionFive />
      </Section>
      <Section title="Modular, easy-to-move design" fullScreen>
        <video
          width="100%"
          src="../../public/background-video.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
        <div className="full-container flex center">
          <Button>Shop seating</Button>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default App;
