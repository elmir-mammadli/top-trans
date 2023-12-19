import Mailgun from 'mailgun.js';
import FormData from 'form-data'
import dotenv from 'dotenv'

// Load environment variables once
dotenv.config();

const mailgun = new Mailgun(FormData);

const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY as string });

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return { body }
});
