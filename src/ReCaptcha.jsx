import { Component, createElement } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import "./ui/ReCaptcha.css";

export default class ReCaptcha extends Component {
    constructor(props) {
        super(props);

        this.handleonChange = this.handleonChange.bind(this);
    }
    handleonChange() {
        try {
            this.props.onChange.execute();
        } catch (error) {
            console.log("You have to specify an On change action of reCAPTCHA widget");
        }
    }

    render() {
        return (
            <ReCAPTCHA
                sitekey={this.props.sitekey}
                onChange={this.handleonChange}
                theme={this.props.theme}
                onExpired={this.props.onExpired !== undefined ? this.props.onExpired.execute : undefined}
                onErrored={this.props.onErrored !== undefined ? this.props.onErrored.execute : undefined}
                size={this.props.size}
            />
        );
    }
}
