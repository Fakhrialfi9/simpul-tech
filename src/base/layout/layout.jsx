import { Outlet } from "react-router-dom";
import layoutStyle from "../style/layout.module.css";

const Layout = () => {
  return (
    <div className={layoutStyle.layout}>
      <main className={layoutStyle.main}>
        {/* Pages Layout */}
        <aside className={layoutStyle.pages}>
          <Outlet />
        </aside>
        {/* Pages Layout */}
      </main>
    </div>
  );
};

export default Layout;
