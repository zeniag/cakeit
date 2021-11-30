import React from "react"
import { Link } from "gatsby"
import useMenuQuery from "../../hooks/useMenuQuery"
import NavigationWrapper from "./Navigation.styles.js"

const Navigation = () => {
  const menu = useMenuQuery().wpMenu.menuItems.nodes
  return (
    <NavigationWrapper>
      <ul>
        {menu.map(
          mainItem =>
            !mainItem.parentId && (
              <li key={mainItem.id}>
                <Link to={mainItem.url} activeClassName="nav-active">
                  {mainItem.label}
                  {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
                </Link>
                {mainItem.childItems.nodes.length !== 0 && (
                  <ul>
                    {mainItem.childItems.nodes.map(childItem => (
                      <li key={childItem.id}>
                        <Link to={childItem.url} activeClassName="nav-active">
                          {childItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
        )}
      </ul>
    </NavigationWrapper>
  )
}

export default Navigation
