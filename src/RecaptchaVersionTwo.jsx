import React, { Component, createElement } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const recaptchaRef = React.createRef();

let postObject = async function(productObj) {
    return new Promise(function(resolve, reject) {
        mx.data.action({
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

let createObject = async function(token) {
    return new Promise(function(resolve, reject) {
        mx.data.create({
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
    }

    handleOnEvent(callbackFun) {
        if (callbackFun !== undefined) {
            return callbackFun;
        } else {
            return undefined;
        }
    }

    async onChangeEvent() {
        let token = recaptchaRef.current.getValue();
        await createObject(token).then(postObject);
    }

    render() {
        return (
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={this.props.sitekey.value}
                onChange={this.onChangeEvent}
                theme={this.props.theme}
                onExpired={this.handleOnEvent(this.props.onExpired)}
                onErrored={this.handleOnEvent(this.props.onErrored)}
                size={this.props.size}
            />
        );
    }
}
