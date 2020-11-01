const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const formData = new FormData(e.target);
    // specify the url you want the data to be sent to
    let url = "the url you want to send the data to";
    xhr.open("POST", "the url");
    xhr.send(formData);
});
