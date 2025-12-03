const eventDate = new Date("Oct 09, 2026 20:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor(distance % 86400000 / 3600000);
    const minutes = Math.floor(distance % 3600000 / 60000);
    const seconds = Math.floor(distance % 60000 / 1000);
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    if (distance < 0) document.getElementById("countdown").innerHTML = "<h2>\uD83C\uDF89 O Grande Dia Chegou! \uD83C\uDF89</h2>";
}
setInterval(updateCountdown, 1000);

//# sourceMappingURL=Exercicio-Parcel.f75de5e1.js.map
