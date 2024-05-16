const dashboardMenu = [
    {
        "label": "Dashboard",
        "link": "/dashboard",
        "icon": "ri-pie-chart-2-line"
    },
];

const masterMenu = [
    {
        "label": "User",
        "icon": "ri-account-circle-line",
        "submenu": [
            {
                "label": "List",
                "link": "/users"
            },
            {
                "label": "Billing",
                "link": "/users/billings"
            },
            {
                "label": "Activity Log",
                "link": "/users/logs"
            },
        ]
    },
];

export { dashboardMenu, masterMenu };