import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { allocations } from "@/lib/data";
import { RepresentationPieChart, SocialCategoryBarChart } from "./admin-charts";

export default function AdminDashboard() {
  return (
    <div className="mt-4 grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Student Allocations</CardTitle>
              <CardDescription>
                AI-generated matches for the internship scheme.
              </CardDescription>
            </div>
            <Button className="bg-accent hover:bg-accent/90">Override Allocation</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Allocated Internship</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead className="text-right">Match %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allocations.map((alloc, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{alloc.student}</TableCell>
                    <TableCell>{alloc.internship}</TableCell>
                    <TableCell>{alloc.company}</TableCell>
                    <TableCell className="text-right font-semibold text-primary">
                      {alloc.match}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Diversity & Inclusion Analytics</CardTitle>
            <CardDescription>
              Insights into the diversity of the applicant pool.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-md font-semibold text-foreground mb-2">
                Representation from Rural Districts
              </h3>
              <RepresentationPieChart />
            </div>
            <div>
              <h3 className="text-md font-semibold text-foreground mb-2">
                Social Category Representation
              </h3>
              <SocialCategoryBarChart />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
