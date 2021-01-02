import React from "react";
import { useHistory } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";
import Icon from "../../Components/Icon/Icon";
import Link from "../../Components/Link/Link";
import useRedirect from "./useRedirect";

export default function Menu({ testId, hideMenu }) {
  const history = useHistory();
  const { redirect } = useRedirect({ hideMenu, history });
  return (
    <div data-testid={testId} className="menu">
      <div className="menu__header">
        <div className="icon">
          <Icon
            testId={"id-close"}
            icon={faTimes}
            light={true}
            cb={() => hideMenu()}
          />
        </div>

        <h2 className="title">Menu</h2>
      </div>
      <div className="menu__body">
        <ul>
          <Link key="link-1" text={"home"} cb={() => redirect("/")} />
          <Link key="link-2" text={"sign-in"} cb={() => redirect("/sign-in")} />
          <Link key="link-3" text={"sign-up"} cb={() => redirect("/sign-up")} />
          <Link key="link-4" text={"notes"} cb={() => redirect("/notes")} />
        </ul>
      </div>
    </div>
  );
}
