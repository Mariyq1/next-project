import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () =>{
    return(
        <div className={styles.nav}>
            <h1>Logo</h1>
            <div className={styles.links}>
                <Link href="/"><a >Home</a></Link>
                <Link href="/posts"><a >Posts</a></Link>
                <Link href="/contacts"><a >Contacts</a></Link>
            </div>
        </div>
    )
}
export default Navbar