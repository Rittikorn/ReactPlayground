import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditStock({ handleEditStock }) {
    let { sid } = useParams();
    const navigate = useNavigate();

    const [stock, setStock] = useState({sname: '', img: '', price: '', desc: '', id: ''});
    const [sname, setsname] = useState('');
    const [img, setimg] = useState('');
    const [price, setprice] = useState('');
    const [desc, setdesc] = useState('');
    const [id, setid] = useState('')
    const handlesname = (e) => setsname(e.target.value);
    const handleimg = (e) => setimg(e.target.value);
    const handleprice = (e) => setprice(e.target.value);
    const handledesc = (e) => setdesc(e.target.value);

    useEffect(() => {
        const getStock = async () => {
            const res = await fetch(`http://localhost:5000/stockArr/${sid}`);
            const data = await res.json();
            setStock({sname: data.sname, img: data.img, price: data.price, desc: data.desc, id: data.id});
            setsname(data.sname);
            setimg(data.img);
            setprice(data.price);
            setdesc(data.desc);
        }
        getStock();
    }, []);

    function handleEditButton(e) {
        e.preventDefault();
        if (sname === '') {
            alert('Please type in stock first');
            return;
        }
        setid(genRanHex(5));
        handleEditStock(sid, { id, sname, img, price, desc });
        setsname('');
        setimg('');
        setprice('');
        setdesc('');
        setid('')
        navigate('/admin');
        return
    }

    const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    return (
        stock.sname !== "" ? 
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: '35%', paddingRight: '35%' }}>
            <form className='form-control' onSubmit={handleEditButton}>
                <label className='label'>Stock Name</label>
                <input type='text' placeholder='Stock name' value={sname} onChange={handlesname} className='input'/>
                <label className='label'>Image URL</label>
                <input type='text' placeholder='Image URL' value={img} onChange={handleimg} className='input'/>
                <label className='label'>Stock Price</label>
                <input type='text' placeholder='Stock Price' value={price} onChange={handleprice} className='input'/>
                <label className='label'>Description</label>
                <input type='text' placeholder='Description' value={desc} onChange={handledesc} className='input'/>
                <input type='submit' value='Done' className='btn' />
            </form>
        </div> : 
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Loading...</h1>
        </div>
        
    )
}

export default EditStock;
