import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <section className="signed-in lg:hidden">
      <ul className="signed-list">
        <li className="signed-list__item">
          <NavLink to="/">
            <Button variant="text" className="ex-sm: pr-0">
              New Project
            </Button>
          </NavLink>
        </li>
        <li className="signed-list__item">
          <NavLink to="/">
            <Button variant="text" className="ex-sm: pr-0">
              Log out
            </Button>
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default SignedInLinks;
