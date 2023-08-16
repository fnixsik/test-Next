import s from "./style.module.css"
import Image from "next/image"

const footer = () => {

    return ( 
        <footer className={s.container}>
            <div>
                2023 MyApp. All rights reserved
            </div>
            <div className={s.social}>
                <Image src='/vk.png' width={15} height={15} className={s.icon} alt="vk.com"/>
                <Image src='/inst.png' width={15} height={15} className={s.icon} alt="instagram"/>
                <Image src='/twitter.png' width={15} height={15} className={s.icon} alt="twitter"/>
                <Image src='/yt.png' width={15} height={15} className={s.icon} alt="youtube"/>
            </div>
        </footer>
     );
}
 
export default footer;