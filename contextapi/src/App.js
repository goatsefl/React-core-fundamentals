import './styles.css';
import UserInfoContext from './context/UserInfoContext';
import BlogPage from './components/BlogPage';

export default function App() {
  const userInfo = { username: "Admin", isAdmin: true, theme: "light" }
  return (
    <div>
      <UserInfoContext.Provider value={userInfo}>
        <BlogPage></BlogPage>
      </UserInfoContext.Provider>
    </div>
  );
}
