import s from './style.module.css'
import Image from 'next/image';

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const BlogId = async ({params}) => {

    const data = await getData(params.id);

    return ( 
        <div className={s.container}>
             <div className={s.top}>
                <div  className={s.info}>
                    <h1 className={s.title}>
                        {data.id}
                    </h1>
                    <p  className={s.desc}>
                        {data.title}
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
                            {data.id}
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
                    {data.body}
                </p>
             </div>
        </div>
     );
}
 
export default BlogId;