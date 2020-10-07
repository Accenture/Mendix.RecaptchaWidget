## ReCaptcha
Simple ReCaptcha Google v2 widget for mendix applications.
Widget is based on NPM module (https://www.npmjs.com/package/react-google-recaptcha)

## Usage
You need to sign up for an API key pair (https://www.google.com/recaptcha/admin/create) 
Place this widget on your layout and configure it correctly. 
Properties used to customise the rendering can be found in the General Tab.

| Name | Type | Description |
|:---- | ---- | ------ |
| Sitekey | string | The API client key |
| Theme | enum | *optional* `light` or `dark` The theme of the widget *(__defaults:__ `light`)*. See [example][docs_theme]
| On Validation | func | The function to be called when the user successfully completes the captcha |
| On Errored | func | *optional* callback when the challenge errored, most likely due to network issues. |
| On Failed Validation | func | *optional* callback when the challenge is expired and has to be redone by user. By default it will call the onChange with null to signify expired callback. 
| Size | enum | *optional* `compact`, `normal`. This allows you to change the size or do an invisible captcha |

## Issues, suggestions and feature requests
This solution provides only client side validation between the browser and Google Recaptcha Server. 

## Development and contribution
[Lenka Hruscakova]
