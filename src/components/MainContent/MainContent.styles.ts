import styled from "styled-components"

export const TitleSection = styled.div`
  background-color: #fff;
`

export const TitleWrapper = styled.div`
  height: 84px;
  max-width: 1512px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
`

export const Title = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
`

export const InputWrapper = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  padding: 0 8px;
`

export const Input = styled.input`
  border: none;
  outline: none;
  margin-left: 8px;
`

export const TableWrapper = styled.div`
  padding: 0 60px;
`

export const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const UserAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 100%;
`

export const UserLink = styled.a`
  margin-left: 12px;
  text-decoration: unset;
  color: #00a5e4;
`

export const BlogLink = styled(UserLink)`
  margin-left: 0;
`

export const ActionIcon = styled.img`
  height: 16px;
  width: 16px;
  cursor: pointer;
`

export const ActionContainer = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  opacity: 0.5;
`

export const ActionSeparator = styled.div`
  height: 100%;
  width: 1px;
  background-color: grey;
  margin: 0 12px;
`