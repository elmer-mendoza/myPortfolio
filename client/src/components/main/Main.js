import { useEffect } from 'react';
import Education from '../education/Education';
import Experiences from '../experiences/Experiences';
import Header from '../header/Header';
import HeroSection from '../heroSection/HeroSection';
import useFetch from '../hooks/useFetch';
import Projects from '../projects/Projects';
import Reviews from '../reviews/Reviews';
import './main.css';

function Main() {

  const {data, loading, error, reFetch }=useFetch("https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/resume-dmeca/service/Resume/incoming_webhook/resume")
  
  let fetchedData
  if(data){ fetchedData = data[0]}

  return (
  <>
    <Header/>
    <div className='main'>
      <HeroSection/>
      <Projects projects={fetchedData?.projects} loading={loading} error={error}/>
      <Experiences jobs={fetchedData?.jobs} loading={loading} error={error}/>
      <Education education={fetchedData?.education} loading={loading} error={error}/>
      <Reviews/>
    </div>
  </>
  )
}

export default Main