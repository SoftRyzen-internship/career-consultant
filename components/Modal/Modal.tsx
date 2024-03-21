import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { ModalCard } from '@/components/ModalCard';
import CloseIcon from '@/public/icons/close.svg';

type IModal = {
  open: boolean;
  data: {
    name: string;
    position: string;
    text: string;
  };
  onClose: () => void;
};

export const Modal = ({ data, open, onClose }: IModal) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative py-[32px] px-[24px] max-w-[336px] w-full h-auto rounded-[8px] bg-white
              md:max-w-[540px] xl:p-[36px] xl:max-w-[800px]"
              >
                <ModalCard data={data} />

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="close modal window"
                  className="absolute top-[16px] right-[16px]"
                >
                  <CloseIcon className="w-[24px] h-[24p] stroke-text02 stroke-2 hover:stroke-[#000C1D] focus:stroke-[#000C1D] transition-[stroke] duration-300" />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
