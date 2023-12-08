import "./App.css";
import StandardPlaceholder from "components/StandardPlaceholder";

function App() {
  return (
    <div className="App">
      {/* <img src="images/nav.png" alt="navigation" />
      <img src="images/LandingScreen.png" alt="navigation" /> */}
      <StandardPlaceholder
        src="images/nav.png"
        srcMob="images/NavMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/LandingScreen.png"
        srcMob="images/LandingScreenMob.png"
        link="#"
      />
      <StandardPlaceholder src="images/PivitalContent.png" link="#" />
      <StandardPlaceholder src="images/PSAGLanding.png" link="#" />
      <StandardPlaceholder src="images/PSAGDetailedDisplay.png" link="#" />
      <StandardPlaceholder src="images/PSAGSlides.png" link="#" />
      <StandardPlaceholder src="images/CapyLanding.png" link="#" />
      <StandardPlaceholder src="images/CapyDetailedDisplay.png" link="#" />
      <StandardPlaceholder src="images/CapySlides.png" link="#" />
      <StandardPlaceholder src="images/SpongeLanding.png" link="#" />
      <StandardPlaceholder src="images/SpongeDetailedDisplay.png" link="#" />
      <StandardPlaceholder src="images/SpongeSlides.png" link="#" />
      <StandardPlaceholder src="images/ChimpLanding.png" link="#" />
      <StandardPlaceholder src="images/ChimpDetailedDisplay.png" link="#" />
      <StandardPlaceholder src="images/ChimpSlides.png" link="#" />
      <StandardPlaceholder src="images/GravityLanding.png" link="#" />
      <StandardPlaceholder src="images/GravityDetailedDisplay.png" link="#" />
      <StandardPlaceholder src="images/GravitySlides.png" link="#" />
      <StandardPlaceholder src="images/JoinNewsLetter.png" link="#" />
      <StandardPlaceholder src="images/ContactMeTitle.png" link="#" />
      <StandardPlaceholder
        src="images/ContactMeContentLeft.png"
        src2="images/ContactMeContentRight.png"
        link="#"
        link2="#"
        settings={{ dskSplit: true }}
      />
      <StandardPlaceholder src="images/ScheduleInterview.png" link="#" />
      <StandardPlaceholder src="images/Transition.png" link="#" />
      <StandardPlaceholder src="images/DownloadResume.png" link="#" />
      <StandardPlaceholder
        src="images/Card1.png"
        src2="images/Card2.png"
        link="#"
        link2="#"
        settings={{ dskSplit: true }}
      />
      <StandardPlaceholder src="images/ContactInfoCore.png" link="#" />
      <StandardPlaceholder src="images/PoweredBy.png" link="#" />
    </div>
  );
}

export default App;
