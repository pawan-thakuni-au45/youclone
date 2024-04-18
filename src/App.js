import { Provider } from 'react-redux';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';

import appStore from "./utils/store"
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <Provider store={appStore}>
    <div>
     <Header/>
    <Outlet/>
     </div>
    
    </Provider>
  );
}

export default App;
