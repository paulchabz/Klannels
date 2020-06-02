import React from "react";
import "./Sign-In-styles.scss";
import {FormInput} from "../Forms/Form-input-component"
import {CustomButton} from "../Button/Button-styles-component";
import {signInWithGoogle} from "../Firebase/Firebase.utils";


class SignIn extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: "", password: ""})
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value})
    }

   render () {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Please sign in with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>

                     <FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange} label="email" required/>

                    <FormInput name="password" type="password" value={this.state.password} onChange={this.handleChange} label="password" required/>

                    <div className="buttons">
                        <CustomButton type="submit"  >SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle}  isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>


                </form>
            </div>
        )
   }


}
export default SignIn;