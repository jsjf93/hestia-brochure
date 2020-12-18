import Link from 'next/link';
import { Navbar as Nav, Nav as NavComponent } from 'react-bootstrap';
import styles from './navbar.module.scss';

export default function Navbar () {
  return (
    <Nav className={styles.navbar} expand="md">
      <Link href="/">
        <a><img src="/navbar-logo.PNG" alt="Logo" className={styles.logo} /></a>
      </Link>
      <Nav.Toggle aria-controls="navbar-nav" />

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
