import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
//Components
import Menu from "./Components/Menu/Menu";
import Library from "./Components/Library/Library";
import Dashboard from "./Components/Dashboard/Dashboard";
import Classes from "./Components/Classes";

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//       <Route path="/" element={<Menu/>}>
//       <Route path="/dashboard" element={<Dashboard/>}/>
//       <Route path="/classes" element={<Classes/>}/>
//       <Route path="/test" element={<Classes/>}/>
//       <Route path="/Counseling" element={<Classes/>}/>
//       <Route path="/library" element={<Library/>}/>
//       <Route path="/financial" element={<Classes/>}/>
//       <Route path="/support" element={<Classes/>}/>
//       <Route path="/setting" element={<Classes/>}/>
//       <Route path="/logout" element={<Classes/>}/>
//     </Route>
// ));

const App = () => {
  return (
    <div className="flex">
      <Menu/>
      <Routes>
        {/* // <Route path="/*" element={<Menu />} /> */}
        // <Route path="/" element={<Dashboard />} />
        // <Route path="/classes" element={<Classes />} />
        // <Route path="/test" element={<Classes />} />
        // <Route path="/Counseling" element={<Classes />} />
        // <Route path="/library" element={<Library />} />
        // <Route path="/financial" element={<Classes />} />
        // <Route path="/support" element={<Classes />} />
        // <Route path="/setting" element={<Classes />} />
        // <Route path="/logout" element={<Classes />} />
      </Routes>
    </div>
  );
};

export default App;
