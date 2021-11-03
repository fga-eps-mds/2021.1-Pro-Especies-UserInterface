import React, { useState } from "react";
import { Modal, View, Alert, StyleSheet, Pressable, Text } from "react-native";
import { ModalArrowButton, ModalArrowIcon, ModalContainer, ModalDescripton, ModalImage, ModalImageIconContainer, ModalTitle, ModalView } from "./styles";

interface ModalProps {
    modalVisible: boolean,
    dismissModal: () => void
}
export const InstructionModal = ({ modalVisible, dismissModal }: ModalProps) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                dismissModal();
            }}>
            <ModalContainer>
                <ModalView>
                    <ModalTitle>
                        Como funciona o aplicativo EuPescador?
                    </ModalTitle>
                    <ModalImageIconContainer>
                        <ModalArrowButton>
                            <ModalArrowIcon name="arrow-left" />

                        </ModalArrowButton>
                        <ModalImage source={require('../../assets/InstructionsModal/Passo1.png')} />
                        <ModalArrowButton>
                            <ModalArrowIcon name="arrow-right" />
                        </ModalArrowButton>
                    </ModalImageIconContainer>
                    <ModalDescripton>
                        Na tela de biblioteca, você pode visualizar informações sobre os mais diversos peixes.
                    </ModalDescripton>
                </ModalView>
            </ModalContainer>
        </Modal>
    );
}

