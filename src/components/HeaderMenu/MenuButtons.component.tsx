import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { navBarDefaultStateData } from "../../recoil/atoms.state";
import { useRecoilState } from "recoil";

const MenuButtons = () => {
  const [menuState, setMenuState] = useRecoilState<string>(
    navBarDefaultStateData
  );

  function setClassState(
    state: string,
    stateChanger: (value: string) => void,
    firstClass: string,
    secondClass: string
  ) {
    if (state === firstClass) {
      stateChanger(secondClass);
    } else {
      stateChanger(firstClass);
    }
  }

  return (
    <div
      className="
      header-buttons
      ex-sm:flex ex-sm:justify-between
      ex-sm:basis-1/3 ex-sm:bg-red-500
      sm:basis-1/4 sm:bg-blue-500
      md:basis-[18%] md:bg-green-500
      lg:justify-end lg:basis-0
      "
    >
      <button className="text-4xl flex items-center justify-center">
        <AccountCircleRoundedIcon fontSize="inherit" />
      </button>
      <button
        className="text-4xl flex items-center justify-center lg:hidden"
        onClick={() => {
          setClassState(
            menuState,
            setMenuState,
            "animate-show-menu left-0",
            "animate-hide-menu -left-1/2"
          );
        }}
      >
        <MenuRoundedIcon fontSize="inherit" />
      </button>
    </div>
  );
};

export default MenuButtons;
