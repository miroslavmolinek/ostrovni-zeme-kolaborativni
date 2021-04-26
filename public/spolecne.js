function showToastError(text, duration = 15000) {
    console.log("ERROR: " + text)
    Toastify({
        text: text,
        duration: duration,
        destination: "/dokumentace",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(45deg, #ee7777, #666655)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function(){} // Callback after click
      }).showToast();
}

function showToastSuccess(text, duration = 3000) {
    console.log("SUCCESS: " + text)
    Toastify({
        text: text,
        duration: duration,
        destination: "/dokumentace",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(45deg, #77ee77, #666655)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function(){} // Callback after click
      }).showToast();
}

function showToastInfo(text, duration = 10000) {
    console.log("INFO: " + text)
    Toastify({
        text: text,
        duration: duration,
        destination: "/dokumentace",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(45deg, #7777ee, #666655)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function(){} // Callback after click
      }).showToast();
}


socket.on('error', function(msg) {
    showToastError(msg, 15000)
});
socket.on('success', function(msg) {
    showToastSuccess(msg, 3000)
});
socket.on('info', function(msg) {
    showToastInfo(msg, 5000)
});