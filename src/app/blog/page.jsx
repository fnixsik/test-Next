import Image from 'next/image';
import Link from 'next/link';
import s  from './style.module.css'


async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


const blog = async () => {

    const data = await getData();

    return ( 
        <div className={s.mainContainer}>
            {data.map( (el) => (
                <Link href={`blog/${el.id}`} className={s.container} key={el.id}>
                    <div className={s.imageContainer}>
                        <Image 
                        src='https://img.freepik.com/premium-vector/photo-picture-online-album-digital-gallery-watching-website_212005-272.jpg?w=1060'
                        alt='image'
                        width={400}
                        height={250}
                        className={s.image}
                        />
                    </div>
                    <div className={s.content}>
                        <h1 className={s.title}>
                            {el.title}
                        </h1>
                        <p className={s.desc}>
                            {el.body}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default blog;