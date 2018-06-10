import styled, { css } from 'styled-components';

const mediaQueries = {
  mobile: (...args) => {
    return css`
      @media screen and (max-width: 1000px) {
        ${css(...args)}
      }
    `
  }
}

const Styles = {
  main: styled.div`
    width: 100%;
    height: 56px;
    background: red;
    position: fixed;
  `,
  itemList: styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;
  `,
  item: styled.li`
    margin: 0;
    padding: 0;
    padding: 0 14px;
    font-size: 1.2em;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    ${props => props.hideMobile && mediaQueries.mobile`
      display: none;
    `}
  `
}

export const ItemListMobileCSS = {
  main: styled.div`
    width: 100%;
    height: calc(100vh - 56px);
    margin: 56px 0 0 0;
    background: red;
    position: fixed;
    z-index: 2;
    display: none;
    ${props => props.isOpen && mediaQueries.mobile`
      display: initial;
    `}
  `,
  list: styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;
  `,
  item: styled.li`
    margin: 0;
    padding: 14px;
    font-size: 2em;
    cursor: pointer;
    text-transform: uppercase;
  `
}

export default Styles
