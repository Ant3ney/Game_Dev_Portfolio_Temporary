import "./App.css";
import StandardPlaceholder from "components/StandardPlaceholder";
import useIsMobile from "components/useIsMobile";

function App() {
  const isMobile: boolean = useIsMobile();
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
      <StandardPlaceholder
        src="images/PivitalContent.png"
        link="#"
        srcMob="images/PivitalContentMob.png"
      />
      <StandardPlaceholder
        src="images/PSAGLanding.png"
        srcMob="images/PSAGLandingMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/PSAGDetailedDisplay.png"
        srcMob="images/PSAGDetailedDisplayMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/PSAGSlides.png"
        srcMob="images/PSAGSlidesMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/CapyLanding.png"
        srcMob="images/CapyLandingMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/CapyDetailedDisplay.png"
        srcMob="images/CapyDetailedDisplayMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/CapySlides.png"
        srcMob="images/CapySlidesMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/SpongeLanding.png"
        srcMob="images/SpongeLandingMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/SpongeDetailedDisplay.png"
        srcMob="images/SpongeDetailedDisplayMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/SpongeSlides.png"
        srcMob="images/SpongeSlidesMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/ChimpLanding.png"
        srcMob="images/ChimpLandingMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/ChimpDetailedDisplay.png"
        srcMob="images/ChimpDetailedDisplayMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/ChimpSlides.png"
        srcMob="images/ChimpSlidesMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/GravityLanding.png"
        srcMob="images/GravityLandingMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/GravityDetailedDisplay.png"
        srcMob="images/GravityDetailedDisplayMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/GravitySlides.png"
        srcMob="images/GravitySlidesMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/JoinNewsLetter.png"
        srcMob="images/JoinNewsLetterMob.png"
        link="#"
      />
      {/* ContactMeContentLeft.png */}
      {!isMobile ? (
        <>
          <StandardPlaceholder src="images/ContactMeTitle.png" link="#" />
          <StandardPlaceholder
            src="images/ContactMeContentLeft.png"
            src2="images/ContactMeContentRight.png"
            link="#"
            link2="#"
            settings={{ dskSplit: true }}
          />
        </>
      ) : (
        <>
          <StandardPlaceholder srcMob="images/ContactInfoMob.png" link="#" />
          <StandardPlaceholder src="images/DirectMessageMob.png" link="#" />
        </>
      )}
      <StandardPlaceholder
        src="images/ScheduleInterview.png"
        srcMob="images/ScheduleInterviewMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/Transition.png"
        link="#"
        srcMob="images/TransitionMob.png"
      />
      <StandardPlaceholder
        src="images/DownloadResume.png"
        srcMob="images/DownloadResumeMob.png"
        link="#"
      />
      {!isMobile ? (
        <StandardPlaceholder
          src="images/Card1.png"
          src2="images/Card2.png"
          link="#"
          link2="#"
          settings={{ dskSplit: true }}
        />
      ) : (
        <>
          <StandardPlaceholder srcMob="images/Card1Mob.png" link="#" />
          <StandardPlaceholder srcMob="images/Card2Mob.png" link="#" />
        </>
      )}
      <StandardPlaceholder
        src="images/ContactInfoCore.png"
        srcMob="images/ContactInfoCoreMob.png"
        link="#"
      />
      <StandardPlaceholder
        src="images/PoweredBy.png"
        srcMob="images/PoweredByMob.png"
        link="#"
      />
    </div>
  );
}

export default App;
