import Header from '../components/header'
import Footer from '../components/footer'
import HeroSection from '@/components/heroSection'
import SectionHeading from '@/components/sectionHeading'
import LawContainer from '@/components/lawContainer'
import GalleryView from '@/components/galleryView'
import StoryContainer from '@/components/storyContainer'
import CallToAction  from '@/components/callToAction'

export default function Home() {
  return (
    <div >
      <Header/> 
    

      
      <HeroSection/>
      <SectionHeading/>
      <LawContainer/>
      <SectionHeading/>
      <LawContainer/>
      <SectionHeading/>
      <GalleryView/>
      <SectionHeading/>
    <StoryContainer/>
    <CallToAction/>
   
    
      <Footer />
    </div>
  )
}
