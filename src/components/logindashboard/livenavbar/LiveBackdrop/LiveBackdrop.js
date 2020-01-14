import React from 'react';

import './LiveBackdrop.css';

const Livebackdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default Livebackdrop;