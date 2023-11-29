import { magic } from "../lib/magic";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const handleSocialLogin = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "facebook",
        redirectURI: new URL("/dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Magic + Facebook</h1>
      <button onClick={handleSocialLogin}>
        <FaFacebook size={"2.5rem"} />
        Log in with Facebook
      </button>
    </div>
  );
};

export default Login;
