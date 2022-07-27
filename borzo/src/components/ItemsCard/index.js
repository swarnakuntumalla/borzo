import './style.css';

import card_1 from '../../assets/card1.png';
import card_2 from '../../assets/entry__group__2.png';
import card_3 from '../../assets/entry__group__3.png';
import card_4 from '../../assets/entry__group__4-1.png';
import card_5 from '../../assets/entry__group__5.png';
import card_6 from '../../assets/entry__group__6.png';

let cardsData = [
    {
        "title": "E-shop items",
        "text": "Any packages up to 20kg with cash on delivery and buyout options"
    },
    {
        "title": "Documents",
        "text": "Our couriers can deliver and return signed documents fast and secure it in a paper-case"
    },
    {
        "title": "Clothes and shoes",
        "text": "Free waiting time on the address so that your client can make their decision"
    },
    {
        "title": "Food and groceries",
        "text": "We use insulated backpacks to preserve the taste — whether the food is hot or frozen"
    },
    {
        "title": "Flowers and gifts",
        "text": "All fragile and delicate items are handled with maximum care and attention"
    },
    {
        "title": "And anything else",
        "text": "We will take into account the qualities of the item and all your requests"
    },
]


const ItemsCard = () => {
    return (
        <ul>
            <div className='flex flex-row'>
                <li className="card-item mt-6 bg-zinc-100">
                    <img src={card_1} alt="cardImage" />
                    <h1 className="pl-4 pr-4 mt-4">{cardsData[0].title}</h1>
                    <p className="pl-4 pr-4">{cardsData[0].text}</p>
                </li>
                <li className="card-item mt-6 bg-zinc-100">
                    <img src={card_2} alt="cardImage" />
                    <h1 className="pl-4 pr-4 mt-4">{cardsData[1].title}</h1>
                    <p className="pl-4 pr-4">{cardsData[1].text}</p>
                </li>
                <li className="card-item mt-6 bg-zinc-100">
                    <img src={card_3} alt="cardImage" />
                    <h1 className="pl-4 pr-4 mt-4">{cardsData[2].title}</h1>
                    <p className="pl-4 pr-4">{cardsData[2].text}</p>
                </li>
            </div>
            <div className='flex flex-row'>
                <li className="card-item mt-6 bg-zinc-100">
                    <img src={card_4} alt="cardImage" />
                    <h1 className="pl-4 pr-4 mt-4">{cardsData[3].title}</h1>
                    <p className="pl-4 pr-4">{cardsData[3].text}</p>
                </li>
                <li className="card-item mt-6 bg-zinc-100">
                    <img src={card_5} alt="cardImage" />
                    <h1 className="pl-4 pr-4 mt-4">{cardsData[4].title}</h1>
                    <p className="pl-4 pr-4">{cardsData[4].text}</p>
                </li>
                <li className="card-item mt-6 bg-zinc-100">
                    <img src={card_6} alt="cardImage" />
                    <h1 className="pl-4 pr-4 mt-4">{cardsData[5].title}</h1>
                    <p className="pl-4 pr-4">{cardsData[5].text}</p>
                </li>
                </div>
        </ul>
    )
}

export default ItemsCard;