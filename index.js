const xhttpjson = new XMLHttpRequest();

xhttpjson.open("GET", "balance.json", true);

xhttpjson.send();

xhttpjson.onreadystatechange = function () {
  if (this.readyState == 4 && this.status === 200) {
    let balance = JSON.parse(this.responseText);
    // console.log(balance)

    var Grafico = document.getElementById("BarGrafico");
    //  Grafico.innerHTML = html;
    let i = 1;
    for (let item of balance) {
      let barHeight = item.amount * 2;
      if (item.amount == 0) {
        barHeight = 0;
      }

      // console.log(item);
      Grafico.innerHTML += `<div class="dayBar">
            <div class="dayBalance" id="dayB${i}"> <p>$ <span> ${item.amount} </span></p></div>
            <div class="Bar bg-bar" onclick="SelectBalance('${i}')" id="bar${i}" style="height: ${barHeight}px;"></div>
            <p>${item.day}</p>
            </div>`;
      i++;
    }
  }
};

function SelectBalance(e) {
  var numberElement = "bar" + e;
  var dayElement = "dayB" + e;
  var element = document.getElementById(numberElement);
  document.getElementById(dayElement).style.display = "block";

  element.classList.replace("bg-bar", "bg-select");
}
