// Detecta o nome do ficheiro da página atual
let pageName = window.location.pathname.split("/").pop();

// Define o título de acordo com a página
let pageTitle = "";
switch (pageName) {
  case "index.html":
  case "":
    pageTitle = "FERDINANDO";
    break;
  case "about.html":
    pageTitle = "Sobre Mim";
    break;
  case "services.html":
    pageTitle = "O que Faço";
    break;
  case "works.html":
    pageTitle = "Portfólio";
    break;
  case "blog.html":
    pageTitle = "Blog";
    break;
  case "contact.html":
    pageTitle = "Contacto";
    break;
  default:
    pageTitle = "FERDINANDO";
}

// Injeta o menu na página
let navBar = document.getElementById('menu');
navBar.innerHTML = `
  <div class="text-fit-wrapper">
    <h1 class="text-fit wow">${pageTitle.toUpperCase()}</h1>
    <div class="d-menu-1 wow" data-wow-delay=".3s">
      <ul>
        <li><a href="index.html">Início</a></li>
        <li class="${pageName === 'about.html' ? 'active' : ''}"><a href="about.html">Sobre Mim</a></li>
        <li class="${pageName === 'services.html' ? 'active' : ''}"><a href="services.html">O que Faço</a></li>
        <li class="${pageName === 'works.html' ? 'active' : ''}"><a href="works.html">Portfólio</a></li>
        <li class="${pageName === 'blog.html' ? 'active' : ''}"><a href="blog.html">Blog</a></li>
        <li class="${pageName === 'contact.html' ? 'active' : ''}"><a href="contact.html">Contacto</a></li>
      </ul>
    </div>
  </div>
`;
