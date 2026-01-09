import { useGoogleLogin } from "@react-oauth/google"
import { googleAuth } from "../apiCall/api";
import { useNavigate } from "react-router-dom";


type GoogleAuthCodeResponse = {
  code: string;
  scope: string;
};


const GoogleLogin = () => {

  const navigate = useNavigate();

  const responseGoogle = async (authResult: GoogleAuthCodeResponse) => {
    try {
      const result = await googleAuth(authResult.code);
        const { name, email, image } = result.data.user;
        const token = result.data.token;
        const obj = {name, email, image, token};
        localStorage.setItem("user-info", JSON.stringify(obj));
        navigate("/feed");
    } catch (error) {
      console.error("error occured while login", error);
    }
  }

const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (e) => {
      console.error("error while loggin in", e);
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
