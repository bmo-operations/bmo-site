import {styled} from "./theme/global";
import * as Dialog from "@radix-ui/react-dialog";

export const DialogOverlay = styled(Dialog.Overlay, {
    position: 'fixed',
    top: '0',
    backgroundColor: '$blackA11',
    width: '100%',
    height: '100%'
})

export const ModalWrapper = styled('div', {
    width: 'calc(100% - 10vh)',
    // width: '100%',
    height: 'calc(100% - 10vh)',
    // height: '100%',
    position: "fixed",
    top: '0',
    padding: '5vh',
    display: "flex",
})

export const ModalContent = styled(Dialog.Content, {
    borderRadius: '16px',
    padding: '0px',
    border: 'none',
    overflow: 'auto',
    position: 'relative',
    maxHeight: '90vh',
    margin: 'auto auto',
    maxWidth: '85ch',
    backgroundColor: '$gray1',
    // top: '0',
})

export const PopupClose = styled('div', {
    borderRadius: '32px',
    backgroundColor: '$blackA11',
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',

})