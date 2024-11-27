const coffees = [
    {
      image: "001.JPG",
      description: "Латте на кокосовом молоке",
      price: 450
    },
    {
      image: "002.JPG",
      description: "Латте на банановом молоке",
      price: 300
    },
    {
      image: "003.JPG",
      description: "Капучино с соленой карамелью",
      price: 400
    },
    {
      image: "004.JPG",
      description: "Классический американо",
      price: 280
    },
    {
      image: "005.JPG ",
      description: "Айс-латте",
      price: 350
    },
    {
      image: "006.JPG",
      description: "Смузи тропический",
      price: 450
    },
    {
        image: "007.JPG",
        description: "Смузи клубничный",
        price: 400
      },
      {
        image: "008.JPG",
        description: "Эспрессо",
        price: 220
      },
      {
        image: "009.JPG",
        description: "Раф лавандовый",
        price: 350
      }
      
  ];
  
  // Функция для создания блока с информацией о кофе
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

