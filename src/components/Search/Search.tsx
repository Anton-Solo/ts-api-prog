import {ReactComponent as SearchIcon} from 'assets/icon-search.svg';
import { Button } from 'components/Button';
import { useRef } from 'react';

import styles from './Search.module.scss';

interface SearchProps { 
  hasError: boolean,
  onSubmit: (text: string) => void,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = searchRef.current ? searchRef.current.value : '';

    if(text.trim()) {
      onSubmit(text);
      if (searchRef.current) {
        searchRef.current.value = '';
      }
    }
  }

  return(
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon />
        </label>
        <input 
          ref={searchRef}
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search Github username..."
        />
        {hasError && (
          <div className={styles.error}>No result</div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  )
};
