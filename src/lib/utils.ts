import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
    return new Intl.NumberFormat().format(num)
}

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
}

export async function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function isMobile(): boolean {
    return window.innerWidth < 1024;
}

export function isTablet(): boolean {
    return window.innerWidth >= 1024 && window.innerWidth < 1240;
}

export function isDesktop(): boolean {
    return window.innerWidth >= 1240;
}