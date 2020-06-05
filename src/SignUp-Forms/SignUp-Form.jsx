import React from "react";

import { FormInput } from "../Forms/Form-input-component";
import { CustomButton } from "../Button/Button-styles-component";
import { auth, createUserProfileDocument } from "../Firebase/Firebase.utils";
import "./SignUp-Form.scss";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert(`Passwords don't match please try again.`)
            return;
        }
        try {
            const { user  } = await auth.CreateUserWithEmailAndPassword(email, password);
            // set state after await 
            await createUserProfileDocument(user, {displayName})
            this.setState = ({
                displayName: "",
                email: "",
                pasword: "",
                confirmPassword: ""
            })

        } catch (error) {
          console.error(error)
        }

    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})

    }

    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do Not Have An Account.</h2>
                <span>Sign Up With Your Email and Password.</span>
                <form className="sign=up-form" onSubmit={this.handleSubmit}>
                  <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    lable="Display Name"
                    onChange={this.handleChange}
                    required
                  ></FormInput>

                  <FormInput
                   type="email"
                   name="email"
                   value={email}
                   label="Email"
                   onChange={this.handleChange}
                   required
                  >

                  </FormInput>

                  <FormInput
                    type="password"
                    name="password"
                    value={password}
                    label="Password"
                    onChange={this.handleChange}
                    required
                  >

                  </FormInput>

                  <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm Password"
                    onChange={this.handleChange}
                    required
                  >

                  </FormInput>
                  <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;