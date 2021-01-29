import { removeAccents } from "@/lib/search";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Container, Button } from "./styles";

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const route = useRouter();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchValue(value.toLowerCase());
  }, []);

  const handleSearchSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue) {
      const word = removeAccents(searchValue);
      route.push(`/busca/${word}`);
    }
  }, [searchValue]);

  return (
    <Container>
      <form onSubmit={handleSearchSubmit}>
        <input
          onChange={handleChange}
          placeholder="O que está procurando?"
          type="text"
        />
        <Button type="submit"><FaSearch /></Button>
      </form>
    </Container>
  )
}
