import Home from './pages/Home'
import {Route} from "wouter";
import SearchingPage from './pages/SearchingPage';
import Detail from './pages/Detail';
import { GifContextProvider } from './context/StaticContext';

function App() {
  return (
    <div 
      className='bg-gradient-to-b h-full min-h-screen from-slate-600 to-gray-900 flex-col justify-center items-center'>

      <GifContextProvider>
        <Route
          component={Home}
          path={"/"}
          />
        <Route
          component={SearchingPage}
          path={"/search/:magicWord"}
          />

       <Route
        component={Detail}
        path={'/gif/:id'} 
        />
      </GifContextProvider>
    </div>
  )
}

export default App
