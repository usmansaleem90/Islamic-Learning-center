import { useEffect, useState } from 'react'
import axios from 'axios'
import RecitersScreen from './RecitersScreen'
import PlayerScreen from './PlayerScreen'
import ChaptersScreen from './ChaptersScreen'
import Header from '../pages/Web/Home/Header'
import Footer from '../pages/Web/Home/Footer'
const HomeScreen = () => {
  const [reciters, serReciters] = useState([])
  const [chapters, setChapters] = useState([])

  const [chapterDetail, setChapterDetail] = useState(null)
  const [reciterDetail, setReciterDetail] = useState(null)

  // Get All Reciters with Audio
  useEffect(() => {
    async function fetchData() {
      const {
        data: { reciters },
      } = await axios.get(`https://mp3quran.net/api/_english.php`)

      serReciters(reciters)
    }

    fetchData()
  }, [])

  // Get All Chapters
  useEffect(() => {
    async function fetchData() {
      const {
        data: { chapters },
      } = await axios.get(`https://api.quran.com/api/v4/chapters`)

      setChapters(chapters)
    }
    reciters && reciters.length > 0 && fetchData()
  }, [reciters])

  const reciterHandler = (reciter) => {
    setReciterDetail(reciter)
  }
  const chapterHandler = (chapter) => {
    setChapterDetail(chapter)
  }

  return (
    <>
    <Header />
    <div className=' home-body '>
   <div className=" row p-5 ">
   <div className='col-lg-4 col-md-4 col-sm-12 col-12 m scroll'>
        <RecitersScreen reciters={reciters} reciterHandler={reciterHandler} />
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 col-12 scroll m my-lg-0 my-md-0 my-sm-4 my-4 '>
        <ChaptersScreen chapters={chapters} chapterHandler={chapterHandler} />
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 col-12 m '>
        <PlayerScreen
          reciterDetail={reciterDetail}
          chapterDetail={chapterDetail}
        />
      </div>
    </div>
   </div>
  
     <Footer className="" />
    </>
  )
}

export default HomeScreen
