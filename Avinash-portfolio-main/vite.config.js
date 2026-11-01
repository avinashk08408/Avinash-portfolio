import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === "true";
const [githubOwner = "", githubRepositoryName = ""] = (
  process.env.GITHUB_REPOSITORY ?? ""
).split("/");
const isUserPagesRepository =
  githubRepositoryName.toLowerCase() ===
  `${githubOwner.toLowerCase()}.github.io`;
const githubPagesBasePath =
  process.env.VITE_BASE_PATH ??
  (githubRepositoryName && !isUserPagesRepository
    ? `/${githubRepositoryName}/`
    : "/");

export default defineConfig({
  base: isGitHubPagesBuild ? githubPagesBasePath : "/",

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(projectRoot, "src"),
      "@shared": path.resolve(projectRoot, "shared"),
    },
  },

  envDir: projectRoot,

  root: projectRoot,

  build: {
    outDir: path.resolve(
      projectRoot,
      "dist/public"
    ),

    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: path.resolve(
          projectRoot,
          "index.html"
        ),

        projects: path.resolve(
          projectRoot,
          "projects.html"
        ),

        records: path.resolve(
          projectRoot,
          "records.html"
        ),

        record: path.resolve(
          projectRoot,
          "record.html"
        ),
      },
    },
  },

  server: {
    port: 3000,

    strictPort: false,

    host: true,

    allowedHosts: [
      "localhost",
      "127.0.0.1",
    ],
  },
});
