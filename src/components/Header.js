

const Header = ({handleToggleMode}) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button onClick={() => handleToggleMode((prevMode) => !prevMode)}>Toggle Mode</button>
        </div>
    );
}

export default Header;