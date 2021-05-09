import Link from 'next/link';
import { Navbar as Nav } from 'react-bootstrap';
import UseAnimations from 'react-useanimations';
import menu3 from 'react-useanimations/lib/menu3'
import styles from './navbar.module.scss';

export default function Navbar () {
  return (
    <Nav className={styles.navbar} expand="lg">
      <Link href="/">
        <a><img src="/navbar-logo.PNG" alt="Logo" className={styles.logo} /></a>
      </Link>
      <Nav.Toggle className={styles.navbarToggle} aria-controls="navbar-nav">
        <UseAnimations
          aria-controls="navbar-nav" 
          aria-label="Toggle navigation" 
          animation={menu3} 
          size={40} 
          speed={1.5}
        />
      </Nav.Toggle>

      <Nav.Collapse id="navbar-nav" className={styles.navbar__itemContainer}>
        <Link href="/celebration-cakes">
          <a className={styles.navbar__link}>Celebration Cakes</a>
        </Link>
        <Link href="/patisserie-boxes">
          <a className={styles.navbar__link}>Patisserie Boxes</a>
        </Link>
        <Link href="/afternoon-tea">
          <a className={styles.navbar__link}>Afternoon Tea</a>
        </Link>
        <Link href="/smores-kits">
          <a className={styles.navbar__link}>S'mores Kits</a>
        </Link>
        <Link href="/tea-cakes">
          <a className={styles.navbar__link}>Tea Cakes</a>
        </Link>
        <Link href="/small-treats">
          <a className={styles.navbar__link}>Small Treats</a>
        </Link>
        <Link href="/contact">
          <a className={styles.navbar__link}>Contact</a>
        </Link>
      </Nav.Collapse>
    </Nav>
  );
};
