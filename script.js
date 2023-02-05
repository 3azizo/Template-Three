let ourSkills = document.querySelector(".our-skills");
let spansOur = document.querySelectorAll(".the-progress  span");
window.addEventListener("scroll", function () {
  if (window.scrollY >= ourSkills.offsetTop - 200) {
    spansOur.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});
// Our satats
let started = false;
let stats = document.getElementById("stats");
let spansStats = document.querySelectorAll(".stats .number ");
window.addEventListener("scroll", function () {
  if (window.scrollY >= stats.offsetTop - 200) {
    if (!started) {
      spansStats.forEach((span) => startCount(span));
    }
    started = true;
  }
});

function startCount(ele) {
  let goal = ele.dataset.goal;
  let stop = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(stop);
      console.log(goal);
    }
  }, 2000 / goal);
}
//event timer
let countDownDate = new Date("Mar 31 ,2023 23:59:59").getTime();
let counter = setInterval(() => {
  //get
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.getElementById("seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff == 0) {
    clearInterval(counter);
  }
}, 1000);
