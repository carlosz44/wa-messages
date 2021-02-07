require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    from: `whatsapp:+${process.env.FROM_NUMBER}`,
    body: "probando el envío automatizado para WhatsApp final",
    to: `whatsapp:+${process.env.TO_NUMBER}`,
  })
  .then((message) => console.log(message.sid));
