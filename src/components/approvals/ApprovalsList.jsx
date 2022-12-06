import RequestItem from './RequestItem.jsx'
import ApprovalsListNavigation from './ApprovalsListNavigation.jsx'

const ApprovalsList = () => (
  <div className="basis-10/12 rounded-md bg-white ml-6 overflow-hidden">
    <ApprovalsListNavigation />
    <table className="w-full text-sm text-left text-gray-500">
      <tbody>
        <RequestItem
          checkValue="mercy-request"
          requestedBy="Mercy Chirchir, Bomet Water Company"
          request="This is an example of a request for approval"
          requestDate="8 November"
          stage={1}
        />

        <RequestItem
          checkValue="kimani-request"
          requestedBy="Kimani Wanyoike, KIAWASCO"
          request="This is another example of a request for approval"
          requestDate="6 November"
          stage={3}
        />

        <RequestItem
          checkValue="justus-request"
          requestedBy="Justus Oduor, L. Victoria Basin Water"
          request="This is a third example of a request for approval"
          requestDate="1 November"
          stage={4}
        />

        <RequestItem
          checkValue="jane-request"
          requestedBy="Jane Mwikali, Makueni Water"
          request="This is yet another example of a request for approval"
          requestDate="28 October"
          stage={2}
        />

        <RequestItem
          checkValue="ole-request"
          requestedBy="Samson Ole Tipis, Kajiado Water"
          request="This is a fifth example of a request for approval"
          requestDate="26 October"
          stage={2}
        />

        <RequestItem
          checkValue="mercy-request"
          requestedBy="Mercy Chirchir, Bomet Water Company"
          request="This is an example of a request for approval"
          requestDate="8 November"
          stage={1}
        />

        <RequestItem
          checkValue="kimani-request"
          requestedBy="Kimani Wanyoike, KIAWASCO"
          request="This is another example of a request for approval"
          requestDate="6 November"
          stage={4}
        />

        <RequestItem
          checkValue="justus-request"
          requestedBy="Justus Oduor, L. Victoria Basin Water"
          request="This is a third example of a request for approval"
          requestDate="1 November"
          stage={4}
        />

        <RequestItem
          checkValue="jane-request"
          requestedBy="Jane Mwikali, Makueni Water"
          request="This is yet another example of a request for approval"
          requestDate="28 October"
          stage={1}
        />

        <RequestItem
          checkValue="ole-request"
          requestedBy="Samson Ole Tipis, Kajiado Water"
          request="This is a fifth example of a request for approval"
          requestDate="26 October"
          stage={1}
        />
      </tbody>
    </table>
  </div>
)

export default ApprovalsList
