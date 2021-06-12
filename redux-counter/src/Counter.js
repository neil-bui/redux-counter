import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({type:'INCREMENT'});
    }

    decrement = () => {
        this.props.dispatch({type:'DECREMENT'});
    }
    
    reset = () => {
        this.props.dispatch({type:'RESET'});
    }

    render() {
        return (
            <div>
                <h2 className="m-3">Counter</h2>
                <div className="mx-3 p-3 bg-info">
                    <span className="mx-2 p-2 w-25 text-white">{this.props.count}</span>
                    <button className="mx-2" onClick={this.decrement}>-</button>
                    <button className="mx-2" onClick={this.increment}>+</button>
                    <button className="mx-2" onClick={this.reset}>reset</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);