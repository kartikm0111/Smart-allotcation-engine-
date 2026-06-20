"use client";

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
import { allocations, statsData } from "@/lib/data";
import { RepresentationPieChart, SocialCategoryBarChart } from "./admin-charts";
import { LayoutDashboard, Users, CheckCircle2, TrendingUp, Globe } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto animate-fade-in-up">
      {/* Header Banner */}
      <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-r from-cyan-950/20 to-indigo-950/20 backdrop-blur-md">
        <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-cyan-500/20 p-4 rounded-full shadow-inner">
            <LayoutDashboard className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-2">Admin Dashboard</h2>
            <p className="text-muted-foreground text-lg">Monitor allocations, diversity metrics, and system performance</p>
          </div>
        </CardContent>
      </Card>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
         <Card className="glass shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
            <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                    <div className="bg-blue-500/20 p-2.5 rounded-xl w-fit"><Users className="w-5 h-5 text-blue-500" /></div>
                    <h3 className="text-3xl font-bold text-foreground mt-2">{statsData.totalStudents.toLocaleString()}</h3>
                    <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                </div>
            </CardContent>
         </Card>
         <Card className="glass shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-emerald-500">
            <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                    <div className="bg-emerald-500/20 p-2.5 rounded-xl w-fit"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></div>
                    <h3 className="text-3xl font-bold text-foreground mt-2">{allocations.length * 1532}</h3>
                    <p className="text-sm font-medium text-muted-foreground">Allocations Made</p>
                </div>
            </CardContent>
         </Card>
         <Card className="glass shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-amber-500">
            <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                    <div className="bg-amber-500/20 p-2.5 rounded-xl w-fit"><TrendingUp className="w-5 h-5 text-amber-500" /></div>
                    <h3 className="text-3xl font-bold text-foreground mt-2">{statsData.avgMatch}%</h3>
                    <p className="text-sm font-medium text-muted-foreground">Avg Match Score</p>
                </div>
            </CardContent>
         </Card>
         <Card className="glass shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
            <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                    <div className="bg-purple-500/20 p-2.5 rounded-xl w-fit"><Globe className="w-5 h-5 text-purple-500" /></div>
                    <h3 className="text-3xl font-bold text-foreground mt-2">0.86</h3>
                    <p className="text-sm font-medium text-muted-foreground">Diversity Index</p>
                </div>
            </CardContent>
         </Card>
      </div>

      <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Card className="glass shadow-lg h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-6">
              <div>
                <CardTitle className="text-2xl">Recent Allocations</CardTitle>
                <CardDescription>
                  AI-generated matches for the internship scheme.
                </CardDescription>
              </div>
              <Button className="bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-600/90 text-white shadow-md">Override</Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border bg-card/50 overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead className="font-semibold text-foreground">Student Name</TableHead>
                      <TableHead className="font-semibold text-foreground">Allocated Internship</TableHead>
                      <TableHead className="font-semibold text-foreground">Company</TableHead>
                      <TableHead className="text-right font-semibold text-foreground">Match %</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allocations.map((alloc, index) => {
                      const matchColorClass = alloc.match >= 90 ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' : 
                                             alloc.match >= 80 ? 'bg-amber-500/10 text-amber-600 border-amber-500/20' : 
                                             'bg-rose-500/10 text-rose-600 border-rose-500/20';
                      return (
                      <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                        <TableCell className="font-medium">{alloc.student}</TableCell>
                        <TableCell>{alloc.internship}</TableCell>
                        <TableCell>{alloc.company}</TableCell>
                        <TableCell className="text-right">
                           <span className={`inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-bold ${matchColorClass}`}>
                              {alloc.match}%
                           </span>
                        </TableCell>
                      </TableRow>
                    )})}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card className="glass shadow-lg h-full">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Globe className="w-5 h-5 text-primary"/> Diversity & Inclusion</CardTitle>
              <CardDescription>
                Insights into the diversity of the applicant pool.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-10">
              <div className="bg-muted/20 p-5 rounded-2xl border border-border/50 shadow-inner">
                <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider text-center">
                  Geographic Representation
                </h3>
                <RepresentationPieChart />
              </div>
              <div className="bg-muted/20 p-5 rounded-2xl border border-border/50 shadow-inner">
                <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider text-center">
                  Social Category Distribution
                </h3>
                <SocialCategoryBarChart />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
