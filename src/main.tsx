import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { installDevConsoleFilter } from "@/lib/dev-console-filter";

installDevConsoleFilter();

createRoot(document.getElementById("root")!).render(<App />);
