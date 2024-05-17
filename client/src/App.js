import './App.css';
import apiClient from './apiClient';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await apiClient.get('/');
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setIsLoading(false);
      throw error; // Propagate the error
    }
  };

  // Call fetchData when component mounts
  useEffect(() => {
    fetchData();
  }, []);



  return (
    
      <div className="flex flex-col items-center p-4">
        <p className="text-2xl font-bold mb-4">Welcome to Hyper</p>
  
        {isLoading ? (
          <div className="text-xl font-semibold">Loading...</div>
        ) : (
          data && data.items.map((driver, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start bg-white shadow-md rounded-lg p-4 mb-4 w-full md:w-1/2"
            >
              <h2 className="text-xl font-semibold mb-2">{driver.firstName} {driver.lastName}</h2>
              <p className="mb-1"><span className="font-bold">Team:</span> {driver.constructors[0].name}</p>
              <p className="mb-1"><span className="font-bold">Points:</span> {driver.standing.points}</p>
              <p className="mb-1"><span className="font-bold">Position:</span> {driver.standing.position}</p>
            </div>
          ))
        )}
      </div>
    );
  }

  export default App