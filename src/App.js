import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import { FallBackError } from "./Components/FallBackError";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Users from "./Routes/Users";
import NavBar from "./Components/NavBar";
// import UsersId from './Routes/UsersId';
import ErrorPage from "./Routes/ErrorPage";

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log("Logging", error, errorInfo);
  };

  return (
    <div className="App">
      <>
        <ErrorBoundary FallbackComponent={FallBackError} onError={errorHandler}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<Users />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ErrorBoundary>
      </>
    </div>
  );
}

export default App;
