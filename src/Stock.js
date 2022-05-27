import {
    useNavigate
  } from "react-router-dom";

function Stock({ stocks }) {
    const navigate = useNavigate();

    function handleCard(id) {
        navigate('/stock/' + id);
    }

    return (
        <div style={{ backgroundColor: '#f7f7ff', padding: '2em', height: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2em' }}>
                <h1>Welcome to electronics store</h1>
            </div>
            <div className='cardarea'>
                {stocks.map((s) => {
                    return (
                        <div className='card' key={s.id} onClick={() => handleCard(s.id)}>
                            <p>{s.sname}</p>
                            <img alt='stockimg' src={s.img} height='50%' />
                            <h1>{s.price} Baht</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Stock;