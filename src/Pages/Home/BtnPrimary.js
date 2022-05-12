import React from 'react';

const BtnPrimary = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">{children}</button>

        </div >
    );
};

export default BtnPrimary;