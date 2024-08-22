import Link from "next/link"

export default function SideNav (){
    return (
        <div className="w-full md:block md:w-auto">
            <ul className="flex justify-end">
                <li className="mr-6">
                    <Link href="/about" className="text-blue-500 hover:text-blue-800">About</Link>
                </li>
                <li className="mr-6">
                    <Link href="/news" className="text-blue-500 hover:text-blue-800">News</Link>
                </li>
            </ul>
            
        </div>
    )
}