const NavBar = () => {
  return (
    <>
      <nav className="ex-sm:z-2 lg:w-full">
        <ul className="ex-sm:flex flex-col justify-between lg:flex-row lg:justify-between lg:w-full">
          <li className="ex-sm: py-2 px-2">
            <a href="#" className="ex-sm: text-lg font-medium">
              Dashboard
            </a>
          </li>
          <li className="ex-sm: py-2 px-2">
            <a href="#" className="ex-sm: text-lg font-medium">
              Posts
            </a>
          </li>
          <li className="ex-sm: py-2 px-2">
            <a href="#" className="ex-sm: text-lg font-medium">
              Setting{" "}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
