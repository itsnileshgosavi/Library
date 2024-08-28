import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function NotFound() {
  const { error } = useRouteError();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl text-teal-600 font-bold">404</h1>
      <h2 className="text-5xl font-bold my-10">Whoops.. This page does not exist</h2>
      {error && <h3 className="text-xl my-5">{error.message}</h3>}
      <h3 className="text-xl my-5">Here are some links that might help:</h3>
      
      <NavBar></NavBar>
    </div>
  );
}

export default NotFound;
