const NavigationBar= (
      <nav>
        <h1>Frans First React Site</h1>
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          
        </ul>
      </nav>
    )
  

ReactDOM.render(NavigationBar,
    document.getElementById("root"))