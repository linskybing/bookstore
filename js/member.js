window.onload = initForm;
function initForm() {
  var osel = document.getElementById("sel");
  osel.selectedIndex = 0;
  osel.onchange = jumpPage;
}
function jumpPage() {
  var osel = document.getElementById("sel");
  var newURL = osel.options[osel.selectedIndex].value;
  if (newURL != "") {
    window.location.href = newURL;
  }
}

/*上傳預覽圖片*/
function readURL(input) {

  if (input.files && input.files[0]) {

    var imageTagID = input.getAttribute("targetID");

    var reader = new FileReader();

    reader.onload = function (e) {

      var img = document.getElementById(imageTagID);

      img.setAttribute("src", e.target.result)

    }

    reader.readAsDataURL(input.files[0]);

  }

}
