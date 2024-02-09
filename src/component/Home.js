import Person from '../images/persion.svg';
import Skills1 from '../images/skills1.svg';
import Skills2 from '../images/skills2.svg';
import Skills3 from '../images/skills3.svg';
import insta from '../images/instagram.svg'
import linkin from '../images/linkin.svg'
import person from '../images/person.svg'
import { BsArrowRightCircle } from "react-icons/bs";


const Home=()=>{
    return(<>
    <div className='my-3 xl:flex'>
        <div className=' w-3/4 flex mx-auto  xl:pl-16  '>
            <div><img src={Person}></img></div>
            <div className='  my-auto ml-3 space-y-6 pr-4'>
                <img src={Skills1}></img>
                <img className='ml-8' src={Skills2}></img>
                <img src={Skills3}></img>
            </div>

        </div>

        <div className='mt-10 px-5 xl:w-3/5  '>
            <div className='flex md:justify-center  '>
                <h1 className=' font-bold text-3xl text-gray-700 md:text-4xl '>Websites</h1>
                <span className='my-auto text-orange-600 text-2xl  ml-2 md:text-4xl  '><BsArrowRightCircle /></span>

            </div>
            <h1 className='text-3xl font-bold mb-3 text-gray-700 md:text-4xl md:text-center xl:text-center '>Fit For Purpose.</h1>
            <p className=' font-light text-lg leading-8 md:text-3xl xl:text-lg xl:leading-10'>I am a website designer who focuses on creating memorable websites.
                 The aim isn't to have a website that blends in with the rest; it's 
                 to stand out from the crowd.
            </p>
            <div className='bg-gray-700 h-px mt-16'></div>
            <div>       
                <div className='flex justify-between mt-10 px-5 sm:px-10 xl:px-20  py-6'>
                    <span className=' border-2 border-blue-700 text-blue-700 px-4 py-3 rounded-xl text-xl font-semibold'>My<br></br> Portfolio</span>
                    <div className='flex'>
                        <img src={linkin} className='mr-3'></img>
                        <img src={insta}></img>
                    </div>
                </div>

                <div className=' mt-10' >
                    <div className='flex px-6  md:px-32 xl:px-10 items-center justify-between bg-gray-200 rounded-full  xl:w-2/3 '>
                        <img src={person}></img>
                        <p className=' text-sm font-light'>Absolutely fantastic<br></br>, my go to web designer!</p>
                    </div>
                </div>
            </div>
            


        </div>
    </div>
    
    </>)
}
export default Home;