var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// utils.ts
var ORG, slugify, getWebUrl;
var init_utils = __esm({
  "utils.ts"() {
    "use strict";
    ORG = "graveflex";
    slugify = (str) => {
      const slug = str.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/\//g, "-");
      return slug;
    };
    getWebUrl = ({
      projectName,
      localDomain,
      appName,
      localPort,
      local,
      forceUrl
    }) => {
      if (forceUrl) {
        return forceUrl;
      }
      if (local) {
        return `http://${localDomain}:${localPort}`;
      }
      const VERCEL_URL = process.env.VERCEL_URL || "";
      if (VERCEL_URL) {
        return `https://${VERCEL_URL}`;
      }
      const BRANCH = process.env.VERCEL_GIT_COMMIT_REF || "main";
      if (BRANCH === "main") {
        return `https://${projectName}-${appName}.vercel.app`;
      }
      return `https://${projectName}-${appName}-git-${slugify(
        BRANCH
      )}-${ORG}.vercel.app`;
    };
  }
});

// index.ts
var settings_exports = {};
__export(settings_exports, {
  BLOB_ENDPOINT_URL: () => BLOB_ENDPOINT_URL,
  BLOB_STORE_ID: () => BLOB_STORE_ID,
  DOCS_PORT: () => DOCS_PORT,
  LOCAL: () => LOCAL,
  LOCAL_DOMAIN: () => LOCAL_DOMAIN,
  NEXT_PORT: () => NEXT_PORT,
  PROJECT_NAME: () => PROJECT_NAME,
  WEB_URL: () => WEB_URL
});
var LOCAL_DOMAIN, PROJECT_NAME, NEXT_PORT, DOCS_PORT, BLOB_ENDPOINT_URL, BLOB_STORE_ID, LOCAL, FORCE_WEB_URL, WEB_URL;
var init_settings = __esm({
  "index.ts"() {
    "use strict";
    init_utils();
    LOCAL_DOMAIN = "localhost";
    PROJECT_NAME = process.env.PROJECT_NAME;
    NEXT_PORT = process.env.NEXT_PORT;
    DOCS_PORT = process.env.DOCS_PORT;
    BLOB_ENDPOINT_URL = process.env.BLOB_ENDPOINT_URL;
    BLOB_STORE_ID = process.env.BLOB_STORE_ID;
    LOCAL = process.env.LOCAL === "true";
    FORCE_WEB_URL = process.env.FORCE_WEB_URL;
    WEB_URL = getWebUrl({
      projectName: PROJECT_NAME,
      localDomain: LOCAL_DOMAIN,
      appName: "web",
      localPort: NEXT_PORT,
      local: LOCAL,
      forceUrl: FORCE_WEB_URL
    });
  }
});

// vite.config.ts
import dotenv from "file:///Users/lynn/Code/Graveflex/nextjs-vercel/node_modules/dotenv/lib/main.js";
import path from "path";
import EnvironmentPlugin from "file:///Users/lynn/Code/Graveflex/nextjs-vercel/node_modules/vite-plugin-environment/dist/index.js";
import tsConfigPaths from "file:///Users/lynn/Code/Graveflex/nextjs-vercel/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { defineConfig } from "file:///Users/lynn/Code/Graveflex/nextjs-vercel/packages/settings/node_modules/vitest/dist/config.js";

// logSettingsPlugin.ts
function logSettingsPlugin() {
  return {
    name: "settings-log",
    async closeBundle() {
      const SETTINGS = (init_settings(), __toCommonJS(settings_exports));
      console.log("Using the following settings:");
      console.table(SETTINGS);
    }
  };
}
var logSettingsPlugin_default = logSettingsPlugin;

