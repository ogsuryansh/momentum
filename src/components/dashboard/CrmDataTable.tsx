import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface CallRecord {
  id: string;
  customerName: string;
  phoneNumber: string;
  durationSec: number;
  type: string;
  status: string;
  notes: string;
  timestamp: string;
}

interface CrmDataTableProps {
  data: CallRecord[];
}

export function CrmDataTable({ data }: CrmDataTableProps) {
  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Call ID</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="max-w-[300px]">Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center h-24 text-muted-foreground">
                No call records found.
              </TableCell>
            </TableRow>
          ) : (
            data.map((call) => (
              <TableRow key={call.id}>
                <TableCell className="font-medium">{call.id}</TableCell>
                <TableCell>{formatDate(call.timestamp)}</TableCell>
                <TableCell>
                  <div>{call.customerName}</div>
                  <div className="text-xs text-muted-foreground">{call.phoneNumber}</div>
                </TableCell>
                <TableCell>{formatDuration(call.durationSec)}</TableCell>
                <TableCell>
                  <Badge variant={call.type === "Complaint" ? "destructive" : "secondary"}>
                    {call.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={
                    call.status === "Resolved" ? "default" :
                    call.status === "Escalated" ? "destructive" : "outline"
                  }>
                    {call.status}
                  </Badge>
                </TableCell>
                <TableCell className="max-w-[300px] truncate" title={call.notes}>
                  {call.notes}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
