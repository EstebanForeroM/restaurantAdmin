import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/table";
import { getOrders } from "../../api/UserRelatedAPI";
import { useQuery } from "react-query";
  
const columns = [
    {
        key: "orderId",
        label: "Order ID",
    },
    {
        key: "userId",
        label: "USER ID",
    }, 
    {
        key: "address",
        label: "ADDRESS",
    }, 
    {
        key: "created",
        label: "CREATED_AT",
    },
];

export default function Order() {

  const { data: ordersData, isLoading } = useQuery({
    queryFn: () => getOrders(),
    queryKey: ['dishes'],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={ordersData}>
        {(item) => (
          <TableRow key={item.orderId}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}