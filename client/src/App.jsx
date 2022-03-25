// import React from 'react';
import { Navbar, Welcome, Footer, Transactions, Services } from "./components";
const App = () => {
  // const [count, setCount] = useState(0)
  // import { useState } from 'react'
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </div>
  )
};

export default App;
