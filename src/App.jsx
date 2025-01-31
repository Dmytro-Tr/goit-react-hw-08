import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { fetchContacts } from "./redux/contacts/operations";
// import { selectIsError, selectIsLoading } from "./redux/contacts/slice";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Layout from "./components/Layout/Layout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { refreshUserThunk } from "./redux/auth/operations";
import { selectisRefreshing } from "./redux/auth/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectisRefreshing);

  useEffect(() => {
    // dispatch(fetchContacts());
    dispatch(refreshUserThunk());
  }, [dispatch]);

  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);

  return isRefreshing ? null : (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          {" "}
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="contacts"
            element={<ContactsPage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      {/* {isError && <h2>Something went wrong!</h2>}
      {isLoading && <h2>Loading...</h2>} */}
    </div>
  );
};

export default App;
