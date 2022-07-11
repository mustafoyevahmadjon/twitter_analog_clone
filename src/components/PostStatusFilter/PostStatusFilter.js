import React from "react"

export default class PostStatusFilter extends React.Component {
   constructor(props){
       super(props)
       this.button = [
           {name: 'all', label: "All"},
           {name: 'like', label: "Liked"}
       ]
   }

   render() {
       const buttons = this.button.map(({name,label}) => {
           const active = this.props.filter === name;
           const clazz = active ? "btn-primary" : "btn-outline-primary"
           return(
            <button key={name} onClick={() => this.props.onFilterSelect(name)} className={`btn ${clazz}`}>
                {label}
            </button>
           )
       })
    return (
        <>
            <div className="btn-group">
               {buttons}
            </div>
        </>
    )
   }
}