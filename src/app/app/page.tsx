import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentPortal from "@/components/student-portal";
import InternshipPortal from "@/components/internship-portal";
import AdminDashboard from "@/components/admin-dashboard";
import { Logo } from "@/components/icons";

export default function AppPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/20">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-headline font-semibold text-foreground">
            InternLink AI
          </h1>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <Tabs defaultValue="student">
          <TabsList className="grid w-full max-w-lg grid-cols-3 mx-auto">
            <TabsTrigger value="student">Student Portal</TabsTrigger>
            <TabsTrigger value="internship">Industry Portal</TabsTrigger>
            <TabsTrigger value="admin">Admin Dashboard</TabsTrigger>
          </TabsList>
          <TabsContent value="student">
            <StudentPortal />
          </TabsContent>
          <TabsContent value="internship">
            <InternshipPortal />
          </TabsContent>
          <TabsContent value="admin">
            <AdminDashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
