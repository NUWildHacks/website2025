import { Splash } from "./components/Splash/Splash.tsx";
// import { PhotoBar } from "./components/PhotoBar/PhotoBar.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Navigation } from "./components/Navigation/Navigation.tsx";
import { MainWrapper } from "./components/MainWrapper/MainWrapper.tsx";

export const App = () => {
  return (
    <MainWrapper>
      <Navigation />
      <Splash />

      {/* sections can go here */}

      <Footer />
    </MainWrapper>
  );
};

export default App;
