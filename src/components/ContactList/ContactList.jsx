import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import s from "./contactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={s.list}>
        {contacts.map((item) => (
          <Contact {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
