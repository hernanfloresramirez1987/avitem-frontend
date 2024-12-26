import { MenuItem } from "primeng/api";

export const APP_MENU = [
  {
    label: "home", icon: "pi pi-home",
    items: [
      { label: "dashboard", icon: "pi pi-desktop", routerLink: ["/home"] },
      { label: "main panel", icon: "pi pi-desktop", routerLink: ["/dashboard"] }
    ]
  },
  {
    label: "users", icon: "pi pi-sign-in",
    items: [
      { label: "Empleados", icon: "pi pi-user", routerLink: ["/users/"] },
      { label: "Empleados", icon: "pi pi-user", routerLink: ["/users/create"] },
    ]
  },
  {
    label: "inventory", icon: "pi pi-th-large",
    items: [
      { label: "warehouse", icon: "fa-solid fa-database", routerLink: ["/inventory/warehouse"] },
      { label: "catalogs", icon: "pi pi-box", routerLink: ["/inventory/catalog"] },
    ]
  },
  {
    label: "Productos", icon: "pi pi-windows",
    items: [
      { label: "listas", icon: "pi pi-ban", routerLink: ["/productos/"] },
      { label: "crear", icon: "pi pi-ban", routerLink: ["/productos/backorder"] },
    ]
  }
]
