import Link from "next/link";

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
        <nav>
            <Link href='/'>Home</Link>
            <div>
                {
                    links.map((all) => (
                        <Link key={all.id} href={all.url}>{all.title}</Link>
                    ))
                }
            </div>
        </nav>
     );
}
 
export default navbar;