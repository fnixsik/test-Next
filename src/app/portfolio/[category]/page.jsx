import Image from 'next/image';
import Button from '@/components/button/button';
import s from './style.module.css'


const Category = ({params}) => {
    // console.log(params);
    return ( 
        <div className={s.container}>
            <h1 className={s.catTitle}>
                {params.category}
            </h1>
            <div className={s.item} key="1">
                <div className={s.content}>
                    <h1 className={s.title}>
                        here we Are !!!
                    </h1>
                    <p className={s.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Omnis eum corrupti quod rem. 
                        Explicabo asperiores harum doloremque?
                    </p>
                    <Button text="See More" url="#" />
                </div>
                <div className={s.imgContainer}>
                    <Image
                        className={s.img}
                        fill = {true}
                        src= "https://img.freepik.com/free-vector/images-concept-illustration_114360-298.jpg?w=826&t=st=1692161301~exp=1692161901~hmac=556caee0f1819a98221e69e257d9dd4f3f4e4099087424ae2a007515f4a632d7"
                        alt='Image'
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Category;