const ResetPage = () => {
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
                <h1 className="fs-4 card-title fw-bold mb-4">Reset Password</h1>
                <form
                  method="POST"
                  className="needs-validation"
                  novalidate=""
                  autocomplete="off"
                >
                  <div className="mb-3">
                    <label className="mb-2 text-muted" for="password">
                      New Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      value=""
                      required
                      autofocus
                    />
                    <div className="invalid-feedback">Password is required</div>
                  </div>

                  <div className="mb-3">
                    <label className="mb-2 text-muted" for="password-confirm">
                      Confirm Password
                    </label>
                    <input
                      id="password-confirm"
                      type="password"
                      className="form-control"
                      name="password_confirm"
                      required
                    />
                    <div className="invalid-feedback">
                      Please confirm your new password
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="logout_devices"
                        id="logout"
                        className="form-check-input"
                      />
                      <label for="logout" className="form-check-label">
                        Logout all devices
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary ms-auto">
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              Copyright &copy; 2017-2021 &mdash; Your Company
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPage;
