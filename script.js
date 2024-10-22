
var modal = document.getElementById("hireMeModal");
var btn = document.getElementById("hireMeBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("hireMeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    alert("Message sent! \nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
 
    modal.style.display = "none";
    
});
