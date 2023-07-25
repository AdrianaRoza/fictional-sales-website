
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
      image:"https://i.pinimg.com/564x/f0/f5/2b/f0f52bba6bfd1e7a4cc23e54b3e98d50.jpg",
    },
    {
      title:"Produto 4",
      description:"Descrição do produto",
      price:"$190,00",
      image:"https://i.pinimg.com/564x/60/c2/3f/60c23f7f12193292a9226a861edadb41.jpg",
    }
  ]
  return(
    <div className="m-4 grid grid-cols-4 gap-4">
      {product.map((product, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg">
          <img className="w-full h-50 object-cover mb-4" src={product.image} />
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <div className="mt-4 p-2 flex items-center justify-between">
            <span className="text-green-500 font-semibold text-lg">{product.price}</span>
            <button className="px-4 py-2 bg-teal-950 hover:bg-teal-500 text-white rounded">Comprar</button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Cards