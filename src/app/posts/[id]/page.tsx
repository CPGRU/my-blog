import { Metadata } from "next";
import Image from "next/image";
import { getPostDataById } from "@/app/lib/api"

export const metadata: Metadata = {
    title: 'blog page',
};

export default async function Post({params}: { params: {id: string}}){
    const { id, title, postImage, contentHtml} = await getPostDataById(params.id);
   
    const createMarkup = () =>{
        return {
            __html: contentHtml
        }
    }
    return (
        <div className="flex flex-row items-center">
            <div>
                <Image src={postImage} alt={id} width={680} height={1020} className="object-cover w-96 h-auto"/>
            </div>
            <div className="flex flex-col ml-10">
                <div>{title}</div>
                <div dangerouslySetInnerHTML={createMarkup()} />  
            </div>
        </div>
    )
}