import Mailgun from 'mailgun.js';
import dotenv from 'dotenv';
import FormData from 'form-data'

// Load environment variables once
dotenv.config();

const MAILGUN_API_KEY = 'a2a54a6e50c445379ff3fad60e9189b1-3750a53b-4ec373b3'; // Make sure not to expose this key publicly.
const MAILGUN_DOMAIN = 'sandbox0042af18e69c4ca2b5b1aadfc6fd57fe.mailgun.org';

const mailgun = new Mailgun(FormData);

const mg = mailgun.client({ username: 'api', key: MAILGUN_API_KEY as string });

export default defineEventHandler(async (event) => {
    // Check request method
    const req = event.node.req;
    
    // Extract body from the request stream
    const getRequestBody = new Promise<string>((resolve, reject) => {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
    
            try {
                const parsedData = JSON.parse(body);
                if (parsedData.clientEmail && parsedData.formDetails) {
                    req.removeAllListeners(); // Удалить все слушатели
                    resolve(body);
                }
            } catch (error) {
                // Если не удается разобрать JSON, продолжаем чтение
            }
        });

        req.on('end', () => {
            resolve(body);
        });

        req.on('error', (err) => {
            reject(err);
        });
    });

    let requestBody: any;

    try {
        const rawBody = await getRequestBody;
        requestBody = JSON.parse(rawBody);

    } catch (error) {
        return { status: 400, body: { error: 'Failed to parse request body.' } };
    }

    const { clientEmail, formDetails } = requestBody;

    if (!clientEmail || !formDetails) {
        return { status: 400, body: { error: 'Bad Request. Missing necessary data.' } };
    }

    try {
        const msg = await mg.messages.create(MAILGUN_DOMAIN, {
            from: `Excited User <mailgun@${MAILGUN_DOMAIN}>`,
            to: ["elmirmammadli18@gmail.com"], // This should ideally be clientEmail, unless you always want it to go to your address
            subject: "Hello",
            text: `
            Haradan: ${formDetails.from}
            Haraya: ${formDetails.to}
            Tarix: ${formDetails.pickupDate}
            Sərnişin sayı: ${formDetails.passengers}
            Bagaj sayı: ${formDetails.luggage}
            `
        });

        console.log(msg);
        return { status: 200, body: { message: 'Email successfully sent!' } };

    } catch (err) {
        console.error(err);
        return { status: 500, body: { error: 'Error sending email.' } };
    }
});
