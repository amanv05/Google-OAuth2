import GoogleLogin from "./components/GoogleLogin";
import Feed from "./pages/Feed";
import PageNotFound from "./pages/PageNotFound";
import "./index.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";



const App = () => {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<GoogleLogin />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="*" element={<PageNotFound />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
