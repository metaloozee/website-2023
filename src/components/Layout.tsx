import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-wrap items-center justify-center px-10 py-20 md:px-20 xl:px-80">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
