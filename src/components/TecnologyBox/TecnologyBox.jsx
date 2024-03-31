/* eslint-disable react/prop-types */

import "./TecnologyBox.css"
const TecnologyBox = (props) => {
    return (
        <div className="tecnologyBox ">
            <img src={props.image} alt="" />
            <div className="txtTecnologyBox">
                <h3 >{props.title}</h3>
                <p className="tecnologyDescription">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default TecnologyBox