import React from 'react'
import { render } from 'react-dom'
import StandardPlaceholder from "../StandardPlaceholder";
import PrimevalHorizon from "../PrimevalHorizon";
import useIsMobile from "../useIsMobile";

function Home(props: any) {
  const isMobile: boolean = useIsMobile();
  return (
    <div className="App">
      {/* <img src="images/nav.png" alt="navigation" />
      <img src="images/LandingScreen.png" alt="navigation" /> */}
      <StandardPlaceholder
        src="images/nav.png"
        srcMob="images/NavMob.png"
        link="https://linktr.ee/Ant3ney"
      />

      <StandardPlaceholder
        src="images/LandingScreen.png"
        srcMob="images/LandingScreenMob.png"
        link="https://ant3ney.itch.io"
      />
      <StandardPlaceholder
        src="images/PivitalContent.png"
        link=""
        srcMob="images/PivitalContentMob.png"
      />
      <StandardPlaceholder
        src="images/PSAGLanding.png"
        srcMob="images/PSAGLandingMob.png"
        link="https://ant3ney.itch.io/pokemon-sand-and-gravel"
      />
      <StandardPlaceholder
        src="images/PSAGDetailedDisplay.png"
        srcMob="images/PSAGDetailedDisplayMob.png"
        link=""
      />
      <StandardPlaceholder
        src="images/PSAGSlides.png"
        srcMob="images/PSAGSlidesMob.png"
        link="https://www.youtube.com/watch?v=o_KZkODirT8"
      />
      <StandardPlaceholder
        src="images/CapyLanding.png"
        srcMob="images/CapyLandingMob.png"
        link="https://ant3ney.itch.io/capy-the-flying-capybara"
      />
      <StandardPlaceholder
        src="images/CapyDetailedDisplay.png"
        srcMob="images/CapyDetailedDisplayMob.png"
        link=""
      />
      <StandardPlaceholder
        src="images/CapySlides.png"
        srcMob="images/CapySlidesMob.png"
        link="https://www.youtube.com/watch?v=OMQfexKSOQE"
      />
      <StandardPlaceholder
        src="images/SpongeLanding.png"
        srcMob="images/SpongeLandingMob.png"
        link="https://ant3ney.itch.io/the-spongelands"
      />
      <StandardPlaceholder
        src="images/SpongeDetailedDisplay.png"
        srcMob="images/SpongeDetailedDisplayMob.png"
        link=""
      />
      <StandardPlaceholder
        src="images/SpongeSlides.png"
        srcMob="images/SpongeSlidesMob.png"
        link="https://www.youtube.com/watch?v=0_cE24HsBMM"
      />
      <StandardPlaceholder
        src="images/ChimpLanding.png"
        srcMob="images/ChimpLandingMob.png"
        link=""
      />
      <StandardPlaceholder
        src="images/ChimpDetailedDisplay.png"
        srcMob="images/ChimpDetailedDisplayMob.png"
        link=""
      />
      <StandardPlaceholder
        src="images/ChimpSlides.png"
        srcMob="images/ChimpSlidesMob.png"
        link="https://www.youtube.com/watch?v=F_o8MB5ITp8"
      />
      <StandardPlaceholder
        src="images/GravityLanding.png"
        srcMob="images/GravityLandingMob.png"
        link="https://ant3ney.itch.io/gravity"
      />
      <StandardPlaceholder
        src="images/GravityDetailedDisplay.png"
        srcMob="images/GravityDetailedDisplayMob.png"
        link=""
      />
      <StandardPlaceholder
        src="images/GravitySlides.png"
        srcMob="images/GravitySlidesMob.png"
        link="https://www.youtube.com/watch?v=cuDFUpQEyYw"
      />
      	<StandardPlaceholder
	src="images/PVHLanding.png"
	srcMob="images/PVHLandingMob.png"
	link="https://linktr.ee/Ant3ney"
	routerLink="/PrimevalHorizon"
	/>
	<StandardPlaceholder
	src="images/PVHDetailedDisplay.png"
	srcMob="images/PVHDetailedDisplayMob.png"
	link="https://linktr.ee/Ant3ney"
	routerLink="/PrimevalHorizon"
	/>
	<StandardPlaceholder
	src="images/PVHSlides.png"
	srcMob="images/PVHSlidesMob.png"
	link="https://www.youtube.com/shorts/u4qqBbuciiw"
	/>

      <StandardPlaceholder
        src="images/JoinNewsLetter.png"
        srcMob="images/JoinNewsLetterMob.png"
        link="mailto:anthonycavuoti@gmail.com?subject=I want to join your Game Development newsletter!&body=I would like to get updated when you release new games and announce new projects"
      />
      {/* ContactMeContentLeft.png */}
      {!isMobile ? (
        <>
          <StandardPlaceholder src="images/ContactMeTitle.png" link="" />
          <StandardPlaceholder
            src="images/ContactMeContentLeft.png"
            src2="images/ContactMeContentRight.png"
            link="https://linktr.ee/Ant3ney"
            link2="mailto:anthonycavuoti@gmail.com?subject=Contact Message from Game Dev Portfolio!"
            settings={{ dskSplit: true }}
          />
        </>
      ) : (
        <>
          <StandardPlaceholder
            srcMob="images/ContactInfoMob.png"
            link="https://linktr.ee/Ant3ney"
          />
          <StandardPlaceholder
            src="images/DirectMessageMob.png"
            link="mailto:anthonycavuoti@gmail.com?subject=Contact Message from Game Dev Portfolio!"
          />
        </>
      )}
      <StandardPlaceholder
        src="images/ScheduleInterview.png"
        srcMob="images/ScheduleInterviewMob.png"
        link="https://calendly.com/anthonycavuoti/scheduleinterview"
      />
      <StandardPlaceholder
        src="images/Transition.png"
        link=""
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
          link="https://cdn.sanity.io/files/ld8etup6/production/516d5dae7e44e2ea76fcd78573e496289c7506c3.pdf"
          link2="https://cdn.sanity.io/files/ld8etup6/production/516d5dae7e44e2ea76fcd78573e496289c7506c3.pdf"
          settings={{ dskSplit: true }}
        />
      ) : (
        <>
          <StandardPlaceholder
            srcMob="images/Card1Mob.png"
            link="https://cdn.sanity.io/files/ld8etup6/production/516d5dae7e44e2ea76fcd78573e496289c7506c3.pdf"
          />
          <StandardPlaceholder
            srcMob="images/Card2Mob.png"
            link="https://cdn.sanity.io/files/ld8etup6/production/516d5dae7e44e2ea76fcd78573e496289c7506c3.pdf"
          />
        </>
      )}
      <StandardPlaceholder
        src="images/ContactInfoCore.png"
        srcMob="images/ContactInfoCoreMob.png"
        link="https://linktr.ee/Ant3ney"
      />
      <StandardPlaceholder
        src="images/PoweredBy.png"
        srcMob="images/PoweredByMob.png"
        link="https://www.singularityplanet.com/"
      />
    </div>
  );
}

export default Home;
