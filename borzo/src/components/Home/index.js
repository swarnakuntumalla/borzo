import './style.css';
import boxes from '../../assets/boxes.png';
import ItemsCard from '../ItemsCard';
import LogisticsCard from '../LogisticsCard';
import casOnDeliveryIcon from '../../assets/entry__icon__cash.svg';
import buyOutIcon from '../../assets/entry__icon__buyout.svg';
import trackingIcon from '../../assets/entry__icon__tracking.svg';
import samedayDeliveryIcon from '../../assets/entry__icon__sameday.svg';
import apiIcon from '../../assets/entry__group__12.png';
import websiteIcon from '../../assets/entry__group__13.png'
import {Link} from 'react-router-dom';

const logisticsSolutions = [
    {
        "id": "1",
        "title": "Flexible timing",
        "text": "Schedule your delivery for a particular date and time, or choose express delivery that will be completed ASAP"
    },
    {
        "id": "2",
        "title": "Combined orders",
        "text": "Delivery is faster and cheaper thanks to smart logistics solutions: send several parcels with a single courier"
    },
    {
        "id": "3",
        "title": "Attentive support",
        "text": "The support team is ready to answer all your questions daily from 6:00 till midnight"
    },
    {
        "id": "4",
        "title": "Money guarantee",
        "text": "We will compensate up to ₹ 50,000 of declared value if your package is lost or damaged"
    },
]
const Home = () => {
    return (
        <div className='w-full mb-20'>
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
                        <Link to='/order'>
                            <button className='calculate-btn'>Calculate the price</button>
                        </Link>
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

            <div className='ml-24 mr-24 p-10 payment'>
                <h1>Payment methods</h1>
                <p>Try Borzo delivery right now: register and choose preferred payment method</p>
                <button className='signup-btn mt-4'>Sign Up</button>
                <p className='got-questions-text mt-4'>Got any questions?</p>
            </div>
            <div className='p-16 pl-24'>
                <h1>Smart and easy logistics solutions<br/> designed for your convenience</h1>
                <ul className='flex flex-row flex-wrap'>
                    {logisticsSolutions.map(each => (
                        <LogisticsCard logisticsSolution={each} key={each.id} />
                    ))}
                </ul>
            </div>

            <div className='pl-24'>
                <h1>Collecting money for your items — <br/>or buying it out on customers’ behalf</h1>
                <div className='flex flex-row ml-80'>
                <div className='cash-box'>
                    <img src={casOnDeliveryIcon} alt="cash-on-delivery-icon"/>
                    <h2>Cash on delivery</h2>
                    <p>A courier will collect cash for your items from the recipient and transfer money to you</p>
                </div>
                <div className='cash-box ml-36'>
                    <img src={buyOutIcon} alt="buy-out-icon"/>
                    <h2>Buyout</h2>
                    <p>A courier will buy an item from the seller, deliver it and get money back from the recipient</p>
                </div>
                </div>
            </div>

            <div className='pl-24 pt-10'>
                <h1>Creating a great delivery experience <br/> for your customers​</h1>
                <div className='flex flex-row ml-80'>
                <div className='cash-box'>
                    <img src={trackingIcon} alt="tracking-icon"/>
                    <h2>Easy tracking</h2>
                    <p>Recipients can track their orders on the map and see the estimated delivery time</p>
                </div>
                <div className='cash-box ml-36'>
                    <img src={samedayDeliveryIcon} alt="sameday-delivery-icon"/>
                    <h2>Sameday delivery</h2>
                    <p>Proven: sameday delivery encourages to buy. See for yourself!</p>
                </div>
                </div>
            </div>
            <div className='bg-zinc-100 p-16 pl-24'>
                <div className='flex flex-row pl-20'>
                    <div className='cards p-10'>
                        <h1>Become a business client…</h1>
                        <p>For companies: we provide a top-up balance, legal documents and receipts. And for large volumes — a personal manager and lower rates</p>
                        <button className='signup-btn1'>Sign Up</button>
                    </div>
                    <div className='cards p-10 ml-10'>
                        <h1>…Or try a single delivery right now</h1>
                        <p>Make an order in 20 seconds to try our best options. Ideal for a one-time delivery: no need to register or sign a contract</p>
                        <button className='signup-btn1'>Order delivery</button>
                    </div>
                </div>
                <h1  className='m-10'>Choose how to place orders: by filling <br/>in a form or via API integration</h1>
                <div className='flex flex-row pl-20'>
                    <div className='cards1 ml-56'>
                            <img src={apiIcon} alt='api-icon'/>
                            <h1 className='pl-6 pt-6'>API integraton</h1>
                            <p className='pl-6'>Integrate our delivery form into your website for a faster and easier check-out</p>
                    </div>
                    <div className='cards1 ml-10'>
                            <img src={websiteIcon} alt='website-icon'/>
                            <h1 className='pl-6 pt-6'>App and website</h1>
                            <p className='pl-6'>Fill in an order form and place your order in seconds via Borzo website or app</p>
                    </div>
                </div>
                <h1  className='m-10'>Delivering 4 million packages a month <br/> in 10 countries</h1>
            </div>
            <div className='home-last-section'>
                <div className='hls-des'>
                    <h1>Download the app and all couriers will be at your hand</h1>
                    <p>In any free minute, create new orders and monitor the implementation of already created.</p>
                    <div className='hls-link-container'>
                        <img className='c-section6-img' src='https://borzodelivery.com/in/elementor/content/uploads/2022/05/1048dd101e592e092b23e1d2fc7066dc-1536x1536.png' alt='scanner'/>
                        <div id='fl-container' className='c-links-container'>
                            <a className='c-link-container fl' href="https://app.adjust.net.in/8bgnb9l">
                                <img className='c-link-logo' src='https://www.clipartmax.com/png/full/241-2412829_our-closed-api-means-your-data-cannot-be-accessed-by-apple-logo.png' alt="appstore"/>
                                <div>
                                <p className='c-link-para'>Available on the </p>
                                <p className='c-link-para1'>App Store</p>
                                </div>
                            </a>
                            <a className='c-link-container fl' href="https://app.adjust.net.in/8bgnb9l">
                                <img className='c-link-logo' src='https://www.freepnglogos.com/uploads/google-play-png-logo/google-severs-music-studio-png-logo-21.png' alt="google store"/>
                                <div>
                                <p className='c-link-para'>Get it on </p>
                                <p className='c-link-para1'>Google Play</p>
                                </div>
                            </a>
                            <a className='c-link-container fl' href="https://app.adjust.net.in/8bgnb9l">
                                <img className='c-link-logo' src='https://upload.wikimedia.org/wikipedia/commons/f/f6/Huawei_AppGallery.svg' alt="app gallery"/>
                                <div>
                                <p className='c-link-para'>EXPLORE IT ON </p>
                                <p className='c-link-para1'>App Gallery</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='hls-img'></div>
            </div>
            <div className='footer-home'>
                <div className='foot-des'>
                    <p className='foot-des1-p'>Mumbai</p>
                    <p className='foot-des1-p'>Delhi/NCR</p>
                    <p className='foot-des1-p'>Bengaluru</p>
                    <p className='foot-des1-p'>Hyderabad</p>
                    <p className='foot-des1-p'>Ahmedabad</p>
                    <p className='foot-des1-p'>Chennai</p>
                    <p className='foot-des1-p'>Kolkata</p>
                    <p className='foot-des1-p'>Pune</p>
                </div>
                <div className='foot-des'>
                    <p className='foot-des1-p foot-des2-p'>Become a courier</p>
                    <p className='foot-des1-p foot-des2-p'>Cookie Statement</p>
                    <p className='foot-des1-p foot-des2-p'>Privacy Policy</p>
                    <p className='foot-des1-p foot-des2-p'>About</p>
                    <p className='foot-des1-p foot-des2-p'>Disclaimers and Dispute Resolution</p>
                    <p className='foot-des1-p foot-des2-p'>Refund and Cancellation</p>
                    <p className='foot-des1-p foot-des2-p'>Community Guidelines</p>
                    <p className='foot-des1-p foot-des2-p'>Borzo Blog</p>
                </div>
                <div className='foot-des'>
                    <p className='foot-des1-p foot-des2-p'>For Businesses</p>
                    <p className='foot-des1-p foot-des2-p'>API Integration</p>
                    <p className='foot-des1-p foot-des2-p'>FAQs</p>
                    <p className='foot-des1-p foot-des2-p'>Contacts</p>
                    <p className='foot-des1-p foot-des2-p'>Track Order</p>
                    <p className='foot-des1-p foot-des2-p'>Courier Service in Mumbai</p>
                    <p className='foot-des1-p foot-des2-p'>Pricing</p>
                    <p className='foot-des1-p foot-des2-p'>Terms and conditions</p>
                </div>
                <div id='fl-container' className='c-links-container'>
                    <a className='c-link-container fl' href="https://app.adjust.net.in/8bgnb9l">
                        <img className='c-link-logo' src='https://www.clipartmax.com/png/full/241-2412829_our-closed-api-means-your-data-cannot-be-accessed-by-apple-logo.png' alt='app store'/>
                        <div>
                            <p className='c-link-para'>Available on the </p>
                            <p className='c-link-para1'>App Store</p>
                        </div>
                    </a>
                    <a className='c-link-container fl' href="https://app.adjust.net.in/8bgnb9l">
                        <img className='c-link-logo' src='https://www.freepnglogos.com/uploads/google-play-png-logo/google-severs-music-studio-png-logo-21.png' alt='google play'/>
                        <div>
                            <p className='c-link-para'>Get it on </p>
                            <p className='c-link-para1'>Google Play</p>
                        </div>
                    </a>
                    <a className='c-link-container fl' href="https://app.adjust.net.in/8bgnb9l">
                        <img className='c-link-logo' src='https://upload.wikimedia.org/wikipedia/commons/f/f6/Huawei_AppGallery.svg' alt='app gallery'/>
                        <div>
                            <p className='c-link-para'>EXPLORE IT ON </p>
                            <p className='c-link-para1'>App Gallery</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;