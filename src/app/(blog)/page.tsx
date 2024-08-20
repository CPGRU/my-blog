import  Banner from "../components/banner";
import GridPosts from "../components/gridPosts";
import { getSortedPostsData } from "../lib/api";


export default function Home(){
    const allSortedPost = getSortedPostsData();
    
    return (
        <main>
            <Banner />
            <GridPosts posts={allSortedPost}/>
        </main>
    )
}