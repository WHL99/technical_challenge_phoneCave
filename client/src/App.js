import { useEffect, useState } from 'react';
import './App.css';
import PhoneCard from './components/PhoneCard'

function App() {
  const APIURL = process.env.REACT_APP_APIURL
  const [phones, setPhones] = useState([])
  const [clickedPhone, setClickedPhone] = useState(undefined)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    fetch(APIURL)
      .then(res => res.json())
      .then(data => setPhones(data))
      .catch(err => {
        console.error('Oops!', err)
      })
  }, [])

  const handleClick = (id) => {
    setLoading(true)
    fetch(APIURL + `${id}`)
      .then(res => res.json())
      .then(data => {
        setClickedPhone(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Oops!', err)
      })
  }



  return (
    <div className="App">

      {clickedPhone && <PhoneCard clickedPhone={clickedPhone} />}

      {loading && <span> It's loading...</span>}

      {phones.map((phone) => {
        return (
          <button onClick={() => { handleClick(phone.id) }} key={phone.id}>
            {phone.name}
          </button>
        )
      })}
    </div>
  );
}

export default App;
