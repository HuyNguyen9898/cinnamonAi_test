import { Splash } from "commons";
import { IRow, ITable } from "interfaces";
import SelectedBar from "./SelecedBar/SelectedBar";
import {
  CheckBox,
  HeadColumn,
  NoData,
  TableBody,
  TableComponent,
  TableData,
  TableHead,
  TableRow,
  TableWrapper,
} from "./Table.styles";
import useTable from "./useTable..hooks";

const Table = <T extends IRow>({
  datas,
  columns,
  isRowSelection = false,
  loading = false,
  height = 0,
  onScrollBottom,
}: ITable<T>) => {
  const { rowsSelected, allSelected, handleRowSelected, handleAllRowSelected } =
    useTable({
      datas,
    });

  if (!columns.length) return <></>;

  const handleScroll = (e: any) => {
    if (e.target.scrollHeight <= e.target.clientHeight || !height) return
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) onScrollBottom && onScrollBottom()
  }

  return (
    <TableWrapper onScroll={(e) => handleScroll(e)} height={height}>
      <TableComponent>
        <TableHead>
          <tr>
            {isRowSelection && (
              <HeadColumn scope="col">
                <CheckBox
                  type="checkbox"
                  checked={allSelected}
                  onChange={(e) => handleAllRowSelected(e.target.checked)}
                />
              </HeadColumn>
            )}
            {columns.map((column) => {
              return (
                <HeadColumn key={column.key} scope="col">
                  {column.title}
                </HeadColumn>
              );
            })}
          </tr>
        </TableHead>
        <TableBody>
          {datas.length
            ? datas.map((item) => {
                return (
                  <TableRow key={item.key} isSelected={item.isSelected}>
                    {isRowSelection && (
                      <TableData>
                        <CheckBox
                          type="checkbox"
                          checked={!!item.isSelected}
                          onChange={(e) =>
                            handleRowSelected(item, e.target.checked)
                          }
                        />
                      </TableData>
                    )}
                    {columns.map((column) => {
                      return (
                        <TableData key={column.key}>
                          {column.render
                            ? column.render(item)
                            : item[column.key]}
                        </TableData>
                      );
                    })}
                  </TableRow>
                );
              })
            : null}
        </TableBody>
      </TableComponent>
      {
        !datas.length ? <NoData>No Data</NoData> : null
      }
      <SelectedBar
        selectedRows={rowsSelected.length}
        onCancel={handleAllRowSelected}
      />
      <Splash loading={loading}/>
    </TableWrapper>
  );
};

export default Table;
