import React from 'react';
import CompA from './classcom'
const Header = () => <div>header</div>
export default class App extends React.Component {
    a = 1
    render() {
        return <div>
            <Header></Header>
            <CompA></CompA>
            <input />
            <button onClick={() => this.handlerClick1()}>add1</button>
            <button onClick={() => this.handlerClick2()}>add2</button>
        </div>
    }

    handlerClick1() {
        console.log('handlerClick1', this)
    }

    handlerClick2() {
        console.log('handlerClick2')
    }
}