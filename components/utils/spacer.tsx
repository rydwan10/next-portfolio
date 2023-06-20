import React from 'react';

interface SpacerProps {
    height?: number | string;
    width?: number | string;
}

const Spacer: React.FC<SpacerProps> = ({ height, width }) => {
    const style: React.CSSProperties = {
        height: height ? height : undefined,
        width: width ? width : undefined,
    };

    return <div style={style} />;
};

export default Spacer;
