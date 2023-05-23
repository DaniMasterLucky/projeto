
function menu() {
    let opcao;

    do {
        opcao = Number(prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
            1. Cadastrar doador
            2. Listar doadores
            3. Buscar doador por tipo sanguíneo
            4. Buscar doador pela última data de doação
            5. Sair
            Escolha uma opção:`));

        if (opcao === 1) {
            cadastrarDoador();
        } else if (opcao === 2) {
            listarDoador();
        } else if (opcao === 3) {
            buscarPorTipoSanguineo();
        } else if (opcao === 4) {
            BuscarUltimadataSangue()
        }
    } while (opcao !== 5);  
       
}        



function cadastrarDoador() {
    let opcaoCadastro;

    do {
        opcaoCadastro = Number(prompt(`Escolha uma opção:
            1. Cadastrar
            2. Voltar`));

        if (opcaoCadastro === 1) {
            const nome = prompt("Qual seu nome?");
            const idade = Number(prompt("Qual sua idade?"));
            const peso = prompt("Qual seu peso?");
            const tipoSanguinio = prompt("Qual seu tipo sanguíneo?");
            const ultimaDoacao = prompt("Digite a última data da sua doação de sangue");

            console.log(`O usuário é chamado de ${nome} e tem ${idade} anos, pesa ${peso} kg e seu tipo sanguíneo é ${tipoSanguinio}. A última vez que doou sangue foi em ${ultimaDoacao}.`);
        }
    } while (opcaoCadastro !== 2);
}

function listarDoador() {
    let opcaoListar;

    do {
        opcaoListar = Number(prompt(`Escolha uma opção:
            1. Listar Doadores
            2. Voltar`));

        if (opcaoListar === 1) {
            alert(`--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------   
João da Silva    |  25   |  70  |      AB-       |   01/01/2022  
Maria Santos     |  35   |  65  |      A+        |   03/02/2022  
José Almeida     |  45   |  80  |      O+        |   10/01/2022  
Ana Oliveira     |  27   |  58  |      B-        |   22/04/2022  
Carlos Silva     |  30   |  75  |      A-        |   14/03/2022  
-----------------------------------------------------------------`);
        }
    } while (opcaoListar !== 2);
}

function buscarPorTipoSanguineo() {
  let opcaoBuscarTipoSanguineo;

  do {
      opcaoBuscarTipoSanguineo = Number(prompt(`Escolha uma opção:
          1. Buscar doador por tipo sanguíneo
          2. Voltar`));

      if (opcaoBuscarTipoSanguineo === 1) {
          const tipoSanguineoBusca = prompt("Digite o tipo sanguíneo que deseja buscar:");
          let resultadoBusca = "";

          if (tipoSanguineoBusca === "A-") {
              resultadoBusca = `------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
Carlos Silva     |  30   |  75  |      A-        |   14/03/2022  
-----------------------------------------------------------------`;
          } else if (tipoSanguineoBusca === "A+") {
              resultadoBusca = `------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
Maria Santos     |  35   |  65  |      A+        |   03/02/2022  
-----------------------------------------------------------------`;
          } else {
              resultadoBusca = "Nenhum doador encontrado com o tipo sanguíneo especificado.";
          }

          alert(resultadoBusca);
      }
  } while (opcaoBuscarTipoSanguineo !== 2);
}


function BuscarUltimadataSangue() {
    let opcaoUltimaData;
  
    do {
      opcaoUltimaData = Number(prompt(`Escolha uma opção:
          1. Buscar doador por data da última doação
          2. Voltar`));
  
      if (opcaoUltimaData === 1) {
        const dataBusca = prompt("Digite a data desejada (dd/mm/aaaa):");
        let resultadoBusca = "";
  
        
        const doadores = [
          {
            nome: "Calito Teves",
            idade: 35,
            peso: 65,
            tipoSanguineo: "A+",
            ultimaDoacao: "20/02/2022",
          },
          {
            nome: "Carla Maria",
            idade: 30,
            peso: 75,
            tipoSanguineo: "A-",
            ultimaDoacao: "12/03/2022",
          },
          {
            nome: "João Silva",
            idade: 40,
            peso: 80,
            tipoSanguineo: "B+",
            ultimaDoacao: "10/03/2022",
          },
          {
            nome: "Maria Santos",
            idade: 25,
            peso: 60,
            tipoSanguineo: "O+",
            ultimaDoacao: "10/03/2022",
          },
        ];
  
        const dataBuscaDate = parseDate(dataBusca);
  
        const doadoresEncontrados = doadores.filter((doador) => {
          const dataDoacao = parseDate(doador.ultimaDoacao);
          return dataDoacao.getTime() === dataBuscaDate.getTime();
        });
  
        if (doadoresEncontrados.length > 0) {
          resultadoBusca = `------------------------
  RESULTADO DA BUSCA:
  ------------------------
  NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
  -----------------------------------------------------------------\n`;
  
          for (const doador of doadoresEncontrados) {
            resultadoBusca += `${doador.nome}     |  ${doador.idade}   |  ${doador.peso}  |      ${doador.tipoSanguineo}        |   ${doador.ultimaDoacao}\n`;
          }
  
          resultadoBusca += `-----------------------------------------------------------------`;
        } else {
          resultadoBusca = "Nenhum doador encontrado com a data especificada.";
        }
  
        alert(resultadoBusca);
      }
    } while (opcaoUltimaData !== 2);
  }
  
  function parseDate(dateString) {
    const dateComponents = dateString.split(/[/\/]/);
    const day = parseInt(dateComponents[0], 10);
    const month = parseInt(dateComponents[1], 10) - 1;
    const year = parseInt(dateComponents[2], 10);
    return new Date(year, month, day);
  }
  
  
  
  menu()