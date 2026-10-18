const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("hello");
const status = document.querySelector(".form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in every field.";
    return;
  }

  const subject = encodeURIComponent(`Hello from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  window.location.href = `mailto:siamsiddik22@gmail.com?subject=${subject}&body=${body}`;
  status.textContent = `Thanks, ${name}. Your email app should open with a message to Siam.`;
});
