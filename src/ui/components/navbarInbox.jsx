import navbarStyle from "../../assets/style/components/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbarStyle.navbar}>
      <form>
        <input type='text' name='search' placeholder='Search Anything'></input>
      </form>
    </nav>
  );
};

export default Navbar;
