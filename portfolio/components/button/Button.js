import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const NightIcon = styled.img`
  width: 25px;
  height: 25px;
  display: ${props => (props.isNight ? 'block' : 'none')};
`;

const DayIcon = styled.img`
  width: 25px;
  height: 25px;
  display: ${props => (props.isNight ? 'none' : 'block')};
`;

export default function NightModeButton({ isNight, onClick }) {
  return (
    <Button onClick={onClick}>
      <NightIcon src="night-icon.svg" isNight={isNight} />
      <DayIcon src="day-icon.svg" isNight={isNight} />
    </Button>
  );
}
