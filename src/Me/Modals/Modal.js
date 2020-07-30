import React from 'react';
import styled from 'styled-components';
import { desktop, tablet } from '../styles/shared/devices';

import CloseIcon from '../../assets/me/icon-close.svg';

const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const CloseIconButton = styled.button`
  background-color: transparent;
  color: #000;
  font-weight: 500;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 15px;
  padding: 5px 10px;
  width: 28px;
  height: 28px;
  cursor: pointer;

  @media ${tablet} {
    right: 10%;
  }

  @media ${desktop} {
    right: 25%;
  }
`;

const ContentContainer = styled.div`
  height: 80%;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  padding: 20px;

  @media ${tablet} {
    height: 70%;
  }
`;

const Title = styled.header`
  width: 100%;
  color: #4f4f4f;
  font-family: Lato;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  text-align: center;
  margin: 50px 0;
`;

const Footer = styled.footer`
  position: absolute;
  height: 20%;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${tablet} {
    height: 30%;
  }
`;

const ButtonBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${tablet} {
    flex-direction: row;
  }
`;

const Button = styled.button`
  height: 30px;
  width: 285px;
  border-radius: 3px;
  font-family: Lato;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  margin-bottom: 1rem;
  cursor: pointer;

  @media ${tablet} {
    height: 30px;
    width: 151px;
    margin: 1rem;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #69d5b1;
  color: #fff;
  font-family: Lato;
  font-size: 14px;
  order: -1;
`;

const SecondaryButton = styled(Button)`
  box-sizing: border-box;
  background-color: #fff;
  border: 2px solid #69d5b1;
  color: #69d5b1;
`;

const CloseIconStyled = styled.img`
  width: 25px;
  height: 25px;

  @media ${tablet} {
    width: 40px;
    height: 40px;
  }
`;

export const Modal = ({ closeModal, onSave, title, children }) => (
  <ModalContainer>
    <CloseIconButton onClick={closeModal}>
      <CloseIconStyled src={CloseIcon} />
    </CloseIconButton>
    <ContentContainer>
      <Title>{title || null}</Title>
      {children}
    </ContentContainer>
    <Footer>
      <ButtonBar>
        <SecondaryButton onClick={closeModal}>Close</SecondaryButton>
        <PrimaryButton onClick={onSave}>Save</PrimaryButton>
      </ButtonBar>
    </Footer>
  </ModalContainer>
);
