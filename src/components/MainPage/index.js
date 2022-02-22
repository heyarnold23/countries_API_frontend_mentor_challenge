import React, { useEffect, useState } from 'react';


export default function MainPage(){

    const getApi = async () => {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json()
        console.log(data);

    }

    useEffect(() => {
        getApi()
    });


    return(
        <div>
            Hello
        </div>
    );
}
