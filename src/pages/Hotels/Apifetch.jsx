import {useState, useEffect} from 'react'
import axios from 'axios';

function Apifetch() {
    const [data, setData] = useState([]);

    const fetchData = async () =>{
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    

  return (
    <div>
        {data.map((item,index)=>(
            <div key={index} className='flex justify-center items-center flex-col w-[100%]'>
                <p key={index}>{item.title}</p>
                <p>Rs. {item.price}</p>
                <img src={item.image} alt="ajhxsh" className='h-[200px] w-[200px]'/>
            </div>
        ))}
    </div>
  )
}

export default Apifetch