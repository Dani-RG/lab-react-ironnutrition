import './App.css';
import foodsData from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [searchValue, setSearchValue] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleNewFood = (newFood) => {
    setFoods([...foods, newFood])
    setShowForm(false);
  }

  const handleSearch = (value) => {
    setSearchValue(value)
  }

  const handleDelete = (name) => {
    const cleanFoods = [...foods].filter(elem => elem.name !== name)
    setFoods(cleanFoods)
  }

  const handleShowForm = () => {
    setShowForm(prev => !prev);
  }

  return (
    <div className="App">

      <AddFoodForm handleNewFood={handleNewFood} />
      <Button onClick={handleShowForm}>{showForm ? 'Hide Form' : 'Add New food'}</Button>
      {showForm && <AddFoodForm handleNewFood={handleNewFood}/>}

      <Search handleSearch={handleSearch} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods
        .filter(elem => elem.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
        .map((elem, index) => {
          return <FoodBox food={elem} key={index} handleDelete={handleDelete} />
        })}
      </Row>

    </div>
  );
}

export default App;
