import styled from 'styled-components'

export const PopupStyled = styled.div`
  .contact-popup {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 20;
    overflow-y: auto;
    padding: 50px;
    backdrop-filter: blur(50px);
  }
  .contact-inner {
    min-height: 100vh;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contact-content {
    background: linear-gradient(to bottom right, #111827, #ec4899);
    opacity: 0.9;
    color: #eee;
    padding: 30px;
    border-radius: 30px;
    max-width: 60%;
    width: 100%;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
  }
  .contact-header {
    position: relative;
    letter-spacing: 1px;
  }
  .contact-header .bttn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    padding: 0;
    right: -38px;
    top: -60px;
    background: #111827;
    color: #eee;
    border-radius: 50%;
    cursor: pointer;
  }
  .contact-body .general-info {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1px;
  }
`
