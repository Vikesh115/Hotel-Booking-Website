import { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from '../Footer/Footer'

function Blogs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNewsApi = async () => {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0aa8469f320f42629cf42f9e592b82f1")
      console.log(response?.data?.articles);
      setData(response?.data?.articles);
      setLoading(false);
    }
    fetchNewsApi()
  }, [])

  if(loading){
    return (
      <div className='flex flex-row justify-center items-center h-screen'>
          <div className='flex'>
              loading...
          </div>
          <div className='flex animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500'></div>
      </div>
  );
  }

  return (
    <>
      {data.map((news, index) => (
        <div key={index} className='flex flex-col m-2 justify-center items-center w-[100%]'>
          <strong className='flex w-[100%] items-start text-7xl p-2'>{news.title}</strong>
          <div className='flex flex-col gap-2'>
          <div><img src={news.urlToImage} alt={news.author} /></div>
          <div>{news.publishedAt}</div>
          <div className='flex items-start w-[100%]'>{news.description}</div>
          </div>
        </div>
      ))}
      <Footer/>
    </>
  )
}

export default Blogs;