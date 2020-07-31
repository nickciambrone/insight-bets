import styled, {css} from 'styled-components';

const GoogleSignInStyles = css`
background-color: #4285f4;
color: white;

&:hover {
  background-color: #357ae8;
  border: none;
}
`
const InvertedStyles = css`
background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`
const RegularStyles = css`
background-color: black;
color: white;
border: none;

&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}
`


const getStyling = (props) =>{
    if(props.isGoogleSignIn){
        return GoogleSignInStyles;
    }
    return props.inverted ? InvertedStyles : RegularStyles
}

export const CustomButtonStyled = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 20px 0 20px;
font-size: 14px;

text-transform: uppercase;
font-family: 'Rubik', sans-serif;
font-weight: bolder;
cursor: pointer;
display: flex;
justify-content: center;


${getStyling}

`