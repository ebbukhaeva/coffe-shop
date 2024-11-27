const sweaters = [
    {
      image: "001.JPG",
      description: "Раф на лавандовом сиропе",
      price: 350
    },
    {
      image: "002.JPG",
      description: "Раф соленая карамель",
      price: 350
    },
    {
      image: "003.JPG",
      description: "Американо",
      price: 250
    },
    {
      image: "004.JPG",
      description: "Эспрессо",
      price: 220
    },
    {
      image: "005.JPG",
      description: "Айс лате",
      price: 350
    },
    {
      image: "006.JPG",
      description: "Латте на кокосовом молоке",
      price: 450
    },
    {
        image: "007.JPG",
        description: "Латте на банановом молоке",
        price: 450
      
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

