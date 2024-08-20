import Link from "next/link";
import Image from "next/image";
import { Post } from "../lib/api";


type Props = {
    posts: Post[]
};

export default function gridPosts({posts}: Props){
    return (
        <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white ">From the blog</h1>
                <div className="grid grid-cols-1 gap-10  mt-8 md:mt-16 md:grid-cols-2 ">
                        {posts.map((post)=>(
                            <div className="lg:flex bg-white shadow-md rounded-lg" key={post.id}>
                                <Image src={post.postImage} alt={post.id} className="object-cover w-full h-56 rounded-md lg:w-64" width={680} height={1020}/>
                                <div className="flex flex-col grid justify-items-center py-6 lg:mx-auto">
                                    <span className="text-xl italic">-{post.theme}-</span>
                                    <Link href="/" className="text-2xl font-bold">{post.title}</Link>
                                    <span className="text-sm text-gray-600">{post.date}</span>
                                </div>
                            </div>
                        ))}    
                </div>
                
                
            </div>
    )
}