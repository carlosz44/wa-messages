# WhatsApp Twilio Messages

Automated WhatsApp messages from NodeJS.

## Getting Started

First, run the development server:

```bash
npm i
# or
yarn
```

Create an account in [Twilio](https://www.twilio.com/try-twilio), activate [Sandbox for WhatsApp](https://www.twilio.com/console/sms/whatsapp/sandbox), take note of your WhatsApp sender number and setup the enviroment variables: 

```bash
TWILIO_ACCOUNT_SID='xxxxxxxxx'
TWILIO_AUTH_TOKEN='xxxxxxxxx'
FROM_NUMBER='xxxxxxxxx'
TO_NUMBER='xxxxxxxxx'
```

Run `index.js`.