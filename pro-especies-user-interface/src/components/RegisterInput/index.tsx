import React from "react";
import { Input, InputIcon, InputView } from "./styles";

interface Props{
  icon: string;
  placeholder: string;
}

export function RegisterInput({ icon, placeholder } : Props) {
    return (
      <InputView>
        <InputIcon name={icon}/>
        <Input placeholder={placeholder}/>
      </InputView>
    )
}