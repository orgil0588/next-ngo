
const NavItem = (props) => (
  <li>
    <a className="text-sm font-bold" href={props.href}>
      {props.text}
    </a>
  </li>
);

export default NavItem;
