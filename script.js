window.setTimeout("waktu()", 1000);

function waktu() {
  var waktu = new Date();
  setTimeout("waktu()", 1000);
  document.getElementById("jam").innerHTML = waktu.getHours();
  document.getElementById("menit").innerHTML = waktu.getMinutes();
  document.getElementById("detik").innerHTML = waktu.getSeconds();
}

const secondHand = document.querySelector(".jarum-detik");
const minuteHand = document.querySelector(".jarum-menit");
const jarum_jam = document.querySelector(".jarum-jam");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  if (secondsDegrees === 90) {
    secondHand.style.transition = "none";
  } else if (secondsDegrees >= 91) {
    secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  jarum_jam.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
