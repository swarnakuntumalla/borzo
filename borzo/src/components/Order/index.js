import { Component } from 'react';
import Weight from '../WeightsCard';
import './style.css';

const weights = [1, 5, 10, 15, 20];

class Order extends Component{
    state = {'s1More': false, 'selectedS1Card': true, 'selectedWt': 1, 'selectedPayment': true};

    changeMore = () => {
        this.setState(prev => ({'s1More': !prev.s1More}));
    }

    selectS1Card1 = () => {
        this.setState({'selectedS1Card': true});
    }

    selectS1Card2 = () => {
        this.setState({'selectedS1Card': false});
    }

    selectWt = wt => {
        this.setState({'selectedWt': wt});
    }

    selectCashPayment = () => {
        this.setState({'selectedPayment': true});
    }

    selectCardPayment = () => {
        this.setState({'selectedPayment': false});
    }

    render(){
        const {s1More, selectedS1Card, selectedWt, selectedPayment} = this.state

        return(
            <div className='order-main-container'>
                <h1 className='main-heading'>Order</h1>
                <div className='order-section1-container'>
                    <div className='s1-cards-container'>
                        <div onClick={this.selectS1Card1} className={selectedS1Card ? 's1-card selected-s1-card' : 's1-card'}>
                            <svg width="24" height="24" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.62 14h.24c14.627.16 26.298 12.071 26.138 26.62-.08 14.629-11.99 26.46-26.618 26.38C20.75 66.92 8.92 55.009 9 40.38 9.08 25.751 20.99 13.92 35.62 14zm-.014 3h.212c12.973.142 23.322 10.705 23.18 23.606C58.929 53.58 48.366 64.07 35.394 64 22.421 63.929 11.93 53.366 12 40.394 12.071 27.42 22.633 16.93 35.606 17z" fill={selectedS1Card ? "#0048ff" : "#969493"}></path>
                                <path d="M35.5 23c0-1.657 1.35-3.023 2.99-2.78a20.503 20.503 0 0117.29 17.29c.242 1.64-1.123 2.99-2.78 2.99H38.5a3 3 0 01-3-3V23zM35.732 5h-.549C32.294 5 30 7.25 30 10.083v.75c0 .084.085.167.17.167h10.66c.085 0 .17-.083.17-.167v-.75C40.915 7.25 38.62 5 35.732 5z" fill={selectedS1Card ? "#0048ff" : "#969493"}></path>
                            </svg>
                            <p className='s1-p1'>Deliver Now</p>
                            <p className='s1-p2'>We will assign the nearest courier to pick-up and deliver as soon as possible.</p>
                            <p className='s1-p3'>from ₹ 45</p>
                            {s1More && 
                            (<>
                                <hr/>
                                <div className='d-flex'>
                                    <div class="Entry_Icon_3mTUC"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" fill="#0048FF" fill-opacity="0.1"></path><path d="M13.278 11.516a4.434 4.434 0 002.617 1.354c.38.052.681-.263.681-.63 0-.375-.304-.66-.653-.727-.843-.162-1.533-.67-1.91-1.332h0l-.002-.002-.594-.95h0l-.001-.002c-.248-.373-.627-.629-1.075-.629-.096 0-.177.016-.25.03l-.002.001a1.079 1.079 0 01-.223.028h-.015l-.015.007-2.71 1.146a.697.697 0 00-.426.642v1.787a.672.672 0 001.344 0v-1.002a.54.54 0 01.345-.504l.542-.21-.802 4.06a.54.54 0 01-.638.424l-1.706-.348a.682.682 0 10-.27 1.338l2.973.595c.37.074.732-.16.816-.529l.43-1.89.955.91a.54.54 0 01.168.39v2.704a.672.672 0 101.344 0v-3.594a.697.697 0 00-.216-.505l-1.024-.975.317-1.587zm-.046-3.059a1.27 1.27 0 001.266-1.265 1.27 1.27 0 00-1.266-1.266 1.27 1.27 0 00-1.266 1.266c0 .696.57 1.265 1.266 1.265z" fill="#0048FF" stroke="#0048FF" stroke-width="0.156"></path></svg></div>
                                    <div class="Entry_Icon_3mTUC"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" fill="#0048FF" fill-opacity="0.1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.664 7.635c0-.764.62-1.384 1.383-1.384 1.44.107 2.333.969 2.253 1.297-.035.14-.333.095-.67.044-.453-.068-.977-.147-1.035.194-.153.352.467.636.809.793l.024.011c.122.056.171.176.134.304-.114.386-.272.55-.573.652a.4.4 0 01-.314-.032l-1.397-.729a1.382 1.382 0 01-.614-1.15zm-1.215 6.874l-.338 2.058a.753.753 0 00.619.867h.124a.753.753 0 00.742-.63l.405-2.734a.766.766 0 00-.236-.675L11.46 12.18l1.271-1.305L14.047 12c.105.1.24.162.383.18l2.25.27a.652.652 0 00.675-.45.652.652 0 00-.585-.72l-1.654-.157-1.991-2.003-.113-.113a1.124 1.124 0 00-1.642 0L9.4 10.954a1.125 1.125 0 000 1.642l2.048 1.913zm-4.356-.566a2.08 2.08 0 011.16-.345 2.07 2.07 0 012.07 2.07 2.081 2.081 0 11-3.23-1.724zm7.496.006c.342-.23.745-.351 1.157-.351a2.07 2.07 0 012.081 2.07 2.08 2.08 0 11-3.238-1.719z" fill="#0048FF"></path></svg></div>                    
                                </div>
                                <p className='s1-p4'>Delivery by 2-wheelers or public transport</p>
                                <div className='s1-icon-container'>
                                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.205 8.51C4.72 7.402 4.5 6.258 4.5 5.572c0-1.657 2.015-3 4.5-3s4.5 1.343 4.5 3c0 .686-.22 1.83-.705 2.938a4.5 4.5 0 11-7.59 0zm6.66-1.05c.267-.765.385-1.481.385-1.888 0-.28-.17-.687-.761-1.081-.583-.388-1.459-.669-2.489-.669-1.03 0-1.906.28-2.489.669-.59.394-.761.8-.761 1.081 0 .407.118 1.123.385 1.887A4.482 4.482 0 019 6.43c1.089 0 2.087.387 2.865 1.03z" fill="#969493"></path></svg>
                                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.205 8.51C4.72 7.402 4.5 6.258 4.5 5.572c0-1.657 2.015-3 4.5-3s4.5 1.343 4.5 3c0 .686-.22 1.83-.705 2.938a4.5 4.5 0 11-7.59 0zm6.66-1.05c.267-.765.385-1.481.385-1.888 0-.28-.17-.687-.761-1.081-.583-.388-1.459-.669-2.489-.669-1.03 0-1.906.28-2.489.669-.59.394-.761.8-.761 1.081 0 .407.118 1.123.385 1.887A4.482 4.482 0 019 6.43c1.089 0 2.087.387 2.865 1.03z" fill="#969493"></path></svg>
                                </div>
                                <p className='s1-p4'>Up to 20 kg</p>
                                <div className='s1-gray-container'>
                                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.388 14.998a1.249 1.249 0 001.224 0l.19-.106a9.474 9.474 0 004.823-8.248v-.09c0-.45-.244-.867-.637-1.09L9.611 3.003a1.255 1.255 0 00-1.225 0L4.011 5.465c-.392.222-.636.64-.636 1.088v.091a9.474 9.474 0 004.824 8.248l.19.106zm1.06-10.381l3.198 1.799a.916.916 0 01.465.796v.066a6.925 6.925 0 01-3.525 6.029l-.138.077c-.225.127-.448-.093-.448-.351V4.967c0-.258.222-.477.447-.35z" fill="#969493"></path></svg>
                                </div>
                                <p className='s1-p4'>You can choose insurance amount</p>
                            </>)}
                        </div>
                        <div onClick={this.selectS1Card2} className={!selectedS1Card ? 's1-card selected-s1-card' : 's1-card'}>
                        <svg width="24" height="24" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.732 5h-.549C19.294 5 17 7.25 17 10.083v.75c0 .084.085.167.17.167h10.66c.085 0 .17-.083.17-.167v-.75C27.915 7.25 25.62 5 22.732 5zM31 25.8a1.8 1.8 0 011.8-1.8h5.4a1.8 1.8 0 011.8 1.8v5.4a1.8 1.8 0 01-1.8 1.8h-5.4a1.8 1.8 0 01-1.8-1.8v-5.4zM44.8 24a1.8 1.8 0 00-1.8 1.8v5.4a1.8 1.8 0 001.8 1.8h5.4a1.8 1.8 0 001.8-1.8v-5.4a1.8 1.8 0 00-1.8-1.8h-5.4zM19 37.8a1.8 1.8 0 011.8-1.8h5.4a1.8 1.8 0 011.8 1.8v5.4a1.8 1.8 0 01-1.8 1.8h-5.4a1.8 1.8 0 01-1.8-1.8v-5.4zM32.8 36a1.8 1.8 0 00-1.8 1.8v5.4a1.8 1.8 0 001.8 1.8h5.4a1.8 1.8 0 001.8-1.8v-5.4a1.8 1.8 0 00-1.8-1.8h-5.4zM43 37.8a1.8 1.8 0 011.8-1.8h5.4a1.8 1.8 0 011.8 1.8v5.4a1.8 1.8 0 01-1.8 1.8h-5.4a1.8 1.8 0 01-1.8-1.8v-5.4zM20.8 48a1.8 1.8 0 00-1.8 1.8v5.4a1.8 1.8 0 001.8 1.8h5.4a1.8 1.8 0 001.8-1.8v-5.4a1.8 1.8 0 00-1.8-1.8h-5.4zM31 49.8a1.8 1.8 0 011.8-1.8h5.4a1.8 1.8 0 011.8 1.8v5.4a1.8 1.8 0 01-1.8 1.8h-5.4a1.8 1.8 0 01-1.8-1.8v-5.4zM44.8 48a1.8 1.8 0 00-1.8 1.8v5.4a1.8 1.8 0 001.8 1.8h5.4a1.8 1.8 0 001.8-1.8v-5.4a1.8 1.8 0 00-1.8-1.8h-5.4z" fill={!selectedS1Card ? "#0048ff" : "#969493"}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M55 14H16c-3.9 0-7 3.1-7 7v39c0 3.9 3.1 7 7 7h39c3.9 0 7-3.1 7-7V21c0-3.9-3.1-7-7-7zm-2.208 3H18.208A6.17 6.17 0 0012 23.207v34.585A6.17 6.17 0 0018.207 64h34.585A6.17 6.17 0 0059 57.792V23.208A6.17 6.17 0 0052.792 17z" fill={!selectedS1Card ? "#0048ff" : "#969493"}></path><path d="M48.183 5h.549c2.889 0 5.183 2.25 5.268 5.083v.75c0 .084-.085.167-.17.167H43.17c-.085 0-.17-.083-.17-.167v-.75C43 7.25 45.294 5 48.183 5z" fill={!selectedS1Card ? "#0048ff" : "#969493"}></path></svg>
                            <p className='s1-p1'>Schedule</p>
                            <p className='s1-p2'>We will arrive at each address at specified times.</p>
                            <p className='s1-p3'>from ₹ 45</p>
                            {s1More && 
                            (<>
                                <hr/>
                                <div className='d-flex'>
                                    <div class="Entry_Icon_3mTUC"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" fill="#0048FF" fill-opacity="0.1"></path><path d="M13.278 11.516a4.434 4.434 0 002.617 1.354c.38.052.681-.263.681-.63 0-.375-.304-.66-.653-.727-.843-.162-1.533-.67-1.91-1.332h0l-.002-.002-.594-.95h0l-.001-.002c-.248-.373-.627-.629-1.075-.629-.096 0-.177.016-.25.03l-.002.001a1.079 1.079 0 01-.223.028h-.015l-.015.007-2.71 1.146a.697.697 0 00-.426.642v1.787a.672.672 0 001.344 0v-1.002a.54.54 0 01.345-.504l.542-.21-.802 4.06a.54.54 0 01-.638.424l-1.706-.348a.682.682 0 10-.27 1.338l2.973.595c.37.074.732-.16.816-.529l.43-1.89.955.91a.54.54 0 01.168.39v2.704a.672.672 0 101.344 0v-3.594a.697.697 0 00-.216-.505l-1.024-.975.317-1.587zm-.046-3.059a1.27 1.27 0 001.266-1.265 1.27 1.27 0 00-1.266-1.266 1.27 1.27 0 00-1.266 1.266c0 .696.57 1.265 1.266 1.265z" fill="#0048FF" stroke="#0048FF" stroke-width="0.156"></path></svg></div>
                                    <div class="Entry_Icon_3mTUC"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" fill="#0048FF" fill-opacity="0.1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.664 7.635c0-.764.62-1.384 1.383-1.384 1.44.107 2.333.969 2.253 1.297-.035.14-.333.095-.67.044-.453-.068-.977-.147-1.035.194-.153.352.467.636.809.793l.024.011c.122.056.171.176.134.304-.114.386-.272.55-.573.652a.4.4 0 01-.314-.032l-1.397-.729a1.382 1.382 0 01-.614-1.15zm-1.215 6.874l-.338 2.058a.753.753 0 00.619.867h.124a.753.753 0 00.742-.63l.405-2.734a.766.766 0 00-.236-.675L11.46 12.18l1.271-1.305L14.047 12c.105.1.24.162.383.18l2.25.27a.652.652 0 00.675-.45.652.652 0 00-.585-.72l-1.654-.157-1.991-2.003-.113-.113a1.124 1.124 0 00-1.642 0L9.4 10.954a1.125 1.125 0 000 1.642l2.048 1.913zm-4.356-.566a2.08 2.08 0 011.16-.345 2.07 2.07 0 012.07 2.07 2.081 2.081 0 11-3.23-1.724zm7.496.006c.342-.23.745-.351 1.157-.351a2.07 2.07 0 012.081 2.07 2.08 2.08 0 11-3.238-1.719z" fill="#0048FF"></path></svg></div>                    
                                </div>
                                <p className='s1-p4'>Delivery by 2-wheelers or public transport</p>
                                <div className='s1-icon-container'>
                                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.205 8.51C4.72 7.402 4.5 6.258 4.5 5.572c0-1.657 2.015-3 4.5-3s4.5 1.343 4.5 3c0 .686-.22 1.83-.705 2.938a4.5 4.5 0 11-7.59 0zm6.66-1.05c.267-.765.385-1.481.385-1.888 0-.28-.17-.687-.761-1.081-.583-.388-1.459-.669-2.489-.669-1.03 0-1.906.28-2.489.669-.59.394-.761.8-.761 1.081 0 .407.118 1.123.385 1.887A4.482 4.482 0 019 6.43c1.089 0 2.087.387 2.865 1.03z" fill="#969493"></path></svg>
                                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.205 8.51C4.72 7.402 4.5 6.258 4.5 5.572c0-1.657 2.015-3 4.5-3s4.5 1.343 4.5 3c0 .686-.22 1.83-.705 2.938a4.5 4.5 0 11-7.59 0zm6.66-1.05c.267-.765.385-1.481.385-1.888 0-.28-.17-.687-.761-1.081-.583-.388-1.459-.669-2.489-.669-1.03 0-1.906.28-2.489.669-.59.394-.761.8-.761 1.081 0 .407.118 1.123.385 1.887A4.482 4.482 0 019 6.43c1.089 0 2.087.387 2.865 1.03z" fill="#969493"></path></svg>
                                </div>
                                <p className='s1-p4'>Up to 20 kg</p>
                                <div className='s1-gray-container'>
                                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.388 14.998a1.249 1.249 0 001.224 0l.19-.106a9.474 9.474 0 004.823-8.248v-.09c0-.45-.244-.867-.637-1.09L9.611 3.003a1.255 1.255 0 00-1.225 0L4.011 5.465c-.392.222-.636.64-.636 1.088v.091a9.474 9.474 0 004.824 8.248l.19.106zm1.06-10.381l3.198 1.799a.916.916 0 01.465.796v.066a6.925 6.925 0 01-3.525 6.029l-.138.077c-.225.127-.448-.093-.448-.351V4.967c0-.258.222-.477.447-.35z" fill="#969493"></path></svg>
                                </div>
                                <p className='s1-p4'>You can choose insurance amount</p>
                            </>)}
                        </div>
                    </div>
                    <p className='s1-more' onClick={this.changeMore}>More
                        {s1More ? (<svg width="24" height="24" fill="hsl(223,100%,50%)" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16 14.5a.997.997 0 01-.707-.293l-3.305-3.305-3.293 3.18a1 1 0 01-1.39-1.439l4-3.862a1 1 0 011.402.012l4 4A.999.999 0 0116 14.5z"></path></svg>):
                        (<svg width="24" height="24" fill="hsl(223,100%,50%)" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 15.5a.997.997 0 01-.707-.293l-4-4a.999.999 0 111.414-1.414l3.305 3.305 3.293-3.18a1 1 0 011.39 1.44l-4 3.861A.998.998 0 0112 15.5z"></path></svg>)}
                    </p>
                </div>
                <h1 className='section2-heading'>Weight</h1>
                <div className='wts-container'>
                    {
                        weights.map(eachWt => (
                            <Weight wt={eachWt} selectWt={this.selectWt} selectedWt={selectedWt} />
                        ))
                    }
                </div>
                <div className='section2-container'>
                    <div className='path-main-container'>
                        <div className='path-para-container'>
                            <p className='path-main-para'>From</p>
                            <div className='path-container'><p className='path-para'>1</p></div>
                        </div>
                        <div className='path'></div>
                        <div className='path-para-container'>
                            <p className='path-main-para to-para'>To</p>
                            <div className='path-container'><p className='path-para'>2</p></div>
                        </div>
                    </div>
                    <div className='order-s3-container'>
                        <div className='order-section1-container'>
                            <p>Pick up address</p>
                            <input className='order-input s3-input1' type='text' placeholder='Complete address: flat number, floor, building name, street name, landmarks, other' />
                            <p>10-digit mobile</p>
                            <input className='order-input' type='text' placeholder='+91 _ _  _ _ _ _ _ _ _ _' />
                            <textarea className='order-input s3-input2' type='text' rows='2' placeholder='flat number, floor, building name, street name, landmarks, dimensions, package, fragile, contact name, etc.' />
                            <p className='s3-para'>Additional Services (Cash on Delivery, Buy from Store)</p>
                        </div>
                        <div className='order-section1-container'>
                            <p>Delivery address</p>
                            <input className='order-input s3-input1' type='text' placeholder='48, Navlakha Square' />
                            <p>10-digit mobile</p>
                            <input className='order-input' type='text' placeholder='+91 _ _  _ _ _ _ _ _ _ _' />
                            <textarea className='order-input s3-input2' type='text' rows='2' placeholder='flat number, floor, building name, street name, landmarks, dimensions, package, fragile, contact name, etc.' />
                            <p className='s3-para'>Additional Services (Cash on Delivery, Buy from Store)</p>
                        </div>
                        <button className='add-address-btn' type='button'>+ Add delivery address</button>
                    </div>
                </div>
                <div className='order-section1-container'>
                    <input className='order-input s3-input1' type='text' placeholder='What are you sending? ( Note: We deliver cakes upto 1 kg only)' />
                    <div className='s4-para-container'>
                        <p className='s3-para'>Documents</p>
                        <p className='s3-para'>Food</p>
                        <p className='s3-para'>Cloth</p>
                        <p className='s3-para'>Groceries</p>
                        <p className='s3-para'>Flowers</p>
                        <p className='s3-para'>Cake</p>
                        <p className='s3-para'>Parcel</p>
                    </div>
                </div>
                <div className='order-section1-container'>
                    <h1 className='section5-heading'>Secure your parcel</h1>
                    <div className='d-flex'>
                        <input className='order-input' type='text' placeholder='Parcel Value' />
                        <p className='add-charges'>₹ 0 : Additional charges for securing parcel</p>
                    </div>
                    <p className='s5-para'>
                        Secure your important or fragile packages to retrieve the value in case of loss or damage done during delivery. We charge a fee of 0.85%+GST of the value you declare above (added to the delivery cost) for this. Valid upto <span className='s5-span'>₹ 50000</span>.
                    </p>
                </div>
                <div>
                    <input className='checkboxu' id='checkboxu' type='checkbox' />
                    <label className='check-para' htmlFor='checkboxu' >Prefer Courier with Delivery Bag</label>
                </div>
                <div className='section6'>
                    <h1 className='section5-heading'>Payment type</h1>
                    <div className='s6-cards-container'>
                        <div onClick={this.selectCashPayment} className={`section6-card ${selectedPayment && 's-pay'}`}>
                            <div className='cash-img'></div>
                            <div>
                                <p className='cash-p'>Cash</p>
                                <p className='s1-p2'>In Cash</p>
                            </div>
                        </div>
                        <div onClick={this.selectCardPayment} className={`section6-card ${!selectedPayment && 's-pay'}`}>
                            <div className='cash-img card-img'></div>
                            <div>
                                <p className='cash-p'>Credit card</p>
                                <p className='s1-p2'>Visa/MasterCard, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='s3-para'>I have a coupon</p>
                <div className='order-section1-container'>
                    <p className='total-para'>Total: from ₹ 45</p>
                    <button type='button' className='add-address-btn submit-btn'>Submit order</button>
                    <p>By Clicking 'Submit order' you are forwarding your request to couriers and agree to Our Terms and Conditions along with the <a href='https://borzodelivery.com/in/clauses-of-the-agreements'> clauses of the agreements </a></p>
                    <p>SMS notifications can be set after sending an order</p>
                    <p>To order a delivery boy just follow these simple steps:</p>
                    <ol className='steps-list'>
                        <li>Provide us with necessary details: addresses, phone numbers at each address, desired time of delivery, weight of the delivery</li>
                        <li>If you like our quote, then click 'Submit order' button</li>
                        <li>Receive a call from the delivery boy assigned for your order. Negotiate, at which point he will be paid. Give him more details about your parcel and desired process.</li>
                        <li>Send us a message or call our Operator in case of any doubt. You will get the Operator's number by clicking 'Order' button, save it with your order's number</li>
                        <li>Get your delivery performed. Give the Courier signature right on his smartphone's screen to verify, that all have been done properly</li>
                    </ol>
                    <p>- You may rate a courier after the delivery is done to help us assign just best couriers.</p>
                    <p>Best regards, Borzo team</p>
                    <a href='#top' className='to-top'>Jump to top</a>
                </div>
                <div className='footer-home footer-order'>
                <div className='foot-des foot-des-order'>
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
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>Become a courier</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>Cookie Statement</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>Privacy Policy</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>About</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>Disclaimers & Dispute Resolution</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>Refund and Cancellation</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>Community Guidelines</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>Borzo Blog</p>
                </div>
                <div className='foot-des'>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>For Businesses</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>API Integration</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>FAQs</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>Contacts</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>Track Order</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>Courier Service in Mumbai</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>Pricing</p>
                    <p className='foot-des1-p foot-des2-p foot-des2-order'>Terms and conditions</p>
                </div>
                <div id='fl-container' className='c-links-container'>
                    <a className='c-link-container fl flo' href="https://app.adjust.net.in/8bgnb9l">
                        <img className='c-link-logo' src='https://www.clipartmax.com/png/full/241-2412829_our-closed-api-means-your-data-cannot-be-accessed-by-apple-logo.png' />
                        <div>
                            <p className='c-link-para'>Available on the </p>
                            <p className='c-link-para1'>App Store</p>
                        </div>
                    </a>
                    <a className='c-link-container fl flo' href="https://app.adjust.net.in/8bgnb9l">
                        <img className='c-link-logo' src='https://www.freepnglogos.com/uploads/google-play-png-logo/google-severs-music-studio-png-logo-21.png' />
                        <div>
                            <p className='c-link-para'>Get it on </p>
                            <p className='c-link-para1'>Google Play</p>
                        </div>
                    </a>
                    <a className='c-link-container fl flo' href="https://app.adjust.net.in/8bgnb9l">
                        <img className='c-link-logo' src='https://upload.wikimedia.org/wikipedia/commons/f/f6/Huawei_AppGallery.svg' />
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
}

export default Order;