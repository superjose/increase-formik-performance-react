import React, { memo } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "../Home";
import { Performant } from "../Performant";
import { Problematic } from "../Problematic/";

export type RootProps = {};

export const Root: React.FC<RootProps> = memo((props) => {
  return (
    <>
      <BrowserRouter>
        <Link to={"/performant"}>Go To Performant View</Link>
        <br />
        <Link to={"/problematic"}>Go To Problematic View</Link>
        <br />
        <Routes>
          <Route path="/problematic" element={<Problematic />} />
          <Route path="/performant" element={<Performant />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
});
