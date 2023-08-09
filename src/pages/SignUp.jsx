import React from "react";

class SignUp extends React.Component{
    render(){
        return(
            <div>
                <section className="loginpage">
                    <div className="container">
                        <div className="row">
                            <div className="loginleft col-6">
                                <div className="imagelogin">
                                    <img className="img-fluid w-100 mt-5" src="./images/SignUp.svg" />
                                </div>
                            </div>
                            <div className="loginright col-6">
                                <div className="logologin">
                                    <img src="./images/Logo.svg" className="img-fluid" />
                                </div>
                                <div className="row signupheader ">
                                    <h1>SignUp</h1>
                                </div>
                                <form action method="post">
                                    <div className="row formgroup">
                                        <div className="signupfields">
                                            <input type="text" id="name" className="formfields ps-lg-3" placeholder="      Company Name" />
                                            <div className="pwlogin">
                                                <input type="email" id="name" className="formfields" placeholder="      Company Email Id" />
                                            </div>
                                            <div className="pwlogin form-outline">
                                                <input type="tel" id="typePhone" className="formfields" placeholder="     Company Phone" />
                                            </div>
                                            <div className="pwlogin">
                                                <input type="password" id="password" className="formfields" placeholder="     Password" />
                                            </div>
                                            <div className="pwlogin">
                                                <input type="password" id="password" className="formfields" placeholder="     Confirm Password" />
                                            </div>
                                            <button className="loginpgbtn mt-5">SignUp</button>
                                        </div>
                                        <div className="row ">
                                             <p className="endlogin">Already have an account?<a href="#" className="terms"> LogIn</a></p>
                                        </div>
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
export default SignUp;