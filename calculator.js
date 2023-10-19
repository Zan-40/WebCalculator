function Sumar(){
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var suma = parseFloat(num1) + parseFloat(num2);
    window.alert(num1 + " + " + num2  + " = " + suma);
}
function Restar(){
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var suma = parseFloat(num1) - parseFloat(num2);
    window.alert(num1 + " - " + num2  + " = " + suma);
}
function Multiplicar(){
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var suma = parseFloat(num1) * parseFloat(num2);
    window.alert(num1 + " x " + num2  + " = " + suma);
}
function Dividir(){
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var suma = parseFloat(num1) / parseFloat(num2);
    window.alert(num1 + " / " + num2  + " = " + suma);
}