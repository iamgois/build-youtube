// imports
import Image from "next/image";
import house1 from '../../../public/house-1.jpg'
import house2 from '../../../public/house-2.jpg'
import house3 from '../../../public/house-3.jpg'

// icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function Projets() {
  return (
    <div className="mx-6 my-8">
      <div>
        <p className='font-normal'>Best Project of the Years</p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <h1 className="font-bold text-6xl">Our recent projects</h1>

        <div className="flex">
          <IoIosArrowBack className="h-12 w-12 p-2" size={24}/>
          <IoIosArrowForward className="p-2 bg-zinc-900 text-white rounded-full h-12 w-12 shadow-sm shadow-black" size={24}/>
        </div>
      </div>

      <div className="flex mt-6 gap-4">

        <div className="flex flex-col gap-2">
          <Image src={house1} />
          <h1 className="text-3xl font-bold">Sobha Hearland I Villas</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum</p>
          <div className="flex items-center gap-1">
            <FaStar className="text-[#FF791A]" />
            <FaStar className="text-[#FF791A]" />
            <FaStar className="text-[#FF791A]" />
            <FaStar className="text-[#FF791A]" />
            <FaRegStar className="text-zinc-400" />
            <p>4.84</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Image src={house2} />
          <h1 className="text-3xl font-bold">Sobha Hearland II Villas</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum</p>
          <div className="flex items-center gap-1">
            <FaStar className="text-[#FF791A]" />
            <FaStar className="text-[#FF791A]" />
            <FaStar className="text-[#FF791A]" />
            <FaStar className="text-[#FF791A]" />
            <FaStar className="text-[#FF791A]" />
            <p>5.00</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Image src={house3} />
          <h1 className="text-3xl font-bold">Sobha Hearland III Villas</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum</p>
          <div className="flex items-center gap-1">
            <FaStar className="text-[#FF791A]" />
            <FaStar className="text-[#FF791A]" />
            <FaStar className="text-[#FF791A]" />
            <FaRegStar className="text-zinc-400" />
            <FaRegStar className="text-zinc-400" />
            <p>3.54</p>
          </div>
        </div>

      </div>

    </div>
  )
}