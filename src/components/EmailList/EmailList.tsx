import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import "./EmailList.scss";

interface IEmailList {}

export const EmailList: React.FC<IEmailList> = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: FormData = new FormData(e.target as HTMLFormElement);
  };
  return (
    <div className="email_list__container">
      <Modal
        opened={opened}
        onClose={close}
        title="Mailing List"
        zIndex={10000}
        centered
      >
        <div className="email_form__container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" required />
            <label htmlFor="lastName Name">Last name</label>
            <input type="text" name="lastName" id="lastName" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <button type="submit">Register</button>
          </form>
        </div>
      </Modal>
      <button id="email_list__button" onClick={open}>
        Join the mailing list!
      </button>
    </div>
  );
};

export default EmailList;
