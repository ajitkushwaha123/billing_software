const TABS = [
  {
    title: "Notifications",

    Component: Notification,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
