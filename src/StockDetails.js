import {
    useParams
  } from "react-router-dom";
import Button from './components/Button';

function StockDetails({ stocks }) {
    let { id } = useParams();

    return (
        <div style={{ backgroundColor: '#f7f7ff', padding: '2em', height: '100vh', display: 'flex', justifyContent: 'center' }}>
            {stocks.map((s) => {
                if (id === s.id) {
                    return (
                        <div className='card' style={{ marginTop: '1em', width: '40%' }} key={s.id}>
                            <h1>{s.sname}</h1>
                            <img alt='detailimg' src={s.img} height='50%'/>
                            <p>{s.desc}</p>
                            <h1>{s.price} Baht</h1>
                            <Button text='Add to card' color='#1885f2'/>
                        </div>
                    )
                }
                return (
                    <h1 key={s.id} style={{ display: 'none' }}>{s.id}</h1>
                )
            })}
        </div>
    )
}

export default StockDetails;