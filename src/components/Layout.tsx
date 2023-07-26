import { Link ,Outlet } from "react-router-dom"
import styles from './styles/Layout.module.css'
const Layout=()=>{
    return(
        <>
        <nav className={styles.container}>
            <ul className={styles.navItems}>
                <li className={styles.navItem}><Link to={'/'}>H O M E</Link></li>
                <li className={styles.navItem}><Link to={'/about'}>T Y P E W R I T E R</Link></li>
                <li className={styles.navItem}><Link to={'/glow'}>G L O W T E X T</Link></li>
                <li className={styles.navItem}><Link to={'/card'}>C A R D G A M E</Link></li>
            </ul>
        </nav>

    <Outlet/>
        </>
    )
}

export default Layout