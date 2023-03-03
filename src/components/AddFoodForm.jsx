import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({ handleNewFood }) {

  const initialState = {
    name: "",
    image: "",
    calories: 0,
    servings: 0
  }

  const [newFood, setNewFood] = useState(initialState);

  const handleChange = (e) => {
    setNewFood(prev => {
      return {
        ...prev, [e.target.name]: e.target.value
      }
    })
  }

const handleSubmit = (e) => {
  e.preventDefault();
  handleNewFood(newFood);
  setNewFood(initialState);
}

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={newFood.name} type="text" onChange={handleChange} name="name"/>

      <label>Image</label>
      <Input value={newFood.image} type="text" onChange={handleChange} name="image"/>

      <label>Calories</label>
      <Input value={newFood.calories} type="number" onChange={handleChange} name="calories"/>

      <label>Servings</label>
      <Input value={newFood.servings} type="number" onChange={handleChange} name="servings"/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
