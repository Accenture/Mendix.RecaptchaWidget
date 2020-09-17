import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/ReCaptcha.css";

export default class ReCaptcha extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
