// script.js

function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_ldmsy3h", "template_3n572kr", params).then(function (res) {
        alert("Obrigado pelo contato! " + res.status);
    })
}