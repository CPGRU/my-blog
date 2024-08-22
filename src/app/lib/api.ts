import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export type Post = {
    id: string;
    title: string;
    date: string;
    postImage: string;
    theme: string;
    content: string
}

const postsDirectory = path.join(process.cwd(), 'posts');
const fileNames = fs.readdirSync(postsDirectory);

export function getSortedPostsData(): Post[] {
    const allPostsData = fileNames.map((fileName)=>{
        const id = fileName.replace(/\.md$/,'');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const {data} = matter(fileContents);
        return {
            id,
            ...data,
        } as Post
    });
    return allPostsData.sort((a, b)=>(a.date > b.date? -1 : 1))
}

export async function getPostDataById(Params_id: string){
    try{
        const fullPath = path.join(postsDirectory, `${Params_id}.md`);
        const postCotent = fs.readFileSync(fullPath, 'utf8');
    
        const { data, content } = matter(postCotent);
        const processContent = await remark().use(html).process(content);
        const contentHtml = processContent.toString();
        const id = Params_id;
    
        return {
            id,
            ...data,
            contentHtml
        } 
    }catch(err){
        return notFound()
    } 
}