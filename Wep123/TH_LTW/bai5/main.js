
function thucHien() {
    var select = document.getElementById("list");
    var txtChuoi = document.getElementById("txtChuoi").value;
    var arr = txtChuoi.split(',');
    if (txtChuoi == '') {
        document.getElementById("txtChuoi").focus();
        alert("Không được để trống mục chuỗi!")
        return;
    }
    for (var i = 0; i < arr.length; i++) {
        var check = true;
        for (var j = 0; j < select.options.length; j++) {
            if (arr[i].trim().toUpperCase() == select.options[j].text.trim().toUpperCase()) {
                check = false;
                break;
            }
        }
        if (!check || arr[i].trim() == '') continue;
        var opt = document.createElement("option");
        opt.text = arr[i].trim();
        opt.value = arr[i].trim();
        select.appendChild(opt);
    }

}
function chose() {
    var txtNoti = select.options[select.selectedIndex].text;
    alert("Bạn đã chọn " + txtNoti);
}
select.addEventListener("change", chose);


// function thuchien() {
//     var textBox = document.getElementById("textBox").value;
//     if (textBox == "") {
//         alert("Chuỗi rỗng, nhập dữ liệu");
//         document.getElementById("textBox").focus();
//     }
//     var array = textBox.split(",");
//     var select = document.getElementById("danhsach");
//     var length = select.options.length;
//     for (i = 0; i < length; i++) {
//         select.remove(select.options[0]);
//         var checkBox = [... new Set(select)]
//     }

//     array.forEach(function (op) {
//         op = op.trim();
//         if (op != "") {
//             var option = document.createElement("option");
//             option.text = op;
//             select.add(option);
//         }
//     }, this);
//     return checkBox;
// }

// // function check(array) {
// //     //Check phan tu giong nhau
// //     var array = textBox.split(",");
// //     let array = [...new Set(array)];
// //     let inCheck = array.join();
// //     return inCheck;
// // }

// function change() {
//     var selectBox = document.getElementById("danhsach");
//     var selectedValue = selectBox.options[selectBox.selectedIndex].value;
//     alert("Bạn đã chọn mục: " + selectedValue);
// }
// function huy() {
//     document.getElementById("textBox").value = "";
// }


// //

// // function nextIn() {
// //     var inputtt = document.getElementById("input").value;
// //     if (inputtt == "  ") {
// //         alert("Nhap chuoi");
// //         document.getElementById("input").focus();
// //     }
// //     var arrayCammo = inputtt.split(",");
// //     var addInput34 = document.getElementById("add123");
// //     var length = addInput34.options.length;
// //     for (var i = 0; i < length; i++) {
// //         addInput34.remove(addInput34.options[0]);
// //     }
// //     arrayCammo.forEach(function (cell) {
// //         cell = cell.trim();
// //         if (cell != "") {
// //             var option = document.createElement("option");
// //             option.text = cell;
// //             addInput34.add(option);
// //         }
// //     }, this);
// // }

// // function change() {
// //     var addInputnext = document.getElementById("add123");
// //     var selectedValue = addInputnext.options[addInputnext.selectedIndex].value;
// //     alert("ban chon:" + selectedValue);
// // }
// // function huy() {
// //     document.getElementById("add123").value = "";
// // }

