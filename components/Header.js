export default function Header() {
  const links = [
    {
      id: "0",
      name: "Home",
      to: "/",
    },
    {
      id: "1",
      name: "Formations",
      to: "/formations",
    },
    {
      id: "2",
      name: "Events",
      to: "/events",
    },
    {
      id: "3",
      name: "About us",
      to: "/About",
    },
    {
      id: "4",
      name: "Contact",
      to: "/contact",
    },
  ];
  return (
    <div className="flex flex-1 py-4 px-10 items-center justify-between align-middle ">
      {" "}
      <div>
        <img
          className="w-28"
          src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/06/eCademy.png"
          alt="logo image"
        />
      </div>
      <div class="md:w-1/4 relative">
        <input
          className="bg-gray-100 appearance-none border-2 placeholder-gray-500
           border-gray-100 rounded w-full py-4 px-4 text-gray-700 leading-tight
            focus:outline-none  focus:placeholder-transparent text-sm transition ease-linear duration-600"
          placeholder="Search for everything"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 absolute top-4 right-2 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="flex items-center">
        {links.map((link) => {
          return (
            <div
              key={link.id}
              className="text-gray-800 tracking-wide font-bold mr-7 text-sm hover:text-red-500 cursor-pointer flex-initial"
            >
              <a>{link.name}</a>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="bg-red-500 hover:bg-gray-900 text-white font-bold py-4 px-8 rounded flex 
              items-center transition-colors ease-linear duration-300  align-middle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Login/Register
        </button>
      </div>
    </div>
  );
}
