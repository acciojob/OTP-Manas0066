//your JS code here. If required.
const otp = document.querySelectorAll(".code");
// console.log(otp);

// console.log(otp[0]);
// console.dir(otp[0]);

otp[0].focus();

otp.forEach((num, index) => {
    // console.log(num);
    num.addEventListener("input", (event) => {
        // console.log(event);
        console.log(event.target.value);
        if(event.target.value.length === 1 && index < otp.length - 1) {
            otp[index + 1].focus();
        }
    })

    num.addEventListener("keydown", (event) => {
        // console.log(event);
        if(event.key === "Backspace" && index > 0) {
            otp[index - 1].focus();
        }
    })
})