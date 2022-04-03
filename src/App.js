import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Contacts from "./components/contacts";
import Catalog from "./components/catalog";
import Scroll from "./components/scroll";
import {Provider} from "react-redux";
import {store} from "./redux";

function App() {
  return (
      <Provider store={store}>
        <div>
          <Header/>
          <Catalog/>
          <Contacts/>
          <Footer/>
          <Scroll/>
        </div>
      </Provider>


  );
}

export default App;
