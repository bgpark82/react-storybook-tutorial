
import React from 'react'
/** @jsx jsx */
import {jsx, css} from '@emotion/core'

type ButtonProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode,
    /** 클릭 시 호출할 함수 */
    onClick?:(e?:React.MouseEvent<HTMLButtonElement>) => void
    /** 버튼의 생김새를 설정 */
    theme: 'primary'|'secondary'|'tertiary'
    size: 'small'|'medium'|'large'
    disabled?: boolean,
    width?:string|number
}


/** Button 컴포넌트는 어떠한 작업을 트리거할 때 사용됩니다. */
function Button({children,onClick,theme, size, disabled, width}:ButtonProps){
    return <button css={[style, themes[theme], sizes[size], {width}]} onClick={onClick} disabled={disabled}>{children}</button>
}

Button.defaultProps = {
    theme:'primary',
    size:'medium',
}

const style = css`
    outline:none;
    border:none;
    box-sizing: border-box;
    height: 2rem;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    background: #20c997;
    color:white;
    border-radius: 0.25rem;
    line-height: 1;
    font-weight:600;
    &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    &:hover {
      background: #38d9a9;
    }
    &:active {
      background: #12b886;
    }
    &:focus {
      box-shadow: 0px 0px 8px rgba(0,0,0,0.2);
    }
    &:disabled {
      cursor: not-allowed
    }
`

const themes = {
    primary: css`
    background: #20c997;
    color: white;
    &:hover:enabled {
      background: #38d9a9;
    }
    &:active:enabled {
      background: #12b886;
    }
    &:disabled {
      background: #aed9cc;
    }
  `,
  secondary: css`
    background: #e9ecef;
    color: #343a40;
    &:hover:enabled {
      background: #f1f3f5;
    }
    &:active:enabled {
      background: #dee2e6;
    }
    &:disabled {
      color: #c6d3e1;
    }
  `,
  tertiary: css`
    background: none;
    color: #20c997;
    &:hover:enabled {
      background: #e6fcf5;
    }
    &:active:enabled {
      background: #c3fae8;
    }
    &:disabled {
      color: #bcd9d0;
    }
  `
  }
  const sizes = {
    small: css`
      height: 1.75rem;
      font-size: 0.75rem;
      padding: 0 0.875rem;
    `,
    medium: css`
      height: 2.5rem;
      font-size: 1rem;
      padding: 0 1rem;
    `,
    large: css`
      height: 3rem;
      font-size: 1.125rem;
      padding: 0 1.5rem;
    `
  }

  


export default Button;