"use client";

import { motion } from "motion/react";
import { imageReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function ImageReveal({ children, className }: ImageRevealProps) {
  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      variants={imageReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}