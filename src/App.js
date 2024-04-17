import { Provider } from 'react-redux';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';

import appStore from "./utils/store"
function App() {
  return (
    <Provider store={appStore}>
    <div>
     <Header/>
     <Body/>
     </div>
    
    </Provider>
  );
}

export default App;
