import ApprovalsListNavigation from './ApprovalsListNavigation.jsx'
import { Avatar, Accordion, Button } from 'flowbite-react'

const ApprovalRequest = ({ setApprovalModalVisible }) => (
  <div className="basis-10/12 rounded-md bg-white ml-6 overflow-hidden">
    <ApprovalsListNavigation />
    <div className="flex justify-start m-6">
      <Avatar
        alt="User settings"
        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        rounded={true}
      />
      <div className="text-sm ml-4">
        <p className="font-bold">John Doe</p>
        <p>Kiambu Water</p>
      </div>
    </div>

    <div className="border-y border-gray-200 bg-gray-50">
      <Accordion flush={true}>
        <Accordion.Panel>
          <Accordion.Title>
            This is the title of the request for approval
          </Accordion.Title>
          <Accordion.Content className="bg-white">
            <p className="mb-2 text-gray-500 text-sm">
              Donec hendrerit elit eu leo laoreet, quis tristique ante sagittis.
              Phasellus egestas auctor dolor quis pharetra. Nam euismod accumsan
              dolor, sagittis luctus felis molestie vitae. Nunc ultricies lacus
              lectus, nec auctor diam pellentesque ut. Morbi ultrices dolor mi,
              a venenatis velit posuere sit amet. Phasellus iaculis dapibus nibh
              non fringilla. Etiam accumsan, velit nec aliquet vehicula, mauris
              mi viverra libero, vel rutrum ipsum ligula eget velit. Etiam sed
              neque fringilla, varius dui eget, egestas ex. Praesent viverra
              mattis nulla, eu rhoncus risus volutpat ut. Aenean eu consectetur
              nisl. Praesent quis turpis vel purus placerat malesuada a ut
              lacus.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Previous version of the map</Accordion.Title>
          <Accordion.Content className="bg-white">
            <p className="mb-2 text-gray-500 text-sm">
              Place the unchanged version of the map here
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>New version of the map</Accordion.Title>
          <Accordion.Content className="bg-white">
            <p className="mb-2 text-gray-500 text-sm">
              Place the new version of the map here
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
    <div className="m-6">
      <Button.Group outline={true}>
        <Button color="success">
          <svg
            className="w-4 h-4 mr-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          Approve
        </Button>
        <Button color="info" onClick={() => setApprovalModalVisible(true)}>
          <svg
            className="w-4 h-4 mr-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
          Ask for modification
        </Button>
        <Button color="failure">
          <svg
            className="w-4 h-4 mr-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          Reject
        </Button>
      </Button.Group>
    </div>
  </div>
)

export default ApprovalRequest
