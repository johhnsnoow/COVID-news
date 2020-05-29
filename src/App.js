import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent';
class App extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
        news: []
      }
    }
    componentDidMount(){
      fetch('https://cryptic-ravine-96718.herokuapp.com/').then((response)=>{
        return response.json();
      }).then((myJson)=>{
        this.setState({
          news: myJson.news
        })
      });
    }
    render()
    {
      console.log(this.state);
      
      return (
        <BrowserRouter>
        <NavbarComponent />
        <div>      
        <div className="App">
          {this.state.news.map((item,index)=>{
            return (
              <div>
                <h1>{item.title}</h1>
                <a href={item.link} rel="noopener noreferrer" target="_blank">Read more details</a>
                <img className="image-container" src={item.img} alt="no"></img>
              </div>
            );
          })}
        </div>
        </div>
        </BrowserRouter>
      ); 
    }
    
}

export default App;
