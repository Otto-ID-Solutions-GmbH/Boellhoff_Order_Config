const nodemailer = require('nodemailer');

async function sendEmails(recipients, mailData, emailAddress) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVICE,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const ccRecipients = [...recipients.cc, emailAddress].join(',');
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipients.main,
    cc: ccRecipients,
    subject: "New Data from Boellhoff",
    html: `
      <p style="font-family: 'Arial', sans-serif; font-size: 16px;"><strong>Hello Otto-ID Team,</strong></p>
      <p style="font-family: 'Arial', sans-serif; font-size: 14px;">Please find the attached and following data.</p>
      <p style="font-family: 'Arial', sans-serif; font-size: 14px;">🏠 <strong>Address:</strong> <span style="font-size: 12px;">${mailData.address}</span></p>
      <pre style="font-family: 'Courier New', monospace; font-size: 14px;">${JSON.stringify(mailData.jsonforText, null, 2)}</pre>
      <strong><p style="font-family: 'Arial', sans-serif; font-size: 14px;">The device will be shipped in one week.</p></strong>
      <p style="font-family: 'Arial', sans-serif; font-size: 14px;">Have a great day! :)</p>
    `,
    attachments: [
      {
        filename: "boell.json",
        content: JSON.stringify(mailData.jsonforAttachment, null, 2)
      }
    ]
  };

  await transporter.sendMail(mailOptions);
//   await transporter.sendMail(mailOptions2);
}

module.exports = { sendEmails };
