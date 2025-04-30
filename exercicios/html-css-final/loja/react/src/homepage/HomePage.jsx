import SplashScreen from "./components/SplashScreen"
import Section from "../common/Section"
import SplashInfos from "./components/SplashInfos"
import ImagesRow from "./components/ImagesRow"
import AdvertisementScreen from "./components/AdvertisementScreen"
import InstaCaroussel from "./components/InstaCaroussel"
import Button from "../common/Button"
import ProductCategoriesList from "./components/ProductCategoriesList"

function HomePage() {
  return (
    <>
      <SplashScreen />
      <Section title="Clever designs, delivered free">
        <ProductCategoriesList />
      </Section>
      <SplashInfos />
      <Section title="Clever designs, delivered free">
        <ImagesRow />
      </Section>
      <AdvertisementScreen />
      <Section title="Shop these real-life spaces" noBottomMargin>
        <InstaCaroussel />
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
          <Button className="btn-with-margin">Shop seating</Button>
        </div>
      </Section>
    </>
  );
}

export default HomePage;
