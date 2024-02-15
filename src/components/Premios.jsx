/* eslint-disable react/prop-types */
const Premios = (props) => {
    return (
        <div className="premiacao">
            <div className="premiacaoImgContainer">


                <img src={props.image} alt="" />

                <div className="premiacaoTextContainer container">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>

            </div>
        </div>
    )
}

export default Premios