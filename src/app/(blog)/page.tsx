import  Banner from "../components/banner";
import { getSortedPostsData } from "../lib/api";

export default function Home(){
    const allSortedPost = getSortedPostsData();
    return (
        <main>
            <Banner />
            <div>
                {allSortedPost.map(({id, date, title})=>(
                    <li key={id}>
                        <h3>{title}</h3>
                        <small>{date}</small>
                        
                    </li>
                ))}
            </div>
        </main>
    )
}