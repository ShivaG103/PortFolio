'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://shivam-portfolio.vercel.app/${src}?w=${width}&q=${quality || 75}`
}