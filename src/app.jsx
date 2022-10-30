import React from "react";
import Mheader from './components/mheader.jsx'
import Mcontent from './components/mcontent.jsx'
import Mfooter from './components/footer.jsx'
import './index.css'
class App extends React.Component {
    render() {
        return <div className="moview">
            <div className="header">
                <Mheader ></Mheader>
            </div>

            <div className="content">
            <Mcontent></Mcontent>

            </div>

            <div className="footer">
            <Mfooter ></Mfooter>

            </div>
        </div>
    }
}

export default App