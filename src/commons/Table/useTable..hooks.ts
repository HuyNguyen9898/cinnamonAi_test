import { useState, useRef, useEffect } from "react"
import { IRow } from "interfaces"

const useTable = <T extends IRow>({ datas }: { datas: T[] }) => {
  const [rowsSelected, setRowsSelected] = useState<T[]>([])
  const [allSelected, setAllSelected] = useState(false)

  const dataList = useRef(datas)

  useEffect(() => {
    dataList.current = datas
  }, [datas])

  useEffect(() => {
    if (rowsSelected.length === 0) setAllSelected(false)
  }, [rowsSelected])

  const handleRowSelected = (data: T, isChecked: boolean) => {
    dataList.current.forEach(currentData => {
      if (currentData.key === data.key) {
        currentData.isSelected = isChecked
        let tempRows = [...rowsSelected]
        if (isChecked) {
          tempRows.push(currentData)
        } else {
          tempRows = tempRows.filter(row => row.key !== currentData.key)
        }
        setRowsSelected(tempRows)
      }
    })
    if (rowsSelected.length === 0) setAllSelected(false)
  }

  const handleAllRowSelected = (isChecked: boolean) => {
    dataList.current.forEach(currentData => currentData.isSelected = isChecked)
    setAllSelected(isChecked)
    setRowsSelected(isChecked ? dataList.current : [])
  }


  return {
    rowsSelected,
    allSelected,
    setAllSelected,
    handleRowSelected,
    handleAllRowSelected,
  }
}

export default useTable