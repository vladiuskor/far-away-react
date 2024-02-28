function App() {
    return(
        <div className="app">
            <Logo />
            <Forms />
            <PackingList />
            <Stats />
        </div>
    )
}
function Logo() {
    return(
        <h1>🌴Far Away 🧳</h1>
    )
}
function Forms() {
    return(
        <div className="add-form">
            <h3>What do you need for your 😍 trip?</h3>
        </div>
    )
}
function PackingList() {
    return(
        <div className="list">LIST</div>
    )
}
function Stats() {
    return(
        <footer className="stats">
            🧳You have X items on your list, and you already packed X (X%)
        </footer>
    )
}

export default App;