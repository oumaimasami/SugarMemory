const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.API_KEY);

exports.sendEmail = async (nom, prenom, email, message) => {
  const msg = {
    to: "sugarmemories8@gmail.com", // Replace with your email
    from: "samiouma42@gmail.com", // Must be a verified sender
    subject: `Nouveau message de ${nom} ${prenom}`,
    text: `De: ${email}\n\nMessage:\n${message}`,
  };
  await sgMail.send(msg);
};
