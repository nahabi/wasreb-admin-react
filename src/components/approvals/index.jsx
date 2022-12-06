import { useState } from 'react'

import ApprovalsNavigation from './ApprovalsNavigation.jsx'
import ApprovalsList from './ApprovalsList.jsx'
import ApprovalRequest from './ApprovalRequest.jsx'
import { Button, Label, Modal, Textarea, TextInput } from 'flowbite-react'

const Approvals = () => {
  const [approvalModalVisible, setApprovalModalVisible] = useState(false)
  return (
    <div className="flex-grow">
      <div className="container mx-auto py-6">
        <h1 className="mb-6 text-slate-700 font-bold uppercase">Approvals</h1>
        <div className="flex justify-between">
          <ApprovalsNavigation />
          <ApprovalRequest setApprovalModalVisible={setApprovalModalVisible} />
        </div>
      </div>

      <Modal
        show={approvalModalVisible}
        position="center"
        onClose={() => setApprovalModalVisible(false)}
      >
        <Modal.Header className="bg-slate-800">
          <span className="text-slate-300">Ask for modification</span>
        </Modal.Header>
        <Modal.Body>
          <div className="p-2">
            <div className="mb-4">
              <div className="block uppercase font-bold">
                <Label htmlFor="value1" value="Title" />
              </div>
              <TextInput
                id="value1"
                placeholder="Modification title"
                required={true}
              />
            </div>
            <div id="textarea" className="mb-4 text-sm">
              <div className="block uppercase font-bold">
                <Label htmlFor="notes" value="Changes" />
              </div>
              <Textarea
                id="notes"
                placeholder="Changes..."
                required={true}
                rows={4}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-slate-700">
          <Button
            onClick={() => setApprovalModalVisible(false)}
            className="bg-slate-300 hover:bg-slate-200 text-slate-800 rounded-md"
            style={{ backgroundColor: '#cbd5e1', color: '#1e293b' }}
          >
            Submit
          </Button>
          <Button
            onClick={() => setApprovalModalVisible(false)}
            className="bg-slate-500 hover:bg-slate-400 text-slate-800 rounded-md"
            style={{ backgroundColor: '#64748b', color: '#1e293b' }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Approvals
