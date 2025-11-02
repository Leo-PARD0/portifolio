# 🌐 Portfólio – Leonardo E. Blanco Pagliari

Este projeto é o meu portfólio pessoal, desenvolvido em **HTML, CSS e JavaScript puro**.  
Aqui apresento minha trajetória, experiências, projeto destacado e formas de contato.  
O objetivo é servir tanto como **currículo interativo** quanto como **laboratório de aprendizado em frontend**.

## ✨ Funcionalidades

- **Hero interativo** com efeito de digitação do nome.
- **Tema claro/escuro** com persistência no `localStorage`.
- **Cards/links de projetos**: card totalmente **clicável** (link-card) para o projeto *Fragmentos*.
- **Timeline** simples de experiência profissional.
- **Foto de perfil** recortada em círculo via `<svg>` + borda estilizada.
- **Chips** de competências e **pílulas de contato** com ícones (Font Awesome).
- **Responsividade** usando CSS Grid/Flex e variáveis CSS.
- Paleta customizada (ver **Como personalizar**).

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3** (Grid, Flexbox, variáveis CSS)
- **JavaScript Vanilla**
- **Font Awesome** (ícones sociais)

## 📂 Estrutura do projeto

```bash
portfolio/
├── index.html   # Página principal
├── style.css    # Estilos (cores, layout, animações)
├── script.js    # Funções JS (tema, typing effect)
└── README.md    # Documentação do projeto
```

## 🖼️ Projetos em destaque

- **Fragmentos** — peça teatral.  
  Atuei como **roteirista auxiliar, sonoplasta, editor de vídeo e assistente de direção**, integrando diferentes áreas técnicas e criativas na produção.  
  🔗 Link do projeto: [Google Drive](https://drive.google.com/file/d/1Q_rnj8TcQWeqxkIyw3EgDFJPGG4zkGD0/view?usp=drivesdk)

## 🎨 Como personalizar

As principais cores ficam em `:root` no **style.css** (tema escuro e claro). Exemplo:

```css
:root{
  --bg: #242424;
  --surface: #636363;
  --text: #e5e7eb;
  --muted: #b89494;
  --accent: #92211A;   /* vermelho principal */
  --accent-2:#ed7615;  /* laranja */
  --card: #58262A;
}
[data-theme="light"]{
  --bg: #f8fafc;
  --surface: #ffffff;
  --text: #0f172a;
  --muted: #475569;
  --accent: #ed7615;   /* invertido p/ tema claro */
  --accent-2:#92211A;
  --card: #fdeded;
}
```

- **Foto de perfil**: edite o atributo `href` da tag `<image>` dentro do `<svg>` em `index.html`.
- **Adicionar novo projeto**: duplique um card dentro da seção `#projetos` em `index.html`:
  ```html
  <a href="URL_DO_PROJETO" target="_blank" class="card tilt link-card">
    <h4>Título do Projeto</h4>
    <p>Breve descrição.</p>
  </a>
  ```
- **Remover aparência de link no card**: garanta no **style.css** algo como:
  ```css
  .link-card { display:block; text-decoration:none; color:inherit; }
  .link-card:visited { color:inherit; }
  .link-card h4, .link-card p { text-decoration:none; }
  .link-card:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0,0,0,.3); }
  ```

## 🚀 Como executar o projeto

Clone o repositório:
```bash
git clone https://github.com/seuusuario/portfolio.git
```

Entre na pasta:
```bash
cd portfolio
```

Abra o arquivo **index.html** no navegador de sua preferência.
> Dica: para desenvolvimento, você pode usar uma extensão de *Live Server* (VS Code) ou `python -m http.server`.

### Publicação rápida
- **GitHub Pages**: envie o repositório e ative Pages na branch `main`.  
- **Vercel/Netlify**: importe o repo e faça deploy como projeto estático (1 clique).

## 📬 Contato

✉️ E-mail: **Leonardoezeblapag@gmail.com**  
📱 WhatsApp: **+55 12 99611-5516**  
🌐 Site: **https://www.sparkstylus.com.br**  
💼 LinkedIn: **https://www.linkedin.com/in/leonardo-e-b-pagliari**  
📸 Instagram: **https://www.instagram.com/sparkstylus**

## 📄 Licença

Este projeto está sob a **licença MIT**.  
Sinta-se à vontade para usar como referência e adaptar às suas necessidades.
