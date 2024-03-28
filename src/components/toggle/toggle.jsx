// Adding toggle by Material-UI

import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';

const Toggle = () => {
    const [powerOn, setPowerOn] = useState(false);
    const handleToggle = () => {
        setPowerOn(!powerOn);
    };

    return (
        <div>
            <Switch
                checked={powerOn}
                onChange={handleToggle}
                color="primary"
                name="powerToggle"
                inputProps={{ 'aria-label': 'power toggle' }}
                size="large" // Add this line to make the toggle bigger
            />
        </div>
    );
};

export default Toggle;
