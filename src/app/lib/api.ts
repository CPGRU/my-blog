import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
    id: string;
    title: string;
    date: string;
    postImage: string;
    theme: string;
    content: string
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(): Post[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        const id = fileName.replace(/\.md$/,'');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const {data, content} = matter(fileContents);
        return {
            id,
            ...data,
            content
        } as Post
    });
    return allPostsData.sort((a, b)=>(a.date > b.date? -1 : 1))
}