import React from "react";

function Signup() {
    return (
        <div className="container">
            <div className="leftSide">
                <img
                    src="/signup_banner.png"
                    alt="Signup Banner"
                    className="Signupimg"
                />
                <h1 className="img_text">Discover new things on <br /> Superapp</h1>
            </div>
            <div className="rightSide">
                <h1 className="app_name">Super app</h1>
                <div className="Signup_title">Create your new account</div>
                <form className="Signup_form">
                    <input type="text" placeholder="Name" required className="name" />
                    <input
                        type="text"
                        placeholder="UserName"
                        required
                        className="username"
                    />
                    <input type="email" placeholder="Email" required className="email" />
                    <input type="text" placeholder="Mobile" required className="mobile" />
                    <div className="agree">
                        {" "}
                        <input type="checkbox" name="checkbox" id="checkbox" required />
                        Share my registration data with Superapp
                    </div>
                    <button className="Signup_btn">SIGN UP</button>
                </form>
                <div className="term_cond">
                    <p className="t_c1">
                        By clicking on Sign up. you agree to Superapp{" "}
                         <span>
                            Terms and <br /> Conditions of Use
                        </span>
                    </p>
                    <p className="tc2">
                        To learn more about how Superapp collects, uses, shares and <br />
                        protects your personal data please head Superapp 

                            <span>
                            &nbsp;Privacy <br /> Policy
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
