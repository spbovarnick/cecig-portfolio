import { useCallback, useState } from "react";
import {Stack, TextInput} from "@sanity/ui";
import { StringInputProps, set, unset } from "sanity";
import bcrypt from "bcryptjs";
// onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset()), [onChange]

export function PasswordInput(props) {
  const { onChange, value = "", elementProps } = props;

  // State for the visible password
  const [visiblePassword, setVisiblePassword] = useState(value);

  // State for the hashed password
  const [hashedPassword, setHashedPassword] = useState("");

  const handleChange = useCallback((event) => {
    setVisiblePassword(event.currentTarget.value);

    if (event.currentTarget.value) {
      const salt = bcrypt.genSaltSync(10);
      const hashed = bcrypt.hashSync(event.target.value, salt);
      setHashedPassword(hashed);
      onChange(set(hashed));
    } else {
      setHashedPassword("");
      onChange(unset());
    }
  }, [onChange]);

  return (
    <Stack space={3}>
      <TextInput {...elementProps} onChange={handleChange} value={visiblePassword} />
    </Stack>
  )
}