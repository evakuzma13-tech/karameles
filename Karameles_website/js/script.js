document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("result").innerText = "Lūdzu aizpildi visus laukus!";
    } else {
        document.getElementById("result").innerText = "Paldies, " + name + "! Ziņa nosūtīta.";
    }
});
function showImage(img) {
    alert("Tu uzspiedi uz attēla!");
}