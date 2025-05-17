import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { ReactNode } from "react";
import Navigation from "./Navigation";

export default function Shell({ children }: { children: ReactNode }) {
    return (
        <>
            <CssBaseline />
            <Navigation />
            <Toolbar />
            {children}
        </>
    )
}