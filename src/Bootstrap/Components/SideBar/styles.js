import styled from 'styled-components'

const SideBar = {
  main: styled.div`
    background: #2C2C2C;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    color: white;
    width: ${props => props.current ? '350px' : '100px'};
    min-width: ${props => props.current ? '350px' : '100px'};
    transition: 0.3s;
    height: 100vh;
    z-index: 1;
  `,
  content: styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  `,
  handler: styled.div`
  `,
  handlerBtn: styled.button`
    background: #1F201C;
    color: white;
    float: right;
    cursor: pointer;
    border: 0;
    padding: 7px 14px;
    margin: 12px 12px 0 12px;
    font-size: 1rem;
  `
}

export const HandlerButtonCSS = {
  main: styled.div`
    margin: 0 0 7px 0;
    height: 56px;
    min-height: 56px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  trigger: styled.button`
    background: #1F201C;
    color: white;
    float: right;
    cursor: pointer;
    border: 0;
    height: 42px;
    line-height: 42px;
    padding: 0 13px;
    margin: 0 13px 0 0;
    font-size: 1rem;
  `
}

export const ItemListCSS = {
  main: styled.ul`
    list-style: none;
    padding: 0;
    border: 0;
    margin: 15px 20px;
    flex-grow: ${props => props.flexGrow ? '1' : '0'};
  `,
  title: styled.li`
    font-size: 1.3rem;
    padding: 10px 0 15px 0;
    display: ${props => !props.hideTitle ? 'none' : 'block'};
  `,
  item: styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 5px 0;
  `
}

export const ItemCSS = {
  main: styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 5px 0;
    cursor: pointer;
  `,
  divider: styled.li`
    width: 100%;
    height: 2px;
    background: #808080;
    margin: 10px 0;
  `,
  icon: styled.div`
    width: 60px;
    min-width: 60px;
    height: 60px;
    min-height: 60px;
    border: 2px solid white;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    /* background-image: url('${props => props.srcIcon ? props.srcIcon : ''}'); */
    cursor: pointer;
  `,
  label: styled.label`
    padding: 0 10px;
    display: ${props => !props.onlyIcon ? 'none' : 'block'};
    cursor: pointer;
  `
}

export const ItemUserInfoCSS = {
  main: styled.div`
    display: ${props => !props.onlyIcon ? 'none' : 'flex'};
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 0 10px;
  `,
  fullname: styled.label`
    color: #FFC500;
  `,
  addr: styled.label`
  `,
  addrValue: styled.label`
    text-decoration: #808080 underline;
  `
}

export default SideBar
