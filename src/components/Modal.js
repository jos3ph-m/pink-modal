import React {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import modal from '../img/modal.jpg';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(79, 79, 79, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #e3d0c9;
  color: #a7644f;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #a7644f;

  h1 {
    margin-bottom: 0;
  }

  p {
    margin: 0.2rem 1rem 2.2rem 1rem;
    font-size: 1.1rem;
  }

  button {
    padding: 10px 24px;
    background: #a7644f;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1: 0,
    transform: showModal ? `translateY(0%)`: `translateY(-100%)`
  })

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalImg src={modal} alt="desert" />
            <ModalContent>
              <h1>Are you ready?</h1>
              <p>Get exclusive access to our next launch</p>
              <button>Join Now</button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
