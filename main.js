if (
    window.localStorage.getItem("mail") &&
    window.localStorage.getItem("password")
) {
    console.log("Found");
    document.getElementById("myEmail").value =
        window.localStorage.getItem("mail");
    document.getElementById("myPassword").value =
        window.localStorage.getItem("password");
}
document.getElementById("myEmail").onblur = function() {
    window.localStorage.setItem("mail", this.value);
    this.value = window.localStorage.getItem("mail");
};
document.getElementById("myPassword").onblur = function() {
    window.localStorage.setItem("password", this.value);
    this.value = window.localStorage.getItem("password");
};