// "use client"
import Image from "next/image";
import travelerLogo from '../../../public/images/Traveler-logo.svg'

export default function Logo() {
    return (
        <div className={`
            flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900
        `}>
            <Image 
            // fill={true}
          src= {travelerLogo}
          alt="Logo traveler"
        //   layout="fill"
        //   width={700}
        //   height={500}
        
        />
        </div>
    )
}