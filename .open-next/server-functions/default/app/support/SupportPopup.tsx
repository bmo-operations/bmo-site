import { X } from "phosphor-react";
import { Column, Row } from 'styled-system/jsx';
import { ModalContent, ModalWrapper, PopupClose } from "../common/Dialog";
import { Text } from "../common/theme/global";
import { DonationInstructions, donationDescription } from "./Instructions";

export function SupportPopup({ onClose }: {onClose: () => void}) {
    return (
        <ModalWrapper>
            <ModalContent>
                <Column padding="24px" gap="24px" align="stretch">
                    <Column gap="16px" align="stretch">
                        <Row justify="space-between" gap="16px">
                            <Text style="h3">Donate</Text>
                            <PopupClose onClick={e => onClose()}>
                                <X />
                            </PopupClose>
                        </Row>
                        <Text style="body" color="secondary" whiteSpace="pre-wrap">{donationDescription}</Text>
                    </Column>
                    <Column gap="16px" align="stretch">
                        <Text style="subtitle">Instructions</Text>
                        <DonationInstructions/>
                    </Column>
                </Column>
            </ModalContent>
        </ModalWrapper>
    )
}



