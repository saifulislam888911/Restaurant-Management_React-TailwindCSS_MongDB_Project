import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // NOTE : useLocation() : The useLocation hook returns the location object that represents the current URL. You can think of it like a useState that returns a new location whenever the URL changes. It's useful for accessing the URL and history objects that are typically available in class components. The location object has the following properties:
  // - pathname: A string representing the path of the URL  (e.g., /users)
  // - search: A string representing the query string of the URL (e.g., ?name=ferret)   (e.g., ?name=ferret)
  // - hash: A string representing a URL fragment identifier (e.g., #contact)   (e.g., #contact)
  // - state: An object representing the state data that was passed to the <Link> component (e.g., { from: 'root' })  (e.g., { from: 'root' })  (e.g., { from: 'root' })    (e.g., { from: 'root' })
  // - key: A string representing a unique key for the location  (e.g., 5n9k9e) (e.g., 5n9k9e)  (e.g., 5n9k9e)  (e.g., 5n9k9e)
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
