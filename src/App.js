import './App.css'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import List from './components/List'
import Navbar from './components/Navbar'
import { MdKeyboardArrowLeft } from 'react-icons/md'

function App() {
  const [data, setData] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const arr = []

  const creatNote = (e) => {
    e.preventDefault()
    const getNotesStorage = localStorage.getItem('todo')
    const obj = { title, desc }
    if (getNotesStorage === null) {
      console.log('bisa masuk ke local null')
      arr.push(obj)
      const stringArr = JSON.stringify(arr)
      localStorage.setItem('todo', stringArr)
    } else {
      const jsonArr = JSON.parse(getNotesStorage)
      jsonArr.push(obj)
      const stringArr = JSON.stringify(jsonArr)
      localStorage.setItem('todo', stringArr)
    }
  }
  const handleSubmit = (e) => {
    if (isUpdate) {
      updateNote()
    } else {
      creatNote(e)
    }
    getData()
  }

  const updateNote = () => {
    const updateStorageArr = localStorage.getItem('todo')
    const getIndex = localStorage.getItem('index')
    const jsonUpdateArr = JSON.parse(updateStorageArr)
    const jsonIndex = JSON.parse(getIndex)
    const obj = { title, desc }
    jsonUpdateArr.splice(jsonIndex, 1, obj)
    const stringUpdateArr = JSON.stringify(jsonUpdateArr)
    localStorage.setItem('todo', stringUpdateArr)
  }

  const getData = () => {
    const getLocal = localStorage.getItem('todo')
    const parseData = JSON.parse(getLocal)
    setData(parseData)
  }

  const clickTitle = (values, id) => {
    localStorage.setItem('index', id)
    setTitle(values.title)
    setDesc(values.desc)
    setIsUpdate(true)
  }

  const clickTrash = (id) => {
    const clearStorageArr = localStorage.getItem('todo')
    const jsonDeleteArr = JSON.parse(clearStorageArr)
    jsonDeleteArr.splice(id, 1)
    const stringDeleteArr = JSON.stringify(jsonDeleteArr)
    localStorage.setItem('todo', stringDeleteArr)
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Navbar />
      <main>
        <div className="form">
          <p className="title_note">Make your notes!</p>
          <input
            type="text"
            placeholder="Title"
            value={title}
            className="form_title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Description"
            value={desc}
            className="form_desc"
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className="wrapper_button">
            <button
              onClick={() => setIsUpdate(false)}
              className={isUpdate === true ? 'btn_create back block' : 'hidden'}
            >
              <MdKeyboardArrowLeft />
              Back
            </button>
            <button className="btn_create" onClick={(e) => handleSubmit(e)}>
              {isUpdate ? 'Update' : 'Create'}
            </button>
          </div>
        </div>
        <div className="list">
          <p className="title_note">Here’s your notes!</p>
          {data === null ? (
            <p style={{ fontSize: '14px' }}>
              Data not found, please insert your note
            </p>
          ) : (
            data.map((item, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  item={item}
                  clickTitle={(values, id) => clickTitle(values, id)}
                  clickTrash={(id) => clickTrash(id)}
                />
              )
            })
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
