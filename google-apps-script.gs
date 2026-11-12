/**
 * Space Manager — landing page leads → Google Sheet
 *
 * 1. Create a Google Sheet (e.g. "Space Manager Leads").
 * 2. Extensions → Apps Script → paste this whole file → Save.
 * 3. Deploy → New deployment → type "Web app"
 *      Execute as: Me      Who has access: Anyone
 * 4. Copy the Web app URL into config.js → formEndpoint.
 * 5. (Optional) Put an email in NOTIFY_EMAIL to get an email per lead.
 */
var NOTIFY_EMAIL = ""; // e.g. "sales@spacemanager.in"

var COLUMNS = ["submitted_at","name","phone","project_type","property_type","location","timeline","message",
  "form","utm_source","utm_medium","utm_campaign","utm_content","utm_term","fbclid","gclid","page"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
    var p = (e && e.parameter) || {};
    sheet.appendRow(COLUMNS.map(function (c) { return p[c] || ""; }));

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL,
        "New lead: " + (p.name || "") + " — " + (p.project_type || ""),
        COLUMNS.map(function (c) { return c + ": " + (p[c] || ""); }).join("\n"));
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
