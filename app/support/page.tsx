import { ArrowRightIcon } from "@radix-ui/react-icons";
import Container from "../common/Container";
import { Column, Row } from "../common/Layouts";
import Text from "../common/Text";
import { styled } from "../common/theme/global";
import { DonationInstructions, donationDescription } from "./Instructions";
import Image from "next/image"

export default function SupportPage() {
    return (
        <Container>
            <Column gap="64px">
                <Column gap="32px">
                    <Column gap="8px">
                        <Text style="h2">Donate</Text>
                        <Text style="body" color="primary">{donationDescription}</Text>
                    </Column>
                    <InstructionCard gap="16px" padding="24px">
                        <Text style="subtitle">Instructions</Text>
                        <DonationInstructions/>
                    </InstructionCard>
                </Column>
                <Column gap="32px">
                    <Column gap="8px">
                        <Text style="h2">Team Store</Text>
                        <Text style="body" color="primary">Buy gear from our team store! These items are sold at cost, so feel free to donate as well!</Text>
                    </Column>
                    
                </Column>
            </Column>
        </Container>
    )
}

function SupportSection({ title, description }: { title: string, description: string }) {
    return (
        <Column gap="32px">
            <Column gap="8px">
                <Text style="h2">{title}</Text>
                <Text style="body" color="primary">{description}</Text>
            </Column>
            <InstructionCard gap="16px" padding="24px">
                <Text style="subtitle">Instructions</Text>
                <DonationInstructions/>
            </InstructionCard>
        </Column>
    )
}

function TeamStoreLink() {
    return (
        <TeamStoreLinkBase>
            <Image src="images/team_store.png" alt="Picture of the team store"/>
            <Row justify="space-between" padding="16px">
                <Text style="subtitle">Visit the Etsy Store</Text>
                <ArrowRightIcon/>
            </Row>
        </TeamStoreLinkBase>
    )
}

const TeamStoreLinkBase = styled(Column, {

})

const InstructionCard = styled(Column, {
    boxShadow: "0px 0px 24px rgba(39, 174, 96, 0.25);",
    borderRadius: "24px",
})