function Processar() {

    //Saida sempre começa com nada
    saida.innerHTML = ` `

    //Valores de Entrada
    d = Number(document.getElementById('dia').value); //Dia
    m = Number(document.getElementById('mes').value); //Mês
    a = Number(document.getElementById('ano').value); //Ano

    //Condições para anos bissextos e não bissextos
    if (a % 4 == 0) {
      t = 366 //se bissexto
      fevereiro = 29
    } else {
      t = 365 //não bissexto)
      fevereiro = 28
    }

    //Definição dos meses do ano e seus respectivos dias
    janeiro = março = maio = julho = agosto = outubro = dezembro = 31
    abril = junho = setembro = novembro = 30

    meses = [janeiro, fevereiro, março, abril, maio, junho, julho,
            agosto, setembro, outubro, novembro, dezembro]

    //Validação de Dados
    if (d < 1 || d > 31 || m < 1 || m > 12 || a > 2030 || a < 2021) {
      alert(`Por favor, digite uma data válida!`)
    } else if (d > 28 && meses[m-1] < d) {
      alert(`Este mês não possui o dia ${d}!`)
    } else {

      //Calculo do Lote
      for (var c = lote = 0 ; (m - 1) > c ; c++) {
        lote += meses[c]
      }
      lote += d

      //Calculo da Validade dentro do mesmo ano
      v = lote + 180 //dia da validade
      i = 0 //mês inicial
      do {
          v -= meses[i]
          i++
      } while(v > meses[i]);

      //Calculo da Validade para Ano Seguinte
      if (i > 11) {
          i = 0 //inicia contando janeiro em diante
          a++  //ano atual para ano seguinte

          //Verificar se o ano seguinte é bissexto
          if (a % 4 == 0) {
              fevereiro = 29
              t = 366
              meses = [janeiro, fevereiro, março, abril, maio, junho,
                julho, agosto, setembro, outubro, novembro, dezembro]
          } else{
              fevereiro = 28
              t = 365
              meses = [janeiro, fevereiro, março, abril, maio, junho,
                julho, agosto, setembro, outubro, novembro, dezembro]
          }
          //Contagem dos meses do próximo ano
          if (v > meses[i]) { //Se for maior que janeiro
            do {
                v = v - meses[i]
                i++
            } while(v > meses[i]);
          }
      }
      m = i + 1 //Mês final são os meses "cheios" + mes atual(1)

      //Passar Valores para String
      const dia = `${v}`
      const mes = `${m}`
      const lipa = `${lote}`

      //Resultado
      saida.innerHTML += `Lagunitas IPA <br>`
      saida.innerHTML += `Validade: ${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${a} <br>`;
      saida.innerHTML += `Lote: L1${lipa.padStart(3, '0')}076CM`;
    }
  }