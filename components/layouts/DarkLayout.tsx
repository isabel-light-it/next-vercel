import { FC, PropsWithChildren } from 'react'

const style = {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: '5px',
    padding: '10px',
}

const DarkLayout:React.FC<PropsWithChildren<unknown>>  = ({ children }) => {
    return (
        <div style={style}>
            <h3>Dark layout</h3>
            <div>
                {children}
            </div>
        </div>
    )
}

export default DarkLayout