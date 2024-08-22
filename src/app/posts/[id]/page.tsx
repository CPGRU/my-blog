import Image from "next/image";
import { getPostDataById } from "@/app/lib/api"

export default async function Post({params}: { params: {id: string}}){
    const postData = await getPostDataById(params.id);
   

    return (
        <div>
           <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} /> 
           <div>{postData.contentHtml}</div>
        </div>
    )
}