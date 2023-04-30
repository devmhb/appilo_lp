import "./App.css";
import Navbar from "./component/Navbar";
import HeroSec from "./component/HeroSec";
import MarketPlace from "./component/MarketPlace";
import Creator from "./component/Creator";
import Exchanges from "./component/Exchanges";
import WeekCreator from "./component/WeekCreator";
import FAQ from "./component/FAQ";
import LiveBid from "./component/LiveBid";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto overflow-x-hidden">
      <Navbar />
      <HeroSec />
      <MarketPlace />
      <Creator />
      <Exchanges />
      <WeekCreator />
      <FAQ />
      <LiveBid />
      <Footer />
    </div>
  );
}

export default App;
