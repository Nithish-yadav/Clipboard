import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Access from "./pages/Access";
import Text from "./pages/Text";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access" element={<Access />} />
        <Route path="/text/:code" element={<Text />} />
      </Routes>
    </BrowserRouter>
  );
}
