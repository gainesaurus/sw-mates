import styles from './NavBar.module.css';

const NavBar = () => {

  return (
    <nav className={styles.container}>
      <h1>SW-Samesies!</h1>
      <p>Compare your favorite Star Wars characters</p>
    </nav>
  )
}

export default NavBar;