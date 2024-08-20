import Image from "next/image";
import CoverPic from "../../../public/cover.png";

export default function banner(){
    return(
        <div className="relative max-w-full mx-auto mt-0">
            <Image src={CoverPic} alt="cover pic" className="h-80 w-full object-cover rounded-md "/>
            <div className="absolute inset-0 flex flex-col items-start justify-start mt-20 ml-10">
                <h2 className="text-white text-5xl font-bold">Blog.</h2>
                <h4 className="text-gray-700 mt-5">A statically generated blog using Next.js and Markdown.</h4>
            </div>    
        </div>
    )
}