import React, {Component} from 'react';
import '../CSS/App.css'

class PageNumber extends Component {
    constructor(props) {
        super(props);

        this.onPageTurn = this.onPageTurn.bind(this);
    }

    onPageTurn(event) {
        event.preventDefault();
        this.props.onPageTurn(event.currentTarget.innerText);
    }

    render() {
        let pageClassName = (this.props.currPage === this.props.i) ? 'selected-page' : 'page-number';

        return (
            <span className={pageClassName} onClick={this.onPageTurn}>{this.props.i}</span>
        )
    }
}

export default PageNumber;