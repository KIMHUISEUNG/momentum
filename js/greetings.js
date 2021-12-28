const loginInput = document.querySelector("#login-form input"); //html 문서의 요소를 받아온다 (#아이디 input태그)
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기능을 막는다 (새로고침)
  loginForm.classList.add(HIDDEN_CLASSNAME); //form의 hidden class를 추가한다.
  const username = loginInput.value; //input에 입력된 값을 username에 저장한다.
  localStorage.setItem(USERNAME_KEY, username); //localStorage에 key값으로 username value에 변수 username을 준다.
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
