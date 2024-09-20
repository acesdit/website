import Link from 'next/link'

/**
 * A Next.js component that renders a breadcrumb with a parent and child.
 * @param {Object} props - The component props.
 * @param {string} props.parent - The parent's name.
 * @param {string} props.parentLink - The parent's href.
 * @param {string} props.child - The child's name.
 * @returns {JSX.Element} A JSX element that renders the breadcrumb.
 */
function BreadCrumb({ parent, parentLink, child }) {
  return (
    <div className='hero-container nav-target'>
      <main className='hero-bg'>
        <div className='container mx-auto p-4 md:px-6'>
          <div className='flex items-center pt-20 pb-4 text-white'>
            <span className='text-lg'>
              <span className='uppercase font-title font-medium'>
                <Link
                  className='transition-colors hover:text-secondary'
                  href={parentLink}>
                  {parent}
                </Link>{' '}
                /
              </span>{' '}
              {child}
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BreadCrumb
