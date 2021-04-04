import styled from 'styled-components';

export const MovieRowIcons = styled.div`
  div{
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0,0,0,0.6);
    z-index:99;
    display: flex;
    align-items:center;
    justify-content: center;
    overflow: hidden;
    right: 0 ;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    @media(max-width: 760px){
      opacity: 1;
    }
  }

  div:first-child{
    left:0;
  }



`;


export const Container = styled.div`
  margin-bottom: 30px;

  h2 {
    margin: 0 0 0 30px;
  }

  &:hover {
    ${MovieRowIcons}{
      div{
        opacity: 1;
      }
    }
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const MovieRowList = styled.div`
  width: ${(props) => `${props.width}px`};
  margin-left:${(props) => props.left ? `${props.left}px` : 0};
  transition: all ease 0.5s;
`;

export const MovieRowItem = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;

  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }

  img:hover {
    transform: scale(1);
  }
`;


