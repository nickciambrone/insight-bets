import React from 'react';
import {CustomButtonStyled} from './custom-button.styles'
const CustomButton = ({children,...otherProps})=>(
    <CustomButtonStyled className = 'custom-button' {...otherProps}>
        {children}
    </CustomButtonStyled>
)

export default CustomButton;