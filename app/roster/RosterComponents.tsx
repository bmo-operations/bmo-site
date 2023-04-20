import { styled } from "../common/theme/global";
import { Row } from "../common/Layouts";
import Text from "../common/Text";

export function RosterNickname({ nickname }: { nickname: string }) {
    return (
        <Row gap="4px">
            <Text style="body" color="tertiary">aka</Text>
            <Text style="body" color="secondary">{nickname}</Text>
        </Row>
    )
}

function NumberText({ number }: { number: number }) {
    return (
        <Row justify="center" align="center">
            <Text style="body" color="tertiary">#</Text>
            <Text style="body" color="secondary">{number}</Text>
        </Row>
    )
}

export function NumberChip({ number }: { number: number }) {
    const Base = styled('div', {
        backgroundColor: '$gray3',
        borderRadius: '32px',
        padding: '2px 8px',
        height: 'min-content'
    })
    return (<Base><NumberText number={number} /></Base>)
}

export function NumberCircle({ number }: { number: number }) {
    const Base = styled('div', {
        backgroundColor: '$gray3',
        borderRadius: '32px',
        width: '48px',
        maxWidth: '48px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    })
    return (<Base><NumberText number={number} /></Base>)
}
