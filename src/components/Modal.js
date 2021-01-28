import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = ({ showModal, setShowModal }) => {
  return <>{showModal ? <div>Modal</div> : null}</>;
};
