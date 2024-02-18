import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

const SignUp = () => {
  return (
    <Auth submitLabel="SIGNUP" onSubmit={async () => {}}>
      <Link to="/login">
        <MUILink>Log in</MUILink>
      </Link>
    </Auth>
  );
};

export default SignUp;
