// Counter.tsx
import React, { Component } from 'react';

// Step 1: Define Props and State interfaces
interface CounterProps {
    // No props used here, but still defined for clarity and scalability
}

interface CounterState {
    count: number; // the component state contains a single 'count' property
}

//  Use the interfaces as generic parameters for Component
class Counter extends Component<CounterProps, CounterState> {
    // Define initial state with proper typing
    state: CounterState = {
        count: 0,
    };

    //Increment function to update the state
    increment = (): void => {
        this.setState({ count: this.state.count + 1 });
    };

    // Render method with fixed return JSX
    render() {
        return (
            <div>
            <p>Count: { this.state.count } </p>
                < button onClick = { this.increment } > Increment </>
                    </div>
    );
    }
}

export default Counter;
