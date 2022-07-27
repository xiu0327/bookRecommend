import styled from 'styled-components';
import React from "react";
import BookItem from './BookItem';

const BookListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;



function BookList(props){

    return(
        <BookListBlock>
            {
                props.result
                ? props.result.map((book) => {
                    return(
                        <BookItem 
                        bookClass={book.bookClass} 
                        bookImg={book.bookImg} 
                        bookTitle={book.name} 
                        bookInfo={book.bookAuthor}
                        bookPreview={"http://www.yes24.com/Product/Viewer/Preview/"+book.link.split("/").pop()}
                        bookLink={book.link} />
                    )
                }) : null
            }
        </BookListBlock>
    );
}

export default BookList;