import { styled } from "../../theme/global";

export function Row({ padding, gap, justify, align, children }: { 
    padding?: string,
    gap?: string,
    justify?: string,
    align?: string,
    children: React.ReactNode 
}) {
    return (<Flex direction='row' padding={padding} gap={gap} justify={justify} align={align} children={children}/>)
}

export function Column({ padding, gap, justify, align, children }: { 
    padding?: string,
    gap?: string,
    justify?: string,
    align?: string,
    children: React.ReactNode 
}) {
    return (<Flex direction='column' padding={padding} gap={gap} justify={justify} align={align} children={children}/>)
}

function Flex({ direction, padding, gap, justify, align, children }: { 
    direction: string,
    padding?: string,
    gap?: string,
    justify?: string,
    align?: string,
    children: React.ReactNode 
}) {
    const BaseFlex = styled('div', {
        display: 'flex',
        flexDirection: direction,
        gap: (gap ?? '0'),
        padding: (padding ?? '0'),
        justifyContent: (justify ?? 'start'),
        alignItems: (align ?? 'start'),
    })

    return (
        <BaseFlex>
            {children}
        </BaseFlex>
    )
}