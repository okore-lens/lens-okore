import React from "react";
import ReactDom from "react-dom";

import "./modal.scss";

interface BackdropProps {
  onClose: () => void;
}
interface ModalOverlayProps {
  children: React.ReactNode;
}

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverLay: React.FC<ModalOverlayProps> = (props) => {
  return <div className="modal">{props.children}</div>;
};

const portalElement: HTMLElement = document.getElementById("modal")!;

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
