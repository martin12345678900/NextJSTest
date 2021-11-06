import { Hero } from "../sections";
import { AgencySelection } from "../sections";
import { ImBriefcase } from "react-icons/im";
import { GiPitchfork, GiArchiveResearch } from "react-icons/gi";


const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencyProps = {
  title: "Managed agency selection",
  subtitle: "Stengthen your outgoing process",
  image: {
    width: 26,
    height: 510,
    src: "img/video.png",
    alt: "video image"
  },
  cards: [
    { icon: <ImBriefcase fontSize={40} />, title: "Brief", description: <p>Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered.</p>},
    { icon: <GiArchiveResearch fontSize={40} />, title:  "Search", description: <p>In-depth agency search covering;<b>criteria matching</b>, door knocking and due-dilligence vetting.</p>},
    { icon: <GiPitchfork fontSize={40} />, title: "Pitch", description: <p>Comprehensive <b>pitch management</b>, including comms, diary management and pitch hosting.</p>}
  ]
}

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <AgencySelection {...agencyProps} />
        {/** Other sections */}
      </div>
    </>
  );
}
