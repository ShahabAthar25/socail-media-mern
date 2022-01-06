import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Navbar />
    </div>
  );
}
