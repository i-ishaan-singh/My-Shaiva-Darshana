import React from 'react';


const ApplicationContext = React.createContext({});


const ApplicationState = function(props){

    const {children} = props;

    const [baseFontSize, setBaseFontSize] = React.useState(15);

    return (<ApplicationContext.Provider
                value={{
                    baseFontSize,
                    setBaseFontSize

                }}
            >
                {children}
            </ApplicationContext.Provider>)
}

export {ApplicationState, ApplicationContext}