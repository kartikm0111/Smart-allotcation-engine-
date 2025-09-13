"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { sectors, postedInternships as initialInternships } from "@/lib/data";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  skills: z.string().min(1, "Please enter required skills."),
  capacity: z.coerce.number().min(1, "Capacity must be at least 1."),
  location: z.string().min(2, "Please enter a location."),
  sector: z.string().min(1, "Please select a sector."),
});

export default function InternshipPortal() {
  const [internships, setInternships] = useState(initialInternships);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      skills: "",
      capacity: 1,
      location: "",
      sector: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const newInternship = { id: (internships.length + 1).toString(), ...values };
    setInternships([...internships, newInternship]);
    toast({
      title: "Internship Posted!",
      description: `The "${values.title}" position is now live.`,
    });
    form.reset();
  }

  function handleDelete(id: string) {
    setInternships(internships.filter(internship => internship.id !== id));
    toast({
        title: "Internship Deleted",
        description: "The internship posting has been removed.",
        variant: "destructive"
    });
  }

  return (
    <div className="space-y-8 mt-4 max-w-5xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Post an Internship</CardTitle>
          <CardDescription>
            Fill in the details to find the best talent for your team.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Internship Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Associate Product Manager" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Required Skills</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Market Research, JIRA, SQL" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter required skills separated by commas.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="capacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Capacity</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. New York, NY or Remote" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sector"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sector</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a sector" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {sectors.map((sec) => (
                            <SelectItem key={sec.value} value={sec.label}>
                              {sec.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="bg-accent hover:bg-accent/90">Post Internship</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Internship Postings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Skills</TableHead>
                <TableHead className="text-center">Capacity</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {internships.map((internship) => (
                <TableRow key={internship.id}>
                  <TableCell className="font-medium">{internship.title}</TableCell>
                  <TableCell>{internship.skills}</TableCell>
                  <TableCell className="text-center">{internship.capacity}</TableCell>
                  <TableCell>{internship.location}</TableCell>
                  <TableCell>{internship.sector}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(internship.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
