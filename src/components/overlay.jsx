import '../styles/components/overlay.css'

const Overlay = ({contenido})=>{
    return(
        <div className="overlay">
            <div className="overlayContent">
            {contenido}
            </div>
        </div>
    )
}

export default Overlay