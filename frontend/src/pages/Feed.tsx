import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

interface userInfo {
  name: string,
  email: string,
  image: string,
}


const Feed = () => {

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<userInfo | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    const userData = JSON.parse(data as string);
    setUserInfo(userData);
  }, []);

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("user-info");
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div>
      <h1>Welcome {userInfo?.name}</h1>
      <h3>Email: {userInfo?.email}</h3>
      <img src={userInfo?.image} alt="profile-img"></img>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Feed
