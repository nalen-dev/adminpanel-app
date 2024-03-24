export interface PaginationButtonProps {
  totalPage: number;
  pageActive: number;
  setPageActive: (
    value: React.SetStateAction<{
      totalPage: number;
      pageActive: number;
    }>
  ) => void;
}

const PaginationButton = ({
  totalPage,
  pageActive,
  setPageActive,
}: PaginationButtonProps) => {
  const pagNumb = [];

  for (let index = 0; index < totalPage; index++) {
    pagNumb.push(
      <div
        key={index + 1}
        className={`w-10 h-10 text-sm leading-9 rounded-md ${pageActive == index + 1 ? "bg-gray-200" : "hover:bg-gray-200 cursor-pointer"}`}
        onClick={() => {
          setPageActive((state) => {
            return { ...state, pageActive: index + 1 };
          });
        }}
      >
        {index + 1}
      </div>
    );
  }
  return (
    <div className="mt-8 w-5/6 text-center mx-auto flex gap-5 justify-center">
      {pagNumb.map((node) => node)}
    </div>
  );
};

export default PaginationButton;
