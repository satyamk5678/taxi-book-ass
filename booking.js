import React from "react"
import "./BookingPage.css"

const BookingPage = ({setLoginUser}) => {
    return (
        <div className="BookingPage">
  
            <h1>This is BookingPage</h1>
            <form>
                <label for="fname">Origin From:</label><br>
                <input type="text" id="fname" name="fname" value = 'Delhi'><br>
                <label for="lname">Destination To:</label><br>
                <input type="text" id="lname" name="lname" value="Noida"><br>
                <label for="timing">pickup time</label><br>
                <input type="text" id="lname" name="lname" value="12:00PM"><br><br>
                <input type="submit" value="BOOK">      
            </form>

        </div>
    
    )
}

export default Homepage