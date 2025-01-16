import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Param {
  onSearch: (search: string) => void;
}

export default function GameSearch({ onSearch }: Param) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%", borderRadius: 35 }}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup style={{ width: "100%" }} startElement={<BsSearch />}>
        <Input ref={ref} placeholder="Game Name..." borderRadius={35}></Input>
      </InputGroup>
    </form>
  );
}
