$(window).load(function () {
  var phones = [{ mask: "+38 (0##) ### ## ##" }];
  $("#phone").inputmask({
    mask: phones,
  });
});

/*Валидация телефона*/
function formPhoneValidate() {
  let x = document.querySelector(".phone__rules-checkbox").checked;
  let phoneValue = document.querySelector(".phone__input-value").value;
  let value = phoneValue.replace(/[^+0-9]/g, "");
  document.querySelector("#phonenumber").value = value;
  if (value.length === 0) {
    document.querySelector(".phone__input-value").style.borderColor = null;
  } else {
    if (value.length === 13) {
      document.querySelector(".phone__input-error").innerHTML = "";
    } else {
      document.querySelector(".phone__input-error").innerHTML =
        "Некорректний код мобiльного оператора";
    }
  }
  document.querySelector(".phone__submit-button").disabled = !(
    value.length === 13 && x
  );
}

/*Валидация ОТП кода*/
function formOtpValidate() {
  let otp = document.querySelector(".otp__input-value");
  document.querySelector(".otp__submit-button").disabled = !(
    otp.value.length === 6
  );
}
/*Валидация карты*/
function formBarcodeValidate() {
  let otp = document.querySelector(".barcode__input-value");
  document.querySelector(".barcode__submit-button").disabled = !(
    otp.value.length === 13
  );
}

$(".btn").click(function () {
  $(".user-location").text("New Text");
});
$(".user-location").on("DOMSubtreeModified", function () {
  alert("changed");
});

function showHideCommonError() {
  debugger;
  console.log("OK");
  let x = document.querySelector(".flow-error");
  if (x.innerHTML.length > 0) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function sample() {
  let x = document.querySelector(".flow-error");
  let rrr = document.querySelector("#rrr");
  console.log(x);
  console.log(rrr);
  x.innerHTML = rrr.value;
}

//Событие на изменение span ошибки
$(document).ready(function () {
  $(".main-error__text").on("DOMSubtreeModified", function () {
    if (document.querySelector(".main-error__text").innerHTML.length > 0) {
      document.querySelector(".main-error").style.display = "table";
    } else {
      document.querySelector(".main-error").style.display = "none";
    }
  });
});
