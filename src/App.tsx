import { Splash } from "./components/Splash/Splash.tsx";
// import { PhotoBar } from "./components/PhotoBar/PhotoBar.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Navigation } from "./components/Navigation/Navigation.tsx";
import { MainWrapper } from "./components/MainWrapper/MainWrapper.tsx";
import FAQ from "./components/FAQ/FAQ.tsx";

export const App = () => {
  return (
    <MainWrapper>
      <div id="landing">
        <Navigation />
        <Splash />
      </div>

      <div id="about">
        
      </div>
      
      <div id="sponsors">

      </div>
      
      <div id="faq">
        <FAQ />
      </div>

      <Footer />
    </MainWrapper>
  );
};

export default App;
