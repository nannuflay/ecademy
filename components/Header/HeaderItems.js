import { MdKeyboardArrowDown } from "react-icons/md";

const HeaderItems = () => {
  const Items = [
    {
      id: "0",
      name: "Acceuil",
      to: "/",
    },
    {
      id: "1",
      name: "Nos formations",
      submenu: [
        {
          title: "",
          to: "",
        },
        {
          title: "developement",
          to: "",
        },
        {
          title: "developement",
          to: "",
        },
        {
          title: "developement",
          to: "",
        },
      ],
      to: "/formations",
    },
    {
      id: "2",
      name: "Alterances & Certifications",
      to: "/events",
    },
  ];

  return (
    <div className='flex items-center'>
      {Items.map((item) => {
        return (
          <div
            key={item.id}
            className='text-gray-800 flex items-center transition-colors ease-in duration-300
               tracking-wide  mx-3  hover:text-primary   cursor-pointer font-Noto'>
            <a>{item.name}</a>
            {item.submenu && <MdKeyboardArrowDown className='w-6 h-6 mt-1' />}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderItems;
