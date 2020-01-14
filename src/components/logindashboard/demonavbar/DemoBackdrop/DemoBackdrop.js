import React from 'react';

import './DemoBackdrop.css';

const Livebackdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default Livebackdrop;