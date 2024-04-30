import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/table";
import { getOrders } from "../../api/UserRelatedAPI";
import { useQuery } from "react-query";

const columns = [
    {
        key: "OrderId",
        label: "Order ID",
    },
    {
        key: "UserId",
        label: "USER ID",
    }, 
    {
        key: "DeliveryAdress",
        label: "ADDRESS",
    }, 
    {
        key: "OrderedAt",
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

  if (!ordersData) {
    return <div>Orders not found</div>;
  }

  console.log("Orders data:")
  console.log(ordersData)

  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={ordersData}>
        {(item) => (
          <TableRow key={item.OrderId}>
            {(columnsKey) => <TableCell>{getKeyValue(item, columnsKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}