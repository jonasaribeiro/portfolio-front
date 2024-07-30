import {
  ModalBackground,
  ModalContent,
  CloseButton,
} from "../../styles/components/modal";

const Modal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  return (
    <ModalBackground isVisible={isVisible}>
      <ModalContent>
        <h2>Aviso</h2>
        <p>
          Oi! Este portfólio ainda está em desenvolvimento, então você pode
          encontrar algumas áreas em construção ou ainda não finalizadas. Estou
          trabalhando duro para deixá-lo o mais completo e funcional possível.
        </p>
        <p>
          Se tiver algum conselho ou observação, ficarei muito feliz em receber
          seu feedback. Basta enviar no seguinte email:
        </p>
        <p>
          <a href="mailto:jonasafribeiro@gmail.com">jonasafribeiro@gmail.com</a>
        </p>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
