/* eslint-disable react/prop-types */

import "./TecnologyBox.css"
const TecnologyBox = (props) => {
    return (
        <div className="tecnologyBox ">
            <img src={props.image} alt="" />
            <h3 >{props.title}</h3>
        </div>
    )
}

export default TecnologyBox