import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import s from "./searchbox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.box}>
      <p>Find contact by name</p>
      <input
        type="text"
        className={s.input}
        placeholder="Enter name or phone number..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
