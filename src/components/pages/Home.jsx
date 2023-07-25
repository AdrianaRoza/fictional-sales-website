
const Home = () => {
  return(
      <div 
        className="flex-grow bg-[url('/src/assets/image/fundo-home.jpg')]
        bg-cover"
      >
        <div 
          className="leading-[0.7] text-green-950 
          mt-20 font-serif text-[55px] font-bold 
          sm:w-[40%] md:w-[40%]"
        >
          
          <div className="flex justify-start pl-3">NST</div>  
          <div className="flex justify-center pr-2">ART</div>
          <div className="flex justify-end pr-3">CNC</div>
        </div>

        <div className="flex flex-col items-start text-stroke 
          mt-12 text-[23px] font-serif font-bold text-teal-950">
          
          <div className="flex flex-col  items-center ml-3">
            <div>Aqui a qualidade do produto é garantida.</div> 
            <div>E o respeito ao cliente é o nosso lema.</div>
            
          </div>
        </div>
      </div>
  )
}

export default Home



