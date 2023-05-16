import AdminNavbarSearch from "./AdminNavbarSearch";
import AdminNavbarUser from "./AdminNavbarUser";
export default function AdminNavbar(props) {
  return (
    <>
      <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="">
            <i className="bx bx-menu bx-sm"></i>
          </a>
        </div>

        <div
          className="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
          <AdminNavbarSearch />
          <AdminNavbarUser />
        </div>
      </nav>
    </>
  );
}
