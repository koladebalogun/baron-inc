import React, { useEffect, useRef, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import CursorManager from "@/components/CustomCursor/CursorManager";
import "@/styles/globals.css";
import "../locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
    <CursorManager>
      <CustomCursor />
      <AnimatePresence initial={false} mode='wait'>
        <Component {...pageProps} />
      </AnimatePresence>
    </CursorManager>
    </Layout>
  );
}
