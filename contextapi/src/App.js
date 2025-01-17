import './styles.css';
import UserInfoContext from './context/UserInfoContext';
import BlogPage from './components/BlogPage';
import { useEffect, useState } from 'react';

export default function App() {
  const userInfo = { username: "Admin", isAdmin: true }
  const [theme, setTheme] = useState(false)
  const toggleBg = () => {
    setTheme(prev => !prev)
  }
  useEffect(() => {
    document.body.className = theme ? "light" : 'dark';
  }, [theme])
  return (
    <div>
      <button onClick={toggleBg}>Light/Dark</button>
      <div>
        <UserInfoContext.Provider value={userInfo}>
          <BlogPage></BlogPage>
        </UserInfoContext.Provider>
      </div>
    </div >
  );
}
