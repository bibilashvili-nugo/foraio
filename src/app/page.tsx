import Advantages from "../../components/Advantages";
import CashflowExperience from "../../components/CashflowExperience";
import CompetitivePrices from "../../components/CompetitivePrices";
import CurrencyConversion from "../../components/CurrencyConversion";
import Header from "../../components/Header";
import JourneyIntroSection from "../../components/JourneyIntroSection";
import NavBar from "../../components/NavBar";

export default function Home() {
  return (
    <div className="mt-6 px-10">
      <NavBar />
      <Header />
      <CashflowExperience />
      <Advantages />
      <CurrencyConversion />
      <JourneyIntroSection />
      <CompetitivePrices />
    </div>
  );
}
