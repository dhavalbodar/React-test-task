import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./header";

const layout = () => {
  const { loginUser } = useSelector((state) => state.login);
  return (
    <>
      <Suspense fallback={<div> Loading.. </div>}>
        {loginUser ? <Header /> : null}
        <Outlet />
      </Suspense>
    </>
  );
};

export default layout;
