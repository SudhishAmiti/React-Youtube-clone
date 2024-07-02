import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Headers from './components/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watchpage from './components/Watchpage';
// import {Provider} from "react-redux"
const AppRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body/>,

    children : [
     {
      path : "/",
      element : <MainContainer/>
     },
     {
      path : "/watch",
      element : <Watchpage/>
     }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
    <div>
      <Headers/>
      <RouterProvider router={AppRouter}/>
    </div>
    </Provider>
    
  );
}

export default App;
