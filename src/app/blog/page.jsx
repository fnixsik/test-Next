import Image from 'next/image';
import Link from 'next/link';
import s  from './style.module.css'

const blog = () => {
    return ( 
        <div className={s.mainContainer}>
            <Link href='blog/test1' className={s.container} key='1'>
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
                        we are Happy to you see !!!
                    </h1>
                    <p className={s.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Dolore delectus corrupti voluptatem molestiae reprehenderit? 
                        Soluta cumque optio, iure cupiditate incidunt quos atque ea.
                    </p>
                </div>
            </Link>
            <Link href='blog/test2' className={s.container} key='2'>
                <div className={s.imageContainer}>
                    <Image 
                    src='https://img.freepik.com/free-vector/image-viewer-concept-illustration_114360-4532.jpg?w=826&t=st=1692162398~exp=1692162998~hmac=5c2c9ff0d696c94dbaa0a52c69fccd3fd586f30042dbf32c1b646ed16bb83ca3'
                    alt='image'
                    width={400}
                    height={250}
                    className={s.image}
                    />
                </div>
                <div className={s.content}>
                    <h1 className={s.title}>
                        Well Done !!!
                    </h1>
                    <p className={s.desc}>
                        Lorem ipsum dolor sit.
                    </p>
                </div>
            </Link>
        </div>
     );
}
 
export default blog;