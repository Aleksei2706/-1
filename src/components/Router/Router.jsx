import React from "react";


const Router = () => {
    const [isLoggedIN, setisLoggedIN] = useState(false);
    console.log(isLoggedIN)
  function handleClick(){
    setisLoggedIN = !isLoggedIN
    console.log(isLoggedIN)
  }
  
    return(
      <header>
        <nav>
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
            <Link to = "/about">About</Link>
            </li>
            <li>
              <Link to = "/cars">Cars</Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleClick}>Open</button>
        <Routes>
        {isLoggedIN ?  <Route path='/cars' element = {<News/>}></Route>: false} 
          <Route path='/about' element = {<About/>}/> 
  
        </Routes>
        .
  
      </header>
    )
  }

export default Router;
