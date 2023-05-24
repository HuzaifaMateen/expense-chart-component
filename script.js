let chart1= document.querySelector(".chart-mon");
let expense1 = document.querySelector(".chart-expense-mon");
let chart2 = document.querySelector(".chart-tue");
let expense2 = document.querySelector(".chart-expense-tue");
let chart3 = document.querySelector(".chart-wed");
let expense3 = document.querySelector(".chart-expense-wed");
let chart4 = document.querySelector(".chart-day");
let expense4 = document.querySelector(".chart-expense-thurs");
let chart5 = document.querySelector(".chart-day2");
let expense5 = document.querySelector(".chart-expense-fri");
let chart6 = document.querySelector(".chart-sat");
let expense6 = document.querySelector(".chart-expense-sat");
let chart7 = document.querySelector(".chart-sun");
let expense7 = document.querySelector(".chart-expense-sun");
chart1.addEventListener("mouseover", function(){
    expense1.classList.toggle("active");
});

chart2.addEventListener("mouseover", function(){
    expense2.classList.toggle("active");
});

chart3.addEventListener("mouseover", function(){
    expense3.classList.toggle("active");
});

chart4.addEventListener("mouseover", function(){
    expense4.classList.toggle("active");
});

chart5.addEventListener("mouseover", function(){
    expense5.classList.toggle("active");
});

chart6.addEventListener("mouseover", function(){
    expense6.classList.toggle("active");
});

chart7.addEventListener("mouseover", function(){
    expense7.classList.toggle("active");
});