/* global fetchAPI */
import React, { useEffect, useState } from 'react';
// initializeTimes.js
const tests = async () => {
    const today = new Date();

    if (typeof fetchAPI === 'function') {
        try {
            const availableTimes = await fetchAPI(today); // Call fetchAPI directly
            return availableTimes;
        } catch (error) {
            console.error('Error fetching available times:', error);
            return null;
        }
    } else {
        console.error('fetchAPI function is not defined');
        return null;
    }
};


function Test() {
    const [availableTimes, setAvailableTimes] = useState(null);

    useEffect(() => {
        const fetchAvailableTimes = async () => {
            const times = await tests(); // Call the test function
            setAvailableTimes(times);   // Update state with fetched data
        };

        fetchAvailableTimes();
    }, []);

    return (
        <div>
            <h1>Available Times</h1>
            {availableTimes ? (
                <ul>
                    {availableTimes.map((time, index) => (
                        <li key={index}>{time}</li>
                    ))}
                </ul>
            ) : (
                'Loading available times...'
            )}
        </div>
    );
}

export default Test;
