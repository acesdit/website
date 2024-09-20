import { notFound } from 'next/navigation'

/**
 * A Next.js page component that renders a 404 page.
 *
 * @returns {never} Never returns anything, always calls `notFound()`.
 */
export default function page() {
  notFound()
}
