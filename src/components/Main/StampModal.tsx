import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import cls from '@/utils/cls';

interface StampModalProps {
  visited: boolean;
  imageURL: string;
  closeModal: () => void;
  innerText: string;
  onStampClick: () => void;
  distance: number;
}

export default function StampModal({ closeModal, innerText, imageURL, visited, onStampClick, distance }: StampModalProps) {
  console.log(distance);
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
                    <p className="text-lg">{innerText}</p>
                  </div>

                  {!visited && (
                    <div className="mt-4">
                      <button
                        type="button"
                        className={cls(
                          'inline-flex justify-center rounded-md border border-transparent bg-[#AE1E27] bg-opacity-[16%] px-4 py-2 text-sm font-medium text-[#AE1E27] outline-none',
                          'disabled:bg-gray-100 disabled:text-gray-500'
                        )}
                        onClick={onStampClick}
                        disabled={distance > 100 || distance == -1}
                      >
                        도장찍기
                      </button>
                    </div>
                  )}
                  {!visited && distance == -1 ? (
                    <div className="tet-[#D91C29] mt-2 text-center">거리를 계산 중입니다.</div>
                  ) : (
                    distance > 100 && <div className="mt-2 text-center text-[#D91C29]">100m 이내에만 버튼이 활성화됩니다.</div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
