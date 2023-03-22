import React, { useEffect, useRef, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import CursorManager from "@/components/CustomCursor/CursorManager";
import "@/styles/globals.css";
import "../locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <CursorManager>
      <CustomCursor />
      <AnimatePresence initial={false} mode='wait'>
        <Component {...pageProps} />
      </AnimatePresence>
    </CursorManager>
  );
}
