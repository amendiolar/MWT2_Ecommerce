
const producto = Array();
const existencia = Array();
const precio = Array();
const estado = Array();

function getValueInput (){
     
    const productName = document.getElementById("productDescription").value;
    const quantity = document.getElementById("productInventory").value;
    const salesPrice = document.getElementById("productPrice").value;
    const productStatus = document.getElementById("productStatus").value;

     //Prueba createRow

     const tabla = document.querySelector('tbody')

     const rowTable = document.createElement('tr');
    rowTable.className = 'productRow'

    const tdBote = document.createElement('td')
    tdBote.className = 'borrar'
    const imgBote = document.createElement('img')
    imgBote.src = "./images/trash-can_38501.png"
    imgBote.width = "20"
    imgBote.height = "20"

    const tdLapiz = document.createElement('td')
    tdLapiz.className = 'editar'
    const imgLapiz = document.createElement('img')
    imgLapiz.src = './images/pencilmono_105944.png'
    imgLapiz.width = "20"
    imgLapiz.height = "20"

    const tdProducto = document.createElement('td')
    tdProducto.className = 'producto'
    tdProducto.textContent = productName

    const tdCantidad = document.createElement('td')
    tdCantidad.className = 'stock'
    tdCantidad.textContent = quantity

    const tdPrecio = document.createElement('td')
    tdPrecio.className = 'price'
    tdPrecio.textContent = salesPrice
 
    const tdEstado = document.createElement('td')
    tdEstado.className = 'status'
    tdEstado.textContent = productStatus

    tdBote.append(imgBote);
    tdLapiz.append(imgLapiz);

    rowTable.append(tdBote, tdLapiz, tdProducto, tdCantidad, tdPrecio,tdEstado);

    tabla.appendChild(rowTable);

    console.log(rowTable)

    producto.push(productName);
    existencia.push(quantity);
    precio.push(salesPrice);
    estado.push(productStatus)

    console.log(producto)

}



function tableToCSV() {
 
    // Variable to store the final csv data
    var csv_data = [];

    // Get each row data
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {

        // Get each column data
        var cols = rows[i].querySelectorAll('td,th');

        // Stores each csv row data
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {

            // Get the text data of each cell
            // of a row and push it to csvrow
            csvrow.push(cols[j].innerHTML);
        }

        // Combine each column value with comma
        csv_data.push(csvrow.join(","));
    }

    // Combine each row data with new line character
    csv_data = csv_data.join('\n');

    // Call this function to download csv file 
    downloadCSVFile(csv_data);

}



function downloadCSVFile(csv_data) {

    // Create CSV file object and feed
    // our csv_data into it
    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });

    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement('a');

    // Download csv file
    temp_link.download = "inventory.csv";
    var url = window.URL.createObjectURL(CSVFile);
    console.log(url)
    temp_link.href = url;
  

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
}








function createPurchase (){
     

     //Crear menu de seleccion

     const menu = document.querySelector('#menuCompra')

     const divProd = document.createElement('div');
    divProd.className = 'productSelect'

    const selProd = document.createElement('select')
    selProd.className = 'selectorProducto'
 
    producto.forEach((p) =>{
        const optProd = document.createElement('option')
        optProd.textContent = p
    })
    
    selProd.append(optProd);

    menu.appendChild(selProd);

    console.log(menu)

}






/*
    //costruccion de arreglo
    function Mercancia (descripcion, existencia, precio, estado){
        this.mercaderia= {
            'descripcion': descripcion,
            'existencia': existencia,
            'precio': precio,
            'estado': estado
        };
    
    const bien = new Mercancia(productName, quantity, salesPrice,productStatus);

    const tienda = Array();
    tienda.push(bien)

    console.log(tienda)



const tabla = document.querySelector('tbody')

function createRow(productName, quantity,salesPrice,productStatus){
    const rowTable = document.createElement('tr');
    rowTable.className = 'productRow'

    const tdBote = document.createElement('td')
    tdBote.className = 'borrar'
    const imgBote = document.createElement('img')
    imgBote.src = "./images/trash-can_38501.png"

    const tdLapiz = document.createElement('td')
    tdLapiz.className = 'editar'
    const imgLapiz = document.createElement('img')
    imgLapiz.src = './images/pencilmono_105944.svg'

    const tdProducto = document.createElement('td')
    tdProducto.className = 'producto'
    tdProducto.textContent = productName

    const tdCantidad = document.createElement('td')
    tdCantidad.className = 'stock'
    tdCantidad.textContent = quantity

    const tdPrecio = document.createElement('td')
    tdPrecio.className = 'price'
    tdPrecio.textContent = salesPrice
 
    const tdEstado = document.createElement('td')
    tdEstado.className = 'status'
    tdEstado.textContent = productStatus

    tdBote.append(imgBote);
    tdLapiz.append(imgLapiz);

    rowTable.append(tdBote, tdLapiz, tdProducto, tdCantidad, tdPrecio,tdEstado);

}
*/



