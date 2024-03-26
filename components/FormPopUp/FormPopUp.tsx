import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import CloseIcon from '@/public/icons/close.svg';
import SuccessIcon from '@/public/icons/success.svg';
import ErrorIcon from '@/public/icons/error.svg';

import form from '@/data/form.json';

type PopUpTypes = {
  isOpen: boolean;
  closeModal: () => void;
  isBtnSubmitted: boolean;
  isApiError: boolean;
};

export const FormPopUp = ({
  isOpen,
  closeModal,
  isBtnSubmitted,
  isApiError,
}: PopUpTypes) => {
  const {
    successSubmitText,
    errorSubmitText,
    successSubmitDescriptionText,
    errorSubmitDescriptionText,
  } = form;

  return (
    <Transition appear show={isOpen} as={Fragment}>
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
          <div className="fixed inset-0 bg-backdropCol" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[328px] md:w-[624px] xl:w-[802px] transform overflow-hidden rounded-[10px] bg-white p-4 pb-[60px] md:p-[42px] md:pb-20 xl:p-[30px] xl:pb-[112px] shadow-xl transition-all">
                <button
                  type="button"
                  className="block text-[#000000] ml-auto hover:text-[#000C1D]"
                  onClick={closeModal}
                  aria-label="Закрити"
                >
                  <CloseIcon
                    width={24}
                    height={24}
                    className="stroke-text02 hover:stroke-[#000C1D] focus:stroke-[#000C1D] transition-all duration-300"
                  />
                </button>
                {isBtnSubmitted && (
                  <div>
                    <div className="mt-8 xl:mt-[68px] flex flex-col gap-6 items-center text-center mb-4">
                      <SuccessIcon className="success_error-icon" />
                      <p className="font-fixel text-xl xl:text-3xl text-accent line-height-115">
                        {successSubmitText}
                      </p>
                    </div>
                    <p className="font-mulish text-xs md:text-sm text-text02 text-center line-height-140">
                      {successSubmitDescriptionText}
                    </p>
                  </div>
                )}

                {isApiError && (
                  <div>
                    <div className="mt-8 xl:mt-[57px] flex flex-col gap-6 items-center text-center mb-4">
                      <ErrorIcon className="success_error-icon" />
                      <p className="font-fixel text-xl xl:text-3xl text-errorCol line-height-115">
                        {errorSubmitText}
                      </p>
                    </div>
                    <p className="font-mulish text-xs md:text-sm text-text02 text-center md:w-[314px] md:mx-auto line-height-140">
                      {errorSubmitDescriptionText}
                    </p>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
