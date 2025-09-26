import { useEffect, useState } from "react";
import "./App.css";
import Crypto from "./pages/login/crypto/Crypto";
import Login from "./pages/login/Login";
function App() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const logged = localStorage.getItem("login");
    if (logged === "true") {
      setLogin(true);
    }
  }, []);

  return (
    <>
      {login ? <Crypto setLogin={setLogin} /> : <Login setLogin={setLogin} />}{" "}
    </>
  );
}
export default App;
