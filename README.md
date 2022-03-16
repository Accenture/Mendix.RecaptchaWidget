## Recaptcha
Recaptcha widget for bot verification. Implementation provides a client and a server side validation with Google Recaptcha Server. The widget is based on npm module (https://www.npmjs.com/package/react-google-recaptcha).

## Usage
1) Sign up for secret and site key pair here https://www.google.com/recaptcha/admin/create 
2) Put your site key into SiteKey variable and Secret Key into SecretKey variable in Recaptcha Mendix Module
3) Place recaptcha inside the data view. Your recaptcha needs to have the object context, and the object needs to have string attribute for Token. You can find the example in RecaptchaSample page
4) You can specify your own On change microflow for recaptcha. Example in OCH_Recaptcha
5) Use your own logic for submitting the form, Example in ACT_SampleSubmit

The whole API documentation for Google recaptcha can be found here https://developers.google.com/recaptcha/docs/verify. 
Once user click on reCAPTCHA to confirm he is not a bot, client side control will make the request to Google validation server with a site key provided in the widget configuration. When it gets the response from the validation server, it will be passed to the mendix application and validated by calling Google reCAPTCHA validation url with both response token and SecretKey. Based on the response you can decide whether the request was from a real person or a bot and take the appropriate action.

Token entity must have read and write access right for your user and you must allow anonymous users in project security settings.

| Name | Type | Description |
|:---- | ---- | ------ |
| Sitekey | expression | The API client key. |
| Token | expression | Attribute that will be set with the Recaptcha token. |
| Theme | enum | *optional* `light` or `dark` The theme of the widget *(__defaults:__ `light`)*. 
| Size | enum | *optional* `compact`, `normal`, `invisible`. This allows you to change the size. |
| Badge Position | enum | *optional* `Bottom Right`, `Bottom Left`, `Inline`. Set the position of Recapctha badge (for invisible size only). |
| On click action | action | You can define on click action for recaptcha. |


## Issues, suggestions and feature requests
[https://github.com/dozoisch/react-google-recaptcha/issues]

## Development and contribution
[Lenka Hruscakova, Kacper Kozimor, Piotr Zuzak, Tomasz Wysoczanski, tieniber, JPhomma]
