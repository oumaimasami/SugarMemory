const sendMail = require("../config/Mailer");

const sendContactEmail = async (data) => {
  const emailContent = `
    Nouveau message de contact :
    - Nom: ${data.nom} ${data.prenom}
    - Email: ${data.email}
    - Message: ${data.message}
  `;

  await sendMail(
    process.env.YAHOO_EMAIL,
    "Nouveau message de contact",
    emailContent
  );
};

module.exports = { sendContactEmail };
