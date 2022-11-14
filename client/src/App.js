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
    <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ paddingTop: '80px' }}>
        {clickedPhone && <PhoneCard clickedPhone={clickedPhone} />}
      </div>

      {loading && <span> It's loading...</span>}

      <div style={{ position: 'fixed', bottom: '15vh' }}>

        {phones.map((phone) => {
          return (
            <button onClick={() => { handleClick(phone.id) }} key={phone.id} style={{ backgroundColor: 'transparent', border: 'none', fontSize: '1.2rem', paddingRight: '20px' }}>
              {phone.name}
            </button>

          )
        })}
      </div>

    </div>
  );
}

export default App;
