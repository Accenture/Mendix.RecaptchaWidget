import React, { Component, createElement } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const recaptchaRef = React.createRef();

const postObject = async function(productObj) {
    return new Promise(function(resolve, reject) {
        window.mx.data.action({
            params: {
                applyto: "selection",
                actionname: "Recaptcha.ResponseValidation",
                guids: [productObj._guid]
            },
            callback: function(microflowReturnValue) {
                if (microflowReturnValue === false) {
                    recaptchaRef.current.reset();
                }
                console.log(microflowReturnValue);
                resolve(microflowReturnValue);
            },
            error: function(e) {
                console.error("Error with communication with Mendix app", e);
                reject("Error with communication with Mendix app", e);
            }
        });
    });
};

const createObject = async function(token) {
    return new Promise(function(resolve, reject) {
        window.mx.data.create({
            entity: "Recaptcha.Token",
            callback: function(obj) {
                obj.set("Token", token);
                resolve(obj);
            },
            error: function(e) {
                console.error("Could not create object:", e);
                reject("Could not create object:", e);
            }
        });
    });
};

export default class ReCaptcha extends Component {
    constructor(props) {
        super(props);
        this.state = { sitekey: "" };
    }
    componentDidMount() {
        const interval = setInterval(() => {
            if (this.props.sitekey.status === "available") {
                this.setState({ sitekey: this.props.sitekey.value });
                clearInterval(interval);
            }
        }, 50);
    }

    handleOnEvent(callbackFun) {
        if (callbackFun !== undefined) {
            return callbackFun;
        } else {
            return undefined;
        }
    }

    async onChangeEvent() {
        const token = recaptchaRef.current.getValue();
        await createObject(token).then(postObject);
    }

    render() {
        return this.state.sitekey === "" ? (<div> </div>) : (
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={this.state.sitekey}
                onChange={this.onChangeEvent}
                theme={this.props.theme}
                size={this.props.size}
            />
        );
    }
}
