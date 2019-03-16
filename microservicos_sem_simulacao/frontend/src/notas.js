const API_NOTAS = 'http://localhost:7171/api/notas/'

const renderFormNotas = () => {
    const form = `
        <div>
            <input name='id' type='hidden' />
            <div class="form-group">
                <label for="notaCNPJ">CNPJ</label>
                <input class='form-control' name='notaCNPJ' placeholder='cnpj' />
            </div>
            <div class="form-group">
                <label for="notaNum">Nº</label>
                <input class='form-control' name='notaNum' placeholder='notaNum' />
            </div>
            <div class="form-group">
                <label for="notaValor">Valor</label>
                <input class='form-control' name='notaValor' placeholder='valor' />
            </div>
        </div>`
    $('#containerNotas').append(form)
}

const renderTableNotas = () => {
    const table = `
    <table class="table" id='notas'>
        <thead>
            <tr>
                <th>cnpj</th>
                <th>número</th>
                <th>valor</th>
            </tr>
        </thead>
        <tbody id="notasRows"></tbody>
    </table>`

    $('#containerNotas').append(table)
}

const createButtonNota = (label, type) => {
    return $('<button>').addClass(`btn btn-${type}`).html(label)
}

const renderRowsNotas = notas => {
    const rows = notas.map(nota => {

        const removeButton = createButtonNota('Delete', 'danger')
        removeButton.click(() => removeNota(nota))

        return $('<tr>')
            .append($('<td>').append(nota.cnpj))
            .append($('<td>').append(nota.numero))
            .append($('<td>').append(nota.valor))
            .append($('<td>').append(removeButton))
    })
    $('#notasRows').html(rows)
}

const removeNota = nota => {
    $.ajax({
        method: 'DELETE',
        url: `${API_NOTAS}/${nota._id}`,
        success: getNotas
    })
}

const getNotas = () => {
    $.ajax({
        url: API_NOTAS,
        success: notas => renderRowsNotas(notas)
    })
}

const registrarNota = () => {
    const numero = $('[name=notaNum]').val()
    const cnpj = $('[name=notaCNPJ]').val()
    const valor = $('[name=notaValor]').val()
    $.ajax({
        method: 'POST',
        url: API_NOTAS,
        data:{ numero, cnpj, valor },
        success: getNotas
    })
}

const renderSalvarNota = () => {
  const type = 'Update'
  const label = 'Registrar Nota'

  const button = $('<button>').addClass(`btn btn-${type}`).html(label)
  button.click(() => registrarNota())
  $('#containerNotas').append(button)
}


$(() => {
    renderFormNotas()
    renderSalvarNota()
    renderTableNotas()
    getNotas()
})