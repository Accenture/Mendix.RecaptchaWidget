import { Component, createElement } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import "./ui/ReCaptcha.css";

export default class ReCaptcha extends Component {
    render() {
        return (
            <ReCAPTCHA
                sitekey={this.props.sitekey}
                onChange={this.props.onChange.execute}
                theme={this.props.theme}
                onExpired={this.props.onExpired.execute}
                onErrored={this.props.onErrored.execute}
                size={this.props.size}
                badge={this.props.badge}
            />
        );
    }
}
