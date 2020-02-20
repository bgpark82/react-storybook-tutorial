import React from 'react'
import ButtonGroup from './ButtonGroup'
import Button from '../Button/Button'
import { withKnobs, radios, boolean, text } from '@storybook/addon-knobs'


export default {
    title: 'component|ButtonGroup',
    component: ButtonGroup,
    decorators:[withKnobs]
}
export const buttonGroup = () => {
    const direction = radios('direction',{Row: 'row', Column:'column'}, 'row');
    const rightAlign = boolean('rightAlign',false);
    const gap =text('gap','0.5rem');
    
    return(
        <ButtonGroup direction={direction} rightAlign={rightAlign} gap={gap}>
            <Button>취소</Button>
            <Button>확인</Button>
        </ButtonGroup>
    )
}
// buttonGroup.story = {
//     name:'default'
// }

export const rightAlign = () => <ButtonGroup rightAlign={true}><Button theme="tertiary">취소</Button><Button>확인</Button></ButtonGroup>
export const column = () => <ButtonGroup direction='column'><Button>CLICK ME</Button><Button>CLICK ME</Button></ButtonGroup>
export const gap = () => <ButtonGroup gap="1rem"><Button theme="secondary">취소</Button><Button>확인</Button></ButtonGroup>
export const gapColumn = () => <ButtonGroup direction='column' gap='1rem'><Button>CLICK ME</Button><Button>CLICK ME</Button></ButtonGroup>
