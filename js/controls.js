$(window).load(function () {
  var phones = [{ mask: "+38 (0##) ### ## ##" }];
  $("#phone").inputmask({
    mask: phones,
  });
});

/*Валидация телефона*/
/*function formPhoneValidate() {
  let x = document.querySelector(".phone__rules-checkbox").checked;
  let phoneValue = document.querySelector(".phone__input-value").value;
  let value = phoneValue.replace(/[^+0-9]/g, "");
  console.log(value);
  document.querySelector(".phone__submit-button").disabled = !(value.length === 13 && x);
}
*/
/*
$(window).load(function () {
  $(".phone__rules-checkbox").checked;
  $(".phone__input-value").value;
});
*/
function formPhoneValidate() {
  let x = document.querySelector(".phone__rules-checkbox").checked;
  let phoneValue = document.querySelector(".phone__input-value").value;
  let value = phoneValue.replace(/[^+0-9]/g, "");
  console.log(value);
  document.querySelector(".phone__submit-button").disabled = !(
    value.length === 13 && x
  );
}
/*
$(window).load(function () {
  //alert("Load");

  let x = document.querySelector(".phone__rules-checkbox").checked;

  //alert(x);

  let phoneValue = document.querySelector(".phone__input-value").value;
  let value = phoneValue.replace(/[^+0-9]/g, "");
  console.log(value);
  document.querySelector(".phone__submit-button").disabled = !(
    value.length === 13 && x
  );

});*/

/*
$(document).ready(function(){
  console.log("asdasdasdas");
  formPhoneValidate();
});*/

/*Валидация ОТП кода*/
function formOtpValidate() {
  let otp = document.querySelector(".otp__input-value");
  if (otp.value.length === 6) otp.blur();
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

$(".barcode__input-value").bind("keydown", function (e) {
  if (e.which === 8 || e.which === 46 || e.which === 39 || e.which === 37)
    return true;
  if (e.which < 48 || e.which > 57) return false;
  return true;
});

$(".otp__input-value").bind("keydown", function (e) {
  if (e.which === 8 || e.which === 46 || e.which === 39 || e.which === 37)
    return true;
  if (e.which < 48 || e.which > 57) return false;
  return true;
});

$(".phone__input-value").bind("keydown", function (e) {
  console.log(e.which);

  let value = $(".phone__input-value").val();
  if (value.length === 0 && e.which === 48) {
    return false;
  }
  if (e.which === 8 || e.which === 46 || e.which === 39 || e.which === 37)
    return true;
  if (e.which < 48 || e.which > 57) return false;
  return true;
});

window.onload = function () {
  console.log("dddd");
  let phoneValue = document.querySelector(".otp__input-value");
  console.log(phoneValue);
  if (phoneValue !== null) {
    formOtpValidate();
  }
};

/*
$(".phone__input-value").bind("keydown", function (e) {
  console.log(e.which);

  let value = $(".phone__input-value").val();
  console.log(value.length);
  if (value.length === 0 && e.which === 48) {
    return false;
  }
  if (e.which < 48 || e.which > 57) return false;
  return true;
});
*/
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

/*
$("#appendTo").click(function() {
  $("#moveMeIntoMain").appendTo($("#main"));
});
$("#prependTo").click(function() {
  $("#moveMeIntoMain").prependTo($("#main"));
});*/

function focus() {}

var obj = document.querySelector(".otp__input-value");
if (obj !== null) {
  obj.addEventListener("keydown", stopCarret);
  obj.addEventListener("keyup", stopCarret);

  function stopCarret() {
    if (obj.value.length > 6) {
      //setCaretPosition(obj, 6);
      obj.blur();
    }
  }
}
function setCaretPosition(elem, caretPos) {
  debugger;
  if (elem != null) {
    if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.move("character", caretPos);
      range.select();
    } else {
      if (elem.selectionStart) {
        elem.focus();
        elem.setSelectionRange(caretPos, caretPos);
      } else elem.focus();
    }
  }
}
