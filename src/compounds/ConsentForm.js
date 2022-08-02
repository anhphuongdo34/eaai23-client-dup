import { React, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types';
import phrases from "../constants/phrases";
import consent from "../constants/consent";

const ConsentForm = (props) => {
    return (
        <Transition appear show={props.showConsent} as={Fragment}>
          <Dialog as="div" className="relative max-w-lg z-50" onClose={props.closeConsent}>
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
    
            <div className="fixed inset-y-10 inset-x-0 max-h-screen">
              <div className="flex max-h-50px items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-4xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <div>{consent.TITLE_1}</div>
                      <div>{consent.TITLE_2}</div>
                    </Dialog.Title>

                    <hr className="my-1"/>

                    <div className="max-h-[50vh] overflow-y-auto">
                      <Dialog.Description>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            {consent.SUBTITLE}
                          </p>
                        </div>
                      </Dialog.Description>
                      
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {consent.TEAM}
                        </p>
                        <ul className="list-disc text-sm text-gray-500 list-inside">
                          <li>{consent.TEAM_STEVE}</li>
                          <li>{consent.TEAM_BRIAN}</li>
                          <li>{consent.TEAM_BU}</li>
                          <li>{consent.TEAM_ANH}</li>
                          <li>{consent.TEAM_ALAN}</li>
                        </ul>
                      </div>

                      <div className="mt-2">
                        <h3 className="text-sm">
                          {consent.ABOUT_HEADER}
                        </h3>
                        <p className="text-sm text-gray-500">{consent.ABOUT_BODY}</p>
                      </div>

                      <div className="mt-2">
                        <p className="text-sm">
                          {consent.STEP_HEADER}
                        </p>
                        <ol className="list-decimal list-inside text-sm text-gray-500">
                          <li>{consent.STEP_1}</li>
                          <li>{consent.STEP_2}</li>
                          <li>{consent.STEP_3}</li>
                          <li>{consent.STEP_4}</li>
                        </ol>
                      </div>

                      <div className="mt-2">
                        <h3 className="text-sm underline">
                          {consent.RISKS_HEADER}
                        </h3>
                        <p className="text-sm text-gray-500">{consent.RISKS_BODY}</p>
                      </div>

                      <div className="mt-2">
                        <h3 className="text-sm underline">
                          {consent.BENEFITS_HEADER}
                        </h3>
                        <p className="text-sm text-gray-500">{consent.BENEFIT_BODY}</p>
                      </div>

                      <div className="mt-2">
                        <h3 className="text-sm underline">
                          {consent.COMPENSATION_HEADER}
                        </h3>
                        <p className="text-sm text-gray-500">{consent.COMPENSATION_BODY}</p>
                      </div>

                      <div className="mt-2">
                        <h3 className="text-sm underline">
                          {consent.RECORDING_HEADER}
                        </h3>
                        <p className="text-sm text-gray-500">{consent.RECORDING_BODY}</p>
                      </div>

                      <div className="mt-2">
                        <h3 className="text-sm underline">
                          {consent.VOLUNTARY_HEADER}
                        </h3>
                        <p className="text-sm text-gray-500">{consent.VOLUNTARY_BODY}</p>
                      </div>

                      <div className="mt-2">
                        <h3 className="text-sm underline">
                          {consent.QUESTIONS_HEADER}
                        </h3>
                        <p className="text-sm text-gray-500">{consent.QUESTIONS_BODY}</p>
                      </div>

                      <div className="mt-2">
                        <h3 className="text-sm underline">
                          {consent.CONSENT_HEADER}
                        </h3>
                        <p className="text-sm text-gray-500">{consent.CONSENT_BODY}</p>
                      </div>
                    </div>

                    <hr className="mt-3 mb-8"/>
    
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={props.closeConsent}
                      >
                        {phrases.CONSENT_CLOSE}
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
    )
};

ConsentForm.propTypes = {
    showConsent: PropTypes.bool.isRequired,
    closeConsent: PropTypes.func.isRequired
}

export default ConsentForm;
