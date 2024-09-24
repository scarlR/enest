import enestLogo from '../assets/enestLogo.svg'
import program from '../assets/program.svg'
import testseries from '../assets/testseries.svg'
import skillconnect from '../assets/skillconnect.svg'
import expertconnect from '../assets/expertconnect.svg'
import dropdown from '../assets/dropdown.svg'
import  profileimage  from '../assets/profileimage.svg'


const Navbar = () => {
    return (
        <div className='flex justify-around h-20 py-5'>
        <div className='lefty'>
          <img src={enestLogo} alt="logo" />
        </div>
        <div className='middle '>
            <ul className='hidden lg:flex gap-8'>
                <li className='flex justify-center items-center gap-2'>
                    <img src={program} alt="program" />
                    <span>Program</span>
                </li>
                 <li className='flex justify-center items-center gap-2'>
                    <img src={testseries} alt="testseries" />
                    <span>Test Series</span>
                </li>
                 <li className='flex justify-center items-center gap-2'>
                    <img src={skillconnect} alt="skillconnect" />
                    <span>Skill Connect</span>
                </li>
                 <li className='flex justify-center items-center gap-2'>
                    <img src={expertconnect} alt="expertconnect" />
                    <span>Expert Connect</span>
                </li>
                 <li className='flex justify-center items-center gap-2'>       
                    <span>More</span>
                     <img src={dropdown} alt="dropdown" />
                </li>
            </ul>
        </div>
        <div className='righty'>
            <img src={profileimage} alt="profileimage" />
         </div>
      </div>

  )
}

export default Navbar