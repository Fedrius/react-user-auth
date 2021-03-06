import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getQuote} from "../actions";

class Quotes extends Component {

    componentDidMount(){
        this.props.getQuote();
    }

    render(){
        return (
            <div className='center-align'>
                <h1>heres a movie quotee</h1>
                <h3>{this.props.quote}</h3>
                <button onClick={this.props.getQuote} className='btn blue-grey'>Next Quote</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        quote: state.movie.quote
    }
}

export default connect(mapStateToProps, {getQuote})(Quotes)