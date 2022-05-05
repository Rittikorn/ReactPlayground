import {
    useParams
  } from "react-router-dom";
  import Button from './components/Button';

function StockDetails() {
    let { id } = useParams();
    const stockArr = [
        {
            id: 1,
            sname: 'Variable Resistor',
            img: 'https://inwfile.com/s-fw/5uvroq.jpg',
            price: '50',
            desc: 'An adjustable resistor in range of 200k to 1M Ohms',
        },
        {
            id: 2,
            sname: 'Capacitor',
            img: 'https://electropeak.com/pub/media/catalog/product/cache/fa232c603e0403143aafcf902b42df2f/_/e/_e_l_electrolytic-capacitor.jpg',
            price: '10',
            desc: '100 uF 450 V electrolite capacitor',
        },
        {
            id: 3,
            sname: 'Multimeter',
            img: 'https://www.truetronixonline.com/media/catalog/product/cache/1/image/600x599.33110367893/9df78eab33525d08d6e5fb8d27136e95/u/t/ut33d_1.jpg',
            price: '1,250',
            desc: 'Capable of measuring voltage, resistance, and current.',
        },
        {
            id: 4,
            sname: 'Red LED',
            img: 'https://inwfile.com/s-fw/qvw8pv.jpg',
            price: '5',
            desc: '5 mm 2.6 V LED',
        },
    ];

    return (
        <div style={{ backgroundColor: '#f7f7ff', padding: '2em', height: '100vh', display: 'flex', justifyContent: 'center' }}>
            <div className='card' style={{ marginTop: '1em', width: '40%' }}>
                <h1>{stockArr[id-1].sname}</h1>
                <img alt='detailimg' src={stockArr[id-1].img} height='50%'/>
                <p>{stockArr[id-1].desc}</p>
                <h1>{stockArr[id-1].price} Baht</h1>
                <Button text='Add to card' color='#1885f2'/>
            </div>
        </div>
        
    )
}

export default StockDetails;