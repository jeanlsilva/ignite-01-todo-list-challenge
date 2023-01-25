import styles from './Header.module.css';
import logoIcon from '../assets/rocket.svg';

export function Header() {
    return (
        <div className={styles.wrapper}>
            <img src={logoIcon} alt='logo-icon' className={styles.img} />
            <h1 className={styles.logo}><span>to</span><span>do</span></h1>
        </div>
    )
}