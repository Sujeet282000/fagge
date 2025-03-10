import React from "react";
import { Outlet } from "react-router-dom";

export default function ProductLayout() {
  return (
    <div>
      {/* <h1>Products</h1> */}
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
}
