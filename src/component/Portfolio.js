const Portfolio=()=>{
    return(<>
    <div className=" mt-10 px-5  py-3   ">
      <h1 className="text-4xl font-bold sm:text-center  ">My Portfolio</h1>
      <p className="text-xl font-light leading-8 mt-4">Here are some examples of websites I've made recently. Each and every project is a bespoke design made to serve the purpose me and the client discussed.</p>
      <div className=" my-4 flex justify-around relative ">
         <div>   <div className="border-2 border-green-300 w-20 h-20 rounded-full flex  "> <div className=" mx-auto my-auto  bg-green-300 h-12 w-12 rounded-full   " ><p className=" text-white text-2xl text-center pt-1 ">1</p></div></div>   <p className="mt-4 text-center">Consultation</p>    </div>
         <div>   <div className="border-2 border-blue-600  w-20 h-20 rounded-full flex  "> <div className=" mx-auto my-auto  bg-blue-600 h-12 w-12 rounded-full   " ><p className=" text-white text-2xl text-center pt-1 ">2</p></div></div>   <p className="mt-4 text-center">Mockup</p>    </div>
         <div>   <div className="border-2 border-orange-500 w-20 h-20 rounded-full flex  "> <div className=" mx-auto my-auto  bg-orange-500 h-12 w-12 rounded-full   " ><p className=" text-white text-2xl text-center pt-1 ">3</p></div></div>   <p className="mt-4 text-center">Development</p>    </div>
        
         <div class="absolute h-px w-full top-1/3    bottom-28  bg-gray-600   ">
      </div>
        
    
      </div>
     
      
      <p className="text-xl font-light leading-8 b">Here are some examples of websites I've made recently. Each and every project is a bespoke design made to serve the purpose me and the client discussed.</p>
    </div>
    </>)
}
export default Portfolio;