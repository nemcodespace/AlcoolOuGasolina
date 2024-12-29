
function calcularMelhorPreco() {
    
    //validar campos
    
    let precoAlcool = document.getElementById("alcool").value
    
    let precoGasolina = document.getElementById("gasolina").value
    
    
    if (precoAlcool != "") {
        if (precoGasolina != "") {
            
            
            // calcular preços
            /*
             se o valor do alcool / valor da gasolina >= 0.7 é melhor usar a gasolina 
             se não é melhor usar o álcool 
            */
            
            let resultado = precoAlcool / precoGasolina
            
            if (resultado >= 0.7){
    document.getElementById("resultado").innerHTML = "melhor usar gasolina"
            }else {
    document.getElementById("resultado").innerHTML = "melhor usar álcool"     
            }
            
            
        }else {
            alert("digite o preço da gasolina")
        }
    }else {
        alert("digite o preço do álcool")
    }
    
    
}
