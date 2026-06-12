const oldBook = Number(prompt("Nhập vào số lượng sách cũ"));
const newBook = Number(prompt("Nhập vào số lượng sách mới"));

if (isNaN(oldBook) || isNaN(newBook)) {
    alert("Vui lòng nhập đúng quy định (phải là số)");
} else if (oldBook < 0 || newBook < 0) {
    alert("Số lượng sách phải lớn hơn 0");
} else {
    alert(`Thư viện hiện có ${oldBook + newBook} cuốn sách.`);
}
