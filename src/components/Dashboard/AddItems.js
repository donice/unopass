import './AddItems.css'
import React from 'react'
import Main from './AddItems/Main'
import Sidebar from './AddItems/Sidebar'
import { useEffect, useState } from 'react'
import uuid from 'react-uuid'

export default function AddItems () {
    const [addItems, setAddItems] = useState(JSON.parse(localStorage.addItems) || [])
    const [activeItem, setActiveItems] = useState(false)


    // This effect retains information on the 
    // local storage 
    useEffect(() => {
        localStorage.setItem("addItems", JSON.stringify(addItems))
    }, [addItems]) //this useEffect is triggered by every typed word in the addItems


    // Function to add new Item
    const onAddItem = () => {
        const newItem = {
            id: uuid(),
            title: "New Item",
            body: "",
            lastModified: Date.now()
        }
        // adds the item to the addItems array, 
        // including the previous items already in the array
        setAddItems([newItem, ...addItems])
    }

    // Function to update the add items
    const updateAddItems = (updateAddItems) => {
        const updateAddItemsArray = addItems.map((items) => {
            if(items.id === activeItem) {
                return updateAddItems;
            }
            return items;
        })

        setAddItems(updateAddItemsArray)
    }


    // This function deletes Items through the id
    const deleteItems = (deleteId) => {
        setAddItems(addItems.filter((items) => items.id !== deleteId))
    }

    // This function finds the Items from the sidebar
    // an displays it on the main bar
    const getActiveItem = () => {
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

