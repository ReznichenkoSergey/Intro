$(window).load(function () {
  var phones = [{ mask: "+38 (0##) ### ## ##" }];
  $("#phone").inputmask({
    mask: phones,
  });
});

function formPhoneValidate() {
  let x = document.querySelector(".phone__rules-checkbox").checked;
  let phoneValue = document.querySelector(".phone__input-value").value;
  console.log(phoneValue);
  let array = [
    "+38 (067)",
    "+38 (068)",
    "+38 (039)",
    "+38 (096)",
    "+38 (097)",
    "+38 (098)",
    "+38 (050)",
    "+38 (066)",
    "+38 (095)",
    "+38 (099)",
    "+38 (063)",
    "+38 (093)",
    "+38 (091)",
    "+38 (092)",
    "+38 (094)",
  ];

  if (phoneValue.length === 0) {
    document.querySelector(".phone__input-value").style.borderColor = null;
    document.querySelector(".phone__input-error").hidden = true;
  } else {
    if (phoneValue.substring(0, 9).indexOf("_") === -1) {
      document.querySelector(".phone__input-error").hidden = array.includes(
        phoneValue.substring(0, 9)
      );
      if (!array.includes(phoneValue.substring(0, 9))) {
        document.querySelector(".phone__input-value").style.borderColor =
          "#e40428";
      } else {
        document.querySelector(".phone__input-value").style.borderColor = null;
      }
    } else {
      document.querySelector(".phone__input-value").style.borderColor = null;
      document.querySelector(".phone__input-error").hidden = true;
    }
  }
  document.querySelector(".phone__submit-button").disabled = !(
    phoneValue.length === 19 &&
    phoneValue.indexOf("_") === -1 &&
    x &&
    array.includes(phoneValue.substring(0, 9))
  );
}

function formOtpValidate() {
  let otp = document.querySelector(".otp__input-value");
  document.querySelector(".otp__submit-button").disabled = !(
    otp.value.length === 6
  );
}
