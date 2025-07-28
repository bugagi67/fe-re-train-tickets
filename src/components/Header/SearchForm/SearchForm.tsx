import styles from "./SearchForm.module.css"

interface SearchFormProps {
  type: string;
}

export const SearchForm = ({ type }: SearchFormProps) => {


  return (
    <div className={type === "main" ? styles.search_form : styles.search_form_default}>
      <form>
      </form>
    </div>
  );
};
