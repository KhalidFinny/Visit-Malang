import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface NavButtonProps {
  icon: IconDefinition;
  onClick: () => void;
  direction?: "left" | "right";
  className?: string;
  ariaLabel?: string;
}

export interface MapButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'flat';
  className?: string;
}

export interface SkeletonProps {
  className?: string;
  aspectW?: number;
  aspectH?: number;
  rounded?: string;
}

export interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

export interface PostcardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type PostcardLayoutKey = "classic" | "fullbleed" | "polaroid";

export interface StampLocation {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  icon: IconDefinition;
}

export interface StampPassportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface VisualLensModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface MatchResult {
  title: string;
  category: string;
  slug: string;
  confidence: number;
  coordinates: { lat: number; lng: number };
  description: string;
}

export interface HeaderMenuProps {
  onOpenPassport: () => void;
  onOpenLens: () => void;
  onOpenPostcard: () => void;
}

export interface Place {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  desc: string;
  cat: string;
}
