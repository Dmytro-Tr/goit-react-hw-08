import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./contactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const getVisibleContacts = (contacts, statusFilter) => {
  if (!statusFilter) return contacts;
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(statusFilter.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  // console.log("contacts: ", contacts);
  const statusFilter = useSelector(selectNameFilter);
  // console.log("statusFilter: ", statusFilter);
  const filterData = getVisibleContacts(contacts, statusFilter);
  // console.log("filterData: ", filterData);

  return (
    <div>
      <ul className={s.list}>
        {filterData.map((item) => (
          <Contact
            {...item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
