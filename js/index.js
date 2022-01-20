const noticeDiv = document.getElementById("notice");
const cross = document.getElementById("cross");
cross.onclick = function () {
    noticeDiv.style.display = "none";
}

// For Account section
function show_account_sec() {
    document.getElementById("account_details").style.display = "flex";
    document.getElementById("borrow_details").style.display = "none";
}
function show_borrow_sec() {
    document.getElementById("account_details").style.display = "none";
    document.getElementById("borrow_details").style.display = "table";
}
// For Edit popUp form
function show_edit_popup() {

    document.getElementById("accountEditPopUp").style.display = "block";
}
function close_edit_popup() {

    document.getElementById("accountEditPopUp").style.display = "none";
}
