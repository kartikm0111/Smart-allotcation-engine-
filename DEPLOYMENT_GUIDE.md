# Deployment Guide

This guide provides step-by-step instructions for deploying your Next.js application from your local computer to Vercel or Netlify, using GitHub as your code repository.

## 1. Prerequisites

Before you begin, ensure you have the following installed on your local machine:

1.  **Node.js and npm:** This project requires a recent version of Node.js (v18 or newer). npm is the Node Package Manager and comes bundled with Node.js.
    *   [Download and Install Node.js](https://nodejs.org/)

2.  **Git:** The version control system used to manage your code and sync with GitHub.
    *   [Download and Install Git](https://git-scm.com/downloads)

3.  **A GitHub Account:** You will need a GitHub account to host your project's source code.
    *   [Sign up for GitHub](https://github.com/join)

4.  **Vercel Account & CLI (for Vercel deployment):**
    *   [Sign up for Vercel](https://vercel.com/signup) (you can use your GitHub account).
    *   Install the Vercel CLI globally by running this command in your terminal:
        ```bash
        npm install -g vercel
        ```

5.  **Netlify Account & CLI (for Netlify deployment):**
    *   [Sign up for Netlify](https://app.netlify.com/signup) (you can use your GitHub account).
    *   Install the Netlify CLI globally by running this command in your terminal:
        ```bash
        npm install -g netlify-cli
        ```

## 2. Pushing Your Code to GitHub

First, you need to get your project's code into a GitHub repository.

1.  **Create a New Repository on GitHub:**
    *   Go to your GitHub profile, click the `+` icon in the top-right corner, and select "New repository."
    *   Give it a name (e.g., `internlink-ai-app`), choose if it should be public or private, and click "Create repository."
    *   **Do not** initialize it with a `README` or `.gitignore` file, as your project already has these.

2.  **Initialize Git in Your Local Project:**
    *   Open a terminal and navigate to your project's root directory (the one you copied from Studio).
    *   Initialize a new Git repository:
        ```bash
        git init -b main
        ```

3.  **Add and Commit Your Code:**
    *   Stage all your files to be committed:
        ```bash
        git add .
        ```
    *   Commit the files with a message:
        ```bash
        git commit -m "Initial commit"
        ```

4.  **Link and Push to GitHub:**
    *   On your new GitHub repository page, copy the remote repository URL (it looks like `https://github.com/YourUsername/YourRepoName.git`).
    *   Add this URL as a remote in your local Git repository:
        ```bash
        git remote add origin https://github.com/YourUsername/YourRepoName.git
        ```
    *   Push your code to GitHub:
        ```bash
        git push -u origin main
        ```

Your code is now on GitHub! Both Vercel and Netlify can connect to this repository to automate deployments.

## 3. Deploying to Vercel

Vercel is the creator of Next.js and offers a seamless deployment experience.

1.  **Log in to Vercel:**
    *   In your terminal, log in to your Vercel account:
        ```bash
        vercel login
        ```

2.  **Deploy Your Project:**
    *   In your project's root directory, run the deploy command:
        ```bash
        vercel
        ```
    *   The CLI will ask you a series of questions:
        *   `Set up and deploy “path/to/your/project”?` -> **Yes**
        *   `Which scope do you want to deploy to?` -> Select your Vercel account.
        *   `Link to an existing project?` -> **No** (since this is the first deployment).
        *   `What’s your project’s name?` -> You can keep the suggested name or change it.
        *   `In which directory is your code located?` -> `.` (press Enter).
    *   Vercel will automatically detect that you're using Next.js and configure the build settings correctly.

3.  **Add Environment Variables:**
    *   The deployment will likely fail at first because it needs your Firebase credentials.
    *   Copy all the variables starting with `NEXT_PUBLIC_` from your local `.env` file.
    *   Go to your new project on the Vercel dashboard.
    *   Navigate to **Settings -> Environment Variables**.
    *   Add each variable one by one (e.g., `NEXT_PUBLIC_FIREBASE_API_KEY` and its value).
    *   After adding the variables, go to the **Deployments** tab, find the latest deployment, and click the "Redeploy" button.

4.  **Done!**
    *   Your site is now live! Vercel will automatically redeploy your application every time you push a new commit to your `main` branch on GitHub.

## 4. Deploying to Netlify

Netlify is another excellent platform for deploying web applications.

1.  **Log in to Netlify:**
    *   In your terminal, log in to your Netlify account:
        ```bash
        netlify login
        ```

2.  **Initialize a New Netlify Site:**
    *   In your project's root directory, run the init command:
        ```bash
        netlify init
        ```
    *   The CLI will guide you through the setup:
        *   `Connect this directory to an existing Netlify site or create a new site?` -> **Create a new site**.
        *   `Team:` -> Choose your team.
        *   `Site name (optional):` -> You can leave it blank for a random name or provide your own.
        *   It will then ask for authorization with GitHub to connect to your repository.

3.  **Configure Build Settings:**
    *   Netlify will automatically detect it's a Next.js project and suggest the correct settings. If prompted, use the following:
        *   `Build command:` `next build`
        *   `Publish directory:` `.next`

4.  **Add Environment Variables:**
    *   Just like with Vercel, you need to add your Firebase credentials to Netlify.
    *   Go to your new site's dashboard on Netlify.
    *   Navigate to **Site settings -> Build & deploy -> Environment**.
    *   Click **"Edit variables"** and add all the `NEXT_PUBLIC_` variables from your `.env` file.

5.  **Trigger Deployment:**
    *   After saving the environment variables, you can trigger a new deploy by going to the **"Deploys"** tab and selecting **"Trigger deploy" -> "Deploy site"**.

6.  **Done!**
    *   Your site is now live on Netlify. It will automatically redeploy on every `git push` to your `main` branch.
