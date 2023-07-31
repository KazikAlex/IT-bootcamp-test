import './css/index.css'
import { useEffect, useState } from "react"
import { getAllHeroes } from "./http/heroesAPI"
import CharactersList from "./components/CharactersList"
import CharacterInfo from "./components/modals/CharacterInfo"
import Pagination from "./components/Pagination"
import spinner from "./assets/Spinner.gif"

function App() {
  const [characters, setCharacters] =  useState([])
  const [modalVisible, setModalVisible] =  useState(false)
  const [selectedItem, setSelectedItem] =  useState({})
  const [currentPage, setCurrentPage] =  useState(1)
  const [fetching, setFetching] =  useState(true)
  const [totalCount, setTotalCount] =  useState(0)
  const [scrollUpVisible, setScrollUpVisible] =  useState(false)
  const [totalPages, setTotalPages] =  useState(0)
  const [pagination, setPagination] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollHandler = (e) => {

    if (window.scrollY > 500) {
      setScrollUpVisible(true)
    }else {
      setScrollUpVisible(false)
    }

    if(!pagination && e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && characters.length < totalCount) {
      setFetching(true)
      setCurrentPage(currentPage + 1)
    }
    else {
      setFetching(false)
    }
  }

  const scrollBtn = () => {
    window.scrollTo(0,0)
  }

  const showModal = (value) => {
    setModalVisible(value)
  }

  const selectItem = (id) => {
    if (modalVisible) {
      setModalVisible(false)
    }else {
      const modalItem = characters.filter(item => item.id === id)
        
      setSelectedItem(modalItem)
      setModalVisible(true)
    }

  }

  const setCharactersNull = () => {
    setCharacters([])
    getAllHeroes(currentPage)
            .then(data => setCharacters([...data.results]))
  }

  const switchBtn = (pag) => {
    if (pag === false) {
      setCharactersNull()
    }
    setPagination(pag)
  }

  useEffect(() => {
    if (pagination && currentPage <= totalPages) {
        getAllHeroes(currentPage)
            .then(data => setCharacters([...data.results]))
            .then(setCurrentPage(currentPage))
    }
  }, [pagination, currentPage, totalPages])

  useEffect(() => {
    if (fetching) {
      getAllHeroes(currentPage)
        .then(data => 
          {if (!pagination){
            setCharacters([...characters, ...data.results])
            setTotalCount(data.info.count)
            setTotalPages(data.info.pages)
            // setCurrentPage(currentPage + 1)
          }})  
        .finally(() => {
          setFetching(false)
        })
    }
  }, [fetching, pagination])

    useEffect(() => {
      document.addEventListener('scroll', scrollHandler)

      return function () {
        document.removeEventListener('scrol', scrollHandler)
      }
    }, [scrollHandler, pagination])

  return (
    <div className="App">
      {fetching ?
        <div className="spinner" >
          <img className="spinner" src={spinner} alt="loader" />
        </div>
        :
        <CharactersList currentPage={currentPage} characters={characters} selectItem={selectItem} scrollUpVisible={scrollUpVisible} scrollBtn={scrollBtn} />
      }
      <CharacterInfo selectedItem={selectedItem} showModal={showModal} modalVisible={modalVisible} />
      {currentPage === totalPages ? <div className="endList">The END</div> : null}
      <Pagination pagination={pagination} switchBtn={switchBtn} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
}

export default App;
