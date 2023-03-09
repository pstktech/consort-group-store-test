Olá.

Está é a apresentação do teste FrontEnd enviado pela ConsortGroup.

Como foi pedido, foi feito o upload do projeto para o repositório no GitHub para acesso e review do case.

Na estruturação do projeto, foi utilizado HTML e CSS/Bootstrap para montar a web aplicação, com estilos responsivos. 

Também há elementos de JavaScript e seu framework React e suas bibliotecas para criação de scripts, conforme foi solicitado, para gerar itens para a "loja", cada item tem seu ID único. 

Abaixo no ReadMe do projeto pode ver uma breve descrição de alguns arquivos. 

Infelizmente não tive tempo para implementação de mais elementos que queria para deixar mais apresentável a aplicação, mas não solicitei mais tempo pois foi um erro da minha parte no gerenciamento de tempo, por isso, peço desculpas. Qualquer dúvida estou a disposição para discutir sobre o código apresentado

------ shoppingcart.jsx
.

This implementation uses the useState hook to create a cart state variable and a setCart function to update the state. The addToCart function takes a product argument and first checks if the product already exists in the cart by using the find method to look for an item with a matching id property. If it does exist, the function updates the quantity property of the existing item using the map method to create a new array with the updated item. If it doesn't exist, the function adds the product to the cart with a quantity of 1. Note that this implementation assumes that each product has a unique id property. If your products don't have a unique identifier, you'll need to modify the implementation to use a different method for checking if a product already exists in the cart.

//

------ item.jsx
.

This implementation uses the Array.from method to create an array with 15 elements. The second argument of the Array.from method is a map function that is called for each element of the array. In this case, we're using the index parameter to generate a unique id code for each product, starting from 1.
______________________________________________