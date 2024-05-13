import { Navbar } from "react-bulma-components";

export default function index() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item ml-2" href="/VerifyUser">
            <img className="image is-256x256 " /> <b>GiFund</b> 🧩
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/userdonationlist" className="navbar-item">
              Daftar Galang Dana
            </a>

            {/* <a className="navbar-item">Documentation</a> */}

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Menu</a>

              <div className="navbar-dropdown">
                <a href="/userdonationlist" className="navbar-item">
                  Daftar Galang Dana
                </a>{" "}
                <a href="/SiaranTrans" className="navbar-item">
                  Siaran Transaksi Berlangsung
                </a>
                <a href="/mail" className="navbar-item">
                  Kontak Kita
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {/* {user && user.role === "NewUser" ? (
                  <a className="button is-link" disabled>
                    <strong className="mr-2">Post</strong>
                    <BiHighlight />
                  </a>
                ) : (
                  <a href="/post" className="button is-link">
                    <strong className="mr-2">Post</strong>
                    <BiHighlight />
                  </a>
                )}

                <a href="/Profile/Edit/:id" className="button is-primary">
                  <strong className="mr-2">Profile</strong>
                  <BiUser />
                </a>
                <div>
                  <NotifUser />
                </div>
                {user && user.role === "NewUser" ? (
                  <Link
                    to={`/dompetuser/${userId}`}
                    className="button has-text-info-dark mr-2"
                    disabled
                  >
                    <BiCreditCard />
                  </Link>
                ) : (
                  <Link
                    to={`/dompetuser/${userId}`}
                    className="button has-text-info-dark mr-2"
                  >
                    <BiCreditCard />
                  </Link>
                )} */}

                <button className="button is-light mr-2">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
