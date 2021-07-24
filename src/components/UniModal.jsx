import './UniModal.scss'
const UniModal = ({children, active}) => {
    return (
        <div className={`uni-modal ${active ? 'active' : " "} `} >
        
        {children}
        </div>
    )
}

export default UniModal