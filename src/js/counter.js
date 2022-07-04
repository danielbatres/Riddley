const counter = document.getElementById("contadorNum");

window.onload = () => {
    $('#lds').fadeOut(500);
    setTimeout(() => {
        $('body').removeClass('hidden');
    }, 5000);
}

const funcionContador = () => {
    const timer = (counter, value, time) => {
        setTimeout(() => {
            counter.innerHTML = value;
        }, time);
    };

    timer(counter, 5, 0);
    timer(counter, 4, 1000);
    timer(counter, 3, 2000);
    timer(counter, 2, 3000);
    timer(counter, 1, 4000);
    
    setTimeout(() => {
        $('#contador').fadeOut();
        $('main').removeClass("display")
    }, 5000);
}

funcionContador();