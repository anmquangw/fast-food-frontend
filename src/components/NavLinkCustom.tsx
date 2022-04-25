import { NavLink } from "react-router-dom";

export default function NavLinkCustom(props: any) {
  return <NavLink {...props} activeClassName="active" exact />;
}
