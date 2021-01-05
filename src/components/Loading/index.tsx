import React from 'react';
import styled from 'styled-components';
import './style.css';
const Contain = styled.div`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`;
const Index: React.FC = () => {
    return (
        <Contain>
            <div className="cssload-thecube">
                <div className="cssload-cube cssload-c1"></div>
                <div className="cssload-cube cssload-c2"></div>
                <div className="cssload-cube cssload-c4"></div>
                <div className="cssload-cube cssload-c3"></div>
            </div>
        </Contain>
    );
};

export default Index;
