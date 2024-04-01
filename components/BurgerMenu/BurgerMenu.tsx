import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import { Logo } from '@/components/Logo';
import { NavBar } from '@/components/NavBar';
import { Socials } from '@/components/Socials';
import { LinkToFeedback } from '@/components/LinkToFeedback';

import CloseIcon from '@/public/icons/close.svg';

import dataJson from '@/data/common.json';

type IMenu = {
  isOpen: boolean;
  onClose: () => void;
};

export const BurgerMenu = ({ isOpen, onClose }: IMenu) => {
  const { ariaLabelClose } = dataJson;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen bg-white md:w-[330px]">
                  <div className="px-[20px] pb-[16px] mx-auto flex flex-col justify-between max-w-[480px] h-full md:px-[40px] md:pb-[40px] md:max-w-full">
                    <div>
                      <div className="py-[8px] mb-[62px] flex justify-between items-center  md:py-[22px] md:mb-[40px]">
                        <Logo className="md:hidden" onClick={onClose} />

                        <button
                          type="button"
                          onClick={onClose}
                          aria-label={ariaLabelClose}
                          className="md:ml-auto"
                        >
                          <CloseIcon className="w-[24px] h-[24p] stroke-accent stroke-2 hover:stroke-accentPressed focus:stroke-accentPressed transition-[stroke] duration-300" />
                        </button>
                      </div>

                      <NavBar onClick={onClose} />
                    </div>
                    <div>
                      <Socials className="mb-[20px] md:mb-[40px]" />

                      <LinkToFeedback section="mobileMenu" onClick={onClose} />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
