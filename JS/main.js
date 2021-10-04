// BAI 1: TINH TIEN LUONG 
/**
 * Khói 1: Nhập giá trị cho lương một ngày, số ngày
 * 
 * Khối 2:
 * Set up funtion:
 * - tạo biến và lấy giá trị cho lương một ngày, số ngày
 * - Lặp công thức tổng lương = lương một ngày x số ngày.
 *
 * 
 * Khối3: xuát giá trị tổng lương sau khi click vào nút button tính lương.
 */

function tinhLuong () {
    var luong = document.getElementById("luongMotNgay").value;
    var ngay = document.getElementById("soNgayLam").value;
    var tongLuong = luong*ngay;
    document.getElementById("txtLuong").innerHTML = "TỔNG LƯƠNG CỦA BẠN LÀ: " + tongLuong;
}
document.getElementById("btnLuong").onclick = tinhLuong;


// BAI 2: TRUNG BÌNH 5 SỐ THỰC 
/**
 * Khói 1: Nhập giá trị cho 5 số thực.
 * 
 * Khối 2:
 * Set up funtion:
 * - tạo biến và lấy giá trị cho 5 số thực.
 * - Lặp công thức tính trung bình
 * 
 * Khối3: xuát giá trị tổng lương sau khi click vào nút button tính lương.
 */


function trungBinhCong () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num4").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    var trungBinhCong = (Number(num1) + Number(num2) +Number(num3) +Number(num4) +Number(num5))/5;
    document.getElementById("txtTrungBinhCong").innerHTML = "GIÁ TRỊ TRUNG BÌNH: " + trungBinhCong;
}
document.getElementById("btnTrungBinhCong").onclick = trungBinhCong;

// BAI 3 QUY DOI SANG VND 
/**
 * Khói 1: Nhập giá trị số USD.
 * 
 * Khối 2:
 * Set up funtion:
 * - tạo biến và lấy giá trị cho số USD.
 * - Lặp công thức quy đổi
 * 
 * Khối3: xuát giá trị quy đổi sau khi click vào nút button 
 */

function quyDoi () {
    var soUSD = document.getElementById("soUSD").value;
    var quyDoi = soUSD*23500;
    document.getElementById("txtQuyDoi").innerHTML = "SỐ TIỀN QUY ĐỔI LÀ: " + quyDoi + " VND";
}
document.getElementById("btnQuyDoi").onclick = quyDoi;

// BAI 4: TINH DIEN TICH , CHU VI 
/**
 * Khói 1: Nhập giá trị số chiều dài, chiều rộng.
 * 
 * Khối 2:
 * Set up funtion:
 * - tạo biến và lấy giá trị cho chiều dài, chiều rộng.
 * - Lặp công thức tính diện tích, chu vi.
 * 
 * Khối3: xuát giá trị diện tích, chu vi sau khi click vào nút button 
 */

function dienTich_ChuVi () {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    var dienTich = chieuDai*chieuRong;
    var chuVi =  (Number(chieuDai) + Number(chieuRong))*2;
    document.getElementById("txtdienTich_Chuvi").innerHTML = "DIỆN TÍCH LÀ: " + dienTich + ", CHU VI LÀ: " + chuVi;
}
document.getElementById("btndienTich_Chuvi").onclick = dienTich_ChuVi;


// BAI 5: TỔNG 2 KÝ SỐ 
/**
 * Khói 1: Nhập giá trị số 2 chu so.
 * 
 * Khối 2:
 * Set up funtion:
 * - tạo biến và lấy giá trị cho số hàng đơn vị, hàng chục.
 * - Lặp công thức tính tổng ký số.
 * 
 * Khối3: xuát giá trị tổng ký số sau khi click vào nút button 
 */

function tongKySo () {
    var unit = document.getElementById("so2Chuso").value % 10;
    var ten = Math.floor(document.getElementById("so2Chuso").value / 10);
    console.log(unit,ten)
    var tongKySo = Number(unit) + Number(ten);
    document.getElementById("txtTongKySo").innerHTML = "TỔNG KÝ SỐ LÀ: " + tongKySo;
}
document.getElementById("btnTongKySo").onclick = tongKySo;


