import ActiveLink from "./ActiveLink";
const items = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Formations",
    to: "/Formations",
  },
  {
    name: "Certifications",
    to: "/Certifications",
  },
  {
    name: "Contact",
    to: "/Contact",
  },
];

const HeaderItems = () => (
  <nav className=''>
    <ul className='flex py-2 text-gray-700 font-Noto font-medium '>
      {items.map((item) => {
        return (
          <li key={item.name} className='mr-8'>
            <ActiveLink
              activeClassName='text-primary font-bold'
              href={`${item.to}`}>
              <a>{item.name}</a>
            </ActiveLink>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default HeaderItems;
