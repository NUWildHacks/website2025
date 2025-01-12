import Splash from "./components/Splash/Splash.tsx";
// import PhotoBar from "./components/PhotoBar/PhotoBar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";
import MainWrapper from "./components/MainWrapper/MainWrapper.tsx";
import FAQ from "./components/FAQ/FAQ.tsx";
import Sponsors from "./components/Sponsors/Sponsors.tsx";
import AboutUs from "./components/AboutUs/AboutUs.tsx";
import EmailList from "./components/EmailList/EmailList.tsx";

import WaveVector from "./components/WaveVector/WaveVector.tsx";
import { colors } from "./shared/colors.ts";

export const App = () => {
  return (
    <MainWrapper>
      <Navigation />

      <div id="landing">
        <Splash />
        <EmailList />
      </div>

      <WaveVector color={colors.dark_green} waviness={0} />
      <div id="about">
        <AboutUs />
      </div>
      <WaveVector
        color={colors.yellow_2}
        otherColor={colors.dark_green}
        waviness={2}
      />
      <div id="sponsors">
        <Sponsors />
      </div>
      <WaveVector
        color={colors.very_dark_green}
        otherColor={colors.yellow_2}
        waviness={3}
      />

      <div id="faq">
        <FAQ />
      </div>

      <WaveVector
        color={colors.rocks}
        otherColor={colors.very_dark_green}
        waviness={3}
      />
      <Footer />
    </MainWrapper>
  );
};

export default App;
