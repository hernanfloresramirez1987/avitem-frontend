import { MenuItem } from "primeng/api";

export const APP_MENU = [
  {
    label: "dashboard", icon: "pi pi-home",
    items: [
      { label: "panel principal", icon: "pi pi-desktop", routerLink: ["/dashboard"] }
    ]
  },
  {
    label: "Personal", icon: "pi pi-sign-in",
    items: [
      { label: "Empleados", icon: "pi pi-user", routerLink: ["/user/"] },
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
