import { Row, styled } from 'styled-system/jsx';
import { Text } from "../common/theme/global";

export function RosterNickname({ nickname }: { nickname: string }) {
    return (
        <Row gap="4px">
            <Text style="body" color="tertiary">aka</Text>
            <Text style="body" color="secondary" maxLines='one'>{nickname}</Text>
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
        base: {
            backgroundColor: 'gray.3',
            borderRadius: '32px',
            padding: '2px 8px',
            height: 'min-content'    
        }
    })
    return (<Base><NumberText number={number} /></Base>)
}

export function NumberCircle({ number }: { number: number }) {
    const Base = styled('div', {
        base: {
            backgroundColor: 'gray.3',
            borderRadius: '32px',
            width: '48px',
            maxWidth: '48px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',    
        }
    })
    return (<Base><NumberText number={number} /></Base>)
}
