const spinner = document.getElementById("spinner-wrapper");
const content = document.getElementById("content");

setTimeout(() => {
  spinner.style.display = "none";
  content.style.display = "block";
}, 3000);
// 나중에 3000으로 수정하기

// 모달 열기 버튼 가져오기
const openBtn = document.getElementById("sign-box");
// 모달 가져오기
const modal = document.querySelector(".modal");
// 모달 닫기 버튼 가져오기
const closeBtn = document.querySelector(".close-modal");

const list = document.getElementById("recruit-list");
const item = document.getElementById("recruit-item");

const submitBtn = document.getElementById("submit-button");
const emailInput = document.getElementById("email-input");
const errorMessage = document.getElementById("error-message");

const loginModal = document.getElementById("login-modal-content");
const signModal = document.getElementById("sign-modal-content");

const phoneInput = document.getElementById("phone-input");
const phoneBtn = document.getElementById("phone-button");
const AuthInput = document.getElementById("auth-input");

const passwordInput = document.getElementById("password");
const passwordChk = document.getElementById("password-check");

const checkAll = document.getElementById("all-agree");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const emailCheck = document.getElementById("email-checkbox");
const emailCheckSvg = document.getElementById("email-check-svg");

// 채용 리스트에 채용 아이템들 반복적으로 붙여 넣기
for (let i = 0; i < 15; i++) {
  const newItem = item.cloneNode(true);
  list.appendChild(newItem);
}
document.getElementById("sign-box").onclick = function () {
  alert("Hello World");
};

// 모달 열기 버튼 클릭 이벤트 등록
openBtn.onclick = function () {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

// 모달 닫기 버튼 클릭 이벤트 등록
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// 모달 외부 클릭 시 모달 닫기
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// 이메일 유효성 검사 함수
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 이메일 입력값이 변경될 때마다 유효성 검사
// 이메일 유효성 여부에 따른 input, button 스타일 변경
emailInput.addEventListener("input", function (event) {
  const email = event.target.value;
  if (isValidEmail(email)) {
    submitBtn.style.backgroundColor = "rgb(51, 102, 255)";
    submitBtn.style.color = "white";
    errorMessage.style.display = "none";
    submitBtn.disabled = false;
    submitBtn.style.cursor = "pointer";
    emailInput.style.borderColor = "rgb(51, 102, 255)";
  } else {
    submitBtn.style.backgroundColor = "Rgb(242, 244, 247)";
    submitBtn.style.color = "rgb(204, 204, 204)";
    errorMessage.style.display = "block";
    submitBtn.style.borderBlockColor = "rgb(254, 65, 92)";
    submitBtn.disabled = true;
    submitBtn.style.cursor = "auto";
    emailInput.style.borderColor = "rgb(254, 65, 92)";
  }
});

submitBtn.addEventListener("click", function () {
  const email = emailInput.value.trim();
  if (isValidEmail(email)) {
    // 유효한 이메일일 경우
    loginModal.style.display = "none";
    signModal.style.display = "block";
  }
});

// 휴대폰 번호 유효성 검사
function validatePhoneNumber(phone) {
  // 앞자리 2~3자리, 가운데 3~4자리, 마지막 3~4자리의 숫자로만 이루어진 문자열 체크
  let regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
  return regPhone.test(phone);
}

phoneInput.addEventListener("input", function (event) {
  const phone = event.target.value;
  const errorMsg = document.getElementById("phone-error-message");

  if (validatePhoneNumber(phone)) {
    console.log("유효함");
    phoneBtn.style.backgroundColor = "white";
    phoneBtn.style.color = "rgb(51, 102, 255)";
    phoneBtn.style.border = "1px solid rgb(225, 226, 227)";
    errorMessage.style.display = "none";
    phoneBtn.disabled = false;
    phoneBtn.style.cursor = "pointer";
    errorMsg.style.display = "none";
  } else {
    console.log("유효하지 않음");
    phoneBtn.style.backgroundColor = "rgb(242, 244, 247)";
    phoneBtn.style.color = "rgb(204, 204, 204)";

    errorMessage.style.display = "block";
    phoneBtn.disabled = true;
    phoneBtn.style.cursor = "auto";
    phoneBtn.style.border = "none";
    errorMsg.style.display = "block";
  }
});
phoneBtn.addEventListener("click", function () {
  // 인증번호 input창 활성화
  const authEnabled = document.getElementById("auth-input-enabled");
  const authInputBox = document.getElementById("auth-input-box");
  const authMsg = document.getElementById("auth-request-message");

  authEnabled.style.display = "none";
  authInputBox.style.display = "block";
  authMsg.style.display = "block";
});

// 비밀번호 유효성 체크
function checkPassword(password) {
  // password가 8자 이상 16자 이하인지 체크합니다.
  if (password.length < 8 || password.length > 16) {
    return false;
  }
  // password가 영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하는지 체크합니다.
  const regex =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,16}$/;
  return regex.test(password);
}

passwordInput.addEventListener("input", function (event) {
  const password = event.target.value;
  const errorMsg = document.getElementById("password-error-message");

  if (checkPassword(password)) {
    errorMsg.style.display = "none";
    passwordInput.style.border = "1px solid rgb(51, 102, 255)";
  } else {
    errorMsg.style.display = "block";
    passwordInput.style.border = "1px solid rgb(254, 65, 92)";
  }
});

passwordChk.addEventListener("input", function (event) {
  const password = document.getElementById("password").value;
  console.log(password);
  const passwordCheck = event.target.value;
  const errorMsg = document.getElementById("password-check-error-message");

  if (password == passwordCheck) {
    errorMsg.style.display = "none";
    passwordChk.style.border = "1px solid rgb(51, 102, 255)";
  } else {
    errorMsg.style.display = "block";
    passwordChk.style.border = "1px solid rgb(254, 65, 92)";
  }
});

// // 체크박스 상태 변경 시 실행될 함수
// function updateCheckAll() {
//   var allChecked = true;
//   for (var i = 0; i < checkboxes.length; i++) {
//     if (!checkboxes[i].checked) {
//       allChecked = false;
//       break;
//     }
//   }
//   checkAll.checked = allChecked;
// }
// // 모든 체크박스 input 요소에 change 이벤트 등록
// for (var i = 0; i < checkboxes.length; i++) {
//   checkboxes[i].addEventListener("change", updateCheckAll);
// }
// 전체동의 체크박스의 체크 여부에 따라 아래 체크박스 체크 여부 결정함
checkAll.addEventListener("change", function () {
  let isChecked = this.checked;
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = isChecked;
  }
});

// emailCheck.addEventListener("click", function (event) {
//   const emailChecked = event.target.value;
//   const notCheckedSvg = document.getElementById("email-not-checked");
//   const checkedSvg = document.getElementById("email-checked");
//   if (notCheckedSvg.style.display == "block") {
//     notCheckedSvg.style.display == "none";
//     checkedSvg.style.display = "block";
//   } else {
//     notCheckedSvg.style.display == "block";
//     checkedSvg.style.display = "none";
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("overlap");
  const component = document.getElementById("right-container");

  document.addEventListener("scroll", (e) => {
    let scrolled = document.scrollingElement.scrollTop;
    let footerPosition = footer.offsetTop;

    if (scrolled > footerPosition) {
      component.style.position = "relative";
    } else {
      component.style.position = "fixed";
    }
  });
});
