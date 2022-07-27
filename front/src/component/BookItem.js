import React from 'react';
import styled from 'styled-components';

const BookItemBlock = styled.div`
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
`;

const BookGroup1 = styled.div`
    display: inline-block;
    margin-top: 30px;
    margin-left: 10px;
`;

const BookGroup2 = styled.div`
    display: inline-block;
    margin-top: 20px;
    margin-left: 5px;
`;

const BookImg = styled.img`
    width: 150px;
    height: 222px;
`;

const BookTitle = styled.div`
    font-size: 18px;
    padding-left: 5px;
    padding-top: 5px;
    font-weight: bold;
`;

const BookInfo = styled.div`
    width: 100%;
    font-size: 12px;
    text-align: left;
    padding: 5px;
`;

const BookPreview = styled.a`
    width: 30%;
    background-color: #e9ecef;
    color: gray;
    font-size: 14px;
    border-radius: 4px;
    padding: 5px;
    margin-right: 10px;
    text-decoration: none;
`;

function BookItem(props){
    return(
        <BookItemBlock>
            <BookImg src={props.bookImg} />
            <BookGroup1>
                <BookTitle>{props.bookTitle}</BookTitle>
                <BookInfo>{props.bookInfo}</BookInfo>
                <BookInfo>{props.bookClass}</BookInfo>
                <BookGroup2>
                    <BookPreview target="_blank" href={props.bookPreview}>미리보기</BookPreview>
                    <BookPreview target="_blank" href={props.bookLink}>자세히보기</BookPreview>
                </BookGroup2>
            </BookGroup1>
        </BookItemBlock>
    );
}

export default React.memo(BookItem);