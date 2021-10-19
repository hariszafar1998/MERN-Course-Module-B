import React from 'react';

const Alert = ( {alert}, props ) => {
    return (
        alert !== null && (
            <div className="alert">
                <div><i className="fas fa-info-circle"></i> {alert.message}</div>
                {/* <div onClick={}><i className="far fa-times-circle"></i></div> */}
            </div>
        )
    )
}

export default Alert