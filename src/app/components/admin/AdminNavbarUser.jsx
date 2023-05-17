"use client";
import { isAdminLogout } from "../../../../libraries/auth";
export default function AdminNavbarUser() {
  const handleLogout = async (e) => {
    e.preventDefault();
    const status = await isAdminLogout();
    if (status) {
      window.location.href = "/login";
    }
  };
  return (
    <>
      <ul className="navbar-nav flex-row align-items-center ms-auto">
        <li className="nav-item lh-1 me-3">
          <a
            className="github-button"
            href="https://github.com/themeselection/sneat-html-admin-template-free"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
          >
            Star
          </a>
        </li>

        <li className="nav-item navbar-dropdown dropdown-user dropdown">
          <a
            className="nav-link dropdown-toggle hide-arrow"
            href="#"
            data-bs-toggle="dropdown"
          >
            <div className="avatar avatar-online">
              <img
                src={`/admin/assets/img/avatars/1.png`}
                alt={`No name`}
                className="w-px-40 h-auto rounded-circle"
              />
            </div>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#">
                <div className="d-flex">
                  <div className="flex-shrink-0 me-3">
                    <div className="avatar avatar-online">
                      <img
                        src="/admin/assets/img/avatars/1.png"
                        alt={"true"}
                        className="w-px-40 h-auto rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <span className="fw-semibold d-block">{"No name"}</span>
                    <small className="text-muted">Admin</small>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="dropdown-divider"></div>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="bx bx-user me-2"></i>
                <span className="align-middle">My Profile</span>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="bx bx-cog me-2"></i>
                <span className="align-middle">Settings</span>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <span className="d-flex align-items-center align-middle">
                  <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                  <span className="flex-grow-1 align-middle">Billing</span>
                  <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                    4
                  </span>
                </span>
              </a>
            </li>
            <li>
              <div className="dropdown-divider"></div>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={(e) => handleLogout(e)}
              >
                <i className="bx bx-power-off me-2"></i>
                <span className="align-middle">Log Out</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
