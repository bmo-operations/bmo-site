"use client"

import { red } from "@radix-ui/colors";
import { Container } from "app/common/Container";
import { Text } from "app/common/theme/global";
import { LinkItem } from "app/home/cards/LinkCard";
import Image from "next/image";
import { EnvelopeOpen } from "phosphor-react";
import { Column } from "styled-system/jsx";

export default function RecruitingPage() {
    return (
        <Container>
            <Column gap="24px" align="stretch">
                <Image
                    src={`/content/recruiting/tryouts21.jpeg`}
                    alt="Picture of players at BMo tryouts"
                    width={0}
                    height={0}
                    style={{
                        width: "100%",
                        borderRadius: "24px",
                        maxHeight: "300px",
                        objectFit: "cover",
                        filter: "saturate(0) contrast(1.2) brightness(1.1)",
                    }}
                />
                <Text style="h2" color="primary">Are you a <span style={{ color: "hsl(358, 65.0%, 48.7%)" }}>prospective student</span> interested in playing ultimate at Brown?</Text>
                <Text>We'd love to have you on campus for a visit! Email us at <span style={{ fontWeight: 600 }}>bmo.captains@gmail.com</span> and we'll get in touch!</Text>
                <LinkItem info={{
                    icon: <EnvelopeOpen/>,
                    text: "Email the captains",
                    link: "mailto:bmo.captains@gmail.com",
                    colorPalette: Object.values(red),
                }}/>
            </Column>
        </Container>
    )
}