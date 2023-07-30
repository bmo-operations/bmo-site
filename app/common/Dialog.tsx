import { styled } from "styled-system/jsx";
import * as Dialog from "@radix-ui/react-dialog";

export const DialogOverlay = styled(Dialog.Overlay, {
    base: {
        position: 'fixed',
        top: '0',
        backgroundColor: 'black.a.11',
        width: '100%',
        height: '100%'
    }
})

export const ModalWrapper = styled('div', {
    base: {
        width: '100%',
        height: '100%',
        position: "fixed",
        top: '0',
        padding: '5vh',
        display: "flex",
    }
})

export const ModalContent = styled(Dialog.Content, {
    base: {
        borderRadius: '16px',
        padding: '0px',
        border: 'none',
        overflow: 'auto',
        position: 'relative',
        maxHeight: '90vh',
        margin: 'auto auto',
        maxWidth: '85ch',
        backgroundColor: 'gray.1',
        // top: '0',
    }
})

export const PopupClose = styled('div', {
    base: {
        borderRadius: '32px',
        backgroundColor: 'black.a.11',
        width: '48px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        cursor: 'pointer',
    }
})