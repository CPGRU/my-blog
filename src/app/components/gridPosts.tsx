import Link from "next/link";
import Image from "next/image";
import { Edu_VIC_WA_NT_Beginner } from "next/font/google";
import { Post } from "../lib/api";



type Props = {
    posts: Post[]
};

const edu = Edu_VIC_WA_NT_Beginner({
    subsets: ['latin'],
    weight: '600',
})

export default function gridPosts({posts}: Props){
    return (
        <div className="container px-10 py-10 mx-auto">
            <div className="flex flex-col text-center">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">more articles</h1>
                <p className="mt-5 px-40 text-gray-600">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            </div>
                
            <div className="grid grid-cols-1 gap-10  mt-8 md:mt-10 md:grid-cols-2 ">
                {posts.map((post)=>(
                    <div className="lg:flex bg-white shadow-md rounded-lg" key={post.id}>
                        <Image src={post.postImage} alt={post.id} className="object-cover w-full h-56 rounded-md lg:w-64" width={680} height={1020}/>
                        <div className="flex flex-col grid justify-items-center py-6 lg:mx-auto">
                            <span className="text-xl italic">-{post.theme}-</span>
                            <Link href={`/posts/${post.id}`} className={`text-2xl font-bold ${edu.className}`}>{post.title}</Link>
                            <span className="text-sm text-gray-600">{post.date}</span>
                         </div>
                    </div>
                ))}    
            </div>    
        </div>
    )
}