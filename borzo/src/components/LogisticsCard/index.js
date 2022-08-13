import './style.css';

const LogisticsCard = (props) =>{
    const {logisticsSolution} =  props;
    const {id, title, text} = logisticsSolution;
    return(
    <li className="item bg-zinc-100 mt-6">
        <button className='id-item'>{id}</button>
        <h2>{title}</h2>
        <p>{text}</p>
    </li>
    );
}

export default LogisticsCard