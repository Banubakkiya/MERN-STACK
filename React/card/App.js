import { useState } from 'react'
import './App.css';
import Card from './component/Card';
import food from './assets/img/pizza.png';
import chicken from './assets/img/friedchicken.png'; 
function App() {
  return (
    <div>
    <Card title="Fast Food" description="Any pizza can be personal if you cry while eating it"
      src={food}/>
      <Card src={chicken} title="Fried Chicken"
      description="Even when I get the fried-chicken special of the day"/>
    </div>
  );
}
export default App;
