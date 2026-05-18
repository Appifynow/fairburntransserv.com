// send and email to the site owner when a new contact form is submitted
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";


export const sendEmail = async (to: string, subject: string, body: string) => {
  const sesClient = new SESClient({ region: "us-east-1" });

  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: body,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: "noreply@yourdomain.com", // Replace with your verified email address
  });

  try {
    const response = await sesClient.send(command);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};