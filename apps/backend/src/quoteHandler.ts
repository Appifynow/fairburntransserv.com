import { APIGatewayProxyEventV2 } from "aws-lambda"
import { Context } from "vm"
import { HTTPMethods, respond } from "./utils"
import { sendEmail } from "./workerFn/sendEmail"

export const quoteHandler = async (
  req: APIGatewayProxyEventV2,
  _: Context,
  method: HTTPMethods
) => {
        const ownerEmail = process.env.OWNER_EMAIL || 'dsqjr@msn.com'
        if(method === 'PUT'){
            // send an email to the site owner when a new quote request is submitted
            const quote = JSON.parse(req.body || '{}')
            console.log(quote);
            return respond(200, { message: 'Quote request received, sending email...' });
            return sendEmail(ownerEmail, "New Quote Request", quote).then(()=>{
                return respond(200, { message: 'Quote request sent successfully' })
            })
        }
    }