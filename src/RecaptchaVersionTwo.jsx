import React, { Component, createElement } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default class ReCaptcha extends Component {
    constructor(props) {
        super(props);
        this.state = { token: "" };
        this.recaptchaRef = React.createRef();
        this.lastToken = "";
        window.recaptchaRef = {
            execute: this.execute.bind(this)
        };
    }
    componentDidMount() {}

    handleOnEvent(callbackFun) {
        if (callbackFun !== undefined) {
            return callbackFun;
        } else {
            return undefined;
        }
    }

    onChangeEvent() {
        const token = this.recaptchaRef.current.getValue();
        this.lastToken = token;
        this.props.token.setValue(token);
        this.props.onChangeObject.execute();
    }

    execute() {
        const verified = this.recaptchaRef.current.executeAsync();
        console.info("inside execute function: " + verified);
        return verified;
    }

    render() {
        if (this.props.token.status === "available" && this.props.token.value !== this.lastToken) {
            //the token was changed outside of the widget, assume the token was invalid
            if (this.recaptchaRef.current) {
                this.recaptchaRef.current.reset();
            }
        }
        return this.props.sitekey.status !== "available" ? null : (
            <ReCAPTCHA
                ref={this.recaptchaRef}
                sitekey={this.props.sitekey.value}
                onChange={this.onChangeEvent.bind(this)}
                theme={this.props.theme}
                size={this.props.size}
                badge={this.props.badge}
            />
        );
    }
}
