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
import { MapPin, Briefcase, GraduationCap, Sparkles, User, Zap, BookOpen } from "lucide-react";
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

  // Predefined vibrant colors for avatars
  const avatarColors = [
      "bg-cyan-500", "bg-indigo-500", "bg-amber-500", 
      "bg-emerald-500", "bg-rose-500", "bg-violet-500"
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fade-in-up">
      {/* Header Banner */}
      <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-r from-cyan-950/20 to-indigo-950/20 backdrop-blur-md">
        <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-cyan-500/20 p-4 rounded-full shadow-inner">
            <GraduationCap className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-2">Student Portal</h2>
            <p className="text-muted-foreground text-lg">Fill out your profile to get personalized AI-powered internship recommendations</p>
          </div>
        </CardContent>
      </Card>

      <Card className="max-w-2xl mx-auto shadow-lg border-t-4 border-t-primary glass">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2"><User className="w-6 h-6 text-primary"/> Your Profile</CardTitle>
          <CardDescription>
            Help us understand your skills and preferences.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <div className="relative">
                            <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input className="pl-9" placeholder="e.g. Jane Doe" {...field} />
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
                    <FormLabel>Skills</FormLabel>
                    <FormControl>
                         <div className="relative">
                            <Zap className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input className="pl-9" placeholder="e.g. React, Figma, SQL" {...field} />
                        </div>
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
                        <div className="relative">
                            <BookOpen className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input className="pl-9" placeholder="e.g. B.Tech in Computer Science" {...field} />
                        </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-600/90 text-white shadow-md text-lg h-12 rounded-xl">
                 <Sparkles className="mr-2 h-5 w-5" /> Find Internships
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <div>
        <h2 className="text-3xl font-headline font-bold mb-6 flex items-center gap-2"><Sparkles className="w-8 h-8 text-amber-500"/> AI-Powered Recommendations</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendedInternships.map((internship, index) => {
             const matchColor = internship.match > 85 ? 'text-emerald-500' : internship.match >= 70 ? 'text-amber-500' : 'text-rose-500';
             const progressColor = internship.match > 85 ? 'bg-emerald-500' : internship.match >= 70 ? 'bg-amber-500' : 'bg-rose-500';
             const avatarBg = avatarColors[index % avatarColors.length];

             return (
            <Card key={index} className="flex flex-col glass shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-transparent hover:border-t-cyan-500 overflow-hidden group">
              <CardHeader className="pb-4 relative">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 shadow-inner ${avatarBg}`}>
                    {internship.company.charAt(0)}
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">{internship.title}</CardTitle>
                <div className="space-y-1.5 mt-2">
                    <CardDescription className="flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4 text-primary/70" />
                    {internship.company}
                    </CardDescription>
                    <CardDescription className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-cyan-500/70" />
                    {internship.location}
                    </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                 {/* Skill Tags */}
                 {(internship as any).skills && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                        {(internship as any).skills.split(',').map((s: string, idx: number) => (
                             <span key={idx} className="inline-flex items-center rounded-md bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-600 ring-1 ring-inset ring-cyan-500/20">
                                {s.trim()}
                             </span>
                        ))}
                    </div>
                 )}

                <div className="space-y-2 bg-muted/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <Label htmlFor={`progress-${index}`} className="text-sm font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5"/> Match Score
                    </Label>
                    <span className={`text-sm font-bold ${matchColor}`}>
                      {internship.match}%
                    </span>
                  </div>
                  <Progress
                    id={`progress-${index}`}
                    value={internship.match}
                    className="h-2.5 bg-muted"
                    indicatorClassName={progressColor}
                  />
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5 hover:text-primary rounded-xl">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          )})}
        </div>
      </div>
    </div>
  );
}
