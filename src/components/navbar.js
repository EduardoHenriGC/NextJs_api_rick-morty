import Link from 'next/link';
import styles from "../styles/navbar.module.css"


export default function Navbar(){
  return (
    <nav className={styles.navbar} >
        <img src='https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/641d404589b0aaf22114e189_Screenshot%202023-03-23%20at%205.46.20%20PM.png' className={styles.logo}/>
      <ul className={styles.ul}>
      
        <li >
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/personagens">
            Personagens
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/contato">
            Contato
          </Link>
        </li>
      </ul>
      
    </nav>
  );
};

