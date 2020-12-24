import React, { useEffect } from 'react';
import './content.css';
import { CSSTransition } from 'react-transition-group';
import LoadingBar from 'react-top-loading-bar';

const Index: React.FC = ({ children }) => {
    const [ins, setIns] = React.useState(false);
    const [progress, setprogress] = React.useState(0);
    useEffect(() => {
        setIns(true);
        return () => setIns(false);
    }, []);
    return (
        <div>
            <LoadingBar waitingTime={500} onLoaderFinished={() => setprogress(0)} progress={progress} color="#1890ff" />
            <CSSTransition
                onEnter={() => setprogress(50)}
                onEntering={() => setprogress(70)}
                onEntered={() => setprogress(100)}
                unmountOnExit
                in={ins}
                classNames="animate"
                timeout={300}
            >
                <div>{children}</div>
            </CSSTransition>
        </div>
    );
};

export default Index;
