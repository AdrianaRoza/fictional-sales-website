
const CardPromotions = () => {

  // Array de produtos com informações sobre cada produto
 const product = [
   {
     title:"Produto 1",
     description:"Promoção",
     price:"$145,00",
     price1:"$72,5",
     image:"https://img.elo7.com.br/product/original/1149D9F/tabua-de-corte-corte.jpg",
   },
   {
     title:"Produto 2",
     description:"Promoção",
     price:"$139,90",
     price1:"$69,95",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYS-g7_zYAERGmg7cMrkdI1Enga5bo5YTzg&usqp=CAU",
   },
   {
     title:"Produto 3",
     description:"Promoção",
     price:"$150,99",
     price1:"$75,49",
     image:"https://images.tcdn.com.br/img/img_prod/835587/tabua_de_corte_bambu_chef_451_1_20201010115706.jpg",
   },
   {
     title:"Produto 4",
     description:"Promoção",
     price:"$145,00",
     price1:"$72,5",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd90zqTaVnrtgQ_6DR7SVRraDqvYN4QOYpQPHX0SWCPC89erwt04qp8zYlNhde9yKCIdY&usqp=CAU",
   },
   {
     title:"Produto 4",
     description:"Promoção",
     price:"$190,00",
     price1:"$95,00",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCV_NcKULokBXVucwOV9xH8fmSgkIzDO2jig&usqp=CAU",
   },
   {
     title:"Produto 4",
     description:"Promoção",
     price:"$200,00",
     price1:"$100,00",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjCRcf1qmPm_fT7RIdiMkBAjt9bjl4RZrRw&usqp=CAU",
   },
   {
     title:"Produto 4",
     description:"Promoção",
     price:"$78,00",
     price1:"$39,00",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Piv-zHshCPJMAr1q2P7-KpjjdVoFbaVSp-gFDXo-c_PtRywXxgdGvp2Tv25XUQ5hgvQ&usqp=CAU",
   },
   {
     title:"Produto 4",
     description:"Promoção",
     price:"$250,00",
     price1:"$125,00",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSanoLhO78I3SPDOv0F5RFneq9o7U20wdbTvI6i3HyfYTXkrqRXl8PxlgUw1rdt-y3QrtQ&usqp=CAU",
   },
 ]

  // Renderização do componente de cartões de produtos
 return(
   <div className="m-4 flex flex-col items-center">

     {/* Grade de cartões de produtos responsiva */}
     <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
       lg:grid-cols-4 gap-4 card-container justify-center">
       {product.map((product, index) => (
         // Cada objeto do array é mapeado para criar um cartão de produto
       <div key={index} className="bg-white rounded-lg shadow-lg 
         flex flex-col justify-between">
         <div className="flex items-center justify-center h-48">

           {/* Seção da imagem do produto */} 
           <img
               className="w-full h-full object-contain"
               src={product.image}
               alt={product.title}
             />
         </div>

         {/* Seção de informações do produto */}
         <div className="p-4 flex flex-col items-center 
           justify-center flex-grow">
           <h2 className="text-xl font-semibold">{product.title}</h2>
           <p className="text-green-500 ">{product.description}</p>

           {/* Seção do preço e botão de compra */}
           <div className="mt-1 flex flex-col items-center justify-between">
           <span className="text-green-500 font-semibold text-lg p-3">
               {product.price1}
             </span>
             <span className="line-through text-red-600 font-semibold text-lg ">
               {product.price}
             </span>
             <button className="px-4 py-2 bg-teal-950 hover:bg-teal-500
              text-white rounded">Comprar</button>
           </div>
         </div>
       </div>
     ))}

   </div>
 </div>  
 )
}

export default CardPromotions