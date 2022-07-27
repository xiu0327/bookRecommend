import styled from 'styled-components';

const BookHeadBlock = styled.div`
    h2 {
    margin: 0;
    font-size: 30px;
    color: #343a40;
    }
    .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
    }
    padding-top: 38px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 90%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

const BookInfo = styled.div`
    font: 1rem 'Noto Sans KR';
    color: #3CB371;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    font-style: italic;
`;


function BookHead(props) {
    return (
        <BookHeadBlock>
            <h2>블로그 아이디를 입력해보세요</h2>
            <BookInfo>🍋 블로그를 분석하여 책을 추천해드려요 ! 🍋</BookInfo>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <Input type="text" required={true} onChange={props.handleChange} value={props.input} placeholder='아이디 입력 후, Enter를 누르세요.' />
                </form>
            </div>
    </BookHeadBlock>
    );
}

export default BookHead;
