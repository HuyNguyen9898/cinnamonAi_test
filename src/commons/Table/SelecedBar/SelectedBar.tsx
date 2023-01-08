import { ActionContainer, ActionSeparator, BarContainer, BarWrapper, CloseIcon, SelectedWrapper } from "./SelectedBar.styles"

interface ISelectedBar {
  selectedRows: number
  onCancel: (isChecked: boolean) => void
}

const SelectedBar = ({ selectedRows, onCancel }: ISelectedBar) => {
  if (!selectedRows) return null

  return (
    <BarWrapper>
      <BarContainer>
        <SelectedWrapper>
          {selectedRows} selected 
          <CloseIcon src="./cancel.png" onClick={() => onCancel(false)}/>
        </SelectedWrapper>
        <ActionContainer>
          <span>Delete</span>
          <ActionSeparator/>
          <span>Download</span>
        </ActionContainer>
      </BarContainer>
    </BarWrapper>
  )
}

export default SelectedBar