# 🚀 Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TypeScript. Features a beautiful dark theme, smooth animations, and a fully accessible design.

## ✨ Features

- 🎨 Modern dark theme with custom color palette
- 📱 Fully responsive design
- ♿ WCAG 2.1 compliant accessibility
- 🎭 Smooth animations and transitions
- 📊 Interactive project showcases
- 📧 Contact form with copy-to-clipboard functionality
- 🎉 Confetti animations on interactions

## 📋 Prerequisites

### Node.js Installation

#### **Linux (Ubuntu/Debian)**
```bash
node --version  # Check if installed

# If not installed
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### **macOS**
```bash
node --version  # Check if installed

# If not installed
brew install node
```

#### **Windows**
1. Visit [Node.js official website](https://nodejs.org/)
2. Download and install the LTS version
3. Verify: `node --version` in Command Prompt

### Package Manager

This project uses **pnpm** or **bun**. Install one:

#### **pnpm**

**Linux/macOS:**
```bash
npm install -g pnpm
# or
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

**Windows:**
```powershell
npm install -g pnpm
# or
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

#### **bun**

**Linux/macOS:**
```bash
curl -fsSL https://bun.sh/install | bash
```

**Windows:**
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

## 🛠️ Installation

```bash
git clone <repository-url>
cd my-app

pnpm install
# or
bun install
```

## 🚀 Commands

### Development
```bash
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
pnpm build
# or
bun build
```

### Start
```bash
pnpm start
# or
bun start
```

## 📁 Project Structure

```
my-app/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/              # Utility functions
└── public/           # Static assets
```

## 🎨 Customization

### Colors
Edit `app/globals.css`:
```css
:root {
  --color-charcoal-black: #1C1C1C;
  --color-electric-blue: #0066FF;
  --color-cool-silver: #BFC5C9;
  --color-pure-white: #FFFFFF;
}
```

### Font
Change in `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
const yourFont = YourFont({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-your-font",
});
```

### Content
Update personal information in component files:
- `components/about-section.tsx` - Personal info
- `components/experience-section.tsx` - Work experience
- `components/skills-section.tsx` - Skills
- `components/projects-section.tsx` - Projects
- `components/contact-section.tsx` - Contact info

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Tabler Icons
- **Font**: Rubik
- **Animations**: Custom CSS
- **Confetti**: canvas-confetti

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `install` | Install dependencies |
| `dev` | Start development server |
| `build` | Create production build |
| `start` | Start production server |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
