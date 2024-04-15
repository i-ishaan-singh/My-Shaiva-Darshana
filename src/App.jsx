import './App.css'
import React from 'react';
import { ApplicationState } from './Context/ApplicationContext'
import { Header } from './Pages/Header/Header'
import { MainRouter } from './Pages/MainRouters'
import { ApplicationUtilities } from './Utils/ApplicationUtilities';
import { BrowserRouter} from "react-router-dom";

function App() {

  const [scrollValue, setScrollValue] = React.useState(0);

  const _handleScroll = React.useCallback(function(e){
      setScrollValue(e.target.scrollTop);
  },[])

  return (<div className="shiva-app" >
            <BrowserRouter>
              <div id={"main-app"} className="full-container scroll-container" onScroll={_handleScroll}>
                <ApplicationState>
                  <Header appScrollTop={scrollValue}/>
                  <MainRouter />
                  <ApplicationUtilities/>
                </ApplicationState>
              </div>
            </BrowserRouter>
          </div>)
}

export default App
