const counter = document.getElementById("contadorNum");

const funcionContador = () => {
    setTimeout(() => {
        counter.innerHTML = 5;
    }, 0)
    
    setTimeout(() => {
        counter.innerHTML = 4;
    }, 1000);
    
    setTimeout(() => {
        counter.innerHTML = 3;
    }, 2000);
    
    setTimeout(() => {
        counter.innerHTML = 2;
    }, 3000);
    
    setTimeout(() => {
        counter.innerHTML = 1;
    }, 4000);
    
    setTimeout(() => {
        $('#contador').fadeOut();
    }, 5000);
}

funcionContador();