import { useEffect, useState } from "react";
import { Table } from "antd";
import { ColumnsType, PaginationType, ServerType } from "../../types";
import styled from "styled-components";
import { StyledPagination } from "../../components/pagination";

const StyledMain = styled.main`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export default function Home() {
  const [data, setData] = useState<ServerType[] | null>(null);
  const [pagination, setPagination] = useState<PaginationType>({
    current: 1,
    pageSize: 10,
    totalPages: 0,
  });
  useEffect(() => {
    fetch(
      `http://127.0.0.1:8090/api/collections/servers/records?perPage=${pagination.pageSize}&page=${pagination.current}`
    )
      .then((response) => response.json())
      .then((data) => {
        const pagination = {
          current: data.page,
          pageSize: data.perPage,
          totalPages: data.totalPages,
        };
        setPagination(pagination);
        const servers = data.items.map((item: any) => ({
          key: item.id,
          processor: item.processor,
          disk: item.disk,
          ram: item.ram,
          rentPerMonth: item.rentPerMonth,
        }));
        setData(servers);
      });
  }, [pagination.current]);

  const columns: ColumnsType[] = [
    {
      title: "Процессор",
      dataIndex: "processor",
      key: "processor",
    },
    {
      title: "Диск",
      dataIndex: "disk",
      key: "disk",
    },
    {
      title: "RAM",
      dataIndex: "ram",
      key: "ram",
    },
    {
      title: "Аренда в месяц",
      dataIndex: "rentPerMonth",
      key: "rentPerMonth",
    },
  ];

  return (
    <StyledMain>
      <h1>Аренда серверов</h1>
      <h2>Готовые решения</h2>
      {data && <Table dataSource={data} columns={columns} pagination={false} />}
      <StyledPagination
        currentPage={pagination.current}
        totalPages={pagination.totalPages}
        onSwitch={(page) => setPagination({ ...pagination, current: page })}
      />
    </StyledMain>
  );
}
