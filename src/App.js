import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Accounts from "./components/Accounts";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./routing/ProtectedRoutes";

function App() {
  return (
    <Fragment>
      <h1 className="text-center p-3 bg-blue-600 text-white font-extrabold">
        React Firebase Auth and Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/accounts"
            element={
              <ProtectedRoutes>
                <Accounts />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </AuthContextProvider>
    </Fragment>
  );
}

export default App;
