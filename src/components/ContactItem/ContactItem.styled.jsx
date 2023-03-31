import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-family="Fantasy"
`;

export const ButtonDelete = styled.button`
position: relative;
    width: 70px;
    height: 30px;
    border-radius: 50px;
    
    color: #302C8E;
    border: 2px solid 3F3B90;
    background-color: #7771E3;
    cursor: pointer;
    box-shadow: 0 0 10px #8c89d5;
    overflow: hidden;
    transition: .3s;


    :hover {
        background-color: rgb(245, 207, 207);
        
        box-shadow: 0 0 4px #111;
        transition: .3s;
    }
`;


export const Name = styled.p`
font-family: "Fantasy";
font-weight: bold;
`