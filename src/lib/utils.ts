import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// TODO: replace with tailwind-variants
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
