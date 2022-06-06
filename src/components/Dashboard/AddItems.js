import './AddItems.css'
import React from 'react'
import Main from './AddItems/Main'
import Sidebar from './AddItems/Sidebar'
import { useEffect, useState } from 'react'
import uuid from 'react-uuid'

export default function AddItems () {
    const [addItems, setAddItems] = useState([])
    const [activeItem, setActiveItems] = useState(false)


    // Function to add new Item
    const onAddItem = () => {
        const newItem = {
            id: uuid(),
            title: "New Item",
            body: "",
            lastModified: Date.now()
        }
        setAddItems([newItem, ...addItems])
    }

    const updateAddItems = (updateAddItems) => {
        const updateAddItemsArray = addItems.map((items) => {
            if(items.id === activeItem) {
                return updateAddItems;
            }
            return items;
        })

        setAddItems(updateAddItemsArray)
    }

    // This function deletes Itemsfrom the sidebar
    const deleteItems = () => {
        return addItems.find((items) => items.id === activeItem)
    }


    return (
        <section className='AddItems'>
            <Sidebar 
                addItems={addItems}
                onAddItem={onAddItem}
                deleteItems={deleteItems}
                activeItem={activeItem}
                setActiveItems={setActiveItems}
            />
            <Main /> 
        </section>
    )
}

