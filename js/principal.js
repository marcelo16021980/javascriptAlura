var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length;  i++){

    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector('.info-peso');
    var peso=tdPeso.textContent;
    
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector('.info-imc');
    alturaEhValida = true;
    pesoEhValido = true;
    
    if (peso <= 0 || peso >= 300) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add('paciente-invalido')

    }
    if (altura<0 || altura>=3){
       alturaEhValida = false;
       tdAltura.textContent = 'Altura Inválida'
       paciente.style.backgroundColor='lightcoral';
       
    }
    
    if(pesoEhValido && alturaEhValida){
    var imc = peso / (altura* altura);
    tdImc.textContent = imc.toFixed(2);}
    
    
}

