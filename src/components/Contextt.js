import React,{ createContext} from 'react'

const varr = createContext()
const Contextt = ({children}) => {
return (
    <div>
        <varr.Provider value="ll">
            {children}
        </varr.Provider>
    </div>
)
}
export {varr}
export default Contextt
