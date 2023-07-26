
const Cards = () => {
  const product = [
    {
      title:"Produto 1",
      description:"Descrição do produto",
      price:"$100,99",
      image:"https://i.pinimg.com/564x/be/3c/9a/be3c9ae5df75716c945e8ca57b7d65a9.jpg",
    },
    {
      title:"Produto 2",
      description:"Descrição do produto",
      price:"$120,99",
      image:"https://i.pinimg.com/564x/38/fc/38/38fc385c858a0d1088e2d8caecea7d91.jpg",
    },
    {
      title:"Produto 3",
      description:"Descrição do produto",
      price:"$150,00",
      image:"https://img.freepik.com/fotos-premium/vista-superior-da-tabua-vintage-ao-lado-de-dois-pedacos-de-carne-vermelha-na-mesa-de-madeira-cenouras-laranja-graos-de-pimenta_482257-20048.jpg?w=360",
    },
    {
      title:"Produto 4",
      description:"Descrição do produto",
      price:"$190,00",
      image:"https://i.pinimg.com/564x/60/c2/3f/60c23f7f12193292a9226a861edadb41.jpg",
    },
    {
      title:"Produto 4",
      description:"Descrição do produto",
      price:"$190,00",
      image:"https://i.pinimg.com/236x/c9/68/92/c96892bcdccbd84c2febf51070912e8d.jpg",
    },
    {
      title:"Produto 4",
      description:"Descrição do produto",
      price:"$190,00",
      image:"https://i.pinimg.com/564x/f0/f5/2b/f0f52bba6bfd1e7a4cc23e54b3e98d50.jpg",
    },
    {
      title:"Produto 4",
      description:"Descrição do produto",
      price:"$190,00",
      image:"https://cdn.leroymerlin.com.br/products/tabua_carne_1567485279_20bc_300x300.jpg",
    },
    {
      title:"Produto 4",
      description:"Descrição do produto",
      price:"$190,00",
      image:"https://cdnm.westwing.com.br/glossary/uploads/br/2021/05/18045834/t%C3%A1bua-de-carne-de-madeira-churrasco-COZINHA.jpg",
    },
  ]
  return(
    <div className="m-4 flex flex-col items-center">
      <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 card-container justify-center">
        {product.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col justify-between">
          <div className="flex items-center justify-center h-48">
            <img
                className="w-full h-full object-contain"
                src={product.image}
                alt={product.title}
              />
          </div>
          <div className="p-4 flex flex-col items-center justify-center flex-grow">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-4 p-2 flex items-center justify-between">
              <span className="text-green-500 font-semibold text-lg p-3">{product.price}</span>
              <button className="px-4 py-2 bg-teal-950 hover:bg-teal-500 text-white rounded">Comprar</button>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>  
  )
}

export default Cards