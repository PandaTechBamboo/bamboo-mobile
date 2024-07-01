// App.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Get = () => {
    const [data, setData] = useState('');

    const getData = () => {
        fetch('http://localhost:3000/get/day')
            .then(response => response.json())
            .then(data => {
                console.log('Success: ', data);
                setData(data);
            })
            .catch((error) => console.error('Error:', error));
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        {data}
    );
};

export default Get;
