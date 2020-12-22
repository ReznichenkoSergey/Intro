$(window).load(function () {
  var phones = [{ mask: "+38 (0##) ### ## ##" }];
  $("#phone").inputmask({
    mask: phones,
    placeholder: "",
    supportsInputType: ["tel"],
    greedy: false,
    definitions: { "#": { validator: "[0-9]", cardinality: 1 } },
  });
});

function FormPhoneValidate() {
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
  if (phoneValue.length >= 12) {
      console.log(phoneValue.length);
    document.querySelector(".phone__input-error").hidden = array.includes(
      phoneValue.substring(0, 9)
    );
  } else {
    document.querySelector(".phone__input-error").hidden = true;
  }

  document.querySelector(".button-phone").disabled = !(
    phoneValue.length === 19 &&
    x &&
    array.includes(phoneValue.substring(0, 9))
  );
}
