'use strict'

var qr;
(function() {
    qr = new QRious({
        element : document.getElementById('qr-code'),
        size : 200,
        background : 'white',
        backgroundAlpha: 0,
        value : 'RAVOLUZEN'
    });
})();

function generateQRCode(){
    var qrValue = document.getElementById('qr-value').value;
    alert(qrValue);
    qr.set({
        foreground: 'black',
        background: 'white',
        backgroundAlpha: 0,
        size : 200,
        value : qrValue
    });
}