import s from './style.module.css'
import Image from 'next/image';
import Button from '@/components/button/button';


const contact = () => {
    return ( 
        <div className={s.container}>
            <h1 className={s.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <div className={s.content}>
                <div className={s.imgContainer}>
                    <Image
                        src="/contact.png"
                        alt="Contacts"
                        fill= {true}
                        className={s.image}
                    />
                </div>
            
                <form className={s.form}>
                    <input type="text" placeholder='name' className={s.input} />
                    <input type="text" placeholder='email' className={s.input} />
                    <textarea className={s.textArea}
                     placeholder='message'
                     cols="30" 
                     rows="10">
                     </textarea>
                     <Button url="#" text="Send"/>
                </form>
            </div>
        </div>
     );
}
 
export default contact;