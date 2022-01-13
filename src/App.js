import React, { useEffect, useState } from 'react';
import './App.css';
// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import AddProduct from './components/AddProduct';
import DisplayList from './components/DisplayList';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {
  const [products, setProducts] = useState([]);
  const [toggleCreateTask, setToggleCreateTask] = useState(false);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storageTodos) {
      setProducts(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const onChange = (allData) => {
    console.log('alldata', allData);
    setProducts((prevData) => {
      return [allData, ...prevData];
    });
    // console.log(allData);
  };

  // (prevData) => {
  //   return [[], ...prevData];
  // };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className={!toggleCreateTask === false ? 'hidden' : 'visible'}>
            <HomePage setToggleCreateTask={setToggleCreateTask} />
          </div>
          <div className={toggleCreateTask === false ? 'hidden' : 'visible'}>
            <AddProduct onChange={onChange} />

            <DisplayList products={products} setProducts={setProducts} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
