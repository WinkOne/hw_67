import React, {Component} from 'react';
import './intercom.css'
import Buttons from "../../components/UI/Buttons/Buttons";
import {connect} from 'react-redux'

class Intercom extends Component {

    render() {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        let backgroundColor = {
            backgroundColor: '#fff'
        };

        if (this.props.backgroundColor) {
            backgroundColor = {
                backgroundColor: 'green'
            }
        }
        return (
            <div>
                <div style={backgroundColor} className="IntercomWindow">
                    <input type="password" value={this.props.numbers} disabled/>
                    <p>{this.props.backgroundColor && '"Access Granted"'}</p>
                </div>
                <div className="keyboardBox">
                    {array.map(num =>{
                        return (
                            <Buttons key={num} onclick={() => this.props.num(num)}>{num}</Buttons>
                        )
                    })}
                    <Buttons onclick={this.props.numDel}>Del.</Buttons>
                    <Buttons onclick={this.props.numOk}>E</Buttons>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        numbers: state.number,
        backgroundColor: state.backgroundColor,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        num: (num) => dispatch({type: "INC", numb: num}),
        numDel: () => dispatch({type: "INC_DEL"}),
        numOk: () => dispatch({type: "INC_OK"})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Intercom);