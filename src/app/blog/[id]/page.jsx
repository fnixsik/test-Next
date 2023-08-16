import s from './style.module.css'
import Image from 'next/image';

const BlogId = () => {
    return ( 
        <div className={s.container}>
             <div className={s.top}>
                <div  className={s.info}>
                    <h1 className={s.title}>
                        Header
                    </h1>
                    <p  className={s.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </p>
                    <div className={s.author}>
                        <Image
                            src='https://img.freepik.com/free-icon/user_318-180888.jpg?t=st=1692164017~exp=1692164617~hmac=6bfea3f65cf957ac69f71b92676b4d65763d45ea71be13588b621f1590de3cfd'
                            alt='picture'
                            width={40}
                            height={40}
                            className={s.avatar}
                        />
                        <span className={s.username}>
                            UserNmae
                        </span>
                    </div>
                </div>
                <div className={s.imageContainer}>
                    <Image
                    src='https://img.freepik.com/premium-vector/instant-photo-camera-with-pictures-flat-style-abstract-background_668430-117.jpg?w=826'
                    alt='picture'
                    fill={true}
                    className={s.image}
                    />
                </div>
             </div>
             <div className={s.content}>
                <p className={s.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
             </div>
        </div>
     );
}
 
export default BlogId;