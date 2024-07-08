const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");

function toggleChat() {
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "block";
        typeWriter("Olá, como posso te ajudar?");
    } else {
        document.querySelector(".chat-msg").innerHTML = "";
        const submenus = document.querySelectorAll(".submenu");
        submenus.forEach(submenu => {
            submenu.classList.remove("show");
        });
        chatBox.style.display = "none";
    }
}

function openLink(url) {
    window.open(url, "_blank");
}

function typeWriter(text) {
    let charIndex = 0;
    const typingSpeed = 50;
    const chatMsgElement = document.querySelector(".chat-msg");

    function type() {
        if (charIndex < text.length) {
            chatMsgElement.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
}