// vite.config.ts
var __vite_injected_original_dirname = "/Users/lynn/Code/Graveflex/nextjs-vercel/packages/settings";
var configFn = async () => {
  dotenv.config({ path: `${__vite_injected_original_dirname}/../../.env` });
  const environmentPlugin = EnvironmentPlugin({
    PROJECT_NAME: null,
    NEXT_PORT: null,
    DOCS_PORT: null,
    LOCAL: "false",
    IS_PREVIEW: "false",
    VERCEL_URL: null,
    VERCEL_GIT_PULL_REQUEST_ID: null,
    VERCEL_GIT_COMMIT_REF: null,
    PORT: null,
    BLOB_ENDPOINT_URL: null,
    BLOB_STORE_ID: null
  });
  const logSettingsPlugin2 = logSettingsPlugin_default();
  const tsPaths = tsConfigPaths({
    projects: [
      path.resolve(__vite_injected_original_dirname, "../ui/tsconfig.json"),
      path.resolve(__vite_injected_original_dirname, "../../apps/web/tsconfig.json")
    ]
  });
  return {
    test: {
      globals: true,
      coverage: {
        provider: "v8",
        clean: true,
        reporter: ["text", "html", "clover", "json", "cobertura"]
      },
      environment: "jsdom"
    },
    plugins: [
      !process.env.VITEST && environmentPlugin,
      logSettingsPlugin2,
      tsPaths
    ],
    build: {
      outDir: path.join(__vite_injected_original_dirname, "dist"),
      lib: {
        entry: path.resolve(__vite_injected_original_dirname, "index.ts"),
        name: "@mono/settings",
        fileName: (format, fname) => {
          const suffix = format === "umd" ? "cjs" : "js";
          return `${fname}.${format}.${suffix}`;
        }
      }
    }
  };
};
var vite_config_default = defineConfig(configFn);
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidXRpbHMudHMiLCAiaW5kZXgudHMiLCAidml0ZS5jb25maWcudHMiLCAibG9nU2V0dGluZ3NQbHVnaW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbHlubi9Db2RlL0dyYXZlZmxleC9uZXh0anMtdmVyY2VsL3BhY2thZ2VzL3NldHRpbmdzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbHlubi9Db2RlL0dyYXZlZmxleC9uZXh0anMtdmVyY2VsL3BhY2thZ2VzL3NldHRpbmdzL3V0aWxzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9seW5uL0NvZGUvR3JhdmVmbGV4L25leHRqcy12ZXJjZWwvcGFja2FnZXMvc2V0dGluZ3MvdXRpbHMudHNcIjtleHBvcnQgdHlwZSBHZXRVcmwgPSB7XG4gIHByb2plY3ROYW1lPzogc3RyaW5nO1xuICBsb2NhbERvbWFpbj86IHN0cmluZztcbiAgYXBwTmFtZTogJ3dlYic7XG4gIGxvY2FsUG9ydD86IHN0cmluZztcbiAgbG9jYWw/OiBib29sZWFuO1xuICBmb3JjZVVybD86IHN0cmluZztcbn07XG5cbmNvbnN0IE9SRyA9ICdncmF2ZWZsZXgnO1xuXG5jb25zdCBzbHVnaWZ5ID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNsdWcgPSBzdHJcbiAgICAudG9Mb3dlckNhc2UoKSAvLyBDb252ZXJ0IHRvIGxvd2VyY2FzZVxuICAgIC5yZXBsYWNlKC9bXmEtejAtOS1dL2csICctJykgLy8gUmVwbGFjZSBhbnkgbm9uLWFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIHdpdGggaHlwaGVuc1xuICAgIC5yZXBsYWNlKC8tKy9nLCAnLScpIC8vIFJlcGxhY2UgYW55IGNvbnNlY3V0aXZlIGh5cGhlbnMgd2l0aCBhIHNpbmdsZSBoeXBoZW5cbiAgICAucmVwbGFjZSgvXi18LSQvZywgJycpIC8vIFJlbW92ZSBhbnkgbGVhZGluZyBvciB0cmFpbGluZyBoeXBoZW5zXG4gICAgLnJlcGxhY2UoL1xcLy9nLCAnLScpOyAvLyByZXBsYWNlIGZvcndhcmQgc2xhc2hlcyB3aXRoIGh5cGhlbnNcbiAgcmV0dXJuIHNsdWc7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V2ViVXJsID0gKHtcbiAgcHJvamVjdE5hbWUsXG4gIGxvY2FsRG9tYWluLFxuICBhcHBOYW1lLFxuICBsb2NhbFBvcnQsXG4gIGxvY2FsLFxuICBmb3JjZVVybFxufTogR2V0VXJsKSA9PiB7XG4gIGlmIChmb3JjZVVybCkge1xuICAgIHJldHVybiBmb3JjZVVybDtcbiAgfVxuXG4gIGlmIChsb2NhbCkge1xuICAgIHJldHVybiBgaHR0cDovLyR7bG9jYWxEb21haW59OiR7bG9jYWxQb3J0fWA7XG4gIH1cblxuICBjb25zdCBWRVJDRUxfVVJMID0gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCB8fCAnJztcblxuICBpZiAoVkVSQ0VMX1VSTCkge1xuICAgIHJldHVybiBgaHR0cHM6Ly8ke1ZFUkNFTF9VUkx9YDtcbiAgfVxuXG4gIGNvbnN0IEJSQU5DSCA9IHByb2Nlc3MuZW52LlZFUkNFTF9HSVRfQ09NTUlUX1JFRiB8fCAnbWFpbic7XG4gIGlmIChCUkFOQ0ggPT09ICdtYWluJykge1xuICAgIHJldHVybiBgaHR0cHM6Ly8ke3Byb2plY3ROYW1lfS0ke2FwcE5hbWV9LnZlcmNlbC5hcHBgO1xuICB9XG5cbiAgcmV0dXJuIGBodHRwczovLyR7cHJvamVjdE5hbWV9LSR7YXBwTmFtZX0tZ2l0LSR7c2x1Z2lmeShcbiAgICBCUkFOQ0hcbiAgKX0tJHtPUkd9LnZlcmNlbC5hcHBgO1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2x5bm4vQ29kZS9HcmF2ZWZsZXgvbmV4dGpzLXZlcmNlbC9wYWNrYWdlcy9zZXR0aW5nc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2x5bm4vQ29kZS9HcmF2ZWZsZXgvbmV4dGpzLXZlcmNlbC9wYWNrYWdlcy9zZXR0aW5ncy9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbHlubi9Db2RlL0dyYXZlZmxleC9uZXh0anMtdmVyY2VsL3BhY2thZ2VzL3NldHRpbmdzL2luZGV4LnRzXCI7aW1wb3J0IHsgZ2V0V2ViVXJsIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBMT0NBTF9ET01BSU4gPSAnbG9jYWxob3N0JztcbmV4cG9ydCBjb25zdCBQUk9KRUNUX05BTUUgPSBwcm9jZXNzLmVudi5QUk9KRUNUX05BTUU7XG5cbmV4cG9ydCBjb25zdCBORVhUX1BPUlQgPSBwcm9jZXNzLmVudi5ORVhUX1BPUlQ7XG5leHBvcnQgY29uc3QgRE9DU19QT1JUID0gcHJvY2Vzcy5lbnYuRE9DU19QT1JUO1xuXG5leHBvcnQgY29uc3QgQkxPQl9FTkRQT0lOVF9VUkwgPSBwcm9jZXNzLmVudi5CTE9CX0VORFBPSU5UX1VSTDtcbmV4cG9ydCBjb25zdCBCTE9CX1NUT1JFX0lEID0gcHJvY2Vzcy5lbnYuQkxPQl9TVE9SRV9JRDtcblxuZXhwb3J0IGNvbnN0IExPQ0FMID0gcHJvY2Vzcy5lbnYuTE9DQUwgPT09ICd0cnVlJztcbmNvbnN0IEZPUkNFX1dFQl9VUkwgPSBwcm9jZXNzLmVudi5GT1JDRV9XRUJfVVJMO1xuXG5leHBvcnQgY29uc3QgV0VCX1VSTCA9IGdldFdlYlVybCh7XG4gIHByb2plY3ROYW1lOiBQUk9KRUNUX05BTUUsXG4gIGxvY2FsRG9tYWluOiBMT0NBTF9ET01BSU4sXG4gIGFwcE5hbWU6ICd3ZWInLFxuICBsb2NhbFBvcnQ6IE5FWFRfUE9SVCxcbiAgbG9jYWw6IExPQ0FMLFxuICBmb3JjZVVybDogRk9SQ0VfV0VCX1VSTFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9seW5uL0NvZGUvR3JhdmVmbGV4L25leHRqcy12ZXJjZWwvcGFja2FnZXMvc2V0dGluZ3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9seW5uL0NvZGUvR3JhdmVmbGV4L25leHRqcy12ZXJjZWwvcGFja2FnZXMvc2V0dGluZ3Mvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2x5bm4vQ29kZS9HcmF2ZWZsZXgvbmV4dGpzLXZlcmNlbC9wYWNrYWdlcy9zZXR0aW5ncy92aXRlLmNvbmZpZy50c1wiOy8qIGVzbGludC1kaXNhYmxlIHR1cmJvL25vLXVuZGVjbGFyZWQtZW52LXZhcnMgKi9cbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IEVudmlyb25tZW50UGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWVudmlyb25tZW50JztcbmltcG9ydCB0c0NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIFVzZXJDb25maWdGbiB9IGZyb20gJ3ZpdGVzdC9jb25maWcnO1xuXG5pbXBvcnQgTG9nU2V0dGluZ3NQbHVnaW4gZnJvbSAnLi9sb2dTZXR0aW5nc1BsdWdpbic7XG5cbmNvbnN0IGNvbmZpZ0ZuOiBVc2VyQ29uZmlnRm4gPSBhc3luYyAoKSA9PiB7XG4gIGRvdGVudi5jb25maWcoeyBwYXRoOiBgJHtfX2Rpcm5hbWV9Ly4uLy4uLy5lbnZgIH0pO1xuXG4gIGNvbnN0IGVudmlyb25tZW50UGx1Z2luID0gRW52aXJvbm1lbnRQbHVnaW4oe1xuICAgIFBST0pFQ1RfTkFNRTogbnVsbCxcbiAgICBORVhUX1BPUlQ6IG51bGwsXG4gICAgRE9DU19QT1JUOiBudWxsLFxuICAgIExPQ0FMOiAnZmFsc2UnLFxuICAgIElTX1BSRVZJRVc6ICdmYWxzZScsXG4gICAgVkVSQ0VMX1VSTDogbnVsbCxcbiAgICBWRVJDRUxfR0lUX1BVTExfUkVRVUVTVF9JRDogbnVsbCxcbiAgICBWRVJDRUxfR0lUX0NPTU1JVF9SRUY6IG51bGwsXG4gICAgUE9SVDogbnVsbCxcbiAgICBCTE9CX0VORFBPSU5UX1VSTDogbnVsbCxcbiAgICBCTE9CX1NUT1JFX0lEOiBudWxsXG4gIH0pO1xuXG4gIGNvbnN0IGxvZ1NldHRpbmdzUGx1Z2luID0gTG9nU2V0dGluZ3NQbHVnaW4oKTtcbiAgLy8gb24gYnVpbGQvdGVzdCwgdGhpcyBoYW5kbGVzIHRzY29uZmlnIHBhdGhzXG4gIGNvbnN0IHRzUGF0aHMgPSB0c0NvbmZpZ1BhdGhzKHtcbiAgICBwcm9qZWN0czogW1xuICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3VpL3RzY29uZmlnLmpzb24nKSxcbiAgICAgIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9hcHBzL3dlYi90c2NvbmZpZy5qc29uJylcbiAgICBdXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgdGVzdDoge1xuICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICAgIGNvdmVyYWdlOiB7XG4gICAgICAgIHByb3ZpZGVyOiAndjgnLFxuICAgICAgICBjbGVhbjogdHJ1ZSxcbiAgICAgICAgcmVwb3J0ZXI6IFsndGV4dCcsICdodG1sJywgJ2Nsb3ZlcicsICdqc29uJywgJ2NvYmVydHVyYSddXG4gICAgICB9LFxuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbSdcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgICFwcm9jZXNzLmVudi5WSVRFU1QgJiYgZW52aXJvbm1lbnRQbHVnaW4sXG4gICAgICBsb2dTZXR0aW5nc1BsdWdpbixcbiAgICAgIHRzUGF0aHNcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICBvdXREaXI6IHBhdGguam9pbihfX2Rpcm5hbWUsICdkaXN0JyksXG4gICAgICBsaWI6IHtcbiAgICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC50cycpLFxuICAgICAgICBuYW1lOiAnQG1vbm8vc2V0dGluZ3MnLFxuICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCwgZm5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWZmaXggPSBmb3JtYXQgPT09ICd1bWQnID8gJ2NqcycgOiAnanMnO1xuICAgICAgICAgIHJldHVybiBgJHtmbmFtZX0uJHtmb3JtYXR9LiR7c3VmZml4fWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoY29uZmlnRm4pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbHlubi9Db2RlL0dyYXZlZmxleC9uZXh0anMtdmVyY2VsL3BhY2thZ2VzL3NldHRpbmdzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbHlubi9Db2RlL0dyYXZlZmxleC9uZXh0anMtdmVyY2VsL3BhY2thZ2VzL3NldHRpbmdzL2xvZ1NldHRpbmdzUGx1Z2luLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9seW5uL0NvZGUvR3JhdmVmbGV4L25leHRqcy12ZXJjZWwvcGFja2FnZXMvc2V0dGluZ3MvbG9nU2V0dGluZ3NQbHVnaW4udHNcIjsvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbi8vIGxvZyBzZXR0aW5ncyBkdXJpbmcgYnVpbGRcbmZ1bmN0aW9uIGxvZ1NldHRpbmdzUGx1Z2luKCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdzZXR0aW5ncy1sb2cnLFxuICAgIGFzeW5jIGNsb3NlQnVuZGxlKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zdCBTRVRUSU5HUyA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2luZyB0aGUgZm9sbG93aW5nIHNldHRpbmdzOicpO1xuICAgICAgY29uc29sZS50YWJsZShTRVRUSU5HUyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dTZXR0aW5nc1BsdWdpbjtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQVNNLEtBRUEsU0FVTztBQXJCYjtBQUFBO0FBQUE7QUFTQSxJQUFNLE1BQU07QUFFWixJQUFNLFVBQVUsQ0FBQyxRQUFnQjtBQUMvQixZQUFNLE9BQU8sSUFDVixZQUFZLEVBQ1osUUFBUSxlQUFlLEdBQUcsRUFDMUIsUUFBUSxPQUFPLEdBQUcsRUFDbEIsUUFBUSxVQUFVLEVBQUUsRUFDcEIsUUFBUSxPQUFPLEdBQUc7QUFDckIsYUFBTztBQUFBLElBQ1Q7QUFFTyxJQUFNLFlBQVksQ0FBQztBQUFBLE1BQ3hCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLE1BQWM7QUFDWixVQUFJLFVBQVU7QUFDWixlQUFPO0FBQUEsTUFDVDtBQUVBLFVBQUksT0FBTztBQUNULGVBQU8sVUFBVSxXQUFXLElBQUksU0FBUztBQUFBLE1BQzNDO0FBRUEsWUFBTSxhQUFhLFFBQVEsSUFBSSxjQUFjO0FBRTdDLFVBQUksWUFBWTtBQUNkLGVBQU8sV0FBVyxVQUFVO0FBQUEsTUFDOUI7QUFFQSxZQUFNLFNBQVMsUUFBUSxJQUFJLHlCQUF5QjtBQUNwRCxVQUFJLFdBQVcsUUFBUTtBQUNyQixlQUFPLFdBQVcsV0FBVyxJQUFJLE9BQU87QUFBQSxNQUMxQztBQUVBLGFBQU8sV0FBVyxXQUFXLElBQUksT0FBTyxRQUFRO0FBQUEsUUFDOUM7QUFBQSxNQUNGLENB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
