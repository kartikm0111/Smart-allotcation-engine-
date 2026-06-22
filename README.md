<div align="center">
  <img src="https://img.icons8.com/color/96/000000/artificial-intelligence.png" alt="InternLink AI Logo" width="80" />
  <h1>InternLink AI — Smart Allocation Engine</h1>
  <p><em>An intelligent, equitable, and transparent internship allocation platform built for the PM Internship Scheme (Smart India Hackathon).</em></p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Genkit_AI-FF6F00?style=for-the-badge&logo=firebase&logoColor=white" alt="Genkit AI" />
  </p>
</div>

---

## 🚀 Overview

**InternLink AI** is a state-of-the-art web platform engineered to solve the complex challenge of nationwide internship allocations. Originally conceptualized for the **Smart India Hackathon (SIH)** under the PM Internship Scheme, this platform utilizes artificial intelligence to bridge the gap between talented students across India and top-tier industry opportunities. 

By prioritizing skill-matching, geographic representation, and social equity, InternLink AI ensures a transparent and optimized allocation process for thousands of candidates.

## ✨ Key Features

- 🧠 **AI-Powered Matching Engine:** Utilizes Google Genkit AI to intelligently analyze student skills against industry requirements, calculating a precise "Match Score" for optimized placement.
- 🎓 **Dedicated Student Portal:** A premium, intuitive interface where students can build comprehensive profiles, input skills, and receive real-time, AI-driven internship recommendations.
- 🏢 **Industry Dashboard:** A streamlined portal for partner companies to seamlessly post internship opportunities, manage capacities, and track active postings.
- 📊 **Real-Time Admin Analytics:** A powerful control center equipped with dynamic charts tracking total allocations, average match accuracy, geographic distribution, and diversity indices.
- 🎨 **Modern, Glassmorphism UI:** Built with Tailwind CSS and ShadCN, featuring a fully responsive, dark-mode-ready interface with fluid micro-animations and a premium aesthetic.

## 🛠️ Technology Stack

- **Frontend Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + ShadCN UI components
- **AI Integration:** Google Genkit AI
- **Data Visualization:** Recharts
- **Forms & Validation:** React Hook Form + Zod

## 💻 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kartikm0111/Smart-allotcation-engine-.git
   cd Smart-allotcation-engine-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your required API keys (e.g., Google Gemini API key for Genkit):
   ```env
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the platform in action.

## 📂 Project Structure

```text
├── src/
│   ├── ai/              # Genkit AI matching flows and configuration
│   ├── app/             # Next.js App Router (Landing page, Global CSS, Layout)
│   │   └── app/         # Dashboard wrapper
│   ├── components/      # React components (Portals, Admin Dashboard, Charts)
│   │   └── ui/          # Reusable ShadCN UI components
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions and mocked Indian-context data sets
└── tailwind.config.ts   # Tailwind configuration and custom animations
```

## 🌐 Deployment

This project is optimized for deployment on **Vercel**. 
1. Connect your GitHub repository to Vercel.
2. Ensure your environment variables (like `GOOGLE_GENAI_API_KEY`) are added to the Vercel project settings.
3. Click **Deploy**. The Next.js framework will be detected automatically.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! If you'd like to contribute, please fork the repository and create a pull request.

## 📄 License

This project is licensed under the MIT License.

---
<div align="center">
  <em>Built with ❤️ for the Smart India Hackathon</em>
</div>
