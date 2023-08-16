import Image from 'next/image'
import s from './page.module.css'
import Button from '@/components/button/button'
import gh from 'public/hero.png'

export default function Home() {
  return (
    <main className={s.container}>
      <div className={s.item}>
        <h1 className={s.title}>
          The Future of AI in the next few years
        </h1>
        <p className={s.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Molestiae animi nostrum doloremque voluptate voluptatum ab repellendus laborum iure perspiciatis quae, 
          maxime autem libero illo laudantium quo expedita magnam similique fugit!
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={s.item}>
        <Image src={gh} alt='main photo' className={s.img}/>
      </div>
    </main>
  )
}
