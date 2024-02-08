import Person from '../images/persion.svg';
import Skills1 from '../images/skills1.svg';
import Skills2 from '../images/skills2.svg';
import Skills3 from '../images/skills3.svg';
import { BsArrowRightCircle } from "react-icons/bs";


const Home=()=>{
    return(<>
    <div className='my-3'>
        <div className=' w-3/4 flex mx-auto  '>
            <div><img src={Person}></img></div>
            <div className='  my-auto ml-3 space-y-6 pr-4'>
                <img src={Skills1}></img>
                <img className='ml-8' src={Skills2}></img>
                <img src={Skills3}></img>
            </div>

        </div>

        <div className='mt-3 px-5'>
            <div className='flex border-4'>
                <h1 className=' font-bold text-3xl '>Websites</h1>
                <span className='my-auto text-orange-600 text-2xl ml-2 '><BsArrowRightCircle /></span>

            </div>
            <h1>Fit For Purpose.</h1>
            <p>I am a website designer who focuses on creating memorable websites.
                 The aim isn't to have a website that blends in with the rest; it's 
                 to stand out from the crowd.
            </p>
            


        </div>
    </div>
    
    </>)
}
export default Home;