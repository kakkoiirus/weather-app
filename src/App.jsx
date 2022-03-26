import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import { UserContextProvider } from "./contexts/userContext";
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <UserContextProvider>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </Layout>
    </UserContextProvider>
  );
};

export default App;
