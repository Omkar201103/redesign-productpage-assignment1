import React,{useEffect,useRef} from 'react';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import InfoSection from './components/InfoSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';

const Home: React.FC=()=>{
  const contactRef=useRef<HTMLDivElement>(null);
  const aboutRef=useRef<HTMLDivElement>(null);
  const faqRef=useRef<HTMLDivElement>(null);

  const scrollToSection=(ref:React.RefObject<HTMLDivElement>)=>{
    if(ref.current){
      ref.current.scrollIntoView({behavior:'smooth'});
    }
  };

  useEffect(()=>{
    let lastScrollTop=0;

    const handleScroll=()=>{
      const profileElement=document.querySelector('.hcf-profile');
      const scrollTop=document.documentElement.scrollTop || document.body.scrollTop;

      if(profileElement){
        if(scrollTop>lastScrollTop){
          profileElement.classList.add('hcf-profile-fixed');
        }else{
          profileElement.classList.remove('hcf-profile-fixed');
        }
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return()=>window.removeEventListener('scroll', handleScroll);
  },[]);

  return (
    <>
      <section>
        <HeroSection 
          scrollToSection={scrollToSection}
          featuresRef={faqRef}
          contactRef={contactRef}
          aboutRef={aboutRef}
        />
      </section>

      <section className="bg-gray-50">
        <FeaturesGrid/>
      </section>

      <section className="bg-white" ref={aboutRef}>
        <InfoSection/>
      </section>

      <section className="bg-gray-50" ref={faqRef}>
        <HomeFAQs/>
      </section>

      <section className="bg-white" ref={contactRef}>
        <ContactForm/>
      </section>
      <section className="bg-gray-900 text-white">
        <MainFooter/>
      </section>
    </>
  );
};

export default Home;
