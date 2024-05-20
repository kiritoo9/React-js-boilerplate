import Swal from "sweetalert2";

function showLoading() {
    Swal.showLoading();
}

function close() {
    Swal.close();
}

function showMessage(title, icon, text) {
    const availableIcons = [
        "success",
        "error",
        "warning",
        "info",
        "question"
    ];

    if(!availableIcons.includes(icon)) icon = "warning"; // set default if icon doesn't found
    Swal.fire({title, icon, text});
}

function showConfirm() {
    return Swal.fire({
        title: "Apa anda yakin?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Simpan",
        cancelButtonText: "Batal",
    });
}

export default {
    showLoading,
    close,
    showMessage,
    showConfirm
}