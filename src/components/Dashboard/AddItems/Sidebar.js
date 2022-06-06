const Sidebar = (
    {
        addItems,
        onAddItem,
        deleteItems,
        activeItem,
        setActiveItem,
    }
) => {

    

    return (
        <div className="AddItems-sidebar">
            <div className="AddItems-sidebar-header">
                <h1>Welcome Back</h1>
                <button onClick={onAddItem}>Add</button>
            </div>

            <div className="AddItems-sidebar-notes">
                {addItems.map((items) => (
                    <div
                        className={`AddItems-sidebar-note ${items.id === activeItem && "active"} `}
                        onClick={() => setActiveItem(items.id)}

                    >
                        <div className="AddItems-note-title">
                            <strong>Title</strong>
                            <button onClick={() => deleteItems(items.id)}>Delete</button>
                        </div>

                        <p>Body</p>
                        <small className="note-meta">
                            last Modified: Today
                        </small>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;