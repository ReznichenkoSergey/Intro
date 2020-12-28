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

$(".barcode__input-value").keypress(function(event) {
  return /\d/.test(String.fromCharCode(event.keyCode));
});

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
/*
$(document).ready(function () {
  $(".main-error__text").on("DOMSubtreeModified", function () {
    if (document.querySelector(".main-error__text").innerHTML.length > 0) {
      document.querySelector(".main-error").style.display = "table";
    } else {
      document.querySelector(".main-error").removeAttribute("style");
    }
  });
});
*/

//Событие на изменение span ошибки
$(document).ready(function () {
  $(".phone__input-error").on("DOMSubtreeModified", function () {
    if (document.querySelector(".phone__input-error").innerHTML.length > 0) {
      document.querySelector(".phone__input-value").style.borderBottom =
        "1px solid #e40428";
    } else {
      document.querySelector(".phone__input-value").removeAttribute("style");
    }
  });
});

$(document).ready(function () {
  $(".otp__input-error").on("DOMSubtreeModified", function () {
    if (document.querySelector(".otp__input-error").innerHTML.length > 0) {
      document.querySelector(".otp__input-value").style.borderBottom =
        "1px solid #e40428";
    } else {
      document.querySelector(".otp__input-value").removeAttribute("style");
    }
  });
});

$(document).ready(function () {
  $(".barcode__input-error").on("DOMSubtreeModified", function () {
    if (document.querySelector(".barcode__input-error").innerHTML.length > 0) {
      document.querySelector(".barcode__input-container").style.borderBottom =
        "1px solid #e40428";
    } else {
      document
        .querySelector(".barcode__input-container")
        .removeAttribute("style");
    }
  });
});

$(document).ready(function () {
  $(".logo").on("DOMAttrModified", function () {
    console.log("DISPLAY");

    if ($(".logo").css("display") === "none") {
      alert("NONE");
    } else {
      alert("ACTIVE");
    }
  });
});

$(document).ready(function () {
  document.querySelector(".logo").addEventListener("DOMAttrModified", function () {
      if ($(".logo").css("display") === "none") {
        console.log("FFFFFFFFFFFF");
      }
      console.log("NNNNNNN");
    },
    false
  );
});


$('.logo').on('stylechanged', function () {
  console.log('css changed');
});

/*
$("#appendTo").click(function() {
  $("#moveMeIntoMain").appendTo($("#main"));
});
$("#prependTo").click(function() {
  $("#moveMeIntoMain").prependTo($("#main"));
});*/
