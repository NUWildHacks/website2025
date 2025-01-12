import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import "./EmailList.scss";

interface IEmailList {}

export const EmailList: React.FC<IEmailList> = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="email_list__container">
      <Modal
        opened={opened}
        onClose={close}
        title="Mailing List"
        zIndex={10000}
        centered
      >
        <div className="email_form__container"></div>
      </Modal>
      <button id="email_list__button" onClick={open}>
        Join the mailing list!
      </button>
    </div>
  );
};

export default EmailList;
