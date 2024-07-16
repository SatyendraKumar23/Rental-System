

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import Products from './component/Product/Products';
import Error from './component/Error';
import ProfilePage from './component/ProfilePage/ProfilePage';
import AddItem from './component/AddItem/AddItem';
import EditProfile from './component/EditProfile/EditProfile';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/signup' element={<SignUp/>}></Route>
      <Route exact path='/signin' element={<SignIn/>}></Route>
      
      <Route exact path='/' element={<><NavBar/><Products/></>}></Route>
      <Route exact path='/profile' element={<><NavBar/><ProfilePage/></>}></Route>
      <Route exact path='/add-item' element={<AddItem/>}></Route>
      <Route exact path='/edit-profile' element={<EditProfile/>}></Route>
      <Route exact path='*' element={<Error/>}></Route>

    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;

