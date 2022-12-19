import Image from 'next/image'
import React from 'react'
import aboutImage from "../assets/images/about_image.png";
import TitleSection from '@/components/shared/TitleSection';
interface Props {
    
}

const About = (props: Props) => {
    return (
        <div className="h-auto w-full primary-light my-20">
        <div className="container px-5 mx-auto grid md:grid-cols-2 gap-10">
        <div>
          {/* <div className="h-28 w-0.5 bg-orange-300/90 absolute left-40"></div>
          <div className="h-0.5 w-28 bg-orange-300/90 absolute left-40 bottom-0 top-0"></div> */}
            <TitleSection title="About">
            <h2 className="font-bold text-3xl text-stone-700 my-1 mb-4 flex flex-col">
              <span>Living and</span> <span>SharingThe Gospel</span>
            </h2>
          </TitleSection>
           <p className='mb-4'>And yet, in spite of everything, Christ promised that His Holy Spirit would remain in the Church until the end of the world. This is the central thought and basis of our services.</p>
           <p>And yet, in spite of everything, Christ promised that His Holy Spirit would remain in the Church until the end of the world. This is the central thought and basis of our services.</p>
         </div>
         <div>
         <Image src={aboutImage} alt="test" className="cover" />
         </div>
        </div>
       </div>
    )
}

export default About
