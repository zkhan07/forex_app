import React from 'react';

import './MainBackdrop.css';

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default backdrop;