import ApprovalsNavigation from './ApprovalsNavigation.jsx'
import ApprovalsList from './ApprovalsList.jsx'
import ApprovalRequest from './ApprovalRequest.jsx'

const Approvals = () => (
  <div className="flex-grow">
    <div className="container mx-auto py-6">
      <h1 className="mb-6 text-slate-700 font-bold uppercase">Approvals</h1>
      <div className="flex justify-between">
        <ApprovalsNavigation />
        <ApprovalRequest />
      </div>
    </div>
  </div>
)

export default Approvals
