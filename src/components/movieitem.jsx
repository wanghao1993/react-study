import React from "react";

export default class movieItem extends React.Component {
  
    render() {
        return <div style={{ marginRight: '1rem', position: 'relative' }}>
            <img src={ this.props.movieProps.img } alt=""  width="85" height='115'/>
            <div style={{ overflow: 'hidden',}}>
                { this.props.movieProps.nm.length > 7 ? this.props.movieProps.nm.slice(0, 6) + '...' : this.props.movieProps.nm }
            </div>

            <div style={{ position: 'absolute', bottom: "20px", color: '#faaf00', fontSize: '11px', fontWeight: 600 }}>
                观众评分 { this.props.movieProps.mk }
            </div>
        </div>
    }
}