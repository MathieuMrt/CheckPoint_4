import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const Protected = ({ children }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return navigate("/");
  }, [user]);

  return children;
};

export default Protected;
