import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {

  render(){
  return (
   <div>
     <Layout>
       <Dashboard />
     </Layout>
   </div>
  );
}
}

export default App;
