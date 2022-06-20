import NavBar from "../NavBar/NavBar.component";
import MenuButtons from "./MenuButtons.component";
import { useRecoilState } from "recoil";
import { navBarDefaultStateData } from "../../recoil/atoms.state";
import SignedInLinks from "../NavBar/SignedInLinks.component";
import SignedOutLinks from "../NavBar/SignedOutLinks.component";
import "./HeaderMenu.style.css";

const HeaderMenu = () => {
  const [menuState, setMenuState] = useRecoilState<string>(
    navBarDefaultStateData
  );
  return (
    <header
      className="app-header ex-sm: flex justify-between items-center px-2 py-4 
    "
    >
      <h1 className="text-2xl">Blog App</h1>
      <div
        className={`
        ex-sm:absolute left-0 top-0 bg-white p-4 w-1/2 ex-sm:h-screen ${menuState} z-10 flex flex-col gap-10
        lg:relative lg:left-0 lg:top-0 lg:flex-row lg:h-auto lg:p-0 lg:justify-between
        `}
      >
        <NavBar />
        <SignedInLinks />
        <SignedOutLinks />
      </div>
      {menuState === "animate-show-menu left-0" ? (
        <div
          className={`absolute w-full bg-slate-300/50 h-full left-0 top-0 -z-2 lg:hidden`}
          onClick={() => {
            setMenuState("animate-hide-menu -left-1/2");
          }}
        ></div>
      ) : (
        false
      )}
      <MenuButtons />
    </header>
  );
};

export default HeaderMenu;
