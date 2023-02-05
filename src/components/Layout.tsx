import React from "react";

import BottomFade from "./BottomFade";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="py-20 px-5 md:px-80">
            <main>
                {children}
            </main>
            <BottomFade />
        </div>
    )
}

export default Layout;