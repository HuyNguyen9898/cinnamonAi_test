import styled from "styled-components"

export const BarWrapper = styled.div`
  position: fixed;
	bottom: 0;
	left: 0;
	width: calc(100% - 120px);
	padding: 0 60px;
`

export const BarContainer = styled.div`
  background-color: #347fda;
	height: 48px;
	color: #fff;
	border-radius: 8px 8px 0 0;
	padding: 0 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
	line-height: 19px;
`

export const SelectedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ActionContainer = styled.div`
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

	span {
		cursor: pointer;
	}
`

export const ActionSeparator = styled.div`
  height: 100%;
  width: 1px;
  background-color: #fff;
  margin: 0 12px;
`

export const CloseIcon = styled.img`
  width: 20px;
	height: 20px;
	margin-left: 12px;
	background-color: #fff;
	border-radius: 100%;
	cursor: pointer;
`