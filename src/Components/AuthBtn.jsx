import { Link } from "react-router-dom";

function AuthBtn() {
  return (
    <div className="flex items-center space-x-4">
      <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600">
       <Link to= "/register">
       Register
       </Link>
        
      </button>
      <button className="bg-gray-200 text-blue-800 px-4 py-2 rounded hover:bg-gray-300">
        <Link to="/login">Login</Link>
       
      </button>
    </div>
  );
}
export default AuthBtn;
