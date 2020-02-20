import React from 'react'
import Button from './Button'
/** @jsx jsx */
import {jsx,css} from '@emotion/core'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'

export default {
    title: 'component|Button',
    component: Button,
    decorators: [withKnobs]
}

export const button = () => {
    const label = text('children','BUTTON');
    const size = select('size',['small','medium','large'],'medium')
    const theme = select('theme',['primary','secondary','tertiary'], 'primary');
    const disabled = boolean('disabled',false);
    const width = text('width','')
    return (
        <Button  width={width} disabled={disabled} size={size} theme={theme} onClick={action('onClick')}>{label}</Button>
    )
}

button.story={
    name:'default'
}

export const primaryButton = () => <Button>PRIMARY</Button>
export const secondaryButton = () => <Button theme='secondary'>SECONDARY</Button>
export const tertiaryButton = () => <Button theme='tertiary'>TERTARY</Button>

export const smallButton = () => <Button size='small'>SMALL</Button>
export const mediumButton = () => <Button size='medium'>MEDIUM</Button>
export const largeButton = () => <Button size='large'>LARGE</Button>



const buttonWrapper = css`
     
    .description {
        margin-bottom : 0.5rem;
        font-weight:bold;
    }
    & > div + div {
        margin-top : 2rem;
    }
`

export const size = () =>{
    return(
        <div css={buttonWrapper}>
            <div>
                <div className="description">Small</div>
                <Button size="small">SMALL</Button>
            </div>
            <div>
                <div className="description">Medium</div>
                <Button size="medium">MEDIUM</Button>
            </div>
            <div>
                <div className="description">Large</div>
                <Button size="large">LARGE</Button>
            </div>
        </div>
    )
}

export const theme = () =>{
    return(
        <div css={buttonWrapper}>
            <div>
                <div className="description">Primary Button</div>
                <Button size="small" disabled>PRIMARY</Button>
            </div>
            <div>
                <div className="description">Primary Button</div>
                <Button size="small" disabled theme="secondary">PRIMARY</Button>
            </div>
            <div>
                <div className="description">Primary Button</div>
                <Button size="small"disabled theme="tertiary">PRIMARY</Button>
            </div>

        </div>
    )
}

export const width = () => {
    return(
        <div css={buttonWrapper}>
            <div>
                <Button width="20rem">CUSTOM WIDTH</Button>
            </div>
            <div>
                <Button width="100%">FULL WIDTH</Button>
            </div>
        </div>
    )
}