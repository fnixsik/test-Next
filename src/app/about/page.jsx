import Button from '@/components/button/button';
import s from './style.module.css'
import Image from 'next/image';

const about = () => {
    return ( 
       <div className={s.container}>
            <div className={s.imgContainer}>
                <Image src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
                fill={true}
                alt='about us'
                className={s.img}/>
                <div className={s.imgText}>
                    <h1 className={s.imgtitle}>
                        Lorem ipsum dolor sit.
                    </h1>
                    <h2 className={s.imgDesc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </h2>
                </div>
            </div>
            <div className={s.textContainer}>
                <div className={s.item}>
                    <h1 className={s.title}>
                        Lorem, ipsum.
                    </h1>
                    <p className={s.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius officiis eveniet doloribus dolor repudiandae beatae iusto officia reiciendis itaque iure voluptas quidem, 
                        commodi consectetur rem distinctio recusandae. Accusamus cum vitae similique, 
                        quae saepe adipisci reprehenderit itaque minus doloribus ex et laborum sunt consectetur illum dignissimos, 
                        obcaecati blanditiis alias excepturi? Nihil!
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                         Sapiente unde minima corrupti suscipit perspiciatis. 
                         A fugit, modi accusamus accusantium error tenetur fuga reiciendis voluptate autem pariatur. 
                         Illo repudiandae, harum sed explicabo voluptatibus facilis architecto eveniet?
                    </p>
                </div>

                <div className={s.item}>
                    <h1 className={s.title}>
                        Lorem, ipsum dolor.
                    </h1>
                    <p className={s.desc}>

                        <br /> - Lorem, ipsum.
                        <br /> - Lorem ipsum dolor sit amet consectetur.
                        <br /> - Lorem, ipsum dolor.
                        <br /> - Lorem ipsum dolor sit.
                        <br /> - Lorem ipsum dolor sit, amet consectetur adipisicing.
                        <br />
                        <br />
                        <br />
                        Odio labore facere atque voluptatibus tempore neque alias molestiae. Facere doloremque reprehenderit et vel dolorum, numquam perspiciatis 
                    </p>
                    <Button url="/contact" text="Contact"/>
                </div>

            </div>
       </div>
     );
}
 
export default about;