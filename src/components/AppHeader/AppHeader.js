import './AppHeader.css'
const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Mustafoyev Ahmadjon</h1>
            <h2>{allPosts} posts, like {liked}</h2>
        </div>
    )
}
export default AppHeader