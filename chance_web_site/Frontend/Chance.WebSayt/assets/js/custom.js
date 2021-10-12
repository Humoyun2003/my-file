function countdown() {
    var now = new Date();
    var eventDate = new Date(2021, 07, 22);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime + currentTime - (1000 * 60 * 60 * 24 * 31 * 12 * 97.79);

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    var m1 = Math.floor(d / 31);
    var y = Math.floor(m1 / 12);

    m1 %= 12;
    d %= 31;
    h %= 24;
    m %= 60;
    s %= 60;

    m1 = (m1 < 10) ? "0" + m1 : m1;
    d = (d < 10) ? "0" + d : d;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("years").textContent = y;
    document.getElementById("years").innerText = y;

    document.getElementById("months").textContent = m1;
    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);
}
countdown();