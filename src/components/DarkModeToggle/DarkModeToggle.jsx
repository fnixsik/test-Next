import { useContext } from 'react';
import s from './style.module.css'
import { ThemeContext } from '@/context/ThemeContext';

const DarkModeToggle = () => {

    const {toggle, mode} = useContext(ThemeContext)

    return ( 
        <div className={s.container} onClick={toggle}>
            <div className={s.icon}></div>
            <div className={s.icon}></div>
            <div className={s.ball} style={mode === 'light' ? {left: '2px'} : {right: '2px'}}></div>
        </div>
     );
}
 
export default DarkModeToggle;