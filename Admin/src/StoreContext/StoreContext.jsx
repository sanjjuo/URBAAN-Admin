import React, { createContext, useState } from 'react'

export const AppContext = createContext();

const StoreContext = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <AppContext.Provider value={{
                open,
                handleOpen
            }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default StoreContext