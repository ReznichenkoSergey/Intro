/*$(window).load(function () {
  var phones = [{ mask: "+38 (0##) ### ## ##" }];
  $("#phone").inputmask({
    mask: phones,
    placeholder: "",
    supportsInputType: ["tel"],
    greedy: false,
    definitions: { "#": { validator: "[0-9]", cardinality: 1 } },
  });
});*/
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
  //console.log(phoneValue.length);
  /*
  if (phoneValue.length >= 12) {
    //document.querySelector(".phone__input-error").hidden = array.includes(phoneValue.substring(0, 9));
    if (!array.includes(phoneValue.substring(0, 9))) {
      document.querySelector(".phone__input-value").style.borderColor = " #e40428";
    } 
    else {
      document.querySelector(".phone__input-value").style.borderColor = null;
    }
  } else {
    document.querySelector(".phone__input-value").style.borderColor = null;
    document.querySelector(".phone__input-error").hidden = true;
  }
  */
  /*
console.log(phoneValue.substring(0,9));
console.log(phoneValue.substring(0,9).indexOf('_'));
*/
  //debugger;

  console.log(phoneValue.length);

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
  /*
console.log(phoneValue.indexOf('_') === -1);
console.log(phoneValue.length)
console.log(x)
console.log(array.includes(phoneValue.substring(0, 9)));
*/
  document.querySelector(".button-phone").disabled = !(
    phoneValue.length === 19 &&
    phoneValue.indexOf("_") === -1 &&
    x &&
    array.includes(phoneValue.substring(0, 9))
  );
}


