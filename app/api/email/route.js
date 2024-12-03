import nodemailer from 'nodemailer';


export async function GET(req){
    return Response.json("hello api is working")
}


export async function POST(request) {
    try {
      // console.log("request", request);
      const { name, email, message } = await request.json();
      console.log("name", name);
      console.log("email", email);
      console.log("message", message);
      
  
      // Create a transporter object
      let transporter = nodemailer.createTransport({
        host: "reactors.dev", // Replace with your SMTP host
        port: 465, // Replace with your SMTP port
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.NODEMAILER_USERNAME, // Replace with your SMTP username
          pass: process.env.NODEMAILER_PASSWORD, // Replace with your SMTP password
        },
      });
  
      // Define the email options
      let mailOptions = {
        from: process.env.NODEMAILER_USERNAME, // Replace with your "from" address
        to: email,
        subject: `From Orionid.de`,
        text: `
          Name: ${name}, 
        `,
        html:``
      };
  
      // Send the email
      let info = await transporter.sendMail(mailOptions);
  
      return new Response(JSON.stringify({ message: "Email sent", info }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  