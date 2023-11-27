import sgMail from '@sendgrid/mail'

export async function POST(req: Request) {
    const { subscriberEmail } = await req.json()

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
      to: process.env.ADMIN_EMAIL_1,
      from: process.env.SENDGRID_VERIFIED_SENDER_EMAIL_ADDRESS,
      subject: 'New Contact From Seek Medical Affairs',
      text: `${subscriberEmail} has signed up for updates`,
      html: `<strong>${subscriberEmail} has signed up for updates</strong>`,
    }
    const msg2 = { ...msg, to: process.env.ADMIN_EMAIL_2}
    sgMail
      .send([msg, msg2])
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })

    return Response.json({ message: 'successfully subscribed' , ok: true })
  }