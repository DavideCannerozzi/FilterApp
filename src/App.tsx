import './App.css';
import { useState, useEffect, useMemo } from 'react';
import Input from './components/Input/Input';
import List from './components/List/List';
import { Todo } from './App.interface';

function App() {
  const [data, setData] = useState<Todo[] | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const url = 'https://jsonplaceholder.typicode.com/todos/';

  // Fetched Data

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setErrorMessage('Error Message');
      }
    }

    fetchData();
  }, []);

  // Get Input value from the user

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Check if the input value exist in the data fetched if it exist the fuction will return TRUE and will be in the filterData array

  const filterData = useMemo(() => {
    if (data) {
      return data.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    return null;
  }, [data, inputValue]);

  return (
    <div className="App">
      <Input
        getValue={getValue}
        inputValue={inputValue}
      />
      {errorMessage ? <p>{errorMessage}</p> : null}
      <List
        inputValue={inputValue}
        filterData={filterData}
      />
    </div>
  );
}

export default App;
