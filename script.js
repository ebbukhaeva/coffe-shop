const sweaters = [
    {
      image: "001.JPG",
      description: "Раф на лавандовом",
      price: 2500
    },
    {
      image: "002.JPG",
      description: "Раф на коксовом",
      price: 3000
    },
    {
      image: "003.JPG",
      description: "Эспрессо",
      price: 4000
    },
    {
      image: "004.JPG",
      description: "Американо",
      price: 2800
    },
    {
      image: "005.JPG",
      description: "Айс латте",
      price: 3500
    },
    {
      image: "006.JPG",
      description: "Смузи клубничный",
      price: 2200
    },
    {
        image: "007.JPG",
        description: "Смузи цитрусовый",
        price: 2200
      },
      {
        image: "008.JPG",
        description: "Латте с соленой карамелью",
        price: 2200
      },
      {
        image: "009.JPG",
        description: "Латте со вкусом клубники",
        price: 2200
      }
      
  ];
  
  // Функция для создания блока с информацией о свитере
  function createProductBlock(sweater) {
    const block = document.createElement("div");
    block.classList.add("product-block");
  
    const image = document.createElement("img");
    image.src = sweater.image;
    block.appendChild(image);
  
    const description = document.createElement("h3");
    description.textContent = sweater.description;
    block.appendChild(description);
  
    const price = document.createElement("p");
    price.textContent = `Цена: ${sweater.price} руб.`;
    block.appendChild(price);
    return block;}
    const productContainer = document.getElementById("product-container");

sweaters.forEach(sweater => {
  const productBlock = createProductBlock(sweater);
  productContainer.appendChild(productBlock);
});

