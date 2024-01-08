type Props = {
  currentPage: number;
  totalPages: number;
  onSwitch: (page: number) => void;
};

const Pagination: React.FC<Props> = (props) => {
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
};

export default Pagination;
