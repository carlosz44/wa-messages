# WhatsApp Twilio Messages

Automated WhatsApp messages from NodeJS.

## Getting Started

First, install dependencies:

```bash
npm i
# or
yarn
```

Then create an account in [Twilio](https://www.twilio.com/try-twilio), activate [Sandbox for WhatsApp](https://www.twilio.com/console/sms/whatsapp/sandbox), take note of your WhatsApp sender number and setup the enviroment variables: 

```bash
TWILIO_ACCOUNT_SID='xxxxxxxxx'
TWILIO_AUTH_TOKEN='xxxxxxxxx'
FROM_NUMBER='xxxxxxxxx'
TO_NUMBER='xxxxxxxxx'
```

Finally run `index.js`.

## Learn More

To learn more, take a look at the following resources:

- [Twilio Node Helper](https://www.twilio.com/docs/libraries/node) - documentation abouth the NodeJS helper library.
- [Getting started with Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/).