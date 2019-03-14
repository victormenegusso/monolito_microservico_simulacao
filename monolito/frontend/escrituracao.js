const API_ESCRITURACAO = 'http://localhost:7070/api/escrituracao/'

const renderTableLancamentos = () => {
  const table = `
    <table class="table" id='lancamentos'>
        <thead>
            <tr>
                <th>cnpj</th>
                <th>contaDebito</th>
                <th>contaCredito</th>
                <th>valor</th>
            </tr>
        </thead>
        <tbody id="lancamentosRows"></tbody>
    </table>`

  $('#containerEscrituracao').append(table)
}

const renderRowsLancamentos = lancamentos => {
  const rows = lancamentos.map(lancamento => {
    return $('<tr>')
      .append($('<td>').append(lancamento.cnpj))
      .append($('<td>').append(lancamento.contaDebito))
      .append($('<td>').append(lancamento.contaCredito))
      .append($('<td>').append(lancamento.valor))
  })
  $('#lancamentosRows').html(rows)
}

const getLancamentos = () => {
  $.ajax({
    url: API_ESCRITURACAO,
    success: lancamentos => {
      renderRowsLancamentos(lancamentos)
    }
  })
}

const renderEscriturar = () => {
  const type = 'Update'
  const label = 'Escriturar'

  const input = $('<input>').attr('name', 'cnpjEscrituracao').html(label)
  $('#containerEscrituracao').append(input)

  const button = $('<button>').addClass(`btn btn-${type}`).html(label)
  button.click(() => escriturar())
  $('#containerEscrituracao').append(button)
}

const escriturar = () => {
  const cnpj = $("input[name='cnpjEscrituracao']").val()
  $.ajax({
      method: 'POST',
      url: `${API_ESCRITURACAO}`,
      data: {cnpj},
      success: getLancamentos
  })
}


$(() => {
  renderEscriturar()
  renderTableLancamentos()
  getLancamentos()
})