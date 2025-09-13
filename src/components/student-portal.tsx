"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Progress } from "@/components/ui/progress";
import { locations, sectors, recommendedInternships } from "@/lib/data";
import { MapPin, Briefcase } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  skills: z.string().min(1, { message: "Please enter at least one skill." }),
  education: z.string().min(2, { message: "Please enter your education." }),
  location: z.string().min(1, { message: "Please select a location." }),
  sector: z.string().min(1, { message: "Please select a sector." }),
});

export default function StudentPortal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      skills: "",
      education: "",
      location: "",
      sector: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Profile Submitted!",
      description: "We are finding the best internships for you.",
    });
  }

  return (
    <div className="space-y-8 mt-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>PM Internship Portal</CardTitle>
          <CardDescription>
            Fill out your profile to get personalized internship recommendations.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Jane Doe" {...field} />
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
                    <FormLabel>Skills</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. React, Figma, SQL" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter your skills separated by commas.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="education"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Education</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. B.Tech in Computer Science"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location Preference</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {locations.map((loc) => (
                            <SelectItem key={loc.value} value={loc.value}>
                              {loc.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sector"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sector Interest</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a sector" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {sectors.map((sec) => (
                            <SelectItem key={sec.value} value={sec.value}>
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
              <Button type="submit" className="bg-accent hover:bg-accent/90">
                Find Internships
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-headline font-semibold mb-4 text-center">
          AI-Powered Recommendations
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendedInternships.map((internship, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{internship.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 pt-1">
                  <Briefcase className="w-4 h-4" />
                  {internship.company}
                </CardDescription>
                <CardDescription className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {internship.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor={`progress-${index}`} className="text-sm">
                      Match Score
                    </Label>
                    <span className="text-sm font-medium text-primary">
                      {internship.match}%
                    </span>
                  </div>
                  <Progress
                    id={`progress-${index}`}
                    value={internship.match}
                    className="h-2"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
