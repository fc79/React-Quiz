
import { Route, Routes } from "react-router-dom";
import Home from "./home";
const Pages = () => {
  return (
        <Routes >
          <Route path="/" element={<Home />} />
        </Routes>
  );
}
export default Pages;
