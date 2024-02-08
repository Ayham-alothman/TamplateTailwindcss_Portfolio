import TB from '../images/TB.svg'
import { IoMdMenu } from "react-icons/io";
const Navbar=()=>{
    return(<>
    <div className='pt-4 px-5 '>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
              <img src={TB}></img>
              <span className=' font-light text-base ml-1 md:text-2xl'>TAILWIND BLOCKS</span>
          </div>
  
          <div className='flex'>
              <ul className='hidden md:block '><li className=' text-lg text-gray-800 space-x-10 px-7  xl:space-x-24 xl:pr-10 xl:text-2xl'><a className=' cursor-pointer hover:bg-gray-200 hover:rounded-2xl hover:px-3'>Home</a><a className=' cursor-pointer hover:bg-gray-200 hover:rounded-2xl hover:px-3'>Portfolio</a><a className=' cursor-pointer hover:bg-gray-200 hover:rounded-2xl hover:px-3'>About Me</a><a className=' cursor-pointer hover:bg-gray-200 hover:rounded-2xl hover:px-3'>Contact</a></li></ul>
              <div className=' text-3xl md:hidden'><IoMdMenu/></div>
          </div>
        </div>
    </div>

    
    
    </>)
}
export default Navbar;