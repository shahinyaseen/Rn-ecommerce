import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Icon} from '../Icon/index';

export default function Toast() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState();
  const [message, setMessage] = useState();
  const [time, setTime] = useState(3000);
  const toast = (tmessage, ttype, ttime) => {
    setType(ttype);
    setMessage(tmessage);
    setTime(ttime);
    setIsOpen(true);
  };
  const color = value => {
    switch (value) {
      case 'success':
        return {color: '#09522D', bg: '#D0F5E3'};
      case 'danger':
        return {color: '#A33939', bg: '#FFE5E5'};
      case 'warning':
        return {color: '#665018', bg: '#FFF4D8'};
      case 'info':
        return {color: '#2196F3', bg: '#D4E9FB'};
      default:
        return {color: '#EAEAF0', bg: '#31326F'};
    }
  };
  const ToastAlert = () => {
    setTimeout(() => {
      setIsOpen(false);
      setTime(3000);
    }, time || 3000);
    return isOpen ? (
      <Wrapper>
        <AlertContent color={color(type)}>
          <AlertMessage>{message}</AlertMessage>
          <Icon name="close" onPress={() => setIsOpen(false)} />
        </AlertContent>
      </Wrapper>
    ) : (
      <></>
    );
  };
  return {
    ToastAlert: ToastAlert,
    toast: toast,
  };
}
const Wrapper = styled.View`
  position: absolute;
  top: 0;
  z-index: ${p => p.zIndex || 200};
  width: 100%;
  transition: all 0.2s ease-in-out;
`;
const AlertContent = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${p => p.color.bg};
  color: ${p => p.color.color};
  margin: auto;
  padding: 15px 15px;
  width: 100%;
`;
const AlertMessage = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
  width: 80%;
`;
