import React from 'react';
import styled from 'styled-components'

export default function({ width, buttonColor }): JSX.Element {
  const Button = styled.button`
    width: ${width}px;
    height: ${0.6 * width}px;
    background-color: ${buttonColor};
    color: white;
    border: ${width * 0.02}px dodgerblue solid;
    border-radius: 12px;
    outline: none;
    cursor: pointer;
  `
  function confirm() {
    console.log("yes");
  }
  return(
    <Button onClick={confirm}>Yes</Button>
  )
}

