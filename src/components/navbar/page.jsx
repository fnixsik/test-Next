
"use client"

import Link from "next/link";
import s from "./style.module.css"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const navbar = () => {

    const links = [
        {
            id: 1,
            title: 'Home',
            url: '/',
        },
        {
            id: 2,
            title: 'About',
            url: '/about',
        },
        {
            id: 3,
            title: 'Blog',
            url: '/blog',
        },
        {
            id: 4,
            title: 'Contact',
            url: '/contact',
        },
        {
            id: 5,
            title: 'Dashboard',
            url: '/dashboard',
        },
        {
            id: 6,
            title: 'Portfolio',
            url: '/portfolio',
        },
    ];



    return ( 
        <nav className={s.container}>
            <Link href="/" className={s.logo}>MyApp</Link>
            <div className={s.links}>

                <DarkModeToggle/>

                {
                    links.map((all) => (
                        <Link key={all.id} href={all.url}>{all.title}</Link>
                    ))
                }
                <button className={s.logout} onClick={() => {console.log('LoGout')}}>logout</button>
            </div>
        </nav>
     );
}
 
export default navbar;