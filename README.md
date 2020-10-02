## ReCaptcha
Simple reCaptcha google widget for mendix applications.
Settings of this widget will allow you to decide what should happen on Success, Error or Expiration of Recaptcha checkbox. 
Widget is based on NPM module (https://www.npmjs.com/package/react-google-recaptcha) ]

## Usage
All you need to do is sign up for an API key pair. 
Simply place this widget on your layout and configure it correctly. 
Properties used to customise the rendering:

| Name | Type | Description |
|:---- | ---- | ------ |
| sitekey | string | The API client key |
| theme | enum | *optional* `light` or `dark` The theme of the widget *(__defaults:__ `light`)*. See [example][docs_theme]
| onChange | func | The function to be called when the user successfully completes the captcha |
| onErrored | func | *optional* callback when the challenge errored, most likely due to network issues. |
| onExpired | func | *optional* callback when the challenge is expired and has to be redone by user. By default it will call the onChange with null to signify expired callback. 
| size | enum | *optional* `compact`, `normal`. This allows you to change the size or do an invisible captcha |

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution
[Lenka Hruscakova]
