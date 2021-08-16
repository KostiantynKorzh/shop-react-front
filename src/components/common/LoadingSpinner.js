import React from 'react';
import {CircularProgress} from "@material-ui/core";

const LoadingSpinner = () => {
    return (
        <>
            <div
                style={{
                    height: "90vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CircularProgress
                    style={{
                        transform: "scale(5)"
                    }}
                />
            </div>
        </>
    );
};

export default LoadingSpinner;