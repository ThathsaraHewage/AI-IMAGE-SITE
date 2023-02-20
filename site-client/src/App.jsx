import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, PostCreate } from "./pages";

const App = () => {
  return (
    // <h1>/hello worlf</h1>
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-[#22262b] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Generate Image
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#22262b] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<PostCreate />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
