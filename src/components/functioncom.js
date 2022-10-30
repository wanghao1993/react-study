import React from 'react';
import CompA from './classcom'
const Header = () => <div>header</div>
export default class App extends React.Component {
    
    constructor() {
        super()
        this.input= React.createRef()
        this.state = {
            count: 1,
            list: ['aaa', 'bb']
        }
    }
    render() {
        const emptyContent = <div> empty</div>
        return this.state.list.length ? <div>
            <Header></Header>
            <CompA></CompA>
            <input ref={this.input} />
            <div>{ this.state.count }</div>
            <button onClick={() => this.handlerClick1()}>add1</button>
            <button onClick={() => this.handlerClick2()}>add2</button>
            
            <div ></div>
            <ul>
                { this.state.list.map((item, index) => <li key={index}> {item} <span onClick={() => this.deleteItem(index)}>删除</span></li>)}
            </ul>
        </div> : emptyContent
    }

    handlerClick1() {
        const value = this.input.current.value
        const arr = [...this.state.list]
        arr.push(value)

        this.setState({
            list: arr
        })
        this.input.current.value = null
    }

    handlerClick2() {
        console.log('handlerClick2')
    }

    deleteItem(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}