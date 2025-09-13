# InternLink AI

This is a Next.js starter project created in Firebase Studio.

## Setting Up Your Local Project

To get this project from the web editor to your local computer, you'll need to manually recreate the folder structure and copy the contents of each file.

Follow these steps:

1.  **Create a main project folder** on your computer. You can name it something like `internlink-ai-app`.
2.  **Open this folder** in Visual Studio Code.
3.  **Recreate the folders and files** exactly as shown in the structure below.
4.  **Copy and paste the code** for each file from the conversation history into the corresponding file in your local project.

Once all files are copied, you can follow the instructions in `DEPLOYMENT_GUIDE.md` to push your code to GitHub and deploy it.

---

## Project Structure

Here is the complete folder and file structure for the application.

```
.
├── .env
├── apphosting.yaml
├── components.json
├── DEPLOYMENT_GUIDE.md
├── next.config.ts
├── package.json
├── README.md
├── src
│   ├── ai
│   │   ├── dev.ts
│   │   ├── flows
│   │   │   └── enhance-internship-descriptions.ts
│   │   └── genkit.ts
│   ├── app
│   │   ├── app
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── admin-charts.tsx
│   │   ├── admin-dashboard.tsx
│   │   ├── icons.tsx
│   │   ├── internship-portal.tsx
│   │   ├── student-portal.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   I       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       └── tooltip.tsx
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   └── lib
│       ├── data.ts
│       ├── placeholder-images.json
│       ├── placeholder-images.ts
│       └── utils.ts
├── tailwind.config.ts
└── tsconfig.json

```
