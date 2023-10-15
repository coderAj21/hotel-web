import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Login from './Components/Login';
import { useState } from 'react';

function App() {
  const [isLogin,setIsLogin]=useState(false);
  console.log(isLogin);
  return (
    <div>
      <Header setIsLogin={setIsLogin}></Header>
      {
        isLogin===true?<Login></Login>:<Main></Main>
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
