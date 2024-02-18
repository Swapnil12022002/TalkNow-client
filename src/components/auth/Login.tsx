import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

const Login = () => {
  return (
    <Auth submitLabel="LOGIN" onSubmit={async () => {}}>
      <Link to="/sign-up">
        <MUILink>Sign up</MUILink>
      </Link>
    </Auth>
  );
};

export default Login;
