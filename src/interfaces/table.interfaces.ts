export interface ITable<T extends IRow> {
  datas: T[]
  columns: IColumn<T>[]
  isRowSelection?: boolean
  loading: boolean
  height?: number
  onScrollBottom?: () => void
}

export interface IColumn<T extends IRow> {
  title: string
  key: string
  render?: (record: T) => JSX.Element
}

export interface IRow extends Record<string, string | boolean |  number | undefined> {
  key: string
  isSelected?: boolean
}