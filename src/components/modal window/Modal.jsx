import DartVader from '../../img/charecters/modal image/Dart Vader modal.png'
const Modal = () => {
    return (
        <div className="modalWindow">
            <div className="modalWindow__content">
                <div className="modalWindow__picture">
                    <img src= {DartVader} alt="Dart Vader" />
                </div>
                <div className="modalWindow__info">
                    <div className="modalWindow__text">
                        <div className="modalWindow__charInfo">
                            <h2>Dart Vader</h2>
                            <div className="modalWindow__moreInfo">
                                <p>Birth year:</p>
                                <p>41.9BBY</p>
                                <p>Height:</p>
                                <p>202 cm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Modal