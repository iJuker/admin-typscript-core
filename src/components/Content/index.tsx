import React, { useEffect } from 'react';
import './content.css';
import { CSSTransition } from 'react-transition-group';

const Index: React.FC = ({ children }) => {
    const [ins, setIns] = React.useState(false);

    useEffect(() => {
        setIns(true);
        return () => {
            setIns(false);
        };
    }, []);
    return (
        <CSSTransition mountOnEnter unmountOnExit in={ins} classNames="animate" timeout={300}>
            <div>{children}</div>
        </CSSTransition>
    );
};

export default Index;
