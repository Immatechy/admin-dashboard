import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
    return (
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img
              src="https://i.pinimg.com/474x/2b/8e/66/2b8e66b2a2d164b25d53cc63f673b144.jpg"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://i.pinimg.com/474x/6b/04/34/6b04343a11051c7bd647381bd6b58b89.jpg"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">John Carmack</span>
              <span className="widgetSmUserTitle">Product Designer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://i.pinimg.com/474x/a0/91/24/a091246c30e6cc704c707f8854f019a6.jpg"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Michael Widenius</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://i.pinimg.com/474x/0d/6b/17/0d6b17408e64a62bf84090e3cd4cf7df.jpg"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Davis Claire</span>
              <span className="widgetSmUserTitle">Project Manager</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://i.pinimg.com/474x/bc/c8/2f/bcc82f14cefd5e97d4e1f59be865e510.jpg"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Jimmy Wales</span>
              <span className="widgetSmUserTitle">Font-end Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        </ul>
      </div>
    );
}

