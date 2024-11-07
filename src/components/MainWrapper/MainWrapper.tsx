import React from 'react';
import './MainWrapper.scss';

export const MainWrapper: React.FC = ({children}) => {
    return (
        <div className="wrapper__div">
            {children}
        </div>
    );
};

export default MainWrapper;

