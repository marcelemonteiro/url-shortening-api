import AdvancedStatistics from "@/components/AdvancedStatistics";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Recall from "@/components/Recall";
import Footer from "@/components/Footer";
import ShortenInput from "@/components/ShortenInput";

export default function Home() {
  return (
    <div className="text-lg text-very-dark-blue overflow-hidden">
      <Header />
      <Main />
      <ShortenInput />
      <AdvancedStatistics />
      <Recall />
      <Footer />
      <div className="bg-black text-gray text-sm flex flex-col lg:flex-row items-center justify-center gap-1 p-4">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by{" "}
          <a href="https://github.com/marcelemonteiro">Marcele Monteiro</a>.
        </p>
      </div>
    </div>
  );
}
