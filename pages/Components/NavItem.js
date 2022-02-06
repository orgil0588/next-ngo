
const NavItem = (props) => (
  <li>
    <a className="text-sm" href={props.href}>
      {props.text}
    </a>
  </li>
);

export default NavItem;
