import { Checkbox, Label } from 'flowbite-react'
import TagSelector from './TagSelector.jsx'

const ApprovalsNavigation = () => (
  <div className="basis-2/12 rounded-md bg-white overflow-hidden">
    <p className="bg-slate-200 px-4 py-2 font-bold flex justify-start">
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        ></path>
      </svg>
      Incoming
    </p>

    <div className="px-4 py-4 border-b border-slate-200">
      <div className="flex items-center gap-3 mb-4">
        <Checkbox id="wsps" />
        <Label htmlFor="wsps">WSPs</Label>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <Checkbox id="sssps" />
        <Label htmlFor="sssps">SSSPs</Label>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <Checkbox id="county" />
        <Label htmlFor="county">County</Label>
      </div>

      <div className="flex items-center gap-3">
        <Checkbox id="field" />
        <Label htmlFor="field">Field data</Label>
      </div>
    </div>
    <div className="px-4 py-4 border-b border-slate-200">
      <TagSelector stage={1} />
      <TagSelector stage={2} />
      <TagSelector stage={3} />
      <TagSelector stage={4} />
    </div>
  </div>
)

export default ApprovalsNavigation
