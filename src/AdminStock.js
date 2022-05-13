import { Link, useNavigate } from "react-router-dom";

function AdminStock({ stocks, handleDeleteStock }) {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: '#f7f7ff', padding: '2em', height: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2em' }}>
                <h1>Stock List</h1>
            </div>
            
            {stocks.length > 0 ? 
                <div className='cardarea'>
                    {stocks.map((s) => {
                        return (
                            <div className='card' key={s.id} onClick={() => {navigate('/admin/editstock/' + s.id)}}>
                                <p>{s.sname}</p>
                                <img alt='stockimg' src={s.img} height='50%' />
                                <h1>{s.price} Baht</h1>
                                <button className='btn' onClick={() => {handleDeleteStock(s.id)}}>Remove from stock</button>
                            </div>
                        )
                    })}
                </div> : 
                <div>
                    <p>Nothing to see here, do you want to add stock?</p>
                    <Link to='/admin/createstock'>Add stock page</Link>
                </div>
            }
        </div>
    )
}

export default AdminStock;