import React from "react"
import "./SearchPanel.css"

export default class SearchPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onUpdateSearch = (e) =>{
       const term = e.target.value;
       this.setState({term});
       this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <>
                <input type="text"
                 className="form-control search-input"
                  placeholder="Search By Posts..."
                  onChange={this.onUpdateSearch} />
            </>
        )
    }
}