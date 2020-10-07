import React, { Component, createElement } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./ui/ReCaptcha.css";

export default class ReCaptcha extends Component {
    
    constructor(props) {
        super(props);
        const recaptchaRef = React.createRef();
    }

    handleOnEvent(callbackFun) {
        if (callbackFun !== undefined) {
            return callbackFun;
        } else {
            return undefined;
        }
    }

    onChange(value) {
        console.log("Captcha value:", value);
    }

    getResponseToken() {
        document.getElementById("recaptcha-token").value;
    }

    getResponseToken2() {
        document.getElementsByName("recaptchaResponse").value;
    }

    onSubmit = () => {
        console.log("test recaptcha");
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
        console.log(recaptchaValue);
        alert(recaptchaValue);
    };

    verifyCallback(recaptchaToken) {
        const { change } = this.props;
        // inside hidden field
        change("recaptchaResponse", recaptchaToken);
        // or state
        this.setState("recaptchaResponse", recaptchaToken);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} id="form-recaptcha">
                <ReCAPTCHA
                    ref={this.recaptchaRef}
                    name="recaptchaResponse"
                    sitekey={this.props.sitekey}
                    onChange={this.onChange}
                    theme={this.props.theme}
                    onExpired={this.handleOnEvent(this.props.onExpired)}
                    onErrored={this.handleOnEvent(this.props.onErrored)}
                    size={this.props.size}
                />
            </form>
        );
    }
}
