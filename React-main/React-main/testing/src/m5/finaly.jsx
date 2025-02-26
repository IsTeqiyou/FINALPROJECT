// Soal 1
function WelcomeMessage({isLoggedIn}){
    return (
        <div>
            <h3>{isLoggedIn ? "Welcome Back User" : "Please Log In to Continue"}</h3>
        </div>
    )
}
// Soal 2
function DeliveryStatus({status}) {
    if (status === "processing") {
        return <h3>Your order is being processed</h3>
    } else if (status === "shipped") {
        return <h3>Your order has been shipped</h3>
    } else if (status === "delivered") {
        return <h3>Your order has been delivered</h3>
    }
    return null;
}
// Soal 3
function Notification({priority}) {
    if (priority === "high") {
        return <h3>Immidiate action required!</h3>
    } else if (priority === "medium") {
        return <h3>Please address this issue soon</h3>
    } else if (priority === "low") {
        return <h3>No immidiate action required</h3>
    }
}
// Soal 4
function Greeting({time}){
    if (time === 5 || time === 6 || time === 7 || time === 8 || time === 9 || time === 10 || time === 11) {
        return <h3>Good Morning</h3>
    } else if (time === 12 || time === 13 || time === 14 || time === 15 || time === 16 || time === 17) {
        return <h3>Good Afternoon</h3>
    } else if ( time === 18 || time === 19 || time === 20) {
        return <h3>Good Evening</h3>
    } else if (time === 21 || time === 22 || time === 23 || time === 24 || time === 1 || time === 2 || time === 3 || time === 4) {
        return <h3>Good Night</h3>
    }
}
export { WelcomeMessage, DeliveryStatus, Notification, Greeting };