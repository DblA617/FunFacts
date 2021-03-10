import { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import skyline from './skyline.jpg';
import Fact1 from './Components/Fact1';
import Fact2 from './Components/Fact2';
import Fact3 from './Components/Fact3'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         <img src={Skyline} alt="Cincinnati, Ohio skyline"/>

//         <p>
//          Fun Facts about Cincinnati Ohio...
//         </p>
//         <a
//           className="App-link"
//           href=""
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Click here to find out more...
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Link exactPath="/fact1" compnent={Fact1} />
          <Link exactPath='/fact2' Component={Fact2} />
          <Link exactPath='/fact3' Component={Fact3} />
        </div>
      </BrowserRouter>
      );
  
    }
    render (){ 
      const { posts } = this.state
      const postList = posts.length ? (
          posts.map(post => {
              return (
                  <div className='post card' key={post.id}>
                     <img src={skyline} alt="Skyline"/>
                  </div>

              
              );
      })
    )
  }

export default App
