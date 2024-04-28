import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/table";

interface OrderData {
    orderId: string;
    userId: string;
    address: string;
    created: string;
}

const rows: OrderData[] = [
    //Auto complete the email for each order
    {orderId: "1", userId: "1", address: "1234 Main St", created: "2021-07-21"},
    {orderId: "2", userId: "2", address: "1234 Main St", created: "2021-07-21"},
    {orderId: "3", userId: "3", address: "1234 Main St", created: "2021-07-21"},
    {orderId: "4", userId: "4", address: "1234 Main St", created: "2021-07-21"},
    {orderId: "5", userId: "5", address: "1234 Main St", created: "2021-07-21"},
    {orderId: "6", userId: "6", address: "1234 Main St", created: "2021-07-21"},
    {orderId: "7", userId: "7", address: "1234 Main St", created: "2021-07-21"},
    {orderId: "8", userId: "8", address: "1234 Main St", created: "2021-07-21"},
  ];
  
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
    return (
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.orderId}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }