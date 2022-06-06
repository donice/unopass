const Main = ( {activeItem, updateAddItems} ) => {

    const onEditItems = (key, value) => {
        // Takes in updateAddItems, and edits the keys locally
        updateAddItems({
            ...activeItem, //spreads every other key, updating the stated only
            [key]: value,
            lastModified: Date.now(),
        })
    }

    // This runs when no active item is selected
    if(!activeItem) return <div className="no-active-item">No item added yet</div>

    return (
        <div className="AddItems-main">
            <div className="AddItems-main-note-edit">
               <input 
                type="text"
                id="title"
                value={activeItem.title}
                onChange={(e) => onEditItems("title", e.target.value)}
               />  
               <textarea 
                id="body"
                value={activeItem.body}
                placeholder = 'Edit your password here'
                onChange={(e) => onEditItems("body", e.target.value) }
               />
            </div>
            <div className="AddItems-main-note-preview">
            <h1 className="preview-title">{activeItem.title} </h1>
            <div className="markdown-preview"> {activeItem.body} </div>
        </div>
        </div>
    )
}

export default Main