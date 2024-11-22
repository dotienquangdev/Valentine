function hi() {
    var tbl = document.getElementById("table");
    var row = tbl.insertRow(tbl.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = tbl.rows.length - 1;
    cell2.innerHTML = document.getElementByid("hovaTen").value;
    cell3.innerHTML = document.getElementByid("hgaySinh").value;
    var gens = document.getElementsByName("gender");
    for (var i = 0; i < gens.length; i++) {
        if (gens[i].checked) {
            cell4.innerHTML = gens[i].value;
        }
    }
}


//
