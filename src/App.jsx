import { useDispatch, useSelector } from "react-redux";
// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import { selectIsError, selectIsLoading } from "./redux/contacts/slice";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Header from "./components/Header/Header";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
        <Route
          path="contacts"
          element={<ContactsPage />}
        />
      </Routes>

      {/* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList /> */}
      {isError && <h2>Something went wrong!</h2>}
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
};

export default App;
