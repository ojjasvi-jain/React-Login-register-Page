import { NavLink } from "react-router-dom";
const Register = () => {
  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="text-center my-5">
              <img
                src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                alt="logo"
                width="100"
              />
            </div>
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                <form
                  method="POST"
                  className="needs-validation"
                  novalidate=""
                  autoComplete="off"
                >
                  <div className="mb-3">
                    <label className="mb-2 text-muted" for="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      name="name"
                      value=""
                      required
                      autofocus
                    />
                    <div className="invalid-feedback">Name is required</div>
                  </div>

                  <div className="mb-3">
                    <label className="mb-2 text-muted" for="email">
                      E-Mail Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      value=""
                      required
                    />
                    <div className="invalid-feedback">Email is invalid</div>
                  </div>

                  <div className="mb-3">
                    <label className="mb-2 text-muted" for="password">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      required
                    />
                    <div className="invalid-feedback">Password is required</div>
                  </div>

                  <p className="form-text text-muted mb-3">
                    By registering you agree with our terms and condition.
                  </p>

                  <div className="align-items-center d-flex">
                    <button type="submit" className="btn btn-primary ms-auto">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  Already have an account?{" "}
                  <NavLink to="/login" className="text-dark">
                    Login
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              Copyright &copy; 2017-2024 &mdash; Your Company
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
