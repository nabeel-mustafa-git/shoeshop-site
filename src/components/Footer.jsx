import { footerLinks, socialIcons } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-1 justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="text-white font-bold text-2xl tracking-tightest">
            Shoe<span className="text-main-color">s</span>hop
          </a>
          <p className="mt-6 text-base text-slate-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest ShoeShop store. Find your perfect shoe and discounts from the store.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialIcons.map((icon) => (
              <a href={icon.URL} className="bg-white p-1 rounded-full">
                <img src={icon.imgURL} alt="icon" width={25} className="rounded-full" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between lg:gap-12 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-slate-400 leading-normal hover:text-slate-600 cursor-pointer" key={link.name}>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-slate-gray mt-24 max-sm:flex-col max-sm:items-center">
        <p>&copy; Copyright. All rights reserved.</p>
        <a href="/" className="hover:text-white">
          Terms & Condition.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
