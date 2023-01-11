import { styled } from "../../theme/global"

export function SearchBar({ value, placeholder, onChange }: { value: string, placeholder: string, onChange: (value: string) => void }) {
    return (<SearchBarBase placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} />)
}

const SearchBarBase = styled('input', {
    padding: '16px',
    backgroundColor: '$gray3',
    borderRadius: '9999px',
    border: 'none',
    width: '100%',

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