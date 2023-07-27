import React, { Children, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./header";

const layout = ({children}) => {
  const { loginUser } = useSelector((state) => state.login);
  console.log("layoutcalled ")
  return (
    <>
      <Suspense fallback={<div> Loading.. </div>}>
        {loginUser ? <Header /> : null}
        {/* <Outlet /> */}
        <div>
        {children}
        </div>
      </Suspense>
    </>
  );
};

export default layout;
