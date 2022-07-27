import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import boxes from '../../assets/boxes.png';
import ItemsCard from '../ItemsCard';
const Home = () => {
    return (
        <div className='w-full'>
            <div className='bg-zinc-100 h-full w-full p-16 pl-24 flex flex-row'>
                <div>
                    <h1>Business delivery you can trust</h1>
                    <p>Fast intracity courier delivery service. We make delivery for businesses easier</p>
                    <div className='shadow-xl h-60 w-9/12 p-6 bg-white rounded-xl'>
                        <div>
                            <input type="text" placeholder='Pick-up' className='text-input'/>
                        </div>
                        <div>
                            <input type="text" placeholder='Drop-off' className='text-input'/>
                        </div>
                        <button className='calculate-btn'>Calculate the price</button>
                        <p className='text-slate-600 text-center mt-2'>Urgent delivery at no extra cost or commission</p>
                    </div>
                </div>
                <div>
                    <img src={boxes} alt="boxes" className='box-img'/>
                </div>
            </div>

            <div className='p-16 pl-24'>
                <h1>For any type of business,
                <br/>we know how to help</h1>
                <ItemsCard />
            </div>

            <div>
                <h1>Payment methods</h1>
                <p>Try Borzo delivery right now: register and choose preferred payment method</p>
            </div>
        </div>
    )
}

export default Home;