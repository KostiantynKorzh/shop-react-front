import React, {useEffect} from 'react';

const ErrorPage = (error) => {

    useEffect(() => {
        console.log(error.error.response)
    }, [])

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div>
                    <h1>SORRY, ERROR OCCURRED</h1>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div>
                    <h3>{error.error.response.status} in {error.error.response.config.url}</h3>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img src='/crying_cat.jpg' alt="error image"/>
            </div>
        </>
    );
};

export default ErrorPage;