import DashBoardNavbar from "./dashboardNavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <DashBoardNavbar />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
