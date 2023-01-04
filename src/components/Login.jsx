import logo from '../assets/img/logo-login.png'

const Login = () => (
  <section className="w-9/10 md:w-6/10 mx-auto flex justify-between border border-wsblue-200 rounded-md shadow-lg">
    <div className="basis-1/2 bg-wsblue-600 p-12 rounded-l-md flex flex-col justify-center text-center">
      <img src={logo} alt="Majidata" />
    </div>
    <div className="basis-1/2 bg-wsblue-50/60 p-12 flex flex-col justify-center">
      <form>
        <h1 className="text-3xl text-wsblue-700 mb-6 pb-1 border-b border-wsblue-200">
          Log in
        </h1>
        <div className="form-control-container mb-4">
          <label className="form-label">Email address</label>
          <input type="email" name="email" id="email" className="form-input" />
        </div>

        <div className="form-control-container mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
          />
        </div>

        <button className="primary-button">Log in</button>
        <p className="italic text-sm border-t border-wsblue-200 pt-2 mt-4">
          <a href="#">
            If you are a water provider or county administrator, click here to
            request for an account.
          </a>
        </p>
      </form>
    </div>
  </section>
)

export default Login
