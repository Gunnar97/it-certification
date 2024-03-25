import { useSelector } from "react-redux";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

const DisciplinePage = () => {
  const discipline= useSelector(tableData);
  const columns = [
    "№",
    "Дисципліна",
    "Викладач",
    "Блок",
    "Група",
    "Програма",
    "Сілабус",
    "РП",
    "Дія",
  ];

  return (
    <StyledTableWrapper className="container">
      <Table
        view={"Перелік дисциплін"}
        data={discipline}
        columns={columns}
      />
    </StyledTableWrapper>
  );
};

export default DisciplinePage;
