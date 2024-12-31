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
          { label: "list", icon: "pi pi-user", routerLink: ["/users/empleados"] },
          { label: "register_employees", icon: "pi pi-user-plus", routerLink: ["/users/empleados/create"] },
        ]
      },
      {
        label: "suppliers", icon: "pi pi-users",
        items: [
          { label: "list", icon: "pi pi-user", routerLink: ["/users/proveedores"] },
          { label: "register_employees", icon: "pi pi-user-plus", routerLink: ["/users/proveedores/create"] },
        ]
      },
      {
        label: "customers", icon: "pi pi-users",
        items: [
          { label: "list", icon: "pi pi-user", routerLink: ["/users/clientes"] },
          { label: "register_customers", icon: "pi pi-user", routerLink: ["/users/clientes/create"] },
        ]
      },
    ]
  },
  {
    label: "inventory", icon: "pi pi-warehouse",
    items: [
      { label: "warehouse", icon: "pi pi-database", routerLink: ["/inventory/"] },
      { label: "catalogs", icon: "pi pi-box", routerLink: ["/inventory/products"] },
    ]
  },
  {
    label: "purchases", icon: "pi pi-shopping-cart",
    items: [
      { label: "list", icon: "pi pi-ban", routerLink: ["/inventory/products"] },
      { label: "crear", icon: "pi pi-ban", routerLink: ["/inventory/products/create"] },
    ]
  },
  {
    label: "sales", icon: "pi pi-tag",
    items: [
      { label: "list", icon: "pi pi-ban", routerLink: ["/products/"] },
      { label: "crear", icon: "pi pi-ban", routerLink: ["/productos/backorder"] },
    ]
  }
]
