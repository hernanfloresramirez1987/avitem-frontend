import { MenuItem } from "primeng/api";

export const APP_MENU = [
  {
    label: "parameterization", icon: "pi pi-home",
    items: [
      { label: "locations", icon: "pi pi-desktop", routerLink: ["/location"] }
    ]
  },
  {
    label: "inbound", icon: "pi pi-sign-in",
    items: [
      { label: "receiving", icon: "pi pi-desktop", routerLink: ["/inbound/receiving"] },
      { label: "history", icon: "pi pi-history", routerLink: ["/inbound/history"] },
      { label: "return", icon: "pi pi-sync", routerLink: ["/inbound/return"] },
    ]
  },
  {
    label: "inventory", icon: "pi pi-th-large",
    items: [
      { label: "warehouse", icon: "fa-solid fa-database", routerLink: ["/inventory/warehouse"] },
      { label: "catalogs", icon: "pi pi-box", routerLink: ["/inventory/catalog"] },
      // { label: "kardex history",
      // // icon: "pi pi-history",
      // routerLink: ["/inventory/history-kardex"] },
      // { label: "sku history",
      // // icon: "pi pi-inbox",
      // routerLink: ["/inventory/history-sku"] },
      // { label: "cyclecount",
      // // icon: "pi pi-check-circle",
      // routerLink: ["/inventory/cyclecount"] }
    ]
  },
  {
    label: "outbound", icon: "pi pi-arrow-circle-up",
    items: [
      { label: "backorder", icon: "pi pi-ban", routerLink: ["/outbound/backorder"] },
      { label: "pending", icon: "fa-solid fa-clock", routerLink: ["/outbound/pending"] },
      { label: "processing", icon: "fa-solid fa-bars-progress", routerLink: ["/outbound/processing"] },
      { label: "shipped", icon: "fa-solid fa-truck-fast", routerLink: ["/outbound/shipped"] },
      { label: "delivered", icon: "fa-solid fa-paper-plane", routerLink: ["/outbound/delivered"] },
      { label: "archived", icon: "fa-solid fa-box-archive", routerLink: ["/outbound/archived"] },
      { label: "all orders", icon: "fa-solid fa-folder-open", routerLink: ["/outbound/allorders"] },
      // { label: "fill rate",
      // // icon: "pi pi-check-circle",
      // routerLink: ["/outbound/cyclecount"] },
      // { label: "assigment",
      // // icon: "pi pi-check-circle",
      // routerLink: ["/outbound/cyclecount"] },
      // { label: "tasks o jobs",
      // // icon: "pi pi-check-circle",
      // routerLink: ["/outbound/cyclecount"] }
    ]
  }
]
