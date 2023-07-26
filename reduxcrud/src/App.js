import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Conponents/Home';
import UserList from './Conponents/UserList';
import AddUser from './Conponents/AddUser';
import UpdateUser from './Conponents/UpdateUser';
import Store from './Redux/Store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';


function App() {
  return (

    <Provider store={Store}> 
    <div className="App">
      <BrowserRouter>

        <div className='header'>
          <Link to={'/'}>Home</Link>
          <Link to={'/user'}>User</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/user' element={<UserList></UserList>}></Route>
          <Route path='/user/add' element={<AddUser></AddUser>}></Route>
          <Route path='/user/edit/:code' element={<UpdateUser></UpdateUser>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className='toast-position' position='bottom-right'>

      </ToastContainer>
    </div>
    </Provider>
  );
};

export default App;
