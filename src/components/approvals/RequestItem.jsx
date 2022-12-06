const RequestItem = ({
  checkValue,
  requestedBy,
  request,
  requestDate,
  stage
}) => {
  const fillColor =
    stage === 1
      ? '#a78bfa'
      : stage === 2
      ? '#60a5fa'
      : stage === 3
      ? '#c084fc'
      : '#34d399'
  return (
    <tr className="bg-white border-b hover:bg-gray-100">
      <td className="p-4 w-4">
        <div className="flex items-center">
          <input
            id={checkValue}
            type="checkbox"
            className="w-4 h-4 text-gray-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor={checkValue} className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <td className="p-4 w-4">
        <svg
          className="w-4 h-6 mr-4 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          ></path>
        </svg>
      </td>
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
      >
        {requestedBy}
      </th>

      <td className="py-4 px-6 flex justify-start">
        <svg
          className="w-4 h-4 mr-2 mt-0.5"
          fill={fillColor}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0"
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          ></path>
        </svg>
        {request}
      </td>
      <td className="py-4 px-6 text-right">{requestDate}</td>
    </tr>
  )
}

export default RequestItem
