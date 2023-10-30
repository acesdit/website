'use client'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function ConstructionModal() {
  const [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-[20px]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                  <div className='bg-slate-400 w-full h-6 absolute top-0 left-0 yellow-stripe'></div>
                  <Dialog.Title
                    as="h3"
                    className="font-title uppercase font-semibold text-5xl leading-smug pt-10"
                  >
                    Site In Construction
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="py-2">
                      This site is still in development & some features may not work as expected.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={closeModal}
                    >
                      Got it
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}

export default ConstructionModal
