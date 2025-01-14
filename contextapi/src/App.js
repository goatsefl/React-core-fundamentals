// import logo from './logo.svg';
import './App.css';
import UserInfoContext from './context/UserInfoContext';
// import { useContext } from 'react';
import BlogPage from './components/BlogPage';

export default function App() {
  const userInfo = { username: "Admin", isAdmin: true }
  return (
    <div>
      <UserInfoContext.Provider value={userInfo}>
        <BlogPage></BlogPage>
      </UserInfoContext.Provider>
    </div>
  );
}
