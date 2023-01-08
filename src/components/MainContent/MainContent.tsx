import { Table } from "commons";
import { useGitHub } from "hooks";
import { IColumn, IUser } from "interfaces";
import {
  ActionContainer,
  ActionIcon,
  ActionSeparator,
  BlogLink,
  Input,
  InputWrapper,
  TableWrapper,
  Title,
  TitleSection,
  TitleWrapper,
  UserAvatar,
  UserLink,
  UserNameWrapper,
} from "./MainContent.styles";
const MainContent = () => {
  const { users, loading, updateUserList, handleDebouncedGetUser } = useGitHub();

  const userColumns: IColumn<IUser>[] = [
    {
      title: "No.",
      key: "id",
    },
    {
      title: "Name",
      key: "name",
      render: (record) => (
        <UserNameWrapper>
          <UserAvatar src={record.avatar} alt="" />
          <UserLink href={record.blog} target="_blank" rel="noreferrer">
            {record.name}
          </UserLink>
        </UserNameWrapper>
      ),
    },
    {
      title: "Blog",
      key: "blog",
      render: (record) => (
        <BlogLink href={record.blog} target="_blank" rel="noreferrer">
          {record.blog}
        </BlogLink>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <ActionContainer>
          <ActionIcon src="./downloads.png" />
          <ActionSeparator />
          <ActionIcon src="./delete.png" />
        </ActionContainer>
      ),
    },
  ];

  const handleOnScrollBottom = () => {
    updateUserList()
  }

  return (
    <>
      <TitleSection>
        <TitleWrapper>
          <Title>User Mangement</Title>
          <InputWrapper>
            <img src="/search.svg" alt="" />
            <Input placeholder="Search..." onChange={(e) => handleDebouncedGetUser(e.target.value)}/>
          </InputWrapper>
        </TitleWrapper>
      </TitleSection>
      <TableWrapper>
        <Table datas={users} columns={userColumns} isRowSelection={true} loading={loading} onScrollBottom={handleOnScrollBottom} height={404}/>
      </TableWrapper>
    </>
  );
};

export default MainContent;
