import Image from 'next/image';
import Button from '@/components/button/button';
import s from './style.module.css';
import {items} from './data';
import {notFound} from 'next/navigation';

const getData = (all) => {
    const data = items[all]

    if(data){
        return data;
    }
    return notFound()
}

const Category = ({params}) => {
    console.log(params.category);
    let data = getData(params.category)

    return ( 
        <div className={s.container}>
            <h1 className={s.catTitle}>
                {params.category}
            </h1>
                {data.map((all)=>(
                    <div className={s.item} key={all.id}>
                <div className={s.content}>
                    <h1 className={s.title}>
                        {all.title}
                    </h1>
                    <p className={s.desc}>
                        {all.desc}
                    </p>
                    <Button text="See More" url="#" />
                </div>
                <div className={s.imgContainer}>
                    <Image
                        className={s.img}
                        fill = {true}
                        src= {all.image}
                        alt= {all.title}
                    />
                </div>
                    </div>
                ))}
        </div>
     );
}
 
export default Category;