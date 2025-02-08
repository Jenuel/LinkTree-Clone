module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"], // Ensure your file paths are correct
    theme: {
      extend: {
        colors: {
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: "hsl(var(--primary))",
          secondary: "hsl(var(--secondary))",
          accent: "hsl(var(--accent))",
          muted: "hsl(var(--muted))",
          border: "hsl(var(--border))",
        },
      },
    },
    plugins: [],
  };
  