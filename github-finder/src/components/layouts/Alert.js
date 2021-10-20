import React from 'react';

export default function Alert({alert, removedNotification}) {
    return (
        alert !== null && (
            <div className="alert">
                <div><i className="fas fa-info-circle"></i> {alert.message}</div>
                <div><i className="far fa-times-circle" onClick={removedNotification}></i></div>
            </div>
        )
    )
}