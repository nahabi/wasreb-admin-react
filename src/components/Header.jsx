import logo from '../assets/img/majidata-logo.svg'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'

const Header = () => (
  <Navbar rounded={false} className="bg-slate-800 text-slate-100">
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
      <Navbar.Link href="/navbars" className="text-slate-100">
        Dashboard
      </Navbar.Link>
      <Navbar.Link href="/navbars" className="text-slate-100">
        Map
      </Navbar.Link>
      <Dropdown
        label="Providers"
        arrowIcon={true}
        inline={true}
        className="text-slate-100"
      >
        <Dropdown.Item>WSPs</Dropdown.Item>
        <Dropdown.Item>SSSPs</Dropdown.Item>
      </Dropdown>
      <Navbar.Link href="/navbars" className="text-slate-100">
        Approvals
      </Navbar.Link>
      <Dropdown
        label="User Management"
        arrowIcon={true}
        inline={true}
        className="text-slate-100"
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
