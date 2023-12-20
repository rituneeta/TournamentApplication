import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from 'pages/dashboard';

const App = () => (
  <Fragment>
    <Dashboard />
    <ToastContainer position="bottom-left" autoClose={4000}
      hideProgressBar={false} newestOnTop={false} closeOnClick  pauseOnFocusLoss draggable pauseOnHover theme="light"/>
  </Fragment>

)
export default App;