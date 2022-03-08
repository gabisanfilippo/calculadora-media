function media(){
    let nota1bim = parseFloat(document.getElementById('nota1bim').value)
    let nota2bim = parseFloat(document.getElementById('nota2bim').value)
    let nota3bim = parseFloat(document.getElementById('nota3bim').value)
    let nota4bim = parseFloat(document.getElementById('nota4bim').value)
    if(!nota1bim || !nota2bim || !nota3bim || !nota4bim){
        return document.getElementById('resultado').innerHTML = 'Por favor, preencha todos os campos'
    }
    let mediaNotas = (nota1bim + nota2bim + nota3bim + nota4bim) / 4
    document.getElementById('resultado').innerHTML = 'Sua média é ' + mediaNotas
}