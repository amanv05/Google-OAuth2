import { useGoogleLogin } from "@react-oauth/google"
import { googleAuth } from "../apiCall/api";

const GoogleLogin = () => {

const googleLogin = useGoogleLogin({
    onSuccess: async (authResult) => {
        const result = await googleAuth(authResult.code);
        const { name, email, image } = result.data;
        console.log(result.data);
    },
    onError: (e) => {
      console.error("error occured while login", e);
    },
    flow: "auth-code"
  });

  return (
    <div className="btn-container">
      <button className="login-btn" onClick={googleLogin}>Login with Google</button>
    </div>
  )
}

export default GoogleLogin
