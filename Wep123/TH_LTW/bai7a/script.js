function add() {
    document.getElementById("buttonAdd").style.display = "none";
    document.getElementById("ctnLuu").style.display = "block";
}
function Luu() {
    var hang = document.getElementById("luu").value;
    var list = document.getElementById("list");
    hang = hang.trim();
    if (hang == "") {
        alert("Vui lòng nhập thông tin!");
        document.getElementById("luu").focus();
        return;
    }
    var flag = true;
    for (var i = 0; i < list.options.length; i++) {
        console.log()
        if (hang.toLowerCase() == list.options[i].value.toLowerCase()) {
            flag = false;
        }
    }
    if (flag) {
        var opt = document.createElement("option");
        opt.text = hang;
        opt.value = hang;
        list.appendChild(opt);
    }
    else {
        alert("CPU đã tồn tại!")
        return;
    }
    document.getElementById("luu").value = "";
    document.getElementById("buttonAdd").style.display = "block";
    document.getElementById("ctnLuu").style.display = "none";

}
function Huy() {
    document.getElementById("luu").value = "";
    document.getElementById("buttonAdd").style.display = "block";
    document.getElementById("ctnLuu").style.display = "none";
}













