import { useState } from 'react'
import layersIcon from '../assets/icons/layers.svg'
import {
  Button,
  Modal,
  Label,
  TextInput,
  Select,
  FileInput,
  Textarea
} from 'flowbite-react'

const LayerSelector = ({ label, value }) => (
  <div className="p-4 hover:bg-wsblue-800 transition-all ease-in-out">
    <div className="flex items-center">
      <input
        type="checkbox"
        id={value}
        value={value}
        className="w-4 h-4 mr-2 text-wsblue-600 bg-gray-100 rounded border-gray-300 focus:ring-wsblue-500 dark:focus:ring-wsblue-600 focus:ring-2"
      />
      <label
        htmlFor={value}
        className="ml-2 text-sm font-medium text-wsblue-200"
      >
        {label}
      </label>
    </div>
  </div>
)

const Map = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [layersVisible, setLayersVisible] = useState(false)
  const [warningVisible, setWarningVisible] = useState(true)

  const visibilityClass = layersVisible ? 'visible' : 'hidden'

  return (
    <div className="relative flex-grow">
      <h1 className="text-7xl text-wsblue-200 text-center mt-6">
        Map goes here
      </h1>
      <aside
        className="w-64 bg-wsblue-900/90 text-white rounded-r shadow-lg mt-6 overflow-hidden absolute top-2 left-0 fixed z-40"
        aria-label="Sidebar"
      >
        <div
          className="py-2 px-4 uppercase font-bold bg-wsblue-800 border-b border-wsblue-700 flex justify-between cursor-pointer"
          onClick={() => setLayersVisible(!layersVisible)}
        >
          <div className="flex justify-start">
            <img src={layersIcon} className="w-4 h-4 mr-4 mt-1" />
            Layers
          </div>
          <div>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
        <div id="layer-items" className={visibilityClass}>
          <LayerSelector value="appertunances" label="Appertunances" />
          <LayerSelector value="national-boundary" label="National boundary" />
          <LayerSelector value="county-boundaries" label="County boundaries" />
          <LayerSelector value="lsa" label="Licensed Service Areas" />
          <LayerSelector value="lia" label="Low Income Areas" />
          <LayerSelector value="sewers" label="Sewers/manholes" />
          <LayerSelector value="sssp" label="SSSP Schemes" />
          <LayerSelector value="water-pipelines" label="Water pipelines" />
          <LayerSelector
            value="wwdas"
            label="Water works & Development Agencies"
          />
        </div>
      </aside>
      <div className="absolute bottom-2 right-2 w-12 h-12 bg-wsblue-800 hover:bg-wsblue-700 border-2 border-wsblue-500 rounded-full flex flex-col justify-center shadow-md z-40">
        <Button
          className="bg-transparent hover:bg-transparent w-6 h-6 mx-auto ring-0 focus:ring-0"
          style={{ backgroundColor: 'transparent' }}
          onClick={() => setModalVisible(true)}
        >
          <svg
            className="w-4 h-4"
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
        </Button>
      </div>

      <Modal
        show={modalVisible}
        position="bottom-right"
        onClose={() => setModalVisible(false)}
      >
        <Modal.Header className="bg-wsblue-800">
          <span className="text-wsblue-300">Edit map</span>
        </Modal.Header>
        <Modal.Body>
          <div className="p-2">
            <div className="mb-4">
              <div className="block uppercase font-bold">
                <Label htmlFor="value1" value="Value 1" />
              </div>
              <TextInput id="value1" placeholder="Value 1" required={true} />
            </div>
            <div id="textarea" className="mb-4">
              <div className="block uppercase font-bold">
                <Label htmlFor="notes" value="Notes" />
              </div>
              <Textarea
                id="notes"
                placeholder="Some notes..."
                required={true}
                rows={4}
              />
            </div>
            <div id="select" className="mb-4">
              <div className="block uppercase font-bold">
                <Label htmlFor="options" value="Select your option" />
              </div>
              <Select id="options" required={true}>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </Select>
            </div>
            <div id="fileUpload">
              <div className="block uppercase font-bold">
                <Label htmlFor="file" value="Upload file" />
              </div>
              <FileInput id="file" helperText="Short descriptor to help user" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-wsblue-700">
          <Button
            onClick={() => setModalVisible(false)}
            className="bg-wsblue-300 hover:bg-wsblue-200 text-wsblue-800 rounded-md"
            style={{ backgroundColor: '#cbd5e1', color: '#1e293b' }}
          >
            Submit
          </Button>
          <Button
            onClick={() => setModalVisible(false)}
            className="bg-wsblue-500 hover:bg-wsblue-400 text-wsblue-800 rounded-md"
            style={{ backgroundColor: '#64748b', color: '#1e293b' }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/*Multiple layers warning modal*/}
      <Modal
        show={warningVisible}
        size="md"
        popup={true}
        onClose={() => setWarningVisible(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <svg
              className="w-16 h-16 text-red-600 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
            <h3 className="mb-5 font-normal text-gray-500 dark:text-gray-400">
              You cannot enter 'Edit' mode with multiple layers selected
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setWarningVisible(false)}>
                Close
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Map
