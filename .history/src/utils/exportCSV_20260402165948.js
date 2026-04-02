// src/utils/exportCSV.js

export const exportJSON = (data, fileName = "data.json") => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
};

export const exportCSV = (data, fileName = "data.csv") => {
  if (!data.length) return;

  const headers = Object.keys(data[0]).join(",");

  const rows = data
    .map((row) =>
      Object.values(row)
        .map((value) => `"${value}"`)
        .join(",")
    )
    .join("\n");

  const csvContent = `${headers}\n${rows}`;

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
};