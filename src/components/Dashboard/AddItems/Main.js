const Main = ( {activeItem, updateAddItems} ) => {

    const onEditItems = (key, value) => {
        updateAddItems({
            ...activeItem,
            [key]: value,
            lastModified: Date.now()
        })
    }

    return (
        <div>Main</div>
    )
}

export default Main