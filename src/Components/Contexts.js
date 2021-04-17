import React, { Component } from "react";
const SessionContext = React.createContext();

class SessionProvider extends Component {
    state = {
        headers: {
            wwwAuthentication: "none",
            Authorization: "none"
        }
    }
      // Method to update state
      setAuthHeader = (headers) => {
        this.setState((prevState) => ( { headers } ))
      }
    
      render() {
        const { children } = this.props
        const { headers } = this.state
        const { setAuthHeader } = this
    
        return (
          <SessionContext.Provider
            value={{
                headers,
                setAuthHeader,
            }}
          >
            {children}
          </SessionContext.Provider>
        )
      }
}


export default SessionContext
export { SessionProvider }