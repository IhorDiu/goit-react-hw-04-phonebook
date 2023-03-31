import styled from '@emotion/styled';
import {  Form, Field } from 'formik';

export const Input = styled(Field)`
  display: flex;
  align-items: center;
  margin: 8px 0 30px 0px;
  padding: 4px;
  border-radius: 4px;
`;

export const FormInput = styled(Form)`
  text-align: left;
  width: 360px;
  margin: 8px auto 0;
  font-family: "Fantasy";
  padding: 16px;
  border: 1px solid #212121;
  border-radius: 4px;
  background-color: #8c89d5;
  box-shadow: -5px -5px 10px 0px rgba(255, 255, 255, 0.5),
    5px 5px 10px 0px rgba(0, 0, 0, 0.3);
`;


export const AddButton = styled.button`
position: relative;
width: 150px;
height: 30px;
margin-left: 50px;
border-radius: 50px;
font-family: "Fantasy";
color: #302C8E;
border: 2px solid 3F3B90;
background-color: #7771E3;
cursor: pointer;
box-shadow: 0 0 10px #8c89d5;
overflow: hidden;
transition: .3s;


:hover {
    background-color: 4B45DA;
    transform: scale(1.2);
    box-shadow: 0 0 4px #111;
    transition: .3s;
}
`;

