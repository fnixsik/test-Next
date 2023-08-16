import s from "./style.module.css";
import Link from "next/link";

const Button = ({text, url}) => {
    return ( 
        <div>
            <Link href={url}>
                <button className={s.container}>{text}</button>
            </Link>
        </div>
     );
}
 
export default Button;