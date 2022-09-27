import Header from '../header/Header';
import HeroSection from '../heroSection/HeroSection';
import Reviews from '../reviews/Reviews';
import './main.css';

function Main() {
  return (
  <>
    <Header/>
    <div className='main'>
      <HeroSection/>
      <Reviews/>
      <HeroSection/>
    </div>
  </>
  )
}

export default Main