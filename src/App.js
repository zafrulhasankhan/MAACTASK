// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import CreateArea from './Components/Area/CreateArea';
// import CreateRegion from './Components/Region/CreateRegion';
// import GetArea from './Components/Area/GetArea';
// import GetRegion from './Components/Region/GetRegion';
// import Login from './Components/Login/Login';
// import Registration from './Components/Registration/Registration';
// import Home from './Components/Home/Home';
// import PrivateRoute from './PrivateRoute';
// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(true);

//   useEffect(() => {
//     // Check if the user is authenticated
//     const token = sessionStorage.getItem('token');
//     setIsAuthenticated(!!token);
//     console.log(isAuthenticated); // Convert token to boolean
//   }, []);

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           {/* <Route path="/" element={true ? <Navigate to="/home" replace /> : <Login />} /> */}
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Registration />} />
//           <Route path="/login" element={<Login />} />
//           {/* Private routes */}
//           <Route path="/createArea" element={<PrivateRoute element={<CreateArea />} isAuthenticated={isAuthenticated} />} />
//           <Route path="/createRegion" element={<PrivateRoute element={<CreateRegion />} isAuthenticated={isAuthenticated} />} />
//           <Route path="/getArea" element={<PrivateRoute element={<GetArea />} isAuthenticated={isAuthenticated} />} />
//           <Route path="/getRegion" element={<PrivateRoute element={<GetRegion />} isAuthenticated={isAuthenticated} />} />
//           {/* <Route path="/home" element={<PrivateRoute element={<Home />} isAuthenticated={isAuthenticated} />} /> */}
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateArea from './Components/Area/CreateArea';
import CreateRegion from './Components/Region/CreateRegion';
import GetArea from './Components/Area/GetArea';
import GetRegion from './Components/Region/GetRegion';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Home from './Components/Home/Home';

function PrivateRoute({ children }) {
  const isAuthenticated = !!sessionStorage.getItem('token');
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          {/* Protected routes */}
          <Route
            path="/createArea"
            element={
              <PrivateRoute>
                <CreateArea />
              </PrivateRoute>
            }
          />
          <Route
            path="/createRegion"
            element={
              <PrivateRoute>
                <CreateRegion />
              </PrivateRoute>
            }
          />
          <Route
            path="/getArea"
            element={
              <PrivateRoute>
                <GetArea />
              </PrivateRoute>
            }
          />
          <Route
            path="/getRegion"
            element={
              <PrivateRoute>
                <GetRegion />
              </PrivateRoute>
            }
          />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
