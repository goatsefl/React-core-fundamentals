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

  // The hook below is rendered whenever theme variable is changed to dark or light
  // The body's className will change to light, if true, else dark inside the useEffect hook
  // For that reason, we added theme in our dependency array. As it changes and renders every time the value is changed.
  // One of the main uses of useEffect is to be used when some elements of DOM element needs to be changed.
  // When there are multiple places to apply the same effect, it'd be better to use Context API.
  // In our case, the context API is UseInfoContext.js
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
// These .Provider is to get the value, that can be sent to nested child components,
// If at all <UserInfoContext.Provider>{child}</UserInfoContext.Provider>, this is what we can do.