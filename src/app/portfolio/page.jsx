import Link from 'next/link';
import s from './style.module.css'

const portfolio = () => {
    return ( 
        <div className={s.container}>
            <h1 className={s.selectTitle}>
                Choose a gallery
            </h1>
            <div className={s.items}>

                <Link href='portfolio/illustrations' className={s.item}>
                    <span className={s.title}>
                        Illustrations
                    </span>
                </Link>

                <Link href='portfolio/websites' className={s.item}>
                    <span className={s.title}>
                        websites
                    </span>
                </Link>

                <Link href='portfolio/#' className={s.item}>
                    <span className={s.title}>
                        Out
                    </span>
                </Link>

            </div>
        </div>
     );
}
 
export default portfolio;