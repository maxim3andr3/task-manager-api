const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'maxim3andr3@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'maxim3andr3@gmail.com',
        subject: 'Sorry to see you go.',
        text: `So sad to see you leave the app ${name}... Hope to see you again !`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}