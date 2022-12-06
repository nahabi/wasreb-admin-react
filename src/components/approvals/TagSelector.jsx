const TagSelector = ({ stage }) => {
  const fillColor =
    stage === 1
      ? '#a78bfa'
      : stage === 2
      ? '#60a5fa'
      : stage === 3
      ? '#c084fc'
      : '#34d399'

  return (
    <div className="flex justify-start text-sm uppercase mb-4 cursor-pointer">
      <svg
        className="w-4 h-4 mr-3 mt-0.5"
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
      <p style={{ color: fillColor }}>Stage {stage}</p>
    </div>
  )
}

export default TagSelector
