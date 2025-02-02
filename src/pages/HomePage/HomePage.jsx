import s from "./homePage.module.css";

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>
        Welcome to EasyPhonebook <br /> The Smart Way to Store & Find Contacts!
      </h2>
      <p className={s.text}>
        Tired of losing important contacts? <br />
        With EasyPhonebook, you can easily store, manage, and find your contacts in seconds! Save names and phone
        numbers securely and search effortlessly whenever you need them.
      </p>
      <ul className={s.list}>
        <li>🔹 Quick & Easy Contact Storage</li>
        <li>🔹 Instant Search by Name or Number</li>
        <li>🔹 Secure & Reliable</li>
      </ul>
      <p className={s.text}>Start organizing your contacts today! Sign up now and never lose a number again! 🚀</p>
    </div>
  );
};

export default HomePage;
