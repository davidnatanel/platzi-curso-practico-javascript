

// Código del cuadrado 
console.group("Cudrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden; " + ladoCuadrado + "cm");

function  perimetroCuadrado(lado) {

    return lado * 4 + "cm";

}


//console.log("El perímetro del cuadrado es; " + perimetoCuadrado + "cm");


function areaCuadrado(lado){

 return lado * lado + "cm^2";
}


//console.log("El area del cuadrado es; " + areaCuadrado + "cm^2");
console.groupEnd();




// Código del triángulo

console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo  = 4;
// 
// 
// 
// console.log(
// "Los lados del triángulo miden; " 
// + ladoTriangulo1 
// + "cm, " 
// + ladoTriangulo2 
// + "cm, "
// + baseTriangulo
// + "cm"
// );

// 
// const alturaTriangulo = 5.5;
// 
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");
    
function perimetroTriangulo(lado1 , lado2 , base) {
    return lado1 + lado2 + base + "cm"; 

} 
    
// console.log("El perímetro del Triángulo es; " + perimetroTriangulo + "cm");



function areaTriangulo(base, altura) {
    return (base * altura) / 2 + "cm^2";

} 



// console.log("El área del triángulo es; " + areaTriangulo + "cm^2");


console.groupEnd();









// Código del Círculos

console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");


// Diámetro

function diametroCirculo(radio){

    return radio * 2  ;

}


// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del circulo es: " + diametroCirculo + "cm");



//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");



// Circuferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI  ;


}



// Área
function areaCirculo(radio){

    return (radio * radio) * PI + "cm";

}





// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del circulo es: " + areaCirculo + "cm^2");





console.groupEnd();




// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}





function calcularAreaCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 
    const area = perimetroCuadrado(value);
    alert(area);



}




// function alturaTrianguloIsosceles(ladoA, ladoB, ladoBase) {
    // if (ladoA != ladoB) {
        // console.error("Los lados a y b no son iguales");
    // } else {
        // ...
    // }
// }
// 
// 
// 
// function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    // if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        // console.error("Los lados a y b no son iguales");
    // } else {
        // let trianguloPequenoLadoA; // PENDIENTE
        // const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        // const trianguloPequenoLadoBase = trianguloGrandeLadoA;
// 
        // ...
// 
        // const trianguloGrandeAltura = trianguloPequenoLadoA;
        // return trianguloGrandeAltura;
    // }
// }
// 











