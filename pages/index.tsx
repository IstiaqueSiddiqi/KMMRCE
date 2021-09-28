import type { NextPage } from 'next';
import Header from '../components/Header';
import FirstSection from '../components/FirstSection';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import ForthSection from '../components/ForthSection';
import FifthSection from '../components/FifthSection';
import SixthSection from '../components/SixthSection';
import SeventhSection from '../components/SeventhSection';
import EightSection from '../components/EightSection';
import NinthSection from '../components/NinthSection';
import TenthSection from '../components/TenthSection';
import Footer from '../components/Footer';


const Home: NextPage = () => {

  return (
    <div>
      <Header />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <ForthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          <EightSection />
          <NinthSection />
          <TenthSection />
          <Footer />
    </div>
  )
}

export default Home;
