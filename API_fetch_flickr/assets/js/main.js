

//PROFE, LO SIENTO, LO HE EINTENTADO Y ENTIENDO EL PROCESO PERO NO ME SALE.... YA TE COMENTARÉ LAS DUDAS Y SI LO CONSIGO A LO LARGO DE 
//LA SEMANA TE LO REMANDO

window.onload = function () {

  for (i = 1; i <= 50; i++) {
   // console.log (i);
    fetch(`http://acnhapi.com/v1/fish/${i}`)
   /* if (i == 5){
      console.log(i.name);
    }*/


      .then(res => res.json())
      .then(res => {

        console.log(res.i);
        //let caja = document.getElementById(i);
        /*res.i.forEach(function (fish, index) {
          let item = `<li><span>${fish.i}</span></li>`;
          caja.innerHTML += item;

        });*/
      });
  };



}

