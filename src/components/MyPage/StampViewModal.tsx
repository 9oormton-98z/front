import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

interface StampViewModalProps {
  imageURL: string;
  closeModal: () => void;
  description: string;
  title: string;
}

export default function StampViewModal({ title, description, imageURL, closeModal }: StampViewModalProps) {
  return (
    <>
      <Transition appear show={true} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="relative flex w-full max-w-md transform flex-col items-center overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <XMarkIcon className="absolute right-5 top-3 h-7 w-7 text-[#AE1E27]" onClick={closeModal}></XMarkIcon>
                  <div className="m-auto mt-6 aspect-square w-64">
                    <img src={imageURL} className="h-full w-full"></img>
                  </div>
                  <div className="mt-2">
                    <h2 className="pb-2 text-center text-xl">{title}</h2>
                    <p className="text-base">{description}</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
