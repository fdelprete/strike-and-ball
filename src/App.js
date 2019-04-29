import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import SbTable from './containers/SbTable/SbTable'

class App extends Component {
  render ( ) {
    return (
      <div>
          <Layout>
            <SbTable/>
          </Layout>
      </div>
    );
  }
}

export default App;