import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/table";

interface UserData {
    userId: string;
    name: string;
    email: string;
    role: string;
}

const rows: UserData[] = [
    {userId: "1", name: "John Doe", email: "estebanmff@gmail.com", role: "Admin"},
    {userId: "2", name: "Jane Doe", email: "complete the email", role: "User"},
    {userId: "3", name: "John Smith", email: "complete the email", role: "User"},
    {userId: "4", name: "Jane Smith", email: "complete the email", role: "User"},
    {userId: "5", name: "John Doe", email: "complete the email", role: "User"},
    {userId: "6", name: "Jane Doe", email: "complete the email", role: "User"},
    {userId: "7", name: "John Smith", email: "complete the email", role: "User"},
    {userId: "8", name: "Jane Smith", email: "complete the email", role: "User"},
  ];
  
const columns = [
    {
        key: "userId",
        label: "USER ID",
    },
    {
        key: "name",
        label: "NAME",
    },
    {
        key: "email",
        label: "EMAIL",
    },    
    {
        key: "role",
        label: "ROLE",
    },
];

  export default function ClientTable() {
    return (
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.userId}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }