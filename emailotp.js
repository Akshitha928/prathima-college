function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];
        
    let otp_val = Math.floor(Math.random() * 10000);

    let emailbody = '<h2>your OTP is </h2> ${otp_val}';
    function sendEmail() {
  Email.send({
    SecureToken : "1117CB53446FA697568642B63537496ECD6F",
    To : email.value,
    From : "akshithap928@gmail.com",
    Subject : "Email OTP using JavaAcript",
    Body : emailbody,
  }).then(
    
             message => {
                if (message === "ok") {
                    alert("OTP sent to your email " + email.value);
                    otpverify.computedStyleMap.display = "flex";
                    const otp_inp = document.getElementById('otp_inp');
                    const otp_btn = document.getElementById('otp_btn');

                    otp_btn.addEventListener('click', () => {
                        if (otp_inp.value == otp_val) {
                            alert("email address verified...");
                        }
                        else{
                            alert("Invalid OTP");
                        }
                    })
                }
             }

  );
}

}