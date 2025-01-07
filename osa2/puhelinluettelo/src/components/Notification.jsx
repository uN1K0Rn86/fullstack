const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    
    const notificationStyle = {
        color: 'green',
        borderStyle: 'solid',
        borderRadius: 3,
        fontSize: 20,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification
