function perForm() {
    var select = document.getElementById("select")
    var inport = document.getElementById("import").value;
    if (inport == '') {
        document.getElementById("import").focus();
        alert("Nhap chuoi")
        return;
    }
    var arr = select.split(',');
    for (var i = 0; i < arr.length; i++) {
        var check = true;
        for (var j = 0; j < select.options.length; j++) {
            if (select[i].trim().toUpperCase() == select.options[j].text.trim().toUpperCase()) {
                check = false;
                break;
            }
        }

    }

}