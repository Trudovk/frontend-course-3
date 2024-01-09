import styled from "styled-components";
type Props = {
  currentPage: number;
  totalPages: number;
  onSwitch: (page: number) => void;
};

export default function Pagination(props: Props) {
  return (
    <div>
      {props.currentPage > 2 && (
        <>
          <button onClick={() => props.onSwitch(1)}>1</button>
          <button>...</button>
        </>
      )}
      {props.currentPage !== 1 && (
        <button onClick={() => props.onSwitch(props.currentPage - 1)}>
          {props.currentPage - 1}
        </button>
      )}
      <button>{props.currentPage}</button>
      {props.currentPage <= props.totalPages - 1 && (
        <button onClick={() => props.onSwitch(props.currentPage + 1)}>
          {props.currentPage + 1}
        </button>
      )}
      {props.currentPage < props.totalPages - 1 && (
        <>
          <button>...</button>
          <button onClick={() => props.onSwitch(props.totalPages)}>
            {props.totalPages}
          </button>
        </>
      )}
    </div>
  );
}

export const StyledPagination = styled(Pagination)`
  & {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    button {
      margin: 0 5px;
      padding: 5px 10px;
      border: 1px solid #000;
      border-radius: 5px;
      background-color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
`;
