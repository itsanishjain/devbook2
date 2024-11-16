// const data2 = [
//   {
//     rule: "When status changes to something, notify someone",
//     trigger: "When status changes to something",
//     action: "notify someone",
//     full_rule: "When status changes to something, notify someone",
//     tags: ["status change", "notification"],
//     category: "Status Notification",
//   },
//   {
//     rule: "When status changes to something, create an item in board",
//     trigger: "When status changes to something",
//     action: "create an item in board",
//     full_rule: "When status changes to something, create an item in board",
//     tags: ["status change", "board update"],
//     category: "Board Management",
//   },
//   {
//     rule: "When all subtasks of an item have the status of something, change the item's status to something",
//     trigger: "When all subtasks of an item have the status of something",
//     action: "change the item's status to something",
//     full_rule:
//       "When all subtasks of an item have the status of something, change the item's status to something",
//     tags: ["subtasks", "status update", "automation"],
//     category: "Task Management",
//   },
//   {
//     rule: "When all subtasks of an item have the status of something, notify someone",
//     trigger: "When all subtasks of an item have the status of something",
//     action: "notify someone",
//     full_rule:
//       "When all subtasks of an item have the status of something, notify someone",
//     tags: ["subtasks", "notification", "automation"],
//     category: "Task Notification",
//   },
//   {
//     rule: "When status changes from something to something else, notify someone",
//     trigger: "When status changes from something to something else",
//     action: "notify someone",
//     full_rule:
//       "When status changes from something to something else, notify someone",
//     tags: ["status change", "notification"],
//     category: "Status Notification",
//   },
//   {
//     rule: "When button clicked create a new entity record on NetSuite based on specific column value with the following fields",
//     category: "record creation",
//     tags: ["button click", "NetSuite", "entity record", "column value"],
//     trigger: "Button clicked",
//     action: "Create new entity record on NetSuite",
//   },
//   {
//     rule: "[NEW] When this status is set to this value create this start date this end date and this timeline in the direction chose",
//     category: "status management",
//     tags: ["status change", "timeline creation", "date setting"],
//     trigger: "Status set to specific value",
//     action: "Create start date, end date, and timeline",
//   },
//   {
//     rule: "When status changes create a report of this group containing this items grouped by status column and people column name it and send it to these people",
//     category: "reporting",
//     tags: ["status change", "group report", "email notification"],
//     trigger: "Status changes",
//     action: "Create and send grouped report",
//   },
//   {
//     rule: "When status changes to something perform formula and add result to mirrored column",
//     category: "column management",
//     tags: ["status change", "formula execution", "mirrored column"],
//     trigger: "Status changes to specific value",
//     action: "Perform formula and update mirrored column",
//   },
//   {
//     rule: "When person is assigned notify user about assigned item",
//     category: "notification",
//     tags: ["person assignment", "user notification"],
//     trigger: "Person assigned",
//     action: "Notify user about assigned item",
//   },
//   {
//     rule: "When a column changes, create a new entity record on NetSuite with the following fields",
//     category: "record creation",
//     tags: ["column change", "NetSuite", "entity record"],
//     trigger: "Column changes",
//     action: "Create new entity record on NetSuite",
//   },
//   {
//     rule: "When an update is created add conversation link to link column",
//     category: "communication",
//     tags: ["update creation", "conversation link", "link column"],
//     trigger: "Update created",
//     action: "Add conversation link to link column",
//   },
//   {
//     rule: "When status changes assign Person who made the change",
//     category: "task assignment",
//     tags: ["status change", "person assignment"],
//     trigger: "Status changes",
//     action: "Assign person who made the change",
//   },
//   {
//     rule: "When a sub-item is created, generate an auto-increment ID, starting with this number using this format and minimum number of digits in this column",
//     category: "item management",
//     tags: ["sub-item creation", "auto-increment ID", "ID format"],
//     trigger: "Sub-item created",
//     action: "Generate auto-increment ID",
//   },
//   {
//     rule: "When an item is created copy all the subitems from this item to the new item",
//     category: "item management",
//     tags: ["item creation", "subitem copy"],
//     trigger: "Item created",
//     action: "Copy subitems to new item",
//   },
//   {
//     rule: "When column changes convert address to location in one country or all countries",
//     category: "data conversion",
//     tags: ["column change", "address conversion", "location"],
//     trigger: "Column changes",
//     action: "Convert address to location",
//   },
//   {
//     rule: "Every time period sync data from editable Workspace and Table",
//     category: "data synchronization",
//     tags: ["periodic sync", "Workspace", "Table"],
//     trigger: "Time period elapsed",
//     action: "Sync data from Workspace and Table",
//   },
//   {
//     rule: "When an item is created assign someone as assignee",
//     category: "task assignment",
//     tags: ["item creation", "person assignment"],
//     trigger: "Item created",
//     action: "Assign someone as assignee",
//   },
//   {
//     rule: "When this status within group this group changes to this value move the item to group this group and set the status to this value. In addition, copy all people listed in this column to this column",
//     category: "item management",
//     tags: ["status change", "group change", "people copy"],
//     trigger: "Status changes within group",
//     action: "Move item to new group, set status, copy people",
//   },
//   {
//     rule: "When person changes to someone create an event this calendar create or update existing event using this logic",
//     category: "event management",
//     tags: ["person change", "event creation", "calendar"],
//     trigger: "Person changes",
//     action: "Create or update event in calendar",
//   },
//   {
//     rule: "When an event is created in this calendar and only if its is this title create a subitem in this item",
//     category: "item management",
//     tags: ["event creation", "subitem creation", "calendar"],
//     trigger: "Event created in specific calendar with specific title",
//     action: "Create subitem in specified item",
//   },
//   {
//     rule: "When a ticket tag is something in freshdesk create an item and sync future changes from freshdesk",
//     category: "item management",
//     apps: ["Freshdesk"],
//     tags: ["ticket tag", "item creation", "sync changes"],
//     trigger: "Ticket tag set in Freshdesk",
//     action: "Create item and sync future changes",
//   },
//   {
//     rule: "When someone submits data to the project copy this data to monday.com board. Map question names on the next screen using the options from form questions in form",
//     category: "data management",
//     apps: ["monday.com"],
//     tags: ["data submission", "board update", "form mapping"],
//     trigger: "Data submitted to project",
//     action: "Copy data to monday.com board and map questions",
//   },
//   {
//     rule: "Every time period export groups, item names and columns to Google Sheets, create file name in Google folder (set a new file every time)",
//     category: "data export",
//     apps: ["Google Sheets"],
//     tags: ["periodic export", "Google Sheets", "file creation"],
//     trigger: "Time period elapsed",
//     action: "Export data to Google Sheets and create new file",
//   },
//   {
//     rule: "When an item is created via the integration, set the email link to the Link Column",
//     category: "item management",
//     tags: ["item creation", "email link", "integration"],
//     trigger: "Item created via integration",
//     action: "Set email link in Link Column",
//   },
// ];

