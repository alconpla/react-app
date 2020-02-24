import React from 'react';

const wishes = [
    { text: 'Travel to the moon', done: false },
    { text: 'Pay the gym', done: true },
    { text: 'Go to the gym', done: false }
]

const App = () => (
        <div>
            <h1>My wishlist app</h1>
            <fieldset>
                <legend>New wish</legend>
                <input type="text" placeholder="Enter your wish here" />
            </fieldset>
            <ul>
                {wishes.map(({ text, done}, i) => (
                    <li key={text}>
                        <label htmlFor={`"wish${i}"`}>
                            <input id={`"wish${i}"`} type="checkbox" checked={done}/>
                            {text}
                        </label>
                    </li>
                ))}
            </ul>
            <button type="button">Archive Done</button>
        </div>
    );

export default App;