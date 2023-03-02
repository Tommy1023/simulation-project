const NAVITEMS = ['PRODUCT', 'VIDEO', 'CATALOG', 'EXPLORE MORE'];
const NavBar = () => (
  <header className="flex text-center justify-center py-9">
    {NAVITEMS.map((item) => (
      <div className=" px-9 py-4 leading-7 tracking-wider font-extrabold font-sans text-base text-[#FFFFFF] hover:border-b-2 border-white">
        {item}
      </div>
    ))}
  </header>
);

export default NavBar;
