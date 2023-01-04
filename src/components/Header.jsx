import logo from '../assets/img/majidata-logo-white.png'
// import userIcon from '../assets/icons/user.svg'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import { startTransition } from 'react'

const UserIcon = () => (
  <div className="flex justify-start">
    <svg
      className="w-4 h-4 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      ></path>
    </svg>
    User Management
  </div>
)

const ProvidersIcon = () => (
  <div className="flex justify-start">
    <svg
      className="w-4 h-4 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      ></path>
    </svg>
    Providers
  </div>
)
const Header = () => (
  <Navbar
    rounded={false}
    className="bg-wsblue-800 text-wsblue-100"
    style={{ backgroundColor: 'rgb(30, 51, 114)' }}
  >
    <Navbar.Brand href="https://admin.majidata.go.ke/">
      <img src={logo} className="sm:h-6" alt="Majidata" />
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
          />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm font-bold">Brenda Anzagi</span>
          <span className="block text-sm">Editor, Viewer, Admin</span>
          <span className="block truncate text-sm font-medium">
            banzagi@wasreb.go.ke
          </span>
        </Dropdown.Header>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link
        href="/"
        className="text-wsblue-100 flex justify-start"
        style={{ color: 'white' }}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          ></path>
        </svg>
        Dashboard
      </Navbar.Link>
      <Navbar.Link
        href="/"
        className="text-wsblue-100 flex justify-start"
        style={{ color: 'white' }}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          ></path>
        </svg>
        Map
      </Navbar.Link>
      <Dropdown
        label={<ProvidersIcon />}
        arrowIcon={true}
        inline={true}
        className="text-wsblue-100"
      >
        <Dropdown.Item>WSPs</Dropdown.Item>
        <Dropdown.Item>SSSPs</Dropdown.Item>
      </Dropdown>
      <Navbar.Link
        href="/"
        className="text-wsblue-100 flex justify-start"
        style={{ color: 'white' }}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          ></path>
        </svg>
        Approvals
      </Navbar.Link>
      <Dropdown
        label={<UserIcon />}
        arrowIcon={true}
        inline={true}
        className="text-wsblue-100 hover:text-wsblue-200"
      >
        <Dropdown.Item>Administrators</Dropdown.Item>
        <Dropdown.Item>Wasreb Users</Dropdown.Item>
        <Dropdown.Item>Ordinary Users</Dropdown.Item>
        <Dropdown.Item>County Users</Dropdown.Item>
      </Dropdown>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
