import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { setCurrentPage } from "../../../../redux/slice/searchParamsSlice";
import { PaginationItem } from "@mui/material";

export const TrainPagination = () => {
  const { totalPages, currentPage } = useSelector(
    // @ts-ignore
    (state) => state.searchParams
  );
  const dispatch = useDispatch();

  const handleClickPage = (_e: any, value: any) => {
    dispatch(setCurrentPage(value));
  };

  return (
    <div style={{display: "flex", justifyContent: "end"}}>
      {totalPages > 1 && (
        <Stack>
          <Pagination
            page={currentPage}
            count={totalPages}
            onChange={handleClickPage}
            variant="outlined"
            shape="rounded"
            siblingCount={1}
            boundaryCount={0}
            showFirstButton
            showLastButton
            renderItem={(item: any) => (
              <PaginationItem
                {...item}
                sx={{
                  width: "85px",
                  height: "75px",
                  fontSize: "3rem",
                  borderRadius: "5px",
                  color: item.selected ? "#fff" : "#928F94",
                  backgroundColor: item.selected ? "#FFB800!important" : "transparent",
                  border: item.selected
                    ? item.page === 1
                      ? "none"
                      : "none"
                    : "1px solid #C4C4C4",
                  "&:hover": {
                    border: "2px solid #FFB200",
                    color: "#928F94"
                  },
                  fontWeight: "700",
                  textTransform: "none",
                }}
              />
            )}
            sx={{
              marginBottom: "50px",
              "& .MuiPaginationItem-icon": {
                width: "50px",
                height: "50px",
              },
            }}
          />
        </Stack>
      )}
    </div>
  );
};
