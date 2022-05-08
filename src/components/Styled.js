import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    width: 400px;
    margin: 20px 15px;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
    box-shadow: 2px 2px 10px #333;
    border-radius: 10px;
`;

export const Screen = styled.div`
    grid-column: 1 / -1;
    background-color: rgb(116, 116, 116);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    word-break: break-all;
    text-align: right;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid red;
`;

export const Previous = styled.div`
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.5rem;
`;

export const Current = styled.div`
    color: #fff;
    font-size: 2.5rem;
`;

export const Button = styled.button`
    cursor: pointer;
    font-size: 2rem;
    border: 1px outset red;
    outline: none;
    background: #e8e8e8;
    &:hover {
        background: #fff;
    }

    ${({gridSpan}) => gridSpan && `grid-column: span ${gridSpan}`}
    ${({operation}) => operation && `background: #555`}
`