import './App.css';
import Navigation from './Components/Navigation';
import ToDoItems from './Components/ToDoItems/ToDoItems';
import Categories from './Components/Categories/Categories';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import Login from './Components/Auth/Login';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
        {/* for every route we want to, we can point the router to load a specific component */}
        <Route path="/" element={<ProtectedRoute><ToDoItems /></ProtectedRoute>} />
        <Route path="categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
        <Route path="todoitems" element={<ProtectedRoute><ToDoItems /></ProtectedRoute>} />
        <Route path="login" element={<Login/>} />
{/* route to pick up anything other than above */}
        <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;