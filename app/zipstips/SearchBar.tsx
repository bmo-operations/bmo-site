import { styled } from 'styled-system/jsx';

export function SearchBar({ value, placeholder, onChange }: { value: string, placeholder: string, onChange: (value: string) => void }) {
    return (<SearchBarBase placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} />)
}

const SearchBarBase = styled('input', {
    base: {
        padding: '16px',
        backgroundColor: 'gray.3',
        borderRadius: '16px',
        border: 'none',
        width: '100%',    
    },

    variants: {
        size: {
            mobile: {
                fontSize: "$bodyMobile",
            },
            desktop: {
                fontSize: "$bodyDesktop",
            },
        },
    }
})