/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Icon from './Icon'

export default {
    title:'component|icon',
    component:Icon
}

export const icon = () => <Icon />
export const fill = () => <Icon color='red'/>
export const size = () => <Icon size='5rem'/>
export const custom = () => <Icon icon='heart' css={{ color: 'red', width:'4rem', background:'pink'}}/>