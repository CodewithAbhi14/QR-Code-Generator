let imgbox = document.getElementById("imgbox");
let qrtext = document.getElementById("qrtext");
let qrimg = document.getElementById("qrimage");

function generateor() {
    if (qrtext.value.length > 0) {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        imgbox.classList.add("show-img");
    } else {
        qrtext.classList.add('error'); // Remove the dot before 'error'
        setTimeout(() => {
            qrtext.classList.remove('error'); // Remove the dot before 'error'
        }, 1000);
    }
};
