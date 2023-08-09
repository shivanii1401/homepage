import React from "react";

class Login extends React.Component{
    render(){
        return(
            <div>
                <section className="loginpage">
  <div className="container">
    <div className=" row">
      <div className="loginleft col-md-6">
        <div className="imagelogin">
          <img className="img-fluid w-100" src="./images/Login.svg" />
        </div>
      </div>
      <div className="loginright col-md-6">
        <div className="logologin">
          <img src="./images/Logo.svg" className="img-fluid" />
        </div>
        <div className="row loginheader">
          <h1>Login</h1>
        </div>
        <form action method="post">
          <div className="row formgroup">
            <div className="emaillogin">
              <input type="email" id="EmailId" className="formfields" placeholder="  " defaultValue="       Company Email Id" />
            </div>
            <div className="pwlogin">
              <input type="password" id="password" className="formfields" placeholder="       Password" defaultValue />
            </div>
            <div className="row mb-4">
              <div className="col d-flex">
                {/* Checkbox */}
                <div className="form-check Rememberme">
                  <input className="form-check-input" type="checkbox" defaultValue id unchecked />
                  <label className="form-check-label"> Remember me </label>
                </div>
                <a className="forgetp" href="#!">Forgot password?</a>
              </div>
            </div>
            <button className="loginpgbtn">Login</button>
          </div>
          <div className="row TandC">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id unchecked />
              <label className="form-check-label">I understand and agree with the <a href="#" className="terms"> Terms &amp; Conditions</a>  and<br /><a href="#" className="terms">Privacy Policy.</a></label>
            </div>
          </div>
          <div className="row ">
            <p className="endlogin">Doesn't have an account yet?<a href="#" className="terms"> SignUp</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>





            </div>

        );
    }
}
export default Login;