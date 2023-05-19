


function menu () {
    var opcao = Number(prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
    1. Cadastrar doador
    2. Listar doadores
    3. Buscar doador por tipo sanguíneo
    4. Buscar doador por data da última doação
    5. Sair
    Escolha uma opção:`))

}


let teste2 = false

 while(!teste2){
 const opcao = Number(prompt("1 - Cadastrar\n5 - Sair"))
 if (opcao ===1){

    const nome = prompt("Qual seu nome?")
    const idade = Number(prompt("Qual sua idade?"))
    const peso = prompt("Qual seu peso?")
     const tiposanguinio = prompt("Qual seu tipo sanguínio?")
    const ultimadoacao = prompt("Digite a última data da sua doação de sangue")
console.log(`o usuário é chamado de ${nome} e tem ${idade}, e pesa ${peso} e seu tipo sanguíneo é ${tiposanguinio} e sua última vez que doou sangue foi ${ultimadoacao}`)
}else if (opcao ===5){

teste2 = true


}
}
