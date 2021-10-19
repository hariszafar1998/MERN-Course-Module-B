import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        eraseData: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    searchQueryHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    };

    onSubmissionOfForm = (e) => {
        e.preventDefault();
        if ( this.state.text === '' ) {
            this.props.setAlert('Please enter a keyword.')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' })
        }
    };

    render() {
        const { showClear, eraseData } = this.props;
        return (
            <div>
                <form className="form-style" onSubmit={this.onSubmissionOfForm}>
                    <div className="form-control">
                        <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={this.searchQueryHandler}/>
                        <input type="button" value="Search" className="form-submit-btn" onClick={this.onSubmissionOfForm}/>
                    </div>
                </form>
                {showClear && (
                <button className="clear-btn" onClick={eraseData}>Clear</button>
                )}
            </div>
        )
    }
}

export default Search
