import './style.css';

const Weight = props => {
    const {wt, selectWt, selectedWt} = props;
    const selectedCls = wt === selectedWt ? 'selected': "" ;
    const selectCard = () => {
        selectWt(wt);
    }
    console.log(selectedWt);

    return(
        <div onClick={selectCard} className={`wt-container ${selectedCls}`}>
            <p>Up to {wt} kg</p>
        </div>
    )
}

export default Weight;