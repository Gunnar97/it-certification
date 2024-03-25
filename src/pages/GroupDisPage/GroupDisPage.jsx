import { useSelector } from "react-redux";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

const GroupDisPage = () => {
const disciplineGroup = useSelector(tableData);
const columns = ["№", "Група дисциплін", "Опис","Блок", "Дисципліни", "Дія"];

return (
  <StyledTableWrapper className="container">
    <Table
      view={"Перелік груп дисциплін"}
      data={disciplineGroup}
      columns={columns}
    />
  </StyledTableWrapper>
);
};

export default GroupDisPage;
