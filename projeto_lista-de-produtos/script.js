const produtosTecnologia = [
  {
    nome: "iPhone 15 Pro Max 256GB",
    preco: 7499.00,
    descricao: "Câmera de 48MP e tela de 6.7.",
    categoria: "Smartphones",
    imagem: "./src/images.jpg"
  },
  {
    nome: "Samsung Galaxy S24 Ultra",
    preco: 6299.00,
    descricao: "IA integrada e caneta S Pen.",
    categoria: "Smartphones",
    imagem: "./src/images (1).jpg"
  },
  {
    nome: "MacBook Air M3 13",
    preco: 9999.00,
    descricao: "Chip M3 e design ultrafino.",
    categoria: "Computadores",
    imagem: "./src/images (2).jpg"
  },
  {
    nome: "Notebook Dell Inspiron 15",
    preco: 3499.00,
    descricao: "Intel Core i5 e 512GB SSD.",
    categoria: "Computadores",
    imagem: "./src/images (3).jpg"
  },
  {
    nome: "PlayStation 5 Slim",
    preco: 3799.00,
    descricao: "SSD rápido e leitor de disco.",
    categoria: "Games",
    imagem: "./src/images (4).jpg"
  },
  {
    nome: "Nintendo Sweet OLED",
    preco: 2100.00,
    descricao: "Tela OLED de 7 polegadas.",
    categoria: "Games",
    imagem: "./src/images (5).jpg"
  },
  {
    nome: "Smart TV LG OLED 55",
    preco: 5800.00,
    descricao: "Tela 4K e frequência de 120Hz.",
    categoria: "Eletrônicos",
    imagem: "./src/images (6).jpg"
  },
  {
    nome: "Monitor Gamer Asus 27",
    preco: 1450.00,
    descricao: "Frequência de 165Hz e 1ms.",
    categoria: "Periféricos",
    imagem: "./src/images (7).jpg"
  },
  {
    nome: "Teclado Mecânico Logitech G915",
    preco: 1200.00,
    descricao: "Perfil baixo e conexão sem fio.",
    categoria: "Periféricos",
    imagem: "./src/images (8).jpg"
  },
  {
    nome: "Smartwatch Apple Watch Series 9",
    preco: 3899.00,
    descricao: "Monitor de saúde avançado.",
    categoria: "Wearables",
    imagem: "./src/images (9).jpg"
  },
  {
    nome: "Kindle Paperwhite 16GB",
    preco: 799.00,
    descricao: "Tela antirreflexo iluminada.",
    categoria: "Eletrônicos",
    imagem: "./src/images (10).jpg"
  },
  {
    nome: "Xiaomi Redmi Note 13 Pro+",
    preco: 2499.00,
    descricao: "Câmera de 200MP e carregamento rápido.",
    categoria: "Smartphones",
    imagem: "./src/images (11).jpg"
  },
  {
    nome: "Motorola Edge 50 Ultra",
    preco: 4999.00,
    descricao: "Acabamento premium e zoom óptico.",
    categoria: "Smartphones",
    imagem: "./src/frente-traseira-smartphone-motorola-edge-50-ultra-black-vegan-leather-certo.png"
  },
  {
    nome: "Notebook Lenovo IdeaPad 3",
    preco: 2899.00,
    descricao: "Processador AMD Ryzen e design leve.",
    categoria: "Computadores",
    imagem: "./src/images (12).jpg"
  },
  {
    nome: "MacBook Pro M3 Max 16",
    preco: 29999.00,
    descricao: "Máxima performance para profissionais.",
    categoria: "Computadores",
    imagem: "./src/images (13).jpg"
  },
  {
    nome: "Xbox Series X",
    preco: 4299.00,
    descricao: "Consola potente com gráficos em 4K.",
    categoria: "Games",
    imagem: "./src/images (14).jpg"
  },
  {
    nome: "Headset Razer BlackShark V2",
    preco: 650.00,
    descricao: "Áudio espacial e microfone removível.",
    categoria: "Periféricos",
    imagem: "./src/images (15).jpg"
  },
  {
    nome: "Rato Gamer Logitech G502 Hero",
    preco: 350.00,
    descricao: "Sensor de alta precisão e pesos ajustáveis.",
    categoria: "Periféricos",
    imagem: "./src/images (16).jpg"
  },
  {
    nome: "Soundbar Samsung HW-Q600C",
    preco: 1899.00,
    descricao: "Áudio Dolby Atmos de alta imersão.",
    categoria: "Eletrônicos",
    imagem: "./src/images (17).jpg"
  },
  {
    nome: "Samsung Galaxy Watch 6",
    preco: 1699.00,
    descricao: "Análise de sono e monitor de bioimpedância.",
    categoria: "Wearables",
    imagem: "./src/images (18).jpg"
  }
];

const div = document.getElementById('product-list');
const select = document.getElementById('product_category');

function renderizarProdutos(lista) {
  div.innerHTML = "";

  lista.forEach((produtoData) => {
    const produto = document.createElement("div");
    produto.classList.add("produto");

    const div_imagem = document.createElement("div");
    div_imagem.classList.add("fundo_imagem");
    const imagem = document.createElement("img");
    imagem.src = produtoData.imagem;
    imagem.alt = produtoData.nome;
    imagem.classList.add("produto-imagem");
    div_imagem.appendChild(imagem);


    const nome = document.createElement("h3");
    nome.textContent = produtoData.nome;

    const preco = document.createElement("p");
    preco.textContent = `R$ ${produtoData.preco.toFixed(2).replace('.', ',')}`;

    const descricao = document.createElement("p");
    descricao.textContent = produtoData.descricao;

    const categoria = document.createElement("span");
    categoria.textContent = produtoData.categoria;

    produto.append(div_imagem, nome, preco, descricao, categoria);
    div.appendChild(produto);
  });
}

select.addEventListener("input", filtrarProdutos);
renderizarProdutos(produtosTecnologia);

function filtrarProdutos(event) {
  event.preventDefault();

  const categoria = select.value.toLowerCase();

  if (categoria === "") {
    renderizarProdutos(produtosTecnologia);
    return;
  }

  const produtosFiltrados = produtosTecnologia.filter((produto) => {
    return produto.categoria.toLowerCase().includes(categoria) ||
      produto.nome.toLowerCase().includes(categoria);
  });

  renderizarProdutos(produtosFiltrados);
}
