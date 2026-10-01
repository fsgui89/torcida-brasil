# Torcida Brasil

[English](#english) | [Português](#portugues)

[Live Demo](https://fsgui89.github.io/torcida-brasil/) · [Repository](https://github.com/fsgui89/torcida-brasil)

<a id="english"></a>

## English

A Brazilian football merchandise storefront prototype built with vanilla JavaScript.

### Overview

Torcida Brasil demonstrates product discovery and a multi-page shopping flow, from a local catalog to cart management, simulated checkout and order confirmation.

### Tech Stack

HTML • CSS • JavaScript • localStorage

### Features

- Search names, descriptions and product types with accent-insensitive matching.
- Filter by category, audience and brand; sort by featured items, price or name.
- Product pages with image galleries, related products and size or color selection where available.
- Persistent cart with variant-aware items, quantity updates and item removal.
- Calculate sale-price savings, shipping and totals; shipping is free from R$ 399.
- Simulated checkout with customer name, email and Pix, card or debit selection.
- Save the last simulated order, clear the cart and display confirmation details.
- Responsive layout, mobile navigation, toast messages and back-to-top control.

### Technical Highlights

- JavaScript files separate catalog, product detail, cart, checkout, storage and UI responsibilities.
- The catalog is an array in products.js; URLSearchParams identifies product detail pages.
- Cart items are matched by product ID and selected variant.
- localStorage retains the cart and last order across pages.
- Array filtering and sorting render the catalog through DOM updates.

### Getting Started

Prerequisites: Git, Python 3 and a modern browser.

```bash
git clone https://github.com/fsgui89/torcida-brasil.git
cd torcida-brasil
python3 -m http.server 8000
```

Open [http://localhost:8000/](http://localhost:8000/).

On Windows, use `py -m http.server 8000` if needed. There are no npm dependencies to install and no build step.

### Project Structure

- `index.html` and `produto.html`: catalog and product details.
- `carrinho.html`, `checkout.html` and `sucesso.html`: shopping flow.
- `assets/js/`: catalog data, cart, storage, checkout and UI logic.
- `assets/css/`: layout, responsive styles and animations.
- `assets/images/`: existing brand and product assets.

### Implementation Scope

Payments, orders, shipping and newsletter signup are simulations. No transactions or email delivery occur. Product brands and images belong to their respective owners; this is a non-commercial portfolio project.

### Preview

Existing project preview maintained in the portfolio repository.

![Torcida Brasil preview](https://raw.githubusercontent.com/fsgui89/portfolio-guilherme-ferreira/main/public/images/projects/torcida-brasil.png)

### Author

**Guilherme Ferreira**  
Full Stack Developer

[GitHub](https://github.com/fsgui89) · [LinkedIn](https://linkedin.com/in/guilhermefsdev) · [Portfolio](https://fsgui89.github.io/portfolio-guilherme-ferreira/)

---

<a id="portugues"></a>

## Português

Protótipo de loja de produtos ligados ao futebol brasileiro, desenvolvido com JavaScript puro.

### Visão geral

A Torcida Brasil demonstra a descoberta de produtos e uma jornada de compra com múltiplas páginas, do catálogo local ao carrinho, checkout simulado e confirmação de pedido.

### Tecnologias

HTML • CSS • JavaScript • localStorage

### Funcionalidades

- Buscar nomes, descrições e tipos de produto sem diferenciação de acentos.
- Filtrar por categoria, público e marca; ordenar por destaque, preço ou nome.
- Páginas de produto com galeria, itens relacionados e seleção de tamanho ou cor quando disponível.
- Carrinho persistente que distingue variantes, com alteração de quantidade e remoção.
- Calcular economia sobre preços promocionais, frete e total; frete grátis a partir de R$ 399.
- Checkout simulado com nome, e-mail e seleção de Pix, cartão ou débito.
- Salvar o último pedido simulado, limpar o carrinho e exibir os dados da confirmação.
- Layout responsivo, menu móvel, mensagens de feedback e retorno ao topo.

### Destaques técnicos

- Arquivos JavaScript separam catálogo, detalhes, carrinho, checkout, armazenamento e interface.
- O catálogo é um array em products.js; URLSearchParams identifica as páginas de produto.
- Os itens do carrinho são diferenciados por ID do produto e variante selecionada.
- localStorage mantém carrinho e último pedido entre as páginas.
- Filtros e ordenação de arrays atualizam o catálogo por manipulação do DOM.

### Como executar

Pré-requisitos: Git, Python 3 e navegador moderno.

```bash
git clone https://github.com/fsgui89/torcida-brasil.git
cd torcida-brasil
python3 -m http.server 8000
```

Abra [http://localhost:8000/](http://localhost:8000/).

No Windows, utilize `py -m http.server 8000` se necessário. Não há instalação de dependências npm ou etapa de build.

### Estrutura do projeto

- `index.html` e `produto.html`: catálogo e detalhes dos produtos.
- `carrinho.html`, `checkout.html` e `sucesso.html`: jornada de compra.
- `assets/js/`: dados, carrinho, armazenamento, checkout e interface.
- `assets/css/`: layout, responsividade e animações.
- `assets/images/`: assets existentes de marca e produtos.

### Escopo da implementação

Pagamentos, pedidos, frete e cadastro na newsletter são simulações. Não há transações nem envio de e-mails. Marcas e imagens dos produtos pertencem aos respectivos proprietários; este é um projeto de portfólio sem fins comerciais.

### Prévia

A imagem existente na seção Preview acima é mantida no repositório do portfólio. A versão interativa está no link Live Demo no início deste README.

### Autor

**Guilherme Ferreira**  
Full Stack Developer

[GitHub](https://github.com/fsgui89) · [LinkedIn](https://linkedin.com/in/guilhermefsdev) · [Portfolio](https://fsgui89.github.io/portfolio-guilherme-ferreira/)

