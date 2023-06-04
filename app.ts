const tableElement = document.querySelector<HTMLDivElement>('.table-content')
const addBtn = document.querySelector<HTMLAnchorElement>('#agregar')
const form = document.querySelector<HTMLFormElement>('#form')
const modal = document.querySelector<HTMLDivElement>('#modal')

addBtn?.addEventListener('click', (e: Event): void => {
    e.preventDefault()
    console.log('click');
    modal?.classList.toggle('active')
})
modal?.addEventListener('click', (e:Event) => {
    e.stopPropagation()
    e.stopImmediatePropagation()
    console.log('hokl');
    
})
interface autoObj {
    id: number | string
    anio: number | string
    color: string
    marca: string
    modelo: string
    placa: string
}

interface autoObjSinId extends Omit<autoObj, 'id'> { }

let autoForm: autoObjSinId = {
    anio: '',
    color: '',
    marca: '',
    modelo: '',
    placa: '',
}

form?.addEventListener('submit', (e: Event): void => {
    e.preventDefault()

    if (!(Object.values(autoForm).includes(''))) {
        console.log('lleno');
        fetch('https://confutatis.com.mx/',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(autoForm)
          })
            .then(response => response.json())
            .then(datos => {
                console.log(datos);
                modal?.classList.toggle('active')
                getDatos()
                
            })
            
            .catch((e:Error) => {
                console.log(e);
                modal?.classList.toggle('active')
                getDatos()
                
            })
        return
    }


})

form?.addEventListener('input', (e: Event): void => {
    e.preventDefault()
    const valueInput = e.target as HTMLInputElement
    autoForm = {
        ...autoForm,
        [valueInput.name]: valueInput.value
    }

    console.log(autoForm);

})



async function getDatos(): Promise <void> {
    const response = await fetch('https://davesystem.com.mx/')
    const datos:autoObj[] = await response.json()

    cleanTable()

    datos.forEach( auto => {
        setValuesTable(auto)
    });
}

getDatos()


function setValuesTable(autos: autoObj): void {

    const { id, marca, modelo, anio, color, placa } = autos

    const tableRow = document.createElement('div')
    tableRow.classList.add('table-row')

    const rowId = document.createElement('div')
    rowId.classList.add('table-data')
    rowId.textContent = id.toString()

    const rowAño = document.createElement('div')
    rowAño.classList.add('table-data')
    rowAño.textContent = anio.toString()

    const rowColor = document.createElement('div')
    rowColor.classList.add('table-data')
    rowColor.textContent = color

    const rowMarca = document.createElement('div')
    rowMarca.classList.add('table-data')
    rowMarca.textContent = marca

    const rowModelo = document.createElement('div')
    rowModelo.classList.add('table-data')
    rowModelo.textContent = modelo

    const rowPlaca = document.createElement('div')
    rowPlaca.classList.add('table-data')
    rowPlaca.textContent = placa

    tableRow?.appendChild(rowId)
    tableRow?.appendChild(rowMarca)
    tableRow?.appendChild(rowModelo)
    tableRow?.appendChild(rowAño)
    tableRow?.appendChild(rowColor)
    tableRow?.appendChild(rowPlaca)

    tableElement?.appendChild(tableRow)
}

function cleanTable():void {
    while (tableElement?.firstChild) {
        tableElement.removeChild(tableElement.firstChild)
    }
}