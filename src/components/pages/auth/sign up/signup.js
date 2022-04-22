//import hook react
import React, { useState } from 'react';
import axios from 'axios';
// import './signup.css';


//import hook useHitory from react router dom
// import { useHistory } from 'react-router';

//import usehistory from react-roter
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home');

//import axios

function SignUp() {

    //define state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //define state validation
    const [validation, setValidation] = useState([]);

    //define history
    // const history = useHistory();

    //function "loginHanlder"
    const loginHandler = async (e) => {
        e.preventDefault();
        
        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append('email', email);
        formData.append('password', password);

        //send data to server
        await axios.post('http://localhost:8000/api/login', formData)
        .then((response) => {

            //set token on localStorage
            localStorage.setItem('token', response.data.token);

            //redirect to dashboard
            // history.push('/dashboard');
        })
        .catch((error) => {

            //assign error to state "validation"
            setValidation(error.response.data);
        })
    };

    return (
        <div className="container" style={{ marginTop: "120px" }}>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-body">
                            <h4 className="fw-bold">SIGN-UP</h4>
                            <hr/>
        <div class="form signup">
        <span class="title">Registration</span>
        {
            validation.message && (
                <div className="alert alert-danger">
                        {validation.message}
                </div>
        )
        }

            <form onSubmit={loginHandler}>       
            <div class="mb-3">
                <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Enter your name" required/>
                <i class="uil uil-user"></i>
            </div>
            {
                validation.Name && (
                    <div className="alert alert-danger">
                        {validation.Name[0]}
                    </div>
            )
            }

            <div class="mb-3">
                <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Enter your email" required/>
                <i class="uil uil-envelope icon"></i>
            </div>
            {
                validation.email && (
                    <div className="alert alert-danger">
                        {validation.email[0]}
                    </div>
            )
            
            }
            <div class="mb-3">
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" required/>
                <i class="uil uil-lock icon"></i>
            </div>
            {
                validation.password && (
                    <div className="alert alert-danger">
                        {validation.password[0]}
                    </div>
            )
            }
            
            <div class="mb-3">
                <input type="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Confirm a password" required/>
                <i class="uil uil-lock icon"></i>
                <i class="uil uil-eye-slash showHidePw"></i>
            </div>

            {
                validation.password && (
                    <div className="alert alert-danger">
                        {validation.password[0]}
                    </div>
            )
            }

            <div class="checkbox-text">
                <div class="checkbox-content">
                    <input type="checkbox" id="sigCheck"/>
                    <label for="sigCheck" class="text">Remember me</label>
                </div>
                
                <a href="#" class="text">Forgot password?</a>
            </div>

            <div class="input-field button">
                <input type="button" value="Login Now"/>
            </div>
        </form>

        <div class="login-signup">
            <span class="text">Not a member?
                <a href="#" class="text login-link">Signup now</a>
            </span>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    )

}

export default SignUp;