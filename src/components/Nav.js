import React from "react"
import { Link } from "gatsby"

class Nav extends React.Component  {
  constructor() {
    super();
    this.state = {
      home_active: true,
      about_active: false,
      is_post: false,
      home_classname: "nav-item active-link",
      about_classname: "nav-item",
      post_nav_container: "nav-container",
    }
  }

  componentDidMount() {
    if(window.location.href.includes("blogs")) {
      this.setState({
        home_active: false,
        about_active: false,
        is_post: true,
        home_classname: "nav-item",
        about_classname: "nav-item",
        post_nav_container: "post-nav-container",
      })
    }
    else if(window.location.href.includes("about")) {
      this.setState({
        home_active: false,
        about_active: true,
        is_post: false,
        home_classname: "nav-item",
        about_classname: "nav-item active-link",
        post_nav_container: "post-nav-container",
      })
    }
  }

  render() {
    const { home_classname, about_classname, post_nav_container } = this.state;
    return(
      <div className={post_nav_container} id="nav-bar">
        <Link to="/" className="nav-brand">Jade Yorks</Link>
        <ul className="nav-item-container">


          <li className={home_classname} id="nav-home">
            <a href="https://expert-experimenter-9255.ck.page/4769f9e9f1

">Nieuwsbrief</a>
            <div className="underline"></div>
          </li>

          <li className={about_classname}>
            <Link to="/about">Over mij</Link>
            <div className="underline"></div>
          </li>

        </ul>
      </div>
    );
  }
}


export default Nav;
