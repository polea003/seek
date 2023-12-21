import sgMail from '@sendgrid/mail'

export async function POST(req: Request) {
  try {
    console.log('foo1')
    const { subscriberEmail } = await req.json()
    console.log(`foo2: ${subscriberEmail}`)

    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

    const msg = {
      to: process.env.ADMIN_EMAIL_1 || '',
      from: process.env.SENDGRID_VERIFIED_SENDER_EMAIL_ADDRESS || '',
      subject: 'New Contact From Seek Medical Affairs',
      text: `${subscriberEmail} has signed up for updates`,
      html: `<strong>${subscriberEmail} has signed up for updates</strong>`,
    }
    const msg2 = { ...msg, to: process.env.ADMIN_EMAIL_2}

    console.log('foo3')
    sgMail.send([msg, msg2])
    console.log('foo4')
    console.log('Email sent')
    return Response.json({ message: 'successfully subscribed' , ok: true })
  } catch(e) {
    console.log({e})
    return Response.json({ message: 'error occurred' , ok: false })
  }
}