import { MenuItem } from "primeng/api";

export const APP_MENU = [
  {
    label: "home", icon: "pi pi-home",
    items: [
      { label: "dashboard", icon: "pi pi-home", routerLink: ["/home"] },
      { label: "main_panel", icon: "pi pi-desktop", routerLink: ["/dashboard"] }
    ]
  },
  {
    label: "users", icon: "pi pi-address-book",
    items: [
      {
        label: "employees", icon: "pi pi-users",
        items: [
          { label: "list", icon: "pi pi-user", routerLink: ["/users/employees"] },
          { label: "register_employees", icon: "pi pi-user-plus", routerLink: ["/users/create"] },
        ]
      },
      {
        label: "suppliers", icon: "pi pi-users",
        items: [
          { label: "list", icon: "pi pi-user", routerLink: ["/users/employee/create"] },
          { label: "register_employees", icon: "pi pi-user-plus", routerLink: ["/users/create"] },
        ]
      },
      {
        label: "customers", icon: "pi pi-users",
        items: [
          { label: "list", icon: "pi pi-user", routerLink: ["/users/"] },
          { label: "register_customers", icon: "pi pi-user", routerLink: ["/users/create"] },
        ]
      },
    ]
  },
  {
    label: "inventory", icon: "pi pi-warehouse",
    items: [
      { label: "warehouse", icon: "pi pi-database", routerLink: ["/inventory/warehouse"] },
      { label: "catalogs", icon: "pi pi-box", routerLink: ["/inventory/catalog"] },
    ]
  },
  {
    label: "purchases", icon: "pi pi-shopping-cart",
    items: [
      { label: "list", icon: "pi pi-ban", routerLink: ["/productos/"] },
      { label: "crear", icon: "pi pi-ban", routerLink: ["/productos/backorder"] },
    ]
  },
  {
    label: "sales", icon: "pi pi-tag",
    items: [
      { label: "list", icon: "pi pi-ban", routerLink: ["/productos/"] },
      { label: "crear", icon: "pi pi-ban", routerLink: ["/productos/backorder"] },
    ]
  }
]
