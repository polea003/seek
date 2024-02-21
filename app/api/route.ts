import sgMail from '@sendgrid/mail'

export async function POST(req: Request) {
  try {
    const { subscriberEmail, subscriberName } = await req.json()

    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

    const msg = {
      to: process.env.ADMIN_EMAIL_1 || '',
      from: process.env.SENDGRID_VERIFIED_SENDER_EMAIL_ADDRESS || '',
      subject: 'New Contact From Seek Medical Affairs',
      text: `(name: ${subscriberName}, email: ${subscriberEmail}) has signed up for updates`,
      html: `<strong>(name: ${subscriberName}, email: ${subscriberEmail}) has signed up for updates</strong>`,
    }
    const msg2 = { ...msg, to: process.env.ADMIN_EMAIL_2}

    await sgMail.send([msg, msg2])
    return Response.json({ message: 'successfully subscribed' , ok: true })
  } catch(e) {
    console.log({e})
    return Response.json({ message: 'error occurred' , ok: false })
  }
}