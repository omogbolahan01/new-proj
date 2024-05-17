import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Team from "./pages/Team";
import Tammer from "./pages/Tammer";
import Lamma from "./pages/Lamma";
import Grammer from "./pages/Grammer";
import Kanmo from "./pages/Kanmo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/project" element={<Project />} />

      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/lamma" element={<Lamma />} />
      <Route path="/tammer" element={<Tammer />} />
      <Route path="/grammer" element={<Grammer />} />
      <Route path="/kanmo" element={<Kanmo />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
