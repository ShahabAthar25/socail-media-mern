import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
