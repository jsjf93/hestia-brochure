import Link from 'next/link';
import { Navbar as Nav, Nav as NavComponent } from 'react-bootstrap';
import UseAnimations from 'react-useanimations';
import menu3 from 'react-useanimations/lib/menu3'
import styles from './navbar.module.scss';

export default function Navbar () {
  return (
    <Nav className={styles.navbar} expand="md">
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
        <Link href="#">
          <NavComponent.Link>LINK 1</NavComponent.Link>
        </Link>
        <Link href="#">
          <NavComponent.Link>LINK 2</NavComponent.Link>
        </Link>
        <Link href="#">
          <NavComponent.Link>LINK 3</NavComponent.Link>
        </Link>
      </Nav.Collapse>
    </Nav>
  );
};
