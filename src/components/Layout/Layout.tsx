import React from "react";
import Header from "../Common/Header";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
