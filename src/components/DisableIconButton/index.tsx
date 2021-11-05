import React from "react";
import { GestureResponderEvent } from "react-native";
import { Icon, IconButton, IconDisabled } from "./styles";

interface IDisableIconButtonProps {
    name: string,
    disabled: boolean,
    onPress: ((event: GestureResponderEvent) => void)
}
export const DisableIconButton = ({ name, disabled, onPress }: IDisableIconButtonProps) => {
    return (
        <IconButton disabled={disabled} onPress={onPress}>
            {
                disabled ?
                    <IconDisabled name={name} /> :
                    <Icon name={name} />
            }
        </IconButton>
    );
}
