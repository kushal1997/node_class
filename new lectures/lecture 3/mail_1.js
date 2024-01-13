const nodemailer=require('nodemailer')

async function sendMail(){

    // create an email transporter
    // SMTP (Simple Mail Transfer Protocol)


    //go to persolise google acc within security
    // within app password createa a app name and get the password
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'kushalrao103@gmail.com',
            pass:'bnfeqturokfpqwhl'
        },
    })

    //configure email content

    const mailOptions={
        from:'kushalrao103@gmail.com',
        to:'monalisapanda411@gmail.com',
        subject:"love u monu 💕😘💕",
        text:`This is a test email using nodemailer in node js`,
    }

    //send the email
    try{
        const result= await transporter.sendMail(mailOptions);
        console.log("Email sent: ",result.messageId);
    } catch(err){
        console.log("Email send failed"+err)
    }

}

sendMail();