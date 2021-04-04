import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.img});

  @media(max-width: 760px){
      height: 90vh;
    }

`;

export const NameFetured = styled.div`
  font-size: 60px;
  font-weight: bold;
  @media(max-width: 760px){
    font-size: 40px;
  }
`;

export const FeturedVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);

`;
export const FeturedHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 70px;
`;

export const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  display: flex;

  div:first-child{
    color:  #46d369;
  }

  div{
    margin-right: 15px;
  }

  @media(max-width: 760px){
    font-size: 16px;
  }
`;
export const FeaturedPoints = styled.div`
 `;

export const FeaturedYear = styled.div`
 `;
export const FeaturedSeason = styled.div`
 `;
export const FeaturedDescription = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media(max-width: 760px){
    width: 100%;
    font-size: 14px;
    margin-right: 30px;
  }

`;
export const FeaturedButtons = styled.div`
  margin-top: 15px;

  a {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #333;
    color: #fff;
    transition: all ease 0.2s;

    @media(max-width: 760px){
    font-size: 16px;
    }
  }

  a:first-child{
    background-color: #fff;
    color: #000;
  }

  a:hover{
    opacity: 0.7;
  }

`;
export const FeaturedGenres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;

  @media(max-width: 760px){
    font-size: 14px;
  }
`;
