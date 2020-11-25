import { render } from '@testing-library/react';
import React, { useState } from 'react'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function PersonForm() {
        
    const [value, setValue] = useState();

    
    return(
        <div>
            <PhoneInput placeholder="Enter Phone Number" value={value} onChange={setValue}/>
        </div>
    )
    
}