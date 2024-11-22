function add() {
    var txtName = document.getElementById("txtName");
    var txtHang = document.getElementById("txtHang");
    var dNgayRM = document.getElementById("dNgayRM");
    var iPrice = document.getElementById("iPrice");
    var notiError = "";
    var flag = true;
    var check = [txtName, txtHang, dNgayRM, iPrice];
    for (var i = check.length - 1; i >= 0; i--) {
        if (check[i].value.trim() == "") {
            notiError += "" + check[i].name + " không được để trống \n";
            flag = false;
            check[i].classList.add("border_red");
            check[i].focus();
        } else {
            check[i].classList.remove("border_red");
        }

    }
    if (Number.isInteger(iPrice.value)) {
        notiError += "Giá phải là số nguyên\n";
        iPrice.classList.add("border_red");
        iPrice.focus();
        flag = false;
    }
    var cur = new Date;
    if (new Date(dNgayRM.value) > (new Date(cur.getFullYear() + "-" + parseInt(cur.getMonth() + 1) + "-" + parseInt(cur.getDate() + 1)))) {
        dNgayRM.classList.add("border_red");
        notiError += "Ngày sản xuất phải nhỏ hơn ngày hiện tại!\n";
        dNgayRM.focus();
        flag = false;
    }
    if (!Number.isInteger(iPrice.value) && parseInt(iPrice.value) < 0) {
        notiError += "Giá phải lớn hơn 0\n";
        iPrice.classList.add("border_red");
        iPrice.focus();
        flag = false;
    }

    notiError += "Vui lòng nhập lại!";
    if (!flag) {
        alert(notiError);
        return false;
    }
    return flag;





}
function format(a) {
    var ans = "";
    a = parseInt(a);
    while (a > 1000) {
        var temp = a % 1000;
        temp = temp + "";
        while (temp.length < 3) {
            temp = "0" + temp;
        }
        temp = "." + temp;
        ans = temp + ans;
        a = parseInt(parseInt(a) / 1000);
    }
    ans = a + ans;
    return ans;
}
function SanPham(name, hang, ngayRM, price) {
    this.name = name;
    this.hang = hang;
    this.ngayRM = ngayRM;
    this.price = price;
    this.compare = function (sp2) {
        if (this.name.trim().toLowerCase() == sp2.name.trim().toLowerCase() && this.hang.trim().toLowerCase() == sp2.hang.trim().toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
    return this;
}