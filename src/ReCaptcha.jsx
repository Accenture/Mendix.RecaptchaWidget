import ReCAPTCHA from "react-google-recaptcha";

import { Component, createElement } from "react";

import "./ui/ReCaptcha.css";

export default class ReCaptcha extends Component {
    render(
        <ReCAPTCHA 
          sitekey="Your client site key",
          onChange={this.props.action.execute} </ReCAPTCHA>
        />,
        document.body
      );
}
