import "../assets/css/Warning.css";
const Warning = ({setToggle, title, text, req, content}) => {

    return (
        <>
            <div className="modal__warning__background" onClick={() => setToggle(false)}>
            </div>
            <div className="modal__warning__main">
                <div className="modal__warning__main--titlehead">
                    <span className="modal__warning__main--title">{title}</span>
                    <span className="modal__warning__main--X"onClick={() => setToggle(false)}> X </span>
                </div>
                <div className="modal__warning__main--section ">
                    <p className="modal__warning__section--text " >{text}</p>
                    <button type="button" className="modal__warning__deleteBttn " onClick={() => {
                        req(content);
                        setToggle(false);
                    }}>
                        {title}
                    </button>
                </div>

            </div>
        </>



    )

}

export default Warning