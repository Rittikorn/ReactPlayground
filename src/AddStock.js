import { useState } from "react";

function AddStock({ handleAddStock }) {
    const [sname, setsname] = useState('');
    const [img, setimg] = useState('');
    const [price, setprice] = useState('');
    const [desc, setdesc] = useState('');
    const [id, setID] = useState('')
    const handlesname = (e) => setsname(e.target.value);
    const handleimg = (e) => setimg(e.target.value);
    const handleprice = (e) => setprice(e.target.value);
    const handledesc = (e) => setdesc(e.target.value);

    const handleAddButton = (e) => {
        e.preventDefault();
        if (sname === '') {
            alert('Please type in stock first');
            return;
        }
        setID(genRanHex(5));
        handleAddStock({ id, sname, img, price, desc });
        setsname('');
        setimg('');
        setprice('');
        setdesc('');
        setID('')
        alert('Product has beed sucessfully added to stock!');
    }

    const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: '35%', paddingRight: '35%' }}>
            <form className='form-control' onSubmit={handleAddButton}>
                <label className='label'>Stock Name</label>
                <input type='text' placeholder='Stock name' value={sname} onChange={handlesname} className='input'/>
                <label className='label'>Image URL</label>
                <input type='text' placeholder='Image URL' value={img} onChange={handleimg} className='input'/>
                <label className='label'>Stock Price</label>
                <input type='text' placeholder='Stock Price' value={price} onChange={handleprice} className='input'/>
                <label className='label'>Description</label>
                <input type='text' placeholder='Description' value={desc} onChange={handledesc} className='input'/>
                <input type='submit' value='Add to stock' className='btn' />
            </form>
        </div>
    )
}

export default AddStock;