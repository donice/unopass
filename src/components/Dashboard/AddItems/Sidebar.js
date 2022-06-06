const Sidebar = (
    {
        addItems,
        onAddItem,
        deleteItems,
        activeItem,
        setActiveItem,
    } //destructured props for cleaner code
) => {
    // This function sets the last edited || add item to the top
    const sortedItems = addItems.sort((a,b) => b.lastModified - a.lastModified);
    console.log(sortedItems)

    return (
        <div className="AddItems-sidebar">
            <div className="AddItems-sidebar-header">
                <h1>Welcome Back</h1>
                <button onClick={onAddItem}>Add</button>
            </div>

            <div className="AddItems-sidebar-notes">

                {/* Maps through the addItems array, 
                and add new items for everytime a new input is triggered */}
                {addItems.map((items) => (
                    <div
                        className={`AddItems-sidebar-note ${items.id === activeItem && "active"}`}
                        onClick={() => setActiveItem(items.id)}

                    >
                        <div className="sidebar-note-title">
                            <strong>{items.title} </strong>
                            <button onClick={() => deleteItems(items.id)}>Remove</button>
                        </div>

                        <p>{items.body && items.body.substr(0, 100) + "..." } </p>
                        <small className="note-meta">
                            {/* This date setter tells us the specific moment */}
                            last Modified: {new Date(items.lastModified).toLocaleDateString("en-UK", {
                                hour: "2-digit",
                                minute: "2-digit"
                            })}
                        </small>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;