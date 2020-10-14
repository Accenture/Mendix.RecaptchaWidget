## Recaptcha
Recaptcha widget for bot verification. Implementation provides a client and a server side validation with Google Recaptcha Server.] The widget is based on npm module (https://www.npmjs.com/package/react-google-recaptcha).

## Usage
1) Sign up for secret and site key pair here https://www.google.com/recaptcha/admin/create 
2) Put your site key into SiteKey variable and Secret Key into SecretKey variable in Recaptcha Mendix Module
3) The widget needs to be placed in a Data View with a Microflow (DS_SiteKeyCreation) as a Data Source.
4) Open the widget configuration and put $currentObject/Value into the field for a SiteKey
5) The rest of the fields in the configuration are optional and can be configured based on your needs

The whole API documentation for Google recaptcha can be found here https://developers.google.com/recaptcha/docs/verify. 
Once user click on reCAPTCHA to confirm he is not a bot, client side control will make the request to Google validation server with a site key provided in the widget configuration. When it gets the response from the validation server, it will be passed to the mendix application and validated by calling Google reCAPTCHA validation url with both response token and SecretKey. Based on the response you can decide whether the request was from a real person or a bot and take the appropriate action.

SiteKey and Token entitiy must have read and write access rights for a user and you must allow anonymous users in project security settings

| Name | Type | Description |
|:---- | ---- | ------ |
| Sitekey | expression | The API client key |
| Theme | enum | *optional* `light` or `dark` The theme of the widget *(__defaults:__ `light`)*. See [example][docs_theme]
| On Validation | func | The function to be called when the user successfully completes the captcha |
| On Errored | func | *optional* callback when the challenge errored, most likely due to network issues. |
| On Failed Validation | func | *optional* callback when the challenge is expired and has to be redone by user. By default it will call the onChange with null to signify expired callback. 
| Size | enum | *optional* `compact`, `normal`. This allows you to change the size or do an invisible captcha |

## Issues, suggestions and feature requests
[https://github.com/dozoisch/react-google-recaptcha/issues]

## Development and contribution
[Lenka Hruscakova, Kacper Kozimor, Piotr Zuzak, Tomasz Wysoczanski]
