// import logo from './logo.svg';
import './App.css';

//import components
import Header from './components/header/header';
import Team from './components/team/team';
import JoinCommunity from './components/join-community/join-community';
import Footer from './components/footer/footer';
import RoadMap from './components/roadmap/roadmap';
import TopItems from './components/top-items/top-items';
import Mint from './components/mint/mint';
import About from './components/about/about';
import Meet from './components/meet/meet';
import FounderThing from './components/founderthing/founderthing';
import Utility from './components/utility/utility';
import State from './components/state/state';
import il from './assets/CenterPic.png';
import Partners from './components/partners/footer';
import Metaverse from './components/metaverse/metaverse';
import './assets/newStyle.css';
import './assets/mainstyle.css'
import Beet from "./components/beet/beet";
import Coadmap from "./components/coadmap/roadmap";

function App() {
  return (
    <div>
      <Header />
      <div className="timer" style={{textAlign: "center", display: "contents"}}>
        <text style={{color: "white", fontSize: 30}}>
          Official Release:<br/>
          January 28th, 2022 @ 2:00 PM EST </text><br/>
      <img src="https://gen.sendtric.com/countdown/e2i0gd3hvn" style={{textAlign: "center"}} />
      </div>
       {/* <State /> */}
       <Mint />
       {/* <State /> */}
      {/* <About />  */}
      
     {/* <Utility className="utilitysec"/> */}
     {/* <Meet /> */}


      {/* <RoadMap /> */}
      {/* <State /> */}
      {/* <Metaverse/> */}

      {/* <Team /> */}
      {/* <Partners /> */}
      <Beet />
      <Coadmap />
      {/* <Faqmap /> */}
      <Footer />
    </div>
  );
}
// FONT REPLACEMENT
// @font-face {
//   font-family: newThing;
//   src: url(/src/components/header/ArchivoNarrow-VariableFont_wght.ttf);
// }

export default App;
