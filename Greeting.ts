import React from 'react';

//Define props interface

interface GreetingProps {

    name: string;  // must be a string
}

// use prop interface to type the functional component

const Greeting = ({ name }: GreetingProps) => {

    // Return JSX with ht typed prop

    return <div>Hello, {name}!</div>;

};

// export the component
export default Greeting;
