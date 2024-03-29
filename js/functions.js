var date = new Date("Apr3, 2023, 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();

    var distance = date - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "El eventó ya finalizó."
    }
}, 1000);


const card = artist => {
    const { id, name, desc } = artist
}

const modal = document.getElementById("myModal");
const portugal = document.getElementById("pTheMan");
const span = document.getElementsByClassName("close")[0];

portugal.onclick = function() {
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