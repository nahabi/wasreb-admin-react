import { Footer } from 'flowbite-react'
const Foot = () => (
  <Footer container={true} className="bg-slate-900 text-slate-400 rounded-none">
    <Footer.Copyright href="#" by="Majidata™" year={2022} />
    <Footer.LinkGroup>
      <Footer.Link href="#">Licensing</Footer.Link>
      <Footer.Link href="#">Contact</Footer.Link>
    </Footer.LinkGroup>
  </Footer>
)

export default Foot
