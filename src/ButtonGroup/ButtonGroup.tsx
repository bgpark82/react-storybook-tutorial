/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export type ButtonGroupProps = {
    children: React.ReactNode
    direction: 'row'|'column',
    rightAlign?:boolean,
    gap: number|string,
    className?:string,
}

const ButtonGroup = ({children, direction, rightAlign, gap, className}:ButtonGroupProps) => {
    return(
        <div css={[{display:'flex',flexDirection:direction}, rightAlign && rightAlignStyle, gapStyle(direction, gap),{className}]}>{children}</div>
    )
}

ButtonGroup.defaultProps = {
    direction: 'row',
    gap:'0.5rem'
}

const rightAlignStyle = css`
    justify-content:flex-end;
`

const gapStyle =(direction:'row'|'column', gap:string|number)=>{
    const marginType = direction === 'row' ? 'marginLeft': 'marginTop'
    return css({
        'button + button':{
            [marginType]: gap
        }
    })
}

export default ButtonGroup;