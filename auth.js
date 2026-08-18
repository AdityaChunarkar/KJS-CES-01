const USER_KEY="climate_demo_user", LOGIN_KEY="climate_logged_in";
function getUser(){try{return JSON.parse(localStorage.getItem(USER_KEY))||null}catch(e){return null}}
function saveUser(u){localStorage.setItem(USER_KEY,JSON.stringify(u))}
function isLoggedIn(){return localStorage.getItem(LOGIN_KEY)==="true"&&!!getUser()}
function requireAuth(){if(!isLoggedIn())location.href="login.html"}
function logout(){localStorage.removeItem(LOGIN_KEY);location.href="login.html"}
document.addEventListener("DOMContentLoaded",()=>{const u=getUser();document.querySelectorAll("[data-user-name]").forEach(e=>e.textContent=u?.name||"Guest");document.querySelectorAll("[data-user-email]").forEach(e=>e.textContent=u?.email||"Not available")});
