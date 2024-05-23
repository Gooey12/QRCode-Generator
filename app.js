let Text = document.getElementById("Text");
let img = document.getElementById("img");
let QRPicture = document.getElementById("QRPicture");

function genQR() {
    if (Text.value == '') {
    return
    };

    QRPicture.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Text.value;

    Text.value = '';
}