import { Header } from "./components/Header/Header.tsx";
import { PhotoBar } from "./components/PhotoBar/PhotoBar.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Navigation } from "./components/Navigation/Navigation.tsx";
import { SampleSection } from "./components/Sections/SampleSection.tsx";
import { MainWrapper } from "./components/MainWrapper/MainWrapper.tsx";

export const App = () => {
  return (
    <MainWrapper>
      <Header />
      <Navigation />

      {/* sections can go here */}
      <SampleSection />

      <PhotoBar />
      <Footer />
    </MainWrapper>
  );
};

export default App;
