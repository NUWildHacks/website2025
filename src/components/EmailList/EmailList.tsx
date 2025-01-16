import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import "./EmailList.scss";

interface IEmailList {}

export const EmailList: React.FC<IEmailList> = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //const data: FormData = new FormData(e.target as HTMLFormElement);
  };
  return (
    <div className="email_list__container">
      <Modal.Root
        opened={opened}
        onClose={close}
        size="sm"
        zIndex={10000}
        centered
      >
        <Modal.Overlay />
        <Modal.Content className="email_modal__content">
          <Modal.Header>
            <Modal.Title className="email_modal__title">
              Mailing List
            </Modal.Title>
            <Modal.CloseButton className="email_modal__close" />
          </Modal.Header>
          <Modal.Body>
            <div className="email_form__container">
              <form onSubmit={handleSubmit}>
                <div className="email_form__input">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name="firstName" id="firstName" required />
                </div>
                <div className="email_form__input">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" name="lastName" id="lastName" required />
                </div>
                <div className="email_form__input">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" required />
                </div>
                <button type="submit">Register</button>
              </form>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <button id="email_list__button" onClick={open}>
        Join the mailing list!
      </button>
    </div>
  );
};

export default EmailList;
