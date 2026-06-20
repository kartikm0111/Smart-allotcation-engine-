"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Pencil, Trash2, Building2, MapPin, Users, Info } from "lucide-react";

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
import { sectors, postedInternships as initialInternships } from "@/lib/data";
import { toast } from "@/hooks/use-toast";

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

  const totalCapacity = internships.reduce((sum, intern) => sum + intern.capacity, 0);
  const uniqueSectors = new Set(internships.map(i => i.sector)).size;

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fade-in-up">
      {/* Header Banner */}
      <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-r from-cyan-950/20 to-indigo-950/20 backdrop-blur-md">
        <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-cyan-500/20 p-4 rounded-full shadow-inner">
            <Building2 className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-2">Industry Portal</h2>
            <p className="text-muted-foreground text-lg">Post internships and find the best talent for your organization</p>
          </div>
        </CardContent>
      </Card>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-primary/20 p-3 rounded-full"><Building2 className="w-6 h-6 text-primary" /></div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Active Postings</p>
              <h3 className="text-3xl font-bold">{internships.length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="glass shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-cyan-500/20 p-3 rounded-full"><Users className="w-6 h-6 text-cyan-500" /></div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Total Capacity</p>
              <h3 className="text-3xl font-bold">{totalCapacity}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="glass shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-amber-500/20 p-3 rounded-full"><Info className="w-6 h-6 text-amber-500" /></div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Sectors Covered</p>
              <h3 className="text-3xl font-bold">{uniqueSectors}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Post Form */}
      <Card className="shadow-lg border-t-4 border-t-primary glass">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2"><Building2 className="w-6 h-6 text-primary"/> Post an Internship</CardTitle>
          <CardDescription>
            Fill in the details to attract the best talent.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Internship Title</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Info className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input className="pl-9" placeholder="e.g. Associate Product Manager" {...field} />
                          </div>
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
                          <div className="relative">
                            <Info className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input className="pl-9" placeholder="e.g. Market Research, JIRA, SQL" {...field} />
                          </div>
                        </FormControl>
                        <FormDescription>Comma separated</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="capacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Capacity</FormLabel>
                      <FormControl>
                        <div className="relative">
                           <Users className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                           <Input className="pl-9" type="number" min="1" {...field} />
                        </div>
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
                        <div className="relative">
                           <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                           <Input className="pl-9" placeholder="e.g. New Delhi, IN" {...field} />
                        </div>
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
              <Button type="submit" className="bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-600/90 text-white w-full md:w-auto shadow-md">Post Internship</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {/* Listings */}
      <div>
        <h3 className="text-2xl font-headline font-semibold mb-6 flex items-center gap-2"><Building2 className="w-6 h-6 text-primary"/> Your Active Postings</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {internships.map((internship) => (
                <Card key={internship.id} className="glass shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-3 flex flex-row items-start justify-between">
                        <div>
                            <CardTitle className="text-xl mb-1">{internship.title}</CardTitle>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary border-primary/20">
                                {internship.sector}
                            </span>
                        </div>
                        <div className="flex gap-2">
                             <Button variant="outline" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                                <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full hover:bg-destructive/10 hover:text-destructive hover:border-destructive transition-colors" onClick={() => handleDelete(internship.id)}>
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {internship.skills.split(',').map(s => s.trim()).map((skill, idx) => (
                                <span key={idx} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary-foreground/10">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4 text-cyan-500" /> {internship.location}
                            </div>
                            <div className="flex items-center gap-1">
                                <Users className="h-4 w-4 text-amber-500" /> {internship.capacity} Positions
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
            {internships.length === 0 && (
                <div className="col-span-full text-center p-12 text-muted-foreground bg-muted/20 rounded-xl border border-dashed">
                    No active internships posted yet.
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