const data2 = [
  {
    rule: "When status changes and if Status is something, validate and move to Group",
    trigger: "When status changes and if Status is something",
    action: "validate and move to Group",
    full_rule:
      "When status changes and if Status is something validate and move to Group from Mandatory Fields widget.",
    tags: ["status change", "validation", "group move", "mandatory fields"],
    category: "Status Management",
  },
  {
    rule: "When status changes to something and if Status is something, validate and move to Group",
    trigger: "When status changes to something and if Status is something",
    action: "validate and move to Group",
    full_rule:
      "When status changes to something and if Status is something validate and move to Group from Mandatory Fields widget.",
    tags: ["status change", "validation", "group move", "mandatory fields"],
    category: "Status Management",
  },
  {
    rule: "When status changes to something, validate and move to Group",
    trigger: "When status changes to something",
    action: "validate and move to Group",
    full_rule:
      "When status changes to something validate and move to Group from Mandatory Fields widget",
    tags: ["status change", "validation", "group move", "mandatory fields"],
    category: "Status Management",
  },
  {
    rule: "When status changes to something, validate and move to Group if restriction is applied",
    trigger: "When status changes to something",
    action:
      "validate and move to Group if restriction is applied, change the Status to something",
    full_rule:
      "When status changes to something validate and move to Group from Mandatory Fields widget. If a restriction is applied, change the Status to something",
    tags: [
      "status change",
      "validation",
      "group move",
      "restriction",
      "mandatory fields",
    ],
    category: "Status Management",
  },
  {
    rule: "When status changes to something and only if item is in this group, validate and move to Group",
    trigger:
      "When status changes to something and only if item is in this group",
    action:
      "validate and move to Group, if restriction is applied revert the status to its previous label",
    full_rule:
      "When status changes to something and only if item is in this group validate and move to Group from Mandatory Fields widget. If a restriction is applied, revert the status to its previous label.",
    tags: [
      "status change",
      "group condition",
      "validation",
      "group move",
      "restriction",
      "mandatory fields",
    ],
    category: "Status Management",
  },
  {
    rule: "When button clicked, validate and move to Group",
    trigger: "When button clicked",
    action: "validate and move to Group",
    full_rule:
      "When button clicked validate and move to Group from Mandatory Fields widget",
    tags: ["button click", "validation", "group move", "mandatory fields"],
    category: "Button Action",
  },
  {
    rule: "When an item is moved to group, restrict group by columns",
    trigger: "When an item is moved to group",
    action: "restrict group by columns from Mandatory Fields widget",
    full_rule:
      "When an item is moved to group restrict group by columns from Mandatory Fields widget",
    tags: ["item move", "group restriction", "mandatory fields"],
    category: "Group Management",
  },
  {
    rule: "When column changes, validate and move to Group",
    trigger: "When column changes",
    action: "validate and move to Group",
    full_rule:
      "When column changes validate and move to Group from Mandatory Fields widget",
    tags: ["column change", "validation", "group move", "mandatory fields"],
    category: "Column Management",
  },
  {
    rule: "When status changes to something, if restriction is applied revert the status",
    trigger: "When status changes to something",
    action:
      "if restriction is applied, revert the status to its previous label",
    full_rule:
      "When status changes to something if a restriction is applied, revert the status to its previous label.",
    tags: ["status change", "restriction", "status revert"],
    category: "Status Management",
  },
  {
    rule: "When status changes to something, restrict Group by Restriction",
    trigger: "When status changes to something",
    action: "restrict Group by Restriction",
    full_rule: "When status changes to something restrict Group by Restriction",
    tags: ["status change", "group restriction"],
    category: "Status Management",
  },
  {
    rule: "When status changes to something and if Status is something, validate and move to Group by Restriction",
    trigger: "When status changes to something and if Status is something",
    action: "validate and move to Group by Restriction",
    full_rule:
      "When status changes to something and if Status is something validate and move to Group by Restriction",
    tags: ["status change", "validation", "group move", "restriction"],
    category: "Status Management",
  },
];
export const data = data2.map((item) => {
  return {
    ...item,
    trigger: item.trigger || "",
    action: item.action || "",
  };
});
