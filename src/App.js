import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'
const getStorageTheme = () =>{
  let theme = 'light-theme'
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme
}
function App() {
  const [themes,setThemes] = useState(getStorageTheme())
  useEffect(()=>{
    document.documentElement.classList= ''
    document.documentElement.classList.add(themes)
    localStorage.setItem('theme',themes)
  },[themes])
  const handleThemes = () => {
      setThemes((oldThemes)=>{
        return oldThemes === 'light-themes' ? oldThemes = 'dark-themes' : oldThemes = 'light-themes'
  
      })
    console.log(themes)
  }
  return <main>
    <nav>
      <div className="nav-center">
        <h1>overreacted</h1>
        <button onClick={handleThemes} className='btn'>toogle</button>
      </div>
      <section className="articles">
        {data.map((elem,idx)=>{
          return <Article key={elem.id} {...elem}/>
        })}
      </section>
    </nav>

  </main>
}

export default App
