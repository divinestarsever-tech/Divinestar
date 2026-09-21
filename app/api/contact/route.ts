import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    
    // Extract form fields
    const firstName = data.get('firstName') as string;
    const lastName = data.get('lastName') as string;
    const company = data.get('company') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const enquiryType = data.get('enquiryType') as string;
    const carat = data.get('carat') as string;
    const colour = data.get('colour') as string;
    const clarity = data.get('clarity') as string;
    const quantity = data.get('quantity') as string;
    const cert = data.get('cert') as string;
    const message = data.get('message') as string;

    // Build the email content
    const htmlContent = `
      <h2>New Requirement Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <hr />
      <h3>Requirement Details</h3>
      <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
      <p><strong>Size/Carat Range:</strong> ${carat || 'N/A'}</p>
      <p><strong>Colour Range:</strong> ${colour || 'N/A'}</p>
      <p><strong>Clarity Range:</strong> ${clarity || 'N/A'}</p>
      <p><strong>Approx. Quantity:</strong> ${quantity || 'N/A'}</p>
      <p><strong>Certification:</strong> ${cert || 'N/A'}</p>
      <hr />
      <h3>Message:</h3>
      <p>${message}</p>
    `;

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("EMAIL_USER or EMAIL_PASS environment variables are missing. Simulating email send for development.");
      // Return a simulated success response for development
      return NextResponse.json({ success: true, simulated: true });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Divinestar Website" <${process.env.EMAIL_USER}>`,
      to: 'divinekkdb@gmail.com',
      replyTo: email,
      subject: `New Website Enquiry: ${enquiryType} from ${firstName} ${lastName}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send requirement. Please try again later.' },
      { status: 500 }
    );
  }
}
