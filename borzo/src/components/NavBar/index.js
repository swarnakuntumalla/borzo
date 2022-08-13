import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import logo from '../../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import LocationModal from '../LocationModal';

const NavBar = () =>{
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div className='pt-2 drop-shadow-2xl flex flex-row justify-between text-sm'>
            <div className='flex flex-row'>
            <div className='w-20 h-12 ml-16'>
                <Link to='/'>
                <img src={logo} alt="logo"/>
                </Link>
            </div>
            <div className='flex flex-row hover:text-blue-600 cursor-pointer' onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faLocationDot} className="h-5 pl-4 pt-4 pr-2"></FontAwesomeIcon>
                <p className='mt-4'>Mumbai</p>
            </div>
            <LocationModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
            />
            </div>

            <div className='flex flex-row mt-2 font-bold'>
                <Link to="/courier" className='nav-item1 hover:text-blue-600 cursor-pointer mr-6 mt-2'>
                <p>Become a courier</p>
                </Link>
                <p className='hover:text-blue-600 cursor-pointer mr-6 mt-2'>Chat bot</p>
                <Link to="/order" className='nav-item1'>
                <button className='rounded-full h-10 border-2 border-solid mr-6 pr-4 pl-4 hover:bg-blue-600 hover:text-white'>Order Delivery</button> </Link>
                <Link to="/login" className='nav-item1'>
                <button className='rounded-full h-10 border-2 border-solid mr-6 pr-4 pl-4 hover:bg-blue-600 hover:text-white'>Login/SignUp</button>
                </Link> 
            </div>
        </div>
    )
}

export default NavBar;