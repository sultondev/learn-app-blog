import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <section className="signout-in lg:hidden">
      <ul className="signout-list">
        <li className="signout-list__item">
          <NavLink to="/">
            <Button variant="text" className="ex-sm: pr-0">
              Sign Up
            </Button>
          </NavLink>
        </li>
        <li className="signout-list__item">
          <NavLink to="/">
            <Button variant="text" className="ex-sm: pr-0">
              Log In
            </Button>
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default SignedOutLinks;
