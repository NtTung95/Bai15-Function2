let sanpham = ['Nokia', 'iPhone', 'Xiaomi','Samsung'];

function table() {
    let html ='';
    for (let i = 0; i < sanpham.length; i++) {
        html += "<tr>"
            html += "<td class='stt'>"
                html += i +1
            html += "</td>"
            html += "<td id='item'>"
                html += sanpham[i]
            html += "</td>"
            html += "<td style='text-align: center'>"
                html += "<input type='button' value='Remove' onclick='removeSomething()'>"
            html += "</td>"
        html += "</tr>"
    }
    document.getElementById("display").innerHTML = html
}

function add() {
    let newItem = document.getElementById("addSomething").value
    sanpham.push(newItem);
    document.getElementById("addSomething").value = ""
    table();
}

function removeSomething() {
    sanpham.splice(sanpham.indexOf(document.getElementById('item').value),1)
    table();
}

table();


