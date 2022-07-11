import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import PostAddForm from "../PostAddForm/PostAddForm";
import PostList from "../PostList/PostList";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import SearchPanel from "../SearchPanel/SearchPanel";
import "./App.css"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: "Going To Learn React.js", important: false, like: false, id: 1 },
                { label: "Thet is good", important: false, like: false, id: 2 },
                { label: "i need a break...", important: false, like: false, id: 3 }
            ],
            term: "",
            filter: "all",
        }

        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
            return { data: newArr }
        })
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldItem = data[index];
            const newItem = { ...oldItem, important: !oldItem.important }

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    onToggleLiked = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldItem = data[index];
            const newItem = { ...oldItem, like: !oldItem.like }

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    searchPosts = (items, term) => {
        if (term.length === 0) {
            return items
        }

       return items.filter(item => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost = (items, filter) =>{
        if(filter === "like"){
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const { term, data, filter } = this.state
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePost = this.filterPost(this.searchPosts(data, term), filter)

        return (
            <div className="app">

                <AppHeader liked={liked} allPosts={allPosts} />

                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <PostList
                    onToggleLiked={this.onToggleLiked}
                    onToggleImportant={this.onToggleImportant}
                    posts={visiblePost}
                    onDelete={this.deleteItem} />

                <PostAddForm onAdd={this.addItem} />

            </div>
        )
    }
}