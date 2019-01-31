import { Widget } from "../core/widget";
import { Env, Menu } from "../env";

const template = `
    <div class="o_navbar">
        <span class="title">Odoo<t t-if="env.isMobile"> MOBILE</t></span>
        <ul>
            <li t-foreach="env.menus" t-as="menu">
                <a t-att-href="getUrl(menu)">
                    <t t-esc="menu.title"/>
                </a>
            </li>
        </ul>
    </div>
`;

export class Navbar extends Widget<Env, {}> {
  name = "navbar";
  template = template;

  getUrl(menu: Menu) {
    const action_id = String(menu.actionID);
    return this.env.router.formatURL("", { action_id });
  }
}