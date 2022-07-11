import React from "react"
import "./PostAddForm.css"

export default class PostAddForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            text: ""
        })

        if (this.state.text === "") {
            alert("Siz So'z Yozmadingiz!")
        } else {
            this.props.onAdd(this.state.text)
        }
    }

    render() {
        return (
            <>
                <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
                    <input onChange={this.onValueChange} value={this.state.text} type="text" className="form-control new-post-label" placeholder="What are you thinking about?" />
                    <button type="submit" className="btn btn-outline-primary">Add Post</button>
                </form>
            </>
        )
    }
}