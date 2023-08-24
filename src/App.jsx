import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import User from './pages/User';
import Products from './pages/Products';
import './App.css'

function App() {
  return (
    <>
      <h1 className='header'>REACT CUSTOM HOOK</h1>
      <Tabs
        defaultActiveKey="user"
        className="mb-3"
      >
        <Tab eventKey="user" title="User">
          <User/>
        </Tab>
        <Tab eventKey="product" title="Product">
          <Products/>
        </Tab>
      </Tabs>
    </>
  );
}

export default App;